class Telefono {
  constructor(numero) {
    let _numero = numero;

    this.getNumero = function () {
      return _numero;
    };

    this.setNumero = function (numero) {
      _numero = numero;
    };
  }
}

class Fijo extends Telefono {
  constructor(numero, prefijo) {
    super(numero);
    let _prefijo = prefijo;

    this.getPrefijo = function () {
      return _prefijo;
    };

    this.setPrefijo = function (prefijo) {
      _prefijo = prefijo;
    };
  }
}

class Movil extends Telefono {
  constructor(numero, prefijo) {
    super(numero);
    let _prefijo = prefijo;

    this.getPrefijo = function () {
      return _prefijo;
    };

    this.setPrefijo = function (prefijo) {
      _prefijo = prefijo;
    };
  }
}
