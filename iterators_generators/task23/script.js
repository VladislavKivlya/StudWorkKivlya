ip = document.querySelector('#ip');
but = document.querySelector('#but');

but.addEventListener('click', function () {
	let str = ip.value;
	let str2 = [...str];
	str2.reverse();
	console.log(str2);
});