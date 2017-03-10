var express 		= require('express');
var router 			= express.Router();
var request			= require('request');
var pin1 			= "2"; 			//SET PIN-1 HERE
var pin2 			= "4"; 			//SET PIN-2 HERE
var pinNo 			= "";
var timeoutID 		= 0;

router.get('/', (req,res,next) => {
	res.send("you are on right path");
} );

router.get('/:id', (req,res,next) => {
	

	var id = req.params.id;
	if(id == pin1){
		pinNo = pin1;
		//GENERATING REQUEST URL
		var outputURL 		= 'https://cloud.arest.io/badlapur/mode/2/o';
		var highURL 		= 'https://cloud.arest.io/badlapur/digital/2/1';
		var lowURL			= 'https://cloud.arest.io/badlapur/digital/2/0'
		request.get({url:outputURL},function(error,response,body){

		 if (!error && response.statusCode == 200) { 
		 			
		 			//SET PIN HIGH
		           request.get({url:highURL},function(error,response,body){
					 if (!error && response.statusCode == 200) { 
					           res.send("The PLUG is down the path 2");
					           clearInterval(timeoutID);
					           timeoutID = setTimeout(function(){
					           		request.get({url:lowURL},function(error,response,body){

					 				if (!error && response.statusCode == 200) {
					 					console.log("EVERYTHING WAS SUCCESSFUL");
					 				}
					 			});
					           },5000);

			                 }
						});
		           
                 }
				});

	}else if(id == pin2){
		pinNo = pin2;
		//GENERATING REQUEST URL
		var outputURL 		= 'https://cloud.arest.io/badlapur/mode/4/o';
		var highURL 		= 'https://cloud.arest.io/badlapur/digital/4/1';
		var lowURL			= 'https://cloud.arest.io/badlapur/digital/4/0'
		request.get({url:outputURL},function(error,response,body){

		 if (!error && response.statusCode == 200) { 
		 			
		 			//SET PIN HIGH
		           request.get({url:highURL},function(error,response,body){
					 if (!error && response.statusCode == 200) { 
					           res.send("The PLUG is down the path 4");
					           setTimeout(function(){
					           		request.get({url:lowURL},function(error,response,body){
					           			
					 				if (!error && response.statusCode == 200) {
					 					console.log("EVERYTHING WAS SUCCESSFUL");
					 				}
					 			});
					           },5000);
			                 }
						});
		           
                 }
				});
	}
	else{
		res.send("You input parameter was invalid - " + id);
	}
		// SET PINMODE AS OUTPUT
	
 });


module.exports = router;