//Creamos las variables
let variableLet = "Variable let";
var variableVar = "Variable var";
const variableConst = "Variable const";

//Cambio el valor entre llaves para ver la diferencia entre let y var
{
    let variableLet = "He cambiado (let)";
    var variableVar = "He cambiado (var)";
    console.log(variableLet);
    console.log(variableVar);
}

//Cambio el valor de la constante entre un try catch ya que no me dejará cambiar su valor al ser const
try {
    variableConst = "He cambiado";
} catch (error) {
    console.log("No puedo cambiar el valor de una constante");
}

//Muestro las variables por consola
console.log(variableLet);
console.log(variableVar);
console.log(variableConst);
