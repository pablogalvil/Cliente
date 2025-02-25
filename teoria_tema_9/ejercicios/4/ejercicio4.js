// Ejercicio 4 [3 puntos]: Candidatos
// Trabajas para una empresa tecnologica que necesita de un práctico. Para ello, el trabajador de recruiting debe de presentar 3 candidatos a su superior. Para ello realizará una peticion de datos a la sigueinte web candidatos:
// https://randomuser.me/api/?results=3
// Esta web debe tener 3 botones (uno por cada candidato) y cuando se clique mostrara la infomracion (nombre, edad, genero, email, telefono, ciudad y foto) de dicho candidato en el documento HTML
// Hay que tener en cuenta que puede tardar un poco, o si no esperas lo suficiente, que se repita o vuelva a pedir otros datos

async function obtenerCandidatos() {
  try {
    let respuesta = await fetch("https://randomuser.me/api/?results=3");
    let datos = await respuesta.json();
    return datos.results;
  } catch (error) {
    console.error("Error al obtener los candidatos:", error);
    return [];
  }
}

function mostrarCandidato(candidato) {
  let info = document.getElementById("info");
  info.innerHTML = `
        <h2>${candidato.name.first} ${candidato.name.last}</h2>
        <p><strong>Edad:</strong> ${candidato.dob.age}</p>
        <p><strong>Género:</strong> ${candidato.gender}</p>
        <p><strong>Email:</strong> ${candidato.email}</p>
        <p><strong>Teléfono:</strong> ${candidato.phone}</p>
        <p><strong>Ciudad:</strong> ${candidato.location.city}</p>
        <img src="${candidato.picture.large}" alt="Foto de ${candidato.name.first}">
    `;
}

document.addEventListener("DOMContentLoaded", async () => {
  let candidatos = await obtenerCandidatos();

  if (candidatos.length === 3) {
    document
      .getElementById("btn1")
      .addEventListener("click", () => mostrarCandidato(candidatos[0]));
    document
      .getElementById("btn2")
      .addEventListener("click", () => mostrarCandidato(candidatos[1]));
    document
      .getElementById("btn3")
      .addEventListener("click", () => mostrarCandidato(candidatos[2]));
  } else {
    console.error("No se pudieron cargar los candidatos.");
  }
});
