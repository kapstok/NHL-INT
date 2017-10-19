console.log("Operators imported!");

window.parseOps = function(query, index) {
	console.log(query[index]);
	switch(query[index]) {
		case "^":
			console.log("toServer");
			let tmp = query;
			return window.toServer(tmp.splice(index + 1, query.length - 1));
			break;
		default:
			console.log(query[index]);
			return null;
			break;
	}
}
