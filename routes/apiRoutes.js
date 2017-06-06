var express = require('express');
var apiRoutes = express.Router();
var Shop = require('../db/models/shop.js');

apiRoutes.get('/add',function(req,res){
  Shop.create({"name":"shop1"},function(err,result){
      if(!err){
          res.send(JSON.stringify(result));
      }
      else{
          res.send(err);
      }
  });
});


apiRoutes.get('/find',function(req,res){
	/*req.session.user = {
	     'username':"test"
	   }//User为存入数据库回调回来的用户对象
	  console.log(req.session);*/
  Shop.find(function(err,result){
      if(!err){
          res.send(JSON.stringify(result));
      }
      else{
          res.send(err);
      }
  });
});


apiRoutes.get('/test',function(req,res){
  Shop.find_part(["shop1","shop2","shop3"],function(err,result){
      if(!err){
          res.send(JSON.stringify(result));
      }
      else{
          res.send(err);
      }
  });
});

apiRoutes.get('/login',function(req,res){
	req.session.user = {
	     'username':"test"
	   }//User为存入数据库回调回来的用户对象
	  console.log(req.session);
	res.send("success");
});


apiRoutes.get('/wrong',function(req,res){
	res.send("weiyanzheng");
});

module.exports = apiRoutes;
