/*! jQuery v1.11.1 | (c) 2005, 2014 jQuery Foundation, Inc. | jquery.org/license */

!function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){var c=[],d=c.slice,e=c.concat,f=c.push,g=c.indexOf,h={},i=h.toString,j=h.hasOwnProperty,k={},l="1.11.1",m=function(a,b){return new m.fn.init(a,b)},n=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,o=/^-ms-/,p=/-([\da-z])/gi,q=function(a,b){return b.toUpperCase()};m.fn=m.prototype={jquery:l,constructor:m,selector:"",length:0,toArray:function(){return d.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:d.call(this)},pushStack:function(a){var b=m.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a,b){return m.each(this,a,b)},map:function(a){return this.pushStack(m.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(d.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor(null)},push:f,sort:c.sort,splice:c.splice},m.extend=m.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||m.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(e=arguments[h]))for(d in e)a=g[d],c=e[d],g!==c&&(j&&c&&(m.isPlainObject(c)||(b=m.isArray(c)))?(b?(b=!1,f=a&&m.isArray(a)?a:[]):f=a&&m.isPlainObject(a)?a:{},g[d]=m.extend(j,f,c)):void 0!==c&&(g[d]=c));return g},m.extend({expando:"jQuery"+(l+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===m.type(a)},isArray:Array.isArray||function(a){return"array"===m.type(a)},isWindow:function(a){return null!=a&&a==a.window},isNumeric:function(a){return!m.isArray(a)&&a-parseFloat(a)>=0},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},isPlainObject:function(a){var b;if(!a||"object"!==m.type(a)||a.nodeType||m.isWindow(a))return!1;try{if(a.constructor&&!j.call(a,"constructor")&&!j.call(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}if(k.ownLast)for(b in a)return j.call(a,b);for(b in a);return void 0===b||j.call(a,b)},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?h[i.call(a)]||"object":typeof a},globalEval:function(b){b&&m.trim(b)&&(a.execScript||function(b){a.eval.call(a,b)})(b)},camelCase:function(a){return a.replace(o,"ms-").replace(p,q)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b,c){var d,e=0,f=a.length,g=r(a);if(c){if(g){for(;f>e;e++)if(d=b.apply(a[e],c),d===!1)break}else for(e in a)if(d=b.apply(a[e],c),d===!1)break}else if(g){for(;f>e;e++)if(d=b.call(a[e],e,a[e]),d===!1)break}else for(e in a)if(d=b.call(a[e],e,a[e]),d===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(n,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(r(Object(a))?m.merge(c,"string"==typeof a?[a]:a):f.call(c,a)),c},inArray:function(a,b,c){var d;if(b){if(g)return g.call(b,a,c);for(d=b.length,c=c?0>c?Math.max(0,d+c):c:0;d>c;c++)if(c in b&&b[c]===a)return c}return-1},merge:function(a,b){var c=+b.length,d=0,e=a.length;while(c>d)a[e++]=b[d++];if(c!==c)while(void 0!==b[d])a[e++]=b[d++];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,f=0,g=a.length,h=r(a),i=[];if(h)for(;g>f;f++)d=b(a[f],f,c),null!=d&&i.push(d);else for(f in a)d=b(a[f],f,c),null!=d&&i.push(d);return e.apply([],i)},guid:1,proxy:function(a,b){var c,e,f;return"string"==typeof b&&(f=a[b],b=a,a=f),m.isFunction(a)?(c=d.call(arguments,2),e=function(){return a.apply(b||this,c.concat(d.call(arguments)))},e.guid=a.guid=a.guid||m.guid++,e):void 0},now:function(){return+new Date},support:k}),m.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(a,b){h["[object "+b+"]"]=b.toLowerCase()});function r(a){var b=a.length,c=m.type(a);return"function"===c||m.isWindow(a)?!1:1===a.nodeType&&b?!0:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}var s=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+-new Date,v=a.document,w=0,x=0,y=gb(),z=gb(),A=gb(),B=function(a,b){return a===b&&(l=!0),0},C="undefined",D=1<<31,E={}.hasOwnProperty,F=[],G=F.pop,H=F.push,I=F.push,J=F.slice,K=F.indexOf||function(a){for(var b=0,c=this.length;c>b;b++)if(this[b]===a)return b;return-1},L="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",M="[\\x20\\t\\r\\n\\f]",N="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",O=N.replace("w","w#"),P="\\["+M+"*("+N+")(?:"+M+"*([*^$|!~]?=)"+M+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+O+"))|)"+M+"*\\]",Q=":("+N+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+P+")*)|.*)\\)|)",R=new RegExp("^"+M+"+|((?:^|[^\\\\])(?:\\\\.)*)"+M+"+$","g"),S=new RegExp("^"+M+"*,"+M+"*"),T=new RegExp("^"+M+"*([>+~]|"+M+")"+M+"*"),U=new RegExp("="+M+"*([^\\]'\"]*?)"+M+"*\\]","g"),V=new RegExp(Q),W=new RegExp("^"+O+"$"),X={ID:new RegExp("^#("+N+")"),CLASS:new RegExp("^\\.("+N+")"),TAG:new RegExp("^("+N.replace("w","w*")+")"),ATTR:new RegExp("^"+P),PSEUDO:new RegExp("^"+Q),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+M+"*(even|odd|(([+-]|)(\\d*)n|)"+M+"*(?:([+-]|)"+M+"*(\\d+)|))"+M+"*\\)|)","i"),bool:new RegExp("^(?:"+L+")$","i"),needsContext:new RegExp("^"+M+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+M+"*((?:-\\d)?\\d*)"+M+"*\\)|)(?=[^-]|$)","i")},Y=/^(?:input|select|textarea|button)$/i,Z=/^h\d$/i,$=/^[^{]+\{\s*\[native \w/,_=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ab=/[+~]/,bb=/'|\\/g,cb=new RegExp("\\\\([\\da-f]{1,6}"+M+"?|("+M+")|.)","ig"),db=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)};try{I.apply(F=J.call(v.childNodes),v.childNodes),F[v.childNodes.length].nodeType}catch(eb){I={apply:F.length?function(a,b){H.apply(a,J.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function fb(a,b,d,e){var f,h,j,k,l,o,r,s,w,x;if((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,d=d||[],!a||"string"!=typeof a)return d;if(1!==(k=b.nodeType)&&9!==k)return[];if(p&&!e){if(f=_.exec(a))if(j=f[1]){if(9===k){if(h=b.getElementById(j),!h||!h.parentNode)return d;if(h.id===j)return d.push(h),d}else if(b.ownerDocument&&(h=b.ownerDocument.getElementById(j))&&t(b,h)&&h.id===j)return d.push(h),d}else{if(f[2])return I.apply(d,b.getElementsByTagName(a)),d;if((j=f[3])&&c.getElementsByClassName&&b.getElementsByClassName)return I.apply(d,b.getElementsByClassName(j)),d}if(c.qsa&&(!q||!q.test(a))){if(s=r=u,w=b,x=9===k&&a,1===k&&"object"!==b.nodeName.toLowerCase()){o=g(a),(r=b.getAttribute("id"))?s=r.replace(bb,"\\$&"):b.setAttribute("id",s),s="[id='"+s+"'] ",l=o.length;while(l--)o[l]=s+qb(o[l]);w=ab.test(a)&&ob(b.parentNode)||b,x=o.join(",")}if(x)try{return I.apply(d,w.querySelectorAll(x)),d}catch(y){}finally{r||b.removeAttribute("id")}}}return i(a.replace(R,"$1"),b,d,e)}function gb(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function hb(a){return a[u]=!0,a}function ib(a){var b=n.createElement("div");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function jb(a,b){var c=a.split("|"),e=a.length;while(e--)d.attrHandle[c[e]]=b}function kb(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||D)-(~a.sourceIndex||D);if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function lb(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function mb(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function nb(a){return hb(function(b){return b=+b,hb(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function ob(a){return a&&typeof a.getElementsByTagName!==C&&a}c=fb.support={},f=fb.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},m=fb.setDocument=function(a){var b,e=a?a.ownerDocument||a:v,g=e.defaultView;return e!==n&&9===e.nodeType&&e.documentElement?(n=e,o=e.documentElement,p=!f(e),g&&g!==g.top&&(g.addEventListener?g.addEventListener("unload",function(){m()},!1):g.attachEvent&&g.attachEvent("onunload",function(){m()})),c.attributes=ib(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ib(function(a){return a.appendChild(e.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=$.test(e.getElementsByClassName)&&ib(function(a){return a.innerHTML="<div class='a'></div><div class='a i'></div>",a.firstChild.className="i",2===a.getElementsByClassName("i").length}),c.getById=ib(function(a){return o.appendChild(a).id=u,!e.getElementsByName||!e.getElementsByName(u).length}),c.getById?(d.find.ID=function(a,b){if(typeof b.getElementById!==C&&p){var c=b.getElementById(a);return c&&c.parentNode?[c]:[]}},d.filter.ID=function(a){var b=a.replace(cb,db);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(cb,db);return function(a){var c=typeof a.getAttributeNode!==C&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return typeof b.getElementsByTagName!==C?b.getElementsByTagName(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){return typeof b.getElementsByClassName!==C&&p?b.getElementsByClassName(a):void 0},r=[],q=[],(c.qsa=$.test(e.querySelectorAll))&&(ib(function(a){a.innerHTML="<select msallowclip=''><option selected=''></option></select>",a.querySelectorAll("[msallowclip^='']").length&&q.push("[*^$]="+M+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+M+"*(?:value|"+L+")"),a.querySelectorAll(":checked").length||q.push(":checked")}),ib(function(a){var b=e.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+M+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=$.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ib(function(a){c.disconnectedMatch=s.call(a,"div"),s.call(a,"[s!='']:x"),r.push("!=",Q)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=$.test(o.compareDocumentPosition),t=b||$.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===e||a.ownerDocument===v&&t(v,a)?-1:b===e||b.ownerDocument===v&&t(v,b)?1:k?K.call(k,a)-K.call(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,f=a.parentNode,g=b.parentNode,h=[a],i=[b];if(!f||!g)return a===e?-1:b===e?1:f?-1:g?1:k?K.call(k,a)-K.call(k,b):0;if(f===g)return kb(a,b);c=a;while(c=c.parentNode)h.unshift(c);c=b;while(c=c.parentNode)i.unshift(c);while(h[d]===i[d])d++;return d?kb(h[d],i[d]):h[d]===v?-1:i[d]===v?1:0},e):n},fb.matches=function(a,b){return fb(a,null,null,b)},fb.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(U,"='$1']"),!(!c.matchesSelector||!p||r&&r.test(b)||q&&q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return fb(b,n,null,[a]).length>0},fb.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},fb.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&E.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},fb.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},fb.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=fb.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=fb.selectors={cacheLength:50,createPseudo:hb,match:X,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(cb,db),a[3]=(a[3]||a[4]||a[5]||"").replace(cb,db),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||fb.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&fb.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return X.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&V.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(cb,db).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+M+")"+a+"("+M+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||typeof a.getAttribute!==C&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=fb.attr(d,a);return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h;if(q){if(f){while(p){l=b;while(l=l[p])if(h?l.nodeName.toLowerCase()===r:1===l.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){k=q[u]||(q[u]={}),j=k[a]||[],n=j[0]===w&&j[1],m=j[0]===w&&j[2],l=n&&q.childNodes[n];while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if(1===l.nodeType&&++m&&l===b){k[a]=[w,n,m];break}}else if(s&&(j=(b[u]||(b[u]={}))[a])&&j[0]===w)m=j[1];else while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if((h?l.nodeName.toLowerCase()===r:1===l.nodeType)&&++m&&(s&&((l[u]||(l[u]={}))[a]=[w,m]),l===b))break;return m-=e,m===d||m%d===0&&m/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||fb.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?hb(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=K.call(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:hb(function(a){var b=[],c=[],d=h(a.replace(R,"$1"));return d[u]?hb(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),!c.pop()}}),has:hb(function(a){return function(b){return fb(a,b).length>0}}),contains:hb(function(a){return function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:hb(function(a){return W.test(a||"")||fb.error("unsupported lang: "+a),a=a.replace(cb,db).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return Z.test(a.nodeName)},input:function(a){return Y.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:nb(function(){return[0]}),last:nb(function(a,b){return[b-1]}),eq:nb(function(a,b,c){return[0>c?c+b:c]}),even:nb(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:nb(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:nb(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:nb(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=lb(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=mb(b);function pb(){}pb.prototype=d.filters=d.pseudos,d.setFilters=new pb,g=fb.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){(!c||(e=S.exec(h)))&&(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=T.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(R," ")}),h=h.slice(c.length));for(g in d.filter)!(e=X[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?fb.error(a):z(a,i).slice(0)};function qb(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function rb(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=x++;return b.first?function(b,c,f){while(b=b[d])if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j=[w,f];if(g){while(b=b[d])if((1===b.nodeType||e)&&a(b,c,g))return!0}else while(b=b[d])if(1===b.nodeType||e){if(i=b[u]||(b[u]={}),(h=i[d])&&h[0]===w&&h[1]===f)return j[2]=h[2];if(i[d]=j,j[2]=a(b,c,g))return!0}}}function sb(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function tb(a,b,c){for(var d=0,e=b.length;e>d;d++)fb(a,b[d],c);return c}function ub(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(!c||c(f,d,e))&&(g.push(f),j&&b.push(h));return g}function vb(a,b,c,d,e,f){return d&&!d[u]&&(d=vb(d)),e&&!e[u]&&(e=vb(e,f)),hb(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||tb(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:ub(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=ub(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?K.call(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=ub(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):I.apply(g,r)})}function wb(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=rb(function(a){return a===b},h,!0),l=rb(function(a){return K.call(b,a)>-1},h,!0),m=[function(a,c,d){return!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d))}];f>i;i++)if(c=d.relative[a[i].type])m=[rb(sb(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;f>e;e++)if(d.relative[a[e].type])break;return vb(i>1&&sb(m),i>1&&qb(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(R,"$1"),c,e>i&&wb(a.slice(i,e)),f>e&&wb(a=a.slice(e)),f>e&&qb(a))}m.push(c)}return sb(m)}function xb(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,m,o,p=0,q="0",r=f&&[],s=[],t=j,u=f||e&&d.find.TAG("*",k),v=w+=null==t?1:Math.random()||.1,x=u.length;for(k&&(j=g!==n&&g);q!==x&&null!=(l=u[q]);q++){if(e&&l){m=0;while(o=a[m++])if(o(l,g,h)){i.push(l);break}k&&(w=v)}c&&((l=!o&&l)&&p--,f&&r.push(l))}if(p+=q,c&&q!==p){m=0;while(o=b[m++])o(r,s,g,h);if(f){if(p>0)while(q--)r[q]||s[q]||(s[q]=G.call(i));s=ub(s)}I.apply(i,s),k&&!f&&s.length>0&&p+b.length>1&&fb.uniqueSort(i)}return k&&(w=v,j=t),r};return c?hb(f):f}return h=fb.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=wb(b[c]),f[u]?d.push(f):e.push(f);f=A(a,xb(e,d)),f.selector=a}return f},i=fb.select=function(a,b,e,f){var i,j,k,l,m,n="function"==typeof a&&a,o=!f&&g(a=n.selector||a);if(e=e||[],1===o.length){if(j=o[0]=o[0].slice(0),j.length>2&&"ID"===(k=j[0]).type&&c.getById&&9===b.nodeType&&p&&d.relative[j[1].type]){if(b=(d.find.ID(k.matches[0].replace(cb,db),b)||[])[0],!b)return e;n&&(b=b.parentNode),a=a.slice(j.shift().value.length)}i=X.needsContext.test(a)?0:j.length;while(i--){if(k=j[i],d.relative[l=k.type])break;if((m=d.find[l])&&(f=m(k.matches[0].replace(cb,db),ab.test(j[0].type)&&ob(b.parentNode)||b))){if(j.splice(i,1),a=f.length&&qb(j),!a)return I.apply(e,f),e;break}}}return(n||h(a,o))(f,b,!p,e,ab.test(a)&&ob(b.parentNode)||b),e},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ib(function(a){return 1&a.compareDocumentPosition(n.createElement("div"))}),ib(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||jb("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ib(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||jb("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),ib(function(a){return null==a.getAttribute("disabled")})||jb(L,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),fb}(a);m.find=s,m.expr=s.selectors,m.expr[":"]=m.expr.pseudos,m.unique=s.uniqueSort,m.text=s.getText,m.isXMLDoc=s.isXML,m.contains=s.contains;var t=m.expr.match.needsContext,u=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,v=/^.[^:#\[\.,]*$/;function w(a,b,c){if(m.isFunction(b))return m.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return m.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(v.test(b))return m.filter(b,a,c);b=m.filter(b,a)}return m.grep(a,function(a){return m.inArray(a,b)>=0!==c})}m.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?m.find.matchesSelector(d,a)?[d]:[]:m.find.matches(a,m.grep(b,function(a){return 1===a.nodeType}))},m.fn.extend({find:function(a){var b,c=[],d=this,e=d.length;if("string"!=typeof a)return this.pushStack(m(a).filter(function(){for(b=0;e>b;b++)if(m.contains(d[b],this))return!0}));for(b=0;e>b;b++)m.find(a,d[b],c);return c=this.pushStack(e>1?m.unique(c):c),c.selector=this.selector?this.selector+" "+a:a,c},filter:function(a){return this.pushStack(w(this,a||[],!1))},not:function(a){return this.pushStack(w(this,a||[],!0))},is:function(a){return!!w(this,"string"==typeof a&&t.test(a)?m(a):a||[],!1).length}});var x,y=a.document,z=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,A=m.fn.init=function(a,b){var c,d;if(!a)return this;if("string"==typeof a){if(c="<"===a.charAt(0)&&">"===a.charAt(a.length-1)&&a.length>=3?[null,a,null]:z.exec(a),!c||!c[1]&&b)return!b||b.jquery?(b||x).find(a):this.constructor(b).find(a);if(c[1]){if(b=b instanceof m?b[0]:b,m.merge(this,m.parseHTML(c[1],b&&b.nodeType?b.ownerDocument||b:y,!0)),u.test(c[1])&&m.isPlainObject(b))for(c in b)m.isFunction(this[c])?this[c](b[c]):this.attr(c,b[c]);return this}if(d=y.getElementById(c[2]),d&&d.parentNode){if(d.id!==c[2])return x.find(a);this.length=1,this[0]=d}return this.context=y,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):m.isFunction(a)?"undefined"!=typeof x.ready?x.ready(a):a(m):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),m.makeArray(a,this))};A.prototype=m.fn,x=m(y);var B=/^(?:parents|prev(?:Until|All))/,C={children:!0,contents:!0,next:!0,prev:!0};m.extend({dir:function(a,b,c){var d=[],e=a[b];while(e&&9!==e.nodeType&&(void 0===c||1!==e.nodeType||!m(e).is(c)))1===e.nodeType&&d.push(e),e=e[b];return d},sibling:function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c}}),m.fn.extend({has:function(a){var b,c=m(a,this),d=c.length;return this.filter(function(){for(b=0;d>b;b++)if(m.contains(this,c[b]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=t.test(a)||"string"!=typeof a?m(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&m.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?m.unique(f):f)},index:function(a){return a?"string"==typeof a?m.inArray(this[0],m(a)):m.inArray(a.jquery?a[0]:a,this):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(m.unique(m.merge(this.get(),m(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function D(a,b){do a=a[b];while(a&&1!==a.nodeType);return a}m.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return m.dir(a,"parentNode")},parentsUntil:function(a,b,c){return m.dir(a,"parentNode",c)},next:function(a){return D(a,"nextSibling")},prev:function(a){return D(a,"previousSibling")},nextAll:function(a){return m.dir(a,"nextSibling")},prevAll:function(a){return m.dir(a,"previousSibling")},nextUntil:function(a,b,c){return m.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return m.dir(a,"previousSibling",c)},siblings:function(a){return m.sibling((a.parentNode||{}).firstChild,a)},children:function(a){return m.sibling(a.firstChild)},contents:function(a){return m.nodeName(a,"iframe")?a.contentDocument||a.contentWindow.document:m.merge([],a.childNodes)}},function(a,b){m.fn[a]=function(c,d){var e=m.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=m.filter(d,e)),this.length>1&&(C[a]||(e=m.unique(e)),B.test(a)&&(e=e.reverse())),this.pushStack(e)}});var E=/\S+/g,F={};function G(a){var b=F[a]={};return m.each(a.match(E)||[],function(a,c){b[c]=!0}),b}m.Callbacks=function(a){a="string"==typeof a?F[a]||G(a):m.extend({},a);var b,c,d,e,f,g,h=[],i=!a.once&&[],j=function(l){for(c=a.memory&&l,d=!0,f=g||0,g=0,e=h.length,b=!0;h&&e>f;f++)if(h[f].apply(l[0],l[1])===!1&&a.stopOnFalse){c=!1;break}b=!1,h&&(i?i.length&&j(i.shift()):c?h=[]:k.disable())},k={add:function(){if(h){var d=h.length;!function f(b){m.each(b,function(b,c){var d=m.type(c);"function"===d?a.unique&&k.has(c)||h.push(c):c&&c.length&&"string"!==d&&f(c)})}(arguments),b?e=h.length:c&&(g=d,j(c))}return this},remove:function(){return h&&m.each(arguments,function(a,c){var d;while((d=m.inArray(c,h,d))>-1)h.splice(d,1),b&&(e>=d&&e--,f>=d&&f--)}),this},has:function(a){return a?m.inArray(a,h)>-1:!(!h||!h.length)},empty:function(){return h=[],e=0,this},disable:function(){return h=i=c=void 0,this},disabled:function(){return!h},lock:function(){return i=void 0,c||k.disable(),this},locked:function(){return!i},fireWith:function(a,c){return!h||d&&!i||(c=c||[],c=[a,c.slice?c.slice():c],b?i.push(c):j(c)),this},fire:function(){return k.fireWith(this,arguments),this},fired:function(){return!!d}};return k},m.extend({Deferred:function(a){var b=[["resolve","done",m.Callbacks("once memory"),"resolved"],["reject","fail",m.Callbacks("once memory"),"rejected"],["notify","progress",m.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return m.Deferred(function(c){m.each(b,function(b,f){var g=m.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&m.isFunction(a.promise)?a.promise().done(c.resolve).fail(c.reject).progress(c.notify):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?m.extend(a,d):d}},e={};return d.pipe=d.then,m.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=d.call(arguments),e=c.length,f=1!==e||a&&m.isFunction(a.promise)?e:0,g=1===f?a:m.Deferred(),h=function(a,b,c){return function(e){b[a]=this,c[a]=arguments.length>1?d.call(arguments):e,c===i?g.notifyWith(b,c):--f||g.resolveWith(b,c)}},i,j,k;if(e>1)for(i=new Array(e),j=new Array(e),k=new Array(e);e>b;b++)c[b]&&m.isFunction(c[b].promise)?c[b].promise().done(h(b,k,c)).fail(g.reject).progress(h(b,j,i)):--f;return f||g.resolveWith(k,c),g.promise()}});var H;m.fn.ready=function(a){return m.ready.promise().done(a),this},m.extend({isReady:!1,readyWait:1,holdReady:function(a){a?m.readyWait++:m.ready(!0)},ready:function(a){if(a===!0?!--m.readyWait:!m.isReady){if(!y.body)return setTimeout(m.ready);m.isReady=!0,a!==!0&&--m.readyWait>0||(H.resolveWith(y,[m]),m.fn.triggerHandler&&(m(y).triggerHandler("ready"),m(y).off("ready")))}}});function I(){y.addEventListener?(y.removeEventListener("DOMContentLoaded",J,!1),a.removeEventListener("load",J,!1)):(y.detachEvent("onreadystatechange",J),a.detachEvent("onload",J))}function J(){(y.addEventListener||"load"===event.type||"complete"===y.readyState)&&(I(),m.ready())}m.ready.promise=function(b){if(!H)if(H=m.Deferred(),"complete"===y.readyState)setTimeout(m.ready);else if(y.addEventListener)y.addEventListener("DOMContentLoaded",J,!1),a.addEventListener("load",J,!1);else{y.attachEvent("onreadystatechange",J),a.attachEvent("onload",J);var c=!1;try{c=null==a.frameElement&&y.documentElement}catch(d){}c&&c.doScroll&&!function e(){if(!m.isReady){try{c.doScroll("left")}catch(a){return setTimeout(e,50)}I(),m.ready()}}()}return H.promise(b)};var K="undefined",L;for(L in m(k))break;k.ownLast="0"!==L,k.inlineBlockNeedsLayout=!1,m(function(){var a,b,c,d;c=y.getElementsByTagName("body")[0],c&&c.style&&(b=y.createElement("div"),d=y.createElement("div"),d.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(d).appendChild(b),typeof b.style.zoom!==K&&(b.style.cssText="display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1",k.inlineBlockNeedsLayout=a=3===b.offsetWidth,a&&(c.style.zoom=1)),c.removeChild(d))}),function(){var a=y.createElement("div");if(null==k.deleteExpando){k.deleteExpando=!0;try{delete a.test}catch(b){k.deleteExpando=!1}}a=null}(),m.acceptData=function(a){var b=m.noData[(a.nodeName+" ").toLowerCase()],c=+a.nodeType||1;return 1!==c&&9!==c?!1:!b||b!==!0&&a.getAttribute("classid")===b};var M=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,N=/([A-Z])/g;function O(a,b,c){if(void 0===c&&1===a.nodeType){var d="data-"+b.replace(N,"-$1").toLowerCase();if(c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:M.test(c)?m.parseJSON(c):c}catch(e){}m.data(a,b,c)}else c=void 0}return c}function P(a){var b;for(b in a)if(("data"!==b||!m.isEmptyObject(a[b]))&&"toJSON"!==b)return!1;return!0}function Q(a,b,d,e){if(m.acceptData(a)){var f,g,h=m.expando,i=a.nodeType,j=i?m.cache:a,k=i?a[h]:a[h]&&h;
if(k&&j[k]&&(e||j[k].data)||void 0!==d||"string"!=typeof b)return k||(k=i?a[h]=c.pop()||m.guid++:h),j[k]||(j[k]=i?{}:{toJSON:m.noop}),("object"==typeof b||"function"==typeof b)&&(e?j[k]=m.extend(j[k],b):j[k].data=m.extend(j[k].data,b)),g=j[k],e||(g.data||(g.data={}),g=g.data),void 0!==d&&(g[m.camelCase(b)]=d),"string"==typeof b?(f=g[b],null==f&&(f=g[m.camelCase(b)])):f=g,f}}function R(a,b,c){if(m.acceptData(a)){var d,e,f=a.nodeType,g=f?m.cache:a,h=f?a[m.expando]:m.expando;if(g[h]){if(b&&(d=c?g[h]:g[h].data)){m.isArray(b)?b=b.concat(m.map(b,m.camelCase)):b in d?b=[b]:(b=m.camelCase(b),b=b in d?[b]:b.split(" ")),e=b.length;while(e--)delete d[b[e]];if(c?!P(d):!m.isEmptyObject(d))return}(c||(delete g[h].data,P(g[h])))&&(f?m.cleanData([a],!0):k.deleteExpando||g!=g.window?delete g[h]:g[h]=null)}}}m.extend({cache:{},noData:{"applet ":!0,"embed ":!0,"object ":"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"},hasData:function(a){return a=a.nodeType?m.cache[a[m.expando]]:a[m.expando],!!a&&!P(a)},data:function(a,b,c){return Q(a,b,c)},removeData:function(a,b){return R(a,b)},_data:function(a,b,c){return Q(a,b,c,!0)},_removeData:function(a,b){return R(a,b,!0)}}),m.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=m.data(f),1===f.nodeType&&!m._data(f,"parsedAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=m.camelCase(d.slice(5)),O(f,d,e[d])));m._data(f,"parsedAttrs",!0)}return e}return"object"==typeof a?this.each(function(){m.data(this,a)}):arguments.length>1?this.each(function(){m.data(this,a,b)}):f?O(f,a,m.data(f,a)):void 0},removeData:function(a){return this.each(function(){m.removeData(this,a)})}}),m.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=m._data(a,b),c&&(!d||m.isArray(c)?d=m._data(a,b,m.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=m.queue(a,b),d=c.length,e=c.shift(),f=m._queueHooks(a,b),g=function(){m.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return m._data(a,c)||m._data(a,c,{empty:m.Callbacks("once memory").add(function(){m._removeData(a,b+"queue"),m._removeData(a,c)})})}}),m.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?m.queue(this[0],a):void 0===b?this:this.each(function(){var c=m.queue(this,a,b);m._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&m.dequeue(this,a)})},dequeue:function(a){return this.each(function(){m.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=m.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=m._data(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var S=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,T=["Top","Right","Bottom","Left"],U=function(a,b){return a=b||a,"none"===m.css(a,"display")||!m.contains(a.ownerDocument,a)},V=m.access=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===m.type(c)){e=!0;for(h in c)m.access(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,m.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(m(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f},W=/^(?:checkbox|radio)$/i;!function(){var a=y.createElement("input"),b=y.createElement("div"),c=y.createDocumentFragment();if(b.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",k.leadingWhitespace=3===b.firstChild.nodeType,k.tbody=!b.getElementsByTagName("tbody").length,k.htmlSerialize=!!b.getElementsByTagName("link").length,k.html5Clone="<:nav></:nav>"!==y.createElement("nav").cloneNode(!0).outerHTML,a.type="checkbox",a.checked=!0,c.appendChild(a),k.appendChecked=a.checked,b.innerHTML="<textarea>x</textarea>",k.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue,c.appendChild(b),b.innerHTML="<input type='radio' checked='checked' name='t'/>",k.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,k.noCloneEvent=!0,b.attachEvent&&(b.attachEvent("onclick",function(){k.noCloneEvent=!1}),b.cloneNode(!0).click()),null==k.deleteExpando){k.deleteExpando=!0;try{delete b.test}catch(d){k.deleteExpando=!1}}}(),function(){var b,c,d=y.createElement("div");for(b in{submit:!0,change:!0,focusin:!0})c="on"+b,(k[b+"Bubbles"]=c in a)||(d.setAttribute(c,"t"),k[b+"Bubbles"]=d.attributes[c].expando===!1);d=null}();var X=/^(?:input|select|textarea)$/i,Y=/^key/,Z=/^(?:mouse|pointer|contextmenu)|click/,$=/^(?:focusinfocus|focusoutblur)$/,_=/^([^.]*)(?:\.(.+)|)$/;function ab(){return!0}function bb(){return!1}function cb(){try{return y.activeElement}catch(a){}}m.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,n,o,p,q,r=m._data(a);if(r){c.handler&&(i=c,c=i.handler,e=i.selector),c.guid||(c.guid=m.guid++),(g=r.events)||(g=r.events={}),(k=r.handle)||(k=r.handle=function(a){return typeof m===K||a&&m.event.triggered===a.type?void 0:m.event.dispatch.apply(k.elem,arguments)},k.elem=a),b=(b||"").match(E)||[""],h=b.length;while(h--)f=_.exec(b[h])||[],o=q=f[1],p=(f[2]||"").split(".").sort(),o&&(j=m.event.special[o]||{},o=(e?j.delegateType:j.bindType)||o,j=m.event.special[o]||{},l=m.extend({type:o,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&m.expr.match.needsContext.test(e),namespace:p.join(".")},i),(n=g[o])||(n=g[o]=[],n.delegateCount=0,j.setup&&j.setup.call(a,d,p,k)!==!1||(a.addEventListener?a.addEventListener(o,k,!1):a.attachEvent&&a.attachEvent("on"+o,k))),j.add&&(j.add.call(a,l),l.handler.guid||(l.handler.guid=c.guid)),e?n.splice(n.delegateCount++,0,l):n.push(l),m.event.global[o]=!0);a=null}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,n,o,p,q,r=m.hasData(a)&&m._data(a);if(r&&(k=r.events)){b=(b||"").match(E)||[""],j=b.length;while(j--)if(h=_.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o){l=m.event.special[o]||{},o=(d?l.delegateType:l.bindType)||o,n=k[o]||[],h=h[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),i=f=n.length;while(f--)g=n[f],!e&&q!==g.origType||c&&c.guid!==g.guid||h&&!h.test(g.namespace)||d&&d!==g.selector&&("**"!==d||!g.selector)||(n.splice(f,1),g.selector&&n.delegateCount--,l.remove&&l.remove.call(a,g));i&&!n.length&&(l.teardown&&l.teardown.call(a,p,r.handle)!==!1||m.removeEvent(a,o,r.handle),delete k[o])}else for(o in k)m.event.remove(a,o+b[j],c,d,!0);m.isEmptyObject(k)&&(delete r.handle,m._removeData(a,"events"))}},trigger:function(b,c,d,e){var f,g,h,i,k,l,n,o=[d||y],p=j.call(b,"type")?b.type:b,q=j.call(b,"namespace")?b.namespace.split("."):[];if(h=l=d=d||y,3!==d.nodeType&&8!==d.nodeType&&!$.test(p+m.event.triggered)&&(p.indexOf(".")>=0&&(q=p.split("."),p=q.shift(),q.sort()),g=p.indexOf(":")<0&&"on"+p,b=b[m.expando]?b:new m.Event(p,"object"==typeof b&&b),b.isTrigger=e?2:3,b.namespace=q.join("."),b.namespace_re=b.namespace?new RegExp("(^|\\.)"+q.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=d),c=null==c?[b]:m.makeArray(c,[b]),k=m.event.special[p]||{},e||!k.trigger||k.trigger.apply(d,c)!==!1)){if(!e&&!k.noBubble&&!m.isWindow(d)){for(i=k.delegateType||p,$.test(i+p)||(h=h.parentNode);h;h=h.parentNode)o.push(h),l=h;l===(d.ownerDocument||y)&&o.push(l.defaultView||l.parentWindow||a)}n=0;while((h=o[n++])&&!b.isPropagationStopped())b.type=n>1?i:k.bindType||p,f=(m._data(h,"events")||{})[b.type]&&m._data(h,"handle"),f&&f.apply(h,c),f=g&&h[g],f&&f.apply&&m.acceptData(h)&&(b.result=f.apply(h,c),b.result===!1&&b.preventDefault());if(b.type=p,!e&&!b.isDefaultPrevented()&&(!k._default||k._default.apply(o.pop(),c)===!1)&&m.acceptData(d)&&g&&d[p]&&!m.isWindow(d)){l=d[g],l&&(d[g]=null),m.event.triggered=p;try{d[p]()}catch(r){}m.event.triggered=void 0,l&&(d[g]=l)}return b.result}},dispatch:function(a){a=m.event.fix(a);var b,c,e,f,g,h=[],i=d.call(arguments),j=(m._data(this,"events")||{})[a.type]||[],k=m.event.special[a.type]||{};if(i[0]=a,a.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,a)!==!1){h=m.event.handlers.call(this,a,j),b=0;while((f=h[b++])&&!a.isPropagationStopped()){a.currentTarget=f.elem,g=0;while((e=f.handlers[g++])&&!a.isImmediatePropagationStopped())(!a.namespace_re||a.namespace_re.test(e.namespace))&&(a.handleObj=e,a.data=e.data,c=((m.event.special[e.origType]||{}).handle||e.handler).apply(f.elem,i),void 0!==c&&(a.result=c)===!1&&(a.preventDefault(),a.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&(!a.button||"click"!==a.type))for(;i!=this;i=i.parentNode||this)if(1===i.nodeType&&(i.disabled!==!0||"click"!==a.type)){for(e=[],f=0;h>f;f++)d=b[f],c=d.selector+" ",void 0===e[c]&&(e[c]=d.needsContext?m(c,this).index(i)>=0:m.find(c,this,null,[i]).length),e[c]&&e.push(d);e.length&&g.push({elem:i,handlers:e})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},fix:function(a){if(a[m.expando])return a;var b,c,d,e=a.type,f=a,g=this.fixHooks[e];g||(this.fixHooks[e]=g=Z.test(e)?this.mouseHooks:Y.test(e)?this.keyHooks:{}),d=g.props?this.props.concat(g.props):this.props,a=new m.Event(f),b=d.length;while(b--)c=d[b],a[c]=f[c];return a.target||(a.target=f.srcElement||y),3===a.target.nodeType&&(a.target=a.target.parentNode),a.metaKey=!!a.metaKey,g.filter?g.filter(a,f):a},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,d,e,f=b.button,g=b.fromElement;return null==a.pageX&&null!=b.clientX&&(d=a.target.ownerDocument||y,e=d.documentElement,c=d.body,a.pageX=b.clientX+(e&&e.scrollLeft||c&&c.scrollLeft||0)-(e&&e.clientLeft||c&&c.clientLeft||0),a.pageY=b.clientY+(e&&e.scrollTop||c&&c.scrollTop||0)-(e&&e.clientTop||c&&c.clientTop||0)),!a.relatedTarget&&g&&(a.relatedTarget=g===a.target?b.toElement:g),a.which||void 0===f||(a.which=1&f?1:2&f?3:4&f?2:0),a}},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==cb()&&this.focus)try{return this.focus(),!1}catch(a){}},delegateType:"focusin"},blur:{trigger:function(){return this===cb()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return m.nodeName(this,"input")&&"checkbox"===this.type&&this.click?(this.click(),!1):void 0},_default:function(a){return m.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}},simulate:function(a,b,c,d){var e=m.extend(new m.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?m.event.trigger(e,null,b):m.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},m.removeEvent=y.removeEventListener?function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)}:function(a,b,c){var d="on"+b;a.detachEvent&&(typeof a[d]===K&&(a[d]=null),a.detachEvent(d,c))},m.Event=function(a,b){return this instanceof m.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?ab:bb):this.type=a,b&&m.extend(this,b),this.timeStamp=a&&a.timeStamp||m.now(),void(this[m.expando]=!0)):new m.Event(a,b)},m.Event.prototype={isDefaultPrevented:bb,isPropagationStopped:bb,isImmediatePropagationStopped:bb,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=ab,a&&(a.preventDefault?a.preventDefault():a.returnValue=!1)},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=ab,a&&(a.stopPropagation&&a.stopPropagation(),a.cancelBubble=!0)},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=ab,a&&a.stopImmediatePropagation&&a.stopImmediatePropagation(),this.stopPropagation()}},m.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){m.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return(!e||e!==d&&!m.contains(d,e))&&(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),k.submitBubbles||(m.event.special.submit={setup:function(){return m.nodeName(this,"form")?!1:void m.event.add(this,"click._submit keypress._submit",function(a){var b=a.target,c=m.nodeName(b,"input")||m.nodeName(b,"button")?b.form:void 0;c&&!m._data(c,"submitBubbles")&&(m.event.add(c,"submit._submit",function(a){a._submit_bubble=!0}),m._data(c,"submitBubbles",!0))})},postDispatch:function(a){a._submit_bubble&&(delete a._submit_bubble,this.parentNode&&!a.isTrigger&&m.event.simulate("submit",this.parentNode,a,!0))},teardown:function(){return m.nodeName(this,"form")?!1:void m.event.remove(this,"._submit")}}),k.changeBubbles||(m.event.special.change={setup:function(){return X.test(this.nodeName)?(("checkbox"===this.type||"radio"===this.type)&&(m.event.add(this,"propertychange._change",function(a){"checked"===a.originalEvent.propertyName&&(this._just_changed=!0)}),m.event.add(this,"click._change",function(a){this._just_changed&&!a.isTrigger&&(this._just_changed=!1),m.event.simulate("change",this,a,!0)})),!1):void m.event.add(this,"beforeactivate._change",function(a){var b=a.target;X.test(b.nodeName)&&!m._data(b,"changeBubbles")&&(m.event.add(b,"change._change",function(a){!this.parentNode||a.isSimulated||a.isTrigger||m.event.simulate("change",this.parentNode,a,!0)}),m._data(b,"changeBubbles",!0))})},handle:function(a){var b=a.target;return this!==b||a.isSimulated||a.isTrigger||"radio"!==b.type&&"checkbox"!==b.type?a.handleObj.handler.apply(this,arguments):void 0},teardown:function(){return m.event.remove(this,"._change"),!X.test(this.nodeName)}}),k.focusinBubbles||m.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){m.event.simulate(b,a.target,m.event.fix(a),!0)};m.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=m._data(d,b);e||d.addEventListener(a,c,!0),m._data(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=m._data(d,b)-1;e?m._data(d,b,e):(d.removeEventListener(a,c,!0),m._removeData(d,b))}}}),m.fn.extend({on:function(a,b,c,d,e){var f,g;if("object"==typeof a){"string"!=typeof b&&(c=c||b,b=void 0);for(f in a)this.on(f,b,c,a[f],e);return this}if(null==c&&null==d?(d=b,c=b=void 0):null==d&&("string"==typeof b?(d=c,c=void 0):(d=c,c=b,b=void 0)),d===!1)d=bb;else if(!d)return this;return 1===e&&(g=d,d=function(a){return m().off(a),g.apply(this,arguments)},d.guid=g.guid||(g.guid=m.guid++)),this.each(function(){m.event.add(this,a,d,c,b)})},one:function(a,b,c,d){return this.on(a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,m(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return(b===!1||"function"==typeof b)&&(c=b,b=void 0),c===!1&&(c=bb),this.each(function(){m.event.remove(this,a,c,b)})},trigger:function(a,b){return this.each(function(){m.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?m.event.trigger(a,b,c,!0):void 0}});function db(a){var b=eb.split("|"),c=a.createDocumentFragment();if(c.createElement)while(b.length)c.createElement(b.pop());return c}var eb="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",fb=/ jQuery\d+="(?:null|\d+)"/g,gb=new RegExp("<(?:"+eb+")[\\s/>]","i"),hb=/^\s+/,ib=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,jb=/<([\w:]+)/,kb=/<tbody/i,lb=/<|&#?\w+;/,mb=/<(?:script|style|link)/i,nb=/checked\s*(?:[^=]|=\s*.checked.)/i,ob=/^$|\/(?:java|ecma)script/i,pb=/^true\/(.*)/,qb=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,rb={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],area:[1,"<map>","</map>"],param:[1,"<object>","</object>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:k.htmlSerialize?[0,"",""]:[1,"X<div>","</div>"]},sb=db(y),tb=sb.appendChild(y.createElement("div"));rb.optgroup=rb.option,rb.tbody=rb.tfoot=rb.colgroup=rb.caption=rb.thead,rb.th=rb.td;function ub(a,b){var c,d,e=0,f=typeof a.getElementsByTagName!==K?a.getElementsByTagName(b||"*"):typeof a.querySelectorAll!==K?a.querySelectorAll(b||"*"):void 0;if(!f)for(f=[],c=a.childNodes||a;null!=(d=c[e]);e++)!b||m.nodeName(d,b)?f.push(d):m.merge(f,ub(d,b));return void 0===b||b&&m.nodeName(a,b)?m.merge([a],f):f}function vb(a){W.test(a.type)&&(a.defaultChecked=a.checked)}function wb(a,b){return m.nodeName(a,"table")&&m.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function xb(a){return a.type=(null!==m.find.attr(a,"type"))+"/"+a.type,a}function yb(a){var b=pb.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function zb(a,b){for(var c,d=0;null!=(c=a[d]);d++)m._data(c,"globalEval",!b||m._data(b[d],"globalEval"))}function Ab(a,b){if(1===b.nodeType&&m.hasData(a)){var c,d,e,f=m._data(a),g=m._data(b,f),h=f.events;if(h){delete g.handle,g.events={};for(c in h)for(d=0,e=h[c].length;e>d;d++)m.event.add(b,c,h[c][d])}g.data&&(g.data=m.extend({},g.data))}}function Bb(a,b){var c,d,e;if(1===b.nodeType){if(c=b.nodeName.toLowerCase(),!k.noCloneEvent&&b[m.expando]){e=m._data(b);for(d in e.events)m.removeEvent(b,d,e.handle);b.removeAttribute(m.expando)}"script"===c&&b.text!==a.text?(xb(b).text=a.text,yb(b)):"object"===c?(b.parentNode&&(b.outerHTML=a.outerHTML),k.html5Clone&&a.innerHTML&&!m.trim(b.innerHTML)&&(b.innerHTML=a.innerHTML)):"input"===c&&W.test(a.type)?(b.defaultChecked=b.checked=a.checked,b.value!==a.value&&(b.value=a.value)):"option"===c?b.defaultSelected=b.selected=a.defaultSelected:("input"===c||"textarea"===c)&&(b.defaultValue=a.defaultValue)}}m.extend({clone:function(a,b,c){var d,e,f,g,h,i=m.contains(a.ownerDocument,a);if(k.html5Clone||m.isXMLDoc(a)||!gb.test("<"+a.nodeName+">")?f=a.cloneNode(!0):(tb.innerHTML=a.outerHTML,tb.removeChild(f=tb.firstChild)),!(k.noCloneEvent&&k.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||m.isXMLDoc(a)))for(d=ub(f),h=ub(a),g=0;null!=(e=h[g]);++g)d[g]&&Bb(e,d[g]);if(b)if(c)for(h=h||ub(a),d=d||ub(f),g=0;null!=(e=h[g]);g++)Ab(e,d[g]);else Ab(a,f);return d=ub(f,"script"),d.length>0&&zb(d,!i&&ub(a,"script")),d=h=e=null,f},buildFragment:function(a,b,c,d){for(var e,f,g,h,i,j,l,n=a.length,o=db(b),p=[],q=0;n>q;q++)if(f=a[q],f||0===f)if("object"===m.type(f))m.merge(p,f.nodeType?[f]:f);else if(lb.test(f)){h=h||o.appendChild(b.createElement("div")),i=(jb.exec(f)||["",""])[1].toLowerCase(),l=rb[i]||rb._default,h.innerHTML=l[1]+f.replace(ib,"<$1></$2>")+l[2],e=l[0];while(e--)h=h.lastChild;if(!k.leadingWhitespace&&hb.test(f)&&p.push(b.createTextNode(hb.exec(f)[0])),!k.tbody){f="table"!==i||kb.test(f)?"<table>"!==l[1]||kb.test(f)?0:h:h.firstChild,e=f&&f.childNodes.length;while(e--)m.nodeName(j=f.childNodes[e],"tbody")&&!j.childNodes.length&&f.removeChild(j)}m.merge(p,h.childNodes),h.textContent="";while(h.firstChild)h.removeChild(h.firstChild);h=o.lastChild}else p.push(b.createTextNode(f));h&&o.removeChild(h),k.appendChecked||m.grep(ub(p,"input"),vb),q=0;while(f=p[q++])if((!d||-1===m.inArray(f,d))&&(g=m.contains(f.ownerDocument,f),h=ub(o.appendChild(f),"script"),g&&zb(h),c)){e=0;while(f=h[e++])ob.test(f.type||"")&&c.push(f)}return h=null,o},cleanData:function(a,b){for(var d,e,f,g,h=0,i=m.expando,j=m.cache,l=k.deleteExpando,n=m.event.special;null!=(d=a[h]);h++)if((b||m.acceptData(d))&&(f=d[i],g=f&&j[f])){if(g.events)for(e in g.events)n[e]?m.event.remove(d,e):m.removeEvent(d,e,g.handle);j[f]&&(delete j[f],l?delete d[i]:typeof d.removeAttribute!==K?d.removeAttribute(i):d[i]=null,c.push(f))}}}),m.fn.extend({text:function(a){return V(this,function(a){return void 0===a?m.text(this):this.empty().append((this[0]&&this[0].ownerDocument||y).createTextNode(a))},null,a,arguments.length)},append:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=wb(this,a);b.appendChild(a)}})},prepend:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=wb(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},remove:function(a,b){for(var c,d=a?m.filter(a,this):this,e=0;null!=(c=d[e]);e++)b||1!==c.nodeType||m.cleanData(ub(c)),c.parentNode&&(b&&m.contains(c.ownerDocument,c)&&zb(ub(c,"script")),c.parentNode.removeChild(c));return this},empty:function(){for(var a,b=0;null!=(a=this[b]);b++){1===a.nodeType&&m.cleanData(ub(a,!1));while(a.firstChild)a.removeChild(a.firstChild);a.options&&m.nodeName(a,"select")&&(a.options.length=0)}return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return m.clone(this,a,b)})},html:function(a){return V(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a)return 1===b.nodeType?b.innerHTML.replace(fb,""):void 0;if(!("string"!=typeof a||mb.test(a)||!k.htmlSerialize&&gb.test(a)||!k.leadingWhitespace&&hb.test(a)||rb[(jb.exec(a)||["",""])[1].toLowerCase()])){a=a.replace(ib,"<$1></$2>");try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(m.cleanData(ub(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=arguments[0];return this.domManip(arguments,function(b){a=this.parentNode,m.cleanData(ub(this)),a&&a.replaceChild(b,this)}),a&&(a.length||a.nodeType)?this:this.remove()},detach:function(a){return this.remove(a,!0)},domManip:function(a,b){a=e.apply([],a);var c,d,f,g,h,i,j=0,l=this.length,n=this,o=l-1,p=a[0],q=m.isFunction(p);if(q||l>1&&"string"==typeof p&&!k.checkClone&&nb.test(p))return this.each(function(c){var d=n.eq(c);q&&(a[0]=p.call(this,c,d.html())),d.domManip(a,b)});if(l&&(i=m.buildFragment(a,this[0].ownerDocument,!1,this),c=i.firstChild,1===i.childNodes.length&&(i=c),c)){for(g=m.map(ub(i,"script"),xb),f=g.length;l>j;j++)d=i,j!==o&&(d=m.clone(d,!0,!0),f&&m.merge(g,ub(d,"script"))),b.call(this[j],d,j);if(f)for(h=g[g.length-1].ownerDocument,m.map(g,yb),j=0;f>j;j++)d=g[j],ob.test(d.type||"")&&!m._data(d,"globalEval")&&m.contains(h,d)&&(d.src?m._evalUrl&&m._evalUrl(d.src):m.globalEval((d.text||d.textContent||d.innerHTML||"").replace(qb,"")));i=c=null}return this}}),m.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){m.fn[a]=function(a){for(var c,d=0,e=[],g=m(a),h=g.length-1;h>=d;d++)c=d===h?this:this.clone(!0),m(g[d])[b](c),f.apply(e,c.get());return this.pushStack(e)}});var Cb,Db={};function Eb(b,c){var d,e=m(c.createElement(b)).appendTo(c.body),f=a.getDefaultComputedStyle&&(d=a.getDefaultComputedStyle(e[0]))?d.display:m.css(e[0],"display");return e.detach(),f}function Fb(a){var b=y,c=Db[a];return c||(c=Eb(a,b),"none"!==c&&c||(Cb=(Cb||m("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=(Cb[0].contentWindow||Cb[0].contentDocument).document,b.write(),b.close(),c=Eb(a,b),Cb.detach()),Db[a]=c),c}!function(){var a;k.shrinkWrapBlocks=function(){if(null!=a)return a;a=!1;var b,c,d;return c=y.getElementsByTagName("body")[0],c&&c.style?(b=y.createElement("div"),d=y.createElement("div"),d.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(d).appendChild(b),typeof b.style.zoom!==K&&(b.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1",b.appendChild(y.createElement("div")).style.width="5px",a=3!==b.offsetWidth),c.removeChild(d),a):void 0}}();var Gb=/^margin/,Hb=new RegExp("^("+S+")(?!px)[a-z%]+$","i"),Ib,Jb,Kb=/^(top|right|bottom|left)$/;a.getComputedStyle?(Ib=function(a){return a.ownerDocument.defaultView.getComputedStyle(a,null)},Jb=function(a,b,c){var d,e,f,g,h=a.style;return c=c||Ib(a),g=c?c.getPropertyValue(b)||c[b]:void 0,c&&(""!==g||m.contains(a.ownerDocument,a)||(g=m.style(a,b)),Hb.test(g)&&Gb.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0===g?g:g+""}):y.documentElement.currentStyle&&(Ib=function(a){return a.currentStyle},Jb=function(a,b,c){var d,e,f,g,h=a.style;return c=c||Ib(a),g=c?c[b]:void 0,null==g&&h&&h[b]&&(g=h[b]),Hb.test(g)&&!Kb.test(b)&&(d=h.left,e=a.runtimeStyle,f=e&&e.left,f&&(e.left=a.currentStyle.left),h.left="fontSize"===b?"1em":g,g=h.pixelLeft+"px",h.left=d,f&&(e.left=f)),void 0===g?g:g+""||"auto"});function Lb(a,b){return{get:function(){var c=a();if(null!=c)return c?void delete this.get:(this.get=b).apply(this,arguments)}}}!function(){var b,c,d,e,f,g,h;if(b=y.createElement("div"),b.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",d=b.getElementsByTagName("a")[0],c=d&&d.style){c.cssText="float:left;opacity:.5",k.opacity="0.5"===c.opacity,k.cssFloat=!!c.cssFloat,b.style.backgroundClip="content-box",b.cloneNode(!0).style.backgroundClip="",k.clearCloneStyle="content-box"===b.style.backgroundClip,k.boxSizing=""===c.boxSizing||""===c.MozBoxSizing||""===c.WebkitBoxSizing,m.extend(k,{reliableHiddenOffsets:function(){return null==g&&i(),g},boxSizingReliable:function(){return null==f&&i(),f},pixelPosition:function(){return null==e&&i(),e},reliableMarginRight:function(){return null==h&&i(),h}});function i(){var b,c,d,i;c=y.getElementsByTagName("body")[0],c&&c.style&&(b=y.createElement("div"),d=y.createElement("div"),d.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(d).appendChild(b),b.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute",e=f=!1,h=!0,a.getComputedStyle&&(e="1%"!==(a.getComputedStyle(b,null)||{}).top,f="4px"===(a.getComputedStyle(b,null)||{width:"4px"}).width,i=b.appendChild(y.createElement("div")),i.style.cssText=b.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",i.style.marginRight=i.style.width="0",b.style.width="1px",h=!parseFloat((a.getComputedStyle(i,null)||{}).marginRight)),b.innerHTML="<table><tr><td></td><td>t</td></tr></table>",i=b.getElementsByTagName("td"),i[0].style.cssText="margin:0;border:0;padding:0;display:none",g=0===i[0].offsetHeight,g&&(i[0].style.display="",i[1].style.display="none",g=0===i[0].offsetHeight),c.removeChild(d))}}}(),m.swap=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e};var Mb=/alpha\([^)]*\)/i,Nb=/opacity\s*=\s*([^)]*)/,Ob=/^(none|table(?!-c[ea]).+)/,Pb=new RegExp("^("+S+")(.*)$","i"),Qb=new RegExp("^([+-])=("+S+")","i"),Rb={position:"absolute",visibility:"hidden",display:"block"},Sb={letterSpacing:"0",fontWeight:"400"},Tb=["Webkit","O","Moz","ms"];function Ub(a,b){if(b in a)return b;var c=b.charAt(0).toUpperCase()+b.slice(1),d=b,e=Tb.length;while(e--)if(b=Tb[e]+c,b in a)return b;return d}function Vb(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=m._data(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&U(d)&&(f[g]=m._data(d,"olddisplay",Fb(d.nodeName)))):(e=U(d),(c&&"none"!==c||!e)&&m._data(d,"olddisplay",e?c:m.css(d,"display"))));for(g=0;h>g;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}function Wb(a,b,c){var d=Pb.exec(b);return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b}function Xb(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=m.css(a,c+T[f],!0,e)),d?("content"===c&&(g-=m.css(a,"padding"+T[f],!0,e)),"margin"!==c&&(g-=m.css(a,"border"+T[f]+"Width",!0,e))):(g+=m.css(a,"padding"+T[f],!0,e),"padding"!==c&&(g+=m.css(a,"border"+T[f]+"Width",!0,e)));return g}function Yb(a,b,c){var d=!0,e="width"===b?a.offsetWidth:a.offsetHeight,f=Ib(a),g=k.boxSizing&&"border-box"===m.css(a,"boxSizing",!1,f);if(0>=e||null==e){if(e=Jb(a,b,f),(0>e||null==e)&&(e=a.style[b]),Hb.test(e))return e;d=g&&(k.boxSizingReliable()||e===a.style[b]),e=parseFloat(e)||0}return e+Xb(a,b,c||(g?"border":"content"),d,f)+"px"}m.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=Jb(a,"opacity");return""===c?"1":c}}}},cssNumber:{columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":k.cssFloat?"cssFloat":"styleFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=m.camelCase(b),i=a.style;if(b=m.cssProps[h]||(m.cssProps[h]=Ub(i,h)),g=m.cssHooks[b]||m.cssHooks[h],void 0===c)return g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b];if(f=typeof c,"string"===f&&(e=Qb.exec(c))&&(c=(e[1]+1)*e[2]+parseFloat(m.css(a,b)),f="number"),null!=c&&c===c&&("number"!==f||m.cssNumber[h]||(c+="px"),k.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),!(g&&"set"in g&&void 0===(c=g.set(a,c,d)))))try{i[b]=c}catch(j){}}},css:function(a,b,c,d){var e,f,g,h=m.camelCase(b);return b=m.cssProps[h]||(m.cssProps[h]=Ub(a.style,h)),g=m.cssHooks[b]||m.cssHooks[h],g&&"get"in g&&(f=g.get(a,!0,c)),void 0===f&&(f=Jb(a,b,d)),"normal"===f&&b in Sb&&(f=Sb[b]),""===c||c?(e=parseFloat(f),c===!0||m.isNumeric(e)?e||0:f):f}}),m.each(["height","width"],function(a,b){m.cssHooks[b]={get:function(a,c,d){return c?Ob.test(m.css(a,"display"))&&0===a.offsetWidth?m.swap(a,Rb,function(){return Yb(a,b,d)}):Yb(a,b,d):void 0},set:function(a,c,d){var e=d&&Ib(a);return Wb(a,c,d?Xb(a,b,d,k.boxSizing&&"border-box"===m.css(a,"boxSizing",!1,e),e):0)}}}),k.opacity||(m.cssHooks.opacity={get:function(a,b){return Nb.test((b&&a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":b?"1":""},set:function(a,b){var c=a.style,d=a.currentStyle,e=m.isNumeric(b)?"alpha(opacity="+100*b+")":"",f=d&&d.filter||c.filter||"";c.zoom=1,(b>=1||""===b)&&""===m.trim(f.replace(Mb,""))&&c.removeAttribute&&(c.removeAttribute("filter"),""===b||d&&!d.filter)||(c.filter=Mb.test(f)?f.replace(Mb,e):f+" "+e)}}),m.cssHooks.marginRight=Lb(k.reliableMarginRight,function(a,b){return b?m.swap(a,{display:"inline-block"},Jb,[a,"marginRight"]):void 0}),m.each({margin:"",padding:"",border:"Width"},function(a,b){m.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+T[d]+b]=f[d]||f[d-2]||f[0];return e}},Gb.test(a)||(m.cssHooks[a+b].set=Wb)}),m.fn.extend({css:function(a,b){return V(this,function(a,b,c){var d,e,f={},g=0;if(m.isArray(b)){for(d=Ib(a),e=b.length;e>g;g++)f[b[g]]=m.css(a,b[g],!1,d);return f}return void 0!==c?m.style(a,b,c):m.css(a,b)},a,b,arguments.length>1)},show:function(){return Vb(this,!0)},hide:function(){return Vb(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){U(this)?m(this).show():m(this).hide()})}});function Zb(a,b,c,d,e){return new Zb.prototype.init(a,b,c,d,e)}m.Tween=Zb,Zb.prototype={constructor:Zb,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||"swing",this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(m.cssNumber[c]?"":"px")
},cur:function(){var a=Zb.propHooks[this.prop];return a&&a.get?a.get(this):Zb.propHooks._default.get(this)},run:function(a){var b,c=Zb.propHooks[this.prop];return this.pos=b=this.options.duration?m.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):Zb.propHooks._default.set(this),this}},Zb.prototype.init.prototype=Zb.prototype,Zb.propHooks={_default:{get:function(a){var b;return null==a.elem[a.prop]||a.elem.style&&null!=a.elem.style[a.prop]?(b=m.css(a.elem,a.prop,""),b&&"auto"!==b?b:0):a.elem[a.prop]},set:function(a){m.fx.step[a.prop]?m.fx.step[a.prop](a):a.elem.style&&(null!=a.elem.style[m.cssProps[a.prop]]||m.cssHooks[a.prop])?m.style(a.elem,a.prop,a.now+a.unit):a.elem[a.prop]=a.now}}},Zb.propHooks.scrollTop=Zb.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},m.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2}},m.fx=Zb.prototype.init,m.fx.step={};var $b,_b,ac=/^(?:toggle|show|hide)$/,bc=new RegExp("^(?:([+-])=|)("+S+")([a-z%]*)$","i"),cc=/queueHooks$/,dc=[ic],ec={"*":[function(a,b){var c=this.createTween(a,b),d=c.cur(),e=bc.exec(b),f=e&&e[3]||(m.cssNumber[a]?"":"px"),g=(m.cssNumber[a]||"px"!==f&&+d)&&bc.exec(m.css(c.elem,a)),h=1,i=20;if(g&&g[3]!==f){f=f||g[3],e=e||[],g=+d||1;do h=h||".5",g/=h,m.style(c.elem,a,g+f);while(h!==(h=c.cur()/d)&&1!==h&&--i)}return e&&(g=c.start=+g||+d||0,c.unit=f,c.end=e[1]?g+(e[1]+1)*e[2]:+e[2]),c}]};function fc(){return setTimeout(function(){$b=void 0}),$b=m.now()}function gc(a,b){var c,d={height:a},e=0;for(b=b?1:0;4>e;e+=2-b)c=T[e],d["margin"+c]=d["padding"+c]=a;return b&&(d.opacity=d.width=a),d}function hc(a,b,c){for(var d,e=(ec[b]||[]).concat(ec["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function ic(a,b,c){var d,e,f,g,h,i,j,l,n=this,o={},p=a.style,q=a.nodeType&&U(a),r=m._data(a,"fxshow");c.queue||(h=m._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,n.always(function(){n.always(function(){h.unqueued--,m.queue(a,"fx").length||h.empty.fire()})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[p.overflow,p.overflowX,p.overflowY],j=m.css(a,"display"),l="none"===j?m._data(a,"olddisplay")||Fb(a.nodeName):j,"inline"===l&&"none"===m.css(a,"float")&&(k.inlineBlockNeedsLayout&&"inline"!==Fb(a.nodeName)?p.zoom=1:p.display="inline-block")),c.overflow&&(p.overflow="hidden",k.shrinkWrapBlocks()||n.always(function(){p.overflow=c.overflow[0],p.overflowX=c.overflow[1],p.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],ac.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(q?"hide":"show")){if("show"!==e||!r||void 0===r[d])continue;q=!0}o[d]=r&&r[d]||m.style(a,d)}else j=void 0;if(m.isEmptyObject(o))"inline"===("none"===j?Fb(a.nodeName):j)&&(p.display=j);else{r?"hidden"in r&&(q=r.hidden):r=m._data(a,"fxshow",{}),f&&(r.hidden=!q),q?m(a).show():n.done(function(){m(a).hide()}),n.done(function(){var b;m._removeData(a,"fxshow");for(b in o)m.style(a,b,o[b])});for(d in o)g=hc(q?r[d]:0,d,n),d in r||(r[d]=g.start,q&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function jc(a,b){var c,d,e,f,g;for(c in a)if(d=m.camelCase(c),e=b[d],f=a[c],m.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=m.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function kc(a,b,c){var d,e,f=0,g=dc.length,h=m.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=$b||fc(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:m.extend({},b),opts:m.extend(!0,{specialEasing:{}},c),originalProperties:b,originalOptions:c,startTime:$b||fc(),duration:c.duration,tweens:[],createTween:function(b,c){var d=m.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?h.resolveWith(a,[j,b]):h.rejectWith(a,[j,b]),this}}),k=j.props;for(jc(k,j.opts.specialEasing);g>f;f++)if(d=dc[f].call(j,a,k,j.opts))return d;return m.map(k,hc,j),m.isFunction(j.opts.start)&&j.opts.start.call(a,j),m.fx.timer(m.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}m.Animation=m.extend(kc,{tweener:function(a,b){m.isFunction(a)?(b=a,a=["*"]):a=a.split(" ");for(var c,d=0,e=a.length;e>d;d++)c=a[d],ec[c]=ec[c]||[],ec[c].unshift(b)},prefilter:function(a,b){b?dc.unshift(a):dc.push(a)}}),m.speed=function(a,b,c){var d=a&&"object"==typeof a?m.extend({},a):{complete:c||!c&&b||m.isFunction(a)&&a,duration:a,easing:c&&b||b&&!m.isFunction(b)&&b};return d.duration=m.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in m.fx.speeds?m.fx.speeds[d.duration]:m.fx.speeds._default,(null==d.queue||d.queue===!0)&&(d.queue="fx"),d.old=d.complete,d.complete=function(){m.isFunction(d.old)&&d.old.call(this),d.queue&&m.dequeue(this,d.queue)},d},m.fn.extend({fadeTo:function(a,b,c,d){return this.filter(U).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=m.isEmptyObject(a),f=m.speed(b,c,d),g=function(){var b=kc(this,m.extend({},a),f);(e||m._data(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=m.timers,g=m._data(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&cc.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));(b||!c)&&m.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=m._data(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=m.timers,g=d?d.length:0;for(c.finish=!0,m.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),m.each(["toggle","show","hide"],function(a,b){var c=m.fn[b];m.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(gc(b,!0),a,d,e)}}),m.each({slideDown:gc("show"),slideUp:gc("hide"),slideToggle:gc("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){m.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),m.timers=[],m.fx.tick=function(){var a,b=m.timers,c=0;for($b=m.now();c<b.length;c++)a=b[c],a()||b[c]!==a||b.splice(c--,1);b.length||m.fx.stop(),$b=void 0},m.fx.timer=function(a){m.timers.push(a),a()?m.fx.start():m.timers.pop()},m.fx.interval=13,m.fx.start=function(){_b||(_b=setInterval(m.fx.tick,m.fx.interval))},m.fx.stop=function(){clearInterval(_b),_b=null},m.fx.speeds={slow:600,fast:200,_default:400},m.fn.delay=function(a,b){return a=m.fx?m.fx.speeds[a]||a:a,b=b||"fx",this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},function(){var a,b,c,d,e;b=y.createElement("div"),b.setAttribute("className","t"),b.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",d=b.getElementsByTagName("a")[0],c=y.createElement("select"),e=c.appendChild(y.createElement("option")),a=b.getElementsByTagName("input")[0],d.style.cssText="top:1px",k.getSetAttribute="t"!==b.className,k.style=/top/.test(d.getAttribute("style")),k.hrefNormalized="/a"===d.getAttribute("href"),k.checkOn=!!a.value,k.optSelected=e.selected,k.enctype=!!y.createElement("form").enctype,c.disabled=!0,k.optDisabled=!e.disabled,a=y.createElement("input"),a.setAttribute("value",""),k.input=""===a.getAttribute("value"),a.value="t",a.setAttribute("type","radio"),k.radioValue="t"===a.value}();var lc=/\r/g;m.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=m.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,m(this).val()):a,null==e?e="":"number"==typeof e?e+="":m.isArray(e)&&(e=m.map(e,function(a){return null==a?"":a+""})),b=m.valHooks[this.type]||m.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=m.valHooks[e.type]||m.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(lc,""):null==c?"":c)}}}),m.extend({valHooks:{option:{get:function(a){var b=m.find.attr(a,"value");return null!=b?b:m.trim(m.text(a))}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],!(!c.selected&&i!==e||(k.optDisabled?c.disabled:null!==c.getAttribute("disabled"))||c.parentNode.disabled&&m.nodeName(c.parentNode,"optgroup"))){if(b=m(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=m.makeArray(b),g=e.length;while(g--)if(d=e[g],m.inArray(m.valHooks.option.get(d),f)>=0)try{d.selected=c=!0}catch(h){d.scrollHeight}else d.selected=!1;return c||(a.selectedIndex=-1),e}}}}),m.each(["radio","checkbox"],function(){m.valHooks[this]={set:function(a,b){return m.isArray(b)?a.checked=m.inArray(m(a).val(),b)>=0:void 0}},k.checkOn||(m.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})});var mc,nc,oc=m.expr.attrHandle,pc=/^(?:checked|selected)$/i,qc=k.getSetAttribute,rc=k.input;m.fn.extend({attr:function(a,b){return V(this,m.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){m.removeAttr(this,a)})}}),m.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(a&&3!==f&&8!==f&&2!==f)return typeof a.getAttribute===K?m.prop(a,b,c):(1===f&&m.isXMLDoc(a)||(b=b.toLowerCase(),d=m.attrHooks[b]||(m.expr.match.bool.test(b)?nc:mc)),void 0===c?d&&"get"in d&&null!==(e=d.get(a,b))?e:(e=m.find.attr(a,b),null==e?void 0:e):null!==c?d&&"set"in d&&void 0!==(e=d.set(a,c,b))?e:(a.setAttribute(b,c+""),c):void m.removeAttr(a,b))},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(E);if(f&&1===a.nodeType)while(c=f[e++])d=m.propFix[c]||c,m.expr.match.bool.test(c)?rc&&qc||!pc.test(c)?a[d]=!1:a[m.camelCase("default-"+c)]=a[d]=!1:m.attr(a,c,""),a.removeAttribute(qc?c:d)},attrHooks:{type:{set:function(a,b){if(!k.radioValue&&"radio"===b&&m.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}}}),nc={set:function(a,b,c){return b===!1?m.removeAttr(a,c):rc&&qc||!pc.test(c)?a.setAttribute(!qc&&m.propFix[c]||c,c):a[m.camelCase("default-"+c)]=a[c]=!0,c}},m.each(m.expr.match.bool.source.match(/\w+/g),function(a,b){var c=oc[b]||m.find.attr;oc[b]=rc&&qc||!pc.test(b)?function(a,b,d){var e,f;return d||(f=oc[b],oc[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,oc[b]=f),e}:function(a,b,c){return c?void 0:a[m.camelCase("default-"+b)]?b.toLowerCase():null}}),rc&&qc||(m.attrHooks.value={set:function(a,b,c){return m.nodeName(a,"input")?void(a.defaultValue=b):mc&&mc.set(a,b,c)}}),qc||(mc={set:function(a,b,c){var d=a.getAttributeNode(c);return d||a.setAttributeNode(d=a.ownerDocument.createAttribute(c)),d.value=b+="","value"===c||b===a.getAttribute(c)?b:void 0}},oc.id=oc.name=oc.coords=function(a,b,c){var d;return c?void 0:(d=a.getAttributeNode(b))&&""!==d.value?d.value:null},m.valHooks.button={get:function(a,b){var c=a.getAttributeNode(b);return c&&c.specified?c.value:void 0},set:mc.set},m.attrHooks.contenteditable={set:function(a,b,c){mc.set(a,""===b?!1:b,c)}},m.each(["width","height"],function(a,b){m.attrHooks[b]={set:function(a,c){return""===c?(a.setAttribute(b,"auto"),c):void 0}}})),k.style||(m.attrHooks.style={get:function(a){return a.style.cssText||void 0},set:function(a,b){return a.style.cssText=b+""}});var sc=/^(?:input|select|textarea|button|object)$/i,tc=/^(?:a|area)$/i;m.fn.extend({prop:function(a,b){return V(this,m.prop,a,b,arguments.length>1)},removeProp:function(a){return a=m.propFix[a]||a,this.each(function(){try{this[a]=void 0,delete this[a]}catch(b){}})}}),m.extend({propFix:{"for":"htmlFor","class":"className"},prop:function(a,b,c){var d,e,f,g=a.nodeType;if(a&&3!==g&&8!==g&&2!==g)return f=1!==g||!m.isXMLDoc(a),f&&(b=m.propFix[b]||b,e=m.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){var b=m.find.attr(a,"tabindex");return b?parseInt(b,10):sc.test(a.nodeName)||tc.test(a.nodeName)&&a.href?0:-1}}}}),k.hrefNormalized||m.each(["href","src"],function(a,b){m.propHooks[b]={get:function(a){return a.getAttribute(b,4)}}}),k.optSelected||(m.propHooks.selected={get:function(a){var b=a.parentNode;return b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex),null}}),m.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){m.propFix[this.toLowerCase()]=this}),k.enctype||(m.propFix.enctype="encoding");var uc=/[\t\r\n\f]/g;m.fn.extend({addClass:function(a){var b,c,d,e,f,g,h=0,i=this.length,j="string"==typeof a&&a;if(m.isFunction(a))return this.each(function(b){m(this).addClass(a.call(this,b,this.className))});if(j)for(b=(a||"").match(E)||[];i>h;h++)if(c=this[h],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(uc," "):" ")){f=0;while(e=b[f++])d.indexOf(" "+e+" ")<0&&(d+=e+" ");g=m.trim(d),c.className!==g&&(c.className=g)}return this},removeClass:function(a){var b,c,d,e,f,g,h=0,i=this.length,j=0===arguments.length||"string"==typeof a&&a;if(m.isFunction(a))return this.each(function(b){m(this).removeClass(a.call(this,b,this.className))});if(j)for(b=(a||"").match(E)||[];i>h;h++)if(c=this[h],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(uc," "):"")){f=0;while(e=b[f++])while(d.indexOf(" "+e+" ")>=0)d=d.replace(" "+e+" "," ");g=a?m.trim(d):"",c.className!==g&&(c.className=g)}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):this.each(m.isFunction(a)?function(c){m(this).toggleClass(a.call(this,c,this.className,b),b)}:function(){if("string"===c){var b,d=0,e=m(this),f=a.match(E)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else(c===K||"boolean"===c)&&(this.className&&m._data(this,"__className__",this.className),this.className=this.className||a===!1?"":m._data(this,"__className__")||"")})},hasClass:function(a){for(var b=" "+a+" ",c=0,d=this.length;d>c;c++)if(1===this[c].nodeType&&(" "+this[c].className+" ").replace(uc," ").indexOf(b)>=0)return!0;return!1}}),m.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){m.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),m.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}});var vc=m.now(),wc=/\?/,xc=/(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;m.parseJSON=function(b){if(a.JSON&&a.JSON.parse)return a.JSON.parse(b+"");var c,d=null,e=m.trim(b+"");return e&&!m.trim(e.replace(xc,function(a,b,e,f){return c&&b&&(d=0),0===d?a:(c=e||b,d+=!f-!e,"")}))?Function("return "+e)():m.error("Invalid JSON: "+b)},m.parseXML=function(b){var c,d;if(!b||"string"!=typeof b)return null;try{a.DOMParser?(d=new DOMParser,c=d.parseFromString(b,"text/xml")):(c=new ActiveXObject("Microsoft.XMLDOM"),c.async="false",c.loadXML(b))}catch(e){c=void 0}return c&&c.documentElement&&!c.getElementsByTagName("parsererror").length||m.error("Invalid XML: "+b),c};var yc,zc,Ac=/#.*$/,Bc=/([?&])_=[^&]*/,Cc=/^(.*?):[ \t]*([^\r\n]*)\r?$/gm,Dc=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Ec=/^(?:GET|HEAD)$/,Fc=/^\/\//,Gc=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,Hc={},Ic={},Jc="*/".concat("*");try{zc=location.href}catch(Kc){zc=y.createElement("a"),zc.href="",zc=zc.href}yc=Gc.exec(zc.toLowerCase())||[];function Lc(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(E)||[];if(m.isFunction(c))while(d=f[e++])"+"===d.charAt(0)?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function Mc(a,b,c,d){var e={},f=a===Ic;function g(h){var i;return e[h]=!0,m.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function Nc(a,b){var c,d,e=m.ajaxSettings.flatOptions||{};for(d in b)void 0!==b[d]&&((e[d]?a:c||(c={}))[d]=b[d]);return c&&m.extend(!0,a,c),a}function Oc(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===e&&(e=a.mimeType||b.getResponseHeader("Content-Type"));if(e)for(g in h)if(h[g]&&h[g].test(e)){i.unshift(g);break}if(i[0]in c)f=i[0];else{for(g in c){if(!i[0]||a.converters[g+" "+i[0]]){f=g;break}d||(d=g)}f=f||d}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function Pc(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}m.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:zc,type:"GET",isLocal:Dc.test(yc[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Jc,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":m.parseJSON,"text xml":m.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?Nc(Nc(a,m.ajaxSettings),b):Nc(m.ajaxSettings,a)},ajaxPrefilter:Lc(Hc),ajaxTransport:Lc(Ic),ajax:function(a,b){"object"==typeof a&&(b=a,a=void 0),b=b||{};var c,d,e,f,g,h,i,j,k=m.ajaxSetup({},b),l=k.context||k,n=k.context&&(l.nodeType||l.jquery)?m(l):m.event,o=m.Deferred(),p=m.Callbacks("once memory"),q=k.statusCode||{},r={},s={},t=0,u="canceled",v={readyState:0,getResponseHeader:function(a){var b;if(2===t){if(!j){j={};while(b=Cc.exec(f))j[b[1].toLowerCase()]=b[2]}b=j[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===t?f:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return t||(a=s[c]=s[c]||a,r[a]=b),this},overrideMimeType:function(a){return t||(k.mimeType=a),this},statusCode:function(a){var b;if(a)if(2>t)for(b in a)q[b]=[q[b],a[b]];else v.always(a[v.status]);return this},abort:function(a){var b=a||u;return i&&i.abort(b),x(0,b),this}};if(o.promise(v).complete=p.add,v.success=v.done,v.error=v.fail,k.url=((a||k.url||zc)+"").replace(Ac,"").replace(Fc,yc[1]+"//"),k.type=b.method||b.type||k.method||k.type,k.dataTypes=m.trim(k.dataType||"*").toLowerCase().match(E)||[""],null==k.crossDomain&&(c=Gc.exec(k.url.toLowerCase()),k.crossDomain=!(!c||c[1]===yc[1]&&c[2]===yc[2]&&(c[3]||("http:"===c[1]?"80":"443"))===(yc[3]||("http:"===yc[1]?"80":"443")))),k.data&&k.processData&&"string"!=typeof k.data&&(k.data=m.param(k.data,k.traditional)),Mc(Hc,k,b,v),2===t)return v;h=k.global,h&&0===m.active++&&m.event.trigger("ajaxStart"),k.type=k.type.toUpperCase(),k.hasContent=!Ec.test(k.type),e=k.url,k.hasContent||(k.data&&(e=k.url+=(wc.test(e)?"&":"?")+k.data,delete k.data),k.cache===!1&&(k.url=Bc.test(e)?e.replace(Bc,"$1_="+vc++):e+(wc.test(e)?"&":"?")+"_="+vc++)),k.ifModified&&(m.lastModified[e]&&v.setRequestHeader("If-Modified-Since",m.lastModified[e]),m.etag[e]&&v.setRequestHeader("If-None-Match",m.etag[e])),(k.data&&k.hasContent&&k.contentType!==!1||b.contentType)&&v.setRequestHeader("Content-Type",k.contentType),v.setRequestHeader("Accept",k.dataTypes[0]&&k.accepts[k.dataTypes[0]]?k.accepts[k.dataTypes[0]]+("*"!==k.dataTypes[0]?", "+Jc+"; q=0.01":""):k.accepts["*"]);for(d in k.headers)v.setRequestHeader(d,k.headers[d]);if(k.beforeSend&&(k.beforeSend.call(l,v,k)===!1||2===t))return v.abort();u="abort";for(d in{success:1,error:1,complete:1})v[d](k[d]);if(i=Mc(Ic,k,b,v)){v.readyState=1,h&&n.trigger("ajaxSend",[v,k]),k.async&&k.timeout>0&&(g=setTimeout(function(){v.abort("timeout")},k.timeout));try{t=1,i.send(r,x)}catch(w){if(!(2>t))throw w;x(-1,w)}}else x(-1,"No Transport");function x(a,b,c,d){var j,r,s,u,w,x=b;2!==t&&(t=2,g&&clearTimeout(g),i=void 0,f=d||"",v.readyState=a>0?4:0,j=a>=200&&300>a||304===a,c&&(u=Oc(k,v,c)),u=Pc(k,u,v,j),j?(k.ifModified&&(w=v.getResponseHeader("Last-Modified"),w&&(m.lastModified[e]=w),w=v.getResponseHeader("etag"),w&&(m.etag[e]=w)),204===a||"HEAD"===k.type?x="nocontent":304===a?x="notmodified":(x=u.state,r=u.data,s=u.error,j=!s)):(s=x,(a||!x)&&(x="error",0>a&&(a=0))),v.status=a,v.statusText=(b||x)+"",j?o.resolveWith(l,[r,x,v]):o.rejectWith(l,[v,x,s]),v.statusCode(q),q=void 0,h&&n.trigger(j?"ajaxSuccess":"ajaxError",[v,k,j?r:s]),p.fireWith(l,[v,x]),h&&(n.trigger("ajaxComplete",[v,k]),--m.active||m.event.trigger("ajaxStop")))}return v},getJSON:function(a,b,c){return m.get(a,b,c,"json")},getScript:function(a,b){return m.get(a,void 0,b,"script")}}),m.each(["get","post"],function(a,b){m[b]=function(a,c,d,e){return m.isFunction(c)&&(e=e||d,d=c,c=void 0),m.ajax({url:a,type:b,dataType:e,data:c,success:d})}}),m.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){m.fn[b]=function(a){return this.on(b,a)}}),m._evalUrl=function(a){return m.ajax({url:a,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})},m.fn.extend({wrapAll:function(a){if(m.isFunction(a))return this.each(function(b){m(this).wrapAll(a.call(this,b))});if(this[0]){var b=m(a,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstChild&&1===a.firstChild.nodeType)a=a.firstChild;return a}).append(this)}return this},wrapInner:function(a){return this.each(m.isFunction(a)?function(b){m(this).wrapInner(a.call(this,b))}:function(){var b=m(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=m.isFunction(a);return this.each(function(c){m(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){m.nodeName(this,"body")||m(this).replaceWith(this.childNodes)}).end()}}),m.expr.filters.hidden=function(a){return a.offsetWidth<=0&&a.offsetHeight<=0||!k.reliableHiddenOffsets()&&"none"===(a.style&&a.style.display||m.css(a,"display"))},m.expr.filters.visible=function(a){return!m.expr.filters.hidden(a)};var Qc=/%20/g,Rc=/\[\]$/,Sc=/\r?\n/g,Tc=/^(?:submit|button|image|reset|file)$/i,Uc=/^(?:input|select|textarea|keygen)/i;function Vc(a,b,c,d){var e;if(m.isArray(b))m.each(b,function(b,e){c||Rc.test(a)?d(a,e):Vc(a+"["+("object"==typeof e?b:"")+"]",e,c,d)});else if(c||"object"!==m.type(b))d(a,b);else for(e in b)Vc(a+"["+e+"]",b[e],c,d)}m.param=function(a,b){var c,d=[],e=function(a,b){b=m.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(void 0===b&&(b=m.ajaxSettings&&m.ajaxSettings.traditional),m.isArray(a)||a.jquery&&!m.isPlainObject(a))m.each(a,function(){e(this.name,this.value)});else for(c in a)Vc(c,a[c],b,e);return d.join("&").replace(Qc,"+")},m.fn.extend({serialize:function(){return m.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=m.prop(this,"elements");return a?m.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!m(this).is(":disabled")&&Uc.test(this.nodeName)&&!Tc.test(a)&&(this.checked||!W.test(a))}).map(function(a,b){var c=m(this).val();return null==c?null:m.isArray(c)?m.map(c,function(a){return{name:b.name,value:a.replace(Sc,"\r\n")}}):{name:b.name,value:c.replace(Sc,"\r\n")}}).get()}}),m.ajaxSettings.xhr=void 0!==a.ActiveXObject?function(){return!this.isLocal&&/^(get|post|head|put|delete|options)$/i.test(this.type)&&Zc()||$c()}:Zc;var Wc=0,Xc={},Yc=m.ajaxSettings.xhr();a.ActiveXObject&&m(a).on("unload",function(){for(var a in Xc)Xc[a](void 0,!0)}),k.cors=!!Yc&&"withCredentials"in Yc,Yc=k.ajax=!!Yc,Yc&&m.ajaxTransport(function(a){if(!a.crossDomain||k.cors){var b;return{send:function(c,d){var e,f=a.xhr(),g=++Wc;if(f.open(a.type,a.url,a.async,a.username,a.password),a.xhrFields)for(e in a.xhrFields)f[e]=a.xhrFields[e];a.mimeType&&f.overrideMimeType&&f.overrideMimeType(a.mimeType),a.crossDomain||c["X-Requested-With"]||(c["X-Requested-With"]="XMLHttpRequest");for(e in c)void 0!==c[e]&&f.setRequestHeader(e,c[e]+"");f.send(a.hasContent&&a.data||null),b=function(c,e){var h,i,j;if(b&&(e||4===f.readyState))if(delete Xc[g],b=void 0,f.onreadystatechange=m.noop,e)4!==f.readyState&&f.abort();else{j={},h=f.status,"string"==typeof f.responseText&&(j.text=f.responseText);try{i=f.statusText}catch(k){i=""}h||!a.isLocal||a.crossDomain?1223===h&&(h=204):h=j.text?200:404}j&&d(h,i,j,f.getAllResponseHeaders())},a.async?4===f.readyState?setTimeout(b):f.onreadystatechange=Xc[g]=b:b()},abort:function(){b&&b(void 0,!0)}}}});function Zc(){try{return new a.XMLHttpRequest}catch(b){}}function $c(){try{return new a.ActiveXObject("Microsoft.XMLHTTP")}catch(b){}}m.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(a){return m.globalEval(a),a}}}),m.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET",a.global=!1)}),m.ajaxTransport("script",function(a){if(a.crossDomain){var b,c=y.head||m("head")[0]||y.documentElement;return{send:function(d,e){b=y.createElement("script"),b.async=!0,a.scriptCharset&&(b.charset=a.scriptCharset),b.src=a.url,b.onload=b.onreadystatechange=function(a,c){(c||!b.readyState||/loaded|complete/.test(b.readyState))&&(b.onload=b.onreadystatechange=null,b.parentNode&&b.parentNode.removeChild(b),b=null,c||e(200,"success"))},c.insertBefore(b,c.firstChild)},abort:function(){b&&b.onload(void 0,!0)}}}});var _c=[],ad=/(=)\?(?=&|$)|\?\?/;m.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=_c.pop()||m.expando+"_"+vc++;return this[a]=!0,a}}),m.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(ad.test(b.url)?"url":"string"==typeof b.data&&!(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&ad.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=m.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(ad,"$1"+e):b.jsonp!==!1&&(b.url+=(wc.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||m.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,_c.push(e)),g&&m.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0}),m.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||y;var d=u.exec(a),e=!c&&[];return d?[b.createElement(d[1])]:(d=m.buildFragment([a],b,e),e&&e.length&&m(e).remove(),m.merge([],d.childNodes))};var bd=m.fn.load;m.fn.load=function(a,b,c){if("string"!=typeof a&&bd)return bd.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");return h>=0&&(d=m.trim(a.slice(h,a.length)),a=a.slice(0,h)),m.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(f="POST"),g.length>0&&m.ajax({url:a,type:f,dataType:"html",data:b}).done(function(a){e=arguments,g.html(d?m("<div>").append(m.parseHTML(a)).find(d):a)}).complete(c&&function(a,b){g.each(c,e||[a.responseText,b,a])}),this},m.expr.filters.animated=function(a){return m.grep(m.timers,function(b){return a===b.elem}).length};var cd=a.document.documentElement;function dd(a){return m.isWindow(a)?a:9===a.nodeType?a.defaultView||a.parentWindow:!1}m.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=m.css(a,"position"),l=m(a),n={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=m.css(a,"top"),i=m.css(a,"left"),j=("absolute"===k||"fixed"===k)&&m.inArray("auto",[f,i])>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),m.isFunction(b)&&(b=b.call(a,c,h)),null!=b.top&&(n.top=b.top-h.top+g),null!=b.left&&(n.left=b.left-h.left+e),"using"in b?b.using.call(a,n):l.css(n)}},m.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){m.offset.setOffset(this,a,b)});var b,c,d={top:0,left:0},e=this[0],f=e&&e.ownerDocument;if(f)return b=f.documentElement,m.contains(b,e)?(typeof e.getBoundingClientRect!==K&&(d=e.getBoundingClientRect()),c=dd(f),{top:d.top+(c.pageYOffset||b.scrollTop)-(b.clientTop||0),left:d.left+(c.pageXOffset||b.scrollLeft)-(b.clientLeft||0)}):d},position:function(){if(this[0]){var a,b,c={top:0,left:0},d=this[0];return"fixed"===m.css(d,"position")?b=d.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),m.nodeName(a[0],"html")||(c=a.offset()),c.top+=m.css(a[0],"borderTopWidth",!0),c.left+=m.css(a[0],"borderLeftWidth",!0)),{top:b.top-c.top-m.css(d,"marginTop",!0),left:b.left-c.left-m.css(d,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||cd;while(a&&!m.nodeName(a,"html")&&"static"===m.css(a,"position"))a=a.offsetParent;return a||cd})}}),m.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,b){var c=/Y/.test(b);m.fn[a]=function(d){return V(this,function(a,d,e){var f=dd(a);return void 0===e?f?b in f?f[b]:f.document.documentElement[d]:a[d]:void(f?f.scrollTo(c?m(f).scrollLeft():e,c?e:m(f).scrollTop()):a[d]=e)},a,d,arguments.length,null)}}),m.each(["top","left"],function(a,b){m.cssHooks[b]=Lb(k.pixelPosition,function(a,c){return c?(c=Jb(a,b),Hb.test(c)?m(a).position()[b]+"px":c):void 0})}),m.each({Height:"height",Width:"width"},function(a,b){m.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){m.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");return V(this,function(b,c,d){var e;return m.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?m.css(b,c,g):m.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),m.fn.size=function(){return this.length},m.fn.andSelf=m.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return m});var ed=a.jQuery,fd=a.$;return m.noConflict=function(b){return a.$===m&&(a.$=fd),b&&a.jQuery===m&&(a.jQuery=ed),m},typeof b===K&&(a.jQuery=a.$=m),m});
(function($, undefined) {

/**
 * Unobtrusive scripting adapter for jQuery
 * https://github.com/rails/jquery-ujs
 *
 * Requires jQuery 1.8.0 or later.
 *
 * Released under the MIT license
 *
 */

  // Cut down on the number of issues from people inadvertently including jquery_ujs twice
  // by detecting and raising an error when it happens.
  'use strict';

  if ( $.rails !== undefined ) {
    $.error('jquery-ujs has already been loaded!');
  }

  // Shorthand to make it a little easier to call public rails functions from within rails.js
  var rails;
  var $document = $(document);

  $.rails = rails = {
    // Link elements bound by jquery-ujs
    linkClickSelector: 'a[data-confirm], a[data-method], a[data-remote]:not([disabled]), a[data-disable-with], a[data-disable]',

    // Button elements bound by jquery-ujs
    buttonClickSelector: 'button[data-remote]:not([form]):not(form button), button[data-confirm]:not([form]):not(form button)',

    // Select elements bound by jquery-ujs
    inputChangeSelector: 'select[data-remote], input[data-remote], textarea[data-remote]',

    // Form elements bound by jquery-ujs
    formSubmitSelector: 'form',

    // Form input elements bound by jquery-ujs
    formInputClickSelector: 'form input[type=submit], form input[type=image], form button[type=submit], form button:not([type]), input[type=submit][form], input[type=image][form], button[type=submit][form], button[form]:not([type])',

    // Form input elements disabled during form submission
    disableSelector: 'input[data-disable-with]:enabled, button[data-disable-with]:enabled, textarea[data-disable-with]:enabled, input[data-disable]:enabled, button[data-disable]:enabled, textarea[data-disable]:enabled',

    // Form input elements re-enabled after form submission
    enableSelector: 'input[data-disable-with]:disabled, button[data-disable-with]:disabled, textarea[data-disable-with]:disabled, input[data-disable]:disabled, button[data-disable]:disabled, textarea[data-disable]:disabled',

    // Form required input elements
    requiredInputSelector: 'input[name][required]:not([disabled]), textarea[name][required]:not([disabled])',

    // Form file input elements
    fileInputSelector: 'input[type=file]:not([disabled])',

    // Link onClick disable selector with possible reenable after remote submission
    linkDisableSelector: 'a[data-disable-with], a[data-disable]',

    // Button onClick disable selector with possible reenable after remote submission
    buttonDisableSelector: 'button[data-remote][data-disable-with], button[data-remote][data-disable]',

    // Up-to-date Cross-Site Request Forgery token
    csrfToken: function() {
     return $('meta[name=csrf-token]').attr('content');
    },

    // URL param that must contain the CSRF token
    csrfParam: function() {
     return $('meta[name=csrf-param]').attr('content');
    },

    // Make sure that every Ajax request sends the CSRF token
    CSRFProtection: function(xhr) {
      var token = rails.csrfToken();
      if (token) xhr.setRequestHeader('X-CSRF-Token', token);
    },

    // Make sure that all forms have actual up-to-date tokens (cached forms contain old ones)
    refreshCSRFTokens: function(){
      $('form input[name="' + rails.csrfParam() + '"]').val(rails.csrfToken());
    },

    // Triggers an event on an element and returns false if the event result is false
    fire: function(obj, name, data) {
      var event = $.Event(name);
      obj.trigger(event, data);
      return event.result !== false;
    },

    // Default confirm dialog, may be overridden with custom confirm dialog in $.rails.confirm
    confirm: function(message) {
      return confirm(message);
    },

    // Default ajax function, may be overridden with custom function in $.rails.ajax
    ajax: function(options) {
      return $.ajax(options);
    },

    // Default way to get an element's href. May be overridden at $.rails.href.
    href: function(element) {
      return element[0].href;
    },

    // Checks "data-remote" if true to handle the request through a XHR request.
    isRemote: function(element) {
      return element.data('remote') !== undefined && element.data('remote') !== false;
    },

    // Submits "remote" forms and links with ajax
    handleRemote: function(element) {
      var method, url, data, withCredentials, dataType, options;

      if (rails.fire(element, 'ajax:before')) {
        withCredentials = element.data('with-credentials') || null;
        dataType = element.data('type') || ($.ajaxSettings && $.ajaxSettings.dataType);

        if (element.is('form')) {
          method = element.data('ujs:submit-button-formmethod') || element.attr('method');
          url = element.data('ujs:submit-button-formaction') || element.attr('action');
          data = $(element[0]).serializeArray();
          // memoized value from clicked submit button
          var button = element.data('ujs:submit-button');
          if (button) {
            data.push(button);
            element.data('ujs:submit-button', null);
          }
          element.data('ujs:submit-button-formmethod', null);
          element.data('ujs:submit-button-formaction', null);
        } else if (element.is(rails.inputChangeSelector)) {
          method = element.data('method');
          url = element.data('url');
          data = element.serialize();
          if (element.data('params')) data = data + '&' + element.data('params');
        } else if (element.is(rails.buttonClickSelector)) {
          method = element.data('method') || 'get';
          url = element.data('url');
          data = element.serialize();
          if (element.data('params')) data = data + '&' + element.data('params');
        } else {
          method = element.data('method');
          url = rails.href(element);
          data = element.data('params') || null;
        }

        options = {
          type: method || 'GET', data: data, dataType: dataType,
          // stopping the "ajax:beforeSend" event will cancel the ajax request
          beforeSend: function(xhr, settings) {
            if (settings.dataType === undefined) {
              xhr.setRequestHeader('accept', '*/*;q=0.5, ' + settings.accepts.script);
            }
            if (rails.fire(element, 'ajax:beforeSend', [xhr, settings])) {
              element.trigger('ajax:send', xhr);
            } else {
              return false;
            }
          },
          success: function(data, status, xhr) {
            element.trigger('ajax:success', [data, status, xhr]);
          },
          complete: function(xhr, status) {
            element.trigger('ajax:complete', [xhr, status]);
          },
          error: function(xhr, status, error) {
            element.trigger('ajax:error', [xhr, status, error]);
          },
          crossDomain: rails.isCrossDomain(url)
        };

        // There is no withCredentials for IE6-8 when
        // "Enable native XMLHTTP support" is disabled
        if (withCredentials) {
          options.xhrFields = {
            withCredentials: withCredentials
          };
        }

        // Only pass url to `ajax` options if not blank
        if (url) { options.url = url; }

        return rails.ajax(options);
      } else {
        return false;
      }
    },

    // Determines if the request is a cross domain request.
    isCrossDomain: function(url) {
      var originAnchor = document.createElement('a');
      originAnchor.href = location.href;
      var urlAnchor = document.createElement('a');

      try {
        urlAnchor.href = url;
        // This is a workaround to a IE bug.
        urlAnchor.href = urlAnchor.href;

        // If URL protocol is false or is a string containing a single colon
        // *and* host are false, assume it is not a cross-domain request
        // (should only be the case for IE7 and IE compatibility mode).
        // Otherwise, evaluate protocol and host of the URL against the origin
        // protocol and host.
        return !(((!urlAnchor.protocol || urlAnchor.protocol === ':') && !urlAnchor.host) ||
          (originAnchor.protocol + '//' + originAnchor.host ===
            urlAnchor.protocol + '//' + urlAnchor.host));
      } catch (e) {
        // If there is an error parsing the URL, assume it is crossDomain.
        return true;
      }
    },

    // Handles "data-method" on links such as:
    // <a href="/users/5" data-method="delete" rel="nofollow" data-confirm="Are you sure?">Delete</a>
    handleMethod: function(link) {
      var href = rails.href(link),
        method = link.data('method'),
        target = link.attr('target'),
        csrfToken = rails.csrfToken(),
        csrfParam = rails.csrfParam(),
        form = $('<form method="post" action="' + href + '"></form>'),
        metadataInput = '<input name="_method" value="' + method + '" type="hidden" />';

      if (csrfParam !== undefined && csrfToken !== undefined && !rails.isCrossDomain(href)) {
        metadataInput += '<input name="' + csrfParam + '" value="' + csrfToken + '" type="hidden" />';
      }

      if (target) { form.attr('target', target); }

      form.hide().append(metadataInput).appendTo('body');
      form.submit();
    },

    // Helper function that returns form elements that match the specified CSS selector
    // If form is actually a "form" element this will return associated elements outside the from that have
    // the html form attribute set
    formElements: function(form, selector) {
      return form.is('form') ? $(form[0].elements).filter(selector) : form.find(selector);
    },

    /* Disables form elements:
      - Caches element value in 'ujs:enable-with' data store
      - Replaces element text with value of 'data-disable-with' attribute
      - Sets disabled property to true
    */
    disableFormElements: function(form) {
      rails.formElements(form, rails.disableSelector).each(function() {
        rails.disableFormElement($(this));
      });
    },

    disableFormElement: function(element) {
      var method, replacement;

      method = element.is('button') ? 'html' : 'val';
      replacement = element.data('disable-with');

      if (replacement !== undefined) {
        element.data('ujs:enable-with', element[method]());
        element[method](replacement);
      }

      element.prop('disabled', true);
      element.data('ujs:disabled', true);
    },

    /* Re-enables disabled form elements:
      - Replaces element text with cached value from 'ujs:enable-with' data store (created in `disableFormElements`)
      - Sets disabled property to false
    */
    enableFormElements: function(form) {
      rails.formElements(form, rails.enableSelector).each(function() {
        rails.enableFormElement($(this));
      });
    },

    enableFormElement: function(element) {
      var method = element.is('button') ? 'html' : 'val';
      if (element.data('ujs:enable-with') !== undefined) {
        element[method](element.data('ujs:enable-with'));
        element.removeData('ujs:enable-with'); // clean up cache
      }
      element.prop('disabled', false);
      element.removeData('ujs:disabled');
    },

   /* For 'data-confirm' attribute:
      - Fires `confirm` event
      - Shows the confirmation dialog
      - Fires the `confirm:complete` event

      Returns `true` if no function stops the chain and user chose yes; `false` otherwise.
      Attaching a handler to the element's `confirm` event that returns a `falsy` value cancels the confirmation dialog.
      Attaching a handler to the element's `confirm:complete` event that returns a `falsy` value makes this function
      return false. The `confirm:complete` event is fired whether or not the user answered true or false to the dialog.
   */
    allowAction: function(element) {
      var message = element.data('confirm'),
          answer = false, callback;
      if (!message) { return true; }

      if (rails.fire(element, 'confirm')) {
        try {
          answer = rails.confirm(message);
        } catch (e) {
          (console.error || console.log).call(console, e.stack || e);
        }
        callback = rails.fire(element, 'confirm:complete', [answer]);
      }
      return answer && callback;
    },

    // Helper function which checks for blank inputs in a form that match the specified CSS selector
    blankInputs: function(form, specifiedSelector, nonBlank) {
      var foundInputs = $(),
        input,
        valueToCheck,
        radiosForNameWithNoneSelected,
        radioName,
        selector = specifiedSelector || 'input,textarea',
        requiredInputs = form.find(selector),
        checkedRadioButtonNames = {};

      requiredInputs.each(function() {
        input = $(this);
        if (input.is('input[type=radio]')) {

          // Don't count unchecked required radio as blank if other radio with same name is checked,
          // regardless of whether same-name radio input has required attribute or not. The spec
          // states https://www.w3.org/TR/html5/forms.html#the-required-attribute
          radioName = input.attr('name');

          // Skip if we've already seen the radio with this name.
          if (!checkedRadioButtonNames[radioName]) {

            // If none checked
            if (form.find('input[type=radio]:checked[name="' + radioName + '"]').length === 0) {
              radiosForNameWithNoneSelected = form.find(
                'input[type=radio][name="' + radioName + '"]');
              foundInputs = foundInputs.add(radiosForNameWithNoneSelected);
            }

            // We only need to check each name once.
            checkedRadioButtonNames[radioName] = radioName;
          }
        } else {
          valueToCheck = input.is('input[type=checkbox],input[type=radio]') ? input.is(':checked') : !!input.val();
          if (valueToCheck === nonBlank) {
            foundInputs = foundInputs.add(input);
          }
        }
      });
      return foundInputs.length ? foundInputs : false;
    },

    // Helper function which checks for non-blank inputs in a form that match the specified CSS selector
    nonBlankInputs: function(form, specifiedSelector) {
      return rails.blankInputs(form, specifiedSelector, true); // true specifies nonBlank
    },

    // Helper function, needed to provide consistent behavior in IE
    stopEverything: function(e) {
      $(e.target).trigger('ujs:everythingStopped');
      e.stopImmediatePropagation();
      return false;
    },

    //  Replace element's html with the 'data-disable-with' after storing original html
    //  and prevent clicking on it
    disableElement: function(element) {
      var replacement = element.data('disable-with');

      if (replacement !== undefined) {
        element.data('ujs:enable-with', element.html()); // store enabled state
        element.html(replacement);
      }

      element.bind('click.railsDisable', function(e) { // prevent further clicking
        return rails.stopEverything(e);
      });
      element.data('ujs:disabled', true);
    },

    // Restore element to its original state which was disabled by 'disableElement' above
    enableElement: function(element) {
      if (element.data('ujs:enable-with') !== undefined) {
        element.html(element.data('ujs:enable-with')); // set to old enabled state
        element.removeData('ujs:enable-with'); // clean up cache
      }
      element.unbind('click.railsDisable'); // enable element
      element.removeData('ujs:disabled');
    }
  };

  if (rails.fire($document, 'rails:attachBindings')) {

    $.ajaxPrefilter(function(options, originalOptions, xhr){ if ( !options.crossDomain ) { rails.CSRFProtection(xhr); }});

    // This event works the same as the load event, except that it fires every
    // time the page is loaded.
    //
    // See https://github.com/rails/jquery-ujs/issues/357
    // See https://developer.mozilla.org/en-US/docs/Using_Firefox_1.5_caching
    $(window).on('pageshow.rails', function () {
      $($.rails.enableSelector).each(function () {
        var element = $(this);

        if (element.data('ujs:disabled')) {
          $.rails.enableFormElement(element);
        }
      });

      $($.rails.linkDisableSelector).each(function () {
        var element = $(this);

        if (element.data('ujs:disabled')) {
          $.rails.enableElement(element);
        }
      });
    });

    $document.delegate(rails.linkDisableSelector, 'ajax:complete', function() {
        rails.enableElement($(this));
    });

    $document.delegate(rails.buttonDisableSelector, 'ajax:complete', function() {
        rails.enableFormElement($(this));
    });

    $document.delegate(rails.linkClickSelector, 'click.rails', function(e) {
      var link = $(this), method = link.data('method'), data = link.data('params'), metaClick = e.metaKey || e.ctrlKey;
      if (!rails.allowAction(link)) return rails.stopEverything(e);

      if (!metaClick && link.is(rails.linkDisableSelector)) rails.disableElement(link);

      if (rails.isRemote(link)) {
        if (metaClick && (!method || method === 'GET') && !data) { return true; }

        var handleRemote = rails.handleRemote(link);
        // Response from rails.handleRemote() will either be false or a deferred object promise.
        if (handleRemote === false) {
          rails.enableElement(link);
        } else {
          handleRemote.fail( function() { rails.enableElement(link); } );
        }
        return false;

      } else if (method) {
        rails.handleMethod(link);
        return false;
      }
    });

    $document.delegate(rails.buttonClickSelector, 'click.rails', function(e) {
      var button = $(this);

      if (!rails.allowAction(button) || !rails.isRemote(button)) return rails.stopEverything(e);

      if (button.is(rails.buttonDisableSelector)) rails.disableFormElement(button);

      var handleRemote = rails.handleRemote(button);
      // Response from rails.handleRemote() will either be false or a deferred object promise.
      if (handleRemote === false) {
        rails.enableFormElement(button);
      } else {
        handleRemote.fail( function() { rails.enableFormElement(button); } );
      }
      return false;
    });

    $document.delegate(rails.inputChangeSelector, 'change.rails', function(e) {
      var link = $(this);
      if (!rails.allowAction(link) || !rails.isRemote(link)) return rails.stopEverything(e);

      rails.handleRemote(link);
      return false;
    });

    $document.delegate(rails.formSubmitSelector, 'submit.rails', function(e) {
      var form = $(this),
        remote = rails.isRemote(form),
        blankRequiredInputs,
        nonBlankFileInputs;

      if (!rails.allowAction(form)) return rails.stopEverything(e);

      // Skip other logic when required values are missing or file upload is present
      if (form.attr('novalidate') === undefined) {
        if (form.data('ujs:formnovalidate-button') === undefined) {
          blankRequiredInputs = rails.blankInputs(form, rails.requiredInputSelector, false);
          if (blankRequiredInputs && rails.fire(form, 'ajax:aborted:required', [blankRequiredInputs])) {
            return rails.stopEverything(e);
          }
        } else {
          // Clear the formnovalidate in case the next button click is not on a formnovalidate button
          // Not strictly necessary to do here, since it is also reset on each button click, but just to be certain
          form.data('ujs:formnovalidate-button', undefined);
        }
      }

      if (remote) {
        nonBlankFileInputs = rails.nonBlankInputs(form, rails.fileInputSelector);
        if (nonBlankFileInputs) {
          // Slight timeout so that the submit button gets properly serialized
          // (make it easy for event handler to serialize form without disabled values)
          setTimeout(function(){ rails.disableFormElements(form); }, 13);
          var aborted = rails.fire(form, 'ajax:aborted:file', [nonBlankFileInputs]);

          // Re-enable form elements if event bindings return false (canceling normal form submission)
          if (!aborted) { setTimeout(function(){ rails.enableFormElements(form); }, 13); }

          return aborted;
        }

        rails.handleRemote(form);
        return false;

      } else {
        // Slight timeout so that the submit button gets properly serialized
        setTimeout(function(){ rails.disableFormElements(form); }, 13);
      }
    });

    $document.delegate(rails.formInputClickSelector, 'click.rails', function(event) {
      var button = $(this);

      if (!rails.allowAction(button)) return rails.stopEverything(event);

      // Register the pressed submit button
      var name = button.attr('name'),
        data = name ? {name:name, value:button.val()} : null;

      var form = button.closest('form');
      if (form.length === 0) {
        form = $('#' + button.attr('form'));
      }
      form.data('ujs:submit-button', data);

      // Save attributes from button
      form.data('ujs:formnovalidate-button', button.attr('formnovalidate'));
      form.data('ujs:submit-button-formaction', button.attr('formaction'));
      form.data('ujs:submit-button-formmethod', button.attr('formmethod'));
    });

    $document.delegate(rails.formSubmitSelector, 'ajax:send.rails', function(event) {
      if (this === event.target) rails.disableFormElements($(this));
    });

    $document.delegate(rails.formSubmitSelector, 'ajax:complete.rails', function(event) {
      if (this === event.target) rails.enableFormElements($(this));
    });

    $(function(){
      rails.refreshCSRFTokens();
    });
  }

})( jQuery );
(function() {
  var CSRFToken, Click, ComponentUrl, EVENTS, Link, ProgressBar, browserIsntBuggy, browserSupportsCustomEvents, browserSupportsPushState, browserSupportsTurbolinks, bypassOnLoadPopstate, cacheCurrentPage, cacheSize, changePage, clone, constrainPageCacheTo, createDocument, crossOriginRedirect, currentState, enableProgressBar, enableTransitionCache, executeScriptTags, extractTitleAndBody, fetch, fetchHistory, fetchReplacement, historyStateIsDefined, initializeTurbolinks, installDocumentReadyPageEventTriggers, installHistoryChangeHandler, installJqueryAjaxSuccessPageUpdateTrigger, loadedAssets, manuallyTriggerHashChangeForFirefox, pageCache, pageChangePrevented, pagesCached, popCookie, processResponse, progressBar, recallScrollPosition, ref, referer, reflectNewUrl, reflectRedirectedUrl, rememberCurrentState, rememberCurrentUrl, rememberReferer, removeNoscriptTags, requestMethodIsSafe, resetScrollPosition, setAutofocusElement, transitionCacheEnabled, transitionCacheFor, triggerEvent, visit, xhr,
    indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; },
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty,
    slice = [].slice,
    bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  pageCache = {};

  cacheSize = 10;

  transitionCacheEnabled = false;

  progressBar = null;

  currentState = null;

  loadedAssets = null;

  referer = null;

  xhr = null;

  EVENTS = {
    BEFORE_CHANGE: 'page:before-change',
    FETCH: 'page:fetch',
    RECEIVE: 'page:receive',
    CHANGE: 'page:change',
    UPDATE: 'page:update',
    LOAD: 'page:load',
    RESTORE: 'page:restore',
    BEFORE_UNLOAD: 'page:before-unload',
    EXPIRE: 'page:expire'
  };

  fetch = function(url) {
    var cachedPage;
    url = new ComponentUrl(url);
    rememberReferer();
    cacheCurrentPage();
    if (progressBar != null) {
      progressBar.start();
    }
    if (transitionCacheEnabled && (cachedPage = transitionCacheFor(url.absolute))) {
      fetchHistory(cachedPage);
      return fetchReplacement(url, null, false);
    } else {
      return fetchReplacement(url, resetScrollPosition);
    }
  };

  transitionCacheFor = function(url) {
    var cachedPage;
    cachedPage = pageCache[url];
    if (cachedPage && !cachedPage.transitionCacheDisabled) {
      return cachedPage;
    }
  };

  enableTransitionCache = function(enable) {
    if (enable == null) {
      enable = true;
    }
    return transitionCacheEnabled = enable;
  };

  enableProgressBar = function(enable) {
    if (enable == null) {
      enable = true;
    }
    if (!browserSupportsTurbolinks) {
      return;
    }
    if (enable) {
      return progressBar != null ? progressBar : progressBar = new ProgressBar('html');
    } else {
      if (progressBar != null) {
        progressBar.uninstall();
      }
      return progressBar = null;
    }
  };

  fetchReplacement = function(url, onLoadFunction, showProgressBar) {
    if (showProgressBar == null) {
      showProgressBar = true;
    }
    triggerEvent(EVENTS.FETCH, {
      url: url.absolute
    });
    if (xhr != null) {
      xhr.abort();
    }
    xhr = new XMLHttpRequest;
    xhr.open('GET', url.withoutHashForIE10compatibility(), true);
    xhr.setRequestHeader('Accept', 'text/html, application/xhtml+xml, application/xml');
    xhr.setRequestHeader('X-XHR-Referer', referer);
    xhr.onload = function() {
      var doc;
      triggerEvent(EVENTS.RECEIVE, {
        url: url.absolute
      });
      if (doc = processResponse()) {
        reflectNewUrl(url);
        reflectRedirectedUrl();
        changePage.apply(null, extractTitleAndBody(doc));
        manuallyTriggerHashChangeForFirefox();
        if (typeof onLoadFunction === "function") {
          onLoadFunction();
        }
        return triggerEvent(EVENTS.LOAD);
      } else {
        return document.location.href = crossOriginRedirect() || url.absolute;
      }
    };
    if (progressBar && showProgressBar) {
      xhr.onprogress = (function(_this) {
        return function(event) {
          var percent;
          percent = event.lengthComputable ? event.loaded / event.total * 100 : progressBar.value + (100 - progressBar.value) / 10;
          return progressBar.advanceTo(percent);
        };
      })(this);
    }
    xhr.onloadend = function() {
      return xhr = null;
    };
    xhr.onerror = function() {
      return document.location.href = url.absolute;
    };
    return xhr.send();
  };

  fetchHistory = function(cachedPage) {
    if (xhr != null) {
      xhr.abort();
    }
    changePage(cachedPage.title, cachedPage.body);
    recallScrollPosition(cachedPage);
    return triggerEvent(EVENTS.RESTORE);
  };

  cacheCurrentPage = function() {
    var currentStateUrl;
    currentStateUrl = new ComponentUrl(currentState.url);
    pageCache[currentStateUrl.absolute] = {
      url: currentStateUrl.relative,
      body: document.body,
      title: document.title,
      positionY: window.pageYOffset,
      positionX: window.pageXOffset,
      cachedAt: new Date().getTime(),
      transitionCacheDisabled: document.querySelector('[data-no-transition-cache]') != null
    };
    return constrainPageCacheTo(cacheSize);
  };

  pagesCached = function(size) {
    if (size == null) {
      size = cacheSize;
    }
    if (/^[\d]+$/.test(size)) {
      return cacheSize = parseInt(size);
    }
  };

  constrainPageCacheTo = function(limit) {
    var cacheTimesRecentFirst, i, key, len, pageCacheKeys, results;
    pageCacheKeys = Object.keys(pageCache);
    cacheTimesRecentFirst = pageCacheKeys.map(function(url) {
      return pageCache[url].cachedAt;
    }).sort(function(a, b) {
      return b - a;
    });
    results = [];
    for (i = 0, len = pageCacheKeys.length; i < len; i++) {
      key = pageCacheKeys[i];
      if (!(pageCache[key].cachedAt <= cacheTimesRecentFirst[limit])) {
        continue;
      }
      triggerEvent(EVENTS.EXPIRE, pageCache[key]);
      results.push(delete pageCache[key]);
    }
    return results;
  };

  changePage = function(title, body, csrfToken, runScripts) {
    triggerEvent(EVENTS.BEFORE_UNLOAD);
    document.title = title;
    document.documentElement.replaceChild(body, document.body);
    if (csrfToken != null) {
      CSRFToken.update(csrfToken);
    }
    setAutofocusElement();
    if (runScripts) {
      executeScriptTags();
    }
    currentState = window.history.state;
    if (progressBar != null) {
      progressBar.done();
    }
    triggerEvent(EVENTS.CHANGE);
    return triggerEvent(EVENTS.UPDATE);
  };

  executeScriptTags = function() {
    var attr, copy, i, j, len, len1, nextSibling, parentNode, ref, ref1, script, scripts;
    scripts = Array.prototype.slice.call(document.body.querySelectorAll('script:not([data-turbolinks-eval="false"])'));
    for (i = 0, len = scripts.length; i < len; i++) {
      script = scripts[i];
      if (!((ref = script.type) === '' || ref === 'text/javascript')) {
        continue;
      }
      copy = document.createElement('script');
      ref1 = script.attributes;
      for (j = 0, len1 = ref1.length; j < len1; j++) {
        attr = ref1[j];
        copy.setAttribute(attr.name, attr.value);
      }
      if (!script.hasAttribute('async')) {
        copy.async = false;
      }
      copy.appendChild(document.createTextNode(script.innerHTML));
      parentNode = script.parentNode, nextSibling = script.nextSibling;
      parentNode.removeChild(script);
      parentNode.insertBefore(copy, nextSibling);
    }
  };

  removeNoscriptTags = function(node) {
    node.innerHTML = node.innerHTML.replace(/<noscript[\S\s]*?<\/noscript>/ig, '');
    return node;
  };

  setAutofocusElement = function() {
    var autofocusElement, list;
    autofocusElement = (list = document.querySelectorAll('input[autofocus], textarea[autofocus]'))[list.length - 1];
    if (autofocusElement && document.activeElement !== autofocusElement) {
      return autofocusElement.focus();
    }
  };

  reflectNewUrl = function(url) {
    if ((url = new ComponentUrl(url)).absolute !== referer) {
      return window.history.pushState({
        turbolinks: true,
        url: url.absolute
      }, '', url.absolute);
    }
  };

  reflectRedirectedUrl = function() {
    var location, preservedHash;
    if (location = xhr.getResponseHeader('X-XHR-Redirected-To')) {
      location = new ComponentUrl(location);
      preservedHash = location.hasNoHash() ? document.location.hash : '';
      return window.history.replaceState(window.history.state, '', location.href + preservedHash);
    }
  };

  crossOriginRedirect = function() {
    var redirect;
    if (((redirect = xhr.getResponseHeader('Location')) != null) && (new ComponentUrl(redirect)).crossOrigin()) {
      return redirect;
    }
  };

  rememberReferer = function() {
    return referer = document.location.href;
  };

  rememberCurrentUrl = function() {
    return window.history.replaceState({
      turbolinks: true,
      url: document.location.href
    }, '', document.location.href);
  };

  rememberCurrentState = function() {
    return currentState = window.history.state;
  };

  manuallyTriggerHashChangeForFirefox = function() {
    var url;
    if (navigator.userAgent.match(/Firefox/) && !(url = new ComponentUrl).hasNoHash()) {
      window.history.replaceState(currentState, '', url.withoutHash());
      return document.location.hash = url.hash;
    }
  };

  recallScrollPosition = function(page) {
    return window.scrollTo(page.positionX, page.positionY);
  };

  resetScrollPosition = function() {
    if (document.location.hash) {
      return document.location.href = document.location.href;
    } else {
      return window.scrollTo(0, 0);
    }
  };

  clone = function(original) {
    var copy, key, value;
    if ((original == null) || typeof original !== 'object') {
      return original;
    }
    copy = new original.constructor();
    for (key in original) {
      value = original[key];
      copy[key] = clone(value);
    }
    return copy;
  };

  popCookie = function(name) {
    var ref, value;
    value = ((ref = document.cookie.match(new RegExp(name + "=(\\w+)"))) != null ? ref[1].toUpperCase() : void 0) || '';
    document.cookie = name + '=; expires=Thu, 01-Jan-70 00:00:01 GMT; path=/';
    return value;
  };

  triggerEvent = function(name, data) {
    var event;
    if (typeof Prototype !== 'undefined') {
      Event.fire(document, name, data, true);
    }
    event = document.createEvent('Events');
    if (data) {
      event.data = data;
    }
    event.initEvent(name, true, true);
    return document.dispatchEvent(event);
  };

  pageChangePrevented = function(url) {
    return !triggerEvent(EVENTS.BEFORE_CHANGE, {
      url: url
    });
  };

  processResponse = function() {
    var assetsChanged, clientOrServerError, doc, extractTrackAssets, intersection, validContent;
    clientOrServerError = function() {
      var ref;
      return (400 <= (ref = xhr.status) && ref < 600);
    };
    validContent = function() {
      var contentType;
      return ((contentType = xhr.getResponseHeader('Content-Type')) != null) && contentType.match(/^(?:text\/html|application\/xhtml\+xml|application\/xml)(?:;|$)/);
    };
    extractTrackAssets = function(doc) {
      var i, len, node, ref, results;
      ref = doc.querySelector('head').childNodes;
      results = [];
      for (i = 0, len = ref.length; i < len; i++) {
        node = ref[i];
        if ((typeof node.getAttribute === "function" ? node.getAttribute('data-turbolinks-track') : void 0) != null) {
          results.push(node.getAttribute('src') || node.getAttribute('href'));
        }
      }
      return results;
    };
    assetsChanged = function(doc) {
      var fetchedAssets;
      loadedAssets || (loadedAssets = extractTrackAssets(document));
      fetchedAssets = extractTrackAssets(doc);
      return fetchedAssets.length !== loadedAssets.length || intersection(fetchedAssets, loadedAssets).length !== loadedAssets.length;
    };
    intersection = function(a, b) {
      var i, len, ref, results, value;
      if (a.length > b.length) {
        ref = [b, a], a = ref[0], b = ref[1];
      }
      results = [];
      for (i = 0, len = a.length; i < len; i++) {
        value = a[i];
        if (indexOf.call(b, value) >= 0) {
          results.push(value);
        }
      }
      return results;
    };
    if (!clientOrServerError() && validContent()) {
      doc = createDocument(xhr.responseText);
      if (doc && !assetsChanged(doc)) {
        return doc;
      }
    }
  };

  extractTitleAndBody = function(doc) {
    var title;
    title = doc.querySelector('title');
    return [title != null ? title.textContent : void 0, removeNoscriptTags(doc.querySelector('body')), CSRFToken.get(doc).token, 'runScripts'];
  };

  CSRFToken = {
    get: function(doc) {
      var tag;
      if (doc == null) {
        doc = document;
      }
      return {
        node: tag = doc.querySelector('meta[name="csrf-token"]'),
        token: tag != null ? typeof tag.getAttribute === "function" ? tag.getAttribute('content') : void 0 : void 0
      };
    },
    update: function(latest) {
      var current;
      current = this.get();
      if ((current.token != null) && (latest != null) && current.token !== latest) {
        return current.node.setAttribute('content', latest);
      }
    }
  };

  createDocument = function(html) {
    var doc;
    doc = document.documentElement.cloneNode();
    doc.innerHTML = html;
    doc.head = doc.querySelector('head');
    doc.body = doc.querySelector('body');
    return doc;
  };

  ComponentUrl = (function() {
    function ComponentUrl(original1) {
      this.original = original1 != null ? original1 : document.location.href;
      if (this.original.constructor === ComponentUrl) {
        return this.original;
      }
      this._parse();
    }

    ComponentUrl.prototype.withoutHash = function() {
      return this.href.replace(this.hash, '').replace('#', '');
    };

    ComponentUrl.prototype.withoutHashForIE10compatibility = function() {
      return this.withoutHash();
    };

    ComponentUrl.prototype.hasNoHash = function() {
      return this.hash.length === 0;
    };

    ComponentUrl.prototype.crossOrigin = function() {
      return this.origin !== (new ComponentUrl).origin;
    };

    ComponentUrl.prototype._parse = function() {
      var ref;
      (this.link != null ? this.link : this.link = document.createElement('a')).href = this.original;
      ref = this.link, this.href = ref.href, this.protocol = ref.protocol, this.host = ref.host, this.hostname = ref.hostname, this.port = ref.port, this.pathname = ref.pathname, this.search = ref.search, this.hash = ref.hash;
      this.origin = [this.protocol, '//', this.hostname].join('');
      if (this.port.length !== 0) {
        this.origin += ":" + this.port;
      }
      this.relative = [this.pathname, this.search, this.hash].join('');
      return this.absolute = this.href;
    };

    return ComponentUrl;

  })();

  Link = (function(superClass) {
    extend(Link, superClass);

    Link.HTML_EXTENSIONS = ['html'];

    Link.allowExtensions = function() {
      var extension, extensions, i, len;
      extensions = 1 <= arguments.length ? slice.call(arguments, 0) : [];
      for (i = 0, len = extensions.length; i < len; i++) {
        extension = extensions[i];
        Link.HTML_EXTENSIONS.push(extension);
      }
      return Link.HTML_EXTENSIONS;
    };

    function Link(link1) {
      this.link = link1;
      if (this.link.constructor === Link) {
        return this.link;
      }
      this.original = this.link.href;
      this.originalElement = this.link;
      this.link = this.link.cloneNode(false);
      Link.__super__.constructor.apply(this, arguments);
    }

    Link.prototype.shouldIgnore = function() {
      return this.crossOrigin() || this._anchored() || this._nonHtml() || this._optOut() || this._target();
    };

    Link.prototype._anchored = function() {
      return (this.hash.length > 0 || this.href.charAt(this.href.length - 1) === '#') && (this.withoutHash() === (new ComponentUrl).withoutHash());
    };

    Link.prototype._nonHtml = function() {
      return this.pathname.match(/\.[a-z]+$/g) && !this.pathname.match(new RegExp("\\.(?:" + (Link.HTML_EXTENSIONS.join('|')) + ")?$", 'g'));
    };

    Link.prototype._optOut = function() {
      var ignore, link;
      link = this.originalElement;
      while (!(ignore || link === document)) {
        ignore = link.getAttribute('data-no-turbolink') != null;
        link = link.parentNode;
      }
      return ignore;
    };

    Link.prototype._target = function() {
      return this.link.target.length !== 0;
    };

    return Link;

  })(ComponentUrl);

  Click = (function() {
    Click.installHandlerLast = function(event) {
      if (!event.defaultPrevented) {
        document.removeEventListener('click', Click.handle, false);
        return document.addEventListener('click', Click.handle, false);
      }
    };

    Click.handle = function(event) {
      return new Click(event);
    };

    function Click(event1) {
      this.event = event1;
      if (this.event.defaultPrevented) {
        return;
      }
      this._extractLink();
      if (this._validForTurbolinks()) {
        if (!pageChangePrevented(this.link.absolute)) {
          visit(this.link.href);
        }
        this.event.preventDefault();
      }
    }

    Click.prototype._extractLink = function() {
      var link;
      link = this.event.target;
      while (!(!link.parentNode || link.nodeName === 'A')) {
        link = link.parentNode;
      }
      if (link.nodeName === 'A' && link.href.length !== 0) {
        return this.link = new Link(link);
      }
    };

    Click.prototype._validForTurbolinks = function() {
      return (this.link != null) && !(this.link.shouldIgnore() || this._nonStandardClick());
    };

    Click.prototype._nonStandardClick = function() {
      return this.event.which > 1 || this.event.metaKey || this.event.ctrlKey || this.event.shiftKey || this.event.altKey;
    };

    return Click;

  })();

  ProgressBar = (function() {
    var className;

    className = 'turbolinks-progress-bar';

    function ProgressBar(elementSelector) {
      this.elementSelector = elementSelector;
      this._trickle = bind(this._trickle, this);
      this.value = 0;
      this.content = '';
      this.speed = 300;
      this.opacity = 0.99;
      this.install();
    }

    ProgressBar.prototype.install = function() {
      this.element = document.querySelector(this.elementSelector);
      this.element.classList.add(className);
      this.styleElement = document.createElement('style');
      document.head.appendChild(this.styleElement);
      return this._updateStyle();
    };

    ProgressBar.prototype.uninstall = function() {
      this.element.classList.remove(className);
      return document.head.removeChild(this.styleElement);
    };

    ProgressBar.prototype.start = function() {
      return this.advanceTo(5);
    };

    ProgressBar.prototype.advanceTo = function(value) {
      var ref;
      if ((value > (ref = this.value) && ref <= 100)) {
        this.value = value;
        this._updateStyle();
        if (this.value === 100) {
          return this._stopTrickle();
        } else if (this.value > 0) {
          return this._startTrickle();
        }
      }
    };

    ProgressBar.prototype.done = function() {
      if (this.value > 0) {
        this.advanceTo(100);
        return this._reset();
      }
    };

    ProgressBar.prototype._reset = function() {
      var originalOpacity;
      originalOpacity = this.opacity;
      setTimeout((function(_this) {
        return function() {
          _this.opacity = 0;
          return _this._updateStyle();
        };
      })(this), this.speed / 2);
      return setTimeout((function(_this) {
        return function() {
          _this.value = 0;
          _this.opacity = originalOpacity;
          return _this._withSpeed(0, function() {
            return _this._updateStyle(true);
          });
        };
      })(this), this.speed);
    };

    ProgressBar.prototype._startTrickle = function() {
      if (this.trickling) {
        return;
      }
      this.trickling = true;
      return setTimeout(this._trickle, this.speed);
    };

    ProgressBar.prototype._stopTrickle = function() {
      return delete this.trickling;
    };

    ProgressBar.prototype._trickle = function() {
      if (!this.trickling) {
        return;
      }
      this.advanceTo(this.value + Math.random() / 2);
      return setTimeout(this._trickle, this.speed);
    };

    ProgressBar.prototype._withSpeed = function(speed, fn) {
      var originalSpeed, result;
      originalSpeed = this.speed;
      this.speed = speed;
      result = fn();
      this.speed = originalSpeed;
      return result;
    };

    ProgressBar.prototype._updateStyle = function(forceRepaint) {
      if (forceRepaint == null) {
        forceRepaint = false;
      }
      if (forceRepaint) {
        this._changeContentToForceRepaint();
      }
      return this.styleElement.textContent = this._createCSSRule();
    };

    ProgressBar.prototype._changeContentToForceRepaint = function() {
      return this.content = this.content === '' ? ' ' : '';
    };

    ProgressBar.prototype._createCSSRule = function() {
      return this.elementSelector + "." + className + "::before {\n  content: '" + this.content + "';\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: 2000;\n  background-color: #0076ff;\n  height: 3px;\n  opacity: " + this.opacity + ";\n  width: " + this.value + "%;\n  transition: width " + this.speed + "ms ease-out, opacity " + (this.speed / 2) + "ms ease-in;\n  transform: translate3d(0,0,0);\n}";
    };

    return ProgressBar;

  })();

  bypassOnLoadPopstate = function(fn) {
    return setTimeout(fn, 500);
  };

  installDocumentReadyPageEventTriggers = function() {
    return document.addEventListener('DOMContentLoaded', (function() {
      triggerEvent(EVENTS.CHANGE);
      return triggerEvent(EVENTS.UPDATE);
    }), true);
  };

  installJqueryAjaxSuccessPageUpdateTrigger = function() {
    if (typeof jQuery !== 'undefined') {
      return jQuery(document).on('ajaxSuccess', function(event, xhr, settings) {
        if (!jQuery.trim(xhr.responseText)) {
          return;
        }
        return triggerEvent(EVENTS.UPDATE);
      });
    }
  };

  installHistoryChangeHandler = function(event) {
    var cachedPage, ref;
    if ((ref = event.state) != null ? ref.turbolinks : void 0) {
      if (cachedPage = pageCache[(new ComponentUrl(event.state.url)).absolute]) {
        cacheCurrentPage();
        return fetchHistory(cachedPage);
      } else {
        return visit(event.target.location.href);
      }
    }
  };

  initializeTurbolinks = function() {
    rememberCurrentUrl();
    rememberCurrentState();
    document.addEventListener('click', Click.installHandlerLast, true);
    window.addEventListener('hashchange', function(event) {
      rememberCurrentUrl();
      return rememberCurrentState();
    }, false);
    return bypassOnLoadPopstate(function() {
      return window.addEventListener('popstate', installHistoryChangeHandler, false);
    });
  };

  historyStateIsDefined = window.history.state !== void 0 || navigator.userAgent.match(/Firefox\/2[6|7]/);

  browserSupportsPushState = window.history && window.history.pushState && window.history.replaceState && historyStateIsDefined;

  browserIsntBuggy = !navigator.userAgent.match(/CriOS\//);

  requestMethodIsSafe = (ref = popCookie('request_method')) === 'GET' || ref === '';

  browserSupportsTurbolinks = browserSupportsPushState && browserIsntBuggy && requestMethodIsSafe;

  browserSupportsCustomEvents = document.addEventListener && document.createEvent;

  if (browserSupportsCustomEvents) {
    installDocumentReadyPageEventTriggers();
    installJqueryAjaxSuccessPageUpdateTrigger();
  }

  if (browserSupportsTurbolinks) {
    visit = fetch;
    initializeTurbolinks();
  } else {
    visit = function(url) {
      return document.location.href = url;
    };
  }

  this.Turbolinks = {
    visit: visit,
    pagesCached: pagesCached,
    enableTransitionCache: enableTransitionCache,
    enableProgressBar: enableProgressBar,
    allowLinkExtensions: Link.allowExtensions,
    supported: browserSupportsTurbolinks,
    EVENTS: clone(EVENTS)
  };

}).call(this);
//TMForm 1.0.1
$(window).load(function(){
	$('#contact-form').TMForm({
		recaptchaPublicKey:'6LeZwukSAAAAAG8HbIAE0XeNvCon_cXThgu9afkj'		
	})
})

;(function($){
	$.fn.TMForm=function(opt){
		return this.each(TMForm)
		
		function TMForm(){
			var form=$(this)
			opt=$.extend({	
					okClass:'ok'
					,emptyClass:'empty'
					,invalidClass:'invalid'
					,successClass:'success'
					,responseErrorClass:'response-error'	
					,responseMessageClass:'response-message'
					,processingClass:'processing'
					,onceVerifiedClass:'once-verified'
					,mailHandlerURL:'mail/MailHandler.php'					
					,successShowDelay:'4000'
					,stripHTML:true
					,recaptchaPublicKey:''
					,capchaTheme:'clean'
				},opt)
				
			init()
			
			function init(){				
				form
					.on('submit',formSubmit)
					.on('reset',formReset)
					.on('focus','[data-constraints]',function(){
						$(this).parents('label').removeClass(opt.emptyClass)
					})
					.on('blur','[data-constraints]:not(.once-verified)',function(){
						$(this)
							.addClass(opt.onceVerifiedClass)
							.trigger('validate.form')
					})
					.on('keyup','[data-constraints].once-verified',function(){
						$(this).trigger('validate.form')
					})
					.on('keydown','input',function(e){
						var $this=$(this)
							,next=$this.parents('label').next('label').find('input,textarea')
						if(e.keyCode===13)
							if(next.length)
								next.focus()
							else
								form.submit()
					})
					.on('keydown','textarea',function(e){
						if(e.keyCode===13&&e.ctrlKey)
							$(this).parents('label').next('label').find('input,textarea').focus()
					})
					.on('change','input[type="file"]',function(){						
						$(this).parents('label').next('label').find('input,textarea').focus()
					})					
					.attr({
						method:'POST'
						,action:opt.mailHandlerURL
					})
				
				if($('[data-constraints]',form).length!==0)
					$('[data-constraints]',form)
						.regula('bind')
						.on('show.placeholder',function(){
							fieldDesolation($(this))
						})
						.on('validate.form',fieldValidate)
					
				
				$('[placeholder]',form).TMPlaceholder()
				
				$('[data-type=submit]',form)
					.click(function(){						
						form.trigger('submit')
						return false
					})
					
				$('[data-type=reset]',form)
					.click(function(){						
						form.trigger('reset')
						return false
					})

				if(opt.stripHTML)
					form.append('<input type="hidden" name="stripHTML" value="true">')

				if($('label.recaptcha',form).length!==0&&window.Recaptcha)
					showRecaptcha()

			}
			
			function fieldValidate(el){
				var el=$(this)
					,result=el.regula('validate')
					,isEmpty=false
					,isInvalid=false
					,isRequired=!!~el.data('constraints').indexOf('@Required')
				
				$.each(result,function(){
					if(this.constraintName==='Required')
						isEmpty=true
					else
						isInvalid=true
				})
				
				if(!el.hasClass(opt.onceVerifiedClass)&&!isEmpty)
					el.addClass(opt.onceVerifiedClass)
					
				if(isEmpty)
					el.parents('label').addClass(opt.emptyClass)
								
				if(isInvalid&&!isEmpty&&isRequired)
					el.parents('label')
						.removeClass(opt.emptyClass)
						.removeClass(opt.okClass)
						.addClass(opt.invalidClass)
						
				if(isInvalid&&!isRequired&&el.val())
					el.parents('label')
						.removeClass(opt.emptyClass)
						.removeClass(opt.okClass)
						.addClass(opt.invalidClass)
					
				if(!result.length)
					el.parents('label')
						.removeClass(opt.invalidClass)
						.removeClass(opt.emptyClass)
						.addClass(opt.okClass)
			}
			
			function fieldDesolation(el){
				el
					.removeClass(opt.onceVerifiedClass)
					.parents('label')
						.removeClass(opt.invalidClass)
						.removeClass(opt.emptyClass)
						.removeClass(opt.okClass)
			}
			
			function getValue(el){
				return el.val()||false
			}
			
			function formSubmit(){
				var $this=$(this)
					,modal=$('.'+opt.responseMessageClass)
					,responseMessage

				modal.on('hidden.bs.modal',function(){
					if(responseMessage!=='success')
						$('#recaptcha_reload',form).click()
						,$('#recaptcha_response_field',form).focus()						
				})

				$('[data-constraints]',form).trigger('validate.form')

				if($('#recaptcha_response_field',form).val()==='')
					$('label.recaptcha',form).addClass(opt.emptyClass)
				
				if(!$('label.'+opt.invalidClass+',label.'+opt.emptyClass,form).length&&!form.hasClass(opt.processingClass)){
					form.addClass(opt.processingClass)
					$this.ajaxSubmit(function(e,d,a,c){
						responseMessage=e
						if(e=='success'){							
							form
								.removeClass(opt.processingClass)
								.addClass(opt.successClass)

							modal.find('.modal-title').text('Success!')
							modal.find('.modal-body').text('Your message has been successfully sent!')

							setTimeout(function(){
								form
								.removeClass(opt.successClass)
								.trigger('reset')
							},opt.successShowDelay)
						}else{							
							modal.find('.modal-title').text('Error!')
							modal.find('.modal-body').html(e)

							form
								.removeClass(opt.processingClass)
								.addClass(opt.responseErrorClass)

							$('#recaptcha_response_field',form).val('')

							setTimeout(function(){
								form
									.removeClass(opt.responseErrorClass)
									//.trigger('reset')								
							},opt.successShowDelay)
						}
						modal.modal({keyboard:true})						
					})				
				}				
				return false
			}
			
			function formReset(){
				fieldDesolation($('[data-constraints]',form))					
			}

			function showRecaptcha(){
				$('label.recaptcha',form)
					.append('<div id="captchadiv"></div>')
				
				Recaptcha.create(
					opt.recaptchaPublicKey
					,'captchadiv'
					, {
						theme:opt.capchaTheme						
					}
				)

				form					
					.on('focus','#recaptcha_response_field',function(){
						$(this).parents('label').removeClass(opt.emptyClass)						
					})
			}
		}
	}	
})(jQuery)

;(function($){
	$.fn.TMPlaceholder=function(opt){
		return this.each(function(){
			var th=$(this)
				,placeholder_text
				,placeholder
						
			opt=$.extend({
					placeholderClass:'_placeholder'
					,placeholderFocusedClass:'focused'
					,placeholderHiddenClass:'hidden'
				},opt)
				
			init()
			
			function init(){				
				placeholder_text=th.attr('placeholder')
				placeholder=$(document.createElement('span'))
				placeholder
					.addClass(opt.placeholderClass)
					.css({				
						left:th.prop('offsetLeft')
						,top:th.prop('offsetTop')
						,width:th.width()
						,height:th.outerHeight()				
					})
					.text(placeholder_text)
					.appendTo(th.parent())				
					.click(function(){
						th.focus()
						return false
					})
					.on('contextmenu',function(){						
						th.trigger('hide.placeholder').focus()						
					})

				th
					.val('')
					.removeAttr('placeholder')
					.on('hide.placeholder',function(){
						placeholder.addClass(opt.placeholderHiddenClass)
					})
					.on('show.placeholder',function(){
						placeholder.removeClass(opt.placeholderHiddenClass)
					})
					.on('focus',function(){
						placeholder.addClass(opt.placeholderFocusedClass)
					})
					.on('blur',function(){
						var val=th.val()
						if(val===''||val===placeholder_text)
							th.val('')							
							,th.trigger('show.placeholder')
						placeholder.removeClass(opt.placeholderFocusedClass)
					})
					.on('keydown',function(e){												
						if(e.keyCode===32||e.keyCode>46)
							th.trigger('hide.placeholder')							
					})
					.on('keyup',function(){						
						if(th.val()===''){							
							th.trigger('show.placeholder')
							return false
						}else{							
							th.trigger('hide.placeholder')
						}
					})
					.parents('form').on('reset',function(){
						th.trigger('show.placeholder')						
					})
			}			
		})
	}
})(jQuery)
//using suggested jQuery practice by passing jQuery into a function
//in order to have $ notation without conflicting with other libraries
//Author: Troy Ingram
eval(function(p,a,c,k,e,r){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)r[e(c)]=k[c]||e(c);k=[function(e){return r[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('(4(a){3(n j===\'4\'&&j.w){j([\'x\'],a)}e{a(r)}}(4(b){u $=b,7={9:4(a){3(2 d b){3(!a)a={};3(2.8().c>0){$.g(h,a,{i:2.8()})}}5.9(a);6 2},k:4(a){3(2 d b){3(!a)a={};3(2.8().c>0){$.g(h,a,{i:2.8()})}}5.k(a);6 2},p:4(a){3(2 d b){3(!a)a={};3(2.8().c>0){$.g(h,a,{i:2.8()})}}6 5.p(a)},q:4(a){5.q(a);6 2},m:4(a){5.m(a);6 2},s:4(a){5.s(a);6 2}};7.t=7.9;7.v=7.k;$.C.5=f;$.5=f;4 f(a){3(7[a]){6 7[a].l(2,y.z.A.B(o,1))}e 3(n a===\'D\'||!a){6 7.9.l(2,o)}e{$.E(\'F \'+a+\' G H I t r.5\')}}}));',45,45,'||this|if|function|regula|return|methods|get|bind|||length|instanceof|else|CallMethod|extend|true|elements|define|unbind|apply|compound|typeof|arguments|validate|custom|jQuery|override|on|var|off|amd|jquery|Array|prototype|slice|call|fn|object|error|Method|does|not|exist'.split('|'),0,{}))
/*
 Regula: An annotation-based form-validation framework in Javascript
 Version 1.2.4-SNAPSHOT

 Written By Vivin Paliath (http://vivin.net)
 License: BSD License

 TODO: Add step validation to regula (like html5 step validation)
 TODO: Add URL validation to regula (like html5 url validation)
 Copyright (C) 2010-2012
 */
eval(function(p,a,c,k,e,r){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)r[e(c)]=k[c]||e(c);k=[function(e){return r[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('1a 1v={4S:1e(){},2h:1e(){},3A:1e(){},1t:1e(){},1u:1e(){},26:1e(){},2I:1e(){},37:{},4J:{},4I:{}},1v=1e(){1e G(){i={1U:{}}}1e t(a,b){1a c=H.4q;"1s"!==1n b.4l&&(c=!b.4l);1j!(N.2j(a)&&!c)}1e O(){1a a=!1;1b("2q"===1m.1R.1T()&&""!==1m.1E.1J(/\\s/g,""))1i(1a b=I(2n.4g,"2e","1E",1m.1E),c=0;c<b.1g&&!a;)a=b[c].4h,c++;1q a=1m.4h;1j a}1e P(){1j""!=1m.1z.1J(/\\s/g,"")}1e N(){1j""===1m.1z.1J(/\\s/g,"")}1e Q(){1a a=!0;1b(1m.2d)1b("2b"===1m.2d.1T())a=0<1m.57;1q 1b("2Y"===1m.1R.1T()||"2q"===1m.1R.1T())a=O.2j(1m);1q 1b("2e"===1m.2d.1T()||"2y"===1m.2d.1T())"47"!=1m.1R.1T()&&(a=P.2j(1m));1j a}1e R(a){1a b={44:{2X:0,3c:1,3l:2},3T:{3c:0,3l:1,2X:2},3U:{3l:0,3c:1,2X:2}}[a.3W],c=a.4Y;"1s"===1n a.4Y&&(c=/\\//.25(1m.1z)?"/":/\\./.25(1m.1z)?".":/ /.25(1m.1z)?" ":/[^0-9]+/);1a d=1m.1z.2H(c),e=3X 3Y(d[b.2X],d[b.3c]-1,d[b.3l]),d=3X 3Y;"1s"!==1n a.55&&(d=a.55.2H(c),d=3X 3Y(d[b.2X],d[b.3c]-1,d[b.3l]));1j{45:e,3P:d}}1e 5m(a,b,c){1i(1a d=c.2N,e=[],f=0;f<d.1g;f++){1a k=d[f],w=q[k.1k],j={},i;1i(i 1l k.1o)k.1o.1F(i)&&"2c"!=i&&x(j,i,k.1o[i]);1b(0<c.1o.1g)1i(i 1l a)a.1F(i)&&"2c"!=i&&x(j,i,a[i]);1a m=S(b,1m.1H,w,j);m.4b||(j=T(1m.1H,w,j),k={1Q:b,5w:w,1t:h[w].1t,1u:h[w].1u,4P:k.1o,35:m.35,1d:j},c.38||(k.39=m.39||[]),e.1I(k))}1j e}1e D(a,b,c){1a d={1c:!0,1d:"",1f:1h};"28"==a.2d.1T()&&!h[b].1y?d={1c:!1,1d:m(a,b,"@"+b+" 1P 23 a 28 1M, 3p 2p 2W 3I 1p 2h 1Z 1p a 28"),1f:1h}:"28"!=a.2d.1T()&&h[b].1y?d={1c:!1,1d:m(a,b,"@"+b+" 1P a 28 1M, 3p 2p 2W 3I 1p 2h 1Z 1p a 4D-28 1Y"),1f:1h}:("1s"===1n a.1R||"2Y"!=a.1R.1T()&&"2q"!=a.1R.1T())&&"3a"==b?d={1c:!1,1d:m(a,b,"@"+b+" 1P 2a 5f 1p 6M 2k 2q 6L. 3O 2W 3I 1p 2h 1Z 1p 1S 2e 1Y 4o 1P 6K a 2Y 6J a 2q 47."),1f:1h}:"2b"!=a.2d.1T()&&"36"==b?d={1c:!1,1d:m(a,b,"@"+b+" 1P 2a 5f 1p 2b 6I. 3O 2W 3I 1p 2h 1Z 1p 1S 2e 1Y 4o 1P 23 a 2b 4O."),1f:1h}:(a=U(a,h[b],c),a.33?d={1c:!1,1d:a.1d,1f:1h}:d.1f=c);1j d}1e U(a,b,c){1a d={33:!1,1d:""};c.2c<b.1o.1g&&(d={33:!0,1d:m(a,q[b.1k],"@"+q[b.1k]+" 1K 6H 6G "+b.1o.1g+" 2g(s). 6D, 2p 2f 2o 2a "+c.2c),1f:1h});1i(1a e=[],f=0;f<b.1o.1g;f++){1a k=b.1o[f];"1s"===1n c[k]&&e.1I(k)}0<e.1g&&(d={33:!0,1d:m(a,q[b.1k],"3O 6C 1p 2f 2o 6z 6y 2m 4e 6x 1i @"+q[b.1k]+", 3p 2p 2W 6w 6u 1w 4M "+e.1g+" 4e 2g(s): "+J(e,", ")),1f:1h});1j d}1e V(a,b,c){1a d="",e=2G("^"+u[v.1U]+"$|^"+u[v.1U]+",|,"+u[v.1U]+",|,"+u[v.1U]+"$");c.1x||x(c,"1x",u[v.1U]);d=c.1x.1J(/\\s/g,"");e.25(d)||(d=u[v.1U]+","+d,c.1x=d);d=d.2H(/,/);1i(e=0;e<d.1g;e++){1a f=d[e];1b(!i[f]){1a k=-1,k=0<K.1g?K.6t():5j++;v[f]=k;u[k]=f;i[f]={}}i[f][a.1H]||(i[f][a.1H]={});i[f][a.1H][b]=c}}1e L(a,b){1i(1a c=!1,d=0;!c&&d<a.1g;)c=b==a[d],d++;1j c}1e J(a,b){1i(1a c="",d=0;d<a.1g;d++)c+=a[d]+b;1j c.1J(2G(b+"$"),"")}1e x(a,b,c){a.2c||(a.2c=0);a[b]||a.2c++;a[b]=c}1e W(a){1i(1a b 1l a)1b(a.1F(b))1j!1;1j!0}1e r(a){1a b="5q 5r: {",c;1i(c 1l a)a.1F(c)&&("24"==1n a[c]?b+=c+": "+a[c]+", ":a[c]2V 2w&&(b+=c+": ["+J(a[c],", ")+"], "));1j b=b.1J(/, $/,"")+"}"}1e m(a,b,c){1a d="";1h!=a?(d=a.1H,d=""==b||1h==b||4i 0==b?d+": ":d+("."+b+": ")):""!=b&&(1h!=b&&4i 0!=b)&&(d="@"+b+": ");1j d+c}1e M(a,b){1b(W(i[b][a])&&(2A i[b][a],W(i[b]))){2A i[b];1a c=v[b];2A v[b];2A u[c];K.1I(c)}}1e 4B(a,b){1e c(a){1j a?a.1J(/^\\s+/,"").1J(/\\s+$/,""):""}1e d(b){1a c={1c:!0,1d:"",1f:1h};1b(!/[A-3H-4E]/.25(b)||"1s"===1n b||1h==b)c={1c:!1,1d:m(a,l,"27 2Z 2F"),1f:1h};1j c}1e e(b){1a c={1c:!0,1d:"",1f:1h};/[0-4R-3H-4E]/.25(b)||(c={1c:!1,1d:m(a,l,"27 2F 1l 6s. 30 2a 31 0-9, A-Z, a-z, 2k 2C")+" "+c.1d,1f:1h});1j c}1e f(b){1a f,i=c(b.1C());0==i.1g&&(i=b.1C());f={1c:!1,1d:m(a,l,"27 2Z 2F 1i 2g 1E. 30 2a 31 A-Z, a-z, 2k 2C"),1f:1h};1b("1s"!==1n i)1b(f=d(i.2l(0)),f.1c){1i(1a g=1;g<i.1g&&f.1c;)f=e(i.2l(g)),g++;f.1c&&(f.1f=i)}1q f={1c:!1,1d:m(a,l,"27 2Z 2F 1i 2g 1E. 30 2a 31 A-Z, a-z, 2k 2C")+" "+f.1d,1f:1h};1b(f.1c)1b(i=f.1f,g=b.1C(),"="==g){0==c(b[0]).1g&&b.1C();g={1c:!0,1d:"",1f:[]};1b(")"==b[0])g={1c:!1,1d:m(a,l,"4d 1z 4a")+" "+g.1d,1f:1h};1q 1b(f=b.1C(),g={1c:!0,1d:"",1f:1h},"-"==f?(g=k(b),g.1c&&(g.1f=f+g.1f)):(b.2E(f),g={1c:!1,1d:m(a,l,"2t a 6r 32"),1f:1h}),f=g,f.1c||(f=k(b),f.1c||(f={1c:!1,1d:m(a,l,"4d 1z 1P 23 a 32")+" "+f.1d,1f:1h})),g=f,f=g.1d,!g.1c){1a g=b.1C(),h="",w={1c:!0,1d:"",1f:1h};1b(\'"\'==g){1i(1a j=!1;0<b.1g&&w.1c&&!j;)\'"\'==b[0]?(j=!0,b.1C()):(w=q(b),h+=w.1f);j||(w={1c:!1,1d:m(a,l,"5x 24 5y"),1f:1h})}1q b.2E(g),w={1c:!1,1d:m(a,l,"27 5z 24"),1f:1h};w.1c=w.1c&&j;w.1f=h;g=w;g.1d=g.1d+" "+f;f=g.1d;1b(!g.1c){j="";g=b.1C();h={1c:!0,1d:"",1f:1h};1b("/"==g){1i(1a j=g,n=!1;0<b.1g&&h.1c&&!n;)"/"==b[0]?(j+=b.1C(),n=!0):(h=q(b),j+=h.1f);n||(h={1c:!1,1d:m(a,l,"5x 2O 5y"),1f:1h})}1q b.2E(g),h={1c:!1,1d:m(a,l,"2t a 4k 4m"),1f:1h};h.1c=h.1c&&n;h.1f=j;g=h;g.1d=g.1d+" "+f;f=g.1d;1b(!g.1c&&(n=b.1C(),j={1c:!0,1d:"",1f:1h},"4n"==c(n)||"6q"==c(n)?j={1c:!0,1d:"",1f:"4n"===n}:(b.2E(n),j={1c:!1,1d:m(a,l,"2t a 2T"),1f:1h}),g=j,g.1d=g.1d+" "+f,f=g.1d,!g.1c)){j="";j=b.1C();n={1c:!0,1d:"",1f:1h};1b("["==j)1b(0==c(b[0]).1g&&b.1C(),n="]"==b[0]?{1c:!0,1d:"",1f:""}:u(b),n.1c){j=n.1f;1i(0==c(b[0]).1g&&b.1C();0<b.1g&&","==b[0]&&n.1c;)b.1C(),n=u(b),j+=","+n.1f,0==c(b[0]).1g&&b.1C();n.1f=j;j=b.1C();0==c(j).1g&&b.1C();"]"!=j&&(n={1c:!1,1d:m(a,l,"4s 3K 4x 4A ] 1l 1Q 2M")+" "+n.1d,1f:1h})}1q n={1c:!1,1d:m(a,l,"27 1Q 2M")+" "+n.1d,1f:1h};1q b.2E(j),n={1c:!1,1d:m(a,l,"2t a 2J 1Q 2M"),1f:1h};g=n;g.1d=g.1d+" "+f;f=g.1d;g.1c||(g={1c:!1,1d:m(a,l,"4d 1z 29 1A a 32, 5z 24, 4k 4m, 2m a 2T")+" "+f,1f:1h})}}}f=g;f.1c?f.1f={1E:i,1z:f.1f}:f={1c:!1,1d:m(a,l,"27 2g 1z")+" "+f.1d,1f:1h}}1q b.2E(g),f={1c:!1,1d:m(a,l,"\'=\' 4a 4F 2g 1E "+f.1d),1f:1h};1q f={1c:!1,1d:m(a,l,"27 2g 1E. 3O 6p 2f 6o 6n")+" "+f.1d,1f:1h};1j f}1e k(b){1a c=1h;1b("."!=b[0]){1b(c=j(b),"."==b[0]){1a d=c.1f,c=i(b);c.1c&&(c.1f=d+c.1f)}}1q c=i(b);c.1c||(c={1c:!1,1d:m(a,l,"2t a 6m 32")+" "+c.1d,1f:1h});1j c}1e i(b){1a c=b.1C(),b=j(b);b.1c?b.1f=c+b.1f:b={1c:!1,1d:m(a,l,"2t a 2J 3b"),1f:1h};1j b}1e j(b){1a d=c(b.1C()),e=o(d.2l(0));1b(e.1c){1i(b=1;b<d.1g&&e.1c;)e=o(d.2l(b)),b++;e.1c&&(e.1f=d)}1q b.2E(d),e={1c:!1,1d:m(a,l,"2t a 2J 2R")+" "+e.1d,1f:[]};1j e}1e o(b){1a c={1c:!0,1d:"",1f:1h};/[0-9]/.25(b)||(c={1c:!1,1d:m(a,l,"2t a 2J 6i"),1f:1h});1j c}1e q(a){1a b="",c=a.1C();"\\\\"==c&&(b=a.1C());1j{1c:!0,1d:"",1f:c+b}}1e u(b){1a f={1c:!0,1d:"",1f:""},g=c(b.1C());0==g.1g&&(g=b.1C());f=d(g.2l(0));1b(f.1c){1i(b=1;b<g.1g&&f.1c;)f=e(g.2l(b)),b++;f.1c&&(f.1f=g)}1q f={1c:!1,1d:m(a,l,"27 2Z 2F 1i 1Q 1E. 30 2a 31 A-Z, a-z, 2k 2C")+" "+f.1d,1f:1h};1j f}1i(1a l="",n=c(b.1J(/\\s*\\n\\s*/g,"")),p=\'@()[]=,"\\\\/-\\\\.\'.2H(""),r=[],s=0,g=0;g<n.1g;g++)L(p,n.2l(g))&&(s=n.51(s,g),0==s.1g||r.1I(s),r.1I(n.2l(g)),s=g+1);s<n.1g&&(s=n.51(s,n.1g),0==s.1g||r.1I(s));1i(n={1c:!0,1d:"",1f:1h};0<r.1g&&n.1c;){n=r;p={1c:!0,1d:"",1f:1h};g=n.1C();0==c(g).1g&&(g=n.1C());1b("@"==g){p={54:"3d",56:"3e",58:"3f",5a:"3g",5d:"3h",5h:"3i",5k:"3j"};g=c(n.1C());s=d(g.2l(0));1b(s.1c){1i(1a v=1;v<g.1g&&s.1c;)s=e(g.2l(v)),v++;s.1c&&(s.1f=g)}1q s={1c:!1,1d:m(a,l,"27 2Z 2F 1i 1M 1E. 30 2a 31 A-Z, a-z, 2k 2C")+" "+s.1d,1f:1h};g=s;1b(g.1c)1b(l=g.1f,l=p[l]?p[l]:l,h[l]){p={1c:!0,1d:"",1f:{}};1b("("==n[0])1b(n.1C(),g={},")"==n[0])n.1C();1q 1b(p=f(n),p.1c){x(g,p.1f.1E,p.1f.1z);1i(0==c(n[0]).1g&&n.1C();0<n.1g&&","==n[0]&&p.1c;)n.1C(),p=f(n),p.1c&&(x(g,p.1f.1E,p.1f.1z),0==c(n[0]).1g&&n.1C());p.1c&&(s=n.1C(),0==c(s).1g&&(s=n.1C()),")"!=s?p={1c:!1,1d:m(a,l,"4s 3K 4x 4A ) 1l 2g 3k")+" "+p.1d,1f:1h}:p.1f=g)}1q p={1c:!1,1d:m(a,l,"27 2g 2M")+" "+p.1d,1f:1h};1q 4i 0!==n[0]&&"@"!=n[0]&&(p={1c:!1,1d:m(a,l,"6e 2F \'"+n[0]+"\' 4F 1M 2M")+" "+p.1d,1f:1h});g=p;g.1c&&(g=D(a,l,g.1f),g.1c&&V(a,l,g.1f))}1q g={1c:!1,1d:m(a,l,"I 3E 3K 1w 3F 1M 1E. 2v 1m 1P a 1t 1M, 2p 5s 1p 6d 1Z 69 2p 2h 1p 1Z")+" "+g.1d,1f:1h};1q g={1c:!1,1d:m(a,l,"27 1M 1E 1l 1M 2M")+" "+g.1d,1f:1h};p=g}1q p={1c:!1,1d:m(a,l,"27 1M. 37 68 5s 1p 67 2i \'@\'")+" "+p.1d,1f:1h};n=p}1j n}1e X(a,b){1a c=y.3n(o[a]);1h==c&&(y.3L(o[a],1h),c=y.3n(o[a]));y.4j(c);1i(1a d=0;d<b.1g;d++){1a e=h[q[b[d].1k]];e.1u&&y.3L(e.1k,c)}}1e Y(a,b,c){1i(1a d=[],e=0;e<b.1g;e++){1b("1s"===1n b[e].1k)1r"5A 1u 1M "+a+": A 3Q 1M 3N 65 1M 1R 3F.";d.1I(h[q[b[e].1k]])}1i(e=0;e<b.1g;e++){1a f=b[e],d=q[f.1k],k={2c:0};f.1o=f.1o||{};1i(1a i 1l f.1o)f.1o.1F(i)&&x(k,i,f.1o[i]);1a j=0,m;1i(m 1l f.1o)f.1o.1F(m)&&j++;f.1o.2c=j;1i(f=0;f<c.1g;f++)x(k,c[f],1h);d=U(1h,h[d],k);1b(d.33)1r"5A 1u 1M "+a+": "+d.1d;}}1e Z(a){1a b;b="1s"===1n a?I(2n.4g,"*","1f-1V"):[a];1i(1a a={1c:!0,1d:"",1f:1h},c=0;c<b.1g&&a.1c;){1a a=b[c],d=a.2d.1T();"28"!=d&&"2b"!=d&&"2y"!=d&&"2e"!=d?a={1c:!1,1d:d+"#"+a.1H+" 1P 23 1S 2e, 2b, 2y, 2m 28 1Y! 4r 1V 3o 2a 1A 4t 1p 2e, 2b, 2y, 2m 28 1O.",1f:1h}:(a.1H||(a.1H="1v-64-"+4w.63(62*4w.61())),d=a.3S("1f-1V"),a=4B(a,d),c++)}1j a}1e $(a){1a b={1c:!0,1d:"",1f:1h},c=a.1Y,d=a.1V||[],e=c&&c.2d?c.2d.1T():1h;1b(c)1b(1!==c.60)b={1c:!1,1d:"1v.2h: 1Y 1G 1P 4a 1p 1A 1S 5Z, 3p 3V 3m 5X 1R: "+1n c+". "+r(a),1f:1h};1q 1b("28"!=e&&"2b"!=e&&"2y"!=e&&"2e"!=e)b={1c:!1,1d:e+"#"+c.1H+" 1P 23 1S 2e, 2b, 2y, 2m 28 1Y! 4r 1V 3o 2a 1A 4t 1p 2e, 2b, 2y, 2m 28 1O. "+r(a),1f:1h};1q 1b(0<d.1g)1i(c=0;c<d.1g&&b.1c;)b=4H(d[c],a),c++;1q b=Z(c);1q b={1c:!1,1d:"1v.2h 1K a 4D-1h 1Y 1G 1l 1w 1L 1W. "+r(a),1f:1h};1j b}1e 4H(a,b){1e c(a,b,c){1a d=i[u[v.1U]][a.1H][q[b]].1x.2H(/,/),e=[];c.1x?e=c.1x.2H(/,/):e.1I(u[v.1U]);L(e,u[v.1U])||e.1I(u[v.1U]);1i(1a f=c=e,k={},e=[],j=0;j<d.1g;j++)e.1I(d[j]),k[d[j]]=!0;1i(d=0;d<f.1g;d++)k[f[d]]||e.1I(f[d]);d=[];1i(f=0;f<e.1g;f++)L(c,e[f])||d.1I(e[f]);1i(c=0;c<d.1g;c++)e=d[c],2A i[e][a.1H][q[b]],M(a.1H,e)}1a d={1c:!0,1d:"",1f:1h},e=b.1Y,f=a.5W||!1,k=a.5U||!1,h=a.1k,j=a.1o||{},m={2c:0};1b("1s"===1n h)d={1c:!1,1d:"1v.2h 1K a 2J 1M 1R 1i 5S 1M 1l 1V 1G 3m 1w 1L 1W. "+r(b),1f:1h};1q 1b(j&&j.1x)1b(j.1x 2V 2w){1i(1a o="",t=0;t<j.1x.1g&&d.1c;)"24"==1n j.1x[t]?o+=j.1x[t]+",":"1s"!==1n u[j.1x[t]]?o+=u[j.1x[t]]+",":d={1c:!1,1d:"27 1Q: "+j.1x[t]+". "+r(b),1f:1h},t++;d.1c&&(o=o.1J(/,$/,""),j.1x=o)}1q d={1c:!1,1d:"2r 1x 2g 29 1A 1S 2B 3m 5R 2m 5Q "+r(b),1f:1h};1b(d.1c){1b(!i[u[v.1U]][e.1H]||!i[u[v.1U]][e.1H][q[h]]){1i(1a l 1l j)j.1F(l)&&x(m,l,j[l]);d=D(e,q[h],m)}1q 1b(f){1i(l 1l j)j.1F(l)&&x(m,l,j[l]);d=D(e,q[h],m);d.1c&&c(e,h,j)}1q{f=i[u[v.1U]][e.1H][q[h]];1i(l 1l f)f.1F(l)&&x(m,l,f[l]);1b(k){1i(l 1l j)j.1F(l)&&x(m,l,j[l]);d=D(e,q[h],m);d.1c&&c(e,h,m)}1q 1i(l 1l j)j.1F(l)&&(f[l]||x(m,l,j[l]))}d.1c&&V(e,q[h],m)}1j d}1e 40(a){1a b={"5N":4T,"5M":4U,"5L":4W,"5K":4X,5J:4Z,5I:50,5H:52,5G:53};C={};A={};1b(!a||"1s"===1n a)a={};"1s"===1n a.2U&&(a.2U=!0);"1s"!==1n a.1k&&(a.1k=q[a.1k]);1b(a.1x){1a c=a.1x;a.1x=[];1i(1a d=0;d<c.1g;d++)a.1x.1I(u[c[d]])}1j b[1e(a){1a b=a.1X||1h,c=(1n a.1k==="1s"?1h:a.1k)||1h,a=""+((a.1x||1h)==1h?"0":"1");1j a+(b==1h?"0":"1")+(c==1h?"0":"1")}(a)](a)}1e 4T(){1a a=[],b;1i(b 1l i)1b(i.1F(b)){1a c=i[b],d;1i(d 1l c)1b(c.1F(d))1b(2n.2K(d)){1a e=c[d],f;1i(f 1l e)1b(e.1F(f)){1a k=z(b,d,f);k&&a.1I(k)}}1q 2A c[d]}1j a}1e 4U(a){1a b=[],c=!1,d;1i(d 1l i)1b(i.1F(d)){1a e=i[d],f;1i(f 1l e)1b(e.1F(f)&&e[f][a.1k]){1a c=!0,k=z(d,f,a.1k);k&&b.1I(k)}}1b(!c)1r"37 "+a.1k+" 3N 23 2P 2z 1p 34 1Y. "+r(a);1j b}1e 4W(a){1a b=[],c=!1,d;1i(d 1l i)1b(i.1F(d)){1a e=i[d];1b(e[a.1X]){1a c=!0,e=e[a.1X],f;1i(f 1l e)1b(e.1F(f)){1a k=z(d,a.1X,f);k&&b.1I(k)}}}1b(!c)1r"3D 1V 2f 2P 2z 1p 1Y 2i 1H "+a.1X+". "+r(a);1j b}1e 4X(a){1a b=[],c=!1,d=!1,e;1i(e 1l i)1b(i.1F(e)){1a f=i[e][a.1X];f&&(c=!0,f[a.1k]&&(d=!0,(f=z(e,a.1X,a.1k))&&b.1I(f)))}1b(!c||!d)1r"3D 1Y 2i 1H "+a.1X+" 3V 5c 2i 1w 1M "+a.1k+" 2z 1p 1Z. "+r(a);1j b}1e 4Z(a){1i(1a b=[],c=0,d=!0;c<a.1x.1g&&d;){1a d=a.1x[c],e=i[d];1b(e)1i(1a f 1l e){1b(e.1F(f)){1a k=e[f],h;1i(h 1l k)1b(k.1F(h)){1a j=z(d,f,h);j&&b.1I(j)}}}1q 1r"3C 1Q 1l 1Q 3k. "+r(a);c++;d=0==b.1g||a.2U&&0!=b.1g}1j b}1e 50(a){1i(1a b=[],c=0,d=!0;c<a.1x.1g&&d;){1a d=a.1x[c],e=i[d];1b(e){1a f=!1,k;1i(k 1l e)1b(e.1F(k)&&e[k][a.1k]){1a f=!0,h=z(d,k,a.1k);h&&b.1I(h)}1b(!f)1r"37 "+a.1k+" 3N 23 2P 2z 1p 34 1Y 5e 1Q "+d+". "+r(a);}1q 1r"3C 1Q 1l 1Q 3k. "+r(a);c++;d=0==b.1g||a.2U&&0!=b.1g}1j b}1e 52(a){1i(1a b=[],c=[],d=0,e=!0;d<a.1x.1g&&e;){1a e=a.1x[d],f=i[e];1b(f)1b(f=f[a.1X])1i(1a k 1l f){1b(f.1F(k)){1a h=z(e,a.1X,k);h&&b.1I(h)}}1q c.1I(e);1q 1r"3C 1Q 1l 1Q 3k. "+r(a);d++;e=0==b.1g||a.2U&&0!=b.1g}1b(0<c.1g)1r"3D 1Y 2i 1H "+a.1X+" 3V 5c 1l 1w 4M 1Q(s): ["+J(c,",").1J(/,/g,", ")+"]. "+r(a);1j b}1e 53(a){1i(1a b=[],c=0,d=!0;c<a.1x.1g&&d;)(d=z(a.1x[c],a.1X,a.1k))&&b.1I(d),c++,d=0==b.1g||a.2U&&0!=b.1g;1j b}1e z(a,b,c){1a d,e=i[a];1b(!e)1r"3C 1Q 1l 1Q 3k (1Q: "+a+", 1X: "+b+", 1M: "+c+")";e=e[b];C[b]||(C[b]={});1a f=2n.2K(b),k=f.1E.1J(/\\s/g,"");"1s"!==1n f.1R&&"2q"===f.1R.1T()&&""!==k?A[k]||(A[k]={}):(k="5F",A[k]={});1b(!C[b][c]&&!A[k][c])1b(e)1b(e=e[c])f=S(a,b,c,e),f.4b||(b=T(b,c,e),d={1Q:a,5w:c,1y:h[c].1y,1t:h[c].1t,1u:h[c].1u,39:f.39||[],4P:e,35:f.35,1d:b});1q 1r c+" 1l 1Q "+a+" 5E\'t 2P 2z 1p 1w 1Y 2i 1H "+b;1q 1r"3D 1V 2f 2P 5g 1i 1w 1Y 2i 1H: "+b+" 1l 1Q "+a;1j d}1e S(a,b,c,d){1a e=!1,f=[],k=2n.2K(b),i=[];h[c].1y?(f=h[c].1B.2j(k,d),e=0==f.1g):(h[c].1u?(i=h[c].1B.2j(k,d,a,h[c]),e=0==i.1g):e=h[c].1B.2j(k,d),e||f.1I(k));C[b][c]=!0;a=k.1E.1J(/\\s/g,"");"1s"!==1n k.1R&&("2q"===k.1R.1T()&&""!==a)&&(A[a][c]=!0,f=I(2n.4g,"2e","1E",a));e={4b:e,35:f};h[c].38||(e.39=i);1j e}1e T(a,b,c){1a a=2n.2K(a),d="",d=c.1d?c.1d:c.5i?c.5i:h[b].1D,e;1i(e 1l c)1b(c.1F(e))1a f=2G("{"+e+"}","g"),d=d.1J(f,c[e]);1b(h[b].1u&&"1s"!==1n h[b].2N)1i(c=0;c<h[b].2N.1g;c++){1a k=h[b].2N[c];1i(e 1l k.1o)k.1o.1F(e)&&(f=2G("{"+e+"}","g"),d=d.1J(f,k.1o[e]))}/{1N}/.25(d)&&((b=4c[a.2d.1T()])||(b=4c[a.1R.1T()]),d=d.1J(/{1N}/,b),d=d.1J(/{3z}/g,""));1j d=d.1J(/\\\\\\"/g,\'"\')}1a I=1e(a,b,c,d){1i(1a a="*"==b&&a.5n?a.5n:a.6f(b),b=[],e="1s"!==1n d?2G("(^|\\\\s)"+d+"(\\\\s|$)"):1h,f,h,i=0;i<a.1g;i++)f=a[i],h=f.3S&&f.3S(c),"24"==1n h&&0<h.1g&&("1s"===1n d||e&&e.25(h))&&b.1I(f);1j b},H={4q:!0,5D:!1},v={1U:0},u={"0":"1U"},K=[],o={3a:0,36:1,3v:2,3u:3,3d:4,54:4,3g:5,5a:5,3f:6,58:6,3e:7,56:7,3q:8,3h:9,5d:9,3J:10,5h:12,3j:11,5k:11,3i:12,3G:13,3r:14,3M:15,3x:16,3B:17,3s:18,3t:19,3w:20},q={"0":"3a",1:"36",2:"3v",3:"3u",4:"3d",5:"3g",6:"3f",7:"3e",8:"3q",9:"3h",10:"3J",11:"3j",12:"3i",13:"3G",14:"3r",15:"3M",16:"3x",17:"3B",18:"3s",19:"3t",20:"3w"},4c={28:"2r 28",2b:"2r 2b 4O",2y:"2r 41 5O",2Y:"2r 2Y",2q:"2r 2q 47",41:"2r 41 5P",4Q:"2r 4Q"},E=21,5j=1,h={3a:{1y:!1,1B:O,1k:o.3a,1t:!1,1u:!1,1o:[],1D:"{1N} 2D 1p 1A 4h."},36:{1y:!1,1B:1e(){1j 0<1m.57},1k:o.36,1t:!1,1u:!1,1o:[],1D:"{1N} 2D 1p 1A 5T."},3v:{1y:!1,1B:1e(a){1a b=!0;t(1m,a)&&(b=2u(1m.1z)<=2u(a.1z));1j b},1k:o.3v,1t:!1,1u:!1,1o:["1z"],1D:"{1N} 2D 1p 1A 5V 4K 2m 4G 1p {1z}."},3u:{1y:!1,1B:1e(a){1a b=!0;t(1m,a)&&(b=2u(1m.1z)>=2u(a.1z));1j b},1k:o.3u,1t:!1,1u:!1,1o:["1z"],1D:"{1N} 2D 1p 1A 5Y 4K 2m 4G 1p {1z}."},3d:{1y:!1,1B:1e(a){1a b=!0;t(1m,a)&&(b=""!=1m.1z.1J(/\\s/g,"")&&2u(1m.1z)<=2u(a.2Q)&&2u(1m.1z)>=2u(a.2S));1j b},1k:o.3d,1t:!1,1u:!1,1o:["2S","2Q"],1D:"{1N} 2D 1p 1A 4z {2S} 2k {2Q}."},3g:{1y:!1,1B:P,1k:o.3g,1t:!1,1u:!1,1o:[],1D:"{1N} 3E 1A 4y."},3f:{1y:!1,1B:N,1k:o.3f,1t:!1,1u:!1,1o:[],1D:"{1N} 2D 1p 1A 4y."},3e:{1y:!1,1B:1e(a){1a b=!0;t(1m,a)&&(b="24"===1n a.2O?a.2O.1J(/^\\//,"").1J(/\\/$/,""):a.2O,b=("1s"!==1n a.3z?2G(b.3R().1J(/^\\//,"").1J(/\\/[^\\/]*$/,""),a.3z):2G(b)).25(1m.1z));1j b},1k:o.3e,1t:!1,1u:!1,1o:["2O"],1D:"{1N} 2D 1p 4v {2O}{3z}."},3q:{1y:!1,1B:1e(a){1a b=!0;t(1m,a)&&(b=/[a-2s-9!#$%&\'*+/=?^2C`{|}~-]+(?:\\.[a-2s-9!#$%&\'*+/=?^2C`{|}~-]+)*@(?:[a-2s-9](?:[a-2s-9-]*[a-2s-9])?\\.)+[a-2s-9](?:[a-2s-9-]*[a-2s-9])?/i.25(1m.1z));1j b},1k:o.3q,1t:!1,1u:!1,1o:[],1D:"{1N} 1P 23 a 2J 66."},3h:{1y:!1,1B:1e(a){1a b=!0;t(1m,a)&&(b=/^[A-3H-z]+$/.25(1m.1z));1j b},1k:o.3h,1t:!1,1u:!1,1o:[],1D:"{1N} 3o 2a 3Z 5v."},3J:{1y:!1,1B:1e(a){1a b=!0;t(1m,a)&&(b=/^[0-9]+$/.25(1m.1z));1j b},1k:o.3J,1t:!1,1u:!1,1o:[],1D:"{1N} 3o 2a 3Z 5u."},3j:{1y:!1,1B:1e(a){1a b=!0;t(1m,a)&&(b=/^[0-4R-3H-z]+$/.25(1m.1z));1j b},1k:o.3j,1t:!1,1u:!1,1o:[],1D:"{1N} 3o 2a 3Z 5u 2k 5v."},3i:{1y:!1,1B:1e(a){1a b=!0;t(1m,a)&&(b=/^-?[0-9]+$/.25(1m.1z));1j b},1k:o.3i,1t:!1,1u:!1,1o:[],1D:"{1N} 29 1A 1S 2R."},3G:{1y:!1,1B:1e(a){1a b=!0;t(1m,a)&&(b=/^-?([0-9]+(\\.[0-9]+)?|\\.[0-9]+)$/.25(1m.1z));1j b},1k:o.3G,1t:!1,1u:!1,1o:[],1D:"{1N} 29 1A a 6a 32."},3r:{1y:!0,1B:1e(){1i(1a a=[],b=0;b<1m.1O.1g;b++){1a c=1m.1O[b];Q.2j(c)||a.1I(c)}1j a},1k:o.3r,1t:!1,1u:!1,1o:[],1D:"{1N} 29 1A 6b 6c."},3M:{1y:!0,1B:1e(a){1a b=[],c=2n.2K(a.5t),a=2n.2K(a.5o);c.1z!=a.1z&&(b=[c,a]);1j b},1k:o.3M,1t:!1,1u:!1,1o:["5t","5o"],1D:"5C 6g 23 4v."},3x:{1y:!1,1B:Q,1k:o.3x,1t:!1,1u:!1,1o:[],1D:"{1N} 1P 4e."},3B:{1y:!1,1B:1e(a){1j 1m.1z.1g>=a.2S&&1m.1z.1g<=a.2Q},1k:o.3B,1t:!1,1u:!1,1o:["2S","2Q"],1D:"{1N} 1g 29 1A 4z {2S} 2k {2Q}."},3s:{1y:!1,1B:1e(a){1a b=!0;1b(t(1m,a)){1a c=1m.1z.1J(/\\s/g,""),d=c.2H(/\\./),b=!1;0<c.1g&&(1==d.1g&&(d[1]=""),b=0<a.2R?d[0].1g<=a.2R:!0,0<a.3b&&(b=b&&d[1].1g<=a.3b))}1j b},1k:o.3s,1t:!1,1u:!1,1o:["2R","3b"],1D:"{1N} 29 2f 6h 1p {2R} 4V 2k {3b} 6j 4V."},3t:{1y:!1,1B:1e(a){1a b=!0;t(1m,a)&&(a=R.2j(1m,a),b=a.45<a.3P);1j b},1k:o.3t,1t:!1,1u:!1,1o:["3W"],1D:"{1N} 29 1A 1l 1w 6k."},3w:{1y:!1,1B:1e(a){1a b=!0;t(1m,a)&&(a=R.2j(1m,a),b=a.45>a.3P);1j b},1k:o.3w,1t:!1,1u:!1,1o:["3W"],1D:"{1N} 29 1A 1l 1w 6l."}},y={3L:1e(){},3n:1e(){},2x:1e(){},4N:1e(){},42:1e(){},43:1e(){}},46=1e(a){1i(1a b={2L:a.2L,1E:a.1E,1R:a.1R,22:[]},c=0;c<a.22.1g;c++)b.22[b.22.1g]=46(a.22[c]);1j b},F={},B={2L:!1,1E:"6v",1R:-1,22:[]},y={3L:1e(a,b){1a c=1h==F[a]?{2L:!1,1E:q[a],1R:a,22:[]}:F[a];1h==b?B.22[B.22.1g]=c:b.22[b.22.1g]=c;F[a]=c},4j:1e(a){a.22=[]},3n:1e(a){1j F[a]},2x:1e(a){a=1e(a,c){1a d={2x:!1,4f:c};1b(a.2L)d={2x:!0,4f:c};1q{a.2L=!0;1i(1a e=0;e<a.22.1g&&!d.2x;)d=4u.5B(a.22[e],c+"."+a.22[e].1E),e++}1j d}(a,a.1E);a.2x||1e(a){a.2L=!1;1i(1a c=0;c<a.22.1g;c++)4u.5B(a.22[c])}(B);1j a},4N:1e(){1j B},42:1e(a){B=a},43:1e(){1j 46(B)}},i=1h,C={},A={};1j{4S:1e(a){1a b=1e(a,b){"1s"!==1n H[a]&&(H[a]=b)},c=0,d;1i(d 1l a)a.1F(d)&&"2c"!==d&&(b.2j(a,d,a[d],c),c++)},2h:1e(a){i||G();1a b={1c:!0,1d:"",1f:1h};1b("1s"===1n a||!a)G(),b=Z();1q 1b(b=a.1O,"1s"===1n b||!b)b=$(a);1q{1i(1a c={1c:!0},d=0;c.1c&&d<b.1g;)a.1Y=b[d],c=$(a),c.1c||(c.1d="1v.2h: 3y "+(d+1)+" 3m "+b.1g+" 6A: "+c.1d),d++;b=c}1b(!b.1c)1r b.1d;},3A:1e(a){1b("1s"===1n a||!a)G();1q{1b("1s"===1n a.1X&&"1s"===1n a.1O)1r"1v.3A 6B 1S 1X 1G, 2m 1S 1O 1G 1b 1L 2W 2o";1b("1s"!==1n a.1O&&!(a.1O 2V 2w))1r"1v.3A 1K 1w 1O 1G 1p 1A 1S 2B, 1b 1Z 1P 2o";1b("1s"===1n a.1O&&(a.1O=[2n.2K(a.1X)],1h===a.1O[0]))1r"3y 2i 1H "+a.1X+" 49 23 2f 34 1V 2z 1p 1Z. "+r(a);1i(1a b=0;b<a.1O.1g;b++){1a c=a.1O[b].1H,d=a.1V||[];1b(0==d.1g)1i(1a e 1l i){1b(i.1F(e))1b("1s"!==1n i[e][c])2A i[e][c],"1U"!==e&&M(c,e);1q 1r"3y 2i 1H "+c+" 49 23 2f 34 1V 2z 1p 1Z. "+r(a);}1q 1i(1a f=0;f<d.1g;f++){1a h=d[f];1i(e 1l i)1b(i.1F(e))1b("1s"!==1n i[e][c])2A i[e][c][q[h]],"1U"!==e&&M(c,e);1q 1r"3y 2i 1H "+c+" 49 23 2f 34 1V 2z 1p 1Z. "+r(a);}}}},2I:1e(a){1a b=1h;1b("1s"!==1n a&&"1s"!==1n a.1x&&!(a.1x 2V 2w))1r"1v.2I: 2v a 1x 1G 1P 2o, 1Z 29 1A 1S 2B.";1b("1s"!==1n a&&"1s"!==1n a.1x&&0==a.1x.1g)1r"1v.2I: 2v a 1x 1G 1P 2o, 1Z 29 23 1A 48.";1b("1s"!==1n a&&a.1F("1k")&&"1s"===1n a.1k)1r"1v.2I: 2v a 1k 1G 1P 2o, 1Z 3E 1A 1s.";1b("1s"!==1n a&&"1s"!==1n a.1O)1b(a.1O 2V 2w){1b(0==a.1O.1g)1r"1v.2I: 2v 1S 1O 1G 1P 2o, 1Z 29 23 1A 48.";1i(1a c=a.1k,d=a.1x,b=[],e=0;e<a.1O.1g;e++)a.1X=a.1O[e].1H,b=b.6E(40(a)),a.1k=c,a.1x=d}1q 1r"1v.2I: 2v 1S 1O 1G 1P 2o, 1Z 29 1A 1S 2B.";1q b=40(a);1j b},1t:1e(a){1b(!a)1r"1v.1t 1K 1L";1a b=a.1E,c=a.1y||!1,d=a.1B,e=a.1o||[],a=a.1D||"";1b(b){1b("24"!=1n b)1r"1v.1t 1K 1w 1E 1G 1l 1w 1L 1W 1p 1A a 24";1b(0==b.1J(/\\s/g,"").1g)1r"1v.1t 3E 6F 1S 48 24 1i 1w 1E 1G 1l 1w 1L 1W";}1q 1r"1v.1t 1K a 1E 1G 1l 1w 1L 1W";1b("2T"!=1n c)1r"1v.1t 1K 1w 1y 1G 1l 1w 1L 1W 1p 1A a 2T";1b(d){1b("1e"!=1n d)1r"1v.1t 1K 1w 1B 1G 1l 1w 1L 1W 1p 1A a 1e";}1q 1r"1v.1t 1K a 1B 1G 1l 1w 1L 1W";1b(0>e.5b.3R().59("2w"))1r"1v.1t 1K 1w 1o 1G 1l 1w 1L 1W 1p 1A 1S 2B";1b("24"!=1n a)1r"1v.1t 1K 1w 1D 1G 1l 1w 1L 1W 1p 1A a 24";1b(h[b])1r"4L 1P 4C a 1M 4p "+b+". 2v 2p 5p 1p 26 1m 1M, 5l 1v.26";o[b]=E;q[E++]=b;h[b]={1y:c,1B:d,1k:o[b],1t:!0,1u:!1,1o:e,1D:a}},1u:1e(a){1b(!a)1r"1v.1u 1K 1L";1a b=a.1E,c=a.1V||[],d=a.1y||!1,e=a.1D||"",f=a.1o||[],a="1s"===1n a.38?!1:a.38;1b(!b)1r"1v.1u 1K a 1E 1G 1l 1w 1L 1W";1b("24"!=1n b)1r"1v.1u 1K 1E 1p 1A a 24 2g";1b(0>f.5b.3R().59("2w"))1r"1v.1u 1K 1w 1o 1G 1l 1w 1L 1W 1p 1A 1S 2B";1b(0==c.1g)1r"1v.1u 1K 1S 2B 3m 3Q 1V 5e a 1V 1G 1l 1w 1L 1W";1b(h[b])1r"1v.1u: 4L 1P 4C a 1M 4p "+b+". 2v 2p 5p 1p 26 1m 1M, 5l 1v.26";Y(b,c,f);o[b]=E;q[E++]=b;h[b]={1y:d,1k:o[b],1t:!0,1u:!0,1o:f,38:a,2N:c,1D:e,1B:5m};X(b,c)},26:1e(a){1b(!a)1r"1v.26 1K 1L";1b("1s"===1n a.1k)1r"1v.26 1K a 2J 1k 1G 1l 1w 1L 1W";1a b=q[a.1k];1b("1s"===1n b)1r"1v.26: I 6N 23 3K 1w 3F 1M. 6O 1Z 3N 23 2P 5g? 5q 5r: "+r(a);1a c=h[b].1y;h[b].1t&&(c="1s"===1n a.1y?h[b].1y:a.1y);1a d=h[b].1t&&!h[b].1u?a.1B||h[b].1B:h[b].1B,e=h[b].1t?a.1o||h[b].1o:h[b].1o,f=a.1D||h[b].1D,i=h[b].1u,m=a.1V||h[b].1V;1b("2T"!=1n c)1r"1v.26 1K 1w 1y 1G 1l 1w 1L 1W 1p 1A a 2T";1b("1e"!=1n d)1r"1v.26 1K 1w 1B 1G 1l 1w 1L 1W 1p 1A a 1e";1b(!(e 2V 2w))1r"1v.26 1K 1w 1o 1G 1l 1w 1L 1W 1p 1A 1S 2B";1b("24"!=1n f)1r"1v.26 1K 1w 1D 1G 1l 1w 1L 1W 1p 1A a 24";1b(i){Y(b,m,e);1a j=y.43();X(b,m);a=y.2x(y.3n(a.1k));1b(a.2x)1r y.42(j),"1v.26: 2r 6P 3Q-1V 2p 2f 3F 2f 6Q a 6R 6S: "+a.4f;}h[b]={1y:c,1k:o[b],1t:!0,1u:i,1o:e,2N:m,1D:f,1B:d}},37:o,4J:v,4I:{3U:"3U",3T:"3T",44:"44"}}}();',62,427,'||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||var|if|successful|message|function|data|length|null|for|return|constraintType|in|this|typeof|params|to|else|throw|undefined|custom|compound|regula|the|groups|formSpecific|value|be|validator|shift|defaultMessage|name|hasOwnProperty|attribute|id|push|replace|expects|options|constraint|label|elements|is|group|type|an|toLowerCase|Default|constraints|argument|elementId|element|it|||children|not|string|test|override|Invalid|form|must|only|select|__size__|tagName|input|have|parameter|bind|with|call|and|charAt|or|document|provided|you|radio|The|z0|Not|parseFloat|If|Array|cycleExists|textarea|bound|delete|array|_|needs|unshift|character|RegExp|split|validate|valid|getElementById|visited|definition|composingConstraints|regex|been|max|integer|min|boolean|independent|instanceof|are|Year|checkbox|starting|Can|include|number|error|any|failingElements|Selected|Constraint|reportAsSingleViolation|composingConstraintViolations|Checked|fraction|Month|Range|Pattern|Blank|NotBlank|Alpha|Integer|AlphaNumeric|list|Day|of|getNodeByType|can|but|Email|CompletelyFilled|Digits|Past|Min|Max|Future|Required|Element|flags|unbind|Length|Undefined|No|cannot|specified|Real|Za|trying|Numeric|find|addNode|PasswordsMatch|has|You|dateToTestAgainst|composing|toString|getAttribute|MDY|DMY|was|format|new|Date|contain|aa|text|setRoot|clone|YMD|dateToValidate|ca|button|empty|does|expected|constraintPassed|ba|Parameter|required|path|body|checked|void|removeChildren|regular|ignoreEmpty|expression|true|that|called|validateEmptyFields|Validation|Cannot|attached|arguments|match|Math|matching|blank|between|closing|fa|already|non|z_|after|equal|ga|DateFormat|Group|than|There|following|getRoot|box|constraintParameters|password|9A|configure|ha|ia|digits|ja|ka|separator|la|ma|substring|na|oa|Between|date|Matches|selectedIndex|Empty|indexOf|NotEmpty|constructor|found|IsAlpha|under|applicable|defined|IsNumeric|msg|ea|IsAlphaNumeric|use|da|all|field2|wish|Function|received|need|field1|numbers|letters|constraintName|Unterminated|literal|quoted|In|callee|Passwords|debug|hasn|__dontcare__|111|110|101|100|011|010|001|000|area|field|strings|enums|each|selected|overwriteParameters|lesser|overwriteConstraint|unexpected|greater|HTMLElement|nodeType|random|1E6|floor|generated|no|email|start|definitions|before|real|completely|filled|define|Unexpected|getElementsByTagName|do|up|digit|fractional|past|future|positive|parentheses|unmatched|might|false|negative|identifier|pop|missing|RootNode|still|parameters|optional|some|failed|requires|seem|However|concat|accept|least|at|boxes|nor|neither|buttons|checkboxes|could|Perhaps|overriding|created|cyclic|composition'.split('|'),0,{}));
/*!
 * jQuery Form Plugin
 * version: 3.50.0-2014.02.05
 * Requires jQuery v1.5 or later
 * Copyright (c) 2013 M. Alsup
 * Examples and documentation at: http://malsup.com/jquery/form/
 * Project repository: https://github.com/malsup/form
 * Dual licensed under the MIT and GPL licenses.
 * https://github.com/malsup/form#copyright-and-license
 */
eval(function(p,a,c,k,e,r){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)r[e(c)]=k[c]||e(c);k=[function(e){return r[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('(6(a){"3o 3p";3(1d 2E===\'6\'&&2E.4y){2E([\'2F\'],a)}R{a((1d(3q)!=\'1b\')?3q:1e.4z)}}(6($){"3o 3p";4 P={};P.2G=$("<1l S=\'2e\'/>").1T(0).3r!==1b;P.3s=1e.3t!==1b;4 Q=!!$.12.2H;$.12.1F=6(){3(!Q){8 5.1g.1G(5,24)}4 a=5.2H.1G(5,24);3((a&&a.2F)||1d a===\'2f\'){8 a}8 5.1g.1G(5,24)};$.12.1n=6(y){3(!5.Y){Z(\'1n: 4A 16 4B - 4C 4D 25\');8 5}4 z,1t,19,$9=5;3(1d y==\'6\'){y={1c:y}}R 3(y===1b){y={}}z=y.S||5.1F(\'3u\');1t=y.19||5.1F(\'1t\');19=(1d 1t===\'2f\')?$.4E(1t):\'\';19=19||1e.2I.2J||\'\';3(19){19=(19.4F(/^([^#]+)/)||[])[1]}y=$.2K(1j,{19:19,1c:$.1U.1c,S:z||$.1U.S,26:/^4G/i.1u(1e.2I.2J||\'\')?\'3v:18\':\'4H:4I\'},y);4 A={};5.1h(\'9-2L-3w\',[5,y,A]);3(A.3x){Z(\'1n: 16 3y 2g 9-2L-3w 1h\');8 5}3(y.2M&&y.2M(5,y)===18){Z(\'1n: 16 1o 2g 2M 2N\');8 5}4 B=y.2O;3(B===1b){B=$.1U.2O}4 C=[];4 D,a=5.2P(y.4J,C);3(y.1a){y.11=y.1a;D=$.1V(y.1a,B)}3(y.2Q&&y.2Q(a,5,y)===18){Z(\'1n: 16 1o 2g 2Q 2N\');8 5}5.1h(\'9-16-3z\',[a,5,y,A]);3(A.3x){Z(\'1n: 16 3y 2g 9-16-3z 1h\');8 5}4 q=$.1V(a,B);3(D){q=(q?(q+\'&\'+D):D)}3(y.S.4K()==\'4L\'){y.19+=(y.19.2h(\'?\')>=0?\'&\':\'?\')+q;y.1a=13}R{y.1a=q}4 E=[];3(y.2R){E.W(6(){$9.2R()})}3(y.2S){E.W(6(){$9.2S(y.4M)})}3(!y.27&&y.1v){4 F=y.1c||6(){};E.W(6(a){4 b=y.4N?\'3A\':\'4O\';$(y.1v)[b](a).1H(F,24)})}R 3(y.1c){E.W(y.1c)}y.1c=6(a,b,c){4 d=y.1i||5;1f(4 i=0,1p=E.Y;i<1p;i++){E[i].1G(d,[a,b,c||$9,$9])}};3(y.17){4 G=y.17;y.17=6(a,b,c){4 d=y.1i||5;G.1G(d,[a,b,c,$9])}}3(y.1I){4 H=y.1I;y.1I=6(a,b){4 c=y.1i||5;H.1G(c,[a,b,$9])}}4 I=$(\'1l[S=2e]:4P\',5).4Q(6(){8 $(5).1J()!==\'\'});4 J=I.Y>0;4 K=\'2i/9-1a\';4 L=($9.1g(\'2j\')==K||$9.1g(\'2T\')==K);4 M=P.2G&&P.3s;Z("4R :"+M);4 N=(J||L)&&!M;4 O;3(y.28!==18&&(y.28||N)){3(y.3B){$.1T(y.3B,6(){O=2U(a)})}R{O=2U(a)}}R 3((J||L)&&M){O=3C(a)}R{O=$.3D(y)}$9.4S(\'3E\').1a(\'3E\',O);1f(4 k=0;k<C.Y;k++){C[k]=13}5.1h(\'9-16-4T\',[5,y]);8 5;6 3F(a){4 b=$.1V(a,y.2O).3G(\'&\');4 c=b.Y;4 d=[];4 i,2k;1f(i=0;i<c;i++){b[i]=b[i].4U(/\\+/g,\' \');2k=b[i].3G(\'=\');d.W([3H(2k[0]),3H(2k[1])])}8 d}6 3C(a){4 f=2l 3t();1f(4 i=0;i<a.Y;i++){f.3I(a[i].T,a[i].U)}3(y.11){4 g=3F(y.11);1f(i=0;i<g.Y;i++){3(g[i]){f.3I(g[i][0],g[i][1])}}}y.1a=13;4 s=$.2K(1j,{},$.1U,y,{4V:18,4W:18,4X:18,S:z||\'3J\'});3(y.3K){s.7=6(){4 e=$.1U.7();3(e.2m){e.2m.3L(\'4Y\',6(a){4 b=0;4 c=a.4Z||a.3M;4 d=a.51;3(a.52){b=53.54(c/d*2V)}y.3K(a,c,d,b)},18)}8 e}}s.1a=13;4 h=s.2n;s.2n=6(a,o){3(y.3N){o.1a=y.3N}R{o.1a=f}3(h){h.1w(5,a,o)}};8 $.3D(s)}6 2U(a){4 l=$9[0],X,i,s,g,1K,$V,V,7,1L,n,2o,1W;4 m=$.55();m.1x=6(a){7.1x(a)};3(a){1f(i=0;i<C.Y;i++){X=$(C[i]);3(Q){X.2H(\'1M\',18)}R{X.3O(\'1M\')}}}s=$.2K(1j,{},$.1U,y);s.1i=s.1i||s;1K=\'56\'+(2l 57().58());3(s.2p){$V=$(s.2p);n=$V.1F(\'T\');3(!n){$V.1F(\'T\',1K)}R{1K=n}}R{$V=$(\'<28 T="\'+1K+\'" 2W="\'+s.26+\'" />\');$V.59({3M:\'5a\',3P:\'-3Q\',3R:\'-3Q\'})}V=$V[0];7={1o:0,1q:13,1X:13,1k:0,1y:\'n/a\',5b:6(){},2X:6(){},5c:6(){},1x:6(a){4 e=(a===\'1z\'?\'1z\':\'1o\');Z(\'5d 2m... \'+e);5.1o=1;1A{3(V.29.1r.3S){V.29.1r.3S(\'5e\')}}1N(5f){}$V.1g(\'2W\',s.26);7.17=e;3(s.17){s.17.1w(s.1i,7,e,a)}3(g){$.1O.1h("3T",[7,s,e])}3(s.1I){s.1I.1w(s.1i,7,e)}}};g=s.3U;3(g&&0===$.2Y++){$.1O.1h("5g")}3(g){$.1O.1h("5h",[7,s])}3(s.2n&&s.2n.1w(s.1i,7,s)===18){3(s.3U){$.2Y--}m.2a();8 m}3(7.1o){m.2a();8 m}1L=l.1B;3(1L){n=1L.T;3(n&&!1L.1M){s.11=s.11||{};s.11[n]=1L.U;3(1L.S=="1Y"){s.11[n+\'.x\']=l.1P;s.11[n+\'.y\']=l.1Q}}}4 o=1;4 p=2;6 2Z(a){4 b=13;1A{3(a.29){b=a.29.1r}}1N(1m){Z(\'30 1T 28.29 1r: \'+1m)}3(b){8 b}1A{b=a.31?a.31:a.1r}1N(1m){Z(\'30 1T 28.31: \'+1m);b=a.1r}8 b}4 q=$(\'3V[T=3W-5i]\').1g(\'2q\');4 r=$(\'3V[T=3W-1V]\').1g(\'2q\');3(r&&q){s.11=s.11||{};s.11[r]=q}6 32(){4 t=$9.1F(\'1v\'),a=$9.1F(\'1t\'),K=\'2i/9-1a\',3X=$9.1g(\'2j\')||$9.1g(\'2T\')||K;l.1Z(\'1v\',1K);3(!z||/3Y/i.1u(z)){l.1Z(\'3u\',\'3J\')}3(a!=s.19){l.1Z(\'1t\',s.19)}3(!s.5j&&(!z||/3Y/i.1u(z))){$9.1g({2T:\'2i/9-1a\',2j:\'2i/9-1a\'})}3(s.1z){1W=1R(6(){2o=1j;1C(o)},s.1z)}6 33(){1A{4 a=2Z(V).5k;Z(\'5l = \'+a);3(a&&a.20()==\'5m\'){1R(33,50)}}1N(e){Z(\'5n 1x: \',e,\' (\',e.T,\')\');1C(p);3(1W){3Z(1W)}1W=1b}}4 b=[];1A{3(s.11){1f(4 n 5o s.11){3(s.11.34(n)){3($.5p(s.11[n])&&s.11[n].34(\'T\')&&s.11[n].34(\'U\')){b.W($(\'<1l S="35" T="\'+s.11[n].T+\'">\').1J(s.11[n].U).36(l)[0])}R{b.W($(\'<1l S="35" T="\'+n+\'">\').1J(s.11[n]).36(l)[0])}}}}3(!s.2p){$V.36(\'21\')}3(V.40){V.40(\'41\',1C)}R{V.3L(\'42\',1C,18)}1R(33,15);1A{l.16()}1N(1m){4 c=1r.5q(\'9\').16;c.1G(l)}}5r{l.1Z(\'1t\',a);l.1Z(\'2j\',3X);3(t){l.1Z(\'1v\',t)}R{$9.3O(\'1v\')}$(b).43()}}3(s.5s){32()}R{1R(32,10)}4 u,14,44=50,37;6 1C(e){3(7.1o||37){8}14=2Z(V);3(!14){Z(\'30 5t 5u 1r\');e=p}3(e===o&&7){7.1x(\'1z\');m.2a(7,\'1z\');8}R 3(e==p&&7){7.1x(\'45 1x\');m.2a(7,\'17\',\'45 1x\');8}3(!14||14.2I.2J==s.26){3(!2o){8}}3(V.46){V.46(\'41\',1C)}R{V.5v(\'42\',1C,18)}4 c=\'1c\',1D;1A{3(2o){5w\'1z\';}4 d=s.27==\'1s\'||14.38||$.5x(14);Z(\'5y=\'+d);3(!d&&1e.2r&&(14.21===13||!14.21.47)){3(--44){Z(\'5z 5A 2N, 39 3a 5B\');1R(1C,5C);8}}4 f=14.21?14.21:14.2s;7.1q=f?f.47:13;7.1X=14.38?14.38:14;3(d){s.27=\'1s\'}7.2X=6(a){4 b={\'2q-S\':s.27};8 b[a.20()]};3(f){7.1k=48(f.2t(\'1k\'))||7.1k;7.1y=f.2t(\'1y\')||7.1y}4 h=(s.27||\'\').20();4 i=/(3b|49|2u)/.1u(h);3(i||s.2v){4 j=14.2w(\'2v\')[0];3(j){7.1q=j.U;7.1k=48(j.2t(\'1k\'))||7.1k;7.1y=j.2t(\'1y\')||7.1y}R 3(i){4 k=14.2w(\'2L\')[0];4 b=14.2w(\'21\')[0];3(k){7.1q=k.2x?k.2x:k.4a}R 3(b){7.1q=b.2x?b.2x:b.4a}}}R 3(h==\'1s\'&&!7.1X&&7.1q){7.1X=v(7.1q)}1A{u=x(7,h,s)}1N(1m){c=\'2y\';7.17=1D=(1m||c)}}1N(1m){Z(\'17 5D: \',1m);c=\'17\';7.17=1D=(1m||c)}3(7.1o){Z(\'2m 1o\');c=13}3(7.1k){c=(7.1k>=5E&&7.1k<5F||7.1k===5G)?\'1c\':\'17\'}3(c===\'1c\'){3(s.1c){s.1c.1w(s.1i,u,\'1c\',7)}m.5H(7.1q,\'1c\',7);3(g){$.1O.1h("5I",[7,s])}}R 3(c){3(1D===1b){1D=7.1y}3(s.17){s.17.1w(s.1i,7,c,1D)}m.2a(7,\'17\',1D);3(g){$.1O.1h("3T",[7,s,1D])}}3(g){$.1O.1h("5J",[7,s])}3(g&&!--$.2Y){$.1O.1h("5K")}3(s.1I){s.1I.1w(s.1i,7,c)}37=1j;3(s.1z){3Z(1W)}1R(6(){3(!s.2p){$V.43()}R{$V.1g(\'2W\',s.26)}7.1X=13},2V)}4 v=$.5L||6(s,a){3(1e.4b){a=2l 4b(\'5M.5N\');a.5O=\'18\';a.5P(s)}R{a=(2l 5Q()).5R(s,\'2u/1s\')}8(a&&a.2s&&a.2s.4c!=\'2y\')?a:13};4 w=$.5S||6(s){8 1e[\'5T\'](\'(\'+s+\')\')};4 x=6(a,b,s){4 c=a.2X(\'2q-S\')||\'\',1s=b===\'1s\'||!b&&c.2h(\'1s\')>=0,u=1s?a.1X:a.1q;3(1s&&u.2s.4c===\'2y\'){3($.17){$.17(\'2y\')}}3(s&&s.4d){u=s.4d(u,b)}3(1d u===\'2f\'){3(b===\'3b\'||!b&&c.2h(\'3b\')>=0){u=w(u)}R 3(b==="49"||!b&&c.2h("3v")>=0){$.5U(u)}}8 u};8 m}};$.12.3c=6(a){a=a||{};a.2z=a.2z&&$.5V($.12.3d);3(!a.2z&&5.Y===0){4 o={s:5.22,c:5.1i};3(!$.4e&&o.s){Z(\'39 3a 4f, 5W 3c\');$(6(){$(o.s,o.c).3c(a)});8 5}Z(\'5X; 5Y 4g 5Z 60 22\'+($.4e?\'\':\' (39 3a 4f)\'));8 5}3(a.2z){$(1r).4h(\'16.9-1E\',5.22,2A).4h(\'2B.9-1E\',5.22,2C).3d(\'16.9-1E\',5.22,a,2A).3d(\'2B.9-1E\',5.22,a,2C);8 5}8 5.4i().4j(\'16.9-1E\',a,2A).4j(\'2B.9-1E\',a,2C)};6 2A(e){4 a=e.1a;3(!e.61()){e.62();$(e.1v).1n(a)}}6 2C(e){4 a=e.1v;4 b=$(a);3(!(b.4k("[S=16],[S=1Y]"))){4 t=b.63(\'[S=16]\');3(t.Y===0){8}a=t[0]}4 c=5;c.1B=a;3(a.S==\'1Y\'){3(e.4l!==1b){c.1P=e.4l;c.1Q=e.64}R 3(1d $.12.4m==\'6\'){4 d=b.4m();c.1P=e.4n-d.3R;c.1Q=e.4o-d.3P}R{c.1P=e.4n-a.65;c.1Q=e.4o-a.66}}1R(6(){c.1B=c.1P=c.1Q=13},2V)}$.12.4i=6(){8 5.67(\'16.9-1E 2B.9-1E\')};$.12.2P=6(b,c){4 a=[];3(5.Y===0){8 a}4 d=5[0];4 e=5.1g(\'1K\');4 f=b?d.2w(\'*\'):d.4g;4 g;3(f&&!/4p [68]/.1u(4q.4r)){f=$(f).1T()}3(e){g=$(\':1l[9=\'+e+\']\').1T();3(g.Y){f=(f||[]).69(g)}}3(!f||!f.Y){8 a}4 i,j,n,v,X,1p,3e;1f(i=0,1p=f.Y;i<1p;i++){X=f[i];n=X.T;3(!n||X.1M){3f}3(b&&d.1B&&X.S=="1Y"){3(d.1B==X){a.W({T:n,U:$(X).1J(),S:X.S});a.W({T:n+\'.x\',U:d.1P},{T:n+\'.y\',U:d.1Q})}3f}v=$.2b(X,1j);3(v&&v.2D==2c){3(c){c.W(X)}1f(j=0,3e=v.Y;j<3e;j++){a.W({T:n,U:v[j]})}}R 3(P.2G&&X.S==\'2e\'){3(c){c.W(X)}4 h=X.3r;3(h.Y){1f(j=0;j<h.Y;j++){a.W({T:n,U:h[j],S:X.S})}}R{a.W({T:n,U:\'\',S:X.S})}}R 3(v!==13&&1d v!=\'1b\'){3(c){c.W(X)}a.W({T:n,U:v,S:X.S,4s:X.4s})}}3(!b&&d.1B){4 k=$(d.1B),1l=k[0];n=1l.T;3(n&&!1l.1M&&1l.S==\'1Y\'){a.W({T:n,U:k.1J()});a.W({T:n+\'.x\',U:d.1P},{T:n+\'.y\',U:d.1Q})}}8 a};$.12.6a=6(a){8 $.1V(5.2P(a))};$.12.6b=6(b){4 a=[];5.1H(6(){4 n=5.T;3(!n){8}4 v=$.2b(5,b);3(v&&v.2D==2c){1f(4 i=0,1p=v.Y;i<1p;i++){a.W({T:n,U:v[i]})}}R 3(v!==13&&1d v!=\'1b\'){a.W({T:5.T,U:v})}});8 $.1V(a)};$.12.2b=6(a){1f(4 b=[],i=0,1p=5.Y;i<1p;i++){4 c=5[i];4 v=$.2b(c,a);3(v===13||1d v==\'1b\'||(v.2D==2c&&!v.Y)){3f}3(v.2D==2c){$.6c(b,v)}R{b.W(v)}}8 b};$.2b=6(b,c){4 n=b.T,t=b.S,23=b.3g.20();3(c===1b){c=1j}3(c&&(!n||b.1M||t==\'2d\'||t==\'6d\'||(t==\'3h\'||t==\'3i\')&&!b.3j||(t==\'16\'||t==\'1Y\')&&b.9&&b.9.1B!=b||23==\'1S\'&&b.3k==-1)){8 13}3(23==\'1S\'){4 d=b.3k;3(d<0){8 13}4 a=[],3l=b.6e;4 e=(t==\'1S-4t\');4 f=(e?d+1:3l.Y);1f(4 i=(e?d:0);i<f;i++){4 g=3l[i];3(g.25){4 v=g.U;3(!v){v=(g.3m&&g.3m.U&&!(g.3m.U.6f))?g.2u:g.U}3(e){8 v}a.W(v)}}8 a}8 $(b).1J()};$.12.2S=6(a){8 5.1H(6(){$(\'1l,1S,2v\',5).4u(a)})};$.12.4u=$.12.6g=6(a){4 b=/^(?:6h|6i|6j|6k|6l|6m|6n|6o|6p|6q|2u|6r|19|6s)$/i;8 5.1H(6(){4 t=5.S,23=5.3g.20();3(b.1u(t)||23==\'2v\'){5.U=\'\'}R 3(t==\'3h\'||t==\'3i\'){5.3j=18}R 3(23==\'1S\'){5.3k=-1}R 3(t=="2e"){3(/4p/.1u(4q.4r)){$(5).3A($(5).6t(1j))}R{$(5).1J(\'\')}}R 3(a){3((a===1j&&/35/.1u(t))||(1d a==\'2f\'&&$(5).4k(a))){5.U=\'\'}}})};$.12.2R=6(){8 5.1H(6(){3(1d 5.2d==\'6\'||(1d 5.2d==\'6u\'&&!5.2d.6v)){5.2d()}})};$.12.6w=6(b){3(b===1b){b=1j}8 5.1H(6(){5.1M=!b})};$.12.25=6(b){3(b===1b){b=1j}8 5.1H(6(){4 t=5.S;3(t==\'3h\'||t==\'3i\'){5.3j=b}R 3(5.3g.20()==\'4v\'){4 a=$(5).6x(\'1S\');3(b&&a[0]&&a[0].S==\'1S-4t\'){a.6y(\'4v\').25(18)}5.25=b}})};$.12.1n.4w=18;6 Z(){3(!$.12.1n.4w){8}4 a=\'[2F.9] \'+2c.6z.6A.1w(24,\'\');3(1e.3n&&1e.3n.Z){1e.3n.Z(a)}R 3(1e.2r&&1e.2r.4x){1e.2r.4x(a)}}}));',62,409,'|||if|var|this|function|xhr|return|form||||||||||||||||||||||||||||||||||||||||||||else|type|name|value|io|push|el|length|log||extraData|fn|null|doc||submit|error|false|url|data|undefined|success|typeof|window|for|attr|trigger|context|true|status|input|err|ajaxSubmit|aborted|max|responseText|document|xml|action|test|target|call|abort|statusText|timeout|try|clk|cb|errMsg|plugin|attr2|apply|each|complete|val|id|sub|disabled|catch|event|clk_x|clk_y|setTimeout|select|get|ajaxSettings|param|timeoutHandle|responseXML|image|setAttribute|toLowerCase|body|selector|tag|arguments|selected|iframeSrc|dataType|iframe|contentWindow|reject|fieldValue|Array|reset|file|string|via|indexOf|multipart|enctype|part|new|upload|beforeSend|timedOut|iframeTarget|content|opera|documentElement|getAttribute|text|textarea|getElementsByTagName|textContent|parsererror|delegation|doAjaxSubmit|click|captureSubmittingElement|constructor|define|jquery|fileapi|prop|location|href|extend|pre|beforeSerialize|callback|traditional|formToArray|beforeSubmit|resetForm|clearForm|encoding|fileUploadIframe|100|src|getResponseHeader|active|getDoc|cannot|contentDocument|doSubmit|checkState|hasOwnProperty|hidden|appendTo|callbackProcessed|XMLDocument|DOM|not|json|ajaxForm|on|jmax|continue|tagName|checkbox|radio|checked|selectedIndex|ops|attributes|console|use|strict|jQuery|files|formdata|FormData|method|javascript|serialize|veto|vetoed|validate|replaceWith|closeKeepAlive|fileUploadXhr|ajax|jqxhr|deepSerialize|split|decodeURIComponent|append|POST|uploadProgress|addEventListener|position|formData|removeAttr|top|1000px|left|execCommand|ajaxError|global|meta|csrf|et|post|clearTimeout|attachEvent|onload|load|remove|domCheckCount|server|detachEvent|innerHTML|Number|script|innerText|ActiveXObject|nodeName|dataFilter|isReady|ready|elements|off|ajaxFormUnbind|bind|is|offsetX|offset|pageX|pageY|MSIE|navigator|userAgent|required|one|clearFields|option|debug|postError|amd|Zepto|skipping|process|no|element|trim|match|https|about|blank|semantic|toUpperCase|GET|includeHidden|replaceTarget|html|enabled|filter|fileAPI|removeData|notify|replace|contentType|processData|cache|progress|loaded||total|lengthComputable|Math|ceil|Deferred|jqFormIO|Date|getTime|css|absolute|getAllResponseHeaders|setRequestHeader|aborting|Stop|ignore|ajaxStart|ajaxSend|token|skipEncodingOverride|readyState|state|uninitialized|Server|in|isPlainObject|createElement|finally|forceSync|access|response|removeEventListener|throw|isXMLDoc|isXml|requeing|onLoad|available|250|caught|200|300|304|resolve|ajaxSuccess|ajaxComplete|ajaxStop|parseXML|Microsoft|XMLDOM|async|loadXML|DOMParser|parseFromString|parseJSON|eval|globalEval|isFunction|queuing|terminating|zero|found|by|isDefaultPrevented|preventDefault|closest|offsetY|offsetLeft|offsetTop|unbind|678|concat|formSerialize|fieldSerialize|merge|button|options|specified|clearInputs|color|date|datetime|email|month|number|password|range|search|tel|time|week|clone|object|nodeType|enable|parent|find|prototype|join'.split('|'),0,{}))

regula.custom({
	name:'JustLetters'
	,validator:function(){
		return /^[a-zA-Z'][a-zA-Z-' ]+[a-zA-Z']?$/.test(this.value)
	}
})
regula.custom({
	name:'JustNumbers'
	,validator:function(){
		return /^\+?(\d[\d\-\+\(\) ]{5,}\d$)/.test(this.value)
	}
})
regula.custom({
    name:'ZIP'
    ,validator:function(){
        return /^\+?(\d[\d\-\+\(\) ]{3,}\d$)/.test(this.value)
    }
})
;
// Camera slideshow v1.3.3 - a jQuery slideshow with many effects, transitions, easy to customize, using canvas and mobile ready, based on jQuery 1.4+
// Copyright (c) 2012 by Manuel Masia - www.pixedelic.com
// Licensed under the MIT license: http://www.opensource.org/licenses/mit-license.php
;(function($){$.fn.camera = function(opts, callback) {
	
	var defaults = {
		alignment			: 'center', //topLeft, topCenter, topRight, centerLeft, center, centerRight, bottomLeft, bottomCenter, bottomRight
		
		autoAdvance			: true,	//true, false
		
		mobileAutoAdvance	: true, //true, false. Auto-advancing for mobile devices
		
		barDirection		: 'leftToRight',	//'leftToRight', 'rightToLeft', 'topToBottom', 'bottomToTop'
		
		barPosition			: 'bottom',	//'bottom', 'left', 'top', 'right'
		
		cols				: 6,
		
		easing				: 'easeInOutExpo',	//for the complete list http://jqueryui.com/demos/effect/easing.html
		
		mobileEasing		: '',	//leave empty if you want to display the same easing on mobile devices and on desktop etc.
		
		fx					: 'random',	//'random','simpleFade', 'curtainTopLeft', 'curtainTopRight', 'curtainBottomLeft', 'curtainBottomRight', 'curtainSliceLeft', 'curtainSliceRight', 'blindCurtainTopLeft', 'blindCurtainTopRight', 'blindCurtainBottomLeft', 'blindCurtainBottomRight', 'blindCurtainSliceBottom', 'blindCurtainSliceTop', 'stampede', 'mosaic', 'mosaicReverse', 'mosaicRandom', 'mosaicSpiral', 'mosaicSpiralReverse', 'topLeftBottomRight', 'bottomRightTopLeft', 'bottomLeftTopRight', 'bottomLeftTopRight'
										//you can also use more than one effect, just separate them with commas: 'simpleFade, scrollRight, scrollBottom'

		mobileFx			: '',	//leave empty if you want to display the same effect on mobile devices and on desktop etc.

		gridDifference		: 250,	//to make the grid blocks slower than the slices, this value must be smaller than transPeriod
		
		height				: '50%',	//here you can type pixels (for instance '300px'), a percentage (relative to the width of the slideshow, for instance '50%') or 'auto'
		
		imagePath			: 'images/',	//he path to the image folder (it serves for the blank.gif, when you want to display videos)
		
		hover				: true,	//true, false. Puase on state hover. Not available for mobile devices
				
		loader				: 'pie',	//pie, bar, none (even if you choose "pie", old browsers like IE8- can't display it... they will display always a loading bar)
		
		loaderColor			: '#eeeeee', 
		
		loaderBgColor		: '#222222', 
		
		loaderOpacity		: .8,	//0, .1, .2, .3, .4, .5, .6, .7, .8, .9, 1
		
		loaderPadding		: 2,	//how many empty pixels you want to display between the loader and its background
		
		loaderStroke		: 7,	//the thickness both of the pie loader and of the bar loader. Remember: for the pie, the loader thickness must be less than a half of the pie diameter
				
		minHeight			: '0',	//you can also leave it blank
		
		navigation			: true,	//true or false, to display or not the navigation buttons
		
		navigationHover		: true,	//if true the navigation button (prev, next and play/stop buttons) will be visible on hover state only, if false they will be visible always
		
		mobileNavHover		: true,	//same as above, but only for mobile devices
		
		opacityOnGrid		: false,	//true, false. Decide to apply a fade effect to blocks and slices: if your slideshow is fullscreen or simply big, I recommend to set it false to have a smoother effect 
		
		overlayer			: true,	//a layer on the images to prevent the users grab them simply by clicking the right button of their mouse (.camera_overlayer)
		
		pagination			: true,
		
		playPause			: true,	//true or false, to display or not the play/pause buttons
		
		pauseOnClick		: true,	//true, false. It stops the slideshow when you click the sliders.
		
		pieDiameter			: 38,
		
		piePosition			: 'rightTop',	//'rightTop', 'leftTop', 'leftBottom', 'rightBottom'
		
		portrait			: false, //true, false. Select true if you don't want that your images are cropped
		
		rows				: 4,
		
		slicedCols			: 12,	//if 0 the same value of cols
		
		slicedRows			: 8,	//if 0 the same value of rows
		
		slideOn				: 'random',	//next, prev, random: decide if the transition effect will be applied to the current (prev) or the next slide
		
		thumbnails			: false,
		
		time				: 7000,	//milliseconds between the end of the sliding effect and the start of the nex one
		
		transPeriod			: 1500,	//lenght of the sliding effect in milliseconds
		
////////callbacks

		onEndTransition		: function() {  },	//this callback is invoked when the transition effect ends

		onLoaded			: function() {  },	//this callback is invoked when the image on a slide has completely loaded
		
		onStartLoading		: function() {  },	//this callback is invoked when the image on a slide start loading
		
		onStartTransition	: function() {  }	//this callback is invoked when the transition effect starts

    };
	
	
	function isMobile() {
		if( navigator.userAgent.match(/Android/i) ||
			navigator.userAgent.match(/webOS/i) ||
			navigator.userAgent.match(/iPad/i) ||
			navigator.userAgent.match(/iPhone/i) ||
			navigator.userAgent.match(/iPod/i)
			){
				return true;
		}
	}

	var opts = $.extend({}, defaults, opts);
	
	var wrap = $(this).addClass('camera_wrap');
	
	wrap.wrapInner(
        '<div class="camera_src" />'
		).wrapInner(
	    '<div class="camera_fakehover" />'
		);
		
	var fakeHover = $('.camera_fakehover',wrap);
	
	fakeHover.append(
		'<div class="camera_target"></div>'
		);
	if(opts.overlayer == true){
		fakeHover.append(
			'<div class="camera_overlayer"></div>'
			)
	}
		fakeHover.append(
        '<div class="camera_target_content"></div>'
		);
		
	var loader;
	
	if(opts.loader=='pie' && $.browser.msie && $.browser.version < 9){
		loader = 'bar';
	} else {
		loader = opts.loader;
	}
	
	if(loader == 'pie'){
		fakeHover.append(
			'<div class="camera_pie"></div>'
			)
	} else if (loader == 'bar') {
		fakeHover.append(
			'<div class="camera_bar"></div>'
			)
	} else {
		fakeHover.append(
			'<div class="camera_bar" style="display:none"></div>'
			)
	}
	
	if(opts.playPause==true){
		fakeHover.append(
        '<div class="camera_commands"></div>'
		)
	}
		
	if(opts.navigation==true){
		fakeHover.append(
			'<div class="camera_prev"><span></span></div>'
			).append(
			'<div class="camera_next"><span></span></div>'
			);
	}
		
	if(opts.thumbnails==true){
		wrap.append(
			'<div class="camera_thumbs_cont" />'
			);
	}
	
	if(opts.thumbnails==true && opts.pagination!=true){
		$('.camera_thumbs_cont',wrap).wrap(
			'<div />'
			).wrap(
				'<div class="camera_thumbs" />'
			).wrap(
				'<div />'
			).wrap(
				'<div class="camera_command_wrap" />'
			);
	}
		
	if(opts.pagination==true){
		wrap.append(
			'<div class="camera_pag"></div>'
			);
	}
		
	wrap.append(
		'<div class="camera_loader"></div>'
		);
		
	$('.camera_caption',wrap).each(function(){
		$(this).wrapInner('<div />');
	});
		
                
	var pieID = 'pie_'+wrap.index(),
		elem = $('.camera_src',wrap),
		target = $('.camera_target',wrap),
		content = $('.camera_target_content',wrap),
		pieContainer = $('.camera_pie',wrap),
		barContainer = $('.camera_bar',wrap),
		prevNav = $('.camera_prev',wrap),
		nextNav = $('.camera_next',wrap),
		commands = $('.camera_commands',wrap),
		pagination = $('.camera_pag',wrap),
		thumbs = $('.camera_thumbs_cont',wrap);	

	
	var w,
		h;


	var allImg = new Array();
	$('> div', elem).each( function() { 
		allImg.push($(this).attr('data-src'));
	});
	
	var allLinks = new Array();
	$('> div', elem).each( function() {
		if($(this).attr('data-link')){
			allLinks.push($(this).attr('data-link'));
		} else {
			allLinks.push('');
		}
	});
	
	var allTargets = new Array();
	$('> div', elem).each( function() {
		if($(this).attr('data-target')){
			allTargets.push($(this).attr('data-target'));
		} else {
			allTargets.push('');
		}
	});
	
	var allPor = new Array();
	$('> div', elem).each( function() {
		if($(this).attr('data-portrait')){
			allPor.push($(this).attr('data-portrait'));
		} else {
			allPor.push('');
		}
	});
	
	var allAlign= new Array();
	$('> div', elem).each( function() { 
		if($(this).attr('data-alignment')){
			allAlign.push($(this).attr('data-alignment'));
		} else {
			allAlign.push('');
		}
	});
	
		
	var allThumbs = new Array();
	$('> div', elem).each( function() { 
		if($(this).attr('data-thumb')){
			allThumbs.push($(this).attr('data-thumb'));
		} else {
			allThumbs.push('');
		}
	});
	
	var amountSlide = allImg.length;

	$(content).append('<div class="cameraContents" />');
	var loopMove;
	for (loopMove=0;loopMove<amountSlide;loopMove++)
	{
		$('.cameraContents',content).append('<div class="cameraContent" />');
		if(allLinks[loopMove]!=''){
			//only for Wordpress plugin
			var dataBox = $('> div ',elem).eq(loopMove).attr('data-box');
			if(typeof dataBox !== 'undefined' && dataBox !== false && dataBox != '') {
				dataBox = 'data-box="'+$('> div ',elem).eq(loopMove).attr('data-box')+'"';
			} else {
				dataBox = '';
			}
			//
			$('.camera_target_content .cameraContent:eq('+loopMove+')',wrap).append('<a class="camera_link" href="'+allLinks[loopMove]+'" '+dataBox+' target="'+allTargets[loopMove]+'"></a>');
		}

	}
	$('.camera_caption',wrap).each(function(){
		var ind = $(this).parent().index(),
			cont = wrap.find('.cameraContent').eq(ind);
		$(this).appendTo(cont);
	});
	
	target.append('<div class="cameraCont" />');
	var cameraCont = $('.cameraCont',wrap);
	

	
	var loop;
	for (loop=0;loop<amountSlide;loop++)
	{
		cameraCont.append('<div class="cameraSlide cameraSlide_'+loop+'" />');
		var div = $('> div:eq('+loop+')',elem);
		target.find('.cameraSlide_'+loop).clone(div);
	}
	
	
	function thumbnailVisible() {
		var wTh = $(thumbs).width();
		$('li', thumbs).removeClass('camera_visThumb');
		$('li', thumbs).each(function(){
			var pos = $(this).position(),
				ulW = $('ul', thumbs).outerWidth(),
				offUl = $('ul', thumbs).offset().left,
				offDiv = $('> div',thumbs).offset().left,
				ulLeft = offDiv-offUl;
				if(ulLeft>0){
					$('.camera_prevThumbs',camera_thumbs_wrap).removeClass('hideNav');
				} else {
					$('.camera_prevThumbs',camera_thumbs_wrap).addClass('hideNav');
				}
				if((ulW-ulLeft)>wTh){
					$('.camera_nextThumbs',camera_thumbs_wrap).removeClass('hideNav');
				} else {
					$('.camera_nextThumbs',camera_thumbs_wrap).addClass('hideNav');
				}
				var left = pos.left,
					right = pos.left+($(this).width());
				if(right-ulLeft<=wTh && left-ulLeft>=0){
					$(this).addClass('camera_visThumb');
				}
		});
	}
	
	$(window).bind('load resize pageshow',function(){
		thumbnailPos();
		thumbnailVisible();
	});


	cameraCont.append('<div class="cameraSlide cameraSlide_'+loop+'" />');
	
	
	var started;
	
	wrap.show();
	var w = target.width();
	var h = target.height();
	
	var setPause;
		
	$(window).bind('resize pageshow',function(){
		if(started == true) {
			resizeImage();
		}
		$('ul', thumbs).animate({'margin-top':0},0,thumbnailPos);
		if(!elem.hasClass('paused')){
			elem.addClass('paused');
			if($('.camera_stop',camera_thumbs_wrap).length){
				$('.camera_stop',camera_thumbs_wrap).hide()
				$('.camera_play',camera_thumbs_wrap).show();
				if(loader!='none'){
					$('#'+pieID).hide();
				}
			} else {
				if(loader!='none'){
					$('#'+pieID).hide();
				}
			}
			clearTimeout(setPause);
			setPause = setTimeout(function(){
				elem.removeClass('paused');
				if($('.camera_play',camera_thumbs_wrap).length){
					$('.camera_play',camera_thumbs_wrap).hide();
					$('.camera_stop',camera_thumbs_wrap).show();
					if(loader!='none'){
						$('#'+pieID).fadeIn();
					}
				} else {
					if(loader!='none'){
						$('#'+pieID).fadeIn();
					}
				}
			},1500);
		}
	});
	
	function resizeImage(){	
		var res;
		function resizeImageWork(){
			w = wrap.width();
			if(opts.height.indexOf('%')!=-1) {
				var startH = Math.round(w / (100/parseFloat(opts.height)));
				if(opts.minHeight != '' && startH < parseFloat(opts.minHeight)){
					h = parseFloat(opts.minHeight);
				} else {
					h = startH;
				}
				wrap.css({height:h});
			} else if (opts.height=='auto') {
				h = wrap.height();
			} else {
				h = parseFloat(opts.height);
				wrap.css({height:h});
			}
			$('.camerarelative',target).css({'width':w,'height':h});
			$('.imgLoaded',target).each(function(){
				var t = $(this),
					wT = t.attr('width'),
					hT = t.attr('height'),
					imgLoadIn = t.index(),
					mTop,
					mLeft,
					alignment = t.attr('data-alignment'),
					portrait =  t.attr('data-portrait');
					
					if(typeof alignment === 'undefined' || alignment === false || alignment === ''){
						alignment = opts.alignment;
					}
					
					if(typeof portrait === 'undefined' || portrait === false || portrait === ''){
						portrait = opts.portrait;
					}
										
					if(portrait==false||portrait=='false'){
						if((wT/hT)<(w/h)) {
							var r = w / wT;
							var d = (Math.abs(h - (hT*r)))*0.5;
							switch(alignment){
								case 'topLeft':
									mTop = 0;
									break;
								case 'topCenter':
									mTop = 0;
									break;
								case 'topRight':
									mTop = 0;
									break;
								case 'centerLeft':
									mTop = '-'+d+'px';
									break;
								case 'center':
									mTop = '-'+d+'px';
									break;
								case 'centerRight':
									mTop = '-'+d+'px';
									break;
								case 'bottomLeft':
									mTop = '-'+d*2+'px';
									break;
								case 'bottomCenter':
									mTop = '-'+d*2+'px';
									break;
								case 'bottomRight':
									mTop = '-'+d*2+'px';
									break;
							}
							t.css({
								'height' : hT*r,
								'margin-left' : 0,
								'margin-top' : mTop,
								'position' : 'absolute',
								'visibility' : 'visible',
								'width' : w
							});
						}
						else {
							var r = h / hT;
							var d = (Math.abs(w - (wT*r)))*0.5;
							switch(alignment){
								case 'topLeft':
									mLeft = 0;
									break;
								case 'topCenter':
									mLeft = '-'+d+'px';
									break;
								case 'topRight':
									mLeft = '-'+d*2+'px';
									break;
								case 'centerLeft':
									mLeft = 0;
									break;
								case 'center':
									mLeft = '-'+d+'px';
									break;
								case 'centerRight':
									mLeft = '-'+d*2+'px';
									break;
								case 'bottomLeft':
									mLeft = 0;
									break;
								case 'bottomCenter':
									mLeft = '-'+d+'px';
									break;
								case 'bottomRight':
									mLeft = '-'+d*2+'px';
									break;
							}
							t.css({
								'height' : h,
								'margin-left' : mLeft,
								'margin-top' : 0,
								'position' : 'absolute',
								'visibility' : 'visible',
								'width' : wT*r
							});
						}
					} else {
						if((wT/hT)<(w/h)) {
							var r = h / hT;
							var d = (Math.abs(w - (wT*r)))*0.5;
							switch(alignment){
								case 'topLeft':
									mLeft = 0;
									break;
								case 'topCenter':
									mLeft = d+'px';
									break;
								case 'topRight':
									mLeft = d*2+'px';
									break;
								case 'centerLeft':
									mLeft = 0;
									break;
								case 'center':
									mLeft = d+'px';
									break;
								case 'centerRight':
									mLeft = d*2+'px';
									break;
								case 'bottomLeft':
									mLeft = 0;
									break;
								case 'bottomCenter':
									mLeft = d+'px';
									break;
								case 'bottomRight':
									mLeft = d*2+'px';
									break;
							}
							t.css({
								'height' : h,
								'margin-left' : mLeft,
								'margin-top' : 0,
								'position' : 'absolute',
								'visibility' : 'visible',
								'width' : wT*r
							});
						}
						else {
							var r = w / wT;
							var d = (Math.abs(h - (hT*r)))*0.5;
							switch(alignment){
								case 'topLeft':
									mTop = 0;
									break;
								case 'topCenter':
									mTop = 0;
									break;
								case 'topRight':
									mTop = 0;
									break;
								case 'centerLeft':
									mTop = d+'px';
									break;
								case 'center':
									mTop = d+'px';
									break;
								case 'centerRight':
									mTop = d+'px';
									break;
								case 'bottomLeft':
									mTop = d*2+'px';
									break;
								case 'bottomCenter':
									mTop = d*2+'px';
									break;
								case 'bottomRight':
									mTop = d*2+'px';
									break;
							}
							t.css({
								'height' : hT*r,
								'margin-left' : 0,
								'margin-top' : mTop,
								'position' : 'absolute',
								'visibility' : 'visible',
								'width' : w
							});
						}
					}
			});
		}
		if (started == true) {
			clearTimeout(res);
			res = setTimeout(resizeImageWork,200);
		} else {
			resizeImageWork();
		}
		
		started = true;
	}
	
	
	var u,
		setT;

	var clickEv,
		autoAdv,
		navHover,
		commands,
		pagination;

	var videoHover,
		videoPresent;
		
	if(isMobile() && opts.mobileAutoAdvance!=''){
		autoAdv = opts.mobileAutoAdvance;
	} else {
		autoAdv = opts.autoAdvance;
	}
	
	if(autoAdv==false){
		elem.addClass('paused');
	}

	if(isMobile() && opts.mobileNavHover!=''){
		navHover = opts.mobileNavHover;
	} else {
		navHover = opts.navigationHover;
	}

	if(elem.length!=0){
			
		var selector = $('.cameraSlide',target);
		selector.wrapInner('<div class="camerarelative" />');
		
		var navSlide;
			
		var barDirection = opts.barDirection;
	
		var camera_thumbs_wrap = wrap;


		$('iframe',fakeHover).each(function(){
			var t = $(this);
			var src = t.attr('src');
			t.attr('data-src',src);
			var divInd = t.parent().index('.camera_src > div');
			$('.camera_target_content .cameraContent:eq('+divInd+')',wrap).append(t);
		});
		function imgFake() {
				$('iframe',fakeHover).each(function(){
					$('.camera_caption',fakeHover).show();
					var t = $(this);
					var cloneSrc = t.attr('data-src');
					t.attr('src',cloneSrc);
					var imgFakeUrl = opts.imagePath+'blank.gif';
					var imgFake = new Image();
					imgFake.src = imgFakeUrl;
					if(opts.height.indexOf('%')!=-1) {
						var startH = Math.round(w / (100/parseFloat(opts.height)));
						if(opts.minHeight != '' && startH < parseFloat(opts.minHeight)){
							h = parseFloat(opts.minHeight);
						} else {
							h = startH;
						}
					} else if (opts.height=='auto') {
						h = wrap.height();
					} else {
						h = parseFloat(opts.height);
					}
					t.after($(imgFake).attr({'class':'imgFake','width':w,'height':h}));
					var clone = t.clone();
					t.remove();
					$(imgFake).bind('click',function(){
						if($(this).css('position')=='absolute') {
							$(this).remove();
							if(cloneSrc.indexOf('vimeo') != -1 || cloneSrc.indexOf('youtube') != -1) {
								if(cloneSrc.indexOf('?') != -1){
									autoplay = '&autoplay=1';
								} else {
									autoplay = '?autoplay=1';
								}
							} else if(cloneSrc.indexOf('dailymotion') != -1) {
								if(cloneSrc.indexOf('?') != -1){
									autoplay = '&autoPlay=1';
								} else {
									autoplay = '?autoPlay=1';
								}
							}
							clone.attr('src',cloneSrc+autoplay);
							videoPresent = true;
						} else {
							$(this).css({position:'absolute',top:0,left:0,zIndex:10}).after(clone);
							clone.css({position:'absolute',top:0,left:0,zIndex:9});
						}
					});
				});
		}
		
		imgFake();
		
		
		if(opts.hover==true){
			if(!isMobile()){
				fakeHover.hover(function(){
					elem.addClass('hovered');
				},function(){
					elem.removeClass('hovered');
				});
			}
		}

		
		
	
		$('.camera_stop',camera_thumbs_wrap).live('click',function(){
			autoAdv = false;
			elem.addClass('paused');
			if($('.camera_stop',camera_thumbs_wrap).length){
				$('.camera_stop',camera_thumbs_wrap).hide()
				$('.camera_play',camera_thumbs_wrap).show();
				if(loader!='none'){
					$('#'+pieID).hide();
				}
			} else {
				if(loader!='none'){
					$('#'+pieID).hide();
				}
			}
		});
	
		$('.camera_play',camera_thumbs_wrap).live('click',function(){
			autoAdv = true;
			elem.removeClass('paused');
			if($('.camera_play',camera_thumbs_wrap).length){
				$('.camera_play',camera_thumbs_wrap).hide();
				$('.camera_stop',camera_thumbs_wrap).show();
				if(loader!='none'){
					$('#'+pieID).show();
				}
			} else {
				if(loader!='none'){
					$('#'+pieID).show();
				}
			}
		});
	
		if(opts.pauseOnClick==true){
			$('.camera_target_content',fakeHover).mouseup(function(){
				autoAdv = false;
				elem.addClass('paused');
				$('.camera_stop',camera_thumbs_wrap).hide()
				$('.camera_play',camera_thumbs_wrap).show();
				$('#'+pieID).hide();
			});
		}
		$('.cameraContent, .imgFake',fakeHover).hover(function(){
			videoHover = true;
		},function(){
			videoHover = false;
		});
		
		$('.cameraContent, .imgFake',fakeHover).bind('click',function(){
			if(videoPresent == true && videoHover == true) {
				autoAdv = false;
				$('.camera_caption',fakeHover).hide();
				elem.addClass('paused');
				$('.camera_stop',camera_thumbs_wrap).hide()
				$('.camera_play',camera_thumbs_wrap).show();
				$('#'+pieID).hide();
			}
		});
		
		
	}
	
	
		function shuffle(arr) {
			for(
			  var j, x, i = arr.length; i;
			  j = parseInt(Math.random() * i),
			  x = arr[--i], arr[i] = arr[j], arr[j] = x
			);
			return arr;
		}
	
		function isInteger(s) {
			return Math.ceil(s) == Math.floor(s);
		}	
	
		if (loader != 'pie') {
			barContainer.append('<span class="camera_bar_cont" />');
			$('.camera_bar_cont',barContainer)
				.animate({opacity:opts.loaderOpacity},0)
				.css({'position':'absolute', 'left':0, 'right':0, 'top':0, 'bottom':0, 'background-color':opts.loaderBgColor})
				.append('<span id="'+pieID+'" />');
			$('#'+pieID).animate({opacity:0},0);
			var canvas = $('#'+pieID);
			canvas.css({'position':'absolute', 'background-color':opts.loaderColor});
			switch(opts.barPosition){
				case 'left':
					barContainer.css({right:'auto',width:opts.loaderStroke});
					break;
				case 'right':
					barContainer.css({left:'auto',width:opts.loaderStroke});
					break;
				case 'top':
					barContainer.css({bottom:'auto',height:opts.loaderStroke});
					break;
				case 'bottom':
					barContainer.css({top:'auto',height:opts.loaderStroke});
					break;
			}
			switch(barDirection){
				case 'leftToRight':
					canvas.css({'left':0, 'right':0, 'top':opts.loaderPadding, 'bottom':opts.loaderPadding});
					break;
				case 'rightToLeft':
					canvas.css({'left':0, 'right':0, 'top':opts.loaderPadding, 'bottom':opts.loaderPadding});
					break;
				case 'topToBottom':
					canvas.css({'left':opts.loaderPadding, 'right':opts.loaderPadding, 'top':0, 'bottom':0});
					break;
				case 'bottomToTop':
					canvas.css({'left':opts.loaderPadding, 'right':opts.loaderPadding, 'top':0, 'bottom':0});
					break;
			}
		} else {
			pieContainer.append('<canvas id="'+pieID+'"></canvas>');
			var G_vmlCanvasManager;
			var canvas = document.getElementById(pieID);
			canvas.setAttribute("width", opts.pieDiameter);
			canvas.setAttribute("height", opts.pieDiameter);
			var piePosition;
			switch(opts.piePosition){
				case 'leftTop' :
					piePosition = 'left:0; top:0;';
					break;
				case 'rightTop' :
					piePosition = 'right:0; top:0;';
					break;
				case 'leftBottom' :
					piePosition = 'left:0; bottom:0;';
					break;
				case 'rightBottom' :
					piePosition = 'right:0; bottom:0;';
					break;
			}
			canvas.setAttribute("style", "position:absolute; z-index:1002; "+piePosition);
			var rad;
			var radNew;
	
			if (canvas && canvas.getContext) {
				var ctx = canvas.getContext("2d");
				ctx.rotate(Math.PI*(3/2));
				ctx.translate(-opts.pieDiameter,0);
			}
		
		}
		if(loader=='none' || autoAdv==false) {
			$('#'+pieID).hide();
			$('.camera_canvas_wrap',camera_thumbs_wrap).hide();
		}
		
		if($(pagination).length) {
			$(pagination).append('<ul class="camera_pag_ul" />');
			var li;
			for (li = 0; li < amountSlide; li++){
				$('.camera_pag_ul',wrap).append('<li class="pag_nav_'+li+'" style="position:relative; z-index:1002"><span><span>'+li+'</span></span></li>');
			}
			$('.camera_pag_ul li',wrap).hover(function(){
				$(this).addClass('camera_hover');
				if($('.camera_thumb',this).length){
					var wTh = $('.camera_thumb',this).outerWidth(),
					hTh = $('.camera_thumb',this).outerHeight(),
					wTt = $(this).outerWidth();
					$('.camera_thumb',this).show().css({'top':'-'+hTh+'px','left':'-'+(wTh-wTt)/2+'px'}).animate({'opacity':1,'margin-top':'-3px'},200);
					$('.thumb_arrow',this).show().animate({'opacity':1,'margin-top':'-3px'},200);
				}
			},function(){
				$(this).removeClass('camera_hover');
				$('.camera_thumb',this).animate({'margin-top':'-20px','opacity':0},200,function(){
					$(this).css({marginTop:'5px'}).hide();
				});
				$('.thumb_arrow',this).animate({'margin-top':'-20px','opacity':0},200,function(){
					$(this).css({marginTop:'5px'}).hide();
				});
			});
		}
			
	
	
		if($(thumbs).length) {
			var thumbUrl;
			if(!$(pagination).length) {
				$(thumbs).append('<div />');
				$(thumbs).before('<div class="camera_prevThumbs hideNav"><div></div></div>').before('<div class="camera_nextThumbs hideNav"><div></div></div>');
				$('> div',thumbs).append('<ul />');
				$.each(allThumbs, function(i, val) {
					if($('> div', elem).eq(i).attr('data-thumb')!='') {
						var thumbUrl = $('> div', elem).eq(i).attr('data-thumb'),
							newImg = new Image();
						newImg.src = thumbUrl;
						$('ul',thumbs).append('<li class="pix_thumb pix_thumb_'+i+'" />');
						$('li.pix_thumb_'+i,thumbs).append($(newImg).attr('class','camera_thumb'));
					}
				});
			} else {
				$.each(allThumbs, function(i, val) {
					if($('> div', elem).eq(i).attr('data-thumb')!='') {
						var thumbUrl = $('> div', elem).eq(i).attr('data-thumb'),
							newImg = new Image();
						newImg.src = thumbUrl;
						$('li.pag_nav_'+i,pagination).append($(newImg).attr('class','camera_thumb').css({'position':'absolute'}).animate({opacity:0},0));
						$('li.pag_nav_'+i+' > img',pagination).after('<div class="thumb_arrow" />');
						$('li.pag_nav_'+i+' > .thumb_arrow',pagination).animate({opacity:0},0);
					}
				});
				wrap.css({marginBottom:$(pagination).outerHeight()});
			}
		} else if(!$(thumbs).length && $(pagination).length) {
			wrap.css({marginBottom:$(pagination).outerHeight()});
		}

	
		var firstPos = true;

		function thumbnailPos() {
			if($(thumbs).length && !$(pagination).length) {
				var wTh = $(thumbs).outerWidth(),
					owTh = $('ul > li',thumbs).outerWidth(),
					pos = $('li.cameracurrent', thumbs).length ? $('li.cameracurrent', thumbs).position() : '',
					ulW = ($('ul > li', thumbs).length * $('ul > li', thumbs).outerWidth()),
					offUl = $('ul', thumbs).offset().left,
					offDiv = $('> div', thumbs).offset().left,
					ulLeft;

					if(offUl<0){
						ulLeft = '-'+ (offDiv-offUl);
					} else {
						ulLeft = offDiv-offUl;
					}
					
					
					
				if(firstPos == true) {
					$('ul', thumbs).width($('ul > li', thumbs).length * $('ul > li', thumbs).outerWidth());
					if($(thumbs).length && !$(pagination).lenght) {
						wrap.css({marginBottom:$(thumbs).outerHeight()});
					}
					thumbnailVisible();
					/*I repeat this two lines because of a problem with iPhones*/
					$('ul', thumbs).width($('ul > li', thumbs).length * $('ul > li', thumbs).outerWidth());
					if($(thumbs).length && !$(pagination).lenght) {
						wrap.css({marginBottom:$(thumbs).outerHeight()});
					}
					/*...*/
				}
				firstPos = false;
				
					var left = $('li.cameracurrent', thumbs).length ? pos.left : '',
						right = $('li.cameracurrent', thumbs).length ? pos.left+($('li.cameracurrent', thumbs).outerWidth()) : '';
					if(left<$('li.cameracurrent', thumbs).outerWidth()) {
						left = 0;
					}
					if(right-ulLeft>wTh){
						if((left+wTh)<ulW){
							$('ul', thumbs).animate({'margin-left':'-'+(left)+'px'},500,thumbnailVisible);
						} else {
							$('ul', thumbs).animate({'margin-left':'-'+($('ul', thumbs).outerWidth()-wTh)+'px'},500,thumbnailVisible);
						}
					} else if(left-ulLeft<0) {
						$('ul', thumbs).animate({'margin-left':'-'+(left)+'px'},500,thumbnailVisible);
					} else {
						$('ul', thumbs).css({'margin-left':'auto', 'margin-right':'auto'});
						setTimeout(thumbnailVisible,100);
					}
					
			}
		}

		if($(commands).length) {
			$(commands).append('<div class="camera_play"></div>').append('<div class="camera_stop"></div>');
			if(autoAdv==true){
				$('.camera_play',camera_thumbs_wrap).hide();
				$('.camera_stop',camera_thumbs_wrap).show();
			} else {
				$('.camera_stop',camera_thumbs_wrap).hide();
				$('.camera_play',camera_thumbs_wrap).show();
			}
			
		}
			
			
		function canvasLoader() {
			rad = 0;
			var barWidth = $('.camera_bar_cont',camera_thumbs_wrap).width(),
				barHeight = $('.camera_bar_cont',camera_thumbs_wrap).height();

			if (loader != 'pie') {
				switch(barDirection){
					case 'leftToRight':
						$('#'+pieID).css({'right':barWidth});
						break;
					case 'rightToLeft':
						$('#'+pieID).css({'left':barWidth});
						break;
					case 'topToBottom':
						$('#'+pieID).css({'bottom':barHeight});
						break;
					case 'bottomToTop':
						$('#'+pieID).css({'top':barHeight});
						break;
				}
			} else {
				ctx.clearRect(0,0,opts.pieDiameter,opts.pieDiameter); 
			}
		}
		
		
		canvasLoader();
		
		
		$('.moveFromLeft, .moveFromRight, .moveFromTop, .moveFromBottom, .fadeIn, .fadeFromLeft, .fadeFromRight, .fadeFromTop, .fadeFromBottom',fakeHover).each(function(){
			$(this).css('visibility','hidden');
		});
		
		opts.onStartLoading.call(this);
		
		nextSlide();
		
	
	/*************************** FUNCTION nextSlide() ***************************/
	
	function nextSlide(navSlide){ 
		elem.addClass('camerasliding');
		
		videoPresent = false;
		var vis = parseFloat($('div.cameraSlide.cameracurrent',target).index());

		if(navSlide>0){ 
			var slideI = navSlide-1;
		} else if (vis == amountSlide-1) { 
			var slideI = 0;
		} else {
			var slideI = vis+1;
		}
		
				
		var slide = $('.cameraSlide:eq('+slideI+')',target);
		var slideNext = $('.cameraSlide:eq('+(slideI+1)+')',target).addClass('cameranext');
		if( vis != slideI+1 ) {
			slideNext.hide();
		}
		$('.cameraContent',fakeHover).fadeOut(600);
		$('.camera_caption',fakeHover).show();
		
		$('.camerarelative',slide).append($('> div ',elem).eq(slideI).find('> div.camera_effected'));

		$('.camera_target_content .cameraContent:eq('+slideI+')',wrap).append($('> div ',elem).eq(slideI).find('> div'));
		
		if(!$('.imgLoaded',slide).length){
			var imgUrl = allImg[slideI];
			var imgLoaded = new Image();
			imgLoaded.src = imgUrl +"?"+ new Date().getTime();
			slide.css('visibility','hidden');
			slide.prepend($(imgLoaded).attr('class','imgLoaded').css('visibility','hidden'));
			var wT, hT;
			if (!$(imgLoaded).get(0).complete || wT == '0' || hT == '0' || typeof wT === 'undefined' || wT === false || typeof hT === 'undefined' || hT === false) {
				$('.camera_loader',wrap).delay(500).fadeIn(400);
				imgLoaded.onload = function() {
					wT = imgLoaded.naturalWidth;
					hT = imgLoaded.naturalHeight;
					$(imgLoaded).attr('data-alignment',allAlign[slideI]).attr('data-portrait',allPor[slideI]);
					$(imgLoaded).attr('width',wT);
					$(imgLoaded).attr('height',hT);
					target.find('.cameraSlide_'+slideI).hide().css('visibility','visible');
					resizeImage();
					nextSlide(slideI+1);
				};
			}
		} else {
			if( allImg.length > (slideI+1) && !$('.imgLoaded',slideNext).length ){
				var imgUrl2 = allImg[(slideI+1)];
				var imgLoaded2 = new Image();
				imgLoaded2.src = imgUrl2 +"?"+ new Date().getTime();
				slideNext.prepend($(imgLoaded2).attr('class','imgLoaded').css('visibility','hidden'));
				imgLoaded2.onload = function() {
					wT = imgLoaded2.naturalWidth;
					hT = imgLoaded2.naturalHeight;
					$(imgLoaded2).attr('data-alignment',allAlign[slideI+1]).attr('data-portrait',allPor[slideI+1]);
					$(imgLoaded2).attr('width',wT);
					$(imgLoaded2).attr('height',hT);
					resizeImage();
				};
			}
			opts.onLoaded.call(this);
			if($('.camera_loader',wrap).is(':visible')){
				$('.camera_loader',wrap).fadeOut(400);
			} else {
				$('.camera_loader',wrap).css({'visibility':'hidden'});
				$('.camera_loader',wrap).fadeOut(400,function(){
					$('.camera_loader',wrap).css({'visibility':'visible'});
				});
			}
			var rows = opts.rows,
				cols = opts.cols,
				couples = 1,
				difference = 0,
				dataSlideOn,
				time,
				transPeriod,
				fx,
				easing,
				randomFx = new Array('simpleFade','curtainTopLeft','curtainTopRight','curtainBottomLeft','curtainBottomRight','curtainSliceLeft','curtainSliceRight','blindCurtainTopLeft','blindCurtainTopRight','blindCurtainBottomLeft','blindCurtainBottomRight','blindCurtainSliceBottom','blindCurtainSliceTop','stampede','mosaic','mosaicReverse','mosaicRandom','mosaicSpiral','mosaicSpiralReverse','topLeftBottomRight','bottomRightTopLeft','bottomLeftTopRight','topRightBottomLeft','scrollLeft','scrollRight','scrollTop','scrollBottom','scrollHorz');
				marginLeft = 0,
				marginTop = 0,
				opacityOnGrid = 0;
				
				if(opts.opacityOnGrid==true){
					opacityOnGrid = 0;
				} else {
					opacityOnGrid = 1;
				}
 
			
			
			var dataFx = $(' > div',elem).eq(slideI).attr('data-fx');
				
			if(isMobile()&&opts.mobileFx!=''&&opts.mobileFx!='default'){
				fx = opts.mobileFx;
			} else {
				if(typeof dataFx !== 'undefined' && dataFx!== false && dataFx!== 'default'){
					fx = dataFx;
				} else {
					fx = opts.fx;
				}
			}
			
			if(fx=='random') {
				fx = shuffle(randomFx);
				fx = fx[0];
			} else {
				fx = fx;
				if(fx.indexOf(',')>0){
					fx = fx.replace(/ /g,'');
					fx = fx.split(',');
					fx = shuffle(fx);
					fx = fx[0];
				}
			}
			
			dataEasing = $(' > div',elem).eq(slideI).attr('data-easing');
			mobileEasing = $(' > div',elem).eq(slideI).attr('data-mobileEasing');

			if(isMobile()&&opts.mobileEasing!=''&&opts.mobileEasing!='default'){
				if(typeof mobileEasing !== 'undefined' && mobileEasing!== false && mobileEasing!== 'default') {
					easing = mobileEasing;
				} else {
					easing = opts.mobileEasing;
				}
			} else {
				if(typeof dataEasing !== 'undefined' && dataEasing!== false && dataEasing!== 'default') {
					easing = dataEasing;
				} else {
					easing = opts.easing;
				}
			}
	
			dataSlideOn = $(' > div',elem).eq(slideI).attr('data-slideOn');
			if(typeof dataSlideOn !== 'undefined' && dataSlideOn!== false){
				slideOn = dataSlideOn;
			} else {
				if(opts.slideOn=='random'){
					var slideOn = new Array('next','prev');
					slideOn = shuffle(slideOn);
					slideOn = slideOn[0];
				} else {
					slideOn = opts.slideOn;
				}
			}
				
			var dataTime = $(' > div',elem).eq(slideI).attr('data-time');
			if(typeof dataTime !== 'undefined' && dataTime!== false && dataTime!== ''){
				time = parseFloat(dataTime);
			} else {
				time = opts.time;
			}
				
			var dataTransPeriod = $(' > div',elem).eq(slideI).attr('data-transPeriod');
			if(typeof dataTransPeriod !== 'undefined' && dataTransPeriod!== false && dataTransPeriod!== ''){
				transPeriod = parseFloat(dataTransPeriod);
			} else {
				transPeriod = opts.transPeriod;
			}
				
			if(!$(elem).hasClass('camerastarted')){
				fx = 'simpleFade';
				slideOn = 'next';
				easing = '';
				transPeriod = 400;
				$(elem).addClass('camerastarted')
			}
	
			switch(fx){
				case 'simpleFade':
					cols = 1;
					rows = 1;
						break;
				case 'curtainTopLeft':
					if(opts.slicedCols == 0) {
						cols = opts.cols;
					} else {
						cols = opts.slicedCols;
					}
					rows = 1;
						break;
				case 'curtainTopRight':
					if(opts.slicedCols == 0) {
						cols = opts.cols;
					} else {
						cols = opts.slicedCols;
					}
					rows = 1;
						break;
				case 'curtainBottomLeft':
					if(opts.slicedCols == 0) {
						cols = opts.cols;
					} else {
						cols = opts.slicedCols;
					}
					rows = 1;
						break;
				case 'curtainBottomRight':
					if(opts.slicedCols == 0) {
						cols = opts.cols;
					} else {
						cols = opts.slicedCols;
					}
					rows = 1;
						break;
				case 'curtainSliceLeft':
					if(opts.slicedCols == 0) {
						cols = opts.cols;
					} else {
						cols = opts.slicedCols;
					}
					rows = 1;
						break;
				case 'curtainSliceRight':
					if(opts.slicedCols == 0) {
						cols = opts.cols;
					} else {
						cols = opts.slicedCols;
					}
					rows = 1;
						break;
				case 'blindCurtainTopLeft':
					if(opts.slicedRows == 0) {
						rows = opts.rows;
					} else {
						rows = opts.slicedRows;
					}
					cols = 1;
						break;
				case 'blindCurtainTopRight':
					if(opts.slicedRows == 0) {
						rows = opts.rows;
					} else {
						rows = opts.slicedRows;
					}
					cols = 1;
						break;
				case 'blindCurtainBottomLeft':
					if(opts.slicedRows == 0) {
						rows = opts.rows;
					} else {
						rows = opts.slicedRows;
					}
					cols = 1;
						break;
				case 'blindCurtainBottomRight':
					if(opts.slicedRows == 0) {
						rows = opts.rows;
					} else {
						rows = opts.slicedRows;
					}
					cols = 1;
						break;
				case 'blindCurtainSliceTop':
					if(opts.slicedRows == 0) {
						rows = opts.rows;
					} else {
						rows = opts.slicedRows;
					}
					cols = 1;
						break;
				case 'blindCurtainSliceBottom':
					if(opts.slicedRows == 0) {
						rows = opts.rows;
					} else {
						rows = opts.slicedRows;
					}
					cols = 1;
						break;
				case 'stampede':
					difference = '-'+transPeriod;
						break;
				case 'mosaic':
					difference = opts.gridDifference;
						break;
				case 'mosaicReverse':
					difference = opts.gridDifference;
						break;
				case 'mosaicRandom':
						break;
				case 'mosaicSpiral':
					difference = opts.gridDifference;
					couples = 1.7;
						break;
				case 'mosaicSpiralReverse':
					difference = opts.gridDifference;
					couples = 1.7;
						break;
				case 'topLeftBottomRight':
					difference = opts.gridDifference;
					couples = 6;
						break;
				case 'bottomRightTopLeft':
					difference = opts.gridDifference;
					couples = 6;
						break;
				case 'bottomLeftTopRight':
					difference = opts.gridDifference;
					couples = 6;
						break;
				case 'topRightBottomLeft':
					difference = opts.gridDifference;
					couples = 6;
						break;
				case 'scrollLeft':
					cols = 1;
					rows = 1;
						break;
				case 'scrollRight':
					cols = 1;
					rows = 1;
						break;
				case 'scrollTop':
					cols = 1;
					rows = 1;
						break;
				case 'scrollBottom':
					cols = 1;
					rows = 1;
						break;
				case 'scrollHorz':
					cols = 1;
					rows = 1;
						break;
			}
			
			var cycle = 0;
			var blocks = rows*cols;
			var leftScrap = w-(Math.floor(w/cols)*cols);
			var topScrap = h-(Math.floor(h/rows)*rows);
			var addLeft;
			var addTop;
			var tAppW = 0;	
			var tAppH = 0;
			var arr = new Array();
			var delay = new Array();
			var order = new Array();
			while(cycle < blocks){
				arr.push(cycle);
				delay.push(cycle);
				cameraCont.append('<div class="cameraappended" style="display:none; overflow:hidden; position:absolute; z-index:1000" />');
				var tApp = $('.cameraappended:eq('+cycle+')',target);
				if(fx=='scrollLeft' || fx=='scrollRight' || fx=='scrollTop' || fx=='scrollBottom' || fx=='scrollHorz'){
					selector.eq(slideI).clone().show().appendTo(tApp);
				} else {
					if(slideOn=='next'){
						selector.eq(slideI).clone().show().appendTo(tApp);
					} else {
						selector.eq(vis).clone().show().appendTo(tApp);
					}
				}

				if(cycle%cols<leftScrap){
					addLeft = 1;
				} else {
					addLeft = 0;
				}
				if(cycle%cols==0){
					tAppW = 0;
				}
				if(Math.floor(cycle/cols)<topScrap){
					addTop = 1;
				} else {
					addTop = 0;
				}
				tApp.css({
					'height': Math.floor((h/rows)+addTop+1),
					'left': tAppW,
					'top': tAppH,
					'width': Math.floor((w/cols)+addLeft+1)
				});
				$('> .cameraSlide', tApp).css({
					'height': h,
					'margin-left': '-'+tAppW+'px',
					'margin-top': '-'+tAppH+'px',
					'width': w
				});
				tAppW = tAppW+tApp.width()-1;
				if(cycle%cols==cols-1){
					tAppH = tAppH + tApp.height() - 1;
				}
				cycle++;
			}
			

			
			switch(fx){
				case 'curtainTopLeft':
						break;
				case 'curtainBottomLeft':
						break;
				case 'curtainSliceLeft':
						break;
				case 'curtainTopRight':
					arr = arr.reverse();
						break;
				case 'curtainBottomRight':
					arr = arr.reverse();
						break;
				case 'curtainSliceRight':
					arr = arr.reverse();
						break;
				case 'blindCurtainTopLeft':
						break;
				case 'blindCurtainBottomLeft':
					arr = arr.reverse();
						break;
				case 'blindCurtainSliceTop':
						break;
				case 'blindCurtainTopRight':
						break;
				case 'blindCurtainBottomRight':
					arr = arr.reverse();
						break;
				case 'blindCurtainSliceBottom':
					arr = arr.reverse();
						break;
				case 'stampede':
					arr = shuffle(arr);
						break;
				case 'mosaic':
						break;
				case 'mosaicReverse':
					arr = arr.reverse();
						break;
				case 'mosaicRandom':
					arr = shuffle(arr);
						break;
				case 'mosaicSpiral':
					var rows2 = rows/2, x, y, z, n=0;
						for (z = 0; z < rows2; z++){
							y = z;
							for (x = z; x < cols - z - 1; x++) {
								order[n++] = y * cols + x;
							}
							x = cols - z - 1;
							for (y = z; y < rows - z - 1; y++) {
								order[n++] = y * cols + x;
							}
							y = rows - z - 1;
							for (x = cols - z - 1; x > z; x--) {
								order[n++] = y * cols + x;
							}
							x = z;
							for (y = rows - z - 1; y > z; y--) {
								order[n++] = y * cols + x;
							}
						}
						
						arr = order;

						break;
				case 'mosaicSpiralReverse':
					var rows2 = rows/2, x, y, z, n=blocks-1;
						for (z = 0; z < rows2; z++){
							y = z;
							for (x = z; x < cols - z - 1; x++) {
								order[n--] = y * cols + x;
							}
							x = cols - z - 1;
							for (y = z; y < rows - z - 1; y++) {
								order[n--] = y * cols + x;
							}
							y = rows - z - 1;
							for (x = cols - z - 1; x > z; x--) {
								order[n--] = y * cols + x;
							}
							x = z;
							for (y = rows - z - 1; y > z; y--) {
								order[n--] = y * cols + x;
							}
						}

						arr = order;
						
						break;
				case 'topLeftBottomRight':
					for (var y = 0; y < rows; y++)
					for (var x = 0; x < cols; x++) {
						order.push(x + y);
					}
						delay = order;
						break;
				case 'bottomRightTopLeft':
					for (var y = 0; y < rows; y++)
					for (var x = 0; x < cols; x++) {
						order.push(x + y);
					}
						delay = order.reverse();
						break;
				case 'bottomLeftTopRight':
					for (var y = rows; y > 0; y--)
					for (var x = 0; x < cols; x++) {
						order.push(x + y);
					}
						delay = order;
						break;
				case 'topRightBottomLeft':
					for (var y = 0; y < rows; y++)
					for (var x = cols; x > 0; x--) {
						order.push(x + y);
					}
						delay = order;
						break;
			}
			
			
						
			$.each(arr, function(index, value) {

				if(value%cols<leftScrap){
					addLeft = 1;
				} else {
					addLeft = 0;
				}
				if(value%cols==0){
					tAppW = 0;
				}
				if(Math.floor(value/cols)<topScrap){
					addTop = 1;
				} else {
					addTop = 0;
				}
							
				switch(fx){
					case 'simpleFade':
						height = h;
						width = w;
						opacityOnGrid = 0;
							break;
					case 'curtainTopLeft':
						height = 0,
						width = Math.floor((w/cols)+addLeft+1),
						marginTop = '-'+Math.floor((h/rows)+addTop+1)+'px';
							break;
					case 'curtainTopRight':
						height = 0,
						width = Math.floor((w/cols)+addLeft+1),
						marginTop = '-'+Math.floor((h/rows)+addTop+1)+'px';
							break;
					case 'curtainBottomLeft':
						height = 0,
						width = Math.floor((w/cols)+addLeft+1),
						marginTop = Math.floor((h/rows)+addTop+1)+'px';
							break;
					case 'curtainBottomRight':
						height = 0,
						width = Math.floor((w/cols)+addLeft+1),
						marginTop = Math.floor((h/rows)+addTop+1)+'px';
							break;
					case 'curtainSliceLeft':
						height = 0,
						width = Math.floor((w/cols)+addLeft+1);
						if(value%2==0){
							marginTop = Math.floor((h/rows)+addTop+1)+'px';					
						} else {
							marginTop = '-'+Math.floor((h/rows)+addTop+1)+'px';					
						}
							break;
					case 'curtainSliceRight':
						height = 0,
						width = Math.floor((w/cols)+addLeft+1);
						if(value%2==0){
							marginTop = Math.floor((h/rows)+addTop+1)+'px';					
						} else {
							marginTop = '-'+Math.floor((h/rows)+addTop+1)+'px';					
						}
							break;
					case 'blindCurtainTopLeft':
						height = Math.floor((h/rows)+addTop+1),
						width = 0,
						marginLeft = '-'+Math.floor((w/cols)+addLeft+1)+'px';
							break;
					case 'blindCurtainTopRight':
						height = Math.floor((h/rows)+addTop+1),
						width = 0,
						marginLeft = Math.floor((w/cols)+addLeft+1)+'px';
							break;
					case 'blindCurtainBottomLeft':
						height = Math.floor((h/rows)+addTop+1),
						width = 0,
						marginLeft = '-'+Math.floor((w/cols)+addLeft+1)+'px';
							break;
					case 'blindCurtainBottomRight':
						height = Math.floor((h/rows)+addTop+1),
						width = 0,
						marginLeft = Math.floor((w/cols)+addLeft+1)+'px';
							break;
					case 'blindCurtainSliceBottom':
						height = Math.floor((h/rows)+addTop+1),
						width = 0;
						if(value%2==0){
							marginLeft = '-'+Math.floor((w/cols)+addLeft+1)+'px';
						} else {
							marginLeft = Math.floor((w/cols)+addLeft+1)+'px';
						}
							break;
					case 'blindCurtainSliceTop':
						height = Math.floor((h/rows)+addTop+1),
						width = 0;
						if(value%2==0){
							marginLeft = '-'+Math.floor((w/cols)+addLeft+1)+'px';
						} else {
							marginLeft = Math.floor((w/cols)+addLeft+1)+'px';
						}
							break;
					case 'stampede':
						height = 0;
						width = 0;					
						marginLeft = (w*0.2)*(((index)%cols)-(cols-(Math.floor(cols/2))))+'px';					
						marginTop = (h*0.2)*((Math.floor(index/cols)+1)-(rows-(Math.floor(rows/2))))+'px';	
							break;
					case 'mosaic':
						height = 0;
						width = 0;					
							break;
					case 'mosaicReverse':
						height = 0;
						width = 0;					
						marginLeft = Math.floor((w/cols)+addLeft+1)+'px';					
						marginTop = Math.floor((h/rows)+addTop+1)+'px';					
							break;
					case 'mosaicRandom':
						height = 0;
						width = 0;					
						marginLeft = Math.floor((w/cols)+addLeft+1)*0.5+'px';					
						marginTop = Math.floor((h/rows)+addTop+1)*0.5+'px';					
							break;
					case 'mosaicSpiral':
						height = 0;
						width = 0;
						marginLeft = Math.floor((w/cols)+addLeft+1)*0.5+'px';					
						marginTop = Math.floor((h/rows)+addTop+1)*0.5+'px';					
							break;
					case 'mosaicSpiralReverse':
						height = 0;
						width = 0;
						marginLeft = Math.floor((w/cols)+addLeft+1)*0.5+'px';					
						marginTop = Math.floor((h/rows)+addTop+1)*0.5+'px';					
							break;
					case 'topLeftBottomRight':
						height = 0;
						width = 0;					
							break;
					case 'bottomRightTopLeft':
						height = 0;
						width = 0;					
						marginLeft = Math.floor((w/cols)+addLeft+1)+'px';					
						marginTop = Math.floor((h/rows)+addTop+1)+'px';					
							break;
					case 'bottomLeftTopRight':
						height = 0;
						width = 0;					
						marginLeft = 0;					
						marginTop = Math.floor((h/rows)+addTop+1)+'px';					
							break;
					case 'topRightBottomLeft':
						height = 0;
						width = 0;					
						marginLeft = Math.floor((w/cols)+addLeft+1)+'px';					
						marginTop = 0;					
							break;
					case 'scrollRight':
						height = h;
						width = w;
						marginLeft = -w;					
							break;
					case 'scrollLeft':
						height = h;
						width = w;
						marginLeft = w;					
							break;
					case 'scrollTop':
						height = h;
						width = w;
						marginTop = h;					
							break;
					case 'scrollBottom':
						height = h;
						width = w;
						marginTop = -h;					
							break;
					case 'scrollHorz':
						height = h;
						width = w;
						if(vis==0 && slideI==amountSlide-1) {
							marginLeft = -w;	
						} else if(vis<slideI  || (vis==amountSlide-1 && slideI==0)) {
							marginLeft = w;	
						} else {
							marginLeft = -w;	
						}
							break;
					}
					
			
				var tApp = $('.cameraappended:eq('+value+')',target);
								
				if(typeof u !== 'undefined'){
					clearInterval(u);
					clearTimeout(setT);
					setT = setTimeout(canvasLoader,transPeriod+difference);
				}
				
				
				if($(pagination).length){
					$('.camera_pag li',wrap).removeClass('cameracurrent');
					$('.camera_pag li',wrap).eq(slideI).addClass('cameracurrent');
				}
						
				if($(thumbs).length){
					$('li', thumbs).removeClass('cameracurrent');
					$('li', thumbs).eq(slideI).addClass('cameracurrent');
					$('li', thumbs).not('.cameracurrent').find('img').animate({opacity:.5},0);
					$('li.cameracurrent img', thumbs).animate({opacity:1},0);
					$('li', thumbs).hover(function(){
						$('img',this).stop(true,false).animate({opacity:1},150);
					},function(){
						if(!$(this).hasClass('cameracurrent')){
							$('img',this).stop(true,false).animate({opacity:.5},150);
						}
					});
				}
								
						
				var easedTime = parseFloat(transPeriod)+parseFloat(difference);
				
				function cameraeased() {

					$(this).addClass('cameraeased');
					if($('.cameraeased',target).length>=0){
						$(thumbs).css({visibility:'visible'});
					}
					if($('.cameraeased',target).length==blocks){
						
						thumbnailPos();
						
						$('.moveFromLeft, .moveFromRight, .moveFromTop, .moveFromBottom, .fadeIn, .fadeFromLeft, .fadeFromRight, .fadeFromTop, .fadeFromBottom',fakeHover).each(function(){
							$(this).css('visibility','hidden');
						});
		
						selector.eq(slideI).show().css('z-index','999').removeClass('cameranext').addClass('cameracurrent');
						selector.eq(vis).css('z-index','1').removeClass('cameracurrent');
						$('.cameraContent',fakeHover).eq(slideI).addClass('cameracurrent');
						if (vis >= 0) {
							$('.cameraContent',fakeHover).eq(vis).removeClass('cameracurrent');
						}
						
						opts.onEndTransition.call(this);
						
						if($('> div', elem).eq(slideI).attr('data-video')!='hide' && $('.cameraContent.cameracurrent .imgFake',fakeHover).length ){
							$('.cameraContent.cameracurrent .imgFake',fakeHover).click();
						}

						
						var lMoveIn = selector.eq(slideI).find('.fadeIn').length;
						var lMoveInContent = $('.cameraContent',fakeHover).eq(slideI).find('.moveFromLeft, .moveFromRight, .moveFromTop, .moveFromBottom, .fadeIn, .fadeFromLeft, .fadeFromRight, .fadeFromTop, .fadeFromBottom').length;
						
						if (lMoveIn!=0){
							$('.cameraSlide.cameracurrent .fadeIn',fakeHover).each(function(){
								if($(this).attr('data-easing')!=''){
									var easeMove = $(this).attr('data-easing');
								} else {
									var easeMove = easing;
								}
								var t = $(this);
								if(typeof t.attr('data-outerWidth') === 'undefined' || t.attr('data-outerWidth') === false || t.attr('data-outerWidth') === '') {
									var wMoveIn = t.outerWidth();
									t.attr('data-outerWidth',wMoveIn);
								} else {
									var wMoveIn = t.attr('data-outerWidth');
								}
								if(typeof t.attr('data-outerHeight') === 'undefined' || t.attr('data-outerHeight') === false || t.attr('data-outerHeight') === '') {
									var hMoveIn = t.outerHeight();
									t.attr('data-outerHeight',hMoveIn);
								} else {
									var hMoveIn = t.attr('data-outerHeight');
								}
								//t.css('width',wMoveIn);
								var pos = t.position();
								var left = pos.left;
								var top = pos.top;
								var tClass = t.attr('class');
								var ind = t.index();
								var hRel = t.parents('.camerarelative').outerHeight();
								var wRel = t.parents('.camerarelative').outerWidth();
								if(tClass.indexOf("fadeIn") != -1) {
									t.animate({opacity:0},0).css('visibility','visible').delay((time/lMoveIn)*(0.1*(ind-1))).animate({opacity:1},(time/lMoveIn)*0.15,easeMove);
								} else {
									t.css('visibility','visible');
								}
							});
						}

						$('.cameraContent.cameracurrent',fakeHover).show();
						if (lMoveInContent!=0){
							
							$('.cameraContent.cameracurrent .moveFromLeft, .cameraContent.cameracurrent .moveFromRight, .cameraContent.cameracurrent .moveFromTop, .cameraContent.cameracurrent .moveFromBottom, .cameraContent.cameracurrent .fadeIn, .cameraContent.cameracurrent .fadeFromLeft, .cameraContent.cameracurrent .fadeFromRight, .cameraContent.cameracurrent .fadeFromTop, .cameraContent.cameracurrent .fadeFromBottom',fakeHover).each(function(){
								if($(this).attr('data-easing')!=''){
									var easeMove = $(this).attr('data-easing');
								} else {
									var easeMove = easing;
								}
								var t = $(this);
								var pos = t.position();
								var left = pos.left;
								var top = pos.top;
								var tClass = t.attr('class');
								var ind = t.index();
								var thisH = t.outerHeight();
								if(tClass.indexOf("moveFromLeft") != -1) {
									t.css({'left':'-'+(w)+'px','right':'auto'});
									t.css('visibility','visible').delay((time/lMoveInContent)*(0.1*(ind-1))).animate({'left':pos.left},(time/lMoveInContent)*0.15,easeMove);
								} else if(tClass.indexOf("moveFromRight") != -1) {
									t.css({'left':w+'px','right':'auto'});
									t.css('visibility','visible').delay((time/lMoveInContent)*(0.1*(ind-1))).animate({'left':pos.left},(time/lMoveInContent)*0.15,easeMove);
								} else if(tClass.indexOf("moveFromTop") != -1) {
									t.css({'top':'-'+h+'px','bottom':'auto'});
									t.css('visibility','visible').delay((time/lMoveInContent)*(0.1*(ind-1))).animate({'top':pos.top},(time/lMoveInContent)*0.15,easeMove,function(){
										t.css({top:'auto',bottom:0});
									});
								} else if(tClass.indexOf("moveFromBottom") != -1) {
									t.css({'top':h+'px','bottom':'auto'});
									t.css('visibility','visible').delay((time/lMoveInContent)*(0.1*(ind-1))).animate({'top':pos.top},(time/lMoveInContent)*0.15,easeMove);
								} else if(tClass.indexOf("fadeFromLeft") != -1) {
									t.animate({opacity:0},0).css({'left':'-'+(w)+'px','right':'auto'});
									t.css('visibility','visible').delay((time/lMoveInContent)*(0.1*(ind-1))).animate({'left':pos.left,opacity:1},(time/lMoveInContent)*0.15,easeMove);
								} else if(tClass.indexOf("fadeFromRight") != -1) {
									t.animate({opacity:0},0).css({'left':(w)+'px','right':'auto'});
									t.css('visibility','visible').delay((time/lMoveInContent)*(0.1*(ind-1))).animate({'left':pos.left,opacity:1},(time/lMoveInContent)*0.15,easeMove);
								} else if(tClass.indexOf("fadeFromTop") != -1) {
									t.animate({opacity:0},0).css({'top':'-'+(h)+'px','bottom':'auto'});
									t.css('visibility','visible').delay((time/lMoveInContent)*(0.1*(ind-1))).animate({'top':pos.top,opacity:1},(time/lMoveInContent)*0.15,easeMove,function(){
										t.css({top:'auto',bottom:0});
									});
								} else if(tClass.indexOf("fadeFromBottom") != -1) {
									t.animate({opacity:0},0).css({'bottom':'-'+thisH+'px'});
									t.css('visibility','visible').delay((time/lMoveInContent)*(0.1*(ind-1))).animate({'bottom':'0',opacity:1},(time/lMoveInContent)*0.15,easeMove);
								} else if(tClass.indexOf("fadeIn") != -1) {
									t.animate({opacity:0},0).css('visibility','visible').delay((time/lMoveInContent)*(0.1*(ind-1))).animate({opacity:1},(time/lMoveInContent)*0.15,easeMove);
								} else {
									t.css('visibility','visible');
								}
							});
						}

						
						$('.cameraappended',target).remove();
						elem.removeClass('camerasliding');	
							selector.eq(vis).hide();
							var barWidth = $('.camera_bar_cont',camera_thumbs_wrap).width(),
								barHeight = $('.camera_bar_cont',camera_thumbs_wrap).height(),
								radSum;
							if (loader != 'pie') {
								radSum = 0.05;
							} else {
								radSum = 0.005;
							}
							$('#'+pieID).animate({opacity:opts.loaderOpacity},200);
							u = setInterval(
								function(){
									if(elem.hasClass('stopped')){
										clearInterval(u);
									}
									if (loader != 'pie') {
										if(rad<=1.002 && !elem.hasClass('stopped') && !elem.hasClass('paused') && !elem.hasClass('hovered')){
											rad = (rad+radSum);
										} else if (rad<=1 && (elem.hasClass('stopped') || elem.hasClass('paused') || elem.hasClass('stopped') || elem.hasClass('hovered'))){
											rad = rad;
										} else {
											if(!elem.hasClass('stopped') && !elem.hasClass('paused') && !elem.hasClass('hovered')) {
												clearInterval(u);
												imgFake();
												$('#'+pieID).animate({opacity:0},200,function(){
													clearTimeout(setT);
													setT = setTimeout(canvasLoader,easedTime);
													nextSlide();
													opts.onStartLoading.call(this);
												});
											}
										}
										switch(barDirection){
											case 'leftToRight':
												$('#'+pieID).animate({'right':barWidth-(barWidth*rad)},(time*radSum),'linear');
												break;
											case 'rightToLeft':
												$('#'+pieID).animate({'left':barWidth-(barWidth*rad)},(time*radSum),'linear');
												break;
											case 'topToBottom':
												$('#'+pieID).animate({'bottom':barHeight-(barHeight*rad)},(time*radSum),'linear');
												break;
											case 'bottomToTop':
												$('#'+pieID).animate({'bottom':barHeight-(barHeight*rad)},(time*radSum),'linear');
												break;
										}
										
									} else {
										radNew = rad;
										ctx.clearRect(0,0,opts.pieDiameter,opts.pieDiameter);
										ctx.globalCompositeOperation = 'destination-over';
										ctx.beginPath();
										ctx.arc((opts.pieDiameter)/2, (opts.pieDiameter)/2, (opts.pieDiameter)/2-opts.loaderStroke,0,Math.PI*2,false);
										ctx.lineWidth = opts.loaderStroke;
										ctx.strokeStyle = opts.loaderBgColor;
										ctx.stroke();
										ctx.closePath();
										ctx.globalCompositeOperation = 'source-over';
										ctx.beginPath();
										ctx.arc((opts.pieDiameter)/2, (opts.pieDiameter)/2, (opts.pieDiameter)/2-opts.loaderStroke,0,Math.PI*2*radNew,false);
										ctx.lineWidth = opts.loaderStroke-(opts.loaderPadding*2);
										ctx.strokeStyle = opts.loaderColor;
										ctx.stroke();
										ctx.closePath();
												
										if(rad<=1.002 && !elem.hasClass('stopped') && !elem.hasClass('paused') && !elem.hasClass('hovered')){
											rad = (rad+radSum);
										} else if (rad<=1 && (elem.hasClass('stopped') || elem.hasClass('paused') || elem.hasClass('hovered'))){
											rad = rad;
										} else {
											if(!elem.hasClass('stopped') && !elem.hasClass('paused') && !elem.hasClass('hovered')) {
												clearInterval(u);
												imgFake();
												$('#'+pieID+', .camera_canvas_wrap',camera_thumbs_wrap).animate({opacity:0},200,function(){
													clearTimeout(setT);
													setT = setTimeout(canvasLoader,easedTime);
													nextSlide();
													opts.onStartLoading.call(this);
												});
											}
										}
									}
								},time*radSum
							);
						}

				}


				
				if(fx=='scrollLeft' || fx=='scrollRight' || fx=='scrollTop' || fx=='scrollBottom' || fx=='scrollHorz'){
					opts.onStartTransition.call(this);
					easedTime = 0;
					tApp.delay((((transPeriod+difference)/blocks)*delay[index]*couples)*0.5).css({
							'display' : 'block',
							'height': height,
							'margin-left': marginLeft,
							'margin-top': marginTop,
							'width': width
						}).animate({
							'height': Math.floor((h/rows)+addTop+1),
							'margin-top' : 0,
							'margin-left' : 0,
							'width' : Math.floor((w/cols)+addLeft+1)
						},(transPeriod-difference),easing,cameraeased);
					selector.eq(vis).delay((((transPeriod+difference)/blocks)*delay[index]*couples)*0.5).animate({
							'margin-left': marginLeft*(-1),
							'margin-top': marginTop*(-1)
						},(transPeriod-difference),easing,function(){
							$(this).css({'margin-top' : 0,'margin-left' : 0});
						});
				} else {
					opts.onStartTransition.call(this);
					easedTime = parseFloat(transPeriod)+parseFloat(difference);
					if(slideOn=='next'){
						tApp.delay((((transPeriod+difference)/blocks)*delay[index]*couples)*0.5).css({
								'display' : 'block',
								'height': height,
								'margin-left': marginLeft,
								'margin-top': marginTop,
								'width': width,
								'opacity' : opacityOnGrid
							}).animate({
								'height': Math.floor((h/rows)+addTop+1),
								'margin-top' : 0,
								'margin-left' : 0,
								'opacity' : 1,
								'width' : Math.floor((w/cols)+addLeft+1)
							},(transPeriod-difference),easing,cameraeased);
					} else {
						selector.eq(slideI).show().css('z-index','999').addClass('cameracurrent');
						selector.eq(vis).css('z-index','1').removeClass('cameracurrent');
						$('.cameraContent',fakeHover).eq(slideI).addClass('cameracurrent');
						$('.cameraContent',fakeHover).eq(vis).removeClass('cameracurrent');
						tApp.delay((((transPeriod+difference)/blocks)*delay[index]*couples)*0.5).css({
								'display' : 'block',
								'height': Math.floor((h/rows)+addTop+1),
								'margin-top' : 0,
								'margin-left' : 0,
								'opacity' : 1,
								'width' : Math.floor((w/cols)+addLeft+1)
							}).animate({
								'height': height,
								'margin-left': marginLeft,
								'margin-top': marginTop,
								'width': width,
								'opacity' : opacityOnGrid
							},(transPeriod-difference),easing,cameraeased);
					}
				}





			});
				
				
				
	 
		}
	}


				if($(prevNav).length){
					$(prevNav).click(function(){
						if(!elem.hasClass('camerasliding')){
							var idNum = parseFloat($('.cameraSlide.cameracurrent',target).index());
							clearInterval(u);
							imgFake();
							$('#'+pieID+', .camera_canvas_wrap',wrap).animate({opacity:0},0);
							canvasLoader();
							if(idNum!=0){
								nextSlide(idNum);
							} else {
								nextSlide(amountSlide);
						   }
						   opts.onStartLoading.call(this);
						}
					});
				}
			
				if($(nextNav).length){
					$(nextNav).click(function(){
						if(!elem.hasClass('camerasliding')){
							var idNum = parseFloat($('.cameraSlide.cameracurrent',target).index()); 
							clearInterval(u);
							imgFake();
							$('#'+pieID+', .camera_canvas_wrap',camera_thumbs_wrap).animate({opacity:0},0);
							canvasLoader();
							if(idNum==amountSlide-1){
								nextSlide(1);
							} else {
								nextSlide(idNum+2);
						   }
						   opts.onStartLoading.call(this);
						}
					});
				}


				if(isMobile()){
					fakeHover.bind('swipeleft',function(event){
						if(!elem.hasClass('camerasliding')){
							var idNum = parseFloat($('.cameraSlide.cameracurrent',target).index()); 
							clearInterval(u);
							imgFake();
							$('#'+pieID+', .camera_canvas_wrap',camera_thumbs_wrap).animate({opacity:0},0);
							canvasLoader();
							if(idNum==amountSlide-1){
								nextSlide(1);
							} else {
								nextSlide(idNum+2);
						   }
						   opts.onStartLoading.call(this);
						}
					});
					fakeHover.bind('swiperight',function(event){
						if(!elem.hasClass('camerasliding')){
							var idNum = parseFloat($('.cameraSlide.cameracurrent',target).index());
							clearInterval(u);
							imgFake();
							$('#'+pieID+', .camera_canvas_wrap',camera_thumbs_wrap).animate({opacity:0},0);
							canvasLoader();
							if(idNum!=0){
								nextSlide(idNum);
							} else {
								nextSlide(amountSlide);
						   }
						   opts.onStartLoading.call(this);
						}
					});
				}

				if($(pagination).length){
					$('.camera_pag li',wrap).click(function(){
						if(!elem.hasClass('camerasliding')){
							var idNum = parseFloat($(this).index());
							var curNum = parseFloat($('.cameraSlide.cameracurrent',target).index());
							if(idNum!=curNum) {
								clearInterval(u);
								imgFake();
								$('#'+pieID+', .camera_canvas_wrap',camera_thumbs_wrap).animate({opacity:0},0);
								canvasLoader();
								nextSlide(idNum+1);
								opts.onStartLoading.call(this);
							}
						}
					});
				}

				if($(thumbs).length) {

					$('.pix_thumb img',thumbs).click(function(){
						if(!elem.hasClass('camerasliding')){
							var idNum = parseFloat($(this).parents('li').index());
							var curNum = parseFloat($('.cameracurrent',target).index());
							if(idNum!=curNum) {
								clearInterval(u);
								imgFake();
								$('#'+pieID+', .camera_canvas_wrap',camera_thumbs_wrap).animate({opacity:0},0);
								$('.pix_thumb',thumbs).removeClass('cameracurrent');
								$(this).parents('li').addClass('cameracurrent');
								canvasLoader();
								nextSlide(idNum+1);
								thumbnailPos();
								opts.onStartLoading.call(this);
							}
						}
					});

					$('.camera_thumbs_cont .camera_prevThumbs',camera_thumbs_wrap).hover(function(){
						$(this).stop(true,false).animate({opacity:1},250);
					},function(){
						$(this).stop(true,false).animate({opacity:.7},250);
					});
					$('.camera_prevThumbs',camera_thumbs_wrap).click(function(){
						var sum = 0,
							wTh = $(thumbs).outerWidth(),
							offUl = $('ul', thumbs).offset().left,
							offDiv = $('> div', thumbs).offset().left,
							ulLeft = offDiv-offUl;
							$('.camera_visThumb',thumbs).each(function(){
								var tW = $(this).outerWidth();
								sum = sum+tW;
							});
							if(ulLeft-sum>0){
								$('ul', thumbs).animate({'margin-left':'-'+(ulLeft-sum)+'px'},500,thumbnailVisible);
							} else {
								$('ul', thumbs).animate({'margin-left':0},500,thumbnailVisible);
							}
					});

					$('.camera_thumbs_cont .camera_nextThumbs',camera_thumbs_wrap).hover(function(){
						$(this).stop(true,false).animate({opacity:1},250);
					},function(){
						$(this).stop(true,false).animate({opacity:.7},250);
					});
					$('.camera_nextThumbs',camera_thumbs_wrap).click(function(){
						var sum = 0,
							wTh = $(thumbs).outerWidth(),
							ulW = $('ul', thumbs).outerWidth(),
							offUl = $('ul', thumbs).offset().left,
							offDiv = $('> div', thumbs).offset().left,
							ulLeft = offDiv-offUl;
							$('.camera_visThumb',thumbs).each(function(){
								var tW = $(this).outerWidth();
								sum = sum+tW;
							});
							if(ulLeft+sum+sum<ulW){
								$('ul', thumbs).animate({'margin-left':'-'+(ulLeft+sum)+'px'},500,thumbnailVisible);
							} else {
								$('ul', thumbs).animate({'margin-left':'-'+(ulW-wTh)+'px'},500,thumbnailVisible);
							}
					});

				}
		
		
	
}

})(jQuery);

;(function($){$.fn.cameraStop = function() {
	var wrap = $(this),
		elem = $('.camera_src',wrap),
		pieID = 'pie_'+wrap.index();
	elem.addClass('stopped');
	if($('.camera_showcommands').length) {
		var camera_thumbs_wrap = $('.camera_thumbs_wrap',wrap);
	} else {
		var camera_thumbs_wrap = wrap;
	}
}
})(jQuery);

;(function($){$.fn.cameraPause = function() {
	var wrap = $(this);
	var elem = $('.camera_src',wrap);
	elem.addClass('paused');
}
})(jQuery);

;(function($){$.fn.cameraResume = function() {
	var wrap = $(this);
	var elem = $('.camera_src',wrap);
	if(typeof autoAdv === 'undefined' || autoAdv!==true){
		elem.removeClass('paused');
	}
}
})(jQuery);
/*! device.js 0.1.61 */

(function(){var a,b,c,d,e,f,g,h,i,j;a=window.device,window.device={},c=window.document.documentElement,j=window.navigator.userAgent.toLowerCase(),device.ios=function(){return device.iphone()||device.ipod()||device.ipad()},device.iphone=function(){return d("iphone")},device.ipod=function(){return d("ipod")},device.ipad=function(){return d("ipad")},device.android=function(){return d("android")},device.androidPhone=function(){return device.android()&&d("mobile")},device.androidTablet=function(){return device.android()&&!d("mobile")},device.blackberry=function(){return d("blackberry")||d("bb10")||d("rim")},device.blackberryPhone=function(){return device.blackberry()&&!d("tablet")},device.blackberryTablet=function(){return device.blackberry()&&d("tablet")},device.windows=function(){return d("windows")},device.windowsPhone=function(){return device.windows()&&d("phone")},device.windowsTablet=function(){return device.windows()&&d("touch")&&!device.windowsPhone()},device.fxos=function(){return(d("(mobile;")||d("(tablet;"))&&d("; rv:")},device.fxosPhone=function(){return device.fxos()&&d("mobile")},device.fxosTablet=function(){return device.fxos()&&d("tablet")},device.meego=function(){return d("meego")},device.cordova=function(){return window.cordova&&"file:"===location.protocol},device.nodeWebkit=function(){return"object"==typeof window.process},device.mobile=function(){return device.androidPhone()||device.iphone()||device.ipod()||device.windowsPhone()||device.blackberryPhone()||device.fxosPhone()||device.meego()},device.tablet=function(){return device.ipad()||device.androidTablet()||device.blackberryTablet()||device.windowsTablet()||device.fxosTablet()},device.desktop=function(){return!device.tablet()&&!device.mobile()},device.portrait=function(){return window.innerHeight/window.innerWidth>1},device.landscape=function(){return window.innerHeight/window.innerWidth<1},device.noConflict=function(){return window.device=a,this},d=function(a){return-1!==j.indexOf(a)},f=function(a){var b;return b=new RegExp(a,"i"),c.className.match(b)},b=function(a){return f(a)?void 0:c.className+=" "+a},h=function(a){return f(a)?c.className=c.className.replace(a,""):void 0},device.ios()?device.ipad()?b("ios ipad tablet"):device.iphone()?b("ios iphone mobile"):device.ipod()&&b("ios ipod mobile"):b(device.android()?device.androidTablet()?"android tablet":"android mobile":device.blackberry()?device.blackberryTablet()?"blackberry tablet":"blackberry mobile":device.windows()?device.windowsTablet()?"windows tablet":device.windowsPhone()?"windows mobile":"desktop":device.fxos()?device.fxosTablet()?"fxos tablet":"fxos mobile":device.meego()?"meego mobile":device.nodeWebkit()?"node-webkit":"desktop"),device.cordova()&&b("cordova"),e=function(){return device.landscape()?(h("portrait"),b("landscape")):(h("landscape"),b("portrait"))},i="onorientationchange"in window,g=i?"orientationchange":"resize",window.addEventListener?window.addEventListener(g,e,!1):window.attachEvent?window.attachEvent(g,e):window[g]=e,e()}).call(this);
/*
 HTML5 Shiv v3.6.2pre | @afarkas @jdalton @jon_neal @rem | MIT/GPL2 Licensed
*/

(function(l,f){function m(){var a=e.elements;return"string"==typeof a?a.split(" "):a}function i(a){var b=n[a[o]];b||(b={},h++,a[o]=h,n[h]=b);return b}function p(a,b,c){b||(b=f);if(g)return b.createElement(a);c||(c=i(b));b=c.cache[a]?c.cache[a].cloneNode():r.test(a)?(c.cache[a]=c.createElem(a)).cloneNode():c.createElem(a);return b.canHaveChildren&&!s.test(a)?c.frag.appendChild(b):b}function t(a,b){if(!b.cache)b.cache={},b.createElem=a.createElement,b.createFrag=a.createDocumentFragment,b.frag=b.createFrag();
a.createElement=function(c){return!e.shivMethods?b.createElem(c):p(c,a,b)};a.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+m().join().replace(/\w+/g,function(a){b.createElem(a);b.frag.createElement(a);return'c("'+a+'")'})+");return n}")(e,b.frag)}function q(a){a||(a=f);var b=i(a);if(e.shivCSS&&!j&&!b.hasCSS){var c,d=a;c=d.createElement("p");d=d.getElementsByTagName("head")[0]||d.documentElement;c.innerHTML="x<style>article,aside,figcaption,figure,footer,header,hgroup,nav,section{display:block}mark{background:#FF0;color:#000}</style>";
c=d.insertBefore(c.lastChild,d.firstChild);b.hasCSS=!!c}g||t(a,b);return a}var k=l.html5||{},s=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,r=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,j,o="_html5shiv",h=0,n={},g;(function(){try{var a=f.createElement("a");a.innerHTML="<xyz></xyz>";j="hidden"in a;var b;if(!(b=1==a.childNodes.length)){f.createElement("a");var c=f.createDocumentFragment();b="undefined"==typeof c.cloneNode||
"undefined"==typeof c.createDocumentFragment||"undefined"==typeof c.createElement}g=b}catch(d){g=j=!0}})();var e={elements:k.elements||"abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video",version:"3.6.2pre",shivCSS:!1!==k.shivCSS,supportsUnknownElements:g,shivMethods:!1!==k.shivMethods,type:"default",shivDocument:q,createElement:p,createDocumentFragment:function(a,b){a||(a=f);if(g)return a.createDocumentFragment();
for(var b=b||i(a),c=b.frag.cloneNode(),d=0,e=m(),h=e.length;d<h;d++)c.createElement(e[d]);return c}};l.html5=e;q(f)})(this,document);
/*!
 * Isotope PACKAGED v2.0.1
 * Filter & sort magical layouts
 * http://isotope.metafizzy.co
 */


(function(t){function e(){}function i(t){function i(e){e.prototype.option||(e.prototype.option=function(e){t.isPlainObject(e)&&(this.options=t.extend(!0,this.options,e))})}function n(e,i){t.fn[e]=function(n){if("string"==typeof n){for(var s=o.call(arguments,1),a=0,u=this.length;u>a;a++){var p=this[a],h=t.data(p,e);if(h)if(t.isFunction(h[n])&&"_"!==n.charAt(0)){var f=h[n].apply(h,s);if(void 0!==f)return f}else r("no such method '"+n+"' for "+e+" instance");else r("cannot call methods on "+e+" prior to initialization; "+"attempted to call '"+n+"'")}return this}return this.each(function(){var o=t.data(this,e);o?(o.option(n),o._init()):(o=new i(this,n),t.data(this,e,o))})}}if(t){var r="undefined"==typeof console?e:function(t){console.error(t)};return t.bridget=function(t,e){i(e),n(t,e)},t.bridget}}var o=Array.prototype.slice;"function"==typeof define&&define.amd?define("jquery-bridget/jquery.bridget",["jquery"],i):i(t.jQuery)})(window),function(t){function e(e){var i=t.event;return i.target=i.target||i.srcElement||e,i}var i=document.documentElement,o=function(){};i.addEventListener?o=function(t,e,i){t.addEventListener(e,i,!1)}:i.attachEvent&&(o=function(t,i,o){t[i+o]=o.handleEvent?function(){var i=e(t);o.handleEvent.call(o,i)}:function(){var i=e(t);o.call(t,i)},t.attachEvent("on"+i,t[i+o])});var n=function(){};i.removeEventListener?n=function(t,e,i){t.removeEventListener(e,i,!1)}:i.detachEvent&&(n=function(t,e,i){t.detachEvent("on"+e,t[e+i]);try{delete t[e+i]}catch(o){t[e+i]=void 0}});var r={bind:o,unbind:n};"function"==typeof define&&define.amd?define("eventie/eventie",r):"object"==typeof exports?module.exports=r:t.eventie=r}(this),function(t){function e(t){"function"==typeof t&&(e.isReady?t():r.push(t))}function i(t){var i="readystatechange"===t.type&&"complete"!==n.readyState;if(!e.isReady&&!i){e.isReady=!0;for(var o=0,s=r.length;s>o;o++){var a=r[o];a()}}}function o(o){return o.bind(n,"DOMContentLoaded",i),o.bind(n,"readystatechange",i),o.bind(t,"load",i),e}var n=t.document,r=[];e.isReady=!1,"function"==typeof define&&define.amd?(e.isReady="function"==typeof requirejs,define("doc-ready/doc-ready",["eventie/eventie"],o)):t.docReady=o(t.eventie)}(this),function(){function t(){}function e(t,e){for(var i=t.length;i--;)if(t[i].listener===e)return i;return-1}function i(t){return function(){return this[t].apply(this,arguments)}}var o=t.prototype,n=this,r=n.EventEmitter;o.getListeners=function(t){var e,i,o=this._getEvents();if(t instanceof RegExp){e={};for(i in o)o.hasOwnProperty(i)&&t.test(i)&&(e[i]=o[i])}else e=o[t]||(o[t]=[]);return e},o.flattenListeners=function(t){var e,i=[];for(e=0;t.length>e;e+=1)i.push(t[e].listener);return i},o.getListenersAsObject=function(t){var e,i=this.getListeners(t);return i instanceof Array&&(e={},e[t]=i),e||i},o.addListener=function(t,i){var o,n=this.getListenersAsObject(t),r="object"==typeof i;for(o in n)n.hasOwnProperty(o)&&-1===e(n[o],i)&&n[o].push(r?i:{listener:i,once:!1});return this},o.on=i("addListener"),o.addOnceListener=function(t,e){return this.addListener(t,{listener:e,once:!0})},o.once=i("addOnceListener"),o.defineEvent=function(t){return this.getListeners(t),this},o.defineEvents=function(t){for(var e=0;t.length>e;e+=1)this.defineEvent(t[e]);return this},o.removeListener=function(t,i){var o,n,r=this.getListenersAsObject(t);for(n in r)r.hasOwnProperty(n)&&(o=e(r[n],i),-1!==o&&r[n].splice(o,1));return this},o.off=i("removeListener"),o.addListeners=function(t,e){return this.manipulateListeners(!1,t,e)},o.removeListeners=function(t,e){return this.manipulateListeners(!0,t,e)},o.manipulateListeners=function(t,e,i){var o,n,r=t?this.removeListener:this.addListener,s=t?this.removeListeners:this.addListeners;if("object"!=typeof e||e instanceof RegExp)for(o=i.length;o--;)r.call(this,e,i[o]);else for(o in e)e.hasOwnProperty(o)&&(n=e[o])&&("function"==typeof n?r.call(this,o,n):s.call(this,o,n));return this},o.removeEvent=function(t){var e,i=typeof t,o=this._getEvents();if("string"===i)delete o[t];else if(t instanceof RegExp)for(e in o)o.hasOwnProperty(e)&&t.test(e)&&delete o[e];else delete this._events;return this},o.removeAllListeners=i("removeEvent"),o.emitEvent=function(t,e){var i,o,n,r,s=this.getListenersAsObject(t);for(n in s)if(s.hasOwnProperty(n))for(o=s[n].length;o--;)i=s[n][o],i.once===!0&&this.removeListener(t,i.listener),r=i.listener.apply(this,e||[]),r===this._getOnceReturnValue()&&this.removeListener(t,i.listener);return this},o.trigger=i("emitEvent"),o.emit=function(t){var e=Array.prototype.slice.call(arguments,1);return this.emitEvent(t,e)},o.setOnceReturnValue=function(t){return this._onceReturnValue=t,this},o._getOnceReturnValue=function(){return this.hasOwnProperty("_onceReturnValue")?this._onceReturnValue:!0},o._getEvents=function(){return this._events||(this._events={})},t.noConflict=function(){return n.EventEmitter=r,t},"function"==typeof define&&define.amd?define("eventEmitter/EventEmitter",[],function(){return t}):"object"==typeof module&&module.exports?module.exports=t:this.EventEmitter=t}.call(this),function(t){function e(t){if(t){if("string"==typeof o[t])return t;t=t.charAt(0).toUpperCase()+t.slice(1);for(var e,n=0,r=i.length;r>n;n++)if(e=i[n]+t,"string"==typeof o[e])return e}}var i="Webkit Moz ms Ms O".split(" "),o=document.documentElement.style;"function"==typeof define&&define.amd?define("get-style-property/get-style-property",[],function(){return e}):"object"==typeof exports?module.exports=e:t.getStyleProperty=e}(window),function(t){function e(t){var e=parseFloat(t),i=-1===t.indexOf("%")&&!isNaN(e);return i&&e}function i(){for(var t={width:0,height:0,innerWidth:0,innerHeight:0,outerWidth:0,outerHeight:0},e=0,i=s.length;i>e;e++){var o=s[e];t[o]=0}return t}function o(t){function o(t){if("string"==typeof t&&(t=document.querySelector(t)),t&&"object"==typeof t&&t.nodeType){var o=r(t);if("none"===o.display)return i();var n={};n.width=t.offsetWidth,n.height=t.offsetHeight;for(var h=n.isBorderBox=!(!p||!o[p]||"border-box"!==o[p]),f=0,d=s.length;d>f;f++){var l=s[f],c=o[l];c=a(t,c);var y=parseFloat(c);n[l]=isNaN(y)?0:y}var m=n.paddingLeft+n.paddingRight,g=n.paddingTop+n.paddingBottom,v=n.marginLeft+n.marginRight,_=n.marginTop+n.marginBottom,I=n.borderLeftWidth+n.borderRightWidth,L=n.borderTopWidth+n.borderBottomWidth,z=h&&u,S=e(o.width);S!==!1&&(n.width=S+(z?0:m+I));var b=e(o.height);return b!==!1&&(n.height=b+(z?0:g+L)),n.innerWidth=n.width-(m+I),n.innerHeight=n.height-(g+L),n.outerWidth=n.width+v,n.outerHeight=n.height+_,n}}function a(t,e){if(n||-1===e.indexOf("%"))return e;var i=t.style,o=i.left,r=t.runtimeStyle,s=r&&r.left;return s&&(r.left=t.currentStyle.left),i.left=e,e=i.pixelLeft,i.left=o,s&&(r.left=s),e}var u,p=t("boxSizing");return function(){if(p){var t=document.createElement("div");t.style.width="200px",t.style.padding="1px 2px 3px 4px",t.style.borderStyle="solid",t.style.borderWidth="1px 2px 3px 4px",t.style[p]="border-box";var i=document.body||document.documentElement;i.appendChild(t);var o=r(t);u=200===e(o.width),i.removeChild(t)}}(),o}var n=t.getComputedStyle,r=n?function(t){return n(t,null)}:function(t){return t.currentStyle},s=["paddingLeft","paddingRight","paddingTop","paddingBottom","marginLeft","marginRight","marginTop","marginBottom","borderLeftWidth","borderRightWidth","borderTopWidth","borderBottomWidth"];"function"==typeof define&&define.amd?define("get-size/get-size",["get-style-property/get-style-property"],o):"object"==typeof exports?module.exports=o(require("get-style-property")):t.getSize=o(t.getStyleProperty)}(window),function(t,e){function i(t,e){return t[a](e)}function o(t){if(!t.parentNode){var e=document.createDocumentFragment();e.appendChild(t)}}function n(t,e){o(t);for(var i=t.parentNode.querySelectorAll(e),n=0,r=i.length;r>n;n++)if(i[n]===t)return!0;return!1}function r(t,e){return o(t),i(t,e)}var s,a=function(){if(e.matchesSelector)return"matchesSelector";for(var t=["webkit","moz","ms","o"],i=0,o=t.length;o>i;i++){var n=t[i],r=n+"MatchesSelector";if(e[r])return r}}();if(a){var u=document.createElement("div"),p=i(u,"div");s=p?i:r}else s=n;"function"==typeof define&&define.amd?define("matches-selector/matches-selector",[],function(){return s}):window.matchesSelector=s}(this,Element.prototype),function(t){function e(t,e){for(var i in e)t[i]=e[i];return t}function i(t){for(var e in t)return!1;return e=null,!0}function o(t){return t.replace(/([A-Z])/g,function(t){return"-"+t.toLowerCase()})}function n(t,n,r){function a(t,e){t&&(this.element=t,this.layout=e,this.position={x:0,y:0},this._create())}var u=r("transition"),p=r("transform"),h=u&&p,f=!!r("perspective"),d={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"otransitionend",transition:"transitionend"}[u],l=["transform","transition","transitionDuration","transitionProperty"],c=function(){for(var t={},e=0,i=l.length;i>e;e++){var o=l[e],n=r(o);n&&n!==o&&(t[o]=n)}return t}();e(a.prototype,t.prototype),a.prototype._create=function(){this._transn={ingProperties:{},clean:{},onEnd:{}},this.css({position:"absolute"})},a.prototype.handleEvent=function(t){var e="on"+t.type;this[e]&&this[e](t)},a.prototype.getSize=function(){this.size=n(this.element)},a.prototype.css=function(t){var e=this.element.style;for(var i in t){var o=c[i]||i;e[o]=t[i]}},a.prototype.getPosition=function(){var t=s(this.element),e=this.layout.options,i=e.isOriginLeft,o=e.isOriginTop,n=parseInt(t[i?"left":"right"],10),r=parseInt(t[o?"top":"bottom"],10);n=isNaN(n)?0:n,r=isNaN(r)?0:r;var a=this.layout.size;n-=i?a.paddingLeft:a.paddingRight,r-=o?a.paddingTop:a.paddingBottom,this.position.x=n,this.position.y=r},a.prototype.layoutPosition=function(){var t=this.layout.size,e=this.layout.options,i={};e.isOriginLeft?(i.left=this.position.x+t.paddingLeft+"px",i.right=""):(i.right=this.position.x+t.paddingRight+"px",i.left=""),e.isOriginTop?(i.top=this.position.y+t.paddingTop+"px",i.bottom=""):(i.bottom=this.position.y+t.paddingBottom+"px",i.top=""),this.css(i),this.emitEvent("layout",[this])};var y=f?function(t,e){return"translate3d("+t+"px, "+e+"px, 0)"}:function(t,e){return"translate("+t+"px, "+e+"px)"};a.prototype._transitionTo=function(t,e){this.getPosition();var i=this.position.x,o=this.position.y,n=parseInt(t,10),r=parseInt(e,10),s=n===this.position.x&&r===this.position.y;if(this.setPosition(t,e),s&&!this.isTransitioning)return this.layoutPosition(),void 0;var a=t-i,u=e-o,p={},h=this.layout.options;a=h.isOriginLeft?a:-a,u=h.isOriginTop?u:-u,p.transform=y(a,u),this.transition({to:p,onTransitionEnd:{transform:this.layoutPosition},isCleaning:!0})},a.prototype.goTo=function(t,e){this.setPosition(t,e),this.layoutPosition()},a.prototype.moveTo=h?a.prototype._transitionTo:a.prototype.goTo,a.prototype.setPosition=function(t,e){this.position.x=parseInt(t,10),this.position.y=parseInt(e,10)},a.prototype._nonTransition=function(t){this.css(t.to),t.isCleaning&&this._removeStyles(t.to);for(var e in t.onTransitionEnd)t.onTransitionEnd[e].call(this)},a.prototype._transition=function(t){if(!parseFloat(this.layout.options.transitionDuration))return this._nonTransition(t),void 0;var e=this._transn;for(var i in t.onTransitionEnd)e.onEnd[i]=t.onTransitionEnd[i];for(i in t.to)e.ingProperties[i]=!0,t.isCleaning&&(e.clean[i]=!0);if(t.from){this.css(t.from);var o=this.element.offsetHeight;o=null}this.enableTransition(t.to),this.css(t.to),this.isTransitioning=!0};var m=p&&o(p)+",opacity";a.prototype.enableTransition=function(){this.isTransitioning||(this.css({transitionProperty:m,transitionDuration:this.layout.options.transitionDuration}),this.element.addEventListener(d,this,!1))},a.prototype.transition=a.prototype[u?"_transition":"_nonTransition"],a.prototype.onwebkitTransitionEnd=function(t){this.ontransitionend(t)},a.prototype.onotransitionend=function(t){this.ontransitionend(t)};var g={"-webkit-transform":"transform","-moz-transform":"transform","-o-transform":"transform"};a.prototype.ontransitionend=function(t){if(t.target===this.element){var e=this._transn,o=g[t.propertyName]||t.propertyName;if(delete e.ingProperties[o],i(e.ingProperties)&&this.disableTransition(),o in e.clean&&(this.element.style[t.propertyName]="",delete e.clean[o]),o in e.onEnd){var n=e.onEnd[o];n.call(this),delete e.onEnd[o]}this.emitEvent("transitionEnd",[this])}},a.prototype.disableTransition=function(){this.removeTransitionStyles(),this.element.removeEventListener(d,this,!1),this.isTransitioning=!1},a.prototype._removeStyles=function(t){var e={};for(var i in t)e[i]="";this.css(e)};var v={transitionProperty:"",transitionDuration:""};return a.prototype.removeTransitionStyles=function(){this.css(v)},a.prototype.removeElem=function(){this.element.parentNode.removeChild(this.element),this.emitEvent("remove",[this])},a.prototype.remove=function(){if(!u||!parseFloat(this.layout.options.transitionDuration))return this.removeElem(),void 0;var t=this;this.on("transitionEnd",function(){return t.removeElem(),!0}),this.hide()},a.prototype.reveal=function(){delete this.isHidden,this.css({display:""});var t=this.layout.options;this.transition({from:t.hiddenStyle,to:t.visibleStyle,isCleaning:!0})},a.prototype.hide=function(){this.isHidden=!0,this.css({display:""});var t=this.layout.options;this.transition({from:t.visibleStyle,to:t.hiddenStyle,isCleaning:!0,onTransitionEnd:{opacity:function(){this.isHidden&&this.css({display:"none"})}}})},a.prototype.destroy=function(){this.css({position:"",left:"",right:"",top:"",bottom:"",transition:"",transform:""})},a}var r=t.getComputedStyle,s=r?function(t){return r(t,null)}:function(t){return t.currentStyle};"function"==typeof define&&define.amd?define("outlayer/item",["eventEmitter/EventEmitter","get-size/get-size","get-style-property/get-style-property"],n):(t.Outlayer={},t.Outlayer.Item=n(t.EventEmitter,t.getSize,t.getStyleProperty))}(window),function(t){function e(t,e){for(var i in e)t[i]=e[i];return t}function i(t){return"[object Array]"===f.call(t)}function o(t){var e=[];if(i(t))e=t;else if(t&&"number"==typeof t.length)for(var o=0,n=t.length;n>o;o++)e.push(t[o]);else e.push(t);return e}function n(t,e){var i=l(e,t);-1!==i&&e.splice(i,1)}function r(t){return t.replace(/(.)([A-Z])/g,function(t,e,i){return e+"-"+i}).toLowerCase()}function s(i,s,f,l,c,y){function m(t,i){if("string"==typeof t&&(t=a.querySelector(t)),!t||!d(t))return u&&u.error("Bad "+this.constructor.namespace+" element: "+t),void 0;this.element=t,this.options=e({},this.constructor.defaults),this.option(i);var o=++g;this.element.outlayerGUID=o,v[o]=this,this._create(),this.options.isInitLayout&&this.layout()}var g=0,v={};return m.namespace="outlayer",m.Item=y,m.defaults={containerStyle:{position:"relative"},isInitLayout:!0,isOriginLeft:!0,isOriginTop:!0,isResizeBound:!0,isResizingContainer:!0,transitionDuration:"0.4s",hiddenStyle:{opacity:0,transform:"scale(0.001)"},visibleStyle:{opacity:1,transform:"scale(1)"}},e(m.prototype,f.prototype),m.prototype.option=function(t){e(this.options,t)},m.prototype._create=function(){this.reloadItems(),this.stamps=[],this.stamp(this.options.stamp),e(this.element.style,this.options.containerStyle),this.options.isResizeBound&&this.bindResize()},m.prototype.reloadItems=function(){this.items=this._itemize(this.element.children)},m.prototype._itemize=function(t){for(var e=this._filterFindItemElements(t),i=this.constructor.Item,o=[],n=0,r=e.length;r>n;n++){var s=e[n],a=new i(s,this);o.push(a)}return o},m.prototype._filterFindItemElements=function(t){t=o(t);for(var e=this.options.itemSelector,i=[],n=0,r=t.length;r>n;n++){var s=t[n];if(d(s))if(e){c(s,e)&&i.push(s);for(var a=s.querySelectorAll(e),u=0,p=a.length;p>u;u++)i.push(a[u])}else i.push(s)}return i},m.prototype.getItemElements=function(){for(var t=[],e=0,i=this.items.length;i>e;e++)t.push(this.items[e].element);return t},m.prototype.layout=function(){this._resetLayout(),this._manageStamps();var t=void 0!==this.options.isLayoutInstant?this.options.isLayoutInstant:!this._isLayoutInited;this.layoutItems(this.items,t),this._isLayoutInited=!0},m.prototype._init=m.prototype.layout,m.prototype._resetLayout=function(){this.getSize()},m.prototype.getSize=function(){this.size=l(this.element)},m.prototype._getMeasurement=function(t,e){var i,o=this.options[t];o?("string"==typeof o?i=this.element.querySelector(o):d(o)&&(i=o),this[t]=i?l(i)[e]:o):this[t]=0},m.prototype.layoutItems=function(t,e){t=this._getItemsForLayout(t),this._layoutItems(t,e),this._postLayout()},m.prototype._getItemsForLayout=function(t){for(var e=[],i=0,o=t.length;o>i;i++){var n=t[i];n.isIgnored||e.push(n)}return e},m.prototype._layoutItems=function(t,e){function i(){o.emitEvent("layoutComplete",[o,t])}var o=this;if(!t||!t.length)return i(),void 0;this._itemsOn(t,"layout",i);for(var n=[],r=0,s=t.length;s>r;r++){var a=t[r],u=this._getItemLayoutPosition(a);u.item=a,u.isInstant=e||a.isLayoutInstant,n.push(u)}this._processLayoutQueue(n)},m.prototype._getItemLayoutPosition=function(){return{x:0,y:0}},m.prototype._processLayoutQueue=function(t){for(var e=0,i=t.length;i>e;e++){var o=t[e];this._positionItem(o.item,o.x,o.y,o.isInstant)}},m.prototype._positionItem=function(t,e,i,o){o?t.goTo(e,i):t.moveTo(e,i)},m.prototype._postLayout=function(){this.resizeContainer()},m.prototype.resizeContainer=function(){if(this.options.isResizingContainer){var t=this._getContainerSize();t&&(this._setContainerMeasure(t.width,!0),this._setContainerMeasure(t.height,!1))}},m.prototype._getContainerSize=h,m.prototype._setContainerMeasure=function(t,e){if(void 0!==t){var i=this.size;i.isBorderBox&&(t+=e?i.paddingLeft+i.paddingRight+i.borderLeftWidth+i.borderRightWidth:i.paddingBottom+i.paddingTop+i.borderTopWidth+i.borderBottomWidth),t=Math.max(t,0),this.element.style[e?"width":"height"]=t+"px"}},m.prototype._itemsOn=function(t,e,i){function o(){return n++,n===r&&i.call(s),!0}for(var n=0,r=t.length,s=this,a=0,u=t.length;u>a;a++){var p=t[a];p.on(e,o)}},m.prototype.ignore=function(t){var e=this.getItem(t);e&&(e.isIgnored=!0)},m.prototype.unignore=function(t){var e=this.getItem(t);e&&delete e.isIgnored},m.prototype.stamp=function(t){if(t=this._find(t)){this.stamps=this.stamps.concat(t);for(var e=0,i=t.length;i>e;e++){var o=t[e];this.ignore(o)}}},m.prototype.unstamp=function(t){if(t=this._find(t))for(var e=0,i=t.length;i>e;e++){var o=t[e];n(o,this.stamps),this.unignore(o)}},m.prototype._find=function(t){return t?("string"==typeof t&&(t=this.element.querySelectorAll(t)),t=o(t)):void 0},m.prototype._manageStamps=function(){if(this.stamps&&this.stamps.length){this._getBoundingRect();for(var t=0,e=this.stamps.length;e>t;t++){var i=this.stamps[t];this._manageStamp(i)}}},m.prototype._getBoundingRect=function(){var t=this.element.getBoundingClientRect(),e=this.size;this._boundingRect={left:t.left+e.paddingLeft+e.borderLeftWidth,top:t.top+e.paddingTop+e.borderTopWidth,right:t.right-(e.paddingRight+e.borderRightWidth),bottom:t.bottom-(e.paddingBottom+e.borderBottomWidth)}},m.prototype._manageStamp=h,m.prototype._getElementOffset=function(t){var e=t.getBoundingClientRect(),i=this._boundingRect,o=l(t),n={left:e.left-i.left-o.marginLeft,top:e.top-i.top-o.marginTop,right:i.right-e.right-o.marginRight,bottom:i.bottom-e.bottom-o.marginBottom};return n},m.prototype.handleEvent=function(t){var e="on"+t.type;this[e]&&this[e](t)},m.prototype.bindResize=function(){this.isResizeBound||(i.bind(t,"resize",this),this.isResizeBound=!0)},m.prototype.unbindResize=function(){this.isResizeBound&&i.unbind(t,"resize",this),this.isResizeBound=!1},m.prototype.onresize=function(){function t(){e.resize(),delete e.resizeTimeout}this.resizeTimeout&&clearTimeout(this.resizeTimeout);var e=this;this.resizeTimeout=setTimeout(t,100)},m.prototype.resize=function(){this.isResizeBound&&this.needsResizeLayout()&&this.layout()},m.prototype.needsResizeLayout=function(){var t=l(this.element),e=this.size&&t;return e&&t.innerWidth!==this.size.innerWidth},m.prototype.addItems=function(t){var e=this._itemize(t);return e.length&&(this.items=this.items.concat(e)),e},m.prototype.appended=function(t){var e=this.addItems(t);e.length&&(this.layoutItems(e,!0),this.reveal(e))},m.prototype.prepended=function(t){var e=this._itemize(t);if(e.length){var i=this.items.slice(0);this.items=e.concat(i),this._resetLayout(),this._manageStamps(),this.layoutItems(e,!0),this.reveal(e),this.layoutItems(i)}},m.prototype.reveal=function(t){var e=t&&t.length;if(e)for(var i=0;e>i;i++){var o=t[i];o.reveal()}},m.prototype.hide=function(t){var e=t&&t.length;if(e)for(var i=0;e>i;i++){var o=t[i];o.hide()}},m.prototype.getItem=function(t){for(var e=0,i=this.items.length;i>e;e++){var o=this.items[e];if(o.element===t)return o}},m.prototype.getItems=function(t){if(t&&t.length){for(var e=[],i=0,o=t.length;o>i;i++){var n=t[i],r=this.getItem(n);r&&e.push(r)}return e}},m.prototype.remove=function(t){t=o(t);var e=this.getItems(t);if(e&&e.length){this._itemsOn(e,"remove",function(){this.emitEvent("removeComplete",[this,e])});for(var i=0,r=e.length;r>i;i++){var s=e[i];s.remove(),n(s,this.items)}}},m.prototype.destroy=function(){var t=this.element.style;t.height="",t.position="",t.width="";for(var e=0,i=this.items.length;i>e;e++){var o=this.items[e];o.destroy()}this.unbindResize(),delete this.element.outlayerGUID,p&&p.removeData(this.element,this.constructor.namespace)},m.data=function(t){var e=t&&t.outlayerGUID;return e&&v[e]},m.create=function(t,i){function o(){m.apply(this,arguments)}return Object.create?o.prototype=Object.create(m.prototype):e(o.prototype,m.prototype),o.prototype.constructor=o,o.defaults=e({},m.defaults),e(o.defaults,i),o.prototype.settings={},o.namespace=t,o.data=m.data,o.Item=function(){y.apply(this,arguments)},o.Item.prototype=new y,s(function(){for(var e=r(t),i=a.querySelectorAll(".js-"+e),n="data-"+e+"-options",s=0,h=i.length;h>s;s++){var f,d=i[s],l=d.getAttribute(n);try{f=l&&JSON.parse(l)}catch(c){u&&u.error("Error parsing "+n+" on "+d.nodeName.toLowerCase()+(d.id?"#"+d.id:"")+": "+c);continue}var y=new o(d,f);p&&p.data(d,t,y)}}),p&&p.bridget&&p.bridget(t,o),o},m.Item=y,m}var a=t.document,u=t.console,p=t.jQuery,h=function(){},f=Object.prototype.toString,d="object"==typeof HTMLElement?function(t){return t instanceof HTMLElement}:function(t){return t&&"object"==typeof t&&1===t.nodeType&&"string"==typeof t.nodeName},l=Array.prototype.indexOf?function(t,e){return t.indexOf(e)}:function(t,e){for(var i=0,o=t.length;o>i;i++)if(t[i]===e)return i;return-1};"function"==typeof define&&define.amd?define("outlayer/outlayer",["eventie/eventie","doc-ready/doc-ready","eventEmitter/EventEmitter","get-size/get-size","matches-selector/matches-selector","./item"],s):t.Outlayer=s(t.eventie,t.docReady,t.EventEmitter,t.getSize,t.matchesSelector,t.Outlayer.Item)}(window),function(t){function e(t){function e(){t.Item.apply(this,arguments)}e.prototype=new t.Item,e.prototype._create=function(){this.id=this.layout.itemGUID++,t.Item.prototype._create.call(this),this.sortData={}},e.prototype.updateSortData=function(){if(!this.isIgnored){this.sortData.id=this.id,this.sortData["original-order"]=this.id,this.sortData.random=Math.random();var t=this.layout.options.getSortData,e=this.layout._sorters;for(var i in t){var o=e[i];this.sortData[i]=o(this.element,this)}}};var i=e.prototype.destroy;return e.prototype.destroy=function(){i.apply(this,arguments),this.css({display:""})},e}"function"==typeof define&&define.amd?define("isotope/js/item",["outlayer/outlayer"],e):(t.Isotope=t.Isotope||{},t.Isotope.Item=e(t.Outlayer))}(window),function(t){function e(t,e){function i(t){this.isotope=t,t&&(this.options=t.options[this.namespace],this.element=t.element,this.items=t.filteredItems,this.size=t.size)}return function(){function t(t){return function(){return e.prototype[t].apply(this.isotope,arguments)}}for(var o=["_resetLayout","_getItemLayoutPosition","_manageStamp","_getContainerSize","_getElementOffset","needsResizeLayout"],n=0,r=o.length;r>n;n++){var s=o[n];i.prototype[s]=t(s)}}(),i.prototype.needsVerticalResizeLayout=function(){var e=t(this.isotope.element),i=this.isotope.size&&e;return i&&e.innerHeight!==this.isotope.size.innerHeight},i.prototype._getMeasurement=function(){this.isotope._getMeasurement.apply(this,arguments)},i.prototype.getColumnWidth=function(){this.getSegmentSize("column","Width")},i.prototype.getRowHeight=function(){this.getSegmentSize("row","Height")},i.prototype.getSegmentSize=function(t,e){var i=t+e,o="outer"+e;if(this._getMeasurement(i,o),!this[i]){var n=this.getFirstItemSize();this[i]=n&&n[o]||this.isotope.size["inner"+e]}},i.prototype.getFirstItemSize=function(){var e=this.isotope.filteredItems[0];return e&&e.element&&t(e.element)},i.prototype.layout=function(){this.isotope.layout.apply(this.isotope,arguments)},i.prototype.getSize=function(){this.isotope.getSize(),this.size=this.isotope.size},i.modes={},i.create=function(t,e){function o(){i.apply(this,arguments)}return o.prototype=new i,e&&(o.options=e),o.prototype.namespace=t,i.modes[t]=o,o},i}"function"==typeof define&&define.amd?define("isotope/js/layout-mode",["get-size/get-size","outlayer/outlayer"],e):(t.Isotope=t.Isotope||{},t.Isotope.LayoutMode=e(t.getSize,t.Outlayer))}(window),function(t){function e(t,e){var o=t.create("masonry");return o.prototype._resetLayout=function(){this.getSize(),this._getMeasurement("columnWidth","outerWidth"),this._getMeasurement("gutter","outerWidth"),this.measureColumns();var t=this.cols;for(this.colYs=[];t--;)this.colYs.push(0);this.maxY=0},o.prototype.measureColumns=function(){if(this.getContainerWidth(),!this.columnWidth){var t=this.items[0],i=t&&t.element;this.columnWidth=i&&e(i).outerWidth||this.containerWidth}this.columnWidth+=this.gutter,this.cols=Math.floor((this.containerWidth+this.gutter)/this.columnWidth),this.cols=Math.max(this.cols,1)},o.prototype.getContainerWidth=function(){var t=this.options.isFitWidth?this.element.parentNode:this.element,i=e(t);this.containerWidth=i&&i.innerWidth},o.prototype._getItemLayoutPosition=function(t){t.getSize();var e=t.size.outerWidth%this.columnWidth,o=e&&1>e?"round":"ceil",n=Math[o](t.size.outerWidth/this.columnWidth);n=Math.min(n,this.cols);for(var r=this._getColGroup(n),s=Math.min.apply(Math,r),a=i(r,s),u={x:this.columnWidth*a,y:s},p=s+t.size.outerHeight,h=this.cols+1-r.length,f=0;h>f;f++)this.colYs[a+f]=p;return u},o.prototype._getColGroup=function(t){if(2>t)return this.colYs;for(var e=[],i=this.cols+1-t,o=0;i>o;o++){var n=this.colYs.slice(o,o+t);e[o]=Math.max.apply(Math,n)}return e},o.prototype._manageStamp=function(t){var i=e(t),o=this._getElementOffset(t),n=this.options.isOriginLeft?o.left:o.right,r=n+i.outerWidth,s=Math.floor(n/this.columnWidth);s=Math.max(0,s);var a=Math.floor(r/this.columnWidth);a-=r%this.columnWidth?0:1,a=Math.min(this.cols-1,a);for(var u=(this.options.isOriginTop?o.top:o.bottom)+i.outerHeight,p=s;a>=p;p++)this.colYs[p]=Math.max(u,this.colYs[p])},o.prototype._getContainerSize=function(){this.maxY=Math.max.apply(Math,this.colYs);var t={height:this.maxY};return this.options.isFitWidth&&(t.width=this._getContainerFitWidth()),t},o.prototype._getContainerFitWidth=function(){for(var t=0,e=this.cols;--e&&0===this.colYs[e];)t++;return(this.cols-t)*this.columnWidth-this.gutter},o.prototype.needsResizeLayout=function(){var t=this.containerWidth;return this.getContainerWidth(),t!==this.containerWidth},o}var i=Array.prototype.indexOf?function(t,e){return t.indexOf(e)}:function(t,e){for(var i=0,o=t.length;o>i;i++){var n=t[i];if(n===e)return i}return-1};"function"==typeof define&&define.amd?define("masonry/masonry",["outlayer/outlayer","get-size/get-size"],e):t.Masonry=e(t.Outlayer,t.getSize)}(window),function(t){function e(t,e){for(var i in e)t[i]=e[i];return t}function i(t,i){var o=t.create("masonry"),n=o.prototype._getElementOffset,r=o.prototype.layout,s=o.prototype._getMeasurement;e(o.prototype,i.prototype),o.prototype._getElementOffset=n,o.prototype.layout=r,o.prototype._getMeasurement=s;var a=o.prototype.measureColumns;o.prototype.measureColumns=function(){this.items=this.isotope.filteredItems,a.call(this)};var u=o.prototype._manageStamp;return o.prototype._manageStamp=function(){this.options.isOriginLeft=this.isotope.options.isOriginLeft,this.options.isOriginTop=this.isotope.options.isOriginTop,u.apply(this,arguments)},o}"function"==typeof define&&define.amd?define("isotope/js/layout-modes/masonry",["../layout-mode","masonry/masonry"],i):i(t.Isotope.LayoutMode,t.Masonry)}(window),function(t){function e(t){var e=t.create("fitRows");return e.prototype._resetLayout=function(){this.x=0,this.y=0,this.maxY=0},e.prototype._getItemLayoutPosition=function(t){t.getSize(),0!==this.x&&t.size.outerWidth+this.x>this.isotope.size.innerWidth&&(this.x=0,this.y=this.maxY);var e={x:this.x,y:this.y};return this.maxY=Math.max(this.maxY,this.y+t.size.outerHeight),this.x+=t.size.outerWidth,e},e.prototype._getContainerSize=function(){return{height:this.maxY}},e}"function"==typeof define&&define.amd?define("isotope/js/layout-modes/fit-rows",["../layout-mode"],e):e(t.Isotope.LayoutMode)}(window),function(t){function e(t){var e=t.create("vertical",{horizontalAlignment:0});return e.prototype._resetLayout=function(){this.y=0},e.prototype._getItemLayoutPosition=function(t){t.getSize();var e=(this.isotope.size.innerWidth-t.size.outerWidth)*this.options.horizontalAlignment,i=this.y;return this.y+=t.size.outerHeight,{x:e,y:i}},e.prototype._getContainerSize=function(){return{height:this.y}},e}"function"==typeof define&&define.amd?define("isotope/js/layout-modes/vertical",["../layout-mode"],e):e(t.Isotope.LayoutMode)}(window),function(t){function e(t,e){for(var i in e)t[i]=e[i];return t}function i(t){return"[object Array]"===h.call(t)}function o(t){var e=[];if(i(t))e=t;else if(t&&"number"==typeof t.length)for(var o=0,n=t.length;n>o;o++)e.push(t[o]);else e.push(t);return e}function n(t,e){var i=f(e,t);-1!==i&&e.splice(i,1)}function r(t,i,r,u,h){function f(t,e){return function(i,o){for(var n=0,r=t.length;r>n;n++){var s=t[n],a=i.sortData[s],u=o.sortData[s];if(a>u||u>a){var p=void 0!==e[s]?e[s]:e,h=p?1:-1;return(a>u?1:-1)*h}}return 0}}var d=t.create("isotope",{layoutMode:"masonry",isJQueryFiltering:!0,sortAscending:!0});d.Item=u,d.LayoutMode=h,d.prototype._create=function(){this.itemGUID=0,this._sorters={},this._getSorters(),t.prototype._create.call(this),this.modes={},this.filteredItems=this.items,this.sortHistory=["original-order"];for(var e in h.modes)this._initLayoutMode(e)},d.prototype.reloadItems=function(){this.itemGUID=0,t.prototype.reloadItems.call(this)},d.prototype._itemize=function(){for(var e=t.prototype._itemize.apply(this,arguments),i=0,o=e.length;o>i;i++){var n=e[i];n.id=this.itemGUID++}return this._updateItemsSortData(e),e},d.prototype._initLayoutMode=function(t){var i=h.modes[t],o=this.options[t]||{};this.options[t]=i.options?e(i.options,o):o,this.modes[t]=new i(this)},d.prototype.layout=function(){return!this._isLayoutInited&&this.options.isInitLayout?(this.arrange(),void 0):(this._layout(),void 0)},d.prototype._layout=function(){var t=this._getIsInstant();this._resetLayout(),this._manageStamps(),this.layoutItems(this.filteredItems,t),this._isLayoutInited=!0},d.prototype.arrange=function(t){this.option(t),this._getIsInstant(),this.filteredItems=this._filter(this.items),this._sort(),this._layout()},d.prototype._init=d.prototype.arrange,d.prototype._getIsInstant=function(){var t=void 0!==this.options.isLayoutInstant?this.options.isLayoutInstant:!this._isLayoutInited;return this._isInstant=t,t},d.prototype._filter=function(t){function e(){f.reveal(n),f.hide(r)}var i=this.options.filter;i=i||"*";for(var o=[],n=[],r=[],s=this._getFilterTest(i),a=0,u=t.length;u>a;a++){var p=t[a];if(!p.isIgnored){var h=s(p);h&&o.push(p),h&&p.isHidden?n.push(p):h||p.isHidden||r.push(p)}}var f=this;return this._isInstant?this._noTransition(e):e(),o},d.prototype._getFilterTest=function(t){return s&&this.options.isJQueryFiltering?function(e){return s(e.element).is(t)}:"function"==typeof t?function(e){return t(e.element)}:function(e){return r(e.element,t)}},d.prototype.updateSortData=function(t){this._getSorters(),t=o(t);
var e=this.getItems(t);e=e.length?e:this.items,this._updateItemsSortData(e)},d.prototype._getSorters=function(){var t=this.options.getSortData;for(var e in t){var i=t[e];this._sorters[e]=l(i)}},d.prototype._updateItemsSortData=function(t){for(var e=0,i=t.length;i>e;e++){var o=t[e];o.updateSortData()}};var l=function(){function t(t){if("string"!=typeof t)return t;var i=a(t).split(" "),o=i[0],n=o.match(/^\[(.+)\]$/),r=n&&n[1],s=e(r,o),u=d.sortDataParsers[i[1]];return t=u?function(t){return t&&u(s(t))}:function(t){return t&&s(t)}}function e(t,e){var i;return i=t?function(e){return e.getAttribute(t)}:function(t){var i=t.querySelector(e);return i&&p(i)}}return t}();d.sortDataParsers={parseInt:function(t){return parseInt(t,10)},parseFloat:function(t){return parseFloat(t)}},d.prototype._sort=function(){var t=this.options.sortBy;if(t){var e=[].concat.apply(t,this.sortHistory),i=f(e,this.options.sortAscending);this.filteredItems.sort(i),t!==this.sortHistory[0]&&this.sortHistory.unshift(t)}},d.prototype._mode=function(){var t=this.options.layoutMode,e=this.modes[t];if(!e)throw Error("No layout mode: "+t);return e.options=this.options[t],e},d.prototype._resetLayout=function(){t.prototype._resetLayout.call(this),this._mode()._resetLayout()},d.prototype._getItemLayoutPosition=function(t){return this._mode()._getItemLayoutPosition(t)},d.prototype._manageStamp=function(t){this._mode()._manageStamp(t)},d.prototype._getContainerSize=function(){return this._mode()._getContainerSize()},d.prototype.needsResizeLayout=function(){return this._mode().needsResizeLayout()},d.prototype.appended=function(t){var e=this.addItems(t);if(e.length){var i=this._filterRevealAdded(e);this.filteredItems=this.filteredItems.concat(i)}},d.prototype.prepended=function(t){var e=this._itemize(t);if(e.length){var i=this.items.slice(0);this.items=e.concat(i),this._resetLayout(),this._manageStamps();var o=this._filterRevealAdded(e);this.layoutItems(i),this.filteredItems=o.concat(this.filteredItems)}},d.prototype._filterRevealAdded=function(t){var e=this._noTransition(function(){return this._filter(t)});return this.layoutItems(e,!0),this.reveal(e),t},d.prototype.insert=function(t){var e=this.addItems(t);if(e.length){var i,o,n=e.length;for(i=0;n>i;i++)o=e[i],this.element.appendChild(o.element);var r=this._filter(e);for(this._noTransition(function(){this.hide(r)}),i=0;n>i;i++)e[i].isLayoutInstant=!0;for(this.arrange(),i=0;n>i;i++)delete e[i].isLayoutInstant;this.reveal(r)}};var c=d.prototype.remove;return d.prototype.remove=function(t){t=o(t);var e=this.getItems(t);if(c.call(this,t),e&&e.length)for(var i=0,r=e.length;r>i;i++){var s=e[i];n(s,this.filteredItems)}},d.prototype.shuffle=function(){for(var t=0,e=this.items.length;e>t;t++){var i=this.items[t];i.sortData.random=Math.random()}this.options.sortBy="random",this._sort(),this._layout()},d.prototype._noTransition=function(t){var e=this.options.transitionDuration;this.options.transitionDuration=0;var i=t.call(this);return this.options.transitionDuration=e,i},d.prototype.getFilteredItemElements=function(){for(var t=[],e=0,i=this.filteredItems.length;i>e;e++)t.push(this.filteredItems[e].element);return t},d}var s=t.jQuery,a=String.prototype.trim?function(t){return t.trim()}:function(t){return t.replace(/^\s+|\s+$/g,"")},u=document.documentElement,p=u.textContent?function(t){return t.textContent}:function(t){return t.innerText},h=Object.prototype.toString,f=Array.prototype.indexOf?function(t,e){return t.indexOf(e)}:function(t,e){for(var i=0,o=t.length;o>i;i++)if(t[i]===e)return i;return-1};"function"==typeof define&&define.amd?define(["outlayer/outlayer","get-size/get-size","matches-selector/matches-selector","isotope/js/item","isotope/js/layout-mode","isotope/js/layout-modes/masonry","isotope/js/layout-modes/fit-rows","isotope/js/layout-modes/vertical"],r):t.Isotope=r(t.Outlayer,t.getSize,t.matchesSelector,t.Isotope.Item,t.Isotope.LayoutMode)}(window);
/*!
 * jQuery Migrate - v1.2.1 - 2013-05-08
 * https://github.com/jquery/jquery-migrate
 * Copyright 2005, 2013 jQuery Foundation, Inc. and other contributors; Licensed MIT
 */

(function( jQuery, window, undefined ) {
// See http://bugs.jquery.com/ticket/13335
// "use strict";


var warnedAbout = {};

// List of warnings already given; public read only
jQuery.migrateWarnings = [];

// Set to true to prevent console output; migrateWarnings still maintained
// jQuery.migrateMute = false;

// Show a message on the console so devs know we're active
if ( !jQuery.migrateMute && window.console && window.console.log ) {
	window.console.log("JQMIGRATE: Logging is active");
}

// Set to false to disable traces that appear with warnings
if ( jQuery.migrateTrace === undefined ) {
	jQuery.migrateTrace = true;
}

// Forget any warnings we've already given; public
jQuery.migrateReset = function() {
	warnedAbout = {};
	jQuery.migrateWarnings.length = 0;
};

function migrateWarn( msg) {
	var console = window.console;
	if ( !warnedAbout[ msg ] ) {
		warnedAbout[ msg ] = true;
		jQuery.migrateWarnings.push( msg );
		if ( console && console.warn && !jQuery.migrateMute ) {
			console.warn( "JQMIGRATE: " + msg );
			if ( jQuery.migrateTrace && console.trace ) {
				console.trace();
			}
		}
	}
}

function migrateWarnProp( obj, prop, value, msg ) {
	if ( Object.defineProperty ) {
		// On ES5 browsers (non-oldIE), warn if the code tries to get prop;
		// allow property to be overwritten in case some other plugin wants it
		try {
			Object.defineProperty( obj, prop, {
				configurable: true,
				enumerable: true,
				get: function() {
					migrateWarn( msg );
					return value;
				},
				set: function( newValue ) {
					migrateWarn( msg );
					value = newValue;
				}
			});
			return;
		} catch( err ) {
			// IE8 is a dope about Object.defineProperty, can't warn there
		}
	}

	// Non-ES5 (or broken) browser; just set the property
	jQuery._definePropertyBroken = true;
	obj[ prop ] = value;
}

if ( document.compatMode === "BackCompat" ) {
	// jQuery has never supported or tested Quirks Mode
	migrateWarn( "jQuery is not compatible with Quirks Mode" );
}


var attrFn = jQuery( "<input/>", { size: 1 } ).attr("size") && jQuery.attrFn,
	oldAttr = jQuery.attr,
	valueAttrGet = jQuery.attrHooks.value && jQuery.attrHooks.value.get ||
		function() { return null; },
	valueAttrSet = jQuery.attrHooks.value && jQuery.attrHooks.value.set ||
		function() { return undefined; },
	rnoType = /^(?:input|button)$/i,
	rnoAttrNodeType = /^[238]$/,
	rboolean = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,
	ruseDefault = /^(?:checked|selected)$/i;

// jQuery.attrFn
migrateWarnProp( jQuery, "attrFn", attrFn || {}, "jQuery.attrFn is deprecated" );

jQuery.attr = function( elem, name, value, pass ) {
	var lowerName = name.toLowerCase(),
		nType = elem && elem.nodeType;

	if ( pass ) {
		// Since pass is used internally, we only warn for new jQuery
		// versions where there isn't a pass arg in the formal params
		if ( oldAttr.length < 4 ) {
			migrateWarn("jQuery.fn.attr( props, pass ) is deprecated");
		}
		if ( elem && !rnoAttrNodeType.test( nType ) &&
			(attrFn ? name in attrFn : jQuery.isFunction(jQuery.fn[name])) ) {
			return jQuery( elem )[ name ]( value );
		}
	}

	// Warn if user tries to set `type`, since it breaks on IE 6/7/8; by checking
	// for disconnected elements we don't warn on $( "<button>", { type: "button" } ).
	if ( name === "type" && value !== undefined && rnoType.test( elem.nodeName ) && elem.parentNode ) {
		migrateWarn("Can't change the 'type' of an input or button in IE 6/7/8");
	}

	// Restore boolHook for boolean property/attribute synchronization
	if ( !jQuery.attrHooks[ lowerName ] && rboolean.test( lowerName ) ) {
		jQuery.attrHooks[ lowerName ] = {
			get: function( elem, name ) {
				// Align boolean attributes with corresponding properties
				// Fall back to attribute presence where some booleans are not supported
				var attrNode,
					property = jQuery.prop( elem, name );
				return property === true || typeof property !== "boolean" &&
					( attrNode = elem.getAttributeNode(name) ) && attrNode.nodeValue !== false ?

					name.toLowerCase() :
					undefined;
			},
			set: function( elem, value, name ) {
				var propName;
				if ( value === false ) {
					// Remove boolean attributes when set to false
					jQuery.removeAttr( elem, name );
				} else {
					// value is true since we know at this point it's type boolean and not false
					// Set boolean attributes to the same name and set the DOM property
					propName = jQuery.propFix[ name ] || name;
					if ( propName in elem ) {
						// Only set the IDL specifically if it already exists on the element
						elem[ propName ] = true;
					}

					elem.setAttribute( name, name.toLowerCase() );
				}
				return name;
			}
		};

		// Warn only for attributes that can remain distinct from their properties post-1.9
		if ( ruseDefault.test( lowerName ) ) {
			migrateWarn( "jQuery.fn.attr('" + lowerName + "') may use property instead of attribute" );
		}
	}

	return oldAttr.call( jQuery, elem, name, value );
};

// attrHooks: value
jQuery.attrHooks.value = {
	get: function( elem, name ) {
		var nodeName = ( elem.nodeName || "" ).toLowerCase();
		if ( nodeName === "button" ) {
			return valueAttrGet.apply( this, arguments );
		}
		if ( nodeName !== "input" && nodeName !== "option" ) {
			migrateWarn("jQuery.fn.attr('value') no longer gets properties");
		}
		return name in elem ?
			elem.value :
			null;
	},
	set: function( elem, value ) {
		var nodeName = ( elem.nodeName || "" ).toLowerCase();
		if ( nodeName === "button" ) {
			return valueAttrSet.apply( this, arguments );
		}
		if ( nodeName !== "input" && nodeName !== "option" ) {
			migrateWarn("jQuery.fn.attr('value', val) no longer sets properties");
		}
		// Does not return so that setAttribute is also used
		elem.value = value;
	}
};


var matched, browser,
	oldInit = jQuery.fn.init,
	oldParseJSON = jQuery.parseJSON,
	// Note: XSS check is done below after string is trimmed
	rquickExpr = /^([^<]*)(<[\w\W]+>)([^>]*)$/;

// $(html) "looks like html" rule change
jQuery.fn.init = function( selector, context, rootjQuery ) {
	var match;

	if ( selector && typeof selector === "string" && !jQuery.isPlainObject( context ) &&
			(match = rquickExpr.exec( jQuery.trim( selector ) )) && match[ 0 ] ) {
		// This is an HTML string according to the "old" rules; is it still?
		if ( selector.charAt( 0 ) !== "<" ) {
			migrateWarn("$(html) HTML strings must start with '<' character");
		}
		if ( match[ 3 ] ) {
			migrateWarn("$(html) HTML text after last tag is ignored");
		}
		// Consistently reject any HTML-like string starting with a hash (#9521)
		// Note that this may break jQuery 1.6.x code that otherwise would work.
		if ( match[ 0 ].charAt( 0 ) === "#" ) {
			migrateWarn("HTML string cannot start with a '#' character");
			jQuery.error("JQMIGRATE: Invalid selector string (XSS)");
		}
		// Now process using loose rules; let pre-1.8 play too
		if ( context && context.context ) {
			// jQuery object as context; parseHTML expects a DOM object
			context = context.context;
		}
		if ( jQuery.parseHTML ) {
			return oldInit.call( this, jQuery.parseHTML( match[ 2 ], context, true ),
					context, rootjQuery );
		}
	}
	return oldInit.apply( this, arguments );
};
jQuery.fn.init.prototype = jQuery.fn;

// Let $.parseJSON(falsy_value) return null
jQuery.parseJSON = function( json ) {
	if ( !json && json !== null ) {
		migrateWarn("jQuery.parseJSON requires a valid JSON string");
		return null;
	}
	return oldParseJSON.apply( this, arguments );
};

jQuery.uaMatch = function( ua ) {
	ua = ua.toLowerCase();

	var match = /(chrome)[ \/]([\w.]+)/.exec( ua ) ||
		/(webkit)[ \/]([\w.]+)/.exec( ua ) ||
		/(opera)(?:.*version|)[ \/]([\w.]+)/.exec( ua ) ||
		/(msie) ([\w.]+)/.exec( ua ) ||
		ua.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec( ua ) ||
		[];

	return {
		browser: match[ 1 ] || "",
		version: match[ 2 ] || "0"
	};
};

// Don't clobber any existing jQuery.browser in case it's different
if ( !jQuery.browser ) {
	matched = jQuery.uaMatch( navigator.userAgent );
	browser = {};

	if ( matched.browser ) {
		browser[ matched.browser ] = true;
		browser.version = matched.version;
	}

	// Chrome is Webkit, but Webkit is also Safari.
	if ( browser.chrome ) {
		browser.webkit = true;
	} else if ( browser.webkit ) {
		browser.safari = true;
	}

	jQuery.browser = browser;
}

// Warn if the code tries to get jQuery.browser
migrateWarnProp( jQuery, "browser", jQuery.browser, "jQuery.browser is deprecated" );

jQuery.sub = function() {
	function jQuerySub( selector, context ) {
		return new jQuerySub.fn.init( selector, context );
	}
	jQuery.extend( true, jQuerySub, this );
	jQuerySub.superclass = this;
	jQuerySub.fn = jQuerySub.prototype = this();
	jQuerySub.fn.constructor = jQuerySub;
	jQuerySub.sub = this.sub;
	jQuerySub.fn.init = function init( selector, context ) {
		if ( context && context instanceof jQuery && !(context instanceof jQuerySub) ) {
			context = jQuerySub( context );
		}

		return jQuery.fn.init.call( this, selector, context, rootjQuerySub );
	};
	jQuerySub.fn.init.prototype = jQuerySub.fn;
	var rootjQuerySub = jQuerySub(document);
	migrateWarn( "jQuery.sub() is deprecated" );
	return jQuerySub;
};


// Ensure that $.ajax gets the new parseJSON defined in core.js
jQuery.ajaxSetup({
	converters: {
		"text json": jQuery.parseJSON
	}
});


var oldFnData = jQuery.fn.data;

jQuery.fn.data = function( name ) {
	var ret, evt,
		elem = this[0];

	// Handles 1.7 which has this behavior and 1.8 which doesn't
	if ( elem && name === "events" && arguments.length === 1 ) {
		ret = jQuery.data( elem, name );
		evt = jQuery._data( elem, name );
		if ( ( ret === undefined || ret === evt ) && evt !== undefined ) {
			migrateWarn("Use of jQuery.fn.data('events') is deprecated");
			return evt;
		}
	}
	return oldFnData.apply( this, arguments );
};


var rscriptType = /\/(java|ecma)script/i,
	oldSelf = jQuery.fn.andSelf || jQuery.fn.addBack;

jQuery.fn.andSelf = function() {
	migrateWarn("jQuery.fn.andSelf() replaced by jQuery.fn.addBack()");
	return oldSelf.apply( this, arguments );
};

// Since jQuery.clean is used internally on older versions, we only shim if it's missing
if ( !jQuery.clean ) {
	jQuery.clean = function( elems, context, fragment, scripts ) {
		// Set context per 1.8 logic
		context = context || document;
		context = !context.nodeType && context[0] || context;
		context = context.ownerDocument || context;

		migrateWarn("jQuery.clean() is deprecated");

		var i, elem, handleScript, jsTags,
			ret = [];

		jQuery.merge( ret, jQuery.buildFragment( elems, context ).childNodes );

		// Complex logic lifted directly from jQuery 1.8
		if ( fragment ) {
			// Special handling of each script element
			handleScript = function( elem ) {
				// Check if we consider it executable
				if ( !elem.type || rscriptType.test( elem.type ) ) {
					// Detach the script and store it in the scripts array (if provided) or the fragment
					// Return truthy to indicate that it has been handled
					return scripts ?
						scripts.push( elem.parentNode ? elem.parentNode.removeChild( elem ) : elem ) :
						fragment.appendChild( elem );
				}
			};

			for ( i = 0; (elem = ret[i]) != null; i++ ) {
				// Check if we're done after handling an executable script
				if ( !( jQuery.nodeName( elem, "script" ) && handleScript( elem ) ) ) {
					// Append to fragment and handle embedded scripts
					fragment.appendChild( elem );
					if ( typeof elem.getElementsByTagName !== "undefined" ) {
						// handleScript alters the DOM, so use jQuery.merge to ensure snapshot iteration
						jsTags = jQuery.grep( jQuery.merge( [], elem.getElementsByTagName("script") ), handleScript );

						// Splice the scripts into ret after their former ancestor and advance our index beyond them
						ret.splice.apply( ret, [i + 1, 0].concat( jsTags ) );
						i += jsTags.length;
					}
				}
			}
		}

		return ret;
	};
}

var eventAdd = jQuery.event.add,
	eventRemove = jQuery.event.remove,
	eventTrigger = jQuery.event.trigger,
	oldToggle = jQuery.fn.toggle,
	oldLive = jQuery.fn.live,
	oldDie = jQuery.fn.die,
	ajaxEvents = "ajaxStart|ajaxStop|ajaxSend|ajaxComplete|ajaxError|ajaxSuccess",
	rajaxEvent = new RegExp( "\\b(?:" + ajaxEvents + ")\\b" ),
	rhoverHack = /(?:^|\s)hover(\.\S+|)\b/,
	hoverHack = function( events ) {
		if ( typeof( events ) !== "string" || jQuery.event.special.hover ) {
			return events;
		}
		if ( rhoverHack.test( events ) ) {
			migrateWarn("'hover' pseudo-event is deprecated, use 'mouseenter mouseleave'");
		}
		return events && events.replace( rhoverHack, "mouseenter$1 mouseleave$1" );
	};

// Event props removed in 1.9, put them back if needed; no practical way to warn them
if ( jQuery.event.props && jQuery.event.props[ 0 ] !== "attrChange" ) {
	jQuery.event.props.unshift( "attrChange", "attrName", "relatedNode", "srcElement" );
}

// Undocumented jQuery.event.handle was "deprecated" in jQuery 1.7
if ( jQuery.event.dispatch ) {
	migrateWarnProp( jQuery.event, "handle", jQuery.event.dispatch, "jQuery.event.handle is undocumented and deprecated" );
}

// Support for 'hover' pseudo-event and ajax event warnings
jQuery.event.add = function( elem, types, handler, data, selector ){
	if ( elem !== document && rajaxEvent.test( types ) ) {
		migrateWarn( "AJAX events should be attached to document: " + types );
	}
	eventAdd.call( this, elem, hoverHack( types || "" ), handler, data, selector );
};
jQuery.event.remove = function( elem, types, handler, selector, mappedTypes ){
	eventRemove.call( this, elem, hoverHack( types ) || "", handler, selector, mappedTypes );
};

jQuery.fn.error = function() {
	var args = Array.prototype.slice.call( arguments, 0);
	migrateWarn("jQuery.fn.error() is deprecated");
	args.splice( 0, 0, "error" );
	if ( arguments.length ) {
		return this.bind.apply( this, args );
	}
	// error event should not bubble to window, although it does pre-1.7
	this.triggerHandler.apply( this, args );
	return this;
};

jQuery.fn.toggle = function( fn, fn2 ) {

	// Don't mess with animation or css toggles
	if ( !jQuery.isFunction( fn ) || !jQuery.isFunction( fn2 ) ) {
		return oldToggle.apply( this, arguments );
	}
	migrateWarn("jQuery.fn.toggle(handler, handler...) is deprecated");

	// Save reference to arguments for access in closure
	var args = arguments,
		guid = fn.guid || jQuery.guid++,
		i = 0,
		toggler = function( event ) {
			// Figure out which function to execute
			var lastToggle = ( jQuery._data( this, "lastToggle" + fn.guid ) || 0 ) % i;
			jQuery._data( this, "lastToggle" + fn.guid, lastToggle + 1 );

			// Make sure that clicks stop
			event.preventDefault();

			// and execute the function
			return args[ lastToggle ].apply( this, arguments ) || false;
		};

	// link all the functions, so any of them can unbind this click handler
	toggler.guid = guid;
	while ( i < args.length ) {
		args[ i++ ].guid = guid;
	}

	return this.click( toggler );
};

jQuery.fn.live = function( types, data, fn ) {
	migrateWarn("jQuery.fn.live() is deprecated");
	if ( oldLive ) {
		return oldLive.apply( this, arguments );
	}
	jQuery( this.context ).on( types, this.selector, data, fn );
	return this;
};

jQuery.fn.die = function( types, fn ) {
	migrateWarn("jQuery.fn.die() is deprecated");
	if ( oldDie ) {
		return oldDie.apply( this, arguments );
	}
	jQuery( this.context ).off( types, this.selector || "**", fn );
	return this;
};

// Turn global events into document-triggered events
jQuery.event.trigger = function( event, data, elem, onlyHandlers  ){
	if ( !elem && !rajaxEvent.test( event ) ) {
		migrateWarn( "Global events are undocumented and deprecated" );
	}
	return eventTrigger.call( this,  event, data, elem || document, onlyHandlers  );
};
jQuery.each( ajaxEvents.split("|"),
	function( _, name ) {
		jQuery.event.special[ name ] = {
			setup: function() {
				var elem = this;

				// The document needs no shimming; must be !== for oldIE
				if ( elem !== document ) {
					jQuery.event.add( document, name + "." + jQuery.guid, function() {
						jQuery.event.trigger( name, null, elem, true );
					});
					jQuery._data( this, name, jQuery.guid++ );
				}
				return false;
			},
			teardown: function() {
				if ( this !== document ) {
					jQuery.event.remove( document, name + "." + jQuery._data( this, name ) );
				}
				return false;
			}
		};
	}
);


})( jQuery, window );
/**
 * Cookie plugin
 *
 * Copyright (c) 2006 Klaus Hartl (stilbuero.de)
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 *
 */

/**
 * Create a cookie with the given name and value and other optional parameters.
 *
 * @example $.cookie('the_cookie', 'the_value');
 * @desc Set the value of a cookie.
 * @example $.cookie('the_cookie', 'the_value', { expires: 7, path: '/', domain: 'jquery.com', secure: true });
 * @desc Create a cookie with all available options.
 * @example $.cookie('the_cookie', 'the_value');
 * @desc Create a session cookie.
 * @example $.cookie('the_cookie', null);
 * @desc Delete a cookie by passing null as value. Keep in mind that you have to use the same path and domain
 *       used when the cookie was set.
 *
 * @param String name The name of the cookie.
 * @param String value The value of the cookie.
 * @param Object options An object literal containing key/value pairs to provide optional cookie attributes.
 * @option Number|Date expires Either an integer specifying the expiration date from now on in days or a Date object.
 *                             If a negative value is specified (e.g. a date in the past), the cookie will be deleted.
 *                             If set to null or omitted, the cookie will be a session cookie and will not be retained
 *                             when the the browser exits.
 * @option String path The value of the path atribute of the cookie (default: path of page that created the cookie).
 * @option String domain The value of the domain attribute of the cookie (default: domain of page that created the cookie).
 * @option Boolean secure If true, the secure attribute of the cookie will be set and the cookie transmission will
 *                        require a secure protocol (like HTTPS).
 * @type undefined
 *
 * @name $.cookie
 * @cat Plugins/Cookie
 * @author Klaus Hartl/klaus.hartl@stilbuero.de
 */

/**
 * Get the value of a cookie with the given name.
 *
 * @example $.cookie('the_cookie');
 * @desc Get the value of a cookie.
 *
 * @param String name The name of the cookie.
 * @return The value of the cookie.
 * @type String
 *
 * @name $.cookie
 * @cat Plugins/Cookie
 * @author Klaus Hartl/klaus.hartl@stilbuero.de
 */

jQuery.cookie = function(name, value, options) {
    if (typeof value != 'undefined') { // name and value given, set cookie
        options = options || {};
        if (value === null) {
            value = '';
            options.expires = -1;
        }
        var expires = '';
        if (options.expires && (typeof options.expires == 'number' || options.expires.toUTCString)) {
            var date;
            if (typeof options.expires == 'number') {
                date = new Date();
                date.setTime(date.getTime() + (options.expires * 24 * 60 * 60 * 1000));
            } else {
                date = options.expires;
            }
            expires = '; expires=' + date.toUTCString(); // use expires attribute, max-age is not supported by IE
        }
        // CAUTION: Needed to parenthesize options.path and options.domain
        // in the following expressions, otherwise they evaluate to undefined
        // in the packed version for some reason...
        var path = options.path ? '; path=' + (options.path) : '';
        var domain = options.domain ? '; domain=' + (options.domain) : '';
        var secure = options.secure ? '; secure' : '';
        document.cookie = [name, '=', encodeURIComponent(value), expires, path, domain, secure].join('');
    } else { // only name given, get cookie
        var cookieValue = null;
        if (document.cookie && document.cookie != '') {
            var cookies = document.cookie.split(';');
            for (var i = 0; i < cookies.length; i++) {
                var cookie = jQuery.trim(cookies[i]);
                // Does this cookie string begin with the name we want?
                if (cookie.substring(0, name.length + 1) == (name + '=')) {
                    cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                    break;
                }
            }
        }
        return cookieValue;
    }
};
/*
 * jQuery Easing v1.3 - http://gsgd.co.uk/sandbox/jquery/easing/
 *
 * Uses the built in easing capabilities added In jQuery 1.1
 * to offer multiple easing options
 *
 * TERMS OF USE - jQuery Easing
 * 
 * Open source under the BSD License. 
 * 
 * Copyright © 2008 George McGinley Smith
 * All rights reserved.
 * 
 * Redistribution and use in source and binary forms, with or without modification, 
 * are permitted provided that the following conditions are met:
 * 
 * Redistributions of source code must retain the above copyright notice, this list of 
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list 
 * of conditions and the following disclaimer in the documentation and/or other materials 
 * provided with the distribution.
 * 
 * Neither the name of the author nor the names of contributors may be used to endorse 
 * or promote products derived from this software without specific prior written permission.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY 
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED 
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED 
 * OF THE POSSIBILITY OF SUCH DAMAGE. 
 *
*/

// t: current time, b: begInnIng value, c: change In value, d: duration
jQuery.easing['jswing'] = jQuery.easing['swing'];

jQuery.extend( jQuery.easing,
{
	def: 'easeOutQuad',
	swing: function (x, t, b, c, d) {
		//alert(jQuery.easing.default);
		return jQuery.easing[jQuery.easing.def](x, t, b, c, d);
	},
	easeInQuad: function (x, t, b, c, d) {
		return c*(t/=d)*t + b;
	},
	easeOutQuad: function (x, t, b, c, d) {
		return -c *(t/=d)*(t-2) + b;
	},
	easeInOutQuad: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t + b;
		return -c/2 * ((--t)*(t-2) - 1) + b;
	},
	easeInCubic: function (x, t, b, c, d) {
		return c*(t/=d)*t*t + b;
	},
	easeOutCubic: function (x, t, b, c, d) {
		return c*((t=t/d-1)*t*t + 1) + b;
	},
	easeInOutCubic: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t + b;
		return c/2*((t-=2)*t*t + 2) + b;
	},
	easeInQuart: function (x, t, b, c, d) {
		return c*(t/=d)*t*t*t + b;
	},
	easeOutQuart: function (x, t, b, c, d) {
		return -c * ((t=t/d-1)*t*t*t - 1) + b;
	},
	easeInOutQuart: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t*t + b;
		return -c/2 * ((t-=2)*t*t*t - 2) + b;
	},
	easeInQuint: function (x, t, b, c, d) {
		return c*(t/=d)*t*t*t*t + b;
	},
	easeOutQuint: function (x, t, b, c, d) {
		return c*((t=t/d-1)*t*t*t*t + 1) + b;
	},
	easeInOutQuint: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t*t*t + b;
		return c/2*((t-=2)*t*t*t*t + 2) + b;
	},
	easeInSine: function (x, t, b, c, d) {
		return -c * Math.cos(t/d * (Math.PI/2)) + c + b;
	},
	easeOutSine: function (x, t, b, c, d) {
		return c * Math.sin(t/d * (Math.PI/2)) + b;
	},
	easeInOutSine: function (x, t, b, c, d) {
		return -c/2 * (Math.cos(Math.PI*t/d) - 1) + b;
	},
	easeInExpo: function (x, t, b, c, d) {
		return (t==0) ? b : c * Math.pow(2, 10 * (t/d - 1)) + b;
	},
	easeOutExpo: function (x, t, b, c, d) {
		return (t==d) ? b+c : c * (-Math.pow(2, -10 * t/d) + 1) + b;
	},
	easeInOutExpo: function (x, t, b, c, d) {
		if (t==0) return b;
		if (t==d) return b+c;
		if ((t/=d/2) < 1) return c/2 * Math.pow(2, 10 * (t - 1)) + b;
		return c/2 * (-Math.pow(2, -10 * --t) + 2) + b;
	},
	easeInCirc: function (x, t, b, c, d) {
		return -c * (Math.sqrt(1 - (t/=d)*t) - 1) + b;
	},
	easeOutCirc: function (x, t, b, c, d) {
		return c * Math.sqrt(1 - (t=t/d-1)*t) + b;
	},
	easeInOutCirc: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return -c/2 * (Math.sqrt(1 - t*t) - 1) + b;
		return c/2 * (Math.sqrt(1 - (t-=2)*t) + 1) + b;
	},
	easeInElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		return -(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
	},
	easeOutElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		return a*Math.pow(2,-10*t) * Math.sin( (t*d-s)*(2*Math.PI)/p ) + c + b;
	},
	easeInOutElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d/2)==2) return b+c;  if (!p) p=d*(.3*1.5);
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		if (t < 1) return -.5*(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
		return a*Math.pow(2,-10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )*.5 + c + b;
	},
	easeInBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158;
		return c*(t/=d)*t*((s+1)*t - s) + b;
	},
	easeOutBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158;
		return c*((t=t/d-1)*t*((s+1)*t + s) + 1) + b;
	},
	easeInOutBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158; 
		if ((t/=d/2) < 1) return c/2*(t*t*(((s*=(1.525))+1)*t - s)) + b;
		return c/2*((t-=2)*t*(((s*=(1.525))+1)*t + s) + 2) + b;
	},
	easeInBounce: function (x, t, b, c, d) {
		return c - jQuery.easing.easeOutBounce (x, d-t, 0, c, d) + b;
	},
	easeOutBounce: function (x, t, b, c, d) {
		if ((t/=d) < (1/2.75)) {
			return c*(7.5625*t*t) + b;
		} else if (t < (2/2.75)) {
			return c*(7.5625*(t-=(1.5/2.75))*t + .75) + b;
		} else if (t < (2.5/2.75)) {
			return c*(7.5625*(t-=(2.25/2.75))*t + .9375) + b;
		} else {
			return c*(7.5625*(t-=(2.625/2.75))*t + .984375) + b;
		}
	},
	easeInOutBounce: function (x, t, b, c, d) {
		if (t < d/2) return jQuery.easing.easeInBounce (x, t*2, 0, c, d) * .5 + b;
		return jQuery.easing.easeOutBounce (x, t*2-d, 0, c, d) * .5 + c*.5 + b;
	}
});

/*
 *
 * TERMS OF USE - EASING EQUATIONS
 * 
 * Open source under the BSD License. 
 * 
 * Copyright © 2001 Robert Penner
 * All rights reserved.
 * 
 * Redistribution and use in source and binary forms, with or without modification, 
 * are permitted provided that the following conditions are met:
 * 
 * Redistributions of source code must retain the above copyright notice, this list of 
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list 
 * of conditions and the following disclaimer in the documentation and/or other materials 
 * provided with the distribution.
 * 
 * Neither the name of the author nor the names of contributors may be used to endorse 
 * or promote products derived from this software without specific prior written permission.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY 
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED 
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED 
 * OF THE POSSIBILITY OF SUCH DAMAGE. 
 *
 */
;
/*parsed HTML*/

$(function(){
	$(".maxheight").each(function(){
		$(this).contents().wrapAll("<div class='box_inner'></div>");
	})
	$(".maxheight1").each(function(){
		$(this).contents().wrapAll("<div class='box_inner'></div>");
	})
    $(".maxheight2").each(function(){
        $(this).contents().wrapAll("<div class='box_inner'></div>");
    })
})
/*add event*/
$(window).bind("resize", height_handler).bind("load", height_handler)
function height_handler(){
	if($(window).width()>767){
		$(".maxheight").equalHeights();
	}else{
		$(".maxheight").css({'height':'auto'});
	}
	if($(window).width()>767){
		$(".maxheight1").equalHeights();
	}else{
		$(".maxheight1").css({'height':'auto'});
	}
    if($(window).width()>767){
        $(".maxheight2").equalHeights();
    }else{
        $(".maxheight2").css({'height':'auto'});
    }
}
/*glob function*/
(function($){
	$.fn.equalHeights=function(minHeight,maxHeight){
		tallest=(minHeight)?minHeight:0;
		this.each(function(){
			if($(">.box_inner", this).outerHeight()>tallest){
				tallest=$(">.box_inner", this).outerHeight()
			}
		});
		if((maxHeight)&&tallest>maxHeight) tallest=maxHeight;
		return this.each(function(){$(this).height(tallest)})
	}
})(jQuery)
;
//	jQuery Mobile framework customized for Camera slideshow, made by
//	'jquery.mobile.define.js',
//	'jquery.ui.widget.js',
//	'jquery.mobile.widget.js',
//	'jquery.mobile.media.js',
//	'jquery.mobile.support.js',
//	'jquery.mobile.vmouse.js',
//	'jquery.mobile.event.js',
//	'jquery.mobile.core.js'
window.define=function(){Array.prototype.slice.call(arguments).pop()(window.jQuery)};define(["jquery"],function(a){(function(a,b){if(a.cleanData){var c=a.cleanData;a.cleanData=function(b){for(var d=0,e;(e=b[d])!=null;d++){a(e).triggerHandler("remove")}c(b)}}else{var d=a.fn.remove;a.fn.remove=function(b,c){return this.each(function(){if(!c){if(!b||a.filter(b,[this]).length){a("*",this).add([this]).each(function(){a(this).triggerHandler("remove")})}}return d.call(a(this),b,c)})}}a.widget=function(b,c,d){var e=b.split(".")[0],f;b=b.split(".")[1];f=e+"-"+b;if(!d){d=c;c=a.Widget}a.expr[":"][f]=function(c){return!!a.data(c,b)};a[e]=a[e]||{};a[e][b]=function(a,b){if(arguments.length){this._createWidget(a,b)}};var g=new c;g.options=a.extend(true,{},g.options);a[e][b].prototype=a.extend(true,g,{namespace:e,widgetName:b,widgetEventPrefix:a[e][b].prototype.widgetEventPrefix||b,widgetBaseClass:f},d);a.widget.bridge(b,a[e][b])};a.widget.bridge=function(c,d){a.fn[c]=function(e){var f=typeof e==="string",g=Array.prototype.slice.call(arguments,1),h=this;e=!f&&g.length?a.extend.apply(null,[true,e].concat(g)):e;if(f&&e.charAt(0)==="_"){return h}if(f){this.each(function(){var d=a.data(this,c);if(!d){throw"cannot call methods on "+c+" prior to initialization; "+"attempted to call method '"+e+"'"}if(!a.isFunction(d[e])){throw"no such method '"+e+"' for "+c+" widget instance"}var f=d[e].apply(d,g);if(f!==d&&f!==b){h=f;return false}})}else{this.each(function(){var b=a.data(this,c);if(b){b.option(e||{})._init()}else{a.data(this,c,new d(e,this))}})}return h}};a.Widget=function(a,b){if(arguments.length){this._createWidget(a,b)}};a.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",options:{disabled:false},_createWidget:function(b,c){a.data(c,this.widgetName,this);this.element=a(c);this.options=a.extend(true,{},this.options,this._getCreateOptions(),b);var d=this;this.element.bind("remove."+this.widgetName,function(){d.destroy()});this._create();this._trigger("create");this._init()},_getCreateOptions:function(){var b={};if(a.metadata){b=a.metadata.get(element)[this.widgetName]}return b},_create:function(){},_init:function(){},destroy:function(){this.element.unbind("."+this.widgetName).removeData(this.widgetName);this.widget().unbind("."+this.widgetName).removeAttr("aria-disabled").removeClass(this.widgetBaseClass+"-disabled "+"ui-state-disabled")},widget:function(){return this.element},option:function(c,d){var e=c;if(arguments.length===0){return a.extend({},this.options)}if(typeof c==="string"){if(d===b){return this.options[c]}e={};e[c]=d}this._setOptions(e);return this},_setOptions:function(b){var c=this;a.each(b,function(a,b){c._setOption(a,b)});return this},_setOption:function(a,b){this.options[a]=b;if(a==="disabled"){this.widget()[b?"addClass":"removeClass"](this.widgetBaseClass+"-disabled"+" "+"ui-state-disabled").attr("aria-disabled",b)}return this},enable:function(){return this._setOption("disabled",false)},disable:function(){return this._setOption("disabled",true)},_trigger:function(b,c,d){var e=this.options[b];c=a.Event(c);c.type=(b===this.widgetEventPrefix?b:this.widgetEventPrefix+b).toLowerCase();d=d||{};if(c.originalEvent){for(var f=a.event.props.length,g;f;){g=a.event.props[--f];c[g]=c.originalEvent[g]}}this.element.trigger(c,d);return!(a.isFunction(e)&&e.call(this.element[0],c,d)===false||c.isDefaultPrevented())}}})(jQuery)});define(["jquery","./jquery.ui.widget"],function(a){(function(a,b){a.widget("mobile.widget",{_createWidget:function(){a.Widget.prototype._createWidget.apply(this,arguments);this._trigger("init")},_getCreateOptions:function(){var c=this.element,d={};a.each(this.options,function(a){var e=c.jqmData(a.replace(/[A-Z]/g,function(a){return"-"+a.toLowerCase()}));if(e!==b){d[a]=e}});return d},enhanceWithin:function(b){var c=a.mobile.closestPageData(a(b)),d=c&&c.keepNativeSelector()||"";a(this.options.initSelector,b).not(d)[this.widgetName]()}})})(jQuery)});define(["jquery","./jquery.mobile.core"],function(a){(function(a,b){var c=a(window),d=a("html");a.mobile.media=function(){var b={},c=a("<div id='jquery-mediatest'>"),e=a("<body>").append(c);return function(a){if(!(a in b)){var f=document.createElement("style"),g="@media "+a+" { #jquery-mediatest { position:absolute; } }";f.type="text/css";if(f.styleSheet){f.styleSheet.cssText=g}else{f.appendChild(document.createTextNode(g))}d.prepend(e).prepend(f);b[a]=c.css("position")==="absolute";e.add(f).remove()}return b[a]}}()})(jQuery)});define(["jquery","./jquery.mobile.media"],function(a){(function(a,b){function m(){var b=location.protocol+"//"+location.host+location.pathname+"ui-dir/",d=a("head base"),e=null,f="",g,h;if(!d.length){d=e=a("<base>",{href:b}).appendTo("head")}else{f=d.attr("href")}g=a("<a href='testurl' />").prependTo(c);h=g[0].href;d[0].href=f||location.pathname;if(e){e.remove()}return h.indexOf(b)===0}function l(){var b="transform-3d";return k("perspective","10px","moz")||a.mobile.media("(-"+e.join("-"+b+"),(-")+"-"+b+"),("+b+")")}function k(a,b,c){var d=document.createElement("div"),f=function(a){return a.charAt(0).toUpperCase()+a.substr(1)},g=function(a){return"-"+a.charAt(0).toLowerCase()+a.substr(1)+"-"},h=function(c){var e=g(c)+a+": "+b+";",h=f(c),i=h+f(a);d.setAttribute("style",e);if(!!d.style[i]){k=true}},j=c?[c]:e,k;for(i=0;i<j.length;i++){h(j[i])}return!!k}function j(a){var c=a.charAt(0).toUpperCase()+a.substr(1),f=(a+" "+e.join(c+" ")+c).split(" ");for(var g in f){if(d[f[g]]!==b){return true}}}var c=a("<body>").prependTo("html"),d=c[0].style,e=["Webkit","Moz","O"],f="palmGetResource"in window,g=window.operamini&&{}.toString.call(window.operamini)==="[object OperaMini]",h=window.blackberry;a.extend(a.mobile,{browser:{}});a.mobile.browser.ie=function(){var a=3,b=document.createElement("div"),c=b.all||[];while(b.innerHTML="<!--[if gt IE "+ ++a+"]><br><![endif]-->",c[0]){}return a>4?a:!a}();a.extend(a.support,{orientation:"orientation"in window&&"onorientationchange"in window,touch:"ontouchend"in document,cssTransitions:"WebKitTransitionEvent"in window||k("transition","height 100ms linear"),pushState:"pushState"in history&&"replaceState"in history,mediaquery:a.mobile.media("only all"),cssPseudoElement:!!j("content"),touchOverflow:!!j("overflowScrolling"),cssTransform3d:l(),boxShadow:!!j("boxShadow")&&!h,scrollTop:("pageXOffset"in window||"scrollTop"in document.documentElement||"scrollTop"in c[0])&&!f&&!g,dynamicBaseTag:m()});c.remove();var n=function(){var a=window.navigator.userAgent;return a.indexOf("Nokia")>-1&&(a.indexOf("Symbian/3")>-1||a.indexOf("Series60/5")>-1)&&a.indexOf("AppleWebKit")>-1&&a.match(/(BrowserNG|NokiaBrowser)\/7\.[0-3]/)}();a.mobile.ajaxBlacklist=window.blackberry&&!window.WebKitPoint||g||n;if(n){a(function(){a("head link[rel='stylesheet']").attr("rel","alternate stylesheet").attr("rel","stylesheet")})}if(!a.support.boxShadow){a("html").addClass("ui-mobile-nosupport-boxshadow")}})(jQuery)});define(["jquery"],function(a){(function(a,b,c,d){function O(b){var c=b.substr(1);return{setup:function(d,f){if(!M(this)){a.data(this,e,{})}var g=a.data(this,e);g[b]=true;k[b]=(k[b]||0)+1;if(k[b]===1){t.bind(c,H)}a(this).bind(c,N);if(s){k["touchstart"]=(k["touchstart"]||0)+1;if(k["touchstart"]===1){t.bind("touchstart",I).bind("touchend",L).bind("touchmove",K).bind("scroll",J)}}},teardown:function(d,f){--k[b];if(!k[b]){t.unbind(c,H)}if(s){--k["touchstart"];if(!k["touchstart"]){t.unbind("touchstart",I).unbind("touchmove",K).unbind("touchend",L).unbind("scroll",J)}}var g=a(this),h=a.data(this,e);if(h){h[b]=false}g.unbind(c,N);if(!M(this)){g.removeData(e)}}}}function N(){}function M(b){var c=a.data(b,e),d;if(c){for(d in c){if(c[d]){return true}}}return false}function L(a){if(r){return}B();var b=y(a.target),c;G("vmouseup",a,b);if(!o){var d=G("vclick",a,b);if(d&&d.isDefaultPrevented()){c=w(a).changedTouches[0];p.push({touchID:v,x:c.clientX,y:c.clientY});q=true}}G("vmouseout",a,b);o=false;E()}function K(b){if(r){return}var c=w(b).touches[0],d=o,e=a.vmouse.moveDistanceThreshold;o=o||Math.abs(c.pageX-m)>e||Math.abs(c.pageY-n)>e,flags=y(b.target);if(o&&!d){G("vmousecancel",b,flags)}G("vmousemove",b,flags);E()}function J(a){if(r){return}if(!o){G("vmousecancel",a,y(a.target))}o=true;E()}function I(b){var c=w(b).touches,d,e;if(c&&c.length===1){d=b.target;e=y(d);if(e.hasVirtualBinding){v=u++;a.data(d,f,v);F();D();o=false;var g=w(b).touches[0];m=g.pageX;n=g.pageY;G("vmouseover",b,e);G("vmousedown",b,e)}}}function H(b){var c=a.data(b.target,f);if(!q&&(!v||v!==c)){var d=G("v"+b.type,b);if(d){if(d.isDefaultPrevented()){b.preventDefault()}if(d.isPropagationStopped()){b.stopPropagation()}if(d.isImmediatePropagationStopped()){b.stopImmediatePropagation()}}}}function G(b,c,d){var e;if(d&&d[b]||!d&&z(c.target,b)){e=x(c,b);a(c.target).trigger(e)}return e}function F(){if(l){clearTimeout(l);l=0}}function E(){F();l=setTimeout(function(){l=0;C()},a.vmouse.resetTimerDuration)}function D(){A()}function C(){v=0;p.length=0;q=false;B()}function B(){r=true}function A(){r=false}function z(b,c){var d;while(b){d=a.data(b,e);if(d&&(!c||d[c])){return b}b=b.parentNode}return null}function y(b){var c={},d,f;while(b){d=a.data(b,e);for(f in d){if(d[f]){c[f]=c.hasVirtualBinding=true}}b=b.parentNode}return c}function x(b,c){var e=b.type,f,g,i,k,l,m,n,o;b=a.Event(b);b.type=c;f=b.originalEvent;g=a.event.props;if(e.search(/mouse/)>-1){g=j}if(f){for(n=g.length,k;n;){k=g[--n];b[k]=f[k]}}if(e.search(/mouse(down|up)|click/)>-1&&!b.which){b.which=1}if(e.search(/^touch/)!==-1){i=w(f);e=i.touches;l=i.changedTouches;m=e&&e.length?e[0]:l&&l.length?l[0]:d;if(m){for(o=0,len=h.length;o<len;o++){k=h[o];b[k]=m[k]}}}return b}function w(a){while(a&&typeof a.originalEvent!=="undefined"){a=a.originalEvent}return a}var e="virtualMouseBindings",f="virtualTouchID",g="vmouseover vmousedown vmousemove vmouseup vclick vmouseout vmousecancel".split(" "),h="clientX clientY pageX pageY screenX screenY".split(" "),i=a.event.mouseHooks?a.event.mouseHooks.props:[],j=a.event.props.concat(i),k={},l=0,m=0,n=0,o=false,p=[],q=false,r=false,s="addEventListener"in c,t=a(c),u=1,v=0;a.vmouse={moveDistanceThreshold:10,clickDistanceThreshold:10,resetTimerDuration:1500};for(var P=0;P<g.length;P++){a.event.special[g[P]]=O(g[P])}if(s){c.addEventListener("click",function(b){var c=p.length,d=b.target,e,g,h,i,j,k;if(c){e=b.clientX;g=b.clientY;threshold=a.vmouse.clickDistanceThreshold;h=d;while(h){for(i=0;i<c;i++){j=p[i];k=0;if(h===d&&Math.abs(j.x-e)<threshold&&Math.abs(j.y-g)<threshold||a.data(h,f)===j.touchID){b.preventDefault();b.stopPropagation();return}}h=h.parentNode}}},true)}})(jQuery,window,document)});define(["jquery","./jquery.mobile.core","./jquery.mobile.media","./jquery.mobile.support","./jquery.mobile.vmouse"],function(a){(function(a,b,c){function i(b,c,d){var e=d.type;d.type=c;a.event.handle.call(b,d);d.type=e}a.each(("touchstart touchmove touchend orientationchange throttledresize "+"tap taphold swipe swipeleft swiperight scrollstart scrollstop").split(" "),function(b,c){a.fn[c]=function(a){return a?this.bind(c,a):this.trigger(c)};a.attrFn[c]=true});var d=a.support.touch,e="touchmove scroll",f=d?"touchstart":"mousedown",g=d?"touchend":"mouseup",h=d?"touchmove":"mousemove";a.event.special.scrollstart={enabled:true,setup:function(){function g(a,c){d=c;i(b,d?"scrollstart":"scrollstop",a)}var b=this,c=a(b),d,f;c.bind(e,function(b){if(!a.event.special.scrollstart.enabled){return}if(!d){g(b,true)}clearTimeout(f);f=setTimeout(function(){g(b,false)},50)})}};a.event.special.tap={setup:function(){var b=this,c=a(b);c.bind("vmousedown",function(d){function k(a){j();if(e==a.target){i(b,"tap",a)}}function j(){h();c.unbind("vclick",k).unbind("vmouseup",h);a(document).unbind("vmousecancel",j)}function h(){clearTimeout(g)}if(d.which&&d.which!==1){return false}var e=d.target,f=d.originalEvent,g;c.bind("vmouseup",h).bind("vclick",k);a(document).bind("vmousecancel",j);g=setTimeout(function(){i(b,"taphold",a.Event("taphold"))},750)})}};a.event.special.swipe={scrollSupressionThreshold:10,durationThreshold:1e3,horizontalDistanceThreshold:30,verticalDistanceThreshold:75,setup:function(){var b=this,d=a(b);d.bind(f,function(b){function j(b){if(!f){return}var c=b.originalEvent.touches?b.originalEvent.touches[0]:b;i={time:(new Date).getTime(),coords:[c.pageX,c.pageY]};if(Math.abs(f.coords[0]-i.coords[0])>a.event.special.swipe.scrollSupressionThreshold){b.preventDefault()}}var e=b.originalEvent.touches?b.originalEvent.touches[0]:b,f={time:(new Date).getTime(),coords:[e.pageX,e.pageY],origin:a(b.target)},i;d.bind(h,j).one(g,function(b){d.unbind(h,j);if(f&&i){if(i.time-f.time<a.event.special.swipe.durationThreshold&&Math.abs(f.coords[0]-i.coords[0])>a.event.special.swipe.horizontalDistanceThreshold&&Math.abs(f.coords[1]-i.coords[1])<a.event.special.swipe.verticalDistanceThreshold){f.origin.trigger("swipe").trigger(f.coords[0]>i.coords[0]?"swipeleft":"swiperight")}}f=i=c})})}};(function(a,b){function j(){var a=e();if(a!==f){f=a;c.trigger("orientationchange")}}var c=a(b),d,e,f,g,h,i={0:true,180:true};if(a.support.orientation){g=a.mobile.media("all and (orientation: landscape)");h=i[b.orientation];if(g&&h||!g&&!h){i={"-90":true,90:true}}}a.event.special.orientationchange=d={setup:function(){if(a.support.orientation&&a.mobile.orientationChangeEnabled){return false}f=e();c.bind("throttledresize",j)},teardown:function(){if(a.support.orientation&&a.mobile.orientationChangeEnabled){return false}c.unbind("throttledresize",j)},add:function(a){var b=a.handler;a.handler=function(a){a.orientation=e();return b.apply(this,arguments)}}};a.event.special.orientationchange.orientation=e=function(){var c=true,d=document.documentElement;if(a.support.orientation){c=i[b.orientation]}else{c=d&&d.clientWidth/d.clientHeight<1.1}return c?"portrait":"landscape"}})(jQuery,b);(function(){a.event.special.throttledresize={setup:function(){a(this).bind("resize",c)},teardown:function(){a(this).unbind("resize",c)}};var b=250,c=function(){f=(new Date).getTime();g=f-d;if(g>=b){d=f;a(this).trigger("throttledresize")}else{if(e){clearTimeout(e)}e=setTimeout(c,b-g)}},d=0,e,f,g})();a.each({scrollstop:"scrollstart",taphold:"tap",swipeleft:"swipe",swiperight:"swipe"},function(b,c){a.event.special[b]={setup:function(){a(this).bind(c,a.noop)}}})})(jQuery,this)});define(["jquery","../external/requirejs/text!../version.txt","./jquery.mobile.widget"],function(a,b){(function(a,c,d){var e={};a.mobile=a.extend({},{version:b,ns:"",subPageUrlKey:"ui-page",activePageClass:"ui-page-active",activeBtnClass:"ui-btn-active",focusClass:"ui-focus",ajaxEnabled:true,hashListeningEnabled:true,linkBindingEnabled:true,defaultPageTransition:"fade",maxTransitionWidth:false,minScrollBack:10,touchOverflowEnabled:false,defaultDialogTransition:"pop",loadingMessage:"loading",pageLoadErrorMessage:"Error Loading Page",loadingMessageTextVisible:false,loadingMessageTheme:"a",pageLoadErrorMessageTheme:"e",autoInitializePage:true,pushStateEnabled:true,orientationChangeEnabled:true,gradeA:function(){return a.support.mediaquery||a.mobile.browser.ie&&a.mobile.browser.ie>=7},keyCode:{ALT:18,BACKSPACE:8,CAPS_LOCK:20,COMMA:188,COMMAND:91,COMMAND_LEFT:91,COMMAND_RIGHT:93,CONTROL:17,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,INSERT:45,LEFT:37,MENU:93,NUMPAD_ADD:107,NUMPAD_DECIMAL:110,NUMPAD_DIVIDE:111,NUMPAD_ENTER:108,NUMPAD_MULTIPLY:106,NUMPAD_SUBTRACT:109,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SHIFT:16,SPACE:32,TAB:9,UP:38,WINDOWS:91},silentScroll:function(b){if(a.type(b)!=="number"){b=a.mobile.defaultHomeScroll}a.event.special.scrollstart.enabled=false;setTimeout(function(){c.scrollTo(0,b);a(document).trigger("silentscroll",{x:0,y:b})},20);setTimeout(function(){a.event.special.scrollstart.enabled=true},150)},nsNormalizeDict:e,nsNormalize:function(b){if(!b){return}return e[b]||(e[b]=a.camelCase(a.mobile.ns+b))},getInheritedTheme:function(a,b){var c=a[0],d="",e=/ui-(bar|body)-([a-z])\b/,f,g;while(c){var f=c.className||"";if((g=e.exec(f))&&(d=g[2])){break}c=c.parentNode}return d||b||"a"},closestPageData:function(a){return a.closest(':jqmData(role="page"), :jqmData(role="dialog")').data("page")}},a.mobile);a.fn.jqmData=function(b,c){var d;if(typeof b!="undefined"){d=this.data(b?a.mobile.nsNormalize(b):b,c)}return d};a.jqmData=function(b,c,d){var e;if(typeof c!="undefined"){e=a.data(b,c?a.mobile.nsNormalize(c):c,d)}return e};a.fn.jqmRemoveData=function(b){return this.removeData(a.mobile.nsNormalize(b))};a.jqmRemoveData=function(b,c){return a.removeData(b,a.mobile.nsNormalize(c))};a.fn.removeWithDependents=function(){a.removeWithDependents(this)};a.removeWithDependents=function(b){var c=a(b);(c.jqmData("dependents")||a()).remove();c.remove()};a.fn.addDependents=function(b){a.addDependents(a(this),b)};a.addDependents=function(b,c){var d=a(b).jqmData("dependents")||a();a(b).jqmData("dependents",a.merge(d,c))};a.fn.getEncodedText=function(){return a("<div/>").text(a(this).text()).html()};var f=a.find,g=/:jqmData\(([^)]*)\)/g;a.find=function(b,c,d,e){b=b.replace(g,"[data-"+(a.mobile.ns||"")+"$1]");return f.call(this,b,c,d,e)};a.extend(a.find,f);a.find.matches=function(b,c){return a.find(b,null,null,c)};a.find.matchesSelector=function(b,c){return a.find(c,null,null,[b]).length>0}})(jQuery,this)})
;
/**
 * jQuery Mobile Menu 
 * Turn unordered list menu into dropdown select menu
 * version 1.1(27-JULY-2013)
 * 
 * Built on top of the jQuery library
 *   http://jquery.com
 * 
 * Documentation
 *   http://github.com/mambows/mobilemenu
 */

(function($){
$.fn.mobileMenu = function(options) {
  
  var defaults = {
      defaultText: 'Navigate to...',
      className: 'select-menu',
      subMenuClass: 'sub-menu',
      subMenuDash: '&ndash;'
    },
    settings = $.extend( defaults, options ),
    el = $(this);
  
  this.each(function(){
    var $el = $(this),
      $select_menu;

    // ad class to submenu list
    $el.find('ul').addClass(settings.subMenuClass);

    // Create base menu
    var $select_menu = $('<select />',{
      'class' : settings.className + ' ' + el.get(0).className
    }).insertAfter( $el );

    // Create default option
    $('<option />', {
      "value"   : '#',
      "text"    : settings.defaultText
    }).appendTo( $select_menu );

    // Create select option from menu
    $el.find('a').each(function(){
      var $this   = $(this),
        optText = '&nbsp;' + $this.text(),
        optSub  = $this.parents( '.' + settings.subMenuClass ),
        len   = optSub.length,
        dash;
      
      // if menu has sub menu
      if( $this.parents('ul').hasClass( settings.subMenuClass ) ) {
        dash = Array( len+1 ).join( settings.subMenuDash );
        optText = dash + optText;
      }

      // Now build menu and append it
      $('<option />', {
        "value" : this.href,
        "html"  : optText,
        "selected" : (this.href == window.location.href)
      }).appendTo( $select_menu );

    }); // End el.find('a').each

    // Change event on select element
    $select_menu.change(function(){
      var locations = $(this).val();
      if( locations !== '#' ) {
        window.location.href = $(this).val();
      };
    });
    $('.select-menu').show();
  }); // End this.each

  return this;

};
})(jQuery);
$(document).ready(function(){
	$('.sf-menu').mobileMenu();
});
/*! Copyright (c) 2011 Brandon Aaron (http://brandonaaron.net)
 * Licensed under the MIT License (LICENSE.txt).
 *
 * Thanks to: http://adomas.org/javascript-mouse-wheel/ for some pointers.
 * Thanks to: Mathias Bank(http://www.mathias-bank.de) for a scope bug fix.
 * Thanks to: Seamus Leahy for adding deltaX and deltaY
 *
 * Version: 3.0.6
 * 
 * Requires: 1.2.2+
 */

(function(a){function d(b){var c=b||window.event,d=[].slice.call(arguments,1),e=0,f=!0,g=0,h=0;return b=a.event.fix(c),b.type="mousewheel",c.wheelDelta&&(e=c.wheelDelta/120),c.detail&&(e=-c.detail/3),h=e,c.axis!==undefined&&c.axis===c.HORIZONTAL_AXIS&&(h=0,g=-1*e),c.wheelDeltaY!==undefined&&(h=c.wheelDeltaY/120),c.wheelDeltaX!==undefined&&(g=-1*c.wheelDeltaX/120),d.unshift(b,e,g,h),(a.event.dispatch||a.event.handle).apply(this,d)}var b=["DOMMouseScroll","mousewheel"];if(a.event.fixHooks)for(var c=b.length;c;)a.event.fixHooks[b[--c]]=a.event.mouseHooks;a.event.special.mousewheel={setup:function(){if(this.addEventListener)for(var a=b.length;a;)this.addEventListener(b[--a],d,!1);else this.onmousewheel=d},teardown:function(){if(this.removeEventListener)for(var a=b.length;a;)this.removeEventListener(b[--a],d,!1);else this.onmousewheel=null}},a.fn.extend({mousewheel:function(a){return a?this.bind("mousewheel",a):this.trigger("mousewheel")},unmousewheel:function(a){return this.unbind("mousewheel",a)}})})(jQuery)
;
/* jquery.simplr.smoothscroll version 1.0 copyright (c) 2012 https://github.com/simov/simplr-smoothscroll licensed under MIT */

;(function(e){"use strict";e.srSmoothscroll=function(t){var n=e.extend({step:170,speed:1000,ease:"swing"},t||{});var r=e(window),i=e(document),s=0,o=n.step,u=n.speed,a=r.height(),f=navigator.userAgent.indexOf("AppleWebKit")!==-1?e("body"):e("html"),l=false;e("body").mousewheel(function(e,t){l=true;if(t<0)s=s+a>=i.height()?s:s+=o;else s=s<=0?0:s-=o;f.stop().animate({scrollTop:s},u,n.ease,function(){l=false});return false});r.on("resize",function(e){a=r.height()}).on("scroll",function(e){if(!l)s=r.scrollTop()})}})(jQuery);
(function($){
	$.fn.UItoTop = function(options) {

 		var defaults = {
			text: '',
			min: 500,			
			scrollSpeed: 800,
  			containerID: 'toTop',
  			containerClass: 'fa fa-chevron-up',
			easingType: 'linear'
					
 		};

 		var settings = $.extend(defaults, options);
		var containerIDhash = '#' + settings.containerID;
		var containerHoverIDHash = '#'+settings.containerHoverID;
			
		$('body').append('<a href="#" id="'+settings.containerID+'" class="'+settings.containerClass+'" >'+settings.text+'</a>');		
		
		$(containerIDhash).hide().click(function(){			
			$('html, body').stop().animate({scrollTop:0}, settings.scrollSpeed, settings.easingType);
			$('#'+settings.containerHoverID, this).stop().animate({'opacity': 0 }, settings.inDelay, settings.easingType);
			return false;
		})
		
								
		$(window).scroll(function() {
			var sd = $(window).scrollTop();
			if(typeof document.body.style.maxHeight === "undefined") {
				$(containerIDhash).css({
					'position': 'absolute',
					'top': $(window).scrollTop() + $(window).height() - 50
				});
			}
			if ( sd > settings.min ) 
				$(containerIDhash).stop(true,true).fadeIn(600);
			else 
				$(containerIDhash).fadeOut(800);
		});
};
})(jQuery);
/**
 * jQuery Unveil
 * A very lightweight jQuery plugin to lazy load images
 * http://luis-almeida.github.com/unveil
 *
 * Licensed under the MIT license.
 * Copyright 2013 Luís Almeida
 * https://github.com/luis-almeida
 */


;(function($) {

    $.fn.unveil = function(threshold, callback) {

        var $w = $(window),
            th = threshold || 0,
            retina = window.devicePixelRatio > 1,
            attrib = retina? "data-src-retina" : "data-src",
            images = this,
            loaded;

        this.one("unveil", function() {
            var source = this.getAttribute(attrib);
            source = source || this.getAttribute("data-src");
            if (source) {
                this.setAttribute("src", source);
                if (typeof callback === "function") callback.call(this);
            }
        });

        function unveil() {
            var inview = images.filter(function() {
                var $e = $(this);
                if ($e.is(":hidden")) return;

                var wt = $w.scrollTop(),
                    wb = wt + $w.height(),
                    et = $e.offset().top,
                    eb = et + $e.height();

                return eb >= wt - th && et <= wb + th;
            });

            loaded = inview.trigger("unveil");
            images = images.not(loaded);
        }

        $w.on("scroll.unveil resize.unveil lookup.unveil", unveil);

        unveil();

        return this;

    };

})(window.jQuery || window.Zepto);
/* ========================================================================
 * Bootstrap: modal.js v3.1.1
 * http://getbootstrap.com/javascript/#modals
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */



+function ($) {
  'use strict';

  // MODAL CLASS DEFINITION
  // ======================

  var Modal = function (element, options) {
    this.options        = options
    this.$body          = $(document.body)
    this.$element       = $(element)
    this.$backdrop      =
    this.isShown        = null
    this.scrollbarWidth = 0

    if (this.options.remote) {
      this.$element
        .find('.modal-content')
        .load(this.options.remote, $.proxy(function () {
          this.$element.trigger('loaded.bs.modal')
        }, this))
    }
  }

  Modal.DEFAULTS = {
    backdrop: true,
    keyboard: true,
    show: true
  }

  Modal.prototype.toggle = function (_relatedTarget) {
    return this.isShown ? this.hide() : this.show(_relatedTarget)
  }

  Modal.prototype.show = function (_relatedTarget) {
    var that = this
    var e    = $.Event('show.bs.modal', { relatedTarget: _relatedTarget })

    this.$element.trigger(e)

    if (this.isShown || e.isDefaultPrevented()) return

    this.isShown = true

    this.checkScrollbar()
    this.$body.addClass('modal-open')

    this.setScrollbar()
    this.escape()

    this.$element.on('click.dismiss.bs.modal', '[data-dismiss="modal"]', $.proxy(this.hide, this))

    this.backdrop(function () {
      var transition = $.support.transition && that.$element.hasClass('fade')

      if (!that.$element.parent().length) {
        that.$element.appendTo(that.$body) // don't move modals dom position
      }

      that.$element
        .show()
        .scrollTop(0)

      if (transition) {
        that.$element[0].offsetWidth // force reflow
      }

      that.$element
        .addClass('in')
        .attr('aria-hidden', false)

      that.enforceFocus()

      var e = $.Event('shown.bs.modal', { relatedTarget: _relatedTarget })

      transition ?
        that.$element.find('.modal-dialog') // wait for modal to slide in
          .one($.support.transition.end, function () {
            that.$element.trigger('focus').trigger(e)
          })
          .emulateTransitionEnd(300) :
        that.$element.trigger('focus').trigger(e)
    })
  }

  Modal.prototype.hide = function (e) {
    if (e) e.preventDefault()

    e = $.Event('hide.bs.modal')

    this.$element.trigger(e)

    if (!this.isShown || e.isDefaultPrevented()) return

    this.isShown = false

    this.$body.removeClass('modal-open')

    this.resetScrollbar()
    this.escape()

    $(document).off('focusin.bs.modal')

    this.$element
      .removeClass('in')
      .attr('aria-hidden', true)
      .off('click.dismiss.bs.modal')

    $.support.transition && this.$element.hasClass('fade') ?
      this.$element
        .one($.support.transition.end, $.proxy(this.hideModal, this))
        .emulateTransitionEnd(300) :
      this.hideModal()
  }

  Modal.prototype.enforceFocus = function () {
    $(document)
      .off('focusin.bs.modal') // guard against infinite focus loop
      .on('focusin.bs.modal', $.proxy(function (e) {
        if (this.$element[0] !== e.target && !this.$element.has(e.target).length) {
          this.$element.trigger('focus')
        }
      }, this))
  }

  Modal.prototype.escape = function () {
    if (this.isShown && this.options.keyboard) {
      this.$element.on('keyup.dismiss.bs.modal', $.proxy(function (e) {
        e.which == 27 && this.hide()
      }, this))
    } else if (!this.isShown) {
      this.$element.off('keyup.dismiss.bs.modal')
    }
  }

  Modal.prototype.hideModal = function () {
    var that = this
    this.$element.hide()
    this.backdrop(function () {
      that.removeBackdrop()
      that.$element.trigger('hidden.bs.modal')
    })
  }

  Modal.prototype.removeBackdrop = function () {
    this.$backdrop && this.$backdrop.remove()
    this.$backdrop = null
  }

  Modal.prototype.backdrop = function (callback) {
    var animate = this.$element.hasClass('fade') ? 'fade' : ''

    if (this.isShown && this.options.backdrop) {
      var doAnimate = $.support.transition && animate

      this.$backdrop = $('<div class="modal-backdrop ' + animate + '" />')
        .appendTo(this.$body)

      this.$element.on('click.dismiss.bs.modal', $.proxy(function (e) {
        if (e.target !== e.currentTarget) return
        this.options.backdrop == 'static'
          ? this.$element[0].focus.call(this.$element[0])
          : this.hide.call(this)
      }, this))

      if (doAnimate) this.$backdrop[0].offsetWidth // force reflow

      this.$backdrop.addClass('in')

      if (!callback) return

      doAnimate ?
        this.$backdrop
          .one($.support.transition.end, callback)
          .emulateTransitionEnd(150) :
        callback()

    } else if (!this.isShown && this.$backdrop) {
      this.$backdrop.removeClass('in')

      $.support.transition && this.$element.hasClass('fade') ?
        this.$backdrop
          .one($.support.transition.end, callback)
          .emulateTransitionEnd(150) :
        callback()

    } else if (callback) {
      callback()
    }
  }

  Modal.prototype.checkScrollbar = function () {
    if (document.body.clientWidth >= window.innerWidth) return
    this.scrollbarWidth = this.scrollbarWidth || this.measureScrollbar()
  }

  Modal.prototype.setScrollbar =  function () {
    var bodyPad = parseInt(this.$body.css('padding-right') || 0)
    if (this.scrollbarWidth) this.$body.css('padding-right', bodyPad + this.scrollbarWidth)
  }

  Modal.prototype.resetScrollbar = function () {
    this.$body.css('padding-right', '')
  }

  Modal.prototype.measureScrollbar = function () { // thx walsh
    var scrollDiv = document.createElement('div')
    scrollDiv.className = 'modal-scrollbar-measure'
    this.$body.append(scrollDiv)
    var scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth
    this.$body[0].removeChild(scrollDiv)
    return scrollbarWidth
  }


  // MODAL PLUGIN DEFINITION
  // =======================

  var old = $.fn.modal

  $.fn.modal = function (option, _relatedTarget) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.modal')
      var options = $.extend({}, Modal.DEFAULTS, $this.data(), typeof option == 'object' && option)

      if (!data) $this.data('bs.modal', (data = new Modal(this, options)))
      if (typeof option == 'string') data[option](_relatedTarget)
      else if (options.show) data.show(_relatedTarget)
    })
  }

  $.fn.modal.Constructor = Modal


  // MODAL NO CONFLICT
  // =================

  $.fn.modal.noConflict = function () {
    $.fn.modal = old
    return this
  }


  // MODAL DATA-API
  // ==============

  $(document).on('click.bs.modal.data-api', '[data-toggle="modal"]', function (e) {
    var $this   = $(this)
    var href    = $this.attr('href')
    var $target = $($this.attr('data-target') || (href && href.replace(/.*(?=#[^\s]+$)/, ''))) //strip for ie7
    var option  = $target.data('bs.modal') ? 'toggle' : $.extend({ remote: !/#/.test(href) && href }, $target.data(), $this.data())

    if ($this.is('a')) e.preventDefault()

    $target
      .modal(option, this)
      .one('hide', function () {
        $this.is(':visible') && $this.trigger('focus')
      })
  })

}(jQuery);
/*
 *  jQuery OwlCarousel v1.3.3
 *
 *  Copyright (c) 2013 Bartosz Wojciechowski
 *  http://www.owlgraphic.com/owlcarousel/
 *
 *  Licensed under MIT
 *
 */

/*JS Lint helpers: */
/*global dragMove: false, dragEnd: false, $, jQuery, alert, window, document */
/*jslint nomen: true, continue:true */


if (typeof Object.create !== "function") {
    Object.create = function (obj) {
        function F() {}
        F.prototype = obj;
        return new F();
    };
}
(function ($, window, document) {

    var Carousel = {
        init : function (options, el) {
            var base = this;

            base.$elem = $(el);
            base.options = $.extend({}, $.fn.owlCarousel.options, base.$elem.data(), options);

            base.userOptions = options;
            base.loadContent();
        },

        loadContent : function () {
            var base = this, url;

            function getData(data) {
                var i, content = "";
                if (typeof base.options.jsonSuccess === "function") {
                    base.options.jsonSuccess.apply(this, [data]);
                } else {
                    for (i in data.owl) {
                        if (data.owl.hasOwnProperty(i)) {
                            content += data.owl[i].item;
                        }
                    }
                    base.$elem.html(content);
                }
                base.logIn();
            }

            if (typeof base.options.beforeInit === "function") {
                base.options.beforeInit.apply(this, [base.$elem]);
            }

            if (typeof base.options.jsonPath === "string") {
                url = base.options.jsonPath;
                $.getJSON(url, getData);
            } else {
                base.logIn();
            }
        },

        logIn : function () {
            var base = this;

            base.$elem.data("owl-originalStyles", base.$elem.attr("style"));
            base.$elem.data("owl-originalClasses", base.$elem.attr("class"));

            base.$elem.css({opacity: 0});
            base.orignalItems = base.options.items;
            base.checkBrowser();
            base.wrapperWidth = 0;
            base.checkVisible = null;
            base.setVars();
        },

        setVars : function () {
            var base = this;
            if (base.$elem.children().length === 0) {return false; }
            base.baseClass();
            base.eventTypes();
            base.$userItems = base.$elem.children();
            base.itemsAmount = base.$userItems.length;
            base.wrapItems();
            base.$owlItems = base.$elem.find(".owl-item");
            base.$owlWrapper = base.$elem.find(".owl-wrapper");
            base.playDirection = "next";
            base.prevItem = 0;
            base.prevArr = [0];
            base.currentItem = 0;
            base.customEvents();
            base.onStartup();
        },

        onStartup : function () {
            var base = this;
            base.updateItems();
            base.calculateAll();
            base.buildControls();
            base.updateControls();
            base.response();
            base.moveEvents();
            base.stopOnHover();
            base.owlStatus();

            if (base.options.transitionStyle !== false) {
                base.transitionTypes(base.options.transitionStyle);
            }
            if (base.options.autoPlay === true) {
                base.options.autoPlay = 5000;
            }
            base.play();

            base.$elem.find(".owl-wrapper").css("display", "block");

            if (!base.$elem.is(":visible")) {
                base.watchVisibility();
            } else {
                base.$elem.css("opacity", 1);
            }
            base.onstartup = false;
            base.eachMoveUpdate();
            if (typeof base.options.afterInit === "function") {
                base.options.afterInit.apply(this, [base.$elem]);
            }
        },

        eachMoveUpdate : function () {
            var base = this;

            if (base.options.lazyLoad === true) {
                base.lazyLoad();
            }
            if (base.options.autoHeight === true) {
                base.autoHeight();
            }
            base.onVisibleItems();

            if (typeof base.options.afterAction === "function") {
                base.options.afterAction.apply(this, [base.$elem]);
            }
        },

        updateVars : function () {
            var base = this;
            if (typeof base.options.beforeUpdate === "function") {
                base.options.beforeUpdate.apply(this, [base.$elem]);
            }
            base.watchVisibility();
            base.updateItems();
            base.calculateAll();
            base.updatePosition();
            base.updateControls();
            base.eachMoveUpdate();
            if (typeof base.options.afterUpdate === "function") {
                base.options.afterUpdate.apply(this, [base.$elem]);
            }
        },

        reload : function () {
            var base = this;
            window.setTimeout(function () {
                base.updateVars();
            }, 0);
        },

        watchVisibility : function () {
            var base = this;

            if (base.$elem.is(":visible") === false) {
                base.$elem.css({opacity: 0});
                window.clearInterval(base.autoPlayInterval);
                window.clearInterval(base.checkVisible);
            } else {
                return false;
            }
            base.checkVisible = window.setInterval(function () {
                if (base.$elem.is(":visible")) {
                    base.reload();
                    base.$elem.animate({opacity: 1}, 200);
                    window.clearInterval(base.checkVisible);
                }
            }, 500);
        },

        wrapItems : function () {
            var base = this;
            base.$userItems.wrapAll("<div class=\"owl-wrapper\">").wrap("<div class=\"owl-item\"></div>");
            base.$elem.find(".owl-wrapper").wrap("<div class=\"owl-wrapper-outer\">");
            base.wrapperOuter = base.$elem.find(".owl-wrapper-outer");
            base.$elem.css("display", "block");
        },

        baseClass : function () {
            var base = this,
                hasBaseClass = base.$elem.hasClass(base.options.baseClass),
                hasThemeClass = base.$elem.hasClass(base.options.theme);

            if (!hasBaseClass) {
                base.$elem.addClass(base.options.baseClass);
            }

            if (!hasThemeClass) {
                base.$elem.addClass(base.options.theme);
            }
        },

        updateItems : function () {
            var base = this, width, i;

            if (base.options.responsive === false) {
                return false;
            }
            if (base.options.singleItem === true) {
                base.options.items = base.orignalItems = 1;
                base.options.itemsCustom = false;
                base.options.itemsDesktop = false;
                base.options.itemsDesktopSmall = false;
                base.options.itemsTablet = false;
                base.options.itemsTabletSmall = false;
                base.options.itemsMobile = false;
                return false;
            }

            width = $(base.options.responsiveBaseWidth).width();

            if (width > (base.options.itemsDesktop[0] || base.orignalItems)) {
                base.options.items = base.orignalItems;
            }
            if (base.options.itemsCustom !== false) {
                //Reorder array by screen size
                base.options.itemsCustom.sort(function (a, b) {return a[0] - b[0]; });

                for (i = 0; i < base.options.itemsCustom.length; i += 1) {
                    if (base.options.itemsCustom[i][0] <= width) {
                        base.options.items = base.options.itemsCustom[i][1];
                    }
                }

            } else {

                if (width <= base.options.itemsDesktop[0] && base.options.itemsDesktop !== false) {
                    base.options.items = base.options.itemsDesktop[1];
                }

                if (width <= base.options.itemsDesktopSmall[0] && base.options.itemsDesktopSmall !== false) {
                    base.options.items = base.options.itemsDesktopSmall[1];
                }

                if (width <= base.options.itemsTablet[0] && base.options.itemsTablet !== false) {
                    base.options.items = base.options.itemsTablet[1];
                }

                if (width <= base.options.itemsTabletSmall[0] && base.options.itemsTabletSmall !== false) {
                    base.options.items = base.options.itemsTabletSmall[1];
                }

                if (width <= base.options.itemsMobile[0] && base.options.itemsMobile !== false) {
                    base.options.items = base.options.itemsMobile[1];
                }
            }

            //if number of items is less than declared
            if (base.options.items > base.itemsAmount && base.options.itemsScaleUp === true) {
                base.options.items = base.itemsAmount;
            }
        },

        response : function () {
            var base = this,
                smallDelay,
                lastWindowWidth;

            if (base.options.responsive !== true) {
                return false;
            }
            lastWindowWidth = $(window).width();

            base.resizer = function () {
                if ($(window).width() !== lastWindowWidth) {
                    if (base.options.autoPlay !== false) {
                        window.clearInterval(base.autoPlayInterval);
                    }
                    window.clearTimeout(smallDelay);
                    smallDelay = window.setTimeout(function () {
                        lastWindowWidth = $(window).width();
                        base.updateVars();
                    }, base.options.responsiveRefreshRate);
                }
            };
            $(window).resize(base.resizer);
        },

        updatePosition : function () {
            var base = this;
            base.jumpTo(base.currentItem);
            if (base.options.autoPlay !== false) {
                base.checkAp();
            }
        },

        appendItemsSizes : function () {
            var base = this,
                roundPages = 0,
                lastItem = base.itemsAmount - base.options.items;

            base.$owlItems.each(function (index) {
                var $this = $(this);
                $this
                    .css({"width": base.itemWidth})
                    .data("owl-item", Number(index));

                if (index % base.options.items === 0 || index === lastItem) {
                    if (!(index > lastItem)) {
                        roundPages += 1;
                    }
                }
                $this.data("owl-roundPages", roundPages);
            });
        },

        appendWrapperSizes : function () {
            var base = this,
                width = base.$owlItems.length * base.itemWidth;

            base.$owlWrapper.css({
                "width": width * 2,
                "left": 0
            });
            base.appendItemsSizes();
        },

        calculateAll : function () {
            var base = this;
            base.calculateWidth();
            base.appendWrapperSizes();
            base.loops();
            base.max();
        },

        calculateWidth : function () {
            var base = this;
            base.itemWidth = Math.round(base.$elem.width() / base.options.items);
        },

        max : function () {
            var base = this,
                maximum = ((base.itemsAmount * base.itemWidth) - base.options.items * base.itemWidth) * -1;
            if (base.options.items > base.itemsAmount) {
                base.maximumItem = 0;
                maximum = 0;
                base.maximumPixels = 0;
            } else {
                base.maximumItem = base.itemsAmount - base.options.items;
                base.maximumPixels = maximum;
            }
            return maximum;
        },

        min : function () {
            return 0;
        },

        loops : function () {
            var base = this,
                prev = 0,
                elWidth = 0,
                i,
                item,
                roundPageNum;

            base.positionsInArray = [0];
            base.pagesInArray = [];

            for (i = 0; i < base.itemsAmount; i += 1) {
                elWidth += base.itemWidth;
                base.positionsInArray.push(-elWidth);

                if (base.options.scrollPerPage === true) {
                    item = $(base.$owlItems[i]);
                    roundPageNum = item.data("owl-roundPages");
                    if (roundPageNum !== prev) {
                        base.pagesInArray[prev] = base.positionsInArray[i];
                        prev = roundPageNum;
                    }
                }
            }
        },

        buildControls : function () {
            var base = this;
            if (base.options.navigation === true || base.options.pagination === true) {
                base.owlControls = $("<div class=\"owl-controls\"/>").toggleClass("clickable", !base.browser.isTouch).appendTo(base.$elem);
            }
            if (base.options.pagination === true) {
                base.buildPagination();
            }
            if (base.options.navigation === true) {
                base.buildButtons();
            }
        },

        buildButtons : function () {
            var base = this,
                buttonsWrapper = $("<div class=\"owl-buttons\"/>");
            base.owlControls.append(buttonsWrapper);

            base.buttonPrev = $("<div/>", {
                "class" : "owl-prev",
                "html" : base.options.navigationText[0] || ""
            });

            base.buttonNext = $("<div/>", {
                "class" : "owl-next",
                "html" : base.options.navigationText[1] || ""
            });

            buttonsWrapper
                .append(base.buttonPrev)
                .append(base.buttonNext);

            buttonsWrapper.on("touchstart.owlControls mousedown.owlControls", "div[class^=\"owl\"]", function (event) {
                event.preventDefault();
            });

            buttonsWrapper.on("touchend.owlControls mouseup.owlControls", "div[class^=\"owl\"]", function (event) {
                event.preventDefault();
                if ($(this).hasClass("owl-next")) {
                    base.next();
                } else {
                    base.prev();
                }
            });
        },

        buildPagination : function () {
            var base = this;

            base.paginationWrapper = $("<div class=\"owl-pagination\"/>");
            base.owlControls.append(base.paginationWrapper);

            base.paginationWrapper.on("touchend.owlControls mouseup.owlControls", ".owl-page", function (event) {
                event.preventDefault();
                if (Number($(this).data("owl-page")) !== base.currentItem) {
                    base.goTo(Number($(this).data("owl-page")), true);
                }
            });
        },

        updatePagination : function () {
            var base = this,
                counter,
                lastPage,
                lastItem,
                i,
                paginationButton,
                paginationButtonInner;

            if (base.options.pagination === false) {
                return false;
            }

            base.paginationWrapper.html("");

            counter = 0;
            lastPage = base.itemsAmount - base.itemsAmount % base.options.items;

            for (i = 0; i < base.itemsAmount; i += 1) {
                if (i % base.options.items === 0) {
                    counter += 1;
                    if (lastPage === i) {
                        lastItem = base.itemsAmount - base.options.items;
                    }
                    paginationButton = $("<div/>", {
                        "class" : "owl-page"
                    });
                    paginationButtonInner = $("<span></span>", {
                        "text": base.options.paginationNumbers === true ? counter : "",
                        "class": base.options.paginationNumbers === true ? "owl-numbers" : ""
                    });
                    paginationButton.append(paginationButtonInner);

                    paginationButton.data("owl-page", lastPage === i ? lastItem : i);
                    paginationButton.data("owl-roundPages", counter);

                    base.paginationWrapper.append(paginationButton);
                }
            }
            base.checkPagination();
        },
        checkPagination : function () {
            var base = this;
            if (base.options.pagination === false) {
                return false;
            }
            base.paginationWrapper.find(".owl-page").each(function () {
                if ($(this).data("owl-roundPages") === $(base.$owlItems[base.currentItem]).data("owl-roundPages")) {
                    base.paginationWrapper
                        .find(".owl-page")
                        .removeClass("active");
                    $(this).addClass("active");
                }
            });
        },

        checkNavigation : function () {
            var base = this;

            if (base.options.navigation === false) {
                return false;
            }
            if (base.options.rewindNav === false) {
                if (base.currentItem === 0 && base.maximumItem === 0) {
                    base.buttonPrev.addClass("disabled");
                    base.buttonNext.addClass("disabled");
                } else if (base.currentItem === 0 && base.maximumItem !== 0) {
                    base.buttonPrev.addClass("disabled");
                    base.buttonNext.removeClass("disabled");
                } else if (base.currentItem === base.maximumItem) {
                    base.buttonPrev.removeClass("disabled");
                    base.buttonNext.addClass("disabled");
                } else if (base.currentItem !== 0 && base.currentItem !== base.maximumItem) {
                    base.buttonPrev.removeClass("disabled");
                    base.buttonNext.removeClass("disabled");
                }
            }
        },

        updateControls : function () {
            var base = this;
            base.updatePagination();
            base.checkNavigation();
            if (base.owlControls) {
                if (base.options.items >= base.itemsAmount) {
                    base.owlControls.hide();
                } else {
                    base.owlControls.show();
                }
            }
        },

        destroyControls : function () {
            var base = this;
            if (base.owlControls) {
                base.owlControls.remove();
            }
        },

        next : function (speed) {
            var base = this;

            if (base.isTransition) {
                return false;
            }

            base.currentItem += base.options.scrollPerPage === true ? base.options.items : 1;
            if (base.currentItem > base.maximumItem + (base.options.scrollPerPage === true ? (base.options.items - 1) : 0)) {
                if (base.options.rewindNav === true) {
                    base.currentItem = 0;
                    speed = "rewind";
                } else {
                    base.currentItem = base.maximumItem;
                    return false;
                }
            }
            base.goTo(base.currentItem, speed);
        },

        prev : function (speed) {
            var base = this;

            if (base.isTransition) {
                return false;
            }

            if (base.options.scrollPerPage === true && base.currentItem > 0 && base.currentItem < base.options.items) {
                base.currentItem = 0;
            } else {
                base.currentItem -= base.options.scrollPerPage === true ? base.options.items : 1;
            }
            if (base.currentItem < 0) {
                if (base.options.rewindNav === true) {
                    base.currentItem = base.maximumItem;
                    speed = "rewind";
                } else {
                    base.currentItem = 0;
                    return false;
                }
            }
            base.goTo(base.currentItem, speed);
        },

        goTo : function (position, speed, drag) {
            var base = this,
                goToPixel;

            if (base.isTransition) {
                return false;
            }
            if (typeof base.options.beforeMove === "function") {
                base.options.beforeMove.apply(this, [base.$elem]);
            }
            if (position >= base.maximumItem) {
                position = base.maximumItem;
            } else if (position <= 0) {
                position = 0;
            }

            base.currentItem = base.owl.currentItem = position;
            if (base.options.transitionStyle !== false && drag !== "drag" && base.options.items === 1 && base.browser.support3d === true) {
                base.swapSpeed(0);
                if (base.browser.support3d === true) {
                    base.transition3d(base.positionsInArray[position]);
                } else {
                    base.css2slide(base.positionsInArray[position], 1);
                }
                base.afterGo();
                base.singleItemTransition();
                return false;
            }
            goToPixel = base.positionsInArray[position];

            if (base.browser.support3d === true) {
                base.isCss3Finish = false;

                if (speed === true) {
                    base.swapSpeed("paginationSpeed");
                    window.setTimeout(function () {
                        base.isCss3Finish = true;
                    }, base.options.paginationSpeed);

                } else if (speed === "rewind") {
                    base.swapSpeed(base.options.rewindSpeed);
                    window.setTimeout(function () {
                        base.isCss3Finish = true;
                    }, base.options.rewindSpeed);

                } else {
                    base.swapSpeed("slideSpeed");
                    window.setTimeout(function () {
                        base.isCss3Finish = true;
                    }, base.options.slideSpeed);
                }
                base.transition3d(goToPixel);
            } else {
                if (speed === true) {
                    base.css2slide(goToPixel, base.options.paginationSpeed);
                } else if (speed === "rewind") {
                    base.css2slide(goToPixel, base.options.rewindSpeed);
                } else {
                    base.css2slide(goToPixel, base.options.slideSpeed);
                }
            }
            base.afterGo();
        },

        jumpTo : function (position) {
            var base = this;
            if (typeof base.options.beforeMove === "function") {
                base.options.beforeMove.apply(this, [base.$elem]);
            }
            if (position >= base.maximumItem || position === -1) {
                position = base.maximumItem;
            } else if (position <= 0) {
                position = 0;
            }
            base.swapSpeed(0);
            if (base.browser.support3d === true) {
                base.transition3d(base.positionsInArray[position]);
            } else {
                base.css2slide(base.positionsInArray[position], 1);
            }
            base.currentItem = base.owl.currentItem = position;
            base.afterGo();
        },

        afterGo : function () {
            var base = this;

            base.prevArr.push(base.currentItem);
            base.prevItem = base.owl.prevItem = base.prevArr[base.prevArr.length - 2];
            base.prevArr.shift(0);

            if (base.prevItem !== base.currentItem) {
                base.checkPagination();
                base.checkNavigation();
                base.eachMoveUpdate();

                if (base.options.autoPlay !== false) {
                    base.checkAp();
                }
            }
            if (typeof base.options.afterMove === "function" && base.prevItem !== base.currentItem) {
                base.options.afterMove.apply(this, [base.$elem]);
            }
        },

        stop : function () {
            var base = this;
            base.apStatus = "stop";
            window.clearInterval(base.autoPlayInterval);
        },

        checkAp : function () {
            var base = this;
            if (base.apStatus !== "stop") {
                base.play();
            }
        },

        play : function () {
            var base = this;
            base.apStatus = "play";
            if (base.options.autoPlay === false) {
                return false;
            }
            window.clearInterval(base.autoPlayInterval);
            base.autoPlayInterval = window.setInterval(function () {
                base.next(true);
            }, base.options.autoPlay);
        },

        swapSpeed : function (action) {
            var base = this;
            if (action === "slideSpeed") {
                base.$owlWrapper.css(base.addCssSpeed(base.options.slideSpeed));
            } else if (action === "paginationSpeed") {
                base.$owlWrapper.css(base.addCssSpeed(base.options.paginationSpeed));
            } else if (typeof action !== "string") {
                base.$owlWrapper.css(base.addCssSpeed(action));
            }
        },

        addCssSpeed : function (speed) {
            return {
                "-webkit-transition": "all " + speed + "ms ease",
                "-moz-transition": "all " + speed + "ms ease",
                "-o-transition": "all " + speed + "ms ease",
                "transition": "all " + speed + "ms ease"
            };
        },

        removeTransition : function () {
            return {
                "-webkit-transition": "",
                "-moz-transition": "",
                "-o-transition": "",
                "transition": ""
            };
        },

        doTranslate : function (pixels) {
            return {
                "-webkit-transform": "translate3d(" + pixels + "px, 0px, 0px)",
                "-moz-transform": "translate3d(" + pixels + "px, 0px, 0px)",
                "-o-transform": "translate3d(" + pixels + "px, 0px, 0px)",
                "-ms-transform": "translate3d(" + pixels + "px, 0px, 0px)",
                "transform": "translate3d(" + pixels + "px, 0px,0px)"
            };
        },

        transition3d : function (value) {
            var base = this;
            base.$owlWrapper.css(base.doTranslate(value));
        },

        css2move : function (value) {
            var base = this;
            base.$owlWrapper.css({"left" : value});
        },

        css2slide : function (value, speed) {
            var base = this;

            base.isCssFinish = false;
            base.$owlWrapper.stop(true, true).animate({
                "left" : value
            }, {
                duration : speed || base.options.slideSpeed,
                complete : function () {
                    base.isCssFinish = true;
                }
            });
        },

        checkBrowser : function () {
            var base = this,
                translate3D = "translate3d(0px, 0px, 0px)",
                tempElem = document.createElement("div"),
                regex,
                asSupport,
                support3d,
                isTouch;

            tempElem.style.cssText = "  -moz-transform:" + translate3D +
                                  "; -ms-transform:"     + translate3D +
                                  "; -o-transform:"      + translate3D +
                                  "; -webkit-transform:" + translate3D +
                                  "; transform:"         + translate3D;
            regex = /translate3d\(0px, 0px, 0px\)/g;
            asSupport = tempElem.style.cssText.match(regex);
            support3d = (asSupport !== null && asSupport.length === 1);

            isTouch = "ontouchstart" in window || window.navigator.msMaxTouchPoints;

            base.browser = {
                "support3d" : support3d,
                "isTouch" : isTouch
            };
        },

        moveEvents : function () {
            var base = this;
            if (base.options.mouseDrag !== false || base.options.touchDrag !== false) {
                base.gestures();
                base.disabledEvents();
            }
        },

        eventTypes : function () {
            var base = this,
                types = ["s", "e", "x"];

            base.ev_types = {};

            if (base.options.mouseDrag === true && base.options.touchDrag === true) {
                types = [
                    "touchstart.owl mousedown.owl",
                    "touchmove.owl mousemove.owl",
                    "touchend.owl touchcancel.owl mouseup.owl"
                ];
            } else if (base.options.mouseDrag === false && base.options.touchDrag === true) {
                types = [
                    "touchstart.owl",
                    "touchmove.owl",
                    "touchend.owl touchcancel.owl"
                ];
            } else if (base.options.mouseDrag === true && base.options.touchDrag === false) {
                types = [
                    "mousedown.owl",
                    "mousemove.owl",
                    "mouseup.owl"
                ];
            }

            base.ev_types.start = types[0];
            base.ev_types.move = types[1];
            base.ev_types.end = types[2];
        },

        disabledEvents :  function () {
            var base = this;
            base.$elem.on("dragstart.owl", function (event) { event.preventDefault(); });
            base.$elem.on("mousedown.disableTextSelect", function (e) {
                return $(e.target).is('input, textarea, select, option');
            });
        },

        gestures : function () {
            /*jslint unparam: true*/
            var base = this,
                locals = {
                    offsetX : 0,
                    offsetY : 0,
                    baseElWidth : 0,
                    relativePos : 0,
                    position: null,
                    minSwipe : null,
                    maxSwipe: null,
                    sliding : null,
                    dargging: null,
                    targetElement : null
                };

            base.isCssFinish = true;

            function getTouches(event) {
                if (event.touches !== undefined) {
                    return {
                        x : event.touches[0].pageX,
                        y : event.touches[0].pageY
                    };
                }

                if (event.touches === undefined) {
                    if (event.pageX !== undefined) {
                        return {
                            x : event.pageX,
                            y : event.pageY
                        };
                    }
                    if (event.pageX === undefined) {
                        return {
                            x : event.clientX,
                            y : event.clientY
                        };
                    }
                }
            }

            function swapEvents(type) {
                if (type === "on") {
                    $(document).on(base.ev_types.move, dragMove);
                    $(document).on(base.ev_types.end, dragEnd);
                } else if (type === "off") {
                    $(document).off(base.ev_types.move);
                    $(document).off(base.ev_types.end);
                }
            }

            function dragStart(event) {
                var ev = event.originalEvent || event || window.event,
                    position;

                if (ev.which === 3) {
                    return false;
                }
                if (base.itemsAmount <= base.options.items) {
                    return;
                }
                if (base.isCssFinish === false && !base.options.dragBeforeAnimFinish) {
                    return false;
                }
                if (base.isCss3Finish === false && !base.options.dragBeforeAnimFinish) {
                    return false;
                }

                if (base.options.autoPlay !== false) {
                    window.clearInterval(base.autoPlayInterval);
                }

                if (base.browser.isTouch !== true && !base.$owlWrapper.hasClass("grabbing")) {
                    base.$owlWrapper.addClass("grabbing");
                }

                base.newPosX = 0;
                base.newRelativeX = 0;

                $(this).css(base.removeTransition());

                position = $(this).position();
                locals.relativePos = position.left;

                locals.offsetX = getTouches(ev).x - position.left;
                locals.offsetY = getTouches(ev).y - position.top;

                swapEvents("on");

                locals.sliding = false;
                locals.targetElement = ev.target || ev.srcElement;
            }

            function dragMove(event) {
                var ev = event.originalEvent || event || window.event,
                    minSwipe,
                    maxSwipe;

                base.newPosX = getTouches(ev).x - locals.offsetX;
                base.newPosY = getTouches(ev).y - locals.offsetY;
                base.newRelativeX = base.newPosX - locals.relativePos;

                if (typeof base.options.startDragging === "function" && locals.dragging !== true && base.newRelativeX !== 0) {
                    locals.dragging = true;
                    base.options.startDragging.apply(base, [base.$elem]);
                }

                if ((base.newRelativeX > 8 || base.newRelativeX < -8) && (base.browser.isTouch === true)) {
                    if (ev.preventDefault !== undefined) {
                        ev.preventDefault();
                    } else {
                        ev.returnValue = false;
                    }
                    locals.sliding = true;
                }

                if ((base.newPosY > 10 || base.newPosY < -10) && locals.sliding === false) {
                    $(document).off("touchmove.owl");
                }

                minSwipe = function () {
                    return base.newRelativeX / 5;
                };

                maxSwipe = function () {
                    return base.maximumPixels + base.newRelativeX / 5;
                };

                base.newPosX = Math.max(Math.min(base.newPosX, minSwipe()), maxSwipe());
                if (base.browser.support3d === true) {
                    base.transition3d(base.newPosX);
                } else {
                    base.css2move(base.newPosX);
                }
            }

            function dragEnd(event) {
                var ev = event.originalEvent || event || window.event,
                    newPosition,
                    handlers,
                    owlStopEvent;

                ev.target = ev.target || ev.srcElement;

                locals.dragging = false;

                if (base.browser.isTouch !== true) {
                    base.$owlWrapper.removeClass("grabbing");
                }

                if (base.newRelativeX < 0) {
                    base.dragDirection = base.owl.dragDirection = "left";
                } else {
                    base.dragDirection = base.owl.dragDirection = "right";
                }

                if (base.newRelativeX !== 0) {
                    newPosition = base.getNewPosition();
                    base.goTo(newPosition, false, "drag");
                    if (locals.targetElement === ev.target && base.browser.isTouch !== true) {
                        $(ev.target).on("click.disable", function (ev) {
                            ev.stopImmediatePropagation();
                            ev.stopPropagation();
                            ev.preventDefault();
                            $(ev.target).off("click.disable");
                        });
                        handlers = $._data(ev.target, "events").click;
                        owlStopEvent = handlers.pop();
                        handlers.splice(0, 0, owlStopEvent);
                    }
                }
                swapEvents("off");
            }
            base.$elem.on(base.ev_types.start, ".owl-wrapper", dragStart);
        },

        getNewPosition : function () {
            var base = this,
                newPosition = base.closestItem();

            if (newPosition > base.maximumItem) {
                base.currentItem = base.maximumItem;
                newPosition  = base.maximumItem;
            } else if (base.newPosX >= 0) {
                newPosition = 0;
                base.currentItem = 0;
            }
            return newPosition;
        },
        closestItem : function () {
            var base = this,
                array = base.options.scrollPerPage === true ? base.pagesInArray : base.positionsInArray,
                goal = base.newPosX,
                closest = null;

            $.each(array, function (i, v) {
                if (goal - (base.itemWidth / 20) > array[i + 1] && goal - (base.itemWidth / 20) < v && base.moveDirection() === "left") {
                    closest = v;
                    if (base.options.scrollPerPage === true) {
                        base.currentItem = $.inArray(closest, base.positionsInArray);
                    } else {
                        base.currentItem = i;
                    }
                } else if (goal + (base.itemWidth / 20) < v && goal + (base.itemWidth / 20) > (array[i + 1] || array[i] - base.itemWidth) && base.moveDirection() === "right") {
                    if (base.options.scrollPerPage === true) {
                        closest = array[i + 1] || array[array.length - 1];
                        base.currentItem = $.inArray(closest, base.positionsInArray);
                    } else {
                        closest = array[i + 1];
                        base.currentItem = i + 1;
                    }
                }
            });
            return base.currentItem;
        },

        moveDirection : function () {
            var base = this,
                direction;
            if (base.newRelativeX < 0) {
                direction = "right";
                base.playDirection = "next";
            } else {
                direction = "left";
                base.playDirection = "prev";
            }
            return direction;
        },

        customEvents : function () {
            /*jslint unparam: true*/
            var base = this;
            base.$elem.on("owl.next", function () {
                base.next();
            });
            base.$elem.on("owl.prev", function () {
                base.prev();
            });
            base.$elem.on("owl.play", function (event, speed) {
                base.options.autoPlay = speed;
                base.play();
                base.hoverStatus = "play";
            });
            base.$elem.on("owl.stop", function () {
                base.stop();
                base.hoverStatus = "stop";
            });
            base.$elem.on("owl.goTo", function (event, item) {
                base.goTo(item);
            });
            base.$elem.on("owl.jumpTo", function (event, item) {
                base.jumpTo(item);
            });
        },

        stopOnHover : function () {
            var base = this;
            if (base.options.stopOnHover === true && base.browser.isTouch !== true && base.options.autoPlay !== false) {
                base.$elem.on("mouseover", function () {
                    base.stop();
                });
                base.$elem.on("mouseout", function () {
                    if (base.hoverStatus !== "stop") {
                        base.play();
                    }
                });
            }
        },

        lazyLoad : function () {
            var base = this,
                i,
                $item,
                itemNumber,
                $lazyImg,
                follow;

            if (base.options.lazyLoad === false) {
                return false;
            }
            for (i = 0; i < base.itemsAmount; i += 1) {
                $item = $(base.$owlItems[i]);

                if ($item.data("owl-loaded") === "loaded") {
                    continue;
                }

                itemNumber = $item.data("owl-item");
                $lazyImg = $item.find(".lazyOwl");

                if (typeof $lazyImg.data("src") !== "string") {
                    $item.data("owl-loaded", "loaded");
                    continue;
                }
                if ($item.data("owl-loaded") === undefined) {
                    $lazyImg.hide();
                    $item.addClass("loading").data("owl-loaded", "checked");
                }
                if (base.options.lazyFollow === true) {
                    follow = itemNumber >= base.currentItem;
                } else {
                    follow = true;
                }
                if (follow && itemNumber < base.currentItem + base.options.items && $lazyImg.length) {
                    base.lazyPreload($item, $lazyImg);
                }
            }
        },

        lazyPreload : function ($item, $lazyImg) {
            var base = this,
                iterations = 0,
                isBackgroundImg;

            if ($lazyImg.prop("tagName") === "DIV") {
                $lazyImg.css("background-image", "url(" + $lazyImg.data("src") + ")");
                isBackgroundImg = true;
            } else {
                $lazyImg[0].src = $lazyImg.data("src");
            }

            function showImage() {
                $item.data("owl-loaded", "loaded").removeClass("loading");
                $lazyImg.removeAttr("data-src");
                if (base.options.lazyEffect === "fade") {
                    $lazyImg.fadeIn(400);
                } else {
                    $lazyImg.show();
                }
                if (typeof base.options.afterLazyLoad === "function") {
                    base.options.afterLazyLoad.apply(this, [base.$elem]);
                }
            }

            function checkLazyImage() {
                iterations += 1;
                if (base.completeImg($lazyImg.get(0)) || isBackgroundImg === true) {
                    showImage();
                } else if (iterations <= 100) {//if image loads in less than 10 seconds 
                    window.setTimeout(checkLazyImage, 100);
                } else {
                    showImage();
                }
            }

            checkLazyImage();
        },

        autoHeight : function () {
            var base = this,
                $currentimg = $(base.$owlItems[base.currentItem]).find("img"),
                iterations;

            function addHeight() {
                var $currentItem = $(base.$owlItems[base.currentItem]).height();
                base.wrapperOuter.css("height", $currentItem + "px");
                if (!base.wrapperOuter.hasClass("autoHeight")) {
                    window.setTimeout(function () {
                        base.wrapperOuter.addClass("autoHeight");
                    }, 0);
                }
            }

            function checkImage() {
                iterations += 1;
                if (base.completeImg($currentimg.get(0))) {
                    addHeight();
                } else if (iterations <= 100) { //if image loads in less than 10 seconds 
                    window.setTimeout(checkImage, 100);
                } else {
                    base.wrapperOuter.css("height", ""); //Else remove height attribute
                }
            }

            if ($currentimg.get(0) !== undefined) {
                iterations = 0;
                checkImage();
            } else {
                addHeight();
            }
        },

        completeImg : function (img) {
            var naturalWidthType;

            if (!img.complete) {
                return false;
            }
            naturalWidthType = typeof img.naturalWidth;
            if (naturalWidthType !== "undefined" && img.naturalWidth === 0) {
                return false;
            }
            return true;
        },

        onVisibleItems : function () {
            var base = this,
                i;

            if (base.options.addClassActive === true) {
                base.$owlItems.removeClass("active");
            }
            base.visibleItems = [];
            for (i = base.currentItem; i < base.currentItem + base.options.items; i += 1) {
                base.visibleItems.push(i);

                if (base.options.addClassActive === true) {
                    $(base.$owlItems[i]).addClass("active");
                }
            }
            base.owl.visibleItems = base.visibleItems;
        },

        transitionTypes : function (className) {
            var base = this;
            //Currently available: "fade", "backSlide", "goDown", "fadeUp"
            base.outClass = "owl-" + className + "-out";
            base.inClass = "owl-" + className + "-in";
        },

        singleItemTransition : function () {
            var base = this,
                outClass = base.outClass,
                inClass = base.inClass,
                $currentItem = base.$owlItems.eq(base.currentItem),
                $prevItem = base.$owlItems.eq(base.prevItem),
                prevPos = Math.abs(base.positionsInArray[base.currentItem]) + base.positionsInArray[base.prevItem],
                origin = Math.abs(base.positionsInArray[base.currentItem]) + base.itemWidth / 2,
                animEnd = 'webkitAnimationEnd oAnimationEnd MSAnimationEnd animationend';

            base.isTransition = true;

            base.$owlWrapper
                .addClass('owl-origin')
                .css({
                    "-webkit-transform-origin" : origin + "px",
                    "-moz-perspective-origin" : origin + "px",
                    "perspective-origin" : origin + "px"
                });
            function transStyles(prevPos) {
                return {
                    "position" : "relative",
                    "left" : prevPos + "px"
                };
            }

            $prevItem
                .css(transStyles(prevPos, 10))
                .addClass(outClass)
                .on(animEnd, function () {
                    base.endPrev = true;
                    $prevItem.off(animEnd);
                    base.clearTransStyle($prevItem, outClass);
                });

            $currentItem
                .addClass(inClass)
                .on(animEnd, function () {
                    base.endCurrent = true;
                    $currentItem.off(animEnd);
                    base.clearTransStyle($currentItem, inClass);
                });
        },

        clearTransStyle : function (item, classToRemove) {
            var base = this;
            item.css({
                "position" : "",
                "left" : ""
            }).removeClass(classToRemove);

            if (base.endPrev && base.endCurrent) {
                base.$owlWrapper.removeClass('owl-origin');
                base.endPrev = false;
                base.endCurrent = false;
                base.isTransition = false;
            }
        },

        owlStatus : function () {
            var base = this;
            base.owl = {
                "userOptions"   : base.userOptions,
                "baseElement"   : base.$elem,
                "userItems"     : base.$userItems,
                "owlItems"      : base.$owlItems,
                "currentItem"   : base.currentItem,
                "prevItem"      : base.prevItem,
                "visibleItems"  : base.visibleItems,
                "isTouch"       : base.browser.isTouch,
                "browser"       : base.browser,
                "dragDirection" : base.dragDirection
            };
        },

        clearEvents : function () {
            var base = this;
            base.$elem.off(".owl owl mousedown.disableTextSelect");
            $(document).off(".owl owl");
            $(window).off("resize", base.resizer);
        },

        unWrap : function () {
            var base = this;
            if (base.$elem.children().length !== 0) {
                base.$owlWrapper.unwrap();
                base.$userItems.unwrap().unwrap();
                if (base.owlControls) {
                    base.owlControls.remove();
                }
            }
            base.clearEvents();
            base.$elem
                .attr("style", base.$elem.data("owl-originalStyles") || "")
                .attr("class", base.$elem.data("owl-originalClasses"));
        },

        destroy : function () {
            var base = this;
            base.stop();
            window.clearInterval(base.checkVisible);
            base.unWrap();
            base.$elem.removeData();
        },

        reinit : function (newOptions) {
            var base = this,
                options = $.extend({}, base.userOptions, newOptions);
            base.unWrap();
            base.init(options, base.$elem);
        },

        addItem : function (htmlString, targetPosition) {
            var base = this,
                position;

            if (!htmlString) {return false; }

            if (base.$elem.children().length === 0) {
                base.$elem.append(htmlString);
                base.setVars();
                return false;
            }
            base.unWrap();
            if (targetPosition === undefined || targetPosition === -1) {
                position = -1;
            } else {
                position = targetPosition;
            }
            if (position >= base.$userItems.length || position === -1) {
                base.$userItems.eq(-1).after(htmlString);
            } else {
                base.$userItems.eq(position).before(htmlString);
            }

            base.setVars();
        },

        removeItem : function (targetPosition) {
            var base = this,
                position;

            if (base.$elem.children().length === 0) {
                return false;
            }
            if (targetPosition === undefined || targetPosition === -1) {
                position = -1;
            } else {
                position = targetPosition;
            }

            base.unWrap();
            base.$userItems.eq(position).remove();
            base.setVars();
        }

    };

    $.fn.owlCarousel = function (options) {
        return this.each(function () {
            if ($(this).data("owl-init") === true) {
                return false;
            }
            $(this).data("owl-init", true);
            var carousel = Object.create(Carousel);
            carousel.init(options, this);
            $.data(this, "owlCarousel", carousel);
        });
    };

    $.fn.owlCarousel.options = {

        items : 5,
        itemsCustom : false,
        itemsDesktop : [1199, 4],
        itemsDesktopSmall : [979, 3],
        itemsTablet : [768, 2],
        itemsTabletSmall : false,
        itemsMobile : [479, 1],
        singleItem : false,
        itemsScaleUp : false,

        slideSpeed : 200,
        paginationSpeed : 800,
        rewindSpeed : 1000,

        autoPlay : false,
        stopOnHover : false,

        navigation : false,
        navigationText : ["prev", "next"],
        rewindNav : true,
        scrollPerPage : false,

        pagination : true,
        paginationNumbers : false,

        responsive : true,
        responsiveRefreshRate : 200,
        responsiveBaseWidth : window,

        baseClass : "owl-carousel",
        theme : "owl-theme",

        lazyLoad : false,
        lazyFollow : true,
        lazyEffect : "fade",

        autoHeight : false,

        jsonPath : false,
        jsonSuccess : false,

        dragBeforeAnimFinish : true,
        mouseDrag : true,
        touchDrag : true,

        addClassActive : false,
        transitionStyle : false,

        beforeUpdate : false,
        afterUpdate : false,
        beforeInit : false,
        afterInit : false,
        beforeMove : false,
        afterMove : false,
        afterAction : false,
        startDragging : false,
        afterLazyLoad: false
    };
}(jQuery, window, document));
function include(url) {
    document.write('<script src="' + url + '"></script>');
    return false;
}

/* cookie.JS
 ========================================================*/
include('js/jquery.cookie.js');


/* DEVICE.JS
 ========================================================*/
include('js/device.min.js');

/* Stick up menu
 ========================================================*/
include('js/tmstickup.js');
$(window).load(function () {
    if ($('html').hasClass('desktop')) {
        $('#stuck_container').TMStickUp({
        })
    }
});

/* Easing library
 ========================================================*/
include('js/jquery.easing.1.3.js');


/* ToTop
 ========================================================*/
include('js/jquery.ui.totop.js');
$(function () {
    $().UItoTop({ easingType: 'easeOutQuart' });
});


/* DEVICE.JS AND SMOOTH SCROLLIG
 ========================================================*/
include('js/jquery.mousewheel.min.js');
include('js/jquery.simplr.smoothscroll.min.js');
$(function () {
    if ($('html').hasClass('desktop')) {
        $.srSmoothscroll({
            step: 150,
            speed: 800
        });
    }
});

/* Copyright Year
 ========================================================*/
var currentYear = (new Date).getFullYear();
$(document).ready(function () {
    $("#copyright-year").text((new Date).getFullYear());
});


/* Superfish menu
 ========================================================*/
include('js/superfish.js');
include('js/jquery.mobilemenu.js');

/* Unveil
 ========================================================*/
include('js/jquery.unveil.js');
$(document).ready(function () {
    $('img').unveil();
});

/* Orientation tablet fix
 ========================================================*/
$(function () {
// IPad/IPhone
    var viewportmeta = document.querySelector && document.querySelector('meta[name="viewport"]'),
        ua = navigator.userAgent,

        gestureStart = function () {
            viewportmeta.content = "width=device-width, minimum-scale=0.25, maximum-scale=1.6, initial-scale=1.0";
        },

        scaleFix = function () {
            if (viewportmeta && /iPhone|iPad/.test(ua) && !/Opera Mini/.test(ua)) {
                viewportmeta.content = "width=device-width, minimum-scale=1.0, maximum-scale=1.0";
                document.addEventListener("gesturestart", gestureStart, false);
            }
        };

    scaleFix();
    // Menu Android
    if (window.orientation != undefined) {
        var regM = /ipod|ipad|iphone/gi,
            result = ua.match(regM)
        if (!result) {
            $('.sf-menu li').each(function () {
                if ($(">ul", this)[0]) {
                    $(">a", this).toggle(
                        function () {
                            return false;
                        },
                        function () {
                            window.location.href = $(this).attr("href");
                        }
                    );
                }
            })
        }
    }
});
var ua = navigator.userAgent.toLocaleLowerCase(),
    regV = /ipod|ipad|iphone/gi,
    result = ua.match(regV),
    userScale = "";
if (!result) {
    userScale = ",user-scalable=0"
}
document.write('<meta name="viewport" content="width=device-width,initial-scale=1.0' + userScale + '">')

/* Custom script
 ========================================================*/
$(document).ready(function () {
    var camera = $('#camera');
    var owl = $('#owl');
    var owl2 = $('#owl_2');
    var isotope = $('.isotope');

    if(camera.length > 0){
        camera.camera(
            {
                autoAdvance: false,
                height: '31.25%',
                minHeight: '200px',
                pagination: false,
                thumbnails: false,
                playPause: false,
                hover: false,
                loader: 'none',
                navigation: true,
                navigationHover: false,
                mobileNavHover: false,
                fx: 'simpleFade'
            }
        );
    }

    if(owl.length > 0){
        owl.owlCarousel(
            {
                navigation: true,
                autoPlay: true,
                slideSpeed: 300,
                stopOnHover: true,
                pagination: false,
                paginationSpeed: 400,
                singleItem: true,
                mouseDrag: false,
                navigationText: ["", ""]
            }
        );
    }

    if(owl2.length > 0){
        owl2.owlCarousel(
            {
                navigation: true,
                autoPlay: true,
                slideSpeed: 300,
                stopOnHover: true,
                pagination: false,
                paginationSpeed: 400,
                singleItem: true,
                mouseDrag: false,
                navigationText: ["", ""]
            }
        );
    }

    if(isotope.length > 0){
        isotope.isotope({
            itemSelector: '.element-item',
            layoutMode: 'fitRows'
        });

        $('#filters').on( 'click', 'a', function() {
            var filterValue = $( this ).attr('data-filter');
            console.log(filterValue);

            if(filterValue == '*'){
                isotope.isotope({ filter: filterValue });
            }else{
                isotope.isotope({ filter: '.'+filterValue });
            }
            return false;
        });
    }


});
(function() {


}).call(this);
/*
 * jQuery Superfish Menu Plugin - v1.7.4
 * Copyright (c) 2013 Joel Birch
 *
 * Dual licensed under the MIT and GPL licenses:
 *	http://www.opensource.org/licenses/mit-license.php
 *	http://www.gnu.org/licenses/gpl.html
 */


;(function ($) {
	"use strict";

	var methods = (function () {
		// private properties and methods go here
		var c = {
				bcClass: 'sf-breadcrumb',
				menuClass: 'sf-js-enabled',
				anchorClass: 'sf-with-ul',
				menuArrowClass: 'sf-arrows'
			},
			ios = (function () {
				var ios = /iPhone|iPad|iPod/i.test(navigator.userAgent);
				if (ios) {
					// iOS clicks only bubble as far as body children
					$(window).load(function () {
						$('body').children().on('click', $.noop);
					});
				}
				return ios;
			})(),
			wp7 = (function () {
				var style = document.documentElement.style;
				return ('behavior' in style && 'fill' in style && /iemobile/i.test(navigator.userAgent));
			})(),
			toggleMenuClasses = function ($menu, o) {
				var classes = c.menuClass;
				if (o.cssArrows) {
					classes += ' ' + c.menuArrowClass;
				}
				$menu.toggleClass(classes);
			},
			setPathToCurrent = function ($menu, o) {
				return $menu.find('li.' + o.pathClass).slice(0, o.pathLevels)
					.addClass(o.hoverClass + ' ' + c.bcClass)
						.filter(function () {
							return ($(this).children(o.popUpSelector).hide().show().length);
						}).removeClass(o.pathClass);
			},
			toggleAnchorClass = function ($li) {
				$li.children('a').toggleClass(c.anchorClass);
			},
			toggleTouchAction = function ($menu) {
				var touchAction = $menu.css('ms-touch-action');
				touchAction = (touchAction === 'pan-y') ? 'auto' : 'pan-y';
				$menu.css('ms-touch-action', touchAction);
			},
			applyHandlers = function ($menu, o) {
				var targets = 'li:has(' + o.popUpSelector + ')';
				if ($.fn.hoverIntent && !o.disableHI) {
					$menu.hoverIntent(over, out, targets);
				}
				else {
					$menu
						.on('mouseenter.superfish', targets, over)
						.on('mouseleave.superfish', targets, out);
				}
				var touchevent = 'MSPointerDown.superfish';
				if (!ios) {
					touchevent += ' touchend.superfish';
				}
				if (wp7) {
					touchevent += ' mousedown.superfish';
				}
				$menu
					.on('focusin.superfish', 'li', over)
					.on('focusout.superfish', 'li', out)
					.on(touchevent, 'a', o, touchHandler);
			},
			touchHandler = function (e) {
				var $this = $(this),
					$ul = $this.siblings(e.data.popUpSelector);

				if ($ul.length > 0 && $ul.is(':hidden')) {
					$this.one('click.superfish', false);
					if (e.type === 'MSPointerDown') {
						$this.trigger('focus');
					} else {
						$.proxy(over, $this.parent('li'))();
					}
				}
			},
			over = function () {
				var $this = $(this),
					o = getOptions($this);
				clearTimeout(o.sfTimer);
				$this.siblings().superfish('hide').end().superfish('show');
			},
			out = function () {
				var $this = $(this),
					o = getOptions($this);
				if (ios) {
					$.proxy(close, $this, o)();
				}
				else {
					clearTimeout(o.sfTimer);
					o.sfTimer = setTimeout($.proxy(close, $this, o), o.delay);
				}
			},
			close = function (o) {
				o.retainPath = ($.inArray(this[0], o.$path) > -1);
				this.superfish('hide');

				if (!this.parents('.' + o.hoverClass).length) {
					o.onIdle.call(getMenu(this));
					if (o.$path.length) {
						$.proxy(over, o.$path)();
					}
				}
			},
			getMenu = function ($el) {
				return $el.closest('.' + c.menuClass);
			},
			getOptions = function ($el) {
				return getMenu($el).data('sf-options');
			};

		return {
			// public methods
			hide: function (instant) {
				if (this.length) {
					var $this = this,
						o = getOptions($this);
					if (!o) {
						return this;
					}
					var not = (o.retainPath === true) ? o.$path : '',
						$ul = $this.find('li.' + o.hoverClass).add(this).not(not).removeClass(o.hoverClass).children(o.popUpSelector),
						speed = o.speedOut;

					if (instant) {
						$ul.show();
						speed = 0;
					}
					o.retainPath = false;
					o.onBeforeHide.call($ul);
					$ul.stop(true, true).animate(o.animationOut, speed, function () {
						var $this = $(this);
						o.onHide.call($this);
					});
				}
				return this;
			},
			show: function () {
				var o = getOptions(this);
				if (!o) {
					return this;
				}
				var $this = this.addClass(o.hoverClass),
					$ul = $this.children(o.popUpSelector);

				o.onBeforeShow.call($ul);
				$ul.stop(true, true).animate(o.animation, o.speed, function () {
					o.onShow.call($ul);
				});
				return this;
			},
			destroy: function () {
				return this.each(function () {
					var $this = $(this),
						o = $this.data('sf-options'),
						$hasPopUp;
					if (!o) {
						return false;
					}
					$hasPopUp = $this.find(o.popUpSelector).parent('li');
					clearTimeout(o.sfTimer);
					toggleMenuClasses($this, o);
					toggleAnchorClass($hasPopUp);
					toggleTouchAction($this);
					// remove event handlers
					$this.off('.superfish').off('.hoverIntent');
					// clear animation's inline display style
					$hasPopUp.children(o.popUpSelector).attr('style', function (i, style) {
						return style.replace(/display[^;]+;?/g, '');
					});
					// reset 'current' path classes
					o.$path.removeClass(o.hoverClass + ' ' + c.bcClass).addClass(o.pathClass);
					$this.find('.' + o.hoverClass).removeClass(o.hoverClass);
					o.onDestroy.call($this);
					$this.removeData('sf-options');
				});
			},
			init: function (op) {
				return this.each(function () {
					var $this = $(this);
					if ($this.data('sf-options')) {
						return false;
					}
					var o = $.extend({}, $.fn.superfish.defaults, op),
						$hasPopUp = $this.find(o.popUpSelector).parent('li');
					o.$path = setPathToCurrent($this, o);

					$this.data('sf-options', o);

					toggleMenuClasses($this, o);
					toggleAnchorClass($hasPopUp);
					toggleTouchAction($this);
					applyHandlers($this, o);

					$hasPopUp.not('.' + c.bcClass).superfish('hide', true);

					o.onInit.call(this);
				});
			}
		};
	})();

	$.fn.superfish = function (method, args) {
		if (methods[method]) {
			return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
		}
		else if (typeof method === 'object' || ! method) {
			return methods.init.apply(this, arguments);
		}
		else {
			return $.error('Method ' +  method + ' does not exist on jQuery.fn.superfish');
		}
	};

	$.fn.superfish.defaults = {
		popUpSelector: 'ul,.sf-mega', // within menu context
		hoverClass: 'sfHover',
		pathClass: 'overrideThisToUse',
		pathLevels: 1,
		delay: 800,
		animation: {height: 'show'},
		animationOut: {height: 'hide'},
		speed: 'normal',
		speedOut: 'fast',
		cssArrows: true,
		disableHI: false,
		onInit: $.noop,
		onBeforeShow: $.noop,
		onShow: $.noop,
		onBeforeHide: $.noop,
		onHide: $.noop,
		onIdle: $.noop,
		onDestroy: $.noop
	};

	// soon to be deprecated
	$.fn.extend({
		hideSuperfishUl: methods.hide,
		showSuperfishUl: methods.show
	});

})(jQuery);


$(window).load(function(){
	$('.sf-menu').superfish()
})
;
(function($,undefined){
	var 
		def={
			stuckClass:'isStuck'			
		}
		,doc=$(document)

	$.fn.TMStickUp=function(opt){
		opt=$.extend(true,{},def,opt)

		$(this).each(function(){
			var $this=$(this)
				,posY//=$this.offset().top+$this.outerHeight()
				,isStuck=false
				,clone=$this.clone().appendTo($this.parent()).addClass(opt.stuckClass)
				,height//=$this.outerHeight()
				,stuckedHeight=clone.outerHeight()
				,opened//=$.cookie&&$.cookie('panel1')==='opened'
				,tmr

			$(window).resize(function(){
				clearTimeout(tmr)				
				clone.css({top:isStuck?0:-stuckedHeight,visibility:isStuck?'visible':'hidden'})
				tmr=setTimeout(function(){
					posY=$this.offset().top//+$this.outerHeight()				
					height=$this.outerHeight()
					stuckedHeight=clone.outerHeight()
					opened=$.cookie&&$.cookie('panel1')==='opened'

					clone.css({top:isStuck?0:-stuckedHeight})
				},40)
			}).resize()

			clone.css({
				position:'fixed'				
				,width:'100%'
			})

			$this
				.on('rePosition',function(e,d){
					if(isStuck)
						clone.animate({marginTop:d},{easing:'linear'})
					if(d===0)
						opened=false
					else
						opened=true
				})
			
			doc
				.on('scroll',function(){
					var scrollTop=doc.scrollTop()

					if(scrollTop>=posY&&!isStuck){						
						clone
							.stop()
							.css({visibility:'visible'})
							.animate({
								top:0
								,marginTop:opened?50:0
							},{

							})
							
						isStuck=true
					}
					
					if(scrollTop<posY+height&&isStuck){
						clone
							.stop()
							.animate({
								top:-stuckedHeight
								,marginTop:0
							},{
								duration:200
								,complete:function(){
									clone.css({visibility:'hidden'})
								}
							})
						
						isStuck=false
					}			
				})				
				.trigger('scroll')
		})
	}
})(jQuery)
;
// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//





