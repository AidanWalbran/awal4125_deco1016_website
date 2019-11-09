function validate (){
	var form = document.getElementById("form-details");
	var title = document.getElementById("title");
	var firstName = document.getElementById("first-name");
	var surname = document.getElementById("surname");
	var dob = document.getElementById("dob");
	var occupation = document.getElementById("occupation");
	var invalidTextLocation = document.getElementById("invalid-form");

	//checks entire form for any invalid entries to prevent only a single error message being presented once false is returned
	if (title.value === '' || title === 'title' || title == null || firstName.value === '' || firstName.value == null || surname.value === '' || surname.value == null || dob.value === '' || dob.value == null || occupation.value === '' || occupation.value == null) {
		//checks for each individual element to display error message
		if (title.value === '' || title === 'title' || title == null) {
			let invalidTitleParent = document.createElement("p");
			invalidTitleParent.setAttribute("class", "invalidForm");
			let invalidTitle = document.createTextNode("* title is required to proceed");
			invalidTitleParent.appendChild(invalidTitle);
			invalidTextLocation.appendChild(invalidTitleParent);
		}
		if (firstName.value === '' || firstName.value == null) {
			let invalidFNParent = document.createElement("p");
			invalidFNParent.setAttribute("class", "invalidForm");
			let invalidFN = document.createTextNode("* first name is required to proceed");
			invalidFNParent.appendChild(invalidFN);
			invalidTextLocation.appendChild(invalidFNParent);
		}
		if (surname.value === '' || surname.value == null) {
			let invalidSNParent = document.createElement("p");
			invalidSNParent.setAttribute("class", "invalidForm");
			let invalidSN = document.createTextNode("* surname is required to proceed");
			invalidSNParent.appendChild(invalidSN);
			invalidTextLocation.appendChild(invalidSNParent);
		}
		if (dob.value === '' || dob.value == null) {
			let invalidDOBParent = document.createElement("p");
			invalidDOBParent.setAttribute("class", "invalidForm");
			let invalidDOB = document.createTextNode("* date of birth is required to proceed");
			invalidDOBParent.appendChild(invalidDOB);
			invalidTextLocation.appendChild(invalidDOBParent);
		}
		if (occupation.value === '' || occupation.value == null) {
			let invalidOccupationParent = document.createElement("p");
			invalidOccupationParent.setAttribute("class", "invalidForm");
			let invalidOccupation = document.createTextNode("* occupation is required to proceed");
			invalidOccupationParent.appendChild(invalidOccupation);
			invalidTextLocation.appendChild(invalidOccupationParent);
		}
		return false;
	}
	else {
		//clears error messages after completed form
		invalidTextLocation.innerHTML = "";
		return true;
	}

}

function back (){
	location.replace("../index.html");
}

function home (){
	location.replace("../index.html");
}

const Form_Details = document.querySelector('form');
const Submit_Button = document.querySelector('button');

Form_Details.addEventListener('submit', function (e) {
	e.preventDefault();
	const First_Name = document.getElementById('first-name').value;
	localStorage.setItem("Name", First_Name);
});