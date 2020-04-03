(this.webpackJsonpcompmad_v1=this.webpackJsonpcompmad_v1||[]).push([[0],{270:function(e,t,n){e.exports=n(450)},450:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),r=n(12),o=n.n(r),c=n(241),i=n(72),s=n(67),u=n(485),m=n(33),d=n(98),p=n(99),v=n(488),f=n(480);function h(){var e=Object(d.a)(["\n    text-decoration: none;\n\n    &:focus, &:hover, &:visited, &:link, &:active {\n        text-decoration: none;\n    }\n"]);return h=function(){return e},e}var b=Object(p.a)(i.b)(h()),g=function(){return l.a.createElement(v.a,{position:"static",style:{background:"#2E3B55"}},l.a.createElement(f.a,{style:{color:"white"}},l.a.createElement(b,{style:{marginRight:200,fontSize:"2.0em"},to:"/"},"COMPMAD - v0.01"),l.a.createElement(b,{style:{marginRight:16},to:"/analysis"},"Analytics")))},y=n(51),E=n(52),x=n(54),O=n(55),w=n(249),C=n(258),j=n(256),k=n(20);function M(e){var t=JSON.parse(e);return[t.slice(0,1),t.slice(1)]}var L=l.a.createContext(),D=function(e){Object(O.a)(n,e);var t=Object(x.a)(n);function n(){var e;Object(y.a)(this,n);for(var a=arguments.length,l=new Array(a),r=0;r<a;r++)l[r]=arguments[r];return(e=t.call.apply(t,[this].concat(l))).state={columns:[new k.ColumnModel("Formula"),new k.ColumnModel("Energy without entropy per atom (eV)"),new k.ColumnModel("Total energy per atom (eV)"),new k.ColumnModel("Energy sigma->0 per atom (eV)"),new k.ColumnModel("HOMO (eV)"),new k.ColumnModel("LUMO (eV)"),new k.ColumnModel("Band gap (eV)"),new k.ColumnModel("xc-functional"),new k.ColumnModel("file"),new k.ColumnModel("info"),new k.ColumnModel("Predicted oxidation number")],globalList:[]},e.setGlobalList=function(t){e.setState((function(e){return{globalList:t}}))},e.setColumns=function(e){var t,n=e[0].HEADERS.split(","),a=[],l=Object(j.a)(n);try{for(l.s();!(t=l.n()).done;){var r=t.value;a.push(new k.ColumnModel(String(r)))}}catch(o){l.e(o)}finally{l.f()}},e.handleClick=function(t){var n=document.createElement("input");n.type="file",n.onchange=function(t){var n=t.target.files[0],a=new FileReader;a.readAsText(n,"UTF-8"),a.onload=function(t){t.preventDefault();var n=M(t.target.result),a=Object(C.a)(n,2),l=a[0],r=a[1];e.setColumns(l),e.setGlobalList(r)}},n.click()},e}return Object(E.a)(n,[{key:"render",value:function(){var e=this.props.children,t=this.state,n=t.globalList,a=t.columns,r=this.setGlobalList,o=this.setColumns,c=this.handleClick;return l.a.createElement(L.Provider,{value:{globalList:n,columns:a,setGlobalList:r,setColumns:o,handleClick:c}},e)}}]),n}(l.a.Component),T=L,S=n(484),A=function(e){Object(O.a)(n,e);var t=Object(x.a)(n);function n(){return Object(y.a)(this,n),t.apply(this,arguments)}return Object(E.a)(n,[{key:"render",value:function(){var e=this.context,t=e.globalList,n=e.columns;return l.a.createElement(a.Fragment,null,l.a.createElement(S.a,{variant:"subtitle1",align:"center"},"Data view"),l.a.createElement(w.DataGrid,{columns:n,dataSource:t,gridName:"Grid"}))}}]),n}(l.a.Component);A.contextType=T;var I=A;var G=function(e){Object(O.a)(n,e);var t=Object(x.a)(n);function n(){return Object(y.a)(this,n),t.apply(this,arguments)}return Object(E.a)(n,[{key:"render",value:function(){var e=this.context;e.globalList,e.columns;return l.a.createElement("div",null,l.a.createElement(i.b,{style:{marginRight:16},color:"secondary",to:"/analysis/pdf"},"PDF"))}}]),n}(l.a.Component);G.contextType=T;var F=function(e){Object(O.a)(n,e);var t=Object(x.a)(n);function n(){return Object(y.a)(this,n),t.apply(this,arguments)}return Object(E.a)(n,[{key:"render",value:function(){var e=this.context;e.globalList,e.columns;return l.a.createElement("div",null,l.a.createElement(i.b,{style:{marginRight:16},color:"secondary"},"PDFsdafv"))}}]),n}(l.a.Component);F.contextType=T;var R=n(102),V=n(168);function P(){var e=Object(d.a)(["\n  display: inline-block;\n  background: red;\n  padding: 8px 16px;\n  margin-right: 16px;\n"]);return P=function(){return e},e}function B(){var e=Object(d.a)(["\n  overflow-x: auto;\n  list-style: none;\n  white-space: nowrap;\n  padding: 0;\n"]);return B=function(){return e},e}var J={borderTop:"1px solid #E7E7E7",textAlign:"center",padding:"10px",position:"fixed",left:"0",bottom:"0",height:"60px",width:"100%"},N={display:"block",padding:"10px",height:"60px",width:"100%"},H=(p.a.ul(B()),p.a.li(P()),function(e){Object(O.a)(n,e);var t=Object(x.a)(n);function n(e){var a;return Object(y.a)(this,n),(a=t.call(this,e)).localData=[{OrderID:1,CustomerName:"TT",ShippedDate:"2016-03-19T19:00:00",ShipperCity:"Guadalajara, JAL, Mexico",Amount:300}],a}return Object(E.a)(n,[{key:"render",value:function(){var e=this.context.handleClick;return l.a.createElement("div",null,l.a.createElement("div",{style:N}),l.a.createElement("div",{style:J},l.a.createElement(R.a,{style:{display:"flex",flexDirection:"row"}},l.a.createElement(V.a,{type:"file",style:{padding:"8px 16px"},variant:"dark",onClick:e},"Select file"),l.a.createElement(R.a.Item,{style:{flex:1}},"I1"),l.a.createElement(R.a.Item,{style:{flex:1}},"I2"),l.a.createElement(R.a.Item,{style:{flex:1}},"I3"))))}}]),n}(l.a.Component));H.contextType=T;var U=H,W=Object(m.a)((function(e){return{main:Object(c.a)({padding:e.spacing(3)},e.breakpoints.down("xs"),{padding:e.spacing(2)})}}))((function(e){var t=e.classes;return l.a.createElement(i.a,null,l.a.createElement(u.a,null),l.a.createElement(D,null,l.a.createElement(g,null),l.a.createElement("main",{className:t.main},l.a.createElement(s.c,null,l.a.createElement(s.a,{exact:!0,path:"/",component:I}),l.a.createElement(s.a,{exact:!0,path:"/analysis",component:G}),l.a.createElement(s.a,{exact:!0,path:"/analysis/pdf",component:F}))),l.a.createElement(U,null)))}));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(W,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[270,1,2]]]);
//# sourceMappingURL=main.328a2bd1.chunk.js.map