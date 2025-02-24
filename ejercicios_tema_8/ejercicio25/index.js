import axios from "axios";
import { formatData, getRandomNumber } from "./utils/utils.js";

// Función que saca datos de una API publica usando axios.
async function sacarDatos() {
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts/1"
    );
    console.log("Datos recibidos:");
    console.log(formatData(response.data)); // Función de utils
  } catch (error) {
    console.error("Error obteniendo los datos:", error);
  }
}

sacarDatos();

console.log("Número aleatorio generado:", getRandomNumber());
