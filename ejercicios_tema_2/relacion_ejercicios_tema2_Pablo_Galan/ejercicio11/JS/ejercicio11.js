function info(cadena){
    if(cadena.toUpperCase() == cadena){
        document.write("La cadena introducida es toda en mayúsculas");
    }else if(cadena.toLowerCase() == cadena){
        document.write("La cadena introducida es toda en minúsculas");
    }else{
        document.write("La cadena introducida es una mezcla de mayúsculas y minúsculas");
    }
}

let cadena = prompt("Introduce una cadena");

info(cadena);