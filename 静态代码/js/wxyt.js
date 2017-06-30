$(function(){
    secNav();
    picBox();
    timeBar();
    checkAll();
    dialogBox();

});
function secNav(){
    $(".navIn li a").click(function(){
        $(".navIn li a").removeClass("a-on");
        $(this).addClass("a-on");
    });
}
function timeBar(){
    $(".time-box ul li:odd").addClass("li-odd");
    $(".time-bar").mouseenter(function(){
        $(this).css("opacity","1");
       $(this).animate({"right":"0"},"slow");
    });
    $(".time-bar").mouseleave(function(){
        $(this).css("opacity","0.4");
        $(this).animate({"right":"-220px"},"slow");
    });
    $(".time-box ul li").click(function(){
        $(".time-box ul li").removeClass("time-on");
        $(this).addClass("time-on");
    });
}
function checkAll(){
    var ch=$('.check input');
    var all=$('.check-all input');
    $('.check-all input').click(function() {
        ch.each(function(e){
            ch.prop('checked',all.prop('checked'))
        });
    });
    $('.check input').click(function(){
        if($('.check input').length>$('.check input:checked').length){
            all.prop('checked',false)
        }
    });
}
function dialogBox(){
    $(".history").click(function(){
        $(".dialog-box").show();
        $(".backdrop-box").show().css("opacity","0.5");
        $("body").css("overflow","hidden");
    });
    $(".backdrop-box").click(function(){
        $(".dialog-box").hide();
        $(".backdrop-box").hide().css("opacity","0");
        $("body").css("overflow","auto");
    });

    $(".mid1 strong").click(function(){
        $(".mid1 strong").removeClass("title-on");
        $(this).addClass("title-on");
    });
    $(".pic-classify a").click(function(){
       $(".pic-classify a").removeClass("aa-on");
        $(this).addClass("aa-on");
    });
}
function picBox(){

    $(".fa-play").click(function(){
        $(this).toggleClass("fa-stop");
    });
}
