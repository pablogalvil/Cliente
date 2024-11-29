function esPrimo(num){
    primos = [2, 3, 5, 7, 11];

    for(let i = 0; i < primos.length; i++){
        if(num % primos[i] == 0 && num != primos[i]){
            return "no es primo";
        }
    }
    return "es primo";
}

let num = parseInt(prompt("Introduce un numero"));

document.write(`El numero ${esPrimo(num)}`)