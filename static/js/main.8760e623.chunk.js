(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{1:function(e,a,t){e.exports={wrapper:"App_wrapper__1miaE",table:"App_table__35ALu",title:"App_title__3P58M",display:"App_display__KIzKo",column:"App_column__3QpHG"}},24:function(e,a,t){e.exports=t(33)},33:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(15),s=t.n(l),c=t(19),i=t(6),m=t(16),o=t(17),u=t(22),d=t(18),h=t(23),p=t(1),N=t.n(p),y=function(e){function a(){var e,t;Object(m.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(t=Object(u.a)(this,(e=Object(d.a)(a)).call.apply(e,[this].concat(r)))).state={result:0,firstNumber:[],plus:!1,minus:!1,multiply:!1,divide:!1,enter:!1},t.arr=[],t.handlePressAnyKey=function(e){var a=e.target.id;t.arr.length<5&&("0"===t.arr[0]?(t.arr=[],t.setState({result:0,enter:!1})):(t.arr.push(a),t.setState({result:t.arr,enter:!1})))},t.handlePlus=function(){t.setState({firstNumber:t.arr,plus:!0}),t.arr=[]},t.handleMinus=function(){t.setState({firstNumber:t.arr,minus:!0}),t.arr=[]},t.handleMultiply=function(){t.setState({firstNumber:t.arr,multiply:!0}),t.arr=[]},t.handleDivide=function(){t.setState({firstNumber:t.arr,divide:!0}),t.arr=[]},t.handleClear=function(){t.arr=[],t.setState({result:0,firstNumber:[],plus:!1,minus:!1,multiply:!1,divide:!1,enter:!1})},t.handleBackspace=function(){var e=t.state.enter;!e&&t.arr.length>1?(t.arr.pop(),t.setState({result:t.arr})):e||1!==t.arr.length||(t.arr=[],t.setState({result:0}))},t.handleEnter=function(){var e=t.state,a=e.result,n=e.firstNumber,r=e.plus,l=e.minus,s=e.multiply,c=e.divide;if(r){var i=Number(n.join(""))+Number(a.join(""));t.setState({result:i,enter:!0})}else if(l){var m=Number(n.join(""))-Number(a.join(""));t.setState({result:m,enter:!0})}else if(s){var o=Number(n.join(""))*Number(a.join(""));t.setState({result:o,enter:!0})}else if(c){var u=Number(n.join(""))/Number(a.join(""));t.setState({result:u,enter:!0})}},t}return Object(h.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){var e=this.state.result;return r.a.createElement("div",{className:N.a.wrapper},r.a.createElement("h3",{className:N.a.title},"Calculator"),r.a.createElement("div",{className:N.a.display},e),r.a.createElement("table",{className:N.a.table},r.a.createElement("tr",{className:N.a.row},r.a.createElement("td",{className:N.a.column,onClick:this.handlePlus},r.a.createElement("span",{className:"material-icons"},"add")),r.a.createElement("td",{className:N.a.column,onClick:this.handleMinus},r.a.createElement("span",{className:"material-icons"},"remove")),r.a.createElement("td",{className:N.a.column,onClick:this.handleMultiply},r.a.createElement("span",{className:"material-icons"},"clear")),r.a.createElement("td",{className:N.a.column,onClick:this.handleDivide},"/")),r.a.createElement("tr",{className:N.a.row},r.a.createElement("td",{className:N.a.column,onClick:this.handlePressAnyKey,id:"7"},"7"),r.a.createElement("td",{className:N.a.column,onClick:this.handlePressAnyKey,id:"8"},"8"),r.a.createElement("td",{className:N.a.column,onClick:this.handlePressAnyKey,id:"9"},"9"),r.a.createElement("td",{className:N.a.column,onClick:this.handleBackspace},r.a.createElement("span",{className:"material-icons"},"keyboard_backspace"))),r.a.createElement("tr",{className:N.a.row},r.a.createElement("td",{className:N.a.column,onClick:this.handlePressAnyKey,id:"4"},"4"),r.a.createElement("td",{className:N.a.column,onClick:this.handlePressAnyKey,id:"5"},"5"),r.a.createElement("td",{className:N.a.column,onClick:this.handlePressAnyKey,id:"6"},"6"),r.a.createElement("td",{className:N.a.column,onClick:this.handleClear},"C")),r.a.createElement("tr",{className:N.a.row},r.a.createElement("td",{className:N.a.column,onClick:this.handlePressAnyKey,id:"1"},"1"),r.a.createElement("td",{className:N.a.column,onClick:this.handlePressAnyKey,id:"2"},"2"),r.a.createElement("td",{className:N.a.column,onClick:this.handlePressAnyKey,id:"3"},"3"),r.a.createElement("td",{className:N.a.column,onClick:this.handleEnter,rowSpan:"2"},"=")),r.a.createElement("tr",{className:N.a.row},r.a.createElement("td",{className:N.a.column,onClick:this.handlePressAnyKey,colSpan:"3",id:"0"},"0"))))}}]),a}(n.Component);s.a.render(r.a.createElement(c.a,{basename:"/"},r.a.createElement(i.a,{component:y})),document.querySelector("#root"))}},[[24,1,2]]]);
//# sourceMappingURL=main.8760e623.chunk.js.map