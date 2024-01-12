const contarPropiedades = (objeto) => {
  // Cuenta y retorna el total de propiedades que tiene el objeto.
  // PISTA: Puedes iterarlo usando el bucle for-in.
  // Tu código:
  var contador = 0;

  for (var propiedad in objeto) {
    if (objeto.hasOwnProperty(propiedad)) {
      contador++;
    }
  }

  return contador;
};

module.exports = contarPropiedades;
