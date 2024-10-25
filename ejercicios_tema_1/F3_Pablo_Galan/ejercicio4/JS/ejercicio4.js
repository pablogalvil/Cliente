function extraer(){
    let cadena = prompt("Introduce una frase");
    let numCar = prompt("Introduce el numero de caracteres que quieres extraer");
    let resultado = cadena.substring(0, numCar);
    return resultado;
}

document.write(extraer());
