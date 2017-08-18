'use strict';
$(function(){
     
    function stopPropagation(e) { 
if (e.stopPropagation) 
e.stopPropagation(); 
else 
e.cancelBubble = true; 
} 

$(document).bind('click',function(){ 
$('.choose-checked').hide(); 
$('.choose-select').hide(); 
    sta=0;
    status=0;
}); 
    var status=0;
    $(".phone").bind("click",function(e){
        stopPropagation(e); 
        $(".phone").css({"border":"1px solid #999"});
        $(this).parents(".choose-row").siblings(".choose-row").find(".choose-checked").hide();
        $(this).css({"border":"1px solid #00aaee"});
        if(status==0){
            $(this).siblings(".choose-select").show();
            status=1;
        }else{
            $(this).siblings(".choose-select").hide();
            status=0;
        }
        
    })
    var arr=[];
    $(".choose-option").on("click",function(){
        if($(this).hasClass("h")){
            for(var i=0;i<$(".choose-option.h").length;i++){
                $(".choose-option.h").eq(i).removeClass("h");
                arr.splice(i,1);
                $(this).parents(".choose-row").find(".phone-text").text(arr);
            }
        }else{
            $(this).addClass("h");
            arr.push($(this).children("p").text());
            $(this).parents(".choose-row").find(".phone-text").text(arr);
            for(var i=0;i<$(".choose-option.h").length;i++){
                if(i>1){
                    $(".choose-option.h").eq(0).removeClass("h");
                    arr.splice(0,1);
                    $(this).parents(".choose-row").find(".phone-text").text(arr);
                }
            }
        }
        $(this).parent(".choose-select").hide();
        status=0;
    })
    var sta=0;
    $(".phone-check").bind("click",function(e){
        stopPropagation(e); 
        if(sta==0){
            $(this).siblings(".choose-checked").show();
            sta=1;
        }else{
            $(this).siblings(".choose-checked").hide();
            sta=0;
        }
    })
    $(".enroll-select-all").bind("change",function(e){
        stopPropagation(e);
        if($(this).is(":checked")){
            $(this).siblings("ul").find(".enroll-select-small").attr("checked",true);
        }else{
            $(this).siblings("ul").find(".enroll-select-small").removeAttr("checked",true);
        }
        if($(".enroll-select-small:checked").length>0){
            $(this).parents(".choose-row").find(".phone-text").text("已选择");
        }else{
            $(this).parents(".choose-row").find(".phone-text").text("");
        }
        sta=0;
    })
    $(".enroll-select-small").on("change",function(){
        if($(this).is(":checked")){
            $(this).attr("checked",true);
            if($(this).parents(".select-small-all").find(".enroll-select-small").length==$(this).parents(".select-small-all").find(".enroll-select-small:checked").length){
                $(this).parents(".choose-check").find(".enroll-select-all").attr("checked",true);
            }
        }else{
            $(this).removeAttr("checked",true);
            $(this).parents(".choose-check").find(".enroll-select-all").removeAttr("checked",true);
        }
        if($(".enroll-select-small:checked").length>0){
            $(this).parents(".choose-row").find(".phone-text").text("已选择");
        }else{
            $(this).parents(".choose-row").find(".phone-text").text("");
        }
        sta=0;
    })
    $(".choose-checked").bind("click",function(e){
        stopPropagation(e); 
        
    })
    $(".choose").on("click",function(){
        var b=0;
        for(var i=0;i<$(".phone").length;i++){
            var a=$(".phone").eq(i).children(".phone-text").text();
            if(!a){
                $(".phone").eq(i).css({"border":"1px solid red"});
                $(".choose-code-hint .enroll-phone-red").show();
                $(".choose-code-hint span").show();
                b+=1;
            }
        }
        if(!b){
                location.href="doufu-apply-perfect.html"
        }
    })
    
   
})