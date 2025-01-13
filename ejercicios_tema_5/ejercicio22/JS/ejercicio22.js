class Alumno {
  constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
  }

  saludar() {
    console.log(`Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años.`);
  }

  cumplirAnios() {
    this.edad += 1;
    console.log(
      `Feliz cumpleaños ${this.nombre}, ahora tienes ${this.edad} años.`
    );
  }
}

const alumno = new Alumno("Juan", 30);
alumno.saludar();
alumno.cumplirAnios();
alumno.saludar();
