function letraDni(numDni){
    if(numDni < 0 || numDni > 99999999){
        return null;
    }
    
    let letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
    let resto = numDni%23;

    return letras[resto];
}

let numDni = prompt("Introduce el numero de tu dni");

document.write(`Tu dni completo es : ${numDni + letraDni(numDni)}`);