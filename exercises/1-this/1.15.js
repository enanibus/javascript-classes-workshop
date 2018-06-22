function foo () {
  console.log(this.a);
}

var obj = {
  a: 2
};

var bar = function () {
  foo.call(obj);
};

bar(); // 2
setTimeout(bar, 100); // 2

// `bar` hard binds `foo`'s `this` to `obj`
// so that it cannot be overriden
bar.call(window); // 2
/*
Examinemos cómo funciona esta variación. 
Creamos una bar de funciones () que, internamente, 
llama manualmente a foo.call (obj), 
invocando forzosamente a foo con obj binding para esto. 
No importa cómo invoque más adelante función bar, 
siempre invocará foo manualmente con obj. 
Este enlace es a la vez explícito y fuerte,
 por lo que lo llamamos vinculante.

*/