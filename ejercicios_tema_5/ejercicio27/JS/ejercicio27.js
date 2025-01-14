const regulacionDePrecios = /^\d+(?:[.,]\d{2})?\s€$/;

console.log(regulacionDePrecios.test("123.45   "));
console.log(regulacionDePrecios.test("123.456 "));
console.log(regulacionDePrecios.test("123,45  "));
console.log(regulacionDePrecios.test("123,456 "));
