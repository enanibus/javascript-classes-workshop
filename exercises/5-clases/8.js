function mixin (sourceObj, targetObj) {
  for (var key in sourceObj) {
    // only copy if not already present
    if (!(key in targetObj)) {
      targetObj[key] = sourceObj[key];
    }
  }

  return targetObj;
}

var Vehicle = {
  engines: 1,

  ignition: function () {
    console.log('Turning on my engine.');
  },

  drive: function () {
    this.ignition();
    console.log('Steering and moving forward!');
  }
};

var Car = mixin(Vehicle, {
  wheels: 4,

  drive: function () {
    Vehicle.drive.call(this);
    console.log('Rolling on all ' + this.wheels + ' wheels!');
  }
});


/*

Car tiene ahora una copia de las propiedades y funciones de Vehicle. 
Técnicamente, las funciones no están realmente duplicadas,
 sino que se copian las referencias a las funciones. 
 Entonces, el coche ahora tiene una propiedad llamada ignición, 
 que es una referencia copiada a la función de encendido (), 
 así como una propiedad llamada motores con el valor copiado de 1 del vehículo.

El coche ya tenía una propiedad de unidad (función), 
por lo que la referencia de propiedad no se anuló 
(consulte la sentencia if en mixin (..) más arriba).
*/