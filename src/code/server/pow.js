// args[1] = number
// args[2] = power of..

function execute (args) {
	let result = args[1];

	if(args[2] == 1)
		return result;
	else if(args[2] < 1)
		return 1;

	for(let i = 0; i < args[2] - 1; i++)
		result *= args[1];

	return String(result);
}

module.exports.execute = execute;
