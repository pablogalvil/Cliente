let letra = "a";
let i = 0;
do{
    if(i != 0){
        console.log("No ha habido suerte");
    }
    letra = prompt("Introduce una letra");
    i++;
}while(letra != "s");
console.log("Felicidades!");