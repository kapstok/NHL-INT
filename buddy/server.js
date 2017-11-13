// When something gets posted to this buddy, it will be parsed here.
var routeQuery = require('./parser.js');
var bodyParser = require('body-parser');
var path = require('path');
var cors = require('cors');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

let response = {
	queries: [],
	results: []
};

app.options("/", cors())
app.post("/", cors(), function (req, res) {
	let request = Object.keys(req.body)[0].split(",");
	response.queries = request;
	response.results = routeQuery(request);
	res.json(response);
	response.queries = response.results = [];
	return;
});
