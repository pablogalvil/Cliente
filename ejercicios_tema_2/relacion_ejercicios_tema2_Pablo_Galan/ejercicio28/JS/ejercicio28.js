let array = [[21,2,3,4], [45,32,22,9], [0,66,7,4], [-3,32,11,90], [59,-2,-63,15]];

let arrayNuevo = [];

for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array[i].length; j++) {
        arrayNuevo.push(array[i][j]);
    }
}

console.log(arrayNuevo);
document.write(`El array nuevo es: ${arrayNuevo.join(", ")}`);