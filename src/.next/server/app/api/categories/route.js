"use strict";(()=>{var e={};e.id=961,e.ids=[961],e.modules={3990:e=>{e.exports=require("@medusajs/product")},2934:e=>{e.exports=require("next/dist/client/components/action-async-storage.external.js")},4580:e=>{e.exports=require("next/dist/client/components/request-async-storage.external.js")},5869:e=>{e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},517:e=>{e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},5957:(e,t,r)=>{r.r(t),r.d(t,{headerHooks:()=>g,originalPathname:()=>f,patchFetch:()=>h,requestAsyncStorage:()=>l,routeModule:()=>d,serverHooks:()=>x,staticGenerationAsyncStorage:()=>m,staticGenerationBailout:()=>_});var n={};r.r(n),r.d(n,{GET:()=>p});var a=r(9193),o=r(9877),s=r(2953),i=r(5964),u=r(3990),c=r(496);async function p(e){let t=await (0,u.initialize)(),{offset:r,limit:n}=Object.fromEntries(e.nextUrl.searchParams),[a,o]=await t.listAndCountCategories({},{select:["id","handle","name","description","parent_category"],relations:["category_children"],skip:parseInt(r)||0,take:parseInt(n)||100}).catch(e=>(0,c.notFound)());return i.Z.json({product_categories:a,count:o})}let d=new a.AppRouteRouteModule({definition:{kind:o.x.APP_ROUTE,page:"/api/categories/route",pathname:"/api/categories",filename:"route",bundlePath:"app/api/categories/route"},resolvedPagePath:"E:\\medusa\\my-medusa-storefront\\src\\app\\api\\categories\\route.ts",nextConfigOutput:"",userland:n}),{requestAsyncStorage:l,staticGenerationAsyncStorage:m,serverHooks:x,headerHooks:g,staticGenerationBailout:_}=d,f="/api/categories/route";function h(){return(0,s.patchFetch)({serverHooks:x,staticGenerationAsyncStorage:m})}},8139:(e,t,r)=>{e.exports=r(399)},4891:(e,t,r)=>{e.exports=r(8139).vendored["react-rsc"].React},9914:(e,t)=>{function r(e){return"("===e[0]&&e.endsWith(")")}Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{isGroupSegment:function(){return r},PAGE_SEGMENT_KEY:function(){return n},DEFAULT_SEGMENT_KEY:function(){return a}});let n="__PAGE__",a="__DEFAULT__"}};var t=require("../../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),n=t.X(0,[394,496,113],()=>r(5957));module.exports=n})();