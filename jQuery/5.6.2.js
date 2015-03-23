//function handlerIn(){
	//$("#orderedlist > li:last")
//};

//function handlerOut(){
	//$("#orderedlist > li:last")
	//console.log("sale");
//};

$(document).ready(function() {
    $("#orderedlist2").addClass("blue");
    $("#orderedlist2 > li").addClass("red");
    	$("#orderedlist2 > li:last").hover( function(){
		$(this).addClass("green");
	}, function(){
		$(this).removeClass("green");
	});
});



