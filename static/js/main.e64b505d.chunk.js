(this.webpackJsonpweatherapp=this.webpackJsonpweatherapp||[]).push([[0],{11:function(e,t,a){},13:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var c=a(1),n=a.n(c),s=a(5),r=a.n(s),i=(a(11),a(3)),j=a.n(i),l=a(6),h=a(4),o=(a(13),a(0)),p=function(){var e=Object(c.useState)([]),t=Object(h.a)(e,2),a=t[0],n=t[1],s=Object(c.useState)("Delhi"),r=Object(h.a)(s,2),i=r[0],p=r[1];return Object(c.useEffect)((function(){function e(){return(e=Object(l.a)(j.a.mark((function e(){var t,a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.openweathermap.org/data/2.5/weather?q=".concat(i,"&appid=f652213223112c126a3e7d0188347717"));case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,n(a.main);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[i]),Object(o.jsx)(o.Fragment,{children:Object(o.jsx)("div",{className:"container",children:Object(o.jsxs)("div",{className:"box",children:[Object(o.jsx)("h1",{className:"title",children:"Weather-App"}),Object(o.jsx)("div",{className:"box-flex",children:Object(o.jsx)("input",{type:"text",value:i,onChange:function(e){p(e.target.value)},placeholder:"search city"})}),Object(o.jsxs)("h1",{className:"location",children:[Object(o.jsx)("i",{class:"fa-solid fa-street-view"})," ",i]}),a?Object(o.jsx)("div",{className:"search-box",children:Object(o.jsxs)("div",{className:"data",children:[Object(o.jsxs)("h1",{className:"temp",children:[Object(o.jsx)("i",{className:"fa-solid fa-temperature-quarter"}),parseInt(a.temp-273.15),"\xb0C"]}),Object(o.jsxs)("h2",{className:"min",children:["min-temp: ",parseInt(a.temp_min-273.15),"\xb0C"]}),Object(o.jsxs)("h2",{className:"max",children:["max-temp: ",parseInt(a.temp_max-273.15),"\xb0C"]})]})}):Object(o.jsx)("p",{className:"para",children:"No data Found"})]})})})},d=function(){return Object(o.jsx)("div",{children:Object(o.jsx)(p,{})})},u=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,17)).then((function(t){var a=t.getCLS,c=t.getFID,n=t.getFCP,s=t.getLCP,r=t.getTTFB;a(e),c(e),n(e),s(e),r(e)}))};r.a.render(Object(o.jsx)(n.a.StrictMode,{children:Object(o.jsx)(d,{})}),document.getElementById("root")),u()}},[[15,1,2]]]);
//# sourceMappingURL=main.e64b505d.chunk.js.map