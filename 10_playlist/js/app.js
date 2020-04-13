// recupera todo el contenido de la fila
let plantilla = $('.row').html();

// borra el contenido de la fila
$('.row').html('');

// recupera los datos del servicio web utilizando ajax
$.get('https://davidruizdiaz.github.io/playlist/')
	.done( function(datos){
		 muestraDatos(datos);
	} )
	.fail( function(error){
		console.log(error.statusText);	
	} );

// recorre la colleccion, y muestra los datos en la página
function muestraDatos (d) {

	for (let i = 0; i < d.length; i++) {
		
		let plnt = $(plantilla);

		plnt.find('.titulo').text( d[i].musica );
		plnt.find('.artista').text( d[i].artista );
		plnt.find('.genero').text( d[i].genero );
		plnt.find('.anho').text( d[i].anho );
		
		plnt.find('.portada').attr('src', d[i].portada);
		plnt.find('.audio').attr('src', d[i].audio);

		$('.row').append(plnt);
	}

}