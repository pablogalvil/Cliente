function filtro(array){
    let arrayNuevo = [];
    for (let i = 0; i < array.length; i++){
        if (!isNaN(array[i]) && array[i] != null && array[i] != '"' && array[i] != 0 && array[i] != undefined && array[i] != false){
            arrayNuevo.push(array[i]);
        }
    }
    return arrayNuevo;
}

let array = [NaN, 0, 15, false, -22, '"',undefined, 47, null];

let arrayFiltrado = filtro(array);

document.write(`El array filtrado es : ${arrayFiltrado.join(", ")}`);