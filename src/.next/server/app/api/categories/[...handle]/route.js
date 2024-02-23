"use strict";(()=>{var e={};e.id=887,e.ids=[887],e.modules={7121:e=>{e.exports=require("@medusajs/modules-sdk")},3990:e=>{e.exports=require("@medusajs/product")},2934:e=>{e.exports=require("next/dist/client/components/action-async-storage.external.js")},4580:e=>{e.exports=require("next/dist/client/components/request-async-storage.external.js")},5869:e=>{e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},517:e=>{e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},9926:(e,t,r)=>{r.r(t),r.d(t,{headerHooks:()=>_,originalPathname:()=>v,patchFetch:()=>E,requestAsyncStorage:()=>h,routeModule:()=>g,serverHooks:()=>f,staticGenerationAsyncStorage:()=>m,staticGenerationBailout:()=>x});var i={};r.r(i),r.d(i,{GET:()=>l});var a=r(9193),n=r(9877),s=r(2953),o=r(5964),u=r(3990),c=r(496),d=r(7121);async function l(e,{params:t}){let r=await (0,u.initialize)(),i=Object.fromEntries(e.nextUrl.searchParams),{page:a,limit:n}=i,{handle:s}=t,d=s.map((e,t)=>s.slice(0,t+1).join("/")),l=await r.listCategories({handle:d},{select:["id","handle","name","description"],relations:["category_children"],take:d.length}).catch(e=>(0,c.notFound)()),g=l[0];if(!g)return(0,c.notFound)();let{rows:h,metadata:{count:m}}=await p(g.id,i),f=h.filter(e=>"published"===e.status),_=parseInt(a)+parseInt(n);return o.Z.json({product_categories:Object.values(l),response:{products:f,count:m},nextPage:m>_?_:null})}async function p(e,t){let{currency_code:r}=t;r=r&&r.toUpperCase();let{query:i,modules:a}=await (0,d.MedusaApp)({modulesConfig:{[d.Modules.PRODUCT]:!0,[d.Modules.PRICING]:!0},sharedResourcesConfig:{database:{clientUrl:process.env.POSTGRES_URL}}}),n={take:parseInt(t.limit)||100,skip:parseInt(t.offset)||0,filters:{category_id:[e]},currency_code:r},s=`#graphql
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
    }`,{rows:o,metadata:u}=await i(s,n);return{rows:await Object(function(){var e=Error("Cannot find module '@lib/util/get-prices-by-price-set-id'");throw e.code="MODULE_NOT_FOUND",e}())({products:o,currency_code:r,pricingService:a.pricingService}),metadata:u}}!function(){var e=Error("Cannot find module '@lib/util/get-prices-by-price-set-id'");throw e.code="MODULE_NOT_FOUND",e}();let g=new a.AppRouteRouteModule({definition:{kind:n.x.APP_ROUTE,page:"/api/categories/[...handle]/route",pathname:"/api/categories/[...handle]",filename:"route",bundlePath:"app/api/categories/[...handle]/route"},resolvedPagePath:"E:\\medusa\\my-medusa-storefront\\src\\app\\api\\categories\\[...handle]\\route.ts",nextConfigOutput:"",userland:i}),{requestAsyncStorage:h,staticGenerationAsyncStorage:m,serverHooks:f,headerHooks:_,staticGenerationBailout:x}=g,v="/api/categories/[...handle]/route";function E(){return(0,s.patchFetch)({serverHooks:f,staticGenerationAsyncStorage:m})}},8139:(e,t,r)=>{e.exports=r(399)},4891:(e,t,r)=>{e.exports=r(8139).vendored["react-rsc"].React},9914:(e,t)=>{function r(e){return"("===e[0]&&e.endsWith(")")}Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{isGroupSegment:function(){return r},PAGE_SEGMENT_KEY:function(){return i},DEFAULT_SEGMENT_KEY:function(){return a}});let i="__PAGE__",a="__DEFAULT__"}};var t=require("../../../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),i=t.X(0,[394,496,113],()=>r(9926));module.exports=i})();