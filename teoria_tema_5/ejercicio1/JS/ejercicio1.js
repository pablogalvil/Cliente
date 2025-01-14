class Shape {
  constructor(nombre, lados, longitudLado) {
    this.nombre = nombre;
    this.lados = lados;
    this.longitudLado = longitudLado;
  }

  // Método para calcular el perímetro
  calcPerimeter() {
    let perimeter = this.lados * this.longitudLado;
    console.log(`El perímetro del ${this.nombre} es: ${perimeter} cm.`);
  }

  // Método para representar la clase como una cadena
  toString() {
    return `Nombre: ${this.nombre}, Lados: ${this.lados}, Longitud de cada lado: ${this.longitudLado} cm.`;
  }
}

// Crear una instancia de la clase Shape llamada square
let square = new Shape("Cuadrado", 4, 5);

// Llamar al método calcPerimeter para mostrar el cálculo del perímetro
square.calcPerimeter(); // El perímetro del cuadrado es: 20 cm.

// Mostrar el resultado de toString
console.log(square.toString()); // Nombre: Cuadrado, Lados: 4, Longitud de cada lado: 5 cm.

// Clase Square que hereda de Shape
class Square extends Shape {
  constructor(longitudLado) {
    // Establecer nombre y lados automáticamente para un cuadrado
    super("Cuadrado", 4, longitudLado);
  }

  // Método para calcular el área del cuadrado
  calcArea() {
    let area = this.longitudLado * this.longitudLado;
    console.log(`El área del cuadrado es: ${area} cm².`);
  }
}

// Crear una instancia de la clase Square llamada squareInstance
let squareInstance = new Square(5);

// Llamar a los métodos calcPerimeter y calcArea
squareInstance.calcPerimeter(); // El perímetro del cuadrado es: 20 cm.
squareInstance.calcArea(); // El área del cuadrado es: 25 cm².
console.log(squareInstance.toString()); // Nombre: Cuadrado, Lados: 4, Longitud de cada lado: 5 cm.
