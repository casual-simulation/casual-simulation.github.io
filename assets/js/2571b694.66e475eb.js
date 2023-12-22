"use strict";(self.webpackChunkcasual_simulation=self.webpackChunkcasual_simulation||[]).push([[9288,1576],{1811:(e,t,a)=>{a.r(t),a.d(t,{ActionLink:()=>f,Alert:()=>G,AnyColorValues:()=>j,AnyCursorValues:()=>m,AutomaticBadge:()=>_,Badge:()=>k,Badges:()=>B,BotPortalBadge:()=>Z,ConfigBotBadge:()=>C,DataTagLink:()=>b,Example:()=>I,ExampleIframe:()=>S,GridPortalBadge:()=>F,HistoryBotBadge:()=>L,ImuPortalBadge:()=>D,LabelAnchorValues:()=>y,LeftWristPortalBadge:()=>R,ListenTagLink:()=>v,MapPortalBadge:()=>N,MeetPortalBadge:()=>W,MenuPortalBadge:()=>E,MiniGridPortalBadge:()=>A,MiniMapPortalBadge:()=>V,NormalCode:()=>w,PortalBadge:()=>M,PossibleValue:()=>x,PossibleValueCode:()=>g,PossibleValuesTable:()=>u,ReadOnlyBadge:()=>P,RightWristPortalBadge:()=>H,SheetPortalBadge:()=>O,TagLink:()=>p,TagPortalBadge:()=>$,VariableLink:()=>z,VideoBadge:()=>T,assets:()=>d,contentTitle:()=>i,default:()=>X,frontMatter:()=>n,metadata:()=>c,toc:()=>h});var r=a(5250),s=a(5545),o=a(79),l=a(1537);const n={},i=void 0,c={id:"components",title:"components",description:"",source:"@site/versioned_docs/version-3.1.36/components.mdx",sourceDirName:".",slug:"/components",permalink:"/3.1.36/components",draft:!1,unlisted:!1,editUrl:"https://github.com/casual-simulation/casualos/tree/develop/docs/versioned_docs/version-3.1.36/components.mdx",tags:[],version:"3.1.36",frontMatter:{}},d={},h=[],u=({children:e})=>{const t={table:"table",tbody:"tbody",th:"th",thead:"thead",tr:"tr",...(0,s.a)()};return(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Value"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsx)(t.tbody,{children:e})]})},x=({value:e,children:t,...a})=>{const o={td:"td",tr:"tr",...(0,s.a)()};return(0,r.jsxs)(o.tr,{...a,children:[(0,r.jsx)(o.td,{children:e}),(0,r.jsx)(o.td,{children:t})]})},g=({value:e,children:t,...a})=>{const o={code:"code",...(0,s.a)()};return(0,r.jsx)(x,{value:(0,r.jsx)(o.code,{children:e}),...a,children:t})},j=({})=>{const e={a:"a",...(0,s.a)()};return(0,r.jsxs)(o.Fragment,{children:[(0,r.jsxs)(x,{value:"Any X11 Color",children:[(0,r.jsx)(e.a,{href:"https://en.wikipedia.org/wiki/X11_color_names",target:"_blank",children:"X11 colors"})," are a list of standard colors that web browsers support."]}),(0,r.jsxs)(x,{value:"Any Hex Color",children:[(0,r.jsx)(e.a,{href:"https://en.wikipedia.org/wiki/Web_colors#Hex_triplet",target:"_blank",children:"Hex colors"})," are three or six digit numbers that specify a color by its red, green, and blue components."]})]})},p=({tag:e})=>e.startsWith("@")?(0,r.jsx)(v,{tag:e}):(0,r.jsx)(b,{tag:e}),m=({})=>(0,r.jsxs)(o.Fragment,{children:[(0,r.jsxs)(g,{value:"auto",children:["The cursor automatically changes its look based on the context. For grid portal bots, this means that the arrow cursor is used. For menu portal bots, this means that the pointer is used when the bot has a ",(0,r.jsx)(p,{tag:"@onClick"})," and the arrow is used otherwise. (default)"]}),(0,r.jsx)(g,{value:"default",children:"The cursor looks like the default cursor for the platform. Generally, this means the arrow cursor."}),(0,r.jsx)(g,{value:"none",children:"The cursor is invisible."}),(0,r.jsx)(g,{value:"wait",children:"wait"}),(0,r.jsx)(g,{value:"context-menu",children:"context-menu"}),(0,r.jsx)(g,{value:"help",children:"help"}),(0,r.jsx)(g,{value:"pointer",children:"pointer"}),(0,r.jsx)(g,{value:"progress",children:"progress"}),(0,r.jsx)(g,{value:"cell",children:"cell"}),(0,r.jsx)(g,{value:"crosshair",children:"crosshair"}),(0,r.jsx)(g,{value:"text",children:"text"}),(0,r.jsx)(g,{value:"vertical-text",children:"vertical-text"}),(0,r.jsx)(g,{value:"alias",children:"alias"}),(0,r.jsx)(g,{value:"copy",children:"copy"}),(0,r.jsx)(g,{value:"move",children:"move"}),(0,r.jsx)(g,{value:"no-drop",children:"no-drop"}),(0,r.jsx)(g,{value:"not-allowed",children:"not-allowed"}),(0,r.jsx)(g,{value:"grab",children:"grab"}),(0,r.jsx)(g,{value:"grabbing",children:"grabbing"}),(0,r.jsx)(g,{value:"all-scroll",children:"all-scroll"}),(0,r.jsx)(g,{value:"col-resize",children:"col-resize"}),(0,r.jsx)(g,{value:"row-resize",children:"row-resize"}),(0,r.jsx)(g,{value:"n-resize",children:"n-resize"}),(0,r.jsx)(g,{value:"e-resize",children:"e-resize"}),(0,r.jsx)(g,{value:"s-resize",children:"s-resize"}),(0,r.jsx)(g,{value:"w-resize",children:"w-resize"}),(0,r.jsx)(g,{value:"ne-resize",children:"ne-resize"}),(0,r.jsx)(g,{value:"nw-resize",children:"nw-resize"}),(0,r.jsx)(g,{value:"se-resize",children:"se-resize"}),(0,r.jsx)(g,{value:"sw-resize",children:"sw-resize"}),(0,r.jsx)(g,{value:"ew-resize",children:"ew-resize"}),(0,r.jsx)(g,{value:"ns-resize",children:"ns-resize"}),(0,r.jsx)(g,{value:"nesw-resize",children:"nesw-resize"}),(0,r.jsx)(g,{value:"nwse-resize",children:"nwse-resize"}),(0,r.jsx)(g,{value:"zoom-in",children:"zoom-in"}),(0,r.jsx)(g,{value:"zoom-out",children:"zoom-out"}),(0,r.jsx)(x,{value:"Any URL",children:"The image at the given URL will be used as the cursor. Images should be 32x32 pixels or smaller otherwise they may not work."})]}),b=({tag:e})=>{const t={a:"a",...(0,s.a)()};return(0,r.jsx)(t.a,{href:(0,l.Z)("tags")+"#"+e.replace(/[\.\(\)\@\[\]]/g,"").toLowerCase(),children:(0,r.jsxs)(w,{children:["#",e]})})},v=({tag:e})=>{const t={a:"a",...(0,s.a)()};return(0,r.jsx)(t.a,{href:(0,l.Z)("listen-tags")+"#"+e.replace(/[\.\(\)\@\[\]]/g,"").toLowerCase(),children:(0,r.jsx)(w,{children:e})})},f=({action:e,children:t})=>{const a={a:"a",...(0,s.a)()};return(0,r.jsx)(a.a,{href:(0,l.Z)("actions")+"#"+e.replace(/[\.\(\)\,\?]/g,"").replace(/\s/g,"-").toLowerCase(),children:t||(0,r.jsx)(w,{children:e})})},w=({children:e})=>o.createElement("code",{},...e),y=({})=>(0,r.jsxs)(o.Fragment,{children:[(0,r.jsx)(g,{value:"top",children:"Top of the bot facing world oriented up. (default)"}),(0,r.jsx)(g,{value:"front",children:"Front of the bot facing world oriented forward."}),(0,r.jsx)(g,{value:"back",children:"Back of the bot facing world oriented back."}),(0,r.jsx)(g,{value:"right",children:"Right of the bot facing world oriented right."}),(0,r.jsx)(g,{value:"left",children:"Left of the bot facing world oriented left."}),(0,r.jsx)(g,{value:"floating",children:"Floating above the bot."})]}),B=({children:e})=>{const t={div:"div",...(0,s.a)()};return(0,r.jsx)(t.div,{className:"row badge-row",children:(0,r.jsx)(t.div,{className:"col",children:e})})},z=({name:e,children:t,...a})=>{const o={a:"a",...(0,s.a)()};return(0,r.jsx)(o.a,{href:(0,l.Z)("variables")+"#"+e.replace(/[\.\(\)\@\[\]]/g,"").toLowerCase(),...a,children:t||(0,r.jsx)(w,{children:e})})},k=({type:e,title:t,children:a})=>{const o={span:"span",...(0,s.a)()};return(0,r.jsx)(o.span,{title:t,className:`badge badge--${e}`,children:a})},P=({})=>(0,r.jsx)(k,{type:"warning",children:"Read-Only"}),T=({url:e})=>{const t={a:"a",...(0,s.a)()};return(0,r.jsx)(k,{type:"info",children:(0,r.jsx)(t.a,{href:e,target:"_blank",children:"Video"})})},C=({url:e})=>(0,r.jsx)(k,{type:"primary",children:"Config Bot"}),L=({url:e})=>(0,r.jsx)(k,{type:"primary",children:"History Bot"}),_=({url:e})=>(0,r.jsx)(k,{type:"success",title:"This tag is automatically set by CasualOS.",children:"Automatic"}),M=({bot:e})=>(0,r.jsx)(z,{name:e,className:"portal-badge",children:(0,r.jsx)(k,{type:"normal",title:`This tag is available on the ${e}.`,children:e})}),F=({url:e})=>(0,r.jsx)(M,{bot:"gridPortalBot"}),A=({url:e})=>(0,r.jsx)(M,{bot:"miniGridPortalBot"}),V=({url:e})=>(0,r.jsx)(M,{bot:"miniMapPortalBot"}),N=({url:e})=>(0,r.jsx)(M,{bot:"mapPortalBot"}),E=({url:e})=>(0,r.jsx)(M,{bot:"menuPortalBot"}),W=({url:e})=>(0,r.jsx)(M,{bot:"meetPortalBot"}),R=({url:e})=>(0,r.jsx)(M,{bot:"leftWristPortalBot"}),H=({url:e})=>(0,r.jsx)(M,{bot:"rightWristPortalBot"}),O=({url:e})=>(0,r.jsx)(M,{bot:"sheetPortalBot"}),Z=({url:e})=>(0,r.jsx)(M,{bot:"botPortalBot"}),$=({url:e})=>(0,r.jsx)(M,{bot:"tagPortalBot"}),D=({url:e})=>(0,r.jsx)(M,{bot:"imuPortalBot"}),G=({type:e,children:t})=>{const a={div:"div",...(0,s.a)()};return(0,r.jsx)(a.div,{className:`alert alert--${e}`,role:"alert",children:t})},I=({code:e})=>{const t={a:"a",...(0,s.a)()};return(0,r.jsx)(k,{type:"info",children:(0,r.jsx)(t.a,{target:"_blank",href:`https://casualos.com?auxCode=${e}`,children:"Example"})})},S=({code:e})=>{const t={iframe:"iframe",...(0,s.a)()};return(0,r.jsx)(t.iframe,{className:"example",src:`https://casualos.com?auxCode=${e}`})};function U(e){return(0,r.jsx)(r.Fragment,{})}function X(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(U,{...e})}):U()}},8055:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>n,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>d});var r=a(5250),s=a(5545),o=a(1811);const l={},n=void 0,i={id:"glossary/Tag",title:"Tag",description:"Tags are pairs of names and their corresponding values. Each tag lives in a bot and represents an attribute of the bot.",source:"@site/versioned_docs/version-3.1.36/glossary/Tag.mdx",sourceDirName:"glossary",slug:"/glossary/Tag",permalink:"/3.1.36/glossary/Tag",draft:!1,unlisted:!1,editUrl:"https://github.com/casual-simulation/casualos/tree/develop/docs/versioned_docs/version-3.1.36/glossary/Tag.mdx",tags:[],version:"3.1.36",frontMatter:{}},c={},d=[];function h(e){const t={code:"code",p:"p",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:["Tags are pairs of names and their corresponding values. Each tag lives in a bot and represents an attribute of the bot.\nFor example if a bot has a tag named ",(0,r.jsx)(t.code,{children:"color"}),", and that tag has the value ",(0,r.jsx)(t.code,{children:"blue"}),", then we would say that bot has ",(0,r.jsx)(t.code,{children:"#color"})," set to ",(0,r.jsx)(t.code,{children:"blue"}),'. ("the color tag is set to blue")']}),"\n",(0,r.jsxs)(t.p,{children:['In CasualOS, tags are used to store data as well as a way to program automations that respond to user actions.\nCasualOS has predefined automations for some tags. We call these tags "built-in tags" and they can be used to quickly decorate bots or control some of their behavior.\nFor example, the ',(0,r.jsx)(o.TagLink,{tag:"color"})," tag can be used to change the color that a bot is displayed with while the ",(0,r.jsx)(o.TagLink,{tag:"label"})," tag can be used to show a text label on a bot."]})]})}function u(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},5545:(e,t,a)=>{a.d(t,{Z:()=>n,a:()=>l});var r=a(79);const s={},o=r.createContext(s);function l(e){const t=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function n(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),r.createElement(o.Provider,{value:t},e.children)}}}]);