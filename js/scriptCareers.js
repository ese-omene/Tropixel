//alert("hello");

jQuery(document).ready(function(){
	
	$('.jobDetails').hide();
	
	$('h3').dblclick(function(){
		$(this).next('.jobDetails').slideDown().show(20000);
	});
	
	$('h3').click(function(){
		$('.jobDetails').slideUp().hide(20000);
	});
	
});
