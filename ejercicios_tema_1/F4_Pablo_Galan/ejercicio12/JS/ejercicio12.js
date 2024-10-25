let a = parseFloat(prompt("Introduce el valor de a"));
let b = parseFloat(prompt("Introduce el valor de b"));
let c = parseFloat(prompt("Introduce el valor de c"));

let raiz = b*b - 4*a*c;

//Ya que no se puede hacer raiz de un numero negativo
if(raiz < 0){
    document.write("La ecuacion no tiene solucion real");
}else{
    let sol1 = (-b + Math.sqrt(raiz))/(2*a);
    let sol2 = (-b - Math.sqrt(raiz))/(2*a);
    document.write(`Las soluciones son x1 = ${sol1} y x2 = ${sol2}`);
}
