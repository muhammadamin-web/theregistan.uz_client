import{r as n,j as t,P as i}from"./index-aa7e4096.js";import{u as l}from"./useFetch-c597c75c.js";/* empty css              */function m(){var a,o;const{data:e,isFetching:s}=l("/page");return n.useEffect(()=>{window.scrollTo({top:0,left:0,behavior:"smooth"})},[]),!e&&s?t.jsx(i,{}):t.jsx("div",{children:t.jsx("div",{className:"container",children:t.jsx("div",{className:"about-text pt-5 lg:w-[75%] w-[90%] xs:w-full",dangerouslySetInnerHTML:{__html:(o=(a=e.filter(r=>r.name==="about")[0])==null?void 0:a.content)==null?void 0:o.data}})})})}export{m as default};
