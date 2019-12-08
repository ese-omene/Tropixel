
jQuery(document).ready(function() {




    //tabs change on click
    $( function() {
        $( "#highseastabs" ).tabs();
    } );

    //tabs change on mouseover
    $( function() {
        $( "#sunnyscapetabs" ).tabs({
        event:"mouseover"
      });
    });


    var btn = document.getElementById("subBtn");

    btn.onclick = sendMsg;

    function sendMsg() {
        var userInput = window.prompt("What is the last number in your postal code? (0-9)");

        if (isNaN(userInput)) {
            window.alert("That is not a Number. Please enter a number between 0 and 9.");
            document.getElementById("closestLoc").innerHTML = "Ask me your closest location again." ;

        }

        else if (userInput === null || userInput === "") {
            window.alert("That's not a number. Enter a number.");
            document.getElementById("closestLoc").innerHTML = "Ask me your closest location again." ;
        }

        else if (userInput <= 5) {
            document.getElementById("closestLoc").innerHTML = "Your closest location is High Seas" ;

        }

        else if (userInput >5 && userInput <=9 ) {
            document.getElementById("closestLoc").innerHTML = "Your closest location is Sunnyscape" ;
        }

        else {
            document.getElementById("closestLoc").innerHTML = "Invalid number. Ask me your closest location again." ;
        }

    }

}); //END OF .ready FUNCTION



