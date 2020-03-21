//2
const regular = /https?:\/\//;
let site = 'https://github.com';
alert(regular.test(site));
// //4
const regular1 = /\.jpe?g/;
let img = 'a.jpeg';
alert(regular1.test(img));
// 8
const regular2 = /^([0-2][0-9]|(3)[0-1])(.)(((0)[1-9])|((1)[0-2]))(.)\d{4}$/;
let date = '17.09.2018';
alert(regular2.test(date));
// 10
const regular3 =  /^\w{3,20}\@\w{2,10}\.\w{2,5}$/;
let email = 'asdsf123@gmail.com'
alert(regular3.test(email));
