//2
const regular = /https?:\/\//;
let site = 'https://github.com';
alert(regular.test(site));
//4
const regular = /\.jpe?g/;
let img = 'a.jpeg';
alert(regular.test(img));
