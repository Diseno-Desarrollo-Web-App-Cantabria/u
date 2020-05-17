jQuery(document).ready(function(){

    // hide #back-top first
    jQuery("#back-top").hide();
    
    // fade in #back-top
    jQuery(function () {
        jQuery(window).scroll(function () {
            if (jQuery(this).scrollTop() > 100) {
                jQuery("#back-top").fadeIn();
            } else {
                jQuery("#back-top").fadeOut();
            }
        });

        // scroll body to 0px on click
        jQuery("#back-top a").click(function () {
            jQuery("body,html").animate({
                scrollTop: 0
            }, 800);
            return false;
        });
    });
});

// jQuery Easing v1.3 - http://gsgd.co.uk/sandbox/jquery/easing/
jQuery.easing.jswing = jQuery.easing.swing; jQuery.extend(jQuery.easing, { def: "easeOutQuad", swing: function (e, f, a, h, g) { return jQuery.easing[jQuery.easing.def](e, f, a, h, g) }, easeInQuad: function (e, f, a, h, g) { return h * (f /= g) * f + a }, easeOutQuad: function (e, f, a, h, g) { return -h * (f /= g) * (f - 2) + a }, easeInOutQuad: function (e, f, a, h, g) { if ((f /= g / 2) < 1) { return h / 2 * f * f + a } return -h / 2 * ((--f) * (f - 2) - 1) + a }, easeInCubic: function (e, f, a, h, g) { return h * (f /= g) * f * f + a }, easeOutCubic: function (e, f, a, h, g) { return h * ((f = f / g - 1) * f * f + 1) + a }, easeInOutCubic: function (e, f, a, h, g) { if ((f /= g / 2) < 1) { return h / 2 * f * f * f + a } return h / 2 * ((f -= 2) * f * f + 2) + a }, easeInQuart: function (e, f, a, h, g) { return h * (f /= g) * f * f * f + a }, easeOutQuart: function (e, f, a, h, g) { return -h * ((f = f / g - 1) * f * f * f - 1) + a }, easeInOutQuart: function (e, f, a, h, g) { if ((f /= g / 2) < 1) { return h / 2 * f * f * f * f + a } return -h / 2 * ((f -= 2) * f * f * f - 2) + a }, easeInQuint: function (e, f, a, h, g) { return h * (f /= g) * f * f * f * f + a }, easeOutQuint: function (e, f, a, h, g) { return h * ((f = f / g - 1) * f * f * f * f + 1) + a }, easeInOutQuint: function (e, f, a, h, g) { if ((f /= g / 2) < 1) { return h / 2 * f * f * f * f * f + a } return h / 2 * ((f -= 2) * f * f * f * f + 2) + a }, easeInSine: function (e, f, a, h, g) { return -h * Math.cos(f / g * (Math.PI / 2)) + h + a }, easeOutSine: function (e, f, a, h, g) { return h * Math.sin(f / g * (Math.PI / 2)) + a }, easeInOutSine: function (e, f, a, h, g) { return -h / 2 * (Math.cos(Math.PI * f / g) - 1) + a }, easeInExpo: function (e, f, a, h, g) { return (f == 0) ? a : h * Math.pow(2, 10 * (f / g - 1)) + a }, easeOutExpo: function (e, f, a, h, g) { return (f == g) ? a + h : h * (-Math.pow(2, -10 * f / g) + 1) + a }, easeInOutExpo: function (e, f, a, h, g) { if (f == 0) { return a } if (f == g) { return a + h } if ((f /= g / 2) < 1) { return h / 2 * Math.pow(2, 10 * (f - 1)) + a } return h / 2 * (-Math.pow(2, -10 * --f) + 2) + a }, easeInCirc: function (e, f, a, h, g) { return -h * (Math.sqrt(1 - (f /= g) * f) - 1) + a }, easeOutCirc: function (e, f, a, h, g) { return h * Math.sqrt(1 - (f = f / g - 1) * f) + a }, easeInOutCirc: function (e, f, a, h, g) { if ((f /= g / 2) < 1) { return -h / 2 * (Math.sqrt(1 - f * f) - 1) + a } return h / 2 * (Math.sqrt(1 - (f -= 2) * f) + 1) + a }, easeInElastic: function (f, h, e, l, k) { var i = 1.70158; var j = 0; var g = l; if (h == 0) { return e } if ((h /= k) == 1) { return e + l } if (!j) { j = k * 0.3 } if (g < Math.abs(l)) { g = l; var i = j / 4 } else { var i = j / (2 * Math.PI) * Math.asin(l / g) } return -(g * Math.pow(2, 10 * (h -= 1)) * Math.sin((h * k - i) * (2 * Math.PI) / j)) + e }, easeOutElastic: function (f, h, e, l, k) { var i = 1.70158; var j = 0; var g = l; if (h == 0) { return e } if ((h /= k) == 1) { return e + l } if (!j) { j = k * 0.3 } if (g < Math.abs(l)) { g = l; var i = j / 4 } else { var i = j / (2 * Math.PI) * Math.asin(l / g) } return g * Math.pow(2, -10 * h) * Math.sin((h * k - i) * (2 * Math.PI) / j) + l + e }, easeInOutElastic: function (f, h, e, l, k) { var i = 1.70158; var j = 0; var g = l; if (h == 0) { return e } if ((h /= k / 2) == 2) { return e + l } if (!j) { j = k * (0.3 * 1.5) } if (g < Math.abs(l)) { g = l; var i = j / 4 } else { var i = j / (2 * Math.PI) * Math.asin(l / g) } if (h < 1) { return -0.5 * (g * Math.pow(2, 10 * (h -= 1)) * Math.sin((h * k - i) * (2 * Math.PI) / j)) + e } return g * Math.pow(2, -10 * (h -= 1)) * Math.sin((h * k - i) * (2 * Math.PI) / j) * 0.5 + l + e }, easeInBack: function (e, f, a, i, h, g) { if (g == undefined) { g = 1.70158 } return i * (f /= h) * f * ((g + 1) * f - g) + a }, easeOutBack: function (e, f, a, i, h, g) { if (g == undefined) { g = 1.70158 } return i * ((f = f / h - 1) * f * ((g + 1) * f + g) + 1) + a }, easeInOutBack: function (e, f, a, i, h, g) { if (g == undefined) { g = 1.70158 } if ((f /= h / 2) < 1) { return i / 2 * (f * f * (((g *= (1.525)) + 1) * f - g)) + a } return i / 2 * ((f -= 2) * f * (((g *= (1.525)) + 1) * f + g) + 2) + a }, easeInBounce: function (e, f, a, h, g) { return h - jQuery.easing.easeOutBounce(e, g - f, 0, h, g) + a }, easeOutBounce: function (e, f, a, h, g) { if ((f /= g) < (1 / 2.75)) { return h * (7.5625 * f * f) + a } else { if (f < (2 / 2.75)) { return h * (7.5625 * (f -= (1.5 / 2.75)) * f + 0.75) + a } else { if (f < (2.5 / 2.75)) { return h * (7.5625 * (f -= (2.25 / 2.75)) * f + 0.9375) + a } else { return h * (7.5625 * (f -= (2.625 / 2.75)) * f + 0.984375) + a } } } }, easeInOutBounce: function (e, f, a, h, g) { if (f < g / 2) { return jQuery.easing.easeInBounce(e, f * 2, 0, h, g) * 0.5 + a } return jQuery.easing.easeOutBounce(e, f * 2 - g, 0, h, g) * 0.5 + h * 0.5 + a } });

