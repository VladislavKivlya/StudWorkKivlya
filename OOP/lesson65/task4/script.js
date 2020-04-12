class MyString {
	rev(str) {
	  var str = [...str];
		str.reverse();
		str = str.join('');
		return str;
	}
	uc_first(str){
		var str = str.toUpperCase().slice(0,1) + str.slice(1);
		return str;
	}
	uc_word(str){
		var str = str.replace(/(?:^|\s)(\S)/ug, m => m.toUpperCase());
		return str;
	}
}

var str = new MyString;
console.log(str.rev('abcdef'));
console.log(str.uc_first('abcdef gsggsg gwgwg'));
console.log(str.uc_word('abcdef gsggsg gwgwg'));
