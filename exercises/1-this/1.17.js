function foo (something) {
  console.log(this.a, something);
  return this.a + something;
}

var obj = {
  a: 2
};

var bar = foo.bind(obj);

var b = bar(3); // 2 3
console.log(b); // 5


/*
bind (..) devuelve una nueva función que está codificada para llamar
 a la función original con este contexto establecido como usted especificó.

Nota: A partir de ES6, la función de límite fijo producida por bind (..) 
tiene una propiedad .name que se deriva de la función objetivo original. 
Por ejemplo: bar = foo.bind (..) debe tener un valor de nombre de barra de 
"bound foo", 
que es el nombre de la función que debe aparecer en un seguimiento de la pila
*/