function diagonal(matriz) {
    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz[i].length; j++) {
            if (i != j) {
                matriz[i][j] = 0;
            }
        }
    }
    return matriz;
}

let matriz = [];
for (let i = 0; i < 3; i++) {
    matriz[i] = [];
    for (let j = 0; j < 3; j++) {
        matriz[i][j] = prompt(`Introduce el elemento ${i + 1}, ${j + 1}`);
    }
}

diagonal(matriz);
document.write("La matriz  es: <br>");

for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
        document.write(`${matriz[i][j]} `);
    }
    document.write("<br>");
}
