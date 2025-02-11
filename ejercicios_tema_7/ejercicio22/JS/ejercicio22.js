document.addEventListener("DOMContentLoaded", () => {
  const parrafo = document.getElementById("parrafo");
  const btnLimpiar = document.getElementById("quitar");

  document.addEventListener("keydown", (event) => {
    if (event.key.length === 1) {
      parrafo.textContent += event.key;
    }
  });

  btnLimpiar.addEventListener("click", () => {
    parrafo.textContent = "";
  });
});
