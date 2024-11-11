let int1 = parseInt(prompt("Introduzca un numero: "));
let int2 = parseInt(prompt("Introduzca un numero: "));
let bool1 = prompt("Introduzca un boolean: ") == 'true';
let bool2 = prompt("Introduzca un boolean: ") == 'true';
let cadena1 = prompt("Introduzca una cadena de texto: ");
let cadena2 = prompt("Introduzca una cadena de texto: ");

//Creo el array
let valores = [int1, int2, bool1, bool2, cadena1, cadena2];

//Pasamos por el bucle
for (let i = 0; i < valores.length; i++) {
    if ((isNaN(valores[i]) || valores[i] == null || valores[i] == '') && i < 2) {

        int1 = parseInt(prompt("Introduzca un numero: "));
        int2 = parseInt(prompt("Introduzca un numero: "));
        bool1 = prompt("Introduzca un boolean: ") == 'true';
        bool2 = prompt("Introduzca un boolean: ") == 'true';
        cadena1 = prompt("Introduzca una cadena de texto: ");
        cadena2 = prompt("Introduzca una cadena de texto: ");

        valores = [int1, int2, bool1, bool2, cadena1, cadena2];
        i = -1;
    }
}
//Miramos cual es mas larga
if (valores[4].length > valores[5].length){
    document.write(`La cadena más larga es ${valores[4]}`);
}else{
    document.write(`La cadena más larga es ${valores[5]}`);
}
//Miramos las operaciones and y or
document.write(`<br>La operacion and es ${valores[0] && valores[1]} y la operacion or es ${valores[0] && valores[1]}`)
//Hacemos las operaciones
let suma = valores[0] + valores[1];
let resta = valores[0] - valores[1];
document.write(`<br>La suma de los dos numeros es ${suma} y la resta es ${resta}`);

//Ordenamos el array
let valoresOrdenados = [valores[2], valores[3], valores[4], valores[5], 
    //Miramos cual es mayor y menor para ordenarlos correctamente
    Math.max(valores[0], valores[1]), 
    Math.min(valores[0], valores[1])
];

//Sacamos el array ordenado
document.write(`<br>Los valores ordenados son [${valoresOrdenados}]`);