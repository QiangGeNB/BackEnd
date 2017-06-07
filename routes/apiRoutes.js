var express = require('express');
var apiRoutes = express.Router();
var Shop = require('../db/models/shop.js');
var Activitie = require('../db/models/activitie.js');

apiRoutes.get('/add_activitie',function(req,res){
  Activitie.create({
        "bus_id": 1,
        "bus_avatar": "活动头像url",
        "bus_number": 10,
        "bus_introduce": { //活动的介绍
        "bus_name": "鼎福射箭馆",
        "bus_location": "平乐园十字路口",
        "bus_info":"介绍",
        "bus_phone": "13263135237"
        }},function(err,result){
      if(!err){
          res.send(JSON.stringify(result));
      }
      else{
          res.send(err);
      }
  });
});
apiRoutes.get('/find_activitie',function(req,res){
  Activitie.find(function(err,result){
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
