function productoMatriz(matriz) {
    let producto = 1;
    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz[i].length; j++) {
            producto *= matriz[i][j];
        }
    }
    return producto;
}

let matriz = [[0,0,0],[0,0,0],[0,0,0]];

for (let i = 0; i<3; i++){
    for (let j = 0; j<3; j++){
        matriz[i][j] = prompt(`Introduce el numero en la posicion ${i+1}, ${j+1}`);
    }
}

document.write(`El producto de los valores de la matriz es: ${productoMatriz(matriz)}`);
