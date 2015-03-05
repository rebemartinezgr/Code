
$(document).ready(function() {


$("#botton").click(function(){
	$.getJSON("http://localhost:8000/5.6.7.json", function(data){
		$("#text").append(data.frase1);
	
	})
});
});


