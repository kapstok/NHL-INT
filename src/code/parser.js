console.log("Parser imported!");

window.queries = [];
window.qIndex = 0;

window.Parse = function() {
	$(document).ready(function(){
		window.queries[window.qIndex] = new Query();
		window.queries[window.qIndex].append($("#input").val());
		let result;
		let regex = /(\S+)\s*/g;
		while(result = regex.exec($("#input").val()))
			window.queries[window.qIndex].append(result[1]);

		console.log(window.queries[window.qIndex].query);

		window.queries[window.qIndex].execute(0);
		window.queries[window.qIndex].print(true);

		$("#input").val("");
		window.qIndex++;
		return false;
	});
	return false;
}

window.toServer = function(query) {
	console.log("Sending request..");
	let request = new XMLHttpRequest();
	request.onreadystatechange = function() {
		if (window.readyState == 4 && window.status == 200)
			return request.responseText;
	};
	request.open("POST", "/form?r=" + Math.random(), true); // Random param to force not to use caching.
	request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	request.send(query);
}