// transform: A jQuery cssHooks adding cross-browser 2d transform capabilities to jQuery.fn.css() and jQuery.fn.animate()
// Copyright 2011 @louis_remi
// Licensed under the MIT license.
// Source: https://github.com/louisremi/jquery.transform.js

!function(t,e,r,s,n){function a(e){e=e.split(")");var r,n,a,i=t.trim,o=-1,c=e.length-1,p=O?new Float32Array(6):[],l=O?new Float32Array(6):[],f=O?new Float32Array(6):[1,0,0,1,0,0];for(p[0]=p[3]=f[0]=f[3]=1,p[1]=p[2]=p[4]=p[5]=0;++o<c;){switch(r=e[o].split("("),n=i(r[0]),a=r[1],l[0]=l[3]=1,l[1]=l[2]=l[4]=l[5]=0,n){case Y+"X":l[4]=parseInt(a,10);break;case Y+"Y":l[5]=parseInt(a,10);break;case Y:a=a.split(","),l[4]=parseInt(a[0],10),l[5]=parseInt(a[1]||0,10);break;case j:a=u(a),l[0]=s.cos(a),l[1]=s.sin(a),l[2]=-s.sin(a),l[3]=s.cos(a);break;case H+"X":l[0]=+a;break;case H+"Y":l[3]=a;break;case H:a=a.split(","),l[0]=a[0],l[3]=a.length>1?a[1]:a[0];break;case $+"X":l[2]=s.tan(u(a));break;case $+"Y":l[1]=s.tan(u(a));break;case z:a=a.split(","),l[0]=a[0],l[1]=a[1],l[2]=a[2],l[3]=a[3],l[4]=parseInt(a[4],10),l[5]=parseInt(a[5],10)}f[0]=p[0]*l[0]+p[2]*l[1],f[1]=p[1]*l[0]+p[3]*l[1],f[2]=p[0]*l[2]+p[2]*l[3],f[3]=p[1]*l[2]+p[3]*l[3],f[4]=p[0]*l[4]+p[2]*l[5]+p[4],f[5]=p[1]*l[4]+p[3]*l[5]+p[5],p=[f[0],f[1],f[2],f[3],f[4],f[5]]}return f}function i(t){var e,r,n,a=t[0],i=t[1],o=t[2],c=t[3];return a*c-i*o?(e=s.sqrt(a*a+i*i),a/=e,i/=e,n=a*o+i*c,o-=a*n,c-=i*n,r=s.sqrt(o*o+c*c),o/=r,c/=r,n/=r,i*o>a*c&&(a=-a,i=-i,n=-n,e=-e)):e=r=n=0,[[Y,[+t[4],+t[5]]],[j,s.atan2(i,a)],[$+"X",s.atan(n)],[H,[e,r]]]}function o(e,r){var s,n,o,u,m={start:[],end:[]},x=-1;if(("none"==e||p(e))&&(e=""),("none"==r||p(r))&&(r=""),e&&r&&!r.indexOf("matrix")&&g(e).join()==g(r.split(")")[0]).join()&&(m.origin=e,e="",r=r.slice(r.indexOf(")")+1)),e||r){if(e&&r&&l(e)!=l(r))m.start=i(a(e)),m.end=i(a(r));else for(e&&(e=e.split(")"))&&(s=e.length),r&&(r=r.split(")"))&&(s=r.length);++x<s-1;)e[x]&&(n=e[x].split("(")),r[x]&&(o=r[x].split("(")),u=t.trim((n||o)[0]),f(m.start,c(u,n?n[1]:0)),f(m.end,c(u,o?o[1]:0));return m}}function c(t,e){var r,s=+!t.indexOf(H),n=t.replace(/e[XY]/,"e");switch(t){case Y+"Y":case H+"Y":e=[s,e?parseFloat(e):s];break;case Y+"X":case Y:case H+"X":r=1;case H:e=e?(e=e.split(","))&&[parseFloat(e[0]),parseFloat(e.length>1?e[1]:t==H?r||e[0]:s+"")]:[s,s];break;case $+"X":case $+"Y":case j:e=e?u(e):0;break;case z:return i(e?g(e):[1,0,0,1,0,0])}return[[n,e]]}function p(t){return v.test(t)}function l(t){return t.replace(/(?:\([^)]*\))|\s/g,"")}function f(t,e,r){for(;r=e.shift();)t.push(r)}function u(t){return~t.indexOf("deg")?parseInt(t,10)*(2*s.PI/360):~t.indexOf("grad")?parseInt(t,10)*(s.PI/200):parseFloat(t)}function g(t){return t=/([^,]*),([^,]*),([^,]*),([^,]*),([^,p]*)(?:px)?,([^)p]*)(?:px)?/.exec(t),[t[1],t[2],t[3],t[4],t[5],t[6]]}for(var m,x,d,k,h=r.createElement("div"),y=h.style,b="Transform",I=["O"+b,"ms"+b,"Webkit"+b,"Moz"+b],M=I.length,O=("Float32Array"in e),X=/Matrix([^)]*)/,v=/^\s*matrix\(\s*1\s*,\s*0\s*,\s*0\s*,\s*1\s*(?:,\s*0(?:px)?\s*){2}\)\s*$/,w="transform",F="transformOrigin",Y="translate",j="rotate",H="scale",$="skew",z="matrix";M--;)I[M]in y&&(t.support[w]=m=I[M],t.support[F]=m+"Origin");m||(t.support.matrixFilter=x=""===y.filter),t.cssNumber[w]=t.cssNumber[F]=!0,m&&m!=w?(t.cssProps[w]=m,t.cssProps[F]=m+"Origin",m=="Moz"+b?d={get:function(e,r){return r?t.css(e,m).split("px").join(""):e.style[m]},set:function(t,e){t.style[m]=/matrix\([^)p]*\)/.test(e)?e.replace(/matrix((?:[^,]*,){4})([^,]*),([^)]*)/,z+"$1$2px,$3px"):e}}:/^1\.[0-5](?:\.|$)/.test(t.fn.jquery)&&(d={get:function(e,r){return r?t.css(e,m.replace(/^ms/,"Ms")):e.style[m]}})):x&&(d={get:function(e,r,s){var a,i,o=r&&e.currentStyle?e.currentStyle:e.style;return o&&X.test(o.filter)?(a=RegExp.$1.split(","),a=[a[0].split("=")[1],a[2].split("=")[1],a[1].split("=")[1],a[3].split("=")[1]]):a=[1,0,0,1],t.cssHooks[F]?(i=t._data(e,"transformTranslate",n),a[4]=i?i[0]:0,a[5]=i?i[1]:0):(a[4]=o?parseInt(o.left,10)||0:0,a[5]=o?parseInt(o.top,10)||0:0),s?a:z+"("+a+")"},set:function(e,r,s){var n,i,o,c,p=e.style;s||(p.zoom=1),r=a(r),i=["Matrix(M11="+r[0],"M12="+r[2],"M21="+r[1],"M22="+r[3],"SizingMethod='auto expand'"].join(),o=(n=e.currentStyle)&&n.filter||p.filter||"",p.filter=X.test(o)?o.replace(X,i):o+" progid:DXImageTransform.Microsoft."+i+")",t.cssHooks[F]?t.cssHooks[F].set(e,r):((c=t.transform.centerOrigin)&&(p["margin"==c?"marginLeft":"left"]=-(e.offsetWidth/2)+e.clientWidth/2+"px",p["margin"==c?"marginTop":"top"]=-(e.offsetHeight/2)+e.clientHeight/2+"px"),p.left=r[4]+"px",p.top=r[5]+"px")}}),d&&(t.cssHooks[w]=d),k=d&&d.get||t.css,t.fx.step.transform=function(e){var r,n,a,i,c=e.elem,p=e.start,l=e.end,f=e.pos,u="",g=1e5;for(p&&"string"!=typeof p||(p||(p=k(c,m)),x&&(c.style.zoom=1),l=l.split("+=").join(p),t.extend(e,o(p,l)),p=e.start,l=e.end),r=p.length;r--;)switch(n=p[r],a=l[r],i=0,n[0]){case Y:i="px";case H:i||(i=""),u=n[0]+"("+s.round((n[1][0]+(a[1][0]-n[1][0])*f)*g)/g+i+","+s.round((n[1][1]+(a[1][1]-n[1][1])*f)*g)/g+i+")"+u;break;case $+"X":case $+"Y":case j:u=n[0]+"("+s.round((n[1]+(a[1]-n[1])*f)*g)/g+"rad)"+u}e.origin&&(u=e.origin+u),d&&d.set?d.set(c,u,1):c.style[m]=u},t.transform={centerOrigin:"margin"}}(jQuery,window,document,Math);


