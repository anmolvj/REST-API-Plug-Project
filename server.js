var express		= require('express');
var path		= require('path');
var bodyParser  = require('body-parser');
var jquery 		= require('jquery');
var app			= express();
var port 		= 3000;

app.disable('x-powered-by');

//-----------BODY PARSER MIDDLEWARE-----------------
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

//-----Home page for Website---------
app.get('/',function(req,res,next){
	res.send("Welcome to Project Plug");
});


//-----Main code handling therequests------
app.get('/:number',function(req,res,next){

	var command = req.params.number;//get the REST parameter that was passed

	if(command == 1){
		res.send("The PLUG is on its path to Destination 1");
	}
	else if(command == 2){
		res.send("YThe PLUG is on its path to Destination 2");
	}else{
		res.send("Invalid Parameter Passed. Please read the Instructions for this REST api. ");
	}
});








//------------------------PORT LISTENING CODE--------------------

app.listen(port, function(){
	console.log('Server started on port:'+port);
	});
// app.set('port', process.env.PORT || 3000);
// 
// ------------------------PORT LISTEN ENDS----------------------

