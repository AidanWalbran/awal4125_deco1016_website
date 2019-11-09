function onOffMailingAddress() {
  var sameAddress = document.getElementById("same-address");
  var mailingAddress = document.getElementById("mailing-address");
  if (sameAddress.checked == true){
    mailingAddress.style.display = "none";
  } else {
    mailingAddress.style.display = "block";
  }
}

function validateContact (){
	var form = document.getElementById("form-contact");
	var email = document.getElementById("email");
	var confirmEmail = document.getElementById("confirm-email");
	var mobilePhone = document.getElementById("mobile-phone");
	var workPhone = document.getElementById("work-phone");
	var homePhone = document.getElementById("home-phone");
	var streetNumR = document.getElementById("street-number-r");
	var streetNameR = document.getElementById("street-name-r");
	var suburbR = document.getElementById("suburb-r");
	var stateR = document.getElementById("state-r");
	var postcodeR = document.getElementById("postcode-r");
	var invalidTextLocation = document.getElementById("invalid-form");

	var streetNumM = document.getElementById("street-number-m");
	var streetNameM = document.getElementById("street-name-m");
	var suburbM = document.getElementById("suburb-m");
	var stateM = document.getElementById("state-m");
	var postcodeM = document.getElementById("postcode-m");

	var addressCheck = document.getElementById("same-address");

	if (invalidTextLocation.innerHTML != "" || invalidTextLocation.innerHTML != null) {
		invalidTextLocation.innerHTML = "";
	}
	//stops the errors repeating
		if (email.value == '' || email.value == null || confirmEmail.value == '' || confirmEmail.value == null || ((mobilePhone.value == '' || mobilePhone.value == null) && (workPhone.value == '' || workPhone.value == null) && (homePhone.value == '' || homePhone.value == null)) || streetNumR.value == '' || streetNumR.value == null || streetNameR.value == '' || streetNameR.value == null || suburbR.value == '' || suburbR.value == null || stateR.value == '' || stateR.value == null || postcodeR.value == '' || postcodeR.value == null){
		//checks for each individual element to display error message
			if (email.value == '' || email.value == null) {
				let invalidEmailParent = document.createElement("p");
				invalidEmailParent.setAttribute("class", "invalidForm");
				let invalidEmail = document.createTextNode("* email is required to proceed");
				invalidEmailParent.appendChild(invalidEmail);
				invalidTextLocation.appendChild(invalidEmailParent);
			}
			if (confirmEmail.value == '' || confirmEmail.value == null) {
				let invalidConEmailParent = document.createElement("p");
				invalidConEmailParent.setAttribute("class", "invalidForm");
				let invalidConEmail = document.createTextNode("* email requires confirmation to proceed");
				invalidConEmailParent.appendChild(invalidConEmail);
				invalidTextLocation.appendChild(invalidConEmailParent);
			}
			//only one phone number required
			if ((mobilePhone.value == '' || mobilePhone.value == null) && (workPhone.value == '' || workPhone.value == null) && (homePhone.value == '' || homePhone.value == null)){
				let invalidPhoneParent = document.createElement("p");
				invalidPhoneParent.setAttribute("class", "invalidForm");
				let invalidPhone = document.createTextNode("* phone number is required to proceed");
				invalidPhoneParent.appendChild(invalidPhone);
				invalidTextLocation.appendChild(invalidPhoneParent);
			}
			if (streetNumR.value == '' || streetNumR.value == null) {
				let invalidStNumRParent = document.createElement("p");
				invalidStNumRParent.setAttribute("class", "invalidForm");
				let invalidStNumR = document.createTextNode("* street number is required to proceed");
				invalidStNumRParent.appendChild(invalidStNumR);
				invalidTextLocation.appendChild(invalidStNumRParent);
			}
			if (streetNameR.value == '' || streetNameR.value == null) {
				let invalidStNameRParent = document.createElement("p");
				invalidStNameRParent.setAttribute("class", "invalidForm");
				let invalidStNameR = document.createTextNode("* street name is required to proceed");
				invalidStNameRParent.appendChild(invalidStNameR);
				invalidTextLocation.appendChild(invalidStNameRParent);
			}
			if (suburbR.value == '' || suburbR.value == null) {
				let invalidSuburbRParent = document.createElement("p");
				invalidSuburbRParent.setAttribute("class", "invalidForm");
				let invalidSuburbR = document.createTextNode("* suburb is required to proceed");
				invalidSuburbRParent.appendChild(invalidSuburbR);
				invalidTextLocation.appendChild(invalidSuburbRParent);
			}
			if (stateR.value == '' || stateR.value == null) {
				let invalidStateRParent = document.createElement("p");
				invalidStateRParent.setAttribute("class", "invalidForm");
				let invalidStateR = document.createTextNode("* state is required to proceed");
				invalidStateRParent.appendChild(invalidStateR);
				invalidTextLocation.appendChild(invalidStateRParent);
			}
			if (postcodeR.value == '' || postcodeR.value == null) {
				let invalidPostcodeRParent = document.createElement("p");
				invalidPostcodeRParent.setAttribute("class", "invalidForm");
				let invalidPostcodeR = document.createTextNode("* postcode is required to proceed");
				invalidPostcodeRParent.appendChild(invalidPostcodeR);
				invalidTextLocation.appendChild(invalidPostcodeRParent);
			}
			return false;
		}
		//check for matching emails
		else if (confirmEmail.value != email.value) {
			let invalidMismatchParent = document.createElement("p");
			invalidMismatchParent.setAttribute("class", "invalidForm");
			let invalidMismatch = document.createTextNode("* emails do not match");
			invalidMismatchParent.appendChild(invalidMismatch);
			invalidTextLocation.appendChild(invalidMismatchParent);
			return false;
		}
		if (addressCheck.checked != true) {
			if (streetNumM.value == '' || streetNumM.value == null || streetNameM.value == '' || streetNameM.value == null || suburbM.value == '' || suburbM.value == null || stateM.value == '' || stateM.value == null || postcodeM.value == '' || postcodeM.value == null) {
				if (streetNumM.value == '' || streetNumM.value == null) {
					let invalidStNumMParent = document.createElement("p");
					invalidStNumMParent.setAttribute("class", "invalidForm");
					let invalidStNumM = document.createTextNode("* (mailing) street number is required to proceed");
					invalidStNumMParent.appendChild(invalidStNumM);
					invalidTextLocation.appendChild(invalidStNumMParent);
				}
				if (streetNameM.value == '' || streetNameM.value == null) {
					let invalidStNameMParent = document.createElement("p");
					invalidStNameMParent.setAttribute("class", "invalidForm");
					let invalidStNameM = document.createTextNode("* (mailing) street name is required to proceed");
					invalidStNameMParent.appendChild(invalidStNameM);
					invalidTextLocation.appendChild(invalidStNameMParent);
				}
				if (suburbM.value == '' || suburbM.value == null) {
					let invalidSuburbMParent = document.createElement("p");
					invalidSuburbMParent.setAttribute("class", "invalidForm");
					let invalidSuburbM = document.createTextNode("* (mailing) suburb is required to proceed");
					invalidSuburbMParent.appendChild(invalidSuburbM);
					invalidTextLocation.appendChild(invalidSuburbMParent);
				}
				if (stateM.value == '' || stateM.value == null) {
					let invalidStateMParent = document.createElement("p");
					invalidStateMParent.setAttribute("class", "invalidForm");
					let invalidStateM = document.createTextNode("* (mailing) state is required to proceed");
					invalidStateMParent.appendChild(invalidStateM);
					invalidTextLocation.appendChild(invalidStateMParent);
				}
				if (postcodeM.value == '' || postcodeM.value == null) {
					let invalidPostcodeMParent = document.createElement("p");
					invalidPostcodeMParent.setAttribute("class", "invalidForm");
					let invalidPostcodeM = document.createTextNode("* (mailing) postcode is required to proceed");
					invalidPostcodeMParent.appendChild(invalidPostcodeM);
					invalidTextLocation.appendChild(invalidPostcodeMParent);
				}
				return false;
			}
		}
		else {
			//clears error messages after completed form
			invalidTextLocation.innerHTML = "";
			location.replace("registration-security.html");
			return true;
	}
}

function back (){
	location.replace("registration-details.html");
}

function home (){
	location.replace("../index.html");
}

// const Form_Details = document.querySelector('form');
// const Submit_Button = document.querySelector('button');

// Form_Details.addEventListener('submit', function (e) {
// 	e.preventDefault();
// 	const First_Name = document.getElementById('first-name').value;
// 	localStorage.setItem("Name", First_Name);
// });