function pintar(numero) {
    let patron = "";
    for (let i = 0; i < numero; i++) {
        for (let j = 0; j < numero; j++) {
            if (i == j || i + j == numero - 1) {
                patron += "*";
            } else {
                //Uso &nbsp para poner un espacio en blanco en html ya que con el + no reconoce el espacio en blanco normal
                patron += "&nbsp";
            }
        }
        patron += "<br>";
    }
    return patron;
}

let numero = prompt("Introduce un número impar: ");

let patron = pintar(numero);

document.write(patron);