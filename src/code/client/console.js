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

		this.queries[this.queries.length - 1].setRequest(query.split(" "));
		this.queries[this.queries.length - 1].execute();
	}

	redraw() {
		$('#console').html("");

		this.queries.forEach((query) => {
			$('#console').html(query.print(true) + $('#console').html());
		});
	}

	clear() {
		this.queries = [];
		$('#console').html("");
	}
}
