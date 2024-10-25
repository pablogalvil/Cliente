let cadena = prompt("Introduce una cadena");
let subcadena = prompt("Introduce una subcadena");

/**
 * Este ejercicio lo he interpretado como si me pidiera 
 * contar las veces que aparece una subcadena dentro de otra
 * @param {*} cadena 
 * @param {*} subcadena 
 * @returns contador con las veces que aparece la subcadena
 */
function contarApariciones(cadena, subcadena) {
    let contador = 0;
    let posicion = cadena.indexOf(subcadena);
    while (posicion != -1) {
        contador++;
        posicion = cadena.indexOf(subcadena, posicion + 1);
    }
    return contador;
}

document.write(contarApariciones(cadena, subcadena));
