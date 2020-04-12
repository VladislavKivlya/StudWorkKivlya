class Validator {
	isDomein(str) {
		const regular = /\.net|\.com|\.ru/;
		return regular.test(str);
	}
	isDate(str) {
		const regular = /^([0-2][0-9]|(3)[0-1])(.)(((0)[1-9])|((1)[0-2]))(.)\d{4}$/;
		return regular.test(str);

	}
	isEmail(str) {
		const regular =  /^\w{3,20}\@\w{2,10}\.\w{2,5}$/;
		return regular.test(str);
	}
	isPhone(str) {
		const regular = /\+7\s\([0-9]{3}\)\s[0-9-]{9}/;
		return regular.test(str);
	}
}

var str = new Validator;
console.log('Домен', str.isDomein('abcdef.com'));
console.log('Дата', str.isDate('17.08.2014'));
console.log('Email', str.isEmail('kivlav22@gmail.com'));
console.log('Телефон', str.isPhone('+7 (297) 817-68-27'));
