function fibonacci(n, a = 0, b = 1, c = 2) {
    if (n <= 0) {
      return;
    }
  
    document.write(a + "<br>");
  
    fibonacci(n - 1, b, c, a + b + c);
  }
  
  let numero = parseInt(prompt("Introduce el numero de la sucesión:"));
  
  fibonacci(numero);