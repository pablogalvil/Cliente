document.getElementById("ordenarLista").addEventListener("click", () => {
  const lista = document.getElementById("lista");
  const items = Array.from(lista.children);

  // Preguntamos al usuario si desea ordenar la lista
  if (confirm("¿Quieres ordenar la lista alfabéticamente?")) {
    // Ordenamos alfabéticamente
    items.sort((a, b) => a.textContent.localeCompare(b.textContent));
  } else {
    // Desordenamos aleatoriamente
    items.sort(() => Math.random() - 0.5);
  }

  // Reconstruimos la lista con el nuevo orden
  lista.innerHTML = "";
  items.forEach((item) => lista.appendChild(item));
});
