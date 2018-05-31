function foo () {
  console.log('foo');
  var a = 2;
  this.bar();
}

function bar () {
  console.log('bar');
  console.log(this.a);
}

foo();
