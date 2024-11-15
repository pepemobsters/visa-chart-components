/**
 * Copyright (c) 2024 Visa, Inc.
 *
 * This source code is licensed under the MIT license
 * https://github.com/visa/visa-chart-components/blob/master/LICENSE
 *
 **/
import{w as t,a as i,c as s}from"./p-fa69d97e.js";import{x as h,y as n}from"./p-4f683f50.js";import{e}from"./p-c79b22e7.js";function a(t){this._context=t}a.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._point=0},lineEnd:function(){if(this._line||this._line!==0&&this._point===1)this._context.closePath();this._line=1-this._line},point:function(t,i){t=+t,i=+i;switch(this._point){case 0:this._point=1;this._line?this._context.lineTo(t,i):this._context.moveTo(t,i);break;case 1:this._point=2;default:this._context.lineTo(t,i);break}}};function f(t){return new a(t)}function r(e,a){var r=s(true),u=null,c=f,o=null,l=t(p);e=typeof e==="function"?e:e===undefined?h:s(e);a=typeof a==="function"?a:a===undefined?n:s(a);function p(t){var s,h=(t=i(t)).length,n,f=false,p;if(u==null)o=c(p=l());for(s=0;s<=h;++s){if(!(s<h&&r(n=t[s],s,t))===f){if(f=!f)o.lineStart();else o.lineEnd()}if(f)o.point(+e(n,s,t),+a(n,s,t))}if(p)return o=null,p+""||null}p.x=function(t){return arguments.length?(e=typeof t==="function"?t:s(+t),p):e};p.y=function(t){return arguments.length?(a=typeof t==="function"?t:s(+t),p):a};p.defined=function(t){return arguments.length?(r=typeof t==="function"?t:s(!!t),p):r};p.curve=function(t){return arguments.length?(c=t,u!=null&&(o=c(u)),p):c};p.context=function(t){return arguments.length?(t==null?u=o=null:o=c(u=t),p):u};return p}function u(t,i,s){t._context.bezierCurveTo(t._x1+t._k*(t._x2-t._x0),t._y1+t._k*(t._y2-t._y0),t._x2+t._k*(t._x1-i),t._y2+t._k*(t._y1-s),t._x2,t._y2)}function c(t,i){this._context=t;this._k=(1-i)/6}c.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._x2=this._y0=this._y1=this._y2=NaN;this._point=0},lineEnd:function(){switch(this._point){case 2:this._context.lineTo(this._x2,this._y2);break;case 3:u(this,this._x1,this._y1);break}if(this._line||this._line!==0&&this._point===1)this._context.closePath();this._line=1-this._line},point:function(t,i){t=+t,i=+i;switch(this._point){case 0:this._point=1;this._line?this._context.lineTo(t,i):this._context.moveTo(t,i);break;case 1:this._point=2;this._x1=t,this._y1=i;break;case 2:this._point=3;default:u(this,t,i);break}this._x0=this._x1,this._x1=this._x2,this._x2=t;this._y0=this._y1,this._y1=this._y2,this._y2=i}};function o(t,i,s){var h=t._x1,n=t._y1,a=t._x2,f=t._y2;if(t._l01_a>e){var r=2*t._l01_2a+3*t._l01_a*t._l12_a+t._l12_2a,u=3*t._l01_a*(t._l01_a+t._l12_a);h=(h*r-t._x0*t._l12_2a+t._x2*t._l01_2a)/u;n=(n*r-t._y0*t._l12_2a+t._y2*t._l01_2a)/u}if(t._l23_a>e){var c=2*t._l23_2a+3*t._l23_a*t._l12_a+t._l12_2a,o=3*t._l23_a*(t._l23_a+t._l12_a);a=(a*c+t._x1*t._l23_2a-i*t._l12_2a)/o;f=(f*c+t._y1*t._l23_2a-s*t._l12_2a)/o}t._context.bezierCurveTo(h,n,a,f,t._x2,t._y2)}function l(t,i){this._context=t;this._alpha=i}l.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._x2=this._y0=this._y1=this._y2=NaN;this._l01_a=this._l12_a=this._l23_a=this._l01_2a=this._l12_2a=this._l23_2a=this._point=0},lineEnd:function(){switch(this._point){case 2:this._context.lineTo(this._x2,this._y2);break;case 3:this.point(this._x2,this._y2);break}if(this._line||this._line!==0&&this._point===1)this._context.closePath();this._line=1-this._line},point:function(t,i){t=+t,i=+i;if(this._point){var s=this._x2-t,h=this._y2-i;this._l23_a=Math.sqrt(this._l23_2a=Math.pow(s*s+h*h,this._alpha))}switch(this._point){case 0:this._point=1;this._line?this._context.lineTo(t,i):this._context.moveTo(t,i);break;case 1:this._point=2;break;case 2:this._point=3;default:o(this,t,i);break}this._l01_a=this._l12_a,this._l12_a=this._l23_a;this._l01_2a=this._l12_2a,this._l12_2a=this._l23_2a;this._x0=this._x1,this._x1=this._x2,this._x2=t;this._y0=this._y1,this._y1=this._y2,this._y2=i}};const p=function t(i){function s(t){return i?new l(t,i):new c(t,0)}s.alpha=function(i){return t(+i)};return s}(.5);export{p as a,f as c,r as l};
//# sourceMappingURL=p-67f05ac6.js.map