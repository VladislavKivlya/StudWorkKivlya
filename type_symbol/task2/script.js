let sym = Symbol();
let obj = {
  1: "Hi",
  2: "Who are you?",
  3: "Строка, которая есть",
  [sym]: function() {
    alert("!");
  }
}

for(let key in obj){
  console.log(obj[key]);
}

obj[sym]();
