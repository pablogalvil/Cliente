let nombre = prompt("Introduce tu nombre");
let edad = parseInt(prompt("Introduce tu edad"));

if(edad <= 12){
    console.log(`%c${nombre} tiene ${edad} años y por tanto es niño`, "font-weight:bold; color:lightgreen");
}else if(edad <= 17){
    console.log(`%c${nombre} tiene ${edad} años y por tanto es adolescente`, "font-weight:bold; color:lightgreen");
}else if(edad <= 64){
    console.log(`%c${nombre} tiene ${edad} años y por tanto es trabajador`, "font-weight:bold; color:lightgreen");
}else{
    console.log(`%c${nombre} tiene ${edad} años y por tanto es jubilado`, "font-weight:bold; color:lightgreen");
}