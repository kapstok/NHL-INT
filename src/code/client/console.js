console.log("Console loaded");

import Query from '../query.js';

const regex = /(\S+)\s*/g;

export default class {
	constructor() {
		this.queries = [];
	}

	execute(query) {
		if(query.length > 1) {
			this.queries.push(new Query());

			this.queries[this.queries.length - 1].setRequest(query.split(" "));
			this.queries[this.queries.length - 1].toServer();
		}
		else if(typeof query === 'string' || query instanceof String) {
			this.queries.push(new Query());

			this.queries[this.queries.length - 1].toServer();
		}
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
