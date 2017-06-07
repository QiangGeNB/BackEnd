var mongoose = require('../db.js')

var ActivitieSchema = new mongoose.Schema({
	bus_id:Number,
	bus_avatar:String,
	bus_number:Number,
	bus_introduce:{
	    bus_name:String,
	    bus_location:String,
	    bus_info:String,
	    bus_phone:String
	}
})

module.exports = mongoose.model('activitie',ActivitieSchema);