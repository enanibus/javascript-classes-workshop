// crear un objeto con notacion Object
var anotherObject = {
	a: 2
};


// create an object linked to `anotherObject`
var myObject = Object.create( anotherObject );

//listar las propiedades de un objecto
var anotherObject = {
	a: 2
};

// create an object linked to `anotherObject`
var myObject = Object.create( anotherObject );

for (var k in myObject) {
	console.log("found: " + k);
}
// found: a

("a" in myObject); // true


myObject.a; // 2

// EJE 1
const obj = function (a1, a2, a3) { 
  // console.log(this);
  console.log(a1, a2, a3);
  return {
    asdf: a1,
    a2: a2
  };
};

let tmp = new obj('1', 2, [3]);

// eje3
let myObj = function(arg1, arg2, arg3) {
  this.arg1 = arg1;
  this.arg2 = arg2;
  this.arg3 = arg3;
};

new myObj('1', 2, [3]);

myObj.prototype.arg4 = 'blue';

let x = new myObj('1', 2, [3], {asdf: 'asdf'});

x.arg4 = 'green';

x;


/*
// 3j3 4
let Persona = function(name, age){
  this.name = name;
  this.age = age;
};

let Car = function(arg1, arg2, duenio){
  this.arg1 = arg1;
  this.arg2 = arg2;
  this.duenio = duenio;
};

let jj = new Persona('juanjo', -1);
let car = new Car('smart', 2018, jj);

car.duenio.name;

*/


/// EJERCICIO OBJETO NOTACIÓN LITERAL
var hotel = {
  nombre: 'Codejobs hotel', // PROPIEDADES
  cuartos: 40,
  reservados: 25,

  checarDisponibilidad: function () { // METODO
      return this.cuartos - this.reservados;
  }
};
var asdf = new hotel();
obj.checarDisponibilidad();