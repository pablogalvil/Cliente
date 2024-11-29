/**
 * La funcion es una función recursiva que va restando 2 cada vez que las comprobaciones 
 * fallan hasta que los numeros a comprobar sean 0 o 1.
 * Si se hiciera sin recursividad, se haría con un bucle que resta dos cada vez que no se
 * cumplen las comprobaciones.
 * @param num 
 * @returns true o false
 */
function esPar(num){
    //Si es igual a 0 devolvemos true
    if (num == 0) {
        return true;
    }
    //Si es igual a 1 devolvemos false
    else if (num == 1) {
        return false;
    } 
    //Si no se cumple ninguna, llamamos a la funcion de nuevo restandole 2
    else{
        return esPar(num - 2);
    }
}

let num = prompt("Introduce un numero");

if(esPar(num)){
    document.write(`El numero ${num} es par`);
}else{
    document.write(`El numero ${num} es impar`);
}