let arr = []; 
let size = 2; 
let subarray = [];
function GetRandomInt(mas) {
	for (var i = 0; i < 14; i++) {
		mas[i] = Math.floor(Math.random() * 101);
	}
}
GetRandomInt(arr);
function *createIterator(array, size) {
	for (let i = 0; i <Math.ceil(array.length/size); i++){
   		subarray[i] = array.slice((i*size), (i*size) + size);
	}
	yield subarray;
}

let iterator = createIterator(arr, size);
console.log(iterator.next());
