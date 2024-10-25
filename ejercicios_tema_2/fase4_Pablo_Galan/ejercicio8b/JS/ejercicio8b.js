let matriz = [[0,0,0],[0,0,0],[0,0,0]];

for (let i = 0; i<3; i++){
    for (let j = 0; j<3; j++){
        matriz[i][j] = prompt(`Introduce el numero en la posicion ${i+1}, ${j+1}`);
    }
}

function elementoMasFrecuente(matriz) {
    let frecuencias = {};
    let elementoMasFrecuente = null;
    let maxFrecuencia = 0;

    matriz.forEach(elemento => {
        if (!frecuencias[elemento]) {
            frecuencias[elemento] = 1;
        } else {
            frecuencias[elemento]++;
        }

        if (frecuencias[elemento] > maxFrecuencia) {
            maxFrecuencia = frecuencias[elemento];
            elementoMasFrecuente = elemento;
        }
    });

    return elementoMasFrecuente;
}

document.write(`El elemento mas frecuente es ${elementoMasFrecuente(matriz)}`);