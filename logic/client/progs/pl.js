// Load profile client-side.

var profile = {};

function execute(args) {

		$('#uploader').change(function(data) {

			let reader = new FileReader();
			reader.onload = (function(file) {
				profile = JSON.parse(reader.result);
				console.log(profile);
				eval(profile.progs[1]);
				console.log(eval("something();"));
			});
			reader.readAsText(data.target.files[0]);
		});

		$('#uploader').click();
		return "Please select profile.";
}

module.exports.execute = execute;
module.exports.profile = profile;
