console.log("Mensaje consola");
document.write("Mensaje documento");

console.log("Así \"escapamos\" comillas dobles.");
console.log('Así \'escapamos\' comillas simples.');
console.log("Así \t tabulamos un texto.");
console.log("Así escapamos la barra \\ invertida.");
console.log("Así incluimos un\nsalto de línea.");

console.log('\tEl acceso a la ruta C:\\\\usuario\\ tarda 1\'23", algo considerado "lento" en la actualidad');

//Podemos usar el console.log para ver el camino que ha seguido nuestro código
//Ejemplo : 
let num1=3;
let num2=0;

console.log("Estoy antes de la condición");
if(num1==num2){
    num1=0;
    console.log("He entrado por el if");
}else{
    num1=0;
    console.log("He entrado por el else");
}

console.log("Estoy antes de la condición 2");
if(num1==num2){
    num1=0;
    console.log("He entrado por el if");
}else{
    num1=0;
    console.log("He entrado por el else");
}

console.log(`1. true*7= ${true*7}`);
console.log(`2. 9-false= ${9-false}`);
console.log(`3. 12+"5"= ${12+"5"}`);
console.log(`4. "67"+11= ${"67"+11}`);
console.log(`5. 12*"5"= ${12*"5"}`);
console.log(`6. "67"*11= ${"67"*11}`);
console.log(`7. "texto"+8= ${"texto"+8}`);
console.log(`8. undefined/7= ${undefined/7}`);
console.log(`9. null*6= ${null*6}`);
console.log(`10. Infinity-"texto"= ${Infinity-"texto"}`);
console.log(`11. NaN+4= ${NaN+4}`);