// jQuery.appear
// Copyright (c) 2009 Michael Hixson
// Copyright (c) 2012-2014 Alexander Brovikov
// Licensed under the MIT license (http://www.opensource.org/licenses/mit-license.php)
// Source: https://github.com/bas2k/jquery.appear/

!function(a){a.fn.appear=function(t,e){var i=a.extend({data:void 0,one:!0,accX:0,accY:0},e);return this.each(function(){var e=a(this);if(e.appeared=!1,!t)return void e.trigger("appear",i.data);var n=a(window),r=function(){if(!e.is(":visible"))return void(e.appeared=!1);var a=n.scrollLeft(),t=n.scrollTop(),r=e.offset(),p=r.left,o=r.top,c=i.accX,s=i.accY,d=e.height(),f=n.height(),h=e.width(),l=n.width();o+d+s>=t&&t+f+s>=o&&p+h+c>=a&&a+l+c>=p?e.appeared||e.trigger("appear",i.data):e.appeared=!1},p=function(){if(e.appeared=!0,i.one){n.unbind("scroll",r);var p=a.inArray(r,a.fn.appear.checks);p>=0&&a.fn.appear.checks.splice(p,1)}t.apply(this,arguments)};i.one?e.one("appear",i.data,p):e.bind("appear",i.data,p),n.scroll(r),a.fn.appear.checks.push(r),r()})},a.extend(a.fn.appear,{checks:[],timeout:null,checkAll:function(){var t=a.fn.appear.checks.length;if(t>0)for(;t--;)a.fn.appear.checks[t]()},run:function(){a.fn.appear.timeout&&clearTimeout(a.fn.appear.timeout),a.fn.appear.timeout=setTimeout(a.fn.appear.checkAll,20)}}),a.each(["append","prepend","after","before","attr","removeAttr","addClass","removeClass","toggleClass","remove","css","show","hide"],function(t,e){var i=a.fn[e];i&&(a.fn[e]=function(){var t=i.apply(this,arguments);return a.fn.appear.run(),t})})}(jQuery),jQuery(document).ready(function(a){a(".img-with-animation").each(function(){a(this).appear(function(){"fade-in-from-left"==a(this).attr("data-animation")?a(this).delay(a(this).attr("data-delay")).animate({opacity:1,left:"0px"},800,"easeOutSine"):"fade-in-from-right"==a(this).attr("data-animation")?a(this).delay(a(this).attr("data-delay")).animate({opacity:1,right:"0px"},800,"easeOutSine"):"fade-in-from-bottom"==a(this).attr("data-animation")?a(this).delay(a(this).attr("data-delay")).animate({opacity:1,bottom:"0px"},800,"easeOutSine"):"fade-in"==a(this).attr("data-animation")?a(this).delay(a(this).attr("data-delay")).animate({opacity:1},800,"easeOutSine"):"grow-in"==a(this).attr("data-animation")&&a(this).delay(a(this).attr("data-delay")).animate({transform:"scale(1,1)",opacity:1},800,"easeOutSine")},{accX:0,accY:-105},"easeInCubic")})});

