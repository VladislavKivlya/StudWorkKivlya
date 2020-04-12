// Сделал немного не так как было в задании, но основную часть выполнил
class Rectangle {
	constructor(height, width) {
		this.squad = document.createElement('div');

		this.setWidth(width);
		this.setHeight(height);
		this.squad.style.border = '1px solid black';

		document.body.appendChild(this.squad);

	}

	getWidth(){
		return this.squad.style.width;
	}
	setWidth(width){
		this.squad.style.width = width + 'px';
	}
	getHeight(){
		return this.squad.style.height;
	}
	setHeight(height){
		this.squad.style.height = height + 'px';
	}
}

var ip1 = document.querySelector('#ip1');
var ip2 = document.querySelector('#ip2');
var but = document.querySelector('#but');

but.addEventListener('click', function() {
	var elem = new Rectangle(ip1.value, ip2.value);
	console.log('Width', parseInt(elem.getWidth()));
	console.log('Height', parseInt(elem.getHeight()));
	ip1.value = '';
	ip2.value = '';
});
