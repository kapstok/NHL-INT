const serverPath = './progs/';

function routeQuery(query) {
	let id = Math.random();
	console.log("ID: " + id);

	let clientquery = true;

	let script = {};
	
	script.execute = function(query) {
		let prog;
		let subres = subresult;

		subresult = subquery = [];
		prog = require(serverPath + query[0] + '.js');

		return prog.execute(query.concat(subres));
	};

	let subquery = []; // subquery is the part of superquery that is being parsed in this function.
	let superresult = []; // superresult is necessary due to bugs occuring when returning from .forEach function.
	let subresult = [];

	query.forEach((param) => {
		switch(param) {
			case "^":
				clientquery = !clientquery;

				// Do nothing with the previous (sub)query if it was a query for the client.
				if(!clientquery)
					break;

				// Otherwise, execute the previous (sub)query and push it's result to 'superresult'.
				superresult.push(script.execute(subquery));
				break;
			case "|":
				if(clientquery)
					superresult.push(param);
				else {
					subresult = script.execute(subquery).split(' ');
				}
				break;
			default:
				if(clientquery)
					superresult.push(param);
				else
					subquery.push(param);
				break;
		}
	});

	if(subquery.length > 0)
		superresult.push(script.execute(subquery));

	return superresult;
}

module.exports = routeQuery;
