"use strict";(()=>{var e={};e.id=684,e.ids=[684],e.modules={7121:e=>{e.exports=require("@medusajs/modules-sdk")},2934:e=>{e.exports=require("next/dist/client/components/action-async-storage.external.js")},4580:e=>{e.exports=require("next/dist/client/components/request-async-storage.external.js")},5869:e=>{e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},517:e=>{e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},322:(e,t,r)=>{r.r(t),r.d(t,{headerHooks:()=>f,originalPathname:()=>h,patchFetch:()=>v,requestAsyncStorage:()=>m,routeModule:()=>l,serverHooks:()=>_,staticGenerationAsyncStorage:()=>g,staticGenerationBailout:()=>x});var i={};r.r(i),r.d(i,{GET:()=>c});var n=r(9193),o=r(9877),a=r(2953),s=r(5964),u=r(496),d=r(7121);async function c(e){let t=Object.fromEntries(e.nextUrl.searchParams),r=await p(t);return r?s.Z.json(r):(0,u.notFound)()}async function p(e){let{id:t,limit:r,offset:i,currency_code:n}=e;i=i&&parseInt(i),r=r&&parseInt(r),n=n&&n.toUpperCase();let{query:o,modules:a}=await (0,d.MedusaApp)({modulesConfig:{[d.Modules.PRODUCT]:!0,[d.Modules.PRICING]:!0},sharedResourcesConfig:{database:{clientUrl:process.env.POSTGRES_URL}},injectedDependencies:{}}),s={take:r||12,skip:i||0,id:t?[t]:void 0,context:{currency_code:n}},u=`#graphql
    query($filters: Record, $id: String, $take: Int, $skip: Int) {
      products(filters: $filters, id: $id, take: $take, skip: $skip) {
        id
        title
        handle
        tags
        status
        collection
        collection_id
        thumbnail
        images {
          url
          alt_text
          id
        }
        options {
          id
          value
          title
        }
        variants {
          id
          title
          created_at
          updated_at
          thumbnail
          inventory_quantity
          material
          weight
          length
          height
          width
          options {
            id
            value
            title
          }
          price {
            price_set {
              id
            }
          }
        }
      }
    }`,{rows:c,metadata:{count:p}}=await o(u,s),l=await Object(function(){var e=Error("Cannot find module '@lib/util/get-prices-by-price-set-id'");throw e.code="MODULE_NOT_FOUND",e}())({products:c,currency_code:n,pricingService:a.pricingService}),m=i+r;return{products:l,count:p,nextPage:p>m?m:null}}!function(){var e=Error("Cannot find module '@lib/util/get-prices-by-price-set-id'");throw e.code="MODULE_NOT_FOUND",e}();let l=new n.AppRouteRouteModule({definition:{kind:o.x.APP_ROUTE,page:"/api/products/route",pathname:"/api/products",filename:"route",bundlePath:"app/api/products/route"},resolvedPagePath:"E:\\medusa\\my-medusa-storefront\\src\\app\\api\\products\\route.ts",nextConfigOutput:"",userland:i}),{requestAsyncStorage:m,staticGenerationAsyncStorage:g,serverHooks:_,headerHooks:f,staticGenerationBailout:x}=l,h="/api/products/route";function v(){return(0,a.patchFetch)({serverHooks:_,staticGenerationAsyncStorage:g})}},8139:(e,t,r)=>{e.exports=r(399)},4891:(e,t,r)=>{e.exports=r(8139).vendored["react-rsc"].React},9914:(e,t)=>{function r(e){return"("===e[0]&&e.endsWith(")")}Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{isGroupSegment:function(){return r},PAGE_SEGMENT_KEY:function(){return i},DEFAULT_SEGMENT_KEY:function(){return n}});let i="__PAGE__",n="__DEFAULT__"}};var t=require("../../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),i=t.X(0,[394,496,113],()=>r(322));module.exports=i})();