// When something gets posted to url /form, it will be parsed here.

var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var response = {
	queries: [],
	results: ["hoi"]
};

app.post("/form", function (req, res) {
	response.queries = Object.keys(req.body);
	console.log(response);
	res.locals.title = "???";
	res.json(response);
	return;
});
