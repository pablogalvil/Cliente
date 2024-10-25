let archivo = prompt("Introduzca un archivo");

//Buscamos el ultimo punto del archivo, el cual contiene la extensión
let lugar  = archivo.lastIndexOf('.');

//Sacamos la extensión del archivo
let extension = archivo.substring(lugar + 1);

document.write("La extensión del archivo es \"" + extension + "\"");