function molerCafe(callback) {
  setTimeout(() => {
    document.getElementById("status").textContent = "Estado: Café molido";
    console.log("Café molido");
    callback();
  }, 2000);
}

function calentarAgua(callback) {
  setTimeout(() => {
    document.getElementById("status").textContent =
      "Estado: Agua caliente lista";
    console.log("Agua caliente lista");
    callback();
  }, 3000);
}

function prepararInfusion(callback) {
  setTimeout(() => {
    document.getElementById("status").textContent = "Estado: Infusión lista";
    console.log("Infusión lista");
    callback();
  }, 2000);
}

function servirCafe(callback) {
  setTimeout(() => {
    document.getElementById("status").textContent = "Estado: Café servido ☕";
    console.log("Café servido ☕");
    callback();
  }, 1000);
}

function prepararCafe() {
  document.getElementById("status").textContent =
    "Estado: Iniciando preparación...";
  console.log("Iniciando preparación...");

  molerCafe(() => {
    calentarAgua(() => {
      prepararInfusion(() => {
        servirCafe(() => {
          console.log("¡Disfruta tu café!");
        });
      });
    });
  });
}
