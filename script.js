$(document).ready(function(){
  $('.sub-menu').hide(); //Hide children by default

$('.main-menu').children().hover(function(){
    event.preventDefault();
    $(this).children('.sub-menu').slideToggle('slow');
});

});
