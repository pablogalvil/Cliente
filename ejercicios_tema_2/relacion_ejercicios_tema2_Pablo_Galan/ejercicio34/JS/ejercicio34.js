let diccionario = new Map();

diccionario.set("hola", {
    ingles: "hello",
    aleman: "hallo",
    frances: "bonjour"
});

diccionario.set("adios", {
    ingles: "goodbye",
    aleman: "auf wiedersehen",
    frances: "au revoir"
});

diccionario.set("comida", {
    ingles: "meal",
    aleman: "essen",
    frances: "repas"
});

diccionario.set("bienvenido", {
    ingles: "welcome",
    aleman: "willkommen",
    frances: "bienvenue"
});

diccionario.set("perro", {
    ingles: "dog",
    aleman: "hund",
    frances: "chien"
});

diccionario.forEach((idioma, palabra) => {
    document.write(`La palabra "${palabra}" se traduce como:<br>`);
    document.write(`Inglés: ${idioma.ingles}<br>`);
    document.write(`Alemán: ${idioma.aleman}<br>`);
    document.write(`Francés: ${idioma.frances}<br><br>`);
});