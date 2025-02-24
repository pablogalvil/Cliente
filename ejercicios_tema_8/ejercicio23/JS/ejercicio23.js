function generateError(option) {
  switch (option) {
    case 1:
      throw new EvalError("Error al evaluar una expresión con eval().");
    case 2:
      function recurse() {
        recurse();
      }
      throw new Error("InternalError: Demasiada recursión en JavaScript.");
    case 3:
      throw new RangeError("El valor está fuera del rango permitido.");
    case 4:
      throw new ReferenceError("Referencia a una variable no definida.");
    case 5:
      throw new SyntaxError("Error de sintaxis en el código JavaScript.");
    case 6:
      throw new TypeError("Tipo de dato no válido para la operación.");
    case 7:
      throw new URIError("URI mal formada en encodeURI o decodeURI.");
    default:
      console.log("Opción no válida. Seleccione un número del 1 al 7.");
  }
}

// Manejo de errores con try...catch
try {
  let userOption = parseInt(
    prompt("Ingrese un número del 1 al 7 para generar un error: ")
  );
  generateError(userOption);
} catch (error) {
  console.error("Se ha capturado un error:", error.name, "-", error.message);
}
