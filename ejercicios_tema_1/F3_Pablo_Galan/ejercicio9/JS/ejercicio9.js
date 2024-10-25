let cadena = prompt("Introduce una cadena");

function mayusculas(cadena) {
    //Hago un array para separar las palabras.
    let arrayPalabras = cadena.split(" ");
    let resultado = "";
    //Hago un bucle para poner las letras en mayusculas e irlas añadiendo al resultado.
    for (let i = 0; i < arrayPalabras.length; i++) {
        resultado += arrayPalabras[i].charAt(0).toUpperCase() + arrayPalabras[i].slice(1) + " ";
    }
    //Quito los espacios ya que en la ultima palabra añade un espacio innecesario.
    return resultado.trim();
}

document.write(mayusculas(cadena));