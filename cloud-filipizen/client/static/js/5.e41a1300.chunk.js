(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[5],{526:function(e,t,n){"use strict";n.r(t),n.d(t,"RealtyTaxClearanceWebController",(function(){return v})),n.d(t,"RptBillingWebController",(function(){return d}));var a=n(0),r=n.n(a),l=n(2),i=(n(116),n(85));function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var c=function(e){var t=e.initialValue,n=e.open,i=e.onAccept,o=e.onCancel,c=Object(a.useState)(void 0===t?{}:t),u=c[0],m=c[1],p=Object(l.jb)(e.initialValue.fromyear,Object(l.db)()+3);return r.a.createElement(l.H,{open:n,caption:"Pay Options",onAccept:function(){i(u)},onCancel:o,maxWidth:100},r.a.createElement(l.v,{context:u,handler:m},r.a.createElement(l.l,{caption:"Year to Bill",name:"billtoyear",items:p}),r.a.createElement(l.Q,{caption:"Quarter to Bill",name:"billtoqtr",items:[1,2,3,4]})))},u=function(e){var t=e.title,n=e.partner,i=e.onCancel,u=e.onSubmit,m=e.error,p=Object(l.mb)()[0],s=p.refno,d=p.txntype,b=p.contact,y=Object(a.useState)(p.bill),f=y[0],E=y[1],v=Object(a.useState)(m),O=v[0],S=v[1],g=Object(a.useState)(!1),h=g[0],x=g[1],j=Object(a.useState)(!1),P=j[0],C=j[1],T=(Object(a.useState)(),Object(a.useState)(),Object(a.useState)()),B=T[0],N=T[1],k=b.email===f.email;return r.a.createElement(l.g,{style:{maxWidth:500}},r.a.createElement(l.ab,null,t),r.a.createElement(l.V,null,"Billing Information"),r.a.createElement(l.S,null),r.a.createElement(l.u,{msg:O}),r.a.createElement(l.v,{context:f,handler:E},r.a.createElement(l.L,{row:!0},r.a.createElement(l.Z,{name:"billno",caption:"Bill No.",readOnly:!0}),r.a.createElement(l.Z,{name:"billdate",caption:"Bill Date",readOnly:!0})),r.a.createElement(l.Z,{name:"tdno",caption:"TD No.",readOnly:!0}),r.a.createElement(l.Z,{name:"fullpin",caption:"PIN",readOnly:!0}),r.a.createElement(l.Z,{name:"taxpayer.name",caption:"Property Owner",readOnly:!0,visibleWhen:k}),r.a.createElement(l.Z,{name:"taxpayer.address",caption:"Owner Address",readOnly:!0,visibleWhen:k}),r.a.createElement(l.Z,{name:"billperiod",caption:"Bill Period",readOnly:!0}),r.a.createElement(l.o,{name:"amount",caption:"Amount Due",readOnly:!0,textAlign:"left"})),r.a.createElement(l.a,{disabled:h},r.a.createElement(l.c,{caption:"Back",action:function(){i(0)}}),r.a.createElement(l.L,{row:!0},r.a.createElement(l.e,{caption:"Pay Option",action:function(){return C(!0)},variant:"outlined"}),r.a.createElement(l.e,{caption:"Confirm Payment",action:function(){var e=o({},f,{barcode:B}),t=e.items;delete e.items,u({refno:s,txntype:d,origin:"filipizen",orgcode:n.id,billtoyear:f.billtoyear,billtoqtr:f.billtoqtr,paidby:f.paidby,paidbyaddress:f.paidbyaddress,amount:f.amount,particulars:"Real Property TD No. "+f.tdno+" "+f.billperiod,items:t,info:{data:e}})},disableWhen:0===f.amount}))),r.a.createElement(c,{initialValue:f&&{billtoyear:f.billtoyear,billtoqtr:f.billtoqtr,fromyear:f.fromyear},open:P,onAccept:function(e){var t;C(!1),void 0===(t=e)&&(t={}),x(!0),S(null),function(e){void 0===e&&(e={});try{return Promise.resolve(l.R.lookupAsync(n.id+":OnlineLandTaxBillingService","rpt")).then((function(t){var n=o({txntype:d,refno:s},e);return Promise.resolve(t.invoke("getBilling",n))}))}catch(e){return Promise.reject(e)}}(t).then((function(e){E(e.info),N(e.info.billno),x(!1)})).catch((function(e){S(e.toString()),x(!1)}))},onCancel:function(){return C(!1)}}))},m={txntype:"rptcol",refno:null,bill:{},contact:{}},p=function(e,t){switch(t.type){case"SET_BILL":return e.refno=t.refno,void(e.bill=t.bill);case"SET_CONTACT":return void(e.contact=t.contact)}},s=[{step:1,name:"verification",caption:"Verification",Component:i.a},{step:2,name:"initial",caption:"Initial Information",Component:function(e){var t=e.title,n=e.partner,i=e.moveNextStep,c=e.movePrevStep,u=Object(l.mb)(),m=u[1],p=u[0].txntype,s=(new Date).getFullYear(),d=Object(a.useState)(),b=d[0],y=d[1],f=Object(a.useState)(!1),E=f[0],v=f[1],O=Object(a.useState)(),S=O[0],g=O[1],h=Object(a.useState)(s+1),x=h[0],j=h[1],P=Object(a.useState)("initial"),C=P[0],T=P[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement(l.g,null,r.a.createElement(l.ab,null,t),r.a.createElement(l.V,null,"Initial Information"),r.a.createElement(l.S,null),r.a.createElement(l.u,{msg:b}),r.a.createElement(l.L,{visibleWhen:"initial"===C},r.a.createElement(l.Z,{caption:"Tax Declaration No.",name:"refno",value:S,onChange:g,readOnly:E,autoFocus:!0})),r.a.createElement(l.L,{visibleWhen:"initial-advance"===C},r.a.createElement("p",null,"The associated ledger is fully paid for the current year.",r.a.createElement("br",null),"To pay in advance, specify the year and click Next button."),r.a.createElement(l.S,null),r.a.createElement(l.L,null,r.a.createElement(l.Z,{caption:"Tax Declaration No.",name:"refno",value:S,onChange:g,readOnly:!0}),r.a.createElement(l.y,{caption:"Advance Year to Pay",name:"billtoyear",value:x,onChange:j,thousandSeparator:!1,autoFocus:!0}))),r.a.createElement(l.a,null,r.a.createElement(l.c,{caption:"Back",variant:"text",action:c}),r.a.createElement(l.e,{caption:"Next",action:function(){"initial-advance"===C&&x<=s?y("Advance year to pay should be greater than "+s):(v(!0),y(null),function(e){void 0===e&&(e={});try{return Promise.resolve(l.R.lookupAsync(n.id+":OnlineLandTaxBillingService","rpt")).then((function(t){var n=o({txntype:p,refno:S},e);return"initial-advance"===C&&(n.billtoyear=x),Promise.resolve(t.invoke("getBilling",n))}))}catch(e){return Promise.reject(e)}}().then((function(e){m({type:"SET_BILL",refno:S,bill:e.info}),i()})).catch((function(e){/unpaid|full/gi.test(e)?T("initial-advance"):y(e.toString()),v(!1)})))},loading:E,disabled:E}))))}},{step:3,name:"payment",caption:"Payment",Component:function(e){var t=Object(l.mb)();return r.a.createElement(i.c,o({module:{title:"Realty Tax Online Billing",component:u}},e,{initialContact:t[0].contact,initialStep:1,cancelPayment:e.cancelPayment}))}}],d=function(e){var t=e.partner,n=e.service,i=e.location,c=e.history,u=e.initialStep,d=Object(a.useState)(void 0===u?0:u),b=d[0],y=d[1],f=s[b];return r.a.createElement(l.T,{initialState:m,reducer:p},r.a.createElement(l.J,null,r.a.createElement(l.m,{center:!0},r.a.createElement(f.Component,o({page:f},{partner:t,service:n,location:i,history:c,moveNextStep:function(){y((function(e){return e+1}))},movePrevStep:function(){0===b?c.goBack():y((function(e){return e-1}))},cancelPayment:function(){y(1)},title:"Realty Tax Online Billing"})))))},b=function(e){var t=e.title,n=e.partner,i=e.onCancel,c=e.onSubmit,u=e.error,m=Object(l.mb)()[0],p=m.refno,s=m.txntype,d=Object(a.useState)(m.bill),b=d[0],y=d[1],f=Object(a.useState)(u)[0],E=Object(a.useState)(!1)[0],v=(Object(a.useState)(!1),Object(a.useState)(),Object(a.useState)(),Object(a.useState)()[0]);return r.a.createElement(l.g,{style:{maxWidth:500}},r.a.createElement(l.ab,null,t),r.a.createElement(l.V,null,"Billing Information"),r.a.createElement(l.S,null),r.a.createElement(l.u,{msg:f}),r.a.createElement(l.v,{context:b,handler:y},r.a.createElement(l.Z,{name:"tdno",caption:"TD No.",readOnly:!0}),r.a.createElement(l.Z,{name:"pin",caption:"PIN",readOnly:!0}),r.a.createElement(l.Z,{name:"owner.name",caption:"Property Owner",readOnly:!0}),r.a.createElement(l.Z,{name:"owner.address",caption:"Owner Address",readOnly:!0}),r.a.createElement(l.Z,{name:"purpose",caption:"Purpose",readOnly:!0}),r.a.createElement(l.S,null),r.a.createElement(l.o,{name:"amount",caption:"Amount Due",readOnly:!0,textAlign:"left"})),r.a.createElement(l.a,{disabled:E},r.a.createElement(l.c,{caption:"Back",action:function(){i(0)}}),r.a.createElement(l.e,{caption:"Confirm Payment",action:function(){delete o({},b,{barcode:v}).items,c({refno:p,txntype:s,origin:"filipizen",orgcode:n.id,paidby:b.paidby,paidbyaddress:b.paidbyaddress,amount:b.amount,particulars:"Realty Tax Clearance for TD No. "+b.tdno,items:b.billitems,info:{data:b}})},disableWhen:0===b.amount})))},y={txntype:"rpttaxclearance",refno:null,bill:{},contact:{}},f=function(e,t){switch(t.type){case"SET_BILL":return e.refno=t.refno,void(e.bill=t.bill);case"SET_CONTACT":return void(e.contact=t.contact)}},E=[{step:1,name:"verification",caption:"Verification",Component:i.a},{step:2,name:"initial",caption:"Initial Information",Component:function(e){var t=e.title,n=e.partner,i=e.moveNextStep,c=e.movePrevStep,u=Object(l.mb)(),m=u[1],p=u[0].txntype,s=Object(a.useState)(),d=s[0],b=s[1],y=Object(a.useState)({}),f=y[0],E=y[1],v=Object(a.useState)(!1),O=v[0],S=v[1],g=Object(a.useState)(),h=g[0],x=g[1],j=Object(a.useState)(),P=j[0],C=j[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement(l.g,null,r.a.createElement(l.ab,null,t),r.a.createElement(l.V,null,"Initial Information"),r.a.createElement(l.S,null),r.a.createElement(l.u,{msg:d}),r.a.createElement(l.Z,{caption:"Tax Declaration No.",name:"refno",value:h,onChange:x,readOnly:O,autoFocus:!0,error:f.refno,helperText:f.refno}),r.a.createElement(l.Z,{caption:"Purpose",name:"purpose",value:P,onChange:C,readOnly:O,error:f.purpose,helperText:f.purpose}),r.a.createElement(l.a,null,r.a.createElement(l.c,{caption:"Back",variant:"text",action:c}),r.a.createElement(l.e,{caption:"Next",action:function(){h||E(o({},f,{refno:"Tax Declaration No. is required."})),P||E(o({},f,{purpose:"Purpose is required."})),0===Object.keys(f).length&&(S(!0),b(null),function(){try{return Promise.resolve(l.R.lookupAsync(n.id+":OnlineRealtyTaxClearanceService","rpt")).then((function(e){return Promise.resolve(e.invoke("getBilling",{txntype:p,refno:h,purpose:P}))}))}catch(e){return Promise.reject(e)}}().then((function(e){m({type:"SET_BILL",refno:h,bill:e}),i()})).catch((function(e){b(e.toString()),S(!1)})))},loading:O,disabled:O}))))}},{step:3,name:"payment",caption:"Payment",Component:function(e){var t=Object(l.mb)();return r.a.createElement(i.c,o({module:{title:"Online Realty Tax Clearance",component:b}},e,{initialContact:t[0].contact,initialStep:1,cancelPayment:e.cancelPayment}))}}],v=function(e){var t=e.partner,n=e.service,i=e.location,c=e.history,u=e.initialStep,m=Object(a.useState)(void 0===u?0:u),p=m[0],s=m[1],d=E[p];return r.a.createElement(l.T,{initialState:y,reducer:f},r.a.createElement(l.J,null,r.a.createElement(l.m,{center:!0},r.a.createElement(d.Component,o({page:d},{partner:t,service:n,location:i,history:c,moveNextStep:function(){s((function(e){return e+1}))},movePrevStep:function(){0===p?c.goBack():s((function(e){return e-1}))},cancelPayment:function(){s(1)},title:"Online Realty Tax Clearance"})))))}}}]);