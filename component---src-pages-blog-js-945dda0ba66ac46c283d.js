(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"10Zl":function(e,t,o){e.exports={header:"header-module--header--2Q3RK",navigatorWrapper:"header-module--navigator-wrapper--2prub"}},"4ROF":function(e,t,o){e.exports={patchworkFlex:"patchwork-module--patchwork-flex--2xknC",patchworkTopSpacerTitle:"patchwork-module--patchwork-top-spacer-title--x8VbN",patchworkBottomSpacer:"patchwork-module--patchwork-bottom-spacer--2jLY0",main:"patchwork-module--main--2Ck1I",contentSeparator:"patchwork-module--content-separator--1rUEi"}},HgBI:function(e,t,o){e.exports={navigator:"navigator-module--navigator--26f47"}},LbRr:function(e,t,o){"use strict";o.d(t,"a",(function(){return v}));var r=o("q1tI"),n=o.n(r),a=(o("a1Th"),o("Btvt"),o("Wbzz")),c=o("vrJE"),l=o.n(c);var p=function(e){var t,o;function r(t){var o;return(o=e.call(this,t)||this).handleScroll=o.handleScroll.bind(function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(o)),o}o=e,(t=r).prototype=Object.create(o.prototype),t.prototype.constructor=t,t.__proto__=o;var c=r.prototype;return c.componentDidMount=function(){window.addEventListener("scroll",this.props.scrollAction)},c.componentWillUnmount=function(){window.removeEventListener("scroll",this.props.scrollAction)},c.handleScroll=function(){this.props.scrollAction()},c.render=function(){var e=this.props.page.localeCompare(this.props.children)?void 0:"underline";return n.a.createElement(a.Link,{to:this.props.to,className:l.a.blockLink,style:{backgroundColor:this.props.color,paddingTop:this.props.paddingTop,textDecoration:e}},this.props.children)},r}(n.a.Component),i=o("cqnt"),s=o("HgBI"),u=o.n(s);var h=function(e){var t,o;function r(t){var o;return(o=e.call(this,t)||this).collapseWithScroll=o.collapseWithScroll.bind(function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(o)),o.state={paddingTop:"6rem"},o}o=e,(t=r).prototype=Object.create(o.prototype),t.prototype.constructor=t,t.__proto__=o;var a=r.prototype;return a.collapseWithScroll=function(){var e=parseFloat(window.getComputedStyle(document.body).getPropertyValue("font-size")),t=(window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0)/e;t<=5.5?this.setState({paddingTop:(6-t).toString()+"rem"}):t>5.5&&this.state.paddingTop.localeCompare(".5rem")&&this.setState({paddingTop:".5rem"})},a.render=function(){var e=this.state.paddingTop;return n.a.createElement("nav",{className:u.a.navigator},n.a.createElement("ul",null,void 0===this.props.page||this.props.page.localeCompare("home")?n.a.createElement("li",null,n.a.createElement(p,{page:this.props.page,color:i.a.main,to:"/",scrollAction:this.collapseWithScroll,paddingTop:e},"home")):void 0,n.a.createElement("li",null,n.a.createElement(p,{page:this.props.page,color:i.a.c1,to:"/about/",scrollAction:this.collapseWithScroll,paddingTop:e},"about")),n.a.createElement("li",null,n.a.createElement(p,{page:this.props.page,color:i.a.c2,to:"/contact/",scrollAction:this.collapseWithScroll,paddingTop:e},"contact")),n.a.createElement("li",null,n.a.createElement(p,{page:this.props.page,color:i.a.c3,to:"/blog/",scrollAction:this.collapseWithScroll,paddingTop:e},"blog"))))},r}(n.a.Component),d=o("10Zl"),m=o.n(d);var v=function(e){var t,o;function r(){return e.apply(this,arguments)||this}return o=e,(t=r).prototype=Object.create(o.prototype),t.prototype.constructor=t,t.__proto__=o,r.prototype.render=function(){return n.a.createElement("header",{className:m.a.header},n.a.createElement("div",{className:m.a.navigatorWrapper},n.a.createElement(h,{page:this.props.page})))},r}(n.a.Component)},RTzZ:function(e,t,o){"use strict";o.d(t,"a",(function(){return p}));var r=o("q1tI"),n=o.n(r),a=o("LbRr"),c=o("4ROF"),l=o.n(c);var p=function(e){var t,o;function r(){return e.apply(this,arguments)||this}return o=e,(t=r).prototype=Object.create(o.prototype),t.prototype.constructor=t,t.__proto__=o,r.prototype.render=function(){var e=this;return document.title=this.props.page+" - patchwork",n.a.createElement("div",{className:l.a.patchwork},n.a.createElement(a.a,{siteTitle:"patchwork",page:this.props.page}),n.a.createElement("div",{className:l.a.patchworkFlex},n.a.createElement("div",{className:l.a.patchworkTopSpacerTitle},this.props.page),n.a.createElement("div",{className:l.a.contentSeparator,style:{backgroundColor:this.props.color}}),n.a.createElement("main",{className:l.a.main},n.a.Children.map(this.props.children,(function(t){return n.a.cloneElement(t,{color:e.props.color})})))))},r}(n.a.Component)},X3x9:function(e,t,o){"use strict";o.d(t,"a",(function(){return l}));var r=o("q1tI"),n=o.n(r),a=o("olJS"),c=o.n(a);var l=function(e){var t,o;function r(){return e.apply(this,arguments)||this}return o=e,(t=r).prototype=Object.create(o.prototype),t.prototype.constructor=t,t.__proto__=o,r.prototype.render=function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:c.a.contentSeparator,style:{backgroundColor:this.props.color}}),n.a.createElement("div",{className:c.a.content},this.props.children))},r}(n.a.Component)},cqnt:function(e,t,o){"use strict";t.a={main:"#FAF0E6",c1:"#B2E0F3",c2:"#FFC1C1",c3:"#B4D09F",white:"#ECE5E0",accent:"#FF9C6B"}},olJS:function(e,t,o){e.exports={content:"content-module--content--3sEbK",contentHeader:"content-module--content-header--1UhRL",contentSeparator:"content-module--content-separator--hD67T"}},"vk+0":function(e,t,o){"use strict";o.d(t,"a",(function(){return l}));var r=o("q1tI"),n=o.n(r),a=o("olJS"),c=o.n(a);var l=function(e){var t,o;function r(){return e.apply(this,arguments)||this}return o=e,(t=r).prototype=Object.create(o.prototype),t.prototype.constructor=t,t.__proto__=o,r.prototype.render=function(){return n.a.createElement("div",{className:c.a.contentHeader,style:{outline:this.props.color+" 4px solid"}},n.a.createElement("h1",null,this.props.children))},r}(n.a.Component)},vrJE:function(e,t,o){e.exports={blockLink:"block-module--block-link--1V1Ua",blockText:"block-module--block-text--31lIo"}},vx99:function(e,t,o){"use strict";o.r(t);var r=o("q1tI"),n=o.n(r),a=o("cqnt"),c=o("RTzZ"),l=o("X3x9"),p=o("vk+0");var i=function(e){var t,o;function r(){return e.apply(this,arguments)||this}return o=e,(t=r).prototype=Object.create(o.prototype),t.prototype.constructor=t,t.__proto__=o,r.prototype.render=function(){return n.a.createElement(c.a,{page:"blog",color:a.a.c3},n.a.createElement(p.a,null,"the future is bright"),n.a.createElement(l.a,null,n.a.createElement("p",null,"when i grow up, i want to be ",n.a.createElement("s",null,"a cog in the machine")," an ice road trucker")),n.a.createElement(p.a,null,"a day at the planetarium"),n.a.createElement(l.a,null,n.a.createElement("p",null,'"There are over four... hundred stars in our galaxy, maybe more. No one knows for sure. Many have said that the universe is even larger than the Indian Ocean..." - Shawn Spencer')),n.a.createElement(p.a,null,"$SPY 1000C 9/28"),n.a.createElement(l.a,null,n.a.createElement("p",null,"stonks only go up")),n.a.createElement(p.a,null,"tell me why"),n.a.createElement(l.a,null,n.a.createElement("p",null,"ain't nothin' but a heartbreak")))},r}(n.a.Component);t.default=i}}]);
//# sourceMappingURL=component---src-pages-blog-js-945dda0ba66ac46c283d.js.map