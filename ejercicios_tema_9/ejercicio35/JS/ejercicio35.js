async function loadCoffeeImages() {
  const products = document.querySelectorAll(".product");

  for (let i = 0; i < products.length; i++) {
    try {
      const response = await fetch("https://coffee.alexflipnote.dev/random");
      const data = await response.json();
      const imageUrl = data.image;

      const imageElement = products[i].querySelector(".coffee-image");

      imageElement.src = imageUrl;
    } catch (error) {
      console.error("Error al cargar la imagen del café:", error);
    }
  }
}

document.addEventListener("DOMContentLoaded", loadCoffeeImages);
