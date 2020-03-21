let str = 'sss site.ru zzz site.com kkk';
let str1 = '<a href = "http://$&">$&</a>';
const regular = /(\w+\.ru|\w+\.com)/g;
let res = str.replace(regular, str1);
alert(res);
