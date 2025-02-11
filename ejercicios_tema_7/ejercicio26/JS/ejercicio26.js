document.addEventListener("DOMContentLoaded", () => {
  const grid = document.getElementById("caja");
  const timerDisplay = document.getElementById("tiempo");
  let colors = [];
  let selected = [];
  let startTime = Date.now();
  let matchedPairs = 0;

  function shuffle(array) {
    return array.sort(() => Math.random() - 0.5);
  }

  function generateColors() {
    const baseColors = [
      "red",
      "blue",
      "green",
      "yellow",
      "purple",
      "orange",
      "pink",
      "cyan",
      "lime",
      "brown",
      "teal",
      "magenta",
      "gray",
      "gold",
      "navy",
    ];
    colors = shuffle([...baseColors, ...baseColors]);
  }

  function createGrid() {
    generateColors();
    for (let i = 0; i < 30; i++) {
      const box = document.createElement("div");
      box.classList.add("box");
      box.dataset.color = colors[i];
      box.addEventListener("click", () => revealBox(box));
      grid.appendChild(box);
    }
  }

  function revealBox(box) {
    if (selected.length < 2 && !box.classList.contains("matched")) {
      box.style.backgroundColor = box.dataset.color;
      box.classList.add("revealed");
      selected.push(box);
      if (selected.length === 2) checkMatch();
    }
  }

  function checkMatch() {
    setTimeout(() => {
      if (selected[0].dataset.color === selected[1].dataset.color) {
        selected.forEach((box) => box.classList.add("matched"));
        matchedPairs++;
        if (matchedPairs === 15) endGame();
      } else {
        selected.forEach((box) => {
          box.style.backgroundColor = "black";
          box.classList.remove("revealed");
        });
      }
      selected = [];
    }, 500);
  }

  function updateTimer() {
    let elapsedTime = Math.floor((Date.now() - startTime) / 1000);
    timerDisplay.textContent = `Tiempo: ${elapsedTime}s`;
    if (matchedPairs < 15) requestAnimationFrame(updateTimer);
  }

  function endGame() {
    alert(
      `¡Lo has logrado tardando ${Math.floor(
        (Date.now() - startTime) / 1000
      )} segundos!`
    );
  }

  createGrid();
  updateTimer();
});
