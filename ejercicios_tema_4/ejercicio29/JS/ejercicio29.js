function ordenarArrayConCeros(array) {
    for (let i = 0; i < array.length; i++) {
        array[i] = Math.floor(Math.random() * 100) + 1;
    }
    
    array.sort((a, b) => {
        if (a % 10 == 0 && b % 10 != 0) {
            return -1;
        } else if (a % 10 != 0 && b % 10 == 0) {
            return 1;
        } else {
            return a - b;
        }
    });
    
    return array;
}

let array = new Array(10);
console.log(ordenarArrayConCeros(array));