let button = document.getElementById("enter");
let input = document.getElementById("userinput");
let ul = document.querySelector("ul");
let li = document.querySelectorAll("li")

function inputLength() {
	return input.value.length;
}

function createListElement() {
	let li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value = "";
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeydown(event) {
	if (inputLength() > 0 && event.key === 13) {
		createListElement();
	}
}

for (let i = 0; i < li.length; i++) {
	li[i].addEventListener("click", toggle);
  }

  function toggle() {
	this.classList.toggle("done");
  }

button.addEventListener("click", addListAfterClick);

input.addEventListener("keydown", addListAfterKeypress);
