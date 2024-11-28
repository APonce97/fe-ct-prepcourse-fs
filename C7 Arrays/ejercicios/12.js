function convertirStringAMayusculas(array) {
  // Convierte a mayúsculas todos los strings del array.
  // Retorna el arreglo resultante.
  // Tu código:
  return array.map(element => {

    if (typeof element === 'string') {
      return element.toUpperCase();
    }
  
    return element;
  });
}

module.exports = convertirStringAMayusculas;
