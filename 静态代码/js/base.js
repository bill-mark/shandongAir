$(function(){
    $(".wxyt").click(function(){
        $(".main").load("wxyt.html");
    });
    $(".qxtg").click(function(){
        $(".main").load("qxtg.html");
    });
    $(".skbw").click(function(){
        $(".main").load("skbw.html");
    });
    $(".ygt").click(function(){
        $(".main").load("ygt.html");
    });
    $(".bwjs").click(function(){
        $(".main").load("bwjs.html");
    });
    $(".ybfb").click(function(){
        $(".main").load("ybfb.html");
    });
    $(".zhyj").click(function(){
        $(".main").load("zhyj.html");
    });
    $(".pdzg").click(function(){
        $(".main").load("pdzg.html");
    });
    $(".hbyj").click(function(){
        $(".main").load("hbyj.html");
    });
    $(".ybbw").click(function(){
        $(".main").load("ybbw.html");
    });
});
$(function(){

    var liHas = $(".nav>ul>li").has("ul");
    liHas.addClass("li-has");

    $(".nav>ul>li").hover(function(){
        $(".nav>ul>li").children("ul").hide();
        $(this).children("ul").show();
    },function(){
        $(".nav>ul>li").children("ul").hide();
    });
    $(".nav>ul>li").click(function(){
        $(".nav>ul>li").removeClass("li-on");
        $(this).addClass("li-on");
        $(this).next().addClass("li-on");
        $(this).prev().addClass("li-on");
    });

});
