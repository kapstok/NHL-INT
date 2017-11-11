console.log("Parser imported!");

import Console from './client/console.js';

window.shc = new Console();

window.Parse = function() {
	$(document).ready(function(){
		shc.execute($("#input").val());
		$("#input").val("");
		return false;
	});
	return false;
}
/*
window.toServer = function(request, response, id) {
	console.log("Sending request..");
	let xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		if (xhttp.readyState == 4 && xhttp.status == 200) {
			let json = JSON.parse(xhttp.responseText);
			json.results.forEach((r) => {
				response.splice(id++, 0, r);
				console.log("Resp:");console.log(response);
			});
			shc.execute(response);
			shc.redraw();
		}
	};
	xhttp.open("POST", "/form?r=" + Math.random(), true); // Random param to force not to use caching.
	xhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	console.log("request: " + request);
	xhttp.send(request);
}*/
