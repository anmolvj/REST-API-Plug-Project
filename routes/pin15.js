var express 	= require('express');
var router 		= express.Router();
var request		= require('request');

var pin = 15;

router.get('/:uName', (req,res,next) => {
	var timeoutID 		= 0;
	var time = 10000;//1 minute
	var uName = req.params.uName;
	

	var outputURL 		= 'https://cloud.arest.io/' + uName + '/mode/' + pin + '/o'
	var highURL 		= 'https://cloud.arest.io/' + uName + '/digital/' + pin + '/o';
	var lowURL			= 'https://cloud.arest.io/' + uName + '/digital/' + pin + '/o';

	request.get({url:outputURL},function(error,response,body){

		 if (!error && response.statusCode == 200) { 
		 			
		 			//SET PIN HIGH
		           request.get({url:highURL},function(error,response,body){
					 if (!error && response.statusCode == 200) { 
					           res.send("The PIN number " + pin + " is now set to HIGH for " + time/1000 + " seconds." );

					           clearInterval(timeoutID);
					           timeoutID = setTimeout(function(){
					           		request.get({url:lowURL},function(error,response,body){

					 				if (!error && response.statusCode == 200) {
					 					console.log("Success at pin - " + pin + " after " + time/1000 + " seconds" );
					 				}
					 			});
					           },time);

			                 }
						});
		           
                   }else{
                 	res.send("Please recheck the passed parameters. The current one's are invalid")
                 }
				});
 });


router.get('/:time/:uName', (req,res,next) => {
	var timeoutID 		= 0;
	var time = 1000*(req.params.time);
	var uName = req.params.uName;
	

	var outputURL 		= 'https://cloud.arest.io/' + uName + '/mode/' + pin + '/o';
	var highURL 		= 'https://cloud.arest.io/' + uName + '/digital/' + pin + '/o';
	var lowURL			= 'https://cloud.arest.io/' + uName + '/digital/' + pin + '/o';

		request.get({url:outputURL},function(error,response,body){

		 if (!error && response.statusCode == 200) { 
		 			
		 			//SET PIN HIGH
		           request.get({url:highURL},function(error,response,body){
					 if (!error && response.statusCode == 200) { 
					           res.send("The PIN number " + pin + " is now set to HIGH for " + time/1000 + " seconds." );

					           clearInterval(timeoutID);
					           timeoutID = setTimeout(function(){
					           		request.get({url:lowURL},function(error,response,body){

					 				if (!error && response.statusCode == 200) {
					 					console.log("Success at pin - " + pin + " after " + time/1000 + " seconds" );
					 				}
					 			});
					           },time);

			                 }
						});
		           
                 }else{
                 	res.send("Please recheck the passed parameters. The current one's are invalid")
                 }
				});

	
 });
module.exports = router;