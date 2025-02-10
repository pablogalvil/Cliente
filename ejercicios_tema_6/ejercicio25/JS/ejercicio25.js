window.addEventListener("load", () => {
  setTimeout(() => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: "smooth",
    });
    console.log("Scroll automático completado.");
  }, 10000);
});
