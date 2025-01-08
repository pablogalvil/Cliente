class Miembro {
    nombre = "nombre apellido1 apellido2";
    alta = "01/01/2022";
    estado = "vigente";
    constructor(nombre,alta,estado){
        this.nombre = nombre;
        this.alta = alta;
        this.estado = estado;
    }
    cobrar() {console.log(`El Miembro ${this.nombre} ha cobrado»`)}
}
class Profesor extends Miembro {
    nAlumnos = 0;
    constructor(nombre,alta,estado,nAlumnos){
        super(nombre,alta,estado);
        this.nAlumnos = nAlumnos;
    }
    cobrar() {console.log(`El Profesor ${this.nombre} ha cobrado`)}
}
class Alumno extends Miembro {
    nAsignaturas = 0;
    constructor(nombre,alta,estado,nAsignaturas){
        super(nombre,alta,estado);
        this.nAsignaturas = nAsignaturas;
    }
    cobrar() {console.log(`El Alumno ${this.nombre} ha cobrado»`)}
}
    
let unMiembro = new Miembro("Pepe Ruiz", "12/02/2021", "finalizado");
unMiembro.cobrar();
let unProfesor = new Profesor("Samuel Orta", "25/06/2021", "finalizado", 30);
unProfesor.cobrar();
let unAlumno = new Alumno("Elena Sánchez", "06/03/2022", "finalizado", 11);
unAlumno.cobrar();

