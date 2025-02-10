// Función para crear cookies
function setCookie(name, value, minutes) {
  const date = new Date();
  date.setTime(date.getTime() + minutes * 60 * 1000);
  const expires = `expires=${date.toUTCString()}`;
  document.cookie = `${name}=${value}; ${expires}; path=/`;
}

// Función para obtener el valor de una cookie
function getCookie(name) {
  const cookies = document.cookie.split(";");
  for (let cookie of cookies) {
    const [key, value] = cookie.trim().split("=");
    if (key === name) return value;
  }
  return null;
}

// Evento para crear la cookie
document.getElementById("crearCookie").addEventListener("click", () => {
  const nombre = prompt("Introduce tu nombre:");
  const edad = prompt("Introduce tu edad:");

  if (nombre && edad) {
    // Creamos las cookies
    setCookie("nombre", nombre, 30);
    setCookie("edad", edad, 30);
    alert("La cookie ha sido creada.");
  } else {
    alert("Debes proporcionar ambos datos.");
  }
});

// Evento para mostrar las cookies
document.getElementById("mostrarCookie").addEventListener("click", () => {
  const nombre = getCookie("nombre");
  const edad = getCookie("edad");

  if (nombre && edad) {
    document.getElementById(
      "resultado"
    ).innerText = `Nombre: ${nombre}, Edad: ${edad}`;
  } else {
    document.getElementById("resultado").innerText =
      "No se encontraron cookies almacenadas.";
  }
});
