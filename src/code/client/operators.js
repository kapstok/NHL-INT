console.log("Operators imported!");

const clientPath = "./";

export default function(query) {
	let id = Math.random();
	console.log("ID: " + id);

	let script = null;
	let querynum = -1;
	let serverquery = false;
	let clientOnly = true;

	if(query.request[0] != "^")
		script = require(clientPath + query.request[0] + '.js');

	let superquery = []; // Copy of query to prevent changes on query.
	let subquery = []; // subquery is the part of superquery that is being parsed in this function.
	let subresults = [];
	let superresult; // superresult is necessary due to bugs occuring when returning from .forEach function.

	query.request.forEach((param) => { superquery.push(param); });

	superquery.forEach((param) => {
		switch(param) {
			case "^":
				serverquery = !serverquery;
				clientOnly = false;

				if(!serverquery) {
					console.log("??????/");
					subquery.push(param);
					routeQuery(subquery, query.response, querynum);
//					subquery = [];
				}
				break;
			case "|":
				if(serverquery) {
					subquery.push(param);
					break;
				}
				console.log("OP found!");
				routeQuery(subquery, query.response, querynum);
				break;
			default:
				subquery.push(param);
				console.log("add " + param);
				break;
		}
	});

	if(serverquery)
		subquery.push("^");

	if(clientOnly)
		routeQuery(subquery, query.response, querynum);
	else
		window.toServer(subquery, query.response, -1);

	console.log("subresultas");console.log(subresults);

	console.log("Exit id: " + id);
	window.shc.redraw();
}

function routeQuery(subquery, response, id) {
	let script;

	id++;

	console.log("routeQuery " + id);console.log(subquery);console.log(response);

	if(subquery[subquery.length-1] == "^") {
//		window.toServer(subquery, response, id);
	}
	else if(subquery[0] == "|") {
		console.log("######");
		subquery.shift();
		subquery.splice(subquery.length, 0, response);
		response = [];
		routeQuery(subquery, response, -1);
	}
	else if(subquery[0] != undefined){
		script = require(clientPath + subquery[0] + ".js");
		response.splice(id, 0, script.execute(subquery));
	}

	console.log("end routeQuery " + id);console.log(subquery);console.log(response);
}
