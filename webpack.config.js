const path = require('path');

module.exports = {
	/*
		The app starts from views/terminal.ejs. This should
		not require any dependencies, except for the Webpack
		entry point.
	*/
	entry: ["./src/code/query.js","./src/code/client/console.js","./src/code/client/operators.js", "./src/code/parser.js"],
	output: {
		filename: "bundle.js", // Tmp name.
		path: path.resolve(__dirname, "dist")
	},
	resolve: {
		alias: {
			bundle: path.resolve(__dirname, 'dist/bundle.js')
		}
	}
};
