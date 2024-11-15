/**
 * Copyright (c) 2024 Visa, Inc.
 *
 * This source code is licensed under the MIT license
 * https://github.com/visa/visa-chart-components/blob/master/LICENSE
 *
 **/
import{o as n,i as t}from"./p-42dcf457.js";import{r}from"./p-b6ae930f.js";function u(){var e=n().unknown(undefined),f=e.domain,i=e.range,o=[0,1],a,c,h=false,s=0,M=0,d=.5;delete e.unknown;function l(){var n=f().length,t=o[1]<o[0],u=o[t-0],e=o[1-t];a=(e-u)/Math.max(1,n-s+M*2);if(h)a=Math.floor(a);u+=(e-u-a*(n-s))*d;c=a*(1-s);if(h)u=Math.round(u),c=Math.round(c);var l=r(n).map((function(n){return u+a*n}));return i(t?l.reverse():l)}e.domain=function(n){return arguments.length?(f(n),l()):f()};e.range=function(n){return arguments.length?(o=[+n[0],+n[1]],l()):o.slice()};e.rangeRound=function(n){return o=[+n[0],+n[1]],h=true,l()};e.bandwidth=function(){return c};e.step=function(){return a};e.round=function(n){return arguments.length?(h=!!n,l()):h};e.padding=function(n){return arguments.length?(s=Math.min(1,M=+n),l()):s};e.paddingInner=function(n){return arguments.length?(s=Math.min(1,n),l()):s};e.paddingOuter=function(n){return arguments.length?(M=+n,l()):M};e.align=function(n){return arguments.length?(d=Math.max(0,Math.min(1,n)),l()):d};e.copy=function(){return u(f(),o).round(h).paddingInner(s).paddingOuter(M).align(d)};return t.apply(l(),arguments)}function e(n){var t=n.copy;n.padding=n.paddingOuter;delete n.paddingInner;delete n.paddingOuter;n.copy=function(){return e(t())};return n}function f(){return e(u.apply(null,arguments).paddingInner(1))}export{u as b,f as p};
//# sourceMappingURL=p-bb2c1516.js.map