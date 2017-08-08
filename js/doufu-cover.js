'use strict';
$(function(){
//    var data = [{
//    id: 1,
//    0: '技术员代理',
//    1: '网申申报（初级）',
//    2: '助工评定（建设）',
//    3: '助工评定（机械）',
//    4: '助工评定（机械类工程师）',
//    5: '职称论文'
//    }, {
//    id: 2,
//    0: '技术员代理',
//    1: '网申申报（初级）',
//    2: '助工评定（建设）',
//    3: '助工评定（机械）',
//    4: '助工评定（机械类工程师）',
//    5: '职称论文'
//    }];
     var data = [];
    function initHtml(json,namber,m) {
        var html_ = '<ul data="'+m+'">'+
            '<p>套餐<i>'+namber+'</i>：</p>'+
            '<li class="feudal">'+json[0]+'</li>'+
            '<span>+</span>'+
            '<li class="feudal">'+json[1]+'</li>'+
            '<span>+</span>'+
            '<li class="feudal">'+json[2]+'</li>'+
            '<span>+</span>'+
            '<li class="feudal">'+json[3]+'</li>'+
            '<span>+</span>'+
            '<li class="feudal">'+json[4]+'</li>'+
            '<span>+</span>'+
            '<li class="feudal">'+json[5]+'</li>'+
            '<div class="alter">'+
                '<em class="revamp">修改</em><i>|</i><em class="remove">删除</em>'+
            '</div>'+
        '</ul>';
        return html_;

    }
    //把数组里的内容显示到表格里
    function initialize(data) {
        $(".classify").html("");
//        $.each(data, function (key, val) {
//            $(".classify").append(initHtml(val));
//        })
                for (var i = 0; i < data.length; i++) {
                    $(".classify").append(initHtml(data[i],i+1,i));
                }
    }
    initialize(data);
    //添加套餐
    $(".append").on("click",function(){
        $(".cover").show();
    })
    $(".cover-top span,.cover-bottom .cancel").on("click",function(){
        $(".cover").hide();
    })
    $(".keep").on("click",function(){
      var arr=[];  if($(".cover select").eq(0).find('option:selected').text()=="无"||$(".cover select").eq(1).find('option:selected').text()=="无"){
            $(".tips").addClass("h");
        }else{
            $(".cover").hide();
            for (var i = 0; i < $(".cover select").length; i++) {
               arr.push($(".cover select").eq(i).find("option:selected").text());
               $(".cover select").eq(i).find("option:first").prop("selected", 'selected');
            }
            data.push(arr);
            initialize(data);
            for(var i=$(".feudal").length;i>0;i--){
                if($(".feudal").eq(i).text()=="无"){
                        $(".feudal").eq(i).prev("span").remove();
                        $(".feudal").eq(i).remove();
                }
            }
        }
    })
    $(".cover select").on("input change",function(){
        if($(".cover select").eq(0).find('option:selected').text()=="无"||$(".cover select").eq(1).find('option:selected').text()=="无"){
        }else{
            $(".tips").removeClass("h");
        }
    })
    $("body").on("click",".remove",function(){
        var i=$(this).parents("ul").index();
            data.splice(i,1);
            console.log(i);
        initialize(data);
        for(var i=$(".feudal").length;i>0;i--){
            console.log($(".feudal").eq(i).text())
                if($(".feudal").eq(i).text()=="无"){
                    $(".feudal").eq(i).prev("span").remove();
                    $(".feudal").eq(i).remove();
            }
        }
    })
    
    
    //修改套餐
    $("body").on("click",".revamp",function(){
        $(".cover-alter").show();
        var m =$(this).parents("ul").attr("data");
        $(".cover-alter").attr("data",m);
        alert(m);
    })
    $(".alter-keep").on("click",function(){
        var arr=[];  
    if($(".cover-alter select").eq(0).find('option:selected').text()=="无"||$(".cover-alter select").eq(1).find('option:selected').text()=="无"){
        $(".tips-alter").addClass("h");
    }else{
        $(".cover-alter").hide();
        for (var i = 0; i < $(".cover-alter select").length; i++) {
           arr.push($(".cover-alter select").eq(i).find("option:selected").text());
           $(".cover-alter select").eq(i).find("option:first").prop("selected", 'selected');
        }
        var m=$(this).parents(".cover-alter").attr("data"); 
        data[m]=arr;
            alert(m)

        initialize(data);
         console.log(data)
        for(var i=$(".feudal").length;i>0;i--){
             if($(".feudal").eq(i).text()=="无"){
                    $(".feudal").eq(i).prev("span").remove();
                    $(".feudal").eq(i).remove();
            }
        }
    }
    })
     
    $(".cover-alter-top span,.cover-alter-bottom .alter-cancel").on("click",function(){
        $(".cover-alter").hide();
    })
    $(".cover-alter select").on("input change",function(){
        if($(".cover-alter select").eq(0).find('option:selected').text()=="无"||$(".cover-alter select").eq(1).find('option:selected').text()=="无"){
        }else{
            $(".tips-alter").removeClass("h");
        }
    })
})