function foo () {
  console.log(this.a);
}

var obj = {
  a: 2,
  foo: foo
};

obj.foo(); // 2


/*
En primer lugar, observe la manera en que se declara foo () 
y luego se agrega como propiedad de referencia a obj. 
Independientemente de si foo () se declara inicialmente en obj, 
o se agrega como referencia más adelante (como muestra este fragmento), 
en ninguno de los casos es la función realmente "propiedad" o "contenida" por el objeto obj.

Sin embargo, el sitio de llamada usa el contexto obj para hacer referencia a la función, 
por lo que podría decirse que el objeto obj "posee" o "contiene" 
la referencia de función en el momento en que se llama a la función.

Lo que sea que elija para llamar a este patrón, 
en el punto en que se llama a foo (), 
está precedido por una referencia de objeto a obj. 
Cuando hay un objeto de contexto para una referencia de función, 
la regla de vinculación implícita dice que es ese objeto el que se 
debe usar para la vinculación de la llamada de función.

Como obj es el "this" para la llamada foo (), this.a es sinónimo de obj.a.
*/