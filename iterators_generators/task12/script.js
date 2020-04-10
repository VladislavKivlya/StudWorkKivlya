let obj = {
	a: 12,
	b: "string",
	c: [1,2,3,4,5]
};

obj[Symbol.iterator] = function *() {
		for(let key in obj) {
			yield obj[key];
		}
	}

for(let elem of obj){
	console.log(elem);
}