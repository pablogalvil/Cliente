let mapa = new Map();

mapa.set("Madrid", {latitud: `40°31′42.24″`, longitud: `3°48′54.00″`});
mapa.set("Sevilla", {latitud: `40°31′42.24″`, longitud: `0°52′58.98″`});
mapa.set("Zaragoza", {latitud: `41°39′06.00″`, longitud: `0°52′58.98″`});
mapa.set("Barcelona", {latitud: `41°39′06.00″`, longitud: `3°48′54.00″`});
mapa.set("Oviedo", {latitud: `41°39′06.00″`, longitud: `3°48′54.00″`});

for (let [ciudad, {latitud, longitud}] of mapa) {
    document.write(`La ciudad de ${ciudad} tiene una latitud de ${latitud} y una longitud de ${longitud} <br>`);
}
