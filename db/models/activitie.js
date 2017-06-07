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