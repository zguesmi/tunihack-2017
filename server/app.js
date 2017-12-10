var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var index = require('./routes/index');
var api = require('./routes/api');
var Web3 = require('web3');
var web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'));
var deployContract = require('./routes/deployContract');
var fs = require('fs');
var app = express();
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(cookieParser());

deployContract().then((address,err) => {
  if (err) {
    console.log(err + "  err");
  }
  fs.writeFile("./address", address, function (err) {
    if (err) {
      return console.log(err);
    }

    console.log("The file was saved!");
  });
});
app.use('/', index);
app.use('/api', api);


// catch 404 and forward to error handler
app.use(function (req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.json({
    error: true,
    msg: err.message
  });
});

module.exports = app;