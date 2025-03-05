const domCargado = new Promise((resolve) => {
  document.addEventListener("DOMContentLoaded", () => {
    resolve("LISTO PARA ACTUAR");
  });
});

domCargado.then((mensaje) => {
  document.getElementById("estado").textContent = mensaje;
  console.log(mensaje);
});
