// evento click al botón
$('button').click( procesar );


// funcion para procesar los calculos
function procesar(){
	
	// recupera el valor seleccionado y guarda 
	// en la variable
	let seleccion = $('select').val();

	switch(seleccion){
		case "MER":
			//Cambia la imagen
			$('img').attr('src', 'img/mercurio.jpg');
			// recupera el valor ingresado por el 
			// usuario parsea y lo guarda en la
			// variable
			let peso = parseInt( $('#peso').val() );
			let res = ( peso * 3.7 ) / 9.8;
			// mostrar resultados
			$('#planetaSelec').text("mercurio");
			$('#resul').text(res);
		break
	}

}
