// alert("Funciona! Jupiii");

// Condicional if else
let numero = 0;
numero = prompt("Ingrese un número");

if( numero%2 === 0 ){
	alert("El número es par");
	document.querySelector("#ejemplo1").innerHTML = "El numero es par";
}


// Bucle for
// Mostrar por consola los números del 0 al 100
for( let x = 0 ; x<=100 ; x++){
	console.log("x = " + x)
}

// Arrays
// Iterar el siguiente array
let mi_array = [1, 2, 3, "cuatro", [1,2], 6];

for(let i = 0 ; i < mi_array.length ; i++){
	console.log( mi_array[i] );
}