// Floating row

jQuery(document).ready(function() {
    jQuery(window).scroll(function() {
        var stopScrollHeight = 300;
        var currentScrollLevel = jQuery(window).scrollTop();
        if ( currentScrollLevel >= stopScrollHeight ) {
            jQuery(".floating").addClass("fix_menu topmenushow");
        }else{
            jQuery(".floating").removeClass("fix_menu topmenushow");
        }
    });
});

// Off-canvas menu

(function (jQuery) {
    var pushy = jQuery(".container_mainmenu"), //menu css class
        body = jQuery("body"),
        container = jQuery(".sparky_wrapper"), //container css class
        push = jQuery(".push"), //css class to add pushy capability
        pushyLeft = "offcanvas-right", //css class for left menu position
        pushyOpenLeft = "offcanvas-open-left", //css class when menu is open (left position)
        pushyOpenRight = "offcanvas-open-right", //css class when menu is open (right position)
        siteOverlay = jQuery(".offcanvas-menu-overlay"), //site overlay
        menuBtn = jQuery(".offcanvas-btn"), //css classes to toggle the menu
        menuSpeed = 200, //jQuery fallback menu speed
        menuWidth = pushy.width() + "px"; //jQuery fallback menu width

    function togglePushy(){
        //add class to body based on menu position
        body.toggleClass("offcanvas-open-right");
    }

    function openPushyFallback(){       

        //animate menu position based on CSS class
        if( pushy.hasClass(pushyLeft) ){
            body.addClass(pushyOpenLeft);
            pushy.animate({left: "0px"}, menuSpeed);
            container.animate({left: menuWidth}, menuSpeed);
            //css class to add pushy capability
            push.animate({left: menuWidth}, menuSpeed);
        }else{
            body.addClass(pushyOpenRight);
            pushy.animate({right: "0px"}, menuSpeed);
            container.animate({right: menuWidth}, menuSpeed);
            push.animate({right: menuWidth}, menuSpeed);
        }

    }

    function closePushyFallback(){

        //animate menu position based on CSS class
        if( pushy.hasClass(pushyLeft) ){
            body.removeClass(pushyOpenLeft);
            pushy.animate({left: "-" + menuWidth}, menuSpeed);
            container.animate({left: "0px"}, menuSpeed);
            //css class to add pushy capability
            push.animate({left: "0px"}, menuSpeed);
        }else{
            body.removeClass(pushyOpenRight);
            pushy.animate({right: "-" + menuWidth}, menuSpeed);
            container.animate({right: "0px"}, menuSpeed);
            push.animate({right: "0px"}, menuSpeed);
        }

    }    

    //checks if 3d transforms are supported removing the modernizr dependency
    var cssTransforms3d = (function csstransforms3d(){
        var el = document.createElement("p"),
        supported = false,
        transforms = {
            "webkitTransform":"-webkit-transform",
            "OTransform":"-o-transform",
            "msTransform":"-ms-transform",
            "MozTransform":"-moz-transform",
            "transform":"transform"
        };

        // Add it to the body to get the computed style
        document.body.insertBefore(el, null);

        for(var t in transforms){
            if( el.style[t] !== undefined ){
                el.style[t] = "translate3d(1px,1px,1px)";
                supported = window.getComputedStyle(el).getPropertyValue(transforms[t]);
            }
        }

        document.body.removeChild(el);

        return (supported !== undefined && supported.length > 0 && supported !== "none");
    })();

    if(cssTransforms3d){
        //make menu visible
        pushy.css({"visibility": "visible"});

        //toggle menu
        menuBtn.on("click", function(){
            togglePushy();
        });
        //close menu when clicking site overlay
        siteOverlay.on("click", function(){
            togglePushy();
        });
    }else{
        //add css class to body
        body.addClass("no-csstransforms3d");

        //hide menu by default
        if( pushy.hasClass(pushyLeft) ){
            pushy.css({left: "-" + menuWidth});
        }else{
            pushy.css({right: "-" + menuWidth});
        }

        //make menu visible
        pushy.css({"visibility": "visible"}); 
        //fixes IE scrollbar issue
        container.css({"overflow-x": "hidden"});

        //keep track of menu state (open/close)
        var opened = false;

        //toggle menu
        menuBtn.on("click", function(){
            if (opened) {
                closePushyFallback();
                opened = false;
            } else {
                openPushyFallback();
                opened = true;
            }
        });

        //close menu when clicking site overlay
        siteOverlay.on("click", function(){
            if (opened) {
                closePushyFallback();
                opened = false;
            } else {
                openPushyFallback();
                opened = true;
            }
        });
    }

    var defaults = {  
        speed: 300,  
        effect: "slideToggle"
    };  
    var options = jQuery.extend(defaults, options);

    jQuery(".mnu_mainmenu ul").hide();

    jQuery(".mnu_mainmenu li a[href='#']").toggle(function(){
        jQuery(this).parent().find("ul:first:not(:visible)").stop(true,true)[options.effect](options.speed);
    },function(){
        jQuery(this).parent().css("position", "relative").find("ul:first:visible").stop(true,true)[options.effect](options.speed);
    });

    jQuery("nav ul.offcanvas").find("li > ul").prev().addClass("firstClick"); 

    jQuery(document).on("click",".mnu_mainmenu .firstClick",function(e){    

        e.preventDefault(); 

        var href = jQuery(this).attr("href");
        var target = jQuery(this).attr("target");
        var link = jQuery(this);
        jQuery(this).attr("href","#");
        jQuery(this).attr("target","");
        
        jQuery(this).removeClass("firstClick");
        
        setTimeout(function(){
            link.attr("href",href);
            link.attr("target",target);
        },200);

        jQuery(this).parent().find("ul:first:not(:visible)").stop(true,true)[options.effect](options.speed);
    });

}(jQuery));

jQuery(document).ready(function() {
    jQuery("nav.offcanvas-left, nav.offcanvas-right").insertAfter(".sparky_wrapper");
    jQuery(".offcanvas-btn").siblings("h3").prependTo("nav.container_mainmenu");
});


// Equal Width Cells

var number_of_cells4 = jQuery('.sparky_row4 .sparky_cell').length;
var cell_width4 = 100 / number_of_cells4;
jQuery('.sparky_row4 .sparky_cell').css('width', cell_width4 + '%');

var number_of_cells5 = jQuery('.sparky_row5 .sparky_cell').length;
var cell_width5 = 100 / number_of_cells5;
jQuery('.sparky_row5 .sparky_cell').css('width', cell_width5 + '%');

// Custom user code
