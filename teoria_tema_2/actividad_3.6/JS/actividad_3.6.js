let elementos = [];

let i = 0;

while (i < 10) {
    let random = Math.random();
    
    if (random >= 0.5) {
        elementos[i] = true;
    }else{
        elementos[i] = false;
    }
    i++;
}

i = 0;

//Las posiciones con true son

document.write("Posiciones con true: ");

while (i < 10) {
    if (elementos[i] == true) {
        document.write(i + " ");
    }
    i++;
}