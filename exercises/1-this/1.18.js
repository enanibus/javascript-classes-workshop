function foo () {
  console.log(this.a);
}

var obj1 = {
  a: 2,
  foo: foo
};

var obj2 = {
  a: 3,
  foo: foo
};

obj1.foo(); // 2
obj2.foo(); // 3

obj1.foo.call(obj2); // 3
obj2.foo.call(obj1); // 2

/*
Por lo tanto, el enlace explícito tiene prioridad sobre el enlace implícito,
lo que significa que primero debe preguntar
si se aplica el enlace explícito antes de verificar el enlace implícito.
*/