"use strict";(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[168],{720687:(e,t,n)=>{n.d(t,{default:()=>r});var a=n(934980);let i=`pulsing {
  0% {
    opacity: 1;
  }

  50% {
    opacity: 0.4;
  }

  100% {
    opacity: 1;
  }
}`,r={css:(0,a.Ll)([i]),animation:"pulsing 2s infinite"}},717307:(e,t,n)=>{n.d(t,{Z:()=>s});var a=n(297728),i=n(2968),r=n(730212),o=n(410150);function s(){let{isAuthenticated:e}=(0,r.B)(),t=(0,o.HG)(),{checkExperiment:n}=(0,a.F)(),s=e&&t&&n("dweb_grid_loading_state").group||"control";return{isInGridLoadingStateExp:(0,i.Z)(s),isInGridLoadingStateDefaultExp:"enabled"===s,isInGridInfiniteScrollExp:"enabled_infinite_scroll"===s||"employees"===s}}},31723:(e,t,n)=>{n.r(t),n.d(t,{default:()=>j});var a=n(667294),i=n(883119),r=n(573706),o=n(986782);function s(e,t,n){var a;return(t="symbol"==typeof(a=function(e,t){if("object"!=typeof e||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var a=n.call(e,t||"default");if("object"!=typeof a)return a;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(t,"string"))?a:a+"")in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}let l={},u=e=>{let t=e.__id||e.id;return"string"==typeof t&&t||null};class m{constructor(){s(this,"idMap",new Map),s(this,"objMap",new WeakMap)}get(e){let t=u(e);return this.objMap.get(e)??(t?this.idMap.get(t):void 0)}has(e){let t=u(e);return this.objMap.has(e)??(!!t&&this.idMap.has(t))}set(e,t){let n=u(e);n&&this.idMap.set(n,t),this.objMap.set(e,t)}reset(){this.idMap=new Map,this.objMap=new WeakMap}}var p=n(587435),d=n(39260),c=n(717307),h=n(876594),y=n(720687),f=n(512541),g=n(785893);let{css:x,animation:b}=y.default,w={backgroundColor:h._VP,animation:b,borderRadius:h.Ev2};function _({data:e}){let{height:t}=e;return(0,g.jsxs)(a.Fragment,{children:[(0,g.jsx)(f.Z,{unsafeCSS:x}),(0,g.jsx)(i.xu,{dangerouslySetInlineStyle:{__style:w},"data-test-id":"skeleton-pin",children:(0,g.jsx)(i.xu,{height:t})})]})}var v=n(679482),C=n(297728),$=n(730212),M=n(410150),S=n(415787),E=n(855746);function k({analyticsData:e,children:t,idx:n,isMeasuring:i,masonryV2ExpName:r,masonryV2ExpGroup:s}){let l=(0,M.ZP)(),{isAuthenticated:u}=(0,$.B)(),m=(0,E.MM)();return(0,a.useEffect)(()=>{if(e.current[n]){let{fetchTimestamp:t,measureTimestamp:a,hasRendered:o,pageCount:p}=e.current[n]??{},d={deviceType:l,experimentName:r,experimentGroup:s,handlerId:m,isAuthenticated:u,pageCount:p};i&&!a&&(e.current[n].measureTimestamp=Date.now(),(0,S.LY)("webapp.masonry.itemMeasureStart",Date.now()-t,{tags:d})),i||o||((0,S.LY)("webapp.masonry.itemRenderStart",Date.now()-a,{tags:d}),e.current[n].hasRendered=!0)}},[i]),(0,g.jsx)(o.Z,{name:"MasonryItem",children:t})}function j(e){let{align:t,cacheKey:n,id:s,isFetching:u,isGridCentered:h=!0,items:y,layout:x,loadItems:b,masonryRef:w,optOutFluidGridExperiment:j=!1,renderItem:G,scrollContainerRef:R,virtualize:W=!0,_getColumnSpanConfig:I,_dynamicHeights:D,useLoadingState:B}=e,L=(0,M.ZP)(),{isAuthenticated:Z,isRTL:N}=(0,$.B)(),{logContextEvent:P}=(0,r.v)(),F=(0,C.F)(),T="desktop"===L,A=(0,E.MM)(),O=(0,a.useRef)(y.map(()=>({fetchTimestamp:Date.now(),measureTimestamp:Date.now(),hasRendered:!1,pageCount:0}))),{experimentalColumnWidth:H,experimentalGutter:V,anyEnabled:z,group:Y}=(0,p.Z)("flexible"!==x&&!j),K=e.serverRender??!!T,U="flexible"===x||"uniformRowFlexible"===x||"desktop"!==L||z,X=(U&&x?.startsWith("uniformRow")?"uniformRowFlexible":void 0)??(K?"serverRenderedFlexible":"flexible"),J=e.columnWidth??H??v.yF;U&&(J=Math.floor(J));let q=e.gutterWidth??V??(T?v.oX:1),Q=e.minCols??v.yc,ee=(0,a.useRef)(0),et=J+q,en=function(e){if(null==e)return;let t=function(e){let t=l[e];return t&&t.screenWidth===window.innerWidth||(l[e]={screenWidth:window.innerWidth}),l[e]}(e);return t.measurementCache||(t.measurementCache=new m),t.measurementCache}(n),ea=(0,a.useCallback)(()=>R?.current||window,[R]),ei=(0,a.useRef)(!0),{anyEnabled:er,group:eo}=I?F.checkExperiment("web_masonry_mixed_early_bailout"):{anyEnabled:!1,group:""},es=er?e=>e<=3?2*q:3*q:void 0,{anyEnabled:el}=D?F.checkExperiment("dynamic_heights_v2"):{anyEnabled:!1},eu=h&&ei.current?"centered":"",{className:em,styles:ep}=function(e){let t=`m_${Object.keys(e).sort().reduce((t,n)=>{let a=e[n];return null==a||"object"==typeof a||"function"==typeof a?t:"boolean"==typeof a?t+(a?"t":"f"):t+a},"").replace(/\:/g,"\\:")}`,{flexible:n,gutterWidth:a,isRTL:i,itemWidth:r,maxColumns:o,minColumns:s,items:l,_getColumnSpanConfig:u}=e,m=u?l.map((e,t)=>({index:t,columnSpanConfig:u(e)??1})).filter(e=>1!==e.columnSpanConfig):[],p=r+a,d=Array.from({length:o+1-s},(e,t)=>t+s).map(e=>{let l=e===s?0:e*p,u=e===o?null:(e+1)*p-.01,{styles:d,numberOfVisibleItems:c}=m.reduce((i,o)=>{let{columnSpanConfig:s}=o,l=Math.min(function({columnCount:e,columnSpanConfig:t}){return"number"==typeof t?t:t[e<=2?"sm":e<=4?"md":e<=8?"lg":"xl"]??1}({columnCount:e,columnSpanConfig:s}),e),u=null!=o.index&&i.numberOfVisibleItems>=l+o.index,m=n?100/e*l:r*l+a*(l-1),{numberOfVisibleItems:p}=i;return u?p-=l-1:o.index<p&&(p+=1),{styles:i.styles.concat(function({className:e,index:t,columnSpanConfig:n,visible:a,width:i,flexible:r}){let o="number"==typeof n?n:btoa(JSON.stringify(n));return r?`
      .${e} .static[data-column-span="${o}"]:nth-child(${t+1}) {
        visibility: ${a?"visible":"hidden"} !important;
        position: ${a?"inherit":"absolute"} !important;
        width: ${i}% !important;
      }`:`
      .${e} .static[data-column-span="${o}"]:nth-child(${t+1}) {
        visibility: ${a?"visible":"hidden"} !important;
        position: ${a?"inherit":"absolute"} !important;
        width: ${i}px !important;
      }`}({className:t,index:o.index,columnSpanConfig:s,visible:u,width:m,flexible:n})),numberOfVisibleItems:p}},{styles:"",numberOfVisibleItems:e}),h=n?`
      .${t} .static {
        box-sizing: border-box;
        width: calc(100% / ${e}) !important;
      }
    `:`
      .${t} {
        max-width: ${e*p}px;
      }

      .${t} .static {
        width: ${r}px !important;
      }
    `;return{minWidth:l,maxWidth:u,styles:`
      .${t} .static:nth-child(-n+${c}) {
        position: static !important;
        visibility: visible !important;
        float: ${i?"right":"left"};
        display: block;
      }

      .${t} .static {
        padding: 0 ${a/2}px;
      }

      ${h}

      ${d}
    `}}),c=d.map(({minWidth:e,maxWidth:t,styles:n})=>`
    @container (min-width: ${e}px) ${t?`and (max-width: ${t}px)`:""} {
      ${n}
    }
  `),h=d.map(({minWidth:e,maxWidth:t,styles:n})=>`
    @media (min-width: ${e}px) ${t?`and (max-width: ${t}px)`:""} {
      ${n}
    }
  `),y=`
    ${c.join("")}
    @supports not (container-type: inline-size) {
      ${h.join("")}
    }
  `;return{className:t,styles:`
  .masonryContainer {
      container-type: inline-size;
    }

    .masonryContainer > .centered {
      margin-left: auto;
      margin-right: auto;
    }

    .${t} .static {
      position: absolute !important;
      visibility: hidden !important;
    }

    ${y}
  `}}({gutterWidth:q,flexible:U,items:y,isRTL:N,itemWidth:J,maxColumns:e.maxColumns??Math.max(y.length,v.g5),minColumns:Q,_getColumnSpanConfig:I}),ed=`${eu} ${em}`.trim(),{anyEnabled:ec,expName:eh,group:ey,isMeasureAllEnabled:ef}=(0,d.Z)(),eg=(0,a.useMemo)(()=>!en||y.every(e=>!en.has(e)),[]),ex=ey&&eg,eb=(0,a.useRef)(),ew=(0,a.useRef)(y.length),e_=(0,a.useRef)(0);(0,a.useEffect)(()=>{ex&&y.forEach((e,t)=>{O.current[t]||(O.current[t]={fetchTimestamp:Date.now(),measureTimestamp:0,hasRendered:!1,pageCount:e_.current})}),ew.current=y.length,e_.current+=1},[y]),(0,a.useEffect)(()=>{ei.current&&(ei.current=!1)},[]),(0,a.useEffect)(()=>{let e=()=>ee.current+=1;return ex&&(eb.current=Date.now(),window.addEventListener("scroll",e)),()=>{if(ex){let t=O.current;window.removeEventListener("scroll",e);let n=t.filter(e=>!!e.measureTimestamp).length,a=t.filter(e=>e.hasRendered).length,i=ew.current,r={deviceType:L,experimentName:eh,experimentGroup:ey,handlerId:A,isAuthenticated:Z};(0,S.LY)("webapp.masonry.timeSpent",eb.current?Date.now()-eb.current:0,{tags:r}),(0,S.S0)("webapp.masonry.itemsFetched",i,{tags:r}),(0,S.S0)("webapp.masonry.itemsMeasured",n,{tags:r}),(0,S.S0)("webapp.masonry.itemsMeasuredPercentage",Math.floor(n/i*100),{tags:r}),(0,S.S0)("webapp.masonry.itemsRendered",a,{tags:r}),(0,S.S0)("webapp.masonry.itemsRenderedPercentage",Math.floor(a/i*100),{tags:r}),(0,S.S0)("webapp.masonry.scrollCount",ee.current,{tags:r})}}},[]);let ev=(0,a.useCallback)((e,t,n)=>{let a=e.reduce((e,t)=>e+t),i=a/e.length;(0,S.S0)("webapp.masonry.multiColumnWhitespace.average",i,{sampleRate:1,tags:{earlyBailoutExperimentGroup:eo||"unknown",experimentalMasonryGroup:ey||"unknown",fluidGridGroup:Y||"unknown",handlerId:A,isAuthenticated:Z,multiColumnItemSpan:e.length}}),(0,S.S0)("webapp.masonry.twoColWhitespace",i,{sampleRate:1,tags:{columnWidth:J,minCols:Q}}),eo&&(0,S.S0)("webapp.masonry.graphIterations",t,{sampleRate:1,tags:{columnSpan:n,exprimentGroup:eo}}),P({event_type:15878,component:14468,aux_data:{total_whitespace_px:a}}),P({event_type:16062,component:14468,aux_data:{average_whitespace_px:i}}),P({event_type:16063,component:14468,aux_data:{max_whitespace_px:Math.max(...e)}}),e.forEach(t=>{t>=50&&((0,S.nP)("webapp.masonry.multiColumnWhitespace.over50",{sampleRate:1,tags:{earlyBailoutExperimentGroup:eo||"unknown",experimentalMasonryGroup:ey||"unknown",fluidGridGroup:Y||"unknown",handlerId:A,isAuthenticated:Z,multiColumnItemSpan:e.length}}),P({event_type:16261,component:14468})),t>=100&&((0,S.nP)("webapp.masonry.multiColumnWhitespace.over100",{sampleRate:1,tags:{earlyBailoutExperimentGroup:eo||"unknown",experimentalMasonryGroup:ey||"unknown",fluidGridGroup:Y||"unknown",handlerId:A,isAuthenticated:Z,multiColumnItemSpan:e.length}}),P({event_type:16262,component:14468}))}),(0,S.nP)("webapp.masonry.multiColumnWhitespace.count",{sampleRate:1,tags:{earlyBailoutExperimentGroup:eo||"unknown",experimentalMasonryGroup:ey||"unknown",fluidGridGroup:Y||"unknown",handlerId:A,isAuthenticated:Z,multiColumnItemSpan:e.length}})},[J,eo,P,Q,Z,A,Y,ey]),{_items:eC,_renderItem:e$}=function({initialLoadingStatePinCount:e=50,infiniteScrollPinCount:t=10,isFetching:n,items:i=[],renderItem:r,useLoadingState:o}){let{isInGridInfiniteScrollExp:s}=(0,c.Z)(),l=o&&n&&0===i.length,u=o&&n&&s&&i.length>0,m=(0,a.useMemo)(()=>Array.from({length:u?t:e}).reduce((e,t,n)=>[...e,{height:n%2==0?356:236,key:`skeleton-pin-${n}`,isSkeleton:!0}],[]),[e,t,u]);return{_items:(0,a.useMemo)(()=>l?m:u?[...i,...m]:i,[l,u,i,m]),_renderItem:(0,a.useMemo)(()=>o?e=>{let{itemIdx:t,data:n}=e;return t>=i.length&&n&&"object"==typeof n&&"key"in n&&"height"in n?(0,g.jsx)(_,{data:n},n.key):r(e)}:r,[o,r,i.length])}}({useLoadingState:B,items:y,renderItem:(0,a.useCallback)(e=>ex?(0,g.jsx)(k,{analyticsData:O,idx:e.itemIdx,isMeasuring:e.isMeasuring,masonryV2ExpGroup:ey,masonryV2ExpName:eh,children:(0,g.jsx)(o.Z,{name:"MasonryItem",children:G(e)})}):(0,g.jsx)(o.Z,{name:"MasonryItem",children:G(e)}),[G]),isFetching:u});return(0,g.jsx)("div",{className:"masonryContainer","data-test-id":"masonry-container",id:s,style:z?{padding:`0 ${q/2}px`}:void 0,children:(0,g.jsxs)("div",{className:ed,children:[K&&ei.current?(0,g.jsx)(f.Z,{"data-test-id":"masonry-ssr-styles",unsafeCSS:ep}):null,(0,g.jsx)(i.xu,{"data-test-id":"max-width-container",marginBottom:0,marginEnd:"auto",marginStart:"auto",marginTop:0,maxWidth:e.maxColumns?et*e.maxColumns:void 0,children:ec?(0,g.jsx)(i.GX,{ref:e=>{w&&(w.current=e)},_dynamicHeights:D,_dynamicHeightsV2Experiment:el,_earlyBailout:es,_getColumnSpanConfig:I,_logTwoColWhitespace:ev,_measureAll:ef,align:t,columnWidth:J,gutterWidth:q,items:eC,layout:U?X:x??"basic",loadItems:b,measurementStore:en,minCols:Q,renderItem:e$,scrollContainer:ea,virtualBufferFactor:.3,virtualize:W}):(0,g.jsx)(i.Rk,{ref:e=>{w&&(w.current=e)},_dynamicHeights:D,_dynamicHeightsV2Experiment:el,_earlyBailout:es,_getColumnSpanConfig:I,_logTwoColWhitespace:ev,align:t,columnWidth:J,gutterWidth:q,items:eC,layout:U?X:x??"basic",loadItems:b,measurementStore:en,minCols:Q,renderItem:e$,scrollContainer:ea,virtualBufferFactor:.3,virtualize:W})})]})})}}}]);
//# sourceMappingURL=https://sm.pinimg.com/webapp/168-e830ce223556e765.mjs.map