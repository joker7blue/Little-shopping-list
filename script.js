var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");

	/*CREATE THE BUTTON ELEMENT*/
	var btn = document.createElement("button");

	/*ADD TEXT "delete" TO BUTTON CREATED*/
	btn.appendChild(document.createTextNode("delete"));
	/*ADD CLASSE "delete" TO BUTTON CREATED*/
	btn.classList.add("delete");

	li.appendChild(document.createTextNode(input.value));
	/*ADD BUTTON TO LI*/
	li.appendChild(btn);

	ul.appendChild(li);

	input.value = "";
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);




/****************************** EXERCICE SOLUTION (USING FUNCTION EXPRESSION SYNTAX) *********************************/
ul.addEventListener('click', (event) => {


	if (!event.target.classList.contains('delete')) {
		event.target.classList.toggle('done');

	}else{
		ul.removeChild(event.target.parentElement);
	}
	
});