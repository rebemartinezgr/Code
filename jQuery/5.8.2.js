$( document ).ready(function() {
	$( "#date" ).datepicker();
	$( "#menu" ).menu();
	$( "#draggable" ).draggable();
	$( "#droppable" ).droppable({
		drop: function() {
		alert( "dropped" );
	}
	});
});
