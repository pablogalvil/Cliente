let matriz = Object.create(Object.prototype, {
  nFilas: {
    value: 0,
    writable: true,
    enumerable: true,
    configurable: true,
  },
  nColumnas: {
    value: 0,
    writable: true,
    enumerable: true,
    configurable: true,
  },
  contenido: {
    value: [],
    writable: true,
    enumerable: true,
    configurable: true,
  },
  inicializarMatriz: {
    value: function (valor) {
      this.contenido = Array.from({ length: this.nFilas }, () =>
        Array(this.nColumnas).fill(valor)
      );
    },
    writable: true,
    enumerable: true,
    configurable: true,
  },
  aleatoriaMatriz0: {
    value: function () {
      this.contenido = Array.from({ length: this.nFilas }, () =>
        Array.from(
          { length: this.nColumnas },
          () => Math.floor(Math.random() * 100) + 1
        )
      );
    },
    writable: true,
    enumerable: true,
    configurable: true,
  },
  verMatriz0: {
    value: function () {
      console.log(this.contenido);
    },
    writable: true,
    enumerable: true,
    configurable: true,
  },
});
