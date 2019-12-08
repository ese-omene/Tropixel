$(document).ready(function(){

  $('.expandable').hover(function(){
      $(this).next('.sub-menu').toggle();
  });

  $('.sub-menu').hover(function () {
    $(this).toggle();
  });
  
});
