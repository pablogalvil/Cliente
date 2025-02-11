document.addEventListener("DOMContentLoaded", () => {
  window.removeVowel = function (vowel) {
    const parrafo = document.getElementById("parrafo");
    parrafo.innerText = parrafo.innerText.replace(new RegExp(vowel, "gi"), "");
  };
});
