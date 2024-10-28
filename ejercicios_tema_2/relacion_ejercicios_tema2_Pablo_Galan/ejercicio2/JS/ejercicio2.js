let numero = parseInt(prompt("Introduce el numero"));
let resultado = numero;

for (let i = numero - 1; i > 0; i--){
    resultado = resultado * i;
}

document.write(`El factorial de ${numero} es ${resultado}`);