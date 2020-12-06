(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[6],{527:function(e,t,n){"use strict";n.r(t),n.d(t,"WaterworksBillingWebController",(function(){return d}));var a=n(0),r=n.n(a),i=n(2),o=(n(116),n(85));function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var c=function(e){var t=e.title,n=e.partner,o=e.onCancel,l=e.onSubmit,c=e.error,u=Object(i.mb)()[0],s=u.refno,p=u.txntype,d=Object(a.useState)(u.bill),E=d[0],f=d[1],y=Object(a.useState)(c)[0],b=Object(a.useState)(!1)[0];return r.a.createElement(i.g,{style:{maxWidth:500}},r.a.createElement(i.ab,null,t),r.a.createElement(i.V,null,"Billing Information"),r.a.createElement(i.S,null),r.a.createElement(i.u,{msg:y}),r.a.createElement(i.v,{context:E,handler:f},r.a.createElement(i.Z,{name:"acctno",caption:"Account No.",readOnly:!0}),r.a.createElement(i.Z,{name:"acctname",caption:"Account Name",readOnly:!0}),r.a.createElement(i.Z,{name:"address.text",caption:"Address",readOnly:!0}),r.a.createElement(i.Z,{name:"classificationid",caption:"Classification",readOnly:!0}),r.a.createElement(i.Z,{name:"billno",caption:"Last Bill Period",readOnly:!0}),r.a.createElement(i.L,{row:!0},r.a.createElement(i.Z,{name:"monthname",caption:"Bill Month",readOnly:!0}),r.a.createElement(i.Z,{name:"year",caption:"Bill Year",readOnly:!0})),r.a.createElement(i.L,{row:!0},r.a.createElement(i.Z,{name:"meter.size.title",caption:"Meter Size",readOnly:!0}),r.a.createElement(i.Z,{name:"consumption.prev.reading",caption:"Previous Reading",readOnly:!0}),r.a.createElement(i.Z,{name:"consumption.reading",caption:"Current Reading",readOnly:!0}),r.a.createElement(i.Z,{name:"consumption.volume",caption:"Consumption",readOnly:!0})),r.a.createElement(i.S,null),r.a.createElement("h4",null,"Bill Details"),r.a.createElement(i.X,{items:E.items,showPagination:!1},r.a.createElement(i.Y,{expr:"item.title",caption:"Account"}),r.a.createElement(i.Y,{expr:"remarks",caption:"Particulars"}),r.a.createElement(i.Y,{expr:function(e){return Object(i.cb)(e.amount)},caption:"Amount Due",type:"decimal",align:"right"})),r.a.createElement(i.L,{style:m.totalContainer},r.a.createElement("h4",{style:m.total},"TOTAL"),r.a.createElement("h4",{style:m.amount},Object(i.cb)(E.amount)))),r.a.createElement(i.a,{disabled:b},r.a.createElement(i.c,{caption:"Back",action:function(){o(0)}}),r.a.createElement(i.e,{caption:"Confirm Payment",action:function(){l({refno:s,txntype:p,origin:"filipizen",orgcode:n.id,billtoyear:E.billtoyear,billtoqtr:E.billtoqtr,paidby:E.paidby,paidbyaddress:E.paidbyaddress,amount:E.amount,info:{data:E},particulars:"Wateworks Account No. "+E.acctno})},disableWhen:0===E.amount})))},m={subtitle:{fontSize:16,fontWeight:400,opacity:.8,color:"green"},totalContainer:{display:"flex",justifyContent:"flex-end",marginTop:-10},total:{fontWeight:800,marginRight:40},amount:{marginRight:20}},u={txntype:"waterworks",refno:null,bill:{},contact:{}},s=function(e,t){switch(t.type){case"SET_BILL":return e.refno=t.refno,void(e.bill=t.bill);case"SET_CONTACT":return void(e.contact=t.contact)}},p=[{step:1,name:"verification",caption:"Verification",Component:o.a},{step:2,name:"initial",caption:"Initial Information",Component:function(e){var t=e.title,n=e.partner,o=e.moveNextStep,c=e.movePrevStep,m=Object(i.mb)(),u=m[1],s=m[0].txntype,p=Object(a.useState)(),d=p[0],E=p[1],f=Object(a.useState)(!1),y=f[0],b=f[1],g=Object(a.useState)(),v=g[0],O=g[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement(i.g,null,r.a.createElement(i.ab,null,t),r.a.createElement(i.V,null,"Initial Information"),r.a.createElement(i.S,null),r.a.createElement(i.u,{msg:d}),r.a.createElement(i.Z,{caption:"Account No.",name:"refno",value:v,onChange:O,readOnly:y,autoFocus:!0}),r.a.createElement(i.a,null,r.a.createElement(i.c,{caption:"Back",variant:"text",action:c}),r.a.createElement(i.e,{caption:"Next",action:function(e){void 0===e&&(e={}),b(!0),E(null),function(e){void 0===e&&(e={});try{return Promise.resolve(i.R.lookupAsync(n.id+":OnlineWaterworksBillingService","waterworks")).then((function(t){var n=l({txntype:s,refno:v},e);return Promise.resolve(t.invoke("getBilling",n))}))}catch(e){return Promise.reject(e)}}(e).then((function(e){u({type:"SET_BILL",refno:v,bill:e}),o()})).catch((function(e){E(e.toString()),b(!1)}))},loading:y,disabled:y}))))}},{step:3,name:"payment",caption:"Payment",Component:function(e){var t=Object(i.mb)();return r.a.createElement(o.c,l({module:{title:"Waterworks Online Billing",component:c}},e,{initialContact:t[0].contact,initialStep:1,cancelPayment:e.cancelPayment}))}}],d=function(e){var t=e.partner,n=e.service,o=e.location,c=e.history,m=e.initialStep,d=Object(a.useState)(void 0===m?0:m),E=d[0],f=d[1],y=p[E];return r.a.createElement(i.T,{initialState:u,reducer:s},r.a.createElement(i.J,null,r.a.createElement(i.m,{center:!0},r.a.createElement(y.Component,l({page:y},{partner:t,service:n,location:o,history:c,moveNextStep:function(){f((function(e){return e+1}))},movePrevStep:function(){0===E?c.goBack():f((function(e){return e-1}))},cancelPayment:function(){f(1)},title:"Waterworks Online Billing"})))))}}}]);