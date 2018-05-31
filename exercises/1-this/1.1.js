function identify () {
  return this.name.toUpperCase();
}

function speak () {
  var greeting = "Hello, I'm " + identify.call(this);
  console.log(greeting);
}

var me = {
  name: 'Kyle'
};

var you = {
  name: 'Reader'
};

identify.call(me); // KYLE
identify.call(you); // READER

speak.call(me); // Hello, I'm KYLE
speak.call(you); // Hello, I'm READER
/*
Este fragmento de código permite reutilizar las funciones identify () y speak ()
contra varios objetos contextuales (yo y usted),
en lugar de necesitar una versión separada de la función para cada objeto.

**** Solución
En lugar de confiar en esto, podría haber pasado explícitamente en un objeto de contexto para identificar () y hablar ().
*/
