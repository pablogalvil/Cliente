document.addEventListener("DOMContentLoaded", () => {
  //Creamos el array de palabras.
  const words = [];
  //Le pedimos un numero de palabras y luego insertamos dicho numero de palabras.
  let numWords = prompt("Cuantas palabras quieres?");
  for (let i = 0; i < numWords; i++) {
    words.push(prompt("Introduce una palabra").toUpperCase());
  }
  //Variables que usare.
  let chosenWord = "";
  let guessedLetters = [];
  let mistakes = 0;
  const maxMistakes = 5;
  let letters = [];
  //Sacamos los elementos del html que usaremos.
  const wordDisplay = document.getElementById("word-display");
  const lettersContainer = document.getElementById("letters-container");
  const hangmanImage = document.getElementById("hangman-image");
  const messageDisplay = document.getElementById("message");
  const hintButton = document.getElementById("hint");
  const failedContainer = document.getElementById("failed");

  /**
   * Funcion que elige una palbra del array de palabras que se ha insertado.
   * @returns Palabra dentro del array.
   */
  function chooseWord() {
    return words[Math.floor(Math.random() * words.length)];
  }

  /**
   * Funcion que muestra las letras acertadas.
   */
  function displayWord() {
    wordDisplay.textContent = chosenWord
      .split("")
      .map((letter) => (guessedLetters.includes(letter) ? letter : "_"))
      .join(" ");
    letters = chosenWord.split("");
  }

  /**
   * Funcion que saca la letra mas repetida para darla como pista
   * @returns Palabra mas buscada
   */
  function mostRepeated() {
    let count = 0;
    let mostRepeated = "";
    for (let i = 0; i < letters.length; i++) {
      for (let j = i + 1; j < letters.length; j++) {
        if (letters[i] === letters[j]) {
          count++;
        }
      }
      if (count > mostRepeated) {
        mostRepeated = letters[i];
      }
    }
    return mostRepeated;
  }

  function createLetterButtons() {
    lettersContainer.innerHTML = "";
    failedContainer.innerHTML = "";
    for (let i = 65; i <= 90; i++) {
      let letter = String.fromCharCode(i);
      let div = document.createElement("div");
      image = new Image();
      image.src = `img/${letter}.png`;
      image.style.width = "50px";
      image.style.height = "50px";
      div.appendChild(image);
      div.classList.add("letter-button");
      div.id = letter;
      image.addEventListener("dragstart", (e) => {
        e.dataTransfer.setData("text", letter);
      });

      lettersContainer.appendChild(div);
    }

    wordDisplay.addEventListener("dragover", (e) => {
      e.preventDefault();
    });

    wordDisplay.addEventListener("drop", (e) => {
      e.preventDefault();
      let letter = e.dataTransfer.getData("text");
      if (letter) {
        handleGuess(letter);
      }
    });
  }

  function handleGuess(letter) {
    if (guessedLetters.includes(letter) || mistakes >= maxMistakes) return;

    guessedLetters.push(letter);

    if (!chosenWord.includes(letter)) {
      mistakes++;
      messageDisplay.textContent = `Te quedan ${
        maxMistakes - mistakes
      } intentos`;
      if (mistakes < maxMistakes) {
        hangmanImage.src = `img/${mistakes}.png`;
      }
      failedContainer.appendChild(lettersContainer.querySelector(`#${letter}`));
      failedContainer.style.display = "flex";
      failedContainer.style.flexDirection = "row";
    } else {
      lettersContainer.querySelector(`#${letter}`).remove();
    }

    displayWord();
    checkGameStatus();
  }

  function checkGameStatus() {
    if (!wordDisplay.textContent.includes("_")) {
      messageDisplay.textContent = "¡Felicidades has ganado! ";
      disableButtons();
    } else if (mistakes >= maxMistakes) {
      messageDisplay.textContent = `Perdiste, pero no te desanimes, puedes volver a jugar! La palabra era: ${chosenWord}`;
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
    hangmanImage.src = "img/0.png";
    messageDisplay.textContent = "";
    displayWord();
    createLetterButtons();
  }

  hintButton.addEventListener("dblclick", () => {
    if (!guessedLetters.includes(mostRepeated())) {
      mistakes = mistakes + 2;

      messageDisplay.textContent = `Te quedan ${
        maxMistakes - mistakes
      } intentos`;

      hangmanImage.src = `img/${mistakes}.png`;

      handleGuess(mostRepeated());

      checkGameStatus();
    } else {
      alert("Ya has adivinado la letra de la pista");
    }
  });

  document.addEventListener("keypress", (e) => {
    if (e.key === "f" || e.key === "F") {
      startGame();
    }
  });

  startGame();
});
