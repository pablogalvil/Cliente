function comprobarLetras(palabra1, palabra2) {
    let letras1 = palabra1.toLowerCase().split("").sort().join("");
    let letras2 = palabra2.toLowerCase().split("").sort().join("");
  
    if(letras1 == letras2){
        return true;
    }else{
        return false
    }
  }
  
  let palabra1 = prompt("Introduce la primera palabra");
  let palabra2 = prompt("Introduce la segunda palabra");
  
  let resultado = comprobarLetras(palabra1, palabra2);
  if (resultado){
    document.write("Tienen las mismas letras");
  }else{
    document.write("No tienen las mismas letras");
  }