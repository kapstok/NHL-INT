const path = require('path');

module.exports = {
	/*
		The app starts from views/terminal.ejs. This should
		not require any dependencies, except for the Webpack
		entry point.
	*/
	entry: ["./src/code/parser.js","./src/code/query.js"],
	output: {
		filename: "bundle.js", // Tmp name.
		path: path.resolve(__dirname, "dist")
	}
};
