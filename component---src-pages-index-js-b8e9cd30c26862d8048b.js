(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"10Zl":function(t,e,o){t.exports={header:"header-module--header--2Q3RK",navigatorWrapper:"header-module--navigator-wrapper--2prub"}},"4ROF":function(t,e,o){t.exports={patchworkFlex:"patchwork-module--patchwork-flex--2xknC",patchworkTopSpacerTitle:"patchwork-module--patchwork-top-spacer-title--x8VbN",patchworkBottomSpacer:"patchwork-module--patchwork-bottom-spacer--2jLY0",contentSeparator:"patchwork-module--content-separator--1rUEi"}},Csz0:function(t,e,o){t.exports=o.p+"static/IBMPlexSans-Thin-42f0ea92b31ed0b62987a1a4ad7231ca.woff2"},HgBI:function(t,e,o){t.exports={navigator:"navigator-module--navigator--26f47"}},LbRr:function(t,e,o){"use strict";o.d(e,"a",(function(){return f}));var r=o("q1tI"),n=o.n(r),a=(o("a1Th"),o("Btvt"),o("Wbzz")),p=o("vrJE"),c=o.n(p);var l=function(t){var e,o;function r(e){var o;return(o=t.call(this,e)||this).handleScroll=o.handleScroll.bind(function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(o)),o}o=t,(e=r).prototype=Object.create(o.prototype),e.prototype.constructor=e,e.__proto__=o;var p=r.prototype;return p.componentDidMount=function(){window.addEventListener("scroll",this.props.scrollAction)},p.componentWillUnmount=function(){window.removeEventListener("scroll",this.props.scrollAction)},p.handleScroll=function(){this.props.scrollAction()},p.render=function(){var t=this.props.page.localeCompare(this.props.children)?void 0:"underline";return n.a.createElement(a.Link,{to:this.props.to,className:c.a.blockLink,style:{backgroundColor:this.props.color,paddingTop:this.props.paddingTop,textDecoration:t}},this.props.children)},r}(n.a.Component),i=o("cqnt"),s=o("HgBI"),u=o.n(s);var d=function(t){var e,o;function r(e){var o;return(o=t.call(this,e)||this).collapseWithScroll=o.collapseWithScroll.bind(function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(o)),o.state={paddingTop:"6rem"},o}o=t,(e=r).prototype=Object.create(o.prototype),e.prototype.constructor=e,e.__proto__=o;var a=r.prototype;return a.collapseWithScroll=function(){var t=parseFloat(window.getComputedStyle(document.body).getPropertyValue("font-size")),e=(window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0)/t;e<=5.5?this.setState({paddingTop:(6-e).toString()+"rem"}):e>5.5&&this.state.paddingTop.localeCompare(".5rem")&&this.setState({paddingTop:".5rem"})},a.render=function(){var t=this.state.paddingTop;return n.a.createElement("nav",{className:u.a.navigator},n.a.createElement("ul",null,void 0===this.props.page||this.props.page.localeCompare("home")?n.a.createElement("li",null,n.a.createElement(l,{page:this.props.page,color:i.a.main,to:"/",scrollAction:this.collapseWithScroll,paddingTop:t},"home")):void 0,n.a.createElement("li",null,n.a.createElement(l,{page:this.props.page,color:i.a.c1,to:"/about/",scrollAction:this.collapseWithScroll,paddingTop:t},"about")),n.a.createElement("li",null,n.a.createElement(l,{page:this.props.page,color:i.a.c2,to:"/contact/",scrollAction:this.collapseWithScroll,paddingTop:t},"contact")),n.a.createElement("li",null,n.a.createElement(l,{page:this.props.page,color:i.a.c3,to:"/blog/",scrollAction:this.collapseWithScroll,paddingTop:t},"blog"))))},r}(n.a.Component),h=o("10Zl"),m=o.n(h);var f=function(t){var e,o;function r(){return t.apply(this,arguments)||this}return o=t,(e=r).prototype=Object.create(o.prototype),e.prototype.constructor=e,e.__proto__=o,r.prototype.render=function(){return n.a.createElement("header",{className:m.a.header},n.a.createElement("div",{className:m.a.navigatorWrapper},n.a.createElement(d,{page:this.props.page})))},r}(n.a.Component)},RXBc:function(t,e,o){"use strict";o.r(e);var r=o("q1tI"),n=o.n(r),a=o("LbRr"),p=o("4ROF"),c=o.n(p);var l=function(t){var e,o;function r(){return t.apply(this,arguments)||this}return o=t,(e=r).prototype=Object.create(o.prototype),e.prototype.constructor=e,e.__proto__=o,r.prototype.render=function(){return n.a.createElement("div",{className:c.a.patchwork},n.a.createElement(a.a,{page:this.props.page}),n.a.createElement("div",{className:c.a.patchworkFlex},this.props.children))},r}(n.a.Component),i=(o("Csz0"),o("tSXV")),s=o.n(i);var u=function(t){var e,o;function r(){return t.apply(this,arguments)||this}return o=t,(e=r).prototype=Object.create(o.prototype),e.prototype.constructor=e,e.__proto__=o,r.prototype.render=function(){return n.a.createElement("div",{className:s.a.titleHolder},n.a.createElement("div",{className:s.a.title},"patchwork"),n.a.createElement("p",{className:s.a.subtitle},"a show & tell by tntokum"))},r}(n.a.Component);var d=function(t){var e,o;function r(){return t.apply(this,arguments)||this}return o=t,(e=r).prototype=Object.create(o.prototype),e.prototype.constructor=e,e.__proto__=o,r.prototype.render=function(){return n.a.createElement(l,{page:"home"},n.a.createElement(u,null))},r}(n.a.Component);e.default=d},cqnt:function(t,e,o){"use strict";e.a={main:"#FAF0E6",c1:"#B2E0F3",c2:"#FFC1C1",c3:"#B4D09F",white:"#ECE5E0",accent:"#FF9C6B"}},tSXV:function(t,e,o){t.exports={titleHolder:"title-module--title-holder--1nNGw",title:"title-module--title--2k7Uw",subtitle:"title-module--subtitle--3gS-J"}},vrJE:function(t,e,o){t.exports={blockLink:"block-module--block-link--1V1Ua",blockText:"block-module--block-text--31lIo"}}}]);
//# sourceMappingURL=component---src-pages-index-js-b8e9cd30c26862d8048b.js.map