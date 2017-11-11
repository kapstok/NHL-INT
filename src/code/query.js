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

	toServer() {
		let that = this;
		console.log("Sending request..");
		let xhttp = new XMLHttpRequest();
		xhttp.onreadystatechange = function() {
			if (xhttp.readyState == 4 && xhttp.status == 200) {
				let json = JSON.parse(xhttp.responseText);
				that.request = [];
				json.results.forEach((r) => {
					that.request.push(r);
					console.log("Resp:");console.log(that.request);
				});
				that.execute();
			}
		};
		xhttp.open("POST", "/form?r=" + Math.random(), true); // Random param to force not to use caching.
		xhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
		console.log("request: " + this.request);
		xhttp.send(this.request);
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
