(this["webpackJsonpmc-react-app"]=this["webpackJsonpmc-react-app"]||[]).push([[0],{14:function(e,c,t){e.exports={catcontainer:"CartPage_catcontainer__RMMoJ",logo:"CartPage_logo__15TuG",search:"CartPage_search__1KIFY",cartlogo:"CartPage_cartlogo__1pRO6",cartbutton:"CartPage_cartbutton__1RcQ3",viewCart:"CartPage_viewCart__3AVrb",nav:"CartPage_nav__1LAbh"}},15:function(e,c,t){e.exports={item:"Cart_item__mA3tI",list:"Cart_list__2H0tF",title:"Cart_title__19p3_",price:"Cart_price__1t35I",remove:"Cart_remove__2DQT-",removeContainer:"Cart_removeContainer__3-TgL",noItems:"Cart_noItems__3IfLc"}},17:function(e,c,t){e.exports={list:"navlist_list__3CcEk",back:"navlist_back__xjnup",home:"navlist_home__3hKL7",cat:"navlist_cat__3aPfH",mens:"navlist_mens__3JtuH",womens:"navlist_womens__3nL7r",elec:"navlist_elec__38zEO",jewel:"navlist_jewel__Bk9k-"}},18:function(e,c,t){e.exports={container:"ProductPage_container__1oahk",prodcontainer:"ProductPage_prodcontainer__1uZG2",image:"ProductPage_image__EKnWI",title:"ProductPage_title__2oCUs",price:"ProductPage_price__15ZfD",addCart:"ProductPage_addCart__3VL0j"}},19:function(e,c,t){e.exports={item:"ProductCard_item__39IVq",all:"ProductCard_all__2u4ud",image:"ProductCard_image__3hL3B",title:"ProductCard_title__fsowH",price:"ProductCard_price__1iKmt",button:"ProductCard_button__RYBKB"}},3:function(e,c,t){e.exports={catcontainer:"category_catcontainer__20q4R",logo:"category_logo__1RDiz",search:"category_search__riSU9",cartlogo:"category_cartlogo__20Brg",cartbutton:"category_cartbutton__15Sv8",viewCart:"category_viewCart__2UaF6",nav:"category_nav__2A7jf",card:"category_card__2-nzi"}},36:function(e,c,t){e.exports={wrapper:"SearchBar_wrapper__17a7Q",searchbar:"SearchBar_searchbar__2VQgf"}},42:function(e,c,t){},6:function(e,c,t){e.exports={homecontainer:"Home_homecontainer__z5P7h",logo:"Home_logo__H6UKt",search:"Home_search__1pCsb",menswear:"Home_menswear__mOUN4",womenswear:"Home_womenswear__4z1WA",electronics:"Home_electronics__1OtNk",jewelery:"Home_jewelery__1_M3B",image1:"Home_image1__2Y_mi",image2:"Home_image2__1h7xi",image3:"Home_image3__2EbSu",image4:"Home_image4__2EJD3",menswearLink:"Home_menswearLink__QCSU1",womenswearLink:"Home_womenswearLink__2dIUM",electronicsLink:"Home_electronicsLink__2l8x0",jeweleryLink:"Home_jeweleryLink__1spMq"}},62:function(e,c,t){"use strict";t.r(c);var a=t(1),s=t.n(a),n=t(23),r=t.n(n),i=(t(42),t(22)),o=t(6),l=t.n(o),j=t.p+"static/media/bluff.79e332e0.png",m=t.p+"static/media/menswear.fb6d64bf.png",b=t.p+"static/media/womenswear.9aa4b774.png",d=t.p+"static/media/electronics.efb098fc.png",h=t.p+"static/media/jewelery.ede7c1ca.png",O=t(5),x=t(27),_=Object(a.createContext)({}),p=_,u=t(36),g=t.n(u),f=t(37),N=t(4),v=t(0);var w=function(){var e=Object(N.e)(),c=Object(a.useContext)(_).products.map((function(e){return{label:e.title,value:e.title,id:e.id,description:e.description,price:e.price,image:e.image}}));return Object(v.jsx)("div",{className:"wrapper",children:Object(v.jsx)(f.a,{options:c,onChange:function(c){console.log("card",c),e.push({pathname:"/product/".concat(c.id),state:Object(x.a)({},c)})},className:g.a.searchbar,placeholder:"Search products..."})})},C=function(){return Object(v.jsxs)("div",{className:l.a.homecontainer,children:[Object(v.jsx)("img",{className:l.a.logo,src:j,alt:"logo"}),Object(v.jsx)("div",{className:l.a.search,children:Object(v.jsx)(w,{className:l.a.search})}),Object(v.jsxs)("div",{className:l.a.menswear,children:[Object(v.jsx)("a",{href:"./menswear",children:Object(v.jsx)("img",{className:l.a.image1,src:m,alt:"Menswear"})}),Object(v.jsx)(O.b,{to:"./menswear",className:l.a.menswearLink,children:"Menswear"})]}),Object(v.jsxs)("div",{className:l.a.womenswear,children:[Object(v.jsx)("a",{href:"./womenswear",children:Object(v.jsx)("img",{className:l.a.image2,src:b,alt:"Womenswear"})}),Object(v.jsx)(O.b,{to:"./womenswear",className:l.a.womenswearLink,children:"Womenswear"})]}),Object(v.jsxs)("div",{className:l.a.electronics,children:[Object(v.jsx)("a",{href:"./electronics",children:Object(v.jsx)("img",{className:l.a.image3,src:d,alt:"Electronics"})}),Object(v.jsx)(O.b,{to:"./electronics",className:l.a.electronicsLink,children:"Electronics"})]}),Object(v.jsxs)("div",{className:l.a.jewelery,children:[Object(v.jsx)("a",{href:"./jewelery",children:Object(v.jsx)("img",{className:l.a.image4,src:h,alt:"Jewelery"})}),Object(v.jsx)(O.b,{to:"./jewelery",className:l.a.jeweleryLink,children:"Jewelery"})]})]},"home")},y=t(15),P=t.n(y),k=t(14),L=t.n(k),H=t(7),E=t(8),S=t(9),I=t(21),B=t(3),J=t.n(B),M=function(e){Object(S.a)(t,e);var c=Object(I.a)(t);function t(){return Object(H.a)(this,t),c.apply(this,arguments)}return Object(E.a)(t,[{key:"render",value:function(){return Object(v.jsx)("div",{children:Object(v.jsxs)("a",{href:"/",children:[" ",Object(v.jsx)("img",{className:J.a.logo,src:j,alt:"logo"})]})})}}]),t}(s.a.Component),T=t(17),A=t.n(T),F=function(e){Object(S.a)(t,e);var c=Object(I.a)(t);function t(){return Object(H.a)(this,t),c.apply(this,arguments)}return Object(E.a)(t,[{key:"render",value:function(){return Object(v.jsx)("div",{children:Object(v.jsxs)("ul",{className:A.a.list,children:[Object(v.jsx)("li",{children:Object(v.jsx)(O.b,{to:"/",className:A.a.back,children:"Back"})}),Object(v.jsx)("li",{children:Object(v.jsx)(O.b,{to:"/",className:A.a.home,children:"Home"})}),Object(v.jsx)("li",{className:A.a.cat,children:"Categories"}),Object(v.jsx)("li",{children:Object(v.jsx)(O.b,{to:"/menswear",className:A.a.mens,children:"Menswear"})}),Object(v.jsx)("li",{children:Object(v.jsx)(O.b,{to:"/womenswear",className:A.a.womens,children:"Womenswear"})}),Object(v.jsx)("li",{children:Object(v.jsx)(O.b,{to:"/electronics",className:A.a.elec,children:"Electronics"})}),Object(v.jsx)("li",{children:Object(v.jsx)(O.b,{to:"/jewelery",className:A.a.jewel,children:"Jewelery"})})]})})}}]),t}(s.a.Component),U=t.p+"static/media/cart.76ae8f8b.png",D=function(e){Object(S.a)(t,e);var c=Object(I.a)(t);function t(){return Object(H.a)(this,t),c.apply(this,arguments)}return Object(E.a)(t,[{key:"render",value:function(){return Object(v.jsxs)("div",{className:J.a.cartbutton,children:[Object(v.jsx)("p",{children:Object(v.jsx)("a",{href:"/cart",className:J.a.viewCart,children:" View Cart"})}),Object(v.jsx)("p",{children:Object(v.jsxs)("a",{href:"/cart",children:[" ",Object(v.jsx)("img",{className:J.a.cartlogo,src:U,alt:"cart"})]})})]})}}]),t}(s.a.Component);var K=function(){var e=Object(a.useState)([]),c=Object(i.a)(e,2),t=c[0],s=c[1];return console.log("state",t),Object(a.useEffect)((function(){fetch("http://localhost:3000/cart/").then((function(e){return e.json()})).then((function(e){s(e)})).catch((function(e){return console.log(e)}))}),[]),t.length>0?Object(v.jsxs)("div",{className:L.a.catcontainer,children:[Object(v.jsx)("p",{className:L.a.logo,children:Object(v.jsx)(M,{})}),Object(v.jsx)("p",{className:L.a.search,children:Object(v.jsx)(w,{})}),Object(v.jsx)("p",{className:L.a.cart,children:Object(v.jsx)(D,{})}),Object(v.jsx)("p",{className:L.a.nav,children:Object(v.jsx)(F,{})}),Object(v.jsx)("div",{className:P.a.container,children:Object(v.jsx)("ul",{className:P.a.list,children:t.map((function(e){return Object(v.jsxs)("li",{className:P.a.item,children:[Object(v.jsx)("p",{className:P.a.title,children:e.title}),Object(v.jsxs)("p",{className:P.a.price,children:["$",e.price]}),Object(v.jsx)("p",{className:P.a.removeContainer,children:Object(v.jsx)("button",{onClick:function(c){c.target.parentElement.parentElement.remove(),function(e){console.log("outside",e),window.confirm("Are you sure you want to remove this item?")&&(console.log("inside",e),fetch("http://localhost:3000/cart/"+e,{method:"DELETE"}).then((function(e){return e})))}(e.id)},className:P.a.remove,children:"X"})})]})}))})})]},98798798790):Object(v.jsxs)("div",{className:L.a.catcontainer,children:[Object(v.jsx)("p",{className:L.a.logo,children:Object(v.jsx)(M,{})}),Object(v.jsx)("p",{className:L.a.search,children:Object(v.jsx)(w,{})}),Object(v.jsx)("p",{className:L.a.cart,children:Object(v.jsx)(D,{})}),Object(v.jsx)("p",{className:L.a.nav,children:Object(v.jsx)(F,{})}),Object(v.jsx)("div",{className:P.a.container,children:Object(v.jsx)("div",{children:Object(v.jsx)("p",{className:P.a.noItems,children:"Your shopping cart is empty"})})})]},98798798790)},R=t(19),V=t.n(R),z=function(e){var c=e.prod,t=Object(a.useState)({}),s=Object(i.a)(t,2),n=(s[0],s[1]);return Object(v.jsxs)("div",{className:V.a.item,children:[Object(v.jsxs)("div",{className:V.a.all,children:[Object(v.jsx)("img",{className:V.a.image,src:c.image,alt:c.title}),Object(v.jsx)("p",{className:V.a.title,children:c.title}),Object(v.jsxs)("p",{className:V.a.price,children:[" Price: $",c.price]})]}),Object(v.jsx)(O.b,{to:{pathname:"product/".concat(c.id),state:Object(x.a)({},c)},className:V.a.button,onClick:function(){n(c)},children:"View item"})]},42443434)};var Q=function(){var e=Object(a.useContext)(_);return Object(v.jsxs)("div",{className:J.a.catcontainer,children:[Object(v.jsx)("p",{className:J.a.logo,children:Object(v.jsx)(M,{})}),Object(v.jsx)("p",{className:J.a.search,children:Object(v.jsx)(w,{})}),Object(v.jsx)("p",{className:J.a.cart,children:Object(v.jsx)(D,{})}),Object(v.jsx)("p",{className:J.a.nav,children:Object(v.jsx)(F,{})}),Object(v.jsx)("div",{className:J.a.card,children:e.products.filter((function(e){return"men's clothing"===e.category})).map((function(e){return Object(v.jsx)("p",{children:Object(v.jsx)(z,{prod:e})})}))})]},453433)};var W=function(){var e=Object(a.useContext)(_);return Object(v.jsxs)("div",{className:J.a.catcontainer,children:[Object(v.jsx)("p",{className:J.a.logo,children:Object(v.jsx)(M,{})}),Object(v.jsx)("p",{className:J.a.search,children:Object(v.jsx)(w,{})}),Object(v.jsx)("p",{className:J.a.cart,children:Object(v.jsx)(D,{})}),Object(v.jsx)("p",{className:J.a.nav,children:Object(v.jsx)(F,{})}),Object(v.jsx)("div",{className:J.a.card,children:e.products.filter((function(e){return"women's clothing"===e.category})).map((function(e){return Object(v.jsx)("p",{children:Object(v.jsx)(z,{prod:e})})}))})]},4563463)};var Y=function(){var e=Object(a.useContext)(_);return Object(v.jsxs)("div",{className:J.a.catcontainer,children:[Object(v.jsx)("p",{className:J.a.logo,children:Object(v.jsx)(M,{})}),Object(v.jsx)("p",{className:J.a.search,children:Object(v.jsx)(w,{})}),Object(v.jsx)("p",{className:J.a.cart,children:Object(v.jsx)(D,{})}),Object(v.jsx)("p",{className:J.a.nav,children:Object(v.jsx)(F,{})}),Object(v.jsx)("div",{className:J.a.card,children:e.products.filter((function(e){return"electronics"===e.category})).map((function(e){return Object(v.jsx)("p",{children:Object(v.jsx)(z,{prod:e})})}))})]},456345635)};var q=function(){var e=Object(a.useContext)(_);return Object(v.jsxs)("div",{className:J.a.catcontainer,children:[Object(v.jsx)("p",{className:J.a.logo,children:Object(v.jsx)(M,{})}),Object(v.jsx)("p",{className:J.a.search,children:Object(v.jsx)(w,{})}),Object(v.jsx)("p",{className:J.a.cart,children:Object(v.jsx)(D,{})}),Object(v.jsx)("p",{className:J.a.nav,children:Object(v.jsx)(F,{})}),Object(v.jsx)("div",{className:J.a.card,children:e.products.filter((function(e){return"jewelery"===e.category})).map((function(e){return Object(v.jsx)("p",{children:Object(v.jsx)(z,{prod:e})})}))})]},545374)},$=t(18),G=t.n($);var Z=function(e){var c=Object(N.f)();return Object(a.useEffect)((function(){console.log("pathname",c.pathname),console.log("state",c.prod)}),[c]),Object(v.jsxs)("div",{className:G.a.container,children:[Object(v.jsx)("p",{className:J.a.logo,children:Object(v.jsx)(M,{})}),Object(v.jsx)("p",{className:J.a.search,children:Object(v.jsx)(w,{})}),Object(v.jsx)("p",{className:J.a.cart,children:Object(v.jsx)(D,{})}),Object(v.jsx)("p",{className:J.a.nav,children:Object(v.jsx)(F,{})}),Object(v.jsx)("div",{children:Object(v.jsxs)("div",{className:G.a.prodcontainer,children:[Object(v.jsx)("p",{className:G.a.title,children:e.location.state.title}),Object(v.jsx)("img",{className:G.a.image,src:e.location.state.image,alt:e.location.state.title}),Object(v.jsxs)("div",{children:[Object(v.jsxs)("p",{className:G.a.price,children:[" Price: $",e.location.state.price]}),Object(v.jsx)("button",{className:G.a.addCart,onClick:function(){var c=e.location.state.title,t=e.location.state.price,a=JSON.stringify({title:c,price:t});console.log("data",a),fetch("http://localhost:3000/cart",{method:"POST",headers:{"Content-Type":"application/json"},body:a}).then((function(e){return e.json()})).then((function(e){return console.log("database",e)})).catch((function(e){return console.log(e)}))},children:"Add to Shopping Cart"}),Object(v.jsx)("p",{className:G.a.description,children:e.location.state.description})]})]})})]},e.location.state.id)};var X=function(){var e=Object(a.useState)([]),c=Object(i.a)(e,2),t=c[0],s=c[1];return Object(a.useEffect)((function(){fetch("https://fakestoreapi.com/products").then((function(e){return e.json()})).then((function(e){s(e)})).catch((function(e){return console.log(e)}))}),[]),Object(v.jsx)("div",{children:Object(v.jsx)(p.Provider,{value:{products:t,setProducts:s},children:Object(v.jsxs)(O.a,{children:[Object(v.jsx)(N.a,{exact:!0,path:"/",component:C}),Object(v.jsx)(N.a,{path:"/product/:id",component:Z}),Object(v.jsx)(N.a,{exact:!0,path:"/cart",component:K}),Object(v.jsx)(N.a,{exact:!0,path:"/menswear",component:Q}),Object(v.jsx)(N.a,{exact:!0,path:"/womenswear",component:W}),Object(v.jsx)(N.a,{exact:!0,path:"/electronics",component:Y}),Object(v.jsx)(N.a,{exact:!0,path:"/jewelery",component:q})]})})},9889768)},ee=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,63)).then((function(c){var t=c.getCLS,a=c.getFID,s=c.getFCP,n=c.getLCP,r=c.getTTFB;t(e),a(e),s(e),n(e),r(e)}))};r.a.render(Object(v.jsx)(s.a.StrictMode,{children:Object(v.jsx)(X,{})}),document.getElementById("root")),ee()}},[[62,1,2]]]);
//# sourceMappingURL=main.f9388e0b.chunk.js.map