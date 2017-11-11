// echoes all arguments (except for 'echo' itself, ofc)

function execute (args) {
	let result = [];

	/*
		Using shift() could lead to unexpected results when changing sourcecode.
		Therefore, a copy of args is made with the first argument excluded
		(which is 'echo').
	*/

	for(let i = 1; i < args.length; i++)
		result.push(args[i]);

	return result.join(' ');
}

module.exports.execute = execute;
