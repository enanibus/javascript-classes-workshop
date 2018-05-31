function foo (num) {
  console.log('foo: ' + num);
  // ahora mismo this apunta a foo
  this.count++;
}

foo.count = 0;

var i;

for (i = 0; i < 10; i++) {
  if (i > 5) {
    // Usando call forzamos a que el this apunte a foo
    foo.call(foo, i);
  }
}
console.log(foo.count); // 4
