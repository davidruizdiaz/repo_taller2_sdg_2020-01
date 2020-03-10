/*
	Planeta		Gravedad
	Mercurio	3,7 m/s²
	Venus		8,87 m/s²
	La Tierra	9,8 m/s²
	Marte		3,71 m/s²
	Júpiter		24,79 m/s²
	Saturno		10,44 m/s²
	Urano		8,87 m/s²
	Neptuno		11,15 m/s²
	Pluton		0.62 m/s²


							Formula (regla de 3 simple)

							pesoTierra --- gravedadTierra
									    \
				 (pesoOtroPlaneta = x) --- gravedadOtroPlaneta

		pesoOtroPlaneta = (pesoTierra * gravedadOtroPlaneta) / gravedadTierra
*/




// evento click al botón
$('button').click( procesar );


// funcion para procesar los calculos
function procesar(){  // inicio de la función
 
	// verifica que el campo con id peso no esté vacío
	// si lo está, se emite un alert y se para la ejecución de la función
	if( $("#peso").val() === "" ){
		alert("Ingrese su peso en kg.");
		return ;
	}
	
	// recupera el valor seleccionado y guarda 
	// en la variable
	let seleccion = $('select').val();

	// inicialización de variable de la función
	let peso = null;
	let res = null;

	switch(seleccion){	// inicio del switch
		case "MER":
			// 1- Cambia la imagen
			$('img').attr('src', 'img/mercurio.jpg');
			// 2- recupera el valor ingresado por el 
			//    usuario parsea y lo guarda en la
			//    variable
			peso = parseInt( $('#peso').val() );
			// 3- se implementa la formula, se quitan los decimales con Math.floor()
			//    y se asigna el resultado a la variable res
			res = Math.floor( ( peso * 3.7 ) / 9.8 );
			// 4- cambia el texto del elemento con id planetaSelect
			//    por el nombre correcto del planeta
			$('#planetaSelec').text("mercurio");
			// 5- cambia el texto del elemento con id resul
			//    por el valor de la variable res
			$('#resul').text(res);
		break
		case "VEN":
			
			$('img').attr('src', 'img/venus.jpg');
			
			peso = parseInt( $('#peso').val() );
			res = Math.floor( ( peso * 8.87 ) / 9.8 );
			
			$('#planetaSelec').text("venus");
			$('#resul').text(res);
		break
		case "MAR":
			
			$('img').attr('src', 'img/marte.jpg');
			
			peso = parseInt( $('#peso').val() );
			res = Math.floor( ( peso * 3.71 ) / 9.8 );
			
			$('#planetaSelec').text("marte");
			$('#resul').text(res);
		break
		case "JUP":
			
			$('img').attr('src', 'img/jupiter.jpg');
			
			peso = parseInt( $('#peso').val() );
			res = Math.floor( ( peso * 24.79 ) / 9.8 );
			
			$('#planetaSelec').text("júpiter");
			$('#resul').text(res);
		break
		case "SAT":
			
			$('img').attr('src', 'img/saturno.jpg');
			
			peso = parseInt( $('#peso').val() );
			res = Math.floor( ( peso * 10.44 ) / 9.8 );
			
			$('#planetaSelec').text("saturno");
			$('#resul').text(res);
		break
		case "URA":
			
			$('img').attr('src', 'img/urano.jpg');
			
			peso = parseInt( $('#peso').val() );
			res = Math.floor( ( peso * 8.87 ) / 9.8 );
			
			$('#planetaSelec').text("urano");
			$('#resul').text(res);
		break
		case "NEP":
			
			$('img').attr('src', 'img/neptuno.jpg');
			
			peso = parseInt( $('#peso').val() );
			res = Math.floor( ( peso * 11.15 ) / 9.8 );
			
			$('#planetaSelec').text("neptuno");
			$('#resul').text(res);
		break
		case "PUT":
			
			$('img').attr('src', 'img/pluton.jpg');
			
			peso = parseInt( $('#peso').val() );
			res = Math.floor( ( peso * 0.62 ) / 9.8 );
			
			$('#planetaSelec').text("plutón");
			$('#resul').text(res);
		break
		default:
			// si no se seleccionón ninguna opción
			// se emite un alerta y se para la ejecución de la función
			alert("Seleccione una opción");
			return ;
		break

	}  // fin del switch

	// Muestra el alert con los resultados
	$('.alert').slideDown();
	
	// Crea un temporizador de 3 segundos para luego
	// Ocultar el alert 
	setTimeout(function() {
		$('.alert').slideUp();
	}, 3000);

}	// fin de la función
