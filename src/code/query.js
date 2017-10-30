//import $ from "jquery";

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
		let r = window.parseOps(this.query, index+1);
		if(r == null)
			this.response.push("antwoord"); // Debug
		else
			this.response.push(r);
	}
/*
	execute() {
		console.log(this.query.length);
//		for(var i = 0; i < this.query.length; i++) {
			this.execute(0);//i);
//		}
	}
*/
	print(verbose = false) {
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
		$("#console").html(info + $("#console").html());
	}

	clear() {
		$("#console").html("");
	}
}

window.Query = Query;
