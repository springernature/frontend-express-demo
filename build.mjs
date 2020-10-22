/* eslint-disable no-async-promise-executor */
import fse from 'fs-extra';
import stylelint from 'stylelint';
import CLIEngine from "eslint";

const logger = {
  success: (msg) => {
    console.log('\x1b[32m', `✅ ${msg}`, '\x1b[0m');
  },
  failure: (error) => {
    console.trace('\x1b[31m', `❌ ${error}`, '\x1b[0m');
  },
  info: (msg) => {
    console.log(`${msg}\n--------------------`);
  },
  swanSays: (msg) => {
    console.log(`\n${msg}\n`);
  }
};

const cleanPaths = ["public/javascript", "public/stylesheets", "public/images"];
const copyPaths = [{ source: "./images", destination: "./public/images" }];

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

function copy(args) {
  logger.swanSays(`Copying files to dist`);
  return new Promise((resolve, reject) => {
    copyPaths.forEach((path, index) => {
      try {
        fse.copySync(path.source, path.destination);
        logger.success(`"${path.source}" copied`);
        if (index === copyPaths.length - 1) {
          resolve();
        }
      } catch (err) {
        return reject(err);
      }
    });
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
        files: "stylesheets/**/*.scss"
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
    .then(copy)
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
  default:
    build();
}
