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


app.get('/',function(req,res,next){
	res.send("Works so far");
});


app.get('/:number',function(req,res,next){

	var command = req.params.number;

	if(command == 1){
		res.send("You requested for path 1");
	}
	else if(command == 2){
		res.send("You requested for path 2");
	}else{
		res.send("YOU DO NOT KNWO WHAT YOU ARE DOING");
	}
});








//------------------------PORT LISTENING CODE--------------------

app.listen(port, function(){
	console.log('Server started on port:'+port);
	});
// app.set('port', process.env.PORT || 3000);
// 
// ------------------------PORT LISTEN ENDS----------------------

