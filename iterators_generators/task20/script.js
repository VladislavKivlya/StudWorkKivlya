let obj = {
	a: 12,
	b: "string",
	c: [1,2,3,4,5]
};

Symbol.iterator: function *() {
		for(let key in obj) {
			yield obj[key];
		}
	}

let arr = [...obj];
console.log(arr);
