function esMultiplo10(num){
    if(num % 10 == 0){
        document.write(`El numero es multiplo de 10`);
    }else{
        document.write(`El numero no es multiplo de 10`);
    }
}

let numero = prompt("Introduce un numero");

esMultiplo10(numero);