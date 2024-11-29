/**
 * Funcion que calcula el total de ventas semanales desde el lunes al viernes
 * @param producto array con ventas cada dia
 * @returns total de ventas
 */
function totalVendido(producto) {
    let total = 0;
    
    for (let i = 0; i < producto.length; i++){
        total += producto[i];
    }

    return total;
}

/**
 * Funcion que calcula los ingresos totales de un producto desde el lunes al viernes
 * @param producto array con ventas cada dia 
 * @param precio float con el precio del producto
 * @returns total de ingresos
 */
const ingresosTotales = (producto, precio) => {
    let ingresos = 0;
    
    ingresos = precio * totalVendido(producto);
    
    return ingresos;
};

let productos = [[90, 27, 200, 87, 130],
                [100, 93, 40, 37, 120],
                [50, 39, 53, 10, 100],
                [10, 30, 9, 12, 200],
                [180, 54, 59, 84, 300]];
let precios = [1, 1.20, 4, 3.65, 0.90];

let producto = prompt("Introduce un producto a comprobar (1, 2, 3, 4 o 5)");

let vendido = totalVendido(productos[producto - 1]);
let ingresos = ingresosTotales(productos[producto - 1], precios[producto - 1]);

document.write(`El total de ventas semanales de tu producto es ${vendido}`);
document.write(`<br>El total de ingresos semanales de tu producto es ${ingresos}`);

/**
 * Funcion que calcula el producto mas vendido en la semana de lunes a viernes
 * y lo muestra por consola.
 */
(function() {
    let mayor = 0;
    let posicionMayor = 0;
    for(let i = 0; i < productos.length; i++){
        if (totalVendido(productos[i]) > mayor){
            mayor = totalVendido(productos[i]);
            posicionMayor = i + 1;
        }
    }

    console.log(`El producto más vendido esta semana es el producto ${posicionMayor} con ${mayor} ventas`);
})();