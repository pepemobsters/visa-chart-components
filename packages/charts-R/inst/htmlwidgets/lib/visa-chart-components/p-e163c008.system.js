/**
 * Copyright (c) 2024 Visa, Inc.
 *
 * This source code is licensed under the MIT license
 * https://github.com/visa/visa-chart-components/blob/master/LICENSE
 *
 **/
System.register(["./p-371946ee.system.js"],(function(n){"use strict";var t,r,u,e;return{setters:[function(n){t=n.i;r=n.e;u=n.f;e=n.s}],execute:function(){n("q",c);function c(){var n=0,i=1,f=1,o=[.5],s=[0,1],a;function v(n){return n<=n?s[u(o,n,0,f)]:a}function N(){var t=-1;o=new Array(f);while(++t<f)o[t]=((t+1)*i-(t-f)*n)/(f+1);return v}v.domain=function(t){return arguments.length?(n=+t[0],i=+t[1],N()):[n,i]};v.range=function(n){return arguments.length?(f=(s=e.call(n)).length-1,N()):s.slice()};v.invertExtent=function(t){var r=s.indexOf(t);return r<0?[NaN,NaN]:r<1?[n,o[0]]:r>=f?[o[f-1],i]:[o[r-1],o[r]]};v.unknown=function(n){return arguments.length?(a=n,v):v};v.thresholds=function(){return o.slice()};v.copy=function(){return c().domain([n,i]).range(s).unknown(a)};return t.apply(r(v),arguments)}}}}));
//# sourceMappingURL=p-e163c008.system.js.map