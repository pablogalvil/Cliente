/**
 * Funcion que pide las palabras al usuario
 * @returns array con palabras
 */
function pedirPalabras() {
    let palabras = [];

    let cantidad = prompt("Introduzca la cantidad de palabras");

    for (let i = 0; i < cantidad; i++) {
        let palabra = prompt("Introduzca una palabra");
        palabras.push(palabra);
    }

    return palabras;
}

/**
 * Funcion que hace comprobaciones en el array para saber que es correcto y lo pasa a mayusculas
 * @param palabras introducidas previamente por el usuario
 * @returns array de palabras en mayusculas
 */
function comprobar(palabras){
    if (palabras.length < 8){
        //Si no hay 8 palabras, salta una alerta, pide las palabras de nuevo y 
        //llama a la funcion otra vez
        alert("Tiene que contener al menos 8 palabras");
        palabras = pedirPalabras();
        comprobar(palabras);
    }

    let nuevoArray = [];

    for(let i = 0; i < palabras.length; i++){
        if (palabras[i].length < 6) {
            //Si no hay al menos 6 letras, salta una alerta, pide las palabras de nuevo y 
            //llama a la funcion otra vez
            alert("La palabra debe tener al menos 6 letras");
            palabras = pedirPalabras();
            comprobar(palabras);
        }else{
            let palabra = "";
            //Si todo ha ido bien, guardamos las palabras en mayusculas en un array nuevo
            for (let j = 0; j < palabras[i].length; j++) {
                palabra += palabras[i].charAt(j).toUpperCase();
            }
            nuevoArray.push(palabra);
        }
    }

    return nuevoArray;
}

let palabras = pedirPalabras();
let array = comprobar(palabras);

//Elegimos una palabra aleatoria
let numero = Math.floor(Math.random() * array.length);

let pista = "";

for (let i = 0; i < array[numero].length; i++) {
    //La pongo en mayuscula para poder comprobarla
    let intento = prompt("Introduzca una palabra a intentar").toUpperCase();

    if (intento == array[numero]) {
        //Si aciertas termina el programa
        alert("Has acertado!");
        document.write(`Felicidades por ganar!<br>La palabra era ${array[numero]}`);
        break;
    }else{
        //Si falla mostramos una pista
        alert("Has fallado");
        pista += array[numero].charAt(i);
        if (i == (array[numero].length - 1)){
            //Si es el ultimo decimos que ha perdido
            alert("Perdiste!");
            document.write(`Mas suerte la proxima vez!<br>La palabra era ${pista}`);
        }else{
            alert(`Pista : ${pista}`);
        }
    }
}