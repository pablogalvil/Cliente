function letraDni(numDni) {
    let letras = 'TRWAGMYFPDXBNJZSQVHLCKE';
    let letraDni = numDni % 23;
    return letras[letraDni];
}

let numDni = prompt("Introduce el numero de tu dni");

document.write(`La letra de tu dni es ${letraDni(numDni)}`);