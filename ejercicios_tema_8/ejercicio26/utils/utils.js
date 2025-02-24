export const geo = {
  askPermissions: function () {
    return new Promise((resolve, reject) => {
      if (!navigator.geolocation) {
        reject("La geolocalización no es soportada en este navegador");
      } else {
        navigator.permissions
          .query({ name: "geolocation" })
          .then((permissionStatus) => {
            resolve(permissionStatus.state);
          })
          .catch((err) => reject(err));
      }
    });
  },

  getPosition: function () {
    return new Promise((resolve, reject) => {
      if (!navigator.geolocation) {
        reject("La geolocalización no es soportada en este navegador");
      } else {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            resolve(position.coords);
          },
          (error) => reject(error.message)
        );
      }
    });
  },

  getLongitude: async function () {
    const coords = await this.getPosition();
    return coords.longitude;
  },

  getLatitude: async function () {
    const coords = await this.getPosition();
    return coords.latitude;
  },

  getAltitude: async function () {
    const coords = await this.getPosition();
    //Si la altitud es nula se mostrara un mensaje diciendo que no esta disponible.
    return coords.altitude !== null ? coords.altitude : "Altitud no disponible";
  },
};
