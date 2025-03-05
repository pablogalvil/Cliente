const form = document.getElementById("search-form");
const resultsContainer = document.getElementById("search-results");

form.addEventListener("submit", async function (event) {
  event.preventDefault();

  const query = document.getElementById("query").value;
  if (!query) return;

  resultsContainer.innerHTML = "";

  try {
    const response = await fetch(
      `https://api.mercadolibre.com/sites/MLA/search?q=${encodeURIComponent(
        query
      )}`
    );

    if (!response.ok) {
      throw new Error("No se pudo obtener los resultados");
    }

    const data = await response.json();

    const products = data.results.slice(0, 3);

    products.forEach((product) => {
      const productElement = document.createElement("div");
      productElement.classList.add("product");

      productElement.innerHTML = `
                <img src="${product.thumbnail}" alt="${product.title}">
                <div class="title">${product.title}</div>
                <div class="price">$${product.price}</div>
                <a class="link" href="${product.permalink}" target="_blank">Ver en Mercado Libre</a>
            `;

      resultsContainer.appendChild(productElement);
    });
  } catch (error) {
    console.error("Error al cargar los resultados:", error);
    resultsContainer.innerHTML =
      "<p>Hubo un error al cargar los resultados. Intenta de nuevo más tarde.</p>";
  }
});
