function calculos(numeros) {
    if (numeros.length < 4) {
        alert("Debes proporcionar al menos 4 numeros");
    }
    let suma = numeros.reduce((acum, num) => acum + num);
    let media = suma / numeros.length;
    let mult = numeros[0] * numeros[numeros.length - 1];
    let div = numeros[1] / numeros[numeros.length - 2];
    return { suma, media, mult, div };
}

let cantidad = prompt("Introduce la cantidad de numeros");
let numeros = [];
for (let i = 0; i < cantidad; i++) {
    let num = parseFloat(prompt(`Introduce el numero ${i+1}`));
    while (isNaN(num)) {
        num = parseFloat(prompt(`Introduce el numero ${i+1}`));
    }
    numeros.push(num);
}

let resultado = calculos(numeros);
document.write(`<br>La suma de los numeros es: ${resultado.suma}`);
document.write(`<br>La media de los numeros es: ${resultado.media}`);
document.write(`<br>La multiplicacion del primer y ultimo numero es: ${resultado.mult}`);
document.write(`<br>La division del segundo y penultimo numero es: ${resultado.div}`);