async function prepararCafe() {
  console.log(" ");
  console.log("Hirviendo agua...");
  let agua = await new Promise((resolve) =>
    setTimeout(() => {
      console.log("El agua esta lista");
      resolve();
    }, 3000)
  );

  console.log("Moliendo cafe...");
  let cafe = await new Promise((resolve) =>
    setTimeout(() => {
      console.log("El cafe esta molido");
      resolve();
    }, 2000)
  );

  console.log("Mezclando agua y cafe ");
  await new Promise((resolve) =>
    setTimeout(() => {
      console.log("Cafe servido !A disfrutar!");
      resolve();
    }, 3000)
  );
}

prepararCafe();
