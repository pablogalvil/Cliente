let cadena = prompt("Introduce una cadena");
let palabra = prompt("Introduce una palabra a buscar");

function buscarPalabra(cadena, palabra) {
    let indice = 0;
    while (indice != -1) {
        indice = cadena.indexOf(palabra, indice + 1);
        if (indice != -1) {
            document.write(`La palabra ${palabra} se encontro en la posición ${indice}`);
        }
    }
}

buscarPalabra(cadena, palabra);