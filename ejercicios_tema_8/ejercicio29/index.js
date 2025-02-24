function guardarDatos() {
  const vehiculo = {
    marca: document.getElementById("marca").value,
    modelo: document.getElementById("modelo").value,
    bastidor: document.getElementById("bastidor").value,
    cilindrada: document.getElementById("cilindrada").value,
    puertas: document.getElementById("puertas").value,
    color: document.getElementById("color").value,
    propietario: {
      nombre: document.getElementById("nombre").value,
      apellidos: document.getElementById("apellidos").value,
      direccion: document.getElementById("direccion").value,
      telefono: document.getElementById("telefono").value,
      correo: document.getElementById("correo").value,
    },
  };
  sessionStorage.setItem("vehiculo", JSON.stringify(vehiculo));
  mostrarDatos();
}

function mostrarDatos() {
  const datosGuardados = sessionStorage.getItem("vehiculo");
  if (datosGuardados) {
    const vehiculo = JSON.parse(datosGuardados);
    document.getElementById("datosMostrados").innerHTML = `
            <p><strong>Marca:</strong> ${vehiculo.marca}</p>
            <p><strong>Modelo:</strong> ${vehiculo.modelo}</p>
            <p><strong>Número de Bastidor:</strong> ${vehiculo.bastidor}</p>
            <p><strong>Cilindrada:</strong> ${vehiculo.cilindrada}</p>
            <p><strong>Número de Puertas:</strong> ${vehiculo.puertas}</p>
            <p><strong>Color:</strong> ${vehiculo.color}</p>
            <h3>Propietario</h3>
            <p><strong>Nombre:</strong> ${vehiculo.propietario.nombre}</p>
            <p><strong>Apellidos:</strong> ${vehiculo.propietario.apellidos}</p>
            <p><strong>Dirección:</strong> ${vehiculo.propietario.direccion}</p>
            <p><strong>Teléfono:</strong> ${vehiculo.propietario.telefono}</p>
            <p><strong>Correo Electrónico:</strong> ${vehiculo.propietario.correo}</p>
        `;
  } else {
    document.getElementById("datosMostrados").innerHTML =
      "<p>No hay datos guardados.</p>";
  }
}

document.addEventListener("DOMContentLoaded", mostrarDatos);
