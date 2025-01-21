class MaterialBiblioteca {
  constructor(titulo, autor) {
    this.id = MaterialBiblioteca.generarIdUnico();
    this.titulo = titulo;
    this.autor = autor;
  }

  getId() {
    return this.id;
  }

  info() {
    return `El libro ${this.id} se llama ${this.titulo} y su autor es ${this.autor}`;
  }

  static generarIdUnico() {
    return Date.now() + parseInt(Math.random() * 1000000000000) + 1;
  }
}

class Libro extends MaterialBiblioteca {
  constructor(id, titulo, autor, numeroPaginas) {
    super(id, titulo, autor);
    this.numeroPaginas = numeroPaginas;
  }

  info() {
    return `El libro ${this.id} se llama ${this.titulo}, su autor es ${this.autor} y tiene ${this.numeroPaginas} páginas`;
  }
}

class Revista extends MaterialBiblioteca {
  constructor(id, titulo, autor, edicion) {
    super(id, titulo, autor);
    this.edicion = edicion;
  }

  info() {
    return `El libro ${this.id} se llama ${this.titulo}, su autor es ${this.autor} y es de la edicion ${this.edicion}`;
  }
}

class Usuario {
  materialPrestado = [];

  constructor(nombre) {
    this.nombre = nombre;
  }

  prestarMaterial(material) {
    if (this.materialPrestado.length < 3) {
      this.materialPrestado.push(material);
    }
  }

  devolverMaterial(id) {
    for (let i = 0; i < this.materialPrestado.length; i++) {
      if (this.materialPrestado[i].getId() == id) {
        this.materialPrestado.splice(i, 1);
      }
    }
  }

  listarMateriales() {
    let string = "";
    for (let i = 0; i < this.materialPrestado.length; i++) {
      string += this.materialPrestado[i].titulo + " ";
    }
    console.log(string);
  }
}

const pablo = new Usuario("pablo");
const libro1 = new Libro("Libro 1", "Autor 1", 329);
const libro2 = new Libro("Libro 2", "Autor 2", 300);
const libro3 = new Libro("Libro 3", "Autor 3", 276);

const revista1 = new Libro("Revista 1", "Autor 1", 87);
const revista2 = new Libro("Revista 2", "Autor 2", 93);
const revista3 = new Libro("Revista 3", "Autor 3", 75);

console.log("Informacion de los materiales : ");
console.log(libro1.info());
console.log(libro2.info());
console.log(libro3.info());
console.log(revista1.info());
console.log(revista2.info());
console.log(revista3.info());

console.log("Vemos que los materiales prestados estan vacios : ");
pablo.listarMateriales();

pablo.prestarMaterial(libro1);
pablo.prestarMaterial(revista1);
pablo.prestarMaterial(revista3);

console.log("Mostramos los materiales ahora agregados : ");
pablo.listarMateriales();

pablo.prestarMaterial(libro2);
console.log("Intentamos prestar otro material y vemos que no funciona : ");
pablo.listarMateriales();

pablo.devolverMaterial(revista1.getId());
console.log("Borramos un material : ");
pablo.listarMateriales();
