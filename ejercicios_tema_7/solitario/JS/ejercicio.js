const palos = ["corazones", "diamantes", "tréboles", "picas"];
const numeros = [
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
let mazo = [];
let pilas = [[], [], [], []];

function crearMazo() {
  mazo = [];
  palos.forEach((palo) => {
    numeros.forEach((numero) => {
      mazo.push({ palo, numero, img: `images/${palo}_${numero}.png` });
    });
  });
  mazo = mazo.sort(() => Math.random() - 0.5);
}

function repartirCartas() {
  for (let i = 0; i < 4; i++) {
    pilas[i] = mazo.splice(0, 1);
  }
  mostrarMazo();
  mostrarPilas();
}

function mostrarMazo() {
  let mazoDiv = document.getElementById("mazo");
  mazoDiv.innerHTML = "";
  mazo.forEach((carta, index) => {
    let img = document.createElement("img");
    img.src = carta.img;
    img.alt = `${carta.palo} ${carta.numero}`;
    img.className = "carta";
    img.draggable = true;
    img.ondragstart = (event) => arrastrar(event, index, "mazo");
    mazoDiv.appendChild(img);
  });
}

function mostrarPilas() {
  let pilasDiv = document.getElementById("pilas");
  pilasDiv.innerHTML = "";
  pilas.forEach((pila, pilaIndex) => {
    let pilaDiv = document.createElement("div");
    pilaDiv.className = "pila";
    pilaDiv.ondrop = (event) => soltar(event, pilaIndex);
    pilaDiv.ondragover = (event) => event.preventDefault();

    if (pila.length > 0) {
      let carta = pila[pila.length - 1];
      let img = document.createElement("img");
      img.src = carta.img;
      img.alt = `${carta.palo} ${carta.numero}`;
      img.className = "carta";
      img.draggable = true;
      img.ondragstart = (event) => arrastrar(event, pilaIndex, "pila");
      pilaDiv.appendChild(img);
    }
    pilasDiv.appendChild(pilaDiv);
  });
}

function arrastrar(event, index, origen) {
  event.dataTransfer.setData("index", index);
  event.dataTransfer.setData("origen", origen);
}

function soltar(event, pilaIndex) {
  event.preventDefault();
  let index = event.dataTransfer.getData("index");
  let origen = event.dataTransfer.getData("origen");
  let carta;

  if (origen === "mazo") {
    carta = mazo.splice(index, 1)[0];
  } else {
    carta = pilas[index].pop();
  }

  pilas[pilaIndex].push(carta);
  mostrarMazo();
  mostrarPilas();
}

crearMazo();
repartirCartas();
