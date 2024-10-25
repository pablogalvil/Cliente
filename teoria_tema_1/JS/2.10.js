let letra = "a";
let i = 0;
while(letra != "s"){
    if(i != 0){
        console.log("No ha habido suerte");
    }
    letra = prompt("Introduce una letra");
    i++;
}
console.log("Felicidades!");