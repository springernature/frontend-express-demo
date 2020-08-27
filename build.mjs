/* eslint-disable no-async-promise-executor */
import fs from 'fs';
import fse from 'fs-extra';
import rollup from 'rollup';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import babel from "@babel/core";
import stylelint from 'stylelint';
import CLIEngine from "eslint";
import {terser} from 'rollup-plugin-terser/rollup-plugin-terser.mjs';

const logger = {
  success: (msg) => {
    console.log('\x1b[32m', `✅ ${msg}`, '\x1b[0m');
  },
  failure: (error) => {
    console.error('\x1b[31m', `❌ ${error}`, '\x1b[0m');
  },
  info: (msg) => {
    console.log(`${msg}\n--------------------`);
  },
  swanSays: (msg) => {
    console.log(`\n${msg}`);
  }
};

const cleanPaths = ['public/javascripts'];
const jsRollupPaths = [{ source: "./javascripts/main.js", destination: "./public/javascripts/main.js" }];
const jsBabelPaths = [{ source: "./public/javascripts/main.js", destination: "./public/javascripts/main-legacy.js" }];

// eslint-disable-next-line no-extend-native
async function asyncForEach(array, callback) {
  for (let index = 0; index < array.length; index++) {
    await callback(array[index], index, array);
  }
}

function clean() {
  logger.swanSays(`Remove dist folders`);
  return new Promise(async (resolve, reject) => {
    await asyncForEach(cleanPaths, async (path, index) => {
      await fse.remove(path)
        .catch(err => {
          return reject(err);
        });
    });
    logger.success('Clean task successful');
    resolve();
  });
}

function rollupJS() {
  logger.swanSays(`Compiling browser JavaScript`);
  const rollupResolve = resolve;
  return new Promise(async (resolve, reject) => {
    try {
      await asyncForEach(jsRollupPaths, async scriptFile => {
        const inputOptions = {
          input: scriptFile.source,
          plugins: [
            rollupResolve(),
            commonjs(),
            terser()
          ]
        };
        const outputOptions = {
          file: scriptFile.destination,
          name: 'bundle',
          format: 'iife',
          sourcemap: true
        };
        const bundle = await rollup.rollup(inputOptions);
        await bundle.generate(outputOptions);
        await bundle.write(outputOptions);
      });
      logger.success("Build JS task completed");
      return resolve();
    } catch (err) {
      return reject(err);
    }
  });
}

function transpileJS() {
  logger.swanSays(`Transpiling browser JavaScript`);
  const babelTransformOptions = {
    root: '.',
    presets: [
      [
        "@babel/preset-env",
        {
          useBuiltIns: "entry",
          corejs: '3.6'
        }
      ]
    ]
  };
  return new Promise(async (resolve, reject) => {
    try {
      await asyncForEach(jsBabelPaths, async scriptFile => {
        const result = babel.transformFileSync(scriptFile.source, babelTransformOptions);
        fs.writeFileSync(scriptFile.destination, result.code.toString());
      });
      logger.success("Transpile JS task successful");
      return resolve();
    } catch (err) {
      return reject(err);
    }
  });
}

function lintJS() {
  logger.swanSays(`Checking code quality`);
  return new Promise((resolve, reject) => {
    try {
      let errorCount = 0;
      const cli = new CLIEngine.CLIEngine({});

      const report = cli.executeOnFiles(["./javascripts/"]);
      report.results.forEach((result, index) => {
        if (result.messages.length) {
          errorCount++;
          const messages = result.messages.map((message, index) => ` ${parseInt(index + 1)}. ${message.message} [${result.filePath}:${message.line}:${message.column}]\nRule: ${message.ruleId}\n`);
          logger.failure(` File: ${result.filePath} \nErrors: ${result.errorCount} \nWarnings: ${result.warningCount}\n${messages}\n---------------------------`);
        }
        if (index == report.results.length - 1) {
          if (errorCount === 0) {
            logger.success("Lint JS task successful");
            return resolve();
          } else {
            // eslint-disable-next-line prefer-promise-reject-errors
            return reject('Code quality issues found in JavaScript');
          }
        }
      });
    } catch (err) {
      logger.failure(err);
      return reject(err);
    }
  });
}

function lintSass() {
  return new Promise((resolve, reject) => {
    stylelint
      .lint({
        files: "public/stylesheets/**/*.scss"
      })
      .then(function (data) {
        if (data.errored) {
          let issuesFound = 0;
          const errorOutputArray = JSON.parse(data.output).filter(output => output.errored);
          errorOutputArray.forEach(result => {
            result.warnings.forEach(warning => {
              issuesFound++;
              const msg = `${warning.severity}: ${warning.text}\n${result.source}:${warning.line}:${warning.column}\n`;
              logger.failure(msg);
            });
          });
          const err = `${issuesFound} code quality issues found in SASS\n`;
          return reject(err);
        } else {
          logger.success("Lint SASS task successful");
          return resolve();
        }
      })
      .catch(function (err) {
        logger.failure(err);
        return reject(err);
      });
  });
}

function lint() {
  return lintJS()
    .then(lintSass)
    .catch(e => {
      logger.failure(e);
      process.exit(1);
    });
}

function build() {
  const start = new Date().getTime();
  logger.info(`Building frontend`);
  clean()
    .then(lint)
    .then(rollupJS)
    .then(transpileJS)
    .then(() => {
      const stop = new Date().getTime();
      const timeItTook = (stop - start) / 1000;
      logger.swanSays(`✨ Build complete in ${timeItTook}s\n\n`);
    })
    .catch(logger.failure);
}

const cliArgument = process.argv[2];

switch (cliArgument) {
  case "lint":
    lint()
      .catch(logger.failure);
    break;
  case "lint-sass":
    lintSass()
      .catch(logger.failure);
    break;
  case "clean":
    clean()
      .catch(logger.failure);
    break;
  case "roll-up":
    rollupJS()
      .catch(logger.failure);
    break;
  case "transpile":
    transpileJS()
      .catch(logger.failure);
    break;
  case "build-js":
    rollupJS()
      .then(transpileJS)
      .catch(logger.failure);
    break;
  default:
    build();
}
