(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"10Zl":function(t,o,e){t.exports={header:"header-module--header--2Q3RK"}},"4ROF":function(t,o,e){t.exports={patchwork:"patchwork-module--patchwork--1bOJo"}},Csz0:function(t,o,e){t.exports=e.p+"static/IBMPlexSans-Thin-42f0ea92b31ed0b62987a1a4ad7231ca.woff2"},HgBI:function(t,o,e){t.exports={navigator:"navigator-module--navigator--26f47"}},RXBc:function(t,o,e){"use strict";e.r(o);var n=e("q1tI"),r=e.n(n),a=e("cqnt"),l=e("TkuX"),c=e("X3x9"),i=(e("Csz0"),e("tSXV")),p=e.n(i);var s=function(t){var o,e;function n(){return t.apply(this,arguments)||this}return e=t,(o=n).prototype=Object.create(e.prototype),o.prototype.constructor=o,o.__proto__=e,n.prototype.render=function(){return r.a.createElement("div",{className:p.a.titleHolder},r.a.createElement("div",{className:p.a.title},"patchwork"),r.a.createElement("p",{className:p.a.subtitle},"a show & tell by tntokum"))},n}(r.a.Component);var u=function(t){var o,e;function n(){return t.apply(this,arguments)||this}e=t,(o=n).prototype=Object.create(e.prototype),o.prototype.constructor=o,o.__proto__=e;var i=n.prototype;return i.componentDidMount=function(){document.body.style.backgroundColor=a.a.main},i.render=function(){return r.a.createElement(l.a,{color:a.a.main},r.a.createElement(c.a,{color:a.a.main},r.a.createElement(s,null)))},n}(r.a.Component);o.default=u},TkuX:function(t,o,e){"use strict";e.d(o,"a",(function(){return y}));var n=e("q1tI"),r=e.n(n),a=(e("a1Th"),e("Btvt"),e("Wbzz")),l=e("qich"),c=e.n(l);var i=function(t){var o,e;function n(o){var e;return(e=t.call(this,o)||this).handleScroll=e.handleScroll.bind(function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(e)),e}e=t,(o=n).prototype=Object.create(e.prototype),o.prototype.constructor=o,o.__proto__=e;var l=n.prototype;return l.componentDidMount=function(){window.addEventListener("scroll",this.props.scrollAction),console.log("listening mounted")},l.componentWillUnmount=function(){window.removeEventListener("scroll",this.props.scrollAction),console.log("listening unmounted")},l.handleScroll=function(){this.props.scrollAction()},l.render=function(){return console.log("smallblock paddingTop:"+this.props.paddingTop.toString()),r.a.createElement(a.Link,{to:this.props.to,className:c.a.smallblockLink},r.a.createElement("div",{className:c.a.smallblock,style:{backgroundColor:this.props.color,paddingTop:this.props.paddingTop}},this.props.children))},n}(r.a.Component),p=e("cqnt");var s=function(t){var o,e;function n(o){var e;return(e=t.call(this,o)||this).collapseWithScroll=e.collapseWithScroll.bind(function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(e)),e.state={paddingTop:100},e}e=t,(o=n).prototype=Object.create(e.prototype),o.prototype.constructor=o,o.__proto__=e;var a=n.prototype;return a.collapseWithScroll=function(){var t=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0;t<90?(this.setState({paddingTop:90-t}),console.log(this.state.paddingTop)):t>90&&0!==this.state.paddingTop&&(this.setState({paddingTop:10}),console.log(this.state.paddingTop))},a.render=function(){var t=this.state.paddingTop;return r.a.createElement("nav",{className:this.props.className},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(i,{color:p.a.main,to:"/",scrollAction:this.collapseWithScroll,paddingTop:t},"Home")),r.a.createElement("li",null,r.a.createElement(i,{color:p.a.c1,to:"/about/",scrollAction:this.collapseWithScroll,paddingTop:t},"About")),r.a.createElement("li",null,r.a.createElement(i,{color:p.a.c2,to:"/contact/",scrollAction:this.collapseWithScroll,paddingTop:t},"Contact")),r.a.createElement("li",null,r.a.createElement(i,{color:p.a.c3,to:"/blog/",scrollAction:this.collapseWithScroll,paddingTop:t},"Blog"))))},n}(r.a.Component),u=e("10Zl"),d=e.n(u),m=e("HgBI"),h=e.n(m);var f=function(t){var o,e;function n(){return t.apply(this,arguments)||this}return e=t,(o=n).prototype=Object.create(e.prototype),o.prototype.constructor=o,o.__proto__=e,n.prototype.render=function(){return r.a.createElement("header",{className:d.a.header},r.a.createElement(s,{className:h.a.navigator}))},n}(r.a.Component),b=e("4ROF"),v=e.n(b);var y=function(t){var o,e;function n(){return t.apply(this,arguments)||this}return e=t,(o=n).prototype=Object.create(e.prototype),o.prototype.constructor=o,o.__proto__=e,n.prototype.render=function(){return r.a.createElement("div",{className:v.a.patchwork,style:{backgroundColor:this.props.color}},r.a.createElement(f,{siteTitle:"Patchwork"}),this.props.children)},n}(r.a.Component)},X3x9:function(t,o,e){"use strict";e.d(o,"a",(function(){return c}));var n=e("q1tI"),r=e.n(n),a=e("olJS"),l=e.n(a);var c=function(t){var o,e;function n(){return t.apply(this,arguments)||this}return e=t,(o=n).prototype=Object.create(e.prototype),o.prototype.constructor=o,o.__proto__=e,n.prototype.render=function(){return r.a.createElement("div",{className:l.a.content},this.props.children)},n}(r.a.Component)},cqnt:function(t,o,e){"use strict";o.a={main:"#F9F8F7",c1:"#A79398",c2:"#80A0C4",c3:"#694D8F",accent:"#32344D"}},olJS:function(t,o,e){t.exports={content:"content-module--content--3sEbK"}},qich:function(t,o,e){t.exports={smallblock:"smallblock-module--smallblock--3phPt",smallblockLink:"smallblock-module--smallblock-link--tFNdK"}},tSXV:function(t,o,e){t.exports={titleHolder:"title-module--title-holder--1nNGw",title:"title-module--title--2k7Uw",subtitle:"title-module--subtitle--3gS-J"}}}]);
//# sourceMappingURL=component---src-pages-index-js-8e79b8b03969802fc42b.js.map