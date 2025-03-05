const baseURL = "https://swapi.dev/api/";

async function obtenerDatos() {
  const respuestas = await Promise.all([
    fetch(`${baseURL}people/1/`),
    fetch(`${baseURL}planets/1/`),
    fetch(`${baseURL}starships/2/`),
  ]);

  const datos = await Promise.all(
    respuestas.map((respuesta) => respuesta.json())
  );

  mostrarPersona(datos[0]);
  mostrarPlaneta(datos[1]);
  mostrarNave(datos[2]);
}

function mostrarPersona(persona) {
  const columnaPersona = document.getElementById("persona");
  columnaPersona.innerHTML = `
        <h2>Persona 1: ${persona.name}</h2>
        <p><strong>Género:</strong> ${persona.gender}</p>
        <p><strong>Color de pelo:</strong> ${persona.hair_color}</p>
        <p><strong>Color de ojos:</strong> ${persona.eye_color}</p>
        <p><strong>Fecha de nacimiento:</strong> ${persona.birth_year}</p>
    `;
}

function mostrarPlaneta(planeta) {
  const columnaPlaneta = document.getElementById("planeta");
  columnaPlaneta.innerHTML = `
        <h2>Planeta 1: ${planeta.name}</h2>
        <p><strong>Clima:</strong> ${planeta.climate}</p>
        <p><strong>Terreno:</strong> ${planeta.terrain}</p>
        <p><strong>Populación:</strong> ${planeta.population}</p>
    `;
}

function mostrarNave(nave) {
  const columnaNave = document.getElementById("nave");
  columnaNave.innerHTML = `
        <h2>Nave 1: ${nave.name}</h2>
        <p><strong>Modelo:</strong> ${nave.model}</p>
        <p><strong>Fabricante:</strong> ${nave.manufacturer}</p>
        <p><strong>Clase:</strong> ${nave.starship_class}</p>
    `;
}

obtenerDatos();
