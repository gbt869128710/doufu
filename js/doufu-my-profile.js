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
        for(var i=0;i<$(".center-perfect-left").find(".phone").length;i++){
            $(".center-perfect-left").find(".phone").eq(i).text(arr[i])
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
    //删除消息
    $(".message-remove").on("click",function(){
        $(this).parents(".advices").remove();
    })
    
    //资产中心
    //提现申请的弹窗
    $(".ensure").on("click",function(){
        $(".cover-bottom-two").show();
        $(".cover-bottom").hide();
      
    })
    $(".cover-top span,.abolish").on("click",function(){
        $(".cover-avatar").hide();
        $(".cover-all").hide();
    })
    //全部提现
    $(".all-funds").on("click",function(){
        var funds=$(this).siblings(".funds").text();
      $(this).parents(".balance").next(".balance").children(".cash-withdrawal-amount").val(funds);
    })
    //已绑定渠道
    $("input[type='radio']").eq(0).attr("checked",true);
    //添加新渠道
    var status=0;
    $(".addition").on("click",function(){
         $(".cover-bottom").stop(true).animate({
            "scrollTop": 235
        }, 1000);
        if(status==0){
            status=1;
            $(".append-bottom").show();
            $(this).prev("i").text("-");
        }else{
            status=0;
            $(".append-bottom").hide();
            $(this).prev("i").text("+");
        }
    })
    $(".fraction-cipher").on("input",function(){
        var a=0;
        var cipher=$(this).parents(".pay-a-fraction").find(".fraction-cipher");
        for(var i=0;i<cipher.length;i++){
            if(!cipher.eq(i).val()){
                a++;
            }
        }   
        if(!a){
            $(this).parents(".pay-a-fraction").find(".fraction-gain").removeAttr("disabled");
        }
    })
    var sets;
    function seconds(){
        nume = '';
        sta = 1;
      sets = setInterval(function() {
            if (time > 0) {
                time--;
                $(".fraction-gain").val(time + "s");
                $(".fraction-gain").attr("disabled", true);
            } else {
                clearInterval(set);
                sta = 0;
                $(".fraction-gain").val("点击获取");
                $(".fraction-gain").removeAttr("disabled");
            }
        }, 1000)
        time = 60;
        for (var i = 0; i < 6; i++) {
            nume += Math.round(Math.random() * 9)
        };
        console.log(nume);
    }
    //判断验证码
    $(".auth-code").on("blur",function(){
        var code = $(".auth-code").val();
        if(code==nume){
            $(this).parents(".pay-a-fraction").find(".fraction-keep").removeAttr("disabled");
            $(this).parents(".perfect-row-bottom").children(".auth-code-false").hide();
            $(this).parents(".perfect-row-bottom").children(".auth-code-true").show();
            
        }else{
            $(this).parents(".perfect-row-bottom").children(".auth-code-false").show();
            $(this).parents(".perfect-row-bottom").children(".auth-code-true").hide();
            $(this).parents(".pay-a-fraction").find(".fraction-keep").attr("disabled", true);
        }
    })
    $(".auth-code").on("input",function(){
        var code = $(".auth-code").val();
        if(code==nume){
            $(this).parents(".pay-a-fraction").find(".fraction-keep").removeAttr("disabled");
        }else{
            $(this).parents(".pay-a-fraction").find(".fraction-keep").attr("disabled", true);
        }
    })
    $(".fraction-gain").on("click",function(){
        if (sta == 0) {
            seconds();
        }
        $(".auth-code").removeAttr("disabled");
    })
        $(".fraction-keep").on("click",function(){
            status=0;
            $("input[type='text']").val("");
            clearInterval(sets);
            $(".fraction-gain").val("点击获取");
            $(".auth-code-true").hide();
            $(".append-bottom").hide();
            $(this).prev("i").text("+");
        })
    
    //删除渠道
    $(".remove-alipay").on("click",function(){
        $(this).parent("p").remove();
         $("input[type='radio']").eq(0).attr("checked",true);
    })
    //支付方式的切换
    $(".pay-a-fraction").eq(0).show();
    $("#genre-select").on("input change",function(){
        
        var i=$(this).children("option:selected").index();
        $(".pay-a-fraction").hide();
        $(".pay-a-fraction").eq(i).show();
    })
    
})