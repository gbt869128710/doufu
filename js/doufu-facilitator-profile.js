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
    //编辑资料
    $(".alter-redact").on("click",function(){
        $(".cover-avatar").show();
        $(".cover-all").show();
      
    })
    $(".cover-top span,.alter-cancel").on("click",function(){
        $(".cover-avatar").hide();
        $(".cover-all").hide();
    })
    $(".alter-keep").on("click",function(){
        var arr=[];
        var arr1=[];
        arr1.push($(".select-item").text());
        $(".land").text(arr1);
        for(var i=0;i<$(this).parents(".cover-avatar").find(".phone").length;i++){
            arr.push($(this).parents(".cover-avatar").find(".phone").eq(i).val());
        }
        console.log(arr)
        for(var i=0;i<$(".center-perfect-left").find(".phone-span").length;i++){
            $(".center-perfect-left").find(".phone-span").eq(i).text(arr[i])
        }
        $(".cover-avatar").hide();
        $(".cover-all").hide();
    })
    //密码修改
    
    $(".cipher").on("focus",function(){
        $(".cipher").css({"border":"1px solid #999"});
        $(this).css({"border":"1px solid #00aaee"});
    })
    $(".cipher").on("blur",function(){
        $(".cipher").css({"border":"1px solid #999"});
    })
    //旧密码的判断
    $(".cipher").eq(0).on("blur",function(){
        if($(this).val()==""){
            $(this).parent(".perfect-row-bottom").children(".auth-code-false").show();
            $(this).parent(".perfect-row-bottom").children(".auth-code-true").hide();
        }else{
            $(".cipher").eq(1).removeAttr("disabled")
            $(this).parent(".perfect-row-bottom").children(".auth-code-false").hide();
            $(this).parent(".perfect-row-bottom").children(".auth-code-true").show();
        }
    })
    //新密码的判断
    $(".cipher").eq(1).on("blur",function(){
        if($(this).val()==""||$(this).val()==$(".cipher").eq(0).val()){
            $(this).parent(".perfect-row-bottom").children(".auth-code-false").show();
            $(this).parent(".perfect-row-bottom").children(".auth-code-true").hide();
        }else{
            $(".cipher").eq(2).removeAttr("disabled")
            $(this).parent(".perfect-row-bottom").children(".auth-code-false").hide();
            $(this).parent(".perfect-row-bottom").children(".auth-code-true").show();
        }
    })
    //确认新密码的判断
    $(".cipher").eq(2).on("blur",function(){
        if($(this).val()==""||$(this).val()!=$(".cipher").eq(1).val()){
            $(this).parent(".perfect-row-bottom").children(".auth-code-false").show();
            $(this).parent(".perfect-row-bottom").children(".auth-code-true").hide();
        }else{
            $(".gain").removeAttr("disabled")
            $(this).parent(".perfect-row-bottom").children(".auth-code-false").hide();
            $(this).parent(".perfect-row-bottom").children(".auth-code-true").show();
        }
    })
    //短信验证码
    $(".cipher").eq(2).on("input",function(){
        if($(this).val()==""||$(this).val()!=$(".cipher").eq(1).val()){
            $(".gain").attr("disabled",true);
        }else{
            $(".gain").removeAttr("disabled");
        }
    })
    var time = 60;
    var nume = '';
    var sta = 0;
    var set;
    function second(){
        nume = '';
        sta = 1;
        set = setInterval(function() {
            if (time > 0) {
                time--;
                $(".gain").val(time + "s");
                $(".gain").attr("disabled", true);
            } else {
                clearInterval(set);
                sta = 0;
                $(".gain").val("点击获取");
                $(".gain").removeAttr("disabled");
            }
        }, 1000)
        time = 60;
        for (var i = 0; i < 6; i++) {
            nume += Math.round(Math.random() * 9)
        };
        console.log(nume);
    }
    //重新获取验证码
    $(".gain").on("click",function(){
        if (sta == 0) {
            second();
        }
        $(this).siblings(".auth-code").removeAttr("disabled");
        $(this).siblings(".auth-codes").removeAttr("disabled");
    })
    //判断验证码
    $(".auth-code").on("blur",function(){
        var code = $(this).val();
        if(code==nume){
            $(this).parents(".perfect-row-bottom").next(".perfect-code-hint").find(".keep").removeAttr("disabled");
            $(this).parents(".perfect-row-bottom").children(".auth-code-false").hide();
            $(this).parents(".perfect-row-bottom").children(".auth-code-true").show();
            
        }else{
            $(this).parents(".perfect-row-bottom").children(".auth-code-false").show();
            $(this).parents(".perfect-row-bottom").children(".auth-code-true").hide();
            $(this).parents(".perfect-row-bottom").next(".perfect-code-hint").find(".keep").attr("disabled", true);
        }
    })
    $(".auth-code").on("input",function(){
        var code = $(this).val();
        if(code==nume){
            $(this).parents(".perfect-row-bottom").next(".perfect-code-hint").find(".keep").removeAttr("disabled");
        }else{
            $(this).parents(".perfect-row-bottom").next(".perfect-code-hint").find(".keep").attr("disabled", true);
        }
    })
    //保存密码
    $(".keep").on("click",function(){
        $("input[type='password'],input[type='text']").val("");
        clearInterval(set);
                sta = 0;
        $(".gain").val("点击获取");
        $(".auth-code-true").hide();
        $(".perfect-row-top").html("密码修改成功，再次修改请等待30分钟！");
        $(this).parents(".perfect-code-hint").siblings(".perfect-row-reminder").show();
        $(this).attr("disabled",true);
    })
    //更换绑定手机
    $(".switchover span").eq(0).addClass("h");
    $(".switchover-bottom").eq(0).show();
    $(".switchover span").on("click",function(){
        var i=$(this).index();
        $(".switchover span").eq(i).addClass("h").siblings(".switchover span").removeClass("h");
        $(".switchover-bottom").eq(i).show().siblings(".switchover-bottom").hide();
    })
    //确认密码
    $(".cell-phone").eq(0).on("blur",function(){
        if($(this).val()==""){
            $(this).parent(".perfect-row-bottom").children(".auth-code-false").show();
            $(this).parent(".perfect-row-bottom").children(".auth-code-true").hide();
        }else{
            $(".cell-phone").eq(1).removeAttr("disabled")
            $(this).parent(".perfect-row-bottom").children(".auth-code-false").hide();
            $(this).parent(".perfect-row-bottom").children(".auth-code-true").show();
        }
    })
    //确认手机号
    var sj = /^1[34578]\d{9}$/;
    $(".cell-phone").eq(1).on("blur",function(){
        var phone = $(this).val();
        if (phone != "" && sj.test(phone)) {
            $(this).parents(".perfect-row-bottom").next(".perfect-row-bottom").find(".gain").removeAttr("disabled");
            $(this).parent(".perfect-row-bottom").children(".auth-code-false").hide();
            $(this).parent(".perfect-row-bottom").children(".auth-code-true").show();
        } else {
            $(this).parents(".perfect-row-bottom").next(".perfect-row-bottom").find(".gain").attr("disabled",true);
            $(this).parent(".perfect-row-bottom").children(".auth-code-false").show();
            $(this).parent(".perfect-row-bottom").children(".auth-code-true").hide();
        }
    })
    $(".cell-phone").eq(1).on("input",function(){
        var phone = $(this).val();
        if (phone != "" && sj.test(phone)) {
            $(this).parents(".perfect-row-bottom").next(".perfect-row-bottom").find(".gain").removeAttr("disabled");
           
        } else {
            $(this).parents(".perfect-row-bottom").next(".perfect-row-bottom").find(".gain").attr("disabled",true);
            
        }
    })
    //判断验证码
    $(".auth-codes").on("blur",function(){
        var code = $(this).val();
        if(code==nume){
            $(this).parents(".perfect-row-bottom").next(".perfect-code-hint").find(".keep").removeAttr("disabled");
            $(this).parents(".perfect-row-bottom").children(".auth-code-false").hide();
            $(this).parents(".perfect-row-bottom").children(".auth-code-true").show();
            
        }else{
            $(this).parents(".perfect-row-bottom").children(".auth-code-false").show();
            $(this).parents(".perfect-row-bottom").children(".auth-code-true").hide();
            $(this).parents(".perfect-row-bottom").next(".perfect-code-hint").find(".keep").attr("disabled", true);
        }
    })
    $(".auth-codes").on("input",function(){
        var code = $(this).val();
        if(code==nume){
            $(this).parents(".perfect-row-bottom").next(".perfect-code-hint").find(".keep").removeAttr("disabled");
        }else{
            $(this).parents(".perfect-row-bottom").next(".perfect-code-hint").find(".keep").attr("disabled", true);
        }
    })
    //修改认证信息
    $(".alter-redact-modify").on("click",function(){
        $(".cover-avatar-choose").show();
        $(".cover-all").show();
      
    })
    $(".cover-top-choose span,.alter-cancel-choose").on("click",function(){
        $(".cover-avatar-choose").hide();
        $(".cover-all").hide();
    })
    
})