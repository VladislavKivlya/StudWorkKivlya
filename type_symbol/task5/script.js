let sym = Symbol.for('sum');
let arr = [1, 5, 3];
arr[sym] = function () {
  var sum = 0;
	for (var i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  alert(sum);
}

arr[sym]();
