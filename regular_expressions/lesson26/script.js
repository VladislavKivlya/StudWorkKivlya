let str = 'aaa [2] bbb [3] ccc [12] ddd';
const regular = /([\d+])/g;
let result = str.replace(regular, function(match0, match1) {
  let sum = match1 * 2;
  return sum;
});
alert(result);
