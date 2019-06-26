var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cors = require('cors');
const mongoose = require('mongoose');
const axios = require('axios');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var prmRouter = require('./routes/prm-routes');

mongoose.connect('mongodb://localhost:27017/mydb', 
{
  useNewUrlParser: true}
);

mongoose.connection.on('once', () => {
  console.log('COnnected to DB!!!');
})

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors())

app.use('/', indexRouter);
app.use('/users', usersRouter);

// API Routing for prm-details
app.use('/api', prmRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
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

// axios.post('/api/insert', {}).then(result => {
//   console.log(result);
//   // res.render('index', { title: 'Express' });
// }).catch(err => {
//   console.log('Error Logging: ');
//   console.error(err.stack)
// });

module.exports = app;
