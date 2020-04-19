//initialize variables
let fields = document.querySelectorAll('input');
let validZip = /^\d{5}$|^\d{5}-\d{4}$/;
let validName = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/
let validEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/

//loop to set event listeners on each field
for(i = 0; i < fields.length; i++) {
	setListener(fields[i]);
}

//set event listener for current element
function setListener(field) {
	//whenever focus is moved away from a field, 
	//run validation on the field's content
	field.addEventListener('focusout', function(event) {
		analyze(field, field.value);
	}, false);
}

function analyze(field, input) {
	//get value of attribute node type for current element
	let type = event.target.getAttributeNode("type").value;
	let id = event.target.getAttributeNode("id").value
	//if there is no input, make warning visible
	//else validate input
	if((type === 'text') || (type === 'email') || (type === 'date')) {
		if(input === '') {
			field.style.border = '2px dashed red';
			field.nextElementSibling.className += ' visible';
		} else {
			validate(field, input, id);
		}
	}
}

function validate(field, input, id) {
	if((id === 'fname') || (id = 'lname')) {
		isValid = validName.test(input);
	} else if(id === 'zip') {
		isValid = validZip.test(input);
	} else if(id === 'email') {
		isValid = validEmail.test(input);
	}
	if(!isValid) {
		failedValidation(field, id);
	} else {
		successfulValidation(field, id);
	}
}

function failedValidation(field, id) {
		field.style.border = '2px dashed red';
		field.nextElementSibling.className = 'warning hidden ' + id + '-warning';
}

function successfulValidation(field, id) {
	field.style.border = '2px solid green';
	field.nextElementSibling.className = 'warning hidden ';
}