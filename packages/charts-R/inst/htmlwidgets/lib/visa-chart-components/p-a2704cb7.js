/**
 * Copyright (c) 2022 Visa, Inc.
 *
 * This source code is licensed under the MIT license
 * https://github.com/visa/visa-chart-components/blob/master/LICENSE
 *
 **/
var t=Math.PI,i=2*t,h=i-1e-6;function s(){this._x0=this._y0=this._x1=this._y1=null,this._=""}function n(){return new s}function r(t){return function(){return t}}s.prototype=n.prototype={constructor:s,moveTo:function(t,i){this._+="M"+(this._x0=this._x1=+t)+","+(this._y0=this._y1=+i)},closePath:function(){null!==this._x1&&(this._x1=this._x0,this._y1=this._y0,this._+="Z")},lineTo:function(t,i){this._+="L"+(this._x1=+t)+","+(this._y1=+i)},quadraticCurveTo:function(t,i,h,s){this._+="Q"+ +t+","+ +i+","+(this._x1=+h)+","+(this._y1=+s)},bezierCurveTo:function(t,i,h,s,n,r){this._+="C"+ +t+","+ +i+","+ +h+","+ +s+","+(this._x1=+n)+","+(this._y1=+r)},arcTo:function(i,h,s,n,r){var e=this._x1,a=this._y1,o=(s=+s)-(i=+i),u=(n=+n)-(h=+h),c=e-i,f=a-h,M=c*c+f*f;if((r=+r)<0)throw new Error("negative radius: "+r);if(null===this._x1)this._+="M"+(this._x1=i)+","+(this._y1=h);else if(M>1e-6)if(Math.abs(f*o-u*c)>1e-6&&r){var l=s-e,v=n-a,w=o*o+u*u,T=l*l+v*v,A=Math.sqrt(w),L=Math.sqrt(M),d=r*Math.tan((t-Math.acos((w+M-T)/(2*A*L)))/2),g=d/L,C=d/A;Math.abs(g-1)>1e-6&&(this._+="L"+(i+g*c)+","+(h+g*f)),this._+="A"+r+","+r+",0,0,"+ +(f*l>c*v)+","+(this._x1=i+C*o)+","+(this._y1=h+C*u)}else this._+="L"+(this._x1=i)+","+(this._y1=h)},arc:function(s,n,r,e,a,o){s=+s,n=+n,o=!!o;var u=(r=+r)*Math.cos(e),c=r*Math.sin(e),f=s+u,M=n+c,l=1^o,v=o?e-a:a-e;if(r<0)throw new Error("negative radius: "+r);null===this._x1?this._+="M"+f+","+M:(Math.abs(this._x1-f)>1e-6||Math.abs(this._y1-M)>1e-6)&&(this._+="L"+f+","+M),r&&(v<0&&(v=v%i+i),v>h?this._+="A"+r+","+r+",0,1,"+l+","+(s-u)+","+(n-c)+"A"+r+","+r+",0,1,"+l+","+(this._x1=f)+","+(this._y1=M):v>1e-6&&(this._+="A"+r+","+r+",0,"+ +(v>=t)+","+l+","+(this._x1=s+r*Math.cos(a))+","+(this._y1=n+r*Math.sin(a))))},rect:function(t,i,h,s){this._+="M"+(this._x0=this._x1=+t)+","+(this._y0=this._y1=+i)+"h"+ +h+"v"+ +s+"h"+-h+"Z"},toString:function(){return this._}};export{r as c,n as p}