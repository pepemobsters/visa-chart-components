/**
 * Copyright (c) 2024 Visa, Inc.
 *
 * This source code is licensed under the MIT license
 * https://github.com/visa/visa-chart-components/blob/master/LICENSE
 *
 **/
function e(e,n){let f;let l=-1;let t=-1;if(n===undefined){for(const n of e){++t;if(n!=null&&(f<n||f===undefined&&n>=n)){f=n,l=t}}}else{for(let i of e){if((i=n(i,++t,e))!=null&&(f<i||f===undefined&&i>=i)){f=i,l=t}}}return l}function n(e,n){let f;let l=-1;let t=-1;if(n===undefined){for(const n of e){++t;if(n!=null&&(f>n||f===undefined&&n>=n)){f=n,l=t}}}else{for(let i of e){if((i=n(i,++t,e))!=null&&(f>i||f===undefined&&i>=i)){f=i,l=t}}}return l}export{e as a,n as m};
//# sourceMappingURL=p-848274b2.js.map