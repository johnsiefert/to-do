let enter = document.getElementById("enter");
let input = document.getElementById("userinput");
let ul = document.querySelector("ul");
let li = document.querySelectorAll("li");

for (let i = 0; i < li.length; i++) {
	li[i].addEventListener("click", toggle);
  }

  for(let i=0; i< del.length; i++){
	del[i].addEventListener("click", deleteListElement);
}


function deleteListElement(){
	this.parentNode.parentNode.removeChild(this.parentNode);
  }

function inputLength() {
	return input.value.length;
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


  function toggle() {
	this.classList.toggle("done");
  }


  function createListElement() {
	if(!input.value.trim()){
		alert('You must enter a value');
		return;
	  }
	let li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value = "";
	let delbutton= document.createElement("button");
	delbutton.appendChild(document.createTextNode("x"));
	li.appendChild(delbutton);
	ul.appendChild(li);

	delbutton.addEventListener("click", deleteListElement);
	li.addEventListener("click", toggle);

}

enter.addEventListener("click", addListAfterClick);

input.addEventListener("keydown", addListAfterKeydown);
