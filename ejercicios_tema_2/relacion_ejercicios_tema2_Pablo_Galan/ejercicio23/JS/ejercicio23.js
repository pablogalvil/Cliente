function repetidos(array){
    let arrayRepetidos = [];
    for (let i = 0; i < array.length; i++){
        let datoABuscar = array[i];
        for (let j = i + 1; j < array.length; j++) {
            if (datoABuscar == array[j]){
                arrayRepetidos.push(datoABuscar);
                break;
            }
        }
    }
    return arrayRepetidos;
}

let array = [1, 2, 3, 4, 1, 4, 6, 7, 8, 9, 2];

let arrayRepetidos = repetidos(array);

document.write(`Los elementos del array son ${array.join(", ")}<br>`);

document.write(`Los elementos repetidos son ${arrayRepetidos.join(", ")}`);