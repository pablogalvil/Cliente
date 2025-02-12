const deck = [];
const suits = ["Picas", "Corazones", "Diamantes", "Tréboles"];
const values = [
  "A",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K",
];

let playerHand = [];
let dealerHand = [];
let playerScore = 0;
let dealerScore = 0;
let dealerHidden = true;

function createDeck() {
  deck.length = 0;
  for (let suit of suits) {
    for (let value of values) {
      deck.push({ value, suit });
    }
  }
  deck.sort(() => Math.random() - 0.5);
}

function getCardValue(card) {
  if (card.value === "A") return 11;
  if (["J", "Q", "K"].includes(card.value)) return 10;
  return parseInt(card.value);
}

function calculateScore(hand) {
  let score = hand.reduce((acc, card) => acc + getCardValue(card), 0);
  let aceCount = hand.filter((card) => card.value === "A").length;
  while (score > 21 && aceCount > 0) {
    score -= 10;
    aceCount--;
  }
  return score;
}

function renderHand(elementId, hand, hideSecondCard = false) {
  const handElement = document.getElementById(elementId);
  handElement.innerHTML = "";
  hand.forEach((card, index) => {
    const cardImg = document.createElement("img");
    if (hideSecondCard && index === 1) {
      cardImg.src = "back.jpg"; // Imagen del dorso de la carta
      cardImg.alt = "Carta oculta";
    } else {
      cardImg.src = `${card.value}${card.suit}.jpg`;
      cardImg.alt = card.value;
    }
    cardImg.classList.add("card");
    handElement.appendChild(cardImg);
  });
}

function updateUI() {
  renderHand("player-hand", playerHand);
  renderHand("dealer-hand", dealerHand, dealerHidden);
}

function checkWinner() {
  dealerHidden = false;
  updateUI();
  document.getElementById("hit").classList.add("hidden");
  document.getElementById("stand").classList.add("hidden");
  document.getElementById("restart").classList.remove("hidden");

  if (playerScore > 21) {
    document.getElementById("message").textContent = "Te pasaste, pierdes!";
  } else if (dealerScore > 21 || playerScore > dealerScore) {
    document.getElementById("message").textContent = "¡Ganaste!";
  } else if (playerScore < dealerScore) {
    document.getElementById("message").textContent = "La banca gana.";
  } else {
    document.getElementById("message").textContent = "Es un empate.";
  }
}

function startGame() {
  createDeck();
  playerHand = [deck.pop(), deck.pop()];
  dealerHand = [deck.pop(), deck.pop()];
  playerScore = calculateScore(playerHand);
  dealerScore = calculateScore(dealerHand);
  dealerHidden = true;
  updateUI();
  document.getElementById("message").textContent = "";
  document.getElementById("restart").classList.add("hidden");
  document.getElementById("hit").classList.remove("hidden");
  document.getElementById("stand").classList.remove("hidden");
}

document.getElementById("hit").addEventListener("click", () => {
  playerHand.push(deck.pop());
  playerScore = calculateScore(playerHand);
  updateUI();
  if (playerScore > 21) checkWinner();
});

document.getElementById("stand").addEventListener("click", () => {
  dealerHidden = false;
  while (dealerScore < 17) {
    dealerHand.push(deck.pop());
    dealerScore = calculateScore(dealerHand);
  }
  updateUI();
  checkWinner();
});

document.getElementById("restart").addEventListener("click", startGame);

startGame();
