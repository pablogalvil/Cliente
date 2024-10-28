function esPalindromo(cadena){
    let cadenaReves = "";
    let cadenaNueva = "";

    for (let i=cadena.length - 1; i >= 0 ; i--){
        if (cadena.charAt(i) == " "){
            continue;
        }else{
            cadenaReves += cadena.charAt(i);
        }
    }
    
    for (let i = 0; i < cadena.length; i++) {
        if (cadena.charAt(i) == " "){
            continue;
        }else{
            cadenaNueva += cadena.charAt(i);
        }
    }

    if (cadenaNueva == cadenaReves){
        return true;
    }else{
        return false;
    }
}

let cadena = prompt("Introduce una cadena");

if (esPalindromo(cadena)){
    document.write("La cadena introducida es un palindromo");
}else{
    document.write("La cadena introducida no es un palindromo");
}