import Console from './console.js';

global.shc = new Console();

global.Parse = function() {
	$(document).ready(function(){
		shc.execute($("#input").val());
		$("#input").val("");
	});
	return false;
}
