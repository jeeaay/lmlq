$(function () {
	//set font size
	var obj=$(".cont p");
	current_font_size =parseFloat(obj.css("font-size"),10);
	$(".font-bigger").click(function(){
		current_font_size=current_font_size+1;
		obj.css("font-size",  current_font_size + "px" );
	});
	$(".font-normal").click(function(){
		current_font_size=14;
		obj.css("font-size",  current_font_size + "px" );
	});
	$(".font-smaller").click(function(){
		if (current_font_size>12) {
			current_font_size=current_font_size-1;
		};
		obj.css("font-size",  current_font_size + "px" );
	});	
})