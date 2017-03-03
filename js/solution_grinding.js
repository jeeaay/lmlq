$(function () {
	$("#solution .case img").first().show();
	$("#solution .case .collapse").delegate(".panel-head","click",function () {
		$("#solution .case img").hide();
		$("#solution .case img").eq($(this).parent().index()).show();
	});
	var l_height = $(".product li").first().height();
	if ($(window).width()>1199) {
		l_height=287;
	}
	$("#solution .more").css({"height":l_height,"padding-top":(l_height-$("#solution .more i").height()-$("#solution .more p").height())/2});
	if ($(window).width()>759) {
		$(".parts .first div").css("height",$(".parts li").last().height());
	}
})