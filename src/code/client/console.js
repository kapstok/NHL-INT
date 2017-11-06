console.log("Console loaded");

import Query from '../query.js';

const regex = /(\S+)\s*/g;

export default class {
	constructor() {
		this.queries = [];
	}

	execute(query) {
		let result;

		this.queries.push(new Query());
		this.queries[this.queries.length - 1].append(query);

		while(result = regex.exec(query))
			this.queries[this.queries.length - 1].append(result[1]);

		console.log(this.queries[this.queries.length - 1].request);

		this.queries[this.queries.length - 1].execute(0);
//		window.queries[window.qIndex].print(true);
	}

	redraw() {
		this.queries.forEach((query) => {
			console.log(query);
			$('#console').html(query.print(true) + $('#console').html());
		});
	}

	clear() {
		$('#console').html("");
	}

	debug() {
		setTimeout(() => {
		$('#console').html("Console: Ping!" + $('#console').html());
		}, 5000);
	}
}
