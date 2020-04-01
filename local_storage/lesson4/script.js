var name = document.getElementById('name');
var name1 = name.value;
var number_Tel = document.getElementById('number_tel');
var number_Tel2 = number_Tel.value;


var addNnum = document.getElementById('add_num');
var removeNum = document.getElementById('remove_num');

addNnum.addEventListener('click', funcAdd);

function funcAdd() {

	var name = document.getElementById('name');
	var name1 = name.value;
	var number_Tel2 = number_Tel.value;
localStorage.setItem(name1, number_Tel2);

};

removeNum.addEventListener('click', funcRem);

function funcRem() {

	var wrap = document.querySelector('.wrapper');
	var div = document.createElement('div');
		div.classList.add('wind');
			wrap.appendChild(div);
	var inp = document.createElement('input');
		inp.classList.add('inp');
			div.appendChild(inp);
	var but = document.createElement('button');
		but.innerHTML = 'ok';
		but.classList.add('button');
			div.appendChild(but);
	but.addEventListener('click', funcClear);

function funcClear() {

	var valKey = inp.value;
		localStorage.removeItem(valKey);
			wrap.removeChild(div);

};
};

var search = document.getElementById('search');
var searchBut = document.getElementById('search_but');
var tel = document.getElementById('tel');

searchBut.addEventListener('click', funcSearch);

function funcSearch() {

	var subscrib = search.value;
	var qqq = localStorage.getItem(subscrib);
		tel.classList.add('tel');
		tel.display = 'block';
		tel.innerHTML = qqq;

}
