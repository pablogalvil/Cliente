document.addEventListener("DOMContentLoaded", () => {
  const lista = document.getElementById("lista");
  const btnOrdenar = document.getElementById("ordenar");
  const btnAgregar = document.getElementById("agregar");

  lista.addEventListener("click", (event) => {
    if (event.target.classList.contains("remove")) {
      event.target.parentElement.remove();
    }
  });

  btnOrdenar.addEventListener("click", () => {
    const elementos = Array.from(lista.children);
    elementos.sort((a, b) => a.textContent.localeCompare(b.textContent));
    lista.innerHTML = "";
    elementos.forEach((el) => lista.appendChild(el));
  });

  btnAgregar.addEventListener("click", () => {
    const nuevoTexto = prompt("Introduce el texto del nuevo elemento:");
    if (nuevoTexto) {
      const nuevoElemento = document.createElement("li");
      nuevoElemento.innerHTML = `${nuevoTexto} <button class="remove">&times;</button>`;
      lista.appendChild(nuevoElemento);
    }
  });
});
