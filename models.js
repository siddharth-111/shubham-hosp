var mongoose = require('mongoose');
var schemas = require('./schema');

exports.homemodel = mongoose.model('homemodel' , schemas.homeSchema);
exports.carouselmodel = mongoose.model('carouselmodel' , schemas.carouselSchema);
exports.querymodel = mongoose.model('querymodel' , schemas.querySchema);


