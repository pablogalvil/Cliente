let dias = prompt("Introduce los dias");
let horas = prompt("Introduce las horas");
let minutos = prompt("Introduce los minutos");

let segundos = 0;

horas += dias * 24;
minutos += horas * 60;
segundos += minutos * 60;

document.write("Son " + segundos + " segundos.");