import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';

export default {
	input: 'javascript/main.js',
	output: {
		file: 'public/javascript/main.js',
		name: 'bundle',
		format: 'iife',
		sourcemap: true
	},
	plugins: [
		resolve(),
		commonjs()
	]
};
