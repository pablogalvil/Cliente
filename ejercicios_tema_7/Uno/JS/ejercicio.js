const colores = ["rojo", "azul", "verde", "amarillo"];
const numeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let mazo = [];
let manoJugador = [];
let cartaMesa;

function crearMazo() {
  mazo = [];
  colores.forEach((color) => {
    numeros.forEach((numero) => {
      mazo.push({ color, numero, img: `images/${color}_${numero}.png` });
    });
  });
  mazo = mazo.sort(() => Math.random() - 0.5);
}

function repartirCartas() {
  manoJugador = mazo.splice(0, 7);
  cartaMesa = mazo.pop();
  document.getElementById("cartaMesa").src = cartaMesa.img;
  mostrarMano();
}

function mostrarMano() {
  let jugadorDiv = document.getElementById("jugador");
  jugadorDiv.innerHTML = "";
  manoJugador.forEach((carta, index) => {
    let img = document.createElement("img");
    img.src = carta.img;
    img.className = "carta";
    img.onclick = () => jugarCarta(index);
    jugadorDiv.appendChild(img);
  });
}

function jugarCarta(indice) {
  let carta = manoJugador[indice];
  if (carta.color === cartaMesa.color || carta.numero === cartaMesa.numero) {
    cartaMesa = carta;
    document.getElementById("cartaMesa").src = cartaMesa.img;
    manoJugador.splice(indice, 1);
    mostrarMano();
    if (manoJugador.length === 0) alert("¡Ganaste!");
  } else {
    alert("No puedes jugar esa carta.");
  }
}

document.getElementById("mazo").onclick = () => {
  if (mazo.length > 0) {
    let cartaRobada = mazo.pop();
    manoJugador.push(cartaRobada);
    mostrarMano();
  } else {
    alert("No hay más cartas en el mazo.");
  }
};

crearMazo();
repartirCartas();
