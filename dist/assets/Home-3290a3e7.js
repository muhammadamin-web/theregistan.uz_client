import{j as e,L as n,u as b,r as h,P as x,R as w,_}from"./index-5cac0acb.js";import{u as c}from"./useFetch-e5cc1d2a.js";import{B as v,C as N}from"./Card-3a9db9ba.js";import{P as y}from"./PaginationComp-6c4371b3.js";const k="/assets/banner_reklama-0925924d.png";function E({image:r,slug:t,title:s,category:o}){return e.jsxs("div",{className:"container md:py-[22px] py-[44px] flex flex-col gap-[1vw]",children:[e.jsx(n,{className:"text-mainblack xs:order-1 group gap-6 xs:gap-4 duration-150 flex xs:flex-col flex-col-reverse ",to:`post/${t}`,children:e.jsx("img",{src:v+r.name,className:"fullcard_img w-full  xs:aspect-[14/9] aspect-[3/1] object-cover",alt:"registan image"})}),e.jsx("div",{className:"flex xs:order-2 xs:mt-3 xs:mb-1 justify-between xs:flex-col sm:flex-col gap-4 text-mainblack",children:e.jsx("div",{className:"flex gap-2",children:o.map(l=>e.jsx(N,{...l},l._id))})}),e.jsx(n,{className:"text-mainblack xs:order-3 group gap-6 xs:gap-4 duration-150 flex xs:flex-col flex-col-reverse ",to:`post/${t}`,children:e.jsxs("div",{className:"flex justify-between items-end gap-10 md:flex-col",children:[e.jsx("h1",{className:"card_title_banner text-[5vw] md:text-[4vw] lg:text-[2.8vw] lg:max-w-[70vw] xl:text-[4.2rem]  leading-[1.1em] group-hover:underline xs:decoration-2 decoration-4 duration-150 underline-offset-[0.4vw] font-bold decoration-maingreen",children:s}),e.jsx("div",{className:"hidden lg:flex text-[0.8vw] xl:text-[14px] rounded-full duration-150 group-hover:bg-maingreen group-hover:border-none  border border-mainblack p-[15px] w-[6em] h-[6em] xl:w-[84px] xl:h-[84px] items-center justify-center font-bold",children:"ЧИТАТЬ"})]})})]})}const L="https://example.com/",P=w.lazy(()=>_(()=>import("./Card-3a9db9ba.js").then(r=>r.b),["assets/Card-3a9db9ba.js","assets/index-5cac0acb.js","assets/index-adcab5a7.css","assets/Card-e1629860.css"]));function I(){var m,p,f,g,u;const[r]=b(),t=Number(r.get("page"))||1,{data:s,isFetching:o,error:l}=c(`/news?page=${t}`),{data:a}=c("/banner"),{data:i,isFetching:d}=c("/topbanner");return h.useEffect(()=>{window.scrollTo({top:0,left:0,behavior:"smooth"})},[t]),!s&&o?e.jsx(x,{}):d?e.jsx(x,{}):l?e.jsx("div",{children:"...Error"}):e.jsxs("div",{children:[t==1&&(d?"loading...":e.jsx(h.Suspense,{fallback:e.jsx(x,{}),children:e.jsx(E,{...(m=i==null?void 0:i.data[0])==null?void 0:m.news})})),e.jsxs("div",{className:"container",children:[e.jsx(n,{to:L,children:e.jsx("img",{src:k,alt:"banner",className:"banner_img_top w-full  mb-8 object-cover"})}),e.jsx("div",{className:"card_container_block flex justify-start 14 pt-[2.2vw] xl:pt-[2rem] flex-wrap  xs:gap-y-[8vw] gap-y-[4vw] xl:gap-y-[5rem]  xl:-mx-4 md:-mx-2 lg:-mx-2",children:s&&((p=s==null?void 0:s.news)==null?void 0:p.map(j=>e.jsx(P,{...j},j._id)))})]}),e.jsx("div",{className:"container flex justify-center py-[4vw] xl:py-[5rem]",children:e.jsx("ul",{className:"flex items-center justify-center gap-[0.4vw] text-black xs:text-[1.3rem] md:text-[1.5rem] lg:text-[1.2vw] xl:text-[2rem]",children:e.jsx(y,{current:t,news:s})})}),a&&(a==null?void 0:a.data[0].status)===!0&&e.jsx("div",{className:"container",children:e.jsx(n,{to:(f=a==null?void 0:a.data[0])==null?void 0:f.link,children:e.jsx("img",{src:`${v+((u=(g=a==null?void 0:a.data[0])==null?void 0:g.image)==null?void 0:u.name)}`,alt:"banner",className:"banner_img w-full rounded-[1rem] mb-8 object-cover"})})})]})}export{I as default};
