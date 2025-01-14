class Club {
  constructor(
    añoFundación = 0,
    numSocios = 0,
    nombreEstadio = "",
    ciudad = "",
    palmares = []
  ) {
    this.añoFundación = añoFundación;
    this.numSocios = numSocios;
    this.nombreEstadio = nombreEstadio;
    this.ciudad = ciudad;
    this.palmares = palmares;
  }

  verClub() {
    console.log(`Año de Fundación: ${this.añoFundación}`);
    console.log(`Número de Socios: ${this.numSocios}`);
    console.log(`Nombre del Estadio: ${this.nombreEstadio}`);
    console.log(`Ciudad: ${this.ciudad}`);
    console.log("Palmarés:");
    this.palmares.forEach((titulo) => {
      console.log(`  - ${titulo.nombre}: ${titulo.año}`);
    });
  }
}

const club1 = new Club();
const club2 = new Club(1935);
const club3 = new Club(1945, 100000);
const club4 = new Club(1965, 200000, "Santiago Bernabéu");
const club5 = new Club(1943, 150000, "Camp nou", "Barcelona");
const club6 = new Club(1923, 155000, "Benito villamarin", "Madrid", [
  { nombre: "La Liga", año: 2020 },
]);

const clubs = [club1, club2, club3, club4, club5, club6];

clubs.forEach((club, index) => {
  console.log(`\nClub ${index + 1}:`);
  club.verClub();
  if (index == 0) club.añoFundación = 1900;
  if (index == 1) club.numSocios = 90000;
  if (index == 2) club.nombreEstadio = "Nuevo Estadio";
  if (index == 3) club.ciudad = "Barcelona";
  if (index == 4) club.palmares.push({ nombre: "Copa del Rey", año: 2021 });
  if (index == 5) club.numSocios = 110000;
  console.log(`\nClub ${index + 1} modificado:`);
  club.verClub();
});
