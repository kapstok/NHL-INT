console.log("Operators imported!");

export default function(query, resp, index) {
	switch(query[index]) {
		case "^":
			console.log("toServer");
			window.toServer(query.splice(index + 1, query.length - 1), resp);
			break;
		default:
			return null;
			break;
	}
}
