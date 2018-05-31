function identify (context) {
  return context.name.toUpperCase();
}

function speak (context) {
  var greeting = "Hello, I'm " + identify(context);
  console.log(greeting);
}
var me = {
  name: 'Kyle'
};

var you = {
  name: 'Reader'
};

identify(you); // READER
speak(me); // Hello, I'm KYLE
/*
Sin embargo esta forma de pasar el contexto es más elegante,
y ayuda a una reutilización del código
*/
