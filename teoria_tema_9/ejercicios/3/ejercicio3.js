// Ejercicio 3 [2.5 puntos]: Asincronía en JavaScript (Asyn/await)
// Crea un programa en JavaScript que simule la sigueinte situacion de forma: Decides hornear una pizza en tu horno, y tu primer paso es precalentar el horno (esto requerirá un determinado tiempo para una temperatura por cada 50ºC serán 3 minutos). Así que estableces la temperatura deseada y empiezas a precalentar el horno.
// Mientras el horno se precalienta, eliges los ingredientes para la pizza que los elegira el usuario por teclado. Una vez que tienes los ingredientes haces la pizza en 5 minutos (debes crear un objeto: nombre, ingredientes y tiempo de horneado para 150ºC) y finalmente la pones en un molde para pizza. Pero... !Te queda tiempo!, así que coges una bebida y ves algo de television mientras esperas a que el horno emita un pitido cuando esté listo. Es hora de hacer la pizza y esperar que se haga hasta apagar el horno
// Muestra por consola los mensajes en el orden que cada una de las funciones que se han ido realizando. y pensando que tareas deben ser sincronas y asincronas
"use strict";

// Función que simula un tiempo de espera (asíncrona).
function esperar(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// Función para precalentar el horno de acuerdo con la temperatura.
async function precalentarHorno(temperatura) {
  const tiempo = (temperatura / 50) * 3 * 1000; // 3 minutos por cada 50°C
  actualizarEstado(`Precalentando el horno a ${temperatura}°C...`);
  await esperar(tiempo);
  actualizarEstado("¡El horno está listo!");
}

// Función que permite al usuario ingresar los ingredientes de la pizza.
function elegirIngredientes() {
  let ingredientes = prompt(
    "Introduce los ingredientes de la pizza (separados por comas):"
  );
  return ingredientes ? ingredientes.split(",") : [];
}

// Función principal para hacer la pizza.
async function hacerPizza() {
  let ingredientes = elegirIngredientes();
  if (ingredientes.length === 0) {
    actualizarEstado("No elegiste ingredientes. ¡Cancelando el proceso!");
    return;
  }

  actualizarEstado(
    "Preparando la pizza con los ingredientes: " + ingredientes.join(", ")
  );
  actualizarEstado(
    "Tomando una bebida y viendo TV mientras se precalienta el horno..."
  );

  await precalentarHorno(150); // Precalienta el horno a 150°C

  actualizarEstado("Metiendo la pizza al horno...");
  await esperar(5000); // Espera 5 segundos para simular el horneado

  actualizarEstado("¡La pizza está lista! Hora de disfrutar.");
}

// Función que actualiza el estado en la pantalla y también lo muestra en la consola.
function actualizarEstado(mensaje) {
  document.getElementById("estado").innerText = mensaje;
  console.log(mensaje);
}

// Asignar el evento para hacer la pizza cuando se hace clic en el botón.
document.getElementById("hornear").addEventListener("click", async () => {
  actualizarEstado("Iniciando proceso de preparación de la pizza...");
  await hacerPizza(); // Llamamos a la función para hacer la pizza, asegurándonos de esperar correctamente
});
