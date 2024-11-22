function gradosCelsius(gradosFahrenheit){
    return ((gradosFahrenheit - 32) * 5) / 9;
}

let gradosFahrenheit = prompt("Introduce los grados Fahrenheit");

document.write(`El resultado es ${gradosCelsius(gradosFahrenheit)}`);