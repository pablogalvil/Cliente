/**
 * Crea un mapa que recoja los códigos postales y la localidad que corresponda. Rellena con al menos 5 entradas el mapa. 
 * Crea un menú que si el usuario teclea la opción 1 se realice la consulta si está un determinado código postal que el usuario inserta. 
 * Si selecciona la opción 2 que borre la entrada del código que el usuario requiera. Si marca 3 que liste todas las entradas. 
 * Si marca 4  que modifique el valor del código que el usuario pida. Y si marca 5 que salga del programa, 
 * en caso contrario pedirá nuevamente las opciones.
 */
let mapaCodigosPostales = new Map();

mapaCodigosPostales.set("28001","Madrid");
mapaCodigosPostales.set("41001","Sevilla");
mapaCodigosPostales.set("50001","Zaragoza");
mapaCodigosPostales.set("08001","Barcelona");
mapaCodigosPostales.set("33001","Oviedo");

let opcion = 0;
while (opcion != 5) {
    opcion = parseInt(prompt("1. Consultar, 2. Borrar, 3. Listar, 4. Modificar, 5. Salir"));
    switch (opcion) {
        case 1:
            let codigoABuscar = prompt("Introduce el código a buscar");
            if (mapaCodigosPostales.has(codigoABuscar)) {
                alert(`El código ${codigoABuscar} corresponde a ${mapaCodigosPostales.get(codigoABuscar)}`);
            } else {
                alert("No se encuentra el código");
            }
            break;
        case 2:
            let codigoABorrar = prompt("Introduce el código a borrar");
            if (mapaCodigosPostales.has(codigoABorrar)) {
                mapaCodigosPostales.delete(codigoABorrar);
                alert("Borrado con éxito");
            } else {
                alert("No se encuentra el código");
            }
            break;
        case 3:
            let lista = "";
            for (let [codigo, ciudad] of mapaCodigosPostales.entries()) {
                lista += `${codigo} : ${ciudad}\n`;
            }
            alert(lista);
            break;
        case 4:
            let codigoAModificar = prompt("Introduce el código a modificar");
            if (mapaCodigosPostales.has(codigoAModificar)) {
                let nuevoCodigo = prompt("Introduce el nuevo codigo");
                mapaCodigosPostales.set(codigoAModificar, nuevoCodigo);
                alert("Modificado con éxito");
            } else {
                alert("No se encuentra el código");
            }
            break;
        case 5:
            alert("Hasta luego");
            break;
        default:
            alert("Opción incorrecta, introduzca una opción válida");
            break;
    }
}
