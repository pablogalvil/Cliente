function traspuesta (matriz) {
    let traspuesta = [[0,0,0], [0,0,0], [0,0,0]];
    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz[i].length; j++) {
            traspuesta[j][i] = matriz[i][j];
        }
    }
    return traspuesta;
}
let matriz = [[0,0,0], [0,0,0], [0,0,0]];

for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
        matriz[i][j] = prompt(`Introduce el numero en la posicion ${i+1}, ${j+1}`);
    }
}

let matrizTraspuesta = traspuesta(matriz);

document.write("La matriz traspuesta es: <br>");

for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
        document.write(matrizTraspuesta[i][j] + " ");
    }
    document.write("<br>");
}