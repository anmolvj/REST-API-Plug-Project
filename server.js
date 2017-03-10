var express		= require('express');
var path		= require('path');
var bodyParser  = require('body-parser');
var jquery 		= require('jquery');
var app			= express();
var port 		= 3000;

var index 		= require('./routes/index');
var mypath 		= require('./routes/path');


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
app.use('/path', mypath);


//------------------------PORT LISTENING CODE--------------------

app.listen(port, function(){
	console.log('Server started on port:'+port);
	});
// app.set('port', process.env.PORT || 3000);
// 
// ------------------------PORT LISTEN ENDS----------------------

