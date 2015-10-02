// ==UserScript==
// @name         百度搜索屏蔽
// @namespace    http://your.homepage/
// @version      0.1
// @description  屏蔽卡饭教程搜索条目
// @include      http://www.baidu.com/*
// @include      https://www.baidu.com/*
// @author       You
// @run-at       document-end
// @grant        none
// ==/UserScript==
(function(){
    [].filter.call(
        document.querySelectorAll("span.g"),
        function(span){
            return span.innerText.startsWith("www.kafan.cn")
        }
    ).forEach(function(span){
        span.parentElement.parentElement.remove()
    })
})()
