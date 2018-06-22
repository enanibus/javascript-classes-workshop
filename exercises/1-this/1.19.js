function foo (something) {
  this.a = something;
}

var obj1 = {
  foo: foo
};

var obj2 = {};

obj1.foo(2);
console.log(obj1.a); // 2

obj1.foo.call(obj2, 3);
console.log(obj2.a); // 3

var bar = new obj1.foo(4);
console.log(obj1.a); // 2
console.log(bar.a); // 4

/*
OK, el nuevo enlace es más precedente que el enlace implícito.
¿Pero crees que la nueva unión es más o menos precedente que la vinculación explícita?
la vinculación fuerte (que es una forma de vinculación explícita) es más precedente que la nueva vinculación, 
y por lo tanto no se puede anular con la nueva.
*/
