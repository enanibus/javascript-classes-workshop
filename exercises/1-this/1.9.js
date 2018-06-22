function foo () {
  console.log(this.a);
}

var a = 2;

foo(); // 2


/* strict mode */

function foo () {
  "use strict"
  console.log(this.a);
}

var a = 2;

foo(); // 2