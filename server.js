var express		= require('express');
var path		= require('path');
var bodyParser  = require('body-parser');
var jquery 		= require('jquery');
var app			= express();
var port 		= 3000;

var index 		= require('./routes/index');
var pin4 		= require('./routes/pin4');
var pin5 		= require('./routes/pin5');
var pin2 		= require('./routes/pin2');
var pin16 		= require('./routes/pin16');
var pin0		= require('./routes/pin0');
var pin15 		= require('./routes/pin15');
var pin13 		= require('./routes/pin13');
var pin12 		= require('./routes/pin12');
var pin14 		= require('./routes/pin14');

app.disable('x-powered-by');

//-----------BODY PARSER MIDDLEWARE-----------------
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

//----------------VIEW ENGINE-----------------------
app.set('views',path.join(__dirname,'views'));
app.set('view engine', 'ejs');
app.engine('html',require('ejs').renderFile);


//------------------------ ROUTES --------------------
app.use('/', index);
app.use('/pin4', pin4);
app.use('/pin5', pin5);
app.use('/pin2', pin2);
app.use('/pin16', pin16);
app.use('/pin0', pin0);
app.use('/pin15', pin15);
app.use('/pin13', pin13);
app.use('/pin12', pin12);
app.use('/pin14', pin14);

//------------------------PORT LISTENING CODE--------------------

app.listen(port, function(){
	console.log('Server started on port:'+port);
	});


