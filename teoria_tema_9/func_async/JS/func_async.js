let pro1 = new Promise((exito) => {
  exito("Promesa 1: hecho.");
});
let pro2 = new Promise((exito) => {
  exito("Promesa 2: hecho.");
});
let pro3 = new Promise((exito) => {
  exito("Promesa 3: hecho.");
});
let pro4 = new Promise((exito) => {
  setTimeout(() => {
    exito("Promesa 4: hecho.");
  }, 5000);
});

async function resultado() {
  let resultado1 = await pro1;
  console.log(resultado1);
  let resultado2 = await pro2;
  console.log(resultado2);
  let resultado3 = await pro3;
  console.log(resultado3);
  let resultado4 = await pro4;
  console.log(resultado4);
}

resultado();
