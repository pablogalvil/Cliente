document.addEventListener("DOMContentLoaded", () => {
  const cajaVerde = document.getElementById("cajaVerde");
  const cajaRoja = document.getElementById("cajaRoja");
  const mensaje = document.getElementById("mensaje");
  let widthVerde = 10;
  let widthRoja = 10;
  const maxWidth = 500;

  function ganador() {
    if (widthVerde >= maxWidth) {
      document.removeEventListener("keydown", tecla);
      mensaje.innerText = "El ganador es el verde";
      cajaVerde.style.width = maxWidth + "px";
      cajaRoja.style.width = widthRoja + "px";
    } else if (widthRoja >= maxWidth) {
      document.removeEventListener("keydown", tecla);
      mensaje.innerText = "El ganador es el rojo";
      cajaRoja.style.width = maxWidth + "px";
      cajaVerde.style.width = widthVerde + "px";
    }
  }

  function tecla(event) {
    console.log("Tecla presionada:", event.key);
    if (event.key.toLowerCase() === "a") {
      widthVerde += 5;
      cajaVerde.style.width = widthVerde + "px";
    } else if (event.key.toLowerCase() === "ñ") {
      widthRoja += 5;
      cajaRoja.style.width = widthRoja + "px";
    }
    ganador();
  }

  document.addEventListener("keydown", tecla);
});
