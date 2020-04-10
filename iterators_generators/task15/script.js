const map = new Map([
		[3, "three"],
		['second', 2],
		[{}, 'object'],
		[function () {}, 'function']
	]);

console.log([...map.keys()])