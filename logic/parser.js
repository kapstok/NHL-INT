const clientPath = './progs/';

function execute(query) {
	let program, prog;

	prog = require(clientPath + query[0] + '.ts');
	program = new prog();

	return program.execute(query);
}

export default function(query) {
	let id = Math.random();
	console.log("ID: " + id);

	let superquery = []; // Copy of query to prevent changes on query.
	let subquery = []; // subquery is the part of superquery that is being parsed in this function.
	let subresult = [];

	query.request.forEach((param) => { superquery.push(param); });

	superquery.forEach((param) => {
		
		if(param == "|") {
			subresult = execute(subquery.concat(subresult)).split(' ');
			subquery = [];
		}
		else
			subquery.push(param);

	});
	
	query.response.push(execute(subquery.concat(subresult)));

	console.log("Exit id: " + id);
	shc.redraw();
}
