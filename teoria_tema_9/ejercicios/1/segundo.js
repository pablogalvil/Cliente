"use strict";

// Importar las funciones desde el archivo primero.js
import { pedirEdad, calcularAnioNacimiento } from "./primero.js";

// Función que verifica si el usuario nació antes de 2006 o no.
function nacidoAntes2006() {
  let edad = pedirEdad(); // Pedir la edad al usuario
  if (edad === null) return; // Si hay un error en la edad, no continúa.

  const anioNacimiento = calcularAnioNacimiento(edad); // Calcular el año de nacimiento
  const nacidoAntes = anioNacimiento < 2006; // Verificar si nació antes de 2006

  // Mostrar el resultado en el HTML
  const resultado = document.getElementById("resultado");
  resultado.innerText = nacidoAntes
    ? "El usuario nació antes del 2006."
    : "El usuario nació en o después de 2006.";

  // Imprimir el mensaje en la consola
  console.log("El programa ha terminado.");
}

// Asignar el evento al botón "Verificar" para que ejecute la función.
document.getElementById("verificar").addEventListener("click", nacidoAntes2006);
