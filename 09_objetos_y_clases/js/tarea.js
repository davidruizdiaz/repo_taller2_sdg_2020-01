
// nombre de la clase
class Tarea {

	// constructor
	constructor(descripcion, fecha, hora){
		
		//atributos de la clase
		this.descripcion = descripcion;
		this.fecha = fecha;
		this.hora = hora;
	}

	// método
	mostrar(){
		return `${this.descripcion} ${this.fecha} ${this.hora}`;
	}
}