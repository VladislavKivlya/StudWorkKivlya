let obj = {
	a: 12,
	b: "string",
	c: [1,2,3,4,5]
}

function *createIterator(obj) {
	for(let key in obj){
		yield obj[key];
	}
}

let iterator = createIterator(obj);
for(let elem of iterator){
	console.log(elem);
}