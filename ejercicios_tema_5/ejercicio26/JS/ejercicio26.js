const regulacion = /^[A-Za-záéíóúÁÉÍÓÚñÑ]+$/;

function validarNombre(nombre) {
  if (regulacion.test(nombre)) {
    console.log("El nombre es válido.");
  } else {
    console.log(
      "El nombre no es válido. Solo se permiten letras y caracteres de acentuación."
    );
  }
}

validarNombre("Francisco");
validarNombre("Miguel");
validarNombre("Dario123");
