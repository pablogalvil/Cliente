let prmpt = window.prompt("Indica una cantidad de pixeles, por favor:");
if (prmpt !== null) {
  console.log("El usuario pulsó aceptar en la introduccion de datos");
  let cnfrm = window.confirm(`Estas seguro de aplicar ${prmpt}px?`);
  if (cnfrm === false) {
    console.log("El usuario no estaba seguro");
  } else {
    console.log("El usuario estaba seguro");
    window.resizeBy(parseInt(prmpt), parseInt(prmpt));
    console.log(`Ventana redimensionada ${prmpt}x${prmpt}px`);
  }
} else {
  console.log("El usuario canceló la introducción de datos");
}
