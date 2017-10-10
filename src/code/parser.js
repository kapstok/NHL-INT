import $ from "jquery";

console.log("Parser imported!");

window.queries = [];
window.qIndex = 0;

window.Parse = function() {
	$(document).ready(function(){
		console.log(window.queries[window.qIndex] = new Query());
		console.log(window.queries[window.qIndex]);
		window.queries[window.qIndex].append(/*$("#input")*/document.getElementById("input").value);
		let result;
		let regex = /(\S+)\s*/g;
		while((result = regex.exec(/*$("#input")*/document.getElementById("input").value)))
			window.queries[window.qIndex].append(result[1]);

		console.log(window.queries[window.qIndex].query);
		window.queries[window.qIndex].print(true);
		/*$("#input")*/document.getElementById("input").value = "";
		window.qIndex++;
		return false;
	});
	return false;
}

window.toServer = function(query) {
	let request = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		if (window.readyState == 4 && window.status == 200)
			return xhttp.responseText;
	};
	xhttp.open("POST", "/server?r=" + Math.random(), true);
	xhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	xhttp.send(query);
}
