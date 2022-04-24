const form = document.getElementById('form');
const firstname = document.getElementById('firstname');
const lastname = document.getElementById('lastname');
const email = document.getElementById('email');
const password = document.getElementById('password');
const about = document.getElementById('about');
const profileimage = document.getElementById('profileimage')


function checkInputs() {
	
	const emailValue = email.value;
	const firstnameValue = firstname.value;
	const lastnameValue = lastname.value;
	const passwordValue = password.value;
	

	
	if(emailValue === '') {
		setErrorFor(email, 'This is a required field');
	} else if (!isEmail(emailValue)) {
		setErrorFor(email, 'Not a valid email');
	} else {
		setSuccessFor(email);
	}
	
	if(firstnameValue === '') {
		setErrorFor(firstname, 'Firstname cannot be blank');
	} else {
		setSuccessFor(firstname);
	}
	
	if(lastnameValue === '') {
		setErrorFor(lastname, 'Lastname cannot be blank');
	} else {
		setSuccessFor(lastname);
	}
	
	if(passwordValue === '') {
		setErrorFor(password, 'Password cannot be blank');
	} else if (!ispassword(length < 8)) {
        setErrorFor(password, 'Should be 8 character minimum')
    } if (!ispassword (lenghth > 16)) {
            setErrorFor(password, 'Should be 16 character maximum')   
    }
    }
	
	

function setErrorFor(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'form-control error';
	small.innertext = message;
}

function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'form-control success';
}
	
function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

