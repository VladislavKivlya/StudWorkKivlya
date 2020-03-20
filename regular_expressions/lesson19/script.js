let str = 'a1b c34d x567z';
let num = str.match(/\d/g);
let sum = 0;
for (let elem of num){
    sum += Number(elem);
}
alert(sum);
