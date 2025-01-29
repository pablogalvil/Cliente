function nombres() {
  let lista = document.getElementsByTagName("li");
  let primerElemento = lista[0].innerHTML;
  let ultimoElemento = lista[lista.length - 1].innerHTML;
  alert(`Primero : ${primerElemento} || Último : ${ultimoElemento}`);
}
