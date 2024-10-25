let numero = prompt("Introduce un numero");
let resultado = 1;

for(let i = 1; i <= numero; i++){
    resultado = resultado * i;
}

console.log(`El factorial de ${numero} es ${resultado}`);