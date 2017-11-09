console.log("query imported!");

import parseOps from './client/operators.js';

export default class {
	constructor() {
		this.request = [];
		this.response = [];
	}

	setRequest(command) {
		this.command = command;
		command.forEach((cmd) => { this.request.push(cmd); });
	}

	execute() {
		parseOps(this);
	}

	print(verbose = false) {
		let info = "";
		if(verbose) {
			info += "<b style='color: #FFB505;'>Q: </b>";

			for(let i = 0; i < this.request.length; i++)
				info += this.request[i] + " ";

			info += "<br><b style='color: #20D644;'>R: </b>";
		}

		for(let i = 0; i < this.response.length; i++)
			info += this.response[i] + " ";

		info += "<br>";
		return info;
	}
}
