import $ from "jquery";

console.log("query imported!");

class Query {
	constructor() {
		this.query = [];
		this.response = [];
		this.ptr = 0;
	}

	append(command) {
		this.query.push(command);
	}

	execute(index) {
		this.query[index];
	}

	execute() {
		for(let i = 0; i < this.query.length; i++) {
			this.execute(i);
		}
	}

	print(verbose = false) {
		this.response.push("antwoord"); // Debug

		let info = "";
		if(verbose) {
			info = "<b style='color: #FFB505;'>Q: </b>";
			for(let i = 1; i < this.query.length; i++)
				info += this.query[i] + " ";
			info += "<br><b style='color: #20D644;'>R: </b>";
		}

		for(let i = 0; i < this.response.length; i++)
			info += this.response[i] + " ";

		info += "<br>";
		document.getElementById("console").innerHTML = info + document.getElementById("console").innerHTML;
	}

	clear() {
		document.getElementById("console").innerHTML = "";
	}
}

window.Query = Query;
