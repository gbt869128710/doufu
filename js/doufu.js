'use strict';
$(function(){
    //导航切换
    $(".all").addClass("h");
    //切换城市
    $(".logo").on("click",function(){
        $(".cover").show();
    })
    $(".wrong").on("click",function(){
        $(".cover").hide();
    })
    //幻灯
    var number=$(".pic").length,
        p_w=$(window).width(),
        set;
    $(".pic").css({"width":p_w});
    $(".ppt").css({"width":p_w*(number+1)});
    var number_=$(".content-pic").length,
        pt_w=$(".content-pptall").width(),
        set_;
    $(".content-pic").css({"width":pt_w});
    $(".content-ppt").css({"width":pt_w*number_});
    ppt(".content-ppt",".content-pic",-pt_w);
    function ppt(a,b,c){
        set=setInterval(function(){
            $(a).stop(true).animate({
                "margin-left": c
            }, 1000, function () {
                $(b).eq(0).appendTo($(a));
                $(a).css({
                    "margin-left": "0px"
                });
            });
        },4000)
    }
    $(document).ready(function () {

                var i = 0;

                var clone = $(".ppt-all .ppt .pic").first().clone();//克隆第一张图片
                $(".ppt-all .ppt").append(clone);//复制到列表最后
                var size = $(".ppt-all .ppt .pic").size();
               

                for (var j = 0; j < size-1; j++) {
                    $(".ppt-all .num").append("<li></li>");
                }

                $(".ppt-all .num li").first().addClass("on");

                /*自动轮播*/

                var t = setInterval(function () { i++; move();},4000);

                /*鼠标悬停事件*/

                $(".ppt-all").hover(function () {
                    clearInterval(t);//鼠标悬停时清除定时器
                }, function () {
                    t = setInterval(function () { i++; move(); }, 4000); //鼠标移出时清除定时器
                });


                /*鼠标滑入原点事件*/

                $(".ppt-all .num li").hover(function () {

                    var index = $(this).index();//获取当前索引值
                    i = index;
                    $(".ppt-all .ppt").stop().animate({ left: -index * p_w }, 500);
                    $(this).addClass("on").siblings().removeClass("on");
                });

                /*移动事件*/
                function move() {
                    if (i == size) {
                        $(".ppt-all .ppt").css({ left: 0 });
                        i = 1;
                    }
                    if (i == -1) {
                        $(".ppt-all .ppt").css({ left: -(size - 1) * p_w });
                        i = size - 2;
                    }
                    $(".ppt-all .ppt").stop().animate({ left: -i * p_w }, 500);

                    if (i == size - 1) {
                        $(".ppt-all .num li").eq(0).addClass("on").siblings().removeClass("on");
                    } else {
                        $(".ppt-all .num li").eq(i).addClass("on").siblings().removeClass("on");
                    }
                }
            });
    
    //切换
    $(".mainnav p").on("mouseover",function(){
        var i=$(this).index();
        $(".subnav").show();
        $(this).children("span").hide();
        $(this).siblings(".mainnav p").children("span").show();
        $(".subnav-big").eq(i).show().siblings(".subnav-big").hide();
        $(".mainnav p").eq(i).addClass("h").siblings(".mainnav p").removeClass("h");
        $(".subnav-classify").children("p").children("a").eq(1).css({"color":"#f55561"});
    })
    $(".nav").on("mouseleave",function(){
        $(".subnav").hide();
        $(".mainnav p").removeClass("h");
        $(".mainnav p").children("span").show();
    })
    //小版面切换
    for(var i=0;i<$(".column").length;i++){
        $(".column").eq(i).find(".column-bottom-center").eq(0).show();
        $(".column").eq(i).find("i").eq(0).addClass("h");
    }
    $(".column-top-center span i").on("click",function(){
        var i=$(this).index();
        $(this).addClass("h").siblings(".column-top-center span i").removeClass("h");
        $(this).parents(".column-top").siblings(".column-bottom").children(".column-bottom-center").eq(i).show().siblings(".column-bottom-center").hide();
    })
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
    
    //购买页
    for(var i=0;i<$(".genre").length;i++){
        $(".genre").eq(i).find(".genre-mold").eq(0).addClass("h");
    }
    $(".genre-mold").on("click",function(){
        $(this).addClass("h").siblings(".genre-mold").removeClass("h");
    })
    //套餐
	$(".combo-left i").text($(".original").text());
	
	function money(){
		var arr=[];
		arr.push($(".original").text());
		$(".recommend-true.h").each(function(){
			arr.push($(this).parent(".recommend-logo").siblings(".recommend-money").find(".price").text());
		})
		var m=0;
		for(var i=0;i<arr.length;i++){
			m+=parseInt(arr[i])
		}
		$(".combo-money span").text(m);
		$(".combo-left i").text(m-parseInt($(".combo-right span").text()));
	}
	
	
    $(".mr_frbox").find(".recommend-true").on("click",function(){
        if($(this).hasClass("h")){
            $(this).removeClass("h");
            $(this).parent(".recommend-logo").css({"background": "url('./images/20170727172510.jpg')no-repeat","background-size": "100% 100%"});
			money();
			
        }else{
            $(this).addClass("h");
            $(this).parent(".recommend-logo").css({"background": "url('./images/20170727172520.jpg')no-repeat","background-size": "100% 100%"});
			
			money();
        }
    })
    $(".trade-center li").on("mouseover",function(){
        $(this).children(".trade-shop").stop(true).animate({"height":35+"px"},500);
    })
	$(".trade-center li").on("mouseleave",function(){
        $(this).children(".trade-shop").stop(true).animate({"height":0+"px"},500);
    })
    $(".referral-li").eq(0).addClass("h");
    $(".referral-content-li").eq(0).show();
	$(".referral-li").on("click",function(){
        var i=$(this).index();
        $(this).addClass("h").siblings(".referral-li").removeClass("h");
        $(".referral-content-li").eq(i).show().siblings(".referral-content-li").hide();
    })
    $(".all-spend-sort").eq(0).addClass("h");
    $(".all-spend-sort").on("click",function(){
        $(this).addClass("h").siblings(".all-spend-sort").removeClass("h");
    })
    //弹窗出现
    $(".genre-more").on("click",function(){
        $(".choose").show();
        $(".choose-center").show();
    })
    $(".close").on("click",function(){
        $(".choose").hide();
        $(".choose-center").hide();
    })
    $(".elect").on("click",function(){
        $(".choose").hide();
        $(".choose-center").hide();
        $(".genre-mold-word").show().addClass("h").siblings(".genre-mold").removeClass("h");
    })
    $(".choice-logo").on("mouseover",function(){
        $(".choice-logo-referral").stop(true).animate({"bottom":0+"px"},500);
    })
	$(".choice-logo").on("mouseleave",function(){
        $(".choice-logo-referral").stop(true).animate({"bottom":-120+"px"},500);
    })
    $(".genre-mold-small").eq(0).addClass("h");
    $(".genre-mold-small").on("click",function(){
        $(this).addClass("h").siblings(".genre-mold-small").removeClass("h");
    })
    $(".recommend-money").on("click",function(){
        $(".choose").show();
        $(".choice").show();
    })
    $(".shut").on("click",function(){
        $(".choose").hide();
        $(".choice").hide();
    })
    $(".choice-btn").on("click",function(){
        $(".choose").hide();
        $(".choice").hide();
    })
    //专题
    $(".about").on("mouseover",function(){
        $(this).children(".about-up").stop(true).animate({"bottom":0+"px"},500);
    })
	$(".about").on("mouseleave",function(){
        $(this).children(".about-up").stop(true).animate({"bottom":-110+"px"},500);
    })
    
})