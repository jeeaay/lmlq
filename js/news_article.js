$(function () {
	//set font size
	current_font_size =parseFloat($(".cont p").css("font-size"),10);
	$(".font-bigger").click(function(){
		current_font_size=current_font_size+1;
		$(".cont p").css("font-size",  current_font_size + "px" );
	});
	$(".font-normal").click(function(){
		current_font_size=14;
		$(".cont p").css("font-size",  current_font_size + "px" );
	});
	$(".font-smaller").click(function(){
		if (current_font_size>12) {
			current_font_size=current_font_size-1;
		};
		$(".cont p").css("font-size",  current_font_size + "px" );
	});	
})