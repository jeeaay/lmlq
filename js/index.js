$(function () {
	/*section b*/
	$(".b-bg").hide();
	$(".b-bg").eq(0).show();
	var len=$(".b-bg").length;
	window.i=0;
	$(".b-b .icon-angle-right").click(function() {
		i++;
		if (i==len) {i=0};
		$(".b-bg").hide();
		$(".b-bg").eq(i).show();
	})
	$(".b-b .icon-angle-left").click(function() {
		if (i==0) {i=len};
		i--;
		$(".b-bg").hide();
		$(".b-bg").eq(i).show();
	})
})