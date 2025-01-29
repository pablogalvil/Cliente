let todoBody = document.getElementsByTagName("body")[0];
todoBody.addEventListener("keypress", (evento) => {
  console.log(`Lanzado KEYPRESS con la tecla ${evento.key}`);
});
todoBody.addEventListener("keydown", (evento) => {
  console.log(`Lanzado KEYDOWN con la tecla ${evento.key}`);
});
todoBody.addEventListener("keyup", (evento) => {
  console.log(`Lanzado KEYUP con la tecla ${evento.key}`);
});
