// Ejercicio 1 [1.5 puntos]: Controlando errores
// Crea un archivo llamado primero.js que contenga dos métodos, uno de ellos debe pedir la edad al usuario tratamiento de excepciones (si el usuario no introduce un número). y otro método que según la edad calcula el año de nacimiento. Crea un segundo archivo llamado segundo.js que utilice los dos métodos anteriores sin tener que implementarlos dentro de este y con el que modo estricto. Además, en este tendras un metodo que haga uso del metodo de peticion de la edad y que segun esta devuelva un booleano si el usuario ha nacido antes del año 2006, tratando los errores con excepciones. Se produzcan o no errores debes pasar a mostrtar por consola un mensaje que diga que el programa ha terminado, utilizando la estructura correcta
"use strict";

// Función que solicita la edad al usuario y maneja errores si no se introduce un número.
export function pedirEdad() {
  let edad = prompt("Introduce tu edad:");
  try {
    if (isNaN(edad) || edad === "" || edad === null) {
      throw new Error(
        "¡Eso no es un número válido! Por favor, introduce una edad correcta."
      );
    }
    return parseInt(edad, 10); // Retorna la edad como número entero
  } catch (error) {
    alert(error.message); // Muestra el error al usuario en un alert
    return null; // Retorna null si hay un error
  }
}

// Función que calcula el año de nacimiento según la edad proporcionada.
export function calcularAnioNacimiento(edad) {
  const anioActual = new Date().getFullYear();
  return anioActual - edad;
}
