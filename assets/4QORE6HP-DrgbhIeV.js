import{o as _,c as D,a as w,b as zt,g as It,d as Ft,e as T,f as H,h as p,i as pt,u as Pe,j as h,m as I,k as u,t as v,l as V,s as j,n as ge,p as ue,q as Dt,r as Ht,v as Lt,w as Nt,x as Te,P as Ot,y as ce,S as B,T as Ee,z as Ut,A as ye,B as we,F as W,C as He,D as Le,E as Rt,G as ht,M as Qt,H as Be,I as Ne}from"./3OW54XWT-MUg0i3hV.js";import{x as Q,y as Oe}from"./index-DHYfrIZ1.js";import{E as qt}from"./plugin-W3ivlmy3.js";var jt="plugin-container",Vt="plugin-title-container";let Yt={data:""},Gt=t=>{if(typeof window=="object"){let e=(t?t.querySelector("#_goober"):window._goober)||Object.assign(document.createElement("style"),{innerHTML:" ",id:"_goober"});return e.nonce=window.__nonce__,e.parentNode||(t||document.head).appendChild(e),e.firstChild}return t||Yt},Wt=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,Kt=/\/\*[^]*?\*\/|  +/g,Ue=/\n+/g,ne=(t,e)=>{let o="",l="",c="";for(let s in t){let a=t[s];s[0]=="@"?s[1]=="i"?o=s+" "+a+";":l+=s[1]=="f"?ne(a,s):s+"{"+ne(a,s[1]=="k"?"":e)+"}":typeof a=="object"?l+=ne(a,e?e.replace(/([^,])+/g,r=>s.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g,n=>/&/.test(n)?n.replace(/&/g,r):r?r+" "+n:n)):s):a!=null&&(s=/^--/.test(s)?s:s.replace(/[A-Z]/g,"-$&").toLowerCase(),c+=ne.p?ne.p(s,a):s+":"+a+";")}return o+(e&&c?e+"{"+c+"}":c)+l},X={},ft=t=>{if(typeof t=="object"){let e="";for(let o in t)e+=o+ft(t[o]);return e}return t},Zt=(t,e,o,l,c)=>{let s=ft(t),a=X[s]||(X[s]=(n=>{let d=0,i=11;for(;d<n.length;)i=101*i+n.charCodeAt(d++)>>>0;return"go"+i})(s));if(!X[a]){let n=s!==t?t:(d=>{let i,g,f=[{}];for(;i=Wt.exec(d.replace(Kt,""));)i[4]?f.shift():i[3]?(g=i[3].replace(Ue," ").trim(),f.unshift(f[0][g]=f[0][g]||{})):f[0][i[1]]=i[2].replace(Ue," ").trim();return f[0]})(t);X[a]=ne(c?{["@keyframes "+a]:n}:n,o?"":"."+a)}let r=o&&X.g?X.g:null;return o&&(X.g=X[a]),((n,d,i,g)=>{g?d.data=d.data.replace(g,n):d.data.indexOf(n)===-1&&(d.data=i?n+d.data:d.data+n)})(X[a],e,l,r),a},Jt=(t,e,o)=>t.reduce((l,c,s)=>{let a=e[s];if(a&&a.call){let r=a(o),n=r&&r.props&&r.props.className||/^go/.test(r)&&r;a=n?"."+n:r&&typeof r=="object"?r.props?"":ne(r,""):r===!1?"":r}return l+c+(a??"")},"");function xe(t){let e=this||{},o=t.call?t(e.p):t;return Zt(o.unshift?o.raw?Jt(o,[].slice.call(arguments,1),e.p):o.reduce((l,c)=>Object.assign(l,c&&c.call?c(e.p):c),{}):o,Gt(e.target),e.g,e.o,e.k)}xe.bind({g:1});let ae=xe.bind({k:1});function Xt(t){return t!==null&&(typeof t=="object"||typeof t=="function")}const be=(t,e)=>t===e||t.length===e.length&&t.every((o,l)=>o===e[l]),Re=t=>typeof t=="function"&&!t.length?t():t,Qe=t=>Array.isArray(t)?t:t?[t]:[];function qe(t,...e){return typeof t=="function"?t(...e):t}const _t=_;function ie(t,e,o,l){return t.addEventListener(e,o,l),_t(t.removeEventListener.bind(t,e,o,l))}function je(t,e,o,l){const c=()=>{Qe(Re(t)).forEach(s=>{s&&Qe(Re(e)).forEach(a=>ie(s,a,o,l))})};typeof t=="function"?D(c):w(c)}function ze(t,e=It()){let o=0,l,c;return()=>(o++,_(()=>{o--,queueMicrotask(()=>{!o&&c&&(c(),c=l=void 0)})}),c||zt(s=>l=t(c=s),e),l)}function Ve(t,e){for(let o=t.length-1;o>=0;o--){const l=e.slice(0,o+1);if(!be(t[o],l))return!1}return!0}const mt=ze(()=>{const[t,e]=T(null);return ie(window,"keydown",o=>{e(o),setTimeout(()=>e(null))}),t}),vt=ze(()=>{const[t,e]=T([]),o=()=>e([]),l=mt();return ie(window,"keydown",c=>{if(c.repeat||typeof c.key!="string")return;const s=c.key.toUpperCase(),a=t();if(a.includes(s))return;const r=[...a,s];a.length===0&&s!=="ALT"&&s!=="CONTROL"&&s!=="META"&&s!=="SHIFT"&&(c.shiftKey&&r.unshift("SHIFT"),c.altKey&&r.unshift("ALT"),c.ctrlKey&&r.unshift("CONTROL"),c.metaKey&&r.unshift("META")),e(r)}),ie(window,"keyup",c=>{if(typeof c.key!="string")return;const s=c.key.toUpperCase();e(a=>a.filter(r=>r!==s))}),ie(window,"blur",o),ie(window,"contextmenu",c=>{c.defaultPrevented||o()}),t[0]=t,t[1]={event:l},t[Symbol.iterator]=function*(){yield t[0],yield t[1]},t}),er=ze(()=>{const t=vt();return H(e=>t().length===0?[]:[...e,t()],[])});function tr(t,e,o={}){if(!t.length)return;t=t.map(d=>d.toUpperCase());const{preventDefault:l=!0}=o,c=mt(),s=er();let a=!1;const r=d=>{if(!d.length)return a=!1;if(a)return;const i=c();d.length<t.length?Ve(d,t.slice(0,d.length))?l&&i&&i.preventDefault():a=!0:(a=!0,Ve(d,t)&&(l&&i&&i.preventDefault(),e(i)))},n=d=>{const i=d.at(-1);if(!i)return;const g=c();if(l&&i.length<t.length){be(i,t.slice(0,t.length-1))&&g&&g.preventDefault();return}if(be(i,t)){const f=d.at(-2);(!f||be(f,t.slice(0,t.length-1)))&&(l&&g&&g.preventDefault(),e(g))}};D(Ft(s,o.requireReset?r:n))}var bt=pt(void 0),rr=t=>{const[e,o]=T(t.theme);return D(()=>{o(t.theme)}),p(bt.Provider,{value:{theme:e,setTheme:o},get children(){return t.children}})};function nr(){const t=Pe(bt);if(!t)throw new Error("useTheme must be used within a ThemeContextProvider");return t}var m={colors:{inherit:"inherit",current:"currentColor",transparent:"transparent",black:"#000000",white:"#ffffff",neutral:{50:"#f9fafb",100:"#f2f4f7",200:"#eaecf0",300:"#d0d5dd",400:"#98a2b3",500:"#667085",600:"#475467",700:"#344054",800:"#1d2939",900:"#101828"},darkGray:{50:"#525c7a",100:"#49536e",200:"#414962",300:"#394056",400:"#313749",500:"#292e3d",600:"#212530",700:"#191c24",800:"#111318",900:"#0b0d10"},gray:{50:"#f9fafb",100:"#f2f4f7",200:"#eaecf0",300:"#d0d5dd",400:"#98a2b3",500:"#667085",600:"#475467",700:"#344054",800:"#1d2939",900:"#101828"},blue:{25:"#F5FAFF",50:"#EFF8FF",100:"#D1E9FF",200:"#B2DDFF",300:"#84CAFF",400:"#53B1FD",500:"#2E90FA",600:"#1570EF",700:"#175CD3",800:"#1849A9",900:"#194185"},green:{25:"#F6FEF9",50:"#ECFDF3",100:"#D1FADF",200:"#A6F4C5",300:"#6CE9A6",400:"#32D583",500:"#12B76A",600:"#039855",700:"#027A48",800:"#05603A",900:"#054F31"},red:{50:"#fef2f2",100:"#fee2e2",200:"#fecaca",300:"#fca5a5",400:"#f87171",500:"#ef4444",600:"#dc2626",700:"#b91c1c",800:"#991b1b",900:"#7f1d1d",950:"#450a0a"},yellow:{25:"#FFFCF5",50:"#FFFAEB",100:"#FEF0C7",200:"#FEDF89",300:"#FEC84B",400:"#FDB022",500:"#F79009",600:"#DC6803",700:"#B54708",800:"#93370D",900:"#7A2E0E"},purple:{25:"#FAFAFF",50:"#F4F3FF",100:"#EBE9FE",200:"#D9D6FE",300:"#BDB4FE",400:"#9B8AFB",500:"#7A5AF8",600:"#6938EF",700:"#5925DC",800:"#4A1FB8",900:"#3E1C96"},teal:{25:"#F6FEFC",50:"#F0FDF9",100:"#CCFBEF",200:"#99F6E0",300:"#5FE9D0",400:"#2ED3B7",500:"#15B79E",600:"#0E9384",700:"#107569",800:"#125D56",900:"#134E48"},pink:{25:"#fdf2f8",50:"#fce7f3",100:"#fbcfe8",200:"#f9a8d4",300:"#f472b6",400:"#ec4899",500:"#db2777",600:"#be185d",700:"#9d174d",800:"#831843",900:"#500724"},cyan:{25:"#ecfeff",50:"#cffafe",100:"#a5f3fc",200:"#67e8f9",300:"#22d3ee",400:"#06b6d4",500:"#0891b2",600:"#0e7490",700:"#155e75",800:"#164e63",900:"#083344"}},font:{size:{xs:"calc(var(--tsrd-font-size) * 0.75)",sm:"calc(var(--tsrd-font-size) * 0.875)",md:"var(--tsrd-font-size)"},lineHeight:{xs:"calc(var(--tsrd-font-size) * 1)"},weight:{medium:"500",semibold:"600",bold:"700"},fontFamily:{sans:"ui-sans-serif, Inter, system-ui, sans-serif, sans-serif",mono:"ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace"}},border:{radius:{xs:"calc(var(--tsrd-font-size) * 0.125)",sm:"calc(var(--tsrd-font-size) * 0.25)",full:"9999px"}},size:{.5:"calc(var(--tsrd-font-size) * 0.125)",1:"calc(var(--tsrd-font-size) * 0.25)",1.5:"calc(var(--tsrd-font-size) * 0.375)",2:"calc(var(--tsrd-font-size) * 0.5)",2.5:"calc(var(--tsrd-font-size) * 0.625)",3:"calc(var(--tsrd-font-size) * 0.75)",4.5:"calc(var(--tsrd-font-size) * 1.125)",6.5:"calc(var(--tsrd-font-size) * 1.625)",12:"calc(var(--tsrd-font-size) * 3)"},shadow:{xs:(t="rgb(0 0 0 / 0.1)")=>"0 1px 2px 0 rgb(0 0 0 / 0.05)",sm:(t="rgb(0 0 0 / 0.1)")=>`0 1px 3px 0 ${t}, 0 1px 2px -1px ${t}`,md:(t="rgb(0 0 0 / 0.1)")=>`0 4px 6px -1px ${t}, 0 2px 4px -2px ${t}`,lg:(t="rgb(0 0 0 / 0.1)")=>`0 10px 15px -3px ${t}, 0 4px 6px -4px ${t}`,xl:(t="rgb(0 0 0 / 0.1)")=>`0 20px 25px -5px ${t}, 0 8px 10px -6px ${t}`,"2xl":(t="rgb(0 0 0 / 0.25)")=>`0 25px 50px -12px ${t}`,inner:(t="rgb(0 0 0 / 0.05)")=>`inset 0 2px 4px 0 ${t}`,none:()=>"none"}},ar={primary:{bg:{light:m.colors.gray[900],dark:m.colors.gray[100]},hover:{light:m.colors.gray[800],dark:m.colors.gray[200]},active:{light:m.colors.gray[700],dark:m.colors.gray[300]},text:{light:"#fff",dark:m.colors.gray[900]},border:{light:m.colors.gray[800],dark:m.colors.gray[200]},outline:{light:m.colors.gray[900],dark:m.colors.gray[100]},outlineHover:{light:m.colors.gray[800],dark:m.colors.gray[200]}},secondary:{bg:{light:m.colors.gray[100],dark:m.colors.gray[100]},hover:{light:m.colors.gray[200],dark:m.colors.gray[200]},active:{light:m.colors.gray[300],dark:m.colors.gray[300]},text:{light:m.colors.gray[900],dark:m.colors.gray[900]},border:{light:m.colors.gray[300],dark:m.colors.gray[300]},outline:{light:m.colors.gray[700],dark:m.colors.gray[300]},outlineHover:{light:m.colors.gray[800],dark:m.colors.gray[200]}},info:{bg:{light:m.colors.blue[500],dark:m.colors.blue[500]},hover:{light:m.colors.blue[600],dark:m.colors.blue[600]},active:{light:m.colors.blue[700],dark:m.colors.blue[700]},text:{light:"#fff",dark:"#fff"},border:{light:m.colors.blue[500],dark:m.colors.blue[500]},outline:{light:m.colors.blue[700],dark:m.colors.blue[300]},outlineHover:{light:m.colors.blue[600],dark:m.colors.blue[200]}},warning:{bg:{light:m.colors.yellow[500],dark:m.colors.yellow[500]},hover:{light:m.colors.yellow[600],dark:m.colors.yellow[600]},active:{light:m.colors.yellow[700],dark:m.colors.yellow[700]},text:{light:"#fff",dark:"#fff"},border:{light:m.colors.yellow[500],dark:m.colors.yellow[500]},outline:{light:m.colors.yellow[700],dark:m.colors.yellow[300]},outlineHover:{light:m.colors.yellow[600],dark:m.colors.yellow[200]}},danger:{bg:{light:m.colors.red[500],dark:m.colors.red[500]},hover:{light:m.colors.red[600],dark:m.colors.red[600]},active:{light:m.colors.red[700],dark:m.colors.red[700]},text:{light:"#fff",dark:"#fff"},border:{light:m.colors.red[500],dark:m.colors.red[500]},outline:{light:m.colors.red[700],dark:m.colors.red[300]},outlineHover:{light:m.colors.red[600],dark:m.colors.red[200]}},success:{bg:{light:m.colors.green[500],dark:m.colors.green[500]},hover:{light:m.colors.green[600],dark:m.colors.green[600]},active:{light:m.colors.green[700],dark:m.colors.green[700]},text:{light:"#fff",dark:"#fff"},border:{light:m.colors.green[500],dark:m.colors.green[500]},outline:{light:m.colors.green[700],dark:m.colors.green[300]},outlineHover:{light:m.colors.green[600],dark:m.colors.green[200]}}},M=xe,Ye=t=>{const{colors:e,font:o,size:l,border:c}=m,{fontFamily:s}=o,a=(i,g)=>t==="light"?i:g,r=i=>{const g=ar[i],f=a(g.outline.light,g.outline.dark),k=a(g.outlineHover.light,g.outlineHover.dark),b=a(g.bg.light,g.bg.dark),y=a(g.hover.light,g.hover.dark),x=a(g.active.light,g.active.dark),C=a(g.text.light,g.text.dark),$=a(g.border.light,g.border.dark);return{ghost:M`
        background: transparent;
        color: ${f};
        border-color: transparent;
        &:hover {
          background: ${a(e.gray[100],e.darkGray[800])};
          color: ${k};
        }
        &:active {
          background: ${a(e.gray[200],e.darkGray[700])};
          color: ${k};
        }
      `,outline:M`
        background: transparent;
        color: ${f};
        border-color: ${f};
        &:hover {
          background: ${a(e.gray[50],e.darkGray[800])};
          color: ${k};
          border-color: ${k};
        }
        &:active {
          background: ${a(e.gray[100],e.darkGray[700])};
          color: ${k};
          border-color: ${k};
        }
      `,solid:M`
        background: ${b};
        color: ${C};
        border-color: ${$};
        &:hover {
          background: ${y};
          border-color: ${y};
          box-shadow: ${a(m.shadow.xs("rgb(0 0 0 / 0.12)"),m.shadow.xs("rgb(0 0 0 / 0.5)"))};
        }
        &:active {
          background: ${x};
          border-color: ${x};
          box-shadow: ${a(m.shadow.inner("rgb(0 0 0 / 0.2)"),m.shadow.inner("rgb(0 0 0 / 0.6)"))};
        }
      `}},n={primary:r("primary"),secondary:r("secondary"),info:r("info"),warning:r("warning"),danger:r("danger"),success:r("success")},d=320;return{logo:M`
      cursor: pointer;
      display: flex;
      flex-direction: column;
      background-color: transparent;
      border: none;
      width: ${l[12]};
      height: ${l[12]};
      font-family: ${s.sans};
      gap: ${m.size[.5]};
      padding: 0;
      &:hover {
        opacity: 0.7;
      }
    `,selectWrapper:M`
      width: 100%;
      max-width: ${d}px;
      display: flex;
      flex-direction: column;
      gap: 0.375rem;
    `,selectContainer:M`
      width: 100%;
    `,selectLabel:M`
      font-size: 0.875rem;
      font-weight: 500;
      color: ${a(e.gray[900],e.gray[100])};
      text-align: left;
    `,selectDescription:M`
      font-size: 0.8rem;
      color: ${a(e.gray[500],e.gray[400])};
      margin: 0;
      line-height: 1.3;
      text-align: left;
    `,select:M`
      appearance: none;
      width: 100%;
      padding: 0.5rem 3rem 0.5rem 0.75rem;
      border-radius: 0.375rem;
      background-color: ${a(e.gray[50],e.darkGray[800])};
      color: ${a(e.gray[900],e.gray[100])};
      border: 1px solid ${a(e.gray[200],e.gray[800])};
      font-size: 0.875rem;
      transition: all 0.15s ease;
      cursor: pointer;

      /* Custom arrow */
      background-image: url("data:image/svg+xml;utf8,<svg fill='%236b7280' height='20' viewBox='0 0 24 24' width='20' xmlns='http://www.w3.org/2000/svg'><path d='M7 10l5 5 5-5z'/></svg>");
      background-repeat: no-repeat;
      background-position: right 0.75rem center;
      background-size: 1.25rem;

      &:hover {
        border-color: ${a(e.gray[300],e.gray[700])};
      }

      &:focus {
        outline: none;
        border-color: ${e.gray[400]};
        box-shadow: 0 0 0 3px ${a(e.gray[200],e.gray[800])};
      }
    `,inputWrapper:M`
      width: 100%;
      max-width: ${d}px;
      display: flex;
      flex-direction: column;
      gap: 0.375rem;
    `,inputContainer:M`
      width: 100%;
    `,inputLabel:M`
      font-size: 0.875rem;
      font-weight: 500;
      color: ${a(e.gray[900],e.gray[100])};
      text-align: left;
    `,inputDescription:M`
      font-size: 0.8rem;
      color: ${a(e.gray[500],e.gray[400])};
      margin: 0;
      line-height: 1.3;
      text-align: left;
    `,input:M`
      appearance: none;
      box-sizing: border-box;
      width: 100%;
      padding: 0.5rem 0.75rem;
      border-radius: 0.375rem;
      background-color: ${a(e.gray[50],e.darkGray[800])};
      color: ${a(e.gray[900],e.gray[100])};
      border: 1px solid ${a(e.gray[200],e.gray[800])};
      font-size: 0.875rem;
      font-family: ${s.mono};
      transition: all 0.15s ease;

      &::placeholder {
        color: ${a(e.gray[400],e.gray[500])};
      }

      &:hover {
        border-color: ${a(e.gray[300],e.gray[700])};
      }

      &:focus {
        outline: none;
        border-color: ${a(e.gray[400],e.gray[600])};
        box-shadow: 0 0 0 3px ${a(e.gray[200],e.gray[800])};
      }
    `,checkboxWrapper:M`
      display: flex;
      align-items: flex-start;
      gap: 0.75rem;
      cursor: pointer;
      user-select: none;
      padding: 0.375rem;
      border-radius: 0.375rem;
      transition: background-color 0.15s ease;

      &:hover {
        background-color: ${a(e.gray[50],e.darkGray[900])};
      }
    `,checkboxContainer:M`
      width: 100%;
    `,checkboxLabelContainer:M`
      display: flex;
      flex-direction: column;
      gap: 0.25rem;
      flex: 1;
    `,checkbox:M`
      appearance: none;
      width: 1.25rem;
      height: 1.25rem;
      border: 2px solid ${a(e.gray[300],e.gray[700])};
      border-radius: 0.25rem;
      background-color: ${a(e.gray[50],e.darkGray[800])};
      display: grid;
      place-items: center;
      transition: all 0.15s ease;
      flex-shrink: 0;
      margin-top: 0.125rem;

      &:hover {
        border-color: ${a(e.gray[400],e.gray[600])};
      }

      &:checked {
        background-color: ${a(e.gray[900],e.gray[100])};
        border-color: ${a(e.gray[900],e.gray[100])};
      }

      &:checked::after {
        content: '';
        width: 0.4rem;
        height: 0.6rem;
        border: solid ${a("#fff",e.gray[900])};
        border-width: 0 2px 2px 0;
        transform: rotate(45deg);
        margin-top: -3px;
      }
    `,checkboxLabel:M`
      color: ${a(e.gray[900],e.gray[100])};
      font-size: 0.875rem;
      font-weight: 500;
      line-height: 1.4;
      text-align: left;
    `,checkboxDescription:M`
      color: ${a(e.gray[500],e.gray[400])};
      font-size: 0.8rem;
      line-height: 1.3;
      text-align: left;
    `,button:{base:M`
        display: inline-flex;
        align-items: center;
        justify-content: center;
        font-family: ${m.font.fontFamily.sans};
        font-size: 0.8rem;
        font-weight: 500;
        border-radius: 0.375rem;
        padding: 0.375rem 0.75rem;
        cursor: pointer;
        transition:
          background 0.15s,
          color 0.15s,
          border 0.15s,
          box-shadow 0.15s;
        outline: none;
        border-width: 1px;
        border-style: solid;
      `,variant(i,g,f){const k=n[i];return f?k.ghost:g?k.outline:k.solid}},tag:{dot:i=>M`
        width: ${m.size[1.5]};
        height: ${m.size[1.5]};
        border-radius: ${m.border.radius.full};
        background-color: ${a(m.colors[i][500],m.colors[i][500])};
      `,base:M`
        display: flex;
        gap: ${m.size[1.5]};
        box-sizing: border-box;
        height: ${m.size[6.5]};
        background: ${a(e.gray[50],e.darkGray[500])};
        color: ${a(e.gray[700],e.gray[300])};
        border-radius: ${m.border.radius.sm};
        font-size: ${o.size.sm};
        padding: ${m.size[1]};
        padding-left: ${m.size[1.5]};
        align-items: center;
        font-weight: ${o.weight.medium};
        border: ${a("1px solid "+e.gray[300],"1px solid transparent")};
        user-select: none;
        position: relative;
        &:focus-visible {
          outline-offset: 2px;
          outline: 2px solid ${a(e.blue[700],e.blue[800])};
        }
      `,label:M`
        font-size: ${o.size.xs};
      `,count:M`
        font-size: ${o.size.xs};
        padding: 0 5px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: ${a(e.gray[500],e.gray[400])};
        background-color: ${a(e.gray[200],e.darkGray[300])};
        border-radius: 2px;
        font-variant-numeric: tabular-nums;
        height: ${m.size[4.5]};
      `},tree:{info:M`
        color: ${a(e.gray[500],e.gray[500])};
        font-size: ${o.size.xs};
        margin-right: ${l[1]};
      `,actionButton:M`
        background-color: transparent;
        color: ${a(e.gray[500],e.gray[500])};
        border: none;
        display: inline-flex;
        padding: 0;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        width: ${l[3]};
        height: ${l[3]};
        position: relative;
        z-index: 1;

        &:hover svg {
          color: ${a(e.gray[600],e.gray[400])};
        }

        &:focus-visible {
          border-radius: ${c.radius.xs};
          outline: 2px solid ${a(e.blue[700],e.blue[800])};
          outline-offset: 2px;
        }
      `,expanderContainer:M`
        position: relative;
      `,expander:M`
        position: absolute;
        cursor: pointer;
        left: -16px;
        top: 3px;
        & path {
          stroke: ${a(e.blue[400],e.blue[300])};
        }
        & svg {
          width: ${l[3]};
          height: ${l[3]};
        }

        display: inline-flex;
        align-items: center;
        transition: all 0.1s ease;
      `,expandedLine:i=>M`
        display: block;
        padding-left: 0.75rem;
        margin-left: -0.7rem;
        ${i?`border-left: 1px solid ${a(e.blue[400],e.blue[300])};`:""}
      `,collapsible:M`
        cursor: pointer;
        transition: all 0.2s ease;
        &:hover {
          background-color: ${a(e.gray[100],e.darkGray[700])};
          border-radius: ${m.border.radius.sm};
          padding: 0 ${m.size[1]};
        }
      `,actions:M`
        display: inline-flex;
        margin-left: ${l[2]};
        gap: ${l[2]};
        align-items: center;
        & svg {
          height: 12px;
          width: 12px;
        }
      `,valueCollapsed:M`
        color: ${a(e.gray[500],e.gray[400])};
      `,valueFunction:M`
        color: ${a(e.cyan[500],e.cyan[400])};
      `,valueString:M`
        color: ${a(e.green[500],e.green[400])};
      `,valueNumber:M`
        color: ${a(e.yellow[500],e.yellow[400])};
      `,valueBoolean:M`
        color: ${a(e.pink[500],e.pink[400])};
      `,valueNull:M`
        color: ${a(e.gray[500],e.gray[400])};
        font-style: italic;
      `,valueKey:M`
        color: ${a(e.blue[400],e.blue[300])};
      `,valueBraces:M`
        color: ${e.gray[500]};
      `,valueContainer:i=>M`
        display: block;
        margin-left: ${i?"0":"1rem"};

        &:not(:hover) .actions {
          display: none;
        }

        &:hover .actions {
          display: inline-flex;
        }
      `},header:{row:M`
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: ${m.size[2]} ${m.size[2.5]};
        gap: ${m.size[2.5]};
        border-bottom: ${a(e.gray[300],e.darkGray[500])} 1px solid;
        align-items: center;
      `,logoAndToggleContainer:M`
        display: flex;
        gap: ${m.size[3]};
        align-items: center;
        & > button {
          padding: 0;
          background: transparent;
          border: none;
          display: flex;
          gap: ${l[.5]};
          flex-direction: column;
        }
      `,logo:M`
        cursor: pointer;
        display: flex;
        flex-direction: column;
        background-color: transparent;
        border: none;
        gap: ${m.size[.5]};
        padding: 0;
        &:hover {
          opacity: 0.7;
        }
        &:focus-visible {
          outline-offset: 4px;
          border-radius: ${c.radius.xs};
          outline: 2px solid ${e.blue[800]};
        }
      `,tanstackLogo:M`
        font-size: ${o.size.md};
        font-weight: ${o.weight.bold};
        line-height: ${o.lineHeight.xs};
        white-space: nowrap;
        color: ${a(e.gray[700],e.gray[300])};
      `,flavorLogo:(i,g)=>M`
        font-weight: ${o.weight.semibold};
        font-size: ${o.size.xs};
        background: linear-gradient(to right, ${a(i,g)});
        background-clip: text;
        -webkit-background-clip: text;
        line-height: 1;
        -webkit-text-fill-color: transparent;
        white-space: nowrap;
      `},section:{main:M`
        margin-bottom: 1.5rem;
        padding: 1rem;
        background-color: ${a(e.gray[50],e.darkGray[800])};
        border: 1px solid ${a(e.gray[200],e.gray[800])};
        border-radius: 0.5rem;
        box-shadow: none;
      `,title:M`
        font-size: 1rem;
        font-weight: 600;
        color: ${a(e.gray[900],e.gray[100])};
        margin: 0 0 0.75rem 0;
        padding-bottom: 0.5rem;
        border-bottom: 1px solid ${a(e.gray[200],e.gray[800])};
        display: flex;
        align-items: center;
        gap: 0.5rem;
        text-align: left;
      `,icon:M`
        height: 18px;
        width: 18px;
        & > svg {
          height: 100%;
          width: 100%;
        }
        color: ${a(e.gray[700],e.gray[400])};
      `,description:M`
        color: ${a(e.gray[500],e.gray[400])};
        font-size: 0.8rem;
        margin: 0 0 1rem 0;
        line-height: 1.4;
        text-align: left;
      `},mainPanel:{panel:i=>M`
        padding: ${i?m.size[3]:0};
        background: ${a(e.gray[50],e.darkGray[700])};
        overflow-y: auto;
        height: 100%;
      `}}};function ee(){const{theme:t}=nr(),[e,o]=T(Ye(t()));return D(()=>{o(Ye(t()))}),e}var or=v("<div><label><input type=checkbox><div>"),Ge=v("<span>");function de(t){const e=ee(),[o,l]=T(t.checked||!1),c=s=>{const a=s.target.checked;l(a),t.onChange?.(a)};return(()=>{var s=or(),a=s.firstChild,r=a.firstChild,n=r.nextSibling;return r.$$input=c,h(n,(()=>{var d=I(()=>!!t.label);return()=>d()&&(()=>{var i=Ge();return h(i,()=>t.label),w(()=>u(i,e().checkboxLabel)),i})()})(),null),h(n,(()=>{var d=I(()=>!!t.description);return()=>d()&&(()=>{var i=Ge();return h(i,()=>t.description),w(()=>u(i,e().checkboxDescription)),i})()})(),null),w(d=>{var i=e().checkboxContainer,g=e().checkboxWrapper,f=e().checkbox,k=e().checkboxLabelContainer;return i!==d.e&&u(s,d.e=i),g!==d.t&&u(a,d.t=g),f!==d.a&&u(r,d.a=f),k!==d.o&&u(n,d.o=k),d},{e:void 0,t:void 0,a:void 0,o:void 0}),w(()=>r.checked=o()),s})()}V(["input"]);var ir=v("<div><div><input>"),lr=v("<label>"),sr=v("<p>");function yt(t){const e=ee(),[o,l]=T(t.value||""),c=s=>{const a=s.target.value;l(r=>r!==a?a:r),t.onChange?.(a)};return(()=>{var s=ir(),a=s.firstChild,r=a.firstChild;return h(a,(()=>{var n=I(()=>!!t.label);return()=>n()&&(()=>{var d=lr();return h(d,()=>t.label),w(()=>u(d,e().inputLabel)),d})()})(),r),h(a,(()=>{var n=I(()=>!!t.description);return()=>n()&&(()=>{var d=sr();return h(d,()=>t.description),w(()=>u(d,e().inputDescription)),d})()})(),r),r.$$input=c,w(n=>{var d=e().inputContainer,i=e().inputWrapper,g=t.type||"text",f=e().input,k=t.placeholder;return d!==n.e&&u(s,n.e=d),i!==n.t&&u(a,n.t=i),g!==n.a&&j(r,"type",n.a=g),f!==n.o&&u(r,n.o=f),k!==n.i&&j(r,"placeholder",n.i=k),n},{e:void 0,t:void 0,a:void 0,o:void 0,i:void 0}),w(()=>r.value=o()),s})()}V(["input"]);var cr=v("<div><div><select>"),dr=v("<label>"),gr=v("<p>"),ur=v("<option>");function Se(t){const e=ee(),[o,l]=T(t.value||t.options[0]?.value),c=s=>{const a=s.target.value;l(r=>r!==a?a:r),t.onChange?.(a)};return(()=>{var s=cr(),a=s.firstChild,r=a.firstChild;return h(a,(()=>{var n=I(()=>!!t.label);return()=>n()&&(()=>{var d=dr();return h(d,()=>t.label),w(()=>u(d,e().selectLabel)),d})()})(),r),h(a,(()=>{var n=I(()=>!!t.description);return()=>n()&&(()=>{var d=gr();return h(d,()=>t.description),w(()=>u(d,e().selectDescription)),d})()})(),r),r.$$input=c,h(r,()=>t.options.map(n=>(()=>{var d=ur();return h(d,()=>n.label),w(()=>d.value=n.value),d})())),w(n=>{var d=e().selectContainer,i=e().selectWrapper,g=e().select;return d!==n.e&&u(s,n.e=d),i!==n.t&&u(a,n.t=i),g!==n.a&&u(r,n.a=g),n},{e:void 0,t:void 0,a:void 0}),w(()=>r.value=o()),s})()}V(["input"]);var pr=v('<svg xmlns=http://www.w3.org/2000/svg width=24 height=24 viewBox="0 0 24 24"fill=none stroke=currentColor stroke-width=2 stroke-linecap=round stroke-linejoin=round><path d="M8 6h10"></path><path d="M6 12h9"></path><path d="M11 18h7">'),hr=v('<svg xmlns=http://www.w3.org/2000/svg width=24 height=24 viewBox="0 0 24 24"fill=none stroke=currentColor stroke-width=2 stroke-linecap=round stroke-linejoin=round class="lucide lucide-file-search2-icon lucide-file-search-2"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path><path d="M14 2v4a2 2 0 0 0 2 2h4"></path><circle cx=11.5 cy=14.5 r=2.5></circle><path d="M13.3 16.3 15 18">'),fr=v('<svg xmlns=http://www.w3.org/2000/svg width=24 height=24 viewBox="0 0 24 24"fill=none stroke=currentColor stroke-width=2 stroke-linecap=round stroke-linejoin=round><path d="M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z"></path><path d="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"></path><path d="M12 2v2"></path><path d="M12 22v-2"></path><path d="m17 20.66-1-1.73"></path><path d="M11 10.27 7 3.34"></path><path d="m20.66 17-1.73-1"></path><path d="m3.34 7 1.73 1"></path><path d="M14 12h8"></path><path d="M2 12h2"></path><path d="m20.66 7-1.73 1"></path><path d="m3.34 17 1.73-1"></path><path d="m17 3.34-1 1.73"></path><path d="m11 13.73-4 6.93">'),mr=v('<svg xmlns=http://www.w3.org/2000/svg width=20 height=20 viewBox="0 0 24 24"fill=none stroke=currentColor stroke-width=2 stroke-linecap=round stroke-linejoin=round><path d="m10 9-3 3 3 3"></path><path d="m14 15 3-3-3-3"></path><path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719">'),vr=v('<svg xmlns=http://www.w3.org/2000/svg width=20 height=20 viewBox="0 0 24 24"fill=none stroke=currentColor stroke-width=2 stroke-linecap=round stroke-linejoin=round><path d="M10 8h.01"></path><path d="M12 12h.01"></path><path d="M14 8h.01"></path><path d="M16 12h.01"></path><path d="M18 8h.01"></path><path d="M6 8h.01"></path><path d="M7 16h10"></path><path d="M8 12h.01"></path><rect width=20 height=16 x=2 y=4 rx=2>'),br=v('<svg xmlns=http://www.w3.org/2000/svg width=20 height=20 viewBox="0 0 24 24"fill=none stroke=currentColor stroke-width=2 stroke-linecap=round stroke-linejoin=round><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx=12 cy=10 r=3>'),yr=v('<svg xmlns=http://www.w3.org/2000/svg width=20 height=20 viewBox="0 0 24 24"fill=none stroke=currentColor stroke-width=2 stroke-linecap=round stroke-linejoin=round><path d="M9 17H7A5 5 0 0 1 7 7h2"></path><path d="M15 7h2a5 5 0 1 1 0 10h-2"></path><line x1=8 x2=16 y1=12 y2=12>'),kr=v('<svg xmlns=http://www.w3.org/2000/svg width=24 height=24 viewBox="0 0 24 24"fill=none stroke=currentColor stroke-width=2 stroke-linecap=round stroke-linejoin=round><path d="M18 6 6 18"></path><path d="m6 6 12 12">'),wr=v('<svg width=20 height=20 viewBox="0 0 24 24"fill=none xmlns=http://www.w3.org/2000/svg><path d="M16.5 9.39999L7.5 4.20999M12 17.5L12 3M21 16V7.99999C20.9996 7.64926 20.9071 7.30481 20.7315 7.00116C20.556 6.69751 20.3037 6.44536 20 6.26999L13 2.26999C12.696 2.09446 12.3511 2.00204 12 2.00204C11.6489 2.00204 11.304 2.09446 11 2.26999L4 6.26999C3.69626 6.44536 3.44398 6.69751 3.26846 7.00116C3.09294 7.30481 3.00036 7.64926 3 7.99999V16C3.00036 16.3507 3.09294 16.6952 3.26846 16.9988C3.44398 17.3025 3.69626 17.5546 4 17.73L11 21.73C11.304 21.9055 11.6489 21.998 12 21.998C12.3511 21.998 12.696 21.9055 13 21.73L20 17.73C20.3037 17.5546 20.556 17.3025 20.7315 16.9988C20.9071 16.6952 20.9996 16.3507 21 16Z"stroke=currentColor stroke-width=2 stroke-linecap=round stroke-linejoin=round>'),xr=v('<svg width=18 height=18 viewBox="0 0 24 24"fill=none xmlns=http://www.w3.org/2000/svg><path d="M22 11.08V12C21.9988 14.1564 21.3005 16.2547 20.0093 17.9818C18.7182 19.7088 16.9033 20.9725 14.8354 21.5839C12.7674 22.1953 10.5573 22.1219 8.53447 21.3746C6.51168 20.6273 4.78465 19.2461 3.61096 17.4371C2.43727 15.628 1.87979 13.4881 2.02168 11.3363C2.16356 9.18455 2.99721 7.13631 4.39828 5.49706C5.79935 3.85781 7.69279 2.71537 9.79619 2.24013C11.8996 1.76489 14.1003 1.98232 16.07 2.85999M22 4L12 14.01L9 11.01"stroke=currentColor stroke-width=2 stroke-linecap=round stroke-linejoin=round>'),Cr=v('<svg width=18 height=18 viewBox="0 0 24 24"fill=none xmlns=http://www.w3.org/2000/svg><path d="M15 9L9 15M9 9L15 15M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"stroke=currentColor stroke-width=2 stroke-linecap=round stroke-linejoin=round>'),Sr=v('<svg width=20 height=20 viewBox="0 0 24 24"fill=none xmlns=http://www.w3.org/2000/svg><path d="M6 9L12 15L18 9"stroke=currentColor stroke-width=2 stroke-linecap=round stroke-linejoin=round>'),Mr=v('<svg width=18 height=18 viewBox="0 0 24 24"fill=none xmlns=http://www.w3.org/2000/svg><path d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"stroke=currentColor stroke-width=2 stroke-linecap=round stroke-linejoin=round>'),$r=v('<svg width=12 height=12 viewBox="0 0 24 24"fill=none xmlns=http://www.w3.org/2000/svg><path d="M21 13V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H11M15 3H21M21 3V9M21 3L10 14"stroke=currentColor stroke-width=2 stroke-linecap=round stroke-linejoin=round>'),Ar=v('<svg width=20 height=20 viewBox="0 0 24 24"fill=none xmlns=http://www.w3.org/2000/svg><path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z"stroke=currentColor stroke-width=2 stroke-linecap=round stroke-linejoin=round></path><path d="M19.4 15C19.2669 15.3016 19.2272 15.6362 19.286 15.9606C19.3448 16.285 19.4995 16.5843 19.73 16.82L19.79 16.88C19.976 17.0657 20.1235 17.2863 20.2241 17.5291C20.3248 17.7719 20.3766 18.0322 20.3766 18.295C20.3766 18.5578 20.3248 18.8181 20.2241 19.0609C20.1235 19.3037 19.976 19.5243 19.79 19.71C19.6043 19.896 19.3837 20.0435 19.1409 20.1441C18.8981 20.2448 18.6378 20.2966 18.375 20.2966C18.1122 20.2966 17.8519 20.2448 17.6091 20.1441C17.3663 20.0435 17.1457 19.896 16.96 19.71L16.9 19.65C16.6643 19.4195 16.365 19.2648 16.0406 19.206C15.7162 19.1472 15.3816 19.1869 15.08 19.32C14.7842 19.4468 14.532 19.6572 14.3543 19.9255C14.1766 20.1938 14.0813 20.5082 14.08 20.83V21C14.08 21.5304 13.8693 22.0391 13.4942 22.4142C13.1191 22.7893 12.6104 23 12.08 23C11.5496 23 11.0409 22.7893 10.6658 22.4142C10.2907 22.0391 10.08 21.5304 10.08 21V20.91C10.0723 20.579 9.96512 20.258 9.77251 19.9887C9.5799 19.7194 9.31074 19.5143 9 19.4C8.69838 19.2669 8.36381 19.2272 8.03941 19.286C7.71502 19.3448 7.41568 19.4995 7.18 19.73L7.12 19.79C6.93425 19.976 6.71368 20.1235 6.47088 20.2241C6.22808 20.3248 5.96783 20.3766 5.705 20.3766C5.44217 20.3766 5.18192 20.3248 4.93912 20.2241C4.69632 20.1235 4.47575 19.976 4.29 19.79C4.10405 19.6043 3.95653 19.3837 3.85588 19.1409C3.75523 18.8981 3.70343 18.6378 3.70343 18.375C3.70343 18.1122 3.75523 17.8519 3.85588 17.6091C3.95653 17.3663 4.10405 17.1457 4.29 16.96L4.35 16.9C4.58054 16.6643 4.73519 16.365 4.794 16.0406C4.85282 15.7162 4.81312 15.3816 4.68 15.08C4.55324 14.7842 4.34276 14.532 4.07447 14.3543C3.80618 14.1766 3.49179 14.0813 3.17 14.08H3C2.46957 14.08 1.96086 13.8693 1.58579 13.4942C1.21071 13.1191 1 12.6104 1 12.08C1 11.5496 1.21071 11.0409 1.58579 10.6658C1.96086 10.2907 2.46957 10.08 3 10.08H3.09C3.42099 10.0723 3.742 9.96512 4.0113 9.77251C4.28059 9.5799 4.48572 9.31074 4.6 9C4.73312 8.69838 4.77282 8.36381 4.714 8.03941C4.65519 7.71502 4.50054 7.41568 4.27 7.18L4.21 7.12C4.02405 6.93425 3.87653 6.71368 3.77588 6.47088C3.67523 6.22808 3.62343 5.96783 3.62343 5.705C3.62343 5.44217 3.67523 5.18192 3.77588 4.93912C3.87653 4.69632 4.02405 4.47575 4.21 4.29C4.39575 4.10405 4.61632 3.95653 4.85912 3.85588C5.10192 3.75523 5.36217 3.70343 5.625 3.70343C5.88783 3.70343 6.14808 3.75523 6.39088 3.85588C6.63368 3.95653 6.85425 4.10405 7.04 4.29L7.1 4.35C7.33568 4.58054 7.63502 4.73519 7.95941 4.794C8.28381 4.85282 8.61838 4.81312 8.92 4.68H9C9.29577 4.55324 9.54802 4.34276 9.72569 4.07447C9.90337 3.80618 9.99872 3.49179 10 3.17V3C10 2.46957 10.2107 1.96086 10.5858 1.58579C10.9609 1.21071 11.4696 1 12 1C12.5304 1 13.0391 1.21071 13.4142 1.58579C13.7893 1.96086 14 2.46957 14 3V3.09C14.0013 3.41179 14.0966 3.72618 14.2743 3.99447C14.452 4.26276 14.7042 4.47324 15 4.6C15.3016 4.73312 15.6362 4.77282 15.9606 4.714C16.285 4.65519 16.5843 4.50054 16.82 4.27L16.88 4.21C17.0657 4.02405 17.2863 3.87653 17.5291 3.77588C17.7719 3.67523 18.0322 3.62343 18.295 3.62343C18.5578 3.62343 18.8181 3.67523 19.0609 3.77588C19.3037 3.87653 19.5243 4.02405 19.71 4.21C19.896 4.39575 20.0435 4.61632 20.1441 4.85912C20.2448 5.10192 20.2966 5.36217 20.2966 5.625C20.2966 5.88783 20.2448 6.14808 20.1441 6.39088C20.0435 6.63368 19.896 6.85425 19.71 7.04L19.65 7.1C19.4195 7.33568 19.2648 7.63502 19.206 7.95941C19.1472 8.28381 19.1869 8.61838 19.32 8.92V9C19.4468 9.29577 19.6572 9.54802 19.9255 9.72569C20.1938 9.90337 20.5082 9.99872 20.83 10H21C21.5304 10 22.0391 10.2107 22.4142 10.5858C22.7893 10.9609 23 11.4696 23 12C23 12.5304 22.7893 13.0391 22.4142 13.4142C22.0391 13.7893 21.5304 14 21 14H20.91C20.5882 14.0013 20.2738 14.0966 20.0055 14.2743C19.7372 14.452 19.5268 14.7042 19.4 15Z"stroke=currentColor stroke-width=2 stroke-linecap=round stroke-linejoin=round>'),Pr=v('<svg width=20 height=20 viewBox="0 0 24 24"fill=none xmlns=http://www.w3.org/2000/svg><path d="M18 6L6 18M6 6L18 18"stroke=currentColor stroke-width=2 stroke-linecap=round stroke-linejoin=round>'),Tr=v('<svg xmlns=http://www.w3.org/2000/svg width=24 height=24 viewBox="0 0 24 24"fill=none stroke=currentColor stroke-width=2 stroke-linecap=round stroke-linejoin=round><path d="M2 10h6V4"></path><path d="m2 4 6 6"></path><path d="M21 10V7a2 2 0 0 0-2-2h-7"></path><path d="M3 14v2a2 2 0 0 0 2 2h3"></path><rect x=12 y=14 width=10 height=7 rx=1>');function Er(){return pr()}function Br(){return hr()}function zr(){return fr()}function Ir(){return mr()}function Fr(){return vr()}function Dr(){return br()}function Hr(){return yr()}function Lr(){return kr()}function Nr(){return wr()}function Or(){return xr()}function Ur(){return Cr()}function Rr(){return Sr()}function Qr(){return Mr()}function qr(){return $r()}function jr(){return Ar()}function Vr(){return Pr()}function Yr(){return Tr()}var Gr=v("<button>");function kt(t){const e=ee(),o=H(()=>{const l=t.variant||"primary";return Q(e().button.base,e().button.variant(l,t.outline,t.ghost),t.className)});return(()=>{var l=Gr();return ge(l,ue(t,{get class(){return o()}}),!1),h(l,()=>t.children),l})()}var Wr=v("<div>"),wt=({className:t,children:e,class:o,withPadding:l})=>{const c=ee();return(()=>{var s=Wr();return h(s,e),w(()=>u(s,Q(c().mainPanel.panel(!!l),t,o))),s})()},Kr=v("<section>"),Zr=v("<h3>"),Jr=v("<p>"),Xr=v("<span>"),le=({children:t,...e})=>{const o=ee();return(()=>{var l=Kr();return ge(l,ue({get class(){return Q(o().section.main,e.class)}},e),!1),h(l,t),l})()},he=({children:t,...e})=>{const o=ee();return(()=>{var l=Zr();return ge(l,ue({get class(){return Q(o().section.title,e.class)}},e),!1),h(l,t),l})()},se=({children:t,...e})=>{const o=ee();return(()=>{var l=Jr();return ge(l,ue({get class(){return Q(o().section.description,e.class)}},e),!1),h(l,t),l})()},fe=({children:t,...e})=>{const o=ee();return(()=>{var l=Xr();return ge(l,ue({get class(){return Q(o().section.icon,e.class)}},e),!1),h(l,t),l})()};class _r extends qt{constructor(){super({pluginId:"tanstack-devtools-core"})}}const J=new _r;function en(t){const e={...t},o={...t},l={},c=a=>{let r=l[a];if(!r){if(!Lt())return e[a];l[a]=r=T(e[a],{internal:!0}),delete e[a]}return r[0]()};for(const a in t)Object.defineProperty(o,a,{get:()=>c(a),enumerable:!0});const s=(a,r)=>{const n=l[a];if(n)return n[1](r);a in e&&(e[a]=qe(r,e[a]))};return[o,(a,r)=>{if(Xt(a)){const n=Dt(()=>Object.entries(qe(a,o)));Ht(()=>{for(const[d,i]of n)s(d,()=>i)})}else s(a,r);return o}]}const xt={width:null,height:null};function Me(t){if(!t)return{...xt};const{width:e,height:o}=t.getBoundingClientRect();return{width:e,height:o}}function tn(t){const e=typeof t=="function",[o,l]=en(Nt.context||e?xt:Me(t)),c=new ResizeObserver(([s])=>l(Me(s.target)));return _(()=>c.disconnect()),e?D(()=>{const s=t();s&&(l(Me(s)),c.observe(s),_(()=>c.unobserve(s)))}):(c.observe(t),_(()=>c.unobserve(t))),o}var rn=t=>{const[e,o]=T(!1),[l,c]=T(!1),s=H(()=>e()||l());let a=null;return _(()=>{a&&clearTimeout(a)}),{expanded:s,setForceExpand:c,hoverUtils:{enter:()=>{a&&(clearTimeout(a),a=null),o(!0)},leave:()=>{a=setTimeout(()=>{o(!1)},t.animationMs)}},animationMs:t.animationMs}},Ct=pt(void 0),nn=t=>{const e=rn({animationMs:t.animationMs});return p(Ct.Provider,{value:e,get children(){return t.children}})};function Ie(){const t=Pe(Ct);if(t===void 0)throw new Error("useDrawContext must be used within a DrawClientProvider");return t}var Fe=()=>{const t=Pe(Rt);if(t===void 0)throw new Error("useDevtoolsShellContext must be used within a ShellContextProvider");return t};function De(){const{settings:t,setSettings:e}=oe();return{theme:H(()=>t().theme),setTheme:l=>e({theme:l})}}var St=()=>{const{store:t,setStore:e}=Fe(),{setForceExpand:o}=Ie(),l=H(()=>t.plugins),c=H(()=>t.state.activePlugins);return D(()=>{c().length===0?o(!0):o(!1)}),{plugins:l,toggleActivePlugins:a=>{e(r=>{const n=r.state.activePlugins.includes(a),d=t.plugins?.find(g=>g.id===a);d?.destroy&&n&&d.destroy(a);const i=n?r.state.activePlugins.filter(g=>g!==a):[...r.state.activePlugins,a];return i.length>Qt?r:{...r,state:{...r.state,activePlugins:i}}})},activePlugins:c}},Ce=()=>{const{store:t,setStore:e}=Fe();return{state:H(()=>t.state),setState:c=>{e(s=>({...s,state:{...s.state,...c}}))}}},oe=()=>{const{store:t,setStore:e}=Fe(),o=H(()=>t.settings);return{setSettings:c=>{e(s=>({...s,settings:{...s.settings,...c}}))},settings:o}},an=()=>{const{state:t,setState:e}=Ce();return{persistOpen:H(()=>t().persistOpen),setPersistOpen:c=>{e({persistOpen:c})}}},Mt=()=>{const{state:t,setState:e}=Ce();return{height:H(()=>t().height),setHeight:c=>{e({height:c})}}},$t=(t,e=!0)=>{e?t.setAttribute("tabIndex","-1"):t.removeAttribute("tabIndex");for(const o of t.children)$t(o,e)},on=t=>{D(()=>{const e=document.getElementById(Ee);e&&$t(e,!t())})},ln=t=>t.includes("CtrlOrMeta")?[t.map(e=>e==="CtrlOrMeta"?"Control":e),t.map(e=>e==="CtrlOrMeta"?"Meta":e)]:[t],At=t=>ln(t).flatMap(o=>{const l=o.filter(a=>Oe.includes(a)),c=o.filter(a=>!Oe.includes(a));return l.length===0?[c]:Ut(l).map(a=>[...a,...c])}),sn=(t,e)=>{const o=At(e),l=t.map(c=>c.toUpperCase());return o.some(c=>c.every(s=>l.includes(String(s).toUpperCase()))&&l.every(s=>c.map(a=>String(a).toUpperCase()).includes(s)))},cn={colors:{black:"#000000",white:"#ffffff",darkGray:{600:"#212530",700:"#191c24",800:"#111318",900:"#0b0d10"},gray:{50:"#f9fafb",100:"#f2f4f7",200:"#eaecf0",300:"#d0d5dd",400:"#98a2b3",500:"#667085",600:"#475467",700:"#344054",800:"#1d2939",900:"#101828"},blue:{100:"#D1E9FF",300:"#84CAFF",400:"#53B1FD",500:"#2E90FA",600:"#1570EF",700:"#175CD3",800:"#1849A9",900:"#194185"},green:{100:"#D1FADF",300:"#6CE9A6",400:"#32D583",500:"#12B76A",600:"#039855",700:"#027A48",900:"#054F31"},red:{100:"#fee2e2",400:"#f87171",500:"#ef4444",600:"#dc2626",700:"#b91c1c"},purple:{200:"#D9D6FE",800:"#4A1FB8"}},font:{size:{xs:"calc(var(--tsrd-font-size) * 0.75)",sm:"calc(var(--tsrd-font-size) * 0.875)"},fontFamily:{sans:"ui-sans-serif, Inter, system-ui, sans-serif, sans-serif"}},border:{radius:{full:"9999px"}},size:{2:"calc(var(--tsrd-font-size) * 0.5)",3:"calc(var(--tsrd-font-size) * 0.75)",10:"calc(var(--tsrd-font-size) * 2.5)",48:"calc(var(--tsrd-font-size) * 12)"}},We=t=>`${(t/1e3).toFixed(2)}s`,Ke=ae`
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`,dn=ae`
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
  }
`,gn=ae`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`,un=ae`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`,pn=ae`
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
  }
`,hn=ae`
  to {
    transform: rotate(360deg);
  }
`,Ze=ae`
  0%,
  100% {
    opacity: 1;
    transform: scale(1) rotate(0deg);
  }
  50% {
    opacity: 0.6;
    transform: scale(1.1) rotate(10deg);
  }
`,Je=t=>{const{colors:e,font:o,size:l,border:c}=cn,{fontFamily:s,size:a}=o,r=xe,n=(d,i)=>t==="light"?d:i;return{seoTabContainer:r`
      padding: 0;
      margin: 0 auto;
      background: ${n(e.white,e.darkGray[700])};
      border-radius: 8px;
      box-shadow: none;
      overflow-y: auto;
      height: 100%;
      display: flex;
      flex-direction: column;
      gap: 0;
      width: 100%;
      overflow-y: auto;
    `,seoTabTitle:r`
      font-size: 1.25rem;
      font-weight: 600;
      color: ${n(e.gray[900],e.gray[100])};
      margin: 0;
      padding: 1rem 1.5rem 0.5rem 1.5rem;
      text-align: left;
      border-bottom: 1px solid ${n(e.gray[200],e.gray[800])};
    `,seoTabSection:r`
      padding: 1.5rem;
      background: ${n(e.gray[50],e.darkGray[800])};
      border: 1px solid ${n(e.gray[200],e.gray[800])};
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      margin-bottom: 2rem;
      border-radius: 0.75rem;
    `,seoSubNav:r`
      display: flex;
      flex-direction: row;
      gap: 0;
      margin-bottom: 1rem;
      border-bottom: 1px solid ${n(e.gray[200],e.gray[800])};
    `,seoSubNavLabel:r`
      padding: 0.5rem 1rem;
      font-size: 0.875rem;
      font-weight: 500;
      color: ${n(e.gray[600],e.gray[400])};
      background: none;
      border: none;
      border-bottom: 2px solid transparent;
      margin-bottom: -1px;
      cursor: pointer;
      font-family: inherit;
      &:hover {
        color: ${n(e.gray[800],e.gray[200])};
      }
    `,seoSubNavLabelActive:r`
      color: ${n(e.gray[900],e.gray[100])};
      border-bottom-color: ${n(e.gray[900],e.gray[100])};
    `,seoPreviewSection:r`
      display: flex;
      flex-direction: row;
      gap: 16px;
      margin-bottom: 0;
      justify-content: flex-start;
      align-items: flex-start;
      overflow-x: auto;
      flex-wrap: wrap;
      padding-bottom: 0.5rem;
    `,seoPreviewCard:r`
      border: 1px solid ${n(e.gray[200],e.gray[800])};
      border-radius: 8px;
      padding: 12px 10px;
      background: ${n(e.white,e.darkGray[900])};
      margin-bottom: 0;
      box-shadow: 0 1px 3px ${n("rgba(0,0,0,0.05)","rgba(0,0,0,0.1)")};
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      min-width: 200px;
      max-width: 240px;
      font-size: 0.95rem;
      gap: 4px;
    `,seoPreviewHeader:r`
      font-size: 0.875rem;
      font-weight: 600;
      margin-bottom: 0;
      color: ${n(e.gray[700],e.gray[300])};
    `,seoPreviewImage:r`
      max-width: 100%;
      border-radius: 6px;
      margin-bottom: 6px;
      box-shadow: 0 1px 2px ${n("rgba(0,0,0,0.03)","rgba(0,0,0,0.06)")};
      height: 160px;
      object-fit: cover;
    `,seoPreviewTitle:r`
      font-size: 0.9rem;
      font-weight: 600;
      margin-bottom: 4px;
      color: ${n(e.gray[900],e.gray[100])};
    `,seoPreviewDesc:r`
      color: ${n(e.gray[600],e.gray[400])};
      margin-bottom: 4px;
      font-size: 0.8rem;
    `,seoPreviewUrl:r`
      color: ${n(e.gray[500],e.gray[500])};
      font-size: 0.75rem;
      margin-bottom: 0;
      word-break: break-all;
    `,seoMissingTagsSection:r`
      margin-top: 4px;
      font-size: 0.875rem;
      color: ${n(e.red[500],e.red[400])};
    `,seoMissingTagsList:r`
      margin: 4px 0 0 0;
      padding: 0;
      list-style: none;
      display: flex;
      flex-wrap: wrap;
      gap: 4px;
      max-width: 240px;
    `,seoMissingTag:r`
      background: ${n(e.red[100],e.red[500]+"22")};
      color: ${n(e.red[700],e.red[500])};
      border-radius: 3px;
      padding: 2px 6px;
      font-size: 0.75rem;
      font-weight: 500;
    `,seoAllTagsFound:r`
      color: ${n(e.green[700],e.green[500])};
      font-weight: 500;
      margin-left: 0;
      padding: 0 10px 8px 10px;
      font-size: 0.875rem;
    `,serpPreviewBlock:r`
      margin-bottom: 1.5rem;
      border: 1px solid ${n(e.gray[200],e.gray[700])};
      border-radius: 10px;
      padding: 1rem;
    `,serpPreviewLabel:r`
      font-size: 0.875rem;
      font-weight: 600;
      margin-bottom: 0.5rem;
      color: ${n(e.gray[700],e.gray[300])};
    `,serpSnippet:r`
      border: 1px solid ${n(e.gray[100],e.gray[800])};
      border-radius: 8px;
      padding: 1rem 1.25rem;
      background: ${n(e.white,e.darkGray[900])};
      max-width: 600px;
      font-family: ${s.sans};
      box-shadow: 0 1px 2px ${n("rgba(0,0,0,0.04)","rgba(0,0,0,0.08)")};
    `,serpSnippetMobile:r`
      border: 1px solid ${n(e.gray[100],e.gray[800])};
      border-radius: 8px;
      padding: 1rem 1.25rem;
      background: ${n(e.white,e.darkGray[900])};
      max-width: 380px;
      font-family: ${s.sans};
      box-shadow: 0 1px 2px ${n("rgba(0,0,0,0.04)","rgba(0,0,0,0.08)")};
    `,serpSnippetDescMobile:r`
      font-size: 0.875rem;
      color: ${n(e.gray[700],e.gray[300])};
      margin: 0;
      line-height: 1.5;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 3;
      overflow: hidden;
    `,serpSnippetTopRow:r`
      display: flex;
      align-items: center;
      gap: 12px;
      margin-bottom: 8px;
    `,serpSnippetFavicon:r`
      width: 28px;
      height: 28px;
      border-radius: 50%;
      flex-shrink: 0;
      object-fit: contain;
      overflow: hidden;
      display: flex;
      align-items: center;
      justify-content: center;
    `,serpSnippetDefaultFavicon:r`
      width: 28px;
      height: 28px;
      background-color: ${n(e.gray[200],e.gray[800])};
      border-radius: 50%;
      flex-shrink: 0;
      object-fit: contain;
      overflow: hidden;
      display: flex;
      align-items: center;
      justify-content: center;
    `,serpSnippetSiteColumn:r`
      display: flex;
      flex-direction: column;
      gap: 0;
      min-width: 0;
    `,serpSnippetSiteName:r`
      font-size: 0.875rem;
      color: ${n(e.gray[900],e.gray[100])};
      line-height: 1.4;
      margin: 0;
    `,serpSnippetSiteUrl:r`
      font-size: 0.75rem;
      color: ${n(e.gray[500],e.gray[500])};
      line-height: 1.4;
      margin: 0;
    `,serpSnippetTitle:r`
      font-size: 1.25rem;
      font-weight: 400;
      color: ${n("#1a0dab","#8ab4f8")};
      margin: 0 0 4px 0;
      line-height: 1.3;
    `,serpSnippetDesc:r`
      font-size: 0.875rem;
      color: ${n(e.gray[700],e.gray[300])};
      margin: 0;
      line-height: 1.5;
    `,serpMeasureHidden:r`
      position: absolute;
      left: -9999px;
      top: 0;
      visibility: hidden;
      pointer-events: none;
      box-sizing: border-box;
    `,serpMeasureHiddenMobile:r`
      position: absolute;
      left: -9999px;
      top: 0;
      width: 340px;
      visibility: hidden;
      pointer-events: none;
      font-size: 0.875rem;
      line-height: 1.5;
    `,serpReportSection:r`
      margin-top: 1rem;
      font-size: 0.875rem;
      color: ${n(e.gray[700],e.gray[300])};
    `,serpErrorList:r`
      margin: 4px 0 0 0;
      padding-left: 1.25rem;
      list-style-type: disc;
    `,serpReportItem:r`
      margin-top: 0.25rem;
      color: ${n(e.red[700],e.red[400])};
      font-size: 0.875rem;
    `,devtoolsPanelContainer:(d,i)=>r`
      direction: ltr;
      position: fixed;
      overflow-y: hidden;
      overflow-x: hidden;
      ${d}: 0;
      right: 0;
      z-index: 99999;
      width: 100%;
      ${i?"":"max-height: 90%;"}
      border-top: 1px solid ${n(e.gray[200],e.gray[800])};
      transform-origin: top;
    `,devtoolsPanelContainerVisibility:d=>r`
        visibility: ${d?"visible":"hidden"};
        height: ${d?"auto":"0"};
      `,devtoolsPanelContainerResizing:d=>d()?r`
          transition: none;
        `:r`
        transition: all 0.4s ease;
      `,devtoolsPanelContainerAnimation:(d,i,g)=>d?r`
          pointer-events: auto;
          transform: translateY(0);
        `:r`
        pointer-events: none;
        transform: translateY(${g==="top"?-i:i}px);
      `,devtoolsPanel:r`
      display: flex;
      font-size: ${a.sm};
      font-family: ${s.sans};
      background-color: ${n(e.white,e.darkGray[700])};
      color: ${n(e.gray[900],e.gray[300])};
      width: w-screen;
      flex-direction: row;
      overflow-x: hidden;
      overflow-y: hidden;
      height: 100%;
    `,dragHandle:d=>r`
      position: absolute;
      left: 0;
      ${d==="bottom"?"top":"bottom"}: 0;
      width: 100%;
      height: 4px;
      cursor: row-resize;
      user-select: none;
      z-index: 100000;
      &:hover {
        background-color: ${n(e.gray[400],e.gray[500])};
      }
    `,mainCloseBtn:r`
      background: transparent;
      position: fixed;
      z-index: 99999;
      display: inline-flex;
      width: fit-content;
      cursor: pointer;
      appearance: none;
      border: 0;
      align-items: center;
      padding: 0;
      font-size: ${o.size.xs};
      cursor: pointer;
      transition: all 0.25s ease-out;
      & > img {
        width: 56px;
        height: 56px;
        transition: all 0.3s ease;
        outline-offset: 2px;
        border-radius: ${c.radius.full};
        outline: 2px solid transparent;
      }
      &:hide-until-hover {
        opacity: 0;
        pointer-events: none;
        visibility: hidden;
      }
      &:hide-until-hover:hover {
        opacity: 1;
        pointer-events: auto;
        visibility: visible;
      }
      & > img:focus-visible,
      img:hover {
        outline: 2px solid ${n(e.black,e.black)};
      }
    `,mainCloseBtnPosition:d=>r`
        ${d==="top-left"?`top: ${l[2]}; left: ${l[2]};`:""}
        ${d==="top-right"?`top: ${l[2]}; right: ${l[2]};`:""}
        ${d==="middle-left"?`top: 50%; left: ${l[2]}; transform: translateY(-50%);`:""}
        ${d==="middle-right"?`top: 50%; right: ${l[2]}; transform: translateY(-50%);`:""}
        ${d==="bottom-left"?`bottom: ${l[2]}; left: ${l[2]};`:""}
        ${d==="bottom-right"?`bottom: ${l[2]}; right: ${l[2]};`:""}
      `,mainCloseBtnAnimation:(d,i)=>d?r`
        opacity: 0;
        pointer-events: none;
        visibility: hidden;
      `:i?r`
              opacity: 0;

              &:hover {
                opacity: 1;
                pointer-events: auto;
                visibility: visible;
              }
            `:r`
              opacity: 1;
              pointer-events: auto;
              visibility: visible;
            `,tabContainer:r`
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
      height: 100%;
      background-color: ${n(e.gray[50],e.darkGray[900])};
      border-right: 1px solid ${n(e.gray[200],e.gray[800])};
      box-shadow: none;
      position: relative;
      width: ${l[10]};
    `,tab:r`
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: ${l[10]};
      cursor: pointer;
      font-size: ${a.sm};
      font-family: ${s.sans};
      color: ${n(e.gray[600],e.gray[400])};
      background-color: transparent;
      border: none;
      transition: all 0.15s ease;
      border-left: 2px solid transparent;
      &:hover:not(.close):not(.active):not(.detach) {
        background-color: ${n(e.gray[100],e.gray[800])};
        color: ${n(e.gray[900],e.gray[100])};
        border-left: 2px solid ${n(e.gray[900],e.gray[100])};
      }
      &.active {
        background-color: ${n(e.gray[100],e.gray[800])};
        color: ${n(e.gray[900],e.gray[100])};
        border-left: 2px solid ${n(e.gray[900],e.gray[100])};
      }
      &.detach {
        &:hover {
          background-color: ${n(e.gray[100],e.gray[800])};
        }
        &:hover {
          color: ${n(e.green[700],e.green[500])};
        }
      }
      &.close {
        margin-top: auto;
        &:hover {
          background-color: ${n(e.gray[100],e.gray[800])};
        }
        &:hover {
          color: ${n(e.red[700],e.red[500])};
        }
      }
      &.disabled {
        cursor: not-allowed;
        opacity: 0.2;
        pointer-events: none;
      }
      &.disabled:hover {
        background-color: transparent;
        color: ${e.gray[300]};
      }
      & > svg {
        flex-shrink: 0;
      }
    `,tabContent:r`
      transition: all 0.2s ease-in-out;
      width: 100%;
      height: 100%;
    `,pluginsTabPanel:r`
      display: flex;
      flex-direction: row;
      width: 100%;
      height: 100%;
      overflow: hidden;
    `,pluginsTabDraw:d=>r`
      width: ${d?l[48]:0};
      height: 100%;
      background-color: ${n(e.white,e.darkGray[900])};
      box-shadow: none;
      ${d?`border-right: 1px solid ${n(e.gray[200],e.gray[800])};`:""}
    `,pluginsTabDrawExpanded:r`
      width: ${l[48]};
      border-right: 1px solid ${n(e.gray[200],e.gray[800])};
    `,pluginsTabDrawTransition:d=>r`
        transition: width ${We(d)} ease;
      `,pluginsTabSidebar:d=>r`
      width: ${l[48]};
      overflow-y: auto;
      transform: ${d?"translateX(0)":"translateX(-100%)"};
      display: flex;
      flex-direction: column;
    `,pluginsTabSidebarTransition:d=>r`
        transition: transform ${We(d)} ease;
      `,pluginsList:r`
      flex: 1;
      overflow-y: auto;
    `,pluginName:r`
      font-size: ${a.xs};
      font-family: ${s.sans};
      color: ${n(e.gray[600],e.gray[400])};
      padding: ${l[2]};
      cursor: pointer;
      text-align: center;
      transition: all 0.15s ease;
      border-left: 2px solid transparent;

      &:hover {
        background-color: ${n(e.gray[100],e.gray[800])};
        color: ${n(e.gray[900],e.gray[100])};
        padding: ${l[2]};
      }
      &.active {
        background-color: ${n(e.gray[100],e.gray[800])};
        color: ${n(e.gray[900],e.gray[100])};
        border-left: 2px solid ${n(e.gray[900],e.gray[100])};
      }
      &.active:hover {
        background-color: ${n(e.gray[200],e.gray[700])};
      }
    `,pluginsTabContent:r`
      width: 100%;
      height: 100%;

      & > * > * {
        min-width: 0;
        min-height: 0;
        height: 100%;
      }

      &:not(:last-child) {
        border-right: 5px solid ${n(e.purple[200],e.purple[800])};
      }
    `,settingsGroup:r`
      display: flex;
      flex-direction: column;
      gap: 0.75rem;
    `,conditionalSetting:r`
      margin-left: 1.5rem;
      padding-left: 1rem;
      border-left: 2px solid ${n(e.gray[300],e.gray[600])};
      background-color: ${n(e.gray[50],e.darkGray[900])};
      padding: 0.75rem;
      border-radius: 0.375rem;
      margin-top: 0.5rem;
    `,settingRow:r`
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 1rem;

      @media (max-width: 768px) {
        grid-template-columns: 1fr;
      }
    `,settingsModifiers:r`
      display: flex;
      gap: 0.5rem;
    `,settingsStack:r`
      display: flex;
      flex-direction: column;
      gap: 1rem;
    `,noPluginsFallback:r`
      display: flex;
      align-items: center;
      justify-content: center;
      min-height: 400px;
      padding: 2rem;
      background: ${n(e.gray[50],e.darkGray[700])};
      width: 100%;
      height: 100%;
    `,noPluginsFallbackContent:r`
      max-width: 600px;
      text-align: center;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 1rem;
    `,noPluginsFallbackIcon:r`
      width: 64px;
      height: 64px;
      color: ${n(e.gray[400],e.gray[600])};
      margin-bottom: 0.5rem;

      svg {
        width: 100%;
        height: 100%;
      }
    `,noPluginsFallbackTitle:r`
      font-size: 1.5rem;
      font-weight: 600;
      color: ${n(e.gray[900],e.gray[100])};
      margin: 0;
    `,noPluginsFallbackDescription:r`
      font-size: 0.95rem;
      color: ${n(e.gray[600],e.gray[400])};
      line-height: 1.5;
      margin: 0;
    `,noPluginsSuggestions:r`
      width: 100%;
      margin-top: 1.5rem;
      padding: 1.5rem;
      background: ${n(e.white,e.darkGray[800])};
      border: 1px solid ${n(e.gray[200],e.gray[700])};
      border-radius: 0.5rem;
    `,noPluginsSuggestionsTitle:r`
      font-size: 1.125rem;
      font-weight: 600;
      color: ${n(e.gray[900],e.gray[100])};
      margin: 0 0 0.5rem 0;
    `,noPluginsSuggestionsDesc:r`
      font-size: 0.875rem;
      color: ${n(e.gray[600],e.gray[400])};
      margin: 0 0 1rem 0;
    `,noPluginsSuggestionsList:r`
      display: flex;
      flex-direction: column;
      gap: 0.75rem;
    `,noPluginsSuggestionCard:r`
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 1rem;
      background: ${n(e.gray[50],e.darkGray[900])};
      border: 1px solid ${n(e.gray[200],e.gray[700])};
      border-radius: 0.375rem;
      transition: all 0.15s ease;

      &:hover {
        border-color: ${n(e.gray[300],e.gray[600])};
        background: ${n(e.gray[100],e.darkGray[800])};
      }
    `,noPluginsSuggestionInfo:r`
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 0.25rem;
      flex: 1;
    `,noPluginsSuggestionPackage:r`
      font-size: 0.95rem;
      font-weight: 600;
      color: ${n(e.gray[900],e.gray[100])};
      margin: 0;
      font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
    `,noPluginsSuggestionSource:r`
      font-size: 0.8rem;
      color: ${n(e.gray[500],e.gray[500])};
      margin: 0;
    `,noPluginsSuggestionStatus:r`
      display: flex;
      align-items: center;
      gap: 0.5rem;
      color: ${n(e.green[600],e.green[400])};

      svg {
        width: 18px;
        height: 18px;
      }
    `,noPluginsSuggestionStatusText:r`
      font-size: 0.875rem;
      font-weight: 500;
    `,noPluginsSuggestionStatusTextError:r`
      font-size: 0.875rem;
      font-weight: 500;
      color: ${n(e.red[600],e.red[400])};
    `,noPluginsEmptyState:r`
      margin-top: 1.5rem;
      padding: 1.5rem;
      background: ${n(e.white,e.darkGray[800])};
      border: 1px solid ${n(e.gray[200],e.gray[700])};
      border-radius: 0.5rem;
    `,noPluginsEmptyStateText:r`
      font-size: 0.875rem;
      color: ${n(e.gray[600],e.gray[400])};
      margin: 0;
      line-height: 1.5;
    `,noPluginsFallbackLinks:r`
      display: flex;
      align-items: center;
      gap: 0.75rem;
      margin-top: 1.5rem;
    `,noPluginsFallbackLink:r`
      font-size: 0.875rem;
      color: ${n(e.gray[700],e.gray[300])};
      text-decoration: none;
      transition: color 0.15s ease;

      &:hover {
        color: ${n(e.gray[900],e.gray[100])};
        text-decoration: underline;
      }
    `,noPluginsFallbackLinkSeparator:r`
      color: ${n(e.gray[400],e.gray[600])};
    `,pluginMarketplace:r`
      width: 100%;
      overflow-y: auto;
      padding: 2rem;
      background: ${n("linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)","linear-gradient(135deg, #1a1d23 0%, #13161a 100%)")};
      animation: ${Ke} 0.3s ease;
    `,pluginMarketplaceHeader:r`
      margin-bottom: 2rem;
      padding-bottom: 1rem;
      border-bottom: 2px solid ${n(e.gray[200],e.gray[700])};
    `,pluginMarketplaceTitleRow:r`
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 2rem;
      margin-bottom: 0.5rem;
    `,pluginMarketplaceTitle:r`
      font-size: 1.5rem;
      font-weight: 700;
      color: ${n(e.gray[900],e.gray[100])};
      margin: 0;
      letter-spacing: -0.02em;
    `,pluginMarketplaceDescription:r`
      font-size: 0.95rem;
      color: ${n(e.gray[600],e.gray[400])};
      margin: 0 0 1rem 0;
      line-height: 1.5;
    `,pluginMarketplaceSearchWrapper:r`
      position: relative;
      display: flex;
      align-items: center;
      max-width: 400px;
      flex-shrink: 0;

      svg {
        position: absolute;
        left: 1rem;
        color: ${n(e.gray[400],e.gray[500])};
        pointer-events: none;
      }
    `,pluginMarketplaceSearch:r`
      width: 100%;
      padding: 0.75rem 1rem 0.75rem 2.75rem;
      background: ${n(e.gray[50],e.darkGray[900])};
      border: 2px solid ${n(e.gray[200],e.gray[700])};
      border-radius: 0.5rem;
      color: ${n(e.gray[900],e.gray[100])};
      font-size: 0.875rem;
      font-family: ${s.sans};
      transition: all 0.2s ease;

      &::placeholder {
        color: ${n(e.gray[400],e.gray[500])};
      }

      &:focus {
        outline: none;
        border-color: ${n(e.blue[500],e.blue[400])};
        background: ${n(e.white,e.darkGray[800])};
        box-shadow: 0 0 0 3px
          ${n("rgba(59, 130, 246, 0.1)","rgba(96, 165, 250, 0.1)")};
      }
    `,pluginMarketplaceFilters:r`
      margin-top: 1.5rem;
      padding-top: 1rem;
    `,pluginMarketplaceTagsContainer:r`
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
      margin-top: 1.5rem;
      padding: 1rem;
      background: ${n(e.gray[50],e.darkGray[800])};
      border: 1px solid ${n(e.gray[200],e.gray[700])};
      border-radius: 0.5rem;
    `,pluginMarketplaceTagButton:r`
      padding: 0.5rem 1rem;
      font-size: 0.875rem;
      font-weight: 500;
      background: ${n(e.white,e.darkGray[700])};
      border: 2px solid ${n(e.gray[300],e.gray[600])};
      border-radius: 0.375rem;
      color: ${n(e.gray[700],e.gray[300])};
      cursor: pointer;
      transition: all 0.15s ease;

      &:hover {
        background: ${n(e.gray[100],e.darkGray[600])};
        border-color: ${n(e.gray[400],e.gray[500])};
        color: ${n(e.gray[900],e.gray[100])};
      }
    `,pluginMarketplaceTagButtonActive:r`
      background: ${n("linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)","linear-gradient(135deg, #60a5fa 0%, #3b82f6 100%)")} !important;
      border-color: ${n("#2563eb","#3b82f6")} !important;
      color: white !important;

      &:hover {
        background: ${n("linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)","linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)")} !important;
        border-color: ${n("#1d4ed8","#2563eb")} !important;
      }
    `,pluginMarketplaceSettingsButton:r`
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0.75rem;
      background: ${n(e.gray[100],e.darkGray[800])};
      border: 2px solid ${n(e.gray[200],e.gray[700])};
      border-radius: 0.5rem;
      color: ${n(e.gray[700],e.gray[300])};
      cursor: pointer;
      transition: all 0.2s ease;
      margin-left: 0.5rem;

      &:hover {
        background: ${n(e.gray[200],e.darkGray[700])};
        border-color: ${n(e.gray[300],e.gray[600])};
        color: ${n(e.gray[900],e.gray[100])};
      }

      &:active {
        transform: scale(0.95);
      }
    `,pluginMarketplaceSettingsPanel:r`
      position: fixed;
      top: 0;
      right: 0;
      bottom: 0;
      width: 350px;
      background: ${n(e.white,e.darkGray[800])};
      border-left: 1px solid ${n(e.gray[200],e.gray[700])};
      box-shadow: -4px 0 12px ${n("rgba(0, 0, 0, 0.1)","rgba(0, 0, 0, 0.4)")};
      z-index: 1000;
      display: flex;
      flex-direction: column;
      animation: ${dn} 0.3s ease;
    `,pluginMarketplaceSettingsPanelHeader:r`
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 1.5rem;
      border-bottom: 1px solid ${n(e.gray[200],e.gray[700])};
    `,pluginMarketplaceSettingsPanelTitle:r`
      font-size: 1.125rem;
      font-weight: 600;
      color: ${n(e.gray[900],e.gray[100])};
      margin: 0;
    `,pluginMarketplaceSettingsPanelClose:r`
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0.5rem;
      background: transparent;
      border: none;
      color: ${n(e.gray[600],e.gray[400])};
      cursor: pointer;
      border-radius: 0.375rem;
      transition: all 0.15s ease;

      &:hover {
        background: ${n(e.gray[100],e.darkGray[700])};
        color: ${n(e.gray[900],e.gray[100])};
      }
    `,pluginMarketplaceSettingsPanelContent:r`
      flex: 1;
      padding: 1.5rem;
      overflow-y: auto;
    `,pluginMarketplaceGrid:r`
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
      gap: 1.25rem;
      animation: ${gn} 0.4s ease;
    `,pluginMarketplaceCard:r`
      background: ${n(e.white,e.darkGray[800])};
      border: 2px solid ${n(e.gray[200],e.gray[700])};
      border-radius: 0.75rem;
      padding: 1.5rem;
      display: flex;
      flex-direction: column;
      gap: 1rem;
      transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
      position: relative;
      overflow: hidden;

      &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 3px;
        background: ${n("linear-gradient(90deg, #3b82f6 0%, #8b5cf6 100%)","linear-gradient(90deg, #60a5fa 0%, #a78bfa 100%)")};
        transform: scaleX(0);
        transform-origin: left;
        transition: transform 0.25s ease;
      }

      &:hover {
        border-color: ${n(e.gray[400],e.gray[500])};
        box-shadow: 0 8px 24px ${n("rgba(0,0,0,0.1)","rgba(0,0,0,0.4)")};
        transform: translateY(-4px);

        &::before {
          transform: scaleX(1);
        }
      }
    `,pluginMarketplaceCardIcon:r`
      width: 40px;
      height: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: ${n("linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)","linear-gradient(135deg, #60a5fa 0%, #a78bfa 100%)")};
      border-radius: 0.5rem;
      color: white;
      transition: transform 0.25s ease;

      svg {
        width: 20px;
        height: 20px;
      }

      &.custom-logo {
      }
    `,pluginMarketplaceCardHeader:r`
      flex: 1;
    `,pluginMarketplaceCardTitle:r`
      font-size: 0.95rem;
      font-weight: 600;
      color: ${n(e.gray[900],e.gray[100])};
      margin: 0 0 0.5rem 0;
      line-height: 1.4;
    `,pluginMarketplaceCardDescription:r`
      font-size: 0.8rem;
      color: ${n(e.gray[500],e.gray[500])};
      margin: 0;
      padding: 0;
      background: transparent;
      border-radius: 0.375rem;
      display: block;
      font-weight: 500;
    `,pluginMarketplaceCardPackageBadge:r`
      margin-top: 4px;
      margin-bottom: 8px;
      font-size: 0.6875rem;
      font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
      opacity: 0.6;
      padding: 4px 8px;
      padding-left: 0;
      background-color: var(--bg-tertiary);
      border-radius: 4px;
      word-break: break-all;
      display: inline-block;
    `,pluginMarketplaceCardDescriptionText:r`
      line-height: 1.5;
      margin-top: 0;
    `,pluginMarketplaceCardVersionInfo:r`
      margin-top: 8px;
      font-size: 0.6875rem;
      font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
    `,pluginMarketplaceCardVersionSatisfied:r`
      color: ${n(e.green[600],e.green[400])};
    `,pluginMarketplaceCardVersionUnsatisfied:r`
      color: ${n(e.red[600],e.red[400])};
    `,pluginMarketplaceCardDocsLink:r`
      display: inline-flex;
      align-items: center;
      gap: 0.25rem;
      font-size: 0.75rem;
      color: ${n(e.blue[600],e.blue[400])};
      text-decoration: none;
      margin-top: 0.5rem;
      transition: color 0.15s ease;

      &:hover {
        color: ${n(e.blue[700],e.blue[300])};
        text-decoration: underline;
      }

      svg {
        width: 12px;
        height: 12px;
      }
    `,pluginMarketplaceCardTags:r`
      display: flex;
      flex-wrap: wrap;
      gap: 0.375rem;
      margin-top: 0.75rem;
    `,pluginMarketplaceCardTag:r`
      font-size: 0.6875rem;
      font-weight: 500;
      padding: 0.25rem 0.5rem;
      background: ${n(e.gray[100],e.darkGray[700])};
      border: 1px solid ${n(e.gray[300],e.gray[600])};
      border-radius: 0.25rem;
      color: ${n(e.gray[700],e.gray[300])};
    `,pluginMarketplaceCardImage:r`
      width: 28px;
      height: 28px;
      object-fit: contain;
    `,pluginMarketplaceNewBanner:r`
      position: absolute;
      top: 12px;
      right: -35px;
      background-color: ${n(e.green[500],e.green[500])};
      color: white;
      padding: 4px 40px;
      font-size: 0.6875rem;
      font-weight: bold;
      text-transform: uppercase;
      transform: rotate(45deg);
      box-shadow: 0 2px 8px rgba(16, 185, 129, 0.5);
      z-index: 10;
      letter-spacing: 0.5px;
    `,pluginMarketplaceCardFeatured:r`
      border-color: ${n(e.blue[500],e.blue[400])};
      border-width: 2px;
    `,pluginMarketplaceCardActive:r`
      border-color: ${n(e.green[500],e.green[600])};
      border-width: 2px;

      &:hover {
        border-color: ${n(e.green[500],e.green[600])};
        box-shadow: none;
        transform: none;

        &::before {
          transform: scaleX(0);
        }
      }
    `,pluginMarketplaceCardStatus:r`
      display: flex;
      align-items: center;
      gap: 0.5rem;
      color: ${n(e.green[600],e.green[400])};
      animation: ${un} 0.3s ease;

      svg {
        width: 18px;
        height: 18px;
        animation: ${pn} 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
      }
    `,pluginMarketplaceCardSpinner:r`
      width: 18px;
      height: 18px;
      border: 2px solid ${n(e.gray[200],e.gray[700])};
      border-top-color: ${n(e.blue[600],e.blue[400])};
      border-radius: 50%;
      animation: ${hn} 0.8s linear infinite;
    `,pluginMarketplaceCardStatusText:r`
      font-size: 0.875rem;
      font-weight: 600;
    `,pluginMarketplaceCardStatusTextError:r`
      font-size: 0.875rem;
      font-weight: 600;
      color: ${n(e.red[600],e.red[400])};
    `,pluginMarketplaceEmpty:r`
      padding: 3rem 2rem;
      text-align: center;
      background: ${n(e.white,e.darkGray[800])};
      border: 2px dashed ${n(e.gray[300],e.gray[700])};
      border-radius: 0.75rem;
      animation: ${Ke} 0.3s ease;
    `,pluginMarketplaceEmptyText:r`
      font-size: 0.95rem;
      color: ${n(e.gray[600],e.gray[400])};
      margin: 0;
      line-height: 1.6;
    `,pluginMarketplaceSection:r`
      margin-bottom: 2.5rem;

      &:last-child {
        margin-bottom: 0;
      }
    `,pluginMarketplaceSectionHeader:r`
      margin-bottom: 1rem;
      padding: 1rem 1.25rem;
      display: flex;
      align-items: center;
      gap: 0.75rem;
      cursor: pointer;
      user-select: none;
      background: ${n(e.gray[50],e.darkGray[800])};
      border: 1px solid ${n(e.gray[200],e.gray[700])};
      border-radius: 0.5rem;
      transition: all 0.15s ease;

      &:hover {
        background: ${n(e.gray[100],e.darkGray[700])};
        border-color: ${n(e.gray[300],e.gray[600])};
      }
    `,pluginMarketplaceSectionHeaderLeft:r`
      display: flex;
      align-items: center;
      gap: 0.5rem;
    `,pluginMarketplaceSectionChevron:r`
      width: 24px;
      height: 24px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: ${n(e.gray[700],e.gray[300])};
      transition: transform 0.2s ease;
    `,pluginMarketplaceSectionChevronCollapsed:r`
      transform: rotate(-90deg);
    `,pluginMarketplaceSectionTitle:r`
      font-size: 1.25rem;
      font-weight: 700;
      color: ${n(e.gray[900],e.gray[50])};
      margin: 0;
      display: flex;
      align-items: center;
      gap: 0.5rem;
    `,pluginMarketplaceSectionBadge:r`
      font-size: 0.75rem;
      font-weight: 600;
      padding: 0.25rem 0.5rem;
      background: ${n("linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)","linear-gradient(135deg, #60a5fa 0%, #3b82f6 100%)")};
      color: white;
      border-radius: 0.25rem;
      text-transform: uppercase;
      letter-spacing: 0.05em;
    `,pluginMarketplaceFeatureBanner:r`
      margin-top: 1rem;
      padding: 1.25rem 1.5rem;
      background: ${n("linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)","linear-gradient(135deg, #1e3a8a 0%, #1e40af 100%)")};
      border-radius: 0.75rem;
      border: 1px solid ${n(e.blue[400],e.blue[800])};
      box-shadow:
        0 4px 6px -1px rgba(0, 0, 0, 0.1),
        0 2px 4px -1px rgba(0, 0, 0, 0.06);
    `,pluginMarketplaceFeatureBannerContent:r`
      display: flex;
      flex-direction: column;
      gap: 0.75rem;
    `,pluginMarketplaceFeatureBannerTitle:r`
      font-size: 1.125rem;
      font-weight: 700;
      color: white;
      margin: 0;
      display: flex;
      align-items: center;
      gap: 0.5rem;
    `,pluginMarketplaceFeatureBannerIcon:r`
      width: 24px;
      height: 24px;
      display: inline-flex;
    `,pluginMarketplaceFeatureBannerText:r`
      font-size: 0.95rem;
      color: ${n("rgba(255, 255, 255, 0.95)","rgba(255, 255, 255, 0.9)")};
      line-height: 1.5;
      margin: 0;
    `,pluginMarketplaceFeatureBannerButton:r`
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      padding: 0.625rem 1.25rem;
      background: white;
      color: ${e.blue[600]};
      font-weight: 600;
      font-size: 0.95rem;
      border-radius: 0.5rem;
      border: none;
      cursor: pointer;
      transition: all 0.2s ease;
      text-decoration: none;
      align-self: flex-start;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

      &:hover {
        background: ${n(e.gray[50],e.gray[100])};
        transform: translateY(-1px);
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
      }

      &:active {
        transform: translateY(0);
      }
    `,pluginMarketplaceFeatureBannerButtonIcon:r`
      width: 18px;
      height: 18px;
    `,pluginMarketplaceCardDisabled:r`
      opacity: 0.6;
      filter: grayscale(0.3);
      cursor: not-allowed;

      &:hover {
        transform: none;
        box-shadow: none;
      }
    `,pluginMarketplaceCardBadge:r`
      position: absolute;
      top: 1rem;
      right: 1rem;
      padding: 0.25rem 0.5rem;
      font-size: 0.65rem;
      font-weight: 600;
      text-transform: uppercase;
      border-radius: 0.25rem;
      letter-spacing: 0.05em;
    `,pluginMarketplaceCardBadgeInstall:r`
      background: ${n(e.green[100],e.green[900])};
      color: ${n(e.green[700],e.green[300])};
    `,pluginMarketplaceCardBadgeAdd:r`
      background: ${n(e.blue[100],e.blue[900])};
      color: ${n(e.blue[700],e.blue[300])};
    `,pluginMarketplaceCardBadgeRequires:r`
      background: ${n(e.gray[100],e.gray[800])};
      color: ${n(e.gray[600],e.gray[400])};
    `,pluginMarketplaceButtonInstalled:r`
      opacity: 0.5;
    `,pluginNameAddMore:r`
      font-size: ${a.xs};
      font-family: ${s.sans};
      color: ${n(e.gray[600],e.gray[400])};
      padding: ${l[3]} ${l[2]};
      cursor: pointer;
      text-align: center;
      transition: all 0.15s ease;
      border-left: 2px solid transparent;
      background: ${n("linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)","linear-gradient(135deg, #1f2937 0%, #111827 100%)")};
      font-weight: 600;
      position: relative;
      margin-top: auto;

      h3 {
        margin: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.25rem;

        &::before {
          content: '✨';
          font-size: 0.875rem;
          animation: ${Ze} 2s ease-in-out infinite;
        }
      }

      &:hover {
        background: ${n("linear-gradient(135deg, #e9ecef 0%, #dee2e6 100%)","linear-gradient(135deg, #374151 0%, #1f2937 100%)")};
        color: ${n(e.gray[900],e.gray[100])};
        border-left-color: ${n(e.blue[500],e.blue[400])};

        h3::before {
          animation: ${Ze} 0.5s ease-in-out infinite;
        }
      }

      &.active {
        background: ${n("linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)","linear-gradient(135deg, #60a5fa 0%, #3b82f6 100%)")};
        color: ${n(e.white,e.white)};
        border-left: 2px solid ${n(e.blue[600],e.blue[300])};
        box-shadow: 0 4px 12px
          ${n("rgba(59, 130, 246, 0.3)","rgba(96, 165, 250, 0.3)")};

        h3::before {
          filter: brightness(0) invert(1);
        }
      }

      &.active:hover {
        background: ${n("linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)","linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)")};
      }
    `}};function L(){const{theme:t}=De(),[e,o]=T(Je(t()));return D(()=>{o(Je(t()))}),e}var fn="data:image/png;base64,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",mn=v("<div>"),vn=v('<button type=button aria-label="Open TanStack Devtools">'),bn=v('<img alt="TanStack Devtools">'),yn=t=>{const{settings:e}=oe(),[o,l]=T(),c=L(),s=H(()=>Q(c().mainCloseBtn,c().mainCloseBtnPosition(e().position),c().mainCloseBtnAnimation(t.isOpen(),e().hideUntilHover)));return D(()=>{const a=e().customTrigger,r=o();a&&r&&a(r,{theme:e().theme})}),p(B,{get when(){return!e().triggerHidden},get children(){var a=vn();return a.$$click=()=>t.setIsOpen(!t.isOpen()),h(a,p(B,{get when(){return e().customTrigger},get fallback(){return(()=>{var r=bn();return j(r,"src",fn),r})()},get children(){var r=mn();return ce(l,r),r}})),w(()=>u(a,s())),a}})};V(["click"]);var kn=v("<div>"),wn=t=>{const e=L(),{height:o}=Mt(),{settings:l}=oe(),c=Te();return(()=>{var s=kn();return j(s,"id",Ee),h(s,p(nn,{animationMs:400,get children(){return t.children}})),w(a=>{var r=c().pipWindow?"100vh":o()+"px",n=c().pipWindow?"100vh":o()+"px",d=Q(e().devtoolsPanelContainer(l().panelLocation,!!c().pipWindow),e().devtoolsPanelContainerAnimation(t.isOpen(),o(),l().panelLocation),e().devtoolsPanelContainerVisibility(t.isOpen()),e().devtoolsPanelContainerResizing(t.isResizing));return r!==a.e&&ye(s,"height",a.e=r),n!==a.t&&ye(s,"--tsd-main-panel-height",a.t=n),d!==a.a&&u(s,a.a=d),a},{e:void 0,t:void 0,a:void 0}),s})()},Xe=v("<div>"),xn=t=>{const e=L(),{settings:o}=oe();return(()=>{var l=Xe(),c=t.ref;return typeof c=="function"?ce(c,l):t.ref=l,h(l,(()=>{var s=I(()=>!!t.handleDragStart);return()=>s()?(()=>{var a=Xe();return we(a,"mousedown",t.handleDragStart,!0),w(()=>u(a,e().dragHandle(o().panelLocation))),a})():null})(),null),h(l,()=>t.children,null),w(()=>u(l,e().devtoolsPanel)),l})()};V(["mousedown"]);var Cn=v("<div><h4 style=margin:0></h4><div></div>Final shortcut is: "),Sn={Shift:"Shift",Alt:"Alt",Meta:"Meta",Control:"Control",CtrlOrMeta:"Ctrl Or Meta"},_e=t=>{const e=L(),o=a=>{if(t.hotkey.includes(a))t.onHotkeyChange(t.hotkey.filter(r=>r!==a));else{const r=t.hotkey.filter(d=>t.modifiers.includes(d)),n=t.hotkey.filter(d=>!t.modifiers.includes(d));t.onHotkeyChange([...r,a,...n])}},l=()=>t.hotkey.filter(a=>!t.modifiers.includes(a)).join("+"),c=a=>{const r=i=>{if(i.length===1)return[Ne(i)];const g=[];for(const f of i){const k=Ne(f);g.includes(k)||g.push(k)}return g},n=t.hotkey.filter(i=>t.modifiers.includes(i)),d=a.split("+").flatMap(i=>r(i)).filter(Boolean);t.onHotkeyChange([...n,...d])},s=()=>t.hotkey.join(" + ");return(()=>{var a=Cn(),r=a.firstChild,n=r.nextSibling,d=n.nextSibling;return h(r,()=>t.description),h(n,p(B,{keyed:!0,get when(){return t.hotkey},get children(){return t.modifiers.map(i=>p(kt,{variant:"success",onclick:()=>o(i),get outline(){return!t.hotkey.includes(i)},get children(){return Sn[i]||i}}))}})),h(a,p(yt,{description:"Use '+' to combine keys (e.g., 'a+b' or 'd'). This will be used with the enabled modifiers from above",placeholder:"a",get value(){return l()},onChange:c}),d),h(a,s,null),w(i=>{var g=e().settingsGroup,f=e().settingsModifiers;return g!==i.e&&u(a,i.e=g),f!==i.t&&u(n,i.t=f),i},{e:void 0,t:void 0}),a})()},me=v("<div>"),Mn=v("<div><div>"),$n=()=>{const{setSettings:t,settings:e}=oe(),o=L(),l=["CtrlOrMeta","Alt","Shift"];return p(wt,{withPadding:!0,get children(){return[p(le,{get children(){return[p(he,{get children(){return[p(fe,{get children(){return p(Ir,{})}}),"General"]}}),p(se,{children:"Configure general behavior of the devtools panel."}),(()=>{var c=me();return h(c,p(de,{label:"Default open",description:"Automatically open the devtools panel when the page loads",onChange:()=>t({defaultOpen:!e().defaultOpen}),get checked(){return e().defaultOpen}}),null),h(c,p(de,{label:"Hide trigger until hovered",description:"Keep the devtools trigger button hidden until you hover over its area",onChange:()=>t({hideUntilHover:!e().hideUntilHover}),get checked(){return e().hideUntilHover}}),null),h(c,p(de,{label:"Completely hide trigger",description:"Completely removes the trigger from the DOM (you can still open it with the hotkey)",onChange:()=>t({triggerHidden:!e().triggerHidden}),get checked(){return e().triggerHidden}}),null),h(c,p(Se,{label:"Theme",description:"Choose the theme for the devtools panel",get value(){return e().theme},options:[{label:"Dark",value:"dark"},{label:"Light",value:"light"}],onChange:s=>t({theme:s})}),null),w(()=>u(c,o().settingsGroup)),c})()]}}),p(le,{get children(){return[p(he,{get children(){return[p(fe,{get children(){return p(Hr,{})}}),"URL Configuration"]}}),p(se,{children:"Control when devtools are available based on URL parameters."}),(()=>{var c=me();return h(c,p(de,{label:"Require URL Flag",description:"Only show devtools when a specific URL parameter is present",get checked(){return e().requireUrlFlag},onChange:s=>t({requireUrlFlag:s})}),null),h(c,p(B,{get when(){return e().requireUrlFlag},get children(){var s=me();return h(s,p(yt,{label:"URL flag",description:"Enter the URL parameter name (e.g., 'debug' for ?debug=true)",placeholder:"debug",get value(){return e().urlFlag},onChange:a=>t({urlFlag:a})})),w(()=>u(s,o().conditionalSetting)),s}}),null),w(()=>u(c,o().settingsGroup)),c})()]}}),p(le,{get children(){return[p(he,{get children(){return[p(fe,{get children(){return p(Fr,{})}}),"Keyboard"]}}),p(se,{children:"Customize keyboard shortcuts for quick access."}),(()=>{var c=me();return h(c,p(_e,{title:"Open/Close Devtools",description:"Hotkey to open/close devtools",get hotkey(){return e().openHotkey},modifiers:l,onHotkeyChange:s=>t({openHotkey:s})}),null),h(c,p(_e,{title:"Source Inspector",description:"Hotkey to open source inspector",get hotkey(){return e().inspectHotkey},modifiers:l,onHotkeyChange:s=>t({inspectHotkey:s})}),null),w(()=>u(c,o().settingsStack)),c})()]}}),p(le,{get children(){return[p(he,{get children(){return[p(fe,{get children(){return p(Dr,{})}}),"Position"]}}),p(se,{children:"Adjust the position of the trigger button and devtools panel."}),(()=>{var c=Mn(),s=c.firstChild;return h(s,p(Se,{label:"Trigger Position",options:[{label:"Bottom Right",value:"bottom-right"},{label:"Bottom Left",value:"bottom-left"},{label:"Top Right",value:"top-right"},{label:"Top Left",value:"top-left"},{label:"Middle Right",value:"middle-right"},{label:"Middle Left",value:"middle-left"}],get value(){return e().position},onChange:a=>t({position:a})}),null),h(s,p(Se,{label:"Panel Position",get value(){return e().panelLocation},options:[{label:"Top",value:"top"},{label:"Bottom",value:"bottom"}],onChange:a=>t({panelLocation:a})}),null),w(a=>{var r=o().settingsGroup,n=o().settingRow;return r!==a.e&&u(c,a.e=r),n!==a.t&&u(s,a.t=n),a},{e:void 0,t:void 0}),c})()]}})]}})},An=t=>{if(t.status==="installing")return"Installing...";if(t.status==="success")return"Installed!";if(t.status==="error")return"Error";switch(t.actionType){case"install":return"Install";case"install-devtools":return"Install Devtools";case"add-to-devtools":return"Add to Devtools";case"requires-package":return`Requires ${t.requiredPackageName}`;case"wrong-framework":return"Different Framework";case"already-installed":return"Already Installed";case"bump-version":return"Bump Version";case"version-mismatch":return"Version Mismatch";default:return"Install"}},Pn=t=>t.actionType==="requires-package"||t.actionType==="wrong-framework"||t.actionType==="version-mismatch"?"danger":t.actionType==="bump-version"?"warning":t.actionType==="already-installed"?"secondary":"primary",Tn=(t,e)=>{const o=e(),l=o.pluginMarketplaceCardBadge;switch(t.actionType){case"install":case"install-devtools":return`${l} ${o.pluginMarketplaceCardBadgeInstall}`;case"add-to-devtools":return`${l} ${o.pluginMarketplaceCardBadgeAdd}`;case"already-installed":return`${l} ${o.pluginMarketplaceCardBadgeAdd}`;case"bump-version":return`${l} ${o.pluginMarketplaceCardBadgeRequires}`;case"version-mismatch":return`${l} ${o.pluginMarketplaceCardBadgeRequires}`;case"requires-package":case"wrong-framework":return`${l} ${o.pluginMarketplaceCardBadgeRequires}`;default:return l}},En=t=>{switch(t.actionType){case"install":case"install-devtools":return"Available";case"add-to-devtools":return"Installed";case"already-installed":return"Active";case"version-mismatch":return"Incompatible";case"requires-package":return"Unavailable";case"wrong-framework":return"Other Framework";default:return""}},Bn=v("<div>New"),zn=v("<img>"),In=v("<span>✓ v<!> • Min v"),Fn=v("<p>"),Dn=v('<a target=_blank rel="noopener noreferrer">Documentation '),$e=v("<div>"),Hn=v("<div style=position:relative><span></span><div></div><div><h3></h3><p></p><p>"),Ln=v("<span>⚠️ v<!> • Requires v<!>+"),et=v("<span>"),Nn=v("<span>Installing..."),On=v("<span>Installed!"),Un=t=>{const e=L(),{card:o}=t;return(()=>{var l=Hn(),c=l.firstChild,s=c.nextSibling,a=s.nextSibling,r=a.firstChild,n=r.nextSibling,d=n.nextSibling;return h(l,p(B,{get when(){return o.metadata?.isNew},get children(){var i=Bn();return w(()=>u(i,e().pluginMarketplaceNewBanner)),i}}),c),h(c,()=>En(o)),h(s,p(B,{get when(){return o.metadata?.logoUrl},get fallback(){return p(Nr,{})},get children(){var i=zn();return w(g=>{var f=o.metadata?.logoUrl,k=o.metadata?.title||o.devtoolsPackage,b=e().pluginMarketplaceCardImage;return f!==g.e&&j(i,"src",g.e=f),k!==g.t&&j(i,"alt",g.t=k),b!==g.a&&u(i,g.a=b),g},{e:void 0,t:void 0,a:void 0}),i}})),h(r,()=>o.metadata?.title||o.devtoolsPackage),h(n,()=>o.devtoolsPackage),h(d,(()=>{var i=I(()=>o.actionType==="requires-package");return()=>i()?`Requires ${o.requiredPackageName}`:I(()=>o.actionType==="wrong-framework")()?"For different framework projects":I(()=>o.actionType==="already-installed")()?"Active in your devtools":I(()=>o.actionType==="version-mismatch")()?o.versionInfo?.reason||"Version incompatible":o.metadata?.description||`For ${o.requiredPackageName}`})()),h(a,p(B,{get when(){return o.versionInfo},get children(){var i=Fn();return h(i,p(B,{get when(){return o.versionInfo?.satisfied},get fallback(){return(()=>{var g=Ln(),f=g.firstChild,k=f.nextSibling,b=k.nextSibling,y=b.nextSibling;return y.nextSibling,h(g,()=>o.versionInfo?.current,k),h(g,()=>o.versionInfo?.required,y),w(()=>u(g,e().pluginMarketplaceCardVersionUnsatisfied)),g})()},get children(){var g=In(),f=g.firstChild,k=f.nextSibling;return k.nextSibling,h(g,()=>o.versionInfo?.current,k),h(g,()=>o.versionInfo?.required,null),w(()=>u(g,e().pluginMarketplaceCardVersionSatisfied)),g}})),w(()=>u(i,e().pluginMarketplaceCardVersionInfo)),i}}),null),h(a,p(B,{get when(){return o.metadata?.docsUrl},get children(){var i=Dn();return i.firstChild,h(i,p(qr,{}),null),w(g=>{var f=o.metadata?.docsUrl,k=e().pluginMarketplaceCardDocsLink;return f!==g.e&&j(i,"href",g.e=f),k!==g.t&&u(i,g.t=k),g},{e:void 0,t:void 0}),i}}),null),h(a,p(B,{get when(){return I(()=>!!o.metadata?.tags)()&&o.metadata.tags.length>0},get children(){var i=$e();return h(i,p(W,{get each(){return o.metadata?.tags},children:g=>(()=>{var f=et();return h(f,g),w(()=>u(f,e().pluginMarketplaceCardTag)),f})()})),w(()=>u(i,e().pluginMarketplaceCardTags)),i}}),null),h(l,p(B,{get when(){return o.status==="idle"},get fallback(){return(()=>{var i=$e();return h(i,p(B,{get when(){return o.status==="installing"},get children(){return[(()=>{var g=$e();return w(()=>u(g,e().pluginMarketplaceCardSpinner)),g})(),(()=>{var g=Nn();return w(()=>u(g,e().pluginMarketplaceCardStatusText)),g})()]}}),null),h(i,p(B,{get when(){return o.status==="success"},get children(){return[p(Or,{}),(()=>{var g=On();return w(()=>u(g,e().pluginMarketplaceCardStatusText)),g})()]}}),null),h(i,p(B,{get when(){return o.status==="error"},get children(){return[p(Ur,{}),(()=>{var g=et();return h(g,()=>o.error||"Failed to install"),w(()=>u(g,e().pluginMarketplaceCardStatusTextError)),g})()]}}),null),w(()=>u(i,e().pluginMarketplaceCardStatus)),i})()},get children(){return p(kt,{get variant(){return Pn(o)},onClick:()=>t.onAction(o),get disabled(){return o.status!=="idle"||o.actionType==="requires-package"||o.actionType==="wrong-framework"||o.actionType==="already-installed"||o.actionType==="version-mismatch"},get class(){return I(()=>o.actionType==="already-installed")()?e().pluginMarketplaceButtonInstalled:""},get children(){return An(o)}})}}),null),w(i=>{var g=e().pluginMarketplaceCard,f={[e().pluginMarketplaceCardDisabled]:!o.isCurrentFramework&&o.actionType!=="already-installed",[e().pluginMarketplaceCardFeatured]:!!o.metadata?.featured&&o.actionType!=="already-installed",[e().pluginMarketplaceCardActive]:o.actionType==="already-installed"},k=Tn(o,e),b=e().pluginMarketplaceCardIcon,y=!!o.metadata?.logoUrl,x=e().pluginMarketplaceCardHeader,C=e().pluginMarketplaceCardTitle,$=e().pluginMarketplaceCardPackageBadge,O=e().pluginMarketplaceCardDescriptionText;return g!==i.e&&u(l,i.e=g),i.t=Be(l,f,i.t),k!==i.a&&u(c,i.a=k),b!==i.o&&u(s,i.o=b),y!==i.i&&s.classList.toggle("custom-logo",i.i=y),x!==i.n&&u(a,i.n=x),C!==i.s&&u(r,i.s=C),$!==i.h&&u(n,i.h=$),O!==i.r&&u(d,i.r=O),i},{e:void 0,t:void 0,a:void 0,o:void 0,i:void 0,n:void 0,s:void 0,h:void 0,r:void 0}),l})()},Rn=v('<svg xmlns=http://www.w3.org/2000/svg viewBox="0 0 24 24"fill=currentColor><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z">'),Qn=v('<svg xmlns=http://www.w3.org/2000/svg viewBox="0 0 24 24"fill=none stroke=currentColor stroke-width=2 stroke-linecap=round stroke-linejoin=round><rect x=2 y=4 width=20 height=16 rx=2></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7">'),qn=v(`<div><div><h4><span></span>Want to be featured here?</h4><p>If you've built a plugin for TanStack Devtools and would like to showcase it in the featured section, we'd love to hear from you! Reach out to us to discuss partnership opportunities.</p><a href="mailto:partners+devtools@tanstack.com?subject=Featured%20Plugin%20Partnership%20Inquiry"><span></span>Contact Us`),jn=v("<div>"),Vn=v("<div><div><div><div></div><h3>"),Yn=()=>Rn(),Gn=()=>Qn(),Wn=t=>{const e=L();return(()=>{var o=Vn(),l=o.firstChild,c=l.firstChild,s=c.firstChild,a=s.nextSibling;return we(l,"click",t.onToggleCollapse,!0),h(s,p(Rr,{})),h(a,()=>t.section.displayName),h(o,p(B,{get when(){return!t.isCollapsed()},get children(){return[p(B,{get when(){return t.section.id==="featured"},get children(){var r=qn(),n=r.firstChild,d=n.firstChild,i=d.firstChild,g=d.nextSibling,f=g.nextSibling,k=f.firstChild;return h(i,p(Yn,{})),h(k,p(Gn,{})),w(b=>{var y=e().pluginMarketplaceFeatureBanner,x=e().pluginMarketplaceFeatureBannerContent,C=e().pluginMarketplaceFeatureBannerTitle,$=e().pluginMarketplaceFeatureBannerIcon,O=e().pluginMarketplaceFeatureBannerText,K=e().pluginMarketplaceFeatureBannerButton,Z=e().pluginMarketplaceFeatureBannerButtonIcon;return y!==b.e&&u(r,b.e=y),x!==b.t&&u(n,b.t=x),C!==b.a&&u(d,b.a=C),$!==b.o&&u(i,b.o=$),O!==b.i&&u(g,b.i=O),K!==b.n&&u(f,b.n=K),Z!==b.s&&u(k,b.s=Z),b},{e:void 0,t:void 0,a:void 0,o:void 0,i:void 0,n:void 0,s:void 0}),r}}),(()=>{var r=jn();return h(r,p(W,{get each(){return t.section.cards},children:n=>p(Un,{card:n,get onAction(){return t.onCardAction}})})),w(()=>u(r,e().pluginMarketplaceGrid)),r})()]}}),null),w(r=>{var n=e().pluginMarketplaceSection,d=e().pluginMarketplaceSectionHeader,i=e().pluginMarketplaceSectionHeaderLeft,g=e().pluginMarketplaceSectionChevron,f={[e().pluginMarketplaceSectionChevronCollapsed]:t.isCollapsed()},k=e().pluginMarketplaceSectionTitle;return n!==r.e&&u(o,r.e=n),d!==r.t&&u(l,r.t=d),i!==r.a&&u(c,r.a=i),g!==r.o&&u(s,r.o=g),r.i=Be(s,f,r.i),k!==r.n&&u(a,r.n=k),r},{e:void 0,t:void 0,a:void 0,o:void 0,i:void 0,n:void 0}),o})()};V(["click"]);var Kn=v("<div><div><h3>Marketplace Settings</h3><button></button></div><div>"),Zn=t=>{const e=L();return p(B,{get when(){return t.isOpen()},get children(){var o=Kn(),l=o.firstChild,c=l.firstChild,s=c.nextSibling,a=l.nextSibling;return we(s,"click",t.onClose,!0),h(s,p(Vr,{})),h(a,p(de,{label:"Show active plugins",description:"Display installed plugins in a separate section",get checked(){return t.showActivePlugins()},onChange:r=>t.setShowActivePlugins(r)})),w(r=>{var n=e().pluginMarketplaceSettingsPanel,d=e().pluginMarketplaceSettingsPanelHeader,i=e().pluginMarketplaceSettingsPanelTitle,g=e().pluginMarketplaceSettingsPanelClose,f=e().pluginMarketplaceSettingsPanelContent;return n!==r.e&&u(o,r.e=n),d!==r.t&&u(l,r.t=d),i!==r.a&&u(c,r.a=i),g!==r.o&&u(s,r.o=g),f!==r.i&&u(a,r.i=f),r},{e:void 0,t:void 0,a:void 0,o:void 0,i:void 0}),o}})};V(["click"]);var Jn=v("<div>"),Xn=v("<button>"),_n=t=>{const e=L();return p(B,{get when(){return t.tags().length>0},get children(){var o=Jn();return h(o,p(W,{get each(){return t.tags()},children:l=>(()=>{var c=Xn();return c.$$click=()=>t.onToggleTag(l),h(c,l),w(s=>{var a=e().pluginMarketplaceTagButton,r={[e().pluginMarketplaceTagButtonActive]:t.selectedTags().has(l)};return a!==s.e&&u(c,s.e=a),s.t=Be(c,r,s.t),s},{e:void 0,t:void 0}),c})()})),w(()=>u(o,e().pluginMarketplaceTagsContainer)),o}})};V(["click"]);var ea=v('<div><div><h2>Plugin Marketplace</h2><div style=display:flex;align-items:center><div><input type=text placeholder="Search plugins..."></div><button></button></div></div><p>Discover and install devtools for TanStack Query, Router, Form, and Pacer'),ta=t=>{const e=L();return(()=>{var o=ea(),l=o.firstChild,c=l.firstChild,s=c.nextSibling,a=s.firstChild,r=a.firstChild,n=a.nextSibling,d=l.nextSibling;return h(a,p(Qr,{}),r),r.$$input=i=>t.onSearchInput(i.currentTarget.value),we(n,"click",t.onSettingsClick,!0),h(n,p(jr,{})),h(o,p(_n,{get tags(){return t.tags},get selectedTags(){return t.selectedTags},get onToggleTag(){return t.onToggleTag}}),null),w(i=>{var g=e().pluginMarketplaceHeader,f=e().pluginMarketplaceTitleRow,k=e().pluginMarketplaceTitle,b=e().pluginMarketplaceSearchWrapper,y=e().pluginMarketplaceSearch,x=e().pluginMarketplaceSettingsButton,C=e().pluginMarketplaceDescription;return g!==i.e&&u(o,i.e=g),f!==i.t&&u(l,i.t=f),k!==i.a&&u(c,i.a=k),b!==i.o&&u(a,i.o=b),y!==i.i&&u(r,i.i=y),x!==i.n&&u(n,i.n=x),C!==i.s&&u(d,i.s=C),i},{e:void 0,t:void 0,a:void 0,o:void 0,i:void 0,n:void 0,s:void 0}),w(()=>r.value=t.searchInput()),o})()};V(["input","click"]);var tt=["react","solid","vue","svelte","angular"],ra={"@tanstack/react-query-devtools":{packageName:"@tanstack/react-query-devtools",title:"TanStack Query Devtools",description:"Powerful devtools for TanStack Query - inspect queries, mutations, and cache",requires:{packageName:"@tanstack/react-query",minVersion:"5.0.0"},pluginId:"tanstack-query",docsUrl:"https://tanstack.com/query/latest/docs/devtools",author:"TanStack",framework:"react",featured:!0,tags:["TanStack","data-fetching","caching","state-management"]},"@tanstack/solid-query-devtools":{packageName:"@tanstack/solid-query-devtools",title:"TanStack Query Devtools",description:"Powerful devtools for TanStack Query - inspect queries, mutations, and cache",requires:{packageName:"@tanstack/solid-query",minVersion:"5.0.0"},pluginId:"tanstack-query",docsUrl:"https://tanstack.com/query/latest/docs/devtools",author:"TanStack",framework:"solid",tags:["TanStack","data-fetching","caching","state-management"]},"@tanstack/react-router-devtools":{packageName:"@tanstack/react-router-devtools",title:"TanStack Router Devtools",description:"Inspect routes, navigation, and router state in real-time",requires:{packageName:"@tanstack/react-router",minVersion:"1.0.0"},pluginId:"tanstack-router",docsUrl:"https://tanstack.com/router/latest/docs/devtools",author:"TanStack",framework:"react",featured:!0,tags:["TanStack","routing","navigation"]},"@tanstack/solid-router-devtools":{packageName:"@tanstack/solid-router-devtools",title:"TanStack Router Devtools",description:"Inspect routes, navigation, and router state in real-time",requires:{packageName:"@tanstack/solid-router",minVersion:"1.0.0"},pluginId:"tanstack-router",docsUrl:"https://tanstack.com/router/latest/docs/devtools",author:"TanStack",framework:"solid",tags:["TanStack","routing","navigation"]},"@tanstack/react-form-devtools":{packageName:"@tanstack/react-form-devtools",title:"TanStack Form Devtools",description:"Debug form state, validation, and field values",requires:{packageName:"@tanstack/react-form",minVersion:"1.23.0"},pluginImport:{importName:"FormDevtoolsPlugin",type:"function"},pluginId:"tanstack-form",docsUrl:"https://tanstack.com/form/latest/docs/devtools",author:"TanStack",framework:"react",isNew:!0,tags:["TanStack","forms","validation"]},"@tanstack/solid-form-devtools":{packageName:"@tanstack/solid-form-devtools",title:"TanStack Form Devtools",description:"Debug form state, validation, and field values",requires:{packageName:"@tanstack/solid-form",minVersion:"1.23.0"},pluginImport:{importName:"FormDevtoolsPlugin",type:"function"},pluginId:"tanstack-form",docsUrl:"https://tanstack.com/form/latest/docs/devtools",author:"TanStack",isNew:!0,framework:"solid",tags:["TanStack","forms","validation"]},"@tanstack/react-pacer-devtools":{packageName:"@tanstack/react-pacer-devtools",title:"Pacer Devtools",description:"Monitor and debug your Pacer animations and transitions",requires:{packageName:"@tanstack/react-pacer",minVersion:"0.16.4"},author:"TanStack",framework:"react",isNew:!0,tags:["TanStack"]},"@tanstack/solid-pacer-devtools":{packageName:"@tanstack/solid-pacer-devtools",title:"Pacer Devtools",description:"Monitor and debug your Pacer animations and transitions",requires:{packageName:"@tanstack/solid-pacer",minVersion:"0.14.4"},author:"TanStack",framework:"solid",isNew:!0,tags:["TanStack"]},"@tanstack/devtools-a11y":{packageName:"@tanstack/devtools-a11y",title:"Accessibility Devtools",description:"Audit accessibility issues in real-time with axe-core. Supports WCAG 2.1/2.2, live monitoring, and visual overlays.",pluginImport:{importName:"createA11yPlugin",type:"function"},pluginId:"devtools-a11y",docsUrl:"https://tanstack.com/devtools/latest/docs/plugins/a11y",author:"TanStack",framework:"react",isNew:!0,tags:["TanStack","a11y"]},"@dimano/ts-devtools-plugin-prefetch-heatmap":{packageName:"@dimano/ts-devtools-plugin-prefetch-heatmap",title:"Prefetch Heatmap",description:"Visualize TanStack Router prefetch intent, hits, and waste with a color overlay and a live metrics panel.",requires:{packageName:"@tanstack/react-router",minVersion:"1.0.0"},pluginImport:{importName:"registerPrefetchHeatmapPlugin",type:"function"},pluginId:"prefetch-heatmap",logoUrl:"https://raw.githubusercontent.com/dimitrianoudi/tanstack-prefetch-heatmap/main/assets/prefetch-heatmap-card.png",docsUrl:"https://github.com/dimitrianoudi/tanstack-prefetch-heatmap#prefetch-heatmap-devtools-plugin",repoUrl:"https://github.com/dimitrianoudi/tanstack-prefetch-heatmap",author:"Dimitris Anoudis (@dimitrianoudi)",framework:"react",isNew:!0,tags:["Router","Prefetch","Analytics","Overlay","TanStack"]}};function na(){return Object.values(ra)}function ke(t){if(!t)return null;const e=t.replace(/^[v^~]/,"").split("-")[0]?.split("+")[0];if(!e)return null;const o=e.split(".");if(o.length<2)return null;const l=parseInt(o[0]??"0",10),c=parseInt(o[1]??"0",10),s=parseInt(o[2]??"0",10);return isNaN(l)||isNaN(c)||isNaN(s)?null:{major:l,minor:c,patch:s,raw:t}}function Pt(t,e){return t.major!==e.major?t.major-e.major:t.minor!==e.minor?t.minor-e.minor:t.patch-e.patch}function aa(t,e){const o=ke(t),l=ke(e);return!o||!l?!0:Pt(o,l)>=0}function oa(t,e){const o=ke(t),l=ke(e);return!o||!l?!0:Pt(o,l)<=0}function ia(t,e,o){return!e&&!o?{satisfied:!0}:e&&!aa(t,e)?{satisfied:!1,reason:`Requires v${e} or higher (current: v${t})`}:o&&!oa(t,o)?{satisfied:!1,reason:`Requires v${o} or lower (current: v${t})`}:{satisfied:!0}}var rt=(t,e)=>{const o={...t.dependencies,...t.devDependencies},l={react:["react","react-dom"],vue:["vue","@vue/core"],solid:["solid-js"],svelte:["svelte"],angular:["@angular/core"]};for(const c of e){const s=l[c];if(s&&s.some(a=>o[a]))return c}return"unknown"},la=(t,e,o,l,c)=>{if(c)return Array.from(t).some(r=>{const n=r.toLowerCase(),d=c.toLowerCase();return n.startsWith(d)||n.includes(d)});if(t.has(e))return!0;const s=o.toLowerCase().split(/[-_/@]/).filter(r=>r.length>0),a=l.toLowerCase();return Array.from(t).some(r=>{const n=r.toLowerCase();if(n.includes(o.toLowerCase()))return!0;const d=s.filter(i=>n.includes(i));return!!(d.length>=2||n.includes(a)&&d.length>=1)})},nt=(t,e,o,l)=>{const c={...t.dependencies,...t.devDependencies},s=[];return na().forEach(r=>{const n=r.packageName,d=r.framework===e||r.framework==="other",i=r.requires?.packageName,g=i?!!c[i]:!1,f=!!c[n];let k;if(g&&r.requires){const C=i?c[i]:void 0;if(C){const $=ia(C,r.requires.minVersion,r.requires.maxVersion);k={current:C,required:r.requires.minVersion,satisfied:$.satisfied,reason:$.reason}}}const b=la(o,n,r.packageName,r.framework,r.pluginId);let y;d?r.requires&&!g?y="requires-package":k&&!k.satisfied?y="bump-version":f&&b?y="already-installed":f&&!b?y="add-to-devtools":!f&&r.requires&&g?y="install-devtools":y="install":y="wrong-framework";const x=l.find(C=>C.devtoolsPackage===n);s.push({requiredPackageName:i||"",devtoolsPackage:n,framework:r.framework,hasPackage:g,hasDevtools:f,isRegistered:b,actionType:y,status:x?.status||"idle",error:x?.error,isCurrentFramework:d,metadata:r,versionInfo:k})}),s},at=t=>{const e=[],o=t.filter(s=>s.metadata?.featured&&s.actionType!=="already-installed"&&s.isCurrentFramework);e.push({id:"featured",displayName:"⭐ Featured",cards:o});const l=t.filter(s=>s.actionType==="already-installed"&&s.isRegistered);l.length>0&&e.push({id:"active",displayName:"✓ Active Plugins",cards:l});const c=t.filter(s=>s.isCurrentFramework&&s.actionType!=="already-installed"&&!s.metadata?.featured);return c.length>0&&e.push({id:"available",displayName:"Available Plugins",cards:c}),e},sa=v("<div><p>"),ca=v("<div>"),ot=()=>{const t=L(),{plugins:e}=St(),[o,l]=T([]),[c,s]=T(null),[a,r]=T(""),[n,d]=T(""),[i,g]=T(new Set),[f,k]=T(!0),[b,y]=T(new Set),[x,C]=T(!1);let $;const O=S=>{r(S),$&&clearTimeout($),$=setTimeout(()=>{d(S)},300)},K=S=>{g(A=>{const P=new Set(A);return P.has(S)?P.delete(S):P.add(S),P})},Z=(S,A)=>{if(!A)return!0;const P=A.toLowerCase();return S.devtoolsPackage.toLowerCase().includes(P)||S.requiredPackageName.toLowerCase().includes(P)||S.framework.toLowerCase().includes(P)},E=()=>{const S=n(),A=f(),P=b(),z=c();if(!z)return[];const F=rt(z,tt),U=new Set(e()?.map(R=>R.id||"")||[]),re=nt(z,F,U,o().flatMap(R=>R.cards));let q=at(re);return A||(q=q.filter(R=>R.id!=="active")),P.size>0&&(q=q.map(R=>({...R,cards:R.cards.filter(pe=>pe.metadata?.tags?pe.metadata.tags.some(Bt=>P.has(Bt)):!1)})).filter(R=>R.cards.length>0)),S?q.map(R=>({...R,cards:R.cards.filter(pe=>Z(pe,S))})).filter(R=>R.cards.length>0):q};ht(()=>{const S=J.on("package-json-read",F=>{s(F.payload.packageJson),N(F.payload.packageJson)}),A=J.on("package-json-updated",F=>{s(F.payload.packageJson),N(F.payload.packageJson)}),P=J.on("devtools-installed",F=>{l(U=>U.map(re=>({...re,cards:re.cards.map(q=>q.devtoolsPackage===F.payload.packageName?{...q,status:F.payload.success?"success":"error",error:F.payload.error}:q)})))}),z=J.on("plugin-added",F=>{if(l(U=>U.map(re=>({...re,cards:re.cards.map(q=>q.devtoolsPackage===F.payload.packageName?{...q,status:F.payload.success?"success":"error",error:F.payload.error}:q)}))),F.payload.success){const U=c();U&&N(U)}});_(()=>{S(),A(),P(),z()}),J.emit("mounted",void 0)});const N=S=>{if(!S)return;const A=rt(S,tt),P=new Set(e()?.map(U=>U.id||"")||[]),z=nt(S,A,P,o().flatMap(U=>U.cards)),F=at(z);l(F)},te=S=>{if(!(S.actionType==="requires-package"||S.actionType==="wrong-framework"||S.actionType==="already-installed"||S.actionType==="version-mismatch")){if(l(A=>A.map(P=>({...P,cards:P.cards.map(z=>z.devtoolsPackage===S.devtoolsPackage?{...z,status:"installing"}:z)}))),S.actionType==="bump-version"){J.emit("bump-package-version",{packageName:S.requiredPackageName,devtoolsPackage:S.devtoolsPackage,pluginName:S.metadata?.title||S.devtoolsPackage,minVersion:S.metadata?.requires?.minVersion,pluginImport:S.metadata?.pluginImport});return}if(S.actionType==="add-to-devtools"){J.emit("add-plugin-to-devtools",{packageName:S.devtoolsPackage,pluginName:S.metadata?.title??S.devtoolsPackage,pluginImport:S.metadata?.pluginImport});return}J.emit("install-devtools",{packageName:S.devtoolsPackage,pluginName:S.metadata?.title??S.devtoolsPackage,pluginImport:S.metadata?.pluginImport})}},Y=()=>{const S=new Set;return o().forEach(A=>{(A.id==="featured"||A.id==="available")&&A.cards.forEach(P=>{P.metadata?.tags&&P.metadata.tags.forEach(z=>S.add(z))})}),Array.from(S).sort()},G=S=>{y(A=>{const P=new Set(A);return P.has(S)?P.delete(S):P.add(S),P})};return(()=>{var S=ca();return h(S,p(Zn,{isOpen:x,onClose:()=>C(!1),showActivePlugins:f,setShowActivePlugins:k}),null),h(S,p(ta,{searchInput:a,onSearchInput:O,onSettingsClick:()=>C(!x()),tags:Y,selectedTags:b,onToggleTag:G}),null),h(S,p(B,{get when(){return E().length>0},get children(){return p(W,{get each(){return E()},children:A=>p(Wn,{section:A,isCollapsed:()=>i().has(A.id),onToggleCollapse:()=>K(A.id),onCardAction:te})})}}),null),h(S,p(B,{get when(){return E().length===0},get children(){var A=sa(),P=A.firstChild;return h(P,(()=>{var z=I(()=>!!n());return()=>z()?`No plugins found matching "${n()}"`:"No additional plugins available. You have all compatible devtools installed and registered!"})()),w(z=>{var F=t().pluginMarketplaceEmpty,U=t().pluginMarketplaceEmptyText;return F!==z.e&&u(A,z.e=F),U!==z.t&&u(P,z.t=U),z},{e:void 0,t:void 0}),A}}),null),w(()=>u(S,t().pluginMarketplace)),S})()},da=v("<div><div><div><div></div><div><h3>Add More"),ga=v("<div><h3>"),ua=v("<div>"),pa=t=>{const{plugins:e,activePlugins:o,toggleActivePlugins:l}=St(),{expanded:c,hoverUtils:s,animationMs:a,setForceExpand:r}=Ie(),[n,d]=T(new Map),[i,g]=T(!1),f=L(),{theme:k}=De(),b=H(()=>e()?.length&&e().length>0);D(()=>{r(i())}),D(()=>{e()?.filter($=>o().includes($.id))?.forEach($=>{const O=n().get($.id);O&&$.render(O,{theme:k(),devtoolsOpen:t.isOpen})})});const y=()=>g(!i()),x=C=>{i()&&g(!1),l(C)};return p(B,{get when(){return b()},get fallback(){return p(ot,{})},get children(){var C=da(),$=C.firstChild,O=$.firstChild,K=O.firstChild,Z=K.nextSibling;return $.addEventListener("mouseleave",()=>{i()||s.leave()}),$.addEventListener("mouseenter",()=>s.enter()),h(K,p(W,{get each(){return e()},children:E=>{let N;D(()=>{N&&(typeof E.name=="string"?N.textContent=E.name:E.name(N,{theme:k(),devtoolsOpen:t.isOpen}))});const te=H(()=>o().includes(E.id));return(()=>{var Y=ga(),G=Y.firstChild;Y.$$click=()=>x(E.id);var S=N;return typeof S=="function"?ce(S,G):N=G,w(A=>{var P=Q(f().pluginName,{active:te()}),z=`${Vt}-${E.id}`;return P!==A.e&&u(Y,A.e=P),z!==A.t&&j(G,"id",A.t=z),A},{e:void 0,t:void 0}),Y})()}})),Z.$$click=y,h(C,p(B,{get when(){return i()},get fallback(){return p(W,{get each(){return o()},children:E=>(()=>{var N=ua();return ce(te=>{d(Y=>{const G=new Map(Y);return G.set(E,te),G})},N),j(N,"id",`${jt}-${E}`),w(()=>u(N,f().pluginsTabContent)),N})()})},get children(){return p(ot,{})}}),null),w(E=>{var N=f().pluginsTabPanel,te=Q(f().pluginsTabDraw(c()),{[f().pluginsTabDraw(c())]:c()},f().pluginsTabDrawTransition(a)),Y=Q(f().pluginsTabSidebar(c()),f().pluginsTabSidebarTransition(a)),G=f().pluginsList,S=Q(f().pluginNameAddMore,{active:i()});return N!==E.e&&u(C,E.e=N),te!==E.t&&u($,E.t=te),Y!==E.a&&u(O,E.a=Y),G!==E.o&&u(K,E.o=G),S!==E.i&&u(Z,E.i=S),E},{e:void 0,t:void 0,a:void 0,o:void 0,i:void 0}),C}})};V(["click"]);function Tt(t,e={}){const{attributes:o=!0,childList:l=!0,subtree:c=!0,observeTitle:s=!0}=e;ht(()=>{const a=new MutationObserver(n=>{for(const d of n)if(d.type==="childList")d.addedNodes.forEach(i=>t({kind:"added",node:i},d)),d.removedNodes.forEach(i=>t({kind:"removed",node:i},d));else if(d.type==="attributes"){const i=d.target;t({kind:"attr",target:i,name:d.attributeName,oldValue:d.oldValue??null},d)}else d.target.parentNode&&d.target.parentNode.tagName.toLowerCase()==="title"&&t({kind:"title",title:document.title},d)});a.observe(document.head,{childList:l,attributes:o,subtree:c,attributeOldValue:o,characterData:!0,characterDataOldValue:!1});let r;if(s){const n=document.head.querySelector("title")||document.head.appendChild(document.createElement("title"));r=new MutationObserver(()=>{t({kind:"title",title:document.title})}),r.observe(n,{childList:!0,characterData:!0,subtree:!0})}_(()=>{a.disconnect(),r?.disconnect()})})}var ha=v("<div><div> Preview</div><div></div><div></div><div>"),fa=v("<img alt=Preview>"),ma=v("<div style=background:#222;color:#888;display:flex;align-items:center;justify-content:center;min-height:80px;width:100%>No Image"),it=v("<div>"),va=v("<div><strong>Missing tags for <!>:</strong><ul>"),ba=v("<li>"),lt=[{network:"Facebook",tags:[{key:"og:title",prop:"title"},{key:"og:description",prop:"description"},{key:"og:image",prop:"image"},{key:"og:url",prop:"url"}],color:"#4267B2"},{network:"X/Twitter",tags:[{key:"twitter:title",prop:"title"},{key:"twitter:description",prop:"description"},{key:"twitter:image",prop:"image"},{key:"twitter:url",prop:"url"}],color:"#1DA1F2"},{network:"LinkedIn",tags:[{key:"og:title",prop:"title"},{key:"og:description",prop:"description"},{key:"og:image",prop:"image"},{key:"og:url",prop:"url"}],color:"#0077B5"},{network:"Discord",tags:[{key:"og:title",prop:"title"},{key:"og:description",prop:"description"},{key:"og:image",prop:"image"},{key:"og:url",prop:"url"}],color:"#5865F2"},{network:"Slack",tags:[{key:"og:title",prop:"title"},{key:"og:description",prop:"description"},{key:"og:image",prop:"image"},{key:"og:url",prop:"url"}],color:"#4A154B"},{network:"Mastodon",tags:[{key:"og:title",prop:"title"},{key:"og:description",prop:"description"},{key:"og:image",prop:"image"},{key:"og:url",prop:"url"}],color:"#6364FF"},{network:"Bluesky",tags:[{key:"og:title",prop:"title"},{key:"og:description",prop:"description"},{key:"og:image",prop:"image"},{key:"og:url",prop:"url"}],color:"#1185FE"}];function ya(t){const e=L();return(()=>{var o=ha(),l=o.firstChild,c=l.firstChild,s=l.nextSibling,a=s.nextSibling,r=a.nextSibling;return h(l,()=>t.network,c),h(o,(()=>{var n=I(()=>!!t.meta.image);return()=>n()?(()=>{var d=fa();return w(i=>{var g=t.meta.image,f=e().seoPreviewImage;return g!==i.e&&j(d,"src",i.e=g),f!==i.t&&u(d,i.t=f),i},{e:void 0,t:void 0}),d})():(()=>{var d=ma();return w(()=>u(d,e().seoPreviewImage)),d})()})(),s),h(s,()=>t.meta.title||"No Title"),h(a,()=>t.meta.description||"No Description"),h(r,()=>t.meta.url||window.location.href),w(n=>{var d=e().seoPreviewCard,i=t.color,g=e().seoPreviewHeader,f=t.color,k=e().seoPreviewTitle,b=e().seoPreviewDesc,y=e().seoPreviewUrl;return d!==n.e&&u(o,n.e=d),i!==n.t&&ye(o,"border-color",n.t=i),g!==n.a&&u(l,n.a=g),f!==n.o&&ye(l,"color",n.o=f),k!==n.i&&u(s,n.i=k),b!==n.n&&u(a,n.n=b),y!==n.s&&u(r,n.s=y),n},{e:void 0,t:void 0,a:void 0,o:void 0,i:void 0,n:void 0,s:void 0}),o})()}function ka(){const[t,e]=T(l()),o=L();function l(){const c=Array.from(document.head.querySelectorAll("meta")),s=[];for(const a of lt){const r={},n=[];for(const d of a.tags){const i=c.find(g=>(d.key.includes("twitter:")?!1:g.getAttribute("property")===d.key)||g.getAttribute("name")===d.key);i&&i.getAttribute("content")?r[d.prop]=i.getAttribute("content")||void 0:n.push(d.key)}s.push({network:a.network,found:r,missing:n})}return s}return Tt(()=>{e(l())}),p(le,{get children(){return[p(se,{children:"See how your current page will look when shared on popular social networks. The tool checks for essential meta tags and highlights any that are missing."}),(()=>{var c=it();return h(c,p(W,{get each(){return t()},children:(s,a)=>{const r=lt[a()];return(()=>{var n=it();return h(n,p(ya,{get meta(){return s.found},get color(){return r.color},get network(){return r.network}}),null),h(n,(()=>{var d=I(()=>s.missing.length>0);return()=>d()?(()=>{var i=va(),g=i.firstChild,f=g.firstChild,k=f.nextSibling;k.nextSibling;var b=g.nextSibling;return h(g,()=>r?.network,k),h(b,p(W,{get each(){return s.missing},children:y=>(()=>{var x=ba();return h(x,y),w(()=>u(x,o().seoMissingTag)),x})()})),w(y=>{var x=o().seoMissingTagsSection,C=o().seoMissingTagsList;return x!==y.e&&u(i,y.e=x),C!==y.t&&u(b,y.t=C),y},{e:void 0,t:void 0}),i})():null})(),null),n})()}})),w(()=>u(c,o().seoPreviewSection)),c})()]}})}var wa=v("<div><div></div><div><div><div><span></span><span></span></div></div><div>"),xa=v('<img alt="favicon icon">'),Ae=v("<div>"),Ca=v("<div><strong>Issues for <!>:</strong><ul>"),Sa=v("<li>"),st=60,ct=158,Ma=120,ve="...",$a=[{message:"No favicon or icon set on the page.",hasIssue:t=>!t.favicon},{message:"No title tag set on the page.",hasIssue:t=>!t.title.trim()},{message:"No meta description set on the page.",hasIssue:t=>!t.description.trim()},{message:"The title is wider than 600px and it may not be displayed in full length.",hasIssue:(t,e)=>e.titleOverflow}],Aa=[{label:"Desktop preview",isMobile:!1,extraChecks:[{message:"The meta description may get trimmed at ~960 pixels on desktop and at ~680px on mobile. Keep it below ~158 characters.",hasIssue:(t,e)=>e.descriptionOverflow}]},{label:"Mobile preview",isMobile:!0,extraChecks:[{message:"Description exceeds the 3-line limit for mobile view. Please shorten your text to fit within 3 lines.",hasIssue:(t,e)=>e.descriptionOverflowMobile}]}];function dt(t,e){return t.length<=e?t:e<=ve.length?ve:t.slice(0,e-ve.length)+ve}function gt(){const t=document.title||"",e=typeof window<"u"?window.location.href:"",o=Array.from(document.head.querySelectorAll("meta")),c=o.find(i=>i.getAttribute("name")?.toLowerCase()==="description")?.getAttribute("content")?.trim()||"",a=o.find(i=>i.getAttribute("property")==="og:site_name")?.getAttribute("content")?.trim()||(typeof window<"u"?window.location.hostname.replace(/^www\./,""):"");let d=Array.from(document.head.querySelectorAll("link")).find(i=>i.getAttribute("rel")?.toLowerCase().split(/\s+/).includes("icon"))?.getAttribute("href")||null;if(d&&typeof window<"u")try{d=new URL(d,e).href}catch{d=null}return{title:t,description:c,siteName:a,favicon:d,url:e}}function Pa(t,e,o){return o.filter(l=>l.hasIssue(t,e)).map(l=>l.message)}function Ta(t){const e=L();return(()=>{var o=wa(),l=o.firstChild,c=l.nextSibling,s=c.firstChild,a=s.firstChild,r=a.firstChild,n=r.nextSibling,d=s.nextSibling;return h(l,()=>t.label),h(s,(()=>{var i=I(()=>!!t.data.favicon);return()=>i()?(()=>{var g=xa();return w(f=>{var k=t.data.favicon,b=e().serpSnippetFavicon;return k!==f.e&&j(g,"src",f.e=k),b!==f.t&&u(g,f.t=b),f},{e:void 0,t:void 0}),g})():(()=>{var g=Ae();return w(()=>u(g,e().serpSnippetDefaultFavicon)),g})()})(),a),h(r,()=>t.data.siteName||t.data.url),h(n,()=>t.data.url),h(d,()=>t.displayTitle||t.data.title||"No title"),h(c,(()=>{var i=I(()=>!t.isMobile);return()=>i()&&(()=>{var g=Ae();return h(g,()=>t.displayDescription||t.data.description||"No meta description."),w(()=>u(g,e().serpSnippetDesc)),g})()})(),null),h(c,(()=>{var i=I(()=>!!t.isMobile);return()=>i()&&(()=>{var g=Ae();return h(g,()=>t.displayDescription||t.data.description||"No meta description."),w(()=>u(g,e().serpSnippetDescMobile)),g})()})(),null),h(o,(()=>{var i=I(()=>t.issues.length>0);return()=>i()?(()=>{var g=Ca(),f=g.firstChild,k=f.firstChild,b=k.nextSibling;b.nextSibling;var y=f.nextSibling;return h(f,()=>t.label,b),h(y,p(W,{get each(){return t.issues},children:x=>(()=>{var C=Sa();return h(C,x),w(()=>u(C,e().serpReportItem)),C})()})),w(x=>{var C=e().seoMissingTagsSection,$=e().serpErrorList;return C!==x.e&&u(g,x.e=C),$!==x.t&&u(y,x.t=$),x},{e:void 0,t:void 0}),g})():null})(),null),w(i=>{var g=e().serpPreviewBlock,f=e().serpPreviewLabel,k=t.isMobile?e().serpSnippetMobile:e().serpSnippet,b=e().serpSnippetTopRow,y=e().serpSnippetSiteColumn,x=e().serpSnippetSiteName,C=e().serpSnippetSiteUrl,$=e().serpSnippetTitle;return g!==i.e&&u(o,i.e=g),f!==i.t&&u(l,i.t=f),k!==i.a&&u(c,i.a=k),b!==i.o&&u(s,i.o=b),y!==i.i&&u(a,i.i=y),x!==i.n&&u(r,i.n=x),C!==i.s&&u(n,i.s=C),$!==i.h&&u(d,i.h=$),i},{e:void 0,t:void 0,a:void 0,o:void 0,i:void 0,n:void 0,s:void 0,h:void 0}),o})()}function Ea(){const[t,e]=T(gt());Tt(()=>{e(gt())});const o=H(()=>{const l=t(),c=l.title||"No title",s=l.description||"No meta description.",a=dt(c,st),r=dt(s,ct);return{displayTitle:a,displayDescription:r,overflow:{titleOverflow:c.length>st,descriptionOverflow:s.length>ct,descriptionOverflowMobile:s.length>Ma}}});return p(le,{get children(){return[p(se,{children:"See how your title tag and meta description may look in Google search results. Data is read from the current page."}),p(W,{each:Aa,children:l=>{const c=H(()=>Pa(t(),o().overflow,[...$a,...l.extraChecks]));return p(Ta,{get data(){return t()},get displayTitle(){return o().displayTitle},get displayDescription(){return o().displayDescription},get isMobile(){return l.isMobile},get label(){return l.label},get issues(){return c()}})}})]}})}var Ba=v('<nav aria-label="SEO sections"><button type=button>Social previews</button><button type=button>SERP Preview'),za=()=>{const[t,e]=T("social-previews"),o=L();return p(wt,{withPadding:!0,get children(){return[(()=>{var l=Ba(),c=l.firstChild,s=c.nextSibling;return c.$$click=()=>e("social-previews"),s.$$click=()=>e("serp-preview"),w(a=>{var r=o().seoSubNav,n=`${o().seoSubNavLabel} ${t()==="social-previews"?o().seoSubNavLabelActive:""}`,d=`${o().seoSubNavLabel} ${t()==="serp-preview"?o().seoSubNavLabelActive:""}`;return r!==a.e&&u(l,a.e=r),n!==a.t&&u(c,a.t=n),d!==a.a&&u(s,a.a=d),a},{e:void 0,t:void 0,a:void 0}),l})(),p(B,{get when(){return t()==="social-previews"},get children(){return p(ka,{})}}),p(B,{get when(){return t()==="serp-preview"},get children(){return p(Ea,{})}})]}})};V(["click"]);var Et=[{name:"Plugins",id:"plugins",component:t=>p(pa,t),icon:()=>p(Er,{})},{name:"SEO",id:"seo",component:()=>p(za,{}),icon:()=>p(Br,{})},{name:"Settings",id:"settings",component:()=>p($n,{}),icon:()=>p(zr,{})}],Ia=v("<div>"),Fa=v("<button type=button>"),Da=v("<div style=margin-top:auto;width:100%><button type=button></button><button type=button>"),Ha=t=>{const e=L(),{state:o,setState:l}=Ce(),c=Te(),s=()=>{c().requestPipWindow(`width=${window.innerWidth},height=${o().height},top=${window.screen.height},left=${window.screenLeft}}`)},{hoverUtils:a}=Ie();return(()=>{var r=Ia();return h(r,p(W,{each:Et,children:n=>(()=>{var d=Fa();return d.addEventListener("mouseleave",()=>{n.id==="plugins"&&a.leave()}),d.addEventListener("mouseenter",()=>{n.id==="plugins"&&a.enter()}),d.$$click=()=>l({activeTab:n.id}),h(d,()=>n.icon()),w(()=>u(d,Q(e().tab,{active:o().activeTab===n.id}))),d})()}),null),h(r,(()=>{var n=I(()=>c().pipWindow!==null);return()=>n()?null:(()=>{var d=Da(),i=d.firstChild,g=i.nextSibling;return i.$$click=s,h(i,p(Yr,{})),g.$$click=()=>t.toggleOpen(),h(g,p(Lr,{})),w(f=>{var k=Q(e().tab,"detach"),b=Q(e().tab,"close");return k!==f.e&&u(i,f.e=k),b!==f.t&&u(g,f.t=b),f},{e:void 0,t:void 0}),d})()})(),null),w(()=>u(r,e().tabContainer)),r})()};V(["click"]);var La=v("<div>"),Na=t=>{const{state:e}=Ce(),o=L(),l=H(()=>Et.find(c=>c.id===e().activeTab)?.component||null);return(()=>{var c=La();return h(c,()=>l()?.({isOpen:t.isOpen})),w(()=>u(c,o().tabContent)),c})()},ut=v("<div style=pointer-events:none>"),Oa=()=>{const{settings:t}=oe(),e=()=>({element:null,bounding:{width:0,height:0,left:0,top:0},dataSource:""}),[o,l]=He(e()),c=()=>{l(e())},[s,a]=T(null),r=tn(()=>s()),[n,d]=He({x:0,y:0});je(document,"mousemove",b=>{d({x:b.clientX,y:b.clientY})});const i=vt(),g=H(()=>sn(i(),t().inspectHotkey));D(()=>{if(!g()){c();return}const b=document.elementFromPoint(n.x,n.y);if(!(b instanceof HTMLElement)){c();return}if(b===o.element)return;const y=b.getAttribute("data-tsd-source");if(!y){c();return}const x=b.getBoundingClientRect(),C={width:x.width,height:x.height,left:x.left,top:x.top};l({element:b,bounding:C,dataSource:y})}),je(document,"click",b=>{if(!o.element)return;window.getSelection()?.removeAllRanges(),b.preventDefault(),b.stopPropagation();const y=new URL("/MusicFlow/",location.origin),x=new URL(`__tsd/open-source?source=${encodeURIComponent(o.dataSource)}`,y);fetch(x).catch(()=>{})});const f=H(()=>o.element?{display:"block",width:`${o.bounding.width}px`,height:`${o.bounding.height}px`,left:`${o.bounding.left}px`,top:`${o.bounding.top}px`,"background-color":"oklch(55.4% 0.046 257.417 /0.25)",transition:"all 0.05s linear",position:"fixed","z-index":9999}:{display:"none"}),k=H(()=>{if(o.element&&s()){const b=window.innerWidth,y=r.height||26,x=r.width||0;let C=o.bounding.left,$=o.bounding.top-y-4;return $<0&&($=o.bounding.top+o.bounding.height+4),C+x>b&&(C=b-x-4),C<0&&(C=4),{position:"fixed",left:`${C}px`,top:`${$}px`,"background-color":"oklch(55.4% 0.046 257.417 /0.80)",color:"white",padding:"2px 4px",fontSize:"12px","border-radius":"2px","z-index":1e4,visibility:"visible",transition:"all 0.05s linear"}}return{display:"none"}});return[(()=>{var b=ut();return ce(a,b),h(b,()=>o.dataSource),w(y=>Le(b,{...k()},y)),b})(),(()=>{var b=ut();return w(y=>Le(b,{...f()},y)),b})()]},Ua=v("<div>");function ja(){const{settings:t}=oe(),{setHeight:e}=Mt(),{persistOpen:o,setPersistOpen:l}=an(),[c,s]=T(),[a,r]=T(t().defaultOpen||o()),n=Te();let d;const[i,g]=T(!1),f=()=>{if(n().pipWindow)return;const x=!a();r(x),l(x),J.emit("trigger-toggled",{isOpen:x})};D(()=>{const y=J.on("trigger-toggled",x=>{if(n().pipWindow)return;const $=x.payload.isOpen;$!==a()&&(r($),l($))});_(y)});const k=(y,x)=>{if(x.button!==0||!y)return;g(!0);const C={originalHeight:y.getBoundingClientRect().height,pageY:x.pageY},$=K=>{const Z=C.pageY-K.pageY,E=t().panelLocation==="bottom"?C.originalHeight+Z:C.originalHeight-Z;e(E),E<70?r(!1):r(!0)},O=()=>{g(!1),document.removeEventListener("mousemove",$),document.removeEventListener("mouseUp",O)};document.addEventListener("mousemove",$),document.addEventListener("mouseup",O)};D(()=>{if(a()){const y=c()?.parentElement?.style.paddingBottom,x=()=>{d&&c()?.parentElement&&s(C=>(C?.parentElement,C))};if(x(),typeof window<"u")return(n().pipWindow??window).addEventListener("resize",x),()=>{(n().pipWindow??window).removeEventListener("resize",x),c()?.parentElement&&typeof y=="string"&&s(C=>C)}}else c()?.parentElement&&s(y=>(y?.parentElement&&y.parentElement.removeAttribute("style"),y))}),D(()=>{window.addEventListener("keydown",y=>{y.key==="Escape"&&a()&&f()})}),on(a),D(()=>{if(c()){const y=c(),x=getComputedStyle(y).fontSize;y?.style.setProperty("--tsrd-font-size",x)}}),D(()=>{const y=C=>{if(!C||!(C instanceof HTMLElement))return!1;if(C.isContentEditable)return!0;const $=C.tagName;return $==="INPUT"||$==="TEXTAREA"||$==="SELECT"?!0:C.getAttribute("role")==="textbox"},x=At(t().openHotkey);for(const C of x)tr(C,()=>{y(document.activeElement)||f()})});const{theme:b}=De();return D(()=>{typeof document>"u"||(document.documentElement.dataset.tanstackDevtoolsTheme=b())}),p(rr,{get theme(){return b()},get children(){return p(Ot,{get mount(){return(n().pipWindow??window).document.body},get children(){var y=Ua();return ce(s,y),j(y,"data-testid",Ee),h(y,p(B,{get when(){return I(()=>n().pipWindow!==null)()?!0:I(()=>!!t().requireUrlFlag)()?window.location.search.includes(t().urlFlag):!0},get children(){return[p(yn,{isOpen:a,setIsOpen:f}),p(wn,{isResizing:i,isOpen:a,get children(){return p(xn,{ref:x=>d=x,handleDragStart:x=>k(d,x),get children(){return[p(Ha,{toggleOpen:f}),p(Na,{get isOpen(){return a()}})]}})}})]}}),null),h(y,p(Oa,{}),null),y}})}})}export{ja as default};
