(this["webpackJsonpburger-builder"]=this["webpackJsonpburger-builder"]||[]).push([[0],[,,,,,,function(e,t,a){e.exports={BreadBottom:"BurgerIngredient_BreadBottom__1rU0d",BreadTop:"BurgerIngredient_BreadTop__amcET",Seeds1:"BurgerIngredient_Seeds1__1RAxE",Seeds2:"BurgerIngredient_Seeds2__rGKIh",Meat:"BurgerIngredient_Meat__1GMfi",Cheese:"BurgerIngredient_Cheese__Tt2Tl",Salad:"BurgerIngredient_Salad__3-j9d",Bacon:"BurgerIngredient_Bacon__2MlNd"}},function(e,t,a){e.exports={SideDrawer:"SideDrawer_SideDrawer__2heLS",Open:"SideDrawer_Open__28wFM",Close:"SideDrawer_Close__2Cqvj",Logo:"SideDrawer_Logo__TGC3c"}},function(e,t,a){e.exports={BuildControl:"BuildControl_BuildControl__156Sk",Label:"BuildControl_Label__2gGB6",Less:"BuildControl_Less__1h6ce",More:"BuildControl_More__Tq0gI"}},function(e,t,a){e.exports={Toolbar:"Toolbar_Toolbar__BIKCl",Logo:"Toolbar_Logo__TcMXm",DesktopOnly:"Toolbar_DesktopOnly__1RS3E"}},,function(e,t,a){e.exports={NavigationItem:"NavigationItem_NavigationItem__Gvsyr",active:"NavigationItem_active__2t7E9"}},function(e,t,a){e.exports={BuildControls:"BuildControls_BuildControls__3an99",OrderButton:"BuildControls_OrderButton__32YOM",enable:"BuildControls_enable__2cLAL"}},function(e,t,a){e.exports={Button:"Button_Button__3TCxg",Success:"Button_Success__3nC-v",Danger:"Button_Danger__1rQHt"}},,,,,,,,,,,function(e,t,a){e.exports={Content:"Layout_Content__1OhQn"}},function(e,t,a){e.exports={Logo:"Logo_Logo__3sn2K"}},function(e,t,a){e.exports=a.p+"static/media/burger-logo.b8503d26.png"},function(e,t,a){e.exports={NavigationItems:"NavigationItems_NavigationItems__3dILs"}},function(e,t,a){e.exports={DrawerToggle:"DrawerToggle_DrawerToggle__2chAU"}},function(e,t,a){e.exports={Backdrop:"Backdrop_Backdrop__300xU"}},function(e,t,a){e.exports={Burger:"Burger_Burger__LYWZO"}},function(e,t,a){e.exports={Modal:"Modal_Modal__6X6W8"}},function(e,t,a){e.exports={Loader:"Spinner_Loader__10T_j",load2:"Spinner_load2__37vHk"}},,,function(e,t,a){e.exports=a(58)},,,,,function(e,t,a){},,,,,,,,,,,,,,,,,,function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(23),o=a.n(l),c=(a(40),a(2)),i=a(3),s=a(5),d=a(4),u=function(e){return e.children},m=a(24),p=a.n(m),h=a(25),g=a.n(h),_=a(26),b=a.n(_),v=function(e){return r.a.createElement("div",{className:g.a.Logo,style:{height:e.height}},r.a.createElement("img",{src:b.a,alt:"MyBurger"}))},E=a(9),f=a.n(E),C=a(27),B=a.n(C),k=a(11),y=a.n(k),w=function(e){return r.a.createElement("li",{className:y.a.NavigationItem},r.a.createElement("a",{href:e.link,className:e.active?y.a.active:null}," ",e.children))},O=function(){return r.a.createElement("ul",{className:B.a.NavigationItems},r.a.createElement(w,{link:"/",active:!0},"Burger Builder"),r.a.createElement(w,{link:"/"},"Checkout"))},S=a(28),N=a.n(S),j=function(e){return r.a.createElement("div",{className:N.a.DrawerToggle,onClick:e.clicked},r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null))},T=function(e){return r.a.createElement("header",{className:f.a.Toolbar},r.a.createElement(j,{clicked:e.drawerToggleClicked}),r.a.createElement("div",{className:f.a.Logo},r.a.createElement(v,null)),r.a.createElement("nav",{className:f.a.DesktopOnly},r.a.createElement(O,null)))},D=a(7),L=a.n(D),I=a(29),x=a.n(I),M=function(e){return e.show?r.a.createElement("div",{className:x.a.Backdrop,onClick:e.clicked}):null},H=function(e){var t=[L.a.SideDrawer,L.a.Close];return e.open&&(t=[L.a.SideDrawer,L.a.Open]),r.a.createElement(u,null,r.a.createElement(M,{show:e.open,clicked:e.closed}),r.a.createElement("div",{className:t.join(" ")},r.a.createElement("div",{className:L.a.Logo},r.a.createElement(v,null)),r.a.createElement("nav",null,r.a.createElement(O,null))))},P=function(e){Object(s.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={showSideDrawer:!1},e.sideDrawerClosedHandler=function(){e.setState({showSideDrawer:!1})},e.sideDrawerToggleHandler=function(){e.setState((function(e){return{showSideDrawer:!e.showSideDrawer}}))},e}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement(u,null,r.a.createElement(T,{drawerToggleClicked:this.sideDrawerToggleHandler}),r.a.createElement(H,{open:this.state.showSideDrawer,closed:this.sideDrawerClosedHandler}),r.a.createElement("main",{className:p.a.Content},this.props.children))}}]),a}(n.Component),A=a(10),R=a(34),U=a(30),G=a.n(U),W=a(6),Y=a.n(W),F=function(e){Object(s.a)(a,e);var t=Object(d.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){var e=null;switch(this.props.type){case"bread-bottom":e=r.a.createElement("div",{className:Y.a.BreadBottom});break;case"bread-top":e=r.a.createElement("div",{className:Y.a.BreadTop},r.a.createElement("div",{className:Y.a.Seeds1}),r.a.createElement("div",{className:Y.a.Seeds2}));break;case"meat":e=r.a.createElement("div",{className:Y.a.Meat});break;case"cheese":e=r.a.createElement("div",{className:Y.a.Cheese});break;case"salad":e=r.a.createElement("div",{className:Y.a.Salad});break;case"bacon":e=r.a.createElement("div",{className:Y.a.Bacon});break;default:e=null}return e}}]),a}(n.Component),K=function(e){var t=Object.keys(e.ingredients).map((function(t){return Object(R.a)(Array(e.ingredients[t])).map((function(e,a){return r.a.createElement(F,{key:t+a,type:t})}))})).reduce((function(e,t){return e.concat(t)}),[]);return console.log(t),0===t.length&&(t=r.a.createElement("p",null,"Please start adding ingredients")),r.a.createElement("div",{className:G.a.Burger},r.a.createElement(F,{type:"bread-top"}),t,r.a.createElement(F,{type:"bread-bottom"}))},q=a(12),z=a.n(q),J=a(8),Q=a.n(J),X=function(e){return r.a.createElement("div",{className:Q.a.BuildControl},r.a.createElement("div",{className:Q.a.Label},e.label),r.a.createElement("button",{className:Q.a.Less,onClick:e.removed,disabled:e.disabled},"Less"),r.a.createElement("button",{className:Q.a.More,onClick:e.added},"More"))},Z=[{label:"Salad",type:"salad"},{label:"Bacon",type:"bacon"},{label:"Cheese",type:"cheese"},{label:"Meat",type:"meat"}],$=function(e){return r.a.createElement("div",{className:z.a.BuildControls},r.a.createElement("p",null,"Current Price: ",r.a.createElement("strong",null,e.price.toFixed(2))),Z.map((function(t){return r.a.createElement(X,{key:t.label,label:t.label,added:function(){return e.ingredientAdded(t.type)},removed:function(){return e.ingredientRemoved(t.type)},disabled:e.disabled[t.type]})})),r.a.createElement("button",{className:z.a.OrderButton,disabled:!e.purchasable,onClick:e.ordered},"ORDER NOW"))},V=a(31),ee=a.n(V),te=function(e){Object(s.a)(a,e);var t=Object(d.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"shouldComponentUpdate",value:function(e,t){return e.show!==this.props.show}},{key:"componentWillUpdate",value:function(){console.log("modal ujpdare")}},{key:"render",value:function(){return r.a.createElement(u,null,r.a.createElement(M,{show:this.props.show,clicked:this.props.modalClosed}),r.a.createElement("div",{className:ee.a.Modal,style:{transform:this.props.show?"translateY(0)":"translateY(-100vh)",opacity:this.props.show?"1":"0"}},this.props.children))}}]),a}(n.Component),ae=a(13),ne=a.n(ae),re=function(e){return r.a.createElement("button",{className:[ne.a.Button,ne.a[e.btnType]].join(" "),onClick:e.clicked},e.children)},le=function(e){Object(s.a)(a,e);var t=Object(d.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){var e=this,t=Object.keys(this.props.ingredients).map((function(t){return r.a.createElement("li",{key:t},r.a.createElement("span",{style:{textTransform:"capitalize"}},t)," : ",e.props.ingredients[t])}));return r.a.createElement(u,null,r.a.createElement("h3",null,"Your Order"),r.a.createElement("p",null,"A delicious burger with the following ingredients:"),r.a.createElement("ul",null,t),r.a.createElement("p",null,r.a.createElement("strong",null,"Total Price: ",this.props.price.toFixed(2))),r.a.createElement("p",null,"Continue to Checkout?"),r.a.createElement(re,{btnType:"Danger",clicked:this.props.purchaseCancelled},"CANCEL"),r.a.createElement(re,{btnType:"Success",clicked:this.props.purchaseContinued},"CONTINUE"))}}]),a}(n.Component),oe=a(32),ce=a.n(oe),ie=function(){return r.a.createElement("div",{className:ce.a.Loader},"Loading...")},se=a(33),de=a.n(se).a.create({baseURL:"https://react-my-burger-ace72.firebaseio.com/"}),ue={salad:.5,cheese:.4,meat:1.3,bacon:.7},me=function(e){Object(s.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={ingredients:{salad:0,bacon:0,cheese:0,meat:0},totalPrice:4,purchasable:!1,purchasing:!1,loading:!1},e.addIngredientHandler=function(t){var a=e.state.ingredients[t]+1,n=Object(A.a)({},e.state.ingredients);n[t]=a;var r=ue[t],l=e.state.totalPrice+r;e.setState({totalPrice:l,ingredients:n}),e.updatePurchaseState(n)},e.removeIngredientHandler=function(t){var a=e.state.ingredients[t];if(!(a<=0)){var n=a-1,r=Object(A.a)({},e.state.ingredients);r[t]=n;var l=ue[t],o=e.state.totalPrice-l;e.setState({totalPrice:o,ingredients:r}),e.updatePurchaseState(r)}},e.purchaseHandler=function(){e.setState({purchasing:!0})},e.purchaseCancelHandler=function(){e.setState({purchasing:!1})},e.purchaseContinueHandler=function(){e.setState({loading:!0});var t={ingredients:e.state.ingredients,price:e.state.totalPrice,customer:{name:"Gherick",address:{street:"Test st",zipCode:"1101",contry:"Philippines"},email:"test@test.com"},deliveryMethod:"COD"};de.post("/orders.json",t).then((function(t){e.setState({loading:!1,purchasing:!1})})).catch((function(t){e.setState({loading:!1,purchasing:!1})}))},e}return Object(i.a)(a,[{key:"updatePurchaseState",value:function(e){var t=Object.keys(e).map((function(t){return e[t]})).reduce((function(e,t){return e+t}),0);this.setState({purchasable:t>0})}},{key:"render",value:function(){var e=Object(A.a)({},this.state.ingredients);for(var t in e)e[t]=e[t]<=0;var a=r.a.createElement(le,{ingredients:this.state.ingredients,purchaseCancelled:this.purchaseCancelHandler,purchaseContinued:this.purchaseContinueHandler,price:this.state.totalPrice});return this.state.loading&&(a=r.a.createElement(ie,null)),r.a.createElement(u,null,r.a.createElement(te,{show:this.state.purchasing,modalClosed:this.purchaseCancelHandler},a),r.a.createElement(K,{ingredients:this.state.ingredients}),r.a.createElement($,{ingredientAdded:this.addIngredientHandler,ingredientRemoved:this.removeIngredientHandler,disabled:e,purchasable:this.state.purchasable,ordered:this.purchaseHandler,price:this.state.totalPrice}))}}]),a}(n.Component),pe=function(e){Object(s.a)(a,e);var t=Object(d.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(P,null,r.a.createElement(me,null)))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(pe,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[35,1,2]]]);
//# sourceMappingURL=main.ded94422.chunk.js.map