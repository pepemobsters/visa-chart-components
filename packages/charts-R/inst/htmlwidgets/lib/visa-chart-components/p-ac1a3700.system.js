/**
 * Copyright (c) 2022 Visa, Inc.
 *
 * This source code is licensed under the MIT license
 * https://github.com/visa/visa-chart-components/blob/master/LICENSE
 *
 **/
System.register(["./p-36d0ec22.system.js","./p-df53aedc.system.js","./p-a9dfe972.system.js"],(function(n){"use strict";var t,e,r;return{setters:[function(){},function(n){t=n.r},function(n){e=n.o;r=n.i}],execute:function(){n({b:u,p:a});function u(){var n=e().unknown(undefined),i=n.domain,a=n.range,d=[0,1],o,c,f=false,g=0,p=0,l=.5;delete n.unknown;function s(){var n=i().length,e=d[1]<d[0],r=d[e-0],u=d[1-e];o=(u-r)/Math.max(1,n-g+p*2);if(f)o=Math.floor(o);r+=(u-r-o*(n-g))*l;c=o*(1-g);if(f)r=Math.round(r),c=Math.round(c);var s=t(n).map((function(n){return r+o*n}));return a(e?s.reverse():s)}n.domain=function(n){return arguments.length?(i(n),s()):i()};n.range=function(n){return arguments.length?(d=[+n[0],+n[1]],s()):d.slice()};n.rangeRound=function(n){return d=[+n[0],+n[1]],f=true,s()};n.bandwidth=function(){return c};n.step=function(){return o};n.round=function(n){return arguments.length?(f=!!n,s()):f};n.padding=function(n){return arguments.length?(g=Math.min(1,p=+n),s()):g};n.paddingInner=function(n){return arguments.length?(g=Math.min(1,n),s()):g};n.paddingOuter=function(n){return arguments.length?(p=+n,s()):p};n.align=function(n){return arguments.length?(l=Math.max(0,Math.min(1,n)),s()):l};n.copy=function(){return u(i(),d).round(f).paddingInner(g).paddingOuter(p).align(l)};return r.apply(s(),arguments)}function i(n){var t=n.copy;n.padding=n.paddingOuter;delete n.paddingInner;delete n.paddingOuter;n.copy=function(){return i(t())};return n}function a(){return i(u.apply(null,arguments).paddingInner(1))}}}}));