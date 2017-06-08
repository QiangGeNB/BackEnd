var mongoose = require('../db.js')

var ActivitieSchema = new mongoose.Schema({
    bus_id:Number,
    act_id:Number,
    act_name:String, //用户自己设置，有默认值
    act_avatar:String,
    act_date:{
    	_data:String,
    	time:String
    }, //活动时间
    member:{
        max:Number,
        min:Number,
        now:Number
    },
    act_originator:{ //活动发起人信息
        ori_id:Number,
        ori_phone:String
    },
    act_member:[Number] //用户的openid    存用户?用户id
})

module.exports = mongoose.model('activitie',ActivitieSchema);