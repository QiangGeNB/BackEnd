var express = require('express');
var apiRoutes = express.Router();
var Shop = require('../db/models/shop.js');
var Activitie = require('../db/models/activitie.js');

apiRoutes.get('/add_activitie',function(req,res){
  Activitie.create({
      "bus_id": 1,
      "act_id": 100,
      "act_name": "我们一起射箭", //用户自己设置，有默认值
      "act_avatar": "活动头像",
      "act_date": "2017/6/19", //活动时间
      "member": {
        "max": 10,
        "min": 5,
        "now": 3
      },
      "act_originator": { //活动发起人信息
        "ori_id": 1,
        "ori_phone": "13263135237"
      },
      "act_member": [1,2,3] //用户的openid    存用户?用户id
      },function(err,result){
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
apiRoutes.get('/remove_by_id_activitie',function(req,res){
  Activitie.RemoveById({act_id:100},function(err,result){
      if(!err){
          res.send(JSON.stringify(result));
      }
      else{
          res.send(err);
      }
  });
});
apiRoutes.get('/add_one_activitie',function(req,res){
  Activitie.AddOne({act_id:100},function(err,result){
      if(!err){
          res.send(JSON.stringify(result));
      }
      else{
          res.send(err);
      }
  });
});
apiRoutes.get('/sub_one_activitie',function(req,res){
  Activitie.SubOne({act_id:100},function(err,result){
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
