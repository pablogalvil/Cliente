let array = [1, 2, 3, 4, 1, 4, 6, 7, 8, 9, 2];
let conjunto = new Set(array);
let arraySinDuplicados = Array.from(conjunto);
document.write(`El array sin duplicados es: ${arraySinDuplicados.join(", ")}`);