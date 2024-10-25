let temperaturaActual = parseInt(prompt("Introduce la temperatura actual"));
let tipoTemperatura = prompt("Introduce el tipo de temperatura (C para celsius y F para farenheit)");

if (tipoTemperatura == "C"){
    let tempFarenheit = ((temperaturaActual * 9) / 5) + 32;
    document.write("La temperatura en farenheit es " + tempFarenheit + "ºF");
}else if (tipoTemperatura == "F"){
    let tempCelsius = ((temperaturaActual-32) * 5) / 9;
    document.write("La temperatura en celsius es " + tempCelsius + "ºC");
}else{
    document.write("Introduce un tipo de temperatura correcto");
}