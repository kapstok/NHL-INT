console.log("query imported!");
var info = "";

import parseOps from './client/operators.js';

export default class {
	constructor() {
		this.request = [];
		this.response = [];
		this.ptr = 0;
	}

	append(command) {
		this.request.push(command);
	}

	execute(index) {
		parseOps(this.request, this.response, index+1);
	}

	print(verbose = false) {
		if(verbose) {
			info += "<b style='color: #FFB505;'>Q: </b>";
      
			for(let i = 1; i < this.request.length; i++)
				info += this.request[i] + " ";

			info += "<br><b style='color: #20D644;'>R: </b>";
		}

		for(let i = 0; i < this.response.length; i++)
			info += this.response[i] + " ";

		info += "<br>";
		return info;
	}
}
