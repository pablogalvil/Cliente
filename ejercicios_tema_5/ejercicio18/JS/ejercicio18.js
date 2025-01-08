class Persona {
  constructor(nombre, edad) {
    let _nombre = nombre;
    let _edad = edad;

    this.getNombre = function () {
      return _nombre;
    };

    this.setNombre = function (nombre) {
      _nombre = nombre;
    };

    this.getEdad = function () {
      return _edad;
    };

    this.setEdad = function (edad) {
      _edad = edad;
    };
  }
}

const persona1 = new Persona("Juan", 30);
console.log(persona1.getNombre());
persona1.setEdad(31);
console.log(persona1.getEdad());
