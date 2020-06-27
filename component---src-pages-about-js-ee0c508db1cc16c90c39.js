(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"10Zl":function(e,t,o){e.exports={header:"header-module--header--2Q3RK",navigatorWrapper:"header-module--navigator-wrapper--2prub"}},"3XHS":function(e,t,o){"use strict";o.r(t),o.d(t,"default",(function(){return s}));var a=o("q1tI"),n=o.n(a),r=o("cqnt"),l=o("Wbzz"),c=o("RTzZ"),i=o("X3x9");var p=function(e){var t,o;function a(){return e.apply(this,arguments)||this}return o=e,(t=a).prototype=Object.create(o.prototype),t.prototype.constructor=t,t.__proto__=o,a.prototype.render=function(){return n.a.createElement("a",{href:this.props.to,target:"_blank",rel:"noreferrer"},this.props.children)},a}(n.a.Component);var s=function(e){var t,o;function a(){return e.apply(this,arguments)||this}return o=e,(t=a).prototype=Object.create(o.prototype),t.prototype.constructor=t,t.__proto__=o,a.prototype.render=function(){return n.a.createElement(c.a,{page:"about",color:r.a.c1},n.a.createElement(i.a,null,n.a.createElement("h1",null,"welcome to my house"),n.a.createElement("p",null,"I'm Tyler/",n.a.createElement("code",null,"tntokum"),". Thanks for stopping by."),n.a.createElement("br",null),n.a.createElement("p",null,n.a.createElement("code",{style:{fontFamily:"IBM Plex Sans Thin",fontSize:"1rem",fontWeight:"bold"}},"patchwork")," is a site built by me, using ",n.a.createElement(p,{to:"https://reactjs.org/"},"React")," and ",n.a.createElement(p,{to:"https://www.gatsbyjs.org/"},"Gatsby")," as the main frameworks for content, building, and deploying. Fonts were taken from ",n.a.createElement(p,{to:"https://fonts.google.com/"},"Google Fonts"),".",n.a.createElement("br",null),"I did the color palette, too, which is very similar to building a website in that I don't know what I'm doing. Right now, they're are kind of beach-y. This is a reference to the fact that I like beaches."),n.a.createElement("br",null),n.a.createElement("p",null,"This site serves a few broad purposes:",n.a.createElement("ul",null,n.a.createElement("li",null,"My resume can reference this place. This is either a great thing or a really bad thing depending on what I put on here."),n.a.createElement("li",null,"It helps teach me a little about modern webdev, since this is my first real foray into HTML/CSS/JavaScript and all these (by which I mean 2) confusing newfangled frameworks."),n.a.createElement("li",null,"For some reason, I always wanted a slice of the Internet for me, no matter how small. See this ",n.a.createElement(p,{to:"https://en.wikipedia.org/wiki/Territory_(animal)"},"relevant Wikipedia article"),"."),n.a.createElement("li",null,"I could even use this as a blog of sorts. However, my attention span has a habit of rounding to 0 seconds, so I probably wouldn't even"))),n.a.createElement("br",null),n.a.createElement("p",null,"Hit me up on the ",n.a.createElement(l.Link,{to:"/contact/"},"contact")," page."),n.a.createElement("br",null),n.a.createElement("p",null,"Fun facts about me:",n.a.createElement("ul",null,n.a.createElement("li",null,"I know more coding languages than real languages.",n.a.createElement("ul",null,n.a.createElement("li",null,"I know only one real language (this is up for debate).",n.a.createElement("ul",null,n.a.createElement("li",null,"I may or may not know only two coding languages."))))),n.a.createElement("li",null,"I am allergic to dogs, and this makes me sad.",n.a.createElement("ul",null,n.a.createElement("li",null,"Dogs are not allergic to me. Thank goodness."))),n.a.createElement("li",null,"My guitar has six strings.",n.a.createElement("ul",null,n.a.createElement("li",null,"Guess how many fingers I have."))),n.a.createElement("li",null)))))},a}(n.a.Component)},"4ROF":function(e,t,o){e.exports={patchworkFlex:"patchwork-module--patchwork-flex--2xknC",patchworkTopSpacerTitle:"patchwork-module--patchwork-top-spacer-title--x8VbN",patchworkBottomSpacer:"patchwork-module--patchwork-bottom-spacer--2jLY0",contentSeparator:"patchwork-module--content-separator--1rUEi"}},HgBI:function(e,t,o){e.exports={navigator:"navigator-module--navigator--26f47"}},LbRr:function(e,t,o){"use strict";o.d(t,"a",(function(){return g}));var a=o("q1tI"),n=o.n(a),r=(o("a1Th"),o("Btvt"),o("Wbzz")),l=o("vrJE"),c=o.n(l);var i=function(e){var t,o;function a(t){var o;return(o=e.call(this,t)||this).handleScroll=o.handleScroll.bind(function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(o)),o}o=e,(t=a).prototype=Object.create(o.prototype),t.prototype.constructor=t,t.__proto__=o;var l=a.prototype;return l.componentDidMount=function(){window.addEventListener("scroll",this.props.scrollAction)},l.componentWillUnmount=function(){window.removeEventListener("scroll",this.props.scrollAction)},l.handleScroll=function(){this.props.scrollAction()},l.render=function(){var e=this.props.page.localeCompare(this.props.children)?void 0:"underline";return n.a.createElement(r.Link,{to:this.props.to,className:c.a.blockLink,style:{backgroundColor:this.props.color,paddingTop:this.props.paddingTop,textDecoration:e}},this.props.children)},a}(n.a.Component),p=o("cqnt"),s=o("HgBI"),u=o.n(s);var m=function(e){var t,o;function a(t){var o;return(o=e.call(this,t)||this).collapseWithScroll=o.collapseWithScroll.bind(function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(o)),o.state={paddingTop:"6rem"},o}o=e,(t=a).prototype=Object.create(o.prototype),t.prototype.constructor=t,t.__proto__=o;var r=a.prototype;return r.collapseWithScroll=function(){var e=parseFloat(window.getComputedStyle(document.body).getPropertyValue("font-size")),t=(window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0)/e;t<=5.5?this.setState({paddingTop:(6-t).toString()+"rem"}):t>5.5&&this.state.paddingTop.localeCompare(".5rem")&&this.setState({paddingTop:".5rem"})},r.render=function(){var e=this.state.paddingTop;return n.a.createElement("nav",{className:u.a.navigator},n.a.createElement("ul",null,void 0===this.props.page||this.props.page.localeCompare("home")?n.a.createElement("li",null,n.a.createElement(i,{page:this.props.page,color:p.a.main,to:"/",scrollAction:this.collapseWithScroll,paddingTop:e},"home")):void 0,n.a.createElement("li",null,n.a.createElement(i,{page:this.props.page,color:p.a.c1,to:"/about/",scrollAction:this.collapseWithScroll,paddingTop:e},"about")),n.a.createElement("li",null,n.a.createElement(i,{page:this.props.page,color:p.a.c2,to:"/contact/",scrollAction:this.collapseWithScroll,paddingTop:e},"contact")),n.a.createElement("li",null,n.a.createElement(i,{page:this.props.page,color:p.a.c3,to:"/blog/",scrollAction:this.collapseWithScroll,paddingTop:e},"blog"))))},a}(n.a.Component),h=o("10Zl"),d=o.n(h);var g=function(e){var t,o;function a(){return e.apply(this,arguments)||this}return o=e,(t=a).prototype=Object.create(o.prototype),t.prototype.constructor=t,t.__proto__=o,a.prototype.render=function(){return n.a.createElement("header",{className:d.a.header},n.a.createElement("div",{className:d.a.navigatorWrapper},n.a.createElement(m,{page:this.props.page})))},a}(n.a.Component)},RTzZ:function(e,t,o){"use strict";o.d(t,"a",(function(){return i}));var a=o("q1tI"),n=o.n(a),r=o("LbRr"),l=o("4ROF"),c=o.n(l);var i=function(e){var t,o;function a(){return e.apply(this,arguments)||this}return o=e,(t=a).prototype=Object.create(o.prototype),t.prototype.constructor=t,t.__proto__=o,a.prototype.render=function(){return n.a.createElement("div",{className:c.a.patchwork},n.a.createElement(r.a,{siteTitle:"patchwork",page:this.props.page}),n.a.createElement("div",{className:c.a.patchworkFlex},n.a.createElement("div",{className:c.a.patchworkTopSpacerTitle},this.props.page),n.a.createElement("div",{className:c.a.contentSeparator,style:{backgroundColor:this.props.color}}),this.props.children,n.a.createElement("div",{className:c.a.patchworkBottomSpacer})))},a}(n.a.Component)},X3x9:function(e,t,o){"use strict";o.d(t,"a",(function(){return c}));var a=o("q1tI"),n=o.n(a),r=o("olJS"),l=o.n(r);var c=function(e){var t,o;function a(){return e.apply(this,arguments)||this}return o=e,(t=a).prototype=Object.create(o.prototype),t.prototype.constructor=t,t.__proto__=o,a.prototype.render=function(){return n.a.createElement("main",{className:l.a.main},n.a.createElement("div",{className:l.a.content},this.props.children))},a}(n.a.Component)},cqnt:function(e,t,o){"use strict";t.a={main:"#FAF0E6",c1:"#B2E0F3",c2:"#FFC1C1",c3:"#B4D09F",white:"#ECE5E0",accent:"#FF9C6B"}},olJS:function(e,t,o){e.exports={main:"content-module--main--Sg_Ql",content:"content-module--content--3sEbK"}},vrJE:function(e,t,o){e.exports={blockLink:"block-module--block-link--1V1Ua",blockText:"block-module--block-text--31lIo"}}}]);
//# sourceMappingURL=component---src-pages-about-js-ee0c508db1cc16c90c39.js.map