var express = require('express');
app = express();
var path = require('path');

var server = require('./server');

// view engine setup. Useless for this buddy, but necessary to prevent errors.
app.set('views', path.join(__dirname));
app.set('view engine', 'pug');

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
app.listen(3100, function() {
	console.log("#### Buddy gestart op http://localhost:3100 ####");
});

module.exports = app;
