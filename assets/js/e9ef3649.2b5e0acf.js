"use strict";(self.webpackChunkcasual_simulation=self.webpackChunkcasual_simulation||[]).push([[3336],{6550:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>f,contentTitle:()=>a,default:()=>d,frontMatter:()=>c,metadata:()=>o,toc:()=>p});var t=n(5250),s=n(5545),i=n(7564),l=n(1601);n(9683),n(1161);const c={id:"extra-types",title:"Extra Types",sidebar_label:"Extra Types",description:"Type definitions that CasualOS uses"},a=void 0,o={id:"extra-types",title:"Extra Types",description:"Type definitions that CasualOS uses",source:"@site/docs/extra-types.mdx",sourceDirName:".",slug:"/extra-types",permalink:"/extra-types",draft:!1,unlisted:!1,editUrl:"https://github.com/casual-simulation/casualos/tree/develop/docs/docs/extra-types.mdx",tags:[],version:"current",frontMatter:{id:"extra-types",title:"Extra Types",sidebar_label:"Extra Types",description:"Type definitions that CasualOS uses"}},f={},p=[...(0,l.KO)(i)];function u(e){return(0,t.jsx)(l.hl,{doc:i})}function d(e={}){const{wrapper:r}={...(0,s.a)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(u,{...e})}):u()}},1601:(e,r,n)=>{n.d(r,{hl:()=>C,KO:()=>P});var t=n(79),s=n(9683),i=n(6356),l=n(5819),c=n(1888),a=n(5250);class o extends t.Component{constructor(e){super(e),this.state={hasError:!1}}static getDerivedStateFromError(e){return{hasError:!0,error:e}}componentDidCatch(e,r){const n="["+this.props.reflection.name+"] "+e;if(!this.props.root)throw n;console.error(n)}render(){return this.state.hasError?(0,a.jsxs)("h1",{children:["[",this.props.reflection.name,"] ",this.state.error]}):this.props.children}}var f=n(8526),p=n(1161),u=n(7544),d=n(3324),m=n(5834),h=n(1623);function y(e){void 0===e&&(e={});const r=e.references;return e=>{(0,m.Vn)(e,"link",(e=>{if(e.url.startsWith("tags:")){const r=e.url.slice(5);r.startsWith("@")?e.url=(0,f.ZP)("tags/listen")+x(r.slice(1)):e.url=(0,f.ZP)(h.L0[r])+x(r)}else if(e.url.startsWith("ref:")){const n=e.url.slice(4),t=r[n];e.url=(0,f.ZP)(t)+"#"+n}else if(e.url.startsWith("glossary:")){const r=e.url.slice(9);e.url=(0,f.ZP)("glossary")+"#"+g(r)}else if(e.url.startsWith("page:")){const[r,n]=e.url.slice(5).split("#");e.url=(0,f.ZP)(r)+"#"+n}}))}}function x(e){return"#"+g(e)}function g(e){return e.replace(/[\.\(\)\@\[\]]/g,"").toLowerCase()}function j(e){return void 0===e&&(e={}),e=>{e&&e.children&&e.children.length>0&&"paragraph"===e.children[0].type&&(e.children=e.children[0].children.concat(e.children.slice(1)))}}const v={Project:1,Module:2,Namespace:4,Enum:8,EnumMember:16,Variable:32,Function:64,Class:128,Interface:256,Constructor:512,Property:1024,Method:2048,CallSignature:4096,IndexSignature:8192,ConstructorSignature:16384,Parameter:32768,TypeLiteral:65536,TypeParameter:131072,Accessor:262144,GetSignature:524288,SetSignature:1048576,TypeAlias:2097152,Reference:4194304};console.log("ReflectionKind",v);const b=new Map([[v.Property,["type"]],["reflection",["declaration"]],[v.TypeLiteral,["children","signatures"]],[v.CallSignature,["parameters","comment","type"]]]);function k(e,r,n){void 0===n&&(n=null),function(e,r,n){var t;void 0===n&&(n=null);let s=b.get(null!=(t=e.kind)?t:e.type)||[];for(let i of s){let t=e[i];if(Array.isArray(t))for(let e of t)e&&r(e,n,i);else t&&r(t,n,i)}}(e,((e,n,t)=>{r(e,n,t),k(e,r,e)}))}function S(e,r){let n=[];return r(e)&&n.push(e),k(e,((e,t,s)=>{r(e,t,s)&&n.push(e)})),n}const A=["first","second","third","fourth","fifth"];function N(e,r){return e.name+"-"+r.name}function T(e,r){const n=N(e,r);let t;var s;return t=r.kind===v.Constructor?$(r.signatures[0],je(r)):r.kind===v.Method?$(r.signatures[0]):r.kind===v.Accessor?(s=r).name+": "+oe(s.getSignature.type):se(r),t="<span>"+t+"</span>",{value:t,id:n,level:3}}function O(e){let r=[],{properties:n,constructors:t,methods:s}=function(e){let r=[],n=[],t=[];if(!e)return{properties:r,constructors:n,methods:t};for(let s of e)s.flags.isPrivate||(s.kind===v.Property||s.kind===v.Accessor?r.push(s):s.kind===v.Constructor?n.push(s):s.kind===v.Method&&t.push(s));return{properties:r,constructors:n,methods:t}}(e.children);return n.length>0&&r.push(...n.map((r=>T(e,r)))),t.length>0&&r.push(...t.map((r=>T(e,r)))),s.length>0&&r.push(...s.map((r=>T(e,r)))),r}function P(e){let r=[{value:e.pageTitle,id:"",level:2}];for(let n of e.contents)if(n.reflection.kind===v.Interface||n.reflection.kind===v.Class){const e=je(n.reflection),t=ve(n.reflection);r.push({value:e,id:t,level:2}),n.reflection.kind===v.Class&&r.push(...O(n.reflection))}else if(n.reflection.kind===v.CallSignature){const e=je(n.reflection),t=ve(n.reflection);r.push({value:"<span>"+$(n.reflection,e)+"</span>",id:t,level:2})}else if(n.reflection.kind===v.TypeAlias){const e=je(n.reflection),t=ve(n.reflection);r.push({value:e,id:t,level:2})}else if(n.reflection.kind===v.GetSignature||n.reflection.kind===v.SetSignature){const e=je(n.reflection),t=ve(n.reflection);r.push({value:"<code>"+$(n.reflection,e)+"</code>",id:t,level:2})}else{const e=je(n.reflection),t=ve(n.reflection);r.push({value:e,id:t,level:2})}return r}function C(e){let{doc:r}=e;const n=r.contents,t=r.references;return(0,a.jsx)("ul",{className:"api api-list",children:n.map((e=>(0,a.jsx)("li",{className:"api-member-item",children:(0,a.jsx)(R,{reflection:e.reflection,references:t})},e.id)))})}function R(e){let{reflection:r,references:n}=e;return r.kind===v.Interface||r.kind===v.Class?(0,a.jsx)(w,{reflection:r,references:n}):r.kind===v.CallSignature||r.kind===v.GetSignature||r.kind===v.SetSignature?(0,a.jsx)(W,{reflection:r,references:n}):r.kind===v.TypeAlias?(0,a.jsx)(Z,{reflection:r,references:n}):(0,a.jsx)(M,{reflection:r,references:n})}function Z(e){let{reflection:r,references:n}=e;const t=je(r),i=ve(r);return(0,a.jsxs)("div",{children:[(0,a.jsx)(s.Z,{as:"h2",id:i,children:t}),(0,a.jsx)(_,{reflection:r,references:n}),(0,a.jsx)(F,{reflection:r,name:t,references:n}),(0,a.jsx)(re,{member:r})]})}function F(e){let{reflection:r,name:n,references:t}=e,s="";return"union"===r.type.type&&(s=(0,a.jsx)(E,{type:r.type,name:n,references:t})),s}function E(e){let{type:r,name:n,references:t}=e;return(0,a.jsxs)("div",{children:[(0,a.jsxs)("p",{children:["A ",n," can be one of the following values:"]}),(0,a.jsx)("ul",{children:r.types.map(((e,r)=>(0,a.jsx)(U,{type:e,references:t},r)))})]})}function U(e){let{type:r,references:n}=e;return(0,a.jsx)("li",{children:(0,a.jsx)("code",{children:(0,a.jsx)(ae,{type:r,references:n})})})}function w(e){let{reflection:r,references:n}=e;const t=je(r),i=ve(r);return(0,a.jsxs)("div",{children:[(0,a.jsx)(s.Z,{as:"h2",id:i,children:t}),(0,a.jsx)(G,{reflection:r,references:n}),(0,a.jsx)(re,{member:r})]})}function M(e){let{reflection:r,references:n}=e;const t=je(r),i=ve(r);return(0,a.jsxs)("div",{children:[(0,a.jsx)(s.Z,{as:"h2",id:i,children:t}),(0,a.jsx)(B,{reflection:r,references:n}),(0,a.jsx)(re,{member:r})]})}function W(e){let{reflection:r,references:n}=e;const t=je(r),s=ve(r);return(0,a.jsx)("div",{children:(0,a.jsx)(D,{func:r,sig:r,name:t,link:s,references:n})})}function G(e){var r;const n=e.reflection;if(!n)throw new Error("Unable to find "+e.name+"!");const t=function(e){return(0,c.sortBy)(e,(e=>e.kind===v.Property||e.kind===v.Accessor?0:e.kind===v.Constructor?1:2)).filter((e=>!e.flags.isPrivate))}(null!=(r=n.children)?r:[]);return(0,a.jsx)(o,{reflection:n,root:!0,children:(0,a.jsxs)("div",{className:"api",children:[(0,a.jsx)(_,{reflection:n,references:e.references}),(0,a.jsx)(s.Z,{as:"h3",id:n.name+"-properties",children:"Members"}),(0,a.jsx)("div",{children:(0,a.jsxs)("ul",{className:"class-members-list",children:[n.indexSignature?(0,a.jsx)(I,{reflection:n,index:n.indexSignature,references:e.references}):"",n.references?(0,a.jsx)(z,{prop:n,references:e.references}):"",t.map((r=>(0,a.jsx)(J,{member:r,link:N(n,r),references:e.references},r.name)))]})})]})})}function I(e){let{reflection:r,index:n,references:t}=e;const i=n.parameters[0];return(0,a.jsxs)("li",{className:"class-member-item",children:[(0,a.jsx)(s.Z,{as:"h4",id:r.name+"-_index",children:"Index Signature"}),(0,a.jsx)(_,{reflection:n,references:t}),(0,a.jsx)("pre",{children:(0,a.jsxs)("code",{children:["[",i.name,": ",(0,a.jsx)(ae,{type:i.type,references:t}),"]: ",(0,a.jsx)(ae,{type:n.type,references:t})]})}),(0,a.jsx)(re,{member:n})]})}function _(e){let{reflection:r,references:n}=e;return(0,a.jsx)("div",{children:(0,a.jsx)(H,{comment:r.comment,references:n})})}function J(e){let r;return r=e.member.kind===v.Property?function(e){let r,n=e.member,t="";n.references?(t=(0,a.jsx)(q,{prop:n,references:e.references}),r=(0,a.jsx)(a.Fragment,{children:n.typeReference})):"reflection"===n.type.type&&n.typeText&&n.typeReference?(r=(0,a.jsx)(a.Fragment,{children:n.typeReference}),t=(0,a.jsx)(i.Z,{language:"typescript",children:n.typeText})):r=(0,a.jsx)(ae,{type:e.member.type,references:e.references});!t&&n.typeText&&n.typeReference&&(t=(0,a.jsx)(i.Z,{language:"typescript",children:n.typeText}));const l=je(n);ve(n);return(0,a.jsxs)("div",{className:"class-member-property",children:[(0,a.jsxs)(s.Z,{as:"h4",id:e.link,children:[(0,a.jsxs)("span",{className:"class-member-name",children:[l,e.member.flags.isOptional?(0,a.jsx)("span",{className:"class-member-optional",children:"?"}):""]})," ",(0,a.jsx)("span",{className:"class-member-type",children:r})]}),(0,a.jsx)(_,{reflection:e.member,references:e.references}),t]})}(e):e.member.kind===v.Constructor?function(e){const r=je(e.member);return(0,a.jsx)("div",{children:(0,a.jsx)(D,{func:e.member,name:r,sig:e.member.signatures[0],link:e.link,references:e.references})})}(e):e.member.kind===v.Method?function(e){const r=je(e.member);return(0,a.jsx)("div",{children:(0,a.jsx)(D,{func:e.member,name:r,sig:e.member.signatures[0],link:e.link,references:e.references})})}(e):e.member.kind===v.Accessor?function(e){var r;return(0,a.jsxs)("div",{className:"class-member-property",children:[(0,a.jsxs)(s.Z,{as:"h4",id:e.link,children:[(0,a.jsx)("span",{className:"class-member-name",children:e.member.name})," ",(0,a.jsx)("span",{className:"class-member-type",children:(0,a.jsx)(ae,{type:e.member.getSignature.type,references:e.references})})]}),(0,a.jsx)("p",{children:null==(r=e.member.getSignature.comment)?void 0:r.text})]})}(e):"Kind not found "+e.member.kind,(0,a.jsxs)(o,{reflection:e.member,children:[(0,a.jsx)("span",{role:"separator",className:"class-member-separator"}),(0,a.jsx)("li",{className:"class-member-item",children:r})]})}function z(e){let{prop:r,references:n}=e;const t=ve(r);return(0,a.jsxs)("li",{className:"class-member-item",children:[(0,a.jsx)(s.Z,{as:"h4",id:t+"-extra-functions",children:"Extra Functions"}),(0,a.jsx)("p",{children:"The extra functions that are available on this type."}),(0,a.jsxs)(l.Z,{children:[(0,a.jsx)("p",{children:"See the following functions for more information:"}),(0,a.jsx)(Q,{children:r.references,references:n})]})]})}function q(e){let{prop:r,references:n}=e;return(0,a.jsxs)(l.Z,{children:[(0,a.jsx)("p",{children:"See the following functions for more information:"}),(0,a.jsx)(Q,{children:r.references,references:n})]})}function B(e){const r=e.reflection,n=(r.type.declaration,Oe(r));return(0,a.jsx)(o,{reflection:r,root:!0,children:(0,a.jsxs)("div",{className:"api",children:[(0,a.jsx)(_,{reflection:r,references:e.references}),n.map((r=>(0,a.jsx)(L,{group:r,references:e.references},r.group)))]})})}function L(e){let{group:r,references:n}=e;const t=r.children,i=Ne(r);return(0,a.jsxs)("div",{children:[(0,a.jsx)(s.Z,{as:"h3",id:r.group,children:i}),t.map((e=>(0,a.jsx)(K,{namespace:e.namespace,name:e.name,property:e.child,link:N(e.reflection,e.child),references:n},e.child.id)))]})}function K(e){let r;if(pe(e.property)){var n;const t=e.namespace?e.namespace+"."+e.name:e.name,s=e.property.type.declaration;r=D({name:t,func:e.property,sig:null!=(n=ke(s.signatures))?n:s.signatures[0],link:e.link,references:e.references})}else if(de(e.property)){const n=e.namespace?e.namespace+"."+e.name:e.name,t=Se(e.property);r=D({name:n,func:e.property,sig:t,link:e.link,references:e.references})}else r=he(e.property)?(0,a.jsxs)(a.Fragment,{children:["This is really fun! ",e.property.name]}):e.property.kind===v.Property?function(e){return(0,a.jsxs)("div",{children:[(0,a.jsx)(s.Z,{as:"h3",id:e.link,children:(0,a.jsxs)("code",{children:[e.property.name,": ",(0,a.jsx)(ae,{type:e.property.type,references:e.references})]})}),(0,a.jsx)(_,{reflection:e.property,references:e.references})]})}(e):"Kind Not found "+e.property.kind;return(0,a.jsx)(o,{reflection:e.property,children:(0,a.jsx)("div",{children:r})})}function D(e){let{func:r,sig:n,link:t,name:i,references:l}=e;const c=n.parameters||[];return(0,a.jsxs)("div",{children:[(0,a.jsx)(s.Z,{as:"h4",id:t,children:(0,a.jsx)(Y,{func:r,sig:n,name:i,references:l})}),(0,a.jsx)(V,{sig:n,references:l}),c.length>0?(0,a.jsx)("div",{children:c.map(((e,r)=>(0,a.jsx)(ee,{param:e,index:r,references:l},e.name)))}):"",(0,a.jsx)(re,{member:n})]})}function V(e){let{sig:r,references:n}=e;return(0,a.jsx)(H,{comment:r.comment,references:n})}function H(e){let{comment:r,references:n}=e;return(0,a.jsx)(Q,{references:n,children:X(r)})}function Q(e){let{children:r,remarkPlugins:n,rehypePlugins:t,references:s}=e;return(0,a.jsx)(u.U,{remarkPlugins:[[y,{references:s}],...n||[]],rehypePlugins:[d.Z,...t||[]],children:r})}function X(e){let r="";if(e&&e.summary)for(let n of e.summary)r+=n.text;return r}function Y(e){let{func:r,sig:n,name:t,references:s}=e;const i=n.parameters||[];let l="";return r.kind!==v.GetSignature&&(l=(0,a.jsxs)(a.Fragment,{children:["(",i.map(((e,r)=>(0,a.jsxs)("span",{children:[r>0?", ":"",e.flags.isRest?"...":"",e.name,e.flags.isOptional?"?":"",": ",(0,a.jsx)(ae,{type:e.type,references:s})]},e.name))),")"]})),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("span",{className:"function-member-name",children:[(r.flags.isStatic?"static ":"")+(t||n.name),l]}),": ",(0,a.jsx)("span",{className:"function-member-type",children:(0,a.jsx)(ae,{type:n.type,references:s})})]})}function $(e,r){void 0===r&&(r=e.name);const n=e.parameters||[];let t="";return e.kind!==v.GetSignature&&(t="("+n.map(((e,r)=>(e.flags.isRest?"...":"")+e.name)).join(", ")+")"),""+r+t+": "+oe(e.type)}function ee(e){let r,{param:n,index:t,references:s}=e;return r=n.flags.isRest&&n.type.elementType?0===t?(0,a.jsxs)("p",{children:[(0,a.jsx)("em",{children:"Each parameter"})," is a ",(0,a.jsx)(ae,{type:n.type.elementType,references:s})," and are ",(0,a.jsx)(ie,{param:n,isRest:!0,references:s})]}):(0,a.jsxs)("p",{children:[(0,a.jsx)("em",{children:"Each other parameter"})," is a ",(0,a.jsx)(ae,{type:n.type.elementType,references:s})," and are ",(0,a.jsx)(ie,{param:n,isRest:!0,references:s})]}):(0,a.jsxs)("p",{children:["The ",(0,a.jsxs)("em",{children:[te(t)," parameter"]})," is",n.flags.isOptional?" optional and is":""," a ",(0,a.jsx)(ae,{type:n.type,references:s})," and ",(0,a.jsx)(ie,{param:n,references:s})]}),r}function re(e){var r;let{member:n}=e;if(null==(r=n.comment)||!r.blockTags)return"";const t=n.comment.blockTags.filter((e=>"@example"===e.tag));return t.length>0?(0,a.jsxs)("div",{children:[(0,a.jsx)("h5",{className:"examples-heading",children:"Examples"}),t.map(((e,r)=>(0,a.jsx)(ne,{example:e},r)))]}):""}function ne(e){let{example:r}=e;const n=r.content.map((e=>e.text)).join(""),t=n.indexOf("\n"),s=n.indexOf("\n",t+1);let l="typescript";t>3&&(l=n.substring(3,t).trim());const c=n.lastIndexOf("```"),o=n.substring(t,s),f=n.substring(s,c);return(0,a.jsx)(i.Z,{language:l,title:o.trim(),children:f.trim()})}function te(e){return A[e]}function se(e,r){let n;return void 0===r&&(r=e.name),n=e.typeReference?e.typeReference:oe(e.type),r+(e.flags.isOptional?"?":"")+": "+n}function ie(e){let{param:r,isRest:n,references:t}=e;return(0,a.jsx)(Q,{remarkPlugins:[j],references:t,children:le(r,n)})}function le(e,r){let n=X(e.comment);return n?(n=n.slice(0,1).toLowerCase()+n.slice(1),n.startsWith("the")&&!r&&(n="is "+n),n):""}const ce=new Map([["ArrayBuffer","https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer"],["Blob","https://developer.mozilla.org/en-US/docs/Web/API/Blob"],["Uint8Array","https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array"],["RegExp","https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp"],["Function","https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function"],["Error","https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error"]]);function ae(e){let{type:r,references:n,isInUnionOrArray:s}=e;if("intrinsic"===r.type)return(0,a.jsx)("span",{children:r.name});if(r.name){var i,l,c,o,u,d;if(r.name===(null==(i=r.target)?void 0:i.qualifiedName)&&ce.has(r.name)){const e=ce.get(r.name);return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("a",{className:"type-link",href:e,children:r.name})})}if("Promise"===r.name&&"Promise"===(null==(l=r.target)?void 0:l.qualifiedName)&&r.typeArguments&&1===r.typeArguments.length)return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("a",{className:"type-link",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",children:"Promise"}),"<",(0,a.jsx)(ae,{type:r.typeArguments[0],references:n}),">"]});if("Partial"===r.name&&"Partial"===(null==(c=r.target)?void 0:c.qualifiedName)&&r.typeArguments&&1===r.typeArguments.length)return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("a",{className:"type-link",href:"https://www.typescriptlang.org/docs/handbook/utility-types.html#partialtype",children:"Partial"}),"<",(0,a.jsx)(ae,{type:r.typeArguments[0],references:n}),">"]});if("Omit"===r.name&&"Omit"===(null==(o=r.target)?void 0:o.qualifiedName)&&r.typeArguments&&2===r.typeArguments.length)return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("a",{className:"type-link",href:"https://www.typescriptlang.org/docs/handbook/utility-types.html#omittype-keys",children:"Omit"}),"<",(0,a.jsx)(ae,{type:r.typeArguments[0],references:n}),", ",(0,a.jsx)(ae,{type:r.typeArguments[1],references:n}),">"]});if("Map"===r.name&&"Map"===(null==(u=r.target)?void 0:u.qualifiedName)&&r.typeArguments&&2===r.typeArguments.length)return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("a",{className:"type-link",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map",children:"Map"}),"<",(0,a.jsx)(ae,{type:r.typeArguments[0],references:n}),", ",(0,a.jsx)(ae,{type:r.typeArguments[1],references:n}),">"]});if("Set"===r.name&&"Set"===(null==(d=r.target)?void 0:d.qualifiedName)&&r.typeArguments&&1===r.typeArguments.length)return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("a",{className:"type-link",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set",children:"Set"}),"<",(0,a.jsx)(ae,{type:r.typeArguments[0],references:n}),">"]});let e="#"+r.name;const t=r.id?null==n?void 0:n["id-"+r.id]:null;if(t){const r=null==n?void 0:n[t];r&&(e=(0,f.ZP)(r)+"#"+t)}else r.id?console.log("Missing reference for",r.id,r.name,r,"it is likely that the type does not have a @docid or @docname comment"):console.log("Missing reference for",r,"it is likely that the type is not exported from the entry. ");return(0,a.jsx)(p.Z,{className:"type-link",href:e,children:r.name})}if("union"===r.type)return(0,a.jsxs)("span",{children:["(",r.types.map(((e,r)=>(0,a.jsxs)(t.Fragment,{children:[r>0?" | ":"",(0,a.jsx)(ae,{type:e,references:n,isInUnionOrArray:!0})]},r))),")"]});if("array"===r.type)return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(ae,{type:r.elementType,references:n,isInUnionOrArray:!0}),"[]"]});if("literal"===r.type)return"string"==typeof r.value?(0,a.jsxs)("span",{children:['"',r.value,'"']}):"number"==typeof r.value?(0,a.jsx)("span",{children:r.value}):"boolean"==typeof r.value?(0,a.jsx)("span",{children:r.value?"true":"false"}):void 0===r.value?(0,a.jsx)("span",{children:"undefined"}):null===r.value?(0,a.jsx)("span",{children:"null"}):""+JSON.stringify(r);if("reflection"===r.type){const e=r.declaration;if(e.kind===v.TypeLiteral&&e.signatures&&!e.children){var m;const r=null!=(m=ke(e.signatures))?m:e.signatures[0],t=r.parameters||[];return(0,a.jsx)(a.Fragment,{children:(0,a.jsxs)("span",{children:[s?"(":"","(",t.map(((e,r)=>(0,a.jsxs)("span",{children:[r>0?",":"",e.name,": ",(0,a.jsx)(ae,{type:e.type,references:n})]},r))),") => ",(0,a.jsx)(ae,{type:r.type,references:n}),s?")":""]})})}return"object"}if("intersection"===r.type){return r.types.map(((e,r)=>(0,a.jsxs)(a.Fragment,{children:[r>0?" & ":"",(0,a.jsx)(ae,{type:e,references:n,isInUnionOrArray:!0})]})))}if("tuple"===r.type){const e=r.elements.map(((e,r)=>(0,a.jsxs)(a.Fragment,{children:[r>0?", ":"",(0,a.jsx)(ae,{type:e,references:n,isInUnionOrArray:!0})]})));return(0,a.jsxs)("span",{children:["[",e,"]"]})}return"typeOperator"===r.type?(0,a.jsxs)("span",{children:[r.operator," ",(0,a.jsx)(ae,{type:r.target,references:n,isInUnionOrArray:!0})]}):""+JSON.stringify(r)}function oe(e){return"intrinsic"===e.type?e.name:e.name?"Promise"===e.name&&"Promise"===e.qualifiedName&&e.typeArguments&&1===e.typeArguments.length?"Promise&lt;"+oe(e.typeArguments[0])+"&gt;":e.name:"union"===e.type?"("+e.types.map((e=>oe(e))).join(" | ")+")":"array"===e.type?oe(e.elementType)+"[]":"literal"===e.type?"string"==typeof e.value?'"'+e.value+'"':"number"==typeof e.value?String(e.value):"boolean"==typeof e.value?e.value?"true":"false":""+JSON.stringify(e):"reflection"===e.type?"object":"missing!: "+JSON.stringify(e)}function fe(e){return pe(e)||de(e)}function pe(e){return e&&ue(e.type)}function ue(e){return e&&"reflection"===e.type&&e.declaration&&e.declaration.signatures&&e.declaration.signatures.some((e=>e.kind===v.CallSignature))}function de(e){return e&&e.type&&"intersection"===e.type.type&&e.type.types.some((e=>ue(e)))}function me(e){return e&&e.kind===v.CallSignature}function he(e){return e&&e.type&&"reflection"===e.type.type&&e.type.declaration&&e.type.declaration.kind===v.TypeLiteral&&e.type.declaration.children}function ye(e,r){var n;const t=null==(n=e.comment)||null==(n=n.blockTags)?void 0:n.find((e=>e.tag===r));return t?t.content.map((e=>e.text)).join(""):null}function xe(e){if(e)for(let r of e){const e=ye(r,"@docname");if(e)return e.trim()}return null}function ge(e){if(pe(e)){var r;const n=null==e||null==(r=e.type)?void 0:r.declaration;let t=be(null==n?void 0:n.signatures);if(t)return t}else if(de(e)){const r=e.type.types;for(let e of r)if(ue(e)){let r=be(e.declaration.signatures);if(r)return r}}else if(me(e)){let r=be([e]);if(r)return r}return"99-default"}function je(e){if(e.kind===v.Method){let r=xe(e.signatures);if(r)return r}else if(pe(e)){var r;const n=null==e||null==(r=e.type)?void 0:r.declaration;let t=xe(null==n?void 0:n.signatures);if(t)return t}else if(de(e)){const r=e.type.types;for(let e of r)if(ue(e)){let r=xe(e.declaration.signatures);if(r)return r}}else if(me(e)){let r=xe([e]);if(r)return r}return ye(n=e,"@docname")||n.name;var n}function ve(e){const r=ye(e,"@docid");if(r)return r;const n=function(e,r){let n=[];return k(e,((e,t,s)=>{"comment"===s&&(console.log(e),n.push(...e.blockTags.filter((e=>e.tag===r))))})),n}(e,"@docid");return n.length>0?n[0].text.trim():je(e)}function be(e){if(e)for(let r of e){const e=ye(r,"@docgroup");if(e)return e.trim()}return null}function ke(e){for(let r of e){if(ye(r,"@docgroup"))return r}return null}function Se(e){const r=e.type.types;let n=null;for(let t of r)if(ue(t)){const e=t.declaration.signatures;n||(n=e[0]);let r=ke(e);if(r)return r}return n}function Ae(e){const r=(n=e,t=v.CallSignature,S(n,(e=>e.kind===t)));var n,t;for(let s of r){const e=ye(s,"@docgrouptitle");if(e)return e.trim()}return null}function Ne(e){for(let r of e.children){let e=Ae(r.child);if(e)return e}return e.group}function Te(e){if(e.kind===v.CallSignature)return me(e)||fe(e)||he(e)?[{group:ge(e),name:je(e),reflection:e,child:e}]:[];if(e.kind===v.TypeAlias||e.kind===v.GetSignature||e.kind===v.SetSignature)return[];const r=e.type.declaration.children.filter((e=>me(e)||fe(e)||he(e))),n=null!==ye(e,"@hiddennamespace")?null:e.name;return(0,c.flatMap)(r,(r=>fe(r)?{group:ge(r),name:je(r),namespace:n,reflection:e,child:r}:Te(r)))}function Oe(e){const r=Te(e),n=(0,c.groupBy)(r,(e=>e.group));let t=[];for(let s in n)t.push({group:s,children:n[s]});return t=(0,c.sortBy)(t,(e=>e.group)),t}}}]);