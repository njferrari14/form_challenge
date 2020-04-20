//initialize variables
let fields = document.querySelectorAll('input');
let gottem = document.getElementById('r4');
let button = document.getElementById('button');
let form = document.querySelector('form');
let header = document.querySelector('h1');
let validZip = /^\d{5}$|^\d{5}-\d{4}$/;
let validName = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/
let validEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/

setListeners();

function setListeners() {
	//loop to set event listeners on each input element
	for (i = 0; i < fields.length; i++) {
		let field = fields[i];
		let type = field.getAttributeNode('type').value;
		//add listeners to every input
		//except the radio and submit buttons
		if ((type != 'submit') && (type != 'radio')) {
			field.addEventListener('change', function(event) {
				checkInput(field, field.value);
				isComplete();
			}, false);
		}
		if ((type != 'submit') && (type != 'radio')) {
			field.addEventListener('focusout', function(event) {
				checkInput(field, field.value);
				isComplete();
			}, false);
		}
	}
	//set listener on submit button
	button.addEventListener('click', function(event) {
		//loop through all input elements and validate
		for (i = 0; i < fields.length; i++) {
			let type = fields[i].getAttributeNode('type').value;
			if ((type != 'submit') && (type != 'radio')) {
				checkInput(fields[i], fields[i].value);
			}
		}
	}, false);
	//set listener for form on submit
	form.addEventListener('submit', function(event) {
		handleForm(event);
	}, false);
}

//when form is submitted, do this
function handleForm(event) {
	//stop page refresh
	event.preventDefault();
	//disable the form
	form.style.display = 'none';
	header.innerText = 'Thank you!';
	header.style.marginTop = '200px';
	//say thank you

}

function checkInput(field, input) {
	//get value of attribute node type for current element
	let type = field.getAttributeNode('type').value;
	let id = field.getAttributeNode('id').value
	//if there is no input, make warning visible
	//else validate input
	if (((input === '') && (type != 'radio')) || ((type === 'checkbox') && (!field.checked))) {
		field.style.border = '3px outset red';
		field.nextElementSibling.className += ' visible';
		field.nextElementSibling.classList.remove('done');
	} else if ((type != 'radio') && (type != 'checkbox') && (type != 'submit')) {
		validate(field, input, id);
	} else if ((type === 'checkbox') && field.checked) {
		field.nextElementSibling.className = 'warning hidden done ';
	}
}

function validate(field, input, id) {
	//test input against regx and assign result to isValid
	if ((id === 'fname') || (id === 'lname')) {
		isValid = validName.test(input);
	} else if (id === 'zip') {
		isValid = validZip.test(input);
	} else if (id === 'email') {
		isValid = validEmail.test(input);
	} else if (id === 'bday') {
		let age = getAge(input);
		if (age >= 18) {
			isValid = true;
		} else {
			isValid = false;
		}
	}
	//if invalid, display correct warning, 
	//else remove warning classes and turn border green
	if (!isValid) {
		field.style.border = '3px outset red';
		field.nextElementSibling.classList.remove('done');
		field.nextElementSibling.className = 'warning hidden ' + id + '-warning';
	} else {
		field.style.border = '3px inset green';
		field.nextElementSibling.className = 'warning hidden done ';
	}
}

//calculate age from entered birthdate
function getAge(DOB) {
    let today = new Date();
    let birthDate = new Date(DOB);
    let age = today.getFullYear() - birthDate.getFullYear();
    let m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate() + 1)) {
        age--;
    }
    return age;
}

//check to see if all required fields are valid
//set form border to green
function isComplete() {
	let finishedFields = document.querySelectorAll('.done');
	if (finishedFields.length === 6) {
		form.style.border = '8px outset green';
	} else {
		form.style.borderColor = 'yellow';
	}
}

function thankYou() {
	form.style.display = 'none';
}

//this is just for fun
window.addEventListener('click', function(event) {
	if (gottem.checked) {
		gottem.nextElementSibling.className = 'gottem';
	} else {
		gottem.nextElementSibling.className = 'none';
	}
}, false);