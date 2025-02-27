export function realizarPedido() {
  const productos = {
    Pan: 10,
    Leche: 5,
    Aceite: 20,
  };

  const nombreProducto = prompt("Introduce un producto");
  const cantidad = parseInt(prompt("Introduce una cantidad"));

  if (!productos[nombreProducto]) {
    throw new Error("El nombre del producto no es el adecuado");
  }

  const stock = productos[nombreProducto];

  if (cantidad > stock) {
    throw new Error("La cantidad deseada excede el stock actual");
  }

  productos[nombreProducto] -= cantidad;
  const resultado = [nombreProducto, productos[nombreProducto]];
  return resultado;
}
