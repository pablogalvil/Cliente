function potencia(base, exponente) {
    if (exponente == 0) {
        return 1;
    } else {
        return base * potencia(base, exponente - 1);
    }
}
let base = 0;
let exponente = 0;
let es_positivo = false;
while (!es_positivo) {
    base = parseInt(prompt("Introduce la base"));
    if (base >= 0) {
        es_positivo = true;
    }
}

es_positivo = false;
while (!es_positivo) {
    exponente = parseInt(prompt("Introduce el exponente"));
    if (exponente >= 0) {
        es_positivo = true;
    }
}

document.write(`El resultado de la potencia de ${base} elevado a ${exponente} es ${potencia(base, exponente)}`);