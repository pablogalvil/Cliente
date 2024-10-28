 let numModulos = prompt("Introduce el numero de modulos que quieres introducir");
let modulos = [];

for (let j = 0; j < numModulos; j++){
    let nombre = prompt(`Introduce el nombre del modulo ${j + 1}`);
    let duracion = prompt(`Introduce la duracion del modulo ${j + 1}`);
    let numAlumnos = prompt(`Introduce el numero de alumnos del modulo ${j + 1}`);
    let modulo = [];
    let alumnos = [];
    for (let i = 0; i < numAlumnos; i++) {
        let alumno = prompt(`Introduce el nombre del alumno ${i + 1}`);
        alumnos.push(alumno);
    }
    modulo.push(nombre, duracion, alumnos);
    modulos.push(modulo);
}

//El console log es para ver si se guarda bien el array
console.log(modulos);
document.write(modulos.join(", "));