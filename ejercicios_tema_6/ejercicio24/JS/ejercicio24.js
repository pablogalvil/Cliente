document.getElementById("generarTabla").addEventListener("click", () => {
  const filas = parseInt(prompt("Introduce el número de filas:"), 10);
  const columnas = parseInt(prompt("Introduce el número de columnas:"), 10);

  if (isNaN(filas) || isNaN(columnas) || filas <= 0 || columnas <= 0) {
    alert("Por favor, introduce valores válidos para filas y columnas.");
    return;
  }

  // Generamos la tabla
  const tablaContenedor = document.getElementById("tablaContenedor");
  tablaContenedor.innerHTML = "";
  const tabla = document.createElement("table");
  let html = "";

  for (let i = 0; i < filas; i++) {
    html += "<tr>";
    for (let j = 0; j < columnas; j++) {
      html += `<td>${Math.floor(Math.random() * 100)}</td>`;
    }
    html += "</tr>";
  }

  tabla.innerHTML = html;
  tablaContenedor.insertAdjacentElement("beforeend", tabla);

  // Contamos las filas y columnas detectadas
  const filasDetectadas = tabla.querySelectorAll("tr").length;
  const columnasDetectadas =
    filasDetectadas > 0 ? tabla.querySelector("tr").children.length : 0;

  console.log(`Filas detectadas: ${filasDetectadas}`);
  console.log(`Columnas detectadas: ${columnasDetectadas}`);
});
