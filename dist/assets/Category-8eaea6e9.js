import{a as d,u as p,r as f,j as e,P as u}from"./index-e37c9c9a.js";import{u as o}from"./useFetch-15c446bd.js";import{a as j}from"./Card-ad2bee91.js";import{P as g}from"./PaginationComp-319b0404.js";function N(){var c,i;const{id:s}=d(),[n]=p(),t=Number(n.get("page"))||1,{data:r,isFetching:m,error:l}=o(`/news?category=${s}&page=${t}`),{data:a}=o(`/category/${s}`);return f.useEffect(()=>{window.scrollTo({top:0,left:0,behavior:"smooth"})},[s]),!r&&m?e.jsx(u,{}):l?e.jsx("div",{children:"...Error"}):e.jsxs("div",{children:[e.jsx("div",{className:"container flex flex-col"}),e.jsx("h1",{className:"text-center text-[1.2cqi] xs:text-[4.5cqi] py-[1.3vw] xl:py-[2rem] uppercase font-semibold",children:(c=a==null?void 0:a.data)==null?void 0:c.name}),e.jsx("div",{className:"container",children:e.jsx("div",{className:" flex justify-start flex-wrap  xs:gap-y-[8vw] gap-y-[4vw] xl:gap-y-[5rem]  xl:-mx-4 md:-mx-2 lg:-mx-2",children:r&&((i=r==null?void 0:r.news)==null?void 0:i.map(x=>e.jsx(j,{...x},x._id)))})}),e.jsx("div",{className:"container flex justify-center py-[3vw] xl:py-[3rem]",children:e.jsx("ul",{className:"flex items-center justify-center gap-[0.4vw] text-black xs:text-[1.3rem] md:text-[1.5rem] lg:text-[1.2vw] xl:text-[2rem]",children:e.jsx(g,{current:t,news:r})})})]})}export{N as default};
