$(function () {
	$("#server .case img").first().show();
	$("#server .case .collapse").delegate(".panel-head","click",function () {
		$("#server .case img").hide();
		$("#server .case img").eq($(this).parent().index()).show();
	});
	var l_height = $(".product li").first().height();
	$("#server .more").css({"height":l_height,"padding-top":(l_height-$("#server .more i").height()-$("#server .more p").height())/2});
	if ($(window).width()>759) {
		$(".parts .first div").css("height",$(".parts li").last().height());
	}
})