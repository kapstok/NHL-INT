import Console from './console.js';

window.shc = new Console();

window.Parse = function() {
	$(document).ready(function(){
		shc.execute($("#input").val());
		$("#input").val("");
	});
	return false;
}
