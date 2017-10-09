import $ from "jquery";

console.log("Parser imported!");

window.Parse = function() {
	$(document).ready(function(){
		query.append(/*$("#input")*/document.getElementById("input").value);
		query.print(query.query.length - 1, true);
		/*$("#input")*/document.getElementById("input").value = "";
		return false;
	});
	return false;
}
