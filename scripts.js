//initialize variables
let fields = document.querySelectorAll('input');
let gottem = document.getElementById('r4');
let button = document.getElementById('button');
let validZip = /^\d{5}$|^\d{5}-\d{4}$/;
let validName = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/
let validEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/

//loop to set event listeners on each field
for (i = 0; i < fields.length; i++) {
	setTabListeners(fields[i]);
}

//set listener on submit button
button.addEventListener('click', function(event) {
	for (i = 0; i < fields.length; i++) {
		let type = fields[i].getAttributeNode('type').value;
		if ((type != 'submit') && (type != 'radio')) {
			checkInput(fields[i], fields[i].value);
		}
	}
}, false);

//set event listener for current element
function setTabListeners(field) {
	let type = field.getAttributeNode('type').value;
	//add focusout listeners to every input
	//except the radio and submit buttons
	if ((type != 'submit') && (type != 'radio')) {
		field.addEventListener('focusout', function(event) {
			checkInput(field, field.value);
		}, false);
	}
}

function checkInput(field, input) {
	//get value of attribute node type for current element
	let type = field.getAttributeNode('type').value;
	let id = field.getAttributeNode('id').value
	//if there is no input, make warning visible
	//else validate input
	if (((input === '') && (type != 'radio')) || ((type === 'checkbox') && (!field.checked))) {
		field.style.border = '2px dashed red';
		field.nextElementSibling.className += ' visible';
	} else if ((type != 'radio') && (type != 'checkbox') && (type != 'submit')) {
		validate(field, input, id);
	} else if ((type === 'checkbox') && field.checked) {
		field.nextElementSibling.className = 'warning hidden ';
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
		field.style.border = '2px dashed red';
		field.nextElementSibling.className = 'warning hidden ' + id + '-warning';
	} else {
		field.style.border = '2px solid green';
		field.nextElementSibling.className = 'warning hidden ';
	}
}

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


//this is just for fun
window.addEventListener('click', function(event) {
	if (gottem.checked) {
		gottem.nextElementSibling.className = 'visible gottem';
	} else {
		gottem.nextElementSibling.className = 'hidden';
	}
}, false);