// Función para obtener todas las cookies
function getCookies() {
  return document.cookie.split(";").filter((cookie) => cookie.trim() !== "");
}

// Función para borrar una cookie
function deleteCookie(name) {
  document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
}

// Función para comprobar y eliminar cookies
function checkAndDeleteCookies() {
  const cookies = getCookies();
  const estado = document.getElementById("estado");

  if (cookies.length > 0) {
    // Mostramos las cookies antes de eliminarlas
    const nombresCookies = cookies.map((cookie) => cookie.split("=")[0].trim());
    estado.textContent = `Cookies encontradas: ${nombresCookies.join(
      ", "
    )}. Eliminando...`;

    // Eliminamos cada cookie encontrada
    nombresCookies.forEach((name) => deleteCookie(name));
    console.log("Cookies eliminadas:", nombresCookies);
  } else {
    estado.textContent = "No se encontraron cookies.";
    console.log("No hay cookies para eliminar.");
  }
}

// Ejecutamos la comprobación cada 10 segundos
setInterval(checkAndDeleteCookies, 10000);
