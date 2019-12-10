window.onload = pageLoaded;
var userChoice;
function pageLoaded() {
	var mysterybox=document.getElementById("giftBox");
	var buttonbox=document.getElementById("buttonBox");
	mysterybox.onmouseover=doStuff;
	function doStuff () {
	 userChoice=confirm("Do you want to see your gift?");

    if(userChoice===true){
		mysterybox.style.display="none";
		buttonbox.style.display="block";
	}
	}		
	function meassageBox()
	{
		//image taken from google.com
		buttonbox.innerHTML="<img src='images/gifts/skydiving.jpg' width='400px' height='300px'/>"+"<br/>"+"You have been offered discount on 10% for skydiving"+"<br/>"+"<br/>"+"THANKYOU";	
	}

	buttonbox.onclick=meassageBox;
}//END onload FUNCTION
	

	


