(function(e){function t(t){for(var o,i,a=t[0],r=t[1],l=t[2],u=0,d=[];u<a.length;u++)i=a[u],Object.prototype.hasOwnProperty.call(c,i)&&c[i]&&d.push(c[i][0]),c[i]=0;for(o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o]);p&&p(t);while(d.length)d.shift()();return s.push.apply(s,l||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],o=!0,i=1;i<n.length;i++){var r=n[i];0!==c[r]&&(o=!1)}o&&(s.splice(t--,1),e=a(a.s=n[0]))}return e}var o={},c={app:0},s=[];function i(e){return a.p+"js/"+({about:"about"}[e]||e)+"."+{about:"a265e5d5"}[e]+".js"}function a(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.e=function(e){var t=[],n=c[e];if(0!==n)if(n)t.push(n[2]);else{var o=new Promise((function(t,o){n=c[e]=[t,o]}));t.push(n[2]=o);var s,r=document.createElement("script");r.charset="utf-8",r.timeout=120,a.nc&&r.setAttribute("nonce",a.nc),r.src=i(e);var l=new Error;s=function(t){r.onerror=r.onload=null,clearTimeout(u);var n=c[e];if(0!==n){if(n){var o=t&&("load"===t.type?"missing":t.type),s=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+o+": "+s+")",l.name="ChunkLoadError",l.type=o,l.request=s,n[1](l)}c[e]=void 0}};var u=setTimeout((function(){s({type:"timeout",target:r})}),12e4);r.onerror=r.onload=s,document.head.appendChild(r)}return Promise.all(t)},a.m=e,a.c=o,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)a.d(n,o,function(t){return e[t]}.bind(null,o));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/compass-fe-test/",a.oe=function(e){throw console.error(e),e};var r=window["webpackJsonp"]=window["webpackJsonp"]||[],l=r.push.bind(r);r.push=t,r=r.slice();for(var u=0;u<r.length;u++)t(r[u]);var p=l;s.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},"135f":function(e,t,n){"use strict";n("b250")},6105:function(e,t,n){"use strict";n("e444")},"6b7e":function(e,t,n){"use strict";n("ec72")},b250:function(e,t,n){},c815:function(e,t,n){"use strict";n("ea05")},cd49:function(e,t,n){"use strict";n.r(t);var o=n("7a23"),c={class:"py-5"};function s(e,t,n,s,i,a){var r=Object(o["x"])("HeaderApp"),l=Object(o["x"])("router-view"),u=Object(o["x"])("FooterApp");return Object(o["s"])(),Object(o["d"])(o["a"],null,[Object(o["h"])(r),Object(o["e"])("div",c,[Object(o["h"])(l)]),Object(o["h"])(u)],64)}const i={class:"header-app px-3 d-flex justify-content-between py-10 w-100 bg-white position-fixed top-0 start-0 align-items-center"},a=Object(o["e"])("div",{class:"w-25 back text-primary text-start h3 mb-0"}," < ",-1),r=Object(o["e"])("div",{class:"w-25 text-bold"}," Trade ",-1),l=Object(o["e"])("div",{class:"w-25 h2 mb-0 text-primary d-flex justify-content-end"},[Object(o["e"])("div",{class:"me-3"},"❑"),Object(o["e"])("div",null,"☾")],-1),u=[a,r,l];function p(e,t){return Object(o["s"])(),Object(o["d"])("div",i,u)}n("c815");var d=n("6b0d"),b=n.n(d);const v={},f=b()(v,[["render",p]]);var m=f;const O={class:"footer-app px-2 d-flex justify-content-between py-2 w-100 bg-white position-fixed bottom-0 start-0"},y=Object(o["f"])('<div class="w-25 back text-primary text-center h3 mb-0"><span class="h2">〜</span><div class="footer-caption">Market</div></div><div class="w-25 back text-center h3 mb-0"><span class="h3">♡</span><div class="footer-caption">Favourite</div></div><div class="w-25 back text-center h3 mb-0"><span class="h2">⊜</span><div class="footer-caption">Position</div></div><div class="w-25 back text-center h3 mb-0"><span class="h2">☺</span><div class="footer-caption">Account</div></div>',4),j=[y];function h(e,t){return Object(o["s"])(),Object(o["d"])("div",O,j)}n("6105");const x={},w=b()(x,[["render",h]]);var g=w,T=Object(o["i"])({components:{HeaderApp:m,FooterApp:g}});n("6b7e");const C=b()(T,[["render",s]]);var S=C,M=n("6605"),A={class:"home"};function _(e,t,n,c,s,i){var a=Object(o["x"])("SectionOne"),r=Object(o["x"])("SectionTwo"),l=Object(o["x"])("SectionThree");return Object(o["s"])(),Object(o["d"])("div",A,[Object(o["h"])(a),Object(o["h"])(r),Object(o["h"])(l)])}const k={class:"d-flex px-3 my-2 py-4 bg-white text-start justify-content-between align-items-center"},I=Object(o["f"])('<div class="w-25 big-number"><div class="h3 text-success"> 751.000 </div><div class="small">CHG: <span class="text-success">2.34%</span></div></div><div class="w-25 big-symbol display-4 text-success mx-2 text-center"> ↑ </div><div class="some-details d-flex w-50 flex-wrap"><div class="w-50 mb-1"> HIGH </div><div class="w-50 text-secondary"> 923.65 </div><div class="w-50 mb-1"> LOW </div><div class="w-50 text-secondary"> 353.94 </div><div class="w-50 mb-1"> VOL </div><div class="w-50 text-secondary"> 30 </div></div>',3),E=[I];function L(e,t){return Object(o["s"])(),Object(o["d"])("section",k,E)}const P={},D=b()(P,[["render",L]]);var F=D,H={class:"d-flex px-3 my-2 py-4 bg-white text-start justify-content-between align-items-center"},K=Object(o["e"])("div",{id:"main",style:{width:"100%",height:"400px"}},null,-1),V=[K];function R(e,t,n,c,s,i){return Object(o["s"])(),Object(o["d"])("section",H,V)}var N=n("313e"),U=Object(o["i"])({setup:function(){var e=function(){var e,t=document.getElementById("main"),n=N["a"](t),o="#ec0000",c="#8A0000",s="#00da3c",i="#008F28",a=r([["2013/1/24",2320.26,2320.26,2287.3,2362.94],["2013/1/25",2300,2291.3,2288.26,2308.38],["2013/1/28",2295.35,2346.5,2295.35,2346.92],["2013/1/29",2347.22,2358.98,2337.35,2363.8],["2013/1/30",2360.75,2382.48,2347.89,2383.76],["2013/1/31",2383.43,2385.42,2371.23,2391.82],["2013/2/1",2377.41,2419.02,2369.57,2421.15],["2013/2/4",2425.92,2428.15,2417.58,2440.38],["2013/2/5",2411,2433.13,2403.3,2437.42],["2013/2/6",2432.68,2434.48,2427.7,2441.73],["2013/2/7",2430.69,2418.53,2394.22,2433.89],["2013/2/8",2416.62,2432.4,2414.4,2443.03],["2013/2/18",2441.91,2421.56,2415.43,2444.8],["2013/2/19",2420.26,2382.91,2373.53,2427.07],["2013/2/20",2383.49,2397.18,2370.61,2397.94],["2013/2/21",2378.82,2325.95,2309.17,2378.82],["2013/2/22",2322.94,2314.16,2308.76,2330.88],["2013/2/25",2320.62,2325.82,2315.01,2338.78],["2013/2/26",2313.74,2293.34,2289.89,2340.71],["2013/2/27",2297.77,2313.22,2292.03,2324.63],["2013/2/28",2322.32,2365.59,2308.92,2366.16],["2013/3/1",2364.54,2359.51,2330.86,2369.65],["2013/3/4",2332.08,2273.4,2259.25,2333.54],["2013/3/5",2274.81,2326.31,2270.1,2328.14],["2013/3/6",2333.61,2347.18,2321.6,2351.44],["2013/3/7",2340.44,2324.29,2304.27,2352.02],["2013/3/8",2326.42,2318.61,2314.59,2333.67],["2013/3/11",2314.68,2310.59,2296.58,2320.96],["2013/3/12",2309.16,2286.6,2264.83,2333.29],["2013/3/13",2282.17,2263.97,2253.25,2286.33],["2013/3/14",2255.77,2270.28,2253.31,2276.22],["2013/3/15",2269.31,2278.4,2250,2312.08],["2013/3/18",2267.29,2240.02,2239.21,2276.05],["2013/3/19",2244.26,2257.43,2232.02,2261.31],["2013/3/20",2257.74,2317.37,2257.42,2317.86],["2013/3/21",2318.21,2324.24,2311.6,2330.81],["2013/3/22",2321.4,2328.28,2314.97,2332],["2013/3/25",2334.74,2326.72,2319.91,2344.89],["2013/3/26",2318.58,2297.67,2281.12,2319.99],["2013/3/27",2299.38,2301.26,2289,2323.48],["2013/3/28",2273.55,2236.3,2232.91,2273.55],["2013/3/29",2238.49,2236.62,2228.81,2246.87],["2013/4/1",2229.46,2234.4,2227.31,2243.95],["2013/4/2",2234.9,2227.74,2220.44,2253.42],["2013/4/3",2232.69,2225.29,2217.25,2241.34],["2013/4/8",2196.24,2211.59,2180.67,2212.59],["2013/4/9",2215.47,2225.77,2215.47,2234.73],["2013/4/10",2224.93,2226.13,2212.56,2233.04],["2013/4/11",2236.98,2219.55,2217.26,2242.48],["2013/4/12",2218.09,2206.78,2204.44,2226.26],["2013/4/15",2199.91,2181.94,2177.39,2204.99],["2013/4/16",2169.63,2194.85,2165.78,2196.43],["2013/4/17",2195.03,2193.8,2178.47,2197.51],["2013/4/18",2181.82,2197.6,2175.44,2206.03],["2013/4/19",2201.12,2244.64,2200.58,2250.11],["2013/4/22",2236.4,2242.17,2232.26,2245.12],["2013/4/23",2242.62,2184.54,2182.81,2242.62],["2013/4/24",2187.35,2218.32,2184.11,2226.12],["2013/4/25",2213.19,2199.31,2191.85,2224.63],["2013/4/26",2203.89,2177.91,2173.86,2210.58],["2013/5/2",2170.78,2174.12,2161.14,2179.65],["2013/5/3",2179.05,2205.5,2179.05,2222.81],["2013/5/6",2212.5,2231.17,2212.5,2236.07],["2013/5/7",2227.86,2235.57,2219.44,2240.26],["2013/5/8",2242.39,2246.3,2235.42,2255.21],["2013/5/9",2246.96,2232.97,2221.38,2247.86],["2013/5/10",2228.82,2246.83,2225.81,2247.67],["2013/5/13",2247.68,2241.92,2231.36,2250.85],["2013/5/14",2238.9,2217.01,2205.87,2239.93],["2013/5/15",2217.09,2224.8,2213.58,2225.19],["2013/5/16",2221.34,2251.81,2210.77,2252.87],["2013/5/17",2249.81,2282.87,2248.41,2288.09],["2013/5/20",2286.33,2299.99,2281.9,2309.39],["2013/5/21",2297.11,2305.11,2290.12,2305.3],["2013/5/22",2303.75,2302.4,2292.43,2314.18],["2013/5/23",2293.81,2275.67,2274.1,2304.95],["2013/5/24",2281.45,2288.53,2270.25,2292.59],["2013/5/27",2286.66,2293.08,2283.94,2301.7],["2013/5/28",2293.4,2321.32,2281.47,2322.1],["2013/5/29",2323.54,2324.02,2321.17,2334.33],["2013/5/30",2316.25,2317.75,2310.49,2325.72],["2013/5/31",2320.74,2300.59,2299.37,2325.53],["2013/6/3",2300.21,2299.25,2294.11,2313.43],["2013/6/4",2297.1,2272.42,2264.76,2297.1],["2013/6/5",2270.71,2270.93,2260.87,2276.86],["2013/6/6",2264.43,2242.11,2240.07,2266.69],["2013/6/7",2242.26,2210.9,2205.07,2250.63],["2013/6/13",2190.1,2148.35,2126.22,2190.1]]);function r(e){for(var t=[],n=[],o=0;o<e.length;o++)t.push(e[o].splice(0,1)[0]),n.push(e[o]);return{categoryData:t,values:n}}function l(e){for(var t=[],n=0,o=a.values.length;n<o;n++)if(n<e)t.push("-");else{for(var c=0,s=0;s<e;s++)c+=+a.values[n-s][1];t.push(c/e)}return t}e={title:{left:0},tooltip:{trigger:"axis",axisPointer:{type:"cross"}},legend:{data:["MA5","MA10","MA20","MA30"]},grid:{left:"10%",right:"10%",bottom:"15%"},xAxis:{type:"category",data:a.categoryData,boundaryGap:!1,axisLine:{onZero:!1},splitLine:{show:!1},min:"dataMin",max:"dataMax"},yAxis:{scale:!0,splitArea:{show:!0}},dataZoom:[{type:"inside",start:50,end:100},{show:!0,type:"slider",top:"90%",start:50,end:100}],series:[{name:"日K",type:"candlestick",data:a.values,itemStyle:{color:o,color0:s,borderColor:c,borderColor0:i},markPoint:{label:{formatter:function(e){return null!=e?Math.round(e.value)+"":""}},data:[{name:"Mark",coord:["2013/5/31",2300],value:2300,itemStyle:{color:"rgb(41,60,85)"}},{name:"highest value",type:"max",valueDim:"highest"},{name:"lowest value",type:"min",valueDim:"lowest"},{name:"average value on close",type:"average",valueDim:"close"}],tooltip:{formatter:function(e){return e.name+"<br>"+(e.data.coord||"")}}},markLine:{symbol:["none","none"],data:[[{name:"from lowest to highest",type:"min",valueDim:"lowest",symbol:"circle",symbolSize:10,label:{show:!1},emphasis:{label:{show:!1}}},{type:"max",valueDim:"highest",symbol:"circle",symbolSize:10,label:{show:!1},emphasis:{label:{show:!1}}}],{name:"min line on close",type:"min",valueDim:"close"},{name:"max line on close",type:"max",valueDim:"close"}]}},{name:"MA5",type:"line",data:l(5),smooth:!0,lineStyle:{opacity:.5}},{name:"MA10",type:"line",data:l(10),smooth:!0,lineStyle:{opacity:.5}},{name:"MA20",type:"line",data:l(20),smooth:!0,lineStyle:{opacity:.5}},{name:"MA30",type:"line",data:l(30),smooth:!0,lineStyle:{opacity:.5}}]},e&&n.setOption(e)};Object(o["q"])((function(){e()}))}});const q=b()(U,[["render",R]]);var z=q,B={class:"px-3 my-2 py-2 bg-white text-start"},Q=Object(o["e"])("div",{class:"text-secondary"},"Order Type",-1),G=Object(o["e"])("div",{class:"text-end"},[Object(o["g"])("LIMIT "),Object(o["e"])("span",{class:"ml-4"},">")],-1),J=[Q,G],Z={class:"d-flex option-one py-2 align-items-center justify-content-between w-100"},W=Object(o["e"])("div",{class:"text-secondary w-50"},"Price",-1),X={class:"input-group input-group-sm w-50"},Y={class:"d-flex option-one py-2 align-items-center justify-content-between"},$=Object(o["e"])("div",{class:"text-secondary"},"Qty",-1),ee={class:"input-group input-group-sm w-50"};function te(e,t,n,c,s,i){var a=Object(o["x"])("SelectComp");return Object(o["s"])(),Object(o["d"])("section",B,[Object(o["h"])(a,{visible:e.typeOption,onCloseThis:t[0]||(t[0]=function(t){return e.typeOption=!1})},null,8,["visible"]),Object(o["e"])("div",{class:"d-flex option-one py-2 align-items-center justify-content-between",onClick:t[1]||(t[1]=function(t){return e.typeOption=!0})},J),Object(o["e"])("div",Z,[W,Object(o["e"])("div",X,[Object(o["e"])("span",{class:"input-group-text",onClick:t[2]||(t[2]=function(t){return e.decreaseValue("price")})},"–"),Object(o["E"])(Object(o["e"])("input",{type:"text",class:"form-control text-center","aria-label":"Amount (to the nearest dollar)","onUpdate:modelValue":t[3]||(t[3]=function(t){return e.inpPriceFormat=t})},null,512),[[o["C"],e.inpPriceFormat]]),Object(o["e"])("span",{class:"input-group-text",onClick:t[4]||(t[4]=function(t){return e.increaseValue("price")})},"+")])]),Object(o["e"])("div",Y,[$,Object(o["e"])("div",ee,[Object(o["e"])("span",{class:"input-group-text",onClick:t[5]||(t[5]=function(t){return e.decreaseValue("qty")})},"–"),Object(o["E"])(Object(o["e"])("input",{type:"text",class:"form-control text-center","aria-label":"qty","onUpdate:modelValue":t[6]||(t[6]=function(t){return e.inpQty=t})},null,512),[[o["C"],e.inpQty]]),Object(o["e"])("span",{class:"input-group-text",onClick:t[7]||(t[7]=function(t){return e.increaseValue("qty")})},"+")])])])}function ne(e,t,n,c,s,i){var a=Object(o["x"])("SelectType");return Object(o["s"])(),Object(o["d"])(o["a"],null,[Object(o["e"])("div",{class:Object(o["n"])(["overlay start-0 top-0 position-fixed bg-dark w-100",{"visible-overlay":e.visible}]),style:{"z-index":"100",height:"100vh"}},null,2),Object(o["h"])(a,{class:Object(o["n"])({"visible-container":e.visible}),onCloseSelect:e.closeNow},null,8,["class","onCloseSelect"])],64)}var oe,ce={class:"position-fixed w-100 bg-white start-0 p-0 rounded",style:{bottom:"-400%","z-index":"100"}},se={class:"d-flex justify-content-between py-4 text-center"},ie=Object(o["e"])("div",{class:"w-50"},"Select Order Type",-1),ae={class:"date-selector position-relative bg-muted"},re=Object(o["e"])("div",{class:"overlay-bottom position-absolute"},null,-1),le=Object(o["e"])("div",{class:"overlay-top position-absolute"},null,-1),ue=Object(o["e"])("div",{class:"knob position-absolute"},null,-1),pe={class:"year",id:"year1",style:{height:"40vh",width:"100%","overflow-y":"scroll","scroll-snap-type":"y mandatory"}};function de(e,t,n,c,s,i){return Object(o["s"])(),Object(o["d"])("div",ce,[Object(o["e"])("div",se,[Object(o["e"])("div",{class:"w-25",onClick:t[0]||(t[0]=function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];return e.CloseThis&&e.CloseThis.apply(e,t)})},"Cancel"),ie,Object(o["e"])("div",{class:"w-25 text-primary",onClick:t[1]||(t[1]=function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];return e.CloseThis&&e.CloseThis.apply(e,t)})},"Confirm")]),Object(o["e"])("div",ae,[re,le,ue,Object(o["e"])("div",pe,[(Object(o["s"])(!0),Object(o["d"])(o["a"],null,Object(o["w"])(e.OrderOptions,(function(e,t){return Object(o["s"])(),Object(o["d"])("div",{key:t,class:"text-center py-4",style:{"scroll-snap-align":"start"}},Object(o["A"])(e),1)})),128))])])])}(function(e){e[e["MARKET"]=49]="MARKET",e[e["LIMIT"]=50]="LIMIT",e[e["STOP"]=51]="STOP",e[e["STOP_LIMIT"]=52]="STOP_LIMIT",e[e["MARKET_ON_CLOSE"]=53]="MARKET_ON_CLOSE",e[e["LIMIT_ON_CLOSE"]=59]="LIMIT_ON_CLOSE",e[e["MARKET_IF_TOUCHED"]=67]="MARKET_IF_TOUCHED",e[e["LIMIT_IF_TOUCHED"]=68]="LIMIT_IF_TOUCHED",e[e["BLOCK_TRADE"]=91]="BLOCK_TRADE"})(oe||(oe={}));var be=oe,ve=Object(o["i"])({emits:["close-select"],setup:function(e,t){var n=t.emit,o=be,c=function(){n("close-select")};return{CloseThis:c,OrderOptions:o}}});n("ec4d");const fe=b()(ve,[["render",de]]);var me=fe,Oe=Object(o["i"])({components:{SelectType:me},props:{visible:{type:Boolean,default:function(){return!1}}},emits:["close-this"],setup:function(e,t){var n=t.emit,o=function(){n("close-this")};return{closeNow:o}}});n("135f");const ye=b()(Oe,[["render",ne]]);var je=ye,he=Object(o["i"])({components:{SelectComp:je},setup:function(){var e=Object(o["v"])(1),t=Object(o["v"])(1),n=Object(o["v"])(!1),c=Object(o["b"])((function(){return Number(e.value)+".00"})),s=function(n){"price"===n?e.value++:t.value++},i=function(n){"price"===n?e.value>1&&e.value--:t.value>1&&t.value--};return{inpPrice:e,inpPriceFormat:c,inpQty:t,typeOption:n,increaseValue:s,decreaseValue:i}}});const xe=b()(he,[["render",te]]);var we=xe,ge=Object(o["i"])({name:"Home",components:{SectionOne:F,SectionTwo:z,SectionThree:we}});const Te=b()(ge,[["render",_]]);var Ce=Te,Se=[{path:"/",name:"Home",component:Ce},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}}],Me=Object(M["a"])({history:Object(M["b"])("/compass-fe-test/"),routes:Se}),Ae=Me;Object(o["c"])(S).use(Ae).mount("#app")},e444:function(e,t,n){},ea05:function(e,t,n){},ec4d:function(e,t,n){"use strict";n("f0ae")},ec72:function(e,t,n){},f0ae:function(e,t,n){}});
//# sourceMappingURL=app.f8c8dd0f.js.map