let nombreVariable = prompt("Ingresa el nombre de la variable:");

let valorVariable = prompt("Ingresa el valor para la variable:");

//Las meto en un array porque no se otra forma de hacerlo
let variables = {};
variables[nombreVariable] = valorVariable;

console.log(`La variable '${nombreVariable}' tiene el valor: ${variables[nombreVariable]}`);