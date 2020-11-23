var name;

function myFunction() {
	name = document.getElementById("username").value;
}

function popname() {
	document.getElementById("popupname").innerHTML = "Hi " + name;
}

function openForm() {
	if (name=="") {
		document.getElementById("myForm").style.display = "none";
	}
	else{
		document.getElementById("myForm").style.display = "block";
	}
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}