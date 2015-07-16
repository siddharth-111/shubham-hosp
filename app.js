var express = require('express') ,
	app 	= express() ,
	path 	= require('path');

app	
	.use(express.static(path.join(__dirname,'/public')))
	.use(express.static(path.join(__dirname,'bower_components')))
	.get('*' , function (req , res) {
		res.sendfile('public/index.html');
	});
app.listen(process.env.PORT || 3000, function(){
  console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});