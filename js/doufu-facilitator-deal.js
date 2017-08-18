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
    //更新进程
    $(".update").on("click",function(){
        $(".cover-avatar").show();
        $(".cover-all").show();
      
    })
    $(".cover-top span,.abolish").on("click",function(){
        $(".cover-avatar").hide();
        $(".cover-all").hide();
    })
    $(".ensure").on("click",function(){
        $(".cover-avatar").hide();
        $(".cover-all").hide();
    })
    
    //回复买家
     function initHtml(json) {
        var html_ = '<div class="review-right-add">'+
                       '<p><span>[卖家回复]</span><i>'+json+'</i></p>'+
                   '</div>';
        return html_;

    }
    
    $(".restore").on("click",function(){
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
            $(".center-perfect").eq(1).find(".discuss-center").eq(m).find(".review-right-add-all").append(initHtml(text));
            $(this).parent(".cover-bottom-btn").siblings("textarea").val("");
        $(".center-perfect").eq(1).find(".discuss-center").eq(m).find(".restore").remove();
    })
    $(".cover-top span,.abolish-two").on("click",function(){
        $(".cover-avatar-two").hide();
        $(".cover-all").hide();
    })
    
    
    //删除消息
    $(".remove").on("click",function(){
        $(this).parents(".refund-center").remove();
    })
   $(".verify").on("click",function(){
        $(this).siblings(".update").remove();
       $(this).text("已完成").addClass("h");
    })
})