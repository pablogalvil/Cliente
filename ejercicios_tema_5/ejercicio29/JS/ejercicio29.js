const regulacion = /^https:\/\/[^\ñ]*\.es$/;

const urls = [
  "https://example.es",
  "https://ejemplo.com",
  "https://sitioñ.es",
  "https://pagina.es",
];

urls.forEach((url) => {
  if (regulacion.test(url)) {
    console.log(`${url} es una URL válida.`);
  } else {
    console.log(`${url} no es una URL válida.`);
  }
});
