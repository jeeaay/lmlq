$(function () {

	/*new index carousel*/
	var ch_active=function (i) {
		$(".news_group .carou li").hide();
		$(".news_group .carou li").eq(i).show();
		$(".news_group_r li").removeClass("active");
		$(".news_group_r li").eq(i).addClass("active");
	}
	$(".news_group .carou li").hide();
	$(".news_group .carou li").first().show();
	$(".news_group .pointer .l").click(function() {
		var i=$(".news_group .carou li:visible").index();
		if (i!=0) {
			i--;
		}else{
			i=$(".news_group .carou li").length-1;
		}
		ch_active(i);
	});
	$(".news_group .pointer .r").click(function() {
		var i=$(".news_group .carou li:visible").index();
		if (i!=$(".news_group .carou li").length-1) {
			i++;
		}else{
			i=0;
		}
		ch_active(i);
	})
	$(".news_group_r li").mouseenter(function() {
		if ($(this).index()!=$(".news_group_r .active").index()) {
			ch_active($(this).index());
		}
	})

	
})