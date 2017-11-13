var path = require('path');

module.exports = {
	// Note: entryfile should always be last element in the array.
	entry: ["./logic/query.js","./logic/console.js","./logic/parser.js", "./logic/entry.js"],
	devtool: 'inline-source-map',
	module: {
		rules: [{
			test: /\.tsx?$/,
			use: 'ts-loader',
			exclude: '/node_modules/'
		}]
	},
	output: {
		filename: "bundle.js",
		path: path.resolve(__dirname, "dist")
	},
	resolve: {
		extensions: [".tsx", ".ts", ".js"],
		alias: {
			bundle: path.resolve(__dirname, 'dist/bundle.js')
		}
	},
	watch: true,
	watchOptions: {
		ignored: /node_modules/
	}
};
