'use strict';
$(function(){
    
    //input点击后框变蓝
    var sj = /^1[34578]\d{9}$/;
    $(".phone").on("click",function(){
        $(this).css({"border": "1px solid #00aaee"});
    })
    $(".phone").on("blur",function(){
        $(".phone").css({"border": "1px solid #999"})
    })
    $("textarea").on("click",function(){
        $(this).css({"border": "1px solid #00aaee"});
    })
    $("textarea").on("blur",function(){
        $("textarea").css({"border": "1px solid #999"})
    })
    //手机号验证
    var yx = /^(\w)+(\.\w+)*@(\w)+((\.\w{2,3}){1,3})$/;
    $(".phone-code").on("blur",function(){
        var email = $(".email").val();
        if (email != "" && yx.test(email)) {
            $(".enroll-phone-false").hide();
        } else {
            $(".enroll-phone-false").show();
        }
    })
    
    $(".email").on("input",function(){
        var phone = $(".email").val();
        if (phone != "" && yx.test(phone)) {
            slider.init();
        }
    })
    //短信验证码
    var time = 60;
    var nume = '';
    var sta = 0;
    function second(){
        nume = '';
        sta = 1;
        var set = setInterval(function() {
            if (time > 0) {
                time--;
                $(".gain").val(time + "s后重新发送");
                $(".gain").attr("disabled", true);
            } else {
                clearInterval(set);
                sta = 0;
                $(".gain").val("获取验证码");
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
    })
    //判断验证码
    $(".auth-code").on("blur",function(){
        var code = $(".auth-code").val();
        if(code==nume){
            $(".choose").removeAttr("disabled");
            $(".auth-code-false").hide();
        }else{
            $(".auth-code-false").show();
            $(".choose").attr("disabled", true);
        }
    })
    
    //跳转页面
    $(".choose").on("click",function(){
        var b=0;
        for(var i=0;i<$(".phone").length;i++){
            var a=$(".phone").eq(i).val();
            if(!a){
                $(".phone").eq(i).css({"border":"1px solid red"});
                $(".perfect-code-hint .enroll-phone-red").show();
                $(".perfect-code-hint span").show();
                b+=1;
            }
            
        }
        if(!b){
                location.href="doufu-apply-finish.html"
        }
    })
    //滑块
    var slider = new SliderUnlock("#slider",{
            successLabelTip : "验证码已发送"
        },function(){
            $(".enroll-cipher").show();
            second();
        });
    
})