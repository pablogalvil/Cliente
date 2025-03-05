// Cargar el archivo JSON local
fetch("JS/ejercicio33.json")
  .then((response) => response.json())
  .then((data) => {
    // Mostrar el nombre
    document.getElementById("nombre").textContent = data.nombre;

    // Mostrar la información de contacto
    document.getElementById("direccion").textContent = data.direccion;
    document.getElementById("telefono").textContent = data.telefono;
    document.getElementById("email").textContent = data.email;

    // Mostrar la educación
    const educacionList = document.getElementById("educacion");
    data.educacion.forEach((edu) => {
      const li = document.createElement("li");
      li.textContent = `${edu.titulo} - ${edu.universidad} (${edu.fecha})`;
      educacionList.appendChild(li);
    });

    // Mostrar la experiencia
    const experienciaList = document.getElementById("experiencia");
    data.experiencia.forEach((exp) => {
      const li = document.createElement("li");
      li.textContent = `${exp.puesto} en ${exp.empresa} (${exp.fecha}): ${exp.descripcion}`;
      experienciaList.appendChild(li);
    });

    // Mostrar las habilidades
    const habilidadesList = document.getElementById("habilidades");
    data.habilidades.forEach((habilidad) => {
      const li = document.createElement("li");
      li.textContent = habilidad;
      habilidadesList.appendChild(li);
    });

    // Mostrar los idiomas
    const idiomasList = document.getElementById("idiomas");
    data.idiomas.forEach((idioma) => {
      const li = document.createElement("li");
      li.textContent = `${idioma.idioma}: ${idioma.nivel}`;
      idiomasList.appendChild(li);
    });
  })
  .catch((error) => {
    console.error("Error al cargar el archivo JSON:", error);
  });
