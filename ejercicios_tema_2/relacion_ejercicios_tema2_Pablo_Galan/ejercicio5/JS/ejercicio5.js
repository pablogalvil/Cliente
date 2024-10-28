let array = [1, 2, 3, 4, 1, 4, 6, 7, 8, 9, 2];

let arrayNuevo = [];
for (let i = 0; i < array.length; i++){
    let datoABuscar = array[i];
    
    let duplicado = false;

    for (let j = i + 1; j < array.length; j++) {
        if (datoABuscar == array[j]){
            duplicado = true;
        }
    }

    if(duplicado){
        arrayNuevo.push(array[i]);
    }
}

document.write(`El array con solo los duplicados es : ${arrayNuevo.join(", ")}`);