function foo () {
  console.log(this.a);
}

var obj = {
  a: 2,
  foo: foo
};

var bar = obj.foo; // function reference/alias!

var a = 'oops, global'; // `a` also property on global object

bar(); // "oops, global"

/*
Aunque bar parece ser una referencia a obj.foo, de hecho, 
es realmente solo otra referencia para foo. 
Además, el sitio de llamada es lo que importa, 
y el sitio de llamada es bar (), 
que es una llamada simple no decorada y, 
por lo tanto, se aplica el enlace predeterminado.

La manera más sutil, 
más común y más inesperada que esto ocurre es 
cuando consideramos pasar una función de devolución de llamada: */
