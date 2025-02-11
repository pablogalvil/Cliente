document.addEventListener("DOMContentLoaded", () => {
  const caja = document.querySelector(".caja");

  function moveBox() {
    const maxX = window.innerWidth - 100;
    const maxY = window.innerHeight - 100;
    caja.style.left = Math.floor(Math.random() * maxX) + "px";
    caja.style.top = Math.floor(Math.random() * maxY) + "px";
  }

  moveBox();

  caja.addEventListener("mouseenter", moveBox);
});
