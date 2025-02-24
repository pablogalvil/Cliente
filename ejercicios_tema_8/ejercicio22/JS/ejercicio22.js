function error() {
  throw new Error("Este es un error crítico que detiene la aplicación.");
}

function exception() {
  try {
    let num = 10;
    let divisor = 0;
    if (divisor === 0) {
      throw new Error("No se puede dividir por cero.");
    }
    console.log(num / divisor);
  } catch (error) {
    console.error("Excepción capturada: ", error.message);
  }
}

function warning() {
  console.warn(
    "Advertencia: Se detectó un posible problema, pero la aplicación sigue funcionando."
  );
}

//Llamo a las funciones en orden para que no se detenga la aplicacion al llamar al error
try {
  warning(); // Muestra una advertencia
  exception(); // Maneja una excepción sin detener el programa
  error(); // Provoca un error crítico que detendrá el programa
} catch (error) {
  console.error("Error no manejado: ", error.message);
}
