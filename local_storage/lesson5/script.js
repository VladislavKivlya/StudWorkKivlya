var daysRus = ['Пн','Вт','Ср','Чт','Пт','Сб', 'Вс'];
var months = ['Январь','Февраль','Март','Апрель','Май','Июнь','Июль','Август',
'Сентябрь','Октябрь','Ноябрь','Декабрь'];
var now = new Date;
var date = new Date();
var field = document.getElementById('field');
var notes = document.getElementById('notes');

initCalendar(field, date);

//calendar

function initCalendar(field, date){
	var head = field.querySelector('#head');
	var calendar = field.querySelector('#calendar');
	var span = head.querySelector('span');
	var prev = head.querySelector('a.prev');
	var next = head.querySelector('a.next');

	setSpan(span, date.getMonth(), date.getFullYear());
	createCalendar(calendar, date);

	prev.addEventListener('click', function(){
		changeMonth(-1, span, calendar);
		field.lastElementChild.innerHTML = '';
	});

	next.addEventListener('click', function(){
		changeMonth(1, span, calendar);
		field.lastElementChild.innerHTML = '';
	});
}

function createCalendar(parent, date){
	parent.innerHTML = '';
	var table = document.createElement('table');
	parent.appendChild(table);

	var firstDay = new Date(date.getFullYear(), date.getMonth());
	var lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);
	var nextFirstDay = new Date(date.getFullYear(), date.getMonth() + 1);
	var monthLength = (nextFirstDay - firstDay) / (3600 * 24000);

	var daysToMon = firstDay.getDay() - 1;
	if (daysToMon < 0){
		daysToMon = 6;
	}

	var daysToSun = 6 - lastDay.getDay();
	if (daysToSun == 6){
		daysToSun = 0;
	}

	var startDay = new Date(firstDay.getFullYear(), firstDay.getMonth(), firstDay.getDate() - daysToMon);

	fillTable(table, monthLength, daysToMon, daysToSun, startDay);
}

function fillTable(table, monthLength, daysToMon, daysToSun, startDay){
	createHead(table, daysRus);

	for (let j = 0; j < (monthLength + daysToMon + daysToSun);){
		var tr = document.createElement('tr');
		table.appendChild(tr);
		for (let i = 0; i < 7; i++, j++){
			var td = document.createElement('td');
			td.dataset.date = startDay.getDate() + '-' + startDay.getMonth() + '-' + startDay.getFullYear();
			tr.appendChild(td);
			td.innerHTML = startDay.getDate();
			if ((startDay.getDate() == now.getDate()) && (startDay.getMonth() == now.getMonth()) &&
				(startDay.getFullYear() == now.getFullYear())){
				td.style.border = '2px solid red';
			}
			if (startDay.getMonth() != date.getMonth()){
				td.classList.add('disabled-cell');
			} else {
				td.classList.add('enabled-cell');
			}
			startDay.setDate(startDay.getDate() + 1);

			if (!td.classList.contains('disabled-cell')){
				td.addEventListener('click', function(){
					var self = this;
					clickCell(self, table.querySelectorAll('td.enabled-cell'));
				});
			}
		}
	}
}

function clickCell(self, enabledCells){
	for (let i = 0; i < enabledCells.length; i++){
		if (enabledCells[i].classList.contains('selected')){
			enabledCells[i].classList.toggle('selected');
		}
	}
	self.classList.toggle('selected');
	initNotes(notes, self);
}

function createHead(table, arr){
	var tr = document.createElement('tr');
	for (let i = 0; i < arr.length; i++){
		var th = document.createElement('th');
		th.innerHTML = arr[i];
		tr.appendChild(th);
	}
	table.appendChild(tr);
}

function changeMonth(k, span, parent){
	date.setMonth(date.getMonth() + k);
	setSpan(span, date.getMonth(), date.getFullYear());
	createCalendar(parent, date);
}

function setSpan(span, month, year){
	span.innerHTML = months[month] + ' ' + year;
}

// notes

function initNotes(notes, td){
  notes.innerHTML = '';
  createForm(notes, td);
}

