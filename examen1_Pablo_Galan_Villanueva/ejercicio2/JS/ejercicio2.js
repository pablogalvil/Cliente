let modulos = new Map();
//Agregamos elementos
modulos.set("Desarrollo Web en Entorno Cliente", "DWEC");
modulos.set("Desarrolo Web en Entorno Servidor", "DWES");
modulos.set("Despliegue de Aplicaciones Web", "DAW");
modulos.set("Empresa e Iniciativa Emprendedora", "EIE");

//Mostramos cuantos elementos hay
document.write(modulos.size + "<br>");

//Mostramos los contenidos
modulos.forEach((siglas, nombre) => {
    document.write(`${siglas} se llama ${nombre}<br>`);
});

//Mostramos solo las siglas
modulos.forEach((siglas, nombre) => {
    document.write(`Las siglas son ${siglas}<br>`);
});

//Mostramos solo los nombres
modulos.forEach((siglas, nombre) => {
    document.write(`Los nombres son ${nombre}<br>`);
})

//Apartado e, miramos si daw existe
if(modulos.has("Despliegue de Aplicaciones Web")){
    document.write("DAW existe<br>");

    //Cambiamos el valor de daw para que sea daw2
    modulos.set("Despliegue de Aplicaciones Web", "DAW2");

    //Mostramos los cambios
    modulos.forEach((siglas, nombre) => {
        document.write(`${siglas} se llama ${nombre}<br>`);
    });

    //Borramos daw
    modulos.delete("Despliegue de Aplicaciones Web");
    document.write("<br>");
    
    //Mostramos los cambios
    modulos.forEach((siglas, nombre) => {
        document.write(`${siglas} se llama ${nombre}<br>`);
    });
}else{
    document.write("DAW no existe<br>");
}