import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';

export default {
	input: 'javascripts/main.js',
	output: {
		file: 'public/javascripts/main.js',
		name: 'bundle',
		format: 'iife',
		sourcemap: true
	},
	plugins: [
		resolve(),
		commonjs()
	]
};
