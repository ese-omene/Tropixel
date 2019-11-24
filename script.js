$(document).ready(function(){
  $('.sub-menu').hide();

  $('.main-menu').click(
  function(){$(this).next('ul').slideToggle(1000);}
);


  });
