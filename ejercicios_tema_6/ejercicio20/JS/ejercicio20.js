document.getElementById("aniadir").addEventListener("click", () => {
  const lista = document.getElementById("ingredientes");
  let ingrediente;

  while (ingrediente !== null) {
    ingrediente = prompt("Introduce un ingrediente:");
    if (ingrediente !== null) {
      lista.insertAdjacentHTML("beforeend", `<li>${ingrediente}</li>`);
    }
  }
});
