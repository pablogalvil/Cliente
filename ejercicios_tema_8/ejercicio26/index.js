import { geo } from "/utils/utils.js";

async function ejecutarGeo() {
  try {
    const permiso = await geo.askPermissions();
    console.log("Estado del permiso de geolocalización:", permiso);

    const longitud = await geo.getLongitude();
    console.log("Longitud:", longitud);

    const latitud = await geo.getLatitude();
    console.log("Latitud:", latitud);

    const altitud = await geo.getAltitude();
    console.log("Altitud:", altitud);
  } catch (error) {
    console.error("Error:", error);
  }
}

ejecutarGeo();
