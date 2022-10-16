(function(){"use strict";var e={796:function(e,t,a){var r=a(9242),o=a(3396);const n=(0,o._)("header",null,[(0,o._)("h1",null,"WSC-Memory")],-1),i=(0,o._)("footer",null,[(0,o._)("p",null,"Disclaimer: The images used belong to WorldSkills and are only used for the purpose of the demnstration")],-1);function s(e,t,a,r,s,p){const m=(0,o.up)("MenuComponent"),c=(0,o.up)("GameComponent");return(0,o.wg)(),(0,o.iD)(o.HY,null,[n,s.start?(0,o.kq)("",!0):((0,o.wg)(),(0,o.j4)(m,{key:0,onStart:p.onStart},null,8,["onStart"])),s.start?((0,o.wg)(),(0,o.j4)(c,{key:1,peoples:s.peoples,size:s.size},null,8,["peoples","size"])):(0,o.kq)("",!0),i],64)}a(7658);const p={class:"menu"},m={class:"btns"};function c(e,t,a,r,n,i){return(0,o.wg)(),(0,o.iD)("div",p,[(0,o._)("div",m,[(0,o._)("button",{class:"button",onClick:t[0]||(t[0]=e=>i.start(8))}," Easy "),(0,o._)("button",{class:"button",onClick:t[1]||(t[1]=e=>i.start(12))}," Medium ")])])}var l={name:"MenuComponent",methods:{start(e){this.$emit("start",e)}}},g=a(89);const u=(0,g.Z)(l,[["render",c],["__scopeId","data-v-53de0fb9"]]);var d=u,f=a(7139);const h=e=>((0,o.dD)("data-v-0db5f6d2"),e=e(),(0,o.Cn)(),e),y={class:"menu"},I=["onClick"],x={class:"card-froent"},v=["src"],j={class:"name"},N={class:"flag"},_=["src"],b=["src"],k={class:"text"},w=["src"],S={class:"card-back"},z=["src"],A={class:"footer"},C={class:"point"},P={class:"time"},O=["src"],D={key:0,class:"result"},M=h((()=>(0,o._)("span",{class:"text-center gongrats-text"},"Congratulations",-1)));function E(e,t,a,r,n,i){return(0,o.wg)(),(0,o.iD)("div",y,[(0,o._)("div",{class:"cards",style:(0,f.j5)("--size:"+a.size/2)},[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(a.peoples,((e,t)=>((0,o.wg)(),(0,o.iD)("div",{class:(0,f.C_)(["card",{"card-rotated":e==n.frisSelectedPeople||e==n.lastSelectedPeople||e.show}]),key:t,onClick:t=>i.click(e)},[(0,o._)("div",x,[(0,o._)("img",{src:"./assets/"+e.image,alt:""},null,8,v),(0,o._)("div",j,(0,f.zw)(e.name)+" - "+(0,f.zw)(e.country),1),(0,o._)("div",N,[(0,o._)("img",{src:"./assets/"+e.countryImage,alt:""},null,8,_)]),(0,o._)("img",{class:"portrait",src:"./assets/"+e.image,alt:"UAE competitor portrait"},null,8,b),(0,o._)("div",k,[(0,o._)("img",{class:"flag",src:"./assets/"+e.countryImage,alt:"UAE country flag"},null,8,w)])]),(0,o._)("div",S,[(0,o._)("img",{src:"./assets/Card Back.png",alt:""},null,8,z)])],10,I)))),128))],4),(0,o._)("div",A,[(0,o._)("div",C,"Points: "+(0,f.zw)(n.point),1),(0,o._)("div",P,[(0,o._)("img",{src:"./assets/timer_black_24dp.svg",alt:""},null,8,O),(0,o.Uk)(" "+(0,f.zw)(n.time),1)])]),n.result?((0,o.wg)(),(0,o.iD)("div",D,[(0,o._)("div",null,[M,(0,o._)("p",null,"Time: "+(0,f.zw)(n.time),1),(0,o._)("p",null,"Point: "+(0,f.zw)(n.point),1),(0,o._)("input",{type:"button",value:"Restart",class:"button",onClick:t[0]||(t[0]=(...e)=>i.restart&&i.restart(...e))})])])):(0,o.kq)("",!0)])}var U={name:"GameComponent",props:{peoples:Array,size:Number},data(){return{frisSelectedPeople:null,lastSelectedPeople:null,point:1e3,timeid:0,time:0,result:!1}},methods:{click(e){if(!e.show&&e!=this.frisSelectedPeople&&e!=this.lastSelectedPeople&&(!this.frisSelectedPeople||!this.lastSelectedPeople)){this.frisSelectedPeople?(this.lastSelectedPeople=e,this.lastSelectedPeople.id==this.frisSelectedPeople.id?(this.lastSelectedPeople.show=!0,this.frisSelectedPeople.show=!0,this.frisSelectedPeople=null,this.lastSelectedPeople=null):setTimeout((()=>{this.frisSelectedPeople=null,this.lastSelectedPeople=null,this.point-=10}),1e3)):this.frisSelectedPeople=e;for(let e of this.peoples)if(!e.show)return;clearInterval(this.timeid),window.parent.postMessage({event_type:"game_run_end",score:this.point}),this.result=!0}},restart(){location.reload()}},mounted(){for(let e of this.peoples)e.show=!0;setTimeout((()=>{for(let e of this.peoples)e.show=!1;this.timeid=setInterval((()=>{this.point--,this.time++}),1e3)}),3e3)}};const K=(0,g.Z)(U,[["render",E],["__scopeId","data-v-0db5f6d2"]]);var G=K,H=[{id:1,country:"Armenia",countryImage:"flags/armenia.png",competitorImage:"competitors/armenia.jpeg",expertImage:"experts/armenia.jpeg",expertName:"Artur Petrosyan",competitorName:"Melkon Hovhannisyan"},{id:2,country:"Austria",countryImage:"flags/austria.png",competitorImage:"competitors/austria.jpeg",expertImage:"experts/austria.jpeg",expertName:"Franz Stefan Stimpfl",competitorName:"Viktor Karpinski"},{id:3,country:"Azerbaijan",countryImage:"flags/azerbaijan.png",competitorImage:"competitors/azerbaijan.jpeg",expertImage:"experts/azerbaijan.jpeg",expertName:"Vahid Gasimov",competitorName:"Fagan Rasulov"},{id:4,country:"China",countryImage:"flags/china.png",competitorImage:"competitors/china.png",expertImage:"experts/china.jpeg",expertName:"Ling Zhang",competitorName:"Jun Liang"},{id:5,country:"Chinese taipei",countryImage:"flags/chinese_taipei.png",competitorImage:"competitors/chinese_taipei.jpeg",expertImage:"experts/chinese_taipei.jpeg",expertName:"Chorng-Shiuh Koong",competitorName:"YIN-NIEN CHYOU"},{id:6,country:"Colombia",countryImage:"flags/colombia.png",competitorImage:"competitors/colombia.jpeg",expertImage:"experts/colombia.jpeg",expertName:"Oscar Aristizabal",competitorName:"Juan Esteban Deossa"},{id:7,country:"Costa rica",countryImage:"flags/costa_rica.png",competitorImage:"competitors/costa_rica.jpeg",expertImage:"experts/costa_rica.jpeg",expertName:"Abraham Quesada Castro",competitorName:"Alonso Fabian Artavia"},{id:8,country:"Finland",countryImage:"flags/finland.png",competitorImage:"competitors/finland.jpeg",expertImage:"experts/finland.jpeg",expertName:"Margit Tennosaar",competitorName:"Valtteri Verronen"},{id:9,country:"France",countryImage:"flags/france.png",competitorImage:"competitors/france.jpeg",expertImage:"experts/france.jpeg",expertName:"Gilles Granger",competitorName:"Evan Juge"},{id:10,country:"Hong Kong",countryImage:"flags/hong_kong.png",competitorImage:"competitors/hong_kong.jpeg",expertImage:"experts/hong_kong.jpeg",expertName:"Sui Lun Wu",competitorName:"Ka Hing WONG"},{id:11,country:"Hungary",countryImage:"flags/hungary.png",competitorImage:"competitors/hungary.png",expertImage:"experts/hungary.jpeg",expertName:"Zoltán Sisák",competitorName:"Botond Bendeguz Sisak"},{id:12,country:"India",countryImage:"flags/india.png",competitorImage:"competitors/india.png",expertImage:"experts/india.jpeg",expertName:"Dhruv Joshi",competitorName:"Advaith Arun Jeena"},{id:13,country:"Iran",countryImage:"flags/iran.png",competitorImage:"competitors/iran.jpeg",expertImage:"experts/iran.jpeg",expertName:"Mohammad hossein",competitorName:"Danial Dezfouli Nejad"},{id:14,country:"Japan",countryImage:"flags/japan.png",competitorImage:"competitors/japan.png",expertImage:"experts/japan.jpeg",expertName:"Ryoju Ohata",competitorName:"Haruka Yamada"},{id:15,country:"Kazakhstan",countryImage:"flags/kazakhstan.png",competitorImage:"competitors/kazakhstan.jpeg",expertImage:"experts/kazakhstan.jpeg",expertName:"Aizhan Ziyadanova",competitorName:"Dina Afanasyeva"},{id:16,country:"Latvia",countryImage:"flags/latvia.png",competitorImage:"competitors/latvia.jpeg",expertImage:"experts/latvia.jpeg",expertName:"Roberts Flaumanis",competitorName:"Aleksis Steinburgs"},{id:17,country:"Saudi Arabia",countryImage:"flags/saudi_arabia.png",competitorImage:"competitors/saudi_arabia.jpeg",expertImage:"experts/saudi_arabia.jpeg",expertName:"seham Ali",competitorName:"khadijah baothman"},{id:18,country:"Singapore",countryImage:"flags/singapore.png",competitorImage:"competitors/singapore.jpeg",expertImage:"experts/singapore.jpeg",expertName:"Siew Hwa Kang",competitorName:"Jun Ze Ong"},{id:19,country:"Spain",countryImage:"flags/spain.png",competitorImage:"competitors/spain.png",expertImage:"experts/spain.jpeg",expertName:"Diego J. GARCÍA",competitorName:"ARNAU LLOPART"},{id:20,country:"Sweden",countryImage:"flags/sweden.png",competitorImage:"competitors/sweden.jpeg",expertImage:"experts/sweden.jpeg",expertName:"Oscar Ekholm Grahn",competitorName:"Rasmus Risberg"},{id:21,country:"Switzerland",countryImage:"flags/switzerland.png",competitorImage:"competitors/switzerland.jpeg",expertImage:"experts/switzerland.jpeg",expertName:"Manuel J. Schaffner",competitorName:"Tom Diggelmann"},{id:22,country:"United Arab Emirates",countryImage:"flags/UAE.png",competitorImage:"competitors/UAE.jpeg",expertImage:"experts/UAE.jpeg",expertName:"Bruno Medeiros",competitorName:"Salem Alhadhrami"},{id:23,country:"United Kingdom",countryImage:"flags/UK.png",competitorImage:"competitors/UK.jpeg",expertImage:"experts/UK.jpeg",expertName:"Valentin Adamescu",competitorName:"Lewis Newton"}],J={name:"App",components:{MenuComponent:d,GameComponent:G},data(){return{start:!1,size:0,peoples:[]}},methods:{onStart(e){H.sort((()=>Math.random()-.5)),this.size=e,this.start=!0;let t=[];for(let r=0;r<(8==e?8:18);r++)t.push(H[r]);let a=[];for(let r of t)a.push({id:r.id,type:"Expert",image:r.expertImage,name:r.expertName,country:r.country,countryImage:r.countryImage}),a.push({id:r.id,type:"Competitor",image:r.competitorImage,name:r.competitorName,country:r.country,countryImage:r.countryImage});a.sort((()=>Math.random()-.5)),console.log(a),this.peoples=a}}};const R=(0,g.Z)(J,[["render",s]]);var T=R;(0,r.ri)(T).mount("#app")}},t={};function a(r){var o=t[r];if(void 0!==o)return o.exports;var n=t[r]={exports:{}};return e[r](n,n.exports,a),n.exports}a.m=e,function(){var e=[];a.O=function(t,r,o,n){if(!r){var i=1/0;for(c=0;c<e.length;c++){r=e[c][0],o=e[c][1],n=e[c][2];for(var s=!0,p=0;p<r.length;p++)(!1&n||i>=n)&&Object.keys(a.O).every((function(e){return a.O[e](r[p])}))?r.splice(p--,1):(s=!1,n<i&&(i=n));if(s){e.splice(c--,1);var m=o();void 0!==m&&(t=m)}}return t}n=n||0;for(var c=e.length;c>0&&e[c-1][2]>n;c--)e[c]=e[c-1];e[c]=[r,o,n]}}(),function(){a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,{a:t}),t}}(),function(){a.d=function(e,t){for(var r in t)a.o(t,r)&&!a.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={143:0};a.O.j=function(t){return 0===e[t]};var t=function(t,r){var o,n,i=r[0],s=r[1],p=r[2],m=0;if(i.some((function(t){return 0!==e[t]}))){for(o in s)a.o(s,o)&&(a.m[o]=s[o]);if(p)var c=p(a)}for(t&&t(r);m<i.length;m++)n=i[m],a.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return a.O(c)},r=self["webpackChunkmodule_g"]=self["webpackChunkmodule_g"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=a.O(void 0,[998],(function(){return a(796)}));r=a.O(r)})();
//# sourceMappingURL=app.b4bc9f5b.js.map