// Crea un objeto con propiedades anidadas y un método que acceda a una de las propiedades anidadas utilizando `this`.

const objetoAnidado = {
    propiedad1,
    propiedad2: {
      propiedad3,
      propiedad4: {
        propiedad5,
        propiedad6
      }
    },
    metodoAccederPropiedadAnidada: ()  => {
      return this.propiedad1;
    }
};

module.exports = objetoAnidado;
