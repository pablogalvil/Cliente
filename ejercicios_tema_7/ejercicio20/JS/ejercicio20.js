const caja = document.getElementById("caja");
let posX = window.innerWidth / 2 - 25;
let posY = window.innerHeight / 2 - 25;

caja.style.left = `${posX}px`;
caja.style.top = `${posY}px`;

document.addEventListener("keydown", (event) => {
  const step = 10;

  switch (event.key) {
    case "ArrowUp":
      posY = Math.max(0, posY - step);
      break;
    case "ArrowDown":
      posY = Math.min(window.innerHeight - 50, posY + step);
      break;
    case "ArrowLeft":
      posX = Math.max(0, posX - step);
      break;
    case "ArrowRight":
      posX = Math.min(window.innerWidth - 50, posX + step);
      break;
  }

  caja.style.left = `${posX}px`;
  caja.style.top = `${posY}px`;
});
