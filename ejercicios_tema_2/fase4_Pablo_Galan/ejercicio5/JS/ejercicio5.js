let matriz = [[0,0,0],[0,0,0],[0,0,0]];

for (let i = 0; i<3; i++){
    for (let j = 0; j<3; j++){
        matriz[i][j] = prompt(`Introduce el numero en la posicion ${i+1}, ${j+1}`);
    }
}

document.write("Tu matriz es : <br>");

for (let i = 0; i<3; i++){
    for (let j = 0; j<3; j++){
        document.write(`${matriz[i][j]} `);
    }
    document.write("<br>");
}