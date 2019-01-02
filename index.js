"use strict";
	let checkboxes = document.querySelectorAll("label");

	function toggleCheckboxFill(checkbox) {
		const checkboxFill = checkbox.children[1].children[0];
		checkboxFill.classList.toggle("checkmark__fill--visibility");
		if(!checkboxFill.classList.contains("checkmark__fill--visibility")){
			checkbox.children[0].checked = true;
		}else{
			checkbox.children[0].checked = false;	
		}
	}

	checkboxes.forEach(checkbox => {
		  
	//Use stopPropagation and preventDefault to block twice check input
	//checkbox is manually checked in toggleCheckboxFill function	  
		checkbox.addEventListener("click", function(event){
			event.stopPropagation();
			event.preventDefault();
			toggleCheckboxFill(checkbox);

		});
	});

	






