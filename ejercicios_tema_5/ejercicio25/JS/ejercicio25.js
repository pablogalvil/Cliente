const fechaOperaciones = {
  difFechas: function (fecha1, fecha2) {
    const fech1 = new Date(fecha1);
    const fech2 = new Date(fecha2);
    const tiempo = Math.abs(fech2 - fech1);
    const dias = Math.ceil(tiempo / (1000 * 60 * 60 * 24));
    return dias;
  },
  maxFecha: function (fecha1, fecha2) {
    const fech1 = new Date(fecha1);
    const fech2 = new Date(fecha2);
    return fech1 > fech2 ? fech1 : fech2;
  },
  testFecha: function (fecha) {
    const regex = /^\d{4}-\d{2}-\d{2}$/;
    return regex.test(fecha);
  },
  ayerFecha: function (fecha) {
    const fech = new Date(fecha);
    fech.setDate(fech.getDate() - 1);
    return fech;
  },
  mananaFecha: function (fecha) {
    const fech = new Date(fecha);
    fech.setDate(fech.getDate() + 1);
    return fech;
  },
};

console.log(
  `La diferencia entre el 2020-01-01 y el 2020-01-15 es de ${fechaOperaciones.difFechas(
    "2020-01-01",
    "2020-01-15"
  )} dias`
);

console.log(
  `La fecha mayor entre el 2020-01-01 y el 2020-01-15 es ${
    fechaOperaciones
      .maxFecha("2020-01-01", "2020-01-15")
      .toISOString()
      .split("T")[0]
  }`
);

console.log(
  `La fecha 2020-01-01 es correcta? ${fechaOperaciones.testFecha("2020-01-01")}`
);

console.log(
  `La fecha de ayer para el 2020-01-01 es ${
    fechaOperaciones.ayerFecha("2020-01-01").toISOString().split("T")[0]
  }`
);

console.log(
  `La fecha de mañana para el 2020-01-01 es ${
    fechaOperaciones.mananaFecha("2020-01-01").toISOString().split("T")[0]
  }`
);
