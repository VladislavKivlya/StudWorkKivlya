let str = '<a href="" class="eee" id="zzz">';
const regular = /\w+(?==)/g;
let res = str.match(regular);
alert(res);
