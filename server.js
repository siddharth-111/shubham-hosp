var express = require('express') ,
    
	app 	= express() ,
	bodyParser = require('body-parser') ,
	path 	= require('path'),
	home = require('./models').homemodel,
	carousel = require('./models').carouselmodel ,
	query = require('./models').querymodel ,
	nodemailer = require('nodemailer');

app	
    .use(bodyParser.urlencoded({ extended: false }))

	.use(bodyParser.json())
	.use(express.static(path.join(__dirname,'/public')))
	.use(express.static(path.join(__dirname,'bower_components')))
	.get('/abc' , function (req , res) {
		home.find({} , function(err,data){
			res.json(data);
		});
	})
	.get('/bcd' , function (req , res) {
		carousel.find({} , function(err,data){
			res.json(data);
		});
	})
	.post('/abcd', function (req , res){
		
		

		var user = new query ( {
			name : req.body.name,
			mail: req.body.mail,
			mob: req.body.mob,
			Query: req.body.Query  

		});
		var transporter = nodemailer.createTransport();
		var mailOptions = ({
    	from: 'siddharth.kumar111@gmail.com',
   		 to: 'siddharth.kumar111@gmail.com',
   		 subject: 'Query for Shubham hospitals',
    	html: '<label> <b> Name: </b> </label>' + req.body.name + '<br/> <label> <b>Email: </b> </label>' + req.body.mail +
    	'<br/> <label> <b> Phone number: </b></label>' + req.body.mob + '<br><label> <b> Query: </b></label> ' + req.body.Query + "."
		});


	transporter.sendMail(mailOptions, function(error, info){
    if(error){
        console.log(error);
    }else{
        console.log('Message sent');
    }
});

	
		user.save( function( err )
		{
			if(err)
			{
				console.log(err);
			}else{
				console.log("done");
			}
		});
		
	}) 
	.get('*' , function (req , res) {
		res.sendFile(path.join(__dirname, '/public', 'index.html'));
	});
app.listen(process.env.PORT || 3000, function(){
  console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});