// echoes all arguments (except for 'echo' itself, ofc)

import IProgram from "./IProgram";

class echo implements IProgram {
	constructor() {}

	execute(args: string[]): string {
		let result: string[] = [];

		/*
			Using shift() could lead to unexpected results when changing sourcecode.
			Therefore, a copy of args is made with the first argument excluded
			(which is 'echo').
		*/

		for(let i: number = 1; i < args.length; i++)
			result.push(args[i]);

		return result.join(' ');
	}
}

module.exports = echo;
