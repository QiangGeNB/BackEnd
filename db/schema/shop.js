var mongoose = require('../db.js')

var ShopSchema = new mongoose.Schema({
	Name:String
})

module.exports = mongoose.model('eg_shop',ShopSchema);