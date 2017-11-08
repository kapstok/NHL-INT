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

window.toServer = function(request, response, query) {
	console.log("Sending request..");
	let xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		if (xhttp.readyState == 4 && xhttp.status == 200) {
			let json = JSON.parse(xhttp.responseText);
			json.queries.forEach((q) => {
				query.push(q);
			});
			json.results.forEach((r) => {
				response.push(r);
			});
			shc.redraw();
		}
	};
	xhttp.open("POST", "/form?r=" + Math.random(), true); // Random param to force not to use caching.
	xhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	xhttp.send(request);
}
