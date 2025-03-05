const promesa = new Promise((resolve) => {
  setTimeout(() => {
    resolve("¡Promesa cumplida!");
  }, 2000);
});

promesa
  .then((mensaje) => {
    document.getElementById("estado").textContent = mensaje;
    console.log(mensaje);
    return "Primer paso completado";
  })
  .then((mensaje) => {
    document.getElementById("estado").textContent = mensaje;
    console.log(mensaje);
    return "Segundo paso completado";
  })
  .then((mensaje) => {
    document.getElementById("estado").textContent = mensaje;
    console.log(mensaje);
    return "Tercer paso completado";
  })
  .then((mensaje) => {
    document.getElementById("estado").textContent = mensaje;
    console.log(mensaje);
  });
