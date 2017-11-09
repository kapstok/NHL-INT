console.log("Operators imported!");

const clientPath = "./";

export default function(query) {
	let id = Math.random();
	console.log("ID: " + id);

	let script = null;

	if(query.request[0] != "^")
		script = require(clientPath + query.request[0] + '.js');

	let superquery = []; // Copy of query to prevent changes on query.
	let subquery = []; // subquery is the part of superquery that is being parsed in this function.
	let superresult, subresult; // superresult is necessary due to bugs occuring when returning from .forEach function.

	query.request.forEach((param) => { superquery.push(param); });

	superquery.forEach((param) => {
		switch(param) {
			case "^":
				superquery.shift();
				console.log("superquery: " + superquery);
				console.log("subquery: " + subquery);
				window.toServer(superquery, query.response);
				superresult = "";
				break;
			case "|":
				subresult = script.execute (subquery);
				let restquery = superquery.splice(0, 1);
				restquery.push(subresult);
				console.log("restquery:");console.log(restquery);

				for(
					let args = query.request.length - (subquery.length + 2); args > 0; args--
				) {
					restquery.push(query.request[query.request.length - args]);
				}

				console.log("query:");console.log(query.request);
				console.log("return from " + id);
				superresult = routeQuery(restquery);
				break;
			default:
				subquery.push(param);
				console.log(param);
				break;
		}
	});

	if(superresult == null && script != null)
		superresult = script.execute(subquery);

	console.log("Exit id " + id);
	query.response.push(superresult);
	window.shc.redraw();
}
