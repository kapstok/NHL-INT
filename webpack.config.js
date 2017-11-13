const path = require('path');

module.exports = {
	// Note: entryfile should always be last element in the array.
	entry: ["./logic/query.js","./logic/console.js","./logic/parser.js", "./logic/entry.js"],
	output: {
		filename: "bundle.js",
		path: path.resolve(__dirname, "dist")
	},
	resolve: {
		alias: {
			bundle: path.resolve(__dirname, 'dist/bundle.js')
		}
	}
};
