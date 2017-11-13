var express = require('express');
app = express();
var path = require('path');

var terminal = require('./routes/terminal');

// view engine setup
app.set('views', path.join(__dirname, 'view/templates'));
app.set('view engine', 'pug');

app.use('/bundle', express.static(__dirname + '/dist/bundle.js'));
app.use('/style', express.static(__dirname + '/view'));
app.use('/jquery', express.static(__dirname + '/node_modules/jquery/dist/jquery.js'));

app.use('/', terminal);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
	var err = new Error('Not Found');
	err.status = 404;
	next(err);
});

// error handler
app.use(function(err, req, res, next) {
	// set locals, only providing error in development
	res.locals.message = err.message;
	res.locals.error = req.app.get('env') === 'development' ? err : {};

	// render the error page
	res.status(err.status || 500);
	res.render('error');
});

// 'Mainloop'
app.listen(3000, function() {
	console.log("#### Server gestart op http://localhost:3000 ####");
});

module.exports = app;
