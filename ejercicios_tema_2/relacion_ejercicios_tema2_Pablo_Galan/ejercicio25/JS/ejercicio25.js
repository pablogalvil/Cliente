function repetidos(array) {
    let numeroRepetido = 0;
    let masRepetido = 0;

    for (let i = 0; i < array.length; i++) {
        let datoABuscar = array[i];
        let vecesRepetido = 0;
        for (let j = i + 1; j < array.length; j++) {
            if (datoABuscar == array[j]) {
                vecesRepetido++;
            }
        }
        if (vecesRepetido > masRepetido) {
            numeroRepetido = datoABuscar;
            masRepetido = vecesRepetido;
        }
    }

    let arrayRepetido = [numeroRepetido, masRepetido];
    return arrayRepetido;
}

let array = [1, 2, 3, 4, 1, 4, 4, 6, 7, 8, 9, 2];

let arrayRepetido = repetidos(array);

document.write(`El elemento que mas se repite es ${arrayRepetido[0]} y se repite ${arrayRepetido[1]} veces`);