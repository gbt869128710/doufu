'use strict';
$(function(){
    //侧边框
    $(".sidebar li").eq(2).hide();
    $(window).on("scroll",function(){
        var s_h=$(window).scrollTop();
        if(s_h>900){
            $(".sidebar li").eq(2).show();
        }else{
            $(".sidebar li").eq(2).hide();
        }
        
    })
    $(".sidebar li").eq(2).on("click",function(){
        $("html,body").animate({scrollTop:0}, 800);
    }); 
    //底部的那些链接
    $("input[type=button]").on("click",function(){
        if($(this).hasClass("h")){
            $(this).removeClass("h")
        }else{
            $(this).addClass("h").siblings("input[type=button]").removeClass("h");
        }
    })
    $(".help-ul li").on("click",function(){
        $(this).addClass("h").siblings(".help-ul li").removeClass("h");
        $(this).children("p").show();
        $(this).siblings(".help-ul li").children("p").hide();
    })
})