function multiplo3(array) {
    let arrayMultiplos = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 3 == 0) {
            arrayMultiplos.push(array[i]);
        }
    }
    return arrayMultiplos;
}

let array = [];

for (let i = 0; i < 10; i++) {
    array.push(Math.floor(Math.random() * 100));
}

let arrayMultiplos = multiplo3(array);
document.write(`Los elementos del array son ${array.join(", ")}<br>`);
document.write(`Los multiplos de 3 son: ${arrayMultiplos.join(", ")}`);