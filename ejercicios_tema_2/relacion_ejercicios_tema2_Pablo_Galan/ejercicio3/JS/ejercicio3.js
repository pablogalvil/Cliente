let array = [1, 2, 3, 4, 1, 4, 6, 7, 8, 9, 2];

for (let i = 0; i < array.length; i++){
    let datoABuscar = array[i];
    for (let j = i + 1; j < array.length; j++) {
        if (datoABuscar == array[j]){
            array.splice(j, 1);
            j--;
        }
    }
}

document.write(`El array sin duplicados es : ${array.join(", ")}`);