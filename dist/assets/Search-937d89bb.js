import{u as l,j as e,P as c,L as p}from"./index-e37c9c9a.js";import{u as d}from"./useFetch-15c446bd.js";import{a as m}from"./Card-ad2bee91.js";import{P as o}from"./PaginationComp-319b0404.js";function g(){const[r]=l(),t=Number(r.get("page"))||1,x=r.get("title")||"",{data:s,isFetching:n,error:i}=d(`/news?page=${t}&title=${x}`);return!s&&n?e.jsx(c,{}):i?e.jsx("div",{children:"...Error"}):e.jsx(e.Fragment,{children:e.jsxs("div",{className:"container",children:[e.jsx("h1",{className:"my-[40px] xs:my-[30px] text-[#050505] font-bold text-[32px] xs:text-[22px]",children:"РЕЗУЛЬТАТЫ ПОИСКА"}),e.jsx("div",{className:" flex justify-start 14 pt-[2.2vw] xl:pt-[2rem] flex-wrap  xs:gap-y-[8vw] gap-y-[4vw] xl:gap-y-[5rem]  xl:-mx-4 md:-mx-2 lg:-mx-2",children:s&&s.news.map(a=>e.jsx(m,{...a},a._id))}),e.jsx("div",{className:"container flex justify-center py-[4vw]",children:e.jsx(o,{current:t,news:s})}),s.allFindedPosts==0&&e.jsxs("div",{className:"h-[50vh]",children:[e.jsx("span",{className:"text-[18px]",children:"По данному запросу ничего не найдено"}),e.jsxs("div",{className:"flex gap-4 my-[16px]",children:[e.jsx("button",{className:"py-[12px] px-[20px] border border-black rounded-full text-[12px]",children:"НОВЫЙ ПОИСК"}),e.jsx(p,{to:"/",className:"py-[12px] px-[20px] text-[12px] bg-[#ff4f27] text-white rounded-full",children:"НА ГЛАВНУЮ"})]})]})]})})}export{g as default};
