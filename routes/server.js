// When something gets posted to url '/form', it will be parsed here.

var bodyParser = require('body-parser');
var path = require('path');
const serverPath = '../src/code/server/';

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

let response = {
	queries: [],
	results: []
};

function routeQuery(query) {
	let id = Math.random();
	console.log("ID: " + id);

	let script = require(serverPath + query[0] + '.js');

	let superquery = []; // Copy of query to prevent changes on query.
	let subquery = []; // subquery is the part of superquery that is being parsed in this function.
	let superresult, subresult; // superresult is necessary due to bugs occuring when returning from .forEach function.

	query.forEach((param) => { superquery.push(param); });

	superquery.forEach((param) => {
		switch(param) {
			case "^":
				subresult = script.execute (subquery);
				return [superquery.splice(0, subquery.length), subresult];
				break;
			case "|":
				subresult = script.execute (subquery);
				let restquery = superquery.splice(0, 1);
				restquery.push(subresult);
				console.log("restquery:");console.log(restquery);

				for(
					let args = query.length - (subquery.length + 2); args > 0; args--
				) {
					restquery.push(query[query.length - args]);
				}

				console.log("query:");console.log(query);
				console.log("return from " + id);
				superresult = routeQuery(restquery);
				break;
			default:
				subquery.push(param);
				console.log(param);
				break;
		}
	});
	console.log("subquery :");console.log(subquery + id);

	if(superresult == null)
		superresult = script.execute(subquery);

	return superresult;
}

app.post("/form", function (req, res) {
	let request = Object.keys(req.body)[0].split(",");
	response.queries = request;
	response.results.push(routeQuery(request));
	console.log(response);
	res.locals.title = "???";
	res.json(response);
	response.queries = response.results = [];
	return;
});
