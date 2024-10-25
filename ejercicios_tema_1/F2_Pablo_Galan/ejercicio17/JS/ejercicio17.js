let numFijo = 19;
let numUsuario = prompt("Introduce un numero");
let resultado = Math.abs(numUsuario - numFijo);
if (numUsuario > 19){
    resultado = resultado * 3;
    document.write (resultado);
}else {
    document.write (resultado);
}