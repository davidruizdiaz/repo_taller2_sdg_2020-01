// definicion de variable
var x = 0;

// definicion de una funcion
function clic(){

	// recuperacion de referencia de elemento h1
	var caja = document.getElementsByTagName("h1")[0];

	// incremento de la varible en 1
	x++;

	// bloque de control if
	// verifica si la variable es par
	// si es par asigna un color al h1
	// si no asigna otro color al h2
	if (x%2 == 0) {
		caja.style.backgroundColor = '#808080';
	} else {
		caja.style.backgroundColor = '#303030';
	}
}

// asignación de evento click al botón
document.getElementById('boton').addEventListener("click", clic);