// Selecciona los elementos
const paragraphs = document.querySelectorAll("p");
const links = document.querySelectorAll("a");
const spans = document.querySelectorAll("span");

// Cuenta los elementos
const paragraphCount = paragraphs.length;
const linkCount = links.length;
const spanCount = spans.length;

// Muestra los resultados en la consola
console.log(`Elementos <p>: ${paragraphCount}`);
console.log(`Elementos <a>: ${linkCount}`);
console.log(`Elementos <span>: ${spanCount}`);
