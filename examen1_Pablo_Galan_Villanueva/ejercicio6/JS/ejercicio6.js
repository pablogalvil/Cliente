let invertida = function(cadena) {
    return cadena.split("").reverse().join("");
};

let palabra = prompt("Introduzca una palabra");

document.write(`La palabra invertida es: ${invertida(palabra)}`);