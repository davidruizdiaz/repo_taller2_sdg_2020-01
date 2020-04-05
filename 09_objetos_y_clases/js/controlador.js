// referencias a los componentes
let txtDescripcion = $("#descripcion");
let txtFecha = $("#fecha");
let txtHora = $("#hora");
let btnAgregar = $("#btn_agregar");
let tbody = $("tbody");

// evento del botón agregar
btnAgregar.click(preparaTarea);



// función para agregar tarea en la tabla
function preparaTarea(){

	// se recupera los valores ingresados
	let descripcion = txtDescripcion.val();
	let fecha = txtFecha.val();
	let hora = txtHora.val()

	// se instancia una tarea
	let tarea = new Tarea(descripcion, fecha, hora)
	// prueba del método
	console.log(tarea.mostrar());

	// se llama a la funcion y se le pasa una tarea
	insertaTarea(tarea);
}



// funcion que inserta una tarea en la tabla
function insertaTarea(t){
	
	// plantilla que contendran los datos ingresados
	let plantilla = `<tr>
						<td>${t.descripcion}</td>
						<td>${t.fecha}</td>
						<td>${t.hora}</td>
						<td>
							<button type="button" onclick="borraTarea(this)" class="btn btn-sm btn-success" title="Completado">
								<i class="fas fa-check-circle"></i>
							</button>
						</td>
					</tr>`;

	// se inseta la plantilla en la tabla
	tbody.prepend(plantilla);

	// se limpian los campos
	limpiar();
}



// funcion que limpia los campos
function limpiar(){

	// borra el contenido de los campos
	txtDescripcion.val("");
	txtFecha.val("");
	txtHora.val("");

	// pone el cursor en el campo descripción
	txtDescripcion.focus();
}



// funcion para borrar una tarea
function borraTarea(btn){

	// se selecciona la fila en que esta el botón
	// y se borra
	$(btn).parents("tr").remove()
}