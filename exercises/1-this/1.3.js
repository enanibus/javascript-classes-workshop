function foo (num) {
  console.log('foo: ' + num);
  this.count++;
}

foo.count = 0;

var i;

for (i = 0; i < 10; i++) {
  if (i > 5) {
    foo(i);
  }
}

// Cuantas veces se ejecuta la función foo
// Cual es el valor de foo.count?
