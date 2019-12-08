//alert("hello");

jQuery(document).ready(function(){
	
	$('.contentBox').hide();
	
	$('h3').dblclick(function(){
		$(this).next('.contentBox').slideDown().show(20000);
	});
	
	$('h3').click(function(){
		$('.contentBox').slideUp().hide(20000);
	});
	
});