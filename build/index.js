!function(n,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t(require("react"),require("styled-components"),require("contentstack"),require("regenerator-runtime"));else if("function"==typeof define&&define.amd)define(["react","styled-components","contentstack","regenerator-runtime"],t);else{var e="object"==typeof exports?t(require("react"),require("styled-components"),require("contentstack"),require("regenerator-runtime")):t(n.React,n.styled,n.Contentstack,n[void 0]);for(var r in e)("object"==typeof exports?exports:n)[r]=e[r]}}(this,function(e,r,o,a){return c={},i.m=u=[function(n,t){n.exports=e},function(n,t,e){n.exports=e(40)()},function(n,t){n.exports=function(n,t){return t=t||n.slice(0),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(t)}}))}},function(n,t){n.exports=r},function(n,t){n.exports=function(n){if(void 0===n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}},function(n,t){n.exports=function(n,t,e){return t in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}},function(n,t,e){var r=e(24),o=e(53),a=e(17),i=r(function(n,t,e){return o(n,a(t,e))});n.exports=i},function(n,t){n.exports=function(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}},function(n,t){function r(n,t){for(var e=0;e<t.length;e++){var r=t[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}n.exports=function(n,t,e){return t&&r(n.prototype,t),e&&r(n,e),n}},function(n,t,e){var o=e(14),a=e(20);n.exports=function(r){return function n(t,e){switch(arguments.length){case 0:return n;case 1:return a(t)?n:o(function(n){return r(t,n)});default:return a(t)&&a(e)?n:a(t)?o(function(n){return r(n,e)}):a(e)?o(function(n){return r(t,n)}):r(t,e)}}}},function(n,t){n.exports={veniceBlue:"#056582",blueChill:"#0A89AF",cerulean:"#00A3EB",emperor:"#555555",ebb:"#EAE8E6",timberwolf:"#D6D2CE",pampas:"#F6F5F3",tundora:"#434343",silver:"#C5C5C5",eggplant:"#614661",limeade:"#388501",slateGray:"#6F838E",sanJuan:"#385A79",shamrock:"#47DB9B",copperRust:"#99464E",pomegranate:"#E34913",brickRed:"#C8263B",tabasco:"#973912",congressBlue:"#004289",milanoRed:"#C40505",tarawera:"#082B44",cabaret:"#DB3F6E",cardinal:"#D4232B",riverBed:"#49565f",lipstick:"#b60975",puertoRico:"#47bd9b",java:"#29bfb3",spindle:"#BEDCEF",scorpion:"#5B5B5B",linen:"#FAE5E1",chestnutRose:"#CF4858",pictonBlue:"#56BFED",dustyGray:"#959595",mineShaft:"#2E2E2E",silverChalice:"#A3A3A3",alabaster:"#FBFBFB",wildWatermelon:"#FF6174",nobel:"#B5B5B5"}},function(n,t,e){var r=e(38),o=e(4);n.exports=function(n,t){return!t||"object"!==r(t)&&"function"!=typeof t?o(n):t}},function(t,n){function e(n){return t.exports=e=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)},e(n)}t.exports=e},function(n,t,e){var r=e(39);n.exports=function(n,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(t&&t.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),t&&r(n,t)}},function(n,t,e){var r=e(20);n.exports=function(e){return function n(t){return 0===arguments.length||r(t)?n:e.apply(this,arguments)}}},function(n,t,e){var o=e(5);n.exports=function(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{},r=Object.keys(e);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(e).filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.forEach(function(n){o(t,n,e[n])})}return t}},function(n,t,e){var r=e(19),o=e(42),a=e(43),i=e(47);n.exports=function(){if(0===arguments.length)throw new Error("pipe requires at least one argument");return r(arguments[0].length,a(o,arguments[0],i(arguments)))}},function(n,t,e){var r=e(9)(function(n,t){for(var e=t,r=0;r<n.length;){if(null==e)return;e=e[n[r]],r+=1}return e});n.exports=r},function(n,t,e){var r=e(9),o=e(21),a=e(63),i=e(25),u=e(64),c=e(65),s=e(32),l=r(o(["fantasy-land/map","map"],u,function(e,r){switch(Object.prototype.toString.call(r)){case"[object Function]":return c(r.length,function(){return e.call(this,r.apply(this,arguments))});case"[object Object]":return i(function(n,t){return n[t]=e(r[t]),n},{},s(r));default:return a(e,r)}}));n.exports=l},function(n,t){n.exports=function(n,l){switch(n){case 0:return function(){return l.apply(this,arguments)};case 1:return function(n){return l.apply(this,arguments)};case 2:return function(n,t){return l.apply(this,arguments)};case 3:return function(n,t,e){return l.apply(this,arguments)};case 4:return function(n,t,e,r){return l.apply(this,arguments)};case 5:return function(n,t,e,r,o){return l.apply(this,arguments)};case 6:return function(n,t,e,r,o,a){return l.apply(this,arguments)};case 7:return function(n,t,e,r,o,a,i){return l.apply(this,arguments)};case 8:return function(n,t,e,r,o,a,i,u){return l.apply(this,arguments)};case 9:return function(n,t,e,r,o,a,i,u,c){return l.apply(this,arguments)};case 10:return function(n,t,e,r,o,a,i,u,c,s){return l.apply(this,arguments)};default:throw new Error("First argument to _arity must be a non-negative integer no greater than ten")}}},function(n,t){n.exports=function(n){return null!=n&&"object"==typeof n&&!0===n["@@functional/placeholder"]}},function(n,t,e){var i=e(26),u=e(48);n.exports=function(r,o,a){return function(){if(0===arguments.length)return a();var n=Array.prototype.slice.call(arguments,0),t=n.pop();if(!i(t)){for(var e=0;e<r.length;){if("function"==typeof t[r[e]])return t[r[e]].apply(t,n);e+=1}if(u(t))return o.apply(null,n)(t)}return a.apply(this,arguments)}}},function(n,t){n.exports={init:function(){return this.xf["@@transducer/init"]()},result:function(n){return this.xf["@@transducer/result"](n)}}},function(n,t,e){var r=e(14)(e(62)(!0));n.exports=r},function(n,t,e){var i=e(14),u=e(9),c=e(20);n.exports=function(a){return function n(e,r,o){switch(arguments.length){case 0:return n;case 1:return c(e)?n:u(function(n,t){return a(e,n,t)});case 2:return c(e)&&c(r)?n:c(e)?u(function(n,t){return a(n,r,t)}):c(r)?u(function(n,t){return a(e,n,t)}):i(function(n){return a(e,r,n)});default:return c(e)&&c(r)&&c(o)?n:c(e)&&c(r)?u(function(n,t){return a(n,t,o)}):c(e)&&c(o)?u(function(n,t){return a(n,r,t)}):c(r)&&c(o)?u(function(n,t){return a(e,n,t)}):c(e)?i(function(n){return a(n,r,o)}):c(r)?i(function(n){return a(e,n,o)}):c(o)?i(function(n){return a(e,r,n)}):a(e,r,o)}}}},function(n,t,e){var r=e(29),o=e(45),a=e(46);function i(n,t,e){for(var r=e.next();!r.done;){if((t=n["@@transducer/step"](t,r.value))&&t["@@transducer/reduced"]){t=t["@@transducer/value"];break}r=e.next()}return n["@@transducer/result"](t)}function u(n,t,e,r){return n["@@transducer/result"](e[r](a(n["@@transducer/step"],n),t))}var c="undefined"!=typeof Symbol?Symbol.iterator:"@@iterator";n.exports=function(n,t,e){if("function"==typeof n&&(n=o(n)),r(e))return function(n,t,e){for(var r=0,o=e.length;r<o;){if((t=n["@@transducer/step"](t,e[r]))&&t["@@transducer/reduced"]){t=t["@@transducer/value"];break}r+=1}return n["@@transducer/result"](t)}(n,t,e);if("function"==typeof e["fantasy-land/reduce"])return u(n,t,e,"fantasy-land/reduce");if(null!=e[c])return i(n,t,e[c]());if("function"==typeof e.next)return i(n,t,e);if("function"==typeof e.reduce)return u(n,t,e,"reduce");throw new TypeError("reduce: list must be array or iterable")}},function(n,t){n.exports=Array.isArray||function(n){return null!=n&&0<=n.length&&"[object Array]"===Object.prototype.toString.call(n)}},function(n,t){n.exports={tablet:768,desktop:960}},function(n,t,e){var r=e(54),o=e(55),a=e(56);n.exports=function(n){return r(n)||o(n)||a()}},function(n,t,e){var r=e(14),o=e(26),a=e(44),i=r(function(n){return!!o(n)||!!n&&("object"==typeof n&&(!a(n)&&(1===n.nodeType?!!n.length:0===n.length||0<n.length&&(n.hasOwnProperty(0)&&n.hasOwnProperty(n.length-1)))))});n.exports=i},function(n,t,e){var o=e(26);n.exports=function(e,r){return function(){var n=arguments.length;if(0===n)return r();var t=arguments[n-1];return o(t)||"function"!=typeof t[e]?r.apply(this,arguments):t[e].apply(t,Array.prototype.slice.call(arguments,0,n-1))}}},function(n,t,e){var r=e(30),o=e(24)(r("slice",function(n,t,e){return Array.prototype.slice.call(e,n,t)}));n.exports=o},function(n,t,e){function a(n,t){for(var e=0;e<n.length;){if(n[e]===t)return!0;e+=1}return!1}var r=e(14),i=e(33),u=e(52),c=!{toString:null}.propertyIsEnumerable("toString"),s=["constructor","valueOf","isPrototypeOf","toString","propertyIsEnumerable","hasOwnProperty","toLocaleString"],l=function(){"use strict";return arguments.propertyIsEnumerable("length")}(),o="function"!=typeof Object.keys||l?r(function(n){if(Object(n)!==n)return[];var t,e,r=[],o=l&&u(n);for(t in n)!i(t,n)||o&&"length"===t||(r[r.length]=t);if(c)for(e=s.length-1;0<=e;)i(t=s[e],n)&&!a(r,t)&&(r[r.length]=t),e-=1;return r}):r(function(n){return Object(n)!==n?[]:Object.keys(n)});n.exports=o},function(n,t){n.exports=function(n,t){return Object.prototype.hasOwnProperty.call(t,n)}},function(n,t,e){"use strict";var r=e(23),u=e.n(r),o=e(16),f=e.n(o),a=e(6),c=e.n(a),i=e(18),s=e.n(i),l=e(0),p=e.n(l),v=e(10),d=e.n(v),m=e(17),h=e.n(m),y=e(7),g=e.n(y),b=e(8),x=e.n(b),k=e(11),w=e.n(k),O=e(12),E=e.n(O),C=e(4),P=e.n(C),j=e(13),S=e.n(j),R=e(5),I=e.n(R),T=e(1),D=e.n(T),A=Object(l.createContext)(null),B=D.a.shape({id:D.a.string,title:D.a.string.isRequired,url:D.a.string,subItems:D.a.array}),L=e(15),_=e.n(L),M=e(35),N=e.n(M),F=function(n){window&&window.dataLayer&&Array.isArray(window.dataLayer)&&window.dataLayer.push(n)},q=function(){function n(){g()(this,n)}return x()(n,null,[{key:"trackHover",value:function(n){var t=n.position,e=n.title;F({event:"nav_events",eventCategory:"Navigation - MDD",eventAction:"Hover",eventLabel:"".concat(t," | ").concat(e)})}},{key:"trackClick",value:function(n){var t=n.level,e=n.menuPosition,r=n.menuName,o=n.columnPosition,a=n.columnGroupName,i=n.columnGroupPosition,u=n.columnItemPosition,c=n.columnItemName,s=n.url,l=f()(N()(function(n){return void 0!==n}))([t,e,r,o,i,a,u,c]).join(" | ");F({event:"nav_clicks",eventCategory:"Navigation - MDD",eventAction:"Click",eventLabel:l,destinationUrl:s})}}]),n}(),G=e(2),z=e.n(G),H=e(3),W=e.n(H),U="#caccce",X="#757575",J="#434343",V="#0a89af";function Y(){var n=z()(["\n  text-decoration: none;\n  display: block;\n  font-size: 13px;\n  padding: 3px 0;\n  margin: 0;\n  cursor: pointer;\n  color: ",";\n  font-weight: 400;\n\n  :hover {\n    color: ",";\n  }\n"]);return Y=function(){return n},n}function K(){var n=z()(["\n  font-weight: 400;\n  font-size: 16px;\n  margin: 0;\n  padding: 0;\n  margin-bottom: 10px;\n  color: ",";\n  text-decoration: none;\n  display: block;\n  text-transform: lowercase;\n\n ","\n"]);return K=function(){return n},n}function Q(){var n=z()(["\n  padding: 0 10px 20px 16px;\n"]);return Q=function(){return n},n}function Z(n){var t=n.heading,e=n.url,r=n.childLinks,o=void 0===r?[]:r,a=n.prevGtmData;return p.a.createElement($,null,p.a.createElement(nn,{href:e,as:e&&"a",onMouseDown:function(){return function(n){n&&n.url&&q.trackClick(n)}(a)}},t),o.map(function(n,t){var e=n.title,r=n.url;return p.a.createElement(tn,{key:e,href:r,onMouseDown:function(){return function(n,t,e,r){var o=_()({},r,{level:3,columnItemPosition:e+1,columnItemName:n,url:t});return q.trackClick(o)}(e,r,t,a)}},e)}))}var $=W.a.div(Q()),nn=W.a.p(K(),J,function(n){return n.href&&"\n    :hover {\n      color: ".concat(V,";\n    }\n  ")}),tn=W.a.a(Y(),X,V);Z.propTypes={heading:D.a.string,url:D.a.string,childLinks:D.a.arrayOf(B).isRequired,prevGtmData:D.a.shape({})};var en=Object(l.memo)(Z);function rn(){var n=z()(["\n  border-right: 1px solid #ccc;\n  width: 180px;\n  margin-left: -1px;\n\n  :last-child {\n    border-right: none;\n  }\n"]);return rn=function(){return n},n}function on(n){var t=n.navItems,e=void 0===t?[]:t,i=n.position,u=n.prevGtmData;return p.a.createElement(an,null,e.map(function(n,t){var e=n.title,r=n.url,o=n.subItems,a=function(n,t,e,r,o){return _()({},o,{level:2,url:t,columnPosition:r+1,columnGroupName:n,columnGroupPosition:e+1})}(e,r,t,i,u);return p.a.createElement(en,{key:e,heading:e,url:r,childLinks:o,prevGtmData:a,position:i})}))}var an=W.a.div(rn());on.propTypes={navItems:D.a.arrayOf(B).isRequired,position:D.a.number.isRequired,prevGtmData:D.a.shape({})};var un=Object(l.memo)(on);function cn(){var n=z()(["\n  display: flex;\n"]);return cn=function(){return n},n}function sn(){var n=z()(["\n  padding: 15px 15px 15px 0;\n  border: 1px solid #ccc;\n  background-color: #fff;\n  position: absolute;\n  top: auto;\n  display: ",";\n  transform: translateX(-50%);\n  left: 50%;\n"]);return sn=function(){return n},n}var ln=W.a.div(sn(),function(n){return n.open?"block":"none"}),fn=W.a.div(cn()),pn=function(n){function t(n){var u;return g()(this,t),u=w()(this,E()(t).call(this,n)),I()(P()(u),"updateMargin",function(n){return u.state.margin!==n&&u.setState({margin:n,shouldCalculatePosition:!1})}),I()(P()(u),"resetMargin",function(){return 0!==u.state.margin&&u.setState({margin:0,shouldCalculatePosition:!0})}),I()(P()(u),"calculateMargin",function(){var n=u.props,t=n.open,e=n.navLeft,r=n.navRight;if(t&&h()(["current","getBoundingClientRect"])(u.containerRef)){var o=u.containerRef.current.getBoundingClientRect(),a=c()(0,["left"])(o),i=c()(0,["right"])(o);a<e?u.updateMargin(e-a):r<i&&u.updateMargin(r-i)}}),u.state={margin:0,shouldCalculatePosition:!0},u.containerRef=Object(l.createRef)(),u}return S()(t,n),x()(t,[{key:"componentDidMount",value:function(){window.addEventListener("resize",this.resetMargin,!0)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.resetMargin,!0)}},{key:"componentDidUpdate",value:function(n){var t=this.props.open,e=this.state.shouldCalculatePosition;n.open!==t&&e&&this.calculateMargin()}},{key:"render",value:function(){var n=this.props,t=n.open,e=n.category,r=n.navItems,o=n.prevGtmData,a={marginLeft:"".concat(this.state.margin,"px")};return p.a.createElement(ln,{open:t,ref:this.containerRef,style:a},p.a.createElement(fn,null,r.map(function(n,t){return p.a.createElement(un,{key:"".concat(e,"-").concat(t),navItems:n,position:t,prevGtmData:o})})))}}]),t}(l.Component);pn.propTypes={open:D.a.bool.isRequired,category:D.a.string.isRequired,navItems:D.a.arrayOf(D.a.arrayOf(B)).isRequired,navLeft:D.a.number.isRequired,navRight:D.a.number.isRequired,prevGtmData:D.a.shape({}).isRequired};var vn=pn,dn=e(36),mn=e.n(dn),hn=e(27),yn=e.n(hn);function gn(){var n=z()(["\n    @media (min-width: ","px) {\n      ",";\n    }\n  "]);return gn=function(){return n},n}var bn={desktop:yn.a.desktop,custom:910,tablet:yn.a.tablet},xn=Object.keys(bn).reduce(function(n,t){var e=bn[t];return n[t]=function(){return Object(H.css)(gn(),e,H.css.apply(void 0,arguments))},n},{});function kn(){var n=z()(["\n    font-size: 13px;\n  "]);return kn=function(){return n},n}function wn(){var n=z()(["\n  font-weight: 700;\n  font-size: 11px;\n  margin-top: 4px;\n  border: 1px solid transparent;\n  border-bottom: none;\n  background-color: transparent;\n  color: ",";\n  text-decoration: none;\n  z-index: 150;\n  text-transform: uppercase;\n  padding: 9px 5px 7px;\n  display: inline-block;\n  border-top-left-radius: 3px;\n  border-top-right-radius: 3px\n  white-space: nowrap;\n\n  ","\n  \n  ","\n"]);return wn=function(){return n},n}function On(){var n=z()(["\n  z-index: 150;\n  font-family: ",";\n  position: relative;\n  list-style: none;\n"]);return On=function(){return n},n}var En=W.a.li(On(),mn.a.family.v2),Cn=W.a.a(wn(),function(n){return n.titleColor},function(n){return n.open?"border-color: ".concat(U,";"):""},xn.custom(kn())),Pn=function(n){function t(n){var o;return g()(this,t),o=w()(this,E()(t).call(this,n)),I()(P()(o),"handleDocumentTouch",function(n){o.containerRef.current&&(o.containerRef.current.contains(n.target)||o.toggleDropdownMenu(!1))}),I()(P()(o),"handleTabletTouch",function(n){o.state.open||(n.preventDefault(),o.toggleDropdownMenu(!0))}),I()(P()(o),"toggleDropdownMenu",function(n){var t=o.state,e=t.open,r=t.alreadyTracked;!e&&n?o.gtmTimer.current=setTimeout(function(){var n=o.props,t=n.position,e=n.navItem;r||(q.trackHover({position:t+1,title:e.title}),o.setState({alreadyTracked:!0}))},500):o.gtmTimer.current&&!n&&clearTimeout(o.gtmTimer.current),o.setState({open:n})}),I()(P()(o),"handleMouseDown",function(n){return q.trackClick(n)}),o.state={open:!1,alreadyTracked:!1},o.gtmTimer=Object(l.createRef)(),o.containerRef=Object(l.createRef)(),o}return S()(t,n),x()(t,[{key:"componentDidUpdate",value:function(){this.state.open&&document.addEventListener("touchend",this.handleDocumentTouch,!0)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("touchend",this.handleDocumentTouch,!0)}},{key:"render",value:function(){var t=this,n=this.props,e=n.navItem,r=n.position,o=this.state.open;if(e){var a=e.title,i=e.url,u=e.subItems,c=e.titleColor,s={level:1,url:e&&e.url,menuPosition:r+1,menuName:e&&e.title};return p.a.createElement(En,{onMouseEnter:function(){return t.toggleDropdownMenu(!0)},onMouseLeave:function(){return t.toggleDropdownMenu(!1)},ref:this.containerRef,"aria-haspopup":"true","aria-expanded":o},p.a.createElement(Cn,{open:o,onTouchEnd:function(n){return t.handleTabletTouch(n)},onMouseDown:function(){return t.handleMouseDown(s)},href:i,titleColor:c},a),p.a.createElement(A.Consumer,null,function(n){var t=n.navLeft,e=n.navRight;return p.a.createElement(vn,{open:o,category:a,navItems:u||[],prevGtmData:s,navLeft:t,navRight:e})}))}return p.a.createElement(En,null)}}]),t}(l.PureComponent);Pn.propTypes={navItem:B.isRequired};var jn=Pn;function Sn(){var n=z()(["\n  display: flex;\n  justify-content: space-around;\n  margin: 0;\n  padding: 0;\n"]);return Sn=function(){return n},n}var Rn=W.a.ul(Sn()),In=function(n){function a(){var n,t;g()(this,a);for(var e=arguments.length,r=new Array(e),o=0;o<e;o++)r[o]=arguments[o];return t=w()(this,(n=E()(a)).call.apply(n,[this].concat(r))),I()(P()(t),"containerRef",Object(l.createRef)()),I()(P()(t),"state",{navLeft:0,navRight:0}),I()(P()(t),"handleNavEdgeCoords",function(){if(h()(["current","getBoundingClientRect"])(t.containerRef)){var n=t.containerRef.current.getBoundingClientRect();t.setState({navLeft:c()(0,["left"])(n),navRight:c()(0,["right"])(n)})}}),t}return S()(a,n),x()(a,[{key:"componentDidMount",value:function(){this.handleNavEdgeCoords(),window.addEventListener("resize",this.handleNavEdgeCoords,!0)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.handleNavEdgeCoords,!0)}},{key:"render",value:function(){var n=this.state,t=n.navLeft,e=n.navRight,r=this.props.navItems;return p.a.createElement("nav",null,p.a.createElement(Rn,{ref:this.containerRef,"data-testid":"DesktopNavWrapper"},p.a.createElement(A.Provider,{value:{navLeft:t,navRight:e}},r&&r.map(function(n,t){return p.a.createElement(jn,{key:"category-".concat(t),navItem:n,position:t})}))))}}]),a}(l.PureComponent);In.propTypes={navItems:D.a.arrayOf(B).isRequired};var Tn=In,Dn=Object(l.createContext)(null);function An(){var n=z()(["\n  background: ",";\n  color: #fff;\n  border-top-width: 1px;\n  border-color: ",";\n  justify-content: center;\n  align-items: center;\n  & svg {\n    margin: 0 8px;\n  }\n"]);return An=function(){return n},n}function Bn(){var n=z()(["\n  color: ",";\n  text-decoration: none;\n  border-width: 0px 1px 1px;\n  border-color: ",";\n  border-style: solid;\n  display: flex;\n  justify-content: space-between;\n  padding: 18px;\n  cursor: pointer;\n"]);return Bn=function(){return n},n}function Ln(){var n=z()(["\n  list-style: none;\n  padding: 0;\n  margin: 0;\n  font-family: NOTHS2;\n  font-size: 16px;\n  text-transform: lowercase;\n"]);return Ln=function(){return n},n}function _n(){var n=z()(["\n  box-sizing: content-box;\n  width: calc(100% - 20px);\n  min-width: calc(100% - 20px);\n  margin: 0 10px;\n  background-color: white;\n"]);return _n=function(){return n},n}function Mn(n){var e=n.navItems,i=n.goForward,r=n.goBack,u=n.onLinkClick,c=n.panelIndex;return p.a.createElement(Nn,{"data-testid":"Panel-".concat(c)},p.a.createElement(Dn.Consumer,null,function(n){var t=n.setOpen;return p.a.createElement(Fn,null,0===c?p.a.createElement("li",null,p.a.createElement(Gn,{"data-testid":"CloseButton",onClick:function(){return t(!1)}},"close",p.a.createElement(it,null))):p.a.createElement("li",null,p.a.createElement(Gn,{"data-testid":"BackButton",onClick:r},p.a.createElement(at,{color:"#fff"}),"back")),e.map(function(t,e){var n=t.title,r=t.url,o=t.subItems,a=t.titleColor;return p.a.createElement("li",{key:n,"data-testid":"Panel-".concat(c,"-Link-").concat(e)},p.a.createElement(qn,{titleColor:a,onClick:function(n){return function(n,t,e){var r=t.title,o=t.url,a=t.subItems;a&&0<a.length?(n.preventDefault(),i(e,r)):u(e,r,o)}(n,t,e)},href:r},n,o&&0<o.length&&p.a.createElement(at,{direction:"right"})))}))}))}var Nn=W.a.nav(_n()),Fn=W.a.ul(Ln()),qn=W.a.a(Bn(),function(n){var t=n.titleColor;return t||d.a.emperor},d.a.silver),Gn=W()(qn)(An(),d.a.veniceBlue,d.a.veniceBlue);Mn.defaultProps={navItems:[],isFirstPanel:!1},Mn.propTypes={navItems:D.a.arrayOf(B).isRequired,isFirstPanel:D.a.bool,goForward:D.a.func.isRequired,goBack:D.a.func.isRequired,onLinkClick:D.a.func.isRequired};var zn=Object(l.memo)(Mn),Hn=e(37),Wn=e.n(Hn),Un=e(28),Xn=e.n(Un),Jn=function(){function n(){g()(this,n)}return x()(n,null,[{key:"trackSetOpen",value:function(n){F({event:"nav_events",eventCategory:"Navigation - mobile menu",eventAction:n?"Open":"Close",eventLabel:void 0})}},{key:"trackGoForward",value:function(n,t,e){var r=n.length,o=t+1;F({event:"nav_events",eventCategory:"Navigation - mobile menu",eventAction:"Select",eventLabel:"".concat(r," | ").concat(o," | ").concat(e)})}},{key:"trackGoBack",value:function(n){var t=n.length-1;F({event:"nav_events",eventCategory:"Navigation - mobile menu",eventAction:"Back",eventLabel:"Back to level ".concat(t)})}},{key:"trackLinkClick",value:function(n,t,e,r){var o=n.length,a=t+1;F({event:"nav_clicks",eventCategory:"Navigation - mobile menu",eventAction:"Click",eventLabel:"".concat(o," | ").concat(a," | ").concat(e),destinationUrl:r})}}]),n}();function Vn(){var n=z()(["\n  display: flex;\n  transition: transform 0.5s;\n  ","\n"]);return Vn=function(){return n},n}function Yn(){var n=z()(["\n  overflow: hidden;\n"]);return Yn=function(){return n},n}var Kn=W.a.div(Yn()),Qn=W.a.div(Vn(),function(n){var t=n.translateX;return"transform: translateX(-".concat(t,"00%);")}),Zn=function(n){function o(){var n,f;g()(this,o);for(var t=arguments.length,e=new Array(t),r=0;r<t;r++)e[r]=arguments[r];return f=w()(this,(n=E()(o)).call.apply(n,[this].concat(e))),I()(P()(f),"state",{currentPanelIndex:0,currentPanelPath:[[0]],panels:[{index:0,path:[[0]]}],isAnimating:!1}),I()(P()(f),"goForward",function(n,t){var e=f.state,r=e.isAnimating,o=e.panels,a=e.currentPanelIndex,i=e.currentPanelPath;if(!r){var u=a+1,c=o.some(function(n){return n.index===u}),s=3<o.length||c,l=[].concat(Xn()(i),[[n,"subItems"]]);f.setState({currentPanelPath:l,currentPanelIndex:u,panels:s?f.updateExistingPanel(l,u):f.createPanel(l,u),isAnimating:!0},function(){return Jn.trackGoForward(i,n,t)})}}),I()(P()(f),"goBack",function(){var n=f.state,t=n.isAnimating,e=n.currentPanelIndex,r=n.currentPanelPath;if(!t){var o=Wn()(1)(r);f.setState({currentPanelPath:o,currentPanelIndex:e-1,isAnimating:!0},function(){return Jn.trackGoBack(r)})}}),I()(P()(f),"handleLinkClick",function(n,t,e){var r=f.state.currentPanelPath;Jn.trackLinkClick(r,n,t,e)}),I()(P()(f),"reenableClicks",function(){return f.setState({isAnimating:!1})}),I()(P()(f),"getNavPanelItems",function(n){return c()([],u()(n))(f.props.navItems)}),f}return S()(o,n),x()(o,[{key:"createPanel",value:function(n,t){return[].concat(Xn()(this.state.panels),[{index:t,path:n}])}},{key:"updateExistingPanel",value:function(t,e){return this.state.panels.map(function(n){return n.index===e?_()({},n,{path:t}):n})}},{key:"render",value:function(){var r=this,n=this.state,o=n.panels,t=n.currentPanelIndex;return p.a.createElement(Kn,{"data-testid":"PanelsWrapper"},p.a.createElement(Qn,{translateX:t,onTransitionEnd:this.reenableClicks},o.map(function(n,t){var e=r.getNavPanelItems(o[t].path);return p.a.createElement(zn,{navItems:e,key:n.path,onLinkClick:r.handleLinkClick,goForward:r.goForward,goBack:r.goBack,panelIndex:t})})))}}]),o}(l.PureComponent);Zn.propTypes={navItems:D.a.arrayOf(D.a.arrayOf(B)).isRequired};var $n=Zn;function nt(){var n=z()(["\n  transform: ",";\n"]);return nt=function(){return n},n}function tt(n){var t=n.direction,e=n.color;return p.a.createElement(rt,{direction:t,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1.874 3.125",height:"13px",width:"13px"},p.a.createElement("path",{fill:e,d:"M1.562 3.125l.312-.313-1.25-1.25 1.25-1.25L1.562 0 0 1.562z"}))}var et={up:90,right:180,down:270,left:0},rt=W.a.svg(nt(),function(n){var t=n.direction;return"rotate(".concat(et[t],"deg)")});tt.defaultProps={direction:"left",color:d.a.timberwolf},tt.propTypes={direction:D.a.string,color:D.a.string};function ot(){return p.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 68 47",className:"gc-icon gc-icon--burger",height:"22px",width:"22px"},p.a.createElement("path",{d:"M63.5 9h-59C2 9 0 7 0 4.5S2 0 4.5 0h59C66 0 68 2 68 4.5S66 9 63.5 9zM63.5 28h-59C2 28 0 26 0 23.5S2 19 4.5 19h59c2.5 0 4.5 2 4.5 4.5S66 28 63.5 28zM63.5 47h-59C2 47 0 45 0 42.5S2 38 4.5 38h59c2.5 0 4.5 2 4.5 4.5S66 47 63.5 47z",fill:d.a.emperor}))}var at=Object(l.memo)(tt),it=function(){return p.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 3.125 3.125",height:"13px",width:"13px"},p.a.createElement("path",{fill:"#fff",d:"M3.125.312L2.812 0l-1.25 1.25L.313 0 0 .312l1.25 1.25L0 2.812l.312.313 1.25-1.25 1.25 1.25.313-.313-1.25-1.25z"}))};function ut(){var n=z()(["\n  padding: 8px;\n  margin: 0;\n  cursor: pointer;\n  background: none;\n  position: absolute;\n  border: none;\n  z-index: 1;\n  top: -40px;\n\n  /* THIS IS TO ACCOMODATE THE SEARCH ICON TOGGLING OPEN & CLOSE TO ADJUST POSITION OF THE NAV. DO NOT REMOVE */\n  &.search--is-open {\n    top: -96px;\n  }\n"]);return ut=function(){return n},n}var ct=W.a.button(ut()),st=function(n){function a(){var n,t;g()(this,a);for(var e=arguments.length,r=new Array(e),o=0;o<e;o++)r[o]=arguments[o];return t=w()(this,(n=E()(a)).call.apply(n,[this].concat(r))),I()(P()(t),"state",{open:!1}),I()(P()(t),"setOpen",function(n){t.setState({open:n},function(){return Jn.trackSetOpen(n)})}),t}return S()(a,n),x()(a,[{key:"render",value:function(){var n=this,t=this.props.navItems,e=this.state.open;return p.a.createElement(p.a.Fragment,null,p.a.createElement(ct,{className:"BurgerWrapper",onClick:function(){return n.setOpen(!e)},"aria-label":"".concat(e?"Close":"Open"," Mobile Navigation"),"aria-expanded":e,"data-testid":"BurgerWrapper"},p.a.createElement(ot,null)),e&&p.a.createElement(Dn.Provider,{value:{setOpen:this.setOpen}},p.a.createElement($n,{navItems:t})))}}]),a}(l.Component);st.propTypes={navItems:D.a.arrayOf(D.a.arrayOf(B)).isRequired};var lt=st;function ft(){var n=z()(["\n    display: block;\n  "]);return ft=function(){return n},n}function pt(){var n=z()(["\n  display: none;\n\n  ","\n"]);return pt=function(){return n},n}function vt(){var n=z()(["\n    display: none;\n  "]);return vt=function(){return n},n}function dt(){var n=z()(["\n  display: block;\n\n  ","\n"]);return dt=function(){return n},n}function mt(){var n=z()(["\n  position: relative;\n  max-width: 960px;\n  margin: 0 auto;\n"]);return mt=function(){return n},n}function ht(n){return s()(function(n){var t=c()("",["title"])(n);return{id:t,title:t,url:n.include_link?c()("",["url"])(n):null,subItems:c()([],["links"])(n)}})(n)}function yt(n){var t=n.navData,i=n.isMobile;return f()(c()([],["navigation_categories"]),s()(function(n){var t=c()(null,["category"])(n),e=c()("",["title"])(t),r=c()(null,["url"])(t),o=c()(null,["department_color"])(t),a=c()(null,["title_color"])(o);return{id:e,title:e,url:r,titleColor:""!==a?a:d.a.emperor,subItems:f()(c()([],["columns"]),s()(c()([],["column_sections"])),function(n){return function(n,t){return t?f()(u.a,ht)(n):s()(ht)(n)}(n,i)})(t)}}),function(n){return i?[n]:n})(t)}var gt=W.a.div(mt()),bt=W.a.div(dt(),xn.tablet(vt())),xt=W.a.div(pt(),xn.tablet(ft()));t.a=Object(l.memo)(function(n){var t=n.navData;if(t.length<1||!t)return p.a.createElement(gt,null);var e=yt({navData:t,isMobile:!0}),r=yt({navData:t,isMobile:!1});return p.a.createElement(gt,null,p.a.createElement(xt,{"data-testid":"DesktopNav"},p.a.createElement(Tn,{navItems:r})),p.a.createElement(bt,{"data-testid":"MobileNav"},p.a.createElement(lt,{navItems:e})))})},function(n,t,e){var r=e(9),o=e(21),a=e(49),i=e(50),u=e(25),c=e(51),s=e(32),l=r(o(["filter"],c,function(e,r){return i(r)?u(function(n,t){return e(r[t])&&(n[t]=r[t]),n},{},s(r)):a(e,r)}));n.exports=l},function(n,t){n.exports={family:{v2:"NOTHS2",v3:"NOTHS3",sams:"NOTHS Sams"},size:{xs:"12px",s:"14px",m:"16px",l:"20px",xl:"22px",xxl:"28px",xxxl:"36px",xxxxl:"38px",hero:"42px"}}},function(n,t,e){var r=e(9),o=e(21),a=e(57),i=r(o([],e(61),a));n.exports=i},function(t,n){function e(n){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n})(n)}function r(n){return"function"==typeof Symbol&&"symbol"===e(Symbol.iterator)?t.exports=r=function(n){return e(n)}:t.exports=r=function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":e(n)},r(n)}t.exports=r},function(e,n){function r(n,t){return e.exports=r=Object.setPrototypeOf||function(n,t){return n.__proto__=t,n},r(n,t)}e.exports=r},function(n,t,e){"use strict";var u=e(41);function r(){}function o(){}o.resetWarningCache=r,n.exports=function(){function n(n,t,e,r,o,a){if(a!==u){var i=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw i.name="Invariant Violation",i}}function t(){return n}var e={array:n.isRequired=n,bool:n,func:n,number:n,object:n,string:n,symbol:n,any:n,arrayOf:t,element:n,elementType:n,instanceOf:t,node:n,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:o,resetWarningCache:r};return e.PropTypes=e}},function(n,t,e){"use strict";n.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(n,t){n.exports=function(n,t){return function(){return t.call(this,n.apply(this,arguments))}}},function(n,t,e){var r=e(24)(e(25));n.exports=r},function(n,t){n.exports=function(n){return"[object String]"===Object.prototype.toString.call(n)}},function(n,t){var e=function(){function n(n){this.f=n}return n.prototype["@@transducer/init"]=function(){throw new Error("init not implemented on XWrap")},n.prototype["@@transducer/result"]=function(n){return n},n.prototype["@@transducer/step"]=function(n,t){return this.f(n,t)},n}();n.exports=function(n){return new e(n)}},function(n,t,e){var r=e(19),o=e(9)(function(n,t){return r(n.length,function(){return n.apply(t,arguments)})});n.exports=o},function(n,t,e){var r=e(30),o=e(14)(r("tail",e(31)(1,1/0)));n.exports=o},function(n,t){n.exports=function(n){return null!=n&&"function"==typeof n["@@transducer/step"]}},function(n,t){n.exports=function(n,t){for(var e=0,r=t.length,o=[];e<r;)n(t[e])&&(o[o.length]=t[e]),e+=1;return o}},function(n,t){n.exports=function(n){return"[object Object]"===Object.prototype.toString.call(n)}},function(n,t,e){var r=e(9),o=e(22),a=function(){function n(n,t){this.xf=t,this.f=n}return n.prototype["@@transducer/init"]=o.init,n.prototype["@@transducer/result"]=o.result,n.prototype["@@transducer/step"]=function(n,t){return this.f(t)?this.xf["@@transducer/step"](n,t):n},n}(),i=r(function(n,t){return new a(n,t)});n.exports=i},function(n,t,e){var r=e(33),o=Object.prototype.toString,a=function(){return"[object Arguments]"===o.call(arguments)?function(n){return"[object Arguments]"===o.call(n)}:function(n){return r("callee",n)}}();n.exports=a},function(n,t,e){var r=e(9)(function(n,t){return null==t||t!=t?n:t});n.exports=r},function(n,t){n.exports=function(n){if(Array.isArray(n)){for(var t=0,e=new Array(n.length);t<n.length;t++)e[t]=n[t];return e}}},function(n,t){n.exports=function(n){if(Symbol.iterator in Object(n)||"[object Arguments]"===Object.prototype.toString.call(n))return Array.from(n)}},function(n,t){n.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}},function(n,t,e){var r=e(58);n.exports=function(n,t){return r(n<t.length?t.length-n:0,t)}},function(n,t,e){var r=e(9),o=e(21),a=e(59),i=e(31),u=r(o(["take"],a,function(n,t){return i(0,n<0?1/0:n,t)}));n.exports=u},function(n,t,e){var r=e(9),o=e(60),a=e(22),i=function(){function n(n,t){this.xf=t,this.n=n,this.i=0}return n.prototype["@@transducer/init"]=a.init,n.prototype["@@transducer/result"]=a.result,n.prototype["@@transducer/step"]=function(n,t){this.i+=1;var e=0===this.n?n:this.xf["@@transducer/step"](n,t);return 0<=this.n&&this.i>=this.n?o(e):e},n}(),u=r(function(n,t){return new i(n,t)});n.exports=u},function(n,t){n.exports=function(n){return n&&n["@@transducer/reduced"]?n:{"@@transducer/value":n,"@@transducer/reduced":!0}}},function(n,t,e){var r=e(9),o=e(22),a=function(){function n(n,t){this.xf=t,this.pos=0,this.full=!1,this.acc=new Array(n)}return n.prototype["@@transducer/init"]=o.init,n.prototype["@@transducer/result"]=function(n){return this.acc=null,this.xf["@@transducer/result"](n)},n.prototype["@@transducer/step"]=function(n,t){return this.full&&(n=this.xf["@@transducer/step"](n,this.acc[this.pos])),this.store(t),n},n.prototype.store=function(n){this.acc[this.pos]=n,this.pos+=1,this.pos===this.acc.length&&(this.pos=0,this.full=!0)},n}(),i=r(function(n,t){return new a(n,t)});n.exports=i},function(n,t,e){var s=e(29);n.exports=function(c){return function n(t){for(var e,r,o,a=[],i=0,u=t.length;i<u;){if(s(t[i]))for(o=0,r=(e=c?n(t[i]):t[i]).length;o<r;)a[a.length]=e[o],o+=1;else a[a.length]=t[i];i+=1}return a}}},function(n,t){n.exports=function(n,t){for(var e=0,r=t.length,o=Array(r);e<r;)o[e]=n(t[e]),e+=1;return o}},function(n,t,e){var r=e(9),o=e(22),a=function(){function n(n,t){this.xf=t,this.f=n}return n.prototype["@@transducer/init"]=o.init,n.prototype["@@transducer/result"]=o.result,n.prototype["@@transducer/step"]=function(n,t){return this.xf["@@transducer/step"](n,this.f(t))},n}(),i=r(function(n,t){return new a(n,t)});n.exports=i},function(n,t,e){var r=e(19),o=e(14),a=e(9),i=e(66),u=a(function(n,t){return 1===n?o(t):r(n,i(n,[],t))});n.exports=u},function(n,t,e){var s=e(19),l=e(20);n.exports=function a(i,u,c){return function(){for(var n=[],t=0,e=i,r=0;r<u.length||t<arguments.length;){var o;r<u.length&&(!l(u[r])||arguments.length<=t)?o=u[r]:(o=arguments[t],t+=1),n[r]=o,l(o)||(e-=1),r+=1}return e<=0?c.apply(this,n):s(e,a(i,n,c))}}},function(n,t,e){n.exports=e(70)},function(n,t){function c(n,t,e,r,o,a,i){try{var u=n[a](i),c=u.value}catch(n){return void e(n)}u.done?t(c):Promise.resolve(c).then(r,o)}n.exports=function(u){return function(){var n=this,i=arguments;return new Promise(function(t,e){var r=u.apply(n,i);function o(n){c(r,t,e,o,a,"next",n)}function a(n){c(r,t,e,o,a,"throw",n)}o(void 0)})}}},function(n,t){n.exports=o},function(n,t){n.exports=a},,function(n,t,e){"use strict";e.r(t);function a(n,t){return 1<arguments.length&&void 0!==t&&t?d:0<arguments.length&&void 0!==n&&n?m:v}var r=e(34),o=e(0),i=Object(o.createContext)({navData:{}}),u=e(67),c=e.n(u),s=e(68),l=e.n(s),f=e(69),p=e.n(f),v={api_key:"blt6444b9076ec27f02",access_token:"cs1a9f7493ebc95bee270e3755",environment:"live"},d={api_key:"blt6444b9076ec27f02",access_token:"cs32921c345201a090417b8a63",environment:"preview"},m={api_key:"blt6444b9076ec27f02",access_token:"cs61a1b6b4cd96389fcad2440e",environment:"qa"},h=function(){var n=l()(c.a.mark(function n(){var t,e,r,o=arguments;return c.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return t=a(0<o.length&&void 0!==o[0]&&o[0],1<o.length&&void 0!==o[1]&&o[1]),n.next=5,p.a.Stack(t);case 5:return e=n.sent,n.next=8,e.ContentType("navigation").Entry("blt5faae31fa34df2d9").toJSON().fetch().catch(function(){return[]});case 8:return r=n.sent,n.abrupt("return",r);case 10:case"end":return n.stop()}},n)}));return function(){return n.apply(this,arguments)}}();e.d(t,"Navigation",function(){return r.a}),e.d(t,"GlobalDataContext",function(){return i}),e.d(t,"navigationFetcher",function(){return h})}],i.c=c,i.d=function(n,t,e){i.o(n,t)||Object.defineProperty(n,t,{enumerable:!0,get:e})},i.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},i.t=function(t,n){if(1&n&&(t=i(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(i.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var r in t)i.d(e,r,function(n){return t[n]}.bind(null,r));return e},i.n=function(n){var t=n&&n.__esModule?function(){return n.default}:function(){return n};return i.d(t,"a",t),t},i.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},i.p="",i(i.s=72);function i(n){if(c[n])return c[n].exports;var t=c[n]={i:n,l:!1,exports:{}};return u[n].call(t.exports,t,t.exports,i),t.l=!0,t.exports}var u,c});