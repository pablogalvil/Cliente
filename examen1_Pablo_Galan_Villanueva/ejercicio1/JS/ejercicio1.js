let numero = prompt("Introduce un numero");
let numero_restado = numero;

//Espacio, ponemos 2 para que quede bien
let espacio = "&nbsp&nbsp";
//Asterisco
let asterisco = "*";

//Patron que mostraremos
let patron = "&nbsp&nbsp";

for(let i = 0; i < numero;i++){
    //Bucle que añade asteriscos
    for(let j = 0; j < numero_restado; j++){
        patron += asterisco;
    }
    //Restamos el numero para crear menos asteriscos
    numero_restado--;
    //br para que se pongan por debajo
    patron += "<br>";
    //Bucle para poner espacios
    for(let j = numero_restado; j <= numero; j++){
        patron += espacio;
    }
}
document.write(patron);