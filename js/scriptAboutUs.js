
jQuery(document).ready(function() {

    $('aboutpic').hide();


    //mouse enter and leave to change header text colour

    $('h2').mouseenter(function() {
        $(this).css( {'color':'#5ED1FD', 'cursor':'pointer'} );
    });
 
    $('h2').mouseleave(function() {
        $(this).css( {'color':'black', 'cursor':'pointer'} );
    });

    //on mouse click of the h2 headers the content in the next box will expand/collapse
    $('h2').click(function() {
        $(this).next('.contentArea').slideToggle(1500);

    });

    //on mouse over the image shakes

    $('.aboutpic').click(function() {
        $(this).effect('bounce',1000);
    });

    //create listener to show hide images
    btnShowHide.onclick = showHide;

    //if else statement to show or hide images depending on if it's visible or not
    function showHide(){
        if($('.aboutpic').is(':visible'))
        { 
            $('.aboutpic').hide();
        }
        else
        {
            $('.aboutpic').show();
        }
    }
    

}); //END OF .ready FUNCTION



