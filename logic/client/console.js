import Query from './query.js';

const regex = /(\S+)\s*/g;

export default class {
	constructor() {
		this.queries = [];
	}

	execute(query) {
		this.queries.push(new Query());
		
		if(query.length > 1)
			this.queries[this.queries.length - 1].request = query.split(' ');

		this.queries[this.queries.length - 1].toServer();
	}

	redraw() {
		$('#console').html('');

		this.queries.forEach((query) => {
			$('#console').html(query.print(true) + $('#console').html());
		});
	}

	clear() {
		this.queries = [];
		redraw();
	}
}
