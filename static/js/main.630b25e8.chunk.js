(this["webpackJsonpreact-forms"]=this["webpackJsonpreact-forms"]||[]).push([[0],{23:function(e){e.exports=JSON.parse('{"india":"INR","usa":"USD","britain":"Euro"}')},34:function(e,t,a){},35:function(e,t,a){},36:function(e,t,a){"use strict";a.r(t);var c=a(1),n=a.n(c),r=a(21),s=a.n(r),i=a(3),l=a(6),o=a(7),j=a(9),b=a(8),h=a(5),d=a(2),u=a(0),m=function(e){Object(j.a)(a,e);var t=Object(b.a)(a);function a(e){var c;return Object(l.a)(this,a),(c=t.call(this,e)).change=function(e){c.setState({address:e.target.value})},c.state={address:""},c}return Object(o.a)(a,[{key:"componentWillUnmount",value:function(){this.props.addDetails(this.state)}},{key:"render",value:function(){return Object(u.jsxs)("div",{className:"container",children:[Object(u.jsx)("h1",{children:"Address"}),Object(u.jsxs)("form",{children:[Object(u.jsx)("label",{children:"Address"}),Object(u.jsx)("textarea",{name:"address",cols:"50",rows:"5",placeholder:"Address",value:this.state.address,onChange:this.change})]}),Object(u.jsxs)("div",{className:"navLinks",children:[Object(u.jsx)(h.b,{to:"/bank",children:"Previous"}),Object(u.jsx)(h.b,{to:"/details",children:"Submit"})]})]})}}]),a}(c.Component);a(34);function O(e){return Object(u.jsxs)("div",{className:"details-container",children:[Object(u.jsx)("h1",{children:"Verify All Details"}),Object(u.jsxs)("div",{className:"details",children:[Object(u.jsx)("p",{children:"Name"}),Object(u.jsxs)("p",{children:[e.firstName," ",e.lastName]}),Object(u.jsx)("p",{children:"Email"}),Object(u.jsx)("p",{children:e.number}),Object(u.jsx)("p",{children:"Country"}),Object(u.jsx)("p",{children:e.country.toUpperCase()}),Object(u.jsx)("p",{children:"Currency"}),Object(u.jsx)("p",{children:e.currency}),Object(u.jsx)("p",{children:"Bank Details"}),Object(u.jsx)("p",{children:e.bankDetails}),Object(u.jsx)("p",{children:"ACH routing Number"}),Object(u.jsx)("p",{children:e.ach}),Object(u.jsx)("p",{children:"Account Number"}),Object(u.jsx)("p",{children:e.accNumber}),Object(u.jsx)("p",{children:"Account Type"}),Object(u.jsx)("p",{children:e.accType})]}),Object(u.jsx)(h.b,{to:"/address",className:"prev",children:"Previous"})]})}var p=a(13);function x(e){return Object(u.jsxs)("form",{children:[Object(u.jsxs)("label",{children:["Country",Object(u.jsxs)("select",{name:"country",value:e.country,onChange:e.changeForm,children:[Object(u.jsx)("option",{value:"select",children:"Select Country"}),Object(u.jsx)("option",{value:"usa",children:"USA"}),Object(u.jsx)("option",{value:"india",children:"India"}),Object(u.jsx)("option",{value:"britain",children:"Britain"})]})]}),Object(u.jsxs)("label",{children:["Currency",Object(u.jsx)("input",{type:"text",value:e.currency,placeholder:"Currency",name:"currency",readOnly:!0})]}),Object(u.jsxs)("label",{children:["Bank Details Format",Object(u.jsxs)("div",{children:[Object(u.jsx)("input",{type:"radio",id:"local",name:"bankDetails",value:"local bank details",onChange:e.changeForm}),"Local bank Details"]}),Object(u.jsxs)("div",{children:[Object(u.jsx)("input",{type:"radio",id:"swift",name:"bankDetails",value:"swift code",onChange:e.changeForm}),"Swift code"]})]}),Object(u.jsxs)("label",{children:["ACH routing Number",Object(u.jsx)("input",{type:"text",name:"ach",value:e.ach,placeholder:"ACH routing Number",onChange:e.changeForm})]}),Object(u.jsxs)("label",{children:["Account Number",Object(u.jsx)("input",{type:"text",name:"accNumber",value:e.accNumber,placeholder:"Account Number",onChange:e.changeForm})]}),Object(u.jsxs)("label",{children:["Account Type",Object(u.jsxs)("select",{name:"accType",value:e.accType,onChange:e.changeForm,children:[Object(u.jsx)("option",{value:"select",children:"Select account type"}),Object(u.jsx)("option",{value:"savings",children:"Savings"}),Object(u.jsx)("option",{value:"current",children:"Current"})]})]})]})}var v=a(23),f=function(e){Object(j.a)(a,e);var t=Object(b.a)(a);function a(e){var c;return Object(l.a)(this,a),(c=t.call(this,e)).changeForm=function(e){var t=e.target,a=t.name,n=t.value;"country"===a?c.setState((function(e){var t;return{data:Object(i.a)(Object(i.a)({},e.data),{},(t={},Object(p.a)(t,a,n),Object(p.a)(t,"currency",v[n]),t))}})):c.setState((function(e){return{data:Object(i.a)(Object(i.a)({},e.data),{},Object(p.a)({},a,n))}}))},c.state={data:{country:"select",currency:"",bankDetails:"",ach:"",accNumber:"",accType:"select"}},c}return Object(o.a)(a,[{key:"componentWillUnmount",value:function(){this.props.addDetails(this.state.data)}},{key:"render",value:function(){return Object(u.jsxs)("div",{className:"container",children:[Object(u.jsx)("h1",{children:"Bank Details"}),Object(u.jsx)(x,Object(i.a)(Object(i.a)({},this.state.data),{},{changeForm:this.changeForm})),Object(u.jsxs)("div",{className:"navLinks",children:[Object(u.jsx)(h.b,{to:"/",children:"Previous"}),Object(u.jsx)(h.b,{to:"/address",children:"Next"})]})]})}}]),a}(c.Component),N=function(e){Object(j.a)(a,e);var t=Object(b.a)(a);function a(e){var c;return Object(l.a)(this,a),(c=t.call(this,e)).state={},c}return Object(o.a)(a,[{key:"render",value:function(){return Object(u.jsxs)("form",{className:"personal-form",children:[Object(u.jsxs)("label",{children:["Business Name",Object(u.jsx)("input",{type:"text",placeholder:"Business Name",name:"firstName",value:this.state.firstName,onChange:this.props.changeForm})]}),Object(u.jsx)("p",{className:"error",children:this.props.error.firstName}),Object(u.jsxs)("label",{children:["Email",Object(u.jsx)("input",{type:"email",placeholder:"Email",name:"email",value:this.state.email,onChange:this.props.changeForm})]}),Object(u.jsx)("p",{className:"error",children:this.props.error.email}),Object(u.jsxs)("label",{children:["Phone No",Object(u.jsx)("input",{type:"text",placeholder:"Phone Number",name:"number",value:this.state.number,onChange:this.props.changeForm})]}),Object(u.jsx)("p",{className:"error",children:this.props.error.number})]})}}]),a}(c.Component),y=function(e){Object(j.a)(a,e);var t=Object(b.a)(a);function a(e){var c;return Object(l.a)(this,a),(c=t.call(this,e)).state={},c}return Object(o.a)(a,[{key:"render",value:function(){return Object(u.jsxs)("form",{className:"personal-form",children:[Object(u.jsxs)("label",{children:["First Name",Object(u.jsx)("input",{type:"text",placeholder:"First Name",name:"firstName",value:this.props.firstName,onChange:this.props.changeForm,autoFocus:!0})]}),Object(u.jsx)("p",{className:"error",children:this.props.error.firstName}),Object(u.jsxs)("label",{children:["Last Name",Object(u.jsx)("input",{type:"text",placeholder:"Last Name",name:"lastName",value:this.state.lastName,onChange:this.props.changeForm})]}),Object(u.jsx)("p",{className:"error",children:this.props.error.lastName}),Object(u.jsxs)("label",{children:["Email",Object(u.jsx)("input",{type:"email",placeholder:"Email",name:"email",value:this.state.email,onChange:this.props.changeForm})]}),Object(u.jsx)("p",{className:"error",children:this.props.error.email}),Object(u.jsxs)("label",{children:["Phone No ",Object(u.jsx)("input",{type:"text",placeholder:"Phone Number",name:"number",value:this.state.number,onChange:this.props.changeForm})]}),Object(u.jsx)("p",{className:"error",children:this.props.error.number})]})}}]),a}(n.a.Component),g=function(e){Object(j.a)(a,e);var t=Object(b.a)(a);function a(e){var c;return Object(l.a)(this,a),(c=t.call(this,e)).change=function(){c.setState((function(e){return{option:"personal"===e.option?"bussiness":"personal",form:{firstName:"",lastName:"",email:"",number:""}}}))},c.changeForm=function(e){var t=e.target,a=t.name,n=t.value,r="";"firstName"===a||"lastName"===a?c.validateName(n)&&(r="Only Characters Allowed"):"email"===a?c.validateEmail(n)&&(r="Please enter valid email"):"number"===a&&c.validateNumber(n)&&(r="Number must contain only 10 digits"),c.setState((function(e){return{form:Object(i.a)(Object(i.a)({},e.form),{},Object(p.a)({},a,n)),error:Object(i.a)(Object(i.a)({},e.error),{},Object(p.a)({},a,r))}})),c.checkForActivate()},c.checkForActivate=function(){var e=c.state.form;(e.firstName||e.lastName)&&e.email&&e.number&&c.setState({activateNext:!0})},c.validateName=function(e){return/[^a-zA-Z]/.test(e)},c.validateEmail=function(e){return!/([a-zA-Z]+)([\d]*)@([a-z]+)\.([a-z]+)/.test(e)},c.validateNumber=function(e){return!/^([0-9]{10})$/.test(e)},c.state={option:"personal",form:{firstName:"",lastName:"",email:"",number:""},error:{firstName:"",lastName:"",email:"",number:""},activateNext:!1},c}return Object(o.a)(a,[{key:"componentWillUnmount",value:function(){this.props.addDetails(this.state.form)}},{key:"render",value:function(){return Object(u.jsxs)("div",{className:"container beneficiary",children:[Object(u.jsx)("h1",{children:"Beneficiary"}),Object(u.jsxs)("div",{className:"choose",children:[Object(u.jsx)("p",{className:"personal"===this.state.option?"active type":"type",onClick:this.change,children:"Personal"}),Object(u.jsx)("p",{className:"bussiness"===this.state.option?"active type":"type",onClick:this.change,children:"Business"})]}),"personal"===this.state.option?Object(u.jsx)(y,Object(i.a)(Object(i.a)({},this.state.form),{},{changeForm:this.changeForm,error:this.state.error})):Object(u.jsx)(N,Object(i.a)(Object(i.a)({},this.state.form),{},{changeForm:this.changeForm,error:this.state.error})),Object(u.jsx)("div",{className:"navLinks",children:Object(u.jsx)(h.b,{to:this.state.activateNext?"/bank":"",children:"Next"})})]})}}]),a}(c.Component),C=(a(35),function(e){Object(j.a)(a,e);var t=Object(b.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return Object(u.jsx)("div",{children:Object(u.jsx)("div",{className:"header-container",children:Object(u.jsxs)("div",{className:"header-container",children:[Object(u.jsx)("button",{children:Object(u.jsx)(h.b,{to:"/",children:"1"})}),Object(u.jsx)("button",{children:Object(u.jsx)(h.b,{to:"/Bank/",children:"2"})}),Object(u.jsx)("button",{children:Object(u.jsx)(h.b,{to:"/Address",children:"3"})})]})})})}}]),a}(c.Component)),k=function(e){Object(j.a)(a,e);var t=Object(b.a)(a);function a(){var e;return Object(l.a)(this,a),(e=t.call(this)).addDetails=function(t){e.setState(Object(i.a)({},t))},e.state={},e}return Object(o.a)(a,[{key:"render",value:function(){return Object(u.jsxs)(h.a,{children:[Object(u.jsx)(C,{}),Object(u.jsxs)(d.c,{children:[Object(u.jsx)(d.a,{exact:!0,path:"/",children:Object(u.jsx)(g,{addDetails:this.addDetails})}),Object(u.jsx)(d.a,{path:"/benificiary",children:Object(u.jsx)(g,{addDetails:this.addDetails})}),Object(u.jsx)(d.a,{path:"/bank",children:Object(u.jsx)(f,{addDetails:this.addDetails})}),Object(u.jsx)(d.a,{path:"/address",children:Object(u.jsx)(m,{addDetails:this.addDetails})}),Object(u.jsx)(d.a,{path:"/details",children:Object(u.jsx)(O,Object(i.a)({},this.state))})]})]})}}]),a}(c.Component);s.a.render(Object(u.jsx)(k,{}),document.querySelector("#root"))}},[[36,1,2]]]);
//# sourceMappingURL=main.630b25e8.chunk.js.map