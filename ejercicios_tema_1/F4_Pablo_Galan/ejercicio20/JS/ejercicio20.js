let elegir = prompt("Elige una de las siguientes opciones : a) Area del triángulo (b*h/2), b) Area del rectángulo (l*h), c) Area del circulo (pi*r^2), d) Salir");

switch(elegir){
    case "a":
        let base = prompt("Introduce la base");
        let altura = prompt("Introduce la altura");
        let area = (base*altura)/2;
        document.write(`El area es ${area}`);
        break;
    case "b":
        let base2 = prompt("Introduce la base");
        let altura2 = prompt("Introduce la altura");
        let area2 = base2*altura2;
        document.write(`El area es ${area2}`);
        break;
    case "c":
        let radio = prompt("Introduce el radio");   
        let area3 = Math.PI*(radio*radio);
        document.write(`El area es ${area3}`);
        break;
    case "d":
        document.write("Hasta pronto");
        break;
    default:
        document.write("Opcion no valida");
}