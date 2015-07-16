var express = require('express') ,
	app 	= express() ,
	path 	= require('path');

app	
	.use(express.static('./public'))
	.use(express.static(path.join(__dirname,'bower_components')))
	.get('*' , function (req , res) {
		res.sendfile('public/index.html');
	});
var port = Number(process.env.PORT || 3000);
	app.listen(port);