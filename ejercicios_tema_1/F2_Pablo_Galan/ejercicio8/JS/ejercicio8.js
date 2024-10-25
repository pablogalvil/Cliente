let numAleatorio = parseInt((Math.random() * 10) + 1);
let numUsuario = parseInt(prompt("Introduce un numero"));

//Lo hago para poder ver que el numero aleatorio se genera correctamente
console.log(numAleatorio);

if(numUsuario == numAleatorio){
    alert("Buen trabajo");
}else{
    alert("No coincide");
}