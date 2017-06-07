var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var Shop = require('./db/models/shop')
//var ws = require('./websocket_server.js')
var expressSession = require('express-session')
var mongoStore = require('connect-mongo')(expressSession)

var index = require('./routes/index');
var users = require('./routes/users');
var apiRoutes = require('./routes/apiRoutes');

var app = express();

//设置session信息
app.use(expressSession({
    resave: false,
    secret: 'SECRET',
    saveUninitialized: true,
    cookie: { maxAge: 60*10000 },
    store: new mongoStore({
        mongooseConnection: mongoose.connection
    })
}));

//跨域访问设置
app.all('*', function(req, res, next) {
res.header("Access-Control-Allow-Origin", "*");
res.header("Access-Control-Allow-Headers", "X-Requested-With");
res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
res.header("X-Powered-By",' 3.2.1')
res.header("Content-Type", "application/json;charset=utf-8");
next();
});



//session 拦截器 因为调试暂时禁用
/*
app.use(function (req, res, next) {
    var url = req.originalUrl;//获取url
    console.log(req.session.user);
    if(!req.session.user){//&&url != "/api/login"){// && url != "/api/test"&&url != "/api/find"&&url != "/api/add"&&url != "/api/wrong"){
    	console.log("none login");
    	if(url != "/api/login"){
    		console.log("shutdown");
    	}
    	else{
    		next();
    	}
        //return res.redirect("/api/wrong");
    }
    else if(url != "/api/test"&&url != "/api/find"&&url != "/api/add"&&url != "/api/login"){
    	console.log("qita")
    	//return res.redirect("/api/test");
    }
   // console.log(req.session.user);
    else {
    	next();
    }
});
*/


app.use('/api',apiRoutes);//使用apiroutes

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/users', users);

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

module.exports = app;
