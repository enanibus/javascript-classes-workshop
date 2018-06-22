
// Eje1
console.log(new Date().toISOString());
// normal
const obj = function(a1, a2, a3){
  console.log(a1, a2, a3);
}

new obj('1', 2, [3]);
// arrow function
const obj = (a1, a2, a3) => {
  console.log(a1, a2, a3);
}

new obj('1', 2, [3]); 


