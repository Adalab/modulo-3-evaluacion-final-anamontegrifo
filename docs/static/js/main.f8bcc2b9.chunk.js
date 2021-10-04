(this["webpackJsonpreact-starter-kit"]=this["webpackJsonpreact-starter-kit"]||[]).push([[0],[,,,,,,,,,,function(e,c,t){},,,,,,,,,,function(e,c,t){},,function(e,c,t){},function(e,c,t){},,,,,,,,,function(e,c,t){},function(e,c,t){},function(e,c,t){},function(e,c,t){},function(e,c,t){},function(e,c,t){"use strict";t.r(c);var a=t(1),s=t(13),n=t.n(s),r=t(3),i=t(7),l=(t(20),t(2)),j=function(){return fetch("https://rickandmortyapi.com/api/character").then((function(e){return e.json()})).then((function(e){return e.results.map((function(e){return{image:e.image,name:e.name,species:e.species,origin:e.origin.name,episode:e.episode,status:e.status,id:e.id}}))}))},d=t(0),o=function(e){return Object(d.jsxs)("div",{className:"filter__inputT",children:[Object(d.jsx)("input",{className:"filter__inputT--text",type:"text",name:"name",placeholder:"Search here by name!",value:e.searchName,onChange:e.handleSearchName}),Object(d.jsx)("button",{className:"filter__inputT--reset",onClick:e.handleResetName,children:Object(d.jsx)("i",{className:"fas fa-times-circle filter__inputT--icon"})})]})},h=function(e){return Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)("select",{className:"filter__inputSelect",name:"species",id:"species",value:e.searchSpecies,onChange:e.handleSearchSpecies,children:[Object(d.jsx)("option",{value:"All",children:"Selected by species"}),Object(d.jsx)("option",{value:"Human",children:"Human"}),Object(d.jsx)("option",{value:"Alien",children:"Alien"})]})})},m=(t(22),function(e){return Object(d.jsx)("section",{className:"filter",children:Object(d.jsxs)("form",{className:"filter__form",onSubmit:function(e){e.preventDefault()},children:[Object(d.jsx)(o,{searchName:e.searchName,handleSearchName:e.handleSearchName,handleResetName:e.handleResetName}),Object(d.jsx)(h,{searchSpecies:e.searchSpecies,handleSearchSpecies:e.handleSearchSpecies})]})})}),b=(t(23),function(e){return Object(d.jsx)("button",{onClick:e.handleResetName,className:e.className,children:e.text})}),u=t.p+"static/media/human-mind.64af08c6.png",x=t.p+"static/media/ufo.4439d8a8.png",O=function(e){var c="Alien"===e.each.species?x:u;return Object(d.jsxs)("div",{className:"card",children:[Object(d.jsx)("img",{className:"card__image",src:e.each.image,alt:"character"}),Object(d.jsxs)("div",{className:"card__paragraphs",children:[Object(d.jsx)("p",{className:"card__text",children:"Name: ".concat(e.each.name)}),Object(d.jsx)("p",{className:"card__text",children:"Species: ".concat(e.each.species)})]}),Object(d.jsxs)("section",{className:"card__circles",children:[Object(d.jsx)("div",{className:"card__species",children:Object(d.jsx)("img",{className:"card__species--icon",src:c,alt:"species"})}),Object(d.jsx)(r.b,{to:"/characters/".concat(e.each.id),children:Object(d.jsx)(b,{className:"card__button",text:"See more here!"})})]})]})},f=(t(10),function(e){return Object(d.jsxs)("div",{className:"notFound",children:[Object(d.jsx)("h1",{children:"Try again, this character does not exist!"}),Object(d.jsx)(b,{className:"notFound__button",text:"Back",handleResetName:e.handleResetName})]})}),p=(t(32),function(e){return Object(d.jsx)("div",{className:"main",children:Object(d.jsx)("ul",{className:"main__list",children:0===e.characters.length?Object(d.jsx)(f,{handleResetName:e.handleResetName}):e.characters.map((function(e){return Object(d.jsx)("li",{className:"main__list--item",children:Object(d.jsx)(O,{each:e})},e.id)}))})})}),_=(t(33),function(){return Object(d.jsxs)("div",{className:"notFound",children:[Object(d.jsx)("h1",{children:"Try again, this character does not exist!"}),Object(d.jsx)(r.b,{to:"/characters",children:Object(d.jsx)(b,{className:"notFound__button",text:"Back"})})]})}),N=function(e){return Object(d.jsx)("div",{className:e.className,children:Object(d.jsx)(r.b,{to:e.link,children:Object(d.jsx)("i",{className:"fas fa-times-circle detail__back--cross"})})})},g=function(e){if(console.log(e.selectedCharacter),void 0===e.selectedCharacter)return Object(d.jsx)(_,{});var c=1===e.selectedCharacter.episode.length?"episode":"episodes",t="";return t="Dead"===e.selectedCharacter.status?"fas fa-cross detail__icon":"Alive"===e.selectedCharacter.status?"fas fa-heart detail__icon":"fas fa-question-circle detail__icon",Object(d.jsx)("section",{className:"detail",children:Object(d.jsxs)("div",{className:"detail__card",children:[Object(d.jsx)(N,{className:"detail__back",link:"/characters"}),Object(d.jsx)("img",{className:"detail__image",src:e.selectedCharacter.image,alt:"profile"}),Object(d.jsxs)("p",{className:"detail__text",children:["Hi, my name is ",Object(d.jsx)("span",{children:e.selectedCharacter.name}),". I'm just an ordinary ",Object(d.jsx)("span",{children:e.selectedCharacter.species}),". My origin is ",Object(d.jsx)("span",{children:e.selectedCharacter.origin}),". I am a celebrity because I appeared in",Object(d.jsx)("span",{children:" ".concat(e.selectedCharacter.episode.length," ").concat(c)})," ","of Rick & Morty."]}),Object(d.jsxs)("div",{className:"detail__icon--container",children:[Object(d.jsx)("p",{children:Object(d.jsx)("i",{className:t})}),Object(d.jsx)("p",{className:"detail__text",children:"Status: ".concat(e.selectedCharacter.status)})]})]})})},v=t.p+"static/media/red.4099ed46.png",S=(t(34),function(){return Object(d.jsx)("div",{className:"header",children:Object(d.jsx)(r.b,{to:"/",children:Object(d.jsx)("img",{className:"header__logo",src:v,alt:"character"})})})}),C=(t(35),function(){return Object(d.jsxs)("div",{className:"hero",children:[Object(d.jsxs)("div",{children:[Object(d.jsx)("p",{className:"hero__text",children:"All about"}),Object(d.jsx)("img",{className:"hero__logo",src:v,alt:"character"})]}),Object(d.jsx)(r.b,{to:"/characters",children:Object(d.jsx)(b,{className:"hero__button",text:"Start!"})})]})}),k=(t(36),function(){return Object(d.jsxs)("div",{className:"footer",children:[Object(d.jsx)("p",{className:"footer__name",children:"Ana Montegrifo"}),Object(d.jsx)("p",{className:"footer__text",children:"Evaluaci\xf3n final React - Adalab"}),Object(d.jsxs)("a",{className:"footer__link",target:"_blank",rel:"noreferrer",href:"https://github.com/Adalab/modulo-3-evaluacion-final-anamontegrifo",children:["Repo en Github ",Object(d.jsx)("i",{className:"fab fa-github-alt"})]})]})}),R=function(){return Object(d.jsxs)("div",{className:"notFound",children:[Object(d.jsx)("h1",{children:"This page does not exist!"}),Object(d.jsx)(r.b,{to:"/",children:Object(d.jsx)(b,{className:"notFound__button",text:"Home"})})]})};var y=function(){var e=Object(a.useState)([]),c=Object(i.a)(e,2),t=c[0],s=c[1],n=Object(a.useState)(""),r=Object(i.a)(n,2),o=r[0],h=r[1],b=Object(a.useState)("All"),u=Object(i.a)(b,2),x=u[0],O=u[1];Object(a.useEffect)((function(){j().then((function(e){s(e)}))}),[]);var f=function(){h("")},_=t.sort((function(e,c){return e.name>c.name?1:e.name<c.name?-1:0})).filter((function(e){return e.name.toLocaleLowerCase().includes(o.toLocaleLowerCase())})).filter((function(e){return"All"===x||x===e.species})),N=Object(l.f)("/characters/:id"),v=null!==N?parseInt(N.params.id):"",y=t.find((function(e){return e.id===v}));return console.log(y),Object(d.jsx)(d.Fragment,{children:Object(d.jsx)("section",{className:"container",children:Object(d.jsxs)(l.c,{children:[Object(d.jsxs)(l.a,{path:"/characters/:id",children:[Object(d.jsx)(S,{}),Object(d.jsx)(g,{selectedCharacter:y}),Object(d.jsx)(k,{})]}),Object(d.jsxs)(l.a,{exact:!0,path:"/characters",children:[Object(d.jsx)(S,{}),Object(d.jsx)(m,{searchName:o,handleSearchName:function(e){h(e.currentTarget.value)},searchSpecies:x,handleSearchSpecies:function(e){O(e.currentTarget.value)},handleResetName:f}),Object(d.jsx)(p,{handleResetName:f,characters:_}),Object(d.jsx)(k,{})]}),Object(d.jsx)(l.a,{exact:!0,path:"/",children:Object(d.jsx)(C,{})}),Object(d.jsx)(l.a,{children:Object(d.jsx)(R,{})})]})})})};n.a.render(Object(d.jsx)(r.a,{children:Object(d.jsx)(y,{})}),document.getElementById("root"))}],[[37,1,2]]]);
//# sourceMappingURL=main.f8bcc2b9.chunk.js.map