let num_veces = prompt("Introduce cuantos numeros tiene tu matriz");
let matriz = new Array(num_veces);

for (let i = 0; i<num_veces; i++){
    matriz[i] = prompt(`Introduce el numero en la posicion ${i+1}`);
}

function mayor(matriz){
    let mayor = 0;
    for (let i = 0; i<matriz.length;i++){
        if (matriz[i] > mayor){
            mayor = matriz[i];
        }
    }
    return mayor;
}

document.write(`El mayor numero es ${mayor(matriz)}`);