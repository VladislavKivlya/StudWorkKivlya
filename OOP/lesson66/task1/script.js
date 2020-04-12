class User {
	constructor(name, surname) {
		this.name = name;
		this.surname = surname;
	}

	getFullName() {
		return this.name + ' ' + this.surname;
	}
}

class Student extends User {
	constructor(name, surname, year) {
		super(name, surname);
		this.year = year;
}

	getFullName() {
		return super.getFullName();
	}
	getCourse() {
		var currentDate = new Date();
		var course = currentDate.getFullYear() - this.year;
		if (course > 5) {
			return 'Студент уже выпустился';
		}
		else {
			return 'Текущий курс ' + course;
		}
	}
}

var student = new Student('Иван', 'Иванов', 2014);

console.log(student.name);
console.log(student.surname);
console.log(student.getFullName());
console.log(student.getCourse());
