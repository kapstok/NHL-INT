// When something gets posted to url '/form', it will be parsed here.

var routeQuery = require('../logic/server/parser.js');
var bodyParser = require('body-parser');
var path = require('path');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

let response = {
	queries: [],
	results: []
};

app.post("/form", function (req, res) {
	let request = Object.keys(req.body)[0].split(",");
	response.queries = request;
	response.results = routeQuery(request);
	res.json(response);
	response.queries = response.results = [];
	return;
});
