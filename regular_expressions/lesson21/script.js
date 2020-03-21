let str = '12 34 56 78';
const regular = /(\d)(\d)/g;
let res = str.replace(regular, '$2$1');
alert(res);
