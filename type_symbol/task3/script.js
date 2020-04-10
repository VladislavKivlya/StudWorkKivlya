let sym = Symbol();
let obj = {
	a: 1,
	b: 2,
	c: 3,
	[sym]: function() {
		for (let key in this) {
			console.log(key);
		}
	}
}
obj[sym]();
