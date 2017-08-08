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
    //购物车
    $(window).on("scroll",function(){ 
		var w_h=$(window).height();
        var a_h=$(".a").offset().top;
        var b_h=$(".b").offset().top;
        if(b_h>a_h+100){
            $(".close").css({"position":"relative"});
        }else{
            $(".close").css({"position":"fixed"});
            if(a_h<w_h){
				$(".close").css({"position":"relative"});
			}
        }
        
        
    });
    $(".close-all-choose").on("mouseover",function(){
        if($(".close-number-mark p").length>0){
            $(".close-all-mark").show();
        }
    })
    $(".close-all-choose").on("mouseleave",function(){
        $(".close-all-mark").hide();
    })
    function money(){
		var arr=[];
		var list={};
		$(".cease-select.h").parent(".cease-bottom-breath").siblings(".cost").each(function(){
			arr.push($(this).text());
		})
        $(".close-number-all").text(arr.length);
		var m=0;
		for(var i=0;i<arr.length;i++){
			m+=parseInt(arr[i])
		}
		$(".close-money i").text(m-parseInt($(".close-rate i i").text())+".00");
	}
    
    //加
    $(".cease-plus").on("click",function(){
        var number=parseInt($(this).siblings(".cease-number").val());
        number++;
        $(this).siblings(".cease-number").val(number);
        var unit=$(this).parents(".cease-bottom-breath").siblings(".unit").children("span").text();
        $(this).parents(".cease-bottom-breath").siblings(".cost").text(unit*number+".00");
        money();
        var arr1=[];
        arr1[0] = $(this).parents(".cease-bottom-row").find(".cease-name").text();
        arr1[1] = $(this).parents(".cease-bottom-row").find(".cease-number").val();
        arr1[2] = $(this).parents(".cease-bottom-row").find(".cease-name").attr("data");
        for(var i=0;i<arr2.length;i++){
            if(arr1[2]===arr2[i][2]){
                if(arr1[1]>arr2[i][1]){
                    arr2.splice(i,1);
                    arr2.push(arr1);
                }
            }
        }
        initializehtml(arr2);
    })
    //减
    $(".cease-minus").on("click",function(){
        var number=parseInt($(this).siblings(".cease-number").val());
        if(number>1){
            number--;
        }else{
            number=1;
        }
        $(this).siblings(".cease-number").val(number);
         var unit=$(this).parents(".cease-bottom-breath").siblings(".unit").children("span").text();
        $(this).parents(".cease-bottom-breath").siblings(".cost").text(unit*number+".00");
        money();
        var arr1=[];
        arr1[0] = $(this).parents(".cease-bottom-row").find(".cease-name").text();
        arr1[1] = $(this).parents(".cease-bottom-row").find(".cease-number").val();
        arr1[2] = $(this).parents(".cease-bottom-row").find(".cease-name").attr("data");
        for(var i=0;i<arr2.length;i++){
            if(arr1[2]===arr2[i][2]){
                if(arr1[1]<arr2[i][1]){
                    arr2.splice(i,1);
                    arr2.push(arr1);
                }
            }
        }
        initializehtml(arr2);
    })
    //输入
    $(".cease-number").on("input",function(){
        var number=parseInt($(this).val());
        var unit=$(this).parents(".cease-bottom-breath").siblings(".unit").children("span").text();
        $(this).parents(".cease-bottom-breath").siblings(".cost").text(unit*number+".00");
        money();
        var arr1=[];
        arr1[0] = $(this).parents(".cease-bottom-row").find(".cease-name").text();
        arr1[1] = $(this).val();
        arr1[2] = $(this).parents(".cease-bottom-row").find(".cease-name").attr("data");
        for(var i=0;i<arr2.length;i++){
            if(arr1[2]===arr2[i][2]){
                if(arr1[1]>arr2[i][1]){
                    arr2.splice(i,1);
                    arr2.push(arr1);
                }
            }
        }
        initializehtml(arr2);
        
    })
	 var arr2=[];
     function initHtml_(jsons){
        var html__='<p>'+
                        '<span>'+jsons[0]+'</span>'+
                        '<i><span>'+jsons[1]+'</span>件</i>'+
                   ' </p>';
        return html__;
    } 
    function initializehtml(arr2) {
        $(".close-number-mark").html("");
        $.each(arr2, function (key, val) {
            $(".close-number-mark").append(initHtml_(val));
        })
    }
    $(".cease-select").on("click",function(){
        var arr1=[];
        arr1[0] = $(this).parent(".cease-bottom-breath").siblings(".cease-name").text();
        arr1[1] = $(this).parent(".cease-bottom-breath").siblings(".cease-bottom-breath").find(".cease-number").val();
        arr1[2] = $(this).parent(".cease-bottom-breath").siblings(".cease-name").attr("data");
        if($(this).hasClass("h")){
            $(this).removeClass("h");
            $(".rest-select-all,.close-select-all").removeClass("h");
            $(this).parents(".cease-bottom").siblings(".cease-top").find(".cease-select-all").removeClass("h");
            money();
            for(var i=0;i<arr2.length;i++){
                if(arr1[2]===arr2[i][2]){
                   arr2.splice(i,1);
                }
            }
                
        }else{
            $(this).addClass("h");
            money();
            
            arr2.push(arr1);
            
            if($(this).parents(".cease-bottom").find(".cease-bottom-row").length===$(this).parents(".cease-bottom").find(".cease-select.h").length){
                $(this).parents(".cease-bottom").siblings(".cease-top").find(".cease-select-all").addClass("h");
                if($(".cease").length===$(".cease-select-all.h").length){
                    $(".rest-select-all,.close-select-all").addClass("h");
                }
            }
        }
         initializehtml(arr2);
        
    })
    $(".cease-select-all").on("click",function(){
        if($(this).hasClass("h")){
            $(this).removeClass("h");
            $(this).parents(".cease-top").siblings(".cease-bottom").find(".cease-select").removeClass("h");
            $(".rest-select-all,.close-select-all").removeClass("h");
            money();
            for(var i=0;i<$(this).parents(".cease").find(".cease-bottom-row").length;i++){
                var arr1=[];
                arr1[0] = $(this).parents(".cease").find(".cease-bottom-row").eq(i).find(".cease-name").text();
                arr1[1] = $(this).parents(".cease").find(".cease-bottom-row").eq(i).find(".cease-number").val();
                arr1[2] = $(this).parents(".cease").find(".cease-bottom-row").eq(i).find(".cease-name").attr("data");
                for(var j=0;j<arr2.length;j++){
                    if(arr1[2]===arr2[j][2]){
                       arr2.splice(j,1);
                    }
                }

            }
        }else{
            $(this).addClass("h");
            $(this).parents(".cease-top").siblings(".cease-bottom").find(".cease-select").addClass("h");
            money();
            for(var i=0;i<$(this).parents(".cease").find(".cease-bottom-row").length;i++){
                var arr1=[];
                arr1[0] = $(this).parents(".cease").find(".cease-bottom-row").eq(i).find(".cease-name").text();
                arr1[1] = $(this).parents(".cease").find(".cease-bottom-row").eq(i).find(".cease-number").val();
                arr1[2] = $(this).parents(".cease").find(".cease-bottom-row").eq(i).find(".cease-name").attr("data");
                arr2.push(arr1);

            }
            if($(".cease").length===$(".cease-select-all.h").length){
                $(".rest-select-all,.close-select-all").addClass("h");
            }
        }
        initializehtml(arr2);
    })
    $(".rest-select-all").on("click",function(){
        if($(this).hasClass("h")){
            $(this).removeClass("h");
            $(".close-select-all").removeClass("h");
            $(this).parents(".rest").siblings(".cease").find(".cease-select-all").removeClass("h");
            $(this).parents(".rest").siblings(".cease").find(".cease-select").removeClass("h");
            money();
            arr2=[];
        }else{
            $(this).addClass("h");
            $(".close-select-all").addClass("h");
             $(this).parents(".rest").siblings(".cease").find(".cease-select-all").addClass("h");
            $(this).parents(".rest").siblings(".cease").find(".cease-select").addClass("h");
            money();
             for(var i=0;i<$(".cease-bottom-row").length;i++){
                var arr1=[];
                arr1[0] = $(".cease-bottom-row").eq(i).find(".cease-name").text();
                arr1[1] = $(".cease-bottom-row").eq(i).find(".cease-number").val();
                arr1[2] = $(".cease-bottom-row").eq(i).find(".cease-name").attr("data");
                arr2.push(arr1);

            }
        }
        initializehtml(arr2);
    })
    $(".close-select-all").on("click",function(){
        if($(this).hasClass("h")){
            $(this).removeClass("h");
            $(".rest-select-all").removeClass("h");
            $(this).parents(".close").siblings(".content").find(".cease-select-all").removeClass("h");
            $(this).parents(".close").siblings(".content").find(".cease-select").removeClass("h");
            money();
            arr2=[];
        }else{
            $(this).addClass("h");
            $(".rest-select-all").addClass("h");
             $(this).parents(".close").siblings(".content").find(".cease-select-all").addClass("h");
            $(this).parents(".close").siblings(".content").find(".cease-select").addClass("h");
            money();
            for(var i=0;i<$(".cease-bottom-row").length;i++){
                var arr1=[];
                arr1[0] = $(".cease-bottom-row").eq(i).find(".cease-name").text();
                arr1[1] = $(".cease-bottom-row").eq(i).find(".cease-number").val();
                arr1[2] = $(".cease-bottom-row").eq(i).find(".cease-name").attr("data");
                arr2.push(arr1);

            }
        }
        initializehtml(arr2);
    })
    //删除商品
    $(".cease-remove").on("click",function(){
        $(this).parents(".cease-bottom-row").remove();
        for(var i=0;i<$(".cease").length;i++){
            if($(".cease").eq(i).find(".cease-bottom-row").length===0){
                $(".cease").eq(i).remove();
            }
        }
        money();
		var w_h=$(window).height();
        var a_h=$(".a").offset().top;
        var b_h=$(".b").offset().top;
        if(b_h>a_h+100){
            $(".close").css({"position":"relative"});
        }else{
            $(".close").css({"position":"fixed"});
            if(a_h<w_h){
				$(".close").css({"position":"relative"});
			}
        }
        
        var arr1=[];
        arr1[0] = $(this).parents(".cease-bottom-row").find(".cease-name").text();
        arr1[1] = $(this).parents(".cease-bottom-row").find(".cease-number").val();
        arr1[2] = $(this).parents(".cease-bottom-row").find(".cease-name").attr("data");
        for(var i=0;i<arr2.length;i++){
            if(arr1[2]===arr2[i][2]){
                arr2.splice(i,1);
            }
        }
        initializehtml(arr2);
    })
    //删除选中商品
    $(".close-remove").on("click",function(){
        $(".cease-select.h").parents(".cease-bottom-row").remove();
        for(var i=$(".cease").length-1;i>=0;i--){
            
            if($(".cease").eq(i).find(".cease-bottom-row").length===0){
                $(".cease").eq(i).remove();
            }
        }
        money();
		var w_h=$(window).height();
        var a_h=$(".a").offset().top;
        var b_h=$(".b").offset().top;
        if(b_h>a_h+100){
            $(".close").css({"position":"relative"});
        }else{
            $(".close").css({"position":"fixed"});
            if(a_h<w_h){
				$(".close").css({"position":"relative"});
			}
        }
        
        arr2=[];
        
        initializehtml(arr2);
    })
})