
let Persona = function (nombre) {
  this.nombre = nombre;
  this.puedeImprimir = true;
};

Persona.prototype.imprimir = function () {
  if (this.puedeImprimir) console.log(`Hola, soy ${this.nombre}`);
};

let Empleado = function (nombre, puesto) {
  Persona.call(this, nombre);
  this.puesto = puesto;
};
Empleado.prototype.imprimir = function () {
  if (this.puedeImprimir) console.log(`Hola, soy ${this.nombre}, mi puesto es ${this.puesto}`);
};
Empleado.prototype = Object.create(Persona.prototype);
Empleado.prototype.constructor = Empleado;

let Consumidor = function (nombre) {
  Persona.call(this, nombre);
};
Consumidor.prototype = Object.create(Persona.prototype);
Consumidor.prototype.constructor = Consumidor;

let Mimo = function (nombre) {
  Persona.call(this, nombre);
  this.puedeImprimir = false;
};

Mimo.prototype = Object.create(Persona.prototype);
Mimo.prototype.constructor = Mimo;

let miguel = new Consumidor('Miguel');
let mike = new Mimo('Mimo');
let juan = new Empleado('Juan', 'Gerente');

juan.imprimir();
miguel.imprimir();
mike.imprimir();
