class Alumno {
  constructor(nombre, edad, notaMedia) {
    this.nombre = nombre;
    this.edad = edad;
    this.notaMedia = notaMedia;
  }

  presentarse() {
    console.log(
      `Me llamo ${this.nombre}, tengo ${this.edad} años y mi nota media es de ${this.notaMedia}`
    );
  }
}

const alumno = new Alumno("Francisco", 16, 9.3);
alumno.presentarse();
const alumno2 = new Alumno("Miguel", 16, 3.6);
alumno2.presentarse();
