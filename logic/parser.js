const clientPath = "./progs/";

export default function(query) {
	let id = Math.random();
	console.log("ID: " + id);

	let script = {};
	
	script.execute = function(query) {
		let prog;
		let subres = subresult;

		subresult = subquery = [];
		prog = require(clientPath + query[0] + '.js');

		return prog.execute(query.concat(subres));
	};

	let superquery = []; // Copy of query to prevent changes on query.
	let subquery = []; // subquery is the part of superquery that is being parsed in this function.
	let subresult = [];

	query.request.forEach((param) => { superquery.push(param); });

	superquery.forEach((param) => {
		
		if(param == "|")
			subresult = script.execute(subquery).split(' ');
		else
			subquery.push(param);

	});
	
	query.response.push(script.execute(subquery));

	console.log("Exit id: " + id);
	window.shc.redraw();
}
