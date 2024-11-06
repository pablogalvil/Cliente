function arraysIguales(array1, array2) {
    let iguales = true;

    if (array1.length !== array2.length) {
        return false;
    }
    for (let i = 0; i < array1.length; i++) {
        for (let j = 0; j < array2.length; j++) {
            if (array1[i] == array2[j]) {
                iguales = true;
                break;
            }else{
                iguales = false;
            }
        }
        if (!iguales) {
            return false;
        }
    }
    return true;
}


let numArray1 = prompt("Introduce cuantos elementos tiene el primer array");
let numArray2 = prompt("Introduce cuantos elementos tiene el segundo array");

let array1 = [];
let array2 = [];

for (let i = 0; i < numArray1; i++) {
    array1.push(prompt(`Introduce el elemento ${i + 1} del array 1`));
}

for (let i = 0; i < numArray2; i++) {
    array2.push(prompt(`Introduce el elemento ${i + 1} del array 2`));
}

let sonIguales = arraysIguales(array1, array2);

if (sonIguales) {
    document.write(`Los arrays contienen los mismos elementos`);
} else {
    document.write(`Los arrays contienen elementos diferentes`);    
}