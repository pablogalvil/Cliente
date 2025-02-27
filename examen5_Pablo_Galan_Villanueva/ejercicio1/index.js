import { realizarPedido } from "./pedidos.js";

function pedir() {
  try {
    let resultado = realizarPedido();
    let div = document.getElementById("resultado");
    div.innerText = `El producto ${resultado[0]} ha sido pedido correctamente! Quedan ${resultado[1]} en stock`;
  } catch (error) {
    alert(error.message);
    return null;
  }
}

document.getElementById("pedido").addEventListener("click", pedir);
