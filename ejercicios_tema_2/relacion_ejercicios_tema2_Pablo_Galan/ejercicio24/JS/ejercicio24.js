function copiar(array) {
    let arrayCopia = [];
    for (let i = 0; i < array.length; i++) {
        arrayCopia.push(array[i]);
    }
    return arrayCopia;
}

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let arrayCopia = copiar(array);

document.write(`El array original es : ${array.join(", ")}<br>`);

document.write(`El array copiado es : ${arrayCopia.join(", ")}`);