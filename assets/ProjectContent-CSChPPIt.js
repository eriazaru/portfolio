import{j as e,R as l,r as o,u as m}from"./index-CF0QbuOz.js";import{H as d}from"./HeaderText-DR50uBpA.js";import{u as x}from"./useAnimateOnVisible-CAsQKRXY.js";function f({project:a,stack:t,type:r}){return e.jsx(e.Fragment,{children:e.jsxs("div",{className:"flex-grow w-full h-50 md:w-[48rem] lg:w-[50rem] bg-gradient-to-r from-cyan-800 to-sky-900 p-5 shadow-md shadow-neutral-950/40",children:[e.jsxs("div",{className:"flex justify-between items-start  pt-2 pb-4",children:[e.jsx(l,{beforeInjection:s=>{s.classList.add("size-12","fill-slate-200","ease-in-out","duration-200")},src:"./src/assets/icons/components/folder.svg"}),e.jsxs("div",{className:"flex flex-row",children:[e.jsx("a",{href:a.github,target:"_blank",className:`${a.github?"":"hidden"}`,children:e.jsx(l,{beforeInjection:s=>{s.classList.add("size-10","fill-slate-200","p-2","ease-in-out","duration-200","md:hover:-translate-y-[4px]","hover:fill-amber-400")},src:"./src/assets/icons/technology/github.svg"})}),e.jsx("a",{href:a.link,target:"_blank",className:`${a.link?"":"hidden"}`,children:e.jsx(l,{beforeInjection:s=>{s.classList.add("size-10","fill-slate-200","p-2","ease-in-out","duration-200","md:hover:-translate-y-[4px]","hover:fill-amber-400")},src:"./src/assets/icons/components/external-link.svg"})})]})]}),e.jsx("p",{className:"py-2 font-poppins font-medium text-base",children:a.title}),e.jsx("ul",{className:"flex flex-row space-x-3 text-xs",children:r.map((s,i)=>e.jsx("li",{className:"italic font-mono",children:s},i))}),e.jsx("p",{className:"py-4 text-sm",children:a.description}),e.jsx("div",{className:"flex flex-row",children:t.map((s,i)=>e.jsxs("div",{className:"flex flex-col flex-wrap items-center text-center",children:[e.jsx(l,{beforeInjection:n=>{n.classList.add("size-10","fill-slate-200","py-2")},src:`./src/assets/icons/technology/${s.src}`}),e.jsx("p",{className:"text-xs",children:s.name})]},i))})]})})}const u=o.memo(function(){const{data:t}=m(),r=o.useMemo(()=>(t==null?void 0:t.projects)||[],[t==null?void 0:t.projects]),{sectionRef:s,visibleItems:i}=x(r,400,.2);return e.jsx(e.Fragment,{children:e.jsxs("section",{className:"m-6",id:"projects",ref:s,children:[e.jsx(d,{number:"05.",title:"Projects",justify:"center",observerRef:s,animationDirection:"left",threshold:.1}),e.jsx("div",{className:"flex flex-col md:flex-row md:flex-wrap space-y-5 mx-auto md:items-center md:justify-center",children:r.map((n,c)=>e.jsx("div",{className:`transition ${i[c]?"animate-in fade-in slide-in-from-right-36":"opacity-0"} delay-200 duration-500`,children:e.jsx(f,{project:n,stack:n.stack,type:n.type},c)},c))})]})})});export{u as default};
