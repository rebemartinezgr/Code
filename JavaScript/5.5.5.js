
function changer (id, newValue) {
	var element = document.getElementById(id);
	element.innerHTML = newValue;
}

function adder (op, resultado) {
	var operation = document.getElementById(op);
	var operands = operation.innerHTML.split ("+");
	var result = parseInt(operands[0]) + parseInt(operands[1]);
	changer (resultado, '=' + result);
}

