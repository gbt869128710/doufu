'use strict';
$(function(){
    $(".register").on("click",function(){
        $(".cover").fadeOut();
    })
    //勾选
    $(".enroll-select").on("click",function(){
        if($(this).hasClass("h")){
            $(this).removeClass("h");
        }else{
            $(this).addClass("h");
        }
    })
    //input点击后框变蓝
    var sj = /^1[34578]\d{9}$/;
    $(".phone").on("click",function(){
        $(this).css({"border": "1px solid #00aaee"});
        $(this).parents(".enroll-phone").siblings(".enroll-phone").find(".phone").css({"border": "1px solid #999"})
    })
    $(".phone").on("blur",function(){
        $(".phone").css({"border": "1px solid #999"})
    })
    //手机号验证
    var sj = /^1[34578]\d{9}$/;
    $(".phone-code").on("blur",function(){
        var phone = $(".phone-code").val();
        if (phone != "" && sj.test(phone)) {
            $(".enroll-phone-false").hide();
        } else {
            $(".enroll-phone-false").show();
        }
    })
    
    $(".phone-code").on("input",function(){
        var phone = $(".phone-code").val();
        if (phone != "" && sj.test(phone)) {
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
    $(".auth-code").on("input",function(){
        var code = $(".auth-code").val();
        if(code==nume){
            $(".cipher,.cipher-code").removeAttr("disabled");
            $(".auth-code-false").hide();
        }else{
            $(".auth-code-false").show();
            $(".cipher,.cipher-code").attr("disabled", true);
        }
    })
    //判断密码
    var status=0;
    $(".cipher-code").on("blur",function(){
        if($(".cipher-code").val()!=""&&$(".cipher").val()!=""){
            if($(".cipher-code").val()==$(".cipher").val()){
                $(".enroll-code-false").hide();
                status=1;
            }else{
                $(".enroll-code-false span").text("密码输入不一致");
                $(".enroll-code-false").show();
                status=0;
            }
        }else{
            $(".enroll-code-false span").text("密码不为空");
            $(".enroll-code-false").show();
            status=0;
        }
    })
    //跳转页面
    $(".choose").on("click",function(){
        if($(".enroll-select").hasClass("h")&&status==1){
            location.href="doufu-apply-choose.html"
        }
    })
    //滑块
    var slider = new SliderUnlock("#slider",{
            successLabelTip : "验证码已发送"
        },function(){
            $(".enroll-code").show();
            second();
        });
    
})