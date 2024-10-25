let dni = prompt("Introduce tu dni sin la letra");

let letras = ["T", "R", "W", "A", "G", "M", "Y", "F", "P", "D", "X", "B", "N", "J", "Z", "S", "Q", "V", "H", "L", "C", "K", "E"];

let letraDni = dni % 23;

document.write(`La letra del dni es ${letras[letraDni]}`);