// ==UserScript==
// @name         百度云盘WAP重定向
// @description  重定向百度云盘的 WAP 页面到普通页面
// @author       me
// @version      0.2
// @namespace    https://github.com/wenLiangcan
// @homepage     https://github.com/wenLiangcan/Userscripts
// @license      GPL version 3 (http://www.gnu.org/licenses/gpl.txt)
// @copyright    Copyright © 2014-2015 wenLiangcan
// @updateURL   none
// @downloadURL
// @include      http://pan.baidu.com/wap/*
// @include      http://yun.baidu.com/wap/*
// @run-at       document-end
// @grant        none
// ==/UserScript==

(function() {
    if (/^http:\/\/(pan|yun)\.baidu\.com\/wap\/link\?.*?$/.test(document.URL)) {
        window.location.href = document.URL.replace('wap', 'share');
    }
    else if (/^http:\/\/pan\.baidu\.com\/wap\/share\/.*?$/.test(document.URL)) {
        window.location.href = document.URL.replace('wap/', '');
    }
})();
