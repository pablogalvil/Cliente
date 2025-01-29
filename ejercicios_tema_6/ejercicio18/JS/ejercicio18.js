function addRowToTable() {
  let table = document.getElementById("insertar");
  let newRow = table.insertRow();
  let newCell = newRow.insertCell();
  let newText = document.createTextNode("Nueva celda");
  newCell.appendChild(newText);
}
