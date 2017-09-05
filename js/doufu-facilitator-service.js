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
    $(".my-profile-left-nav-big").eq(5).find(".my-profile-left-nav-small a").eq(0).addClass("h");
        $(".subnav").on("click", function() {
            var i = $(this).index();
            $(".my-profile-left-nav-big").eq(5).find(".my-profile-left-nav-small a").eq(i).addClass("h").siblings("a").removeClass("h");
        })
        //全选
        $(".choose-all").on("click", function() {
            if($(this).hasClass("h")){
                $(this).removeClass("h");
                $(".choose").removeClass("h");
            }else{
                $(this).addClass("h");
                $(".choose").addClass("h");
            }
        })
        $(".choose").on("click", function() {
            if($(this).hasClass("h")){
                $(this).removeClass("h");
            }else{
                $(this).addClass("h");
            }
            if($(".choose.h").length==$(".choose").length){
                $(".choose-all").addClass("h");
            }else{
                $(".choose-all").removeClass("h");
            }
        })
        //勾选寄送地址
        $(".use").on("click", function() {
            if($(this).hasClass("h")){
                $(this).removeClass("h");
            }else{
                $(this).addClass("h");
            }
        })
        $("input[type='radio']").on("click", function() {
            if($(this).next("label").text()=="电子"){
                $(this).parent("p").next("p").hide();
                $(".code").hide();
            }else{
                $(this).parent("p").next("p").show();
                $(".code").show();
            }
        })
        //索取发票
        
    $(".ask").eq(0).show();
    $(".extort").on("click", function() {
        if($(".choose.h").length>0){
            $(".ask").eq(1).show().siblings(".ask").hide();
        }else{
        }
    })
    //编辑
    $(".rise").eq(0).show().siblings(".rise").hide();
    $(".edit").on("click", function() {
        $(".subnav").eq(2).addClass("h").siblings(".subnav").removeClass("h");
        $(".center-perfect").eq(2).show().siblings(".center-perfect").hide();
        $(".manage").eq(0).show().siblings(".manage").hide();
    })
    //添加地址
    $(".add,.redact").on("click", function() {
        $(".cover-all").show();
        $(".cover-avatar").show();
    })
    //删除地址
    $(".remove").on("click", function() {
        alert(1)
        $(this).parents("tr").remove();
        if($(this).parents("tr").length<2){
            $(".codes").remove();
        }
    })
    //确定地址
    $(".ensure").on("click", function() {
        $(".pick").each(function(){
            if($(this).val()==""){
                $(this).next("p").show();
            }else{
                $(".cover-avatar").hide();
                $(".cover-all").hide();
            }
        })
        if($(".select-item").length<3){
            $(".city-picker-span").css({"border": "1px solid #ff0000"})
        }else{
            $(".city-picker-span").css({"border": "1px solid #ccc"})
        }
    })
    $(".abolish,.cover-top span").on("click", function() {
        $(".cover-avatar").hide();
        $(".cover-all").hide();
    })
    //取消
    $(".cancel").on("click", function() {
        $(".ask").eq(0).show().siblings(".ask").hide();
    })
    //索取
    $(".exact").on("click", function() {
        if($(".use.h").length>0){
            $(".subnav").eq(1).addClass("h").siblings(".subnav").removeClass("h");
            $(".center-perfect").eq(1).show().siblings(".center-perfect").hide();
        }
    })
    //发票列表
    $(".list").eq(0).show().siblings(".list").hide();
    $(".details").on("click", function() {
        $(".list").eq(1).show().siblings(".list").hide();
    })
    //信息管理
    $(".manage").eq(1).show().siblings(".manage").hide();
    $(".advices-li").eq(1).show().siblings(".advices-li").hide();
        $("input[type='text']").on("input",function(){

                $(this).siblings("p").hide();
            });
        $("input[type='text']").on("blur",function(){
          
            if($(this).val()==""){
                $(this).siblings("p").show();
            }else{
                $(this).siblings("p").hide();
            }
        })
        $("input[type='radio']").on("change",function(){
            if($(this).is(":checked")){
               if($(this).next("em").text()=="企业"){
                   $(".firm").show();
               }else if($(this).next("em").text()=="个人"){
                   $(".firm").hide();
                   $(".person").children("input[type='radio']").attr("checked",true)
               }
            }
            if($(".wy").is(":checked")){
                $(".private").show();
            }else{
                $(".private").hide();
            }
        })
        //保存发票信息
        var second=5;
    $(".keep").on("click", function() {
        if($(".keep").val()=="保存"){
            $(this).parent(".hunt-aspect-conserve").siblings(".hunt-aspect-manage").children("input[type='text']").each(function(){
            
                if($(this).val()==""){
                    $(this).siblings("p").show();
                }else{
                    $(".manage").eq(1).show().siblings(".manage").hide();
                    $(".subnav").eq(0).addClass("h").siblings(".subnav").removeClass("h");
                    $(".center-perfect").eq(0).show().siblings(".center-perfect").hide();
                    $(".rise").eq(1).show().siblings(".rise").hide();
                    $(".keep").val("提交申请");
                }
            })
            
        }else{
            $(this).parent(".hunt-aspect-conserve").siblings(".hunt-aspect-manage").children("input[type='text']").each(function(){
            
                if($(this).val()==""){
                    $(this).siblings("p").show();
                }else{
                    $(".cover-avatar-two").show();
                    $(".cover-all").show();
                }
            })
            
        }
        
        setInterval(function(){
            if(second>0){
                second--;
            }
            $(".second").text(second);
        },1000)
    })
    //确定地址
    $(".ensure-two").on("click", function() {
        if(second==0){
            $(".advices-li").eq(1).show().siblings(".advices-li").hide();
            $(".manage").eq(1).show().siblings(".manage").hide();
            $(".cover-avatar-two").hide();
            $(".cover-all").hide();
        }
    })
    $(".abolish-two,.cover-top span").on("click", function() {
        if(second==0){
            $(".cover-avatar-two").hide();
            $(".cover-all").hide();
        }
    })
    $(".call").on("click", function() {
        $(".manage").eq(1).show().siblings(".manage").hide();
    })
    //申请修改
    $(".visa").on("click", function() {
        $(".manage").eq(0).show().siblings(".manage").hide();
    })
})