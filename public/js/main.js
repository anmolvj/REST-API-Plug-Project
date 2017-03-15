$(document).ready(function(){
	var ID = "";

	$("#4").click(function(){
		var t = $('#4t').val();
		if(t==""){
			t = 3;
		}
		ID = $('#deviceID').val();
		if(ID==""){
			alert("Please enter a unique device id")
		}else{
		$.get("/pin4/" + t + "/" + ID, function(status){
			console.log(status);
		});
		}
	})
	$("#5").click(function(){
		var t = $('#5t').val();
		if(t==""){
			t = 3;
		}
		ID = $('#deviceID').val();
		if(ID==""){
			alert("Please enter a unique device id")
		}else{
		$.get("/pin5/" + t + "/" + ID, function(status){
			console.log(status);
		});
		}

		
	})
	$("#2").click(function(){
		var t = $('#2t').val();
		if(t==""){
			t = 3;
		}
		ID = $('#deviceID').val();
		if(ID==""){
			alert("Please enter a unique device id")
		}else{$.get("/pin2/" + t + "/" + ID, function(status){
			console.log(status);
		});
	}

		
	})
	$("#16").click(function(){
		var t = $('#16t').val();
		if(t==""){
			t = 3;
		}
		ID = $('#deviceID').val();
		if(ID==""){
			alert("Please enter a unique device id")
		}else{
		$.get("/pin16/" + t + "/" + ID, function(status){
			console.log(status);
		});
		}

		
	})
	$("#0").click(function(){
		var t = $('#0t').val();
		if(t==""){
			t = 3;
		}
		ID = $('#deviceID').val();
		if(ID==""){
			alert("Please enter a unique device id")
		}else{
		$.get("/pin0/" + t + "/" + ID, function(status){
			console.log(status);
		});
		}

		
	})
	$("#15").click(function(){
		var t = $('#15t').val();
		if(t==""){
			t = 3;
		}
		ID = $('#deviceID').val();
		if(ID==""){
			alert("Please enter a unique device id")
		}else{
		$.get("/pin15/" + t + "/" + ID, function(status){
			console.log(status);
		});
		}

		
	})
	$("#13").click(function(){
		var t = $('#13t').val();
		if(t==""){
			t = 3;
		}
		ID = $('#deviceID').val();
		if(ID==""){
			alert("Please enter a unique device id")
		}else{
		$.get("/pin13/" + t + "/" + ID, function(status){
			console.log(status);
		});
		}

		
	})
	$("#12").click(function(){
		var t = $('#12t').val();
		if(t==""){
			t = 3;
		}
		ID = $('#deviceID').val();
		if(ID==""){
			alert("Please enter a unique device id")
		}else{
		$.get("/pin12/" + t + "/" + ID, function(status){
			console.log(status);
		});
		
		}

		
	})
	$("#14").click(function(){
		var t = $('#14t').val();
		if(t==""){
			t = 3;
		}
		ID = $('#deviceID').val();
		if(ID==""){
			alert("Please enter a unique device id")
		}else{
		$.get("/pin14/" + t + "/" + ID, function(status){
			console.log(status);
		});
		}

		
	})
});

