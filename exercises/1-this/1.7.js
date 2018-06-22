function foo () {
  console.log('foo');
  var a = 2;
  this.bar();
}

function bar () {
  console.log('bar');
  console.log(this.a);
}

foo();

/*
Este es un claro ejemplo, de como de equivocados estamos al pensar en el alcance.
Al hacer this.bar() es un accidente que funcione. La forma correcta de llamar a la función,
es eliminar el this.
Una idea errona es intentar usar esto para crear un puente entre ambos léxicos, 
es decir paraque bar()
tenga acceso a la variable de ámbito interno de foo, y directamente esto no es posible.
*/