function detectarClick() {
  return new Promise((resolve) => {
    const enlace = document.getElementById("miEnlace");
    enlace.addEventListener("click", () => {
      console.log("Enlace clickeado");
      resolve("click");
    });
  });
}

function detectarTecla() {
  return new Promise((resolve) => {
    document.addEventListener("keydown", (evento) => {
      if (evento.key === "g" || evento.key === "G") {
        console.log("Tecla G presionada");
        resolve("tecla G");
      }
    });
  });
}

function detectarPatron() {
  Promise.all([detectarClick(), detectarTecla()]).then(() => {
    document.getElementById("estado").textContent = "¡Patrón detectado!";
    console.log("¡Patrón detectado!");
  });
}

detectarPatron();
