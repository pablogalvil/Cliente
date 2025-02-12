document.addEventListener("DOMContentLoaded", () => {
  const words = [
    "JAVASCRIPT",
    "PROGRAMACION",
    "AHORCADO",
    "DESARROLLO",
    "COMPUTADORA",
  ];
  let chosenWord = "";
  let guessedLetters = [];
  let mistakes = 0;
  const maxMistakes = 6;

  const wordDisplay = document.getElementById("word-display");
  const lettersContainer = document.getElementById("letters-container");
  const hangmanImage = document.getElementById("hangman-image");
  const messageDisplay = document.getElementById("message");
  const restartButton = document.getElementById("restart");

  function chooseWord() {
    return words[Math.floor(Math.random() * words.length)];
  }

  function displayWord() {
    wordDisplay.textContent = chosenWord
      .split("")
      .map((letter) => (guessedLetters.includes(letter) ? letter : "_"))
      .join(" ");
  }

  function createLetterButtons() {
    lettersContainer.innerHTML = "";
    for (let i = 65; i <= 90; i++) {
      let letter = String.fromCharCode(i);
      let button = document.createElement("button");
      button.textContent = letter;
      button.classList.add("letter-button");
      button.addEventListener("click", () => handleGuess(letter));
      lettersContainer.appendChild(button);
    }
  }

  function handleGuess(letter) {
    if (guessedLetters.includes(letter) || mistakes >= maxMistakes) return;

    guessedLetters.push(letter);

    if (!chosenWord.includes(letter)) {
      mistakes++;
      hangmanImage.src = `images/${mistakes}.png`;
    }

    displayWord();
    checkGameStatus();
  }

  function checkGameStatus() {
    if (!wordDisplay.textContent.includes("_")) {
      messageDisplay.textContent = "¡Ganaste! 🎉";
      disableButtons();
    } else if (mistakes >= maxMistakes) {
      messageDisplay.textContent = `Perdiste 😞 La palabra era: ${chosenWord}`;
      disableButtons();
    }
  }

  function disableButtons() {
    document.querySelectorAll(".letter-button").forEach((button) => {
      button.disabled = true;
    });
  }

  function startGame() {
    chosenWord = chooseWord();
    guessedLetters = [];
    mistakes = 0;
    hangmanImage.src = "images/0.png";
    messageDisplay.textContent = "";
    displayWord();
    createLetterButtons();
  }

  restartButton.addEventListener("click", startGame);

  startGame();
});
