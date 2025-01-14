class Pelicula {
  constructor(jsonData) {
    const data = JSON.parse(jsonData);
    this.nombre = data.nombre;
    this.anoEstreno = data.anoEstreno;
    this.duracion = data.duracion;
    this.genero = data.genero;
    this.actores = data.actores;
    this.urlCartel = data.urlCartel;
    this.director = data.director;
  }

  verPelicula() {
    console.log(`Nombre: ${this.nombre}`);
    console.log(`Año de estreno: ${this.anoEstreno}`);
    console.log(`Duración: ${this.duracion} minutos`);
    console.log(`Género: ${this.genero}`);
    console.log(`Actores: ${this.actores.join(", ")}`);
    console.log(`URL del cartel: ${this.urlCartel}`);
    console.log(`Director: ${this.director}`);
  }
}

const jsonData = `{
    "nombre": "El señor de los anillos: La Comunidad del Anillo",
    "anoEstreno": 2001,
    "duracion": 178,
    "genero": "Fantasía",
    "actores": ["Elijah Wood", "Viggo Mortensen", "Ian McKellen", "Sean Astin", "Sean Bean", "Andy Serkis"],
    "urlCartel": "https://example.com/lordoftherings.jpg",
    "director": "Peter Jackson"
}`;

const pelicula = new Pelicula(jsonData);
pelicula.verPelicula();
