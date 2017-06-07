var Activitie = require('../schema/activitie.js')
var mongoose=require('mongoose');

exports.create=function(data,callback){
    var activitie=new Activitie({
        bus_id:data.bus_id,
        bus_avatar:data.bus_avatar,
        bus_number:data.bus_number,
        bus_introduce:{
            bus_name:data.bus_introduce.bus_name,
            bus_location:data.bus_introduce.bus_location,
            bus_info:data.bus_introduce.bus_info,
            bus_phone:data.bus_introduce.bus_phone
        }
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
exports.RemoveById=function(bus_id,callback){
    Activitie.remove(bus_id,function(err,activitie){
        callback(err,activitie);
    });
};

exports.AddOne=function(bus_id,callback){
    Activitie.update(bus_id,{'$inc':{'bus_number':1}},function(err,activitie){
        callback(err,activitie);
    });
};