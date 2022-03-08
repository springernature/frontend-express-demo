import {nodeResolve} from '@rollup/plugin-node-resolve';
import {babel} from '@rollup/plugin-babel';

export default {
	input: './js/main.js',
	output: {
		file: './public/js/main.js',
		name: 'bundle',
		format: 'iife',
		sourcemap: true
	},
	plugins: [
		nodeResolve(),
		babel({
			babelHelpers: 'bundled' 
		})
	]
};