function createForm(notes, td){
	var div = document.createElement('div');

	var input = document.createElement('input');
	input.placeholder = 'enter new note';

	var addButton = document.createElement('button');
	addButton.innerHTML = 'Add note';

	var selectedDate = document.createElement('h3');
	selectedDate.innerHTML = getCorrectDate(td.dataset.date);

	var ul = document.createElement('ul');
	ul.innerHTML = '<h4>Notes</h4>';
	ul.style.listStyleType = 'none';
  fillUL(td.dataset.date, ul);

	notes.appendChild(div);
	div.appendChild(input);
	div.appendChild(addButton);
	div.appendChild(selectedDate);
	div.appendChild(ul);

	addButton.addEventListener('click', function(){
		addLI(ul, input.value, false);
    input.value = '';
	});
	input.addEventListener('keypress', function(event){
		if (event.keyCode == 13){
			addLI(ul, input.value, false);
      input.value = '';
		}
	});
	div.addEventListener('click', function(){
		save(td.dataset.date, ul);
	});
	div.addEventListener('keypress', function(){
		if (event.keyCode == 13){
			save(td.dataset.date, ul);
		}
	});
}

function fillUL(currentDate, ul){
  let obj = JSON.parse(localStorage.getItem(currentDate));
  if (obj){
    for (let i = 0; i < obj.texts.length; i++){
      addLI(ul, obj.texts[i], obj.checked[i]);
    }
  }
}

function save(currentDate, ul){
  let checkboxes = ul.querySelectorAll('li > input');
  let paragraphs = ul.querySelectorAll('li > p');
  let obj = {
    checked: [],
    texts: [],
  };

  for (let i = 0; i < paragraphs.length; i++){
    obj.checked.push(checkboxes[i].checked);
    obj.texts.push(paragraphs[i].innerHTML);
  };

  localStorage.setItem(currentDate, JSON.stringify(obj));
}

function addLI(ul, text, checked){
  var li = document.createElement('li');
	var checkbox = document.createElement('input');
	var p = document.createElement('p');
	var a = document.createElement('a');

	checkbox.type = 'checkbox';
  checkbox.checked = checked;
	p.style.display = 'inline';
	p.innerHTML = text;
	a.href = '#';
	a.innerHTML = '[ X ]';

	li.appendChild(checkbox);
	li.appendChild(p);
	li.appendChild(a);
	ul.appendChild(li);

  if (checked){
    markAsDone(checkbox, p);
  }

	checkbox.addEventListener('change', function(){
    markAsDone(checkbox, p);
  });
	p.addEventListener('dblclick', edit);
	a.addEventListener('click', deleteObject);
}

function edit(){
	var newInput = document.createElement('input');
	var self = this;
	var span = document.createElement('span');
	span.innerHTML = '<i> press Enter </i>';

	newInput.type = 'text';
	newInput.value = this.innerHTML;

	this.innerHTML = '';
	this.appendChild(newInput);
	this.appendChild(span);

	this.removeEventListener('dblclick', edit);
	newInput.addEventListener('keydown', function(event){
  	if (event.keyCode == 13) {
      accept(self, newInput.value);
    }
	});
	newInput.addEventListener('blur', function(event){
		accept(self, newInput.value);
	});
}

function markAsDone(checkbox, p){
  if (p.children.length){
    setText(p, p.firstElementChild.value);
  }
	checkbox.disabled = true;
	p.style.color = '#ccc';
  p.style.textDecoration = 'line-through';
  p.removeEventListener('dblclick', edit);
}

function deleteObject(){
	this.closest('ul').removeChild(this.parentElement);
}

function accept(elem, text){
  setText(elem,text);
  elem.addEventListener('dblclick', edit);
}

function getCorrectDate(str){
	let months = ['января','февраля','марта','апреля','мая','июня','июля','августа',
	'сентября','октября','ноября','декабря'];
	let arr = str.split('-');
	newStr = arr[0] + ' ' + months[arr[1]] + ' ' + arr[2];

	return newStr;
}

function setText(elem, text){
	elem.innerHTML = text;
}
