// se recupera el boton y se le asigna evento click
// el evento click ejecutará la funcion cargaDatos()
$("button").click( cargaDatos );



// funcion que será ejecutada cuando se haga click en el botón
function cargaDatos(){

	// se utiliza la funcion .getJSON() de jquery para hacer una peticion ajax
	// a un servidor remoto
	$.getJSON("https://davidruizdiaz.github.io/poema/", function( datos ){

		// cuando el servidor responda ejecutará esta funcion que recibe los datos
		// que devuelve el servidor
		console.log( datos ); 
		
		// los datos son cargados en la página
		$("img").attr("src", datos.imagen);
		$("h2").text(datos.titulo);
		$("p").text(datos.poema)

	});

}