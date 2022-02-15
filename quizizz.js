(function(e,t){"use strict";function f(e){o[o.length]=e}function l(e){var t=new RegExp("\\b"+e+"\\b");s.className=s.className.replace(t,"")}function c(e,t){for(var n=0,r=e.length;n<r;n++)t.call(e,e[n],n)}function E(){var t=e.innerWidth||s.clientWidth,n=e.outerWidth||e.screen.width;h.screen.innerWidth=t,h.screen.outerWidth=n;var r=e.outerWidth||s.clientWidth;s.className=s.className.replace(/ (w|lt|portrait|no-portrait|landscape|no-landscape)-\d+/g,""),f("w-"+Math.round(r/100)*100),c(u.screens,function(e){r<=e&&f("lt-"+e)});var i=e.innerHeight||s.clientHeight,o=e.outerHeight||e.screen.height;h.screen.innerHeight=i,h.screen.outerHeight=o,h.feature("portrait",i>t),h.feature("landscape",i<t)}function x(){e.clearTimeout(S),S=e.setTimeout(E,100)}var n=e.document,r=e.navigator,i=e.location,s=n.documentElement,o=[],u={screens:[320,480,640,768,1024,1280,1440,1680,1920],section:"-section",page:"-page",head:"head"};if(e.head_conf)for(var a in e.head_conf)e.head_conf[a]!==t&&(u[a]=e.head_conf[a]);var h=e[u.head]=function(){h.ready.apply(null,arguments)};h.feature=function(e,t,n){return e?(Object.prototype.toString.call(t)==="[object Function]"&&(t=t.call()),f((t?"":"no-")+e),h[e]=!!t,n||(l("no-"+e),l(e),h.feature()),h):(s.className+=" "+o.join(" "),o=[],h)},h.feature("js",!0);var p=r.userAgent.toLowerCase(),d=/mobile|midp/.test(p);h.feature("mobile",d,!0),h.feature("desktop",!d,!0),h.feature("touch","ontouchstart"in e,!0),p=/(chrome|firefox)[ \/]([\w.]+)/.exec(p)||/(iphone|ipad|ipod)(?:.*version)?[ \/]([\w.]+)/.exec(p)||/(android)(?:.*version)?[ \/]([\w.]+)/.exec(p)||/(webkit|opera)(?:.*version)?[ \/]([\w.]+)/.exec(p)||/(msie) ([\w.]+)/.exec(p)||[];var v=p[1],m=parseFloat(p[2]),g=0,y=0;switch(v){case"msie":v="ie",m=n.documentMode||m,g=6,y=10;break;case"chrome":g=8,y=22;break;case"firefox":v="ff",g=3,y=17;break;case"ipod":case"ipad":case"iphone":v="ios",g=3,y=6;break;case"android":g=2,y=4;break;case"webkit":v="safari",g=9,y=12;break;case"opera":g=9,y=12}h.browser={name:v,version:m},h.browser[v]=!0;var b=["ie"];c(b,function(e){e===v?f(e):f("no-"+e)});for(var w=g;w<=y;w++)m<w&&f("lt-"+v+w);v==="ie"&&m<9&&c("abbr|article|aside|audio|canvas|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video".split("|"),function(e){n.createElement(e)}),c(i.pathname.split("/"),function(e,n){if(this.length>2&&this[n+1]!==t)n&&f(this.slice(1,n+1).join("-").toLowerCase()+u.section);else{var r=e||"index",i=r.indexOf(".");i>0&&(r=r.substring(0,i)),s.id=r.toLowerCase()+u.page,n||f("root"+u.section)}}),h.screen={height:e.screen.height,width:e.screen.width},E();var S=0;e.addEventListener?e.addEventListener("resize",x,!1):e.attachEvent("onresize",x)})(window),function(e,t){"use strict";function l(e){for(var n in e)if(s[e[n]]!==t)return!0}function c(e){var t=e.charAt(0).toUpperCase()+e.substr(1),n=(e+" "+u.join(t+" ")+t).split(" ");return!!l(n)}var n=e.document,r=e.navigator,i=n.createElement("i"),s=i.style,o=" -o- -moz- -ms- -webkit- -khtml- ".split(" "),u="Webkit Moz O ms Khtml".split(" "),a=e.head_conf&&e.head_conf.head||"head",f=e[a],h={gradient:function(){var e="background-image:",t="gradient(linear,left top,right bottom,from(#9f9),to(#fff));",n="linear-gradient(left top,#eee,#fff);";return s.cssText=(e+o.join(t+e)+o.join(n+e)).slice(0,-e.length),!!s.backgroundImage},rgba:function(){return s.cssText="background-color:rgba(0,0,0,0.5)",!!s.backgroundColor},opacity:function(){return i.style.opacity===""},textshadow:function(){return s.textShadow===""},multiplebgs:function(){return s.cssText="background:url(//:),url(//:),red url(//:)",(new RegExp("(url\\s*\\(.*?){3}")).test(s.background)},boxshadow:function(){return c("boxShadow")},borderimage:function(){return c("borderImage")},borderradius:function(){return c("borderRadius")},cssreflections:function(){return c("boxReflect")},csstransforms:function(){return c("transform")},csstransitions:function(){return c("transition")},fontface:function(){var e=navigator.userAgent,t;return(t=e.match(/Chrome\/(\d+\.\d+\.\d+\.\d+)/))?t[1]>="4.0.249.4"||1*t[1].split(".")[0]>5:(t=e.match(/Safari\/(\d+\.\d+)/))&&!/iPhone/.test(e)?t[1]>="525.13":/Opera/.test({}.toString.call(window.opera))?opera.version()>="10.00":(t=e.match(/rv:(\d+\.\d+\.\d+)[^b].*Gecko\//))?t[1]>="1.9.1":!1}};for(var p in h)h[p]&&f.feature(p,h[p].call(),!0);f.feature()}(window),function(e,t){"use strict";function y(e){if(e._done)return;e(),e._done=1}function b(e){var t=e.split("/"),n=t[t.length-1],r=n.indexOf("?");return r!=-1?n.substring(0,r):n}function w(e){var t;if(typeof e=="object")for(var n in e)e[n]&&(t={name:n,url:e[n]});else t={name:b(e),url:e};var r=l[t.name];return r&&r.url===t.url?r:(l[t.name]=t,t)}function E(e,t){if(!e)return;typeof e=="object"&&(e=[].slice.call(e));for(var n=0;n<e.length;n++)t.call(e,e[n],n)}function S(e){return Object.prototype.toString.call(e)=="[object Function]"}function x(e){e=e||l;var t;for(var n in e){if(e.hasOwnProperty(n)&&e[n].state!=g)return!1;t=!0}return t}function T(e){e.state=d,E(e.onpreload,function(e){e.call()})}function N(e,n){e.state===t&&(e.state=v,e.onpreload=[],k({src:e.url,type:"cache"},function(){T(e)}))}function C(e,t){if(e.state==g)return t&&t();if(e.state==m)return p.ready(e.name,t);if(e.state==v)return e.onpreload.push(function(){C(e,t)});e.state=m,k(e.url,function(){e.state=g,t&&t(),E(f[e.name],function(e){y(e)}),x()&&o&&E(f.ALL,function(e){y(e)})})}function k(e,t){var r=n.createElement("script");r.type="text/"+(e.type||"javascript"),r.src=e.src||e,r.async=!1,r.onreadystatechange=r.onload=function(){var e=r.readyState;!t.done&&(!e||/loaded|complete/.test(e))&&(t.done=!0,t())},(n.body||i).appendChild(r)}function L(){o||(o=!0,E(u,function(e){y(e)}))}var n=e.document,r=e.navigator,i=n.documentElement,s,o,u=[],a=[],f={},l={},c=n.createElement("script").async===!0||"MozAppearance"in n.documentElement.style||e.opera,h=e.head_conf&&e.head_conf.head||"head",p=e[h]=e[h]||function(){p.ready.apply(null,arguments)},d=1,v=2,m=3,g=4;c?p.js=function(){var e=arguments,t=e[e.length-1],n={};return S(t)||(t=null),E(e,function(r,i){r!=t&&(r=w(r),n[r.name]=r,C(r,t&&i==e.length-2?function(){x(n)&&y(t)}:null))}),p}:p.js=function(){var e=arguments,t=[].slice.call(e,1),n=t[0];return s?(n?(E(t,function(e){S(e)||N(w(e))}),C(w(e[0]),S(n)?n:function(){p.js.apply(null,t)})):C(w(e[0])),p):(a.push(function(){p.js.apply(null,e)}),p)},p.ready=function(e,t){if(e==n)return o?y(t):u.push(t),p;S(e)&&(t=e,e="ALL");if(typeof e!="string"||!S(t))return p;var r=l[e];if(r&&r.state==g||e=="ALL"&&x()&&o)return y(t),p;var i=f[e];return i?i.push(t):i=f[e]=[t],p},p.ready(n,function(){x()&&E(f.ALL,function(e){y(e)}),p.feature&&p.feature("domloaded",!0)});if(e.addEventListener)n.addEventListener("DOMContentLoaded",L,!1),e.addEventListener("load",L,!1);else if(e.attachEvent){n.attachEvent("onreadystatechange",function(){n.readyState==="complete"&&L()});var A=1;try{A=e.frameElement}catch(O){}!A&&i.doScroll&&function(){try{i.doScroll("left"),L()}catch(e){setTimeout(arguments.callee,1);return}}(),e.attachEvent("onload",L)}!n.readyState&&n.addEventListener&&(n.readyState="loading",n.addEventListener("DOMContentLoaded",handler=function(){n.removeEventListener("DOMContentLoaded",handler,!1),n.readyState="complete"},!1)),setTimeout(function(){s=!0,E(a,function(e){e()})},300)}(window)



  let quizDataPath = "https://quizizz.com/api/main/quiz/";
let quizData;
let questionData;
let prevUrl = "";

if (getCookie("hackId") != "") {
    quizData = getQuizData();
    questionData = quizData.data.quiz.info.questions;
}

let currentUrl = window.location.href;
if (prevUrl != currentUrl) {
    prevUrl = currentUrl;
    inject();
}

function inject() {
    document.head.insertAdjacentHTML('beforeend', `<style type="text/css">
    correct-answer-x3Ca8B {
    color: lime !important;
    }
    </style>`);
}

let url = window.location.href.toString();
if (url.includes("quizizz.com/join/quiz/") && url.includes("/start")) {
    setCookie("hackId", url.split("/")[5], 0.1);
    window.open(quizDataPath + getCookie("hackId"));
    // document.querySelector("body > div > div.root-component > div > div > div > div.pre-game-screen > div.main-action-section > div.action-item-wrapper.default-card-styles.cta-section > div > div > button.primary-button.play-again > i").click();
    setTimeout(function() {location.reload();}, 100);
}

let prevQuestionNum;

let tick = setInterval(function() {
    if (document.querySelector("body > div > div.root-component > div > div > div > div.page-container > div > div > div.main-section > div.top-section-wrapper > div > div.actions-container > button.primary-action-btn")) {
        clearInterval(tick);
        clearInterval(next);
        location.reload();
    }
    let newQuestionNum;
    try {
        newQuestionNum = document.getElementsByClassName("current-question")[0].innerHTML;
    } catch(err) {
    }
    if (newQuestionNum != prevQuestionNum) {
        setTimeout(function() {compareQuestion()}, 1000);
        prevQuestionNum = newQuestionNum;
    }
}, 100);

let answer;
function compareQuestion() {
    let Choices = document.getElementsByClassName("options-container")[0].children[0].children;
    let currentQuestionText = document.querySelector("body > div > div.root-component > div > div > div > div.page-container.in-quiz > div.screen.screen-game > div.transitioner.transitioner-component > div > div > div > div > div > div.question-container.themed.black > div > div > div > div > p");
    let submitButton = document.querySelector("body > div > div.root-component > div > div > div > div.page-container.in-quiz > div.screen.screen-game > div.control-center > div > div.submit-actions.flex-view.all-center.exp-subtext > div.show-tooltip.default > button > span");
    if (currentQuestionText == null) currentQuestionText = document.querySelector("body > div > div.root-component > div > div > div > div.page-container.in-quiz > div.screen.screen-game > div.transitioner.transitioner-component > div > div > div > div > div > div.question-container.themed > div > div > div > div > p");
    currentQuestionText = currentQuestionText.parentElement.innerHTML;
    // console.log(currentQuestionText);
    for (let question of Object.keys(questionData)) {
        question = questionData[question];
        let questionText = question.structure.query.text.replaceAll("  ", " ").replace("  ", " ");
        // console.log(questionText);
        if (currentQuestionText == questionText) {
            answer = question.structure.answer;
            if (typeof answer != "object") {
                // console.log(question.structure.options[answer].text);
                for (let i = 0; i < Choices.length; i++) {
                    let option = Choices[i].children[0].children[0].children[1].children[0].children[0].children[0];
                    if (option.outerHTML == question.structure.options[answer].text.replaceAll("  ", " ").replace("  ", " ")) {
                        option.innerHTML = "<correct-answer-x3Ca8B><u>" + option.innerHTML + "</u></correct-answer-x3Ca8B>"
                        option.click();
                    }
                }
            } else {
                for (let i = 0; i < Choices.length; i++) {
                    let option = Choices[i].children[0].children[0].children[1].children[0].children[0].children[0];
                    for (let index of Object.keys(answer)) {
                        index = answer[index];
                        if (option.outerHTML == question.structure.options[index].text.replaceAll("  ", " ").replace("  ", " ")) {
                            option.innerHTML = "<correct-answer-x3Ca8B><u>" + option.innerHTML + "</u></correct-answer-x3Ca8B>"
                            option.click();
                        }
                    }
                }
                setTimeout(function(){submitButton.click();}, 100);
            }
        }
    }
}

let next = setInterval(function(){
    try {
        document.querySelector("div > div.right-navigator-wrapper > div.show-tooltip.error > div.right-navigator:not(.disable)").click();
    } catch(err) {

    }
}, 10);

function getQuizData() {
    let xhttp = new XMLHttpRequest;
    xhttp.open("GET", quizDataPath + getCookie("hackId"), false);
    xhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhttp.send();
    return JSON.parse(xhttp.responseText);
}

function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
        c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
        }
    }
    return "";
}
