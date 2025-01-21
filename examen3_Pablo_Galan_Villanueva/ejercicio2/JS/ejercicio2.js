const regulacionCodigo = /^[A-Z][a-z]{2}-\d{1,5}[^\w\s]?$/i;

class Empresario {
  constructor(nombre, codigoEmpresa) {
    if (!regulacionCodigo.test(codigoEmpresa)) {
      console.log("Código de empresa inválido");
    }
    this.nombre = nombre;
    this.codigoEmpresa = codigoEmpresa;
    this.hoteles = [];
  }

  agregarHotel(hotel) {
    this.hoteles.push(hotel);
  }

  listarHoteles() {
    let string = " ";
    for (let i = 0; i < this.hoteles.length; i++) {
      string += this.hoteles.nombre + " ";
    }
    return string;
  }

  contieneHotel(nombreHotel) {
    let existe = false;
    for (let i = 0; i < this.hoteles.length; i++) {
      if (this.hoteles[i].nombre == nombreHotel) {
        existe = true;
        break;
      }
    }

    if (existe) {
      return `El hotel ${nombreHotel} pertenece a este empresario`;
    } else {
      return `El hotel ${nombreHotel} pertenece a otro empresario`;
    }
  }
}

class Hotel {
  constructor(
    nombre,
    ubicacion,
    numEstrellas,
    precioHabitacion,
    numHabitaciones,
    edadMin,
    edadMax
  ) {
    this.nombre = nombre;
    this.ubicacion = ubicacion;
    this.numEstrellas = numEstrellas;
    this.precioPorHabitacion = precioHabitacion;
    this.numHabitaciones = numHabitaciones;
    this.reservas = {};
    this.edadMin = edadMin;
    this.edadMax = edadMax;
  }

  reservarHabitacion(cliente, fecha, numHabitaciones = 1) {
    //Miramos si cumple la edad minima y maxima
    if (this.edadMin <= cliente.edad && this.edadMax >= cliente.edad) {
      //Si no existen reservas en esta fecha las creamos
      if (!this.reservas[fecha]) {
        this.reservas[fecha] = [];
      }

      const habitacionesDisponibles = this.consultarDisponibles(fecha);

      if (habitacionesDisponibles >= numHabitaciones) {
        this.reservas[fecha].push({ cliente, numHabitaciones });
        console.log(
          `${cliente.nombre} reservó ${numHabitaciones} habitación(es) en ${this.nombre} para la fecha ${fecha}.`
        );
      } else {
        console.log(
          `No hay suficientes habitaciones disponibles en ${this.nombre} para la fecha ${fecha}.`
        );
      }
    } else {
      console.log(
        "No cumples la edad minima para poder reservar una habitacion"
      );
    }
  }

  anularReserva(cliente, fecha) {
    if (this.reservas[fecha]) {
      this.reservas[fecha] = this.reservas[fecha].filter(
        (reserva) => reserva.cliente.dni !== cliente.dni
      );
      console.log(
        `Reserva anulada para ${cliente.nombre} en ${this.nombre} para la fecha ${fecha}.`
      );
    } else {
      console.log(`No hay reservas para esa fecha en ${this.nombre}.`);
    }
  }

  consultarClientes(fecha) {
    if (this.reservas[fecha]) {
      return this.reservas[fecha].map((reserva) => reserva.cliente.toString());
    } else {
      return [];
    }
  }

  consultarDisponibles(fecha) {
    const ocupadas = this.consultarOcupadas(fecha);
    return this.numHabitaciones - ocupadas;
  }

  consultarOcupadas(fecha) {
    return (
      this.reservas[fecha]?.reduce(
        (sum, reserva) => sum + reserva.numHabitaciones,
        0
      ) || 0
    );
  }

  calcularPrecio() {
    let precioFinal = 0;
    let porcentajes = [0.02, 0.05, 0.07, 0.1, 0.15];

    precioFinal = this.precioPorHabitacion * porcentajes[this.numEstrellas - 1];
    precioFinal += this.precioPorHabitacion;

    return precioFinal;
  }
}

class Cliente {
  constructor(nombre, apellidos, dni, edad) {
    this.nombre = nombre;
    this.apellidos = apellidos;
    this.dni = dni;
    this.edad = edad;
  }

  toString() {
    return `${this.nombre} ${this.apellidos}, DNI: ${this.dni}, Edad: ${this.edad}`;
  }
}

const mario = new Empresario("Mario", "Cad-75643./");

const hotel1 = new Hotel("Hotel 1", "Calle 1", 3, 70, 10, 23, 80);
const hotel2 = new Hotel("Hotel 2", "Calle 2", 4, 75, 10, 23, 80);
const hotel3 = new Hotel("Hotel 3", "Calle 3", 5, 80, 20, 23, 80);

mario.agregarHotel(hotel1);
mario.agregarHotel(hotel2);
mario.agregarHotel(hotel3);

console.log("Listamos los hoteles : ");
console.log(mario.listarHoteles());

const cliente1 = new Cliente("Ivan", "Martinez", "64728956Z", 20);
const cliente2 = new Cliente("Pablo", "Galan", "53418735H", 28);
const cliente3 = new Cliente("Arturo", "Perez", "52438134J", 57);

console.log("Hacemos reservas : ");
hotel1.reservarHabitacion(cliente1, "2025-03-15", 5);
hotel2.reservarHabitacion(cliente2, "2025-02-15", 7);
hotel3.reservarHabitacion(cliente3, "2025-01-15", 10);

console.log("Miramos las habitaciones disponibles y los clientes");
console.log(hotel1.consultarDisponibles("2025-03-15"));
console.log(hotel1.consultarClientes("2025-03-15"));
console.log(hotel2.consultarDisponibles("2025-02-15"));
console.log(hotel2.consultarClientes("2025-02-15"));
console.log(hotel3.consultarDisponibles("2025-01-15"));
console.log(hotel3.consultarClientes("2025-01-15"));

console.log(`Precio final hotel 1: ${hotel1.calcularPrecio()}€`);
console.log(`Precio final hotel 2: ${hotel2.calcularPrecio()}€`);
console.log(`Precio final hotel 3: ${hotel3.calcularPrecio()}€`);

console.log("Intentamos reservar mas de las disponibles : ");
hotel2.reservarHabitacion(cliente2, "2025-02-15", 100);
