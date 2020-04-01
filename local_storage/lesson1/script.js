let inp = document.querySelector("textarea");

let val ='';

inp.addEventListener ('input', function () {
val = inp.value;
localStorage.setItem('value', val);
});
window.document.addEventListener('DOMContentLoaded', function(event) {
const func = () => inp.value = localStorage.getItem('text');
setTimeout(func, 1000);

}, false);
