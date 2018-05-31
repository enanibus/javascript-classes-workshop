function foo () {
  foo.count = 4; // En este caso foo se refiere a si mismo
}
foo(); // borrar

// let cont = 0;
setTimeout(function () {
  // En este caso la función es anónima y no se puede
  // hacer referencia a si mismo.
  console.log(this);
  // console.log('arguments ', arguments.callee());
  // console.log(callee);
  /*
  console.log(cont);
  if (cont === 5){
    return;
  }else{
    cont++;
    arguments.callee();
  } */
}, 10);
/*
La vieja escuela usaba arguments.callee para llamarse a si mismo
dentro de una misma función, sobre todo para funciones recursivas.
Hoy en día se usa calle
*/
