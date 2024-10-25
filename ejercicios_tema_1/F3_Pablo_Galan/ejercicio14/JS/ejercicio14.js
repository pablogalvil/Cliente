let cadena = prompt("Introduce una cadena");
let cadena2 = prompt("Introduce la cadena a insertar en la cadena anterior");
let posicion = prompt("Introduce una posicion");

function insertar(cadena, cadena2, posicion) {
    return cadena.slice(0, posicion) + cadena2 + cadena.slice(posicion);
}

document.write(insertar(cadena, cadena2, posicion));