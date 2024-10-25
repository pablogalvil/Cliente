let fecha = new Date();
let navidad = new Date(fecha.getFullYear(), 11, 25);

//Si ya estamos en navidad, se incrementa en 1 el año para saber que queda exactamente 1 año
if (fecha.getMonth() == 11 && fecha.getDate() > 25) {
    navidad.setFullYear(fecha.getFullYear() + 1);
}

//Dividimos navidad menos fecha entre el producto de milisegundos, segundos, minutos y horas
let dias = (navidad - fecha) / (1000 * 60 * 60 * 24);

document.write(`Quedan ${parseInt(dias)} días para navidad.`);