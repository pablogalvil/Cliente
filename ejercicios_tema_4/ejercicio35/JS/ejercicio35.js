function lanzarDados(numLanzamientos) {
    let maxPuntuacion = 0;
    let lanzamientoGanador;
    for (let i = 0; i < numLanzamientos; i++) {
        let dado1 = Math.floor(Math.random() * 6) + 1;
        let dado2 = Math.floor(Math.random() * 6) + 1;
        let puntuacion = dado1 + dado2;
        if (puntuacion > maxPuntuacion) {
            maxPuntuacion = puntuacion;
            lanzamientoGanador = [dado1, dado2];
        }
    }
    return lanzamientoGanador;
}

let numLanzamientos = parseInt(prompt("Introduce el número de lanzamientos"));
let resultado = lanzarDados(numLanzamientos);
document.write(`El lanzamiento ganador es: ${resultado[0]} y ${resultado[1]}`);