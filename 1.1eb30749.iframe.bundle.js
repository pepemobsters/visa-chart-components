(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{"./node_modules/core-js/modules/es.typed-array.uint8-array.js":function(module,exports,__webpack_require__){__webpack_require__("./node_modules/core-js/internals/typed-array-constructor.js")("Uint8",(function(init){return function Uint8Array(data,byteOffset,length){return init(this,data,byteOffset,length)}}))},"./packages/charts/dist/esm-es5/index-6877a56a.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"a",(function(){return color})),__webpack_require__.d(__webpack_exports__,"b",(function(){return interpolateRgb})),__webpack_require__.d(__webpack_exports__,"c",(function(){return constant})),__webpack_require__.d(__webpack_exports__,"d",(function(){return interpolateString})),__webpack_require__.d(__webpack_exports__,"i",(function(){return interpolateNumber})),__webpack_require__.d(__webpack_exports__,"v",(function(){return v4}));__webpack_require__("./node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.description.js"),__webpack_require__("./node_modules/core-js/modules/es.object.to-string.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.string.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.array.iterator.js"),__webpack_require__("./node_modules/core-js/modules/web.dom-collections.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.typed-array.uint8-array.js"),__webpack_require__("./node_modules/core-js/modules/es.typed-array.copy-within.js"),__webpack_require__("./node_modules/core-js/modules/es.typed-array.every.js"),__webpack_require__("./node_modules/core-js/modules/es.typed-array.fill.js"),__webpack_require__("./node_modules/core-js/modules/es.typed-array.filter.js"),__webpack_require__("./node_modules/core-js/modules/es.typed-array.find.js"),__webpack_require__("./node_modules/core-js/modules/es.typed-array.find-index.js"),__webpack_require__("./node_modules/core-js/modules/es.typed-array.for-each.js"),__webpack_require__("./node_modules/core-js/modules/es.typed-array.includes.js"),__webpack_require__("./node_modules/core-js/modules/es.typed-array.index-of.js"),__webpack_require__("./node_modules/core-js/modules/es.typed-array.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.typed-array.join.js"),__webpack_require__("./node_modules/core-js/modules/es.typed-array.last-index-of.js"),__webpack_require__("./node_modules/core-js/modules/es.typed-array.map.js"),__webpack_require__("./node_modules/core-js/modules/es.typed-array.reduce.js"),__webpack_require__("./node_modules/core-js/modules/es.typed-array.reduce-right.js"),__webpack_require__("./node_modules/core-js/modules/es.typed-array.reverse.js"),__webpack_require__("./node_modules/core-js/modules/es.typed-array.set.js"),__webpack_require__("./node_modules/core-js/modules/es.typed-array.slice.js"),__webpack_require__("./node_modules/core-js/modules/es.typed-array.some.js"),__webpack_require__("./node_modules/core-js/modules/es.typed-array.sort.js"),__webpack_require__("./node_modules/core-js/modules/es.typed-array.subarray.js"),__webpack_require__("./node_modules/core-js/modules/es.typed-array.to-locale-string.js"),__webpack_require__("./node_modules/core-js/modules/es.typed-array.to-string.js"),__webpack_require__("./node_modules/core-js/modules/es.array-buffer.slice.js"),__webpack_require__("./node_modules/core-js/modules/es.function.bind.js"),__webpack_require__("./node_modules/core-js/modules/es.regexp.to-string.js"),__webpack_require__("./node_modules/core-js/modules/es.date.to-string.js"),__webpack_require__("./node_modules/core-js/modules/es.array.map.js"),__webpack_require__("./node_modules/core-js/modules/es.string.split.js"),__webpack_require__("./node_modules/core-js/modules/es.regexp.exec.js"),__webpack_require__("./node_modules/core-js/modules/es.string.trim.js"),__webpack_require__("./node_modules/core-js/modules/es.array.index-of.js"),__webpack_require__("./node_modules/core-js/modules/es.array.slice.js"),__webpack_require__("./node_modules/core-js/modules/es.function.name.js"),__webpack_require__("./node_modules/core-js/modules/es.array.concat.js"),__webpack_require__("./node_modules/core-js/modules/web.timers.js"),__webpack_require__("./node_modules/core-js/modules/es.object.create.js"),__webpack_require__("./node_modules/core-js/modules/es.regexp.constructor.js"),__webpack_require__("./node_modules/core-js/modules/es.object.assign.js"),__webpack_require__("./node_modules/core-js/modules/es.parse-int.js"),__webpack_require__("./node_modules/core-js/modules/es.array.join.js"),__webpack_require__("./node_modules/core-js/modules/es.array.splice.js"),__webpack_require__("./node_modules/core-js/modules/es.array.every.js");var getRandomValues,_visa_charts_utils_umd_92c8af99_js__WEBPACK_IMPORTED_MODULE_51__=__webpack_require__("./packages/charts/dist/esm-es5/visa-charts-utils.umd-92c8af99.js");function _typeof(obj){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}var rnds8=new Uint8Array(16);function rng(){if(!getRandomValues&&!(getRandomValues="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto)))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return getRandomValues(rnds8)}var REGEX=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;for(var byteToHex=[],i=0;i<256;++i)byteToHex.push((i+256).toString(16).substr(1));function stringify(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=(byteToHex[t[e+0]]+byteToHex[t[e+1]]+byteToHex[t[e+2]]+byteToHex[t[e+3]]+"-"+byteToHex[t[e+4]]+byteToHex[t[e+5]]+"-"+byteToHex[t[e+6]]+byteToHex[t[e+7]]+"-"+byteToHex[t[e+8]]+byteToHex[t[e+9]]+"-"+byteToHex[t[e+10]]+byteToHex[t[e+11]]+byteToHex[t[e+12]]+byteToHex[t[e+13]]+byteToHex[t[e+14]]+byteToHex[t[e+15]]).toLowerCase();if(!function validate(t){return"string"==typeof t&&REGEX.test(t)}(n))throw TypeError("Stringified UUID is invalid");return n}function v4(t,e,n){var r=(t=t||{}).random||(t.rng||rng)();if(r[6]=15&r[6]|64,r[8]=63&r[8]|128,e){n=n||0;for(var i=0;i<16;++i)e[n+i]=r[i];return e}return stringify(r)}var noop={value:function value(){}};function dispatch(){for(var r,t=0,e=arguments.length,n={};t<e;++t){if(!(r=arguments[t]+"")||r in n||/[\s.]/.test(r))throw new Error("illegal type: "+r);n[r]=[]}return new Dispatch(n)}function Dispatch(t){this._=t}function get$1(t,e){for(var i,n=0,r=t.length;n<r;++n)if((i=t[n]).name===e)return i.value}function set$1(t,e,n){for(var r=0,i=t.length;r<i;++r)if(t[r].name===e){t[r]=noop,t=t.slice(0,r).concat(t.slice(r+1));break}return null!=n&&t.push({name:e,value:n}),t}Dispatch.prototype=dispatch.prototype={constructor:Dispatch,on:function on(t,e){var i,n=this._,r=function parseTypenames(t,e){return t.trim().split(/^|\s+/).map((function(t){var n="",r=t.indexOf(".");if(r>=0&&(n=t.slice(r+1),t=t.slice(0,r)),t&&!e.hasOwnProperty(t))throw new Error("unknown type: "+t);return{type:t,name:n}}))}(t+"",n),a=-1,o=r.length;if(!(arguments.length<2)){if(null!=e&&"function"!=typeof e)throw new Error("invalid callback: "+e);for(;++a<o;)if(i=(t=r[a]).type)n[i]=set$1(n[i],t.name,e);else if(null==e)for(i in n)n[i]=set$1(n[i],t.name,null);return this}for(;++a<o;)if((i=(t=r[a]).type)&&(i=get$1(n[i],t.name)))return i},copy:function copy(){var t={},e=this._;for(var n in e)t[n]=e[n].slice();return new Dispatch(t)},call:function call(t,e){if((i=arguments.length-2)>0)for(var i,a,n=new Array(i),r=0;r<i;++r)n[r]=arguments[r+2];if(!this._.hasOwnProperty(t))throw new Error("unknown type: "+t);for(r=0,i=(a=this._[t]).length;r<i;++r)a[r].value.apply(e,n)},apply:function apply(t,e,n){if(!this._.hasOwnProperty(t))throw new Error("unknown type: "+t);for(var r=this._[t],i=0,a=r.length;i<a;++i)r[i].value.apply(e,n)}};var taskHead,taskTail,frame=0,timeout$1=0,interval=0,pokeDelay=1e3,clockLast=0,clockNow=0,clockSkew=0,clock="object"===("undefined"==typeof performance?"undefined":_typeof(performance))&&performance.now?performance:Date,setFrame="object"===("undefined"==typeof window?"undefined":_typeof(window))&&window.requestAnimationFrame?window.requestAnimationFrame.bind(window):function(t){setTimeout(t,17)};function now(){return clockNow||(setFrame(clearNow),clockNow=clock.now()+clockSkew)}function clearNow(){clockNow=0}function Timer(){this._call=this._time=this._next=null}function timer(t,e,n){var r=new Timer;return r.restart(t,e,n),r}function wake(){clockNow=(clockLast=clock.now())+clockSkew,frame=timeout$1=0;try{!function timerFlush(){now(),++frame;for(var e,t=taskHead;t;)(e=clockNow-t._time)>=0&&t._call.call(null,e),t=t._next;--frame}()}finally{frame=0,function nap(){var t,n,e=taskHead,r=1/0;for(;e;)e._call?(r>e._time&&(r=e._time),t=e,e=e._next):(n=e._next,e._next=null,e=t?t._next=n:taskHead=n);taskTail=t,sleep(r)}(),clockNow=0}}function poke(){var t=clock.now(),e=t-clockLast;e>pokeDelay&&(clockSkew-=e,clockLast=t)}function sleep(t){frame||(timeout$1&&(timeout$1=clearTimeout(timeout$1)),t-clockNow>24?(t<1/0&&(timeout$1=setTimeout(wake,t-clock.now()-clockSkew)),interval&&(interval=clearInterval(interval))):(interval||(clockLast=clock.now(),interval=setInterval(poke,pokeDelay)),frame=1,setFrame(wake)))}function timeout(t,e,n){var r=new Timer;return e=null==e?0:+e,r.restart((function(n){r.stop(),t(n+e)}),e,n),r}Timer.prototype=timer.prototype={constructor:Timer,restart:function restart(t,e,n){if("function"!=typeof t)throw new TypeError("callback is not a function");n=(null==n?now():+n)+(null==e?0:+e),this._next||taskTail===this||(taskTail?taskTail._next=this:taskHead=this,taskTail=this),this._call=t,this._time=n,sleep()},stop:function stop(){this._call&&(this._call=null,this._time=1/0,sleep())}};var emptyOn=dispatch("start","end","interrupt"),emptyTween=[],CREATED=0,SCHEDULED=1,STARTING=2,STARTED=3,RUNNING=4,ENDING=5,ENDED=6;function schedule(t,e,n,r,i,a){var o=t.__transition;if(o){if(n in o)return}else t.__transition={};!function create(t,e,n){var i,r=t.__transition;function a(t){n.state=SCHEDULED,n.timer.restart(o,n.delay,n.time),n.delay<=t&&o(t-n.delay)}function o(a){var u,c,f,h;if(n.state!==SCHEDULED)return l();for(u in r)if((h=r[u]).name===n.name){if(h.state===STARTED)return timeout(o);h.state===RUNNING?(h.state=ENDED,h.timer.stop(),h.on.call("interrupt",t,t.__data__,h.index,h.group),delete r[u]):+u<e&&(h.state=ENDED,h.timer.stop(),delete r[u])}if(timeout((function(){n.state===STARTED&&(n.state=RUNNING,n.timer.restart(s,n.delay,n.time),s(a))})),n.state=STARTING,n.on.call("start",t,t.__data__,n.index,n.group),n.state===STARTING){for(n.state=STARTED,i=new Array(f=n.tween.length),u=0,c=-1;u<f;++u)(h=n.tween[u].value.call(t,t.__data__,n.index,n.group))&&(i[++c]=h);i.length=c+1}}function s(e){for(var r=e<n.duration?n.ease.call(null,e/n.duration):(n.timer.restart(l),n.state=ENDING,1),a=-1,o=i.length;++a<o;)i[a].call(null,r);n.state===ENDING&&(n.on.call("end",t,t.__data__,n.index,n.group),l())}function l(){for(var i in n.state=ENDED,n.timer.stop(),delete r[e],r)return;delete t.__transition}r[e]=n,n.timer=timer(a,0,n.time)}(t,n,{name:e,index:r,group:i,on:emptyOn,tween:emptyTween,time:a.time,delay:a.delay,duration:a.duration,ease:a.ease,timer:null,state:CREATED})}function init(t,e){var n=get(t,e);if(n.state>CREATED)throw new Error("too late; already scheduled");return n}function set(t,e){var n=get(t,e);if(n.state>STARTING)throw new Error("too late; already started");return n}function get(t,e){var n=t.__transition;if(!n||!(n=n[e]))throw new Error("transition not found");return n}function define(t,e,n){t.prototype=e.prototype=n,n.constructor=t}function extend(t,e){var n=Object.create(t.prototype);for(var r in e)n[r]=e[r];return n}function Color(){}var _brighter=1/.7,reI="\\s*([+-]?\\d+)\\s*",reN="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*",reP="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*",reHex=/^#([0-9a-f]{3,8})$/,reRgbInteger=new RegExp("^rgb\\(".concat(reI,",").concat(reI,",").concat(reI,"\\)$")),reRgbPercent=new RegExp("^rgb\\(".concat(reP,",").concat(reP,",").concat(reP,"\\)$")),reRgbaInteger=new RegExp("^rgba\\(".concat(reI,",").concat(reI,",").concat(reI,",").concat(reN,"\\)$")),reRgbaPercent=new RegExp("^rgba\\(".concat(reP,",").concat(reP,",").concat(reP,",").concat(reN,"\\)$")),reHslPercent=new RegExp("^hsl\\(".concat(reN,",").concat(reP,",").concat(reP,"\\)$")),reHslaPercent=new RegExp("^hsla\\(".concat(reN,",").concat(reP,",").concat(reP,",").concat(reN,"\\)$")),named={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074};function color_formatHex(){return this.rgb().formatHex()}function color_formatRgb(){return this.rgb().formatRgb()}function color(t){var e,n;return t=(t+"").trim().toLowerCase(),(e=reHex.exec(t))?(n=e[1].length,e=parseInt(e[1],16),6===n?rgbn(e):3===n?new Rgb(e>>8&15|e>>4&240,e>>4&15|240&e,(15&e)<<4|15&e,1):8===n?rgba(e>>24&255,e>>16&255,e>>8&255,(255&e)/255):4===n?rgba(e>>12&15|e>>8&240,e>>8&15|e>>4&240,e>>4&15|240&e,((15&e)<<4|15&e)/255):null):(e=reRgbInteger.exec(t))?new Rgb(e[1],e[2],e[3],1):(e=reRgbPercent.exec(t))?new Rgb(255*e[1]/100,255*e[2]/100,255*e[3]/100,1):(e=reRgbaInteger.exec(t))?rgba(e[1],e[2],e[3],e[4]):(e=reRgbaPercent.exec(t))?rgba(255*e[1]/100,255*e[2]/100,255*e[3]/100,e[4]):(e=reHslPercent.exec(t))?hsla(e[1],e[2]/100,e[3]/100,1):(e=reHslaPercent.exec(t))?hsla(e[1],e[2]/100,e[3]/100,e[4]):named.hasOwnProperty(t)?rgbn(named[t]):"transparent"===t?new Rgb(NaN,NaN,NaN,0):null}function rgbn(t){return new Rgb(t>>16&255,t>>8&255,255&t,1)}function rgba(t,e,n,r){return r<=0&&(t=e=n=NaN),new Rgb(t,e,n,r)}function rgb(t,e,n,r){return 1===arguments.length?function rgbConvert(t){return t instanceof Color||(t=color(t)),t?new Rgb((t=t.rgb()).r,t.g,t.b,t.opacity):new Rgb}(t):new Rgb(t,e,n,null==r?1:r)}function Rgb(t,e,n,r){this.r=+t,this.g=+e,this.b=+n,this.opacity=+r}function rgb_formatHex(){return"#".concat(hex(this.r)).concat(hex(this.g)).concat(hex(this.b))}function rgb_formatRgb(){var t=clampa(this.opacity);return"".concat(1===t?"rgb(":"rgba(").concat(clampi(this.r),", ").concat(clampi(this.g),", ").concat(clampi(this.b)).concat(1===t?")":", ".concat(t,")"))}function clampa(t){return isNaN(t)?1:Math.max(0,Math.min(1,t))}function clampi(t){return Math.max(0,Math.min(255,Math.round(t)||0))}function hex(t){return((t=clampi(t))<16?"0":"")+t.toString(16)}function hsla(t,e,n,r){return r<=0?t=e=n=NaN:n<=0||n>=1?t=e=NaN:e<=0&&(t=NaN),new Hsl(t,e,n,r)}function hslConvert(t){if(t instanceof Hsl)return new Hsl(t.h,t.s,t.l,t.opacity);if(t instanceof Color||(t=color(t)),!t)return new Hsl;if(t instanceof Hsl)return t;var e=(t=t.rgb()).r/255,n=t.g/255,r=t.b/255,i=Math.min(e,n,r),a=Math.max(e,n,r),o=NaN,s=a-i,l=(a+i)/2;return s?(o=e===a?(n-r)/s+6*(n<r):n===a?(r-e)/s+2:(e-n)/s+4,s/=l<.5?a+i:2-a-i,o*=60):s=l>0&&l<1?0:o,new Hsl(o,s,l,t.opacity)}function Hsl(t,e,n,r){this.h=+t,this.s=+e,this.l=+n,this.opacity=+r}function clamph(t){return(t=(t||0)%360)<0?t+360:t}function clampt(t){return Math.max(0,Math.min(1,t||0))}function hsl2rgb(t,e,n){return 255*(t<60?e+(n-e)*t/60:t<180?n:t<240?e+(n-e)*(240-t)/60:e)}function constant(t){return function(){return t}}function gamma(t){return 1==(t=+t)?nogamma:function(e,n){return n-e?function exponential(t,e,n){return t=Math.pow(t,n),e=Math.pow(e,n)-t,n=1/n,function(r){return Math.pow(t+r*e,n)}}(e,n,t):constant(isNaN(e)?n:e)}}function nogamma(t,e){var n=e-t;return n?function linear(t,e){return function(n){return t+n*e}}(t,n):constant(isNaN(t)?e:t)}define(Color,color,{copy:function copy(t){return Object.assign(new this.constructor,this,t)},displayable:function displayable(){return this.rgb().displayable()},hex:color_formatHex,formatHex:color_formatHex,formatHex8:function color_formatHex8(){return this.rgb().formatHex8()},formatHsl:function color_formatHsl(){return hslConvert(this).formatHsl()},formatRgb:color_formatRgb,toString:color_formatRgb}),define(Rgb,rgb,extend(Color,{brighter:function brighter(t){return t=null==t?_brighter:Math.pow(_brighter,t),new Rgb(this.r*t,this.g*t,this.b*t,this.opacity)},darker:function darker(t){return t=null==t?.7:Math.pow(.7,t),new Rgb(this.r*t,this.g*t,this.b*t,this.opacity)},rgb:function rgb(){return this},clamp:function clamp(){return new Rgb(clampi(this.r),clampi(this.g),clampi(this.b),clampa(this.opacity))},displayable:function displayable(){return-.5<=this.r&&this.r<255.5&&-.5<=this.g&&this.g<255.5&&-.5<=this.b&&this.b<255.5&&0<=this.opacity&&this.opacity<=1},hex:rgb_formatHex,formatHex:rgb_formatHex,formatHex8:function rgb_formatHex8(){return"#".concat(hex(this.r)).concat(hex(this.g)).concat(hex(this.b)).concat(hex(255*(isNaN(this.opacity)?1:this.opacity)))},formatRgb:rgb_formatRgb,toString:rgb_formatRgb})),define(Hsl,(function hsl(t,e,n,r){return 1===arguments.length?hslConvert(t):new Hsl(t,e,n,null==r?1:r)}),extend(Color,{brighter:function brighter(t){return t=null==t?_brighter:Math.pow(_brighter,t),new Hsl(this.h,this.s,this.l*t,this.opacity)},darker:function darker(t){return t=null==t?.7:Math.pow(.7,t),new Hsl(this.h,this.s,this.l*t,this.opacity)},rgb:function rgb(){var t=this.h%360+360*(this.h<0),e=isNaN(t)||isNaN(this.s)?0:this.s,n=this.l,r=n+(n<.5?n:1-n)*e,i=2*n-r;return new Rgb(hsl2rgb(t>=240?t-240:t+120,i,r),hsl2rgb(t,i,r),hsl2rgb(t<120?t+240:t-120,i,r),this.opacity)},clamp:function clamp(){return new Hsl(clamph(this.h),clampt(this.s),clampt(this.l),clampa(this.opacity))},displayable:function displayable(){return(0<=this.s&&this.s<=1||isNaN(this.s))&&0<=this.l&&this.l<=1&&0<=this.opacity&&this.opacity<=1},formatHsl:function formatHsl(){var t=clampa(this.opacity);return"".concat(1===t?"hsl(":"hsla(").concat(clamph(this.h),", ").concat(100*clampt(this.s),"%, ").concat(100*clampt(this.l),"%").concat(1===t?")":", ".concat(t,")"))}}));var interpolateRgb=function t(e){var n=gamma(e);function r(t,e){var r=n((t=rgb(t)).r,(e=rgb(e)).r),i=n(t.g,e.g),a=n(t.b,e.b),o=nogamma(t.opacity,e.opacity);return function(e){return t.r=r(e),t.g=i(e),t.b=a(e),t.opacity=o(e),t+""}}return r.gamma=t,r}(1);function interpolateNumber(t,e){return t=+t,e=+e,function(n){return t*(1-n)+e*n}}var reA=/[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,reB=new RegExp(reA.source,"g");function interpolateString(t,e){var r,i,a,n=reA.lastIndex=reB.lastIndex=0,o=-1,s=[],l=[];for(t+="",e+="";(r=reA.exec(t))&&(i=reB.exec(e));)(a=i.index)>n&&(a=e.slice(n,a),s[o]?s[o]+=a:s[++o]=a),(r=r[0])===(i=i[0])?s[o]?s[o]+=i:s[++o]=i:(s[++o]=null,l.push({i:o,x:interpolateNumber(r,i)})),n=reB.lastIndex;return n<e.length&&(a=e.slice(n),s[o]?s[o]+=a:s[++o]=a),s.length<2?l[0]?function one(t){return function(e){return t(e)+""}}(l[0].x):function zero(t){return function(){return t}}(e):(e=l.length,function(t){for(var r,n=0;n<e;++n)s[(r=l[n]).i]=r.x(t);return s.join("")})}var cssNode,cssRoot,cssView,svgNode,degrees=180/Math.PI,identity={translateX:0,translateY:0,rotate:0,skewX:0,scaleX:1,scaleY:1};function decompose(t,e,n,r,i,a){var o,s,l;return(o=Math.sqrt(t*t+e*e))&&(t/=o,e/=o),(l=t*n+e*r)&&(n-=t*l,r-=e*l),(s=Math.sqrt(n*n+r*r))&&(n/=s,r/=s,l/=s),t*r<e*n&&(t=-t,e=-e,l=-l,o=-o),{translateX:i,translateY:a,rotate:Math.atan2(e,t)*degrees,skewX:Math.atan(l)*degrees,scaleX:o,scaleY:s}}function interpolateTransform(t,e,n,r){function i(t){return t.length?t.pop()+" ":""}function a(t,r,i,a,o,s){if(t!==i||r!==a){var l=o.push("translate(",null,e,null,n);s.push({i:l-4,x:interpolateNumber(t,i)},{i:l-2,x:interpolateNumber(r,a)})}else(i||a)&&o.push("translate("+i+e+a+n)}function o(t,e,n,a){t!==e?(t-e>180?e+=360:e-t>180&&(t+=360),a.push({i:n.push(i(n)+"rotate(",null,r)-2,x:interpolateNumber(t,e)})):e&&n.push(i(n)+"rotate("+e+r)}function s(t,e,n,a){t!==e?a.push({i:n.push(i(n)+"skewX(",null,r)-2,x:interpolateNumber(t,e)}):e&&n.push(i(n)+"skewX("+e+r)}function l(t,e,n,r,a,o){if(t!==n||e!==r){var s=a.push(i(a)+"scale(",null,",",null,")");o.push({i:s-4,x:interpolateNumber(t,n)},{i:s-2,x:interpolateNumber(e,r)})}else 1===n&&1===r||a.push(i(a)+"scale("+n+","+r+")")}return function(e,n){var r=[],i=[];return e=t(e),n=t(n),a(e.translateX,e.translateY,n.translateX,n.translateY,r,i),o(e.rotate,n.rotate,r,i),s(e.skewX,n.skewX,r,i),l(e.scaleX,e.scaleY,n.scaleX,n.scaleY,r,i),e=n=null,function(t){for(var a,e=-1,n=i.length;++e<n;)r[(a=i[e]).i]=a.x(t);return r.join("")}}}var interpolateTransformCss=interpolateTransform((function parseCss(t){return"none"===t?identity:(cssNode||(cssNode=document.createElement("DIV"),cssRoot=document.documentElement,cssView=document.defaultView),cssNode.style.transform=t,t=cssView.getComputedStyle(cssRoot.appendChild(cssNode),null).getPropertyValue("transform"),cssRoot.removeChild(cssNode),decompose(+(t=t.slice(7,-1).split(","))[0],+t[1],+t[2],+t[3],+t[4],+t[5]))}),"px, ","px)","deg)"),interpolateTransformSvg=interpolateTransform((function parseSvg(t){return null==t?identity:(svgNode||(svgNode=document.createElementNS("http://www.w3.org/2000/svg","g")),svgNode.setAttribute("transform",t),(t=svgNode.transform.baseVal.consolidate())?decompose((t=t.matrix).a,t.b,t.c,t.d,t.e,t.f):identity)}),", ",")",")");function tweenRemove(t,e){var n,r;return function(){var i=set(this,t),a=i.tween;if(a!==n)for(var o=0,s=(r=n=a).length;o<s;++o)if(r[o].name===e){(r=r.slice()).splice(o,1);break}i.tween=r}}function tweenFunction(t,e,n){var r,i;if("function"!=typeof n)throw new Error;return function(){var a=set(this,t),o=a.tween;if(o!==r){i=(r=o).slice();for(var s={name:e,value:n},l=0,u=i.length;l<u;++l)if(i[l].name===e){i[l]=s;break}l===u&&i.push(s)}a.tween=i}}function tweenValue(t,e,n){var r=t._id;return t.each((function(){var t=set(this,r);(t.value||(t.value={}))[e]=n.apply(this,arguments)})),function(t){return get(t,r).value[e]}}function interpolate(t,e){var n;return("number"==typeof e?interpolateNumber:e instanceof color?interpolateRgb:(n=color(e))?(e=n,interpolateRgb):interpolateString)(t,e)}function attrRemove(t){return function(){this.removeAttribute(t)}}function attrRemoveNS(t){return function(){this.removeAttributeNS(t.space,t.local)}}function attrConstant(t,e,n){var r,i;return function(){var a=this.getAttribute(t);return a===n?null:a===r?i:i=e(r=a,n)}}function attrConstantNS(t,e,n){var r,i;return function(){var a=this.getAttributeNS(t.space,t.local);return a===n?null:a===r?i:i=e(r=a,n)}}function attrFunction(t,e,n){var r,i,a;return function(){var o,s=n(this);if(null!=s)return(o=this.getAttribute(t))===s?null:o===r&&s===i?a:a=e(r=o,i=s);this.removeAttribute(t)}}function attrFunctionNS(t,e,n){var r,i,a;return function(){var o,s=n(this);if(null!=s)return(o=this.getAttributeNS(t.space,t.local))===s?null:o===r&&s===i?a:a=e(r=o,i=s);this.removeAttributeNS(t.space,t.local)}}function attrTweenNS(t,e){function n(){var n=this,r=e.apply(n,arguments);return r&&function(e){n.setAttributeNS(t.space,t.local,r(e))}}return n._value=e,n}function attrTween(t,e){function n(){var n=this,r=e.apply(n,arguments);return r&&function(e){n.setAttribute(t,r(e))}}return n._value=e,n}function delayFunction(t,e){return function(){init(this,t).delay=+e.apply(this,arguments)}}function delayConstant(t,e){return e=+e,function(){init(this,t).delay=e}}function durationFunction(t,e){return function(){set(this,t).duration=+e.apply(this,arguments)}}function durationConstant(t,e){return e=+e,function(){set(this,t).duration=e}}var Selection=_visa_charts_utils_umd_92c8af99_js__WEBPACK_IMPORTED_MODULE_51__.c.prototype.constructor;var id=0;function Transition(t,e,n,r){this._groups=t,this._parents=e,this._name=n,this._id=r}function newId(){return++id}var selection_prototype=_visa_charts_utils_umd_92c8af99_js__WEBPACK_IMPORTED_MODULE_51__.c.prototype;Transition.prototype={constructor:Transition,select:function transition_select(t){var e=this._name,n=this._id;"function"!=typeof t&&(t=Object(_visa_charts_utils_umd_92c8af99_js__WEBPACK_IMPORTED_MODULE_51__.a)(t));for(var r=this._groups,i=r.length,a=new Array(i),o=0;o<i;++o)for(var c,f,s=r[o],l=s.length,u=a[o]=new Array(l),h=0;h<l;++h)(c=s[h])&&(f=t.call(c,c.__data__,h,s))&&("__data__"in c&&(f.__data__=c.__data__),u[h]=f,schedule(u[h],e,n,h,u,get(c,n)));return new Transition(a,this._parents,e,n)},selectAll:function transition_selectAll(t){var e=this._name,n=this._id;"function"!=typeof t&&(t=Object(_visa_charts_utils_umd_92c8af99_js__WEBPACK_IMPORTED_MODULE_51__.b)(t));for(var r=this._groups,i=r.length,a=[],o=[],s=0;s<i;++s)for(var c,l=r[s],u=l.length,f=0;f<u;++f)if(c=l[f]){for(var p,h=t.call(c,c.__data__,f,l),m=get(c,n),g=0,d=h.length;g<d;++g)(p=h[g])&&schedule(p,e,n,g,h,m);a.push(h),o.push(c)}return new Transition(a,o,e,n)},filter:function transition_filter(t){"function"!=typeof t&&(t=Object(_visa_charts_utils_umd_92c8af99_js__WEBPACK_IMPORTED_MODULE_51__.m)(t));for(var e=this._groups,n=e.length,r=new Array(n),i=0;i<n;++i)for(var l,a=e[i],o=a.length,s=r[i]=[],u=0;u<o;++u)(l=a[u])&&t.call(l,l.__data__,u,a)&&s.push(l);return new Transition(r,this._parents,this._name,this._id)},merge:function transition_merge(t){if(t._id!==this._id)throw new Error;for(var e=this._groups,n=t._groups,r=e.length,i=n.length,a=Math.min(r,i),o=new Array(r),s=0;s<a;++s)for(var h,l=e[s],u=n[s],c=l.length,f=o[s]=new Array(c),p=0;p<c;++p)(h=l[p]||u[p])&&(f[p]=h);for(;s<r;++s)o[s]=e[s];return new Transition(o,this._parents,this._name,this._id)},selection:function transition_selection(){return new Selection(this._groups,this._parents)},transition:function transition_transition(){for(var t=this._name,e=this._id,n=newId(),r=this._groups,i=r.length,a=0;a<i;++a)for(var l,o=r[a],s=o.length,u=0;u<s;++u)if(l=o[u]){var c=get(l,e);schedule(l,t,n,u,o,{time:c.time+c.delay+c.duration,delay:0,duration:c.duration,ease:c.ease})}return new Transition(r,this._parents,t,n)},call:selection_prototype.call,nodes:selection_prototype.nodes,node:selection_prototype.node,size:selection_prototype.size,empty:selection_prototype.empty,each:selection_prototype.each,on:function transition_on(t,e){var n=this._id;return arguments.length<2?get(this.node(),n).on.on(t):this.each(function onFunction(t,e,n){var r,i,a=function start(t){return(t+"").trim().split(/^|\s+/).every((function(t){var e=t.indexOf(".");return e>=0&&(t=t.slice(0,e)),!t||"start"===t}))}(e)?init:set;return function(){var o=a(this,t),s=o.on;s!==r&&(i=(r=s).copy()).on(e,n),o.on=i}}(n,t,e))},attr:function transition_attr(t,e){var n=Object(_visa_charts_utils_umd_92c8af99_js__WEBPACK_IMPORTED_MODULE_51__.n)(t),r="transform"===n?interpolateTransformSvg:interpolate;return this.attrTween(t,"function"==typeof e?(n.local?attrFunctionNS:attrFunction)(n,r,tweenValue(this,"attr."+t,e)):null==e?(n.local?attrRemoveNS:attrRemove)(n):(n.local?attrConstantNS:attrConstant)(n,r,e+""))},attrTween:function transition_attrTween(t,e){var n="attr."+t;if(arguments.length<2)return(n=this.tween(n))&&n._value;if(null==e)return this.tween(n,null);if("function"!=typeof e)throw new Error;var r=Object(_visa_charts_utils_umd_92c8af99_js__WEBPACK_IMPORTED_MODULE_51__.n)(t);return this.tween(n,(r.local?attrTweenNS:attrTween)(r,e))},style:function transition_style(t,e,n){var r="transform"==(t+="")?interpolateTransformCss:interpolate;return null==e?this.styleTween(t,function styleRemove(t,e){var n,r,i;return function(){var a=Object(_visa_charts_utils_umd_92c8af99_js__WEBPACK_IMPORTED_MODULE_51__.d)(this,t),o=(this.style.removeProperty(t),Object(_visa_charts_utils_umd_92c8af99_js__WEBPACK_IMPORTED_MODULE_51__.d)(this,t));return a===o?null:a===n&&o===r?i:i=e(n=a,r=o)}}(t,r)).on("end.style."+t,function styleRemoveEnd(t){return function(){this.style.removeProperty(t)}}(t)):this.styleTween(t,"function"==typeof e?function styleFunction(t,e,n){var r,i,a;return function(){var o=Object(_visa_charts_utils_umd_92c8af99_js__WEBPACK_IMPORTED_MODULE_51__.d)(this,t),s=n(this);return null==s&&(this.style.removeProperty(t),s=Object(_visa_charts_utils_umd_92c8af99_js__WEBPACK_IMPORTED_MODULE_51__.d)(this,t)),o===s?null:o===r&&s===i?a:a=e(r=o,i=s)}}(t,r,tweenValue(this,"style."+t,e)):function styleConstant(t,e,n){var r,i;return function(){var a=Object(_visa_charts_utils_umd_92c8af99_js__WEBPACK_IMPORTED_MODULE_51__.d)(this,t);return a===n?null:a===r?i:i=e(r=a,n)}}(t,r,e+""),n)},styleTween:function transition_styleTween(t,e,n){var r="style."+(t+="");if(arguments.length<2)return(r=this.tween(r))&&r._value;if(null==e)return this.tween(r,null);if("function"!=typeof e)throw new Error;return this.tween(r,function styleTween(t,e,n){function r(){var r=this,i=e.apply(r,arguments);return i&&function(e){r.style.setProperty(t,i(e),n)}}return r._value=e,r}(t,e,null==n?"":n))},text:function transition_text(t){return this.tween("text","function"==typeof t?function textFunction(t){return function(){var e=t(this);this.textContent=null==e?"":e}}(tweenValue(this,"text",t)):function textConstant(t){return function(){this.textContent=t}}(null==t?"":t+""))},remove:function transition_remove(){return this.on("end.remove",function removeFunction(t){return function(){var e=this.parentNode;for(var n in this.__transition)if(+n!==t)return;e&&e.removeChild(this)}}(this._id))},tween:function transition_tween(t,e){var n=this._id;if(t+="",arguments.length<2){for(var o,r=get(this.node(),n).tween,i=0,a=r.length;i<a;++i)if((o=r[i]).name===t)return o.value;return null}return this.each((null==e?tweenRemove:tweenFunction)(n,t,e))},delay:function transition_delay(t){var e=this._id;return arguments.length?this.each(("function"==typeof t?delayFunction:delayConstant)(e,t)):get(this.node(),e).delay},duration:function transition_duration(t){var e=this._id;return arguments.length?this.each(("function"==typeof t?durationFunction:durationConstant)(e,t)):get(this.node(),e).duration},ease:function transition_ease(t){var e=this._id;return arguments.length?this.each(function easeConstant(t,e){if("function"!=typeof e)throw new Error;return function(){set(this,t).ease=e}}(e,t)):get(this.node(),e).ease}};var defaultTiming={time:null,delay:0,duration:250,ease:function cubicInOut(t){return((t*=2)<=1?t*t*t:(t-=2)*t*t+2)/2}};function inherit(t,e){for(var n;!(n=t.__transition)||!(n=n[e]);)if(!(t=t.parentNode))return defaultTiming.time=now(),defaultTiming;return n}_visa_charts_utils_umd_92c8af99_js__WEBPACK_IMPORTED_MODULE_51__.c.prototype.interrupt=function selection_interrupt(t){return this.each((function(){!function interrupt(t,e){var r,i,o,n=t.__transition,a=!0;if(n){for(o in e=null==e?null:e+"",n)(r=n[o]).name===e?(i=r.state>STARTING&&r.state<ENDING,r.state=ENDED,r.timer.stop(),i&&r.on.call("interrupt",t,t.__data__,r.index,r.group),delete n[o]):a=!1;a&&delete t.__transition}}(this,t)}))},_visa_charts_utils_umd_92c8af99_js__WEBPACK_IMPORTED_MODULE_51__.c.prototype.transition=function selection_transition(t){var e,n;t instanceof Transition?(e=t._id,t=t._name):(e=newId(),(n=defaultTiming).time=now(),t=null==t?null:t+"");for(var r=this._groups,i=r.length,a=0;a<i;++a)for(var l,o=r[a],s=o.length,u=0;u<s;++u)(l=o[u])&&schedule(l,t,e,u,o,n||inherit(l,e));return new Transition(r,this._parents,t,e)}}}]);