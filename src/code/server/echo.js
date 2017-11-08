// echoes all arguments (except 'echo' itself, ofc)

function execute (args) {
	let result = "";

	for (let i = 1; i < args.length; i++) {
		result += args[i] + " ";
	}

	return result;
}

module.exports.execute = execute;
