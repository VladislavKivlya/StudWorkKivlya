p = document.querySelectorAll('p');
but = document.querySelector('#but');
let entries = p.entries();

but.addEventListener('click', function () {
	for(let[num, elem] of entries){
		elem.innerHTML += num;
	}
});
