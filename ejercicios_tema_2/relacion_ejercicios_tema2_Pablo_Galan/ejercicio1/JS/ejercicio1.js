let n = parseInt(prompt("Introduce la cantidad de elementos"));

let fibonacci = [0, 1];

for (let i = 2; i < n; i++) {
    fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
}

document.write(`Los primeros ${n} elementos de la serie de Fibonacci son: ${fibonacci.join(", ")}`);