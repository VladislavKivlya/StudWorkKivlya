let
  text = document.querySelector('#textarea'),
  but_left = document.querySelector('#butl'),
  but_right = document.querySelector('#butr'),
  mas,
  a;

if(localStorage['arr']) {
mas = JSON.parse(localStorage.getItem('arr'));
text.value = mas[mas.length -1]
a = mas.length - 1;
} else {
mas = [];
}


text.addEventListener('change', function () {
mas.push(this.value);
a = mas.length - 1;
localStorage.setItem('arr', JSON.stringify(mas));
})

but_left.addEventListener('click', function () {
if(mas.length > 0 && a !== 0) {
text.value = mas[a - 1];
a--;
}
})

but_right.addEventListener('click', function () {
if(mas.length > 0 && a < mas.length - 1) {
text.value = mas[a + 1];
a++;
}
})
