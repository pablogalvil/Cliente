let numDados = prompt("Introduce el numero de dados que quieres tirar");

let mayor = 0;
let numMayor = 0;

for (let i = 1; i <= numDados; i++){
    let dado = Math.floor(Math.random() * 6) + 1;
    console.log(`El dado ${i} es ${dado}`);

    if(dado > mayor){
        mayor = dado;
        numMayor = i;
    }
}

console.log(`El dado ${numMayor} es el mayor con ${mayor}`);