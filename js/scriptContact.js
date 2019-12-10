window.onload = pageReady;

function pageReady(){
	
	var formHandle = document.forms.form_contact;
	
	formHandle.onsubmit = processForm;
	
	function processForm(){
	
		//validating name input
		var nameValue = formHandle.f_name.value;
		if(nameValue === "" || nameValue === null){
			nameMsg=document.getElementById("s_name");
			nameMsg.style.display="inline";
			nameMsg.style.fontSize="10px";
			nameMsg.style.fontWeight="bold";
			nameMsg.style.color="red";
			nameMsg.focus();	
			return false;
		}
		
		//validating phone input
		var phoneValue = formHandle.f_phone.value;
		var phoneRegEx =/^\d{10}$/; 
		if(phoneValue === "" || phoneValue === null || !phoneRegEx.test(phoneValue)){
			phoneMsg=document.getElementById("s_phone");
			phoneMsg.style.display="inline";
			phoneMsg.style.fontSize="10px";
			phoneMsg.style.fontWeight="bold";
			phoneMsg.style.color="red";
			phoneMsg.focus();	
			return false;
		}
		
		//validating user email-id format
		var emailValue = formHandle.f_email.value;
		var emailRegEx = /^\w@\w.com$/i;
		if(emailValue === "" || emailValue === null /*|| !emailRegEx.test(emailValue)*/){
			emailMsg = document.getElementById("s_email");
			emailMsg.style.display = "inline";
			emailMsg.style.fontSize="10px";
			emailMsg.style.fontWeight="bold";
			emailMsg.style.color="red";
			emailMsg.focus();
			return false;
		}
		
		//validating user address
		var addressValue = formHandle.f_address.value;
		if(addressValue === "" || addressValue === null){
			addressMsg = document.getElementById("s_address");
			addressMsg.style.display = "inline";
			addressMsg.style.fontSize="10px";
			addressMsg.style.fontWeight="bold";
			addressMsg.style.color="red";
			addressMsg.focus();
			return false;
		}
		
		//validating province dropdownlist menu
		var provinceValue = formHandle.f_province.value;
		if(provinceValue === "" || provinceValue === null){
			provinceMsg = document.getElementById("s_province");
			provinceMsg.style.display = "inline";
			provinceMsg.style.fontSize="10px";
			provinceMsg.style.fontWeight="bold";
			provinceMsg.style.color="red";
			provinceMsg.focus();
			return false;
		}
		
		//displaying whether the form is submitted after checking all validations
		var boxMsg = document.getElementById("msg_box");
		boxMsg.style.display = "inline";
		boxMsg.style.fontSize="25px";
		boxMsg.style.fontWeight="bold";
		return false;
	}
}