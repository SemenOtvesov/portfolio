"use strict";(self.webpackChunkwebpack_to_study=self.webpackChunkwebpack_to_study||[]).push([[55],{1360:function(e,t,n){var r=n(7294),a=["nameInput","requiredText","regExp","register"];function i(){return i=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i.apply(this,arguments)}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}t.Z=function(e){var t=e.nameInput,n=e.requiredText,l=e.regExp,m=e.register,o=c(e,a);return r.createElement(r.Fragment,null,r.createElement("input",i({},m(t,{required:n,pattern:l}),o,{className:"input ".concat(o.className?o.className:"")})))}},3068:function(e,t,n){var r=n(7294);function a(){return a=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a.apply(this,arguments)}t.Z=function(e){var t=a({},(function(e){if(null==e)throw new TypeError("Cannot destructure "+e)}(e),e));return r.createElement("div",a({},t,{className:"input-groupe ".concat(t.className?t.className:"")}))}},9086:function(e,t,n){var r=n(7294),a=["error","value"];function i(){return i=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i.apply(this,arguments)}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}t.Z=function(e){var t=e.error,n=e.value,l=c(e,a);return r.createElement("div",i({},l,{className:"input-rightDie ".concat(l.className?l.className:"")}),function(e){var t=e.error;if(!e.value)return r.createElement(r.Fragment,null);return r.createElement("div",{className:"icon-".concat(t?"plus":"check")})}({error:t,value:n}))}},8311:function(e,t,n){var r=n(7294);t.Z=function(){return r.createElement("div",{className:"jumper-component"})}},47:function(e,t,n){function r(e){var t=0;return e.forEach((function(e){return t+=+e.prise})),t}n.d(t,{Z:function(){return r}})},4581:function(e,t,n){function r(e){return function(e){if(Array.isArray(e))return a(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return a(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return a(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function a(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function i(e){var t=e.startPoint;return"".concat(t.day,".").concat(t.month,".").concat(t.year)}function c(e,t){var n=r(t);return"hour"===e&&(n[1]="".concat(+n[1]+2)),n.join("")}function l(e){var t=e.endPoint;return"".concat(t.day,".").concat(t.month,".").concat(t.year)}n.d(t,{Nh:function(){return i},cD:function(){return c},fn:function(){return l}})},5430:function(e,t,n){function r(e,t){var n=[];return e.forEach((function(e){e.cards.forEach((function(e){null!=t&&t.includes(e.bikeId)&&n.push(e)}))})),n}n.d(t,{Z:function(){return r}})},3787:function(e,t,n){var r=n(7294),a=n(5998),i=n(4581);t.Z=function(e){if(!e.content)return r.createElement(r.Fragment,null);var t=(0,a.v9)((function(e){return e.calendarsRouter.selectBikeCalendar})),n=(0,a.v9)((function(e){return e.calendarsRouter.timeStart})),c=(0,a.v9)((function(e){return e.calendarsRouter.activeTypeRentDate})),l=(0,a.v9)((function(e){return e.calendarsRouter.activeTypeRentPlase}));return r.createElement("div",{className:"rent__info-box"},r.createElement("div",{className:"rent__info"},r.createElement("div",{className:"rent__info-title"},"Тип аренды"),r.createElement("div",{className:"rent__info-text"},"day"===c?"По дням":"2 часа")),r.createElement("div",{className:"rent__info"},r.createElement("div",{className:"rent__info-title"},"Дата и время начала"),r.createElement("div",{className:"rent__info-text"},(0,i.Nh)(t)," ",n)),r.createElement("div",{className:"rent__info"},r.createElement("div",{className:"rent__info-title"},"Дата и время конца"),(0,i.fn)(t)," ",(0,i.cD)(c,n)),r.createElement("div",{className:"rent__info"},r.createElement("div",{className:"rent__info-title"},"Доставка"),r.createElement("div",{className:"rent__info-text"},"address"===l?"По адресу":"Самовывоз")))}},3382:function(e,t,n){var r=n(7294),a=n(9655),i=n(47);t.Z=function(e){var t=e.complete,n=e.bikeList;return r.createElement(r.Fragment,null,r.createElement("div",{className:"rent__middle"},t?r.createElement("button",{className:"rent__button exit"},"Назад к выбору велосипедов"):r.createElement("div",null),r.createElement("div",{className:"rent__prise-box"},r.createElement("div",{className:"rent__prise"},r.createElement("div",{className:"rent__prise-text"},"Доставка"),r.createElement("div",{className:"rent__prise-prise"},"0 AED")),r.createElement("div",{className:"rent__prise"},r.createElement("div",{className:"rent__prise-text"},"Итого"),r.createElement("div",{className:"rent__prise-prise blue"},(0,i.Z)(n)," AED")))),t?r.createElement("div",{className:"rent__bottom"},r.createElement(a.OL,{to:"/account",className:"rent__button blue"},"В личный кабинет"),r.createElement(a.OL,{to:"/",className:"rent__button"},"Назад на главную")):"")}},4359:function(e,t,n){n.d(t,{Z:function(){return s}});var r=n(7294),a=n(5998),i=n(6415),c=n(1234),l=function(e){var t=e.dispatch,n=e.bikeId,r=e.type;t((0,c.Cq)({bikeId:n,type:r}))};function m(e){var t=e.bikeRentParamInfo,n=e.type,r=e.bikeId,a=t.find((function(e){return e.bikeId===r}));return a&&a[n]?" active":""}var o=function(e){var t=e.bikeId,n=e.type,i=e.bikeRentParamInfo,c=(0,a.I0)();return r.createElement("div",{onClick:function(){return l({bikeId:t,type:n,dispatch:c})},className:"rent__param checkbox-box"},r.createElement("div",{className:"rent__param-checkbox"+m({bikeRentParamInfo:i,type:n,bikeId:t})},r.createElement("span",null)))};var s=function(e){var t=e.complete,n=e.bikeList,c=(0,a.v9)((function(e){return e.rentRouter.bikeRentParamInfo}));return n[0]?r.createElement("div",{className:"rent__param-box"},r.createElement("div",{className:"rent__param-line"},r.createElement("div",{className:"rent__param image"}),r.createElement("div",{className:t?"rent__param text big":"rent__param text"},"Название велосипедов"),t?"":r.createElement(r.Fragment,null,r.createElement("div",{className:"rent__param checkbox-box title"},"Шлем"),r.createElement("div",{className:"rent__param checkbox-box title"},"Фонарик"),r.createElement("div",{className:"rent__param checkbox-box title"},"Замок")),r.createElement("div",{className:"rent__param prise prise title"},"Стоимость")),n.map((function(e){return function(e){var t=e.complete,n=e.bike,a=e.bikeRentParamInfo;return r.createElement("div",{key:n.bikeId,className:"rent__param-line"},r.createElement("div",{className:"rent__param image"},r.createElement(i.Z,{imageType:"bikeImage",imageName:n.imgRentName,sourseMod:!0,modClass:"reversWall"})),r.createElement("div",{className:t?"rent__param text big":"rent__param text"},n.title),t?"":r.createElement(r.Fragment,null,r.createElement(o,{bikeId:n.bikeId,type:"helmet",bikeRentParamInfo:a}),r.createElement(o,{bikeId:n.bikeId,type:"lantern",bikeRentParamInfo:a}),r.createElement(o,{bikeId:n.bikeId,type:"lock",bikeRentParamInfo:a})),r.createElement("div",{className:"rent__param prise"},n.prise," AED"))}({complete:t,bike:e,bikeRentParamInfo:c})}))):r.createElement("div",{className:"rent__param-err"},"Не выбранно ни одного велосипеда")}},1055:function(e,t,n){n.r(t),n.d(t,{default:function(){return O}});var r=n(7294),a=n(5998),i=n(3787),c=n(4359),l=n(3382),m=function(e){var t=e.bikeList;return r.createElement("div",{className:"rent wrapper-component"},r.createElement("div",{className:"rent__title"},"Заявка на аренду велосипедов"),r.createElement(i.Z,{content:!!t[0]}),r.createElement(c.Z,{complete:!1,bikeList:t}),r.createElement(l.Z,{complete:!1,bikeList:t}))},o=n(8311),s=n(7536),u=["nameCheckBox","control","checkType"];function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var f=function(e){e.nameCheckBox;var t=e.control,n=e.checkType;p(e,u);return r.createElement(s.Qr,{control:t,name:"payment",render:function(e){var t=e.field;return r.createElement("div",{onClick:function(){return t.onChange(n)},className:"rentForm__item-checkbox inputArea"},r.createElement("div",{className:"rentForm__item-checkbox-mark ".concat(t.value===n?"active":"")},r.createElement("span",null)),r.createElement("div",{className:"rentForm__item-checkbox-text"},"online"===n?"Онлайн":"На месте"))}})},d=n(8269),v=function(e){var t=e.data,n=e.navigate,r=e.selectBikeList,a=e.bikeList,i=e.dispatch,c=e.dateInfo,l=e.prise;n("/rentComplete",{state:{bikeList:a}});var m={points:c.points,typeRentDate:c.activeTypeRentDate,typeRentPlase:c.activeTypeRentPlase,typePayment:t.payment,bikeRentList:r||[],prise:l,deliveryState:"processing",paidState:"unpaid",user:{startAdres:t.startAdresInput,finAdres:t.finAdresInput,nameUser:t.nameInput,tel:t.telInput}};i((0,d.Z)(m))},_=n(4581),E=n(1360),b=n(3068),N=n(9086),y=n(9250),k=n(6542),h=n(47),g=n(5118),I=function(e){var t=e.selectBikeList,n=e.bikeList,i=(0,y.s0)(),c=(0,k.T)(),l=(0,a.v9)((function(e){return e.calendarsRouter.selectBikeCalendar})),m=(0,a.v9)((function(e){return e.calendarsRouter.timeStart})),o=(0,a.v9)((function(e){return e.calendarsRouter.activeTypeRentDate})),u=(0,a.v9)((function(e){return e.calendarsRouter.activeTypeRentPlase})),p=(0,s.cI)({mode:"onChange",defaultValues:{payment:"online"}}),d=p.register,I=p.formState.errors,x=p.handleSubmit,O=p.control,F=p.watch;return r.createElement("form",{onSubmit:x((function(e){return v({data:e,navigate:i,bikeList:n,selectBikeList:t,dispatch:c,dateInfo:{timeStart:m,activeTypeRentDate:o,activeTypeRentPlase:u,points:l},prise:(0,h.Z)(n)})})),className:"rentForm wrapper-component"},r.createElement("div",{className:"rentForm__top"},r.createElement("div",{className:"rentForm__left"},r.createElement("div",{className:"rentForm__item"},r.createElement("div",{className:"rentForm__item-title"},"Контактные данные"),r.createElement(b.Z,null,r.createElement(E.Z,{nameInput:"nameInput",requiredText:!0,register:d,regExp:g.cS,className:"rentForm__item-input inputArea",placeholder:"Имя*",type:"text"}),r.createElement(N.Z,{error:I.nameInput,value:F("nameInput"),className:"rentForm__item-input-rightDie"})),r.createElement(b.Z,null,r.createElement(E.Z,{nameInput:"telInput",requiredText:!0,register:d,regExp:g.Oj,className:"rentForm__item-input inputArea",placeholder:"Номер телефона*",type:"text"}),r.createElement(N.Z,{error:I.telInput,value:F("telInput"),className:"rentForm__item-input-rightDie"}))),r.createElement("div",{className:"rentForm__item"},r.createElement("div",{className:"rentForm__item-title"},"Информация о доставке"),r.createElement(b.Z,null,r.createElement(E.Z,{nameInput:"startAdresInput",requiredText:!0,register:d,regExp:g.aq,className:"rentForm__item-input inputArea",placeholder:"Адрес*",type:"text"}),r.createElement(N.Z,{error:I.startAdresInput,value:F("startAdresInput"),className:"rentForm__item-input-rightDie"}))),r.createElement("div",{className:"rentForm__item"},r.createElement("div",{className:"rentForm__item-title"},"Форма оплаты"),r.createElement("div",{className:"rentForm__item-checkbox-box"},r.createElement(f,{nameCheckBox:"payment",control:O,checkType:"online"}),r.createElement(f,{nameCheckBox:"payment",control:O,checkType:"plase"})))),r.createElement("div",{className:"rentForm__right"},r.createElement("div",{className:"rentForm__item"},r.createElement("div",{className:"rentForm__item-title"},"Фактическая дата возврата велосипеда"),r.createElement("div",{className:"rentForm__item-date-box"},r.createElement("div",{className:"rentForm__item-date inputArea"},(0,_.fn)(l)),r.createElement("div",{className:"rentForm__item-date inputArea"},(0,_.cD)(o,m))),r.createElement(b.Z,null,r.createElement(E.Z,{nameInput:"finAdresInput",requiredText:!0,register:d,regExp:g.aq,className:"rentForm__item-input inputArea",placeholder:"Возврат по адресу",type:"text"}),r.createElement(N.Z,{error:I.finAdresInput,value:F("finAdresInput"),className:"rentForm__item-input-rightDie"}))),r.createElement("div",{className:"rentForm__info"},r.createElement("div",{className:"rentForm__info-item"},r.createElement("div",{className:"rentForm__info-item-title"},"Возвращение велосипеда"),r.createElement("div",{className:"rentForm__info-item-text"},"На возвращение велосипеда даётся 1 час. Задача организации, в особенности же сложившаяся структура организации позволяет выполнять важные задания по разработке позиций, занимаемых участниками в отношении поставленных задач.")),r.createElement("div",{className:"rentForm__info-item"},r.createElement("div",{className:"rentForm__info-item-title"},"Выбор адреса для возврата"),r.createElement("div",{className:"rentForm__info-item-text"},"Вы также можете ввести адрес другого места, где мы заберем у вас велосипед. "))))),r.createElement("div",{className:"rentForm__bottom"},r.createElement("button",{type:"submit",className:"rentForm__button",disabled:!!Object.values(I)[0]},"Забронировать")))},x=n(5430),O=function(){var e=(0,a.v9)((function(e){return e.rentRouter.bikeRentInfo})),t=(0,a.v9)((function(e){return e.userRouter.user.selectBikeList})),n=(0,r.useMemo)((function(){return(0,x.Z)(e,t)}),[e,t]);return r.createElement("div",{className:"rent__container"},r.createElement(m,{bikeList:n}),r.createElement(o.Z,null),r.createElement(I,{selectBikeList:t,bikeList:n}))}},5118:function(e,t,n){n.d(t,{G0:function(){return l},Oj:function(){return a},aq:function(){return i},cS:function(){return r},u9:function(){return c}});var r=/[а-яА-Я]/,a=/^[+7|7|8][0-9]{10,12}$/,i=/[а-яА-Я](.[0-9])?/,c=/^[a-zA-Z0-9._%+-]+@[a-zA-Z.0-9]+$/,l=/(?=.*?[a-zа-я])(?=.*?[A-ZА-Я])(?=.*?[0-9])[a-zа-яA-ZА-Я0-9]{10,}/}}]);