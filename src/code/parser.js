console.log("Parser imported!");

import Console from './client/console.js';

window.queries = [];
window.qIndex = 0;
let shc = new Console();

window.Parse = function() {
	$(document).ready(function(){
		shc.execute($("#input").val());
		$("#input").val("");
		return false;
	});
	return false;
}

window.toServer = function(query, response) {
	console.log("Sending request..");
	let request = new XMLHttpRequest();
	request.onreadystatechange = function() {
		if (request.readyState == 4 && request.status == 200) {
			let result = JSON.parse(request.responseText);
			result.queries.forEach((q) => {
				query.push(q);
			});
			result.results.forEach((r) => {
				response.push(r);
			});
			shc.redraw();
		}
	};
	request.open("POST", "/form?r=" + Math.random(), true); // Random param to force not to use caching.
	request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	request.send(query);
}
