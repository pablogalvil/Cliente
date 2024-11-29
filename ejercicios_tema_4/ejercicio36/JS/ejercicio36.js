function creacion() {
    let carton = [];
    for (let i = 0; i < 8; i++) {
        carton.push([]);
        for (let j = 0; j < 4; j++) {
            let num = Math.floor(Math.random() * 90) + 1;
            while (carton[i].includes(numAleatorio)) {
                num = Math.floor(Math.random() * 90) + 1;
            }
            carton[i].push(num);
        }
    }
    return carton;
}

function comprobacion(carton, numeros) {
    let aciertos = 0;
    for (let i = 0; i < carton.length; i++) {
        for (let j = 0; j < carton[i].length; j++) {
            if (numeros.includes(carton[i][j])) {
                aciertos++;
            }
        }
    }
    return aciertos;
}

function bingo(cartones) {
    let numeros = [];
    let ganador = -1;
    while (ganador == -1) {
        let num = Math.floor(Math.random() * 90) + 1;
        while (numeros.includes(numAleatorio)) {
            num = Math.floor(Math.random() * 90) + 1;
        }
        numeros.push(num);
        for (let i = 0; i < cartones.length; i++) {
            if (comprobacion(cartones[i], numeros) == 8) {
                ganador = i;
                break;
            }
        }
    }
    return [ganador, numeros];
}

let cartones = [];
for (let i = 0; i < 5; i++) {
    cartones.push(creacion());
}

let resultado = bingo(cartones);
document.write(`El ganador es el cartón número ${resultado[0] + 1} con los números: ${resultado[1]}`);