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
    //右边的tab切换
    $(".subnav").eq(0).addClass("h");
    $(".center-perfect").eq(0).show();
    $(".subnav").on("click",function(){
        var i=$(this).index();
        $(this).addClass("h").siblings(".subnav").removeClass("h");
        $(".center-perfect").eq(i).show().siblings(".center-perfect").hide();
    })
    //分页的最后一个
    $(".refund-center:last-of-type").find(".refund-unit").attr("class","refund-units");
    
    
    //退款处理
    $(".restore,.issue").on("click",function(){
        var m=$(this).parents(".discuss-center").attr("data");
        $(".cover-avatar-two").attr("data",m);
        $(".cover-avatar-two").show();
        $(".cover-all").show();
    })
    
    $(".ensure-two").on("click",function(){
        $(".cover-avatar-two").hide();
        $(".cover-all").hide();
        var text=$(this).parent(".cover-bottom-btn").siblings("textarea").val();
        var m=$(".cover-avatar-two").attr("data");
        alert(m);
            $(".center-perfect").eq(0).find(".discuss-center").eq(m).find(".discuss-line-center").eq(1).text("已退款");
        $(".center-perfect").eq(0).find(".discuss-center").eq(m).find(".restore").remove();
    })
    $(".cover-top span,.abolish-two").on("click",function(){
        $(".cover-avatar-two").hide();
        $(".cover-all").hide();
    })
    //发票管理
    $(".confirm").on("click",function(){
        $(".cover-bottom-two").show();
        $(".cover-bottom,.cover-bottom-three").hide();
    })
    $(".ensure").on("click",function(){
        $(".cover-bottom-three").show();
        $(".cover-bottom,.cover-bottom-two").hide();
        var m=$(".cover-avatar-two").attr("data");
        $(".center-perfect").eq(0).find(".discuss-center").eq(m).find(".issue").remove();
    })
    //售后管理
    $(".dispose,.complete").on("click",function(){
        $(this).addClass("h");
        $(this).attr("disabled",true);
        if($(this).val()=="我来处理"){
            $(this).val("处理中")
        }else{
            $(this).val("已完成")
        }
    })
    //删除消息
    $(".remove").on("click",function(){
        $(this).parents(".refund-center").remove();
    })
   
})