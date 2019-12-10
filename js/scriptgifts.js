window.onload = function (){
	var formHandle = document.forms.gift_form;
	formHandle.onsubmit = processForm;
	
	function processForm(){
		var user_name = formHandle.user_name.value;
		var user_email = formHandle.user_email.value;
		var user_cost = formHandle.user_cost.value;
		var userChoice;
		if(user_cost > 50)
		{
			userChoice=confirm("Welcome!" +user_name+"You have got a gift! click OK to see");
		}
		else {
			alert("Sorry! Please try next time");
		}
		if (userChoice===true)
		{
			jQuery(document).ready(function(){
				//seen this logic form stackoverflow.com
		location.href="giftpage.html";
		
});
		}
	}
	
}
