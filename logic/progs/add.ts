// Returns the sum of args[1] and args[2].

import IProgram from "./IProgram";

class add implements IProgram {
	constructor() {}

	execute(args: string[]): string {
		let result: number;

		result = Number(args[1]);
		result += Number(args[2]);

		return String(result);
	}
}

module.exports = add;
