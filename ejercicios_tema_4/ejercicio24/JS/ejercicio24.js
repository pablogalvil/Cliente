function tabla(num){
    for(let i = 1; i <= 10; i++){
        document.write(`${num} * ${i} = ${num*i}<br>`);
    }
}

let numero = prompt("Introduce un numero");

tabla(numero);