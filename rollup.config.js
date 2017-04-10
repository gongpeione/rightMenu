import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import uglify from 'rollup-plugin-uglify';
import scss from 'rollup-plugin-scss';

const fs = require('fs');

const babelConf = {
	exclude: 'node_modules/**'
}
const uglifyConf = {};
const scssConf = {
	input: 'src/style.scss',
	output:  function (styles, styleNodes) {
		fs.writeFileSync('dist/style.css', styles);
		fs.writeFileSync('docs/style.css', styles)
	},
};

export default {
	entry: 'src/index.js',
	moduleName: 'RightMenu',
	// dest: 'RightMenu.js',
	// format: 'iife',
	targets: [
		{ dest: 'dist/RightMenu.js', format: 'umd' },
		{ dest: 'docs/RightMenu.js', format: 'umd' }
	],
	plugins: [
		resolve(),
		scss(scssConf),
		babel(babelConf),
		uglify(uglifyConf)
	]
}