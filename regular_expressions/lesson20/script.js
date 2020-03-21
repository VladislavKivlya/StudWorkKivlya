let str = '31.12.2025';
const regular = /(\d{1,2})\.(\d{1,2})\.(\d{1,4})/;
let res = str.match(regular);
alert(res[1]);
alert(res[2]);
alert(res[3]);
