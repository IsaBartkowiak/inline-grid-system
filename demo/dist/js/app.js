"use strict";function offsetBottom(e){return e.offsetTop+e.offsetHeight}function offsetCenter(e){return e.offsetTop+e.offsetHeight/2}function isElementInView(e){var t=e.getBoundingClientRect();return console.log(document.body.scrollTop),t.top<=breakpointA&&t.top>=breakpointB}function getCurrent(){var e=document.body.getBoundingClientRect();console.log(e.top)}(new WOW).init(),jQuery.easing.jswing=jQuery.easing.swing,jQuery.extend(jQuery.easing,{def:"easeOutQuad",swing:function(e,t,n,a,o){return jQuery.easing[jQuery.easing.def](e,t,n,a,o)},easeInQuad:function(e,t,n,a,o){return a*(t/=o)*t+n},easeOutQuad:function(e,t,n,a,o){return-a*(t/=o)*(t-2)+n},easeInOutQuad:function(e,t,n,a,o){return(t/=o/2)<1?a/2*t*t+n:-a/2*(--t*(t-2)-1)+n},easeInCubic:function(e,t,n,a,o){return a*(t/=o)*t*t+n},easeOutCubic:function(e,t,n,a,o){return a*((t=t/o-1)*t*t+1)+n},easeInOutCubic:function(e,t,n,a,o){return(t/=o/2)<1?a/2*t*t*t+n:a/2*((t-=2)*t*t+2)+n},easeInQuart:function(e,t,n,a,o){return a*(t/=o)*t*t*t+n},easeOutQuart:function(e,t,n,a,o){return-a*((t=t/o-1)*t*t*t-1)+n},easeInOutQuart:function(e,t,n,a,o){return(t/=o/2)<1?a/2*t*t*t*t+n:-a/2*((t-=2)*t*t*t-2)+n},easeInQuint:function(e,t,n,a,o){return a*(t/=o)*t*t*t*t+n},easeOutQuint:function(e,t,n,a,o){return a*((t=t/o-1)*t*t*t*t+1)+n},easeInOutQuint:function(e,t,n,a,o){return(t/=o/2)<1?a/2*t*t*t*t*t+n:a/2*((t-=2)*t*t*t*t+2)+n},easeInSine:function(e,t,n,a,o){return-a*Math.cos(t/o*(Math.PI/2))+a+n},easeOutSine:function(e,t,n,a,o){return a*Math.sin(t/o*(Math.PI/2))+n},easeInOutSine:function(e,t,n,a,o){return-a/2*(Math.cos(Math.PI*t/o)-1)+n},easeInExpo:function(e,t,n,a,o){return 0==t?n:a*Math.pow(2,10*(t/o-1))+n},easeOutExpo:function(e,t,n,a,o){return t==o?n+a:a*(-Math.pow(2,-10*t/o)+1)+n},easeInOutExpo:function(e,t,n,a,o){return 0==t?n:t==o?n+a:(t/=o/2)<1?a/2*Math.pow(2,10*(t-1))+n:a/2*(-Math.pow(2,-10*--t)+2)+n},easeInCirc:function(e,t,n,a,o){return-a*(Math.sqrt(1-(t/=o)*t)-1)+n},easeOutCirc:function(e,t,n,a,o){return a*Math.sqrt(1-(t=t/o-1)*t)+n},easeInOutCirc:function(e,t,n,a,o){return(t/=o/2)<1?-a/2*(Math.sqrt(1-t*t)-1)+n:a/2*(Math.sqrt(1-(t-=2)*t)+1)+n},easeInElastic:function(e,t,n,a,o){var r=1.70158,u=0,s=a;if(0==t)return n;if(1==(t/=o))return n+a;if(u||(u=.3*o),s<Math.abs(a)){s=a;var r=u/4}else var r=u/(2*Math.PI)*Math.asin(a/s);return-(s*Math.pow(2,10*(t-=1))*Math.sin((t*o-r)*(2*Math.PI)/u))+n},easeOutElastic:function(e,t,n,a,o){var r=1.70158,u=0,s=a;if(0==t)return n;if(1==(t/=o))return n+a;if(u||(u=.3*o),s<Math.abs(a)){s=a;var r=u/4}else var r=u/(2*Math.PI)*Math.asin(a/s);return s*Math.pow(2,-10*t)*Math.sin((t*o-r)*(2*Math.PI)/u)+a+n},easeInOutElastic:function(e,t,n,a,o){var r=1.70158,u=0,s=a;if(0==t)return n;if(2==(t/=o/2))return n+a;if(u||(u=o*(.3*1.5)),s<Math.abs(a)){s=a;var r=u/4}else var r=u/(2*Math.PI)*Math.asin(a/s);return 1>t?-.5*(s*Math.pow(2,10*(t-=1))*Math.sin((t*o-r)*(2*Math.PI)/u))+n:s*Math.pow(2,-10*(t-=1))*Math.sin((t*o-r)*(2*Math.PI)/u)*.5+a+n},easeInBack:function(e,t,n,a,o,r){return void 0==r&&(r=1.70158),a*(t/=o)*t*((r+1)*t-r)+n},easeOutBack:function(e,t,n,a,o,r){return void 0==r&&(r=1.70158),a*((t=t/o-1)*t*((r+1)*t+r)+1)+n},easeInOutBack:function(e,t,n,a,o,r){return void 0==r&&(r=1.70158),(t/=o/2)<1?a/2*(t*t*(((r*=1.525)+1)*t-r))+n:a/2*((t-=2)*t*(((r*=1.525)+1)*t+r)+2)+n},easeInBounce:function(e,t,n,a,o){return a-jQuery.easing.easeOutBounce(e,o-t,0,a,o)+n},easeOutBounce:function(e,t,n,a,o){return(t/=o)<1/2.75?a*(7.5625*t*t)+n:2/2.75>t?a*(7.5625*(t-=1.5/2.75)*t+.75)+n:2.5/2.75>t?a*(7.5625*(t-=2.25/2.75)*t+.9375)+n:a*(7.5625*(t-=2.625/2.75)*t+.984375)+n},easeInOutBounce:function(e,t,n,a,o){return o/2>t?.5*jQuery.easing.easeInBounce(e,2*t,0,a,o)+n:.5*jQuery.easing.easeOutBounce(e,2*t-o,0,a,o)+.5*a+n}}),function(e){e.srSmoothscroll=function(t){var n,a=e.extend({step:55,speed:400,ease:"swing",target:e("body"),container:e(window)},t||{}),o=a.container,r=0,u=a.step,s=o.height(),i=!1;n="body"==a.target.selector?-1!==navigator.userAgent.indexOf("AppleWebKit")?a.target:e("html"):o,a.target.mousewheel(function(e,t){return i=!0,r=0>t?r+s>=a.target.outerHeight(!0)?r:r+=u:0>=r?0:r-=u,n.stop().animate({scrollTop:r},a.speed,a.ease,function(){i=!1}),!1}),o.on("resize",function(e){s=o.height()}).on("scroll",function(e){i||(r=o.scrollTop())})}}(jQuery),$(".code-button").click(function(e){e.preventDefault(),$(this).next().hasClass("_show")?($(this).next().removeClass("_show"),$("body").removeClass("_active")):($(this).next().addClass("_show"),$("body").addClass("_active"))}),$(".tab-close").click(function(e){e.preventDefault(),$(".tab").hasClass("_show")&&($(".tab").removeClass("_show"),$("body").removeClass("_active"))}),$(document).mouseup(function(e){var t=$(".tab");e.target.id!=t&&$("body").hasClass("_active")&&0===t.has(e.target).length&&(console.log("ihghklhlkhl"),t.removeClass("_show"),$("body").removeClass("_active"))}),$("body._active").on({mousewheel:function(e){e.target!=$(".tab")&&(e.preventDefault(),e.stopPropagation())}}),$(".tab-button").click(function(e){e.preventDefault(),$(".tab-button").removeClass("_active"),$(this).addClass("_active"),$(".tab-content").removeClass("_active");var t="."+$(this).attr("id");$(this).closest("div").find(t).addClass("_active")});var el=document.querySelector(".header-cover"),breakpointA=document.body.scrollTop,breakpointB=-el.offsetHeight;window.onscroll=function(e){isElementInView(el)&&(el.style.left=getCurrent()+"px")};
"use strict";(new WOW).init();
"use strict";!function(e){function t(t){var n=t||window.event,i=[].slice.call(arguments,1),s=0,l=0,o=0;return t=e.event.fix(n),t.type="mousewheel",n.wheelDelta&&(s=n.wheelDelta/120),n.detail&&(s=-n.detail/3),o=s,void 0!==n.axis&&n.axis===n.HORIZONTAL_AXIS&&(o=0,l=-1*s),void 0!==n.wheelDeltaY&&(o=n.wheelDeltaY/120),void 0!==n.wheelDeltaX&&(l=-1*n.wheelDeltaX/120),i.unshift(t,s,l,o),(e.event.dispatch||e.event.handle).apply(this,i)}var n=["DOMMouseScroll","mousewheel"];if(e.event.fixHooks)for(var i=n.length;i;)e.event.fixHooks[n[--i]]=e.event.mouseHooks;e.event.special.mousewheel={setup:function(){if(this.addEventListener)for(var e=n.length;e;)this.addEventListener(n[--e],t,!1);else this.onmousewheel=t},teardown:function(){if(this.removeEventListener)for(var e=n.length;e;)this.removeEventListener(n[--e],t,!1);else this.onmousewheel=null}},e.fn.extend({mousewheel:function(e){return e?this.bind("mousewheel",e):this.trigger("mousewheel")},unmousewheel:function(e){return this.unbind("mousewheel",e)}})}(jQuery);
"use strict";
"use strict";
//# sourceMappingURL=app.js.map
