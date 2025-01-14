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

// Clase Hotel
class Hotel {
  constructor(
    nombre,
    ubicacion,
    estrellas,
    precioPorHabitacion,
    numHabitaciones
  ) {
    this.nombre = nombre;
    this.ubicacion = ubicacion;
    this.estrellas = estrellas;
    this.precioPorHabitacion = precioPorHabitacion;
    this.numHabitaciones = numHabitaciones;
    this.reservas = {}; // { fecha: [{ cliente, numHabitaciones }] }
  }

  // Reservar una habitación
  reservarHabitacion(cliente, fecha, numHabitaciones = 1) {
    if (!this.reservas[fecha]) this.reservas[fecha] = [];
    const habitacionesDisponibles =
      this.numHabitaciones - this.calcularHabitacionesOcupadas(fecha);

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
  }

  // Anular una reserva
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

  // Consultar clientes con reservas para una fecha
  consultarClientes(fecha) {
    if (this.reservas[fecha]) {
      return this.reservas[fecha].map((reserva) => reserva.cliente.toString());
    } else {
      return [];
    }
  }

  // Habitaciones disponibles para una fecha
  habitacionesDisponibles(fecha) {
    const ocupadas = this.calcularHabitacionesOcupadas(fecha);
    return this.numHabitaciones - ocupadas;
  }

  calcularHabitacionesOcupadas(fecha) {
    return (
      this.reservas[fecha]?.reduce(
        (sum, reserva) => sum + reserva.numHabitaciones,
        0
      ) || 0
    );
  }

  // Precio final de una reserva
  calcularPrecioFinal(numHabitaciones) {
    const porcentajeAumento = [0.02, 0.05, 0.07, 0.1, 0.15][this.estrellas - 1];
    const precioBase = this.precioPorHabitacion * numHabitaciones;
    return precioBase + precioBase * porcentajeAumento;
  }

  toString() {
    return `${this.nombre}, Ubicación: ${this.ubicacion}, Estrellas: ${this.estrellas}, Precio por habitación: ${this.precioPorHabitacion}€`;
  }
}

// Clase Empresario
class Empresario {
  constructor(nombre, codigoEmpresa) {
    if (!/^[A-Z][a-z]{2}-\d{1,5}[^\w\s]?$/i.test(codigoEmpresa)) {
      console.log("Código de empresa inválido");
    }
    this.nombre = nombre;
    this.codigoEmpresa = codigoEmpresa;
    this.hoteles = [];
  }

  agregarHotel(hotel) {
    this.hoteles.push(hotel);
  }

  listaHoteles() {
    return this.hoteles.map((hotel) => hotel.toString());
  }

  contieneHotel(nombreHotel) {
    return this.hoteles.some((hotel) => hotel.nombre === nombreHotel);
  }
}

// Ejemplo de implementación
const mario = new Empresario("Mario", "Cad-75643./");

const hotel1 = new Hotel("Hotel 1", "Centro", 3, 50, 10);
const hotel2 = new Hotel("Hotel 2", "Playa", 4, 75, 10);
const hotel3 = new Hotel("Hotel 3", "Montaña", 5, 100, 20);

mario.agregarHotel(hotel1);
mario.agregarHotel(hotel2);
mario.agregarHotel(hotel3);

console.log(mario.listaHoteles());

// Crear clientes
const cliente1 = new Cliente("Juan", "Pérez", "12345678A", 23);
const cliente2 = new Cliente("Ana", "López", "87654321B", 30);
const cliente3 = new Cliente("Luis", "Martínez", "23456789C", 40);

// Reservar habitaciones
hotel1.reservarHabitacion(cliente1, "2025-01-20", 2); // Edad válida para hotel1
hotel2.reservarHabitacion(cliente2, "2025-01-21", 1); // Edad válida para hotel2
hotel3.reservarHabitacion(cliente3, "2025-01-22", 3); // Edad válida para hotel3

// Consultar habitaciones disponibles y clientes
console.log(hotel1.habitacionesDisponibles("2025-01-20"));
console.log(hotel1.consultarClientes("2025-01-20"));

// Calcular precio final de una reserva
console.log(`Precio final: ${hotel1.calcularPrecioFinal(2)}€`);
