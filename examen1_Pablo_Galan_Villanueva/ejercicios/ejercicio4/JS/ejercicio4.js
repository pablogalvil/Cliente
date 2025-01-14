function pedirPalabras() {
    let palabras = [];

    let cantidad = prompt("Introduzca la cantidad de palabras");

    for (let i = 0; i < cantidad; i++) {
        let palabra = prompt("Introduzca una palabra");
        palabras.push(palabra);
    }

    return palabras;
}

function ahorcado (palabras) {
    if (palabras.length < 8) {
        alert("Deben haber al menos 8 palabras");
        pedirPalabras();
    }

    let nuevoArray = [];

    for (let i = 0; i < palabras.length; i++) {
        if (palabras[i].length < 6) {
            alert("La palabra debe tener al menos 6 letras");
            pedirPalabras();
        }else{
            let palabra = "";
            for (let j = 0; j < palabras[i].length; j++) {
                palabra += palabras[i].charAt(j).toUpperCase();
            }
            nuevoArray.push(palabra);
        }
    }

    return nuevoArray;
}

let palabras = pedirPalabras();
let arrayAhorcado = ahorcado(palabras);

let numero = Math.floor(Math.random() * arrayAhorcado.length);

let pista = "";

for (let i = 0; i < arrayAhorcado[numero].length; i++) {
    let intento = prompt("Introduzca una palabra a intentar").toUpperCase();

    if (intento == arrayAhorcado[numero]) {
        alert("Has acertado!");
        break;
    }else{
        alert("Has fallado");
        pista += arrayAhorcado[numero].charAt(i);
        alert("Pista : " + pista);
    }
}