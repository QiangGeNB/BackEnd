var Activitie = require('../schema/activitie.js')
var mongoose=require('mongoose');

exports.create=function(data,callback){
    var activitie=new Activitie({
        bus_id:data.bus_id,
        act_id:data.act_id,
        act_name:data.act_name, //用户自己设置，有默认值
        act_avatar:data.act_avatar,
        act_date:{
            _data:data.act_date._data,
            time:data.act_date.time
        }, //活动时间
        member:{
            max:data.member.max,
            min:data.member.min,
            now:data.member.now
        },
        act_originator:{ //活动发起人信息
            ori_id:data.act_originator.ori_id,
            ori_phone:data.act_originator.ori_phone
        },
        act_member:data.act_member //用户的openid    存用户?用户id
    });
    activitie.save(function(err,activitie){
        if(!err){
            callback(null,activitie);
        }
        else{
　　　　　　　callback(err,null);
        }
    });
};

exports.find=function(callback){
    Activitie.find(function(err,activitie){
        callback(err,activitie);
    });
};

//返回值为[n:x,ok:y] x代表删除的数量 ok代表。。。还不清楚
exports.RemoveById=function(act_id,callback){
    Activitie.remove(act_id,function(err,activitie){
        callback(err,activitie);
    });
};

exports.AddOne=function(act_id,callback){
    Activitie.update(act_id,{'$inc':{'member.now':1}},function(err,activitie){
        callback(err,activitie);
    });
};

exports.SubOne=function(act_id,callback){
    Activitie.update(act_id,{'$inc':{'member.now':-1}},function(err,activitie){
        callback(err,activitie);
    });
};