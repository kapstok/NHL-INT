const path = require('path');

module.exports = {
	// Note: entryfile should always be last element in the array.
	entry: ["./logic/client/query.js","./logic/client/console.js","./logic/client/parser.js", "./logic/client/entry.js"],
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
