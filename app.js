
// REQUIRE EXTERNAL DEPENDENCIES
const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const session = require('express-session');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

// REQUIRE LOCAL MODULES
const { sequelize }  = require('./db/models');
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const coursesRouter = require('./routes/courses');
const teeTimesRouter = require('./routes/tee-times')
const apisRouter = require('./routes/apis/event-handling')
const { restoreUser } = require('./auth')


// INITIALIZE APPLICATION OBJECT //
const app = express();

// DEFINE APP-WIDE CONFIG/MIDDLEWARE //
app.set('view engine', 'pug');
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

const store = new SequelizeStore({
  db: sequelize,
});
app.use(
  session({
    secret: 'superSecret',
    store,
    resave: false,
    saveUninitialized: false,
  })
  );
store.sync();

app.use(restoreUser);


// ROUTING //
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/courses', coursesRouter);
app.use('/tee-times', teeTimesRouter);
app.use('/api', apisRouter);




// DEFINE APPLICATION ERROR HANDLING //
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  console.error(err);
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});



module.exports = app;
