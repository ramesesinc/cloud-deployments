(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{305:function(e,t,n){e.exports=n(513)},312:function(e,t,n){},313:function(e,t,n){},489:function(e,t){},499:function(e,t,n){e.exports=n.p+"static/media/filipizen.5fd85b9e.svg"},500:function(e,t,n){},502:function(e,t,n){},513:function(e,t,n){"use strict";n.r(t);var a={};n.r(a),n.d(a,"RealtyTaxClearanceWebController",(function(){return k.a})),n.d(a,"RptBillingWebController",(function(){return k.b})),n.d(a,"BplsBillingWebController",(function(){return A.a})),n.d(a,"getModules",(function(){return L}));var r=n(0),c=n.n(r),l=n(12),o=n.n(l),i=(n(312),n(44)),s=n(15),m=(n(313),n(1)),u=function(e){return c.a.createElement(m.q,Object.assign({src:n(499)},e))},p=n(82),d=(n(500),function(e){var t=function(e){var t=e.children,n={header:null,left:null,center:null,right:null,footer:null};return c.a.Children.forEach(t,(function(e){if(e){var t=e.props.target||"center",a="string"===typeof e.type?e.type:e.type.name;/header/i.test(a)?t="header":/footer/i.test(a)&&(t="footer"),n[t]||(n[t]=[]),n[t].push(e)}})),n}(e),n=t.header,a=t.center,r=t.footer;return c.a.createElement("div",{className:"template"},c.a.createElement("div",{className:"row header"},n),c.a.createElement("div",{className:"content"},c.a.createElement("div",{className:"panel"},c.a.createElement("div",{className:"main"},a," "))),c.a.createElement("div",{className:"row footer"},r))}),f=function(e){return c.a.createElement("div",{style:h.header},c.a.createElement(i.b,{to:"/partners"},c.a.createElement(u,null)))},E=function(e){return c.a.createElement("div",{target:"footer",style:h.footer},c.a.createElement("span",{style:h.footerText},"@2020  Sitemap | Privacy | Legal | Feedback"))},h={header:{height:"50",backgroundColor:"#ecf0f1",padding:"8px 8px",paddingLeft:"50px"},footer:{position:"absolute",bottom:0,width:"98%",padding:"8px",backgroundColor:"#ecf0f1",borderTop:"3px solid #2c3e50",textAlign:"center"},footerText:{fontSize:"14px",color:"#4d4d4d"}},g=function(e){var t=e.children,n=Object(p.a)(e,["children"]),a=void 0===n.showHeader||n.showHeader;return c.a.createElement(d,{logo:u},a&&c.a.createElement(f,null),t,c.a.createElement(E,null))},v={actions:{display:"flex",flexDirection:"row",justifyContent:"center"}},b=function(e){return c.a.createElement(g,{showHeader:!1},c.a.createElement(m.z,null,c.a.createElement(m.F,{height:60}),c.a.createElement(u,{width:200}),c.a.createElement(m.F,{height:30}),c.a.createElement(m.s,{labelStyle:{fontSize:42,fontWeight:"bold"}},"Experience ease of doing business with the government"),c.a.createElement(m.s,{labelStyle:{fontSize:20}},"Over 50 local government units participating all over the Philippines."),c.a.createElement(m.F,{height:40}),c.a.createElement(m.A,{style:v.actions},c.a.createElement(m.d,{style:{paddingLeft:50,paddingRight:50},caption:"Start Here",size:"large",onClick:function(){e.history.push("/partners")}}))))},y=(n(279),n(85)),x=(n(502),m.E.lookup("CloudPartnerService","partner")),O=function(e){var t=e.partners,n=t[0].group;return c.a.createElement("div",null,c.a.createElement(m.H,null,n.title),c.a.createElement(m.u,{items:t},(function(e){var t=e.item;return"0"!==t.isonline?c.a.createElement("div",{key:t.id,style:{paddingBottom:2}},c.a.createElement(m.t,{component:i.b,to:{pathname:"/partner/".concat(n.objid,"_").concat(t.name,"/services"),state:{partner:t}},caption:"".concat(t.title," (").concat(t.id,")")})):c.a.createElement(m.s,{key:t.id,style:{color:"#a9a7a7",paddingTop:0}},"".concat(t.title," (").concat(t.id,")"))})))},w=function(e){var t=e.partners,n=Object(m.Q)(t,"clusterid");return c.a.createElement("div",{className:"PartnerList_group"},Object.keys(n).map((function(e){return c.a.createElement(O,{key:e,partners:n[e]})})))},S=function(e){var t=Object(r.useState)(!0),n=Object(y.a)(t,2),a=n[0],l=n[1],o=Object(r.useState)([]),i=Object(y.a)(o,2),s=i[0],u=i[1];return c.a.useEffect((function(){console.log("LOADING PARTNERS"),l(!0),x.getList((function(e,t){e?console.log("ERROR LOADING PARTNERS",e):(console.log("PARTNERS LOADED SUCCESSFULLY ",t.length),u(t)),l(!1)}))}),[]),c.a.createElement(g,null,c.a.createElement("div",{className:"PartnerList"},c.a.createElement(m.F,{height:20}),a&&c.a.createElement(c.a.Fragment,null,c.a.createElement(m.M,null,"Loading Partner Agencies"),c.a.createElement(m.h,{size:20})),!a&&c.a.createElement(c.a.Fragment,null,c.a.createElement(m.M,null,"Select a Partner Agency"),c.a.createElement(w,{partners:s}))))},j={container:{padding:"4px 50px"},title:{color:"#ddd",paddingLeft:5}},C=function(e){var t=e.partner,n=e.Logo;return c.a.createElement(m.b,null,c.a.createElement(m.A,{style:j.container},c.a.createElement(i.b,{to:{pathname:"/partner/".concat(t.name,"/services"),state:{partner:t}}},c.a.createElement(m.A,{row:!0},c.a.createElement("div",null,n)))))},R=function(e){var t,n=e.children,a=Object(p.a)(e,["children"]);return c.a.createElement(g,{logo:u},c.a.createElement(C,Object.assign({Logo:(t=a.partner,c.a.createElement(m.q,{style:{height:"40px"},src:"/assets/".concat(t.name,".png"),height:"30px"}))},a)),n)},k=n(265),A=n(267),B=[{name:"bpls",title:"Business",services:[{name:"businessbilling",title:"Business Online Billing",component:"BplsBillingWebController"},{name:"newbusiness",title:"Apply New Business",component:"NewBusinessWebController"}]},{name:"rpt",title:"Real Property",services:[{name:"rptbilling",title:"Realty Tax Online Billing",component:"RptBillingWebController"},{name:"rpttaxclearance",title:"Online Realty Tax Clearance",component:"RealtyTaxClearanceWebController"}]}],L=function(e){var t=e.includeservices;if(!t)return[];var n=new RegExp("(".concat(t,")"),"i"),a=e.excludeservices?new RegExp("(".concat(e.excludeservices,")"),"i"):null,r=[].concat(B);return r.forEach((function(e){var t=e.services.filter((function(e){return n.test(e.name)&&(!a||!a.test(e.name))}));e.services=t})),r.filter((function(e){return e.services.length>0}))},N=function(e){var t=e.modules,n=e.onSelect;return c.a.createElement(c.a.Fragment,null,t.map((function(e){return c.a.createElement(m.A,{key:e.name},c.a.createElement(m.H,null,e.title),c.a.createElement(m.u,{items:e.services,style:T.list},(function(t){var a=t.item;return c.a.createElement(m.t,{key:a.name,component:"button",onClick:function(){return n(e,a)}},a.title)})))})))},T={list:{display:"flex",flexDirection:"column",alignItems:"flex-start"},maintenanceContainer:{display:"flex",marginTop:20},maintenanceInfo:{},maintenanceImage:{width:350},maintenanceTitle:{fontSize:"3rem",fontWeight:800}},P=function(e){var t=Object(r.useState)(),n=Object(y.a)(t,2),a=n[0],l=n[1],o=Object(r.useState)([]),i=Object(y.a)(o,2),s=i[0],u=i[1];Object(r.useEffect)((function(){var t,n=e.location.state?e.location.state.partner:null;n?(l(n),u(L(n))):(t=e.location,new Promise((function(e,n){var a=t.pathname.match("/partner/(.*)_(.*)/services");(!a||a.length<3)&&n("Invalid path");var r=a[1],c=a[2];m.E.lookup("CloudPartnerService","partner").findByGroupAndName({groupname:r,name:c},(function(t,a){console.log("partner",a),t?n("Partner ".concat(c," does not exist. ").concat(t)):"0"!==a.isonline?e(a):n("Partner is offline.")}))}))).then((function(e){l(e),u(L(e))})).catch((function(t){return e.history.push("/partners")}))}),[]);return a?c.a.createElement(R,{partner:a,location:e.location,history:e.history},c.a.createElement(m.z,null,c.a.createElement(m.F,{height:20}),s.length>0&&c.a.createElement(c.a.Fragment,null,c.a.createElement(m.M,null,"Select Transaction"),c.a.createElement(m.F,{height:20}),c.a.createElement(N,{modules:s,onSelect:function(t,n){e.history.push({pathname:"/partner/".concat(a.name,"/").concat(t.name,"/").concat(n.name),state:{partner:a,module:t,service:n}})}})),0==s.length&&c.a.createElement("div",{style:T.maintenanceContainer},c.a.createElement("div",{style:T.maintenanceInfo},c.a.createElement("label",{style:T.maintenanceTitle},"Website under maintenance"),c.a.createElement("p",null,"This website is currently undergoing a scheduled maintenance. Will return shortly. Our apologies for the inconvenience.")),c.a.createElement("img",{style:T.maintenanceImage,src:"/assets/filipizen.png"})))):c.a.createElement(g,null,c.a.createElement(m.v,{caption:"Loading partner information",color:"primary"}))},W=function(e){var t=function(e){return e&&e.state?e.state:{}}(Object(s.f)()),n=t.partner,r=(t.module,t.service),l=Object(p.a)(t,["partner","module","service"]);if(!r)return null;var o=function(e){return a[e.component]}(r);return c.a.createElement(R,{partner:n},c.a.createElement(o,Object.assign({},e,{partner:n,service:r},l)))},F=n(81),I=n.n(F),z=n(31),D=[{name:"home",exact:!0,path:"/",component:b},{name:"partners",path:"/partners",component:S},{name:"services",path:"/partner/:partnerId/services",component:P},{name:"service",path:"/partner/:partnerId/:module/:service",component:W},{name:"success",path:"/payment/success",component:function(e){var t=I.a.get("partner");return c.a.createElement(R,{partner:t},c.a.createElement(m.j,{center:!0},c.a.createElement(z.d,Object.assign({onClose:function(){e.history.replace({pathname:"/partner/".concat(t.name,"/services"),state:{partner:t}})}},e))))}},{name:"error",path:"/payment/error",component:function(e){var t=I.a.get("partner");return c.a.createElement(R,{partner:t},c.a.createElement(m.A,null,c.a.createElement(z.c,Object.assign({onClose:function(){e.history.replace({pathname:"/partner/".concat(t.name,"/services"),state:{partner:t}})}},e,{partner:t}))))}},{name:"systools",exact:!0,path:"/admin/systool",component:b}];var H=function(){return c.a.createElement(i.a,null,c.a.createElement(s.c,null,D.map((function(e){return c.a.createElement(s.a,Object.assign({key:e.name},e))}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(H,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[305,1,2]]]);
//# sourceMappingURL=main.b29796f5.chunk.js.map