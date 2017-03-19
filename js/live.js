$(document).ready(function() {
  //初始化容器
    var c_top=$("#container").offset().top;
    var w_height=$(window).height();
    var c_bottom=$("footer").height();
    var c_height=0;
    if ($(window).width()<768)
      c_height=w_height-176;
    else
      c_height=w_height-c_top;
    if (c_height<300) c_height=300;
    $("#container").height(c_height);

    $(".meeting_fix").height(c_height+1);
  
 
// create the panorama player with the container
    pano=new pano2vrPlayer("container");
    pano.readConfigUrl("/xml/1_out.xml");
    // hide the URL bar on the iPhone
    hideUrlBar();
    function hideUrlBar() {
      
      document.getElementsByTagName("body")[0].style.marginTop="1px";
      window.scrollTo(0, 1);
    }
    window.addEventListener("load", hideUrlBar);
    window.addEventListener("resize", hideUrlBar);
    window.addEventListener("orientationchange", hideUrlBar);

  //侧边导航显示与隐藏
  $(".meeting_fix .icon-angle-right").click(function(){
    if ($(".meeting_fix").hasClass("active")){
      $(".meeting_fix").removeClass("active");
      if ($(window).width()>767)
        $(".meeting_text").width("100%");
    }
    else{
      $(".meeting_fix").addClass("active");
      if ($(window).width()>767)
        $(".meeting_text").width($(window).width()-$(".meeting_fix").width());
    }
  
  });
  //描述显示与隐藏
  $(".meeting_text>div").hide();
  $(".meeting_text>div").eq(0).show();
  $(".meeting_text span").click(function(){
    $(this).parent().slideToggle();
  });
  $(".meeting_ul li").click(function(){
    $(".meeting_ul li").removeClass("active");
    $(this).addClass("active");
  });
  //描述宽度设置
   setTimeout(function(){
  if ($(window).width()>767){
    $(".meeting_text").width($(window).width()-$(".meeting_fix").width());
  }
   }, 100)
  //手机端侧边导航自动隐藏
  if ($(window).width()<768){
    setTimeout(function(){
      $(".meeting_fix").removeClass("active");
    }, 1000)
  }
  //自动隐藏gif
  setTimeout(function(){
      $("#move").fadeOut(1000);
    }, 2000)

});
//切换全景资源
 function ch(nu){
    pano=new pano2vrPlayer("container");
    pano.readConfigUrl("/xml/"+nu+"_out.xml");
    $(".meeting_text>div").hide();
    $(".meeting_text>div").eq(nu-1).show();
 }