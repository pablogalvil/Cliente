let num1 = prompt("Introduce el primer numero");
let num2 = prompt("Introduce el segundo numero");
let num3 = prompt("Introduce el tercer numero");

function mayor(num1, num2, num3){
    if (num1 > num2 && num1 > num3){
        return num1;
    }else if (num2 > num3){
        return num2;
    }else {
        return num3;
    }
}

document.write(`El más alto es ${mayor(num1,num2,num3)}`);