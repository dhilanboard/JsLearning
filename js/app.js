(function(){
	'use strict';
	
	$.ajax({
		type: "GET",
		url: "./JSON/data.json", 
		dataType: "json",
		success: function(data){	
			console.log(data);
			$("h1").html("<p>"+ data.name + "</p>");
		},
		error: function(){
			$("body").append('<p>Error</p>');
		}
		
	});
}());


