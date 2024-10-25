let fechaUsuario = prompt("Introduce una fecha (yyyy-mm-dd)");
let fecha = new Date(fechaUsuario);

function obtenerNombreMes(fecha) {
    const meses = [
        "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
        "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
    ];
    return meses[fecha.getMonth()];
}

document.write(`El nombre del mes es: ${obtenerNombreMes(fecha)}`);
