let numFijo = 13;
let numUsuario = prompt("Introduce un numero");
let resultado = numUsuario - numFijo;
if (resultado > 13){
    resultado = Math.abs((resultado) * 2);
    document.write (resultado);
}else {
    document.write (resultado);
}