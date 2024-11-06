function compruebaGanador(tablero) {
    //Compruebo por filas
    for (let i = 0; i < 3; i++) {
        if (tablero[i][0] === tablero[i][1] && tablero[i][1] === tablero[i][2]) {
            return "Gana " + tablero[i][0];
        }
    }

    //Compruebo por columnas
    for (let i = 0; i < 3; i++) {
        if (tablero[0][i] === tablero[1][i] && tablero[1][i] === tablero[2][i]) {
            return "Gana " + tablero[0][i];
        }
    }

    //Compruebo por diagonales
    if (tablero[0][0] === tablero[1][1] && tablero[1][1] === tablero[2][2]) {
        return "Gana " + tablero[0][0];
    }
    if (tablero[0][2] === tablero[1][1] && tablero[1][1] === tablero[2][0]) {
        return "Gana " + tablero[0][2];
    }

    return "Empate";
}

let tablero = [
    ["X", "O", "X"],
    ["O", "X", "O"],
    ["X", "O", "X"]
];

document.write(compruebaGanador(tablero));