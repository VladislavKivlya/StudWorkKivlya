
setGetInfo("elem");

function setGetInfo(classInput) {
let inputs = document.getElementsByClassName(classInput);
for(let i = 0; i < inputs.length; i++) {
inputs[i].dataset.index = i;
if(inputs[i].type == "checkbox" || inputs[i].type == "radio") {
inputs[i].addEventListener('click', saveCheck);
inputs[i].checked = Boolean(localStorage.getItem(i) == "true");
}else {
inputs[i].addEventListener('blur', saveInfo);
inputs[i].value = localStorage.getItem(i + "");
}
}

function saveCheck() {
localStorage.setItem(this.dataset.index + "", this.checked);
}

function saveInfo() {
localStorage.setItem(this.dataset.index + "", this.value);
}
}
