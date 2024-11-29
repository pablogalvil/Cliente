function filtrarCaracteresEspeciales(array) {
    //Caracteres especiales
    const regexEspeciales = /[^a-zñáéíóúü]/i;
    
    //Funcion que filtra segun los caracteres introducidos.
    return array.filter(palabra => regexEspeciales.test(palabra));
}

let palabras = ["hola", "mundo", "café", "mañana", "prueba^", "dinero$", "agua&"];
let palabrasConEspeciales = filtrarCaracteresEspeciales(palabras);
console.log(palabrasConEspeciales); 

