let sym = Symbol();
let obj = {
  1: "Hi",
  2: "Who are you?",
  3: "Строка, которая есть",
  [sym]: "Строка, которой нет"
}

for(let key in obj){
  console.log(obj[key]);
}
