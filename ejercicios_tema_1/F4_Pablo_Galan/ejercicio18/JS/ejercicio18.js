let numero = 0;

do {
    numero = parseInt(prompt("Introduce un numero mayor que 0"));
} while (numero <= 0);

document.write(`El numero introducido es ${numero}`);
