var Something = {
  cool: function () {
    this.greeting = 'Hello World';
    this.count = this.count ? this.count + 1 : 1;
  }
};

Something.cool();
Something.greeting; // "Hello World"
Something.count; // 1

var Another = {
  cool: function () {
    // implicit mixin of `Something` to `Another`
    Something.cool.call(this);
  }
};

Another.cool();
Another.greeting; // "Hello World"
Another.count; // 1 (not shared state with `Something`)


/*
Con Something.cool.call (esto), 
que puede suceder en una llamada de "constructor" (más común) 
o en una llamada a método (que se muestra aquí),
 esencialmente "tomamos prestada" la función Something.cool () 
 y la llamamos el contexto de Otro (a través de este enlace, ver el Capítulo 2) 
 en lugar de Algo. 
 El resultado final es que las asignaciones que realiza Something.cool () 
 se aplican contra el objeto Another en lugar del objeto Something.

Entonces, se dice que "mezclamos" el comportamiento de Somethings con (o en) Otro.

Si bien este tipo de técnica parece aprovechar ventajosamente esta 
funcionalidad de reenlace, es la llamada quebradiza Something.cool.call (this), 
que no puede convertirse en una referencia relativa (y por lo tanto más flexible), 
que debe prestar atención con precaución. . 
En general, evite tales construcciones cuando sea posible para mantener un 
código más limpio y más fácil de mantener.
*/