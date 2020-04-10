//Функция по созданию рандомного массива
function getrandom() {
  var arr = [];
  for (var i = 1; i < 11; i++) {
      arr.push(Math.floor(Math.random() * 10));
    }
    console.log(arr);
    // добавление функции подсчёта суммы массива с помощью Symbol
    let sym = Symbol.for('sum');
    arr[sym] = function () {
      var sum = 0;
    	for (var i = 0; i < arr.length; i++) {
        sum += arr[i];
      }
      console.log("Сумма первого массива: " + sum);
    }

    arr[sym]();
}
// Вызов фунции
getrandom();

//Функция по созданию массива из повторяющихся эл-тов 2 массивов

var arr1 = [2,4,5,8,54,3,9];
var arr2 = [6,7,5,3,8,32,4];

function para(array1, array2) {
  var mas = [],
      cache,
      ln1 = array1.length,
      ln2 = array2.length;
  for (var i = 0; i < ln1; i++) {
    cache = array1[i];
    for (var j = 0; j < ln2; j++) {
      if (cache == array2[j]) {
        mas.push(cache);
      }
    }
  }
  console.log(mas);
  // добавление функции подсчёта суммы массива с помощью Symbol
  let sym = Symbol.for('sum');
  mas[sym] = function () {
    var sum = 0;
  	for (var i = 0; i < mas.length; i++) {
      sum += mas[i];
    }
    console.log("Сумма второго массива: " + sum);
  }
  mas[sym]();
}
// Вызов данной функции
para(arr1, arr2);
