'use strict';
$(function() {
    //侧边框
    $(".sidebar li").eq(2).hide();
    $(window).on("scroll", function() {
        var s_h = $(window).scrollTop();
        if (s_h > 900) {
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
    //右边的tab切换
    $(".subnav").eq(0).addClass("h");
    $(".center-perfect").eq(0).show();
    $(".subnav").on("click", function() {
        var i = $(this).index();
        $(this).addClass("h").siblings(".subnav").removeClass("h");
        $(".center-perfect").eq(i).show().siblings(".center-perfect").hide();
    })
    var data = [];

    function initHtml(json, namber, m) {
        var html_ = '<ul data="' + m + '">' +
            '<p>套餐<i>' + namber + '</i>：</p>' +
            '<li class="feudal">' + json[0] + '</li>' +
            '<span>+</span>' +
            '<li class="feudal">' + json[1] + '</li>' +
            '<span>+</span>' +
            '<li class="feudal">' + json[2] + '</li>' +
            '<span>+</span>' +
            '<li class="feudal">' + json[3] + '</li>' +
            '<span>+</span>' +
            '<li class="feudal">' + json[4] + '</li>' +
            '<span>+</span>' +
            '<li class="feudal">' + json[5] + '</li>' +
            '<div class="alter">' +
            '<em class="revamp">修改</em><i>|</i><em class="remove">删除</em>' +
            '</div>' +
            '</ul>';
        return html_;

    }
    //把数组里的内容显示到套餐里
    function initialize(data) {
        $(".classify").html("");
        for (var i = 0; i < data.length; i++) {
            $(".classify").append(initHtml(data[i], i + 1, i));
        }
    }
    initialize(data);
    //添加套餐
    $(".append").on("click", function() {
        $(".cover").show();
        $(".cover-all").show();
    })
    $(".cover-top span,.cover-bottom .cancel").on("click", function() {
        $(".cover").hide();
        $(".cover-all").hide();
    })
    $(".keep").on("click", function() {
        var arr = [];
        if ($(".cover select").eq(0).find('option:selected').text() == "无" || $(".cover select").eq(1).find('option:selected').text() == "无") {
            $(".tips").addClass("h");
        } else {
            $(".cover").hide();
            $(".cover-all").hide();
            for (var i = 0; i < $(".cover select").length; i++) {
                arr.push($(".cover select").eq(i).find("option:selected").text());
                $(".cover select").eq(i).find("option:first").prop("selected", 'selected');
            }
            data.push(arr);
            initialize(data);
            for (var i = $(".feudal").length; i > 0; i--) {
                if ($(".feudal").eq(i).text() == "无") {
                    $(".feudal").eq(i).prev("span").remove();
                    $(".feudal").eq(i).remove();
                }
            }
        }
    })
    $(".cover select").on("input change", function() {
        if ($(".cover select").eq(0).find('option:selected').text() == "无" || $(".cover select").eq(1).find('option:selected').text() == "无") {} else {
            $(".tips").removeClass("h");
        }
    })
    $("body").on("click", ".remove", function() {
        var i = $(this).parents("ul").index();
        data.splice(i, 1);
        console.log(i);
        initialize(data);
        for (var i = $(".feudal").length; i > 0; i--) {
            console.log($(".feudal").eq(i).text())
            if ($(".feudal").eq(i).text() == "无") {
                $(".feudal").eq(i).prev("span").remove();
                $(".feudal").eq(i).remove();
            }
        }
    })


    //修改套餐
    $("body").on("click", ".revamp", function() {
        $(".cover-alter").show();
        $(".cover-all").show();
        var m = $(this).parents("ul").attr("data");
        $(".cover-alter").attr("data", m);
        alert(m);
    })
    $(".alter-keep").on("click", function() {
        var arr = [];
        if ($(".cover-alter select").eq(0).find('option:selected').text() == "无" || $(".cover-alter select").eq(1).find('option:selected').text() == "无") {
            $(".tips-alter").addClass("h");
        } else {
            $(".cover-alter").hide();
            $(".cover-all").hide();
            for (var i = 0; i < $(".cover-alter select").length; i++) {
                arr.push($(".cover-alter select").eq(i).find("option:selected").text());
                $(".cover-alter select").eq(i).find("option:first").prop("selected", 'selected');
            }
            var m = $(this).parents(".cover-alter").attr("data");
            data[m] = arr;
            alert(m)

            initialize(data);
            console.log(data)
            for (var i = $(".feudal").length; i > 0; i--) {
                if ($(".feudal").eq(i).text() == "无") {
                    $(".feudal").eq(i).prev("span").remove();
                    $(".feudal").eq(i).remove();
                }
            }
        }
    })

    $(".cover-alter-top span,.cover-alter-bottom .alter-cancel").on("click", function() {
        $(".cover-alter").hide();
        $(".cover-all").hide();
    })
    $(".cover-alter select").on("input change", function() {
            if ($(".cover-alter select").eq(0).find('option:selected').text() == "无" || $(".cover-alter select").eq(1).find('option:selected').text() == "无") {} else {
                $(".tips-alter").removeClass("h");
            }
        })
        //编辑产品
    var dest = [
        [
            '公司注册'
        ],
        [
            '公司变更'
        ]
    ];

    function redactHtml(json, i, n) {
        var html_ = '<h4>' + json[0] + '</h4>' +
            '<div class="sort">' +
            ' <ul data="' + i + '">' +
            '</ul>' +
            '<div class="alter">' +
            '<em class="redact">编辑</em>' +
            '</div>' +
            '</div>';
        return html_;

    }
    //把数组里的内容显示到套餐里
    function initredact(dest, o) {
        $(".center-perfect").eq(o).children(".center-content-sort").html("");
        for (var i = 0; i < dest.length; i++) {
            $(".center-perfect").eq(o).children(".center-content-sort").append(redactHtml(dest[i], i));
        }
    }
    initredact(dest, 0);

    function offerHtml(json, i, n) {
        var html_ = '<h4>' + json[0] + '</h4>' +
            '<div class="sort">' +
            ' <ul data="' + i + '">' +
            '</ul>' +
            '<div class="alter">' +
            '<em class="offer">编辑</em>' +
            '</div>' +
            '</div>';
        return html_;

    }
    //把数组里的内容显示到套餐里
    function initoffer(dest, o) {
        $(".center-perfect").eq(o).children(".center-content-sort").html("");
        for (var i = 0; i < dest.length; i++) {
            $(".center-perfect").eq(o).children(".center-content-sort").append(offerHtml(dest[i], i));
        }
    }
    initoffer(dest, 2);

    //正在服务
    var list = [
        [
            '有限责任公司注册',
            '合伙企业注册',
            '个人独资企业注册',
            '公司注册地址',
            '外商独资企业注册',
            '分公司注册',
            '外商独资企业注册'
        ],
        [
            '公司名称变更',
            '公司股权变更',
            '公司经营范围变更',
            '法人、高管或注册资本变更',
            '公司注册地址变更',
            '公司注销',
            '创业问诊'
        ]
    ];


    function sortHtml(json, i) {
        var html_ = '<li>' + json[0] + '</li>' +
            '<li>' + json[1] + '</li>' +
            '<li>' + json[2] + '</li>' +
            '<li>' + json[3] + '</li>' +
            '<li>' + json[4] + '</li>' +
            '<li>' + json[5] + '</li>' +
            '<li>' + json[6] + '</li>';
        return html_;

    }
    //把数组里的内容显示到套餐里
    function initsort(list) {
        $(".center-perfect").eq(0).find(".sort").eq(i).children("ul").html("");
        for (var i = 0; i < list.length; i++) {
            $(".center-perfect").eq(0).find(".sort").eq(i).children("ul").append(sortHtml(list[i], i));
        }
    }
    initsort(list);
    //未提供服务

    var suite = [];

    function suiteHtml(json,i) {
        var html_ = '<li>' + json[i] + '</li>' ;
        return html_;

    }
    //把数组里的内容显示到套餐里
    function initsuite(suite,o,n) {
        $(".center-perfect").eq(o).find(".sort").eq(n).children("ul").html("");
        for (var i = 0; i < suite.length; i++) {
            $(".center-perfect").eq(o).find(".sort").eq(n).children("ul").append(suiteHtml(suite,i));
        }
    }
    //暂停出售
    $("body").on("click", ".redact", function() {
        var arr = [];
        $(".cover-sell").show();
        $(".cover-all").show();
        var m = $(this).parent(".alter").siblings("ul").attr("data");
        $(".cover-sell").attr("data", m);
        for (var i = 0; i < $(this).parent(".alter").siblings("ul").children("li").length; i++) {
            arr.push($(this).parent(".alter").siblings("ul").children("li").eq(i).text());
        }
        for (var i = 0; i < $(".cover-sell").find(".selling").length; i++) {
            $(".cover-sell").find(".selling").eq(i).val("");
        }
        console.log(arr);
        for (var i = 0; i < arr.length; i++) {
            $(".cover-sell").find(".selling").eq(i).val(arr[i]);
        }
    })
    $(".cover-alter-top span,.cover-alter-bottom .sell-cancel").on("click", function() {
        $(".cover-sell").hide();
        $(".cover-all").hide();
    })
    $(".suspend").on("click", function() {
        $(this).prev(".selling").val("");
    })
    $(".sell-keep").on("click", function() {
        var arr1 = [];
        var arr = list;
        $(".cover-sell").hide();
        $(".cover-all").hide();
        var m = $(this).parents(".cover-sell").attr("data");
        var selling = $(this).parents(".cover-sell").find(".selling");

        for (var i = 0; i < selling.length; i++) {
            arr1.push(selling.eq(i).val());
        }
        console.log(arr1);
        console.log(arr[m]);
        for (var i = arr1.length - 1; i >= 0; i--) {

            $(".center-perfect").eq(0).find(".sort").eq(m).find("li").eq(i).text(arr1[i]);
            if ($(".center-perfect").eq(0).find(".sort").eq(m).find("li").eq(i).text() == "") {
                $(".center-perfect").eq(0).find(".sort").eq(m).find("li").eq(i).remove();
            }
            if (arr1[i] == "") {
                arr1.splice(i, 1);
            }
        }
        $.arrayIntersect = function(a, b) {
            return $.merge($.grep(a, function(i) {
                return $.inArray(i, b) == -1;
            }), $.grep(b, function(i) {
                return $.inArray(i, a) == -1;
            }));
        };
        suite=[];
        suite = $.arrayIntersect(arr[m], arr1);
        initsuite(suite,2,m);
        console.log(suite);
    })
    //出售
    $("body").on("click", ".offer", function() {
        var arr = [];
        $(".cover-sold").show();
        $(".cover-all").show();
        var m = $(this).parent(".alter").siblings("ul").attr("data");
        $(".cover-sold").attr("data", m);
        for (var i = 0; i < $(this).parent(".alter").siblings("ul").children("li").length; i++) {
            arr.push($(this).parent(".alter").siblings("ul").children("li").eq(i).text());
        }
        for (var i = 0; i < $(".selling").length; i++) {
            $(".cover-sold").find(".selling").eq(i).val("");
        }
        console.log(arr);
        for (var i = 0; i < arr.length; i++) {
            $(".cover-sold").find(".selling").eq(i).val(arr[i]);
        }
    })
    $(".cover-alter-top span,.cover-alter-bottom .sell-cancel").on("click", function() {
        $(".cover-sold").hide();
        $(".cover-all").hide();
    })
    $(".sale").on("click", function() {
        $(this).prev(".selling").val("");
    })
    $(".sold-keep").on("click", function() {
        var arr1 = [];
        var arr = list;
        $(".cover-sold").hide();
        $(".cover-all").hide();
        var m = $(this).parents(".cover-sold").attr("data");
        var selling = $(this).parents(".cover-sold").find(".selling");

        for (var i = 0; i < selling.length; i++) {
            arr1.push(selling.eq(i).val());
        }
        console.log(arr1);
        console.log(arr[m]);
        for (var i = arr1.length - 1; i >= 0; i--) {

            $(".center-perfect").eq(2).find(".sort").eq(m).find("li").eq(i).text(arr1[i]);
            if ($(".center-perfect").eq(2).find(".sort").eq(m).find("li").eq(i).text() == "") {
                $(".center-perfect").eq(2).find(".sort").eq(m).find("li").eq(i).remove();
            }
            if (arr1[i] == "") {
                arr1.splice(i, 1);
            }
        }
        $.arrayIntersect = function(a, b) {
            return $.merge($.grep(a, function(i) {
                return $.inArray(i, b) == -1;
            }), $.grep(b, function(i) {
                return $.inArray(i, a) == -1;
            }));
        };
        suite=[];
        suite = $.arrayIntersect(arr[m], arr1);
        initsuite(suite,0,m);
        console.log(suite);
    })
})