document.getElementById("aplicar").addEventListener("click", () => {
  const caja = document.querySelector(".caja");

  const ancho = prompt("Introduce el ancho:");
  const alto = prompt("Introduce el alto:");
  const borderColor = prompt("Introduce el border color:");

  caja.setAttribute("data-width", `${ancho}px`);
  caja.setAttribute("data-height", `${alto}px`);
  caja.setAttribute("data-bordercolor", borderColor);

  const anchura = caja.getAttribute("data-width");
  const altura = caja.getAttribute("data-height");
  const borde = caja.getAttribute("data-bordercolor");

  caja.style.width = anchura;
  caja.style.height = altura;
  caja.style.border = `5px solid ${borde}`;
});
