class Aula {
  constructor(nombre) {
    this.nombre = nombre;
  }

  descripcion() {
    return `Aula de ${this.nombre}`;
  }
}

class Musica extends Aula {
  constructor() {
    super("Música");
  }

  descripcion() {
    return `${super.descripcion()} con instrumentos musicales.`;
  }
}

class Tecnologia extends Aula {
  constructor() {
    super("Tecnología");
  }

  descripcion() {
    return `${super.descripcion()} con equipos tecnológicos.`;
  }
}

// Ejemplo de polimorfismo
const aulas = [new Musica(), new Tecnologia()];

aulas.forEach((aula) => {
  console.log(aula.descripcion());
});
