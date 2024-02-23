"use strict";(()=>{var e={};e.id=656,e.ids=[656],e.modules={7121:e=>{e.exports=require("@medusajs/modules-sdk")},3990:e=>{e.exports=require("@medusajs/product")},2934:e=>{e.exports=require("next/dist/client/components/action-async-storage.external.js")},4580:e=>{e.exports=require("next/dist/client/components/request-async-storage.external.js")},5869:e=>{e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},517:e=>{e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},4180:(e,t,r)=>{r.r(t),r.d(t,{headerHooks:()=>_,originalPathname:()=>v,patchFetch:()=>E,requestAsyncStorage:()=>m,routeModule:()=>f,serverHooks:()=>g,staticGenerationAsyncStorage:()=>h,staticGenerationBailout:()=>x});var i={};r.r(i),r.d(i,{GET:()=>d});var n=r(9193),o=r(9877),a=r(2953),s=r(5964),l=r(496),u=r(3990),c=r(7121);async function d(e,{params:t}){let r=await (0,u.initialize)(),{handle:i}=t,n=Object.fromEntries(e.nextUrl.searchParams),{page:o,limit:a}=n,c=await r.listCollections(),d=new Map;for(let e of c)d.set(e.handle,e);let f=d.get(i);if(!f)return(0,l.notFound)();let{rows:m,metadata:{count:h}}=await p(f.id,n),g=m.filter(e=>"published"===e.status),_=parseInt(o)+parseInt(a);return s.Z.json({collections:[f],response:{products:g,count:h},nextPage:h>_?_:null})}async function p(e,t){let{currency_code:r}=t;r=r&&r.toUpperCase();let{query:i,modules:n}=await (0,c.MedusaApp)({modulesConfig:{[c.Modules.PRODUCT]:!0,[c.Modules.PRICING]:!0},sharedResourcesConfig:{database:{clientUrl:process.env.POSTGRES_URL}}}),o={take:parseInt(t.limit)||100,skip:parseInt(t.offset)||0,filters:{collection_id:[e]},currency_code:r},a=`#graphql
    query($filters: Record, $take: Int, $skip: Int) {
      products(filters: $filters, take: $take, skip: $skip) {
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
    }`,{rows:s,metadata:l}=await i(a,o);return{rows:await Object(function(){var e=Error("Cannot find module '@lib/util/get-prices-by-price-set-id'");throw e.code="MODULE_NOT_FOUND",e}())({products:s,currency_code:r,pricingService:n.pricingService}),metadata:l}}!function(){var e=Error("Cannot find module '@lib/util/get-prices-by-price-set-id'");throw e.code="MODULE_NOT_FOUND",e}();let f=new n.AppRouteRouteModule({definition:{kind:o.x.APP_ROUTE,page:"/api/collections/[handle]/route",pathname:"/api/collections/[handle]",filename:"route",bundlePath:"app/api/collections/[handle]/route"},resolvedPagePath:"E:\\medusa\\my-medusa-storefront\\src\\app\\api\\collections\\[handle]\\route.ts",nextConfigOutput:"",userland:i}),{requestAsyncStorage:m,staticGenerationAsyncStorage:h,serverHooks:g,headerHooks:_,staticGenerationBailout:x}=f,v="/api/collections/[handle]/route";function E(){return(0,a.patchFetch)({serverHooks:g,staticGenerationAsyncStorage:h})}},8139:(e,t,r)=>{e.exports=r(399)},4891:(e,t,r)=>{e.exports=r(8139).vendored["react-rsc"].React},9914:(e,t)=>{function r(e){return"("===e[0]&&e.endsWith(")")}Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{isGroupSegment:function(){return r},PAGE_SEGMENT_KEY:function(){return i},DEFAULT_SEGMENT_KEY:function(){return n}});let i="__PAGE__",n="__DEFAULT__"}};var t=require("../../../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),i=t.X(0,[394,496,113],()=>r(4180));module.exports=i})();