function promedioResultadosTest(resultadosTest) {
  // Itera sobre los elementos del arreglo resultadosTest y devuelve el promedio de las notas.
  // Tu código:
  const sumaTotal = resultadosTest.reduce((acc, nota) => acc + nota, 0);

  return sumaTotal / resultadosTest.length;
}

module.exports = promedioResultadosTest;
