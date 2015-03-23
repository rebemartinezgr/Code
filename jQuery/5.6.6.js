
$(document).ready(function() {


$("#botton").click(function(){
	$.getJSON("http://localhost:8000/Code/jQuery/5.6.6.json", function(data){
		$("#text").html(data.frase1);
	
	})
});
});


