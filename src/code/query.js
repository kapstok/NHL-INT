import $ from "jquery";

console.log("query imported!");

class Query {
	constructor() {
		this.query = [];
		this.response = [];
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

	print(index, verbose = false) {
		console.log(this.query.length);
		if(verbose) {
			//for(let i = 0; i < this.query.length; i++)
				/*$("#console")*/document.getElementById("console").innerHTML =
					"<b style='color: #FFB505;'>Q: </b>" + this.query[index] + "<br><b style='color: #20D644;'>R: </b>" + document.getElementById("console").innerHTML;
		}

		document.getElementById("console").innerHTML = "<br>" + document.getElementById("console").innerHTML;
	}

	clear() {
		document.getElementById("console").innerHTML = "";
	}
}

window.Query = Query;
