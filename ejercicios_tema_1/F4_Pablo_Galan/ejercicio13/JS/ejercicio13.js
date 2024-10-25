let numero = parseFloat(prompt("Introduce un numero"));
let numero2 = parseFloat(prompt("Introduce otro numero"));
let simbolo = prompt("Introduce un simbolo (+,-,*,/,**,%)");
switch(simbolo){
    case "+":
        console.log(`${numero} + ${numero2} = ${numero+numero2}`);
        break;
    case "-":
        console.log(`${numero} - ${numero2} = ${numero-numero2}`);
        break;
    case "*":
        console.log(`${numero} * ${numero2} = ${numero*numero2}`);
        break;
    case "/":    
        console.log(`${numero} / ${numero2} = ${numero/numero2}`);
        break;
    case "**":
        console.log(`${numero} ** ${numero2} = ${numero**numero2}`);
        break;
    case "%":
        console.log(`${numero} % ${numero2} = ${numero%numero2}`);
        break;
    default:
        console.log("El simbolo no es valido");
}