document.addEventListener("keydown", function (event) {
  if (event.key >= "0" && event.key <= "9") {
    let imagen = document.getElementById("imagen");
    imagen.src = `img/${event.key}.png`;
  }
});
