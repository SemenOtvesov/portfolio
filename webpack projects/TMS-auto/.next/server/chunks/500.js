exports.id=500,exports.ids=[500],exports.modules={35303:()=>{},15846:(e,t,i)=>{"use strict";i.d(t,{Z:()=>d});var r=i(95344),n=i(65183),l=i(7291),o=i(98215);let s=()=>((0,l.Z)(),{ButtonSx:e=>({transition:"0.3s",padding:"12px",borderRadius:"2px",display:"flex",justifyContent:"space-between",alignItems:"center",backgroundColor:x(e),color:function(e){return"dark"===e||"red"===e?"#fff":"white"===e?o.Fw:void 0}(e),":hover":{backgroundColor:x(e)}})});function x(e){return"dark"===e?o.Fw:"red"===e?o.Xx:"white"===e?"#fff":void 0}var a=i(85499);i(3729);let d=({content:e,type:t,...i})=>{let{ButtonSx:l}=s();return(0,r.jsxs)(n.Z,{type:"submit",sx:l(t),...i,children:[e,r.jsx(a.Z,{style:{fontSize:"1.25em"}})]})}},14276:(e,t,i)=>{"use strict";i.d(t,{Z:()=>d});var r=i(95344);i(3729);var n=i(98215),l=i(49982),o=i(7291);let s=()=>{let e=(0,o.Z)();return{CardContainer:l.Z.div({display:"flex",gap:17}),Card:l.Z.div({backgroundColor:"#fff",borderRadius:15,padding:e.isMobile?15:27,flex:"1 1",color:n.Fw}),CardItem:l.Z.div({display:"flex",gap:25,padding:"7px 0",fontSize:e.isMobile?"1em":"1.25em",borderBottom:"2px solid #D7D7D7"}),CardItemTitle:l.Z.div({fontWeight:700,width:"2em",minWidth:"2em"}),CardItemText:l.Z.div({}),size:e}},x=[{title:"A1",text:"Небольшая Царапина (уйдёт полировкой)"},{title:"A2",text:"Царапина (скорее всего уйдёт полировкой)"},{title:"A3",text:"Большая Царапина (возможно нужен окрас)"},{title:"А4",text:"Потребуется окрас"},{title:"E1",text:"Небольшая Вмятина"},{title:"E2",text:"Несколько Небольших Вмятин"},{title:"E3",text:"Много Небольших Вмятин"},{title:"U1",text:"Маленькая Вмятина (уйдет локально)"},{title:"U2",text:"Вмятина (скорее всего уйдёт локально)"},{title:"U3",text:"Большая Вмятина (возможно потребуется замена или рихтовка элемента)"},{title:"U4",text:"Очень большая Вмятина (потребуется замена или рихтовка элемента)"},{title:"W1",text:"Ремонт/Покраска (вторичный окрас, без шпаклёвки)"},{title:"W2",text:"Ремонт/Покраска (заметный вторичный окрас, возможна шпаклёвка)"},{title:"W3",text:"Ремонт/Покраска (не качественный, очень заметный вторичный окрас со шпаклёвкой)"},{title:"S1",text:"Малозаметная Ржавчина"},{title:"S2",text:"Заметная Ржавчина"},{title:"S3",text:"Повсеместная ржавчина"},{title:"C1",text:"Коррозия"},{title:"C2",text:"Заметная Коррозия"}],a=[{title:"С3",text:"Сквозная Коррозия"},{title:"Р",text:"Краска отличается от оригинала (выгорел лак)"},{title:"H",text:"Краска ухудшилась (например: мутные фары, требуют полировки)"},{title:"X",text:"Элемент требует замены"},{title:"XX",text:"Замененный Элемент (возможен повторный окрас, возможен ремонт со шпаклёвкой)"},{title:"B1",text:"Маленькая вмятина с царапиной (возможно уйдёт локально и заполируется)"},{title:"B2",text:"Вмятина с царапиной (возможно уйдёт локально, потребует окраса)"},{title:"B3",text:"Большая вмятина с царапиной (скорее всего не уйдёт локально, точно потребует окраса)"},{title:"B4",text:"Очень большая вмятина с царапиной (точно не уйдёт локально, возможно потребуется замена элемента)"},{title:"Y1",text:"Маленькая Трещина"},{title:"Y2",text:"Трещина"},{title:"Y3",text:"Большая Трещина"},{title:"X1",text:"Маленькая Трещина на Лобовом стекле"},{title:"R",text:"Восстановленная Трещина на Лобовом стекле"},{title:"X",text:"Трещина на Лобовом стекле (требует замены)"},{title:"G",text:"Трещина в стекле от камня"}],d=()=>{let{CardContainer:e,Card:t,CardItem:i,CardItemTitle:n,CardItemText:l,size:o}=s();return o.isMobile?r.jsx(t,{children:[...x,...a].map((e,t)=>(0,r.jsxs)(i,{children:[r.jsx(n,{children:e.title}),r.jsx(l,{children:e.text})]},e.text+t**2+1e3))}):(0,r.jsxs)(e,{children:[r.jsx(t,{children:x.map((e,t)=>(0,r.jsxs)(i,{children:[r.jsx(n,{children:e.title}),r.jsx(l,{children:e.text})]},e.text+t**2+1e3))}),r.jsx(t,{children:a.map((e,t)=>(0,r.jsxs)(i,{children:[r.jsx(n,{children:e.title}),r.jsx(l,{children:e.text})]},e.title+t**2+1e3))})]})}},32268:(e,t,i)=>{"use strict";i.d(t,{Z:()=>u});var r=i(95344),n=i(83226),l=i(80773),o=i(8428);i(3729);let s=e=>{let t={"/":"ГЛАВНАЯ",carsFromJapan:"АВТО ИЗ ЯПОНИИ",carsFromKorea:"АВТО ИЗ КОРЕИ",statisticsJapan:"СТАТИСТИКА ЯПОНИЯ",statisticsKorea:"СТАТИСТИКА КОКЕЯ",readAuctionList:"Как читать аукционный лист",info:"О компании",contacts:"Контакты",registrationOfACarFromAnAuction:"Постановка на учет купленного в Японии автомобиля"};return e.forEach(e=>t[e]=e),t};var x=i(56506),a=i(98215),d=i(66494),c=i(7291);let u=({})=>{let e=(0,o.usePathname)().split("/"),{brand:t,model:i,lot:u}=(0,o.useParams)(),f=s([t,i,u]),b=(0,c.Z)();return r.jsx(n.Z,{sx:{".MuiBreadcrumbs-separator":{margin:b.isMobile?"0 2px":"0.8px"}},separator:r.jsx(d.Z,{sx:{color:a.b6},fontSize:"small"}),children:e.map(t=>r.jsx(l.Z,{component:x.default,href:h(t,e),sx:p(e[e.length-1],t,b),children:""===t?f["/"]:f[t]},t))})},p=(e,t,i)=>({transition:"0.3s",fontSize:i.isMobile?"8px":"10px",color:e===t?a.OC:a.b6,textDecoration:"none",borderBottom:e!==t?`1px solid ${a.b6}`:"",paddingBottom:"2px",display:"flex",justifyContent:"center",alignItems:"end",":hover":{color:a.b6,opacity:.8}}),h=(e,t)=>{let i="";if(""===e)return"/";for(let r=0;r<=t.indexOf(e);r++)i+=t[r]+"/";return i}},22929:(e,t,i)=>{"use strict";i.d(t,{Z:()=>g});var r=i(95344),n=i(98215),l=i(49982),o=i(7291);let s=()=>{let e=(0,o.Z)();return{Left:l.Z.div({zIndex:1,display:"flex",gap:"30px",flexDirection:"column",justifyContent:"space-between",flex:"0 0 33%"}),Right:l.Z.form({zIndex:1,display:"flex",gap:"8px",flexDirection:"column",flex:"0 0 54%"}),Title:l.Z.div({fontSize:e.isMobile?"1.29em":"1.4em",color:"#fff"}),Text:l.Z.div({color:n.b6}),Description:l.Z.div({fontSize:".68em",color:n.OC,textAlign:e.isMobile?"center":"start",span:{textDecoration:"underline"}}),InputLine:l.Z.div({display:"flex",gap:"8px",width:"100%",flexDirection:e.isMobile?"column":"row"}),Textarea:l.Z.textarea({resize:"none",color:n.b6,backgroundColor:n.Fw,fontSize:"14px",width:"100%",padding:"10px",height:"6em"}),size:e}};i(3729);var x=i(99189),a=i(5855);let d=["Авто из Японии или из Кореи?","Япония","Корея"],c=["Как с Вами связаться?","WhatsApp","Перезвонить"],u=({type:e,control:t})=>{let{InputLine:i,size:n}=s();return"othersQuestions"===e?(0,r.jsxs)(i,{children:[r.jsx(x.Z,{name:"city",control:t,required:!0,placeholder:"Ваш город"}),r.jsx(a.Z,{control:t,values:c,name:"connection",style:p(n)})]}):(0,r.jsxs)(i,{children:[r.jsx(a.Z,{control:t,values:d,name:"country",style:p(n)}),r.jsx(a.Z,{control:t,values:c,name:"connection",style:p(n)})]})};function p(e){return e.isMobile?{}:{flex:"0 0 calc(50% - 4px)",maxWidth:"calc(50% - 4px)"}}let h=({type:e,register:t})=>{let{InputLine:i,Textarea:n}=s();return"othersQuestions"!==e?r.jsx(i,{children:r.jsx(n,{...t("info"),placeholder:"Укажите всю информацию по желаемому автомобилю"})}):r.jsx(r.Fragment,{})};var f=i(15846);let b=({type:e})=>r.jsx(f.Z,{type:"calc"===e||"othersQuestions"===e?"red":"white",content:"calc"==e?"РАССЧИТАТЬ СТОИМОСТЬ":"БЕСПЛАТНАЯ КОНСУЛЬТАЦИЯ"});var j=i(60708);let m=({data:e,reset:t})=>{t()},v=({type:e})=>{let{Right:t,InputLine:i}=s(),{register:n,handleSubmit:l,control:o,reset:a}=(0,j.cI)({mode:"onChange"});return(0,r.jsxs)(t,{onSubmit:l(e=>m({data:e,reset:a})),children:[(0,r.jsxs)(i,{children:[r.jsx(x.Z,{name:"name",control:o,required:!0,placeholder:"Имя"}),r.jsx(x.Z,{name:"phone",control:o,required:!0,type:"number",placeholder:"Телефон"})]}),r.jsx(u,{type:e,control:o}),r.jsx(h,{type:e,register:n}),r.jsx(b,{type:e})]})};var Z=i(53486);let g=({type:e})=>{let{Left:t,Title:i,Text:n,Description:l,size:o}=s();return(0,r.jsxs)(Z.Z,{children:[(0,r.jsxs)(t,{children:[r.jsx(i,{children:function({type:e}){return"calc"===e?"Бесплатно рассчитаем стоимость и вышлем варианты автомобилей":"questions"===e||"othersQuestions"===e?"Остались вопросы по покупке автомобиля?":void 0}({type:e})}),r.jsx(n,{children:function({type:e}){return"calc"===e?"Оставьте бесплатную заявку, и мы свяжемся с вами любым удобным для вас способом для расчёта стоимости и обсуждения вариантов покупки автомобиля":"questions"===e||"othersQuestions"===e?"Оставьте бесплатную заявку, и мы свяжемся с вами любым удобным для вас способом и ответим на все интересующие вас вопросы абсолютно бесплатно, мы ничего не навязываем - наша задача помочь определиться":void 0}({type:e})}),!o.isMobile&&(0,r.jsxs)(l,{children:["Нажимая на кнопку, вы соглашаетесь с"," ",r.jsx("span",{children:"политикой обработки персональных данных"})]})]}),r.jsx(v,{type:e}),o.isMobile&&(0,r.jsxs)(l,{children:["Нажимая на кнопку, вы соглашаетесь с ",r.jsx("br",{}),r.jsx("span",{children:"политикой обработки персональных данных"})]})]})}},99189:(e,t,i)=>{"use strict";i.d(t,{Z:()=>a});var r=i(95344),n=i(82245);i(3729);var l=i(98215),o=i(7291);let s=e=>((0,o.Z)(),{InputSx:{color:l.b6,backgroundColor:l.Fw,fontSize:"14px",flex:"0 0 calc(50% - 4px)",padding:"15px",borderRadius:"3px",".MuiInput-input":{padding:0,textAlign:e?"center":"start"},"::placeholder":{color:l.b6}}});var x=i(60708);let a=function({name:e,control:t,textCenter:i,...l}){let{InputSx:o}=s(i);return r.jsx(x.Qr,{name:e,control:t,render:({field:e})=>r.jsx(n.Z,{onChange:t=>e.onChange(t.target.value),sx:o,...l,value:e.value})})}},5855:(e,t,i)=>{"use strict";i.d(t,{Z:()=>c});var r=i(95344),n=i(4103),l=i(70502),o=i(3729),s=i(98215),x=i(7291);let a=e=>((0,x.Z)(),{SelectSx:{color:s.b6,backgroundColor:s.Fw,fontSize:"14px",width:"100%",boxShadow:"none",".MuiOutlinedInput-notchedOutline":{border:0},".MuiOutlinedInput-input":{padding:e?"10px":"15px"},".MuiSelect-icon":{color:s.b6}}});var d=i(60708);let c=function({values:e,control:t,name:i,setFn:s,pd10:x,initValue:c,setValue:u,...p}){let{SelectSx:h}=a(x),[f,b]=(0,o.useState)(c||e[0]);return(0,o.useEffect)(()=>{u&&u(i,f)},[f]),r.jsx(d.Qr,{name:i,control:t,render:({field:t})=>r.jsx(n.Z,{sx:h,value:f,...p,children:e.map(e=>r.jsx(l.Z,{onClick:()=>{b(e),t.onChange(e),s&&s(e)},value:e,children:e},e))})})}},53486:(e,t,i)=>{"use strict";i.d(t,{Z:()=>x});var r=i(95344);i(3729);var n=i(98215),l=i(49982),o=i(7291);let s=()=>{let e=(0,o.Z)();return{Container:l.Z.div(function(e){let t={borderRadius:"3px",border:`1px solid ${n.G1}`,overflow:"hidden",position:"relative",padding:"26px 32px",fontSize:"16px",display:"flex",backgroundColor:"#7878787f",justifyContent:"space-between",gap:"20px",":after":{content:"''",width:"38%",height:"65%",bottom:"65%",position:"absolute",backgroundColor:"#ed222549",borderRadius:"50%",filter:"blur(50px)"}};return(e.isLaptop||e.isTab||e.isMobile)&&(t={...t}),(e.isTab||e.isMobile)&&(t={...t,padding:"20px 15px",fontSize:14}),e.isMobile&&(t={...t,flexDirection:"column"}),t}(e))}},x=e=>{let{Container:t}=s();return r.jsx(t,{...e,children:e.children})}}};