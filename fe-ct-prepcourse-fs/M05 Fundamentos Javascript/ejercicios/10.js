function esFechaValida(fecha) {
  // La función recibe un argumento "fecha".
  // Comprueba si este corresponde a una fecha válida.
  // Si es así, retorna true, sino retorna false.
  // Tu código:
if(!isNaN(fecha)){
  return true;
}else{
  return false;
}
  //return !isNaN(fecha)&&fecha.toISOString().slice(0, 10) === fecha;

}

module.exports = esFechaValida;