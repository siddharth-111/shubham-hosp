var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/Shubham');

var Schema = mongoose.Schema;
var db = mongoose.connection;

db.on('error' , console.error.bind(console , 'connection error :'));

var ObjectId = mongoose.Schema.Types.ObjectId;

var fs = require('fs');

var path = require('path');

var homemodel = require('./models').homemodel;
var carouselmodel = require('./models').carouselmodel;
var querymodel = require('./models').querymodel;


var homeSchema = new Schema( {
	title :  { type:String , required:true , index :true}
});

var carouselSchema = new Schema( { 
	image1 : { type:String , required:true , index :true} ,
	image2 : { type:String , required:true , index :true}
});

var querySchema = new Schema( {
	name : { type:String , required:true , index :true} ,
	mail : { type:String , required:true , index :true} ,
	mob : { type:String , required:true , index :true} ,
	Query : { type:String , required:true , index :true}
});


exports.homeSchema = homeSchema;
exports.carouselSchema = carouselSchema;
exports.querySchema = querySchema;