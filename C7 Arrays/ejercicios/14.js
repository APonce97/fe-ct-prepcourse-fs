function contarElementosMayoresA10(array) {
  // Cuenta y devuelve la cantidad de elementos mayores a 10 en el array de números.
  // Tu código:
  var cantidadmayor = array.filter(element => element > 10);
  return cantidadmayor.length;
}

module.exports = contarElementosMayoresA10;
