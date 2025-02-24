function pruebaTryCatchFinally() {
  try {
    console.log("Intentando hacer algo...");
    throw new Error("Ha habido un error");
    return "try";
  } catch (error) {
    console.log("Ha habido un error: " + error.message);
    return "catch";
  } finally {
    console.log("Finalizando el proceso");
    return "finally";
  }
}

console.log(pruebaTryCatchFinally());
//Llego a la conclusion de que no llega nunca al return del try y del catch
