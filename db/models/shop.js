var Shop = require('../schema/shop.js')
var mongoose=require('mongoose');

exports.create=function(data,callback){
    var shop=new Shop({
        Name:data.name
    });
    shop.save(function(err,shop){
        if(!err){
            callback(null,shop);
        }
        else{
　　　　　　　callback(err,null);
        }
    });
};

exports.find=function(callback){
    Shop.find(function(err,shop){
 		callback(err,shop);
    });
};


exports.find_part=function(data,callback){
	var promise_array=[];
	console.log(data.length);
	for(var i=0;i<data.length;i++){
		promise_array.push(new Promise(function(resolve,reject){
			Shop.findOne({"Name":data[i]},function(err,test){
				resolve(test);
			})
		}))
	}
	Promise.all(promise_array).then(function(value){
		console.log(value);
		callback(null,value);
	})
};