(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{163:function(e,t,n){e.exports=n.p+"static/media/filipizen.5fd85b9e.svg"},271:function(e,t,n){e.exports=n(477)},276:function(e,t,n){},277:function(e,t,n){},467:function(e,t){},471:function(e,t,n){},472:function(e,t,n){},474:function(e,t,n){},476:function(e,t,n){},477:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(12),i=n.n(c),l=(n(276),n(44)),o=n(15),s=(n(277),function(e){return r.a.createElement("div",{className:"Footer"},r.a.createElement("span",{className:"Footer__info"},"@2020 Sitemap | Privacy | Legal | Feedback"))}),m=function(e){return r.a.createElement("div",{className:"HomeScreen"},r.a.createElement("div",{className:"HomeScreen__panel"},r.a.createElement("img",Object.assign({className:"HomeScreen__image",src:n(163)},e,{alt:"filipizen logo"})),r.a.createElement("div",{className:"HomeScreen__infoContainer"},r.a.createElement("div",{className:"HomeScreen__information"},r.a.createElement("label",{className:"HomeScreen__title"},"Experience ease of doing business with the government"),r.a.createElement("label",{className:"HomeScreen__description"},"Over 50 local government units participating all over the Philippines.")),r.a.createElement("button",{className:"HomeScreen__button",onClick:function(){e.history.push("/partners")}},"Start Here"))),r.a.createElement(s,null))},u=n(252),p=n(24),d=n(2),f=n(72),v=(n(471),function(e){var t=function(e){var t=e.children,n={header:null,left:null,center:null,right:null,footer:null};return r.a.Children.forEach(t,(function(e){if(e){var t=e.props.target||"center",a="string"===typeof e.type?e.type:e.type.name;/header/i.test(a)?t="header":/footer/i.test(a)&&(t="footer"),n[t]||(n[t]=[]),n[t].push(e)}})),n}(e),n=t.header,a=t.center,c=t.footer;return r.a.createElement("div",{className:"template"},r.a.createElement("div",{className:"row header"},n),r.a.createElement("div",{className:"content"},r.a.createElement("div",{className:"panel"},r.a.createElement("div",{className:"main"},a," "))),r.a.createElement("div",{className:"row footer"},c))}),b=function(e){return r.a.createElement("img",Object.assign({src:n(163)},e,{alt:"filipizen"}))},g=(n(116),n(472),function(){return r.a.createElement("div",{className:"Header"},r.a.createElement(l.b,{to:"/partners"},r.a.createElement(b,null)))}),h=function(e){var t=e.children,n=Object(f.a)(e,["children"]),a=void 0===n.showHeader||n.showHeader;return r.a.createElement(v,{logo:b},a&&r.a.createElement(g,null),t,r.a.createElement(s,null))},E=(n(474),d.N.lookup("CloudPartnerService","partner")),y=Object(d.bb)(),O=function(e){var t=e.partners,n=t[0].group;return r.a.createElement("div",null,r.a.createElement(d.R,null,n.title),r.a.createElement(d.B,{items:t},(function(e){var t=e.item;return"0"!==t.isonline?r.a.createElement("div",{key:t.id,style:{paddingBottom:2}},r.a.createElement(d.A,{component:l.b,to:{pathname:"/partner/".concat(n.objid,"_").concat(t.name,"/services"),state:{partner:t}},caption:"".concat(t.title," (").concat(t.id,")")})):r.a.createElement(d.y,{key:t.id,style:{color:"#a9a7a7",paddingTop:0}},"".concat(t.title," (").concat(t.id,")"))})))},w=function(e){var t=e.partners,n=Object(d.db)(t,"clusterid");return r.a.createElement("div",{className:"PartnerList_group"},Object.keys(n).map((function(e){return/test/i.test(e)?null:r.a.createElement(O,{key:e,partners:n[e]})})))},j=function(e){var t=Object(a.useState)(!0),n=Object(p.a)(t,2),c=n[0],i=n[1],l=Object(a.useState)([]),o=Object(p.a)(l,2),s=o[0],m=o[1],f=function(e,t){var n=s.findIndex((function(t){return t.id===e}));if(n>=0){var a=s[n];if(a.isonline!==t){a.isonline=t;var r=Object(u.a)(s);r[n]=a,m(r)}}};return y.register("activate",(function(e){f(e,"1")})),y.register("deactivate",(function(e){f(e,"0")})),r.a.useEffect((function(){i(!0),E.invoke("getActivePartners",null,(function(e,t){e?console.log("Error loading partners ",e):m(t),i(!1)}))}),[]),r.a.createElement(h,null,r.a.createElement("div",{className:"PartnerList"},c&&r.a.createElement(d.z,null),!c&&r.a.createElement(r.a.Fragment,null,r.a.createElement(d.O,{height:20}),r.a.createElement(d.W,null,"Select a Partner Agency"),r.a.createElement(w,{partners:s}))))},k={container:{padding:"4px 50px"},title:{color:"#ddd",paddingLeft:5}},S=function(e){var t=e.partner,n=e.Logo;return r.a.createElement(d.b,null,r.a.createElement(d.I,{style:k.container},r.a.createElement(l.b,{to:{pathname:"/partner/".concat(t.name,"/services"),state:{partner:t}}},r.a.createElement(d.I,{row:!0},r.a.createElement("div",null,n)))))},C=function(e){var t,n=e.children,a=Object(f.a)(e,["children"]);return r.a.createElement(h,{logo:b},r.a.createElement(S,Object.assign({Logo:(t=a.partner,r.a.createElement(d.v,{style:{height:"40px"},src:"/assets/".concat(t.name,".png"),height:"30px"}))},a)),n)},x=n(84),B=(n(475),[{name:"bpls",module:"filipizen-bpls",title:"Business",services:[{module:"bpls",name:"businessbilling",title:"Business Online Billing",component:"BplsBillingWebController"},{module:"bpls",name:"renewbusiness",title:"Renew Business Application",component:"RenewBusinessWebController"}]},{name:"rptis",module:"filipizen-rptis",title:"Real Property",services:[{module:"rptis",name:"rptbilling",title:"Realty Tax Online Billing",component:"RptBillingWebController"},{module:"rptis",name:"rpttaxclearance",title:"Online Realty Tax Clearance",component:"RealtyTaxClearanceWebController"}]},{name:"waterworks",module:"filipizen-waterworks",title:"Waterworks",services:[{module:"waterworks",name:"waterworksbilling",title:"Waterworks Billing",component:"WaterworksBillingWebController"}]},{name:"obo",module:"filipizen-obo",title:"Building and Construction",services:[{module:"obo",name:"bldgpermit",title:"Building Permit Application",component:"BuildingPermitWebController"},{module:"obo",name:"occupancypermit",title:"Occupancy Permit Application",component:"OccupancyPermitWebController"},{module:"obo",name:"registerprofessionals",title:"Register Professional",component:"ProfessionalWebController"},{module:"obo",name:"apptracking",title:"Application Tracking",component:"AppTrackingWebController"},{module:"obo",name:"obobilling",title:"Building Online Billing",component:"OboBillingWebController"}]}]),N=function(e){var t=e.includeservices;if(!t)return[];var n=new RegExp("(".concat(t,")"),"i"),a=e.excludeservices?new RegExp("(".concat(e.excludeservices,")"),"i"):null,r=[].concat(B);return r.forEach((function(e){var t=e.services.filter((function(e){return n.test(e.name)&&(!a||!a.test(e.name))}));e.services=t})),r.filter((function(e){return e.services.length>0}))},P={},W=function(e){var t=e.modules,n=e.onSelect;return r.a.createElement(r.a.Fragment,null,r.a.createElement(d.I,{style:_.screen},t.map((function(e,t){return r.a.createElement(d.I,{key:"".concat(e.name).concat(t),style:_.moduleContainer},r.a.createElement(d.R,null,e.title),r.a.createElement(d.B,{items:e.services,style:_.list},(function(t){var a=t.item;return r.a.createElement(d.A,{key:a.name,component:"button",onClick:function(){return n(e,a)}},a.title)})))}))))},_={screen:{width:"100%",display:"flex",flexWrap:"wrap",justifyContent:"flex-start",alignItems:"wrap"},list:{display:"flex",flexDirection:"column",alignItems:"flex-start"},moduleContainer:{width:250},maintenanceContainer:{display:"flex",marginTop:20},maintenanceInfo:{},maintenanceImage:{width:350},maintenanceTitle:{fontSize:"3rem",fontWeight:800}},I=function(e){var t=e.location,n=e.history,c=Object(a.useState)(),i=Object(p.a)(c,2),l=i[0],o=i[1],s=Object(a.useState)([]),m=Object(p.a)(s,2),u=m[0],f=m[1];Object(a.useEffect)((function(){var e=t.state?t.state.partner:null;e?(o(e),f(N(e))):function(e){return new Promise((function(t,n){var a=e.pathname.match("/partner/(.*)_(.*)/services");(!a||a.length<3)&&n("Invalid path");var r=a[1],c=a[2];d.N.lookup("CloudPartnerService","partner").invoke("findByGroupAndName",{groupname:r,name:c},(function(e,a){e?n("Partner ".concat(c," does not exist. ").concat(e)):"0"!==a.isonline?t(a):n("Partner is offline.")}))}))}(t).then((function(e){o(e),f(N(e))})).catch((function(e){return n.push("/partners")}))}),[t,n]);return l?r.a.createElement(C,{partner:l,location:t,history:n},r.a.createElement(d.H,null,r.a.createElement(d.O,{height:20}),u.length>0&&r.a.createElement(r.a.Fragment,null,r.a.createElement(d.W,null,"Select Transaction"),r.a.createElement(d.O,{height:20}),r.a.createElement(W,{modules:u,onSelect:function(e,t){n.push({pathname:"/partner/".concat(l.group.name,"_").concat(l.name,"/").concat(e.name,"/").concat(t.name),state:{partner:l,module:e,service:t}})}})),0===u.length&&r.a.createElement("div",{style:_.maintenanceContainer},r.a.createElement("div",{style:_.maintenanceInfo},r.a.createElement("label",{style:_.maintenanceTitle},"Website under maintenance"),r.a.createElement("p",null,"This website is currently undergoing a scheduled maintenance. Will return shortly. Our apologies for the inconvenience.")),r.a.createElement("img",{style:_.maintenanceImage,src:"/assets/filipizen.png",alt:"Under Maintenance"})))):r.a.createElement(h,null)},H=function(e){return function(e){var t=P[e.module];return"undefined"===typeof t&&("bpls"===e.module?t=x.a.lib((function(){return n.e(3).then(n.bind(null,525))})):"rptis"===e.module?t=x.a.lib((function(){return n.e(5).then(n.bind(null,526))})):"waterworks"===e.module?t=x.a.lib((function(){return n.e(6).then(n.bind(null,527))})):"obo"===e.module&&(t=x.a.lib((function(){return n.e(4).then(n.bind(null,528))}))),P[e.module]=t),t}(e)},z=function(e){var t=Object(o.g)(),n=Object(o.f)(),c=function(e){return e&&e.state?e.state:{}}(t),i=c.partner,l=c.service,s=Object(f.a)(c,["partner","service"]),m=Object(a.useState)(i),u=Object(p.a)(m,2),v=u[0],b=u[1],g=Object(a.useState)(l),h=Object(p.a)(g,2),E=h[0],y=h[1];if(Object(a.useEffect)((function(){i||function(e){return new Promise((function(t,n){var a=e.pathname.match("/partner/(.*)_(.*)/(.*)/(.*)");(!a||a.length<5)&&n("Invalid path");var r=a[1],c=a[2],i=a[3],l=a[4];d.N.lookup("CloudPartnerService","partner").invoke("findByGroupAndName",{groupname:r,name:c},(function(e,a){if(e)n("Partner ".concat(c," does not exist. ").concat(e));else if("0"!==a.isonline){var r,o=N(a).find((function(e){return e.name===i})),s=o?o.services.find((function(e){return e.name===l})):null;if(!o||!s)return r="/partner/".concat(a.group.name,"_").concat(a.name,"/services"),void t({redirectUrl:r});t({partner:a,module:o,service:s})}else n("Partner is offline.")}))}))}(t).then((function(e){e.redirectUrl?n.replace(e.redirectUrl):(b(e.partner),y(e.service))})).catch((function(e){return n.replace("/partners")}))}),[n,i,t]),!v||!E)return null;var O=H(E);return r.a.createElement(C,{partner:v},r.a.createElement(O,Object.assign({},e,{partner:v,service:E},s),(function(t){var n=t[E.component];return r.a.createElement(n,Object.assign({},e,{partner:v,service:E},s))})))},R=n(85),A={actions:{display:"flex",flexDirection:"row",justifyContent:"center"},code:{fontSize:120,color:"#686868"},label:{fontSize:36,fontWeight:"bold",color:"#3f51b5",textAlign:"center"}},T=[{name:"home",exact:!0,path:"/",component:m},{name:"partners",path:"/partners",component:j},{name:"services",path:"/partner/:partnerId/services",component:I},{name:"service",path:"/partner/:partnerId/:module/:service",component:z},{name:"success",path:"/payment/success",component:function(e){var t=e.location.location,n=Object(a.useState)({}),c=Object(p.a)(n,2),i=c[0],l=c[1];Object(a.useEffect)((function(){t&&function(){var e=Object(d.cb)(t,"orgcode");d.N.lookup("CloudPartnerService","partner").invoke("findById",{id:e},(function(e,t){l(e?{}:t)}))}()}),[t]);return r.a.createElement(C,{partner:i},r.a.createElement(d.k,{center:!0},r.a.createElement(R.e,Object.assign({onClose:function(){i&&i.name?e.history.replace({pathname:"/partner/".concat(i.name,"/services"),state:{partner:i}}):e.history.replace({pathname:"/partners",state:{partner:i}})}},e,{partner:i}))))}},{name:"error",path:"/payment/error",component:function(e){var t=e.location,n=e.history,c=Object(a.useState)({}),i=Object(p.a)(c,2),l=i[0],o=i[1];Object(a.useEffect)((function(){t&&function(){var e=Object(d.cb)(t,"orgcode");d.N.lookup("CloudPartnerService","partner").invoke("findById",{id:e},(function(e,t){o(e?{}:t)}))}()}),[t]);return r.a.createElement(C,{partner:l},r.a.createElement(d.I,null,r.a.createElement(R.d,Object.assign({onClose:function(){l&&l.name?n.replace({pathname:"/partner/".concat(l.name,"/services"),state:{partner:l}}):n.replace({pathname:"/partners",state:{partner:l}})}},e,{partner:l}))))}},{name:"404",path:"*",component:function(e){return r.a.createElement(h,{showHeader:!1},r.a.createElement(d.H,null,r.a.createElement(d.O,{height:60}),r.a.createElement(b,{width:200}),r.a.createElement(d.O,{height:30}),r.a.createElement(d.k,{center:!0},r.a.createElement(d.y,{labelStyle:A.code},"404"),r.a.createElement("label",{style:A.label},"Sorry, the page you tried to access cannot be found."),r.a.createElement(d.O,{height:40}),r.a.createElement(d.I,{style:A.actions},r.a.createElement(d.e,{style:{paddingLeft:50,paddingRight:50},caption:"Start Here",size:"large",onClick:function(){e.history.push("/partners")}})))))}},{name:"systools",exact:!0,path:"/admin/systool",component:m}];n(476);var L=function(){return r.a.createElement(l.a,null,r.a.createElement(o.c,null,T.map((function(e){return r.a.createElement(o.a,Object.assign({key:e.name},e))}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(L,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[271,1,2]]]);