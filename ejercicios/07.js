function filter(arrayOfStrings) {
  // Debes identificar todos los elementos el arreglo que comiencen con la letra "a".
  // Luego retorna un nuevo arreglo con estos elementos.
  // Tu código:

  var newArray = arrayOfStrings.filter(function(element) {
  return element[0] === 'a' || element[0] === 'A';
  });

  return newArray;
}


module.exports = filter;
