function ordenarArray(array) {
  // Ordena los elementos del areglo array de menor a mayor.
  // Devuelve el arreglo resultante.
  // Tu código:
  if (array.every(item => typeof item === 'string')) {
    return array.sort(); 
  }
  
  if (array.every(item => typeof item === 'number')) {
    return array.sort((a, b) => a - b);
  }
  
  return "El arreglo debe contener solo números o solo cadenas";
}

module.exports = ordenarArray;
