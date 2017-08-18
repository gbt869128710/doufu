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
    $(".remove").on("click",function(){
        $(this).parents(".refund-center").remove();
    })
    $(".refund-nav a").eq(0).addClass("h");
    $(".refund-nav a").on("click",function(){
        $(this).addClass("h").siblings(".refund-nav a").removeClass("h");
    })
    //投诉服务商
    $(".issue").on("click",function(){
        var m=$(this).parents(".refund-center").attr("data");
        $(".cover-avatar-two").attr("data",m);
        $(".cover-avatar-two").show();
        $(".cover-all").show();
    })
    $(".complaint").on("click",function(){
        var m=$(this).parents(".cover-avatar-two").attr("data");
        $(".refund-center").eq(m).find(".issue").text("投诉处理中")
    })
    //申请售后
    $(".apply").on("click",function(){
        var m=$(this).parents(".refund-center").attr("data");
        $(".cover-avatar").attr("data",m);
        $(".cover-avatar").show();
        $(".cover-all").show();
    })
    $(".cover-top span,.abolish-two").on("click",function(){
        $(".cover-avatar-two").hide();
        $(".cover-avatar").hide();
        $(".cover-all").hide();
    })
    $(".confirm").on("click",function(){
        $(this).parents(".cover-bottom").siblings(".cover-bottom-two").show();
        $(this).parents(".cover-bottom").hide();
        $(this).parents(".cover-bottom").siblings(".cover-bottom-three").hide();
    })
    $(".ensure").on("click",function(){
        $(this).parents(".cover-bottom-two").siblings(".cover-bottom-three").show();
        $(this).parents(".cover-bottom-two").hide();
        $(this).parents(".cover-bottom-two").siblings(".cover-bottom").hide();
        var m=$(".cover-avatar-two").attr("data");
        $(".center-perfect").eq(0).find(".discuss-center").eq(m).find(".issue").remove();
    })
    $(".ask").on("click",function(){
        var m=$(this).parents(".cover-avatar").attr("data");
        $(".refund-center").eq(m).find(".apply").text("售后处理中")
    })
})