let fecha1 = new Date(prompt("Introduce la primera fecha (yyyy-mm-dd)"));
let fecha2 = new Date(prompt("Introduce la segunda fecha (yyyy-mm-dd)"));

function diferenciaDias(fecha1, fecha2) {
    let milisegundosPorDia = 1000 * 60 * 60 * 24;
    let diferenciaMilisegundos = Math.abs(fecha1 - fecha2);
    let diferenciaDias = Math.ceil(diferenciaMilisegundos / milisegundosPorDia);
    return diferenciaDias;
}

document.write(`La diferencia entre las fechas es de ${diferenciaDias(fecha1, fecha2)} días`);
