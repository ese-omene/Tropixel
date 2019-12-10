jQuery(document).ready(function(){
		$('.foodimage').hide();
		$('h2').click(function(){
			$('.foodimage').hide();
			$(this).next('.foodimage').toggle();
		});
		
});