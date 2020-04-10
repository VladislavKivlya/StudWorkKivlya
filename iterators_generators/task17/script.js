let ul = document.querySelector('.ul');
let str = '12345678';

for(let symbol of str){
		var li = document.createElement('li');
		ul.append(li);
  		li.innerHTML = symbol;
}