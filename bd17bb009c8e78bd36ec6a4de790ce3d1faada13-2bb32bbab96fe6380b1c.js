(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{"10Zl":function(t,e,r){t.exports={header:"header-module--header--2Q3RK",navigatorWrapper:"header-module--navigator-wrapper--2prub"}},"4ROF":function(t,e,r){t.exports={patchworkFlex:"patchwork-module--patchwork-flex--2xknC",patchworkTopSpacerTitle:"patchwork-module--patchwork-top-spacer-title--x8VbN",patchworkBottomSpacer:"patchwork-module--patchwork-bottom-spacer--2jLY0",contentSeparator:"patchwork-module--content-separator--1rUEi"}},"51K9":function(t){t.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"title":"Gatsby Default Starter","description":"Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.","author":"@gatsbyjs"}}}}')},"8+s/":function(t,e,r){"use strict";r("V+eJ"),r("bWfx"),r("f3/d"),r("hHhE"),r("HAE/");var n,o=r("q1tI"),a=(n=o)&&"object"==typeof n&&"default"in n?n.default:n;function i(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var c=!("undefined"==typeof window||!window.document||!window.document.createElement);t.exports=function(t,e,r){if("function"!=typeof t)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof e)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==r&&"function"!=typeof r)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(n){if("function"!=typeof n)throw new Error("Expected WrappedComponent to be a React component.");var s,u=[];function l(){s=t(u.map((function(t){return t.props}))),p.canUseDOM?e(s):r&&(s=r(s))}var p=function(t){var e,r;function o(){return t.apply(this,arguments)||this}r=t,(e=o).prototype=Object.create(r.prototype),e.prototype.constructor=e,e.__proto__=r,o.peek=function(){return s},o.rewind=function(){if(o.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var t=s;return s=void 0,u=[],t};var i=o.prototype;return i.UNSAFE_componentWillMount=function(){u.push(this),l()},i.componentDidUpdate=function(){l()},i.componentWillUnmount=function(){var t=u.indexOf(this);u.splice(t,1),l()},i.render=function(){return a.createElement(n,this.props)},o}(o.PureComponent);return i(p,"displayName","SideEffect("+function(t){return t.displayName||t.name||"Component"}(n)+")"),i(p,"canUseDOM",c),p}}},"HAE/":function(t,e,r){var n=r("XKFU");n(n.S+n.F*!r("nh4g"),"Object",{defineProperty:r("hswa").f})},HgBI:function(t,e,r){t.exports={navigator:"navigator-module--navigator--26f47"}},LbRr:function(t,e,r){"use strict";r.d(e,"a",(function(){return m}));var n=r("q1tI"),o=r.n(n),a=(r("a1Th"),r("Btvt"),r("Wbzz")),i=r("vrJE"),c=r.n(i);var s=function(t){var e,r;function n(e){var r;return(r=t.call(this,e)||this).handleScroll=r.handleScroll.bind(function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(r)),r}r=t,(e=n).prototype=Object.create(r.prototype),e.prototype.constructor=e,e.__proto__=r;var i=n.prototype;return i.componentDidMount=function(){window.addEventListener("scroll",this.props.scrollAction)},i.componentWillUnmount=function(){window.removeEventListener("scroll",this.props.scrollAction)},i.handleScroll=function(){this.props.scrollAction()},i.render=function(){var t=this.props.page.localeCompare(this.props.children)?void 0:"underline";return o.a.createElement(a.Link,{to:this.props.to,className:c.a.blockLink,style:{backgroundColor:this.props.color,paddingTop:this.props.paddingTop,textDecoration:t}},this.props.children)},n}(o.a.Component),u=r("cqnt"),l=r("HgBI"),p=r.n(l);var f=function(t){var e,r;function n(e){var r;return(r=t.call(this,e)||this).collapseWithScroll=r.collapseWithScroll.bind(function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(r)),r.state={paddingTop:"6rem"},r}r=t,(e=n).prototype=Object.create(r.prototype),e.prototype.constructor=e,e.__proto__=r;var a=n.prototype;return a.collapseWithScroll=function(){var t=parseFloat(window.getComputedStyle(document.body).getPropertyValue("font-size")),e=(window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0)/t;e<=5.5?this.setState({paddingTop:(6-e).toString()+"rem"}):e>5.5&&this.state.paddingTop.localeCompare(".5rem")&&this.setState({paddingTop:".5rem"})},a.render=function(){var t=this.state.paddingTop;return o.a.createElement("nav",{className:p.a.navigator},o.a.createElement("ul",null,void 0===this.props.page||this.props.page.localeCompare("home")?o.a.createElement("li",null,o.a.createElement(s,{page:this.props.page,color:u.a.main,to:"/",scrollAction:this.collapseWithScroll,paddingTop:t},"home")):void 0,o.a.createElement("li",null,o.a.createElement(s,{page:this.props.page,color:u.a.c1,to:"/about/",scrollAction:this.collapseWithScroll,paddingTop:t},"about")),o.a.createElement("li",null,o.a.createElement(s,{page:this.props.page,color:u.a.c2,to:"/contact/",scrollAction:this.collapseWithScroll,paddingTop:t},"contact")),o.a.createElement("li",null,o.a.createElement(s,{page:this.props.page,color:u.a.c3,to:"/blog/",scrollAction:this.collapseWithScroll,paddingTop:t},"blog"))))},n}(o.a.Component),d=r("10Zl"),h=r.n(d);var m=function(t){var e,r;function n(){return t.apply(this,arguments)||this}return r=t,(e=n).prototype=Object.create(r.prototype),e.prototype.constructor=e,e.__proto__=r,n.prototype.render=function(){return o.a.createElement("header",{className:h.a.header},o.a.createElement("div",{className:h.a.navigatorWrapper},o.a.createElement(f,{page:this.props.page})))},n}(o.a.Component)},Oyvg:function(t,e,r){var n=r("dyZX"),o=r("Xbzi"),a=r("hswa").f,i=r("kJMx").f,c=r("quPj"),s=r("C/va"),u=n.RegExp,l=u,p=u.prototype,f=/a/g,d=/a/g,h=new u(f)!==f;if(r("nh4g")&&(!h||r("eeVq")((function(){return d[r("K0xU")("match")]=!1,u(f)!=f||u(d)==d||"/a/i"!=u(f,"i")})))){u=function(t,e){var r=this instanceof u,n=c(t),a=void 0===e;return!r&&n&&t.constructor===u&&a?t:o(h?new l(n&&!a?t.source:t,e):l((n=t instanceof u)?t.source:t,n&&a?s.call(t):e),r?this:p,u)};for(var m=function(t){t in u||a(u,t,{configurable:!0,get:function(){return l[t]},set:function(e){l[t]=e}})},y=i(l),b=0;y.length>b;)m(y[b++]);p.constructor=u,u.prototype=p,r("KroJ")(n,"RegExp",u)}r("elZq")("RegExp")},RTzZ:function(t,e,r){"use strict";r.d(e,"a",(function(){return s}));var n=r("q1tI"),o=r.n(n),a=r("LbRr"),i=r("4ROF"),c=r.n(i);var s=function(t){var e,r;function n(){return t.apply(this,arguments)||this}return r=t,(e=n).prototype=Object.create(r.prototype),e.prototype.constructor=e,e.__proto__=r,n.prototype.render=function(){return o.a.createElement("div",{className:c.a.patchwork},o.a.createElement(a.a,{siteTitle:"patchwork",page:this.props.page}),o.a.createElement("div",{className:c.a.patchworkFlex},o.a.createElement("div",{className:c.a.patchworkTopSpacerTitle},this.props.page),o.a.createElement("div",{className:c.a.contentSeparator,style:{backgroundColor:this.props.color}}),this.props.children,o.a.createElement("div",{className:c.a.patchworkBottomSpacer})))},n}(o.a.Component)},ZhWT:function(t,e,r){r("SRfc"),r("RW0V"),r("a1Th"),r("h7Nl"),r("OEbY"),r("Oyvg"),r("LK8F"),r("T39b"),r("rGqo"),r("yt8O"),r("Btvt"),r("XfO3"),r("9AAn");var n="undefined"!=typeof Element,o="function"==typeof Map,a="function"==typeof Set,i="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;t.exports=function(t,e){try{return function t(e,r){if(e===r)return!0;if(e&&r&&"object"==typeof e&&"object"==typeof r){if(e.constructor!==r.constructor)return!1;var c,s,u,l;if(Array.isArray(e)){if((c=e.length)!=r.length)return!1;for(s=c;0!=s--;)if(!t(e[s],r[s]))return!1;return!0}if(o&&e instanceof Map&&r instanceof Map){if(e.size!==r.size)return!1;for(l=e.entries();!(s=l.next()).done;)if(!r.has(s.value[0]))return!1;for(l=e.entries();!(s=l.next()).done;)if(!t(s.value[1],r.get(s.value[0])))return!1;return!0}if(a&&e instanceof Set&&r instanceof Set){if(e.size!==r.size)return!1;for(l=e.entries();!(s=l.next()).done;)if(!r.has(s.value[0]))return!1;return!0}if(i&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(r)){if((c=e.length)!=r.length)return!1;for(s=c;0!=s--;)if(e[s]!==r[s])return!1;return!0}if(e.constructor===RegExp)return e.source===r.source&&e.flags===r.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===r.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===r.toString();if((c=(u=Object.keys(e)).length)!==Object.keys(r).length)return!1;for(s=c;0!=s--;)if(!Object.prototype.hasOwnProperty.call(r,u[s]))return!1;if(n&&e instanceof Element)return!1;for(s=c;0!=s--;)if(("_owner"!==u[s]&&"__v"!==u[s]&&"__o"!==u[s]||!e.$$typeof)&&!t(e[u[s]],r[u[s]]))return!1;return!0}return e!=e&&r!=r}(t,e)}catch(r){if((r.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw r}}},cqnt:function(t,e,r){"use strict";e.a={main:"#FAF0E6",c1:"#B2E0F3",c2:"#FFC1C1",c3:"#B4D09F",white:"#ECE5E0",accent:"#FF9C6B"}},"dZ+Y":function(t,e,r){"use strict";var n=r("XKFU"),o=r("CkkT")(3);n(n.P+n.F*!r("LyE8")([].some,!0),"Array",{some:function(t){return o(this,t,arguments[1])}})},h7Nl:function(t,e,r){var n=Date.prototype,o=n.toString,a=n.getTime;new Date(NaN)+""!="Invalid Date"&&r("KroJ")(n,"toString",(function(){var t=a.call(this);return t==t?o.call(this):"Invalid Date"}))},qhky:function(t,e,r){"use strict";(function(t){r.d(e,"a",(function(){return mt}));r("dZ+Y"),r("KKXr"),r("2Spj"),r("eM6i"),r("8+KV"),r("0l/t"),r("LK8F"),r("pIFo"),r("V+eJ"),r("/SS/"),r("hHhE"),r("91GP"),r("HAE/"),r("rE2o"),r("ioFf"),r("DNiP"),r("rGqo"),r("yt8O"),r("Btvt"),r("RW0V"),r("bWfx");var n,o,a,i,c=r("17x9"),s=r.n(c),u=r("8+s/"),l=r.n(u),p=r("ZhWT"),f=r.n(p),d=r("q1tI"),h=r.n(d),m=r("MgzW"),y=r.n(m),b="bodyAttributes",g="htmlAttributes",v="titleAttributes",T={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},w=(Object.keys(T).map((function(t){return T[t]})),"charset"),E="cssText",S="href",A="http-equiv",O="innerHTML",C="itemprop",k="name",j="property",x="rel",L="src",P="target",I={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},N="defaultTitle",R="defer",F="encodeSpecialCharacters",M="onChangeClientState",_="titleTemplate",q=Object.keys(I).reduce((function(t,e){return t[I[e]]=e,t}),{}),B=[T.NOSCRIPT,T.SCRIPT,T.STYLE],D="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},W=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")},H=function(){function t(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e}}(),K=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},Y=function(t,e){var r={};for(var n in t)e.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(t,n)&&(r[n]=t[n]);return r},U=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e},z=function(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===e?String(t):String(t).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},V=function(t){var e=$(t,T.TITLE),r=$(t,_);if(r&&e)return r.replace(/%s/g,(function(){return Array.isArray(e)?e.join(""):e}));var n=$(t,N);return e||n||void 0},J=function(t){return $(t,M)||function(){}},Z=function(t,e){return e.filter((function(e){return void 0!==e[t]})).map((function(e){return e[t]})).reduce((function(t,e){return K({},t,e)}),{})},G=function(t,e){return e.filter((function(t){return void 0!==t[T.BASE]})).map((function(t){return t[T.BASE]})).reverse().reduce((function(e,r){if(!e.length)for(var n=Object.keys(r),o=0;o<n.length;o++){var a=n[o].toLowerCase();if(-1!==t.indexOf(a)&&r[a])return e.concat(r)}return e}),[])},X=function(t,e,r){var n={};return r.filter((function(e){return!!Array.isArray(e[t])||(void 0!==e[t]&&nt("Helmet: "+t+' should be of type "Array". Instead found type "'+D(e[t])+'"'),!1)})).map((function(e){return e[t]})).reverse().reduce((function(t,r){var o={};r.filter((function(t){for(var r=void 0,a=Object.keys(t),i=0;i<a.length;i++){var c=a[i],s=c.toLowerCase();-1===e.indexOf(s)||r===x&&"canonical"===t[r].toLowerCase()||s===x&&"stylesheet"===t[s].toLowerCase()||(r=s),-1===e.indexOf(c)||c!==O&&c!==E&&c!==C||(r=c)}if(!r||!t[r])return!1;var u=t[r].toLowerCase();return n[r]||(n[r]={}),o[r]||(o[r]={}),!n[r][u]&&(o[r][u]=!0,!0)})).reverse().forEach((function(e){return t.push(e)}));for(var a=Object.keys(o),i=0;i<a.length;i++){var c=a[i],s=y()({},n[c],o[c]);n[c]=s}return t}),[]).reverse()},$=function(t,e){for(var r=t.length-1;r>=0;r--){var n=t[r];if(n.hasOwnProperty(e))return n[e]}return null},Q=(n=Date.now(),function(t){var e=Date.now();e-n>16?(n=e,t(e)):setTimeout((function(){Q(t)}),0)}),tt=function(t){return clearTimeout(t)},et="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||Q:t.requestAnimationFrame||Q,rt="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||tt:t.cancelAnimationFrame||tt,nt=function(t){return console&&"function"==typeof console.warn&&console.warn(t)},ot=null,at=function(t,e){var r=t.baseTag,n=t.bodyAttributes,o=t.htmlAttributes,a=t.linkTags,i=t.metaTags,c=t.noscriptTags,s=t.onChangeClientState,u=t.scriptTags,l=t.styleTags,p=t.title,f=t.titleAttributes;st(T.BODY,n),st(T.HTML,o),ct(p,f);var d={baseTag:ut(T.BASE,r),linkTags:ut(T.LINK,a),metaTags:ut(T.META,i),noscriptTags:ut(T.NOSCRIPT,c),scriptTags:ut(T.SCRIPT,u),styleTags:ut(T.STYLE,l)},h={},m={};Object.keys(d).forEach((function(t){var e=d[t],r=e.newTags,n=e.oldTags;r.length&&(h[t]=r),n.length&&(m[t]=d[t].oldTags)})),e&&e(),s(t,h,m)},it=function(t){return Array.isArray(t)?t.join(""):t},ct=function(t,e){void 0!==t&&document.title!==t&&(document.title=it(t)),st(T.TITLE,e)},st=function(t,e){var r=document.getElementsByTagName(t)[0];if(r){for(var n=r.getAttribute("data-react-helmet"),o=n?n.split(","):[],a=[].concat(o),i=Object.keys(e),c=0;c<i.length;c++){var s=i[c],u=e[s]||"";r.getAttribute(s)!==u&&r.setAttribute(s,u),-1===o.indexOf(s)&&o.push(s);var l=a.indexOf(s);-1!==l&&a.splice(l,1)}for(var p=a.length-1;p>=0;p--)r.removeAttribute(a[p]);o.length===a.length?r.removeAttribute("data-react-helmet"):r.getAttribute("data-react-helmet")!==i.join(",")&&r.setAttribute("data-react-helmet",i.join(","))}},ut=function(t,e){var r=document.head||document.querySelector(T.HEAD),n=r.querySelectorAll(t+"[data-react-helmet]"),o=Array.prototype.slice.call(n),a=[],i=void 0;return e&&e.length&&e.forEach((function(e){var r=document.createElement(t);for(var n in e)if(e.hasOwnProperty(n))if(n===O)r.innerHTML=e.innerHTML;else if(n===E)r.styleSheet?r.styleSheet.cssText=e.cssText:r.appendChild(document.createTextNode(e.cssText));else{var c=void 0===e[n]?"":e[n];r.setAttribute(n,c)}r.setAttribute("data-react-helmet","true"),o.some((function(t,e){return i=e,r.isEqualNode(t)}))?o.splice(i,1):a.push(r)})),o.forEach((function(t){return t.parentNode.removeChild(t)})),a.forEach((function(t){return r.appendChild(t)})),{oldTags:o,newTags:a}},lt=function(t){return Object.keys(t).reduce((function(e,r){var n=void 0!==t[r]?r+'="'+t[r]+'"':""+r;return e?e+" "+n:n}),"")},pt=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(t).reduce((function(e,r){return e[I[r]||r]=t[r],e}),e)},ft=function(t,e,r){switch(t){case T.TITLE:return{toComponent:function(){return t=e.title,r=e.titleAttributes,(n={key:t})["data-react-helmet"]=!0,o=pt(r,n),[h.a.createElement(T.TITLE,o,t)];var t,r,n,o},toString:function(){return function(t,e,r,n){var o=lt(r),a=it(e);return o?"<"+t+' data-react-helmet="true" '+o+">"+z(a,n)+"</"+t+">":"<"+t+' data-react-helmet="true">'+z(a,n)+"</"+t+">"}(t,e.title,e.titleAttributes,r)}};case b:case g:return{toComponent:function(){return pt(e)},toString:function(){return lt(e)}};default:return{toComponent:function(){return function(t,e){return e.map((function(e,r){var n,o=((n={key:r})["data-react-helmet"]=!0,n);return Object.keys(e).forEach((function(t){var r=I[t]||t;if(r===O||r===E){var n=e.innerHTML||e.cssText;o.dangerouslySetInnerHTML={__html:n}}else o[r]=e[t]})),h.a.createElement(t,o)}))}(t,e)},toString:function(){return function(t,e,r){return e.reduce((function(e,n){var o=Object.keys(n).filter((function(t){return!(t===O||t===E)})).reduce((function(t,e){var o=void 0===n[e]?e:e+'="'+z(n[e],r)+'"';return t?t+" "+o:o}),""),a=n.innerHTML||n.cssText||"",i=-1===B.indexOf(t);return e+"<"+t+' data-react-helmet="true" '+o+(i?"/>":">"+a+"</"+t+">")}),"")}(t,e,r)}}}},dt=function(t){var e=t.baseTag,r=t.bodyAttributes,n=t.encode,o=t.htmlAttributes,a=t.linkTags,i=t.metaTags,c=t.noscriptTags,s=t.scriptTags,u=t.styleTags,l=t.title,p=void 0===l?"":l,f=t.titleAttributes;return{base:ft(T.BASE,e,n),bodyAttributes:ft(b,r,n),htmlAttributes:ft(g,o,n),link:ft(T.LINK,a,n),meta:ft(T.META,i,n),noscript:ft(T.NOSCRIPT,c,n),script:ft(T.SCRIPT,s,n),style:ft(T.STYLE,u,n),title:ft(T.TITLE,{title:p,titleAttributes:f},n)}},ht=l()((function(t){return{baseTag:G([S,P],t),bodyAttributes:Z(b,t),defer:$(t,R),encode:$(t,F),htmlAttributes:Z(g,t),linkTags:X(T.LINK,[x,S],t),metaTags:X(T.META,[k,w,A,j,C],t),noscriptTags:X(T.NOSCRIPT,[O],t),onChangeClientState:J(t),scriptTags:X(T.SCRIPT,[L,O],t),styleTags:X(T.STYLE,[E],t),title:V(t),titleAttributes:Z(v,t)}}),(function(t){ot&&rt(ot),t.defer?ot=et((function(){at(t,(function(){ot=null}))})):(at(t),ot=null)}),dt)((function(){return null})),mt=(o=ht,i=a=function(t){function e(){return W(this,e),U(this,t.apply(this,arguments))}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),e.prototype.shouldComponentUpdate=function(t){return!f()(this.props,t)},e.prototype.mapNestedChildrenToProps=function(t,e){if(!e)return null;switch(t.type){case T.SCRIPT:case T.NOSCRIPT:return{innerHTML:e};case T.STYLE:return{cssText:e}}throw new Error("<"+t.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},e.prototype.flattenArrayTypeChildren=function(t){var e,r=t.child,n=t.arrayTypeChildren,o=t.newChildProps,a=t.nestedChildren;return K({},n,((e={})[r.type]=[].concat(n[r.type]||[],[K({},o,this.mapNestedChildrenToProps(r,a))]),e))},e.prototype.mapObjectTypeChildren=function(t){var e,r,n=t.child,o=t.newProps,a=t.newChildProps,i=t.nestedChildren;switch(n.type){case T.TITLE:return K({},o,((e={})[n.type]=i,e.titleAttributes=K({},a),e));case T.BODY:return K({},o,{bodyAttributes:K({},a)});case T.HTML:return K({},o,{htmlAttributes:K({},a)})}return K({},o,((r={})[n.type]=K({},a),r))},e.prototype.mapArrayTypeChildrenToProps=function(t,e){var r=K({},e);return Object.keys(t).forEach((function(e){var n;r=K({},r,((n={})[e]=t[e],n))})),r},e.prototype.warnOnInvalidChildren=function(t,e){return!0},e.prototype.mapChildrenToProps=function(t,e){var r=this,n={};return h.a.Children.forEach(t,(function(t){if(t&&t.props){var o=t.props,a=o.children,i=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(t).reduce((function(e,r){return e[q[r]||r]=t[r],e}),e)}(Y(o,["children"]));switch(r.warnOnInvalidChildren(t,a),t.type){case T.LINK:case T.META:case T.NOSCRIPT:case T.SCRIPT:case T.STYLE:n=r.flattenArrayTypeChildren({child:t,arrayTypeChildren:n,newChildProps:i,nestedChildren:a});break;default:e=r.mapObjectTypeChildren({child:t,newProps:e,newChildProps:i,nestedChildren:a})}}})),e=this.mapArrayTypeChildrenToProps(n,e)},e.prototype.render=function(){var t=this.props,e=t.children,r=Y(t,["children"]),n=K({},r);return e&&(n=this.mapChildrenToProps(e,n)),h.a.createElement(o,n)},H(e,null,[{key:"canUseDOM",set:function(t){o.canUseDOM=t}}]),e}(h.a.Component),a.propTypes={base:s.a.object,bodyAttributes:s.a.object,children:s.a.oneOfType([s.a.arrayOf(s.a.node),s.a.node]),defaultTitle:s.a.string,defer:s.a.bool,encodeSpecialCharacters:s.a.bool,htmlAttributes:s.a.object,link:s.a.arrayOf(s.a.object),meta:s.a.arrayOf(s.a.object),noscript:s.a.arrayOf(s.a.object),onChangeClientState:s.a.func,script:s.a.arrayOf(s.a.object),style:s.a.arrayOf(s.a.object),title:s.a.string,titleAttributes:s.a.object,titleTemplate:s.a.string},a.defaultProps={defer:!0,encodeSpecialCharacters:!0},a.peek=o.peek,a.rewind=function(){var t=o.rewind();return t||(t=dt({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),t},i);mt.renderStatic=mt.rewind}).call(this,r("yLpj"))},vrFN:function(t,e,r){"use strict";var n=r("51K9"),o=r("q1tI"),a=r.n(o),i=r("qhky");function c(t){var e=t.description,r=t.lang,o=t.meta,c=t.title,s=n.data.site,u=e||s.siteMetadata.description;return a.a.createElement(i.a,{htmlAttributes:{lang:r},title:c,titleTemplate:"%s | "+s.siteMetadata.title,meta:[{name:"description",content:u},{property:"og:title",content:c},{property:"og:description",content:u},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:s.siteMetadata.author},{name:"twitter:title",content:c},{name:"twitter:description",content:u}].concat(o)})}c.defaultProps={lang:"en",meta:[],description:""},e.a=c},vrJE:function(t,e,r){t.exports={blockLink:"block-module--block-link--1V1Ua",blockText:"block-module--block-text--31lIo"}},yLpj:function(t,e){var r;r=function(){return this}();try{r=r||new Function("return this")()}catch(n){"object"==typeof window&&(r=window)}t.exports=r}}]);
//# sourceMappingURL=bd17bb009c8e78bd36ec6a4de790ce3d1faada13-2bb32bbab96fe6380b1c.js.map