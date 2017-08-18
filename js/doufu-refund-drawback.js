'use strict';
$(function() {
    //侧边框
    $(".sidebar li").eq(2).hide();
    $(window).on("scroll", function() {
        var s_h = $(window).scrollTop();
        var w_h = $(window).height();
        if (s_h > w_h) {
            $(".sidebar li").eq(2).show();
        } else {
            $(".sidebar li").eq(2).hide();
        }

    })
    $(".sidebar li").eq(2).on("click", function() {
        $("html,body").animate({
            scrollTop: 0
        }, 800);
    });

    function stopPropagation(e) {
        if (e.stopPropagation)
            e.stopPropagation();
        else
            e.cancelBubble = true;
    }

    $(document).bind('click', function() {
        $('.choose-select').hide();
        $(".phone").children(".trigon").html("&#xe606;");
        status = 0;
    });
    var status = 0;
    $(".phone").bind("click", function(e) {
        stopPropagation(e);
        $(".phone").css({
            "border": "1px solid #999"
        });
        $(this).css({
            "border": "1px solid #00aaee"
        });
        if (status == 0) {
            $(this).siblings(".choose-select").show();
            $(this).children(".trigon").html("&#xe607;");
            status = 1;
        } else {
            $(this).siblings(".choose-select").hide();
             $(this).children(".trigon").html("&#xe606;");
            status = 0;
        }
        $(".perfect-code-hint .enroll-phone-red").hide();
            $(".perfect-code-hint span").hide();

    })
    $(".phone").on("input", function() {
        var money=parseInt($(this).parent(".perfect-row").next(".perfect-code-hint").children(".money").text());
        console.log(parseInt($(this).val()));
        if(parseInt($(this).val())>money){
            $(this).val(money);
        }

    })
    $("textarea").on("click", function() {
        $(this).css({
            "border": "1px solid #00aaee"
        });
    })
    $("textarea").on("blur", function() {
        $(this).css({
            "border": "1px solid #999"
        });
    })
    $(".choose-option").on("click", function() {
        $(".phone-text").text("");
        $(".phone-text").text($(this).children("p").text());
    })
    $(".choose").on("click", function() {
        if ($("input[type='text'].phone").val() == "") {
            $("input[type='text'].phone").css({
                "border": "1px solid red"
            });
            $(".perfect-code-hint .enroll-phone-red").show();
            $(".perfect-code-hint span").show();

        }
        if ($(".phone-text").text() == "请选择") {
            $(".phone-select").css({
                "border": "1px solid red"
            });
            $(".perfect-code-hint .enroll-phone-red").show();
            $(".perfect-code-hint span").show();
        }
        if ($(".phone-text").text() != "请选择"&&$("input[type='text'].phone").val() != "") {
            location.href = "doufu-refund-submit.html"
        } 
    })
})