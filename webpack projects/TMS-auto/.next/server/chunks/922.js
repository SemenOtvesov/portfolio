"use strict";exports.id=922,exports.ids=[922],exports.modules={66494:(e,r,o)=>{var t=o(69286);r.Z=void 0;var n=t(o(20389)),a=o(95344);r.Z=(0,n.default)((0,a.jsx)("path",{d:"M10 6 8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"}),"NavigateNext")},83226:(e,r,o)=>{o.d(r,{Z:()=>$});var t=o(65651),n=o(51848),a=o(3729);o(99619);var l=o(56815),s=o(85599),i=o(85495),c=o(98890),u=o(98409),d=o(65442),p=o(67864),m=o(76172),g=o(95344);let h=(0,m.Z)((0,g.jsx)("path",{d:"M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"}),"MoreHoriz");var Z=o(92670);let x=["slots","slotProps"],y=(0,c.ZP)(Z.Z)(({theme:e})=>(0,t.Z)({display:"flex",marginLeft:`calc(${e.spacing(1)} * 0.5)`,marginRight:`calc(${e.spacing(1)} * 0.5)`},"light"===e.palette.mode?{backgroundColor:e.palette.grey[100],color:e.palette.grey[700]}:{backgroundColor:e.palette.grey[700],color:e.palette.grey[100]},{borderRadius:2,"&:hover, &:focus":(0,t.Z)({},"light"===e.palette.mode?{backgroundColor:e.palette.grey[200]}:{backgroundColor:e.palette.grey[600]}),"&:active":(0,t.Z)({boxShadow:e.shadows[0]},"light"===e.palette.mode?{backgroundColor:(0,p._4)(e.palette.grey[200],.12)}:{backgroundColor:(0,p._4)(e.palette.grey[600],.12)})})),b=(0,c.ZP)(h)({width:24,height:16}),f=function(e){let{slots:r={},slotProps:o={}}=e,a=(0,n.Z)(e,x);return(0,g.jsx)("li",{children:(0,g.jsx)(y,(0,t.Z)({focusRipple:!0},a,{ownerState:e,children:(0,g.jsx)(b,(0,t.Z)({as:r.CollapsedIcon,ownerState:e},o.collapsedIcon))}))})};var v=o(39927),C=o(57895);function S(e){return(0,C.ZP)("MuiBreadcrumbs",e)}let w=(0,v.Z)("MuiBreadcrumbs",["root","ol","li","separator"]),k=["children","className","component","slots","slotProps","expandText","itemsAfterCollapse","itemsBeforeCollapse","maxItems","separator"],M=e=>{let{classes:r}=e;return(0,s.Z)({root:["root"],li:["li"],ol:["ol"],separator:["separator"]},S,r)},R=(0,c.ZP)(d.Z,{name:"MuiBreadcrumbs",slot:"Root",overridesResolver:(e,r)=>[{[`& .${w.li}`]:r.li},r.root]})({}),P=(0,c.ZP)("ol",{name:"MuiBreadcrumbs",slot:"Ol",overridesResolver:(e,r)=>r.ol})({display:"flex",flexWrap:"wrap",alignItems:"center",padding:0,margin:0,listStyle:"none"}),j=(0,c.ZP)("li",{name:"MuiBreadcrumbs",slot:"Separator",overridesResolver:(e,r)=>r.separator})({display:"flex",userSelect:"none",marginLeft:8,marginRight:8}),$=a.forwardRef(function(e,r){var o,s;let c=(0,u.Z)({props:e,name:"MuiBreadcrumbs"}),{children:d,className:p,component:m="nav",slots:h={},slotProps:Z={},expandText:x="Show path",itemsAfterCollapse:y=1,itemsBeforeCollapse:b=1,maxItems:v=8,separator:C="/"}=c,S=(0,n.Z)(c,k),[w,$]=a.useState(!1),B=(0,t.Z)({},c,{component:m,expanded:w,expandText:x,itemsAfterCollapse:y,itemsBeforeCollapse:b,maxItems:v,separator:C}),N=M(B),I=(0,i.y)({elementType:h.CollapsedIcon,externalSlotProps:Z.collapsedIcon,ownerState:B}),A=a.useRef(null),D=a.Children.toArray(d).filter(e=>a.isValidElement(e)).map((e,r)=>(0,g.jsx)("li",{className:N.li,children:e},`child-${r}`));return(0,g.jsx)(R,(0,t.Z)({ref:r,component:m,color:"text.secondary",className:(0,l.Z)(N.root,p),ownerState:B},S,{children:(0,g.jsx)(P,{className:N.ol,ref:A,ownerState:B,children:(o=w||v&&D.length<=v?D:b+y>=D.length?D:[...D.slice(0,b),(0,g.jsx)(f,{"aria-label":x,slots:{CollapsedIcon:h.CollapsedIcon},slotProps:{collapsedIcon:I},onClick:()=>{$(!0);let e=A.current.querySelector("a[href],button,[tabindex]");e&&e.focus()}},"ellipsis"),...D.slice(D.length-y,D.length)],s=N.separator,o.reduce((e,r,t)=>(t<o.length-1?e=e.concat(r,(0,g.jsx)(j,{"aria-hidden":!0,className:s,ownerState:B,children:C},`separator-${t}`)):e.push(r),e),[]))})}))})},80773:(e,r,o)=>{o.d(r,{Z:()=>R});var t=o(51848),n=o(65651),a=o(3729),l=o(56815),s=o(85599),i=o(85866),c=o(98890),u=o(98409),d=o(7494),p=o(3722),m=o(65442),g=o(39927),h=o(57895);function Z(e){return(0,h.ZP)("MuiLink",e)}let x=(0,g.Z)("MuiLink",["root","underlineNone","underlineHover","underlineAlways","button","focusVisible"]);var y=o(6224),b=o(67864);let f={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},v=e=>f[e]||e,C=({theme:e,ownerState:r})=>{let o=v(r.color),t=(0,y.DW)(e,`palette.${o}`,!1)||r.color,n=(0,y.DW)(e,`palette.${o}Channel`);return"vars"in e&&n?`rgba(${n} / 0.4)`:(0,b.Fq)(t,.4)};var S=o(95344);let w=["className","color","component","onBlur","onFocus","TypographyClasses","underline","variant","sx"],k=e=>{let{classes:r,component:o,focusVisible:t,underline:n}=e,a={root:["root",`underline${(0,i.Z)(n)}`,"button"===o&&"button",t&&"focusVisible"]};return(0,s.Z)(a,Z,r)},M=(0,c.ZP)(m.Z,{name:"MuiLink",slot:"Root",overridesResolver:(e,r)=>{let{ownerState:o}=e;return[r.root,r[`underline${(0,i.Z)(o.underline)}`],"button"===o.component&&r.button]}})(({theme:e,ownerState:r})=>(0,n.Z)({},"none"===r.underline&&{textDecoration:"none"},"hover"===r.underline&&{textDecoration:"none","&:hover":{textDecoration:"underline"}},"always"===r.underline&&(0,n.Z)({textDecoration:"underline"},"inherit"!==r.color&&{textDecorationColor:C({theme:e,ownerState:r})},{"&:hover":{textDecorationColor:"inherit"}}),"button"===r.component&&{position:"relative",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none","&::-moz-focus-inner":{borderStyle:"none"},[`&.${x.focusVisible}`]:{outline:"auto"}})),R=a.forwardRef(function(e,r){let o=(0,u.Z)({props:e,name:"MuiLink"}),{className:s,color:i="primary",component:c="a",onBlur:m,onFocus:g,TypographyClasses:h,underline:Z="always",variant:x="inherit",sx:y}=o,b=(0,t.Z)(o,w),{isFocusVisibleRef:v,onBlur:C,onFocus:R,ref:P}=(0,d.Z)(),[j,$]=a.useState(!1),B=(0,p.Z)(r,P),N=(0,n.Z)({},o,{color:i,component:c,focusVisible:j,underline:Z,variant:x}),I=k(N);return(0,S.jsx)(M,(0,n.Z)({color:i,className:(0,l.Z)(I.root,s),classes:h,component:c,onBlur:e=>{C(e),!1===v.current&&$(!1),m&&m(e)},onFocus:e=>{R(e),!0===v.current&&$(!0),g&&g(e)},ref:B,ownerState:N,variant:x,sx:[...Object.keys(f).includes(i)?[]:[{color:i}],...Array.isArray(y)?y:[y]]},b))})}};