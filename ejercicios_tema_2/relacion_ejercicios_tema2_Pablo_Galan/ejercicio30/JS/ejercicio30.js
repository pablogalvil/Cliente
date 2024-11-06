let followers = new Set();

//Añado cinco
followers.add("Pablo");
followers.add("Fran");
followers.add("Sergio");
followers.add("Dario");
followers.add("Miguel");

//Elimino dos de ellos
followers.delete("Fran");
followers.delete("Miguel");

//Añado otros siete
followers.add("Adrian");
followers.add("Jairo");
followers.add("Juanma");
followers.add("Diego");
followers.add("Patricia");
followers.add("Manolo");
followers.add("Maria");

//Muestro el numero de seguidores
document.write(`Número de seguidores: ${followers.size}<br>`);

//Muestro el nombre de todos ellos
document.write("Nombres de todos los seguidores:<br>");
followers.forEach(seguidor => document.write(`${seguidor}<br>`));