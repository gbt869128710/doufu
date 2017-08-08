'use strict';
$(function(){
    $(".condition-top li").eq(0).addClass("h");
    $(".condition-bottom-li").eq(0).show();
    $(".condition-top li").on("click",function(){
        var i=$(this).index();
        $(".condition-top li").eq(i).addClass("h").siblings(".condition-top li").removeClass("h");
        $(".condition-bottom-li").eq(i).show().siblings(".condition-bottom-li").hide();
    })
    $(".apply").on("click",function(){
        var i=$(this).index();
        $('html,body').animate({scrollTop:$('.a').eq(i-1).offset().top}, 800); 
    })
})