(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[78183,97372],{477412:e=>{e.exports=function(e,t){for(var n=-1,i=null==e?0:e.length;++n<i&&!1!==t(e[n],n,e););return e}},744037:(e,t,n)=>{var i=n(698363),r=n(3674);e.exports=function(e,t){return e&&i(t,r(t),e)}},163886:(e,t,n)=>{var i=n(698363),r=n(481704);e.exports=function(e,t){return e&&i(t,r(t),e)}},285990:(e,t,n)=>{var i=n(646384),r=n(477412),o=n(234865),s=n(744037),a=n(163886),c=n(364626),u=n(200278),l=n(318805),d=n(201911),h=n(458234),p=n(946904),g=n(664160),b=n(43824),m=n(529148),y=n(738517),f=n(701469),v=n(644144),x=n(356688),w=n(513218),S=n(472928),_=n(3674),A=n(481704),E="[object Arguments]",O="[object Function]",I="[object Object]",j={};j[E]=j["[object Array]"]=j["[object ArrayBuffer]"]=j["[object DataView]"]=j["[object Boolean]"]=j["[object Date]"]=j["[object Float32Array]"]=j["[object Float64Array]"]=j["[object Int8Array]"]=j["[object Int16Array]"]=j["[object Int32Array]"]=j["[object Map]"]=j["[object Number]"]=j[I]=j["[object RegExp]"]=j["[object Set]"]=j["[object String]"]=j["[object Symbol]"]=j["[object Uint8Array]"]=j["[object Uint8ClampedArray]"]=j["[object Uint16Array]"]=j["[object Uint32Array]"]=!0,j["[object Error]"]=j[O]=j["[object WeakMap]"]=!1,e.exports=function e(t,n,C,P,T,k){var Z,R=1&n,D=2&n,M=4&n;if(C&&(Z=T?C(t,P,T,k):C(t)),void 0!==Z)return Z;if(!w(t))return t;var V=f(t);if(V){if(Z=b(t),!R)return u(t,Z)}else{var H=g(t),F=H==O||"[object GeneratorFunction]"==H;if(v(t))return c(t,R);if(H==I||H==E||F&&!T){if(Z=D||F?{}:y(t),!R)return D?d(t,a(Z,t)):l(t,s(Z,t))}else{if(!j[H])return T?t:{};Z=m(t,H,R)}}k||(k=new i);var $=k.get(t);if($)return $;k.set(t,Z),S(t)?t.forEach((function(i){Z.add(e(i,n,C,i,t,k))})):x(t)&&t.forEach((function(i,r){Z.set(r,e(i,n,C,r,t,k))}));var L=V?void 0:(M?D?p:h:D?A:_)(t);return r(L||t,(function(i,r){L&&(i=t[r=i]),o(Z,r,e(i,n,C,r,t,k))})),Z}},225588:(e,t,n)=>{var i=n(664160),r=n(637005);e.exports=function(e){return r(e)&&"[object Map]"==i(e)}},829221:(e,t,n)=>{var i=n(664160),r=n(637005);e.exports=function(e){return r(e)&&"[object Set]"==i(e)}},257157:(e,t,n)=>{var i=n(274318);e.exports=function(e,t){var n=t?i(e.buffer):e.buffer;return new e.constructor(n,e.byteOffset,e.byteLength)}},593147:e=>{var t=/\w*$/;e.exports=function(e){var n=new e.constructor(e.source,t.exec(e));return n.lastIndex=e.lastIndex,n}},540419:(e,t,n)=>{var i=n(562705),r=i?i.prototype:void 0,o=r?r.valueOf:void 0;e.exports=function(e){return o?Object(o.call(e)):{}}},318805:(e,t,n)=>{var i=n(698363),r=n(799551);e.exports=function(e,t){return i(e,r(e),t)}},201911:(e,t,n)=>{var i=n(698363),r=n(151442);e.exports=function(e,t){return i(e,r(e),t)}},946904:(e,t,n)=>{var i=n(868866),r=n(151442),o=n(481704);e.exports=function(e){return i(e,o,r)}},151442:(e,t,n)=>{var i=n(862488),r=n(385924),o=n(799551),s=n(770479),a=Object.getOwnPropertySymbols?function(e){for(var t=[];e;)i(t,o(e)),e=r(e);return t}:s;e.exports=a},43824:e=>{var t=Object.prototype.hasOwnProperty;e.exports=function(e){var n=e.length,i=new e.constructor(n);return n&&"string"==typeof e[0]&&t.call(e,"index")&&(i.index=e.index,i.input=e.input),i}},529148:(e,t,n)=>{var i=n(274318),r=n(257157),o=n(593147),s=n(540419),a=n(477133);e.exports=function(e,t,n){var c=e.constructor;switch(t){case"[object ArrayBuffer]":return i(e);case"[object Boolean]":case"[object Date]":return new c(+e);case"[object DataView]":return r(e,n);case"[object Float32Array]":case"[object Float64Array]":case"[object Int8Array]":case"[object Int16Array]":case"[object Int32Array]":case"[object Uint8Array]":case"[object Uint8ClampedArray]":case"[object Uint16Array]":case"[object Uint32Array]":return a(e,n);case"[object Map]":return new c;case"[object Number]":case"[object String]":return new c(e);case"[object RegExp]":return o(e);case"[object Set]":return new c;case"[object Symbol]":return s(e)}}},150361:(e,t,n)=>{var i=n(285990);e.exports=function(e){return i(e,5)}},356688:(e,t,n)=>{var i=n(225588),r=n(307518),o=n(531167),s=o&&o.isMap,a=s?r(s):i;e.exports=a},472928:(e,t,n)=>{var i=n(829221),r=n(307518),o=n(531167),s=o&&o.isSet,a=s?r(s):i;e.exports=a},180549:(e,t,n)=>{n.d(t,{Z:()=>c});var i=n(898781),r=n(883119),o=n(276775),s=n(558068),a=n(785893);function c({disableHistory:e,isShopping:t,pinId:n}){const c=(0,i.ZP)(),u=(0,o.useHistory)(),{previous:l}=(0,s.Hv)(),d=l.length>0;return(0,a.jsx)(r.hU,{accessibilityLabel:c.bt("Voltar", "Go back", "Accessible icon for close button", undefined, true),icon:t?"cancel":"directional-arrow-left",iconColor:"darkGray",onClick:()=>{d&&!e?u.goBack():u.replace(`/pin/${n}/`)},size:"lg",padding:2})}},99739:(e,t,n)=>{n.d(t,{Z:()=>o});var i=n(305791),r=n(599611);const o=({initialCropArea:e,pin:t,disableInitialCrop:n,imageSignature:o})=>{let s;if(e)s={...e};else{const{visual_objects:e}=t,{width:a,height:c}=(0,i.Z)({pin:t,imageSignature:o});if(n)s={x:0,y:0,w:a,h:c};else if(e&&e.length){const{x:t,y:n,w:i,h:o}=e[0];s=(0,r.Z)({cropArea:{x:t,y:n,w:i,h:o},scaledWidth:a,scaledHeight:c})}else{const[e,t]=[a/6,c/6],[n,i]=[a-2*e,c-2*t];s={x:e,y:t,w:n,h:i}}}return{x:Math.floor(s.x),y:Math.floor(s.y),w:Math.floor(s.w),h:Math.floor(s.h)}}},341866:(e,t,n)=>{n.d(t,{Z:()=>r});var i=n(229428);function r({pin:e}){const{visual_objects:t}=e||{};return(0,i.k)(t||[])}},335174:(e,t,n)=>{n.d(t,{Z:()=>r});var i=n(483205);const r=e=>`@keyframes shopButtonSlideInThenOut {\n    0% {\n      width: 48px;\n    }\n\n    15% {\n      width: ${e+i.Nv}px;\n    }\n\n    85% {\n      width: ${e+i.Nv}px;\n    }\n\n    100% {\n      width: 40px;\n    }\n  }\n\n  @keyframes shopButtonSlideIn {\n    0% {\n      width: 48px;\n    }\n\n    100% {\n      width: ${e+i.Nv}px;\n    }\n  }\n\n  @keyframes shopButtonSlideOut {\n    0% {\n      width: ${e+i.Nv}px;\n    }\n\n    100% {\n      width: 48px;\n    }\n  }\n\n  @keyframes revealShopText {\n    from {\n      clip-path: inset(0 100% 0 0);\n    }\n    to {\n      clip-path: inset(0 0 0 0);\n    }\n  }\n\n\n  @keyframes stelaSlideIn {\n    0% {\n        opacity: 0;\n    }\n\n    100% {\n        opacity: 1;\n    }\n}\n\n@keyframes stelaSlideOut {\n    0% {\n        opacity: 1;\n    }\n\n    100% {\n        opacity: 0;\n    }\n}\n\n@keyframes stelaSlideInThenOut {\n    0% {\n        opacity: 0;\n    }\n\n    15% {\n        opacity: 0;\n    }\n\n    25% {\n        opacity: 1;\n    }\n\n    50% {\n        opacity: 1;\n    }\n\n    75% {\n        opacity: 1;\n    }\n\n    85% {\n        opacity: 0;\n    }\n\n    100% {\n        opacity: 0;\n    }\n}\n\n  `},554383:(e,t,n)=>{n.r(t),n.d(t,{default:()=>S});var i=n(341866),r=n(305791),o=n(599611),s=n(325016),a=n(667294),c=n(335174),u=n(391254),l=n(829407),d=n(112690),h=n(483205),p=n(241244),g=n(883119),b=n(785893);const m={};function y({alwaysShow:e,contextLogData:t,enablePointerEvents:n=!0,imageHeight:i,imageWidth:r,isSelected:o,label:s,labelPressState:y,xPos:f,yPos:v}){const x=(0,a.useRef)(),w=(0,d.Z)();(0,l.Z)((()=>{w({event_type:120,view_type:3,aux_data:{...t},...t})})),(0,a.useEffect)((()=>{m[s]={}}),[s]),(0,a.useEffect)((()=>{const e=x.current&&x.current.getBoundingClientRect().width;m[s].width=e}),[x.current]);const S={backgroundColor:e&&o?"#000":"rgba(255, 255, 255)",zIndex:5,whiteSpace:"nowrap",left:(m[s]||{}).left?-((m[s]||{}).width+h.b9):void 0},_={none:{...S,opacity:0},down:{...S,animation:"stelaSlideIn .3s ease-in-out forwards"},up:{...S,animation:"stelaSlideOut .3s ease-in-out forwards"}},A=(m[s]||{}).width;let E=f,O=v;return f+A>r?E=r-A:f<0&&(E=0),v+33>i?O=i-33:v<0&&(O=0),(0,b.jsx)(g.xu,{dangerouslySetInlineStyle:{__style:{top:O,left:E}},display:"flex",position:"absolute",children:(0,b.jsxs)(p.N,{enabled:n,children:[(0,b.jsx)(u.Z,{unsafeCSS:(0,c.Z)()}),(0,b.jsx)(g.xu,{ref:x,dangerouslySetInlineStyle:e?{__style:{...S,opacity:(m[s]||{}).width?1:0}}:{__style:(m[s]||{}).width?{..._[y||"none"]}:{opacity:0}},padding:2,position:"relative",rounding:"pill",children:(0,b.jsx)(g.xv,{align:"start",color:e&&o?"inverse":"default",overflow:"normal",size:"200",weight:"bold",children:s})})]})})}var f=n(276775),v=n(65053);const x=()=>{};function w({alwaysShow:e,cropSource:t,currentSpotlightIdx:n,enablePointerEvents:i,handleStelaClick:a,height:c=1,index:u,labelPressState:l,onStelaDotAnimationComplete:p,pin:m,searchQuery:w,stelaDotAnimationType:S,stelaArea:_,trafficSource:A,width:E=1}){const O=(0,f.useHistory)(),{selectStela:I}=(0,v.b)(),j=(0,d.Z)(),C={x:((_.label_x||_.x)+_.w/2)*E,y:((_.label_y||_.y)+_.h/2)*c},P={element:1221,image_signature:m.image_signature,visual_objects:JSON.stringify({x:_.x,y:_.y,w:_.w,h:_.h,object_category:_.label}),pin_id:m.id,commerce_data:JSON.stringify({pin_is_stela:!0})};return(0,b.jsxs)(g.iP,{onMouseEnter:x,onMouseLeave:x,onTap:()=>{if(j(e?{event_type:101,view_type:427,element:P.element,aux_data:{...P}}:{event_type:101,view_type:3,element:P.element,aux_data:{...P}}),e&&a&&_&&u)I({selectedStelaItem:_}),a(u);else if(_&&O){const{height:e,width:t}=(0,r.Z)({pin:m,maxWidth:h.RZ}),n=(0,o.Z)({cropArea:_,scaledWidth:t,scaledHeight:e});let i=`/pin/${m.id}/related-products/?x=${n.x}&y=${n.y}&w=${n.w}&h=${n.h}&entrySource=shopping&cropSource=4`;w&&(i=i.concat(`&q=${w}`)),A&&(i=i.concat(`&rs=${A}`)),I({selectedStelaItem:_}),O.push(i)}},children:[(0,b.jsx)(g.xu,{dangerouslySetInlineStyle:{__style:{top:C.y,left:C.x}},display:"flex",position:"absolute","data-test-id":"stela-label-dot",children:("inOut"===S||!_.label&&("down"===l||e)||E<=400&&e)&&(0,b.jsx)(s.Z,{alwaysShow:e,contextLogData:P,isSelected:_.isSelected,onStelaDotAnimationComplete:p,stelaDotAnimationType:S,imageSignature:m.image_signature,enablePointerEvents:i})}),_.label&&!(e&&E<=400)&&(0,b.jsx)(y,{alwaysShow:e,contextLogData:P,imageWidth:E,imageHeight:c,isSelected:_.isSelected,label:_.label,labelPressState:l,xPos:C.x,yPos:C.y,enablePointerEvents:i})]})}function S({alwaysShow:e,cropSource:t,closeupImageHovered:n,currentSpotlightIdx:r,disableSelected:o,enablePointerEvents:s,handleStelaClick:a,height:c,labelPressState:u,onStelaDotAnimationComplete:l,pin:d,searchQuery:h,stelaDotAnimationType:p,trafficSource:m,width:y}){const{stela:f}=(0,v.b)(),x=(0,i.Z)({pin:d}).map((e=>{if(!o&&f.selectedStelaItem){const{x:t,y:n}=f.selectedStelaItem;if(e.x===t&&e.y===n)return{...e,isSelected:!0}}return{...e,isSelected:!1}}));return(0,b.jsx)(g.xu,{height:c,position:"absolute",width:y,dangerouslySetInlineStyle:{__style:"in"===p||n?{backgroundColor:"rgba(0, 0, 0, 0.2)"}:{}},children:x.map(((n,i)=>(0,b.jsx)(w,{alwaysShow:e,cropSource:t,currentSpotlightIdx:r,height:c,index:i,handleStelaClick:a,labelPressState:u,onStelaDotAnimationComplete:l,pin:d,searchQuery:h,stelaDotAnimationType:p,stelaArea:n,trafficSource:m,width:y,enablePointerEvents:s},`${n.x}${n.y}`)))})}},325016:(e,t,n)=>{n.d(t,{Z:()=>d});var i=n(667294),r=n(335174),o=n(391254),s=n(112690),a=n(883119),c=n(483205),u=n(241244),l=n(785893);function d({alwaysShow:e,contextLogData:t,enablePointerEvents:n=!0,imageSignature:d,isSelected:h,onStelaDotAnimationComplete:p,stelaDotAnimationType:g}){const[b,m]=(0,i.useState)(!1),y=(0,s.Z)();(0,i.useEffect)((()=>{b||m(!0)}),[]);let f;(0,i.useEffect)((()=>{y({event_type:120,view_type:3,aux_data:{...t},...t})}),[]),"in"===g?f="stelaSlideIn .3s ease-in-out forwards":"out"===g?f="stelaSlideOut .3s ease-in-out forwards":"inOut"===g?f="stelaSlideInThenOut 3s ease-in-out forwards":"none"===g&&(f="none");const v=e?"black":"white",x=e?{opacity:1}:{animation:f,opacity:"none"===f?0:void 0};return(0,l.jsx)(i.Fragment,{children:(0,l.jsxs)(u.N,{enabled:n,children:[(0,l.jsx)(o.Z,{unsafeCSS:(0,r.Z)()}),(0,l.jsx)(a.xu,{"data-test-id":"closeup-stela-dot",height:c.b9,width:c.b9,onAnimationEnd:()=>{p&&"inOut"===g&&p()},dangerouslySetInlineStyle:{__style:x},children:(0,l.jsxs)("svg",{fill:"none",height:"36",viewBox:"0 0 36 36",width:"36",xmlns:"http://www.w3.org/2000/svg",children:[(0,l.jsx)("g",{filter:"url(#filter0_d)",children:(0,l.jsx)("circle",{cx:"18",cy:"18",fill:h?v:"white",r:"8"})}),(0,l.jsx)("defs",{children:(0,l.jsxs)("filter",{colorInterpolationFilters:"sRGB",filterUnits:"userSpaceOnUse",height:"36",id:"filter0_d",width:"36",x:"0",y:"0",children:[(0,l.jsx)("feFlood",{floodOpacity:"0",result:"BackgroundImageFix"}),(0,l.jsx)("feColorMatrix",{in:"SourceAlpha",type:"matrix",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"}),(0,l.jsx)("feOffset",{}),(0,l.jsx)("feGaussianBlur",{stdDeviation:"5"}),(0,l.jsx)("feColorMatrix",{type:"matrix",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"}),(0,l.jsx)("feBlend",{in2:"BackgroundImageFix",mode:"normal",result:"effect1_dropShadow"}),(0,l.jsx)("feBlend",{in:"SourceGraphic",in2:"effect1_dropShadow",mode:"normal",result:"shape"})]})})]})})]})})}},483205:(e,t,n)=>{n.d(t,{Nv:()=>r,RZ:()=>o,b9:()=>i});const i=36,r=44,o=446},366284:(e,t,n)=>{n.d(t,{G6:()=>o,i7:()=>s,oi:()=>i,u$:()=>r,un:()=>c,vU:()=>a});const i=Object.freeze({OTHER:0,CHROME:1,SAFARI:2,IE:3,FIREFOX:4,OPERA:5,EDGE:6}),r=e=>{switch(!0){case e.includes("Chrome"):return i.CHROME;case e.includes("Safari"):return i.SAFARI;case e.includes("Firefox"):return i.FIREFOX;case e.includes("Opera"):return i.OPERA;case e.includes("IE"):return i.IE;case e.includes("Edge"):return i.EDGE;default:return i.OTHER}};function o(e){return r(e)===i.SAFARI}function s(e){return r(e)===i.CHROME}function a(e){return r(e)===i.FIREFOX}function c(e){return r(e)===i.EDGE}},834911:(e,t,n)=>{n.d(t,{Z:()=>o});var i=n(835209),r=n(341732);function o({carouselData:e,images:t,richMetadata:n,richSummary:o,shouldUnifyImageSizes:s,additionalImages:a}){const c=(0,i.Z)({richPinData:n||o});return c&&a&&a.length>0?(0,r.Z)(null,a,e&&e.index,s,c.id):c&&c.additional_images&&c.additional_images.length>0?(0,r.Z)(t,c.additional_images,e&&e.index,s,c.id):e||void 0}},341732:(e,t,n)=>{n.d(t,{Z:()=>o});const i=["236x","474x","564x","736x"];function r(e){function t(e,{imageKey:t,height:n,width:i}){return e.images&&e.images[t]&&(e={...e,images:{...e.images,[t]:{...e.images[t],height:n,width:i}}}),e}const n=i.map((function(t){const n=Math.min(...e.map((e=>e.images&&e.images[t]&&e.images[t].height||1/0))),i=Math.min(...e.map((e=>e.images&&e.images[t]&&e.images[t].width||1/0)));return{imageKey:t,height:n,width:i}}));return e.map((e=>n.reduce(t,e)))}function o(e,t,n,i,o){const s=(null==t?void 0:t.map((({canonical_images:e,image_signature:t})=>({images:e||void 0,image_signature:t||void 0}))))||[],a=e?[{images:e},...s]:s;return{carousel_slots:i?r(a):a,index:n||0,id:o}}},722767:(e,t,n)=>{n.d(t,{Z:()=>a});var i=n(667294),r=n(973935);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}class s extends i.Component{constructor(...e){super(...e),o(this,"observer",null),o(this,"handleVisibilityChanged",((e,t)=>{this.props.onVisibilityChange(e,t)}))}componentDidMount(){const e=r.findDOMNode(this);e instanceof HTMLElement&&(this.node=e),this.node&&(this.observer=new window.IntersectionObserver(this.handleVisibilityChanged,this.props.options),this.observer.observe(this.node))}componentWillUnmount(){this.observer&&(this.observer.unobserve(this.node),delete this.observer)}render(){return i.Children.only(this.props.children)}}const a=s},12610:(e,t,n)=>{function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,{Z3:()=>h,LU:()=>p,ZP:()=>g});const r=1e6,o=window.location.search.includes("debug_impressions=1")||document.cookie&&document.cookie.indexOf("debug_impressions=1")>-1,s={paused:"Pause",resumed:"Resume",stopped:"Flush",enter:"Enter viewport",exit:"Exit viewport"},a={},c={background:"#FF8A8A",transform:"scale(.98)"},u={init:e=>({transform:`scale(${a[e]?.8:.99})`,transition:"transform .2s ease-in-out",background:"#8E8E8E"}),[s.enter]:{background:"#A0DCC8",transform:"scale(.99)"},[s.exit]:c,[s.stopped]:c,[s.paused]:c,[s.resumed]:{background:"#0FA573",transform:"scale(.99)"}};class l{constructor(e){i(this,"setMutationObserver",(e=>(this.mutationObserver=e,this))),i(this,"startMutationObserver",(e=>{this.mutationObserver&&this.mutationObserver.observe(this.node,e)})),i(this,"stopMutationObserver",(()=>{this.mutationObserver&&this.mutationObserver.disconnect()})),i(this,"handleIntersectionChange",(e=>{const t=e.intersectionRatio>0||e.isIntersecting;if(t&&!this.inViewport){const e=Date.now();this.startTime=e,this._debug(s.enter,{startTime:e,node:this.node}),this.enterCallbacks.forEach((e=>e()))}else!t&&this.inViewport&&(this._debug(s.exit,!0),this.exitCallbacks.forEach((e=>e(this.toJSON()))));this.inViewport=t})),this.enterCallbacks=[],this.exitCallbacks=[],this.inViewport=!1,this.node=e,this.startTime=0,this.debugId=""}onEnterViewport(e){return this.enterCallbacks.push(e),this}onExitViewport(e){return this.exitCallbacks.push(e),this}setDebugId(e){return this.debugId=e,o&&Object.assign(this.node.style,u.init(e)),this}pause(){return this.inViewport&&(this._debug(s.paused,!0),this.exitCallbacks.forEach((e=>e(this.toJSON())))),this}resume(){if(this.inViewport){const e=Date.now();this._debug(s.resumed,{startTime:e}),this.startTime=e}return this}stop(e){return this.inViewport&&(this._debug(s.stopped,!0),this.exitCallbacks.forEach((t=>t(this.toJSON(e))))),this}toJSON(e=""){return{startTime:this.startTime*r,endTime:Date.now()*r,forcedExit:e}}toDebugJSON(){return{pinID:this.debugId,startTime:this.startTime,endTime:Date.now(),duration:(Date.now()-this.startTime)/1e3+" seconds"}}_debug(e,t){if(o)switch(window.console.log(`📌 ${e} -- ${this.debugId}`),!0===t&&window.console.log(this.toDebugJSON()),"object"==typeof t&&window.console.log(t),u[e]&&Object.assign(this.node.style,u[e]),e){case s.flushed:case s.paused:case s.exit:a[this.debugId]=!0}}}function d(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const h=!0,p=!1;class g{constructor(){d(this,"_delegateChange",(e=>{e.forEach((e=>{const t=this.activeImpressions.get(e.target);t&&t.handleIntersectionChange(e)}))})),d(this,"_handleMutations",((e,t)=>{const n=this.mutationObservers.get(t);n&&n.offsetHeight<1&&n&&this.stop(n,"removed")})),this.activeImpressions=new Map,this.mutationObservers=new Map,this.bottomHeight=0,this.bottomObstructions=new Set,this.pausePriority=p,this.observer=new window.IntersectionObserver(this._delegateChange),this.paused=!1,this.topHeight=0,this.topObstructions=new Set,this.inExperiment=!1}setExperimentStatus(e){this.inExperiment!==e&&(this.inExperiment=e)}stop(e,t=""){const n=this.activeImpressions.get(e);n&&(n.stop(t),this.mutationObservers.delete(n.mutationObserver),n.stopMutationObserver(),this.activeImpressions.delete(e),this.observer.unobserve(e))}start(e){let t=this.activeImpressions.get(e);if(!t){t=new l(e),this.activeImpressions.set(e,t),this.observer.observe(e);const n=(e,t)=>this._handleMutations(e,t);t.setMutationObserver(new window.MutationObserver(n)),this.mutationObservers.set(t.mutationObserver,e),t.startMutationObserver({subtree:!0,attributes:!0,attributeFilter:["style"]})}return t}pause(e=h){this.paused||(Array.from(this.activeImpressions.values()).forEach((e=>e.pause())),this.paused=!0,this.pausePriority===p&&(this.pausePriority=e))}resume(e=h){e===p&&this.pausePriority===h||this.paused&&(Array.from(this.activeImpressions.values()).forEach((e=>e.resume())),this.paused=!1,this.pausePriority=p)}addObstruction(e,t){"top"===e?this.topObstructions.add(t):"bottom"===e&&this.bottomObstructions.add(t),this._calculateRootMargins()}removeObstruction(e,t){"top"===e?this.topObstructions.delete(t):"bottom"===e&&this.bottomObstructions.delete(t),this._calculateRootMargins()}updateObstructions(){this._calculateRootMargins()}_calculateRootMargins(){const e=Array.from(this.topObstructions).reduce(((e,t)=>{const{bottom:n}=t.getBoundingClientRect();return n>e?n:e}),0),t=window.innerHeight-Array.from(this.bottomObstructions).reduce(((e,t)=>{const{top:n}=t.getBoundingClientRect();return n<e?n:e}),window.innerHeight);if(e!==this.topHeight||t!==this.bottomHeight){const n={rootMargin:`${-e}px 0px ${-t}px`};this.observer.disconnect(),this.observer=new window.IntersectionObserver(this._delegateChange,n),Array.from(this.activeImpressions.values()).forEach((e=>this.observer.observe(e.node))),this.topHeight=e,this.bottomHeight=t}}}},124580:(e,t,n)=>{n.d(t,{Z:()=>i});const i=new(n(12610).ZP)},620707:(e,t,n)=>{function i(e,t){if("object"==typeof e&&"object"==typeof t){const n=Object.keys(e),i=Object.keys(t);return n.length===i.length&&n.every((n=>e[n]===t[n]))}return e===t}n.d(t,{Ak:()=>i,_Y:()=>r,qe:()=>a,xZ:()=>s});const r=(e,t)=>e.length===t.length&&e.every(((e,n)=>i(e,t[n]))),o=(e,t)=>e.length===t.length&&e.every(((e,n)=>e===t[n])),s=(e,t=o)=>n=>{const i=[];return function(...r){const o=this,s=i.find((e=>e.context===o&&t(e.args,r)));if(s)return s.result;const a={context:o,args:r,result:n.apply(this,r)};return i.push(a),e&&i.length>e&&i.shift(),a.result}},a=s(1);s()},743217:(e,t,n)=>{n.d(t,{Z:()=>s});var i=n(752802),r=n(622305),o=n(802933);function s(e){const{images:t={}}=(0,r.Z)((0,o.Z)({pin:e}))||{},n=(0,i.Z)({images:t});return{url:(null==n?void 0:n.url)||"",height:(null==n?void 0:n.height)||1,width:(null==n?void 0:n.width)||1}}},305791:(e,t,n)=>{n.d(t,{Z:()=>a});var i=n(752802),r=n(743217);function o(e,t,n=564){return e>n&&(t*=n/e,e=n),{width:e,height:t}}var s=n(835209);const a=({pin:e,maxWidth:t,imageSignature:n})=>{var a,c;const{image_signature:u}=e;if(!n||""===n||u===n){const{width:n,height:i,url:s}=(0,r.Z)(e);return{...o(n,i,t),url:s}}const l=(0,s.Z)({richPinData:e.rich_metadata||e.rich_summary}),d=[...(null==l||null===(a=l.variant_set)||void 0===a||null===(c=a.variants)||void 0===c?void 0:c.flatMap((e=>e.additional_images||[])))||[],...(null==l?void 0:l.additional_images)||[]],{canonical_images:h}=d.find((({image_signature:e})=>n===e))||{},{height:p=1,width:g=1,url:b=""}=(0,i.Z)({images:h||{}})||{};return{...o(g,p,t),url:b}}},622305:(e,t,n)=>{n.d(t,{Z:()=>i});const i=(0,n(307061).Z)((e=>{const{pin:t}=e,{images:n}=t,i=Object.keys(n||{}).reduce(((e,t)=>{const i=n[t],{url:r,width:o,height:s}=i;return e&&r&&o&&s?{...e,[t]:{url:r,width:o,height:s}}:null}),{});return i&&Object.keys(i).length>0?{...e,images:i}:null}))},780280:(e,t,n)=>{n.d(t,{B:()=>d,LC:()=>u,P2:()=>c,fH:()=>l,gf:()=>h});var i=n(667294),r=n(608832),o=n(620707),s=n(785893);const a=(0,i.createContext)();function c({children:e,value:t}){const[n,c]=(0,i.useState)(t),u=(0,i.useMemo)((()=>({requestContext:n,updateRequestContext:e=>{const t={...n,...e};(0,o.Ak)(n,e)||c(t),(0,r.J)(t)}})),[n]);return(0,s.jsx)(a.Provider,{value:u,children:e})}const u=({children:e})=>{const t=(0,i.useContext)(a);if(!t)throw new Error("RequestContextConsumer must be used within a RequestContextProvider");return e(t.requestContext)},l=({children:e})=>{const t=(0,i.useContext)(a);if(!t)throw new Error("RequestContextConsumer must be used within a RequestContextProvider");return e(t.requestContext)};function d(){const e=(0,i.useContext)(a);if(!e)throw new Error("useRequestContext must be used within a RequestContextProvider");return e.requestContext}function h(){const e=(0,i.useContext)(a);if(!e)throw new Error("useUpdateRequestContext must be used within a RequestContextProvider");return e.updateRequestContext}},418614:(e,t,n)=>{n.d(t,{Z:()=>u});var i=n(784590),r=n(780280),o=n(826067);var s=n(276775);function a({checkExperiments:e,disableFetch:t,viewer:n}){var i;const a=(0,s.useLocation)(),c=(0,s.useRouteMatch)(),u=(0,r.B)(),l=function({advertiser:e,location:{pathname:t,search:n},inviteCode:i,match:{params:r,path:s},viewer:a}){return{advertiser:e,routeData:{inviteCode:i,matchPath:s,params:r,parsedSearch:(0,o.mB)(n),pathname:t,search:n},user:{country:a.country||void 0,id:a.id||void 0,isAuth:a.isAuth,isEmployee:!!a.isEmployee||!1,isPartner:!!a.isPartner||!1,username:a.username||void 0}}}({advertiser:u.advertiser,location:a,match:c,viewer:n,inviteCode:null!==(i=u.inviteCode)&&void 0!==i?i:""}),d=!!t&&t(l),h=!(!d&&e)||e(u.experimentsClient);return{args:l,fetchDisabled:d||!h}}var c=n(19121);function u({getOptions:e,checkExperiments:t,disableFetch:n,...r}){const o=function(){const e=(0,c.Z)();return{country:e.country||void 0,id:e.id||void 0,isAuth:e.isAuth,isEmployee:!!e.isEmployee||!1,isPartner:!!e.isPartner||!1,username:e.username||void 0}}(),{args:s,fetchDisabled:u}=a({checkExperiments:t,disableFetch:n,viewer:o}),l=e?e(s):void 0;return(0,i.Z)(u?null:{options:l,...r})}},835209:(e,t,n)=>{function i({richPinData:e={}}){return((null==e?void 0:e.products)||[])[0]}n.d(t,{Z:()=>i})},50286:(e,t,n)=>{n.d(t,{HG:()=>c,Mm:()=>r,Wb:()=>a,ZP:()=>u,ml:()=>s});var i=n(780280);function r(e){const{isMobile:t,isTablet:n}=e.userAgent;return n?"tablet":t?"phone":"desktop"}const o=()=>r((0,i.B)()),s=()=>"phone"===o(),a=()=>"tablet"===o(),c=()=>"desktop"===o(),u=o},975540:(e,t,n)=>{function i({cropArea:{x:e,y:t,w:n,h:i},scaledWidth:r,scaledHeight:o}){return{x:e/r,y:t/o,w:n/r,h:i/o}}n.d(t,{Z:()=>i})},599611:(e,t,n)=>{function i({cropArea:{x:e=0,y:t=0,w:n=0,h:i=0},scaledWidth:r,scaledHeight:o}){return{h:Math.floor(i*o),w:Math.floor(n*r),x:Math.floor(e*r),y:Math.floor(t*o)}}n.d(t,{Z:()=>i})},94047:(e,t,n)=>{function i({cropArea:{x:e,y:t,w:n,h:i},cropSource:r,searchQuery:o,entrySource:s,trafficSource:a,imageSignature:c}){const u=[];e>=0&&t>=0&&n>=0&&i>=0&&u.push(`x=${e}`,`y=${t}`,`w=${n}`,`h=${i}`),r&&u.push(`cropSource=${r}`),s&&u.push(`entrySource=${s}`),o&&u.push(`q=${o}`),c&&u.push(`imageSignature=${c}`),a&&"unknown"!==a&&u.push(`rs=${a}`);return u.length?`?${u.join("&")}`:""}n.d(t,{Z:()=>i})},297852:(e,t,n)=>{n.d(t,{Z:()=>r});var i=n(94047);function r({cropArea:e,cropSource:t,entrySource:n,isUnified:r,imageSignature:o,pinId:s,searchQuery:a,trafficSource:c,view:u}){return`/pin/${s}/${r?"related-products":"visual-search"}/${r||"products"!==u?"":"products/"}${(0,i.Z)({cropArea:e,cropSource:t,entrySource:n,trafficSource:c,searchQuery:a,imageSignature:o})}`}},494349:(e,t,n)=>{n.d(t,{g:()=>p,I:()=>h});var i=n(667294),r=n(567450),o=n(150361),s=n.n(o);const a={appInFocus:!0,footerPlusButtonVisible:!0,isAutoplay:!1,showTypeaheadOverlay:!1,videosAutoplaying:{currentlyPlayingOrganicVideoId:null,organicVideosAutoplaying:{},promotedVideosAutoplaying:{}},viewportSize:"lg"},c=(e=a,t)=>{if("TOGGLE_TYPEAHEAD_OVERLAY"===t.type)return{...e,showTypeaheadOverlay:t.payload};if("SET_CURRENT_VIDEO"===t.type){const{payload:n}=t,{pinId:i,isPromoted:r,currentTime:o,inVideoGridAutoplayExp:a}=n,{videosAutoplaying:c}=e,{currentlyPlayingOrganicVideoId:u,promotedVideosAutoplaying:l,organicVideosAutoplaying:d}=c,h=s()(l),p=s()(d);return!r&&u&&a?e:(r?h[i]={pinId:i,currentTime:o,paused:!1}:p[i]={pinId:i,currentTime:o,paused:!1},{...e,videosAutoplaying:{currentlyPlayingOrganicVideoId:r?u:i,promotedVideosAutoplaying:h,organicVideosAutoplaying:p}})}if("SET_IS_AUTOPLAY"===t.type)return{...e,isAutoplay:t.payload};if("PAUSE_CURRENT_VIDEO"===t.type){const{payload:n}=t,{pinId:i,isPromoted:r,currentTime:o}=n,{videosAutoplaying:a}=e,{promotedVideosAutoplaying:c,organicVideosAutoplaying:u}=a,l=s()(c),d=s()(u);return r?l[i]={...l[i],paused:!0,currentTime:o}:d[i]={...d[i],paused:!0,currentTime:o},{...e,videosAutoplaying:{currentlyPlayingOrganicVideoId:null,promotedVideosAutoplaying:l,organicVideosAutoplaying:d}}}return"SET_APP_FOCUS_STATE"===t.type?{...e,appInFocus:t.payload}:"SET_VIEWPORT_SIZE"===t.type?{...e,viewportSize:t.payload}:"SET_FOOTER_VISIBILITY_STATE"===t.type?{...e,footerPlusButtonVisible:t.payload}:e};var u=n(425288),l=n(785893);const{Provider:d,useHook:h}=(0,u.Z)("AppUI");function p({children:e}){const[t,n]=(0,i.useReducer)(c,a),o=(0,i.useCallback)((e=>n({type:"PAUSE_CURRENT_VIDEO",payload:e})),[]),s=(0,i.useCallback)((e=>n({type:"SET_APP_FOCUS_STATE",payload:e})),[]),u=(0,i.useCallback)((e=>n({type:"SET_CURRENT_VIDEO",payload:e})),[]),h=(0,i.useCallback)((e=>n({type:"SET_FOOTER_VISIBILITY_STATE",payload:e})),[]),p=(0,i.useCallback)((e=>n({type:"SET_IS_AUTOPLAY",payload:e})),[]),g=(0,i.useCallback)((e=>n({type:"SET_VIEWPORT_SIZE",payload:e})),[]),b=(0,i.useCallback)((e=>n({type:"TOGGLE_TYPEAHEAD_OVERLAY",payload:e})),[]),m=(0,i.useMemo)((()=>({pauseAutoplay:o,setCurrentVideo:u,setFooterPlusButtonVisible:h,setIsAutoplay:p,setViewportSize:g,toggleTypeaheadOverlay:b,setAppFocusState:s,appUI:t})),[o,u,h,p,g,b,s,t]);return(0,i.useEffect)((()=>{r.Z.onSessionResume((()=>{s(!0)})).onSessionPause((()=>{s(!1)}))}),[s]),(0,l.jsx)(d,{value:m,children:e})}},802201:(e,t,n)=>{n.d(t,{AF:()=>a,H0:()=>c,S6:()=>u,_S:()=>l});var i=n(702664),r=n(425288),o=n(785893);const{Provider:s,useHook:a,useMaybeHook:c}=(0,r.Z)("Pins");function u(){const e=a();return t=>e[t]}function l({children:e}){const t=(0,i.useSelector)((({pins:e})=>e),i.shallowEqual);return(0,o.jsx)(s,{value:t,children:e})}},65053:(e,t,n)=>{n.d(t,{k:()=>l,b:()=>u});var i=n(667294),r=n(425288);const o={selectedStelaItem:null};function s(e=o,t){switch(t.type){case"STELA_SELECT":return{...e,selectedStelaItem:t.payload.selectedStelaItem};default:return e}}var a=n(785893);const{Provider:c,useHook:u}=(0,r.Z)("Stela");function l({children:e}){const[t,n]=(0,i.useReducer)(s,o),r=(0,i.useCallback)((({selectedStelaItem:e})=>{n({type:"STELA_SELECT",payload:{selectedStelaItem:e}})}),[]),u=(0,i.useMemo)((()=>({stela:t,selectStela:r})),[t,r]);return(0,a.jsx)(c,{value:u,children:e})}},154391:(e,t,n)=>{n.d(t,{H:()=>o,o:()=>r});var i=n(425288);const{Provider:r,useHook:o}=(0,i.Z)("LimitedLogin")}}]);
//# sourceMappingURL=https://sm.pinimg.com/webapp/78183.pt_BR-d93084657be4d525.mjs.map