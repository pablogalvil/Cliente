document.addEventListener("DOMContentLoaded", async function () {
  const apiUrl =
    "https://api.tutiempo.net/json/?lan=es&apid=zwDX4azaz4X4Xqs&lid=3768";

  try {
    const response = await fetch(apiUrl);
    const data = await response.json();

    if (data.hour_hour) {
      mostrarDatosClima(data.hour_hour);
    } else {
      console.error("No se encontraron datos de clima por horas");
    }
  } catch (error) {
    console.error("Error al obtener datos del clima: ", error);
  }
});

function mostrarDatosClima(datos) {
  const tabla = document.getElementById("tabla-clima");
  tabla.innerHTML = "";

  const encabezado = `<tr>
        <th>Hora</th>
        <th>Temperatura (°C)</th>
        <th>Estado</th>
        <th>Ícono</th>
    </tr>`;

  tabla.innerHTML += encabezado;

  Object.keys(datos).forEach((hora) => {
    const clima = datos[hora];
    let img = "";
    switch (clima.text) {
      case "Cubierto":
        img = "cubierto.png";
        break;
      case "Parcialmente nuboso":
        img = "parcialmentenuboso.png";
        break;
      case "Muy nuboso":
        img = "muynuboso.png";
        break;
      case "Despejado":
        img = "soleado.png";
        break;
      case "Nubes dispersas":
        img = "nubesdispersas.png";
        break;
    }
    const fila = `<tr>
            <td>${clima.hour}</td>
            <td>${clima.temperature}°C</td>
            <td>${clima.text}</td>
            <td><img src="./img/${img}" alt="${clima.text}" width="40"></td>
        </tr>`;

    tabla.innerHTML += fila;
  });
}
