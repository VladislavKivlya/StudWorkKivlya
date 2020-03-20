let str = '31.12.2025';
let res = str.match(/(\d{1,2})\.(\d{1,2})\.(\d{1,4})/);
alert(res[1]);
alert(res[2]);
alert(res[3]);
