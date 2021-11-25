module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		0: 0
/******/ 	};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// require() chunk loading for javascript
/******/
/******/ 		// "0" is the signal for "already loaded"
/******/ 		if(installedChunks[chunkId] !== 0) {
/******/ 			var chunk = require("./" + ({"1":"components/about-us","2":"components/banner-on-main-page","3":"components/brands","4":"components/catalog-magazines-main-page","5":"components/catalog-page","6":"components/faq-questions","7":"components/header","8":"components/header-main-page","9":"components/logo-rectangle","10":"components/magazine-description","11":"components/modals-danger-message","12":"components/modals-success-modal","13":"components/modals-warning-message","14":"components/news","15":"components/on-sale-item","16":"components/other-items","17":"components/popular-item","18":"components/product-card","19":"components/product-like","20":"components/u-i-base-loading","21":"components/u-i-loading-on-blocks","22":"lang-ru.js","23":"lang-uz.js","24":"pages/about","25":"pages/allmagazines","26":"pages/application/index","27":"pages/auth/code","28":"pages/auth/login","29":"pages/auth/newpassword","30":"pages/auth/phone","31":"pages/auth/register","32":"pages/basket/index","33":"pages/business/index","34":"pages/faq","35":"pages/favourite/index","36":"pages/filter/index","37":"pages/index","38":"pages/magazine/_id","39":"pages/myorders","40":"pages/news","41":"pages/news/_id","42":"pages/order/_id","43":"pages/product/_id","44":"pages/profile/edit","45":"pages/profile/index","46":"pages/search/index","47":"pages/test"}[chunkId]||chunkId) + ".js");
/******/ 			var moreModules = chunk.modules, chunkIds = chunk.ids;
/******/ 			for(var moduleId in moreModules) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 			for(var i = 0; i < chunkIds.length; i++)
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/_nuxt/";
/******/
/******/ 	// uncaught error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using import().catch()
/******/ 		});
/******/ 	};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 52);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("vue");

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(URLSearchParams) {Object.defineProperty(exports,'__esModule',{value:true});const n=/[^\0-\x7E]/;const t=/[\x2E\u3002\uFF0E\uFF61]/g;const o={overflow:"Overflow Error","not-basic":"Illegal Input","invalid-input":"Invalid Input"};const e=Math.floor;const r=String.fromCharCode;function s(n2){throw new RangeError(o[n2]);}const c=function(n2,t2){return n2+22+75*(n2<26)-((t2!=0)<<5);};const u=function(n2,t2,o2){let r2=0;for(n2=o2?e(n2/700):n2>>1,n2+=e(n2/t2);n2>455;r2+=36){n2=e(n2/35);}return e(r2+36*n2/(n2+38));};function toASCII(o2){return function(n2,o3){const e2=n2.split("@");let r2="";e2.length>1&&(r2=e2[0]+"@",n2=e2[1]);const s2=function(n3,t2){const o4=[];let e3=n3.length;for(;e3--;){o4[e3]=t2(n3[e3]);}return o4;}((n2=n2.replace(t,".")).split("."),o3).join(".");return r2+s2;}(o2,function(t2){return n.test(t2)?"xn--"+function(n2){const t3=[];const o3=(n2=function(n3){const t4=[];let o4=0;const e2=n3.length;for(;o4<e2;){const r2=n3.charCodeAt(o4++);if(r2>=55296&&r2<=56319&&o4<e2){const e3=n3.charCodeAt(o4++);(64512&e3)==56320?t4.push(((1023&r2)<<10)+(1023&e3)+65536):(t4.push(r2),o4--);}else{t4.push(r2);}}return t4;}(n2)).length;let f=128;let i=0;let l=72;for(const o4 of n2){o4<128&&t3.push(r(o4));}const h=t3.length;let p=h;for(h&&t3.push("-");p<o3;){let o4=2147483647;for(const t4 of n2){t4>=f&&t4<o4&&(o4=t4);}const a=p+1;o4-f>e((2147483647-i)/a)&&s("overflow"),i+=(o4-f)*a,f=o4;for(const o5 of n2){if(o5<f&&++i>2147483647&&s("overflow"),o5==f){let n3=i;for(let o6=36;;o6+=36){const s2=o6<=l?1:o6>=l+26?26:o6-l;if(n3<s2){break;}const u2=n3-s2;const f2=36-s2;t3.push(r(c(s2+u2%f2,0))),n3=e(u2/f2);}t3.push(r(c(n3,0))),l=u(i,a,p==h),i=0,++p;}}++i,++f;}return t3.join("");}(t2):t2;});}const HASH_RE=/#/g;const AMPERSAND_RE=/&/g;const SLASH_RE=/\//g;const EQUAL_RE=/=/g;const IM_RE=/\?/g;const PLUS_RE=/\+/g;const ENC_BRACKET_OPEN_RE=/%5B/gi;const ENC_BRACKET_CLOSE_RE=/%5D/gi;const ENC_CARET_RE=/%5E/gi;const ENC_BACKTICK_RE=/%60/gi;const ENC_CURLY_OPEN_RE=/%7B/gi;const ENC_PIPE_RE=/%7C/gi;const ENC_CURLY_CLOSE_RE=/%7D/gi;const ENC_SPACE_RE=/%20/gi;const ENC_SLASH_RE=/%2F/gi;const ENC_ENC_SLASH_RE=/%252F/gi;function encode(text){return encodeURI(""+text).replace(ENC_PIPE_RE,"|").replace(ENC_BRACKET_OPEN_RE,"[").replace(ENC_BRACKET_CLOSE_RE,"]");}function encodeHash(text){return encode(text).replace(ENC_CURLY_OPEN_RE,"{").replace(ENC_CURLY_CLOSE_RE,"}").replace(ENC_CARET_RE,"^");}function encodeQueryValue(text){return encode(text).replace(PLUS_RE,"%2B").replace(ENC_SPACE_RE,"+").replace(HASH_RE,"%23").replace(AMPERSAND_RE,"%26").replace(ENC_BACKTICK_RE,"`").replace(ENC_CURLY_OPEN_RE,"{").replace(ENC_CURLY_CLOSE_RE,"}").replace(ENC_CARET_RE,"^");}function encodeQueryKey(text){return encodeQueryValue(text).replace(EQUAL_RE,"%3D");}function encodePath(text){return encode(text).replace(HASH_RE,"%23").replace(IM_RE,"%3F").replace(ENC_ENC_SLASH_RE,"%2F").replace(AMPERSAND_RE,"%26").replace(PLUS_RE,"%2B");}function encodeParam(text){return encodePath(text).replace(SLASH_RE,"%2F");}function decode(text=""){try{return decodeURIComponent(""+text);}catch(_err){return""+text;}}function decodePath(text){return decode(text.replace(ENC_SLASH_RE,"%252F"));}function decodeQueryValue(text){return decode(text.replace(PLUS_RE," "));}function encodeHost(name=""){return toASCII(name);}function parseQuery(paramsStr=""){const obj={};if(paramsStr[0]==="?"){paramsStr=paramsStr.substr(1);}for(const param of paramsStr.split("&")){const s=param.match(/([^=]+)=?(.*)/)||[];if(s.length<2){continue;}const key=decode(s[1]);if(key==="__proto__"||key==="constructor"){continue;}const value=decodeQueryValue(s[2]||"");if(obj[key]){if(Array.isArray(obj[key])){obj[key].push(value);}else{obj[key]=[obj[key],value];}}else{obj[key]=value;}}return obj;}function encodeQueryItem(key,val){if(!val){return encodeQueryKey(key);}if(Array.isArray(val)){return val.map(_val=>`${encodeQueryKey(key)}=${encodeQueryValue(_val)}`).join("&");}return`${encodeQueryKey(key)}=${encodeQueryValue(val)}`;}function stringifyQuery(query){return Object.keys(query).map(k=>encodeQueryItem(k,query[k])).join("&");}class $URL{constructor(input=""){this.query={};if(typeof input!=="string"){throw new TypeError(`URL input should be string received ${typeof input} (${input})`);}const parsed=parseURL(input);this.protocol=decode(parsed.protocol);this.host=decode(parsed.host);this.auth=decode(parsed.auth);this.pathname=decodePath(parsed.pathname);this.query=parseQuery(parsed.search);this.hash=decode(parsed.hash);}get hostname(){return parseHost(this.host).hostname;}get port(){return parseHost(this.host).port||"";}get username(){return parseAuth(this.auth).username;}get password(){return parseAuth(this.auth).password||"";}get hasProtocol(){return this.protocol.length;}get isAbsolute(){return this.hasProtocol||this.pathname[0]==="/";}get search(){const q=stringifyQuery(this.query);return q.length?"?"+q:"";}get searchParams(){const p=new URLSearchParams();for(const name in this.query){const value=this.query[name];if(Array.isArray(value)){value.forEach(v=>p.append(name,v));}else{p.append(name,value||"");}}return p;}get origin(){return(this.protocol?this.protocol+"//":"")+encodeHost(this.host);}get fullpath(){return encodePath(this.pathname)+this.search+encodeHash(this.hash);}get encodedAuth(){if(!this.auth){return"";}const{username,password}=parseAuth(this.auth);return encodeURIComponent(username)+(password?":"+encodeURIComponent(password):"");}get href(){const auth=this.encodedAuth;const originWithAuth=(this.protocol?this.protocol+"//":"")+(auth?auth+"@":"")+encodeHost(this.host);return this.hasProtocol&&this.isAbsolute?originWithAuth+this.fullpath:this.fullpath;}append(url){if(url.hasProtocol){throw new Error("Cannot append a URL with protocol");}Object.assign(this.query,url.query);if(url.pathname){this.pathname=withTrailingSlash(this.pathname)+withoutLeadingSlash(url.pathname);}if(url.hash){this.hash=url.hash;}}toJSON(){return this.href;}toString(){return this.href;}}function isRelative(inputStr){return["./","../"].some(str=>inputStr.startsWith(str));}function hasProtocol(inputStr,acceptProtocolRelative=false){return /^\w+:\/\/.+/.test(inputStr)||acceptProtocolRelative&&/^\/\/[^/]+/.test(inputStr);}const TRAILING_SLASH_RE=/\/$|\/\?/;function hasTrailingSlash(input="",queryParams=false){if(!queryParams){return input.endsWith("/");}return TRAILING_SLASH_RE.test(input);}function withoutTrailingSlash(input="",queryParams=false){if(!queryParams){return(hasTrailingSlash(input)?input.slice(0,-1):input)||"/";}if(!hasTrailingSlash(input,true)){return input||"/";}const[s0,...s]=input.split("?");return(s0.slice(0,-1)||"/")+(s.length?`?${s.join("?")}`:"");}function withTrailingSlash(input="",queryParams=false){if(!queryParams){return input.endsWith("/")?input:input+"/";}if(hasTrailingSlash(input,true)){return input||"/";}const[s0,...s]=input.split("?");return s0+"/"+(s.length?`?${s.join("?")}`:"");}function hasLeadingSlash(input=""){return input.startsWith("/");}function withoutLeadingSlash(input=""){return(hasLeadingSlash(input)?input.substr(1):input)||"/";}function withLeadingSlash(input=""){return hasLeadingSlash(input)?input:"/"+input;}function cleanDoubleSlashes(input=""){return input.split("://").map(str=>str.replace(/\/{2,}/g,"/")).join("://");}function withBase(input,base){if(isEmptyURL(base)){return input;}const _base=withoutTrailingSlash(base);if(input.startsWith(_base)){return input;}return joinURL(_base,input);}function withoutBase(input,base){if(isEmptyURL(base)){return input;}const _base=withoutTrailingSlash(base);if(input.startsWith(_base)){return input.substr(_base.length)||"/";}return input;}function withQuery(input,query){const parsed=parseURL(input);const mergedQuery={...parseQuery(parsed.search),...query};parsed.search=stringifyQuery(mergedQuery);return stringifyParsedURL(parsed);}function getQuery(input){return parseQuery(parseURL(input).search);}function isEmptyURL(url){return!url||url==="/";}function isNonEmptyURL(url){return url&&url!=="/";}function joinURL(base,...input){let url=base||"";for(const i of input.filter(isNonEmptyURL)){url=url?withTrailingSlash(url)+withoutLeadingSlash(i):i;}return url;}function createURL(input){return new $URL(input);}function normalizeURL(input){return createURL(input).toString();}function resolveURL(base,...input){const url=createURL(base);for(const i of input.filter(isNonEmptyURL)){url.append(createURL(i));}return url.toString();}function isSamePath(p1,p2){return decode(withoutTrailingSlash(p1))===decode(withoutTrailingSlash(p2));}function parseURL(input="",defaultProto){if(!hasProtocol(input,true)){return defaultProto?parseURL(defaultProto+input):parsePath(input);}const[protocol="",auth,hostAndPath]=(input.match(/([^:/]+:)?\/\/([^/@]+@)?(.*)/)||[]).splice(1);const[host="",path=""]=(hostAndPath.match(/([^/?]*)(.*)?/)||[]).splice(1);const{pathname,search,hash}=parsePath(path);return{protocol,auth:auth?auth.substr(0,auth.length-1):"",host,pathname,search,hash};}function parsePath(input=""){const[pathname="",search="",hash=""]=(input.match(/([^#?]*)(\?[^#]*)?(#.*)?/)||[]).splice(1);return{pathname,search,hash};}function parseAuth(input=""){const[username,password]=input.split(":");return{username:decode(username),password:decode(password)};}function parseHost(input=""){const[hostname,port]=(input.match(/([^/]*)(:0-9+)?/)||[]).splice(1);return{hostname:decode(hostname),port};}function stringifyParsedURL(parsed){const fullpath=parsed.pathname+(parsed.search?(parsed.search.startsWith("?")?"":"?")+parsed.search:"")+parsed.hash;if(!parsed.protocol){return fullpath;}return parsed.protocol+"//"+(parsed.auth?parsed.auth+"@":"")+parsed.host+fullpath;}exports.$URL=$URL;exports.cleanDoubleSlashes=cleanDoubleSlashes;exports.createURL=createURL;exports.decode=decode;exports.decodePath=decodePath;exports.decodeQueryValue=decodeQueryValue;exports.encode=encode;exports.encodeHash=encodeHash;exports.encodeHost=encodeHost;exports.encodeParam=encodeParam;exports.encodePath=encodePath;exports.encodeQueryItem=encodeQueryItem;exports.encodeQueryKey=encodeQueryKey;exports.encodeQueryValue=encodeQueryValue;exports.getQuery=getQuery;exports.hasLeadingSlash=hasLeadingSlash;exports.hasProtocol=hasProtocol;exports.hasTrailingSlash=hasTrailingSlash;exports.isEmptyURL=isEmptyURL;exports.isNonEmptyURL=isNonEmptyURL;exports.isRelative=isRelative;exports.isSamePath=isSamePath;exports.joinURL=joinURL;exports.normalizeURL=normalizeURL;exports.parseAuth=parseAuth;exports.parseHost=parseHost;exports.parsePath=parsePath;exports.parseQuery=parseQuery;exports.parseURL=parseURL;exports.resolveURL=resolveURL;exports.stringifyParsedURL=stringifyParsedURL;exports.stringifyQuery=stringifyQuery;exports.withBase=withBase;exports.withLeadingSlash=withLeadingSlash;exports.withQuery=withQuery;exports.withTrailingSlash=withTrailingSlash;exports.withoutBase=withoutBase;exports.withoutLeadingSlash=withoutLeadingSlash;exports.withoutTrailingSlash=withoutTrailingSlash;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(54)["URLSearchParams"]))

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
        injectStyles.call(
          this,
          (options.functional ? this.parent : this).$root.$options.shadowRoot
        )
      }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "default", function() { return /* binding */ addStylesServer; });

// CONCATENATED MODULE: ./node_modules/vue-style-loader/lib/listToStyles.js
/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}

// CONCATENATED MODULE: ./node_modules/vue-style-loader/lib/addStylesServer.js


function addStylesServer (parentId, list, isProduction, context) {
  if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
    context = __VUE_SSR_CONTEXT__
  }
  if (context) {
    if (!context.hasOwnProperty('styles')) {
      Object.defineProperty(context, 'styles', {
        enumerable: true,
        get: function() {
          return renderStyles(context._styles)
        }
      })
      // expose renderStyles for vue-server-renderer (vuejs/#6353)
      context._renderStyles = renderStyles
    }

    var styles = context._styles || (context._styles = {})
    list = listToStyles(parentId, list)
    if (isProduction) {
      addStyleProd(styles, list)
    } else {
      addStyleDev(styles, list)
    }
  }
}

// In production, render as few style tags as possible.
// (mostly because IE9 has a limit on number of style tags)
function addStyleProd (styles, list) {
  for (var i = 0; i < list.length; i++) {
    var parts = list[i].parts
    for (var j = 0; j < parts.length; j++) {
      var part = parts[j]
      // group style tags by media types.
      var id = part.media || 'default'
      var style = styles[id]
      if (style) {
        if (style.ids.indexOf(part.id) < 0) {
          style.ids.push(part.id)
          style.css += '\n' + part.css
        }
      } else {
        styles[id] = {
          ids: [part.id],
          css: part.css,
          media: part.media
        }
      }
    }
  }
}

// In dev we use individual style tag for each module for hot-reload
// and source maps.
function addStyleDev (styles, list) {
  for (var i = 0; i < list.length; i++) {
    var parts = list[i].parts
    for (var j = 0; j < parts.length; j++) {
      var part = parts[j]
      styles[part.id] = {
        ids: [part.id],
        css: part.css,
        media: part.media
      }
    }
  }
}

function renderStyles (styles) {
  var css = ''
  for (var key in styles) {
    var style = styles[key]
    css += '<style data-vue-ssr-id="' + style.ids.join(' ') + '"' +
        (style.media ? ( ' media="' + style.media + '"' ) : '') + '>' +
        style.css + '</style>'
  }
  return css
}


/***/ }),
/* 5 */
/***/ (function(module, exports) {

// This file is intentionally left empty for noop aliases

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("cookie");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("vuex");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("vue-meta");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
function isObject(val){return val!==null&&typeof val==='object';}// Base function to apply defaults
function _defu(baseObj,defaults){var namespace=arguments.length>2&&arguments[2]!==undefined?arguments[2]:'.';var merger=arguments.length>3?arguments[3]:undefined;if(!isObject(defaults)){return _defu(baseObj,{},namespace,merger);}var obj=Object.assign({},defaults);for(var key in baseObj){if(key==='__proto__'||key==='constructor'){continue;}var val=baseObj[key];if(val===null){continue;}if(merger&&merger(obj,key,val,namespace)){continue;}if(Array.isArray(val)&&Array.isArray(obj[key])){obj[key]=obj[key].concat(val);}else if(isObject(val)&&isObject(obj[key])){obj[key]=_defu(val,obj[key],(namespace?"".concat(namespace,"."):'')+key.toString(),merger);}else{obj[key]=val;}}return obj;}// Create defu wrapper with optional merger and multi arg support
function extend(merger){return function(){for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}return args.reduce(function(p,c){return _defu(p,c,'',merger);},{});};}// Basic version
var defu=extend();// Custom version with function merge support
defu.fn=extend(function(obj,key,currentValue,_namespace){if(typeof obj[key]!=='undefined'&&typeof currentValue==='function'){obj[key]=currentValue(obj[key]);return true;}});// Custom version with function merge support only for defined arrays
defu.arrayFn=extend(function(obj,key,currentValue,_namespace){if(Array.isArray(obj[key])&&typeof currentValue==='function'){obj[key]=currentValue(obj[key]);return true;}});// Support user extending
defu.extend=extend;module.exports=defu;

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("vue-no-ssr");

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("@fortawesome/vue-fontawesome");

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("requrl");

/***/ }),
/* 14 */,
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({actions:{async fetchFavouritesId(ctx,token){const res=await this.$axios.$get("/like/count",{headers:{token:token}}).then(response=>{if(response.success){return response.data;}else{throw new Error("Could not save data!");}}).catch(error=>{console.error(error);});ctx.commit("updateFavouritesId",res);},async fetchFavourites(ctx,token){const res=await this.$axios.$get("/like/all",{headers:{token:token}}).then(response=>{if(response.success){return response.data;}else{throw new Error("Could not save data!");}}).catch(error=>console.error(error));ctx.commit("updateFavourites",res);}},mutations:{updateFavourites(state,data){state.favourites.favourites=data;},updateFavouritesId(state,data){state.favourites.favouritesId=data;},pushFavourites(state,data){state.favourites.favouritesId.push(data);},pushFavouritesId(state,data){state.favourites.favouritesId.push(data);},deleteFavourites(state,data){state.favourites.favourites=state.favourites.favourites.filter(res=>res._id!==data);},deleteFavouritesId(state,data){state.favourites.favouritesId=state.favourites.favouritesId.filter(res=>res._id!==data);},deleteAllFavourites(state){state.favourites.favourites=[];},deleteAllFavouritesId(state){state.favourites.favouritesId=[];}},state(){return{favourites:{favouritesId:[],favourites:[]}};},getters:{allFavourites(state){return state.favourites.favourites;},allFavouritesId(state){return state.favourites.favouritesId;}}});

/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({actions:{async fetchBasket(ctx){const res=await this.$axios.$get("/basket/all").then(response=>{if(response.success){return response;}else{throw new Error("Could not save data!");}}).catch(err=>console.error(err));ctx.commit("updateBasket",res.data);return res;},async fetchCountBasket(ctx){const res=await this.$axios.$get("/basket/count").then(response=>{if(response.success){return response;}else{throw new Error("Could not save data!");}}).catch(error=>{console.error(error);});ctx.commit("updateCountBasket",res.count);return res;},async fetchToBasket(ctx,{token,product,param,size,count}){// console.log(token, param, product, size, count);
const res=await this.$axios.$post("basket/create",{headers:{token:token},param:param,product:product,size:size,count:count}).then(response=>{if(response.success){return response.data;}else{throw new Error("Could not save data!");}}).catch(err=>console.error(err));ctx.dispatch("fetchBasket");ctx.commit("pushToBasket",res);ctx.commit("increaseCountBasket");},async updateBasketCount(ctx,{token,id,count}){const res=await this.$axios.$put("basket/"+id,{headers:{token:token},count:count}).then(response=>{if(response.success){return response;}else{throw new Error("Could not save data!");}}).catch(error=>console.error(error));// this action which i call, needed for work correctly count update function because it based on live count product
ctx.dispatch("fetchBasket");// ctx.dispatch("fetchCounBasket");
return res;},async deleteFromBasket(ctx,{token,id}){const res=await this.$axios.$delete("basket/"+id,{headers:{token:token}}).then(response=>{if(response.success){console.log("delete compilited",res);return response;}else{throw new Error("Could not save data!");}}).catch(error=>console.error(error));let data=id=="rm/all"?0:id;console.log(data);ctx.dispatch("fetchBasket");// ctx.dispatch("fetchCounBasket");
}},mutations:{updateBasket(state,data){state.basket.basket=[...data];},updateCountBasket(state,data){state.basket.countBasket=data;},pushToBasket(state,data){state.basket.basket.push(data);},increaseCountBasket(state){state.basket.countBasket++;},decreaseCountBasket(state){state.basket.countBasket--;},basketFilter(state,{product,param,size}){const result=[];for(let i=0;i<state.basket.basket.length;i++){let data=state.basket.basket[i];if(data.param._id===param&&data.product._id===product&&data.size._id===size){result.push(data);}}console.log(state.basket.basket);console.log(result);state.basket.isIn=result;},deleteItemFromBasket(state,{}){const result=[];for(let i=0;i<state.basket.basket.length;i++){let data=state.basket.basket[i];if(data.param._id===param&&data.product._id===product&&data.size._id===size)result.push(data);}},changeCountItem(state,{index,count}){console.log(count,typeof count,index,typeof index);state.basket.basket[index].count=count;}},state(){return{basket:{basket:[],countBasket:null,isIn:null}};},getters:{allInBasket(state){return state.basket.basket;},countBasket(state){return state.basket.countBasket;},isInBasket(state){return state.basket.isIn;}}});

/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({actions:{async fetchRegion(ctx){const regions=await this.$axios.$get("region/all").then(response=>{if(response.success){return response;}else{throw new Error("Could not save data!");}}).catch(err=>console.error(err));console.log("regions",regions);ctx.commit("setRegions",regions.data);return regions;},async createOrder(ctx,{token,amount,address,products}){const res=await this.$axios.$post("order/create",{headers:{token:token},amount:amount,address:address,products:products}).then(res=>{if(res.success){return res;}else{throw new Error("Could not save data!");}}).catch(err=>console.error(err));return res;}},mutations:{resetOrderSetts(state){state.order.amount=null;state.order.address.region=state.order.address.district=state.order.address.address="";state.order.products=[];},setRegions(state,data){state.regions=data;},updateOrderProduct(state,{products,amount}){state.order.products=products;state.order.amount=amount;},updateOrderAllProducts(state,{products2}){state.orderAllProducts=products2;},updateOrderAddress(state,{add}){state.order.address=add;},orderProduct(state,data){state.allProduct=data;}},state(){return{order:{amount:null,address:{region:"",district:"",address:"",phone:""},products:[]},orderAllProducts:["0"],regions:{},allProduct:null};},getters:{orderAmount(state){return state.order.amount;},orderAddress(state){return state.order.address;},orderProducts(state){return state.order.products;},allProduct(state){return state.allProduct;},orderAllProducts(state){return state.orderAllProducts;},orderAll(state){return state.order;},allRegions(state){return state.regions;}}});

/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({actions:{async searchProduct(ctx,{page,limit}){const res=await this.$axios.$post("product/filter?page="+page+"&limit="+limit,{category:ctx.state.searchBody.category,brand:ctx.state.searchBody.brand,search:ctx.state.searchBody.search,sort:ctx.state.searchBody.sort,start:ctx.state.searchBody.start,end:ctx.state.searchBody.end,shop:ctx.state.searchBody.shopId}).then(response=>{console.log("fetch searching",response);if(response.success){console.log("search",response);return response;}else{throw new Error("Could not save data!");}}).catch(err=>console.error(err));return res;},async productCount(ctx){const res=await this.$axios.$post("product/count",{category:ctx.state.searchBody.category,brand:ctx.state.searchBody.brand,search:ctx.state.searchBody.search,sort:ctx.state.searchBody.sort,start:ctx.state.searchBody.start,end:ctx.state.searchBody.end,shop:ctx.state.searchBody.shopId}).then(response=>{console.log("brand via serach",response);if(response.success){console.log("brand via search",response);return response;}else{throw new Error("Could not save data!");}}).catch(err=>console.error(err));return res;}},mutations:{setSearchTxt(state,data){state.searchBody.search=data;},pushSearchCategory(state,data){state.searchBody.category.push(data);},setSearchSort(state,data){state.searchBody.sort=data;},setSearchBrand(state,data){state.searchBody.brand=data;},setSearchPriceStart(state,data){state.searchBody.start=data;},setSearchPriceEnd(state,data){state.searchBody.end=data;},setSearchMainCategory(state,data){state.searchBody.mainCategory=data;},setSearchChildCategory(state,data){state.searchBody.childCategory=data;},setSearchShopId(state,data){state.searchBody.shopId=data;},resetSearchSettings(state){state.searchBody.category=[];state.searchBody.brand=[];state.searchBody.search="";state.searchBody.sort="";state.searchBody.start=null;state.searchBody.end=null;state.searchBody.mainCategory={};state.searchBody.childCategory={};state.searchBody.shopId="";},resetSearchCategory(state){state.searchBody.category=[];state.searchBody.mainCategory={};state.searchBody.childCategory={};}},state(){return{searchBody:{category:[],brand:[],search:"",sort:"",start:null,end:null,mainCategory:{},childCategory:{},shopId:""}};},getters:{searchBody(state){return state.searchBody;},searchBodyTxt(state){return state.searchBody.search;}}});

/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({mutations:{setRedirect(state,{link,index}){state.redirect[index]=link;},resetRedirect(state){state.redirect={1:"",2:"",3:"",4:"",5:""};}},state(){return{redirect:{1:"",2:"",3:"",4:"",5:""}};},getters:{redirectArray(state){return state.redirect;}}});

/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({actions:{async fetchBasket(ctx,token){const res=await this.$axios.$get("/basket/all",{headers:{token:token}}).then(response=>{if(response.success){return response;}else{throw new Error("Could not save data!");}}).catch(err=>console.error(err));ctx.commit("updateBasket",res.data);return res;}},mutations:{updateLoggedIn(state){state.loggedIn=this.$auth.loggedIn;}},state(){return{loggedIn:Boolean};},getters:{loggedIn(state){return state.loggedIn;}}});

/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({state(){categoryAll:[];brandsAll:[];scrollTop:0;limit1:10;limit2:20;limit3:10;},mutations:{GET_CATEGORY(state,data){state.categoryAll=data;},GET_BRANDS(state,data){state.brandsAll=data;},SCROLL_TOP(state,data){state.scrollTop=data;},LIMIT_1(state,data){state.limit1=data;},LIMIT_2(state,data){state.limit2=data;},LIMIT_3(state,data){state.limit3=data;}},actions:{async getCat({commit}){let category=await this.$axios.$get("category/all");commit("GET_CATEGORY",category.data);},async getBrands({commit}){let brands=await this.$axios.$get("brand/all");commit("GET_BRANDS",brands.data);}},getters:{}});

/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = require("vue-client-only");

/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = require("vue-router");

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
function isObject(val){return val!==null&&typeof val==="object";}function _defu(baseObj,defaults,namespace=".",merger){if(!isObject(defaults)){return _defu(baseObj,{},namespace,merger);}const obj=Object.assign({},defaults);for(const key in baseObj){if(key==="__proto__"||key==="constructor"){continue;}const val=baseObj[key];if(val===null||val===void 0){continue;}if(merger&&merger(obj,key,val,namespace)){continue;}if(Array.isArray(val)&&Array.isArray(obj[key])){obj[key]=obj[key].concat(val);}else if(isObject(val)&&isObject(obj[key])){obj[key]=_defu(val,obj[key],(namespace?`${namespace}.`:"")+key.toString(),merger);}else{obj[key]=val;}}return obj;}function extend(merger){return(...args)=>args.reduce((p,c)=>_defu(p,c,"",merger),{});}const defu=extend();defu.fn=extend((obj,key,currentValue,_namespace)=>{if(typeof obj[key]!=="undefined"&&typeof currentValue==="function"){obj[key]=currentValue(obj[key]);return true;}});defu.arrayFn=extend((obj,key,currentValue,_namespace)=>{if(Array.isArray(obj[key])&&typeof currentValue==="function"){obj[key]=currentValue(obj[key]);return true;}});defu.extend=extend;module.exports=defu;

/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = require("vue-i18n");

/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = require("@fortawesome/fontawesome-svg-core");

/***/ }),
/* 27 */
/***/ (function(module, exports) {

module.exports = require("jwt-decode");

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(56);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("6ac3c623", content, true, context)
};

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(58);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("7e56e4e3", content, true, context)
};

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(68);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("56b15182", content, true, context)
};

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(70);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("333865ee", content, true, context)
};

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(72);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("62b1df07", content, true, context)
};

/***/ }),
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Footer.vue?vue&type=template&id=2e32ab3b&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('footer',[_vm._ssrNode("<div class=\"container\" data-v-2e32ab3b>","</div>",[_vm._ssrNode("<div class=\"footer-top\" data-v-2e32ab3b>","</div>",[_vm._ssrNode("<div class=\"footer__item footer__item--1\" data-v-2e32ab3b>","</div>",[_c('nuxt-link',{attrs:{"to":"/"}},[_c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","width":"141","height":"61","viewBox":"0 0 141 61","fill":"none"}},[_c('path',{attrs:{"d":"M22.8819 16.7091C23.0097 16.585 23.1337 16.461 23.2615 16.337C23.4494 16.074 23.7463 15.98 24.0093 15.8297L23.9943 15.841C24.3926 15.4351 24.9563 15.4577 25.4449 15.2848L25.4298 15.2961C26.2679 14.9766 27.1021 14.9879 27.9402 15.2885L27.9289 15.281C28.4099 15.4689 28.9774 15.4313 29.3795 15.8297L29.3719 15.8222C30.6421 16.4347 31.1419 17.4155 31.1231 18.8511C31.063 23.5485 31.1231 28.246 31.0856 32.9472C31.0743 34.2324 31.2246 35.4387 31.8973 36.5511L31.8898 36.5398C32.1115 36.878 32.5061 37.0885 32.6113 37.5131C32.7278 37.7236 32.8856 37.8964 33.1111 37.9941C33.4381 38.0806 33.6372 38.3474 33.8928 38.539L33.8815 38.5278C35.8695 39.5725 37.8273 39.5349 39.7514 38.3549C39.9055 38.2159 40.0596 38.0806 40.2137 37.9415C40.4993 37.5732 40.8525 37.2613 41.1456 36.9006L41.1344 36.9156C41.326 36.615 41.4237 36.258 41.6868 35.9987L41.6755 36.0099C42.1753 34.86 42.2129 33.6499 42.2091 32.4136C42.1866 27.78 42.1979 23.1464 42.2016 18.5129C42.2016 17.9492 42.164 17.3705 42.5699 16.8932L42.5661 16.897C42.8555 16.3746 43.3252 16.0702 43.8476 15.8222L43.8326 15.8334C44.2535 15.4389 44.8134 15.4238 45.3282 15.281C45.3658 15.3186 45.4034 15.3186 45.441 15.2773C46.2828 14.9729 47.1245 14.9766 47.9626 15.2885L47.9475 15.2773C48.4323 15.4652 49.0186 15.3975 49.3906 15.8598C49.7889 16.2092 50.1835 16.555 50.5819 16.9045C50.9727 17.1938 50.9389 17.6222 50.9389 18.0319C50.9426 23.3869 50.9915 28.7458 50.9201 34.1009C50.8825 36.8292 49.9242 39.2831 48.1354 41.3801L48.143 41.3725C47.8761 41.6657 47.7747 42.1053 47.3575 42.2632C46.9968 42.6014 46.5984 42.9058 46.3504 43.3492C46.14 43.5785 45.8731 43.7325 45.6101 43.8979L45.6176 43.8904C45.4748 44.2023 45.1291 44.2549 44.8886 44.4353L44.8961 44.4278C44.0468 45.0065 43.1824 45.5627 42.1903 45.8821L42.1979 45.8783C41.093 46.4946 39.8604 46.7539 38.6428 46.9381C36.7714 47.2237 34.8999 47.017 33.0585 46.5961C32.9119 46.5623 32.7729 46.5134 32.6602 46.4082L32.6714 46.4157C31.7244 46.1602 30.7812 45.8971 29.9657 45.3222L29.9732 45.3297C28.9097 44.8148 27.9289 44.176 27.0796 43.3455L27.0871 43.353C26.4558 42.8945 25.8958 42.3722 25.4674 41.7145L25.4787 41.722C25.2119 41.5529 25.1104 41.2523 24.9037 41.0343C24.7797 40.8502 24.6595 40.666 24.5354 40.4819C24.0619 39.8806 23.7463 39.1967 23.4644 38.4939L23.4682 38.4977C22.6715 37.0772 22.3972 35.5214 22.3896 33.928C22.3671 28.7383 22.3784 23.5485 22.3821 18.3588C22.3633 17.7613 22.3821 17.16 22.8819 16.7091Z","fill":"#F7931F"}}),_vm._v(" "),_c('path',{attrs:{"d":"M77.0829 58.1217C76.9176 58.2833 76.756 58.4449 76.5906 58.6028C76.29 59.08 75.7977 59.3093 75.3317 59.5686L75.3392 59.5573C75.0536 59.8955 74.6252 59.9481 74.2532 60.1097L74.2607 60.0984C71.927 60.9628 69.5933 61.3874 67.2634 60.0871L67.2822 60.0984C67.0078 60.0082 66.835 59.8166 66.726 59.5573L66.7373 59.5723C66.478 59.313 66.2675 59.0236 66.1849 58.6591L66.1961 58.6666C65.2754 56.7012 66.2976 54.112 68.1615 53.6535L68.154 53.661C68.5749 53.289 69.0935 53.3829 69.5858 53.3792C69.924 53.3754 70.2021 53.2026 70.5103 53.1199L70.5065 53.1312C70.6606 52.917 70.9049 52.7892 71.0514 52.5675L71.0439 52.5787C71.4385 51.4438 71.664 50.2789 71.664 49.0726C71.6602 38.8359 71.664 28.603 71.6602 18.3663C71.6602 17.8552 71.6264 17.3404 71.927 16.8856C72.0473 16.709 72.1675 16.5324 72.2878 16.352C72.9191 15.7583 73.6707 15.42 74.52 15.281C74.5538 15.3223 74.5914 15.3223 74.6252 15.281C75.5271 14.9766 76.4291 14.9728 77.331 15.2848L77.3197 15.2735C77.8759 15.4238 78.4922 15.3975 78.9469 15.8334L78.9319 15.8221C79.1874 15.9875 79.5181 16.0514 79.6684 16.3595L79.6609 16.352C80.1457 16.7353 80.311 17.2426 80.311 17.8477C80.3073 28.6142 80.3223 39.3808 80.2922 50.1473C80.2885 51.8572 79.8488 53.5107 79.1122 55.0703L79.1235 55.059C78.9657 55.4348 78.9056 55.8594 78.5749 56.1488L78.5824 56.1413C78.3757 56.4344 78.293 56.7989 78.0224 57.0507L78.0337 57.0357C77.7406 57.4152 77.5752 57.9151 77.0829 58.1217Z","fill":"#F7931F"}}),_vm._v(" "),_c('path',{attrs:{"d":"M64.885 52.9248C64.8474 52.9586 64.8436 52.9925 64.8812 53.03C64.6708 53.5825 64.7008 54.2138 64.3326 54.7136L64.3438 54.6986C64.0056 55.6268 63.6749 56.5625 62.8895 57.2314C62.4724 57.6937 62.0552 58.1559 61.6381 58.6219C61.33 59.0879 60.894 59.3772 60.383 59.5764L60.3905 59.5689C60.0936 59.8846 59.6689 59.9409 59.3007 60.1138L59.3082 60.1063C57.324 60.933 55.3059 61.1209 53.2052 60.5385C51.4728 60.0574 50.74 57.9718 50.9655 56.6114C51.1384 55.5592 51.4841 54.5858 52.4912 54.0146L52.4762 54.0259C52.6641 53.7892 52.9572 53.7629 53.209 53.6539L53.1977 53.6651C53.4871 53.4134 53.8629 53.3645 54.2011 53.3871C55.1744 53.4547 55.8659 53.0864 56.2905 52.2146L56.2755 52.2296C56.5386 51.5945 56.5912 50.9218 56.6137 50.2454C56.625 49.926 56.5724 49.5915 56.8091 49.3172C56.8242 49.0804 56.858 48.8399 56.858 48.6032C56.8617 38.4755 56.8617 28.344 56.858 18.2163C56.858 17.9796 56.8317 17.739 56.8166 17.5023C57.0045 16.6981 57.4442 16.1043 58.2372 15.8112C58.6129 15.3339 59.2067 15.4504 59.699 15.2851L59.6802 15.2926C60.5784 14.9957 61.4728 14.9544 62.3709 15.2926L62.3596 15.2813C62.9158 15.4317 63.5284 15.4129 63.9906 15.8338L63.9756 15.8225C65.0466 16.3148 65.4675 17.1039 65.4637 18.3178C65.4337 28.5657 65.4149 38.8174 65.46 49.0654C65.4675 50.3844 65.2833 51.6697 64.885 52.9248Z","fill":"#F7931F"}}),_vm._v(" "),_c('path',{attrs:{"d":"M127.47 19.4187C127.522 19.3511 127.575 19.2834 127.627 19.2158C127.789 19.0692 127.8 18.8099 128.014 18.7047L128.003 18.7122C128.311 18.2387 128.702 17.8366 129.085 17.427C129.138 17.3744 129.191 17.318 129.247 17.2654C129.495 17.085 129.717 16.8708 129.984 16.713L129.98 16.7167C130.326 16.2996 130.803 16.0741 131.265 15.8261L131.25 15.8374C131.551 15.5255 131.953 15.4202 132.344 15.2812L132.329 15.2925C133.024 14.9392 133.742 14.6874 134.546 14.7137C135.324 14.74 136.105 14.7513 136.883 14.71C137.552 14.6762 138.12 14.8603 138.616 15.2887L138.601 15.2774C139.258 15.6344 139.608 16.2357 139.875 16.8971L139.867 16.8858C140.472 18.2688 140.491 19.5991 139.484 20.8242C139.333 20.873 139.315 20.9933 139.326 21.1286C139.247 21.4405 139.048 21.6321 138.743 21.7186C138.646 21.7937 138.548 21.8727 138.45 21.9478C138.293 22.256 137.943 22.1244 137.71 22.2672L137.718 22.2597C137.394 22.5716 136.988 22.4514 136.616 22.4551C135.35 22.4777 134.072 22.3574 132.843 22.8084L132.851 22.8009C132.682 23.0752 132.362 23.0414 132.118 23.1654L132.129 23.1541C131.874 23.4097 131.573 23.5938 131.239 23.7216C131.085 23.9358 130.942 24.1613 130.664 24.2364L130.671 24.2251C130.506 24.4469 130.288 24.616 130.078 24.7851C129.92 24.9655 129.766 25.1421 129.608 25.3225C129.503 25.6757 129.311 25.9801 129.044 26.2319L129.055 26.2169C127.725 28.6407 127.518 31.2826 127.537 33.977C127.556 37.1149 127.518 40.2566 127.556 43.3945C127.567 44.2701 127.278 44.8939 126.538 45.3298L126.545 45.3223C126.357 45.6944 125.955 45.7132 125.636 45.8672L125.643 45.8597C124.024 46.5737 122.404 46.5512 120.784 45.871C120.668 45.8146 120.551 45.7545 120.435 45.6981C120.183 45.5253 119.935 45.3449 119.721 45.1194L119.739 45.1307C119.39 45.0142 119.36 44.6572 119.183 44.4091L119.195 44.4167C118.879 44.0747 118.898 43.6538 118.898 43.2329C118.898 34.8451 118.898 26.4574 118.898 18.0658C118.898 17.6412 118.901 17.2241 119.21 16.8821L119.195 16.9009C119.785 15.8524 120.754 15.4165 121.889 15.2586L121.878 15.2662C122.72 15.0106 123.558 14.8641 124.377 15.3376C124.583 15.4879 124.82 15.4541 125.053 15.4465C125.32 15.548 125.639 15.533 125.827 15.8035L125.82 15.796C126.053 15.9914 126.421 16.014 126.534 16.3597L126.523 16.3409C127.304 17.0099 127.034 17.923 127.113 18.7648C127.124 19.0166 126.801 19.539 127.47 19.4187Z","fill":"#F7931F"}}),_vm._v(" "),_c('path',{attrs:{"d":"M72.1116 6.62665C72.059 6.56653 72.0027 6.50264 71.9501 6.44251C70.8941 4.73264 70.9467 3.28207 72.1229 1.75634C72.2995 1.57971 72.4762 1.40309 72.6528 1.22646C74.3326 -0.179013 76.2041 -0.27672 78.1883 0.429777C78.3574 0.489904 78.5302 0.55379 78.5753 0.756719C78.9173 1.03481 79.2593 1.3129 79.6013 1.59474C80.21 2.04194 80.4092 2.7071 80.5708 3.39481L80.5633 3.38353C80.8113 3.92092 80.8752 4.46207 80.5708 5.00321C80.5295 5.03704 80.5295 5.07086 80.5633 5.1122C80.3002 6.11181 79.8606 6.98366 78.906 7.50602C78.8572 7.54359 78.8083 7.57742 78.7632 7.615C78.6279 7.93442 78.2935 7.92315 78.0417 8.05092L78.0492 8.0434C76.6738 8.74614 75.2984 8.7499 73.9267 8.03589L73.9418 8.04716C73.5735 7.98328 73.3067 7.73149 73.0173 7.52856C72.8858 7.40831 72.758 7.28805 72.6265 7.1678C72.4236 7.01372 72.2507 6.83334 72.1116 6.62665Z","fill":"#F7931F"}}),_vm._v(" "),_c('path',{attrs:{"d":"M57.1512 6.60778C57.0347 6.43115 56.922 6.25829 56.8055 6.08166C55.7946 4.16886 56.3057 2.28612 58.1283 0.891919C59.5751 -0.21668 62.0403 -0.295597 63.63 0.688989L63.6224 0.681473C63.8066 0.813001 64.0734 0.835549 64.1598 1.09109C64.3853 1.31657 64.6145 1.5458 64.84 1.77128C66.0877 3.04523 66.1102 5.19854 64.8926 6.60778L64.8964 6.60402C64.5995 7.03242 64.2651 7.42325 63.7916 7.67504L63.8066 7.66376C63.63 7.90803 63.3256 7.9193 63.0851 8.04707L63.0926 8.04332C61.4654 8.83249 59.9058 8.71599 58.4139 7.69007L58.4177 7.69383C58.196 7.48714 57.8352 7.45708 57.7037 7.13389L57.7112 7.14141C57.4556 7.03994 57.2865 6.84077 57.1512 6.60778Z","fill":"#F7931F"}}),_vm._v(" "),_c('path',{attrs:{"d":"M89.7773 43.0225C90.2358 43.1991 90.574 43.526 90.8709 43.9056C90.3185 43.8417 89.9765 43.5185 89.7773 43.0225Z","fill":"#F7931F"}}),_vm._v(" "),_c('path',{attrs:{"d":"M90.8633 43.9019C91.1564 44.0146 91.4157 44.1762 91.5961 44.4392C91.2504 44.4017 90.9121 44.3491 90.8633 43.9019Z","fill":"#F7931F"}}),_vm._v(" "),_c('path',{attrs:{"d":"M91.5928 44.4316C91.8333 44.4655 92.0174 44.5895 92.1452 44.7962C91.8633 44.8187 91.5928 44.83 91.5928 44.4316Z","fill":"#F7931F"}}),_vm._v(" "),_c('path',{attrs:{"d":"M113.825 26.8709C113.792 25.2437 113.382 23.6879 112.473 22.3012L112.48 22.3087C112.318 21.7413 111.984 21.279 111.582 20.8619C111.255 20.223 110.774 19.7157 110.237 19.2535C110.139 19.1558 110.041 19.0543 109.947 18.9566C109.545 18.5545 109.192 18.0923 108.673 17.8179L108.681 17.8292C108.576 17.6037 108.327 17.5699 108.151 17.4459C107.824 17.149 107.448 16.9235 107.057 16.7319L107.072 16.7432C106.49 16.2772 105.813 15.9991 105.099 15.8149C104.679 15.4542 104.126 15.4617 103.638 15.2888L103.653 15.3001C101.747 14.5523 99.7481 14.6425 97.7827 14.8003C97.125 14.8529 96.3546 14.883 95.7383 15.2926L95.7496 15.2813C95.2084 15.4805 94.6034 15.4842 94.1186 15.8413L94.1337 15.83C93.4873 16.0479 92.8635 16.3148 92.3148 16.7356L92.3298 16.7244C92.0405 16.9235 91.6797 17.01 91.4317 17.273C91.1574 17.4121 90.8943 17.5699 90.7064 17.8217L90.7139 17.8104C89.8007 18.4568 89.083 19.2986 88.3389 20.1178C88.2825 20.1817 88.2262 20.2456 88.1698 20.3095C87.9819 20.4485 87.9368 20.6853 87.809 20.8619L87.8128 20.8544C87.3693 21.4106 86.9372 21.9742 86.738 22.6732L86.7493 22.6582C86.0916 23.7405 85.7497 24.9355 85.5618 26.1681C85.2235 28.3665 85.419 30.5837 85.3701 32.7897C85.2912 36.5626 86.6553 39.7532 89.2333 42.4664C89.4174 42.6505 89.6016 42.8347 89.782 43.0188C90.1314 43.3307 90.4734 43.6464 90.8718 43.8982C91.0296 44.1988 91.3603 44.2589 91.6046 44.4356C91.7361 44.631 91.9616 44.6798 92.1495 44.7926L92.1344 44.7851C92.7282 45.127 93.2919 45.5179 93.9232 45.8035C96.3246 46.8933 98.8462 47.2616 101.443 46.9459C102.702 46.7918 103.964 46.5137 105.099 45.8674L105.088 45.8786C105.464 45.7208 105.885 45.6532 106.182 45.3375L106.174 45.345C106.415 45.221 106.712 45.206 106.892 44.9692C107.546 44.616 108.181 44.2439 108.7 43.7028L108.684 43.714C109.402 43.2443 109.951 42.5979 110.515 41.9666C110.699 41.79 110.695 41.4668 110.977 41.3653C111.698 40.734 112.1 39.8922 112.499 39.0504C113.348 37.7163 113.814 36.2507 113.837 34.6799C113.867 32.0794 113.878 29.4751 113.825 26.8709ZM105.291 34.1162C105.024 37.5623 101.623 40.0951 98.3388 39.2496C96.0277 38.6558 94.6109 37.0061 94.1976 34.7363C93.7241 32.1395 93.7579 29.4751 94.1825 26.8671C94.626 24.1576 97.3392 22.1434 100.056 22.3162C102.567 22.4741 105.122 24.9956 105.295 27.5586C105.366 28.6333 105.306 29.7156 105.306 30.7942H105.302C105.302 31.899 105.374 33.0114 105.291 34.1162Z","fill":"#F7931F"}}),_vm._v(" "),_c('path',{attrs:{"d":"M1.31156 41.7184C1.19131 41.4816 1.0673 41.2411 0.947041 41.0044C0.135321 38.836 0.00379267 36.585 0.0113086 34.2926C0.0376143 24.4618 0.0376143 14.631 3.47072e-05 4.80018C-0.00372325 3.63521 0.296914 2.75585 1.2815 2.13203C1.70615 1.9554 2.12704 1.77502 2.54793 1.59839C3.67908 1.35037 4.81398 1.36916 5.94513 1.59088C6.79443 1.9554 7.63997 2.32744 8.27506 3.03769C8.44041 3.49241 8.48551 3.96215 8.48551 4.44693C8.47424 7.73514 8.50054 11.0271 8.46672 14.3153C8.4592 15.0444 8.63583 15.3037 9.40997 15.2886C11.8639 15.2435 14.3141 15.2736 16.7681 15.2774C17.4896 15.6081 17.8165 16.277 18.181 16.9158C18.3802 17.8591 18.4065 18.8023 18.181 19.7493C17.8729 20.3732 17.5046 20.9481 16.9259 21.3615C14.4381 21.3765 11.9503 21.4141 9.46634 21.3916C8.75608 21.3841 8.4592 21.5419 8.46672 22.3311C8.50054 26.8256 8.46672 31.3163 8.49302 35.8109C8.49678 36.7278 8.55691 37.6823 9.3799 38.3362C10.0112 39.0014 10.8418 39.0577 11.676 39.0728C12.6869 39.0916 13.6978 39.054 14.7087 39.084C15.8924 39.1179 16.8996 39.5651 17.6549 40.5083C18.3614 41.9326 18.5456 43.3531 17.6549 44.7849C17.0274 45.792 16.1217 46.273 14.953 46.2768C12.4351 46.2805 9.91353 46.3895 7.42201 45.8672C6.8771 45.6905 6.3322 45.5177 5.78729 45.341C5.40398 45.078 4.97933 44.9164 4.53589 44.7886C4.29914 44.5068 3.97596 44.364 3.64526 44.2362C3.28449 43.9356 2.92749 43.6387 2.56672 43.3381C2.36379 43.0036 2.12328 42.7067 1.81137 42.47C1.69487 42.1881 1.55583 41.9175 1.31156 41.7184Z","fill":"#F7931F"}})])])],1),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"footer__item footer__item--2\" data-v-2e32ab3b>","</div>",[_vm._ssrNode("<h2 class=\"footer__title\" data-v-2e32ab3b>"+_vm._ssrEscape("\n                    "+_vm._s(_vm.$t("sitemap"))+"\n                ")+"</h2> "),_vm._ssrNode("<ul class=\"footer\" data-v-2e32ab3b>","</ul>",[_vm._ssrNode("<li data-v-2e32ab3b>","</li>",[_c('nuxt-link',{attrs:{"to":{ name: 'index___' + _vm.$i18n.locale }}},[_vm._v(_vm._s(_vm.$t("home")))])],1),_vm._ssrNode(" "),_vm._ssrNode("<li data-v-2e32ab3b>","</li>",[_c('nuxt-link',{attrs:{"to":{ name: 'index___' + _vm.$i18n.locale }}},[_vm._v(_vm._s(_vm.$t("aksiya")))])],1),_vm._ssrNode(" "),_vm._ssrNode("<li data-v-2e32ab3b>","</li>",[_c('nuxt-link',{attrs:{"to":{ name: 'news___' + _vm.$i18n.locale }}},[_vm._v(_vm._s(_vm.$t("news")))])],1),_vm._ssrNode(" "),_vm._ssrNode("<li data-v-2e32ab3b>","</li>",[_c('nuxt-link',{attrs:{"to":{ name: 'faq___' + _vm.$i18n.locale }}},[_vm._v("FAQ")])],1)],2)],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"footer__item footer__item--3\" data-v-2e32ab3b>","</div>",[_vm._ssrNode("<h2 class=\"footer__title\" data-v-2e32ab3b>"+_vm._ssrEscape("\n                    "+_vm._s(_vm.$t("paySys"))+"\n                ")+"</h2> "),_vm._ssrNode("<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"101\" height=\"31\" viewBox=\"0 0 101 31\" fill=\"none\" data-v-2e32ab3b>","</svg>",[_vm._ssrNode("<path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M99.726 12.4926C100.434 13.5407 100.506 15.1926 99.7537 16.4728C99.0824 17.6161 95.0648 22.0037 93.7574 23.4136C92.6241 24.6382 91.0945 25.8646 89.5889 25.8646H58.0653C53.8049 25.8646 53.5479 24.371 53.5479 20.9942V7.29585C53.5479 3.84698 54.5322 2.8501 57.4416 2.8501H89.5889C91.0945 2.8501 92.4343 3.64477 93.9732 5.26283C95.2796 6.63589 99.1824 11.6863 99.726 12.4926Z\" fill=\"#33CCCC\" data-v-2e32ab3b></path> <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M99.726 12.4926C100.434 13.5407 100.506 15.1926 99.7537 16.4728C99.0824 17.6161 95.0648 22.0037 93.7574 23.4136C92.6241 24.6382 91.0945 25.8646 89.5889 25.8646H58.0653C53.8049 25.8646 53.5479 24.371 53.5479 20.9942V7.29585C53.5479 3.84698 54.5322 2.8501 57.4416 2.8501H89.5889C91.0945 2.8501 92.4343 3.64477 93.9732 5.26283C95.2796 6.63589 99.1824 11.6863 99.726 12.4926Z\" fill=\"url(#paint0_linear)\" data-v-2e32ab3b></path> <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M60.6944 8.14783V8.05764C60.6944 7.61723 60.6586 7.18188 59.9607 7.18188H57.3263C56.714 7.18188 56.6753 7.53201 56.6753 8.07603V11.6962C57.9577 9.79998 59.3796 8.91895 60.6944 8.14783ZM78.3678 21.2289V21.0345H78.3696V12.3214C78.3696 8.66743 76.8162 6.84065 73.7094 6.84103C72.8484 6.83266 72.0021 7.07189 71.265 7.53201C70.5254 7.99292 69.8149 8.63674 69.1333 9.46344C68.7983 8.56505 68.2931 7.9034 67.6177 7.47849C66.9423 7.05358 66.0671 6.8411 64.9922 6.84103C63.7482 6.84103 62.3018 7.2917 61.2766 8.16373C61.0472 8.40127 56.6747 11.96 56.6747 15.6149V21.1932C56.6747 21.3706 56.5919 22.0436 57.3213 22.0436H60.064C60.9166 22.0436 60.8333 21.4663 60.8333 21.2289V12.2068C61.2963 11.5718 62.2422 10.0036 63.7786 10.0036C64.3683 10.0036 64.793 10.21 65.0526 10.6227C65.3122 11.0354 65.4426 11.7274 65.4437 12.6987V19.7454H65.4405V21.1933C65.4405 21.3708 65.3577 22.0438 66.0868 22.0438H68.7945C69.6477 22.0438 69.5644 21.4665 69.5644 21.2291V21.0347H69.5676V12.2072C70.0636 11.5722 71.0519 10.004 72.512 10.004C73.1128 10.004 73.546 10.2104 73.8118 10.6231C74.0776 11.0358 74.2104 11.7278 74.21 12.6991V19.7458H74.2072V21.1937C74.2072 21.3711 74.1248 22.0442 74.8544 22.0442H77.598C78.4511 22.0438 78.3678 21.4663 78.3678 21.2289ZM93.4725 17.6864C92.4975 20.3992 90.1613 21.9153 87.2669 21.9153C83.0743 21.9153 80.3048 18.9612 80.3048 14.5305C80.3048 10.1532 83.1798 6.98034 87.1363 6.98034C91.0502 6.98034 93.6752 9.79883 93.8419 14.339C93.8632 14.9191 93.6993 15.4316 92.9984 15.4316H84.1021C84.1548 17.8662 85.29 19.1794 87.2937 19.1794C88.516 19.1794 89.24 18.6345 89.8706 17.5667C90.1447 17.102 90.7067 17.1279 90.7067 17.1279H92.9984C93.3725 17.1276 93.5382 17.5056 93.4725 17.6861V17.6864ZM87.1363 9.79711C85.4734 9.79711 84.3132 11.0005 84.1021 12.971H90.0632C89.9049 11.2474 89.0076 9.79711 87.1363 9.79711Z\" fill=\"white\" data-v-2e32ab3b></path> <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M16.6624 2.97586C16.31 2.39519 15.8529 1.89005 15.3159 1.48801C14.779 1.09792 14.1893 0.792062 13.5659 0.580359C12.8735 0.347149 12.1583 0.193512 11.4334 0.122227C10.604 0.0378951 9.77117 -0.00284781 8.9379 0.000154552H1.6351C0.978428 0.000154552 0.290093 0.446129 0.290093 1.28714V13.5318C1.21519 15.5726 3.01723 17.7392 5.06604 18.7746V16.3462C5.06604 15.0648 5.99928 14.7785 6.3853 14.7785H8.54457C11.5189 14.7785 13.789 14.1326 15.3549 12.8409C16.9208 11.5511 17.7037 9.63515 17.7037 7.09312C17.7081 6.35861 17.6257 5.6263 17.4584 4.91246C17.292 4.22806 17.0234 3.57468 16.6624 2.97586ZM12.4068 9.26439C12.1547 9.71691 11.7786 10.0821 11.3261 10.314C10.8356 10.5559 10.3058 10.7011 9.76386 10.7419C9.17364 10.7963 8.56416 10.8236 7.9354 10.8237H5.88345C5.3815 10.8237 5.06604 10.4012 5.06604 9.7779V4.77172C5.06604 4.21028 5.42002 3.97475 5.84446 3.97475H7.9354C8.61651 3.97475 9.25524 3.99508 9.85163 4.03574C10.3884 4.06106 10.9155 4.19266 11.4044 4.42341C11.8402 4.63789 12.2008 4.98691 12.4366 5.4223C12.6852 5.87006 12.8094 6.50197 12.8096 7.31802C12.8096 8.14658 12.6753 8.79538 12.4068 9.26439ZM5.06604 19.5659C2.8127 18.6349 1.30204 17.5243 0.290093 16.4233V22.3345C0.290093 22.3345 0.206758 23.2985 1.11417 23.2985H4.3002C5.17418 23.2985 5.06641 22.3345 5.06641 22.3345V19.5659H5.06604ZM50.2183 6.44168H47.359C46.7779 6.44168 46.395 6.69425 46.1645 7.35507C45.9341 8.01589 42.9033 16.7441 42.9033 16.7441C42.9033 16.7441 40.0041 8.19618 39.776 7.5343C39.5478 6.87243 39.1732 6.44168 38.4982 6.44168H35.8709C34.944 6.44168 34.944 7.19451 35.0589 7.49304C35.1522 7.73431 38.7501 17.9316 40.1205 21.8163C40.4437 22.7335 40.5713 23.0095 40.5813 23.3492C40.5913 23.689 40.2572 24.4024 40.0264 24.8118C39.9203 24.9986 39.7986 25.1756 39.6626 25.3403C42.3491 24.5086 45.4454 21.4906 47.0467 18.221C48.63 13.6645 50.718 7.64537 50.8085 7.33745C50.9542 6.83873 50.9527 6.44168 50.2183 6.44168ZM37.5925 26.2074C37.3442 26.2029 37.0964 26.1844 36.8502 26.1519C36.5488 26.1107 35.9849 26.1689 35.9849 26.6796V28.9625C35.9849 29.8338 36.3877 29.8919 36.6095 29.9435C37.2767 30.0873 37.9572 30.1553 38.6388 30.1463C39.5421 30.1463 40.328 29.9763 40.9967 29.6365C41.6719 29.291 42.2736 28.8094 42.7663 28.22C43.3095 27.5638 43.7686 26.8378 44.1321 26.06C44.5313 25.2244 44.9144 24.3038 45.2817 23.2983C45.2817 23.2983 45.4391 22.8439 45.6983 22.0995C44.9096 22.9228 41.1922 26.5679 37.5925 26.2074ZM33.2985 9.1517C33.1433 8.77014 32.9313 8.41603 32.6703 8.10225C32.4102 7.80105 32.1125 7.53702 31.785 7.31716C31.4316 7.07957 31.0567 6.87816 30.6656 6.71579C30.2661 6.55451 29.8554 6.42519 29.4369 6.32899C28.961 6.22124 28.4783 6.14972 27.9924 6.115C27.4677 6.0746 26.8779 6.05423 26.223 6.05392C21.8913 6.05392 19.4248 7.46955 18.8234 10.3008C18.6279 11.1794 19.4683 11.231 19.4683 11.231H22.1331C22.8287 11.231 22.7988 10.9992 23.1364 10.3487C23.258 9.99476 23.4768 9.68512 23.766 9.45779C24.2774 9.05043 25.0439 8.84673 26.0656 8.84666C27.0485 8.84666 27.7626 9.04348 28.208 9.43711C28.6533 9.83075 28.9153 10.4287 28.9942 11.231C28.9942 12.1613 28.7135 12.782 27.6259 12.782C24.9744 12.6825 22.125 12.9927 20.5202 13.9441C18.9154 14.8955 18.0081 16.7555 18.0081 18.753C18.0081 19.5678 18.149 20.2811 18.4308 20.8932C18.7039 21.4933 19.1076 22.0199 19.6103 22.4318C20.1437 22.862 20.7551 23.1774 21.4083 23.3593C22.1508 23.5698 22.918 23.673 23.6879 23.6657C24.8411 23.6657 25.86 23.5161 26.7446 23.217C27.6289 22.9185 28.9974 21.9341 29.1717 21.7904V22.3152C29.1717 22.8352 29.3247 23.299 29.9248 23.299H33.0236C33.6508 23.299 33.7902 22.8352 33.7902 22.2645V12.3932C33.7957 11.7796 33.7563 11.1665 33.6725 10.559C33.6061 10.0754 33.4803 9.6025 33.2985 9.1517ZM29.073 18.8301C29.073 18.8301 28.2728 20.5488 25.4171 20.5488C24.6313 20.5488 23.9926 20.3654 23.5008 19.9987C23.009 19.632 22.7632 19.0612 22.7636 18.2864C22.7636 17.2802 23.1633 16.5698 23.963 16.1556C24.7618 15.7416 26.3611 15.5051 27.5596 15.5341C28.758 15.5631 29.073 16.3462 29.073 16.8869V18.8304V18.8301Z\" fill=\"white\" data-v-2e32ab3b></path> "),_vm._ssrNode("<defs data-v-2e32ab3b>","</defs>",[_c('linearGradient',{attrs:{"id":"paint0_linear","x1":"115.732","y1":"9.49517","x2":"109.2","y2":"47.648","gradientUnits":"userSpaceOnUse"}},[_c('stop',{attrs:{"offset":"0.47231","stop-color":"#00CCCC"}}),_vm._v(" "),_c('stop',{attrs:{"offset":"1","stop-color":"#3399FF"}})],1)],1)],2)],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"footer__item footer__item--4\" data-v-2e32ab3b>","</div>",[_vm._ssrNode("<h2 class=\"footer__title\" data-v-2e32ab3b>"+_vm._ssrEscape("\n                    "+_vm._s(_vm.$t("spage"))+"\n                ")+"</h2> "),_vm._ssrNode("<ul class=\"footer\" data-v-2e32ab3b>","</ul>",[_vm._ssrNode("<li data-v-2e32ab3b>","</li>",[_c('nuxt-link',{attrs:{"to":{ name: 'about___' + _vm.$i18n.locale }}},[_vm._v(_vm._s(_vm.$t("about")))])],1),_vm._ssrNode(" "),_vm._ssrNode("<li data-v-2e32ab3b>","</li>",[_c('nuxt-link',{attrs:{"to":{ name: 'business___' + _vm.$i18n.locale }}},[_vm._v("\n                            "+_vm._s(_vm.$t("partner"))+"\n                        ")])],1)],2),_vm._ssrNode(" <h2 class=\"footer__title lang\" data-v-2e32ab3b>"+_vm._ssrEscape("\n                    "+_vm._s(_vm.$t("language"))+"\n                ")+"</h2> <select name=\"language\" id=\"select-lang\" data-v-2e32ab3b><option disabled=\"disabled\" selected=\"selected\" data-v-2e32ab3b>"+_vm._ssrEscape("\n                        "+_vm._s(_vm.$t("language"))+"\n                    ")+"</option> <option value=\"ru\" data-v-2e32ab3b>"+_vm._ssrEscape("\n                        "+_vm._s(_vm.$t("ru"))+"\n                    ")+"</option> <option value=\"uz\" data-v-2e32ab3b>"+_vm._ssrEscape(" "+_vm._s(_vm.$t("uz")))+"</option></select>")],2),_vm._ssrNode(" <div class=\"footer__item footer__item--5\" data-v-2e32ab3b><h2 class=\"footer__title\" data-v-2e32ab3b>"+_vm._ssrEscape("\n                    "+_vm._s(_vm.$t("adres"))+"\n                ")+"</h2> <div class=\"info__item\" data-v-2e32ab3b><span data-v-2e32ab3b><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"20\" height=\"28\" viewBox=\"0 0 20 28\" fill=\"none\" data-v-2e32ab3b><path d=\"M19.2881 9.8C19.2881 8.51305 19.0424 7.23869 18.5649 6.0497C18.0875 4.86071 17.3878 3.78037 16.5056 2.87035C15.6234 1.96034 14.5762 1.23848 13.4236 0.745981C12.271 0.253484 11.0356 0 9.78809 0C8.54053 0 7.30519 0.253484 6.15259 0.745981C5 1.23848 3.95273 1.96034 3.07057 2.87035C2.18841 3.78037 1.48865 4.86071 1.01123 6.0497C0.53381 7.23869 0.288086 8.51305 0.288086 9.8C0.288086 11.7418 0.844515 13.5478 1.78773 15.071H1.77687C4.97973 20.244 9.78809 28 9.78809 28L17.7993 15.071H17.7898C18.7675 13.4979 19.2875 11.6686 19.2881 9.8ZM9.78809 14C8.70828 14 7.67269 13.5575 6.90915 12.7698C6.14561 11.9822 5.71666 10.9139 5.71666 9.8C5.71666 8.68609 6.14561 7.6178 6.90915 6.83015C7.67269 6.0425 8.70828 5.6 9.78809 5.6C10.8679 5.6 11.9035 6.0425 12.667 6.83015C13.4306 7.6178 13.8595 8.68609 13.8595 9.8C13.8595 10.9139 13.4306 11.9822 12.667 12.7698C11.9035 13.5575 10.8679 14 9.78809 14Z\" fill=\"white\" data-v-2e32ab3b></path></svg></span> <h5 data-v-2e32ab3b>"+_vm._ssrEscape("\n                        "+_vm._s(_vm.$t("addr"))+"\n                    ")+"</h5></div> <div class=\"info__item\" data-v-2e32ab3b><span data-v-2e32ab3b><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"19\" height=\"14\" viewBox=\"0 0 19 14\" fill=\"none\" data-v-2e32ab3b><path d=\"M17.9471 4.61317C18.0842 4.50039 18.2881 4.6059 18.2881 4.78417V12.2242C18.2881 13.1883 17.5322 13.9705 16.6006 13.9705H1.97559C1.04395 13.9705 0.288086 13.1883 0.288086 12.2242V4.78781C0.288086 4.6059 0.488477 4.50403 0.629102 4.61681C1.4166 5.24985 2.46074 6.05388 6.04668 8.74975C6.78848 9.31003 8.04004 10.4888 9.28809 10.4815C10.5432 10.4924 11.8193 9.2882 12.533 8.74975C16.1189 6.05388 17.1596 5.24621 17.9471 4.61317ZM9.28809 9.31366C10.1037 9.32822 11.2779 8.25132 11.8686 7.80747C16.5338 4.30393 16.8889 3.99833 17.9646 3.12517C18.1686 2.96145 18.2881 2.70678 18.2881 2.43756V1.74631C18.2881 0.782202 17.5322 0 16.6006 0H1.97559C1.04395 0 0.288086 0.782202 0.288086 1.74631V2.43756C0.288086 2.70678 0.407617 2.95782 0.611523 3.12517C1.6873 3.99469 2.04238 4.30393 6.70762 7.80747C7.29824 8.25132 8.47246 9.32822 9.28809 9.31366Z\" fill=\"white\" data-v-2e32ab3b></path></svg></span> <h5 data-v-2e32ab3b>info.tujjor@gmail.com</h5></div> <div class=\"info__item\" data-v-2e32ab3b><span data-v-2e32ab3b><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"19\" height=\"19\" viewBox=\"0 0 19 19\" fill=\"none\" data-v-2e32ab3b><path d=\"M12.2889 13.6791L13.8388 12.1318C14.0476 11.9259 14.3117 11.7851 14.5991 11.7262C14.8866 11.6673 15.1849 11.693 15.458 11.8002L17.347 12.5531C17.623 12.665 17.8596 12.8558 18.0271 13.1017C18.1945 13.3475 18.2854 13.6374 18.2881 13.9347V17.3886C18.2865 17.5908 18.2439 17.7906 18.1629 17.976C18.0819 18.1614 17.9641 18.3285 17.8167 18.4672C17.6693 18.606 17.4953 18.7135 17.3052 18.7834C17.1151 18.8533 16.9128 18.884 16.7104 18.8737C3.47337 18.0517 0.802427 6.86116 0.297301 2.57837C0.273853 2.36805 0.295277 2.15516 0.360164 1.95371C0.425051 1.75225 0.53193 1.56679 0.67377 1.40953C0.81561 1.25227 0.989197 1.12678 1.18311 1.0413C1.37702 0.955824 1.58687 0.912304 1.79884 0.913602H5.14097C5.43921 0.914484 5.73037 1.00442 5.97699 1.17183C6.22361 1.33925 6.41442 1.5765 6.52488 1.85305L7.27911 3.73887C7.39 4.01039 7.41829 4.30851 7.36045 4.59599C7.30261 4.88346 7.1612 5.14756 6.95389 5.35528L5.40392 6.90261C5.40392 6.90261 6.29654 12.9331 12.2889 13.6791Z\" fill=\"white\" data-v-2e32ab3b></path></svg></span> <a href=\"tel:+998939938811\" data-v-2e32ab3b>+99893 993 8811</a></div> <ul class=\"social-links\" data-v-2e32ab3b><li data-v-2e32ab3b><a href=\"#\" target=\"_blank\" data-v-2e32ab3b><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"25\" height=\"20\" viewBox=\"0 0 25 20\" fill=\"none\" data-v-2e32ab3b><path d=\"M22.6681 0.131505L1.40874 8.27737C-0.0421283 8.85641 -0.0337346 9.66062 1.14255 10.0192L6.60068 11.7111L19.2292 3.79398C19.8263 3.43298 20.3719 3.62718 19.9235 4.02274L9.69186 13.198H9.68947L9.69186 13.1992L9.31536 18.7894C9.86693 18.7894 10.1103 18.538 10.4197 18.2414L13.0708 15.6798L18.5853 19.7271C19.6021 20.2835 20.3323 19.9975 20.5854 18.7918L24.2053 1.84003C24.5758 0.363835 23.6382 -0.304562 22.6681 0.131505Z\" fill=\"white\" data-v-2e32ab3b></path></svg></a></li> <li data-v-2e32ab3b><a href=\"https://www.instagram.com/tujjor.uz/\" target=\"_blank\" data-v-2e32ab3b><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"21\" height=\"20\" viewBox=\"0 0 21 20\" fill=\"none\" data-v-2e32ab3b><path d=\"M10.2854 6.66525C8.44919 6.66525 6.95071 8.16376 6.95071 10C6.95071 11.8362 8.44919 13.3348 10.2854 13.3348C12.1216 13.3348 13.6201 11.8362 13.6201 10C13.6201 8.16376 12.1216 6.66525 10.2854 6.66525ZM20.287 10C20.287 8.61907 20.2995 7.25064 20.2219 5.87221C20.1444 4.27113 19.7791 2.85017 18.6084 1.67938C17.4351 0.506085 16.0167 0.14334 14.4156 0.065788C13.0347 -0.0117644 11.6663 0.000744113 10.2879 0.000744113C8.90699 0.000744113 7.53859 -0.0117644 6.16019 0.065788C4.55914 0.14334 3.1382 0.508587 1.96743 1.67938C0.794162 2.85267 0.431424 4.27113 0.353873 5.87221C0.276322 7.25314 0.28883 8.62157 0.28883 10C0.28883 11.3784 0.276322 12.7494 0.353873 14.1278C0.431424 15.7289 0.796664 17.1498 1.96743 18.3206C3.1407 19.4939 4.55914 19.8567 6.16019 19.9342C7.5411 20.0118 8.90949 19.9993 10.2879 19.9993C11.6688 19.9993 13.0372 20.0118 14.4156 19.9342C16.0167 19.8567 17.4376 19.4914 18.6084 18.3206C19.7816 17.1473 20.1444 15.7289 20.2219 14.1278C20.302 12.7494 20.287 11.3809 20.287 10ZM10.2854 15.131C7.44603 15.131 5.15453 12.8394 5.15453 10C5.15453 7.16058 7.44603 4.86903 10.2854 4.86903C13.1248 4.86903 15.4163 7.16058 15.4163 10C15.4163 12.8394 13.1248 15.131 10.2854 15.131ZM15.6264 5.8572C14.9635 5.8572 14.4281 5.32184 14.4281 4.65889C14.4281 3.99594 14.9635 3.46058 15.6264 3.46058C16.2893 3.46058 16.8247 3.99594 16.8247 4.65889C16.8249 4.81631 16.794 4.97222 16.7339 5.1177C16.6737 5.26317 16.5855 5.39535 16.4742 5.50666C16.3629 5.61798 16.2307 5.70624 16.0852 5.76639C15.9397 5.82654 15.7838 5.8574 15.6264 5.8572Z\" fill=\"white\" data-v-2e32ab3b></path></svg></a></li> <li data-v-2e32ab3b><a href=\"https://m.facebook.com/pages/category/Product-Service/Tujjoruz-105731721362746/\" target=\"_blank\" data-v-2e32ab3b><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"11\" height=\"20\" viewBox=\"0 0 11 20\" fill=\"none\" data-v-2e32ab3b><path d=\"M9.63282 11.2494L10.1515 7.63H6.90905V5.28125C6.90905 4.29125 7.36184 3.32562 8.81417 3.32562H10.2881V0.244375C10.2881 0.244375 8.95071 0 7.67168 0C5.00159 0 3.25634 1.73375 3.25634 4.87187V7.63062H0.288086V11.25H3.25634V20H6.90905V11.25L9.63282 11.2494Z\" fill=\"white\" data-v-2e32ab3b></path></svg></a></li></ul></div>")],2),_vm._ssrNode(" <div class=\"footer-bottom\" data-v-2e32ab3b><h1 data-v-2e32ab3b>"+_vm._ssrEscape("Copyright tujjor 2021 "+_vm._s(_vm.$t("copywrite"))+".")+"</h1></div>")],2)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Footer.vue?vue&type=template&id=2e32ab3b&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Footer.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var Footervue_type_script_lang_js_ = ({data(){return{selectedLanguage:this.$i18n.locale,langChanging:false};},methods:{changeLanguage(event){const lang=event.target.value;console.log("change language to",lang);if(lang==="ru"){this.$i18n.setLocale("ru");}if(lang==="uz"){this.$i18n.setLocale("uz");}}},beforeUpdate(){this.selectedLanguage=this.$i18n.locale;console.log("lang",this.$i18n.locale,this.selectedLanguage);}});
// CONCATENATED MODULE: ./components/Footer.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Footervue_type_script_lang_js_ = (Footervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/Footer.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(71)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Footervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "2e32ab3b",
  "6afe69fb"
  
)

/* harmony default export */ var Footer = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {Footer: __webpack_require__(33).default})


/***/ }),
/* 34 */
/***/ (function(module, exports) {

module.exports = require("node-fetch");

/***/ }),
/* 35 */
/***/ (function(module, exports) {

module.exports = require("bootstrap-vue");

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
function isHTTPS(req,trustProxy=true){const _xForwardedProto=trustProxy&&req.headers?req.headers["x-forwarded-proto"]:void 0;const protoCheck=typeof _xForwardedProto==="string"?_xForwardedProto.includes("https"):void 0;if(protoCheck){return true;}const _encrypted=req.connection?req.connection.encrypted:void 0;const encryptedCheck=_encrypted!==void 0?_encrypted===true:void 0;if(encryptedCheck){return true;}if(protoCheck===void 0&&encryptedCheck===void 0){return void 0;}return false;}module.exports=isHTTPS;

/***/ }),
/* 37 */
/***/ (function(module, exports) {

module.exports = require("@fortawesome/free-solid-svg-icons");

/***/ }),
/* 38 */
/***/ (function(module, exports) {

module.exports = require("@fortawesome/free-brands-svg-icons");

/***/ }),
/* 39 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/esnext.map.delete-all.js");

/***/ }),
/* 40 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/esnext.map.every.js");

/***/ }),
/* 41 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/esnext.map.filter.js");

/***/ }),
/* 42 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/esnext.map.find.js");

/***/ }),
/* 43 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/esnext.map.find-key.js");

/***/ }),
/* 44 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/esnext.map.includes.js");

/***/ }),
/* 45 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/esnext.map.key-of.js");

/***/ }),
/* 46 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/esnext.map.map-keys.js");

/***/ }),
/* 47 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/esnext.map.map-values.js");

/***/ }),
/* 48 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/esnext.map.merge.js");

/***/ }),
/* 49 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/esnext.map.reduce.js");

/***/ }),
/* 50 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/esnext.map.some.js");

/***/ }),
/* 51 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/esnext.map.update.js");

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(53);
module.exports = __webpack_require__(75);


/***/ }),
/* 53 */
/***/ (function(module, exports) {

global.installComponents = function (component, components) {
  var options = typeof component.exports === 'function'
    ? component.exports.extendOptions
    : component.options

  if (typeof component.exports === 'function') {
    options.components = component.exports.options.components
  }

  options.components = options.components || {}

  for (var i in components) {
    options.components[i] = options.components[i] || components[i]
  }


  if (options.functional) {
    provideFunctionalComponents(component, options.components)
  }
}

var functionalPatchKey = '_functionalComponents'

function provideFunctionalComponents(component, components) {
  if (component.exports[functionalPatchKey]) {
    return
  }
  component.exports[functionalPatchKey] = true

  var render = component.exports.render
  component.exports.render = function (h, vm) {
    return render(h, Object.assign({}, vm, {
      _c: function (n, a, b) {
        return vm._c(components[n] || n, a, b)
      }
    }))
  }
}


/***/ }),
/* 54 */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ }),
/* 55 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_error_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(28);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_error_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_error_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_error_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_error_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".__nuxt-error-page{padding:1rem;background:#f7f8fb;color:#47494e;text-align:center;display:flex;justify-content:center;align-items:center;flex-direction:column;font-family:sans-serif;font-weight:100!important;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;-webkit-font-smoothing:antialiased;position:absolute;top:0;left:0;right:0;bottom:0}.__nuxt-error-page .error{max-width:450px}.__nuxt-error-page .title{font-size:1.5rem;margin-top:15px;color:#47494e;margin-bottom:8px}.__nuxt-error-page .description{color:#7f828b;line-height:21px;margin-bottom:10px}.__nuxt-error-page a{color:#7f828b!important;text-decoration:none}.__nuxt-error-page .logo{position:fixed;left:12px;bottom:12px}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 57 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(29);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".nuxt-progress{position:fixed;top:0;left:0;right:0;height:2px;width:0;opacity:1;transition:width .1s,opacity .4s;background-color:#f7931f;z-index:999999}.nuxt-progress.nuxt-progress-notransition{transition:none}.nuxt-progress-failed{background-color:red}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(60);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(4).default("71f83a6d", content, true)

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "/*!\n * Bootstrap v4.6.0 (https://getbootstrap.com/)\n * Copyright 2011-2021 The Bootstrap Authors\n * Copyright 2011-2021 Twitter, Inc.\n * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)\n */:root{--blue:#007bff;--indigo:#6610f2;--purple:#6f42c1;--pink:#e83e8c;--red:#dc3545;--orange:#fd7e14;--yellow:#ffc107;--green:#28a745;--teal:#20c997;--cyan:#17a2b8;--white:#fff;--gray:#6c757d;--gray-dark:#343a40;--primary:#007bff;--secondary:#6c757d;--success:#28a745;--info:#17a2b8;--warning:#ffc107;--danger:#dc3545;--light:#f8f9fa;--dark:#343a40;--breakpoint-xs:0;--breakpoint-sm:576px;--breakpoint-md:768px;--breakpoint-lg:992px;--breakpoint-xl:1200px;--font-family-sans-serif:-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,\"Helvetica Neue\",Arial,\"Noto Sans\",\"Liberation Sans\",sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\",\"Noto Color Emoji\";--font-family-monospace:SFMono-Regular,Menlo,Monaco,Consolas,\"Liberation Mono\",\"Courier New\",monospace}*,:after,:before{box-sizing:border-box}html{font-family:sans-serif;line-height:1.15;-webkit-text-size-adjust:100%;-webkit-tap-highlight-color:rgba(0,0,0,0)}article,aside,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}body{margin:0;font-family:-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,\"Helvetica Neue\",Arial,\"Noto Sans\",\"Liberation Sans\",sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\",\"Noto Color Emoji\";font-size:1rem;font-weight:400;line-height:1.5;color:#212529;text-align:left;background-color:#fff}[tabindex=\"-1\"]:focus:not(.focus-visible),[tabindex=\"-1\"]:focus:not(:focus-visible){outline:0!important}hr{box-sizing:content-box;height:0;overflow:visible}h1,h2,h3,h4,h5,h6{margin-top:0;margin-bottom:.5rem}p{margin-top:0;margin-bottom:1rem}abbr[data-original-title],abbr[title]{text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted;cursor:help;border-bottom:0;-webkit-text-decoration-skip-ink:none;text-decoration-skip-ink:none}address{font-style:normal;line-height:inherit}address,dl,ol,ul{margin-bottom:1rem}dl,ol,ul{margin-top:0}ol ol,ol ul,ul ol,ul ul{margin-bottom:0}dt{font-weight:700}dd{margin-bottom:.5rem;margin-left:0}blockquote{margin:0 0 1rem}b,strong{font-weight:bolder}small{font-size:80%}sub,sup{position:relative;font-size:75%;line-height:0;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}a{color:#007bff;text-decoration:none;background-color:transparent}a:hover{color:#0056b3;text-decoration:underline}a:not([href]):not([class]),a:not([href]):not([class]):hover{color:inherit;text-decoration:none}code,kbd,pre,samp{font-family:SFMono-Regular,Menlo,Monaco,Consolas,\"Liberation Mono\",\"Courier New\",monospace;font-size:1em}pre{margin-top:0;margin-bottom:1rem;overflow:auto;-ms-overflow-style:scrollbar}figure{margin:0 0 1rem}img{border-style:none}img,svg{vertical-align:middle}svg{overflow:hidden}table{border-collapse:collapse}caption{padding-top:.75rem;padding-bottom:.75rem;color:#6c757d;text-align:left;caption-side:bottom}th{text-align:inherit;text-align:-webkit-match-parent}label{display:inline-block;margin-bottom:.5rem}button{border-radius:0}button:focus:not(.focus-visible),button:focus:not(:focus-visible){outline:0}button,input,optgroup,select,textarea{margin:0;font-family:inherit;font-size:inherit;line-height:inherit}button,input{overflow:visible}button,select{text-transform:none}[role=button]{cursor:pointer}select{word-wrap:normal}[type=button],[type=reset],[type=submit],button{-webkit-appearance:button}[type=button]:not(:disabled),[type=reset]:not(:disabled),[type=submit]:not(:disabled),button:not(:disabled){cursor:pointer}[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner,button::-moz-focus-inner{padding:0;border-style:none}input[type=checkbox],input[type=radio]{box-sizing:border-box;padding:0}textarea{overflow:auto;resize:vertical}fieldset{min-width:0;padding:0;margin:0;border:0}legend{display:block;width:100%;max-width:100%;padding:0;margin-bottom:.5rem;font-size:1.5rem;line-height:inherit;color:inherit;white-space:normal}progress{vertical-align:baseline}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{outline-offset:-2px;-webkit-appearance:none}[type=search]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{font:inherit;-webkit-appearance:button}output{display:inline-block}summary{display:list-item;cursor:pointer}template{display:none}[hidden]{display:none!important}.h1,.h2,.h3,.h4,.h5,.h6,h1,h2,h3,h4,h5,h6{margin-bottom:.5rem;font-weight:500;line-height:1.2}.h1,h1{font-size:2.5rem}.h2,h2{font-size:2rem}.h3,h3{font-size:1.75rem}.h4,h4{font-size:1.5rem}.h5,h5{font-size:1.25rem}.h6,h6{font-size:1rem}.lead{font-size:1.25rem;font-weight:300}.display-1{font-size:6rem}.display-1,.display-2{font-weight:300;line-height:1.2}.display-2{font-size:5.5rem}.display-3{font-size:4.5rem}.display-3,.display-4{font-weight:300;line-height:1.2}.display-4{font-size:3.5rem}hr{margin-top:1rem;margin-bottom:1rem;border:0;border-top:1px solid rgba(0,0,0,.1)}.small,small{font-size:80%;font-weight:400}.mark,mark{padding:.2em;background-color:#fcf8e3}.list-inline,.list-unstyled{padding-left:0;list-style:none}.list-inline-item{display:inline-block}.list-inline-item:not(:last-child){margin-right:.5rem}.initialism{font-size:90%;text-transform:uppercase}.blockquote{margin-bottom:1rem;font-size:1.25rem}.blockquote-footer{display:block;font-size:80%;color:#6c757d}.blockquote-footer:before{content:\"\\2014\\00A0\"}.img-fluid,.img-thumbnail{max-width:100%;height:auto}.img-thumbnail{padding:.25rem;background-color:#fff;border:1px solid #dee2e6;border-radius:.25rem}.figure{display:inline-block}.figure-img{margin-bottom:.5rem;line-height:1}.figure-caption{font-size:90%;color:#6c757d}code{font-size:87.5%;color:#e83e8c;word-wrap:break-word}a>code{color:inherit}kbd{padding:.2rem .4rem;font-size:87.5%;color:#fff;background-color:#212529;border-radius:.2rem}kbd kbd{padding:0;font-size:100%;font-weight:700}pre{display:block;font-size:87.5%;color:#212529}pre code{font-size:inherit;color:inherit;word-break:normal}.pre-scrollable{max-height:340px;overflow-y:scroll}.container,.container-fluid,.container-lg,.container-md,.container-sm,.container-xl{width:100%;padding-right:15px;padding-left:15px;margin-right:auto;margin-left:auto}@media (min-width:576px){.container,.container-sm{max-width:540px}}@media (min-width:768px){.container,.container-md,.container-sm{max-width:720px}}@media (min-width:992px){.container,.container-lg,.container-md,.container-sm{max-width:960px}}@media (min-width:1200px){.container,.container-lg,.container-md,.container-sm,.container-xl{max-width:1140px}}.row{display:flex;flex-wrap:wrap;margin-right:-15px;margin-left:-15px}.no-gutters{margin-right:0;margin-left:0}.no-gutters>.col,.no-gutters>[class*=col-]{padding-right:0;padding-left:0}.col,.col-1,.col-2,.col-3,.col-4,.col-5,.col-6,.col-7,.col-8,.col-9,.col-10,.col-11,.col-12,.col-auto,.col-lg,.col-lg-1,.col-lg-2,.col-lg-3,.col-lg-4,.col-lg-5,.col-lg-6,.col-lg-7,.col-lg-8,.col-lg-9,.col-lg-10,.col-lg-11,.col-lg-12,.col-lg-auto,.col-md,.col-md-1,.col-md-2,.col-md-3,.col-md-4,.col-md-5,.col-md-6,.col-md-7,.col-md-8,.col-md-9,.col-md-10,.col-md-11,.col-md-12,.col-md-auto,.col-sm,.col-sm-1,.col-sm-2,.col-sm-3,.col-sm-4,.col-sm-5,.col-sm-6,.col-sm-7,.col-sm-8,.col-sm-9,.col-sm-10,.col-sm-11,.col-sm-12,.col-sm-auto,.col-xl,.col-xl-1,.col-xl-2,.col-xl-3,.col-xl-4,.col-xl-5,.col-xl-6,.col-xl-7,.col-xl-8,.col-xl-9,.col-xl-10,.col-xl-11,.col-xl-12,.col-xl-auto{position:relative;width:100%;padding-right:15px;padding-left:15px}.col{flex-basis:0;flex-grow:1;max-width:100%}.row-cols-1>*{flex:0 0 100%;max-width:100%}.row-cols-2>*{flex:0 0 50%;max-width:50%}.row-cols-3>*{flex:0 0 33.333333%;max-width:33.333333%}.row-cols-4>*{flex:0 0 25%;max-width:25%}.row-cols-5>*{flex:0 0 20%;max-width:20%}.row-cols-6>*{flex:0 0 16.666667%;max-width:16.666667%}.col-auto{flex:0 0 auto;width:auto;max-width:100%}.col-1{flex:0 0 8.333333%;max-width:8.333333%}.col-2{flex:0 0 16.666667%;max-width:16.666667%}.col-3{flex:0 0 25%;max-width:25%}.col-4{flex:0 0 33.333333%;max-width:33.333333%}.col-5{flex:0 0 41.666667%;max-width:41.666667%}.col-6{flex:0 0 50%;max-width:50%}.col-7{flex:0 0 58.333333%;max-width:58.333333%}.col-8{flex:0 0 66.666667%;max-width:66.666667%}.col-9{flex:0 0 75%;max-width:75%}.col-10{flex:0 0 83.333333%;max-width:83.333333%}.col-11{flex:0 0 91.666667%;max-width:91.666667%}.col-12{flex:0 0 100%;max-width:100%}.order-first{order:-1}.order-last{order:13}.order-0{order:0}.order-1{order:1}.order-2{order:2}.order-3{order:3}.order-4{order:4}.order-5{order:5}.order-6{order:6}.order-7{order:7}.order-8{order:8}.order-9{order:9}.order-10{order:10}.order-11{order:11}.order-12{order:12}.offset-1{margin-left:8.333333%}.offset-2{margin-left:16.666667%}.offset-3{margin-left:25%}.offset-4{margin-left:33.333333%}.offset-5{margin-left:41.666667%}.offset-6{margin-left:50%}.offset-7{margin-left:58.333333%}.offset-8{margin-left:66.666667%}.offset-9{margin-left:75%}.offset-10{margin-left:83.333333%}.offset-11{margin-left:91.666667%}@media (min-width:576px){.col-sm{flex-basis:0;flex-grow:1;max-width:100%}.row-cols-sm-1>*{flex:0 0 100%;max-width:100%}.row-cols-sm-2>*{flex:0 0 50%;max-width:50%}.row-cols-sm-3>*{flex:0 0 33.333333%;max-width:33.333333%}.row-cols-sm-4>*{flex:0 0 25%;max-width:25%}.row-cols-sm-5>*{flex:0 0 20%;max-width:20%}.row-cols-sm-6>*{flex:0 0 16.666667%;max-width:16.666667%}.col-sm-auto{flex:0 0 auto;width:auto;max-width:100%}.col-sm-1{flex:0 0 8.333333%;max-width:8.333333%}.col-sm-2{flex:0 0 16.666667%;max-width:16.666667%}.col-sm-3{flex:0 0 25%;max-width:25%}.col-sm-4{flex:0 0 33.333333%;max-width:33.333333%}.col-sm-5{flex:0 0 41.666667%;max-width:41.666667%}.col-sm-6{flex:0 0 50%;max-width:50%}.col-sm-7{flex:0 0 58.333333%;max-width:58.333333%}.col-sm-8{flex:0 0 66.666667%;max-width:66.666667%}.col-sm-9{flex:0 0 75%;max-width:75%}.col-sm-10{flex:0 0 83.333333%;max-width:83.333333%}.col-sm-11{flex:0 0 91.666667%;max-width:91.666667%}.col-sm-12{flex:0 0 100%;max-width:100%}.order-sm-first{order:-1}.order-sm-last{order:13}.order-sm-0{order:0}.order-sm-1{order:1}.order-sm-2{order:2}.order-sm-3{order:3}.order-sm-4{order:4}.order-sm-5{order:5}.order-sm-6{order:6}.order-sm-7{order:7}.order-sm-8{order:8}.order-sm-9{order:9}.order-sm-10{order:10}.order-sm-11{order:11}.order-sm-12{order:12}.offset-sm-0{margin-left:0}.offset-sm-1{margin-left:8.333333%}.offset-sm-2{margin-left:16.666667%}.offset-sm-3{margin-left:25%}.offset-sm-4{margin-left:33.333333%}.offset-sm-5{margin-left:41.666667%}.offset-sm-6{margin-left:50%}.offset-sm-7{margin-left:58.333333%}.offset-sm-8{margin-left:66.666667%}.offset-sm-9{margin-left:75%}.offset-sm-10{margin-left:83.333333%}.offset-sm-11{margin-left:91.666667%}}@media (min-width:768px){.col-md{flex-basis:0;flex-grow:1;max-width:100%}.row-cols-md-1>*{flex:0 0 100%;max-width:100%}.row-cols-md-2>*{flex:0 0 50%;max-width:50%}.row-cols-md-3>*{flex:0 0 33.333333%;max-width:33.333333%}.row-cols-md-4>*{flex:0 0 25%;max-width:25%}.row-cols-md-5>*{flex:0 0 20%;max-width:20%}.row-cols-md-6>*{flex:0 0 16.666667%;max-width:16.666667%}.col-md-auto{flex:0 0 auto;width:auto;max-width:100%}.col-md-1{flex:0 0 8.333333%;max-width:8.333333%}.col-md-2{flex:0 0 16.666667%;max-width:16.666667%}.col-md-3{flex:0 0 25%;max-width:25%}.col-md-4{flex:0 0 33.333333%;max-width:33.333333%}.col-md-5{flex:0 0 41.666667%;max-width:41.666667%}.col-md-6{flex:0 0 50%;max-width:50%}.col-md-7{flex:0 0 58.333333%;max-width:58.333333%}.col-md-8{flex:0 0 66.666667%;max-width:66.666667%}.col-md-9{flex:0 0 75%;max-width:75%}.col-md-10{flex:0 0 83.333333%;max-width:83.333333%}.col-md-11{flex:0 0 91.666667%;max-width:91.666667%}.col-md-12{flex:0 0 100%;max-width:100%}.order-md-first{order:-1}.order-md-last{order:13}.order-md-0{order:0}.order-md-1{order:1}.order-md-2{order:2}.order-md-3{order:3}.order-md-4{order:4}.order-md-5{order:5}.order-md-6{order:6}.order-md-7{order:7}.order-md-8{order:8}.order-md-9{order:9}.order-md-10{order:10}.order-md-11{order:11}.order-md-12{order:12}.offset-md-0{margin-left:0}.offset-md-1{margin-left:8.333333%}.offset-md-2{margin-left:16.666667%}.offset-md-3{margin-left:25%}.offset-md-4{margin-left:33.333333%}.offset-md-5{margin-left:41.666667%}.offset-md-6{margin-left:50%}.offset-md-7{margin-left:58.333333%}.offset-md-8{margin-left:66.666667%}.offset-md-9{margin-left:75%}.offset-md-10{margin-left:83.333333%}.offset-md-11{margin-left:91.666667%}}@media (min-width:992px){.col-lg{flex-basis:0;flex-grow:1;max-width:100%}.row-cols-lg-1>*{flex:0 0 100%;max-width:100%}.row-cols-lg-2>*{flex:0 0 50%;max-width:50%}.row-cols-lg-3>*{flex:0 0 33.333333%;max-width:33.333333%}.row-cols-lg-4>*{flex:0 0 25%;max-width:25%}.row-cols-lg-5>*{flex:0 0 20%;max-width:20%}.row-cols-lg-6>*{flex:0 0 16.666667%;max-width:16.666667%}.col-lg-auto{flex:0 0 auto;width:auto;max-width:100%}.col-lg-1{flex:0 0 8.333333%;max-width:8.333333%}.col-lg-2{flex:0 0 16.666667%;max-width:16.666667%}.col-lg-3{flex:0 0 25%;max-width:25%}.col-lg-4{flex:0 0 33.333333%;max-width:33.333333%}.col-lg-5{flex:0 0 41.666667%;max-width:41.666667%}.col-lg-6{flex:0 0 50%;max-width:50%}.col-lg-7{flex:0 0 58.333333%;max-width:58.333333%}.col-lg-8{flex:0 0 66.666667%;max-width:66.666667%}.col-lg-9{flex:0 0 75%;max-width:75%}.col-lg-10{flex:0 0 83.333333%;max-width:83.333333%}.col-lg-11{flex:0 0 91.666667%;max-width:91.666667%}.col-lg-12{flex:0 0 100%;max-width:100%}.order-lg-first{order:-1}.order-lg-last{order:13}.order-lg-0{order:0}.order-lg-1{order:1}.order-lg-2{order:2}.order-lg-3{order:3}.order-lg-4{order:4}.order-lg-5{order:5}.order-lg-6{order:6}.order-lg-7{order:7}.order-lg-8{order:8}.order-lg-9{order:9}.order-lg-10{order:10}.order-lg-11{order:11}.order-lg-12{order:12}.offset-lg-0{margin-left:0}.offset-lg-1{margin-left:8.333333%}.offset-lg-2{margin-left:16.666667%}.offset-lg-3{margin-left:25%}.offset-lg-4{margin-left:33.333333%}.offset-lg-5{margin-left:41.666667%}.offset-lg-6{margin-left:50%}.offset-lg-7{margin-left:58.333333%}.offset-lg-8{margin-left:66.666667%}.offset-lg-9{margin-left:75%}.offset-lg-10{margin-left:83.333333%}.offset-lg-11{margin-left:91.666667%}}@media (min-width:1200px){.col-xl{flex-basis:0;flex-grow:1;max-width:100%}.row-cols-xl-1>*{flex:0 0 100%;max-width:100%}.row-cols-xl-2>*{flex:0 0 50%;max-width:50%}.row-cols-xl-3>*{flex:0 0 33.333333%;max-width:33.333333%}.row-cols-xl-4>*{flex:0 0 25%;max-width:25%}.row-cols-xl-5>*{flex:0 0 20%;max-width:20%}.row-cols-xl-6>*{flex:0 0 16.666667%;max-width:16.666667%}.col-xl-auto{flex:0 0 auto;width:auto;max-width:100%}.col-xl-1{flex:0 0 8.333333%;max-width:8.333333%}.col-xl-2{flex:0 0 16.666667%;max-width:16.666667%}.col-xl-3{flex:0 0 25%;max-width:25%}.col-xl-4{flex:0 0 33.333333%;max-width:33.333333%}.col-xl-5{flex:0 0 41.666667%;max-width:41.666667%}.col-xl-6{flex:0 0 50%;max-width:50%}.col-xl-7{flex:0 0 58.333333%;max-width:58.333333%}.col-xl-8{flex:0 0 66.666667%;max-width:66.666667%}.col-xl-9{flex:0 0 75%;max-width:75%}.col-xl-10{flex:0 0 83.333333%;max-width:83.333333%}.col-xl-11{flex:0 0 91.666667%;max-width:91.666667%}.col-xl-12{flex:0 0 100%;max-width:100%}.order-xl-first{order:-1}.order-xl-last{order:13}.order-xl-0{order:0}.order-xl-1{order:1}.order-xl-2{order:2}.order-xl-3{order:3}.order-xl-4{order:4}.order-xl-5{order:5}.order-xl-6{order:6}.order-xl-7{order:7}.order-xl-8{order:8}.order-xl-9{order:9}.order-xl-10{order:10}.order-xl-11{order:11}.order-xl-12{order:12}.offset-xl-0{margin-left:0}.offset-xl-1{margin-left:8.333333%}.offset-xl-2{margin-left:16.666667%}.offset-xl-3{margin-left:25%}.offset-xl-4{margin-left:33.333333%}.offset-xl-5{margin-left:41.666667%}.offset-xl-6{margin-left:50%}.offset-xl-7{margin-left:58.333333%}.offset-xl-8{margin-left:66.666667%}.offset-xl-9{margin-left:75%}.offset-xl-10{margin-left:83.333333%}.offset-xl-11{margin-left:91.666667%}}.table{width:100%;margin-bottom:1rem;color:#212529}.table td,.table th{padding:.75rem;vertical-align:top;border-top:1px solid #dee2e6}.table thead th{vertical-align:bottom;border-bottom:2px solid #dee2e6}.table tbody+tbody{border-top:2px solid #dee2e6}.table-sm td,.table-sm th{padding:.3rem}.table-bordered,.table-bordered td,.table-bordered th{border:1px solid #dee2e6}.table-bordered thead td,.table-bordered thead th{border-bottom-width:2px}.table-borderless tbody+tbody,.table-borderless td,.table-borderless th,.table-borderless thead th{border:0}.table-striped tbody tr:nth-of-type(odd){background-color:rgba(0,0,0,.05)}.table-hover tbody tr:hover{color:#212529;background-color:rgba(0,0,0,.075)}.table-primary,.table-primary>td,.table-primary>th{background-color:#b8daff}.table-primary tbody+tbody,.table-primary td,.table-primary th,.table-primary thead th{border-color:#7abaff}.table-hover .table-primary:hover,.table-hover .table-primary:hover>td,.table-hover .table-primary:hover>th{background-color:#9fcdff}.table-secondary,.table-secondary>td,.table-secondary>th{background-color:#d6d8db}.table-secondary tbody+tbody,.table-secondary td,.table-secondary th,.table-secondary thead th{border-color:#b3b7bb}.table-hover .table-secondary:hover,.table-hover .table-secondary:hover>td,.table-hover .table-secondary:hover>th{background-color:#c8cbcf}.table-success,.table-success>td,.table-success>th{background-color:#c3e6cb}.table-success tbody+tbody,.table-success td,.table-success th,.table-success thead th{border-color:#8fd19e}.table-hover .table-success:hover,.table-hover .table-success:hover>td,.table-hover .table-success:hover>th{background-color:#b1dfbb}.table-info,.table-info>td,.table-info>th{background-color:#bee5eb}.table-info tbody+tbody,.table-info td,.table-info th,.table-info thead th{border-color:#86cfda}.table-hover .table-info:hover,.table-hover .table-info:hover>td,.table-hover .table-info:hover>th{background-color:#abdde5}.table-warning,.table-warning>td,.table-warning>th{background-color:#ffeeba}.table-warning tbody+tbody,.table-warning td,.table-warning th,.table-warning thead th{border-color:#ffdf7e}.table-hover .table-warning:hover,.table-hover .table-warning:hover>td,.table-hover .table-warning:hover>th{background-color:#ffe8a1}.table-danger,.table-danger>td,.table-danger>th{background-color:#f5c6cb}.table-danger tbody+tbody,.table-danger td,.table-danger th,.table-danger thead th{border-color:#ed969e}.table-hover .table-danger:hover,.table-hover .table-danger:hover>td,.table-hover .table-danger:hover>th{background-color:#f1b0b7}.table-light,.table-light>td,.table-light>th{background-color:#fdfdfe}.table-light tbody+tbody,.table-light td,.table-light th,.table-light thead th{border-color:#fbfcfc}.table-hover .table-light:hover,.table-hover .table-light:hover>td,.table-hover .table-light:hover>th{background-color:#ececf6}.table-dark,.table-dark>td,.table-dark>th{background-color:#c6c8ca}.table-dark tbody+tbody,.table-dark td,.table-dark th,.table-dark thead th{border-color:#95999c}.table-hover .table-dark:hover,.table-hover .table-dark:hover>td,.table-hover .table-dark:hover>th{background-color:#b9bbbe}.table-active,.table-active>td,.table-active>th,.table-hover .table-active:hover,.table-hover .table-active:hover>td,.table-hover .table-active:hover>th{background-color:rgba(0,0,0,.075)}.table .thead-dark th{color:#fff;background-color:#343a40;border-color:#454d55}.table .thead-light th{color:#495057;background-color:#e9ecef;border-color:#dee2e6}.table-dark{color:#fff;background-color:#343a40}.table-dark td,.table-dark th,.table-dark thead th{border-color:#454d55}.table-dark.table-bordered{border:0}.table-dark.table-striped tbody tr:nth-of-type(odd){background-color:hsla(0,0%,100%,.05)}.table-dark.table-hover tbody tr:hover{color:#fff;background-color:hsla(0,0%,100%,.075)}@media (max-width:575.98px){.table-responsive-sm{display:block;width:100%;overflow-x:auto;-webkit-overflow-scrolling:touch}.table-responsive-sm>.table-bordered{border:0}}@media (max-width:767.98px){.table-responsive-md{display:block;width:100%;overflow-x:auto;-webkit-overflow-scrolling:touch}.table-responsive-md>.table-bordered{border:0}}@media (max-width:991.98px){.table-responsive-lg{display:block;width:100%;overflow-x:auto;-webkit-overflow-scrolling:touch}.table-responsive-lg>.table-bordered{border:0}}@media (max-width:1199.98px){.table-responsive-xl{display:block;width:100%;overflow-x:auto;-webkit-overflow-scrolling:touch}.table-responsive-xl>.table-bordered{border:0}}.table-responsive{display:block;width:100%;overflow-x:auto;-webkit-overflow-scrolling:touch}.table-responsive>.table-bordered{border:0}.form-control{display:block;width:100%;height:calc(1.5em + .75rem + 2px);padding:.375rem .75rem;font-size:1rem;font-weight:400;line-height:1.5;color:#495057;background-color:#fff;background-clip:padding-box;border:1px solid #ced4da;border-radius:.25rem;transition:border-color .15s ease-in-out,box-shadow .15s ease-in-out}@media (prefers-reduced-motion:reduce){.form-control{transition:none}}.form-control::-ms-expand{background-color:transparent;border:0}.form-control:-moz-focusring{color:transparent;text-shadow:0 0 0 #495057}.form-control:focus{color:#495057;background-color:#fff;border-color:#80bdff;outline:0;box-shadow:0 0 0 .2rem rgba(0,123,255,.25)}.form-control::-moz-placeholder{color:#6c757d;opacity:1}.form-control:-ms-input-placeholder{color:#6c757d;opacity:1}.form-control::placeholder{color:#6c757d;opacity:1}.form-control:disabled,.form-control[readonly]{background-color:#e9ecef;opacity:1}input[type=date].form-control,input[type=datetime-local].form-control,input[type=month].form-control,input[type=time].form-control{-webkit-appearance:none;-moz-appearance:none;appearance:none}select.form-control:focus::-ms-value{color:#495057;background-color:#fff}.form-control-file,.form-control-range{display:block;width:100%}.col-form-label{padding-top:calc(.375rem + 1px);padding-bottom:calc(.375rem + 1px);margin-bottom:0;font-size:inherit;line-height:1.5}.col-form-label-lg{padding-top:calc(.5rem + 1px);padding-bottom:calc(.5rem + 1px);font-size:1.25rem;line-height:1.5}.col-form-label-sm{padding-top:calc(.25rem + 1px);padding-bottom:calc(.25rem + 1px);font-size:.875rem;line-height:1.5}.form-control-plaintext{display:block;width:100%;padding:.375rem 0;margin-bottom:0;font-size:1rem;line-height:1.5;color:#212529;background-color:transparent;border:solid transparent;border-width:1px 0}.form-control-plaintext.form-control-lg,.form-control-plaintext.form-control-sm{padding-right:0;padding-left:0}.form-control-sm{height:calc(1.5em + .5rem + 2px);padding:.25rem .5rem;font-size:.875rem;line-height:1.5;border-radius:.2rem}.form-control-lg{height:calc(1.5em + 1rem + 2px);padding:.5rem 1rem;font-size:1.25rem;line-height:1.5;border-radius:.3rem}select.form-control[multiple],select.form-control[size],textarea.form-control{height:auto}.form-group{margin-bottom:1rem}.form-text{display:block;margin-top:.25rem}.form-row{display:flex;flex-wrap:wrap;margin-right:-5px;margin-left:-5px}.form-row>.col,.form-row>[class*=col-]{padding-right:5px;padding-left:5px}.form-check{position:relative;display:block;padding-left:1.25rem}.form-check-input{position:absolute;margin-top:.3rem;margin-left:-1.25rem}.form-check-input:disabled~.form-check-label,.form-check-input[disabled]~.form-check-label{color:#6c757d}.form-check-label{margin-bottom:0}.form-check-inline{display:inline-flex;align-items:center;padding-left:0;margin-right:.75rem}.form-check-inline .form-check-input{position:static;margin-top:0;margin-right:.3125rem;margin-left:0}.valid-feedback{display:none;width:100%;margin-top:.25rem;font-size:80%;color:#28a745}.valid-tooltip{position:absolute;top:100%;left:0;z-index:5;display:none;max-width:100%;padding:.25rem .5rem;margin-top:.1rem;font-size:.875rem;line-height:1.5;color:#fff;background-color:rgba(40,167,69,.9);border-radius:.25rem}.form-row>.col>.valid-tooltip,.form-row>[class*=col-]>.valid-tooltip{left:5px}.is-valid~.valid-feedback,.is-valid~.valid-tooltip,.was-validated :valid~.valid-feedback,.was-validated :valid~.valid-tooltip{display:block}.form-control.is-valid,.was-validated .form-control:valid{border-color:#28a745;padding-right:calc(1.5em + .75rem);background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8'%3E%3Cpath fill='%2328a745' d='M2.3 6.73L.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z'/%3E%3C/svg%3E\");background-repeat:no-repeat;background-position:right calc(.375em + .1875rem) center;background-size:calc(.75em + .375rem) calc(.75em + .375rem)}.form-control.is-valid:focus,.was-validated .form-control:valid:focus{border-color:#28a745;box-shadow:0 0 0 .2rem rgba(40,167,69,.25)}.was-validated textarea.form-control:valid,textarea.form-control.is-valid{padding-right:calc(1.5em + .75rem);background-position:top calc(.375em + .1875rem) right calc(.375em + .1875rem)}.custom-select.is-valid,.was-validated .custom-select:valid{border-color:#28a745;padding-right:calc(.75em + 2.3125rem);background:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='5'%3E%3Cpath fill='%23343a40' d='M2 0L0 2h4zm0 5L0 3h4z'/%3E%3C/svg%3E\") right .75rem center/8px 10px no-repeat,#fff url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8'%3E%3Cpath fill='%2328a745' d='M2.3 6.73L.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z'/%3E%3C/svg%3E\") center right 1.75rem/calc(.75em + .375rem) calc(.75em + .375rem) no-repeat}.custom-select.is-valid:focus,.was-validated .custom-select:valid:focus{border-color:#28a745;box-shadow:0 0 0 .2rem rgba(40,167,69,.25)}.form-check-input.is-valid~.form-check-label,.was-validated .form-check-input:valid~.form-check-label{color:#28a745}.form-check-input.is-valid~.valid-feedback,.form-check-input.is-valid~.valid-tooltip,.was-validated .form-check-input:valid~.valid-feedback,.was-validated .form-check-input:valid~.valid-tooltip{display:block}.custom-control-input.is-valid~.custom-control-label,.was-validated .custom-control-input:valid~.custom-control-label{color:#28a745}.custom-control-input.is-valid~.custom-control-label:before,.was-validated .custom-control-input:valid~.custom-control-label:before{border-color:#28a745}.custom-control-input.is-valid:checked~.custom-control-label:before,.was-validated .custom-control-input:valid:checked~.custom-control-label:before{border-color:#34ce57;background-color:#34ce57}.custom-control-input.is-valid:focus~.custom-control-label:before,.was-validated .custom-control-input:valid:focus~.custom-control-label:before{box-shadow:0 0 0 .2rem rgba(40,167,69,.25)}.custom-control-input.is-valid:focus:not(:checked)~.custom-control-label:before,.custom-file-input.is-valid~.custom-file-label,.was-validated .custom-control-input:valid:focus:not(:checked)~.custom-control-label:before,.was-validated .custom-file-input:valid~.custom-file-label{border-color:#28a745}.custom-file-input.is-valid:focus~.custom-file-label,.was-validated .custom-file-input:valid:focus~.custom-file-label{border-color:#28a745;box-shadow:0 0 0 .2rem rgba(40,167,69,.25)}.invalid-feedback{display:none;width:100%;margin-top:.25rem;font-size:80%;color:#dc3545}.invalid-tooltip{position:absolute;top:100%;left:0;z-index:5;display:none;max-width:100%;padding:.25rem .5rem;margin-top:.1rem;font-size:.875rem;line-height:1.5;color:#fff;background-color:rgba(220,53,69,.9);border-radius:.25rem}.form-row>.col>.invalid-tooltip,.form-row>[class*=col-]>.invalid-tooltip{left:5px}.is-invalid~.invalid-feedback,.is-invalid~.invalid-tooltip,.was-validated :invalid~.invalid-feedback,.was-validated :invalid~.invalid-tooltip{display:block}.form-control.is-invalid,.was-validated .form-control:invalid{border-color:#dc3545;padding-right:calc(1.5em + .75rem);background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' fill='none' stroke='%23dc3545'%3E%3Ccircle cx='6' cy='6' r='4.5'/%3E%3Cpath stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/%3E%3Ccircle cx='6' cy='8.2' r='.6' fill='%23dc3545' stroke='none'/%3E%3C/svg%3E\");background-repeat:no-repeat;background-position:right calc(.375em + .1875rem) center;background-size:calc(.75em + .375rem) calc(.75em + .375rem)}.form-control.is-invalid:focus,.was-validated .form-control:invalid:focus{border-color:#dc3545;box-shadow:0 0 0 .2rem rgba(220,53,69,.25)}.was-validated textarea.form-control:invalid,textarea.form-control.is-invalid{padding-right:calc(1.5em + .75rem);background-position:top calc(.375em + .1875rem) right calc(.375em + .1875rem)}.custom-select.is-invalid,.was-validated .custom-select:invalid{border-color:#dc3545;padding-right:calc(.75em + 2.3125rem);background:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='5'%3E%3Cpath fill='%23343a40' d='M2 0L0 2h4zm0 5L0 3h4z'/%3E%3C/svg%3E\") right .75rem center/8px 10px no-repeat,#fff url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' fill='none' stroke='%23dc3545'%3E%3Ccircle cx='6' cy='6' r='4.5'/%3E%3Cpath stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/%3E%3Ccircle cx='6' cy='8.2' r='.6' fill='%23dc3545' stroke='none'/%3E%3C/svg%3E\") center right 1.75rem/calc(.75em + .375rem) calc(.75em + .375rem) no-repeat}.custom-select.is-invalid:focus,.was-validated .custom-select:invalid:focus{border-color:#dc3545;box-shadow:0 0 0 .2rem rgba(220,53,69,.25)}.form-check-input.is-invalid~.form-check-label,.was-validated .form-check-input:invalid~.form-check-label{color:#dc3545}.form-check-input.is-invalid~.invalid-feedback,.form-check-input.is-invalid~.invalid-tooltip,.was-validated .form-check-input:invalid~.invalid-feedback,.was-validated .form-check-input:invalid~.invalid-tooltip{display:block}.custom-control-input.is-invalid~.custom-control-label,.was-validated .custom-control-input:invalid~.custom-control-label{color:#dc3545}.custom-control-input.is-invalid~.custom-control-label:before,.was-validated .custom-control-input:invalid~.custom-control-label:before{border-color:#dc3545}.custom-control-input.is-invalid:checked~.custom-control-label:before,.was-validated .custom-control-input:invalid:checked~.custom-control-label:before{border-color:#e4606d;background-color:#e4606d}.custom-control-input.is-invalid:focus~.custom-control-label:before,.was-validated .custom-control-input:invalid:focus~.custom-control-label:before{box-shadow:0 0 0 .2rem rgba(220,53,69,.25)}.custom-control-input.is-invalid:focus:not(:checked)~.custom-control-label:before,.custom-file-input.is-invalid~.custom-file-label,.was-validated .custom-control-input:invalid:focus:not(:checked)~.custom-control-label:before,.was-validated .custom-file-input:invalid~.custom-file-label{border-color:#dc3545}.custom-file-input.is-invalid:focus~.custom-file-label,.was-validated .custom-file-input:invalid:focus~.custom-file-label{border-color:#dc3545;box-shadow:0 0 0 .2rem rgba(220,53,69,.25)}.form-inline{display:flex;flex-flow:row wrap;align-items:center}.form-inline .form-check{width:100%}@media (min-width:576px){.form-inline label{justify-content:center}.form-inline .form-group,.form-inline label{display:flex;align-items:center;margin-bottom:0}.form-inline .form-group{flex:0 0 auto;flex-flow:row wrap}.form-inline .form-control{display:inline-block;width:auto;vertical-align:middle}.form-inline .form-control-plaintext{display:inline-block}.form-inline .custom-select,.form-inline .input-group{width:auto}.form-inline .form-check{display:flex;align-items:center;justify-content:center;width:auto;padding-left:0}.form-inline .form-check-input{position:relative;flex-shrink:0;margin-top:0;margin-right:.25rem;margin-left:0}.form-inline .custom-control{align-items:center;justify-content:center}.form-inline .custom-control-label{margin-bottom:0}}.btn{display:inline-block;font-weight:400;color:#212529;text-align:center;vertical-align:middle;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;background-color:transparent;border:1px solid transparent;padding:.375rem .75rem;font-size:1rem;line-height:1.5;border-radius:.25rem;transition:color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out}@media (prefers-reduced-motion:reduce){.btn{transition:none}}.btn:hover{color:#212529;text-decoration:none}.btn.focus,.btn:focus{outline:0;box-shadow:0 0 0 .2rem rgba(0,123,255,.25)}.btn.disabled,.btn:disabled{opacity:.65}.btn:not(:disabled):not(.disabled){cursor:pointer}a.btn.disabled,fieldset:disabled a.btn{pointer-events:none}.btn-primary{color:#fff;background-color:#007bff;border-color:#007bff}.btn-primary.focus,.btn-primary:focus,.btn-primary:hover{color:#fff;background-color:#0069d9;border-color:#0062cc}.btn-primary.focus,.btn-primary:focus{box-shadow:0 0 0 .2rem rgba(38,143,255,.5)}.btn-primary.disabled,.btn-primary:disabled{color:#fff;background-color:#007bff;border-color:#007bff}.btn-primary:not(:disabled):not(.disabled).active,.btn-primary:not(:disabled):not(.disabled):active,.show>.btn-primary.dropdown-toggle{color:#fff;background-color:#0062cc;border-color:#005cbf}.btn-primary:not(:disabled):not(.disabled).active:focus,.btn-primary:not(:disabled):not(.disabled):active:focus,.show>.btn-primary.dropdown-toggle:focus{box-shadow:0 0 0 .2rem rgba(38,143,255,.5)}.btn-secondary{color:#fff;background-color:#6c757d;border-color:#6c757d}.btn-secondary.focus,.btn-secondary:focus,.btn-secondary:hover{color:#fff;background-color:#5a6268;border-color:#545b62}.btn-secondary.focus,.btn-secondary:focus{box-shadow:0 0 0 .2rem rgba(130,138,145,.5)}.btn-secondary.disabled,.btn-secondary:disabled{color:#fff;background-color:#6c757d;border-color:#6c757d}.btn-secondary:not(:disabled):not(.disabled).active,.btn-secondary:not(:disabled):not(.disabled):active,.show>.btn-secondary.dropdown-toggle{color:#fff;background-color:#545b62;border-color:#4e555b}.btn-secondary:not(:disabled):not(.disabled).active:focus,.btn-secondary:not(:disabled):not(.disabled):active:focus,.show>.btn-secondary.dropdown-toggle:focus{box-shadow:0 0 0 .2rem rgba(130,138,145,.5)}.btn-success{color:#fff;background-color:#28a745;border-color:#28a745}.btn-success.focus,.btn-success:focus,.btn-success:hover{color:#fff;background-color:#218838;border-color:#1e7e34}.btn-success.focus,.btn-success:focus{box-shadow:0 0 0 .2rem rgba(72,180,97,.5)}.btn-success.disabled,.btn-success:disabled{color:#fff;background-color:#28a745;border-color:#28a745}.btn-success:not(:disabled):not(.disabled).active,.btn-success:not(:disabled):not(.disabled):active,.show>.btn-success.dropdown-toggle{color:#fff;background-color:#1e7e34;border-color:#1c7430}.btn-success:not(:disabled):not(.disabled).active:focus,.btn-success:not(:disabled):not(.disabled):active:focus,.show>.btn-success.dropdown-toggle:focus{box-shadow:0 0 0 .2rem rgba(72,180,97,.5)}.btn-info{color:#fff;background-color:#17a2b8;border-color:#17a2b8}.btn-info.focus,.btn-info:focus,.btn-info:hover{color:#fff;background-color:#138496;border-color:#117a8b}.btn-info.focus,.btn-info:focus{box-shadow:0 0 0 .2rem rgba(58,176,195,.5)}.btn-info.disabled,.btn-info:disabled{color:#fff;background-color:#17a2b8;border-color:#17a2b8}.btn-info:not(:disabled):not(.disabled).active,.btn-info:not(:disabled):not(.disabled):active,.show>.btn-info.dropdown-toggle{color:#fff;background-color:#117a8b;border-color:#10707f}.btn-info:not(:disabled):not(.disabled).active:focus,.btn-info:not(:disabled):not(.disabled):active:focus,.show>.btn-info.dropdown-toggle:focus{box-shadow:0 0 0 .2rem rgba(58,176,195,.5)}.btn-warning{color:#212529;background-color:#ffc107;border-color:#ffc107}.btn-warning.focus,.btn-warning:focus,.btn-warning:hover{color:#212529;background-color:#e0a800;border-color:#d39e00}.btn-warning.focus,.btn-warning:focus{box-shadow:0 0 0 .2rem rgba(222,170,12,.5)}.btn-warning.disabled,.btn-warning:disabled{color:#212529;background-color:#ffc107;border-color:#ffc107}.btn-warning:not(:disabled):not(.disabled).active,.btn-warning:not(:disabled):not(.disabled):active,.show>.btn-warning.dropdown-toggle{color:#212529;background-color:#d39e00;border-color:#c69500}.btn-warning:not(:disabled):not(.disabled).active:focus,.btn-warning:not(:disabled):not(.disabled):active:focus,.show>.btn-warning.dropdown-toggle:focus{box-shadow:0 0 0 .2rem rgba(222,170,12,.5)}.btn-danger{color:#fff;background-color:#dc3545;border-color:#dc3545}.btn-danger.focus,.btn-danger:focus,.btn-danger:hover{color:#fff;background-color:#c82333;border-color:#bd2130}.btn-danger.focus,.btn-danger:focus{box-shadow:0 0 0 .2rem rgba(225,83,97,.5)}.btn-danger.disabled,.btn-danger:disabled{color:#fff;background-color:#dc3545;border-color:#dc3545}.btn-danger:not(:disabled):not(.disabled).active,.btn-danger:not(:disabled):not(.disabled):active,.show>.btn-danger.dropdown-toggle{color:#fff;background-color:#bd2130;border-color:#b21f2d}.btn-danger:not(:disabled):not(.disabled).active:focus,.btn-danger:not(:disabled):not(.disabled):active:focus,.show>.btn-danger.dropdown-toggle:focus{box-shadow:0 0 0 .2rem rgba(225,83,97,.5)}.btn-light{color:#212529;background-color:#f8f9fa;border-color:#f8f9fa}.btn-light.focus,.btn-light:focus,.btn-light:hover{color:#212529;background-color:#e2e6ea;border-color:#dae0e5}.btn-light.focus,.btn-light:focus{box-shadow:0 0 0 .2rem rgba(216,217,219,.5)}.btn-light.disabled,.btn-light:disabled{color:#212529;background-color:#f8f9fa;border-color:#f8f9fa}.btn-light:not(:disabled):not(.disabled).active,.btn-light:not(:disabled):not(.disabled):active,.show>.btn-light.dropdown-toggle{color:#212529;background-color:#dae0e5;border-color:#d3d9df}.btn-light:not(:disabled):not(.disabled).active:focus,.btn-light:not(:disabled):not(.disabled):active:focus,.show>.btn-light.dropdown-toggle:focus{box-shadow:0 0 0 .2rem rgba(216,217,219,.5)}.btn-dark{color:#fff;background-color:#343a40;border-color:#343a40}.btn-dark.focus,.btn-dark:focus,.btn-dark:hover{color:#fff;background-color:#23272b;border-color:#1d2124}.btn-dark.focus,.btn-dark:focus{box-shadow:0 0 0 .2rem rgba(82,88,93,.5)}.btn-dark.disabled,.btn-dark:disabled{color:#fff;background-color:#343a40;border-color:#343a40}.btn-dark:not(:disabled):not(.disabled).active,.btn-dark:not(:disabled):not(.disabled):active,.show>.btn-dark.dropdown-toggle{color:#fff;background-color:#1d2124;border-color:#171a1d}.btn-dark:not(:disabled):not(.disabled).active:focus,.btn-dark:not(:disabled):not(.disabled):active:focus,.show>.btn-dark.dropdown-toggle:focus{box-shadow:0 0 0 .2rem rgba(82,88,93,.5)}.btn-outline-primary{color:#007bff;border-color:#007bff}.btn-outline-primary:hover{color:#fff;background-color:#007bff;border-color:#007bff}.btn-outline-primary.focus,.btn-outline-primary:focus{box-shadow:0 0 0 .2rem rgba(0,123,255,.5)}.btn-outline-primary.disabled,.btn-outline-primary:disabled{color:#007bff;background-color:transparent}.btn-outline-primary:not(:disabled):not(.disabled).active,.btn-outline-primary:not(:disabled):not(.disabled):active,.show>.btn-outline-primary.dropdown-toggle{color:#fff;background-color:#007bff;border-color:#007bff}.btn-outline-primary:not(:disabled):not(.disabled).active:focus,.btn-outline-primary:not(:disabled):not(.disabled):active:focus,.show>.btn-outline-primary.dropdown-toggle:focus{box-shadow:0 0 0 .2rem rgba(0,123,255,.5)}.btn-outline-secondary{color:#6c757d;border-color:#6c757d}.btn-outline-secondary:hover{color:#fff;background-color:#6c757d;border-color:#6c757d}.btn-outline-secondary.focus,.btn-outline-secondary:focus{box-shadow:0 0 0 .2rem rgba(108,117,125,.5)}.btn-outline-secondary.disabled,.btn-outline-secondary:disabled{color:#6c757d;background-color:transparent}.btn-outline-secondary:not(:disabled):not(.disabled).active,.btn-outline-secondary:not(:disabled):not(.disabled):active,.show>.btn-outline-secondary.dropdown-toggle{color:#fff;background-color:#6c757d;border-color:#6c757d}.btn-outline-secondary:not(:disabled):not(.disabled).active:focus,.btn-outline-secondary:not(:disabled):not(.disabled):active:focus,.show>.btn-outline-secondary.dropdown-toggle:focus{box-shadow:0 0 0 .2rem rgba(108,117,125,.5)}.btn-outline-success{color:#28a745;border-color:#28a745}.btn-outline-success:hover{color:#fff;background-color:#28a745;border-color:#28a745}.btn-outline-success.focus,.btn-outline-success:focus{box-shadow:0 0 0 .2rem rgba(40,167,69,.5)}.btn-outline-success.disabled,.btn-outline-success:disabled{color:#28a745;background-color:transparent}.btn-outline-success:not(:disabled):not(.disabled).active,.btn-outline-success:not(:disabled):not(.disabled):active,.show>.btn-outline-success.dropdown-toggle{color:#fff;background-color:#28a745;border-color:#28a745}.btn-outline-success:not(:disabled):not(.disabled).active:focus,.btn-outline-success:not(:disabled):not(.disabled):active:focus,.show>.btn-outline-success.dropdown-toggle:focus{box-shadow:0 0 0 .2rem rgba(40,167,69,.5)}.btn-outline-info{color:#17a2b8;border-color:#17a2b8}.btn-outline-info:hover{color:#fff;background-color:#17a2b8;border-color:#17a2b8}.btn-outline-info.focus,.btn-outline-info:focus{box-shadow:0 0 0 .2rem rgba(23,162,184,.5)}.btn-outline-info.disabled,.btn-outline-info:disabled{color:#17a2b8;background-color:transparent}.btn-outline-info:not(:disabled):not(.disabled).active,.btn-outline-info:not(:disabled):not(.disabled):active,.show>.btn-outline-info.dropdown-toggle{color:#fff;background-color:#17a2b8;border-color:#17a2b8}.btn-outline-info:not(:disabled):not(.disabled).active:focus,.btn-outline-info:not(:disabled):not(.disabled):active:focus,.show>.btn-outline-info.dropdown-toggle:focus{box-shadow:0 0 0 .2rem rgba(23,162,184,.5)}.btn-outline-warning{color:#ffc107;border-color:#ffc107}.btn-outline-warning:hover{color:#212529;background-color:#ffc107;border-color:#ffc107}.btn-outline-warning.focus,.btn-outline-warning:focus{box-shadow:0 0 0 .2rem rgba(255,193,7,.5)}.btn-outline-warning.disabled,.btn-outline-warning:disabled{color:#ffc107;background-color:transparent}.btn-outline-warning:not(:disabled):not(.disabled).active,.btn-outline-warning:not(:disabled):not(.disabled):active,.show>.btn-outline-warning.dropdown-toggle{color:#212529;background-color:#ffc107;border-color:#ffc107}.btn-outline-warning:not(:disabled):not(.disabled).active:focus,.btn-outline-warning:not(:disabled):not(.disabled):active:focus,.show>.btn-outline-warning.dropdown-toggle:focus{box-shadow:0 0 0 .2rem rgba(255,193,7,.5)}.btn-outline-danger{color:#dc3545;border-color:#dc3545}.btn-outline-danger:hover{color:#fff;background-color:#dc3545;border-color:#dc3545}.btn-outline-danger.focus,.btn-outline-danger:focus{box-shadow:0 0 0 .2rem rgba(220,53,69,.5)}.btn-outline-danger.disabled,.btn-outline-danger:disabled{color:#dc3545;background-color:transparent}.btn-outline-danger:not(:disabled):not(.disabled).active,.btn-outline-danger:not(:disabled):not(.disabled):active,.show>.btn-outline-danger.dropdown-toggle{color:#fff;background-color:#dc3545;border-color:#dc3545}.btn-outline-danger:not(:disabled):not(.disabled).active:focus,.btn-outline-danger:not(:disabled):not(.disabled):active:focus,.show>.btn-outline-danger.dropdown-toggle:focus{box-shadow:0 0 0 .2rem rgba(220,53,69,.5)}.btn-outline-light{color:#f8f9fa;border-color:#f8f9fa}.btn-outline-light:hover{color:#212529;background-color:#f8f9fa;border-color:#f8f9fa}.btn-outline-light.focus,.btn-outline-light:focus{box-shadow:0 0 0 .2rem rgba(248,249,250,.5)}.btn-outline-light.disabled,.btn-outline-light:disabled{color:#f8f9fa;background-color:transparent}.btn-outline-light:not(:disabled):not(.disabled).active,.btn-outline-light:not(:disabled):not(.disabled):active,.show>.btn-outline-light.dropdown-toggle{color:#212529;background-color:#f8f9fa;border-color:#f8f9fa}.btn-outline-light:not(:disabled):not(.disabled).active:focus,.btn-outline-light:not(:disabled):not(.disabled):active:focus,.show>.btn-outline-light.dropdown-toggle:focus{box-shadow:0 0 0 .2rem rgba(248,249,250,.5)}.btn-outline-dark{color:#343a40;border-color:#343a40}.btn-outline-dark:hover{color:#fff;background-color:#343a40;border-color:#343a40}.btn-outline-dark.focus,.btn-outline-dark:focus{box-shadow:0 0 0 .2rem rgba(52,58,64,.5)}.btn-outline-dark.disabled,.btn-outline-dark:disabled{color:#343a40;background-color:transparent}.btn-outline-dark:not(:disabled):not(.disabled).active,.btn-outline-dark:not(:disabled):not(.disabled):active,.show>.btn-outline-dark.dropdown-toggle{color:#fff;background-color:#343a40;border-color:#343a40}.btn-outline-dark:not(:disabled):not(.disabled).active:focus,.btn-outline-dark:not(:disabled):not(.disabled):active:focus,.show>.btn-outline-dark.dropdown-toggle:focus{box-shadow:0 0 0 .2rem rgba(52,58,64,.5)}.btn-link{font-weight:400;color:#007bff;text-decoration:none}.btn-link:hover{color:#0056b3}.btn-link.focus,.btn-link:focus,.btn-link:hover{text-decoration:underline}.btn-link.disabled,.btn-link:disabled{color:#6c757d;pointer-events:none}.btn-group-lg>.btn,.btn-lg{padding:.5rem 1rem;font-size:1.25rem;line-height:1.5;border-radius:.3rem}.btn-group-sm>.btn,.btn-sm{padding:.25rem .5rem;font-size:.875rem;line-height:1.5;border-radius:.2rem}.btn-block{display:block;width:100%}.btn-block+.btn-block{margin-top:.5rem}input[type=button].btn-block,input[type=reset].btn-block,input[type=submit].btn-block{width:100%}.fade{transition:opacity .15s linear}@media (prefers-reduced-motion:reduce){.fade{transition:none}}.fade:not(.show){opacity:0}.collapse:not(.show){display:none}.collapsing{position:relative;height:0;overflow:hidden;transition:height .35s ease}@media (prefers-reduced-motion:reduce){.collapsing{transition:none}}.dropdown,.dropleft,.dropright,.dropup{position:relative}.dropdown-toggle{white-space:nowrap}.dropdown-toggle:after{display:inline-block;margin-left:.255em;vertical-align:.255em;content:\"\";border-top:.3em solid;border-right:.3em solid transparent;border-bottom:0;border-left:.3em solid transparent}.dropdown-toggle:empty:after{margin-left:0}.dropdown-menu{position:absolute;top:100%;left:0;z-index:1000;display:none;float:left;min-width:10rem;padding:.5rem 0;margin:.125rem 0 0;font-size:1rem;color:#212529;text-align:left;list-style:none;background-color:#fff;background-clip:padding-box;border:1px solid rgba(0,0,0,.15);border-radius:.25rem}.dropdown-menu-left{right:auto;left:0}.dropdown-menu-right{right:0;left:auto}@media (min-width:576px){.dropdown-menu-sm-left{right:auto;left:0}.dropdown-menu-sm-right{right:0;left:auto}}@media (min-width:768px){.dropdown-menu-md-left{right:auto;left:0}.dropdown-menu-md-right{right:0;left:auto}}@media (min-width:992px){.dropdown-menu-lg-left{right:auto;left:0}.dropdown-menu-lg-right{right:0;left:auto}}@media (min-width:1200px){.dropdown-menu-xl-left{right:auto;left:0}.dropdown-menu-xl-right{right:0;left:auto}}.dropup .dropdown-menu{top:auto;bottom:100%;margin-top:0;margin-bottom:.125rem}.dropup .dropdown-toggle:after{display:inline-block;margin-left:.255em;vertical-align:.255em;content:\"\";border-top:0;border-right:.3em solid transparent;border-bottom:.3em solid;border-left:.3em solid transparent}.dropup .dropdown-toggle:empty:after{margin-left:0}.dropright .dropdown-menu{top:0;right:auto;left:100%;margin-top:0;margin-left:.125rem}.dropright .dropdown-toggle:after{display:inline-block;margin-left:.255em;vertical-align:.255em;content:\"\";border-top:.3em solid transparent;border-right:0;border-bottom:.3em solid transparent;border-left:.3em solid}.dropright .dropdown-toggle:empty:after{margin-left:0}.dropright .dropdown-toggle:after{vertical-align:0}.dropleft .dropdown-menu{top:0;right:100%;left:auto;margin-top:0;margin-right:.125rem}.dropleft .dropdown-toggle:after{display:inline-block;margin-left:.255em;vertical-align:.255em;content:\"\";display:none}.dropleft .dropdown-toggle:before{display:inline-block;margin-right:.255em;vertical-align:.255em;content:\"\";border-top:.3em solid transparent;border-right:.3em solid;border-bottom:.3em solid transparent}.dropleft .dropdown-toggle:empty:after{margin-left:0}.dropleft .dropdown-toggle:before{vertical-align:0}.dropdown-menu[x-placement^=bottom],.dropdown-menu[x-placement^=left],.dropdown-menu[x-placement^=right],.dropdown-menu[x-placement^=top]{right:auto;bottom:auto}.dropdown-divider{height:0;margin:.5rem 0;overflow:hidden;border-top:1px solid #e9ecef}.dropdown-item{display:block;width:100%;padding:.25rem 1.5rem;clear:both;font-weight:400;color:#212529;text-align:inherit;white-space:nowrap;background-color:transparent;border:0}.dropdown-item:focus,.dropdown-item:hover{color:#16181b;text-decoration:none;background-color:#e9ecef}.dropdown-item.active,.dropdown-item:active{color:#fff;text-decoration:none;background-color:#007bff}.dropdown-item.disabled,.dropdown-item:disabled{color:#adb5bd;pointer-events:none;background-color:transparent}.dropdown-menu.show{display:block}.dropdown-header{display:block;padding:.5rem 1.5rem;margin-bottom:0;font-size:.875rem;color:#6c757d;white-space:nowrap}.dropdown-item-text{display:block;padding:.25rem 1.5rem;color:#212529}.btn-group,.btn-group-vertical{position:relative;display:inline-flex;vertical-align:middle}.btn-group-vertical>.btn,.btn-group>.btn{position:relative;flex:1 1 auto}.btn-group-vertical>.btn.active,.btn-group-vertical>.btn:active,.btn-group-vertical>.btn:focus,.btn-group-vertical>.btn:hover,.btn-group>.btn.active,.btn-group>.btn:active,.btn-group>.btn:focus,.btn-group>.btn:hover{z-index:1}.btn-toolbar{display:flex;flex-wrap:wrap;justify-content:flex-start}.btn-toolbar .input-group{width:auto}.btn-group>.btn-group:not(:first-child),.btn-group>.btn:not(:first-child){margin-left:-1px}.btn-group>.btn-group:not(:last-child)>.btn,.btn-group>.btn:not(:last-child):not(.dropdown-toggle){border-top-right-radius:0;border-bottom-right-radius:0}.btn-group>.btn-group:not(:first-child)>.btn,.btn-group>.btn:not(:first-child){border-top-left-radius:0;border-bottom-left-radius:0}.dropdown-toggle-split{padding-right:.5625rem;padding-left:.5625rem}.dropdown-toggle-split:after,.dropright .dropdown-toggle-split:after,.dropup .dropdown-toggle-split:after{margin-left:0}.dropleft .dropdown-toggle-split:before{margin-right:0}.btn-group-sm>.btn+.dropdown-toggle-split,.btn-sm+.dropdown-toggle-split{padding-right:.375rem;padding-left:.375rem}.btn-group-lg>.btn+.dropdown-toggle-split,.btn-lg+.dropdown-toggle-split{padding-right:.75rem;padding-left:.75rem}.btn-group-vertical{flex-direction:column;align-items:flex-start;justify-content:center}.btn-group-vertical>.btn,.btn-group-vertical>.btn-group{width:100%}.btn-group-vertical>.btn-group:not(:first-child),.btn-group-vertical>.btn:not(:first-child){margin-top:-1px}.btn-group-vertical>.btn-group:not(:last-child)>.btn,.btn-group-vertical>.btn:not(:last-child):not(.dropdown-toggle){border-bottom-right-radius:0;border-bottom-left-radius:0}.btn-group-vertical>.btn-group:not(:first-child)>.btn,.btn-group-vertical>.btn:not(:first-child){border-top-left-radius:0;border-top-right-radius:0}.btn-group-toggle>.btn,.btn-group-toggle>.btn-group>.btn{margin-bottom:0}.btn-group-toggle>.btn-group>.btn input[type=checkbox],.btn-group-toggle>.btn-group>.btn input[type=radio],.btn-group-toggle>.btn input[type=checkbox],.btn-group-toggle>.btn input[type=radio]{position:absolute;clip:rect(0,0,0,0);pointer-events:none}.input-group{position:relative;display:flex;flex-wrap:wrap;align-items:stretch;width:100%}.input-group>.custom-file,.input-group>.custom-select,.input-group>.form-control,.input-group>.form-control-plaintext{position:relative;flex:1 1 auto;width:1%;min-width:0;margin-bottom:0}.input-group>.custom-file+.custom-file,.input-group>.custom-file+.custom-select,.input-group>.custom-file+.form-control,.input-group>.custom-select+.custom-file,.input-group>.custom-select+.custom-select,.input-group>.custom-select+.form-control,.input-group>.form-control+.custom-file,.input-group>.form-control+.custom-select,.input-group>.form-control+.form-control,.input-group>.form-control-plaintext+.custom-file,.input-group>.form-control-plaintext+.custom-select,.input-group>.form-control-plaintext+.form-control{margin-left:-1px}.input-group>.custom-file .custom-file-input:focus~.custom-file-label,.input-group>.custom-select:focus,.input-group>.form-control:focus{z-index:3}.input-group>.custom-file .custom-file-input:focus{z-index:4}.input-group>.custom-select:not(:first-child),.input-group>.form-control:not(:first-child){border-top-left-radius:0;border-bottom-left-radius:0}.input-group>.custom-file{display:flex;align-items:center}.input-group>.custom-file:not(:first-child) .custom-file-label,.input-group>.custom-file:not(:last-child) .custom-file-label{border-top-left-radius:0;border-bottom-left-radius:0}.input-group.has-validation>.custom-file:nth-last-child(n+3) .custom-file-label:after,.input-group.has-validation>.custom-select:nth-last-child(n+3),.input-group.has-validation>.form-control:nth-last-child(n+3),.input-group:not(.has-validation)>.custom-file:not(:last-child) .custom-file-label:after,.input-group:not(.has-validation)>.custom-select:not(:last-child),.input-group:not(.has-validation)>.form-control:not(:last-child){border-top-right-radius:0;border-bottom-right-radius:0}.input-group-append,.input-group-prepend{display:flex}.input-group-append .btn,.input-group-prepend .btn{position:relative;z-index:2}.input-group-append .btn:focus,.input-group-prepend .btn:focus{z-index:3}.input-group-append .btn+.btn,.input-group-append .btn+.input-group-text,.input-group-append .input-group-text+.btn,.input-group-append .input-group-text+.input-group-text,.input-group-prepend .btn+.btn,.input-group-prepend .btn+.input-group-text,.input-group-prepend .input-group-text+.btn,.input-group-prepend .input-group-text+.input-group-text{margin-left:-1px}.input-group-prepend{margin-right:-1px}.input-group-append{margin-left:-1px}.input-group-text{display:flex;align-items:center;padding:.375rem .75rem;margin-bottom:0;font-size:1rem;font-weight:400;line-height:1.5;color:#495057;text-align:center;white-space:nowrap;background-color:#e9ecef;border:1px solid #ced4da;border-radius:.25rem}.input-group-text input[type=checkbox],.input-group-text input[type=radio]{margin-top:0}.input-group-lg>.custom-select,.input-group-lg>.form-control:not(textarea){height:calc(1.5em + 1rem + 2px)}.input-group-lg>.custom-select,.input-group-lg>.form-control,.input-group-lg>.input-group-append>.btn,.input-group-lg>.input-group-append>.input-group-text,.input-group-lg>.input-group-prepend>.btn,.input-group-lg>.input-group-prepend>.input-group-text{padding:.5rem 1rem;font-size:1.25rem;line-height:1.5;border-radius:.3rem}.input-group-sm>.custom-select,.input-group-sm>.form-control:not(textarea){height:calc(1.5em + .5rem + 2px)}.input-group-sm>.custom-select,.input-group-sm>.form-control,.input-group-sm>.input-group-append>.btn,.input-group-sm>.input-group-append>.input-group-text,.input-group-sm>.input-group-prepend>.btn,.input-group-sm>.input-group-prepend>.input-group-text{padding:.25rem .5rem;font-size:.875rem;line-height:1.5;border-radius:.2rem}.input-group-lg>.custom-select,.input-group-sm>.custom-select{padding-right:1.75rem}.input-group.has-validation>.input-group-append:nth-last-child(n+3)>.btn,.input-group.has-validation>.input-group-append:nth-last-child(n+3)>.input-group-text,.input-group:not(.has-validation)>.input-group-append:not(:last-child)>.btn,.input-group:not(.has-validation)>.input-group-append:not(:last-child)>.input-group-text,.input-group>.input-group-append:last-child>.btn:not(:last-child):not(.dropdown-toggle),.input-group>.input-group-append:last-child>.input-group-text:not(:last-child),.input-group>.input-group-prepend>.btn,.input-group>.input-group-prepend>.input-group-text{border-top-right-radius:0;border-bottom-right-radius:0}.input-group>.input-group-append>.btn,.input-group>.input-group-append>.input-group-text,.input-group>.input-group-prepend:first-child>.btn:not(:first-child),.input-group>.input-group-prepend:first-child>.input-group-text:not(:first-child),.input-group>.input-group-prepend:not(:first-child)>.btn,.input-group>.input-group-prepend:not(:first-child)>.input-group-text{border-top-left-radius:0;border-bottom-left-radius:0}.custom-control{position:relative;z-index:1;display:block;min-height:1.5rem;padding-left:1.5rem;-webkit-print-color-adjust:exact;color-adjust:exact}.custom-control-inline{display:inline-flex;margin-right:1rem}.custom-control-input{position:absolute;left:0;z-index:-1;width:1rem;height:1.25rem;opacity:0}.custom-control-input:checked~.custom-control-label:before{color:#fff;border-color:#007bff;background-color:#007bff}.custom-control-input:focus~.custom-control-label:before{box-shadow:0 0 0 .2rem rgba(0,123,255,.25)}.custom-control-input:focus:not(:checked)~.custom-control-label:before{border-color:#80bdff}.custom-control-input:not(:disabled):active~.custom-control-label:before{color:#fff;background-color:#b3d7ff;border-color:#b3d7ff}.custom-control-input:disabled~.custom-control-label,.custom-control-input[disabled]~.custom-control-label{color:#6c757d}.custom-control-input:disabled~.custom-control-label:before,.custom-control-input[disabled]~.custom-control-label:before{background-color:#e9ecef}.custom-control-label{position:relative;margin-bottom:0;vertical-align:top}.custom-control-label:before{pointer-events:none;background-color:#fff;border:1px solid #adb5bd}.custom-control-label:after,.custom-control-label:before{position:absolute;top:.25rem;left:-1.5rem;display:block;width:1rem;height:1rem;content:\"\"}.custom-control-label:after{background:50%/50% 50% no-repeat}.custom-checkbox .custom-control-label:before{border-radius:.25rem}.custom-checkbox .custom-control-input:checked~.custom-control-label:after{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8'%3E%3Cpath fill='%23fff' d='M6.564.75l-3.59 3.612-1.538-1.55L0 4.26l2.974 2.99L8 2.193z'/%3E%3C/svg%3E\")}.custom-checkbox .custom-control-input:indeterminate~.custom-control-label:before{border-color:#007bff;background-color:#007bff}.custom-checkbox .custom-control-input:indeterminate~.custom-control-label:after{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4'%3E%3Cpath stroke='%23fff' d='M0 2h4'/%3E%3C/svg%3E\")}.custom-checkbox .custom-control-input:disabled:checked~.custom-control-label:before{background-color:rgba(0,123,255,.5)}.custom-checkbox .custom-control-input:disabled:indeterminate~.custom-control-label:before{background-color:rgba(0,123,255,.5)}.custom-radio .custom-control-label:before{border-radius:50%}.custom-radio .custom-control-input:checked~.custom-control-label:after{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='-4 -4 8 8'%3E%3Ccircle r='3' fill='%23fff'/%3E%3C/svg%3E\")}.custom-radio .custom-control-input:disabled:checked~.custom-control-label:before{background-color:rgba(0,123,255,.5)}.custom-switch{padding-left:2.25rem}.custom-switch .custom-control-label:before{left:-2.25rem;width:1.75rem;pointer-events:all;border-radius:.5rem}.custom-switch .custom-control-label:after{top:calc(.25rem + 2px);left:calc(-2.25rem + 2px);width:calc(1rem - 4px);height:calc(1rem - 4px);background-color:#adb5bd;border-radius:.5rem;transition:transform .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out}@media (prefers-reduced-motion:reduce){.custom-switch .custom-control-label:after{transition:none}}.custom-switch .custom-control-input:checked~.custom-control-label:after{background-color:#fff;transform:translateX(.75rem)}.custom-switch .custom-control-input:disabled:checked~.custom-control-label:before{background-color:rgba(0,123,255,.5)}.custom-select{display:inline-block;width:100%;height:calc(1.5em + .75rem + 2px);padding:.375rem 1.75rem .375rem .75rem;font-size:1rem;font-weight:400;line-height:1.5;color:#495057;vertical-align:middle;background:#fff url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='5'%3E%3Cpath fill='%23343a40' d='M2 0L0 2h4zm0 5L0 3h4z'/%3E%3C/svg%3E\") right .75rem center/8px 10px no-repeat;border:1px solid #ced4da;border-radius:.25rem;-webkit-appearance:none;-moz-appearance:none;appearance:none}.custom-select:focus{border-color:#80bdff;outline:0;box-shadow:0 0 0 .2rem rgba(0,123,255,.25)}.custom-select:focus::-ms-value{color:#495057;background-color:#fff}.custom-select[multiple],.custom-select[size]:not([size=\"1\"]){height:auto;padding-right:.75rem;background-image:none}.custom-select:disabled{color:#6c757d;background-color:#e9ecef}.custom-select::-ms-expand{display:none}.custom-select:-moz-focusring{color:transparent;text-shadow:0 0 0 #495057}.custom-select-sm{height:calc(1.5em + .5rem + 2px);padding-top:.25rem;padding-bottom:.25rem;padding-left:.5rem;font-size:.875rem}.custom-select-lg{height:calc(1.5em + 1rem + 2px);padding-top:.5rem;padding-bottom:.5rem;padding-left:1rem;font-size:1.25rem}.custom-file{display:inline-block;margin-bottom:0}.custom-file,.custom-file-input{position:relative;width:100%;height:calc(1.5em + .75rem + 2px)}.custom-file-input{z-index:2;margin:0;overflow:hidden;opacity:0}.custom-file-input:focus~.custom-file-label{border-color:#80bdff;box-shadow:0 0 0 .2rem rgba(0,123,255,.25)}.custom-file-input:disabled~.custom-file-label,.custom-file-input[disabled]~.custom-file-label{background-color:#e9ecef}.custom-file-input:lang(en)~.custom-file-label:after{content:\"Browse\"}.custom-file-input~.custom-file-label[data-browse]:after{content:attr(data-browse)}.custom-file-label{left:0;z-index:1;height:calc(1.5em + .75rem + 2px);overflow:hidden;font-weight:400;background-color:#fff;border:1px solid #ced4da;border-radius:.25rem}.custom-file-label,.custom-file-label:after{position:absolute;top:0;right:0;padding:.375rem .75rem;line-height:1.5;color:#495057}.custom-file-label:after{bottom:0;z-index:3;display:block;height:calc(1.5em + .75rem);content:\"Browse\";background-color:#e9ecef;border-left:inherit;border-radius:0 .25rem .25rem 0}.custom-range{width:100%;height:1.4rem;padding:0;background-color:transparent;-webkit-appearance:none;-moz-appearance:none;appearance:none}.custom-range:focus{outline:0}.custom-range:focus::-webkit-slider-thumb{box-shadow:0 0 0 1px #fff,0 0 0 .2rem rgba(0,123,255,.25)}.custom-range:focus::-moz-range-thumb{box-shadow:0 0 0 1px #fff,0 0 0 .2rem rgba(0,123,255,.25)}.custom-range:focus::-ms-thumb{box-shadow:0 0 0 1px #fff,0 0 0 .2rem rgba(0,123,255,.25)}.custom-range::-moz-focus-outer{border:0}.custom-range::-webkit-slider-thumb{width:1rem;height:1rem;margin-top:-.25rem;background-color:#007bff;border:0;border-radius:1rem;-webkit-transition:background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;transition:background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;-webkit-appearance:none;appearance:none}@media (prefers-reduced-motion:reduce){.custom-range::-webkit-slider-thumb{-webkit-transition:none;transition:none}}.custom-range::-webkit-slider-thumb:active{background-color:#b3d7ff}.custom-range::-webkit-slider-runnable-track{width:100%;height:.5rem;color:transparent;cursor:pointer;background-color:#dee2e6;border-color:transparent;border-radius:1rem}.custom-range::-moz-range-thumb{width:1rem;height:1rem;background-color:#007bff;border:0;border-radius:1rem;-moz-transition:background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;transition:background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;-moz-appearance:none;appearance:none}@media (prefers-reduced-motion:reduce){.custom-range::-moz-range-thumb{-moz-transition:none;transition:none}}.custom-range::-moz-range-thumb:active{background-color:#b3d7ff}.custom-range::-moz-range-track{width:100%;height:.5rem;color:transparent;cursor:pointer;background-color:#dee2e6;border-color:transparent;border-radius:1rem}.custom-range::-ms-thumb{width:1rem;height:1rem;margin-top:0;margin-right:.2rem;margin-left:.2rem;background-color:#007bff;border:0;border-radius:1rem;-ms-transition:background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;transition:background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;appearance:none}@media (prefers-reduced-motion:reduce){.custom-range::-ms-thumb{-ms-transition:none;transition:none}}.custom-range::-ms-thumb:active{background-color:#b3d7ff}.custom-range::-ms-track{width:100%;height:.5rem;color:transparent;cursor:pointer;background-color:transparent;border-color:transparent;border-width:.5rem}.custom-range::-ms-fill-lower,.custom-range::-ms-fill-upper{background-color:#dee2e6;border-radius:1rem}.custom-range::-ms-fill-upper{margin-right:15px}.custom-range:disabled::-webkit-slider-thumb{background-color:#adb5bd}.custom-range:disabled::-webkit-slider-runnable-track{cursor:default}.custom-range:disabled::-moz-range-thumb{background-color:#adb5bd}.custom-range:disabled::-moz-range-track{cursor:default}.custom-range:disabled::-ms-thumb{background-color:#adb5bd}.custom-control-label:before,.custom-file-label,.custom-select{transition:background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out}@media (prefers-reduced-motion:reduce){.custom-control-label:before,.custom-file-label,.custom-select{transition:none}}.nav{display:flex;flex-wrap:wrap;padding-left:0;margin-bottom:0;list-style:none}.nav-link{display:block;padding:.5rem 1rem}.nav-link:focus,.nav-link:hover{text-decoration:none}.nav-link.disabled{color:#6c757d;pointer-events:none;cursor:default}.nav-tabs{border-bottom:1px solid #dee2e6}.nav-tabs .nav-link{margin-bottom:-1px;border:1px solid transparent;border-top-left-radius:.25rem;border-top-right-radius:.25rem}.nav-tabs .nav-link:focus,.nav-tabs .nav-link:hover{border-color:#e9ecef #e9ecef #dee2e6}.nav-tabs .nav-link.disabled{color:#6c757d;background-color:transparent;border-color:transparent}.nav-tabs .nav-item.show .nav-link,.nav-tabs .nav-link.active{color:#495057;background-color:#fff;border-color:#dee2e6 #dee2e6 #fff}.nav-tabs .dropdown-menu{margin-top:-1px;border-top-left-radius:0;border-top-right-radius:0}.nav-pills .nav-link{border-radius:.25rem}.nav-pills .nav-link.active,.nav-pills .show>.nav-link{color:#fff;background-color:#007bff}.nav-fill .nav-item,.nav-fill>.nav-link{flex:1 1 auto;text-align:center}.nav-justified .nav-item,.nav-justified>.nav-link{flex-basis:0;flex-grow:1;text-align:center}.tab-content>.tab-pane{display:none}.tab-content>.active{display:block}.navbar{position:relative;padding:.5rem 1rem}.navbar,.navbar .container,.navbar .container-fluid,.navbar .container-lg,.navbar .container-md,.navbar .container-sm,.navbar .container-xl{display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between}.navbar-brand{display:inline-block;padding-top:.3125rem;padding-bottom:.3125rem;margin-right:1rem;font-size:1.25rem;line-height:inherit;white-space:nowrap}.navbar-brand:focus,.navbar-brand:hover{text-decoration:none}.navbar-nav{display:flex;flex-direction:column;padding-left:0;margin-bottom:0;list-style:none}.navbar-nav .nav-link{padding-right:0;padding-left:0}.navbar-nav .dropdown-menu{position:static;float:none}.navbar-text{display:inline-block;padding-top:.5rem;padding-bottom:.5rem}.navbar-collapse{flex-basis:100%;flex-grow:1;align-items:center}.navbar-toggler{padding:.25rem .75rem;font-size:1.25rem;line-height:1;background-color:transparent;border:1px solid transparent;border-radius:.25rem}.navbar-toggler:focus,.navbar-toggler:hover{text-decoration:none}.navbar-toggler-icon{display:inline-block;width:1.5em;height:1.5em;vertical-align:middle;content:\"\";background:50%/100% 100% no-repeat}.navbar-nav-scroll{max-height:75vh;overflow-y:auto}@media (max-width:575.98px){.navbar-expand-sm>.container,.navbar-expand-sm>.container-fluid,.navbar-expand-sm>.container-lg,.navbar-expand-sm>.container-md,.navbar-expand-sm>.container-sm,.navbar-expand-sm>.container-xl{padding-right:0;padding-left:0}}@media (min-width:576px){.navbar-expand-sm{flex-flow:row nowrap;justify-content:flex-start}.navbar-expand-sm .navbar-nav{flex-direction:row}.navbar-expand-sm .navbar-nav .dropdown-menu{position:absolute}.navbar-expand-sm .navbar-nav .nav-link{padding-right:.5rem;padding-left:.5rem}.navbar-expand-sm>.container,.navbar-expand-sm>.container-fluid,.navbar-expand-sm>.container-lg,.navbar-expand-sm>.container-md,.navbar-expand-sm>.container-sm,.navbar-expand-sm>.container-xl{flex-wrap:nowrap}.navbar-expand-sm .navbar-nav-scroll{overflow:visible}.navbar-expand-sm .navbar-collapse{display:flex!important;flex-basis:auto}.navbar-expand-sm .navbar-toggler{display:none}}@media (max-width:767.98px){.navbar-expand-md>.container,.navbar-expand-md>.container-fluid,.navbar-expand-md>.container-lg,.navbar-expand-md>.container-md,.navbar-expand-md>.container-sm,.navbar-expand-md>.container-xl{padding-right:0;padding-left:0}}@media (min-width:768px){.navbar-expand-md{flex-flow:row nowrap;justify-content:flex-start}.navbar-expand-md .navbar-nav{flex-direction:row}.navbar-expand-md .navbar-nav .dropdown-menu{position:absolute}.navbar-expand-md .navbar-nav .nav-link{padding-right:.5rem;padding-left:.5rem}.navbar-expand-md>.container,.navbar-expand-md>.container-fluid,.navbar-expand-md>.container-lg,.navbar-expand-md>.container-md,.navbar-expand-md>.container-sm,.navbar-expand-md>.container-xl{flex-wrap:nowrap}.navbar-expand-md .navbar-nav-scroll{overflow:visible}.navbar-expand-md .navbar-collapse{display:flex!important;flex-basis:auto}.navbar-expand-md .navbar-toggler{display:none}}@media (max-width:991.98px){.navbar-expand-lg>.container,.navbar-expand-lg>.container-fluid,.navbar-expand-lg>.container-lg,.navbar-expand-lg>.container-md,.navbar-expand-lg>.container-sm,.navbar-expand-lg>.container-xl{padding-right:0;padding-left:0}}@media (min-width:992px){.navbar-expand-lg{flex-flow:row nowrap;justify-content:flex-start}.navbar-expand-lg .navbar-nav{flex-direction:row}.navbar-expand-lg .navbar-nav .dropdown-menu{position:absolute}.navbar-expand-lg .navbar-nav .nav-link{padding-right:.5rem;padding-left:.5rem}.navbar-expand-lg>.container,.navbar-expand-lg>.container-fluid,.navbar-expand-lg>.container-lg,.navbar-expand-lg>.container-md,.navbar-expand-lg>.container-sm,.navbar-expand-lg>.container-xl{flex-wrap:nowrap}.navbar-expand-lg .navbar-nav-scroll{overflow:visible}.navbar-expand-lg .navbar-collapse{display:flex!important;flex-basis:auto}.navbar-expand-lg .navbar-toggler{display:none}}@media (max-width:1199.98px){.navbar-expand-xl>.container,.navbar-expand-xl>.container-fluid,.navbar-expand-xl>.container-lg,.navbar-expand-xl>.container-md,.navbar-expand-xl>.container-sm,.navbar-expand-xl>.container-xl{padding-right:0;padding-left:0}}@media (min-width:1200px){.navbar-expand-xl{flex-flow:row nowrap;justify-content:flex-start}.navbar-expand-xl .navbar-nav{flex-direction:row}.navbar-expand-xl .navbar-nav .dropdown-menu{position:absolute}.navbar-expand-xl .navbar-nav .nav-link{padding-right:.5rem;padding-left:.5rem}.navbar-expand-xl>.container,.navbar-expand-xl>.container-fluid,.navbar-expand-xl>.container-lg,.navbar-expand-xl>.container-md,.navbar-expand-xl>.container-sm,.navbar-expand-xl>.container-xl{flex-wrap:nowrap}.navbar-expand-xl .navbar-nav-scroll{overflow:visible}.navbar-expand-xl .navbar-collapse{display:flex!important;flex-basis:auto}.navbar-expand-xl .navbar-toggler{display:none}}.navbar-expand{flex-flow:row nowrap;justify-content:flex-start}.navbar-expand>.container,.navbar-expand>.container-fluid,.navbar-expand>.container-lg,.navbar-expand>.container-md,.navbar-expand>.container-sm,.navbar-expand>.container-xl{padding-right:0;padding-left:0}.navbar-expand .navbar-nav{flex-direction:row}.navbar-expand .navbar-nav .dropdown-menu{position:absolute}.navbar-expand .navbar-nav .nav-link{padding-right:.5rem;padding-left:.5rem}.navbar-expand>.container,.navbar-expand>.container-fluid,.navbar-expand>.container-lg,.navbar-expand>.container-md,.navbar-expand>.container-sm,.navbar-expand>.container-xl{flex-wrap:nowrap}.navbar-expand .navbar-nav-scroll{overflow:visible}.navbar-expand .navbar-collapse{display:flex!important;flex-basis:auto}.navbar-expand .navbar-toggler{display:none}.navbar-light .navbar-brand,.navbar-light .navbar-brand:focus,.navbar-light .navbar-brand:hover{color:rgba(0,0,0,.9)}.navbar-light .navbar-nav .nav-link{color:rgba(0,0,0,.5)}.navbar-light .navbar-nav .nav-link:focus,.navbar-light .navbar-nav .nav-link:hover{color:rgba(0,0,0,.7)}.navbar-light .navbar-nav .nav-link.disabled{color:rgba(0,0,0,.3)}.navbar-light .navbar-nav .active>.nav-link,.navbar-light .navbar-nav .nav-link.active,.navbar-light .navbar-nav .nav-link.show,.navbar-light .navbar-nav .show>.nav-link{color:rgba(0,0,0,.9)}.navbar-light .navbar-toggler{color:rgba(0,0,0,.5);border-color:rgba(0,0,0,.1)}.navbar-light .navbar-toggler-icon{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='30' height='30'%3E%3Cpath stroke='rgba(0, 0, 0, 0.5)' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3E%3C/svg%3E\")}.navbar-light .navbar-text{color:rgba(0,0,0,.5)}.navbar-light .navbar-text a,.navbar-light .navbar-text a:focus,.navbar-light .navbar-text a:hover{color:rgba(0,0,0,.9)}.navbar-dark .navbar-brand,.navbar-dark .navbar-brand:focus,.navbar-dark .navbar-brand:hover{color:#fff}.navbar-dark .navbar-nav .nav-link{color:hsla(0,0%,100%,.5)}.navbar-dark .navbar-nav .nav-link:focus,.navbar-dark .navbar-nav .nav-link:hover{color:hsla(0,0%,100%,.75)}.navbar-dark .navbar-nav .nav-link.disabled{color:hsla(0,0%,100%,.25)}.navbar-dark .navbar-nav .active>.nav-link,.navbar-dark .navbar-nav .nav-link.active,.navbar-dark .navbar-nav .nav-link.show,.navbar-dark .navbar-nav .show>.nav-link{color:#fff}.navbar-dark .navbar-toggler{color:hsla(0,0%,100%,.5);border-color:hsla(0,0%,100%,.1)}.navbar-dark .navbar-toggler-icon{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='30' height='30'%3E%3Cpath stroke='rgba(255, 255, 255, 0.5)' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3E%3C/svg%3E\")}.navbar-dark .navbar-text{color:hsla(0,0%,100%,.5)}.navbar-dark .navbar-text a,.navbar-dark .navbar-text a:focus,.navbar-dark .navbar-text a:hover{color:#fff}.card{position:relative;display:flex;flex-direction:column;min-width:0;word-wrap:break-word;background-color:#fff;background-clip:border-box;border:1px solid rgba(0,0,0,.125);border-radius:.25rem}.card>hr{margin-right:0;margin-left:0}.card>.list-group{border-top:inherit;border-bottom:inherit}.card>.list-group:first-child{border-top-width:0;border-top-left-radius:calc(.25rem - 1px);border-top-right-radius:calc(.25rem - 1px)}.card>.list-group:last-child{border-bottom-width:0;border-bottom-right-radius:calc(.25rem - 1px);border-bottom-left-radius:calc(.25rem - 1px)}.card>.card-header+.list-group,.card>.list-group+.card-footer{border-top:0}.card-body{flex:1 1 auto;min-height:1px;padding:1.25rem}.card-title{margin-bottom:.75rem}.card-subtitle{margin-top:-.375rem}.card-subtitle,.card-text:last-child{margin-bottom:0}.card-link:hover{text-decoration:none}.card-link+.card-link{margin-left:1.25rem}.card-header{padding:.75rem 1.25rem;margin-bottom:0;background-color:rgba(0,0,0,.03);border-bottom:1px solid rgba(0,0,0,.125)}.card-header:first-child{border-radius:calc(.25rem - 1px) calc(.25rem - 1px) 0 0}.card-footer{padding:.75rem 1.25rem;background-color:rgba(0,0,0,.03);border-top:1px solid rgba(0,0,0,.125)}.card-footer:last-child{border-radius:0 0 calc(.25rem - 1px) calc(.25rem - 1px)}.card-header-tabs{margin-bottom:-.75rem;border-bottom:0}.card-header-pills,.card-header-tabs{margin-right:-.625rem;margin-left:-.625rem}.card-img-overlay{position:absolute;top:0;right:0;bottom:0;left:0;padding:1.25rem;border-radius:calc(.25rem - 1px)}.card-img,.card-img-bottom,.card-img-top{flex-shrink:0;width:100%}.card-img,.card-img-top{border-top-left-radius:calc(.25rem - 1px);border-top-right-radius:calc(.25rem - 1px)}.card-img,.card-img-bottom{border-bottom-right-radius:calc(.25rem - 1px);border-bottom-left-radius:calc(.25rem - 1px)}.card-deck .card{margin-bottom:15px}@media (min-width:576px){.card-deck{display:flex;flex-flow:row wrap;margin-right:-15px;margin-left:-15px}.card-deck .card{flex:1 0 0%;margin-right:15px;margin-bottom:0;margin-left:15px}}.card-group>.card{margin-bottom:15px}@media (min-width:576px){.card-group{display:flex;flex-flow:row wrap}.card-group>.card{flex:1 0 0%;margin-bottom:0}.card-group>.card+.card{margin-left:0;border-left:0}.card-group>.card:not(:last-child){border-top-right-radius:0;border-bottom-right-radius:0}.card-group>.card:not(:last-child) .card-header,.card-group>.card:not(:last-child) .card-img-top{border-top-right-radius:0}.card-group>.card:not(:last-child) .card-footer,.card-group>.card:not(:last-child) .card-img-bottom{border-bottom-right-radius:0}.card-group>.card:not(:first-child){border-top-left-radius:0;border-bottom-left-radius:0}.card-group>.card:not(:first-child) .card-header,.card-group>.card:not(:first-child) .card-img-top{border-top-left-radius:0}.card-group>.card:not(:first-child) .card-footer,.card-group>.card:not(:first-child) .card-img-bottom{border-bottom-left-radius:0}}.card-columns .card{margin-bottom:.75rem}@media (min-width:576px){.card-columns{-moz-column-count:3;column-count:3;-webkit-column-gap:1.25rem;-moz-column-gap:1.25rem;grid-column-gap:1.25rem;column-gap:1.25rem;orphans:1;widows:1}.card-columns .card{display:inline-block;width:100%}}.accordion{overflow-anchor:none}.accordion>.card{overflow:hidden}.accordion>.card:not(:last-of-type){border-bottom:0;border-bottom-right-radius:0;border-bottom-left-radius:0}.accordion>.card:not(:first-of-type){border-top-left-radius:0;border-top-right-radius:0}.accordion>.card>.card-header{border-radius:0;margin-bottom:-1px}.breadcrumb{display:flex;flex-wrap:wrap;padding:.75rem 1rem;margin-bottom:1rem;list-style:none;background-color:#e9ecef;border-radius:.25rem}.breadcrumb-item+.breadcrumb-item{padding-left:.5rem}.breadcrumb-item+.breadcrumb-item:before{float:left;padding-right:.5rem;color:#6c757d;content:\"/\"}.breadcrumb-item+.breadcrumb-item:hover:before{text-decoration:underline;text-decoration:none}.breadcrumb-item.active{color:#6c757d}.pagination{display:flex;padding-left:0;list-style:none;border-radius:.25rem}.page-link{position:relative;display:block;padding:.5rem .75rem;margin-left:-1px;line-height:1.25;color:#007bff;background-color:#fff;border:1px solid #dee2e6}.page-link:hover{z-index:2;color:#0056b3;text-decoration:none;background-color:#e9ecef;border-color:#dee2e6}.page-link:focus{z-index:3;outline:0;box-shadow:0 0 0 .2rem rgba(0,123,255,.25)}.page-item:first-child .page-link{margin-left:0;border-top-left-radius:.25rem;border-bottom-left-radius:.25rem}.page-item:last-child .page-link{border-top-right-radius:.25rem;border-bottom-right-radius:.25rem}.page-item.active .page-link{z-index:3;color:#fff;background-color:#007bff;border-color:#007bff}.page-item.disabled .page-link{color:#6c757d;pointer-events:none;cursor:auto;background-color:#fff;border-color:#dee2e6}.pagination-lg .page-link{padding:.75rem 1.5rem;font-size:1.25rem;line-height:1.5}.pagination-lg .page-item:first-child .page-link{border-top-left-radius:.3rem;border-bottom-left-radius:.3rem}.pagination-lg .page-item:last-child .page-link{border-top-right-radius:.3rem;border-bottom-right-radius:.3rem}.pagination-sm .page-link{padding:.25rem .5rem;font-size:.875rem;line-height:1.5}.pagination-sm .page-item:first-child .page-link{border-top-left-radius:.2rem;border-bottom-left-radius:.2rem}.pagination-sm .page-item:last-child .page-link{border-top-right-radius:.2rem;border-bottom-right-radius:.2rem}.badge{display:inline-block;padding:.25em .4em;font-size:75%;font-weight:700;line-height:1;text-align:center;white-space:nowrap;vertical-align:baseline;border-radius:.25rem;transition:color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out}@media (prefers-reduced-motion:reduce){.badge{transition:none}}a.badge:focus,a.badge:hover{text-decoration:none}.badge:empty{display:none}.btn .badge{position:relative;top:-1px}.badge-pill{padding-right:.6em;padding-left:.6em;border-radius:10rem}.badge-primary{color:#fff;background-color:#007bff}a.badge-primary:focus,a.badge-primary:hover{color:#fff;background-color:#0062cc}a.badge-primary.focus,a.badge-primary:focus{outline:0;box-shadow:0 0 0 .2rem rgba(0,123,255,.5)}.badge-secondary{color:#fff;background-color:#6c757d}a.badge-secondary:focus,a.badge-secondary:hover{color:#fff;background-color:#545b62}a.badge-secondary.focus,a.badge-secondary:focus{outline:0;box-shadow:0 0 0 .2rem rgba(108,117,125,.5)}.badge-success{color:#fff;background-color:#28a745}a.badge-success:focus,a.badge-success:hover{color:#fff;background-color:#1e7e34}a.badge-success.focus,a.badge-success:focus{outline:0;box-shadow:0 0 0 .2rem rgba(40,167,69,.5)}.badge-info{color:#fff;background-color:#17a2b8}a.badge-info:focus,a.badge-info:hover{color:#fff;background-color:#117a8b}a.badge-info.focus,a.badge-info:focus{outline:0;box-shadow:0 0 0 .2rem rgba(23,162,184,.5)}.badge-warning{color:#212529;background-color:#ffc107}a.badge-warning:focus,a.badge-warning:hover{color:#212529;background-color:#d39e00}a.badge-warning.focus,a.badge-warning:focus{outline:0;box-shadow:0 0 0 .2rem rgba(255,193,7,.5)}.badge-danger{color:#fff;background-color:#dc3545}a.badge-danger:focus,a.badge-danger:hover{color:#fff;background-color:#bd2130}a.badge-danger.focus,a.badge-danger:focus{outline:0;box-shadow:0 0 0 .2rem rgba(220,53,69,.5)}.badge-light{color:#212529;background-color:#f8f9fa}a.badge-light:focus,a.badge-light:hover{color:#212529;background-color:#dae0e5}a.badge-light.focus,a.badge-light:focus{outline:0;box-shadow:0 0 0 .2rem rgba(248,249,250,.5)}.badge-dark{color:#fff;background-color:#343a40}a.badge-dark:focus,a.badge-dark:hover{color:#fff;background-color:#1d2124}a.badge-dark.focus,a.badge-dark:focus{outline:0;box-shadow:0 0 0 .2rem rgba(52,58,64,.5)}.jumbotron{padding:2rem 1rem;margin-bottom:2rem;background-color:#e9ecef;border-radius:.3rem}@media (min-width:576px){.jumbotron{padding:4rem 2rem}}.jumbotron-fluid{padding-right:0;padding-left:0;border-radius:0}.alert{position:relative;padding:.75rem 1.25rem;margin-bottom:1rem;border:1px solid transparent;border-radius:.25rem}.alert-heading{color:inherit}.alert-link{font-weight:700}.alert-dismissible{padding-right:4rem}.alert-dismissible .close{position:absolute;top:0;right:0;z-index:2;padding:.75rem 1.25rem;color:inherit}.alert-primary{color:#004085;background-color:#cce5ff;border-color:#b8daff}.alert-primary hr{border-top-color:#9fcdff}.alert-primary .alert-link{color:#002752}.alert-secondary{color:#383d41;background-color:#e2e3e5;border-color:#d6d8db}.alert-secondary hr{border-top-color:#c8cbcf}.alert-secondary .alert-link{color:#202326}.alert-success{color:#155724;background-color:#d4edda;border-color:#c3e6cb}.alert-success hr{border-top-color:#b1dfbb}.alert-success .alert-link{color:#0b2e13}.alert-info{color:#0c5460;background-color:#d1ecf1;border-color:#bee5eb}.alert-info hr{border-top-color:#abdde5}.alert-info .alert-link{color:#062c33}.alert-warning{color:#856404;background-color:#fff3cd;border-color:#ffeeba}.alert-warning hr{border-top-color:#ffe8a1}.alert-warning .alert-link{color:#533f03}.alert-danger{color:#721c24;background-color:#f8d7da;border-color:#f5c6cb}.alert-danger hr{border-top-color:#f1b0b7}.alert-danger .alert-link{color:#491217}.alert-light{color:#818182;background-color:#fefefe;border-color:#fdfdfe}.alert-light hr{border-top-color:#ececf6}.alert-light .alert-link{color:#686868}.alert-dark{color:#1b1e21;background-color:#d6d8d9;border-color:#c6c8ca}.alert-dark hr{border-top-color:#b9bbbe}.alert-dark .alert-link{color:#040505}@-webkit-keyframes progress-bar-stripes{0%{background-position:1rem 0}to{background-position:0 0}}@keyframes progress-bar-stripes{0%{background-position:1rem 0}to{background-position:0 0}}.progress{height:1rem;line-height:0;font-size:.75rem;background-color:#e9ecef;border-radius:.25rem}.progress,.progress-bar{display:flex;overflow:hidden}.progress-bar{flex-direction:column;justify-content:center;color:#fff;text-align:center;white-space:nowrap;background-color:#007bff;transition:width .6s ease}@media (prefers-reduced-motion:reduce){.progress-bar{transition:none}}.progress-bar-striped{background-image:linear-gradient(45deg,hsla(0,0%,100%,.15) 25%,transparent 0,transparent 50%,hsla(0,0%,100%,.15) 0,hsla(0,0%,100%,.15) 75%,transparent 0,transparent);background-size:1rem 1rem}.progress-bar-animated{-webkit-animation:progress-bar-stripes 1s linear infinite;animation:progress-bar-stripes 1s linear infinite}@media (prefers-reduced-motion:reduce){.progress-bar-animated{-webkit-animation:none;animation:none}}.media{display:flex;align-items:flex-start}.media-body{flex:1}.list-group{display:flex;flex-direction:column;padding-left:0;margin-bottom:0;border-radius:.25rem}.list-group-item-action{width:100%;color:#495057;text-align:inherit}.list-group-item-action:focus,.list-group-item-action:hover{z-index:1;color:#495057;text-decoration:none;background-color:#f8f9fa}.list-group-item-action:active{color:#212529;background-color:#e9ecef}.list-group-item{position:relative;display:block;padding:.75rem 1.25rem;background-color:#fff;border:1px solid rgba(0,0,0,.125)}.list-group-item:first-child{border-top-left-radius:inherit;border-top-right-radius:inherit}.list-group-item:last-child{border-bottom-right-radius:inherit;border-bottom-left-radius:inherit}.list-group-item.disabled,.list-group-item:disabled{color:#6c757d;pointer-events:none;background-color:#fff}.list-group-item.active{z-index:2;color:#fff;background-color:#007bff;border-color:#007bff}.list-group-item+.list-group-item{border-top-width:0}.list-group-item+.list-group-item.active{margin-top:-1px;border-top-width:1px}.list-group-horizontal{flex-direction:row}.list-group-horizontal>.list-group-item:first-child{border-bottom-left-radius:.25rem;border-top-right-radius:0}.list-group-horizontal>.list-group-item:last-child{border-top-right-radius:.25rem;border-bottom-left-radius:0}.list-group-horizontal>.list-group-item.active{margin-top:0}.list-group-horizontal>.list-group-item+.list-group-item{border-top-width:1px;border-left-width:0}.list-group-horizontal>.list-group-item+.list-group-item.active{margin-left:-1px;border-left-width:1px}@media (min-width:576px){.list-group-horizontal-sm{flex-direction:row}.list-group-horizontal-sm>.list-group-item:first-child{border-bottom-left-radius:.25rem;border-top-right-radius:0}.list-group-horizontal-sm>.list-group-item:last-child{border-top-right-radius:.25rem;border-bottom-left-radius:0}.list-group-horizontal-sm>.list-group-item.active{margin-top:0}.list-group-horizontal-sm>.list-group-item+.list-group-item{border-top-width:1px;border-left-width:0}.list-group-horizontal-sm>.list-group-item+.list-group-item.active{margin-left:-1px;border-left-width:1px}}@media (min-width:768px){.list-group-horizontal-md{flex-direction:row}.list-group-horizontal-md>.list-group-item:first-child{border-bottom-left-radius:.25rem;border-top-right-radius:0}.list-group-horizontal-md>.list-group-item:last-child{border-top-right-radius:.25rem;border-bottom-left-radius:0}.list-group-horizontal-md>.list-group-item.active{margin-top:0}.list-group-horizontal-md>.list-group-item+.list-group-item{border-top-width:1px;border-left-width:0}.list-group-horizontal-md>.list-group-item+.list-group-item.active{margin-left:-1px;border-left-width:1px}}@media (min-width:992px){.list-group-horizontal-lg{flex-direction:row}.list-group-horizontal-lg>.list-group-item:first-child{border-bottom-left-radius:.25rem;border-top-right-radius:0}.list-group-horizontal-lg>.list-group-item:last-child{border-top-right-radius:.25rem;border-bottom-left-radius:0}.list-group-horizontal-lg>.list-group-item.active{margin-top:0}.list-group-horizontal-lg>.list-group-item+.list-group-item{border-top-width:1px;border-left-width:0}.list-group-horizontal-lg>.list-group-item+.list-group-item.active{margin-left:-1px;border-left-width:1px}}@media (min-width:1200px){.list-group-horizontal-xl{flex-direction:row}.list-group-horizontal-xl>.list-group-item:first-child{border-bottom-left-radius:.25rem;border-top-right-radius:0}.list-group-horizontal-xl>.list-group-item:last-child{border-top-right-radius:.25rem;border-bottom-left-radius:0}.list-group-horizontal-xl>.list-group-item.active{margin-top:0}.list-group-horizontal-xl>.list-group-item+.list-group-item{border-top-width:1px;border-left-width:0}.list-group-horizontal-xl>.list-group-item+.list-group-item.active{margin-left:-1px;border-left-width:1px}}.list-group-flush{border-radius:0}.list-group-flush>.list-group-item{border-width:0 0 1px}.list-group-flush>.list-group-item:last-child{border-bottom-width:0}.list-group-item-primary{color:#004085;background-color:#b8daff}.list-group-item-primary.list-group-item-action:focus,.list-group-item-primary.list-group-item-action:hover{color:#004085;background-color:#9fcdff}.list-group-item-primary.list-group-item-action.active{color:#fff;background-color:#004085;border-color:#004085}.list-group-item-secondary{color:#383d41;background-color:#d6d8db}.list-group-item-secondary.list-group-item-action:focus,.list-group-item-secondary.list-group-item-action:hover{color:#383d41;background-color:#c8cbcf}.list-group-item-secondary.list-group-item-action.active{color:#fff;background-color:#383d41;border-color:#383d41}.list-group-item-success{color:#155724;background-color:#c3e6cb}.list-group-item-success.list-group-item-action:focus,.list-group-item-success.list-group-item-action:hover{color:#155724;background-color:#b1dfbb}.list-group-item-success.list-group-item-action.active{color:#fff;background-color:#155724;border-color:#155724}.list-group-item-info{color:#0c5460;background-color:#bee5eb}.list-group-item-info.list-group-item-action:focus,.list-group-item-info.list-group-item-action:hover{color:#0c5460;background-color:#abdde5}.list-group-item-info.list-group-item-action.active{color:#fff;background-color:#0c5460;border-color:#0c5460}.list-group-item-warning{color:#856404;background-color:#ffeeba}.list-group-item-warning.list-group-item-action:focus,.list-group-item-warning.list-group-item-action:hover{color:#856404;background-color:#ffe8a1}.list-group-item-warning.list-group-item-action.active{color:#fff;background-color:#856404;border-color:#856404}.list-group-item-danger{color:#721c24;background-color:#f5c6cb}.list-group-item-danger.list-group-item-action:focus,.list-group-item-danger.list-group-item-action:hover{color:#721c24;background-color:#f1b0b7}.list-group-item-danger.list-group-item-action.active{color:#fff;background-color:#721c24;border-color:#721c24}.list-group-item-light{color:#818182;background-color:#fdfdfe}.list-group-item-light.list-group-item-action:focus,.list-group-item-light.list-group-item-action:hover{color:#818182;background-color:#ececf6}.list-group-item-light.list-group-item-action.active{color:#fff;background-color:#818182;border-color:#818182}.list-group-item-dark{color:#1b1e21;background-color:#c6c8ca}.list-group-item-dark.list-group-item-action:focus,.list-group-item-dark.list-group-item-action:hover{color:#1b1e21;background-color:#b9bbbe}.list-group-item-dark.list-group-item-action.active{color:#fff;background-color:#1b1e21;border-color:#1b1e21}.close{float:right;font-size:1.5rem;font-weight:700;line-height:1;color:#000;text-shadow:0 1px 0 #fff;opacity:.5}.close:hover{color:#000;text-decoration:none}.close:not(:disabled):not(.disabled):focus,.close:not(:disabled):not(.disabled):hover{opacity:.75}button.close{padding:0;background-color:transparent;border:0}a.close.disabled{pointer-events:none}.toast{flex-basis:350px;max-width:350px;font-size:.875rem;background-color:hsla(0,0%,100%,.85);background-clip:padding-box;border:1px solid rgba(0,0,0,.1);box-shadow:0 .25rem .75rem rgba(0,0,0,.1);opacity:0;border-radius:.25rem}.toast:not(:last-child){margin-bottom:.75rem}.toast.showing{opacity:1}.toast.show{display:block;opacity:1}.toast.hide{display:none}.toast-header{display:flex;align-items:center;padding:.25rem .75rem;color:#6c757d;background-color:hsla(0,0%,100%,.85);background-clip:padding-box;border-bottom:1px solid rgba(0,0,0,.05);border-top-left-radius:calc(.25rem - 1px);border-top-right-radius:calc(.25rem - 1px)}.toast-body{padding:.75rem}.modal-open{overflow:hidden}.modal-open .modal{overflow-x:hidden;overflow-y:auto}.modal{position:fixed;top:0;left:0;z-index:1050;display:none;width:100%;height:100%;overflow:hidden;outline:0}.modal-dialog{position:relative;width:auto;margin:.5rem;pointer-events:none}.modal.fade .modal-dialog{transition:transform .3s ease-out;transform:translateY(-50px)}@media (prefers-reduced-motion:reduce){.modal.fade .modal-dialog{transition:none}}.modal.show .modal-dialog{transform:none}.modal.modal-static .modal-dialog{transform:scale(1.02)}.modal-dialog-scrollable{display:flex;max-height:calc(100% - 1rem)}.modal-dialog-scrollable .modal-content{max-height:calc(100vh - 1rem);overflow:hidden}.modal-dialog-scrollable .modal-footer,.modal-dialog-scrollable .modal-header{flex-shrink:0}.modal-dialog-scrollable .modal-body{overflow-y:auto}.modal-dialog-centered{display:flex;align-items:center;min-height:calc(100% - 1rem)}.modal-dialog-centered:before{display:block;height:calc(100vh - 1rem);height:-webkit-min-content;height:-moz-min-content;height:min-content;content:\"\"}.modal-dialog-centered.modal-dialog-scrollable{flex-direction:column;justify-content:center;height:100%}.modal-dialog-centered.modal-dialog-scrollable .modal-content{max-height:none}.modal-dialog-centered.modal-dialog-scrollable:before{content:none}.modal-content{position:relative;display:flex;flex-direction:column;width:100%;pointer-events:auto;background-color:#fff;background-clip:padding-box;border:1px solid rgba(0,0,0,.2);border-radius:.3rem;outline:0}.modal-backdrop{position:fixed;top:0;left:0;z-index:1040;width:100vw;height:100vh;background-color:#000}.modal-backdrop.fade{opacity:0}.modal-backdrop.show{opacity:.5}.modal-header{display:flex;align-items:flex-start;justify-content:space-between;padding:1rem;border-bottom:1px solid #dee2e6;border-top-left-radius:calc(.3rem - 1px);border-top-right-radius:calc(.3rem - 1px)}.modal-header .close{padding:1rem;margin:-1rem -1rem -1rem auto}.modal-title{margin-bottom:0;line-height:1.5}.modal-body{position:relative;flex:1 1 auto;padding:1rem}.modal-footer{display:flex;flex-wrap:wrap;align-items:center;justify-content:flex-end;padding:.75rem;border-top:1px solid #dee2e6;border-bottom-right-radius:calc(.3rem - 1px);border-bottom-left-radius:calc(.3rem - 1px)}.modal-footer>*{margin:.25rem}.modal-scrollbar-measure{position:absolute;top:-9999px;width:50px;height:50px;overflow:scroll}@media (min-width:576px){.modal-dialog{max-width:500px;margin:1.75rem auto}.modal-dialog-scrollable{max-height:calc(100% - 3.5rem)}.modal-dialog-scrollable .modal-content{max-height:calc(100vh - 3.5rem)}.modal-dialog-centered{min-height:calc(100% - 3.5rem)}.modal-dialog-centered:before{height:calc(100vh - 3.5rem);height:-webkit-min-content;height:-moz-min-content;height:min-content}.modal-sm{max-width:300px}}@media (min-width:992px){.modal-lg,.modal-xl{max-width:800px}}@media (min-width:1200px){.modal-xl{max-width:1140px}}[dir=ltr] .tooltip{text-align:left}[dir=rtl] .tooltip{text-align:right}.tooltip{position:absolute;z-index:1070;display:block;margin:0;font-family:-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,\"Helvetica Neue\",Arial,\"Noto Sans\",\"Liberation Sans\",sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\",\"Noto Color Emoji\";font-style:normal;font-weight:400;line-height:1.5;text-align:left;text-decoration:none;text-shadow:none;text-transform:none;letter-spacing:normal;word-break:normal;word-spacing:normal;white-space:normal;line-break:auto;font-size:.875rem;word-wrap:break-word;opacity:0}.tooltip.show{opacity:.9}.tooltip .arrow{position:absolute;display:block;width:.8rem;height:.4rem}.tooltip .arrow:before{position:absolute;content:\"\";border-color:transparent;border-style:solid}.bs-tooltip-auto[x-placement^=top],.bs-tooltip-top{padding:.4rem 0}.bs-tooltip-auto[x-placement^=top] .arrow,.bs-tooltip-top .arrow{bottom:0}.bs-tooltip-auto[x-placement^=top] .arrow:before,.bs-tooltip-top .arrow:before{top:0;border-width:.4rem .4rem 0;border-top-color:#000}.bs-tooltip-auto[x-placement^=right],.bs-tooltip-right{padding:0 .4rem}.bs-tooltip-auto[x-placement^=right] .arrow,.bs-tooltip-right .arrow{left:0;width:.4rem;height:.8rem}.bs-tooltip-auto[x-placement^=right] .arrow:before,.bs-tooltip-right .arrow:before{right:0;border-width:.4rem .4rem .4rem 0;border-right-color:#000}.bs-tooltip-auto[x-placement^=bottom],.bs-tooltip-bottom{padding:.4rem 0}.bs-tooltip-auto[x-placement^=bottom] .arrow,.bs-tooltip-bottom .arrow{top:0}.bs-tooltip-auto[x-placement^=bottom] .arrow:before,.bs-tooltip-bottom .arrow:before{bottom:0;border-width:0 .4rem .4rem;border-bottom-color:#000}.bs-tooltip-auto[x-placement^=left],.bs-tooltip-left{padding:0 .4rem}.bs-tooltip-auto[x-placement^=left] .arrow,.bs-tooltip-left .arrow{right:0;width:.4rem;height:.8rem}.bs-tooltip-auto[x-placement^=left] .arrow:before,.bs-tooltip-left .arrow:before{left:0;border-width:.4rem 0 .4rem .4rem;border-left-color:#000}.tooltip-inner{max-width:200px;padding:.25rem .5rem;color:#fff;text-align:center;background-color:#000;border-radius:.25rem}[dir=ltr] .popover{text-align:left}[dir=rtl] .popover{text-align:right}.popover{top:0;left:0;z-index:1060;max-width:276px;font-family:-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,\"Helvetica Neue\",Arial,\"Noto Sans\",\"Liberation Sans\",sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\",\"Noto Color Emoji\";font-style:normal;font-weight:400;line-height:1.5;text-align:left;text-decoration:none;text-shadow:none;text-transform:none;letter-spacing:normal;word-break:normal;word-spacing:normal;white-space:normal;line-break:auto;font-size:.875rem;word-wrap:break-word;background-color:#fff;background-clip:padding-box;border:1px solid rgba(0,0,0,.2);border-radius:.3rem}.popover,.popover .arrow{position:absolute;display:block}.popover .arrow{width:1rem;height:.5rem;margin:0 .3rem}.popover .arrow:after,.popover .arrow:before{position:absolute;display:block;content:\"\";border-color:transparent;border-style:solid}.bs-popover-auto[x-placement^=top],.bs-popover-top{margin-bottom:.5rem}.bs-popover-auto[x-placement^=top]>.arrow,.bs-popover-top>.arrow{bottom:calc(-.5rem - 1px)}.bs-popover-auto[x-placement^=top]>.arrow:before,.bs-popover-top>.arrow:before{bottom:0;border-width:.5rem .5rem 0;border-top-color:rgba(0,0,0,.25)}.bs-popover-auto[x-placement^=top]>.arrow:after,.bs-popover-top>.arrow:after{bottom:1px;border-width:.5rem .5rem 0;border-top-color:#fff}.bs-popover-auto[x-placement^=right],.bs-popover-right{margin-left:.5rem}.bs-popover-auto[x-placement^=right]>.arrow,.bs-popover-right>.arrow{left:calc(-.5rem - 1px);width:.5rem;height:1rem;margin:.3rem 0}.bs-popover-auto[x-placement^=right]>.arrow:before,.bs-popover-right>.arrow:before{left:0;border-width:.5rem .5rem .5rem 0;border-right-color:rgba(0,0,0,.25)}.bs-popover-auto[x-placement^=right]>.arrow:after,.bs-popover-right>.arrow:after{left:1px;border-width:.5rem .5rem .5rem 0;border-right-color:#fff}.bs-popover-auto[x-placement^=bottom],.bs-popover-bottom{margin-top:.5rem}.bs-popover-auto[x-placement^=bottom]>.arrow,.bs-popover-bottom>.arrow{top:calc(-.5rem - 1px)}.bs-popover-auto[x-placement^=bottom]>.arrow:before,.bs-popover-bottom>.arrow:before{top:0;border-width:0 .5rem .5rem;border-bottom-color:rgba(0,0,0,.25)}.bs-popover-auto[x-placement^=bottom]>.arrow:after,.bs-popover-bottom>.arrow:after{top:1px;border-width:0 .5rem .5rem;border-bottom-color:#fff}.bs-popover-auto[x-placement^=bottom] .popover-header:before,.bs-popover-bottom .popover-header:before{position:absolute;top:0;left:50%;display:block;width:1rem;margin-left:-.5rem;content:\"\";border-bottom:1px solid #f7f7f7}.bs-popover-auto[x-placement^=left],.bs-popover-left{margin-right:.5rem}.bs-popover-auto[x-placement^=left]>.arrow,.bs-popover-left>.arrow{right:calc(-.5rem - 1px);width:.5rem;height:1rem;margin:.3rem 0}.bs-popover-auto[x-placement^=left]>.arrow:before,.bs-popover-left>.arrow:before{right:0;border-width:.5rem 0 .5rem .5rem;border-left-color:rgba(0,0,0,.25)}.bs-popover-auto[x-placement^=left]>.arrow:after,.bs-popover-left>.arrow:after{right:1px;border-width:.5rem 0 .5rem .5rem;border-left-color:#fff}.popover-header{padding:.5rem .75rem;margin-bottom:0;font-size:1rem;background-color:#f7f7f7;border-bottom:1px solid #ebebeb;border-top-left-radius:calc(.3rem - 1px);border-top-right-radius:calc(.3rem - 1px)}.popover-header:empty{display:none}.popover-body{padding:.5rem .75rem;color:#212529}.carousel{position:relative}.carousel.pointer-event{touch-action:pan-y}.carousel-inner{position:relative;width:100%;overflow:hidden}.carousel-inner:after{display:block;clear:both;content:\"\"}.carousel-item{position:relative;display:none;float:left;width:100%;margin-right:-100%;-webkit-backface-visibility:hidden;backface-visibility:hidden;transition:transform .6s ease-in-out}@media (prefers-reduced-motion:reduce){.carousel-item{transition:none}}.carousel-item-next,.carousel-item-prev,.carousel-item.active{display:block}.active.carousel-item-right,.carousel-item-next:not(.carousel-item-left){transform:translateX(100%)}.active.carousel-item-left,.carousel-item-prev:not(.carousel-item-right){transform:translateX(-100%)}.carousel-fade .carousel-item{opacity:0;transition-property:opacity;transform:none}.carousel-fade .carousel-item-next.carousel-item-left,.carousel-fade .carousel-item-prev.carousel-item-right,.carousel-fade .carousel-item.active{z-index:1;opacity:1}.carousel-fade .active.carousel-item-left,.carousel-fade .active.carousel-item-right{z-index:0;opacity:0;transition:opacity 0s .6s}@media (prefers-reduced-motion:reduce){.carousel-fade .active.carousel-item-left,.carousel-fade .active.carousel-item-right{transition:none}}.carousel-control-next,.carousel-control-prev{position:absolute;top:0;bottom:0;z-index:1;display:flex;align-items:center;justify-content:center;width:15%;color:#fff;text-align:center;opacity:.5;transition:opacity .15s ease}@media (prefers-reduced-motion:reduce){.carousel-control-next,.carousel-control-prev{transition:none}}.carousel-control-next:focus,.carousel-control-next:hover,.carousel-control-prev:focus,.carousel-control-prev:hover{color:#fff;text-decoration:none;outline:0;opacity:.9}.carousel-control-prev{left:0}.carousel-control-next{right:0}.carousel-control-next-icon,.carousel-control-prev-icon{display:inline-block;width:20px;height:20px;background:50%/100% 100% no-repeat}.carousel-control-prev-icon{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23fff' width='8' height='8'%3E%3Cpath d='M5.25 0l-4 4 4 4 1.5-1.5L4.25 4l2.5-2.5L5.25 0z'/%3E%3C/svg%3E\")}.carousel-control-next-icon{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23fff' width='8' height='8'%3E%3Cpath d='M2.75 0l-1.5 1.5L3.75 4l-2.5 2.5L2.75 8l4-4-4-4z'/%3E%3C/svg%3E\")}.carousel-indicators{position:absolute;right:0;bottom:0;left:0;z-index:15;display:flex;justify-content:center;padding-left:0;margin-right:15%;margin-left:15%;list-style:none}.carousel-indicators li{box-sizing:content-box;flex:0 1 auto;width:30px;height:3px;margin-right:3px;margin-left:3px;text-indent:-999px;cursor:pointer;background-color:#fff;background-clip:padding-box;border-top:10px solid transparent;border-bottom:10px solid transparent;opacity:.5;transition:opacity .6s ease}@media (prefers-reduced-motion:reduce){.carousel-indicators li{transition:none}}.carousel-indicators .active{opacity:1}.carousel-caption{position:absolute;right:15%;bottom:20px;left:15%;z-index:10;padding-top:20px;padding-bottom:20px;color:#fff;text-align:center}@-webkit-keyframes spinner-border{to{transform:rotate(1turn)}}@keyframes spinner-border{to{transform:rotate(1turn)}}.spinner-border{display:inline-block;width:2rem;height:2rem;vertical-align:text-bottom;border:.25em solid;border-right:.25em solid transparent;border-radius:50%;-webkit-animation:spinner-border .75s linear infinite;animation:spinner-border .75s linear infinite}.spinner-border-sm{width:1rem;height:1rem;border-width:.2em}@-webkit-keyframes spinner-grow{0%{transform:scale(0)}50%{opacity:1;transform:none}}@keyframes spinner-grow{0%{transform:scale(0)}50%{opacity:1;transform:none}}.spinner-grow{display:inline-block;width:2rem;height:2rem;vertical-align:text-bottom;background-color:currentColor;border-radius:50%;opacity:0;-webkit-animation:spinner-grow .75s linear infinite;animation:spinner-grow .75s linear infinite}.spinner-grow-sm{width:1rem;height:1rem}@media (prefers-reduced-motion:reduce){.spinner-border,.spinner-grow{-webkit-animation-duration:1.5s;animation-duration:1.5s}}.align-baseline{vertical-align:baseline!important}.align-top{vertical-align:top!important}.align-middle{vertical-align:middle!important}.align-bottom{vertical-align:bottom!important}.align-text-bottom{vertical-align:text-bottom!important}.align-text-top{vertical-align:text-top!important}.bg-primary{background-color:#007bff!important}a.bg-primary:focus,a.bg-primary:hover,button.bg-primary:focus,button.bg-primary:hover{background-color:#0062cc!important}.bg-secondary{background-color:#6c757d!important}a.bg-secondary:focus,a.bg-secondary:hover,button.bg-secondary:focus,button.bg-secondary:hover{background-color:#545b62!important}.bg-success{background-color:#28a745!important}a.bg-success:focus,a.bg-success:hover,button.bg-success:focus,button.bg-success:hover{background-color:#1e7e34!important}.bg-info{background-color:#17a2b8!important}a.bg-info:focus,a.bg-info:hover,button.bg-info:focus,button.bg-info:hover{background-color:#117a8b!important}.bg-warning{background-color:#ffc107!important}a.bg-warning:focus,a.bg-warning:hover,button.bg-warning:focus,button.bg-warning:hover{background-color:#d39e00!important}.bg-danger{background-color:#dc3545!important}a.bg-danger:focus,a.bg-danger:hover,button.bg-danger:focus,button.bg-danger:hover{background-color:#bd2130!important}.bg-light{background-color:#f8f9fa!important}a.bg-light:focus,a.bg-light:hover,button.bg-light:focus,button.bg-light:hover{background-color:#dae0e5!important}.bg-dark{background-color:#343a40!important}a.bg-dark:focus,a.bg-dark:hover,button.bg-dark:focus,button.bg-dark:hover{background-color:#1d2124!important}.bg-white{background-color:#fff!important}.bg-transparent{background-color:transparent!important}.border{border:1px solid #dee2e6!important}.border-top{border-top:1px solid #dee2e6!important}.border-right{border-right:1px solid #dee2e6!important}.border-bottom{border-bottom:1px solid #dee2e6!important}.border-left{border-left:1px solid #dee2e6!important}.border-0{border:0!important}.border-top-0{border-top:0!important}.border-right-0{border-right:0!important}.border-bottom-0{border-bottom:0!important}.border-left-0{border-left:0!important}.border-primary{border-color:#007bff!important}.border-secondary{border-color:#6c757d!important}.border-success{border-color:#28a745!important}.border-info{border-color:#17a2b8!important}.border-warning{border-color:#ffc107!important}.border-danger{border-color:#dc3545!important}.border-light{border-color:#f8f9fa!important}.border-dark{border-color:#343a40!important}.border-white{border-color:#fff!important}.rounded-sm{border-radius:.2rem!important}.rounded{border-radius:.25rem!important}.rounded-top{border-top-left-radius:.25rem!important}.rounded-right,.rounded-top{border-top-right-radius:.25rem!important}.rounded-bottom,.rounded-right{border-bottom-right-radius:.25rem!important}.rounded-bottom,.rounded-left{border-bottom-left-radius:.25rem!important}.rounded-left{border-top-left-radius:.25rem!important}.rounded-lg{border-radius:.3rem!important}.rounded-circle{border-radius:50%!important}.rounded-pill{border-radius:50rem!important}.rounded-0{border-radius:0!important}.clearfix:after{display:block;clear:both;content:\"\"}.d-none{display:none!important}.d-inline{display:inline!important}.d-inline-block{display:inline-block!important}.d-block{display:block!important}.d-table{display:table!important}.d-table-row{display:table-row!important}.d-table-cell{display:table-cell!important}.d-flex{display:flex!important}.d-inline-flex{display:inline-flex!important}@media (min-width:576px){.d-sm-none{display:none!important}.d-sm-inline{display:inline!important}.d-sm-inline-block{display:inline-block!important}.d-sm-block{display:block!important}.d-sm-table{display:table!important}.d-sm-table-row{display:table-row!important}.d-sm-table-cell{display:table-cell!important}.d-sm-flex{display:flex!important}.d-sm-inline-flex{display:inline-flex!important}}@media (min-width:768px){.d-md-none{display:none!important}.d-md-inline{display:inline!important}.d-md-inline-block{display:inline-block!important}.d-md-block{display:block!important}.d-md-table{display:table!important}.d-md-table-row{display:table-row!important}.d-md-table-cell{display:table-cell!important}.d-md-flex{display:flex!important}.d-md-inline-flex{display:inline-flex!important}}@media (min-width:992px){.d-lg-none{display:none!important}.d-lg-inline{display:inline!important}.d-lg-inline-block{display:inline-block!important}.d-lg-block{display:block!important}.d-lg-table{display:table!important}.d-lg-table-row{display:table-row!important}.d-lg-table-cell{display:table-cell!important}.d-lg-flex{display:flex!important}.d-lg-inline-flex{display:inline-flex!important}}@media (min-width:1200px){.d-xl-none{display:none!important}.d-xl-inline{display:inline!important}.d-xl-inline-block{display:inline-block!important}.d-xl-block{display:block!important}.d-xl-table{display:table!important}.d-xl-table-row{display:table-row!important}.d-xl-table-cell{display:table-cell!important}.d-xl-flex{display:flex!important}.d-xl-inline-flex{display:inline-flex!important}}@media print{.d-print-none{display:none!important}.d-print-inline{display:inline!important}.d-print-inline-block{display:inline-block!important}.d-print-block{display:block!important}.d-print-table{display:table!important}.d-print-table-row{display:table-row!important}.d-print-table-cell{display:table-cell!important}.d-print-flex{display:flex!important}.d-print-inline-flex{display:inline-flex!important}}.embed-responsive{position:relative;display:block;width:100%;padding:0;overflow:hidden}.embed-responsive:before{display:block;content:\"\"}.embed-responsive .embed-responsive-item,.embed-responsive embed,.embed-responsive iframe,.embed-responsive object,.embed-responsive video{position:absolute;top:0;bottom:0;left:0;width:100%;height:100%;border:0}.embed-responsive-21by9:before{padding-top:42.857143%}.embed-responsive-16by9:before{padding-top:56.25%}.embed-responsive-4by3:before{padding-top:75%}.embed-responsive-1by1:before{padding-top:100%}.flex-row{flex-direction:row!important}.flex-column{flex-direction:column!important}.flex-row-reverse{flex-direction:row-reverse!important}.flex-column-reverse{flex-direction:column-reverse!important}.flex-wrap{flex-wrap:wrap!important}.flex-nowrap{flex-wrap:nowrap!important}.flex-wrap-reverse{flex-wrap:wrap-reverse!important}.flex-fill{flex:1 1 auto!important}.flex-grow-0{flex-grow:0!important}.flex-grow-1{flex-grow:1!important}.flex-shrink-0{flex-shrink:0!important}.flex-shrink-1{flex-shrink:1!important}.justify-content-start{justify-content:flex-start!important}.justify-content-end{justify-content:flex-end!important}.justify-content-center{justify-content:center!important}.justify-content-between{justify-content:space-between!important}.justify-content-around{justify-content:space-around!important}.align-items-start{align-items:flex-start!important}.align-items-end{align-items:flex-end!important}.align-items-center{align-items:center!important}.align-items-baseline{align-items:baseline!important}.align-items-stretch{align-items:stretch!important}.align-content-start{align-content:flex-start!important}.align-content-end{align-content:flex-end!important}.align-content-center{align-content:center!important}.align-content-between{align-content:space-between!important}.align-content-around{align-content:space-around!important}.align-content-stretch{align-content:stretch!important}.align-self-auto{align-self:auto!important}.align-self-start{align-self:flex-start!important}.align-self-end{align-self:flex-end!important}.align-self-center{align-self:center!important}.align-self-baseline{align-self:baseline!important}.align-self-stretch{align-self:stretch!important}@media (min-width:576px){.flex-sm-row{flex-direction:row!important}.flex-sm-column{flex-direction:column!important}.flex-sm-row-reverse{flex-direction:row-reverse!important}.flex-sm-column-reverse{flex-direction:column-reverse!important}.flex-sm-wrap{flex-wrap:wrap!important}.flex-sm-nowrap{flex-wrap:nowrap!important}.flex-sm-wrap-reverse{flex-wrap:wrap-reverse!important}.flex-sm-fill{flex:1 1 auto!important}.flex-sm-grow-0{flex-grow:0!important}.flex-sm-grow-1{flex-grow:1!important}.flex-sm-shrink-0{flex-shrink:0!important}.flex-sm-shrink-1{flex-shrink:1!important}.justify-content-sm-start{justify-content:flex-start!important}.justify-content-sm-end{justify-content:flex-end!important}.justify-content-sm-center{justify-content:center!important}.justify-content-sm-between{justify-content:space-between!important}.justify-content-sm-around{justify-content:space-around!important}.align-items-sm-start{align-items:flex-start!important}.align-items-sm-end{align-items:flex-end!important}.align-items-sm-center{align-items:center!important}.align-items-sm-baseline{align-items:baseline!important}.align-items-sm-stretch{align-items:stretch!important}.align-content-sm-start{align-content:flex-start!important}.align-content-sm-end{align-content:flex-end!important}.align-content-sm-center{align-content:center!important}.align-content-sm-between{align-content:space-between!important}.align-content-sm-around{align-content:space-around!important}.align-content-sm-stretch{align-content:stretch!important}.align-self-sm-auto{align-self:auto!important}.align-self-sm-start{align-self:flex-start!important}.align-self-sm-end{align-self:flex-end!important}.align-self-sm-center{align-self:center!important}.align-self-sm-baseline{align-self:baseline!important}.align-self-sm-stretch{align-self:stretch!important}}@media (min-width:768px){.flex-md-row{flex-direction:row!important}.flex-md-column{flex-direction:column!important}.flex-md-row-reverse{flex-direction:row-reverse!important}.flex-md-column-reverse{flex-direction:column-reverse!important}.flex-md-wrap{flex-wrap:wrap!important}.flex-md-nowrap{flex-wrap:nowrap!important}.flex-md-wrap-reverse{flex-wrap:wrap-reverse!important}.flex-md-fill{flex:1 1 auto!important}.flex-md-grow-0{flex-grow:0!important}.flex-md-grow-1{flex-grow:1!important}.flex-md-shrink-0{flex-shrink:0!important}.flex-md-shrink-1{flex-shrink:1!important}.justify-content-md-start{justify-content:flex-start!important}.justify-content-md-end{justify-content:flex-end!important}.justify-content-md-center{justify-content:center!important}.justify-content-md-between{justify-content:space-between!important}.justify-content-md-around{justify-content:space-around!important}.align-items-md-start{align-items:flex-start!important}.align-items-md-end{align-items:flex-end!important}.align-items-md-center{align-items:center!important}.align-items-md-baseline{align-items:baseline!important}.align-items-md-stretch{align-items:stretch!important}.align-content-md-start{align-content:flex-start!important}.align-content-md-end{align-content:flex-end!important}.align-content-md-center{align-content:center!important}.align-content-md-between{align-content:space-between!important}.align-content-md-around{align-content:space-around!important}.align-content-md-stretch{align-content:stretch!important}.align-self-md-auto{align-self:auto!important}.align-self-md-start{align-self:flex-start!important}.align-self-md-end{align-self:flex-end!important}.align-self-md-center{align-self:center!important}.align-self-md-baseline{align-self:baseline!important}.align-self-md-stretch{align-self:stretch!important}}@media (min-width:992px){.flex-lg-row{flex-direction:row!important}.flex-lg-column{flex-direction:column!important}.flex-lg-row-reverse{flex-direction:row-reverse!important}.flex-lg-column-reverse{flex-direction:column-reverse!important}.flex-lg-wrap{flex-wrap:wrap!important}.flex-lg-nowrap{flex-wrap:nowrap!important}.flex-lg-wrap-reverse{flex-wrap:wrap-reverse!important}.flex-lg-fill{flex:1 1 auto!important}.flex-lg-grow-0{flex-grow:0!important}.flex-lg-grow-1{flex-grow:1!important}.flex-lg-shrink-0{flex-shrink:0!important}.flex-lg-shrink-1{flex-shrink:1!important}.justify-content-lg-start{justify-content:flex-start!important}.justify-content-lg-end{justify-content:flex-end!important}.justify-content-lg-center{justify-content:center!important}.justify-content-lg-between{justify-content:space-between!important}.justify-content-lg-around{justify-content:space-around!important}.align-items-lg-start{align-items:flex-start!important}.align-items-lg-end{align-items:flex-end!important}.align-items-lg-center{align-items:center!important}.align-items-lg-baseline{align-items:baseline!important}.align-items-lg-stretch{align-items:stretch!important}.align-content-lg-start{align-content:flex-start!important}.align-content-lg-end{align-content:flex-end!important}.align-content-lg-center{align-content:center!important}.align-content-lg-between{align-content:space-between!important}.align-content-lg-around{align-content:space-around!important}.align-content-lg-stretch{align-content:stretch!important}.align-self-lg-auto{align-self:auto!important}.align-self-lg-start{align-self:flex-start!important}.align-self-lg-end{align-self:flex-end!important}.align-self-lg-center{align-self:center!important}.align-self-lg-baseline{align-self:baseline!important}.align-self-lg-stretch{align-self:stretch!important}}@media (min-width:1200px){.flex-xl-row{flex-direction:row!important}.flex-xl-column{flex-direction:column!important}.flex-xl-row-reverse{flex-direction:row-reverse!important}.flex-xl-column-reverse{flex-direction:column-reverse!important}.flex-xl-wrap{flex-wrap:wrap!important}.flex-xl-nowrap{flex-wrap:nowrap!important}.flex-xl-wrap-reverse{flex-wrap:wrap-reverse!important}.flex-xl-fill{flex:1 1 auto!important}.flex-xl-grow-0{flex-grow:0!important}.flex-xl-grow-1{flex-grow:1!important}.flex-xl-shrink-0{flex-shrink:0!important}.flex-xl-shrink-1{flex-shrink:1!important}.justify-content-xl-start{justify-content:flex-start!important}.justify-content-xl-end{justify-content:flex-end!important}.justify-content-xl-center{justify-content:center!important}.justify-content-xl-between{justify-content:space-between!important}.justify-content-xl-around{justify-content:space-around!important}.align-items-xl-start{align-items:flex-start!important}.align-items-xl-end{align-items:flex-end!important}.align-items-xl-center{align-items:center!important}.align-items-xl-baseline{align-items:baseline!important}.align-items-xl-stretch{align-items:stretch!important}.align-content-xl-start{align-content:flex-start!important}.align-content-xl-end{align-content:flex-end!important}.align-content-xl-center{align-content:center!important}.align-content-xl-between{align-content:space-between!important}.align-content-xl-around{align-content:space-around!important}.align-content-xl-stretch{align-content:stretch!important}.align-self-xl-auto{align-self:auto!important}.align-self-xl-start{align-self:flex-start!important}.align-self-xl-end{align-self:flex-end!important}.align-self-xl-center{align-self:center!important}.align-self-xl-baseline{align-self:baseline!important}.align-self-xl-stretch{align-self:stretch!important}}.float-left{float:left!important}.float-right{float:right!important}.float-none{float:none!important}@media (min-width:576px){.float-sm-left{float:left!important}.float-sm-right{float:right!important}.float-sm-none{float:none!important}}@media (min-width:768px){.float-md-left{float:left!important}.float-md-right{float:right!important}.float-md-none{float:none!important}}@media (min-width:992px){.float-lg-left{float:left!important}.float-lg-right{float:right!important}.float-lg-none{float:none!important}}@media (min-width:1200px){.float-xl-left{float:left!important}.float-xl-right{float:right!important}.float-xl-none{float:none!important}}.user-select-all{-webkit-user-select:all!important;-moz-user-select:all!important;-ms-user-select:all!important;user-select:all!important}.user-select-auto{-webkit-user-select:auto!important;-moz-user-select:auto!important;-ms-user-select:auto!important;user-select:auto!important}.user-select-none{-webkit-user-select:none!important;-moz-user-select:none!important;-ms-user-select:none!important;user-select:none!important}.overflow-auto{overflow:auto!important}.overflow-hidden{overflow:hidden!important}.position-static{position:static!important}.position-relative{position:relative!important}.position-absolute{position:absolute!important}.position-fixed{position:fixed!important}.position-sticky{position:sticky!important}.fixed-top{top:0}.fixed-bottom,.fixed-top{position:fixed;right:0;left:0;z-index:1030}.fixed-bottom{bottom:0}@supports (position:sticky){.sticky-top{position:sticky;top:0;z-index:1020}}.sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border:0}.sr-only-focusable:active,.sr-only-focusable:focus{position:static;width:auto;height:auto;overflow:visible;clip:auto;white-space:normal}.shadow-sm{box-shadow:0 .125rem .25rem rgba(0,0,0,.075)!important}.shadow{box-shadow:0 .5rem 1rem rgba(0,0,0,.15)!important}.shadow-lg{box-shadow:0 1rem 3rem rgba(0,0,0,.175)!important}.shadow-none{box-shadow:none!important}.w-25{width:25%!important}.w-50{width:50%!important}.w-75{width:75%!important}.w-100{width:100%!important}.w-auto{width:auto!important}.h-25{height:25%!important}.h-50{height:50%!important}.h-75{height:75%!important}.h-100{height:100%!important}.h-auto{height:auto!important}.mw-100{max-width:100%!important}.mh-100{max-height:100%!important}.min-vw-100{min-width:100vw!important}.min-vh-100{min-height:100vh!important}.vw-100{width:100vw!important}.vh-100{height:100vh!important}.m-0{margin:0!important}.mt-0,.my-0{margin-top:0!important}.mr-0,.mx-0{margin-right:0!important}.mb-0,.my-0{margin-bottom:0!important}.ml-0,.mx-0{margin-left:0!important}.m-1{margin:.25rem!important}.mt-1,.my-1{margin-top:.25rem!important}.mr-1,.mx-1{margin-right:.25rem!important}.mb-1,.my-1{margin-bottom:.25rem!important}.ml-1,.mx-1{margin-left:.25rem!important}.m-2{margin:.5rem!important}.mt-2,.my-2{margin-top:.5rem!important}.mr-2,.mx-2{margin-right:.5rem!important}.mb-2,.my-2{margin-bottom:.5rem!important}.ml-2,.mx-2{margin-left:.5rem!important}.m-3{margin:1rem!important}.mt-3,.my-3{margin-top:1rem!important}.mr-3,.mx-3{margin-right:1rem!important}.mb-3,.my-3{margin-bottom:1rem!important}.ml-3,.mx-3{margin-left:1rem!important}.m-4{margin:1.5rem!important}.mt-4,.my-4{margin-top:1.5rem!important}.mr-4,.mx-4{margin-right:1.5rem!important}.mb-4,.my-4{margin-bottom:1.5rem!important}.ml-4,.mx-4{margin-left:1.5rem!important}.m-5{margin:3rem!important}.mt-5,.my-5{margin-top:3rem!important}.mr-5,.mx-5{margin-right:3rem!important}.mb-5,.my-5{margin-bottom:3rem!important}.ml-5,.mx-5{margin-left:3rem!important}.p-0{padding:0!important}.pt-0,.py-0{padding-top:0!important}.pr-0,.px-0{padding-right:0!important}.pb-0,.py-0{padding-bottom:0!important}.pl-0,.px-0{padding-left:0!important}.p-1{padding:.25rem!important}.pt-1,.py-1{padding-top:.25rem!important}.pr-1,.px-1{padding-right:.25rem!important}.pb-1,.py-1{padding-bottom:.25rem!important}.pl-1,.px-1{padding-left:.25rem!important}.p-2{padding:.5rem!important}.pt-2,.py-2{padding-top:.5rem!important}.pr-2,.px-2{padding-right:.5rem!important}.pb-2,.py-2{padding-bottom:.5rem!important}.pl-2,.px-2{padding-left:.5rem!important}.p-3{padding:1rem!important}.pt-3,.py-3{padding-top:1rem!important}.pr-3,.px-3{padding-right:1rem!important}.pb-3,.py-3{padding-bottom:1rem!important}.pl-3,.px-3{padding-left:1rem!important}.p-4{padding:1.5rem!important}.pt-4,.py-4{padding-top:1.5rem!important}.pr-4,.px-4{padding-right:1.5rem!important}.pb-4,.py-4{padding-bottom:1.5rem!important}.pl-4,.px-4{padding-left:1.5rem!important}.p-5{padding:3rem!important}.pt-5,.py-5{padding-top:3rem!important}.pr-5,.px-5{padding-right:3rem!important}.pb-5,.py-5{padding-bottom:3rem!important}.pl-5,.px-5{padding-left:3rem!important}.m-n1{margin:-.25rem!important}.mt-n1,.my-n1{margin-top:-.25rem!important}.mr-n1,.mx-n1{margin-right:-.25rem!important}.mb-n1,.my-n1{margin-bottom:-.25rem!important}.ml-n1,.mx-n1{margin-left:-.25rem!important}.m-n2{margin:-.5rem!important}.mt-n2,.my-n2{margin-top:-.5rem!important}.mr-n2,.mx-n2{margin-right:-.5rem!important}.mb-n2,.my-n2{margin-bottom:-.5rem!important}.ml-n2,.mx-n2{margin-left:-.5rem!important}.m-n3{margin:-1rem!important}.mt-n3,.my-n3{margin-top:-1rem!important}.mr-n3,.mx-n3{margin-right:-1rem!important}.mb-n3,.my-n3{margin-bottom:-1rem!important}.ml-n3,.mx-n3{margin-left:-1rem!important}.m-n4{margin:-1.5rem!important}.mt-n4,.my-n4{margin-top:-1.5rem!important}.mr-n4,.mx-n4{margin-right:-1.5rem!important}.mb-n4,.my-n4{margin-bottom:-1.5rem!important}.ml-n4,.mx-n4{margin-left:-1.5rem!important}.m-n5{margin:-3rem!important}.mt-n5,.my-n5{margin-top:-3rem!important}.mr-n5,.mx-n5{margin-right:-3rem!important}.mb-n5,.my-n5{margin-bottom:-3rem!important}.ml-n5,.mx-n5{margin-left:-3rem!important}.m-auto{margin:auto!important}.mt-auto,.my-auto{margin-top:auto!important}.mr-auto,.mx-auto{margin-right:auto!important}.mb-auto,.my-auto{margin-bottom:auto!important}.ml-auto,.mx-auto{margin-left:auto!important}@media (min-width:576px){.m-sm-0{margin:0!important}.mt-sm-0,.my-sm-0{margin-top:0!important}.mr-sm-0,.mx-sm-0{margin-right:0!important}.mb-sm-0,.my-sm-0{margin-bottom:0!important}.ml-sm-0,.mx-sm-0{margin-left:0!important}.m-sm-1{margin:.25rem!important}.mt-sm-1,.my-sm-1{margin-top:.25rem!important}.mr-sm-1,.mx-sm-1{margin-right:.25rem!important}.mb-sm-1,.my-sm-1{margin-bottom:.25rem!important}.ml-sm-1,.mx-sm-1{margin-left:.25rem!important}.m-sm-2{margin:.5rem!important}.mt-sm-2,.my-sm-2{margin-top:.5rem!important}.mr-sm-2,.mx-sm-2{margin-right:.5rem!important}.mb-sm-2,.my-sm-2{margin-bottom:.5rem!important}.ml-sm-2,.mx-sm-2{margin-left:.5rem!important}.m-sm-3{margin:1rem!important}.mt-sm-3,.my-sm-3{margin-top:1rem!important}.mr-sm-3,.mx-sm-3{margin-right:1rem!important}.mb-sm-3,.my-sm-3{margin-bottom:1rem!important}.ml-sm-3,.mx-sm-3{margin-left:1rem!important}.m-sm-4{margin:1.5rem!important}.mt-sm-4,.my-sm-4{margin-top:1.5rem!important}.mr-sm-4,.mx-sm-4{margin-right:1.5rem!important}.mb-sm-4,.my-sm-4{margin-bottom:1.5rem!important}.ml-sm-4,.mx-sm-4{margin-left:1.5rem!important}.m-sm-5{margin:3rem!important}.mt-sm-5,.my-sm-5{margin-top:3rem!important}.mr-sm-5,.mx-sm-5{margin-right:3rem!important}.mb-sm-5,.my-sm-5{margin-bottom:3rem!important}.ml-sm-5,.mx-sm-5{margin-left:3rem!important}.p-sm-0{padding:0!important}.pt-sm-0,.py-sm-0{padding-top:0!important}.pr-sm-0,.px-sm-0{padding-right:0!important}.pb-sm-0,.py-sm-0{padding-bottom:0!important}.pl-sm-0,.px-sm-0{padding-left:0!important}.p-sm-1{padding:.25rem!important}.pt-sm-1,.py-sm-1{padding-top:.25rem!important}.pr-sm-1,.px-sm-1{padding-right:.25rem!important}.pb-sm-1,.py-sm-1{padding-bottom:.25rem!important}.pl-sm-1,.px-sm-1{padding-left:.25rem!important}.p-sm-2{padding:.5rem!important}.pt-sm-2,.py-sm-2{padding-top:.5rem!important}.pr-sm-2,.px-sm-2{padding-right:.5rem!important}.pb-sm-2,.py-sm-2{padding-bottom:.5rem!important}.pl-sm-2,.px-sm-2{padding-left:.5rem!important}.p-sm-3{padding:1rem!important}.pt-sm-3,.py-sm-3{padding-top:1rem!important}.pr-sm-3,.px-sm-3{padding-right:1rem!important}.pb-sm-3,.py-sm-3{padding-bottom:1rem!important}.pl-sm-3,.px-sm-3{padding-left:1rem!important}.p-sm-4{padding:1.5rem!important}.pt-sm-4,.py-sm-4{padding-top:1.5rem!important}.pr-sm-4,.px-sm-4{padding-right:1.5rem!important}.pb-sm-4,.py-sm-4{padding-bottom:1.5rem!important}.pl-sm-4,.px-sm-4{padding-left:1.5rem!important}.p-sm-5{padding:3rem!important}.pt-sm-5,.py-sm-5{padding-top:3rem!important}.pr-sm-5,.px-sm-5{padding-right:3rem!important}.pb-sm-5,.py-sm-5{padding-bottom:3rem!important}.pl-sm-5,.px-sm-5{padding-left:3rem!important}.m-sm-n1{margin:-.25rem!important}.mt-sm-n1,.my-sm-n1{margin-top:-.25rem!important}.mr-sm-n1,.mx-sm-n1{margin-right:-.25rem!important}.mb-sm-n1,.my-sm-n1{margin-bottom:-.25rem!important}.ml-sm-n1,.mx-sm-n1{margin-left:-.25rem!important}.m-sm-n2{margin:-.5rem!important}.mt-sm-n2,.my-sm-n2{margin-top:-.5rem!important}.mr-sm-n2,.mx-sm-n2{margin-right:-.5rem!important}.mb-sm-n2,.my-sm-n2{margin-bottom:-.5rem!important}.ml-sm-n2,.mx-sm-n2{margin-left:-.5rem!important}.m-sm-n3{margin:-1rem!important}.mt-sm-n3,.my-sm-n3{margin-top:-1rem!important}.mr-sm-n3,.mx-sm-n3{margin-right:-1rem!important}.mb-sm-n3,.my-sm-n3{margin-bottom:-1rem!important}.ml-sm-n3,.mx-sm-n3{margin-left:-1rem!important}.m-sm-n4{margin:-1.5rem!important}.mt-sm-n4,.my-sm-n4{margin-top:-1.5rem!important}.mr-sm-n4,.mx-sm-n4{margin-right:-1.5rem!important}.mb-sm-n4,.my-sm-n4{margin-bottom:-1.5rem!important}.ml-sm-n4,.mx-sm-n4{margin-left:-1.5rem!important}.m-sm-n5{margin:-3rem!important}.mt-sm-n5,.my-sm-n5{margin-top:-3rem!important}.mr-sm-n5,.mx-sm-n5{margin-right:-3rem!important}.mb-sm-n5,.my-sm-n5{margin-bottom:-3rem!important}.ml-sm-n5,.mx-sm-n5{margin-left:-3rem!important}.m-sm-auto{margin:auto!important}.mt-sm-auto,.my-sm-auto{margin-top:auto!important}.mr-sm-auto,.mx-sm-auto{margin-right:auto!important}.mb-sm-auto,.my-sm-auto{margin-bottom:auto!important}.ml-sm-auto,.mx-sm-auto{margin-left:auto!important}}@media (min-width:768px){.m-md-0{margin:0!important}.mt-md-0,.my-md-0{margin-top:0!important}.mr-md-0,.mx-md-0{margin-right:0!important}.mb-md-0,.my-md-0{margin-bottom:0!important}.ml-md-0,.mx-md-0{margin-left:0!important}.m-md-1{margin:.25rem!important}.mt-md-1,.my-md-1{margin-top:.25rem!important}.mr-md-1,.mx-md-1{margin-right:.25rem!important}.mb-md-1,.my-md-1{margin-bottom:.25rem!important}.ml-md-1,.mx-md-1{margin-left:.25rem!important}.m-md-2{margin:.5rem!important}.mt-md-2,.my-md-2{margin-top:.5rem!important}.mr-md-2,.mx-md-2{margin-right:.5rem!important}.mb-md-2,.my-md-2{margin-bottom:.5rem!important}.ml-md-2,.mx-md-2{margin-left:.5rem!important}.m-md-3{margin:1rem!important}.mt-md-3,.my-md-3{margin-top:1rem!important}.mr-md-3,.mx-md-3{margin-right:1rem!important}.mb-md-3,.my-md-3{margin-bottom:1rem!important}.ml-md-3,.mx-md-3{margin-left:1rem!important}.m-md-4{margin:1.5rem!important}.mt-md-4,.my-md-4{margin-top:1.5rem!important}.mr-md-4,.mx-md-4{margin-right:1.5rem!important}.mb-md-4,.my-md-4{margin-bottom:1.5rem!important}.ml-md-4,.mx-md-4{margin-left:1.5rem!important}.m-md-5{margin:3rem!important}.mt-md-5,.my-md-5{margin-top:3rem!important}.mr-md-5,.mx-md-5{margin-right:3rem!important}.mb-md-5,.my-md-5{margin-bottom:3rem!important}.ml-md-5,.mx-md-5{margin-left:3rem!important}.p-md-0{padding:0!important}.pt-md-0,.py-md-0{padding-top:0!important}.pr-md-0,.px-md-0{padding-right:0!important}.pb-md-0,.py-md-0{padding-bottom:0!important}.pl-md-0,.px-md-0{padding-left:0!important}.p-md-1{padding:.25rem!important}.pt-md-1,.py-md-1{padding-top:.25rem!important}.pr-md-1,.px-md-1{padding-right:.25rem!important}.pb-md-1,.py-md-1{padding-bottom:.25rem!important}.pl-md-1,.px-md-1{padding-left:.25rem!important}.p-md-2{padding:.5rem!important}.pt-md-2,.py-md-2{padding-top:.5rem!important}.pr-md-2,.px-md-2{padding-right:.5rem!important}.pb-md-2,.py-md-2{padding-bottom:.5rem!important}.pl-md-2,.px-md-2{padding-left:.5rem!important}.p-md-3{padding:1rem!important}.pt-md-3,.py-md-3{padding-top:1rem!important}.pr-md-3,.px-md-3{padding-right:1rem!important}.pb-md-3,.py-md-3{padding-bottom:1rem!important}.pl-md-3,.px-md-3{padding-left:1rem!important}.p-md-4{padding:1.5rem!important}.pt-md-4,.py-md-4{padding-top:1.5rem!important}.pr-md-4,.px-md-4{padding-right:1.5rem!important}.pb-md-4,.py-md-4{padding-bottom:1.5rem!important}.pl-md-4,.px-md-4{padding-left:1.5rem!important}.p-md-5{padding:3rem!important}.pt-md-5,.py-md-5{padding-top:3rem!important}.pr-md-5,.px-md-5{padding-right:3rem!important}.pb-md-5,.py-md-5{padding-bottom:3rem!important}.pl-md-5,.px-md-5{padding-left:3rem!important}.m-md-n1{margin:-.25rem!important}.mt-md-n1,.my-md-n1{margin-top:-.25rem!important}.mr-md-n1,.mx-md-n1{margin-right:-.25rem!important}.mb-md-n1,.my-md-n1{margin-bottom:-.25rem!important}.ml-md-n1,.mx-md-n1{margin-left:-.25rem!important}.m-md-n2{margin:-.5rem!important}.mt-md-n2,.my-md-n2{margin-top:-.5rem!important}.mr-md-n2,.mx-md-n2{margin-right:-.5rem!important}.mb-md-n2,.my-md-n2{margin-bottom:-.5rem!important}.ml-md-n2,.mx-md-n2{margin-left:-.5rem!important}.m-md-n3{margin:-1rem!important}.mt-md-n3,.my-md-n3{margin-top:-1rem!important}.mr-md-n3,.mx-md-n3{margin-right:-1rem!important}.mb-md-n3,.my-md-n3{margin-bottom:-1rem!important}.ml-md-n3,.mx-md-n3{margin-left:-1rem!important}.m-md-n4{margin:-1.5rem!important}.mt-md-n4,.my-md-n4{margin-top:-1.5rem!important}.mr-md-n4,.mx-md-n4{margin-right:-1.5rem!important}.mb-md-n4,.my-md-n4{margin-bottom:-1.5rem!important}.ml-md-n4,.mx-md-n4{margin-left:-1.5rem!important}.m-md-n5{margin:-3rem!important}.mt-md-n5,.my-md-n5{margin-top:-3rem!important}.mr-md-n5,.mx-md-n5{margin-right:-3rem!important}.mb-md-n5,.my-md-n5{margin-bottom:-3rem!important}.ml-md-n5,.mx-md-n5{margin-left:-3rem!important}.m-md-auto{margin:auto!important}.mt-md-auto,.my-md-auto{margin-top:auto!important}.mr-md-auto,.mx-md-auto{margin-right:auto!important}.mb-md-auto,.my-md-auto{margin-bottom:auto!important}.ml-md-auto,.mx-md-auto{margin-left:auto!important}}@media (min-width:992px){.m-lg-0{margin:0!important}.mt-lg-0,.my-lg-0{margin-top:0!important}.mr-lg-0,.mx-lg-0{margin-right:0!important}.mb-lg-0,.my-lg-0{margin-bottom:0!important}.ml-lg-0,.mx-lg-0{margin-left:0!important}.m-lg-1{margin:.25rem!important}.mt-lg-1,.my-lg-1{margin-top:.25rem!important}.mr-lg-1,.mx-lg-1{margin-right:.25rem!important}.mb-lg-1,.my-lg-1{margin-bottom:.25rem!important}.ml-lg-1,.mx-lg-1{margin-left:.25rem!important}.m-lg-2{margin:.5rem!important}.mt-lg-2,.my-lg-2{margin-top:.5rem!important}.mr-lg-2,.mx-lg-2{margin-right:.5rem!important}.mb-lg-2,.my-lg-2{margin-bottom:.5rem!important}.ml-lg-2,.mx-lg-2{margin-left:.5rem!important}.m-lg-3{margin:1rem!important}.mt-lg-3,.my-lg-3{margin-top:1rem!important}.mr-lg-3,.mx-lg-3{margin-right:1rem!important}.mb-lg-3,.my-lg-3{margin-bottom:1rem!important}.ml-lg-3,.mx-lg-3{margin-left:1rem!important}.m-lg-4{margin:1.5rem!important}.mt-lg-4,.my-lg-4{margin-top:1.5rem!important}.mr-lg-4,.mx-lg-4{margin-right:1.5rem!important}.mb-lg-4,.my-lg-4{margin-bottom:1.5rem!important}.ml-lg-4,.mx-lg-4{margin-left:1.5rem!important}.m-lg-5{margin:3rem!important}.mt-lg-5,.my-lg-5{margin-top:3rem!important}.mr-lg-5,.mx-lg-5{margin-right:3rem!important}.mb-lg-5,.my-lg-5{margin-bottom:3rem!important}.ml-lg-5,.mx-lg-5{margin-left:3rem!important}.p-lg-0{padding:0!important}.pt-lg-0,.py-lg-0{padding-top:0!important}.pr-lg-0,.px-lg-0{padding-right:0!important}.pb-lg-0,.py-lg-0{padding-bottom:0!important}.pl-lg-0,.px-lg-0{padding-left:0!important}.p-lg-1{padding:.25rem!important}.pt-lg-1,.py-lg-1{padding-top:.25rem!important}.pr-lg-1,.px-lg-1{padding-right:.25rem!important}.pb-lg-1,.py-lg-1{padding-bottom:.25rem!important}.pl-lg-1,.px-lg-1{padding-left:.25rem!important}.p-lg-2{padding:.5rem!important}.pt-lg-2,.py-lg-2{padding-top:.5rem!important}.pr-lg-2,.px-lg-2{padding-right:.5rem!important}.pb-lg-2,.py-lg-2{padding-bottom:.5rem!important}.pl-lg-2,.px-lg-2{padding-left:.5rem!important}.p-lg-3{padding:1rem!important}.pt-lg-3,.py-lg-3{padding-top:1rem!important}.pr-lg-3,.px-lg-3{padding-right:1rem!important}.pb-lg-3,.py-lg-3{padding-bottom:1rem!important}.pl-lg-3,.px-lg-3{padding-left:1rem!important}.p-lg-4{padding:1.5rem!important}.pt-lg-4,.py-lg-4{padding-top:1.5rem!important}.pr-lg-4,.px-lg-4{padding-right:1.5rem!important}.pb-lg-4,.py-lg-4{padding-bottom:1.5rem!important}.pl-lg-4,.px-lg-4{padding-left:1.5rem!important}.p-lg-5{padding:3rem!important}.pt-lg-5,.py-lg-5{padding-top:3rem!important}.pr-lg-5,.px-lg-5{padding-right:3rem!important}.pb-lg-5,.py-lg-5{padding-bottom:3rem!important}.pl-lg-5,.px-lg-5{padding-left:3rem!important}.m-lg-n1{margin:-.25rem!important}.mt-lg-n1,.my-lg-n1{margin-top:-.25rem!important}.mr-lg-n1,.mx-lg-n1{margin-right:-.25rem!important}.mb-lg-n1,.my-lg-n1{margin-bottom:-.25rem!important}.ml-lg-n1,.mx-lg-n1{margin-left:-.25rem!important}.m-lg-n2{margin:-.5rem!important}.mt-lg-n2,.my-lg-n2{margin-top:-.5rem!important}.mr-lg-n2,.mx-lg-n2{margin-right:-.5rem!important}.mb-lg-n2,.my-lg-n2{margin-bottom:-.5rem!important}.ml-lg-n2,.mx-lg-n2{margin-left:-.5rem!important}.m-lg-n3{margin:-1rem!important}.mt-lg-n3,.my-lg-n3{margin-top:-1rem!important}.mr-lg-n3,.mx-lg-n3{margin-right:-1rem!important}.mb-lg-n3,.my-lg-n3{margin-bottom:-1rem!important}.ml-lg-n3,.mx-lg-n3{margin-left:-1rem!important}.m-lg-n4{margin:-1.5rem!important}.mt-lg-n4,.my-lg-n4{margin-top:-1.5rem!important}.mr-lg-n4,.mx-lg-n4{margin-right:-1.5rem!important}.mb-lg-n4,.my-lg-n4{margin-bottom:-1.5rem!important}.ml-lg-n4,.mx-lg-n4{margin-left:-1.5rem!important}.m-lg-n5{margin:-3rem!important}.mt-lg-n5,.my-lg-n5{margin-top:-3rem!important}.mr-lg-n5,.mx-lg-n5{margin-right:-3rem!important}.mb-lg-n5,.my-lg-n5{margin-bottom:-3rem!important}.ml-lg-n5,.mx-lg-n5{margin-left:-3rem!important}.m-lg-auto{margin:auto!important}.mt-lg-auto,.my-lg-auto{margin-top:auto!important}.mr-lg-auto,.mx-lg-auto{margin-right:auto!important}.mb-lg-auto,.my-lg-auto{margin-bottom:auto!important}.ml-lg-auto,.mx-lg-auto{margin-left:auto!important}}@media (min-width:1200px){.m-xl-0{margin:0!important}.mt-xl-0,.my-xl-0{margin-top:0!important}.mr-xl-0,.mx-xl-0{margin-right:0!important}.mb-xl-0,.my-xl-0{margin-bottom:0!important}.ml-xl-0,.mx-xl-0{margin-left:0!important}.m-xl-1{margin:.25rem!important}.mt-xl-1,.my-xl-1{margin-top:.25rem!important}.mr-xl-1,.mx-xl-1{margin-right:.25rem!important}.mb-xl-1,.my-xl-1{margin-bottom:.25rem!important}.ml-xl-1,.mx-xl-1{margin-left:.25rem!important}.m-xl-2{margin:.5rem!important}.mt-xl-2,.my-xl-2{margin-top:.5rem!important}.mr-xl-2,.mx-xl-2{margin-right:.5rem!important}.mb-xl-2,.my-xl-2{margin-bottom:.5rem!important}.ml-xl-2,.mx-xl-2{margin-left:.5rem!important}.m-xl-3{margin:1rem!important}.mt-xl-3,.my-xl-3{margin-top:1rem!important}.mr-xl-3,.mx-xl-3{margin-right:1rem!important}.mb-xl-3,.my-xl-3{margin-bottom:1rem!important}.ml-xl-3,.mx-xl-3{margin-left:1rem!important}.m-xl-4{margin:1.5rem!important}.mt-xl-4,.my-xl-4{margin-top:1.5rem!important}.mr-xl-4,.mx-xl-4{margin-right:1.5rem!important}.mb-xl-4,.my-xl-4{margin-bottom:1.5rem!important}.ml-xl-4,.mx-xl-4{margin-left:1.5rem!important}.m-xl-5{margin:3rem!important}.mt-xl-5,.my-xl-5{margin-top:3rem!important}.mr-xl-5,.mx-xl-5{margin-right:3rem!important}.mb-xl-5,.my-xl-5{margin-bottom:3rem!important}.ml-xl-5,.mx-xl-5{margin-left:3rem!important}.p-xl-0{padding:0!important}.pt-xl-0,.py-xl-0{padding-top:0!important}.pr-xl-0,.px-xl-0{padding-right:0!important}.pb-xl-0,.py-xl-0{padding-bottom:0!important}.pl-xl-0,.px-xl-0{padding-left:0!important}.p-xl-1{padding:.25rem!important}.pt-xl-1,.py-xl-1{padding-top:.25rem!important}.pr-xl-1,.px-xl-1{padding-right:.25rem!important}.pb-xl-1,.py-xl-1{padding-bottom:.25rem!important}.pl-xl-1,.px-xl-1{padding-left:.25rem!important}.p-xl-2{padding:.5rem!important}.pt-xl-2,.py-xl-2{padding-top:.5rem!important}.pr-xl-2,.px-xl-2{padding-right:.5rem!important}.pb-xl-2,.py-xl-2{padding-bottom:.5rem!important}.pl-xl-2,.px-xl-2{padding-left:.5rem!important}.p-xl-3{padding:1rem!important}.pt-xl-3,.py-xl-3{padding-top:1rem!important}.pr-xl-3,.px-xl-3{padding-right:1rem!important}.pb-xl-3,.py-xl-3{padding-bottom:1rem!important}.pl-xl-3,.px-xl-3{padding-left:1rem!important}.p-xl-4{padding:1.5rem!important}.pt-xl-4,.py-xl-4{padding-top:1.5rem!important}.pr-xl-4,.px-xl-4{padding-right:1.5rem!important}.pb-xl-4,.py-xl-4{padding-bottom:1.5rem!important}.pl-xl-4,.px-xl-4{padding-left:1.5rem!important}.p-xl-5{padding:3rem!important}.pt-xl-5,.py-xl-5{padding-top:3rem!important}.pr-xl-5,.px-xl-5{padding-right:3rem!important}.pb-xl-5,.py-xl-5{padding-bottom:3rem!important}.pl-xl-5,.px-xl-5{padding-left:3rem!important}.m-xl-n1{margin:-.25rem!important}.mt-xl-n1,.my-xl-n1{margin-top:-.25rem!important}.mr-xl-n1,.mx-xl-n1{margin-right:-.25rem!important}.mb-xl-n1,.my-xl-n1{margin-bottom:-.25rem!important}.ml-xl-n1,.mx-xl-n1{margin-left:-.25rem!important}.m-xl-n2{margin:-.5rem!important}.mt-xl-n2,.my-xl-n2{margin-top:-.5rem!important}.mr-xl-n2,.mx-xl-n2{margin-right:-.5rem!important}.mb-xl-n2,.my-xl-n2{margin-bottom:-.5rem!important}.ml-xl-n2,.mx-xl-n2{margin-left:-.5rem!important}.m-xl-n3{margin:-1rem!important}.mt-xl-n3,.my-xl-n3{margin-top:-1rem!important}.mr-xl-n3,.mx-xl-n3{margin-right:-1rem!important}.mb-xl-n3,.my-xl-n3{margin-bottom:-1rem!important}.ml-xl-n3,.mx-xl-n3{margin-left:-1rem!important}.m-xl-n4{margin:-1.5rem!important}.mt-xl-n4,.my-xl-n4{margin-top:-1.5rem!important}.mr-xl-n4,.mx-xl-n4{margin-right:-1.5rem!important}.mb-xl-n4,.my-xl-n4{margin-bottom:-1.5rem!important}.ml-xl-n4,.mx-xl-n4{margin-left:-1.5rem!important}.m-xl-n5{margin:-3rem!important}.mt-xl-n5,.my-xl-n5{margin-top:-3rem!important}.mr-xl-n5,.mx-xl-n5{margin-right:-3rem!important}.mb-xl-n5,.my-xl-n5{margin-bottom:-3rem!important}.ml-xl-n5,.mx-xl-n5{margin-left:-3rem!important}.m-xl-auto{margin:auto!important}.mt-xl-auto,.my-xl-auto{margin-top:auto!important}.mr-xl-auto,.mx-xl-auto{margin-right:auto!important}.mb-xl-auto,.my-xl-auto{margin-bottom:auto!important}.ml-xl-auto,.mx-xl-auto{margin-left:auto!important}}.stretched-link:after{position:absolute;top:0;right:0;bottom:0;left:0;z-index:1;pointer-events:auto;content:\"\";background-color:transparent}.text-monospace{font-family:SFMono-Regular,Menlo,Monaco,Consolas,\"Liberation Mono\",\"Courier New\",monospace!important}.text-justify{text-align:justify!important}.text-wrap{white-space:normal!important}.text-nowrap{white-space:nowrap!important}.text-truncate{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.text-left{text-align:left!important}.text-right{text-align:right!important}.text-center{text-align:center!important}@media (min-width:576px){.text-sm-left{text-align:left!important}.text-sm-right{text-align:right!important}.text-sm-center{text-align:center!important}}@media (min-width:768px){.text-md-left{text-align:left!important}.text-md-right{text-align:right!important}.text-md-center{text-align:center!important}}@media (min-width:992px){.text-lg-left{text-align:left!important}.text-lg-right{text-align:right!important}.text-lg-center{text-align:center!important}}@media (min-width:1200px){.text-xl-left{text-align:left!important}.text-xl-right{text-align:right!important}.text-xl-center{text-align:center!important}}.text-lowercase{text-transform:lowercase!important}.text-uppercase{text-transform:uppercase!important}.text-capitalize{text-transform:capitalize!important}.font-weight-light{font-weight:300!important}.font-weight-lighter{font-weight:lighter!important}.font-weight-normal{font-weight:400!important}.font-weight-bold{font-weight:700!important}.font-weight-bolder{font-weight:bolder!important}.font-italic{font-style:italic!important}.text-white{color:#fff!important}.text-primary{color:#007bff!important}a.text-primary:focus,a.text-primary:hover{color:#0056b3!important}.text-secondary{color:#6c757d!important}a.text-secondary:focus,a.text-secondary:hover{color:#494f54!important}.text-success{color:#28a745!important}a.text-success:focus,a.text-success:hover{color:#19692c!important}.text-info{color:#17a2b8!important}a.text-info:focus,a.text-info:hover{color:#0f6674!important}.text-warning{color:#ffc107!important}a.text-warning:focus,a.text-warning:hover{color:#ba8b00!important}.text-danger{color:#dc3545!important}a.text-danger:focus,a.text-danger:hover{color:#a71d2a!important}.text-light{color:#f8f9fa!important}a.text-light:focus,a.text-light:hover{color:#cbd3da!important}.text-dark{color:#343a40!important}a.text-dark:focus,a.text-dark:hover{color:#121416!important}.text-body{color:#212529!important}.text-muted{color:#6c757d!important}.text-black-50{color:rgba(0,0,0,.5)!important}.text-white-50{color:hsla(0,0%,100%,.5)!important}.text-hide{font:0/0 a;color:transparent;text-shadow:none;background-color:transparent;border:0}.text-decoration-none{text-decoration:none!important}.text-break{word-break:break-word!important;word-wrap:break-word!important}.text-reset{color:inherit!important}.visible{visibility:visible!important}.invisible{visibility:hidden!important}@media print{*,:after,:before{text-shadow:none!important;box-shadow:none!important}a:not(.btn){text-decoration:underline}abbr[title]:after{content:\" (\" attr(title) \")\"}pre{white-space:pre-wrap!important}blockquote,pre{border:1px solid #adb5bd;page-break-inside:avoid}thead{display:table-header-group}img,tr{page-break-inside:avoid}h2,h3,p{orphans:3;widows:3}h2,h3{page-break-after:avoid}@page{size:a3}.container,body{min-width:992px!important}.navbar{display:none}.badge{border:1px solid #000}.table{border-collapse:collapse!important}.table td,.table th{background-color:#fff!important}.table-bordered td,.table-bordered th{border:1px solid #dee2e6!important}.table-dark{color:inherit}.table-dark tbody+tbody,.table-dark td,.table-dark th,.table-dark thead th{border-color:#dee2e6}.table .thead-dark th{color:inherit;border-color:#dee2e6}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(62);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(4).default("32df6d42", content, true)

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "@charset \"UTF-8\";\n/*!\n * BootstrapVue Custom CSS (https://bootstrap-vue.org)\n */.bv-no-focus-ring:focus{outline:none}@media (max-width:575.98px){.bv-d-xs-down-none{display:none!important}}@media (max-width:767.98px){.bv-d-sm-down-none{display:none!important}}@media (max-width:991.98px){.bv-d-md-down-none{display:none!important}}@media (max-width:1199.98px){.bv-d-lg-down-none{display:none!important}}.bv-d-xl-down-none{display:none!important}.form-control.focus{color:#495057;background-color:#fff;border-color:#80bdff;outline:0;box-shadow:0 0 0 .2rem rgba(0,123,255,.25)}.form-control.focus.is-valid{border-color:#28a745;box-shadow:0 0 0 .2rem rgba(40,167,69,.25)}.form-control.focus.is-invalid{border-color:#dc3545;box-shadow:0 0 0 .2rem rgba(220,53,69,.25)}.b-avatar{display:inline-flex;align-items:center;justify-content:center;vertical-align:middle;flex-shrink:0;width:2.5rem;height:2.5rem;font-size:inherit;font-weight:400;line-height:1;max-width:100%;max-height:auto;text-align:center;overflow:visible;position:relative;transition:color .15s ease-in-out,background-color .15s ease-in-out,box-shadow .15s ease-in-out}.b-avatar:focus{outline:0}.b-avatar.btn,.b-avatar[href]{padding:0;border:0}.b-avatar.btn .b-avatar-img img,.b-avatar[href] .b-avatar-img img{transition:transform .15s ease-in-out}.b-avatar.btn:not(:disabled):not(.disabled),.b-avatar[href]:not(:disabled):not(.disabled){cursor:pointer}.b-avatar.btn:not(:disabled):not(.disabled):hover .b-avatar-img img,.b-avatar[href]:not(:disabled):not(.disabled):hover .b-avatar-img img{transform:scale(1.15)}.b-avatar.disabled,.b-avatar:disabled,.b-avatar[disabled]{opacity:.65;pointer-events:none}.b-avatar .b-avatar-custom,.b-avatar .b-avatar-img,.b-avatar .b-avatar-text{border-radius:inherit;width:100%;height:100%;overflow:hidden;display:flex;justify-content:center;align-items:center;-webkit-mask-image:radial-gradient(#fff,#000);mask-image:radial-gradient(#fff,#000)}.b-avatar .b-avatar-text{text-transform:uppercase;white-space:nowrap}.b-avatar[href]{text-decoration:none}.b-avatar>.b-icon{width:60%;height:auto;max-width:100%}.b-avatar .b-avatar-img img{width:100%;height:100%;max-height:auto;border-radius:inherit;-o-object-fit:cover;object-fit:cover}.b-avatar .b-avatar-badge{position:absolute;min-height:1.5em;min-width:1.5em;padding:.25em;line-height:1;border-radius:10em;font-size:70%;font-weight:700;z-index:1}.b-avatar-sm{width:1.5rem;height:1.5rem}.b-avatar-sm .b-avatar-text{font-size:.6rem}.b-avatar-sm .b-avatar-badge{font-size:.42rem}.b-avatar-lg{width:3.5rem;height:3.5rem}.b-avatar-lg .b-avatar-text{font-size:1.4rem}.b-avatar-lg .b-avatar-badge{font-size:.98rem}.b-avatar-group .b-avatar-group-inner{display:flex;flex-wrap:wrap}.b-avatar-group .b-avatar{border:1px solid #dee2e6}.b-avatar-group .btn.b-avatar:hover:not(.disabled):not(disabled),.b-avatar-group a.b-avatar:hover:not(.disabled):not(disabled){z-index:1}.b-calendar{display:inline-flex}.b-calendar .b-calendar-inner{min-width:250px}.b-calendar .b-calendar-header,.b-calendar .b-calendar-nav{margin-bottom:.25rem}.b-calendar .b-calendar-nav .btn{padding:.25rem}.b-calendar output{padding:.25rem;font-size:80%}.b-calendar output.readonly{background-color:#e9ecef;opacity:1}.b-calendar .b-calendar-footer{margin-top:.5rem}.b-calendar .b-calendar-grid{padding:0;margin:0;overflow:hidden}.b-calendar .b-calendar-grid .row{flex-wrap:nowrap}.b-calendar .b-calendar-grid-caption{padding:.25rem}.b-calendar .b-calendar-grid-body .col[data-date] .btn{width:32px;height:32px;font-size:14px;line-height:1;margin:3px auto;padding:9px 0}.b-calendar .btn.disabled,.b-calendar .btn:disabled,.b-calendar .btn[aria-disabled=true]{cursor:default;pointer-events:none}.card-img-left{border-top-left-radius:calc(.25rem - 1px);border-bottom-left-radius:calc(.25rem - 1px)}.card-img-right{border-top-right-radius:calc(.25rem - 1px);border-bottom-right-radius:calc(.25rem - 1px)}.dropdown.dropleft .dropdown-toggle.dropdown-toggle-no-caret:before,.dropdown:not(.dropleft) .dropdown-toggle.dropdown-toggle-no-caret:after{display:none!important}.dropdown .dropdown-menu:focus{outline:none}.b-dropdown-form{display:inline-block;padding:.25rem 1.5rem;width:100%;clear:both;font-weight:400}.b-dropdown-form:focus{outline:1px dotted!important;outline:5px auto -webkit-focus-ring-color!important}.b-dropdown-form.disabled,.b-dropdown-form:disabled{outline:0!important;color:#6c757d;pointer-events:none}.b-dropdown-text{display:inline-block;padding:.25rem 1.5rem;margin-bottom:0;width:100%;clear:both;font-weight:lighter}.custom-checkbox.b-custom-control-lg,.input-group-lg .custom-checkbox{font-size:1.25rem;line-height:1.5;padding-left:1.875rem}.custom-checkbox.b-custom-control-lg .custom-control-label:before,.input-group-lg .custom-checkbox .custom-control-label:before{top:.3125rem;left:-1.875rem;width:1.25rem;height:1.25rem;border-radius:.3rem}.custom-checkbox.b-custom-control-lg .custom-control-label:after,.input-group-lg .custom-checkbox .custom-control-label:after{top:.3125rem;left:-1.875rem;width:1.25rem;height:1.25rem;background-size:50% 50%}.custom-checkbox.b-custom-control-sm,.input-group-sm .custom-checkbox{font-size:.875rem;line-height:1.5;padding-left:1.3125rem}.custom-checkbox.b-custom-control-sm .custom-control-label:before,.input-group-sm .custom-checkbox .custom-control-label:before{top:.21875rem;left:-1.3125rem;width:.875rem;height:.875rem;border-radius:.2rem}.custom-checkbox.b-custom-control-sm .custom-control-label:after,.input-group-sm .custom-checkbox .custom-control-label:after{top:.21875rem;left:-1.3125rem;width:.875rem;height:.875rem;background-size:50% 50%}.custom-switch.b-custom-control-lg,.input-group-lg .custom-switch{padding-left:2.8125rem}.custom-switch.b-custom-control-lg .custom-control-label,.input-group-lg .custom-switch .custom-control-label{font-size:1.25rem;line-height:1.5}.custom-switch.b-custom-control-lg .custom-control-label:before,.input-group-lg .custom-switch .custom-control-label:before{top:.3125rem;height:1.25rem;left:-2.8125rem;width:2.1875rem;border-radius:.625rem}.custom-switch.b-custom-control-lg .custom-control-label:after,.input-group-lg .custom-switch .custom-control-label:after{top:calc(.3125rem + 2px);left:calc(-2.8125rem + 2px);width:calc(1.25rem - 4px);height:calc(1.25rem - 4px);border-radius:.625rem;background-size:50% 50%}.custom-switch.b-custom-control-lg .custom-control-input:checked~.custom-control-label:after,.input-group-lg .custom-switch .custom-control-input:checked~.custom-control-label:after{transform:translateX(.9375rem)}.custom-switch.b-custom-control-sm,.input-group-sm .custom-switch{padding-left:1.96875rem}.custom-switch.b-custom-control-sm .custom-control-label,.input-group-sm .custom-switch .custom-control-label{font-size:.875rem;line-height:1.5}.custom-switch.b-custom-control-sm .custom-control-label:before,.input-group-sm .custom-switch .custom-control-label:before{top:.21875rem;left:-1.96875rem;width:1.53125rem;height:.875rem;border-radius:.4375rem}.custom-switch.b-custom-control-sm .custom-control-label:after,.input-group-sm .custom-switch .custom-control-label:after{top:calc(.21875rem + 2px);left:calc(-1.96875rem + 2px);width:calc(.875rem - 4px);height:calc(.875rem - 4px);border-radius:.4375rem;background-size:50% 50%}.custom-switch.b-custom-control-sm .custom-control-input:checked~.custom-control-label:after,.input-group-sm .custom-switch .custom-control-input:checked~.custom-control-label:after{transform:translateX(.65625rem)}.input-group>.input-group-append:last-child>.btn-group:not(:last-child):not(.dropdown-toggle)>.btn,.input-group>.input-group-append:not(:last-child)>.btn-group>.btn,.input-group>.input-group-prepend>.btn-group>.btn{border-top-right-radius:0;border-bottom-right-radius:0}.input-group>.input-group-append>.btn-group>.btn,.input-group>.input-group-prepend:first-child>.btn-group:not(:first-child)>.btn,.input-group>.input-group-prepend:not(:first-child)>.btn-group>.btn{border-top-left-radius:0;border-bottom-left-radius:0}.b-form-btn-label-control.form-control{display:flex;align-items:stretch;height:auto;padding:0;background-image:none}.input-group .b-form-btn-label-control.form-control{padding:0}.b-form-btn-label-control.form-control[dir=rtl],[dir=rtl] .b-form-btn-label-control.form-control{flex-direction:row-reverse}.b-form-btn-label-control.form-control[dir=rtl]>label,[dir=rtl] .b-form-btn-label-control.form-control>label{text-align:right}.b-form-btn-label-control.form-control>.btn{line-height:1;font-size:inherit;box-shadow:none!important;border:0}.b-form-btn-label-control.form-control>.btn:disabled{pointer-events:none}.b-form-btn-label-control.form-control.is-valid>.btn{color:#28a745}.b-form-btn-label-control.form-control.is-invalid>.btn{color:#dc3545}.b-form-btn-label-control.form-control>.dropdown-menu{padding:.5rem}.b-form-btn-label-control.form-control>.form-control{height:auto;min-height:calc(1.5em + .75rem);padding-left:.25rem;margin:0;border:0;outline:0;background:transparent;word-break:break-word;font-size:inherit;white-space:normal;cursor:pointer}.b-form-btn-label-control.form-control>.form-control.form-control-sm{min-height:calc(1.5em + .5rem)}.b-form-btn-label-control.form-control>.form-control.form-control-lg{min-height:calc(1.5em + 1rem)}.input-group.input-group-sm .b-form-btn-label-control.form-control>.form-control{min-height:calc(1.5em + .5rem);padding-top:.25rem;padding-bottom:.25rem}.input-group.input-group-lg .b-form-btn-label-control.form-control>.form-control{min-height:calc(1.5em + 1rem);padding-top:.5rem;padding-bottom:.5rem}.b-form-btn-label-control.form-control[aria-disabled=true],.b-form-btn-label-control.form-control[aria-readonly=true]{background-color:#e9ecef;opacity:1}.b-form-btn-label-control.form-control[aria-disabled=true]{pointer-events:none}.b-form-btn-label-control.form-control[aria-disabled=true]>label{cursor:default}.b-form-btn-label-control.btn-group>.dropdown-menu{padding:.5rem}.custom-file-label{white-space:nowrap;overflow-x:hidden}.b-custom-control-lg.custom-file,.b-custom-control-lg .custom-file-input,.b-custom-control-lg .custom-file-label,.input-group-lg.custom-file,.input-group-lg .custom-file-input,.input-group-lg .custom-file-label{font-size:1.25rem;height:calc(1.5em + 1rem + 2px)}.b-custom-control-lg .custom-file-label,.b-custom-control-lg .custom-file-label:after,.input-group-lg .custom-file-label,.input-group-lg .custom-file-label:after{padding:.5rem 1rem;line-height:1.5}.b-custom-control-lg .custom-file-label,.input-group-lg .custom-file-label{border-radius:.3rem}.b-custom-control-lg .custom-file-label:after,.input-group-lg .custom-file-label:after{font-size:inherit;height:calc(1.5em + 1rem);border-radius:0 .3rem .3rem 0}.b-custom-control-sm.custom-file,.b-custom-control-sm .custom-file-input,.b-custom-control-sm .custom-file-label,.input-group-sm.custom-file,.input-group-sm .custom-file-input,.input-group-sm .custom-file-label{font-size:.875rem;height:calc(1.5em + .5rem + 2px)}.b-custom-control-sm .custom-file-label,.b-custom-control-sm .custom-file-label:after,.input-group-sm .custom-file-label,.input-group-sm .custom-file-label:after{padding:.25rem .5rem;line-height:1.5}.b-custom-control-sm .custom-file-label,.input-group-sm .custom-file-label{border-radius:.2rem}.b-custom-control-sm .custom-file-label:after,.input-group-sm .custom-file-label:after{font-size:inherit;height:calc(1.5em + .5rem);border-radius:0 .2rem .2rem 0}.form-control.is-invalid,.form-control.is-valid,.was-validated .form-control:invalid,.was-validated .form-control:valid{background-position:right calc(.375em + .1875rem) center}input[type=color].form-control{height:calc(1.5em + .75rem + 2px);padding:.125rem .25rem}.input-group-sm input[type=color].form-control,input[type=color].form-control.form-control-sm{height:calc(1.5em + .5rem + 2px);padding:.125rem .25rem}.input-group-lg input[type=color].form-control,input[type=color].form-control.form-control-lg{height:calc(1.5em + 1rem + 2px);padding:.125rem .25rem}input[type=color].form-control:disabled{background-color:#adb5bd;opacity:.65}.input-group>.custom-range{position:relative;flex:1 1 auto;width:1%;margin-bottom:0}.input-group>.custom-file+.custom-range,.input-group>.custom-range+.custom-file,.input-group>.custom-range+.custom-range,.input-group>.custom-range+.custom-select,.input-group>.custom-range+.form-control,.input-group>.custom-range+.form-control-plaintext,.input-group>.custom-select+.custom-range,.input-group>.form-control+.custom-range,.input-group>.form-control-plaintext+.custom-range{margin-left:-1px}.input-group>.custom-range:focus{z-index:3}.input-group>.custom-range:not(:last-child){border-top-right-radius:0;border-bottom-right-radius:0}.input-group>.custom-range:not(:first-child){border-top-left-radius:0;border-bottom-left-radius:0}.input-group>.custom-range{padding:0 .75rem;background-color:#fff;background-clip:padding-box;border:1px solid #ced4da;height:calc(1.5em + .75rem + 2px);border-radius:.25rem;transition:border-color .15s ease-in-out,box-shadow .15s ease-in-out}@media (prefers-reduced-motion:reduce){.input-group>.custom-range{transition:none}}.input-group>.custom-range:focus{color:#495057;background-color:#fff;border-color:#80bdff;outline:0;box-shadow:0 0 0 .2rem rgba(0,123,255,.25)}.input-group>.custom-range:disabled,.input-group>.custom-range[readonly]{background-color:#e9ecef}.input-group-lg>.custom-range{height:calc(1.5em + 1rem + 2px);padding:0 1rem;border-radius:.3rem}.input-group-sm>.custom-range{height:calc(1.5em + .5rem + 2px);padding:0 .5rem;border-radius:.2rem}.input-group .custom-range.is-valid,.was-validated .input-group .custom-range:valid{border-color:#28a745}.input-group .custom-range.is-valid:focus,.was-validated .input-group .custom-range:valid:focus{border-color:#28a745;box-shadow:0 0 0 .2rem rgba(40,167,69,.25)}.custom-range.is-valid:focus::-webkit-slider-thumb,.was-validated .custom-range:valid:focus::-webkit-slider-thumb{box-shadow:0 0 0 1px #fff,0 0 0 .2rem #9be7ac}.custom-range.is-valid:focus::-moz-range-thumb,.was-validated .custom-range:valid:focus::-moz-range-thumb{box-shadow:0 0 0 1px #fff,0 0 0 .2rem #9be7ac}.custom-range.is-valid:focus::-ms-thumb,.was-validated .custom-range:valid:focus::-ms-thumb{box-shadow:0 0 0 1px #fff,0 0 0 .2rem #9be7ac}.custom-range.is-valid::-webkit-slider-thumb,.was-validated .custom-range:valid::-webkit-slider-thumb{background-color:#28a745;background-image:none}.custom-range.is-valid::-webkit-slider-thumb:active,.was-validated .custom-range:valid::-webkit-slider-thumb:active{background-color:#9be7ac;background-image:none}.custom-range.is-valid::-webkit-slider-runnable-track,.was-validated .custom-range:valid::-webkit-slider-runnable-track{background-color:rgba(40,167,69,.35)}.custom-range.is-valid::-moz-range-thumb,.was-validated .custom-range:valid::-moz-range-thumb{background-color:#28a745;background-image:none}.custom-range.is-valid::-moz-range-thumb:active,.was-validated .custom-range:valid::-moz-range-thumb:active{background-color:#9be7ac;background-image:none}.custom-range.is-valid::-moz-range-track,.was-validated .custom-range:valid::-moz-range-track{background:rgba(40,167,69,.35)}.custom-range.is-valid~.valid-feedback,.custom-range.is-valid~.valid-tooltip,.was-validated .custom-range:valid~.valid-feedback,.was-validated .custom-range:valid~.valid-tooltip{display:block}.custom-range.is-valid::-ms-thumb,.was-validated .custom-range:valid::-ms-thumb{background-color:#28a745;background-image:none}.custom-range.is-valid::-ms-thumb:active,.was-validated .custom-range:valid::-ms-thumb:active{background-color:#9be7ac;background-image:none}.custom-range.is-valid::-ms-track-lower,.custom-range.is-valid::-ms-track-upper,.was-validated .custom-range:valid::-ms-track-lower,.was-validated .custom-range:valid::-ms-track-upper{background:rgba(40,167,69,.35)}.input-group .custom-range.is-invalid,.was-validated .input-group .custom-range:invalid{border-color:#dc3545}.input-group .custom-range.is-invalid:focus,.was-validated .input-group .custom-range:invalid:focus{border-color:#dc3545;box-shadow:0 0 0 .2rem rgba(220,53,69,.25)}.custom-range.is-invalid:focus::-webkit-slider-thumb,.was-validated .custom-range:invalid:focus::-webkit-slider-thumb{box-shadow:0 0 0 1px #fff,0 0 0 .2rem #f6cdd1}.custom-range.is-invalid:focus::-moz-range-thumb,.was-validated .custom-range:invalid:focus::-moz-range-thumb{box-shadow:0 0 0 1px #fff,0 0 0 .2rem #f6cdd1}.custom-range.is-invalid:focus::-ms-thumb,.was-validated .custom-range:invalid:focus::-ms-thumb{box-shadow:0 0 0 1px #fff,0 0 0 .2rem #f6cdd1}.custom-range.is-invalid::-webkit-slider-thumb,.was-validated .custom-range:invalid::-webkit-slider-thumb{background-color:#dc3545;background-image:none}.custom-range.is-invalid::-webkit-slider-thumb:active,.was-validated .custom-range:invalid::-webkit-slider-thumb:active{background-color:#f6cdd1;background-image:none}.custom-range.is-invalid::-webkit-slider-runnable-track,.was-validated .custom-range:invalid::-webkit-slider-runnable-track{background-color:rgba(220,53,69,.35)}.custom-range.is-invalid::-moz-range-thumb,.was-validated .custom-range:invalid::-moz-range-thumb{background-color:#dc3545;background-image:none}.custom-range.is-invalid::-moz-range-thumb:active,.was-validated .custom-range:invalid::-moz-range-thumb:active{background-color:#f6cdd1;background-image:none}.custom-range.is-invalid::-moz-range-track,.was-validated .custom-range:invalid::-moz-range-track{background:rgba(220,53,69,.35)}.custom-range.is-invalid~.invalid-feedback,.custom-range.is-invalid~.invalid-tooltip,.was-validated .custom-range:invalid~.invalid-feedback,.was-validated .custom-range:invalid~.invalid-tooltip{display:block}.custom-range.is-invalid::-ms-thumb,.was-validated .custom-range:invalid::-ms-thumb{background-color:#dc3545;background-image:none}.custom-range.is-invalid::-ms-thumb:active,.was-validated .custom-range:invalid::-ms-thumb:active{background-color:#f6cdd1;background-image:none}.custom-range.is-invalid::-ms-track-lower,.custom-range.is-invalid::-ms-track-upper,.was-validated .custom-range:invalid::-ms-track-lower,.was-validated .custom-range:invalid::-ms-track-upper{background:rgba(220,53,69,.35)}.custom-radio.b-custom-control-lg,.input-group-lg .custom-radio{font-size:1.25rem;line-height:1.5;padding-left:1.875rem}.custom-radio.b-custom-control-lg .custom-control-label:before,.input-group-lg .custom-radio .custom-control-label:before{top:.3125rem;left:-1.875rem;width:1.25rem;height:1.25rem;border-radius:50%}.custom-radio.b-custom-control-lg .custom-control-label:after,.input-group-lg .custom-radio .custom-control-label:after{top:.3125rem;left:-1.875rem;width:1.25rem;height:1.25rem;background:no-repeat 50%/50% 50%}.custom-radio.b-custom-control-sm,.input-group-sm .custom-radio{font-size:.875rem;line-height:1.5;padding-left:1.3125rem}.custom-radio.b-custom-control-sm .custom-control-label:before,.input-group-sm .custom-radio .custom-control-label:before{top:.21875rem;left:-1.3125rem;width:.875rem;height:.875rem;border-radius:50%}.custom-radio.b-custom-control-sm .custom-control-label:after,.input-group-sm .custom-radio .custom-control-label:after{top:.21875rem;left:-1.3125rem;width:.875rem;height:.875rem;background:no-repeat 50%/50% 50%}.b-rating{text-align:center}.b-rating.d-inline-flex{width:auto}.b-rating .b-rating-star,.b-rating .b-rating-value{padding:0 .25em}.b-rating .b-rating-value{min-width:2.5em}.b-rating .b-rating-star{display:inline-flex;justify-content:center;outline:0}.b-rating .b-rating-star .b-rating-icon{display:inline-flex;transition:all .15s ease-in-out}.b-rating.disabled,.b-rating:disabled{background-color:#e9ecef;color:#6c757d}.b-rating:not(.disabled):not(.readonly) .b-rating-star{cursor:pointer}.b-rating:not(.disabled):not(.readonly) .b-rating-star:hover .b-rating-icon,.b-rating:not(.disabled):not(.readonly):focus:not(:hover) .b-rating-star.focused .b-rating-icon{transform:scale(1.5)}.b-rating[dir=rtl] .b-rating-star-half{transform:scaleX(-1)}.b-form-spinbutton{text-align:center;overflow:hidden;background-image:none;padding:0}.b-form-spinbutton[dir=rtl]:not(.flex-column),[dir=rtl] .b-form-spinbutton:not(.flex-column){flex-direction:row-reverse}.b-form-spinbutton output{font-size:inherit;outline:0;border:0;background-color:transparent;width:auto;margin:0;padding:0 .25rem}.b-form-spinbutton output>bdi,.b-form-spinbutton output>div{display:block;min-width:2.25em;height:1.5em}.b-form-spinbutton.flex-column{height:auto;width:auto}.b-form-spinbutton.flex-column output{margin:0 .25rem;padding:.25rem 0}.b-form-spinbutton:not(.d-inline-flex):not(.flex-column){output-width:100%}.b-form-spinbutton.d-inline-flex:not(.flex-column){width:auto}.b-form-spinbutton .btn{line-height:1;box-shadow:none!important}.b-form-spinbutton .btn:disabled{pointer-events:none}.b-form-spinbutton .btn:hover:not(:disabled)>div>.b-icon{transform:scale(1.25)}.b-form-spinbutton.disabled,.b-form-spinbutton.readonly{background-color:#e9ecef}.b-form-spinbutton.disabled{pointer-events:none}.b-form-tags .b-form-tags-list{margin-top:-.25rem}.b-form-tags .b-form-tags-list .b-form-tag,.b-form-tags .b-form-tags-list .b-from-tags-field{margin-top:.25rem}.b-form-tags.focus{color:#495057;background-color:#fff;border-color:#80bdff;outline:0;box-shadow:0 0 0 .2rem rgba(0,123,255,.25)}.b-form-tags.focus.is-valid{border-color:#28a745;box-shadow:0 0 0 .2rem rgba(40,167,69,.25)}.b-form-tags.focus.is-invalid{border-color:#dc3545;box-shadow:0 0 0 .2rem rgba(220,53,69,.25)}.b-form-tags.disabled{background-color:#e9ecef}.b-form-tag{font-size:75%;font-weight:400;line-height:1.5;margin-right:.25rem}.b-form-tag.disabled{opacity:.75}.b-form-tag>button.b-form-tag-remove{color:inherit;font-size:125%;line-height:1;float:none;margin-left:.25rem}.form-control-lg .b-form-tag,.form-control-sm .b-form-tag{line-height:1.5}.media-aside{display:flex;margin-right:1rem}.media-aside-right{margin-right:0;margin-left:1rem}.modal-backdrop{opacity:.5}.b-pagination-pills .page-item .page-link{border-radius:50rem!important;margin-left:.25rem;line-height:1}.b-pagination-pills .page-item:first-child .page-link{margin-left:0}.popover.b-popover{display:block;opacity:1;outline:0}.popover.b-popover.fade:not(.show){opacity:0}.popover.b-popover.show{opacity:1}.b-popover-primary.popover{background-color:#cce5ff;border-color:#b8daff}.b-popover-primary.bs-popover-auto[x-placement^=top]>.arrow:before,.b-popover-primary.bs-popover-top>.arrow:before{border-top-color:#b8daff}.b-popover-primary.bs-popover-auto[x-placement^=top]>.arrow:after,.b-popover-primary.bs-popover-top>.arrow:after{border-top-color:#cce5ff}.b-popover-primary.bs-popover-auto[x-placement^=right]>.arrow:before,.b-popover-primary.bs-popover-right>.arrow:before{border-right-color:#b8daff}.b-popover-primary.bs-popover-auto[x-placement^=right]>.arrow:after,.b-popover-primary.bs-popover-right>.arrow:after{border-right-color:#cce5ff}.b-popover-primary.bs-popover-auto[x-placement^=bottom]>.arrow:before,.b-popover-primary.bs-popover-bottom>.arrow:before{border-bottom-color:#b8daff}.b-popover-primary.bs-popover-auto[x-placement^=bottom] .popover-header:before,.b-popover-primary.bs-popover-auto[x-placement^=bottom]>.arrow:after,.b-popover-primary.bs-popover-bottom .popover-header:before,.b-popover-primary.bs-popover-bottom>.arrow:after{border-bottom-color:#bdddff}.b-popover-primary.bs-popover-auto[x-placement^=left]>.arrow:before,.b-popover-primary.bs-popover-left>.arrow:before{border-left-color:#b8daff}.b-popover-primary.bs-popover-auto[x-placement^=left]>.arrow:after,.b-popover-primary.bs-popover-left>.arrow:after{border-left-color:#cce5ff}.b-popover-primary .popover-header{color:#212529;background-color:#bdddff;border-bottom-color:#a3d0ff}.b-popover-primary .popover-body{color:#004085}.b-popover-secondary.popover{background-color:#e2e3e5;border-color:#d6d8db}.b-popover-secondary.bs-popover-auto[x-placement^=top]>.arrow:before,.b-popover-secondary.bs-popover-top>.arrow:before{border-top-color:#d6d8db}.b-popover-secondary.bs-popover-auto[x-placement^=top]>.arrow:after,.b-popover-secondary.bs-popover-top>.arrow:after{border-top-color:#e2e3e5}.b-popover-secondary.bs-popover-auto[x-placement^=right]>.arrow:before,.b-popover-secondary.bs-popover-right>.arrow:before{border-right-color:#d6d8db}.b-popover-secondary.bs-popover-auto[x-placement^=right]>.arrow:after,.b-popover-secondary.bs-popover-right>.arrow:after{border-right-color:#e2e3e5}.b-popover-secondary.bs-popover-auto[x-placement^=bottom]>.arrow:before,.b-popover-secondary.bs-popover-bottom>.arrow:before{border-bottom-color:#d6d8db}.b-popover-secondary.bs-popover-auto[x-placement^=bottom] .popover-header:before,.b-popover-secondary.bs-popover-auto[x-placement^=bottom]>.arrow:after,.b-popover-secondary.bs-popover-bottom .popover-header:before,.b-popover-secondary.bs-popover-bottom>.arrow:after{border-bottom-color:#dadbde}.b-popover-secondary.bs-popover-auto[x-placement^=left]>.arrow:before,.b-popover-secondary.bs-popover-left>.arrow:before{border-left-color:#d6d8db}.b-popover-secondary.bs-popover-auto[x-placement^=left]>.arrow:after,.b-popover-secondary.bs-popover-left>.arrow:after{border-left-color:#e2e3e5}.b-popover-secondary .popover-header{color:#212529;background-color:#dadbde;border-bottom-color:#ccced2}.b-popover-secondary .popover-body{color:#383d41}.b-popover-success.popover{background-color:#d4edda;border-color:#c3e6cb}.b-popover-success.bs-popover-auto[x-placement^=top]>.arrow:before,.b-popover-success.bs-popover-top>.arrow:before{border-top-color:#c3e6cb}.b-popover-success.bs-popover-auto[x-placement^=top]>.arrow:after,.b-popover-success.bs-popover-top>.arrow:after{border-top-color:#d4edda}.b-popover-success.bs-popover-auto[x-placement^=right]>.arrow:before,.b-popover-success.bs-popover-right>.arrow:before{border-right-color:#c3e6cb}.b-popover-success.bs-popover-auto[x-placement^=right]>.arrow:after,.b-popover-success.bs-popover-right>.arrow:after{border-right-color:#d4edda}.b-popover-success.bs-popover-auto[x-placement^=bottom]>.arrow:before,.b-popover-success.bs-popover-bottom>.arrow:before{border-bottom-color:#c3e6cb}.b-popover-success.bs-popover-auto[x-placement^=bottom] .popover-header:before,.b-popover-success.bs-popover-auto[x-placement^=bottom]>.arrow:after,.b-popover-success.bs-popover-bottom .popover-header:before,.b-popover-success.bs-popover-bottom>.arrow:after{border-bottom-color:#c9e8d1}.b-popover-success.bs-popover-auto[x-placement^=left]>.arrow:before,.b-popover-success.bs-popover-left>.arrow:before{border-left-color:#c3e6cb}.b-popover-success.bs-popover-auto[x-placement^=left]>.arrow:after,.b-popover-success.bs-popover-left>.arrow:after{border-left-color:#d4edda}.b-popover-success .popover-header{color:#212529;background-color:#c9e8d1;border-bottom-color:#b7e1c1}.b-popover-success .popover-body{color:#155724}.b-popover-info.popover{background-color:#d1ecf1;border-color:#bee5eb}.b-popover-info.bs-popover-auto[x-placement^=top]>.arrow:before,.b-popover-info.bs-popover-top>.arrow:before{border-top-color:#bee5eb}.b-popover-info.bs-popover-auto[x-placement^=top]>.arrow:after,.b-popover-info.bs-popover-top>.arrow:after{border-top-color:#d1ecf1}.b-popover-info.bs-popover-auto[x-placement^=right]>.arrow:before,.b-popover-info.bs-popover-right>.arrow:before{border-right-color:#bee5eb}.b-popover-info.bs-popover-auto[x-placement^=right]>.arrow:after,.b-popover-info.bs-popover-right>.arrow:after{border-right-color:#d1ecf1}.b-popover-info.bs-popover-auto[x-placement^=bottom]>.arrow:before,.b-popover-info.bs-popover-bottom>.arrow:before{border-bottom-color:#bee5eb}.b-popover-info.bs-popover-auto[x-placement^=bottom] .popover-header:before,.b-popover-info.bs-popover-auto[x-placement^=bottom]>.arrow:after,.b-popover-info.bs-popover-bottom .popover-header:before,.b-popover-info.bs-popover-bottom>.arrow:after{border-bottom-color:#c5e7ed}.b-popover-info.bs-popover-auto[x-placement^=left]>.arrow:before,.b-popover-info.bs-popover-left>.arrow:before{border-left-color:#bee5eb}.b-popover-info.bs-popover-auto[x-placement^=left]>.arrow:after,.b-popover-info.bs-popover-left>.arrow:after{border-left-color:#d1ecf1}.b-popover-info .popover-header{color:#212529;background-color:#c5e7ed;border-bottom-color:#b2dfe7}.b-popover-info .popover-body{color:#0c5460}.b-popover-warning.popover{background-color:#fff3cd;border-color:#ffeeba}.b-popover-warning.bs-popover-auto[x-placement^=top]>.arrow:before,.b-popover-warning.bs-popover-top>.arrow:before{border-top-color:#ffeeba}.b-popover-warning.bs-popover-auto[x-placement^=top]>.arrow:after,.b-popover-warning.bs-popover-top>.arrow:after{border-top-color:#fff3cd}.b-popover-warning.bs-popover-auto[x-placement^=right]>.arrow:before,.b-popover-warning.bs-popover-right>.arrow:before{border-right-color:#ffeeba}.b-popover-warning.bs-popover-auto[x-placement^=right]>.arrow:after,.b-popover-warning.bs-popover-right>.arrow:after{border-right-color:#fff3cd}.b-popover-warning.bs-popover-auto[x-placement^=bottom]>.arrow:before,.b-popover-warning.bs-popover-bottom>.arrow:before{border-bottom-color:#ffeeba}.b-popover-warning.bs-popover-auto[x-placement^=bottom] .popover-header:before,.b-popover-warning.bs-popover-auto[x-placement^=bottom]>.arrow:after,.b-popover-warning.bs-popover-bottom .popover-header:before,.b-popover-warning.bs-popover-bottom>.arrow:after{border-bottom-color:#ffefbe}.b-popover-warning.bs-popover-auto[x-placement^=left]>.arrow:before,.b-popover-warning.bs-popover-left>.arrow:before{border-left-color:#ffeeba}.b-popover-warning.bs-popover-auto[x-placement^=left]>.arrow:after,.b-popover-warning.bs-popover-left>.arrow:after{border-left-color:#fff3cd}.b-popover-warning .popover-header{color:#212529;background-color:#ffefbe;border-bottom-color:#ffe9a4}.b-popover-warning .popover-body{color:#856404}.b-popover-danger.popover{background-color:#f8d7da;border-color:#f5c6cb}.b-popover-danger.bs-popover-auto[x-placement^=top]>.arrow:before,.b-popover-danger.bs-popover-top>.arrow:before{border-top-color:#f5c6cb}.b-popover-danger.bs-popover-auto[x-placement^=top]>.arrow:after,.b-popover-danger.bs-popover-top>.arrow:after{border-top-color:#f8d7da}.b-popover-danger.bs-popover-auto[x-placement^=right]>.arrow:before,.b-popover-danger.bs-popover-right>.arrow:before{border-right-color:#f5c6cb}.b-popover-danger.bs-popover-auto[x-placement^=right]>.arrow:after,.b-popover-danger.bs-popover-right>.arrow:after{border-right-color:#f8d7da}.b-popover-danger.bs-popover-auto[x-placement^=bottom]>.arrow:before,.b-popover-danger.bs-popover-bottom>.arrow:before{border-bottom-color:#f5c6cb}.b-popover-danger.bs-popover-auto[x-placement^=bottom] .popover-header:before,.b-popover-danger.bs-popover-auto[x-placement^=bottom]>.arrow:after,.b-popover-danger.bs-popover-bottom .popover-header:before,.b-popover-danger.bs-popover-bottom>.arrow:after{border-bottom-color:#f6cace}.b-popover-danger.bs-popover-auto[x-placement^=left]>.arrow:before,.b-popover-danger.bs-popover-left>.arrow:before{border-left-color:#f5c6cb}.b-popover-danger.bs-popover-auto[x-placement^=left]>.arrow:after,.b-popover-danger.bs-popover-left>.arrow:after{border-left-color:#f8d7da}.b-popover-danger .popover-header{color:#212529;background-color:#f6cace;border-bottom-color:#f2b4ba}.b-popover-danger .popover-body{color:#721c24}.b-popover-light.popover{background-color:#fefefe;border-color:#fdfdfe}.b-popover-light.bs-popover-auto[x-placement^=top]>.arrow:before,.b-popover-light.bs-popover-top>.arrow:before{border-top-color:#fdfdfe}.b-popover-light.bs-popover-auto[x-placement^=top]>.arrow:after,.b-popover-light.bs-popover-top>.arrow:after{border-top-color:#fefefe}.b-popover-light.bs-popover-auto[x-placement^=right]>.arrow:before,.b-popover-light.bs-popover-right>.arrow:before{border-right-color:#fdfdfe}.b-popover-light.bs-popover-auto[x-placement^=right]>.arrow:after,.b-popover-light.bs-popover-right>.arrow:after{border-right-color:#fefefe}.b-popover-light.bs-popover-auto[x-placement^=bottom]>.arrow:before,.b-popover-light.bs-popover-bottom>.arrow:before{border-bottom-color:#fdfdfe}.b-popover-light.bs-popover-auto[x-placement^=bottom] .popover-header:before,.b-popover-light.bs-popover-auto[x-placement^=bottom]>.arrow:after,.b-popover-light.bs-popover-bottom .popover-header:before,.b-popover-light.bs-popover-bottom>.arrow:after{border-bottom-color:#f6f6f6}.b-popover-light.bs-popover-auto[x-placement^=left]>.arrow:before,.b-popover-light.bs-popover-left>.arrow:before{border-left-color:#fdfdfe}.b-popover-light.bs-popover-auto[x-placement^=left]>.arrow:after,.b-popover-light.bs-popover-left>.arrow:after{border-left-color:#fefefe}.b-popover-light .popover-header{color:#212529;background-color:#f6f6f6;border-bottom-color:#eaeaea}.b-popover-light .popover-body{color:#818182}.b-popover-dark.popover{background-color:#d6d8d9;border-color:#c6c8ca}.b-popover-dark.bs-popover-auto[x-placement^=top]>.arrow:before,.b-popover-dark.bs-popover-top>.arrow:before{border-top-color:#c6c8ca}.b-popover-dark.bs-popover-auto[x-placement^=top]>.arrow:after,.b-popover-dark.bs-popover-top>.arrow:after{border-top-color:#d6d8d9}.b-popover-dark.bs-popover-auto[x-placement^=right]>.arrow:before,.b-popover-dark.bs-popover-right>.arrow:before{border-right-color:#c6c8ca}.b-popover-dark.bs-popover-auto[x-placement^=right]>.arrow:after,.b-popover-dark.bs-popover-right>.arrow:after{border-right-color:#d6d8d9}.b-popover-dark.bs-popover-auto[x-placement^=bottom]>.arrow:before,.b-popover-dark.bs-popover-bottom>.arrow:before{border-bottom-color:#c6c8ca}.b-popover-dark.bs-popover-auto[x-placement^=bottom] .popover-header:before,.b-popover-dark.bs-popover-auto[x-placement^=bottom]>.arrow:after,.b-popover-dark.bs-popover-bottom .popover-header:before,.b-popover-dark.bs-popover-bottom>.arrow:after{border-bottom-color:#ced0d2}.b-popover-dark.bs-popover-auto[x-placement^=left]>.arrow:before,.b-popover-dark.bs-popover-left>.arrow:before{border-left-color:#c6c8ca}.b-popover-dark.bs-popover-auto[x-placement^=left]>.arrow:after,.b-popover-dark.bs-popover-left>.arrow:after{border-left-color:#d6d8d9}.b-popover-dark .popover-header{color:#212529;background-color:#ced0d2;border-bottom-color:#c1c4c5}.b-popover-dark .popover-body{color:#1b1e21}.b-sidebar-outer{position:fixed;top:0;left:0;right:0;height:0;overflow:visible;z-index:1035}.b-sidebar-backdrop{left:0;z-index:-1;width:100vw;opacity:.6}.b-sidebar,.b-sidebar-backdrop{position:fixed;top:0;height:100vh}.b-sidebar{display:flex;flex-direction:column;width:320px;max-width:100%;max-height:100%;margin:0;outline:0;transform:translateX(0)}.b-sidebar.slide{transition:transform .3s ease-in-out}@media (prefers-reduced-motion:reduce){.b-sidebar.slide{transition:none}}.b-sidebar:not(.b-sidebar-right){left:0;right:auto}.b-sidebar:not(.b-sidebar-right).slide:not(.show){transform:translateX(-100%)}.b-sidebar:not(.b-sidebar-right)>.b-sidebar-header .close{margin-left:auto}.b-sidebar.b-sidebar-right{left:auto;right:0}.b-sidebar.b-sidebar-right.slide:not(.show){transform:translateX(100%)}.b-sidebar.b-sidebar-right>.b-sidebar-header .close{margin-right:auto}.b-sidebar>.b-sidebar-header{font-size:1.5rem;padding:.5rem 1rem;display:flex;flex-direction:row;flex-grow:0;align-items:center}[dir=rtl] .b-sidebar>.b-sidebar-header{flex-direction:row-reverse}.b-sidebar>.b-sidebar-header .close{float:none;font-size:1.5rem}.b-sidebar>.b-sidebar-body{flex-grow:1;height:100%;overflow-y:auto}.b-sidebar>.b-sidebar-footer{flex-grow:0}.b-skeleton-wrapper{cursor:wait}.b-skeleton{position:relative;overflow:hidden;background-color:rgba(0,0,0,.12);cursor:wait;-webkit-mask-image:radial-gradient(#fff,#000);mask-image:radial-gradient(#fff,#000)}.b-skeleton:before{content:\" \"}.b-skeleton-text{height:1rem;margin-bottom:.25rem;border-radius:.25rem}.b-skeleton-button{width:75px;padding:.375rem .75rem;font-size:1rem;line-height:1.5;border-radius:.25rem}.b-skeleton-avatar{width:2.5em;height:2.5em;border-radius:50%}.b-skeleton-input{height:calc(1.5em + .75rem + 2px);padding:.375rem .75rem;line-height:1.5;border:1px solid #ced4da;border-radius:.25rem}.b-skeleton-icon-wrapper svg{color:rgba(0,0,0,.12)}.b-skeleton-img{height:100%;width:100%}.b-skeleton-animate-wave:after{content:\"\";position:absolute;top:0;right:0;bottom:0;left:0;z-index:0;background:linear-gradient(90deg,transparent,hsla(0,0%,100%,.4),transparent);-webkit-animation:b-skeleton-animate-wave 1.75s linear infinite;animation:b-skeleton-animate-wave 1.75s linear infinite}@media (prefers-reduced-motion:reduce){.b-skeleton-animate-wave:after{background:none;-webkit-animation:none;animation:none}}@-webkit-keyframes b-skeleton-animate-wave{0%{transform:translateX(-100%)}to{transform:translateX(100%)}}@keyframes b-skeleton-animate-wave{0%{transform:translateX(-100%)}to{transform:translateX(100%)}}.b-skeleton-animate-fade{-webkit-animation:b-skeleton-animate-fade .875s ease-in-out infinite alternate;animation:b-skeleton-animate-fade .875s ease-in-out infinite alternate}@media (prefers-reduced-motion:reduce){.b-skeleton-animate-fade{-webkit-animation:none;animation:none}}@-webkit-keyframes b-skeleton-animate-fade{0%{opacity:1}to{opacity:.4}}@keyframes b-skeleton-animate-fade{0%{opacity:1}to{opacity:.4}}.b-skeleton-animate-throb{-webkit-animation:b-skeleton-animate-throb .875s ease-in infinite alternate;animation:b-skeleton-animate-throb .875s ease-in infinite alternate}@media (prefers-reduced-motion:reduce){.b-skeleton-animate-throb{-webkit-animation:none;animation:none}}@-webkit-keyframes b-skeleton-animate-throb{0%{transform:scale(1)}to{transform:scale(.975)}}@keyframes b-skeleton-animate-throb{0%{transform:scale(1)}to{transform:scale(.975)}}.table.b-table.b-table-fixed{table-layout:fixed}.table.b-table.b-table-no-border-collapse{border-collapse:separate;border-spacing:0}.table.b-table[aria-busy=true]{opacity:.55}.table.b-table>tbody>tr.b-table-details>td{border-top:none!important}.table.b-table>caption{caption-side:bottom}.table.b-table.b-table-caption-top>caption{caption-side:top!important}.table.b-table>tbody>.table-active,.table.b-table>tbody>.table-active>td,.table.b-table>tbody>.table-active>th{background-color:rgba(0,0,0,.075)}.table.b-table.table-hover>tbody>tr.table-active:hover td,.table.b-table.table-hover>tbody>tr.table-active:hover th{color:#212529;background-image:linear-gradient(rgba(0,0,0,.075),rgba(0,0,0,.075));background-repeat:no-repeat}.table.b-table>tbody>.bg-active,.table.b-table>tbody>.bg-active>td,.table.b-table>tbody>.bg-active>th{background-color:hsla(0,0%,100%,.075)!important}.table.b-table.table-hover.table-dark>tbody>tr.bg-active:hover td,.table.b-table.table-hover.table-dark>tbody>tr.bg-active:hover th{color:#fff;background-image:linear-gradient(hsla(0,0%,100%,.075),hsla(0,0%,100%,.075));background-repeat:no-repeat}.b-table-sticky-header,.table-responsive,[class*=table-responsive-]{margin-bottom:1rem}.b-table-sticky-header>.table,.table-responsive>.table,[class*=table-responsive-]>.table{margin-bottom:0}.b-table-sticky-header{overflow-y:auto;max-height:300px}@media print{.b-table-sticky-header{overflow-y:visible!important;max-height:none!important}}@supports (position:sticky){.b-table-sticky-header>.table.b-table>thead>tr>th{position:sticky;top:0;z-index:2}.b-table-sticky-header>.table.b-table>tbody>tr>.b-table-sticky-column,.b-table-sticky-header>.table.b-table>tfoot>tr>.b-table-sticky-column,.b-table-sticky-header>.table.b-table>thead>tr>.b-table-sticky-column,.table-responsive>.table.b-table>tbody>tr>.b-table-sticky-column,.table-responsive>.table.b-table>tfoot>tr>.b-table-sticky-column,.table-responsive>.table.b-table>thead>tr>.b-table-sticky-column,[class*=table-responsive-]>.table.b-table>tbody>tr>.b-table-sticky-column,[class*=table-responsive-]>.table.b-table>tfoot>tr>.b-table-sticky-column,[class*=table-responsive-]>.table.b-table>thead>tr>.b-table-sticky-column{position:sticky;left:0}.b-table-sticky-header>.table.b-table>thead>tr>.b-table-sticky-column,.table-responsive>.table.b-table>thead>tr>.b-table-sticky-column,[class*=table-responsive-]>.table.b-table>thead>tr>.b-table-sticky-column{z-index:5}.b-table-sticky-header>.table.b-table>tbody>tr>.b-table-sticky-column,.b-table-sticky-header>.table.b-table>tfoot>tr>.b-table-sticky-column,.table-responsive>.table.b-table>tbody>tr>.b-table-sticky-column,.table-responsive>.table.b-table>tfoot>tr>.b-table-sticky-column,[class*=table-responsive-]>.table.b-table>tbody>tr>.b-table-sticky-column,[class*=table-responsive-]>.table.b-table>tfoot>tr>.b-table-sticky-column{z-index:2}.table.b-table>tbody>tr>.table-b-table-default,.table.b-table>tfoot>tr>.table-b-table-default,.table.b-table>thead>tr>.table-b-table-default{color:#212529;background-color:#fff}.table.b-table.table-dark>tbody>tr>.bg-b-table-default,.table.b-table.table-dark>tfoot>tr>.bg-b-table-default,.table.b-table.table-dark>thead>tr>.bg-b-table-default{color:#fff;background-color:#343a40}.table.b-table.table-striped>tbody>tr:nth-of-type(odd)>.table-b-table-default{background-image:linear-gradient(rgba(0,0,0,.05),rgba(0,0,0,.05));background-repeat:no-repeat}.table.b-table.table-striped.table-dark>tbody>tr:nth-of-type(odd)>.bg-b-table-default{background-image:linear-gradient(hsla(0,0%,100%,.05),hsla(0,0%,100%,.05));background-repeat:no-repeat}.table.b-table.table-hover>tbody>tr:hover>.table-b-table-default{color:#212529;background-image:linear-gradient(rgba(0,0,0,.075),rgba(0,0,0,.075));background-repeat:no-repeat}.table.b-table.table-hover.table-dark>tbody>tr:hover>.bg-b-table-default{color:#fff;background-image:linear-gradient(hsla(0,0%,100%,.075),hsla(0,0%,100%,.075));background-repeat:no-repeat}}.table.b-table>tfoot>tr>[aria-sort],.table.b-table>thead>tr>[aria-sort]{cursor:pointer;background-image:none;background-repeat:no-repeat;background-size:.65em 1em}.table.b-table>tfoot>tr>[aria-sort]:not(.b-table-sort-icon-left),.table.b-table>thead>tr>[aria-sort]:not(.b-table-sort-icon-left){background-position:right .375rem center;padding-right:calc(.75rem + .65em)}.table.b-table>tfoot>tr>[aria-sort].b-table-sort-icon-left,.table.b-table>thead>tr>[aria-sort].b-table-sort-icon-left{background-position:left .375rem center;padding-left:calc(.75rem + .65em)}.table.b-table>tfoot>tr>[aria-sort=none],.table.b-table>thead>tr>[aria-sort=none]{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='101' height='101' preserveAspectRatio='none'%3E%3Cpath opacity='.3' d='M51 1l25 23 24 22H1l25-22zm0 100l25-23 24-22H1l25 22z'/%3E%3C/svg%3E\")}.table.b-table>tfoot>tr>[aria-sort=ascending],.table.b-table>thead>tr>[aria-sort=ascending]{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='101' height='101' preserveAspectRatio='none'%3E%3Cpath d='M51 1l25 23 24 22H1l25-22z'/%3E%3Cpath opacity='.3' d='M51 101l25-23 24-22H1l25 22z'/%3E%3C/svg%3E\")}.table.b-table>tfoot>tr>[aria-sort=descending],.table.b-table>thead>tr>[aria-sort=descending]{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='101' height='101' preserveAspectRatio='none'%3E%3Cpath opacity='.3' d='M51 1l25 23 24 22H1l25-22z'/%3E%3Cpath d='M51 101l25-23 24-22H1l25 22z'/%3E%3C/svg%3E\")}.table.b-table.table-dark>tfoot>tr>[aria-sort=none],.table.b-table.table-dark>thead>tr>[aria-sort=none],.table.b-table>.thead-dark>tr>[aria-sort=none]{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='101' height='101' preserveAspectRatio='none'%3E%3Cpath fill='%23fff' opacity='.3' d='M51 1l25 23 24 22H1l25-22zm0 100l25-23 24-22H1l25 22z'/%3E%3C/svg%3E\")}.table.b-table.table-dark>tfoot>tr>[aria-sort=ascending],.table.b-table.table-dark>thead>tr>[aria-sort=ascending],.table.b-table>.thead-dark>tr>[aria-sort=ascending]{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='101' height='101' preserveAspectRatio='none'%3E%3Cpath fill='%23fff' d='M51 1l25 23 24 22H1l25-22z'/%3E%3Cpath fill='%23fff' opacity='.3' d='M51 101l25-23 24-22H1l25 22z'/%3E%3C/svg%3E\")}.table.b-table.table-dark>tfoot>tr>[aria-sort=descending],.table.b-table.table-dark>thead>tr>[aria-sort=descending],.table.b-table>.thead-dark>tr>[aria-sort=descending]{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='101' height='101' preserveAspectRatio='none'%3E%3Cpath fill='%23fff' opacity='.3' d='M51 1l25 23 24 22H1l25-22z'/%3E%3Cpath fill='%23fff' d='M51 101l25-23 24-22H1l25 22z'/%3E%3C/svg%3E\")}.table.b-table>tfoot>tr>.table-dark[aria-sort=none],.table.b-table>thead>tr>.table-dark[aria-sort=none]{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='101' height='101' preserveAspectRatio='none'%3E%3Cpath fill='%23fff' opacity='.3' d='M51 1l25 23 24 22H1l25-22zm0 100l25-23 24-22H1l25 22z'/%3E%3C/svg%3E\")}.table.b-table>tfoot>tr>.table-dark[aria-sort=ascending],.table.b-table>thead>tr>.table-dark[aria-sort=ascending]{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='101' height='101' preserveAspectRatio='none'%3E%3Cpath fill='%23fff' d='M51 1l25 23 24 22H1l25-22z'/%3E%3Cpath fill='%23fff' opacity='.3' d='M51 101l25-23 24-22H1l25 22z'/%3E%3C/svg%3E\")}.table.b-table>tfoot>tr>.table-dark[aria-sort=descending],.table.b-table>thead>tr>.table-dark[aria-sort=descending]{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='101' height='101' preserveAspectRatio='none'%3E%3Cpath fill='%23fff' opacity='.3' d='M51 1l25 23 24 22H1l25-22z'/%3E%3Cpath fill='%23fff' d='M51 101l25-23 24-22H1l25 22z'/%3E%3C/svg%3E\")}.table.b-table.table-sm>tfoot>tr>[aria-sort]:not(.b-table-sort-icon-left),.table.b-table.table-sm>thead>tr>[aria-sort]:not(.b-table-sort-icon-left){background-position:right .15rem center;padding-right:calc(.3rem + .65em)}.table.b-table.table-sm>tfoot>tr>[aria-sort].b-table-sort-icon-left,.table.b-table.table-sm>thead>tr>[aria-sort].b-table-sort-icon-left{background-position:left .15rem center;padding-left:calc(.3rem + .65em)}.table.b-table.b-table-selectable:not(.b-table-selectable-no-click)>tbody>tr{cursor:pointer}.table.b-table.b-table-selectable:not(.b-table-selectable-no-click).b-table-selecting.b-table-select-range>tbody>tr{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}@media (max-width:575.98px){.table.b-table.b-table-stacked-sm{display:block;width:100%}.table.b-table.b-table-stacked-sm>caption,.table.b-table.b-table-stacked-sm>tbody,.table.b-table.b-table-stacked-sm>tbody>tr,.table.b-table.b-table-stacked-sm>tbody>tr>td,.table.b-table.b-table-stacked-sm>tbody>tr>th{display:block}.table.b-table.b-table-stacked-sm>tfoot,.table.b-table.b-table-stacked-sm>tfoot>tr.b-table-bottom-row,.table.b-table.b-table-stacked-sm>tfoot>tr.b-table-top-row,.table.b-table.b-table-stacked-sm>thead,.table.b-table.b-table-stacked-sm>thead>tr.b-table-bottom-row,.table.b-table.b-table-stacked-sm>thead>tr.b-table-top-row{display:none}.table.b-table.b-table-stacked-sm>caption{caption-side:top!important}.table.b-table.b-table-stacked-sm>tbody>tr>[data-label]:before{content:attr(data-label);width:40%;float:left;text-align:right;word-wrap:break-word;font-weight:700;font-style:normal;padding:0 .5rem 0 0;margin:0}.table.b-table.b-table-stacked-sm>tbody>tr>[data-label]:after{display:block;clear:both;content:\"\"}.table.b-table.b-table-stacked-sm>tbody>tr>[data-label]>div{display:inline-block;width:60%;padding:0 0 0 .5rem;margin:0}.table.b-table.b-table-stacked-sm>tbody>tr.bottom-row,.table.b-table.b-table-stacked-sm>tbody>tr.top-row{display:none}.table.b-table.b-table-stacked-sm>tbody>tr>:first-child,.table.b-table.b-table-stacked-sm>tbody>tr>[rowspan]+td,.table.b-table.b-table-stacked-sm>tbody>tr>[rowspan]+th{border-top-width:3px}}@media (max-width:767.98px){.table.b-table.b-table-stacked-md{display:block;width:100%}.table.b-table.b-table-stacked-md>caption,.table.b-table.b-table-stacked-md>tbody,.table.b-table.b-table-stacked-md>tbody>tr,.table.b-table.b-table-stacked-md>tbody>tr>td,.table.b-table.b-table-stacked-md>tbody>tr>th{display:block}.table.b-table.b-table-stacked-md>tfoot,.table.b-table.b-table-stacked-md>tfoot>tr.b-table-bottom-row,.table.b-table.b-table-stacked-md>tfoot>tr.b-table-top-row,.table.b-table.b-table-stacked-md>thead,.table.b-table.b-table-stacked-md>thead>tr.b-table-bottom-row,.table.b-table.b-table-stacked-md>thead>tr.b-table-top-row{display:none}.table.b-table.b-table-stacked-md>caption{caption-side:top!important}.table.b-table.b-table-stacked-md>tbody>tr>[data-label]:before{content:attr(data-label);width:40%;float:left;text-align:right;word-wrap:break-word;font-weight:700;font-style:normal;padding:0 .5rem 0 0;margin:0}.table.b-table.b-table-stacked-md>tbody>tr>[data-label]:after{display:block;clear:both;content:\"\"}.table.b-table.b-table-stacked-md>tbody>tr>[data-label]>div{display:inline-block;width:60%;padding:0 0 0 .5rem;margin:0}.table.b-table.b-table-stacked-md>tbody>tr.bottom-row,.table.b-table.b-table-stacked-md>tbody>tr.top-row{display:none}.table.b-table.b-table-stacked-md>tbody>tr>:first-child,.table.b-table.b-table-stacked-md>tbody>tr>[rowspan]+td,.table.b-table.b-table-stacked-md>tbody>tr>[rowspan]+th{border-top-width:3px}}@media (max-width:991.98px){.table.b-table.b-table-stacked-lg{display:block;width:100%}.table.b-table.b-table-stacked-lg>caption,.table.b-table.b-table-stacked-lg>tbody,.table.b-table.b-table-stacked-lg>tbody>tr,.table.b-table.b-table-stacked-lg>tbody>tr>td,.table.b-table.b-table-stacked-lg>tbody>tr>th{display:block}.table.b-table.b-table-stacked-lg>tfoot,.table.b-table.b-table-stacked-lg>tfoot>tr.b-table-bottom-row,.table.b-table.b-table-stacked-lg>tfoot>tr.b-table-top-row,.table.b-table.b-table-stacked-lg>thead,.table.b-table.b-table-stacked-lg>thead>tr.b-table-bottom-row,.table.b-table.b-table-stacked-lg>thead>tr.b-table-top-row{display:none}.table.b-table.b-table-stacked-lg>caption{caption-side:top!important}.table.b-table.b-table-stacked-lg>tbody>tr>[data-label]:before{content:attr(data-label);width:40%;float:left;text-align:right;word-wrap:break-word;font-weight:700;font-style:normal;padding:0 .5rem 0 0;margin:0}.table.b-table.b-table-stacked-lg>tbody>tr>[data-label]:after{display:block;clear:both;content:\"\"}.table.b-table.b-table-stacked-lg>tbody>tr>[data-label]>div{display:inline-block;width:60%;padding:0 0 0 .5rem;margin:0}.table.b-table.b-table-stacked-lg>tbody>tr.bottom-row,.table.b-table.b-table-stacked-lg>tbody>tr.top-row{display:none}.table.b-table.b-table-stacked-lg>tbody>tr>:first-child,.table.b-table.b-table-stacked-lg>tbody>tr>[rowspan]+td,.table.b-table.b-table-stacked-lg>tbody>tr>[rowspan]+th{border-top-width:3px}}@media (max-width:1199.98px){.table.b-table.b-table-stacked-xl{display:block;width:100%}.table.b-table.b-table-stacked-xl>caption,.table.b-table.b-table-stacked-xl>tbody,.table.b-table.b-table-stacked-xl>tbody>tr,.table.b-table.b-table-stacked-xl>tbody>tr>td,.table.b-table.b-table-stacked-xl>tbody>tr>th{display:block}.table.b-table.b-table-stacked-xl>tfoot,.table.b-table.b-table-stacked-xl>tfoot>tr.b-table-bottom-row,.table.b-table.b-table-stacked-xl>tfoot>tr.b-table-top-row,.table.b-table.b-table-stacked-xl>thead,.table.b-table.b-table-stacked-xl>thead>tr.b-table-bottom-row,.table.b-table.b-table-stacked-xl>thead>tr.b-table-top-row{display:none}.table.b-table.b-table-stacked-xl>caption{caption-side:top!important}.table.b-table.b-table-stacked-xl>tbody>tr>[data-label]:before{content:attr(data-label);width:40%;float:left;text-align:right;word-wrap:break-word;font-weight:700;font-style:normal;padding:0 .5rem 0 0;margin:0}.table.b-table.b-table-stacked-xl>tbody>tr>[data-label]:after{display:block;clear:both;content:\"\"}.table.b-table.b-table-stacked-xl>tbody>tr>[data-label]>div{display:inline-block;width:60%;padding:0 0 0 .5rem;margin:0}.table.b-table.b-table-stacked-xl>tbody>tr.bottom-row,.table.b-table.b-table-stacked-xl>tbody>tr.top-row{display:none}.table.b-table.b-table-stacked-xl>tbody>tr>:first-child,.table.b-table.b-table-stacked-xl>tbody>tr>[rowspan]+td,.table.b-table.b-table-stacked-xl>tbody>tr>[rowspan]+th{border-top-width:3px}}.table.b-table.b-table-stacked{display:block;width:100%}.table.b-table.b-table-stacked>caption,.table.b-table.b-table-stacked>tbody,.table.b-table.b-table-stacked>tbody>tr,.table.b-table.b-table-stacked>tbody>tr>td,.table.b-table.b-table-stacked>tbody>tr>th{display:block}.table.b-table.b-table-stacked>tfoot,.table.b-table.b-table-stacked>tfoot>tr.b-table-bottom-row,.table.b-table.b-table-stacked>tfoot>tr.b-table-top-row,.table.b-table.b-table-stacked>thead,.table.b-table.b-table-stacked>thead>tr.b-table-bottom-row,.table.b-table.b-table-stacked>thead>tr.b-table-top-row{display:none}.table.b-table.b-table-stacked>caption{caption-side:top!important}.table.b-table.b-table-stacked>tbody>tr>[data-label]:before{content:attr(data-label);width:40%;float:left;text-align:right;word-wrap:break-word;font-weight:700;font-style:normal;padding:0 .5rem 0 0;margin:0}.table.b-table.b-table-stacked>tbody>tr>[data-label]:after{display:block;clear:both;content:\"\"}.table.b-table.b-table-stacked>tbody>tr>[data-label]>div{display:inline-block;width:60%;padding:0 0 0 .5rem;margin:0}.table.b-table.b-table-stacked>tbody>tr.bottom-row,.table.b-table.b-table-stacked>tbody>tr.top-row{display:none}.table.b-table.b-table-stacked>tbody>tr>:first-child,.table.b-table.b-table-stacked>tbody>tr>[rowspan]+td,.table.b-table.b-table-stacked>tbody>tr>[rowspan]+th{border-top-width:3px}.b-time{min-width:150px}.b-time[aria-disabled=true] output,.b-time[aria-readonly=true] output,.b-time output.disabled{background-color:#e9ecef;opacity:1}.b-time[aria-disabled=true] output{pointer-events:none}[dir=rtl] .b-time>.d-flex:not(.flex-column){flex-direction:row-reverse}.b-time .b-time-header{margin-bottom:.5rem}.b-time .b-time-header output{padding:.25rem;font-size:80%}.b-time .b-time-footer{margin-top:.5rem}.b-time .b-time-ampm{margin-left:.5rem}.b-toast{display:block;position:relative;max-width:350px;-webkit-backface-visibility:hidden;backface-visibility:hidden;background-clip:padding-box;z-index:1;border-radius:.25rem}.b-toast .toast{background-color:hsla(0,0%,100%,.85)}.b-toast:not(:last-child){margin-bottom:.75rem}.b-toast.b-toast-solid .toast{background-color:#fff}.b-toast .toast{opacity:1}.b-toast .toast.fade:not(.show){opacity:0}.b-toast .toast .toast-body{display:block}.b-toast-primary .toast{background-color:rgba(230,242,255,.85);border-color:rgba(184,218,255,.85);color:#004085}.b-toast-primary .toast .toast-header{color:#004085;background-color:rgba(204,229,255,.85);border-bottom-color:rgba(184,218,255,.85)}.b-toast-primary.b-toast-solid .toast{background-color:#e6f2ff}.b-toast-secondary .toast{background-color:rgba(239,240,241,.85);border-color:rgba(214,216,219,.85);color:#383d41}.b-toast-secondary .toast .toast-header{color:#383d41;background-color:rgba(226,227,229,.85);border-bottom-color:rgba(214,216,219,.85)}.b-toast-secondary.b-toast-solid .toast{background-color:#eff0f1}.b-toast-success .toast{background-color:rgba(230,245,233,.85);border-color:rgba(195,230,203,.85);color:#155724}.b-toast-success .toast .toast-header{color:#155724;background-color:rgba(212,237,218,.85);border-bottom-color:rgba(195,230,203,.85)}.b-toast-success.b-toast-solid .toast{background-color:#e6f5e9}.b-toast-info .toast{background-color:rgba(229,244,247,.85);border-color:rgba(190,229,235,.85);color:#0c5460}.b-toast-info .toast .toast-header{color:#0c5460;background-color:rgba(209,236,241,.85);border-bottom-color:rgba(190,229,235,.85)}.b-toast-info.b-toast-solid .toast{background-color:#e5f4f7}.b-toast-warning .toast{background-color:rgba(255,249,231,.85);border-color:rgba(255,238,186,.85);color:#856404}.b-toast-warning .toast .toast-header{color:#856404;background-color:rgba(255,243,205,.85);border-bottom-color:rgba(255,238,186,.85)}.b-toast-warning.b-toast-solid .toast{background-color:#fff9e7}.b-toast-danger .toast{background-color:rgba(252,237,238,.85);border-color:rgba(245,198,203,.85);color:#721c24}.b-toast-danger .toast .toast-header{color:#721c24;background-color:rgba(248,215,218,.85);border-bottom-color:rgba(245,198,203,.85)}.b-toast-danger.b-toast-solid .toast{background-color:#fcedee}.b-toast-light .toast{background-color:hsla(0,0%,100%,.85);border-color:rgba(253,253,254,.85);color:#818182}.b-toast-light .toast .toast-header{color:#818182;background-color:hsla(0,0%,99.6%,.85);border-bottom-color:rgba(253,253,254,.85)}.b-toast-light.b-toast-solid .toast{background-color:#fff}.b-toast-dark .toast{background-color:rgba(227,229,229,.85);border-color:rgba(198,200,202,.85);color:#1b1e21}.b-toast-dark .toast .toast-header{color:#1b1e21;background-color:rgba(214,216,217,.85);border-bottom-color:rgba(198,200,202,.85)}.b-toast-dark.b-toast-solid .toast{background-color:#e3e5e5}.b-toaster{z-index:1100}.b-toaster .b-toaster-slot{position:relative;display:block}.b-toaster .b-toaster-slot:empty{display:none!important}.b-toaster.b-toaster-bottom-center,.b-toaster.b-toaster-bottom-full,.b-toaster.b-toaster-bottom-left,.b-toaster.b-toaster-bottom-right,.b-toaster.b-toaster-top-center,.b-toaster.b-toaster-top-full,.b-toaster.b-toaster-top-left,.b-toaster.b-toaster-top-right{position:fixed;left:.5rem;right:.5rem;margin:0;padding:0;height:0;overflow:visible}.b-toaster.b-toaster-bottom-center .b-toaster-slot,.b-toaster.b-toaster-bottom-full .b-toaster-slot,.b-toaster.b-toaster-bottom-left .b-toaster-slot,.b-toaster.b-toaster-bottom-right .b-toaster-slot,.b-toaster.b-toaster-top-center .b-toaster-slot,.b-toaster.b-toaster-top-full .b-toaster-slot,.b-toaster.b-toaster-top-left .b-toaster-slot,.b-toaster.b-toaster-top-right .b-toaster-slot{position:absolute;max-width:350px;width:100%;left:0;right:0;padding:0;margin:0}.b-toaster.b-toaster-bottom-full .b-toaster-slot,.b-toaster.b-toaster-bottom-full .b-toaster-slot .b-toast,.b-toaster.b-toaster-bottom-full .b-toaster-slot .toast,.b-toaster.b-toaster-top-full .b-toaster-slot,.b-toaster.b-toaster-top-full .b-toaster-slot .b-toast,.b-toaster.b-toaster-top-full .b-toaster-slot .toast{width:100%;max-width:100%}.b-toaster.b-toaster-top-center,.b-toaster.b-toaster-top-full,.b-toaster.b-toaster-top-left,.b-toaster.b-toaster-top-right{top:0}.b-toaster.b-toaster-top-center .b-toaster-slot,.b-toaster.b-toaster-top-full .b-toaster-slot,.b-toaster.b-toaster-top-left .b-toaster-slot,.b-toaster.b-toaster-top-right .b-toaster-slot{top:.5rem}.b-toaster.b-toaster-bottom-center,.b-toaster.b-toaster-bottom-full,.b-toaster.b-toaster-bottom-left,.b-toaster.b-toaster-bottom-right{bottom:0}.b-toaster.b-toaster-bottom-center .b-toaster-slot,.b-toaster.b-toaster-bottom-full .b-toaster-slot,.b-toaster.b-toaster-bottom-left .b-toaster-slot,.b-toaster.b-toaster-bottom-right .b-toaster-slot{bottom:.5rem}.b-toaster.b-toaster-bottom-center .b-toaster-slot,.b-toaster.b-toaster-bottom-right .b-toaster-slot,.b-toaster.b-toaster-top-center .b-toaster-slot,.b-toaster.b-toaster-top-right .b-toaster-slot{margin-left:auto}.b-toaster.b-toaster-bottom-center .b-toaster-slot,.b-toaster.b-toaster-bottom-left .b-toaster-slot,.b-toaster.b-toaster-top-center .b-toaster-slot,.b-toaster.b-toaster-top-left .b-toaster-slot{margin-right:auto}.b-toaster.b-toaster-bottom-left .b-toast.b-toaster-enter-active,.b-toaster.b-toaster-bottom-left .b-toast.b-toaster-leave-active,.b-toaster.b-toaster-bottom-left .b-toast.b-toaster-move,.b-toaster.b-toaster-bottom-right .b-toast.b-toaster-enter-active,.b-toaster.b-toaster-bottom-right .b-toast.b-toaster-leave-active,.b-toaster.b-toaster-bottom-right .b-toast.b-toaster-move,.b-toaster.b-toaster-top-left .b-toast.b-toaster-enter-active,.b-toaster.b-toaster-top-left .b-toast.b-toaster-leave-active,.b-toaster.b-toaster-top-left .b-toast.b-toaster-move,.b-toaster.b-toaster-top-right .b-toast.b-toaster-enter-active,.b-toaster.b-toaster-top-right .b-toast.b-toaster-leave-active,.b-toaster.b-toaster-top-right .b-toast.b-toaster-move{transition:transform .175s}.b-toaster.b-toaster-bottom-left .b-toast.b-toaster-enter-active .toast.fade,.b-toaster.b-toaster-bottom-left .b-toast.b-toaster-enter-to .toast.fade,.b-toaster.b-toaster-bottom-right .b-toast.b-toaster-enter-active .toast.fade,.b-toaster.b-toaster-bottom-right .b-toast.b-toaster-enter-to .toast.fade,.b-toaster.b-toaster-top-left .b-toast.b-toaster-enter-active .toast.fade,.b-toaster.b-toaster-top-left .b-toast.b-toaster-enter-to .toast.fade,.b-toaster.b-toaster-top-right .b-toast.b-toaster-enter-active .toast.fade,.b-toaster.b-toaster-top-right .b-toast.b-toaster-enter-to .toast.fade{transition-delay:.175s}.b-toaster.b-toaster-bottom-left .b-toast.b-toaster-leave-active,.b-toaster.b-toaster-bottom-right .b-toast.b-toaster-leave-active,.b-toaster.b-toaster-top-left .b-toast.b-toaster-leave-active,.b-toaster.b-toaster-top-right .b-toast.b-toaster-leave-active{position:absolute;transition-delay:.175s}.b-toaster.b-toaster-bottom-left .b-toast.b-toaster-leave-active .toast.fade,.b-toaster.b-toaster-bottom-right .b-toast.b-toaster-leave-active .toast.fade,.b-toaster.b-toaster-top-left .b-toast.b-toaster-leave-active .toast.fade,.b-toaster.b-toaster-top-right .b-toast.b-toaster-leave-active .toast.fade{transition-delay:0s}.tooltip.b-tooltip{display:block;opacity:.9;outline:0}.tooltip.b-tooltip.fade:not(.show){opacity:0}.tooltip.b-tooltip.show{opacity:.9}.tooltip.b-tooltip.noninteractive{pointer-events:none}.tooltip.b-tooltip .arrow{margin:0 .25rem}.tooltip.b-tooltip.b-tooltip-danger.bs-tooltip-auto[x-placement^=left] .arrow,.tooltip.b-tooltip.b-tooltip-danger.bs-tooltip-auto[x-placement^=right] .arrow,.tooltip.b-tooltip.b-tooltip-dark.bs-tooltip-auto[x-placement^=left] .arrow,.tooltip.b-tooltip.b-tooltip-dark.bs-tooltip-auto[x-placement^=right] .arrow,.tooltip.b-tooltip.b-tooltip-info.bs-tooltip-auto[x-placement^=left] .arrow,.tooltip.b-tooltip.b-tooltip-info.bs-tooltip-auto[x-placement^=right] .arrow,.tooltip.b-tooltip.b-tooltip-light.bs-tooltip-auto[x-placement^=left] .arrow,.tooltip.b-tooltip.b-tooltip-light.bs-tooltip-auto[x-placement^=right] .arrow,.tooltip.b-tooltip.b-tooltip-primary.bs-tooltip-auto[x-placement^=left] .arrow,.tooltip.b-tooltip.b-tooltip-primary.bs-tooltip-auto[x-placement^=right] .arrow,.tooltip.b-tooltip.b-tooltip-secondary.bs-tooltip-auto[x-placement^=left] .arrow,.tooltip.b-tooltip.b-tooltip-secondary.bs-tooltip-auto[x-placement^=right] .arrow,.tooltip.b-tooltip.b-tooltip-success.bs-tooltip-auto[x-placement^=left] .arrow,.tooltip.b-tooltip.b-tooltip-success.bs-tooltip-auto[x-placement^=right] .arrow,.tooltip.b-tooltip.b-tooltip-warning.bs-tooltip-auto[x-placement^=left] .arrow,.tooltip.b-tooltip.b-tooltip-warning.bs-tooltip-auto[x-placement^=right] .arrow,.tooltip.b-tooltip.bs-tooltip-left .arrow,.tooltip.b-tooltip.bs-tooltip-right .arrow{margin:.25rem 0}.tooltip.b-tooltip-primary.bs-tooltip-auto[x-placement^=top] .arrow:before,.tooltip.b-tooltip-primary.bs-tooltip-top .arrow:before{border-top-color:#007bff}.tooltip.b-tooltip-primary.bs-tooltip-auto[x-placement^=right] .arrow:before,.tooltip.b-tooltip-primary.bs-tooltip-right .arrow:before{border-right-color:#007bff}.tooltip.b-tooltip-primary.bs-tooltip-auto[x-placement^=bottom] .arrow:before,.tooltip.b-tooltip-primary.bs-tooltip-bottom .arrow:before{border-bottom-color:#007bff}.tooltip.b-tooltip-primary.bs-tooltip-auto[x-placement^=left] .arrow:before,.tooltip.b-tooltip-primary.bs-tooltip-left .arrow:before{border-left-color:#007bff}.tooltip.b-tooltip-primary .tooltip-inner{color:#fff;background-color:#007bff}.tooltip.b-tooltip-secondary.bs-tooltip-auto[x-placement^=top] .arrow:before,.tooltip.b-tooltip-secondary.bs-tooltip-top .arrow:before{border-top-color:#6c757d}.tooltip.b-tooltip-secondary.bs-tooltip-auto[x-placement^=right] .arrow:before,.tooltip.b-tooltip-secondary.bs-tooltip-right .arrow:before{border-right-color:#6c757d}.tooltip.b-tooltip-secondary.bs-tooltip-auto[x-placement^=bottom] .arrow:before,.tooltip.b-tooltip-secondary.bs-tooltip-bottom .arrow:before{border-bottom-color:#6c757d}.tooltip.b-tooltip-secondary.bs-tooltip-auto[x-placement^=left] .arrow:before,.tooltip.b-tooltip-secondary.bs-tooltip-left .arrow:before{border-left-color:#6c757d}.tooltip.b-tooltip-secondary .tooltip-inner{color:#fff;background-color:#6c757d}.tooltip.b-tooltip-success.bs-tooltip-auto[x-placement^=top] .arrow:before,.tooltip.b-tooltip-success.bs-tooltip-top .arrow:before{border-top-color:#28a745}.tooltip.b-tooltip-success.bs-tooltip-auto[x-placement^=right] .arrow:before,.tooltip.b-tooltip-success.bs-tooltip-right .arrow:before{border-right-color:#28a745}.tooltip.b-tooltip-success.bs-tooltip-auto[x-placement^=bottom] .arrow:before,.tooltip.b-tooltip-success.bs-tooltip-bottom .arrow:before{border-bottom-color:#28a745}.tooltip.b-tooltip-success.bs-tooltip-auto[x-placement^=left] .arrow:before,.tooltip.b-tooltip-success.bs-tooltip-left .arrow:before{border-left-color:#28a745}.tooltip.b-tooltip-success .tooltip-inner{color:#fff;background-color:#28a745}.tooltip.b-tooltip-info.bs-tooltip-auto[x-placement^=top] .arrow:before,.tooltip.b-tooltip-info.bs-tooltip-top .arrow:before{border-top-color:#17a2b8}.tooltip.b-tooltip-info.bs-tooltip-auto[x-placement^=right] .arrow:before,.tooltip.b-tooltip-info.bs-tooltip-right .arrow:before{border-right-color:#17a2b8}.tooltip.b-tooltip-info.bs-tooltip-auto[x-placement^=bottom] .arrow:before,.tooltip.b-tooltip-info.bs-tooltip-bottom .arrow:before{border-bottom-color:#17a2b8}.tooltip.b-tooltip-info.bs-tooltip-auto[x-placement^=left] .arrow:before,.tooltip.b-tooltip-info.bs-tooltip-left .arrow:before{border-left-color:#17a2b8}.tooltip.b-tooltip-info .tooltip-inner{color:#fff;background-color:#17a2b8}.tooltip.b-tooltip-warning.bs-tooltip-auto[x-placement^=top] .arrow:before,.tooltip.b-tooltip-warning.bs-tooltip-top .arrow:before{border-top-color:#ffc107}.tooltip.b-tooltip-warning.bs-tooltip-auto[x-placement^=right] .arrow:before,.tooltip.b-tooltip-warning.bs-tooltip-right .arrow:before{border-right-color:#ffc107}.tooltip.b-tooltip-warning.bs-tooltip-auto[x-placement^=bottom] .arrow:before,.tooltip.b-tooltip-warning.bs-tooltip-bottom .arrow:before{border-bottom-color:#ffc107}.tooltip.b-tooltip-warning.bs-tooltip-auto[x-placement^=left] .arrow:before,.tooltip.b-tooltip-warning.bs-tooltip-left .arrow:before{border-left-color:#ffc107}.tooltip.b-tooltip-warning .tooltip-inner{color:#212529;background-color:#ffc107}.tooltip.b-tooltip-danger.bs-tooltip-auto[x-placement^=top] .arrow:before,.tooltip.b-tooltip-danger.bs-tooltip-top .arrow:before{border-top-color:#dc3545}.tooltip.b-tooltip-danger.bs-tooltip-auto[x-placement^=right] .arrow:before,.tooltip.b-tooltip-danger.bs-tooltip-right .arrow:before{border-right-color:#dc3545}.tooltip.b-tooltip-danger.bs-tooltip-auto[x-placement^=bottom] .arrow:before,.tooltip.b-tooltip-danger.bs-tooltip-bottom .arrow:before{border-bottom-color:#dc3545}.tooltip.b-tooltip-danger.bs-tooltip-auto[x-placement^=left] .arrow:before,.tooltip.b-tooltip-danger.bs-tooltip-left .arrow:before{border-left-color:#dc3545}.tooltip.b-tooltip-danger .tooltip-inner{color:#fff;background-color:#dc3545}.tooltip.b-tooltip-light.bs-tooltip-auto[x-placement^=top] .arrow:before,.tooltip.b-tooltip-light.bs-tooltip-top .arrow:before{border-top-color:#f8f9fa}.tooltip.b-tooltip-light.bs-tooltip-auto[x-placement^=right] .arrow:before,.tooltip.b-tooltip-light.bs-tooltip-right .arrow:before{border-right-color:#f8f9fa}.tooltip.b-tooltip-light.bs-tooltip-auto[x-placement^=bottom] .arrow:before,.tooltip.b-tooltip-light.bs-tooltip-bottom .arrow:before{border-bottom-color:#f8f9fa}.tooltip.b-tooltip-light.bs-tooltip-auto[x-placement^=left] .arrow:before,.tooltip.b-tooltip-light.bs-tooltip-left .arrow:before{border-left-color:#f8f9fa}.tooltip.b-tooltip-light .tooltip-inner{color:#212529;background-color:#f8f9fa}.tooltip.b-tooltip-dark.bs-tooltip-auto[x-placement^=top] .arrow:before,.tooltip.b-tooltip-dark.bs-tooltip-top .arrow:before{border-top-color:#343a40}.tooltip.b-tooltip-dark.bs-tooltip-auto[x-placement^=right] .arrow:before,.tooltip.b-tooltip-dark.bs-tooltip-right .arrow:before{border-right-color:#343a40}.tooltip.b-tooltip-dark.bs-tooltip-auto[x-placement^=bottom] .arrow:before,.tooltip.b-tooltip-dark.bs-tooltip-bottom .arrow:before{border-bottom-color:#343a40}.tooltip.b-tooltip-dark.bs-tooltip-auto[x-placement^=left] .arrow:before,.tooltip.b-tooltip-dark.bs-tooltip-left .arrow:before{border-left-color:#343a40}.tooltip.b-tooltip-dark .tooltip-inner{color:#fff;background-color:#343a40}.b-icon.bi{display:inline-block;overflow:visible;vertical-align:-.15em}.b-icon.b-icon-animation-cylon,.b-icon.b-iconstack .b-icon-animation-cylon>g{transform-origin:center;-webkit-animation:b-icon-animation-cylon .75s ease-in-out infinite alternate;animation:b-icon-animation-cylon .75s ease-in-out infinite alternate}@media (prefers-reduced-motion:reduce){.b-icon.b-icon-animation-cylon,.b-icon.b-iconstack .b-icon-animation-cylon>g{-webkit-animation:none;animation:none}}.b-icon.b-icon-animation-cylon-vertical,.b-icon.b-iconstack .b-icon-animation-cylon-vertical>g{transform-origin:center;-webkit-animation:b-icon-animation-cylon-vertical .75s ease-in-out infinite alternate;animation:b-icon-animation-cylon-vertical .75s ease-in-out infinite alternate}@media (prefers-reduced-motion:reduce){.b-icon.b-icon-animation-cylon-vertical,.b-icon.b-iconstack .b-icon-animation-cylon-vertical>g{-webkit-animation:none;animation:none}}.b-icon.b-icon-animation-fade,.b-icon.b-iconstack .b-icon-animation-fade>g{transform-origin:center;-webkit-animation:b-icon-animation-fade .75s ease-in-out infinite alternate;animation:b-icon-animation-fade .75s ease-in-out infinite alternate}@media (prefers-reduced-motion:reduce){.b-icon.b-icon-animation-fade,.b-icon.b-iconstack .b-icon-animation-fade>g{-webkit-animation:none;animation:none}}.b-icon.b-icon-animation-spin,.b-icon.b-iconstack .b-icon-animation-spin>g{transform-origin:center;-webkit-animation:b-icon-animation-spin 2s linear infinite normal;animation:b-icon-animation-spin 2s linear infinite normal}@media (prefers-reduced-motion:reduce){.b-icon.b-icon-animation-spin,.b-icon.b-iconstack .b-icon-animation-spin>g{-webkit-animation:none;animation:none}}.b-icon.b-icon-animation-spin-reverse,.b-icon.b-iconstack .b-icon-animation-spin-reverse>g{transform-origin:center;animation:b-icon-animation-spin 2s linear infinite reverse}@media (prefers-reduced-motion:reduce){.b-icon.b-icon-animation-spin-reverse,.b-icon.b-iconstack .b-icon-animation-spin-reverse>g{-webkit-animation:none;animation:none}}.b-icon.b-icon-animation-spin-pulse,.b-icon.b-iconstack .b-icon-animation-spin-pulse>g{transform-origin:center;-webkit-animation:b-icon-animation-spin 1s steps(8) infinite normal;animation:b-icon-animation-spin 1s steps(8) infinite normal}@media (prefers-reduced-motion:reduce){.b-icon.b-icon-animation-spin-pulse,.b-icon.b-iconstack .b-icon-animation-spin-pulse>g{-webkit-animation:none;animation:none}}.b-icon.b-icon-animation-spin-reverse-pulse,.b-icon.b-iconstack .b-icon-animation-spin-reverse-pulse>g{transform-origin:center;animation:b-icon-animation-spin 1s steps(8) infinite reverse}@media (prefers-reduced-motion:reduce){.b-icon.b-icon-animation-spin-reverse-pulse,.b-icon.b-iconstack .b-icon-animation-spin-reverse-pulse>g{-webkit-animation:none;animation:none}}.b-icon.b-icon-animation-throb,.b-icon.b-iconstack .b-icon-animation-throb>g{transform-origin:center;-webkit-animation:b-icon-animation-throb .75s ease-in-out infinite alternate;animation:b-icon-animation-throb .75s ease-in-out infinite alternate}@media (prefers-reduced-motion:reduce){.b-icon.b-icon-animation-throb,.b-icon.b-iconstack .b-icon-animation-throb>g{-webkit-animation:none;animation:none}}@-webkit-keyframes b-icon-animation-cylon{0%{transform:translateX(-25%)}to{transform:translateX(25%)}}@keyframes b-icon-animation-cylon{0%{transform:translateX(-25%)}to{transform:translateX(25%)}}@-webkit-keyframes b-icon-animation-cylon-vertical{0%{transform:translateY(25%)}to{transform:translateY(-25%)}}@keyframes b-icon-animation-cylon-vertical{0%{transform:translateY(25%)}to{transform:translateY(-25%)}}@-webkit-keyframes b-icon-animation-fade{0%{opacity:.1}to{opacity:1}}@keyframes b-icon-animation-fade{0%{opacity:.1}to{opacity:1}}@-webkit-keyframes b-icon-animation-spin{0%{transform:rotate(0deg)}to{transform:rotate(359deg)}}@keyframes b-icon-animation-spin{0%{transform:rotate(0deg)}to{transform:rotate(359deg)}}@-webkit-keyframes b-icon-animation-throb{0%{opacity:.5;transform:scale(.5)}to{opacity:1;transform:scale(1)}}@keyframes b-icon-animation-throb{0%{opacity:.5;transform:scale(.5)}to{opacity:1;transform:scale(1)}}.btn .b-icon.bi,.dropdown-item .b-icon.bi,.dropdown-toggle .b-icon.bi,.input-group-text .b-icon.bi,.nav-link .b-icon.bi{font-size:125%;vertical-align:text-bottom}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(64);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(4).default("5764bbd8", content, true)

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".svg-inline--fa,svg:not(:root).svg-inline--fa{overflow:visible}.svg-inline--fa{display:inline-block;font-size:inherit;height:1em;vertical-align:-.125em}.svg-inline--fa.fa-lg{vertical-align:-.225em}.svg-inline--fa.fa-w-1{width:.0625em}.svg-inline--fa.fa-w-2{width:.125em}.svg-inline--fa.fa-w-3{width:.1875em}.svg-inline--fa.fa-w-4{width:.25em}.svg-inline--fa.fa-w-5{width:.3125em}.svg-inline--fa.fa-w-6{width:.375em}.svg-inline--fa.fa-w-7{width:.4375em}.svg-inline--fa.fa-w-8{width:.5em}.svg-inline--fa.fa-w-9{width:.5625em}.svg-inline--fa.fa-w-10{width:.625em}.svg-inline--fa.fa-w-11{width:.6875em}.svg-inline--fa.fa-w-12{width:.75em}.svg-inline--fa.fa-w-13{width:.8125em}.svg-inline--fa.fa-w-14{width:.875em}.svg-inline--fa.fa-w-15{width:.9375em}.svg-inline--fa.fa-w-16{width:1em}.svg-inline--fa.fa-w-17{width:1.0625em}.svg-inline--fa.fa-w-18{width:1.125em}.svg-inline--fa.fa-w-19{width:1.1875em}.svg-inline--fa.fa-w-20{width:1.25em}.svg-inline--fa.fa-pull-left{margin-right:.3em;width:auto}.svg-inline--fa.fa-pull-right{margin-left:.3em;width:auto}.svg-inline--fa.fa-border{height:1.5em}.svg-inline--fa.fa-li{width:2em}.svg-inline--fa.fa-fw{width:1.25em}.fa-layers svg.svg-inline--fa{bottom:0;left:0;margin:auto;position:absolute;right:0;top:0}.fa-layers{display:inline-block;height:1em;position:relative;text-align:center;vertical-align:-.125em;width:1em}.fa-layers svg.svg-inline--fa{transform-origin:center center}.fa-layers-counter,.fa-layers-text{display:inline-block;position:absolute;text-align:center}.fa-layers-text{left:50%;top:50%;transform:translate(-50%,-50%);transform-origin:center center}.fa-layers-counter{background-color:#ff253a;border-radius:1em;box-sizing:border-box;color:#fff;height:1.5em;line-height:1;max-width:5em;min-width:1.5em;overflow:hidden;padding:.25em;right:0;text-overflow:ellipsis;top:0;transform:scale(.25);transform-origin:top right}.fa-layers-bottom-right{bottom:0;right:0;top:auto;transform:scale(.25);transform-origin:bottom right}.fa-layers-bottom-left{bottom:0;left:0;right:auto;top:auto;transform:scale(.25);transform-origin:bottom left}.fa-layers-top-right{right:0;top:0;transform:scale(.25);transform-origin:top right}.fa-layers-top-left{left:0;right:auto;top:0;transform:scale(.25);transform-origin:top left}.fa-lg{font-size:1.33333em;line-height:.75em;vertical-align:-.0667em}.fa-xs{font-size:.75em}.fa-sm{font-size:.875em}.fa-1x{font-size:1em}.fa-2x{font-size:2em}.fa-3x{font-size:3em}.fa-4x{font-size:4em}.fa-5x{font-size:5em}.fa-6x{font-size:6em}.fa-7x{font-size:7em}.fa-8x{font-size:8em}.fa-9x{font-size:9em}.fa-10x{font-size:10em}.fa-fw{text-align:center;width:1.25em}.fa-ul{list-style-type:none;margin-left:2.5em;padding-left:0}.fa-ul>li{position:relative}.fa-li{left:-2em;position:absolute;text-align:center;width:2em;line-height:inherit}.fa-border{border:.08em solid #eee;border-radius:.1em;padding:.2em .25em .15em}.fa-pull-left{float:left}.fa-pull-right{float:right}.fa.fa-pull-left,.fab.fa-pull-left,.fal.fa-pull-left,.far.fa-pull-left,.fas.fa-pull-left{margin-right:.3em}.fa.fa-pull-right,.fab.fa-pull-right,.fal.fa-pull-right,.far.fa-pull-right,.fas.fa-pull-right{margin-left:.3em}.fa-spin{-webkit-animation:fa-spin 2s linear infinite;animation:fa-spin 2s linear infinite}.fa-pulse{-webkit-animation:fa-spin 1s steps(8) infinite;animation:fa-spin 1s steps(8) infinite}@-webkit-keyframes fa-spin{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}@keyframes fa-spin{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}.fa-rotate-90{-ms-filter:\"progid:DXImageTransform.Microsoft.BasicImage(rotation=1)\";transform:rotate(90deg)}.fa-rotate-180{-ms-filter:\"progid:DXImageTransform.Microsoft.BasicImage(rotation=2)\";transform:rotate(180deg)}.fa-rotate-270{-ms-filter:\"progid:DXImageTransform.Microsoft.BasicImage(rotation=3)\";transform:rotate(270deg)}.fa-flip-horizontal{-ms-filter:\"progid:DXImageTransform.Microsoft.BasicImage(rotation=0, mirror=1)\";transform:scaleX(-1)}.fa-flip-vertical{transform:scaleY(-1)}.fa-flip-both,.fa-flip-horizontal.fa-flip-vertical,.fa-flip-vertical{-ms-filter:\"progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)\"}.fa-flip-both,.fa-flip-horizontal.fa-flip-vertical{transform:scale(-1)}:root .fa-flip-both,:root .fa-flip-horizontal,:root .fa-flip-vertical,:root .fa-rotate-90,:root .fa-rotate-180,:root .fa-rotate-270{filter:none}.fa-stack{display:inline-block;height:2em;position:relative;width:2.5em}.fa-stack-1x,.fa-stack-2x{bottom:0;left:0;margin:auto;position:absolute;right:0;top:0}.svg-inline--fa.fa-stack-1x{height:1em;width:1.25em}.svg-inline--fa.fa-stack-2x{height:2em;width:2.5em}.fa-inverse{color:#fff}.sr-only{border:0;clip:rect(0,0,0,0);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px}.sr-only-focusable:active,.sr-only-focusable:focus{clip:auto;height:auto;margin:0;overflow:visible;position:static;width:auto}.svg-inline--fa .fa-primary{fill:currentColor;fill:var(--fa-primary-color,currentColor);opacity:1;opacity:var(--fa-primary-opacity,1)}.svg-inline--fa .fa-secondary{fill:currentColor;fill:var(--fa-secondary-color,currentColor)}.svg-inline--fa .fa-secondary,.svg-inline--fa.fa-swap-opacity .fa-primary{opacity:.4;opacity:var(--fa-secondary-opacity,.4)}.svg-inline--fa.fa-swap-opacity .fa-secondary{opacity:1;opacity:var(--fa-primary-opacity,1)}.svg-inline--fa mask .fa-primary,.svg-inline--fa mask .fa-secondary{fill:#000}.fad.fa-inverse{color:#fff}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(66);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(4).default("3133b3f4", content, true)

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "@media(max-width:543px){.popular__container .img-fluid{height:170px!important;-o-object-fit:cover!important;object-fit:cover!important}.other__item__banner--carousel .b-carousel .carousel-inner .b-carousel-slide img{min-height:250px!important}}.other__item__banner--carousel .b-carousel .carousel-inner .b-carousel-slide img{min-height:450px}.success-info{position:fixed;top:10px;right:20px;width:320px;z-index:12345}div.card-row{display:flex;margin:0 -10px;flex-wrap:wrap}.hover-shadow:hover{box-shadow:0 1px 10px rgba(0,0,0,.18)}div.card-5{width:20%;padding:0 10px}div.card-4{width:25%;padding:0 10px}div.card-3{width:33.3333333333%;padding:0 10px}@media(max-width:1020px){div.card-4,div.card-5{width:33.3333333333%}}@media(max-width:768px){div.card-3,div.card-4,div.card-5{width:50%}.catalog__container{padding-top:5px!important}.filtr__section .catalog__page__filtr__box{position:relative!important;top:unset!important}.catalog__container .catalog__filtraiton__box .filtraiton__form__box .filtraiton__form--submit{margin-bottom:0!important}.catalog__container .catalog__page__about{padding-left:0!important}}@-webkit-keyframes move__360{0%{transform:translateX(0deg)}to{transform:translateX(1turn)}}@keyframes move__360{0%{transform:translateX(0deg)}to{transform:translateX(1turn)}}h6.error-text{font-size:12px;color:red;margin-bottom:0}h1.title-form{font-size:24px;text-align:center}.popular__container{margin-top:40px}.popular__container .popular__heading{font-family:Roboto,sans-serif;font-weight:500;font-size:48px;color:#f7931e;margin-bottom:40px;text-shadow:0 0 3px rgba(247,147,30,.3);display:inline-block}.popular__container .popular__item-box{display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap}.popular__container .popular__item-box:after{content:\"\";flex:0 1 32%}.popular__container .popular__item-box .popular__items{flex:0 0 auto;width:222px;height:370px;background-color:#fff;box-shadow:0 1px 3px rgba(0,0,0,.12);border-radius:5px;overflow:hidden;margin:0 2px 37px;cursor:pointer;transition:all .2s}.popular__container .popular__item-box .popular__items:hover{transform:scale(1.07)}.popular__container .popular__item-box .popular__items:hover:after{opacity:0}.popular__container .popular__item-box .popular__items:active{outline:none;transform:scale(1.03)}.popular__container .popular__item-box .popular__items .popular__items__img{width:222px;height:222px}.popular__container .popular__item-box .popular__items .popular__items__desription{padding-left:16px;display:flex;flex-direction:column;justify-content:flex-start;position:relative}.popular__container .popular__item-box .popular__items .popular__items__desription .name__rating{margin-top:2px;display:flex;justify-content:space-between;align-items:center;padding-right:10px}.popular__container .popular__item-box .popular__items .popular__items__desription .name__rating .magazine__item--rating{display:flex;align-items:center}.popular__container .popular__item-box .popular__items .popular__items__desription .name__rating .magazine__item--rating img{width:12px;height:12px;margin-right:2px}.popular__container .popular__item-box .popular__items .popular__items__desription .name__rating .magazine__item--rating span{color:#666;opacity:.7;font-size:10px}.popular__container .popular__item-box .popular__items .popular__items__desription--name{margin-top:5px;font-family:Roboto;font-weight:500;font-size:14px;line-height:16px;opacity:.7;color:#666}.popular__container .popular__item-box .popular__items .popular__items__desription--categorie{margin:9px 0;font-family:Roboto;font-weight:700;font-size:16px;line-height:100%;color:#000;height:60px}.popular__container .popular__item-box .popular__items .popular__items__desription--price{font-family:Roboto;font-weight:700;font-size:20px;line-height:100%;color:#219ebc}.popular__container .popular__item-box .popular__items .popular__items__desription--old--price{margin-bottom:2px;font-size:14px;color:#f7931e;text-decoration:line-through}.popular__container .popular__btn,.popular__container .popular__btn:link,.popular__container .popular__btn:visited{display:block;border-radius:5px;transition:all .2s;width:224px;height:50px;margin:20px auto 0;text-align:center;padding:10px;text-decoration:none;font-family:inherit;font-weight:500;font-size:18px;color:hsla(0,0%,100%,.9);background-color:#f7931e;border:none;cursor:pointer}.popular__container .popular__btn:hover{transform:scale(1.07)}.popular__container .popular__btn:hover:after{opacity:0}.popular__container .popular__btn:active{outline:none;transform:scale(1.03)}.popular__container .popular__btn:active,.popular__container .popular__btn:hover{background-color:#fff;color:#f7931e;border:1px solid #f7931e}.popular__container .popular__dropdown__box{position:relative}.popular__container .popular__dropdown__box .popular__dropdown--btn{width:170px;height:36px;border:1px solid #f7931e;border-radius:5px;background-color:transparent;padding:0 10px;font-family:Roboto;font-weight:500;font-size:16px;color:#f7931e;display:flex;justify-content:space-between;align-items:center}.popular__container .popular__dropdown__box .popular__dropdown--btn:hover+.popular__dropdown__content{visibility:visible;opacity:1}.popular__container .popular__dropdown__box .popular__dropdown__content{position:absolute;left:0;top:36px;width:170px;display:flex;flex-direction:column;justify-content:center;transition:all .2s;visibility:hidden;opacity:0;border-radius:5px;overflow:hidden;box-shadow:0 2px 6px rgba(0,0,0,.3)}.popular__container .popular__dropdown__box .popular__dropdown__content .popular__dropdown--link{color:#f7931e;background-color:#fcf6f6;padding:5px;text-decoration:none}.popular__container .popular__dropdown__box .popular__dropdown__content .popular__dropdown--link:active,.popular__container .popular__dropdown__box .popular__dropdown__content .popular__dropdown--link:hover{font-weight:500}.popular__container .popular__dropdown__box .popular__dropdown__content:active,.popular__container .popular__dropdown__box .popular__dropdown__content:hover{visibility:visible;opacity:1}@media only screen and (max-width:1440px)and (min-width:1200px){.popular__container .popular__item-box{padding:0 4px}}@media only screen and (max-width:1200px)and (min-width:765px){.popular__container{padding:20px}.popular__container .popular__item-box .popular__items{width:229px;height:381.67px;margin-bottom:22px}.popular__container .popular__item-box .popular__items .popular__items__img{width:230px;height:230px}}@media only screen and (max-width:765px){.popular__container{padding:16px}.popular__container .popular__heading{font-size:24px;margin-bottom:28px}.popular__container .popular__item-box .popular__items{width:164px;height:273px;margin-bottom:14px}.popular__container .popular__item-box .popular__items .popular__items__img{width:164px;height:164px}.popular__container .popular__item-box .popular__items .popular__items__desription{padding-left:12px}.popular__container .popular__item-box .popular__items .popular__items__desription--name{margin-top:3.7px;font-size:10px}.popular__container .popular__item-box .popular__items .popular__items__desription--categorie{margin:6.6px 0 0;font-size:12px;height:50px;padding:0}.popular__container .popular__item-box .popular__items .popular__items__desription--price{font-size:14px}.popular__container .popular__item-box .popular__items .popular__items__desription--old--price{font-size:10px}.popular__container .popular__btn,.popular__container .popular__btn:link,.popular__container .popular__btn:visited{width:160px;height:35px;margin-top:18px;padding:8px;font-size:12px}}@media only screen and (max-width:365px){.popular__container{padding:14px}.popular__container .popular__heading{font-size:22px;margin-bottom:12px}.popular__container .popular__item-box .popular__items{width:140px;height:245px}.popular__container .popular__item-box .popular__items .popular__items__img{width:140px;height:140px}.popular__container .popular__item-box .popular__items .popular__items__desription--categorie{margin-top:3.6px;font-size:12px;height:2.8em;padding:0}.popular__container .popular__item-box .popular__items .popular__items__desription--price{font-size:12px}.popular__container .popular__item-box .popular__items .popular__items__desription--old--price{font-size:9px;bottom:17px}}div.title-box{padding:40px 0}div.title-box ul li,div.title-box ul li a{display:inline-block;font-weight:400;font-size:15px;line-height:18px;color:#000}div.title-box ul li a:hover{color:#f7931e}div.fixvh-category{z-index:100;width:100%;background-color:#333;opacity:.5}div.category-modal,div.fixvh-category{position:fixed;top:0;left:0;height:100vh;z-index:1000}div.category-modal{width:90%;transform:translateX(0);opacity:1;transition:.2s}div.category-modal div.category-nav{width:100%;height:100%;background-color:#fff;position:relative;z-index:101;display:flex;padding:15px 0}div.category-modal div.category-nav button.close-btn{position:absolute;width:30px;height:30px;border-radius:100%;background-color:#f7931e;border:none;right:-41px;top:8px;z-index:101}div.category-modal div.category-nav button.close-btn .icon-times{color:#fff}div.category-modal div.category-nav div.scroll-modal{overflow-y:scroll;overflow-x:hidden}div.category-modal div.category-nav div.category-left{width:400px;padding:0 15px;border-right:1px solid #bbb}div.category-modal div.category-nav div.category-left ul{list-style-type:none;padding-right:15px}div.category-modal div.category-nav div.category-left li button{display:block;padding:8px 15px;border-radius:5px;font-size:16px;color:#333;font-weight:500;border:none;background-color:transparent;width:100%;text-align:left}div.category-modal div.category-nav div.category-left li button:hover{color:#f7931e}div.category-modal div.category-nav div.category-left li.active-li button{background-color:#f7931e;color:#fff}div.category-modal div.category-nav div.category-content{width:calc(100% - 400px);padding:0 30px;position:relative}div.category-modal div.category-nav div.category-content h3.category-title{font-size:24px;font-weight:500;margin-bottom:25px}div.category-modal div.category-nav div.category-content div.visible-all a{font-size:16px;color:#888;margin-bottom:5px;display:block}div.category-modal div.category-nav div.category-content a{transition:.2s}div.category-modal div.category-nav div.category-content ul{list-style-type:none;margin-bottom:25px}div.category-modal div.category-nav div.category-content ul a{font-size:16px;color:#888;margin-bottom:5px;display:block}div.category-modal div.category-nav div.category-content a.click-parent{font-size:18px;margin-bottom:10px;color:#333;display:block;font-weight:500}div.category-modal div.category-nav div.category-content a:hover{color:#f7931e!important}div.category-modal div.category-nav div.scroll-modal::-webkit-scrollbar{width:5px}div.category-modal div.category-nav div.scroll-modal::-webkit-scrollbar-track{background:#f1f1f1}div.category-modal div.category-nav div.scroll-modal::-webkit-scrollbar-thumb{background:#f7931e;border-radius:5px}div.category-modal div.category-nav div.scroll-modal::-webkit-scrollbar-thumb:hover{background:#f7931e}div.hidden-category{transform:translateX(-104%);opacity:0}div.category-mobile{position:fixed;z-index:1234454545;top:0;left:0;width:100%;height:100vh;background-color:#fff;padding:15px}div.category-mobile a.visible-all-mobile{font-size:16px;color:#333}div.category-mobile div.title-t{display:flex;justify-content:space-between;align-items:center}div.category-mobile div.title-t h3{font-size:24px;margin-bottom:0}div.category-mobile div.title-t button{border:none;background-color:transparent}div.category-mobile div.title-t button .close-mobile{font-size:26px;color:#f7931e}div.category-mobile div.category-acc{margin-top:20px;max-height:calc(100vh - 100px);overflow-y:scroll}div.category-mobile div.category-acc div.acc-item{margin-bottom:5px}div.category-mobile div.category-acc div.acc-item button{width:100%;display:flex;justify-content:space-between;align-items:center;background:#fff7ec;padding:10px 15px;border-radius:5px;border:1px solid #fff7ec}div.category-mobile div.category-acc div.acc-item button b{font-size:18px}div.category-mobile div.category-acc div.acc-item button .icon-down{font-size:18px;color:#f7931e}div.category-mobile div.category-acc div.acc-item button .rotate{transform:rotate(-180deg)}div.category-mobile div.category-acc div.acc-item div.acc-content{padding:15px}div.category-mobile div.category-acc div.acc-item div.acc-content ul{list-style-type:none}div.category-mobile div.category-acc div.acc-item div.acc-content ul li a{color:#333;display:block;font-size:16px!important;font-weight:700;margin-bottom:5px}div.category-mobile div.category-acc div.acc-item div.acc-content ul li a:active{color:#f7931e}div.category-mobile div.category-acc div.acc-item div.acc-content ul li ul{margin-bottom:15px}div.category-mobile div.category-acc div.acc-item div.acc-content ul li ul li a{font-weight:400;color:#777}@media(max-width:800px){div.category-modal div.category-nav div.category-left{width:280px}div.category-modal div.category-nav div.category-content{width:calc(100% - 280px)}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 67 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_default_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(30);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_default_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_default_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_default_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_default_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800;900&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 69 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_default_vue_vue_type_style_index_1_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(31);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_default_vue_vue_type_style_index_1_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_default_vue_vue_type_style_index_1_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_default_vue_vue_type_style_index_1_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_default_vue_vue_type_style_index_1_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "@media(max-width:543px){.popular__container .img-fluid{height:170px!important;-o-object-fit:cover!important;object-fit:cover!important}.other__item__banner--carousel .b-carousel .carousel-inner .b-carousel-slide img{min-height:250px!important}}.other__item__banner--carousel .b-carousel .carousel-inner .b-carousel-slide img{min-height:450px}.success-info{position:fixed;top:10px;right:20px;width:320px;z-index:12345}div.card-row{display:flex;margin:0 -10px;flex-wrap:wrap}.hover-shadow:hover{box-shadow:0 1px 10px rgba(0,0,0,.18)}div.card-5{width:20%;padding:0 10px}div.card-4{width:25%;padding:0 10px}div.card-3{width:33.3333333333%;padding:0 10px}@media(max-width:1020px){div.card-4,div.card-5{width:33.3333333333%}}@media(max-width:768px){div.card-3,div.card-4,div.card-5{width:50%}.catalog__container{padding-top:5px!important}.filtr__section .catalog__page__filtr__box{position:relative!important;top:unset!important}.catalog__container .catalog__filtraiton__box .filtraiton__form__box .filtraiton__form--submit{margin-bottom:0!important}.catalog__container .catalog__page__about{padding-left:0!important}}@-webkit-keyframes move__360{0%{transform:translateX(0deg)}to{transform:translateX(1turn)}}@keyframes move__360{0%{transform:translateX(0deg)}to{transform:translateX(1turn)}}h6.error-text{font-size:12px;color:red;margin-bottom:0}h1.title-form{font-size:24px;text-align:center}.popular__container{margin-top:40px}.popular__container .popular__heading{font-family:Roboto,sans-serif;font-weight:500;font-size:48px;color:#f7931e;margin-bottom:40px;text-shadow:0 0 3px rgba(247,147,30,.3);display:inline-block}.popular__container .popular__item-box{display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap}.popular__container .popular__item-box:after{content:\"\";flex:0 1 32%}.popular__container .popular__item-box .popular__items{flex:0 0 auto;width:222px;height:370px;background-color:#fff;box-shadow:0 1px 3px rgba(0,0,0,.12);border-radius:5px;overflow:hidden;margin:0 2px 37px;cursor:pointer;transition:all .2s}.popular__container .popular__item-box .popular__items:hover{transform:scale(1.07)}.popular__container .popular__item-box .popular__items:hover:after{opacity:0}.popular__container .popular__item-box .popular__items:active{outline:none;transform:scale(1.03)}.popular__container .popular__item-box .popular__items .popular__items__img{width:222px;height:222px}.popular__container .popular__item-box .popular__items .popular__items__desription{padding-left:16px;display:flex;flex-direction:column;justify-content:flex-start;position:relative}.popular__container .popular__item-box .popular__items .popular__items__desription .name__rating{margin-top:2px;display:flex;justify-content:space-between;align-items:center;padding-right:10px}.popular__container .popular__item-box .popular__items .popular__items__desription .name__rating .magazine__item--rating{display:flex;align-items:center}.popular__container .popular__item-box .popular__items .popular__items__desription .name__rating .magazine__item--rating img{width:12px;height:12px;margin-right:2px}.popular__container .popular__item-box .popular__items .popular__items__desription .name__rating .magazine__item--rating span{color:#666;opacity:.7;font-size:10px}.popular__container .popular__item-box .popular__items .popular__items__desription--name{margin-top:5px;font-family:Roboto;font-weight:500;font-size:14px;line-height:16px;opacity:.7;color:#666}.popular__container .popular__item-box .popular__items .popular__items__desription--categorie{margin:9px 0;font-family:Roboto;font-weight:700;font-size:16px;line-height:100%;color:#000;height:60px}.popular__container .popular__item-box .popular__items .popular__items__desription--price{font-family:Roboto;font-weight:700;font-size:20px;line-height:100%;color:#219ebc}.popular__container .popular__item-box .popular__items .popular__items__desription--old--price{margin-bottom:2px;font-size:14px;color:#f7931e;text-decoration:line-through}.popular__container .popular__btn,.popular__container .popular__btn:link,.popular__container .popular__btn:visited{display:block;border-radius:5px;transition:all .2s;width:224px;height:50px;margin:20px auto 0;text-align:center;padding:10px;text-decoration:none;font-family:inherit;font-weight:500;font-size:18px;color:hsla(0,0%,100%,.9);background-color:#f7931e;border:none;cursor:pointer}.popular__container .popular__btn:hover{transform:scale(1.07)}.popular__container .popular__btn:hover:after{opacity:0}.popular__container .popular__btn:active{outline:none;transform:scale(1.03)}.popular__container .popular__btn:active,.popular__container .popular__btn:hover{background-color:#fff;color:#f7931e;border:1px solid #f7931e}.popular__container .popular__dropdown__box{position:relative}.popular__container .popular__dropdown__box .popular__dropdown--btn{width:170px;height:36px;border:1px solid #f7931e;border-radius:5px;background-color:transparent;padding:0 10px;font-family:Roboto;font-weight:500;font-size:16px;color:#f7931e;display:flex;justify-content:space-between;align-items:center}.popular__container .popular__dropdown__box .popular__dropdown--btn:hover+.popular__dropdown__content{visibility:visible;opacity:1}.popular__container .popular__dropdown__box .popular__dropdown__content{position:absolute;left:0;top:36px;width:170px;display:flex;flex-direction:column;justify-content:center;transition:all .2s;visibility:hidden;opacity:0;border-radius:5px;overflow:hidden;box-shadow:0 2px 6px rgba(0,0,0,.3)}.popular__container .popular__dropdown__box .popular__dropdown__content .popular__dropdown--link{color:#f7931e;background-color:#fcf6f6;padding:5px;text-decoration:none}.popular__container .popular__dropdown__box .popular__dropdown__content .popular__dropdown--link:active,.popular__container .popular__dropdown__box .popular__dropdown__content .popular__dropdown--link:hover{font-weight:500}.popular__container .popular__dropdown__box .popular__dropdown__content:active,.popular__container .popular__dropdown__box .popular__dropdown__content:hover{visibility:visible;opacity:1}@media only screen and (max-width:1440px)and (min-width:1200px){.popular__container .popular__item-box{padding:0 4px}}@media only screen and (max-width:1200px)and (min-width:765px){.popular__container{padding:20px}.popular__container .popular__item-box .popular__items{width:229px;height:381.67px;margin-bottom:22px}.popular__container .popular__item-box .popular__items .popular__items__img{width:230px;height:230px}}@media only screen and (max-width:765px){.popular__container{padding:16px}.popular__container .popular__heading{font-size:24px;margin-bottom:28px}.popular__container .popular__item-box .popular__items{width:164px;height:273px;margin-bottom:14px}.popular__container .popular__item-box .popular__items .popular__items__img{width:164px;height:164px}.popular__container .popular__item-box .popular__items .popular__items__desription{padding-left:12px}.popular__container .popular__item-box .popular__items .popular__items__desription--name{margin-top:3.7px;font-size:10px}.popular__container .popular__item-box .popular__items .popular__items__desription--categorie{margin:6.6px 0 0;font-size:12px;height:50px;padding:0}.popular__container .popular__item-box .popular__items .popular__items__desription--price{font-size:14px}.popular__container .popular__item-box .popular__items .popular__items__desription--old--price{font-size:10px}.popular__container .popular__btn,.popular__container .popular__btn:link,.popular__container .popular__btn:visited{width:160px;height:35px;margin-top:18px;padding:8px;font-size:12px}}@media only screen and (max-width:365px){.popular__container{padding:14px}.popular__container .popular__heading{font-size:22px;margin-bottom:12px}.popular__container .popular__item-box .popular__items{width:140px;height:245px}.popular__container .popular__item-box .popular__items .popular__items__img{width:140px;height:140px}.popular__container .popular__item-box .popular__items .popular__items__desription--categorie{margin-top:3.6px;font-size:12px;height:2.8em;padding:0}.popular__container .popular__item-box .popular__items .popular__items__desription--price{font-size:12px}.popular__container .popular__item-box .popular__items .popular__items__desription--old--price{font-size:9px;bottom:17px}}div.title-box{padding:40px 0}div.title-box ul li,div.title-box ul li a{display:inline-block;font-weight:400;font-size:15px;line-height:18px;color:#000}div.title-box ul li a:hover{color:#f7931e}div.fixvh-category{z-index:100;width:100%;background-color:#333;opacity:.5}div.category-modal,div.fixvh-category{position:fixed;top:0;left:0;height:100vh;z-index:1000}div.category-modal{width:90%;transform:translateX(0);opacity:1;transition:.2s}div.category-modal div.category-nav{width:100%;height:100%;background-color:#fff;position:relative;z-index:101;display:flex;padding:15px 0}div.category-modal div.category-nav button.close-btn{position:absolute;width:30px;height:30px;border-radius:100%;background-color:#f7931e;border:none;right:-41px;top:8px;z-index:101}div.category-modal div.category-nav button.close-btn .icon-times{color:#fff}div.category-modal div.category-nav div.scroll-modal{overflow-y:scroll;overflow-x:hidden}div.category-modal div.category-nav div.category-left{width:400px;padding:0 15px;border-right:1px solid #bbb}div.category-modal div.category-nav div.category-left ul{list-style-type:none;padding-right:15px}div.category-modal div.category-nav div.category-left li button{display:block;padding:8px 15px;border-radius:5px;font-size:16px;color:#333;font-weight:500;border:none;background-color:transparent;width:100%;text-align:left}div.category-modal div.category-nav div.category-left li button:hover{color:#f7931e}div.category-modal div.category-nav div.category-left li.active-li button{background-color:#f7931e;color:#fff}div.category-modal div.category-nav div.category-content{width:calc(100% - 400px);padding:0 30px;position:relative}div.category-modal div.category-nav div.category-content h3.category-title{font-size:24px;font-weight:500;margin-bottom:25px}div.category-modal div.category-nav div.category-content div.visible-all a{font-size:16px;color:#888;margin-bottom:5px;display:block}div.category-modal div.category-nav div.category-content a{transition:.2s}div.category-modal div.category-nav div.category-content ul{list-style-type:none;margin-bottom:25px}div.category-modal div.category-nav div.category-content ul a{font-size:16px;color:#888;margin-bottom:5px;display:block}div.category-modal div.category-nav div.category-content a.click-parent{font-size:18px;margin-bottom:10px;color:#333;display:block;font-weight:500}div.category-modal div.category-nav div.category-content a:hover{color:#f7931e!important}div.category-modal div.category-nav div.scroll-modal::-webkit-scrollbar{width:5px}div.category-modal div.category-nav div.scroll-modal::-webkit-scrollbar-track{background:#f1f1f1}div.category-modal div.category-nav div.scroll-modal::-webkit-scrollbar-thumb{background:#f7931e;border-radius:5px}div.category-modal div.category-nav div.scroll-modal::-webkit-scrollbar-thumb:hover{background:#f7931e}div.hidden-category{transform:translateX(-104%);opacity:0}div.category-mobile{position:fixed;z-index:1234454545;top:0;left:0;width:100%;height:100vh;background-color:#fff;padding:15px}div.category-mobile a.visible-all-mobile{font-size:16px;color:#333}div.category-mobile div.title-t{display:flex;justify-content:space-between;align-items:center}div.category-mobile div.title-t h3{font-size:24px;margin-bottom:0}div.category-mobile div.title-t button{border:none;background-color:transparent}div.category-mobile div.title-t button .close-mobile{font-size:26px;color:#f7931e}div.category-mobile div.category-acc{margin-top:20px;max-height:calc(100vh - 100px);overflow-y:scroll}div.category-mobile div.category-acc div.acc-item{margin-bottom:5px}div.category-mobile div.category-acc div.acc-item button{width:100%;display:flex;justify-content:space-between;align-items:center;background:#fff7ec;padding:10px 15px;border-radius:5px;border:1px solid #fff7ec}div.category-mobile div.category-acc div.acc-item button b{font-size:18px}div.category-mobile div.category-acc div.acc-item button .icon-down{font-size:18px;color:#f7931e}div.category-mobile div.category-acc div.acc-item button .rotate{transform:rotate(-180deg)}div.category-mobile div.category-acc div.acc-item div.acc-content{padding:15px}div.category-mobile div.category-acc div.acc-item div.acc-content ul{list-style-type:none}div.category-mobile div.category-acc div.acc-item div.acc-content ul li a{color:#333;display:block;font-size:16px!important;font-weight:700;margin-bottom:5px}div.category-mobile div.category-acc div.acc-item div.acc-content ul li a:active{color:#f7931e}div.category-mobile div.category-acc div.acc-item div.acc-content ul li ul{margin-bottom:15px}div.category-mobile div.category-acc div.acc-item div.acc-content ul li ul li a{font-weight:400;color:#777}@media(max-width:800px){div.category-modal div.category-nav div.category-left{width:280px}div.category-modal div.category-nav div.category-content{width:calc(100% - 280px)}}body{min-height:100vh}.layout{overflow:hidden}.header_back{height:81px}@media only screen and (max-width:766px){.header_back{height:58px}}@media only screen and (max-width:560px){.header_back{height:52px}}@media only screen and (max-width:400px){.header_back{height:47px}}*{margin:0;padding:0;font-family:-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,Oxygen,Ubuntu,Cantarell,\"Open Sans\",\"Helvetica Neue\",sans-serif}.container{max-width:1200px}a:hover{text-decoration:none}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 71 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_style_index_0_id_2e32ab3b_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(32);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_style_index_0_id_2e32ab3b_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_style_index_0_id_2e32ab3b_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_style_index_0_id_2e32ab3b_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_style_index_0_id_2e32ab3b_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "@media(max-width:543px){.popular__container .img-fluid[data-v-2e32ab3b]{height:170px!important;-o-object-fit:cover!important;object-fit:cover!important}.other__item__banner--carousel .b-carousel .carousel-inner .b-carousel-slide img[data-v-2e32ab3b]{min-height:250px!important}}.other__item__banner--carousel .b-carousel .carousel-inner .b-carousel-slide img[data-v-2e32ab3b]{min-height:450px}.success-info[data-v-2e32ab3b]{position:fixed;top:10px;right:20px;width:320px;z-index:12345}div.card-row[data-v-2e32ab3b]{display:flex;margin:0 -10px;flex-wrap:wrap}.hover-shadow[data-v-2e32ab3b]:hover{box-shadow:0 1px 10px rgba(0,0,0,.18)}div.card-5[data-v-2e32ab3b]{width:20%;padding:0 10px}div.card-4[data-v-2e32ab3b]{width:25%;padding:0 10px}div.card-3[data-v-2e32ab3b]{width:33.3333333333%;padding:0 10px}@media(max-width:1020px){div.card-4[data-v-2e32ab3b],div.card-5[data-v-2e32ab3b]{width:33.3333333333%}}@media(max-width:768px){div.card-3[data-v-2e32ab3b],div.card-4[data-v-2e32ab3b],div.card-5[data-v-2e32ab3b]{width:50%}.catalog__container[data-v-2e32ab3b]{padding-top:5px!important}.filtr__section .catalog__page__filtr__box[data-v-2e32ab3b]{position:relative!important;top:unset!important}.catalog__container .catalog__filtraiton__box .filtraiton__form__box .filtraiton__form--submit[data-v-2e32ab3b]{margin-bottom:0!important}.catalog__container .catalog__page__about[data-v-2e32ab3b]{padding-left:0!important}}@-webkit-keyframes move__360-data-v-2e32ab3b{0%{transform:translateX(0deg)}to{transform:translateX(1turn)}}@keyframes move__360-data-v-2e32ab3b{0%{transform:translateX(0deg)}to{transform:translateX(1turn)}}h6.error-text[data-v-2e32ab3b]{font-size:12px;color:red;margin-bottom:0}h1.title-form[data-v-2e32ab3b]{font-size:24px;text-align:center}.popular__container[data-v-2e32ab3b]{margin-top:40px}.popular__container .popular__heading[data-v-2e32ab3b]{font-family:Roboto,sans-serif;font-weight:500;font-size:48px;color:#f7931e;margin-bottom:40px;text-shadow:0 0 3px rgba(247,147,30,.3);display:inline-block}.popular__container .popular__item-box[data-v-2e32ab3b]{display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap}.popular__container .popular__item-box[data-v-2e32ab3b]:after{content:\"\";flex:0 1 32%}.popular__container .popular__item-box .popular__items[data-v-2e32ab3b]{flex:0 0 auto;width:222px;height:370px;background-color:#fff;box-shadow:0 1px 3px rgba(0,0,0,.12);border-radius:5px;overflow:hidden;margin:0 2px 37px;cursor:pointer;transition:all .2s}.popular__container .popular__item-box .popular__items[data-v-2e32ab3b]:hover{transform:scale(1.07)}.popular__container .popular__item-box .popular__items[data-v-2e32ab3b]:hover:after{opacity:0}.popular__container .popular__item-box .popular__items[data-v-2e32ab3b]:active{outline:none;transform:scale(1.03)}.popular__container .popular__item-box .popular__items .popular__items__img[data-v-2e32ab3b]{width:222px;height:222px}.popular__container .popular__item-box .popular__items .popular__items__desription[data-v-2e32ab3b]{padding-left:16px;display:flex;flex-direction:column;justify-content:flex-start;position:relative}.popular__container .popular__item-box .popular__items .popular__items__desription .name__rating[data-v-2e32ab3b]{margin-top:2px;display:flex;justify-content:space-between;align-items:center;padding-right:10px}.popular__container .popular__item-box .popular__items .popular__items__desription .name__rating .magazine__item--rating[data-v-2e32ab3b]{display:flex;align-items:center}.popular__container .popular__item-box .popular__items .popular__items__desription .name__rating .magazine__item--rating img[data-v-2e32ab3b]{width:12px;height:12px;margin-right:2px}.popular__container .popular__item-box .popular__items .popular__items__desription .name__rating .magazine__item--rating span[data-v-2e32ab3b]{color:#666;opacity:.7;font-size:10px}.popular__container .popular__item-box .popular__items .popular__items__desription--name[data-v-2e32ab3b]{margin-top:5px;font-family:Roboto;font-weight:500;font-size:14px;line-height:16px;opacity:.7;color:#666}.popular__container .popular__item-box .popular__items .popular__items__desription--categorie[data-v-2e32ab3b]{margin:9px 0;font-family:Roboto;font-weight:700;font-size:16px;line-height:100%;color:#000;height:60px}.popular__container .popular__item-box .popular__items .popular__items__desription--price[data-v-2e32ab3b]{font-family:Roboto;font-weight:700;font-size:20px;line-height:100%;color:#219ebc}.popular__container .popular__item-box .popular__items .popular__items__desription--old--price[data-v-2e32ab3b]{margin-bottom:2px;font-size:14px;color:#f7931e;text-decoration:line-through}.popular__container .popular__btn[data-v-2e32ab3b],.popular__container .popular__btn[data-v-2e32ab3b]:link,.popular__container .popular__btn[data-v-2e32ab3b]:visited{display:block;border-radius:5px;transition:all .2s;width:224px;height:50px;margin:20px auto 0;text-align:center;padding:10px;text-decoration:none;font-family:inherit;font-weight:500;font-size:18px;color:hsla(0,0%,100%,.9);background-color:#f7931e;border:none;cursor:pointer}.popular__container .popular__btn[data-v-2e32ab3b]:hover{transform:scale(1.07)}.popular__container .popular__btn[data-v-2e32ab3b]:hover:after{opacity:0}.popular__container .popular__btn[data-v-2e32ab3b]:active{outline:none;transform:scale(1.03)}.popular__container .popular__btn[data-v-2e32ab3b]:active,.popular__container .popular__btn[data-v-2e32ab3b]:hover{background-color:#fff;color:#f7931e;border:1px solid #f7931e}.popular__container .popular__dropdown__box[data-v-2e32ab3b]{position:relative}.popular__container .popular__dropdown__box .popular__dropdown--btn[data-v-2e32ab3b]{width:170px;height:36px;border:1px solid #f7931e;border-radius:5px;background-color:transparent;padding:0 10px;font-family:Roboto;font-weight:500;font-size:16px;color:#f7931e;display:flex;justify-content:space-between;align-items:center}.popular__container .popular__dropdown__box .popular__dropdown--btn:hover+.popular__dropdown__content[data-v-2e32ab3b]{visibility:visible;opacity:1}.popular__container .popular__dropdown__box .popular__dropdown__content[data-v-2e32ab3b]{position:absolute;left:0;top:36px;width:170px;display:flex;flex-direction:column;justify-content:center;transition:all .2s;visibility:hidden;opacity:0;border-radius:5px;overflow:hidden;box-shadow:0 2px 6px rgba(0,0,0,.3)}.popular__container .popular__dropdown__box .popular__dropdown__content .popular__dropdown--link[data-v-2e32ab3b]{color:#f7931e;background-color:#fcf6f6;padding:5px;text-decoration:none}.popular__container .popular__dropdown__box .popular__dropdown__content .popular__dropdown--link[data-v-2e32ab3b]:active,.popular__container .popular__dropdown__box .popular__dropdown__content .popular__dropdown--link[data-v-2e32ab3b]:hover{font-weight:500}.popular__container .popular__dropdown__box .popular__dropdown__content[data-v-2e32ab3b]:active,.popular__container .popular__dropdown__box .popular__dropdown__content[data-v-2e32ab3b]:hover{visibility:visible;opacity:1}@media only screen and (max-width:1440px)and (min-width:1200px){.popular__container .popular__item-box[data-v-2e32ab3b]{padding:0 4px}}@media only screen and (max-width:1200px)and (min-width:765px){.popular__container[data-v-2e32ab3b]{padding:20px}.popular__container .popular__item-box .popular__items[data-v-2e32ab3b]{width:229px;height:381.67px;margin-bottom:22px}.popular__container .popular__item-box .popular__items .popular__items__img[data-v-2e32ab3b]{width:230px;height:230px}}@media only screen and (max-width:765px){.popular__container[data-v-2e32ab3b]{padding:16px}.popular__container .popular__heading[data-v-2e32ab3b]{font-size:24px;margin-bottom:28px}.popular__container .popular__item-box .popular__items[data-v-2e32ab3b]{width:164px;height:273px;margin-bottom:14px}.popular__container .popular__item-box .popular__items .popular__items__img[data-v-2e32ab3b]{width:164px;height:164px}.popular__container .popular__item-box .popular__items .popular__items__desription[data-v-2e32ab3b]{padding-left:12px}.popular__container .popular__item-box .popular__items .popular__items__desription--name[data-v-2e32ab3b]{margin-top:3.7px;font-size:10px}.popular__container .popular__item-box .popular__items .popular__items__desription--categorie[data-v-2e32ab3b]{margin:6.6px 0 0;font-size:12px;height:50px;padding:0}.popular__container .popular__item-box .popular__items .popular__items__desription--price[data-v-2e32ab3b]{font-size:14px}.popular__container .popular__item-box .popular__items .popular__items__desription--old--price[data-v-2e32ab3b]{font-size:10px}.popular__container .popular__btn[data-v-2e32ab3b],.popular__container .popular__btn[data-v-2e32ab3b]:link,.popular__container .popular__btn[data-v-2e32ab3b]:visited{width:160px;height:35px;margin-top:18px;padding:8px;font-size:12px}}@media only screen and (max-width:365px){.popular__container[data-v-2e32ab3b]{padding:14px}.popular__container .popular__heading[data-v-2e32ab3b]{font-size:22px;margin-bottom:12px}.popular__container .popular__item-box .popular__items[data-v-2e32ab3b]{width:140px;height:245px}.popular__container .popular__item-box .popular__items .popular__items__img[data-v-2e32ab3b]{width:140px;height:140px}.popular__container .popular__item-box .popular__items .popular__items__desription--categorie[data-v-2e32ab3b]{margin-top:3.6px;font-size:12px;height:2.8em;padding:0}.popular__container .popular__item-box .popular__items .popular__items__desription--price[data-v-2e32ab3b]{font-size:12px}.popular__container .popular__item-box .popular__items .popular__items__desription--old--price[data-v-2e32ab3b]{font-size:9px;bottom:17px}}div.title-box[data-v-2e32ab3b]{padding:40px 0}div.title-box ul li[data-v-2e32ab3b],div.title-box ul li a[data-v-2e32ab3b]{display:inline-block;font-weight:400;font-size:15px;line-height:18px;color:#000}div.title-box ul li a[data-v-2e32ab3b]:hover{color:#f7931e}div.fixvh-category[data-v-2e32ab3b]{z-index:100;width:100%;background-color:#333;opacity:.5}div.category-modal[data-v-2e32ab3b],div.fixvh-category[data-v-2e32ab3b]{position:fixed;top:0;left:0;height:100vh;z-index:1000}div.category-modal[data-v-2e32ab3b]{width:90%;transform:translateX(0);opacity:1;transition:.2s}div.category-modal div.category-nav[data-v-2e32ab3b]{width:100%;height:100%;background-color:#fff;position:relative;z-index:101;display:flex;padding:15px 0}div.category-modal div.category-nav button.close-btn[data-v-2e32ab3b]{position:absolute;width:30px;height:30px;border-radius:100%;background-color:#f7931e;border:none;right:-41px;top:8px;z-index:101}div.category-modal div.category-nav button.close-btn .icon-times[data-v-2e32ab3b]{color:#fff}div.category-modal div.category-nav div.scroll-modal[data-v-2e32ab3b]{overflow-y:scroll;overflow-x:hidden}div.category-modal div.category-nav div.category-left[data-v-2e32ab3b]{width:400px;padding:0 15px;border-right:1px solid #bbb}div.category-modal div.category-nav div.category-left ul[data-v-2e32ab3b]{list-style-type:none;padding-right:15px}div.category-modal div.category-nav div.category-left li button[data-v-2e32ab3b]{display:block;padding:8px 15px;border-radius:5px;font-size:16px;color:#333;font-weight:500;border:none;background-color:transparent;width:100%;text-align:left}div.category-modal div.category-nav div.category-left li button[data-v-2e32ab3b]:hover{color:#f7931e}div.category-modal div.category-nav div.category-left li.active-li button[data-v-2e32ab3b]{background-color:#f7931e;color:#fff}div.category-modal div.category-nav div.category-content[data-v-2e32ab3b]{width:calc(100% - 400px);padding:0 30px;position:relative}div.category-modal div.category-nav div.category-content h3.category-title[data-v-2e32ab3b]{font-size:24px;font-weight:500;margin-bottom:25px}div.category-modal div.category-nav div.category-content div.visible-all a[data-v-2e32ab3b]{font-size:16px;color:#888;margin-bottom:5px;display:block}div.category-modal div.category-nav div.category-content a[data-v-2e32ab3b]{transition:.2s}div.category-modal div.category-nav div.category-content ul[data-v-2e32ab3b]{list-style-type:none;margin-bottom:25px}div.category-modal div.category-nav div.category-content ul a[data-v-2e32ab3b]{font-size:16px;color:#888;margin-bottom:5px;display:block}div.category-modal div.category-nav div.category-content a.click-parent[data-v-2e32ab3b]{font-size:18px;margin-bottom:10px;color:#333;display:block;font-weight:500}div.category-modal div.category-nav div.category-content a[data-v-2e32ab3b]:hover{color:#f7931e!important}div.category-modal div.category-nav div.scroll-modal[data-v-2e32ab3b]::-webkit-scrollbar{width:5px}div.category-modal div.category-nav div.scroll-modal[data-v-2e32ab3b]::-webkit-scrollbar-track{background:#f1f1f1}div.category-modal div.category-nav div.scroll-modal[data-v-2e32ab3b]::-webkit-scrollbar-thumb{background:#f7931e;border-radius:5px}div.category-modal div.category-nav div.scroll-modal[data-v-2e32ab3b]::-webkit-scrollbar-thumb:hover{background:#f7931e}div.hidden-category[data-v-2e32ab3b]{transform:translateX(-104%);opacity:0}div.category-mobile[data-v-2e32ab3b]{position:fixed;z-index:1234454545;top:0;left:0;width:100%;height:100vh;background-color:#fff;padding:15px}div.category-mobile a.visible-all-mobile[data-v-2e32ab3b]{font-size:16px;color:#333}div.category-mobile div.title-t[data-v-2e32ab3b]{display:flex;justify-content:space-between;align-items:center}div.category-mobile div.title-t h3[data-v-2e32ab3b]{font-size:24px;margin-bottom:0}div.category-mobile div.title-t button[data-v-2e32ab3b]{border:none;background-color:transparent}div.category-mobile div.title-t button .close-mobile[data-v-2e32ab3b]{font-size:26px;color:#f7931e}div.category-mobile div.category-acc[data-v-2e32ab3b]{margin-top:20px;max-height:calc(100vh - 100px);overflow-y:scroll}div.category-mobile div.category-acc div.acc-item[data-v-2e32ab3b]{margin-bottom:5px}div.category-mobile div.category-acc div.acc-item button[data-v-2e32ab3b]{width:100%;display:flex;justify-content:space-between;align-items:center;background:#fff7ec;padding:10px 15px;border-radius:5px;border:1px solid #fff7ec}div.category-mobile div.category-acc div.acc-item button b[data-v-2e32ab3b]{font-size:18px}div.category-mobile div.category-acc div.acc-item button .icon-down[data-v-2e32ab3b]{font-size:18px;color:#f7931e}div.category-mobile div.category-acc div.acc-item button .rotate[data-v-2e32ab3b]{transform:rotate(-180deg)}div.category-mobile div.category-acc div.acc-item div.acc-content[data-v-2e32ab3b]{padding:15px}div.category-mobile div.category-acc div.acc-item div.acc-content ul[data-v-2e32ab3b]{list-style-type:none}div.category-mobile div.category-acc div.acc-item div.acc-content ul li a[data-v-2e32ab3b]{color:#333;display:block;font-size:16px!important;font-weight:700;margin-bottom:5px}div.category-mobile div.category-acc div.acc-item div.acc-content ul li a[data-v-2e32ab3b]:active{color:#f7931e}div.category-mobile div.category-acc div.acc-item div.acc-content ul li ul[data-v-2e32ab3b]{margin-bottom:15px}div.category-mobile div.category-acc div.acc-item div.acc-content ul li ul li a[data-v-2e32ab3b]{font-weight:400;color:#777}@media(max-width:800px){div.category-modal div.category-nav div.category-left[data-v-2e32ab3b]{width:280px}div.category-modal div.category-nav div.category-content[data-v-2e32ab3b]{width:calc(100% - 280px)}}footer[data-v-2e32ab3b]{margin-top:30px;background:#023047}footer div.footer-top[data-v-2e32ab3b]{display:flex;padding:50px 0 80px;width:100%}footer div.footer-top div.info__item[data-v-2e32ab3b]{display:flex;margin-bottom:20px;align-items:center}footer div.footer-top div.info__item span[data-v-2e32ab3b]{margin-right:10px}footer div.footer-top div.info__item a[data-v-2e32ab3b],footer div.footer-top div.info__item h5[data-v-2e32ab3b]{font-weight:400;font-size:14px;line-height:120%;margin-bottom:0;color:#fff;max-width:178px;width:65%}footer div.footer-top ul.social-links[data-v-2e32ab3b]{list-style-type:none;padding-left:0;margin-bottom:30px}footer div.footer-top ul.social-links li[data-v-2e32ab3b]{display:inline-block;margin-right:20px}footer div.footer-top ul.footer[data-v-2e32ab3b]{list-style-type:none;padding-left:0;margin-bottom:0}footer div.footer-top ul.footer li a[data-v-2e32ab3b]{font-weight:400;font-size:16px;line-height:100%;transition:.3s;color:#fff;display:block;margin-bottom:20px}footer div.footer-top ul.footer li a[data-v-2e32ab3b]:hover{text-decoration:none;color:#f7931f}footer div.footer-top h2.footer__title[data-v-2e32ab3b]{font-weight:700;font-size:22px;line-height:100%;margin-bottom:22px;color:#fff}footer div.footer-top h2.lang[data-v-2e32ab3b]{margin-bottom:10px}footer div.footer-top #select-lang[data-v-2e32ab3b]:hover{cursor:pointer}footer div.footer-top div.footer__item[data-v-2e32ab3b]{width:20%}footer div.footer-top div.footer__item select[data-v-2e32ab3b]{border:1.4px solid #fff;outline:none;background-color:transparent;padding:3px 10px;border-radius:5px;text-align:left;font-family:Roboto,sans-serif;color:#fff;font-weight:500;font-size:16px;line-height:28px;display:flex;justify-content:space-between;align-items:center}footer div.footer-top div.footer__item select[data-v-2e32ab3b]:focus{background-color:#023047}footer div.footer-top div.footer__item--5 ul li a svg[data-v-2e32ab3b]:hover{cursor:pointer}footer div.footer-top div.footer__item--5 ul li a svg:hover path[data-v-2e32ab3b]{fill:#f7931f}footer div.footer-top div.footer__item--3 svg[data-v-2e32ab3b]{cursor:pointer}footer div.footer-bottom[data-v-2e32ab3b]{border-top:1px solid #666;padding:20px 0;display:flex;justify-content:space-between}footer div.footer-bottom h1[data-v-2e32ab3b]{font-weight:400;font-size:16px;line-height:100%;margin-bottom:0;color:#fff}@media only screen and (max-width:1200px)and (min-width:765px){footer div.footer-top[data-v-2e32ab3b]{display:inline-block;padding:50px 0 120px!important;position:relative;height:423px}footer div.footer-top div.footer__item[data-v-2e32ab3b]{display:inline-block;width:auto}footer div.footer-top div.footer__item--1[data-v-2e32ab3b]{position:absolute;top:31px;left:20px}footer div.footer-top div.footer__item--2[data-v-2e32ab3b]{position:absolute;top:111px;left:20px}footer div.footer-top div.footer__item--2 ul li[data-v-2e32ab3b]{margin-bottom:-4px}footer div.footer-top div.footer__item--3[data-v-2e32ab3b]{position:absolute;top:10%;left:35%}footer div.footer-top div.footer__item--3 h2[data-v-2e32ab3b]{width:220px}footer div.footer-top div.footer__item--4[data-v-2e32ab3b]{position:absolute;top:40%;left:35%}footer div.footer-top div.footer__item--4 h2[data-v-2e32ab3b]{width:220px}footer div.footer-top div.footer__item--5[data-v-2e32ab3b]{position:absolute;top:10%;right:3%}}@media only screen and (max-width:765px)and (min-width:378px){footer div.footer-top[data-v-2e32ab3b]{position:relative;height:650px}footer div.footer-top div.footer__item[data-v-2e32ab3b]{display:inline-block;width:auto}footer div.footer-top div.footer__item--1[data-v-2e32ab3b]{width:137px;position:absolute;top:31px;left:1%}footer div.footer-top div.footer__item--1 svg[data-v-2e32ab3b]{width:137px}footer div.footer-top div.footer__item--2[data-v-2e32ab3b]{position:absolute;top:111px;left:1%}footer div.footer-top div.footer__item--2 h2[data-v-2e32ab3b]{font-size:22px}footer div.footer-top div.footer__item--2 ul li[data-v-2e32ab3b]{margin-bottom:-10px}footer div.footer-top div.footer__item--3[data-v-2e32ab3b]{position:absolute;top:10%;left:50%}footer div.footer-top div.footer__item--3 h2[data-v-2e32ab3b]{width:180px}footer div.footer-top div.footer__item--4[data-v-2e32ab3b]{position:absolute;top:40%;left:50%}footer div.footer-top div.footer__item--5[data-v-2e32ab3b]{position:absolute;top:360px;left:1%}}@media only screen and (max-width:378px){footer div.footer-top[data-v-2e32ab3b]{position:relative;height:600px}footer div.footer-top div.footer__item[data-v-2e32ab3b]{display:inline-block;width:auto}footer div.footer-top div.footer__item--1[data-v-2e32ab3b]{width:100px;margin-bottom:16px}footer div.footer-top div.footer__item--1 svg[data-v-2e32ab3b]{width:100px}footer div.footer-top div.footer__item--2[data-v-2e32ab3b]{position:absolute;top:111px;left:1%}footer div.footer-top div.footer__item--2 h2[data-v-2e32ab3b]{font-size:18px;margin-bottom:8px}footer div.footer-top div.footer__item--2 ul li[data-v-2e32ab3b]{font-size:14px;margin-bottom:-10px}footer div.footer-top div.footer__item--3[data-v-2e32ab3b]{position:absolute;top:10%;left:50%}footer div.footer-top div.footer__item--3 h2[data-v-2e32ab3b]{width:140px}footer div.footer-top div.footer__item--4[data-v-2e32ab3b]{position:absolute;top:40%;left:50%}footer div.footer-top div.footer__item--4 h2[data-v-2e32ab3b]{width:100px}footer div.footer-top div.footer__item--5[data-v-2e32ab3b]{position:absolute;top:360px;left:1%}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 73 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "state", function() { return state; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mutations", function() { return mutations; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "actions", function() { return actions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "modules", function() { return modules; });
/* harmony import */ var _modules_favourites__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(15);
/* harmony import */ var _modules_basket__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16);
/* harmony import */ var _modules_orders__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(17);
/* harmony import */ var _modules_search__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(18);
/* harmony import */ var _modules_redirect__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(19);
/* harmony import */ var _modules_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(20);
/* harmony import */ var _modules_all__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(21);
const state=()=>({});const mutations={};const actions={};const modules={favourites: _modules_favourites__WEBPACK_IMPORTED_MODULE_0__["default"],basket: _modules_basket__WEBPACK_IMPORTED_MODULE_1__["default"],orders: _modules_orders__WEBPACK_IMPORTED_MODULE_2__["default"],search: _modules_search__WEBPACK_IMPORTED_MODULE_3__["default"],redirect: _modules_redirect__WEBPACK_IMPORTED_MODULE_4__["default"],authSets: _modules_auth__WEBPACK_IMPORTED_MODULE_5__["default"],all: _modules_all__WEBPACK_IMPORTED_MODULE_6__["default"]};

/***/ }),
/* 74 */
/***/ (function(module, exports) {

module.exports = require("js-cookie");

/***/ }),
/* 75 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// NAMESPACE OBJECT: ./.nuxt/components/index.js
var components_namespaceObject = {};
__webpack_require__.r(components_namespaceObject);
__webpack_require__.d(components_namespaceObject, "AboutUs", function() { return AboutUs; });
__webpack_require__.d(components_namespaceObject, "BannerOnMainPage", function() { return BannerOnMainPage; });
__webpack_require__.d(components_namespaceObject, "Brands", function() { return Brands; });
__webpack_require__.d(components_namespaceObject, "CatalogMagazinesMainPage", function() { return CatalogMagazinesMainPage; });
__webpack_require__.d(components_namespaceObject, "CatalogPage", function() { return CatalogPage; });
__webpack_require__.d(components_namespaceObject, "Footer", function() { return Footer; });
__webpack_require__.d(components_namespaceObject, "Header", function() { return Header; });
__webpack_require__.d(components_namespaceObject, "HeaderMainPage", function() { return HeaderMainPage; });
__webpack_require__.d(components_namespaceObject, "LogoRectangle", function() { return LogoRectangle; });
__webpack_require__.d(components_namespaceObject, "MagazineDescription", function() { return MagazineDescription; });
__webpack_require__.d(components_namespaceObject, "News", function() { return News; });
__webpack_require__.d(components_namespaceObject, "OnSaleItem", function() { return OnSaleItem; });
__webpack_require__.d(components_namespaceObject, "OtherItems", function() { return OtherItems; });
__webpack_require__.d(components_namespaceObject, "PopularItem", function() { return PopularItem; });
__webpack_require__.d(components_namespaceObject, "ProductCard", function() { return ProductCard; });
__webpack_require__.d(components_namespaceObject, "ProductLike", function() { return ProductLike; });
__webpack_require__.d(components_namespaceObject, "FaqQuestions", function() { return FaqQuestions; });
__webpack_require__.d(components_namespaceObject, "ModalsDangerMessage", function() { return ModalsDangerMessage; });
__webpack_require__.d(components_namespaceObject, "ModalsSuccessModal", function() { return ModalsSuccessModal; });
__webpack_require__.d(components_namespaceObject, "ModalsWarningMessage", function() { return ModalsWarningMessage; });
__webpack_require__.d(components_namespaceObject, "UIBaseLoading", function() { return UIBaseLoading; });
__webpack_require__.d(components_namespaceObject, "UILoadingOnBlocks", function() { return UILoadingOnBlocks; });

// NAMESPACE OBJECT: ./node_modules/@nuxt/image/dist/runtime/providers/ipx.js
var ipx_namespaceObject = {};
__webpack_require__.r(ipx_namespaceObject);
__webpack_require__.d(ipx_namespaceObject, "getImage", function() { return ipx_getImage; });
__webpack_require__.d(ipx_namespaceObject, "validateDomains", function() { return validateDomains; });
__webpack_require__.d(ipx_namespaceObject, "supportsAlias", function() { return supportsAlias; });

// NAMESPACE OBJECT: ./node_modules/@nuxt/image/dist/runtime/providers/static.js
var static_namespaceObject = {};
__webpack_require__.r(static_namespaceObject);
__webpack_require__.d(static_namespaceObject, "getImage", function() { return static_getImage; });
__webpack_require__.d(static_namespaceObject, "supportsAlias", function() { return static_supportsAlias; });

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(0);
var external_vue_default = /*#__PURE__*/__webpack_require__.n(external_vue_);

// EXTERNAL MODULE: ./node_modules/ufo/dist/index.js
var dist = __webpack_require__(1);

// EXTERNAL MODULE: external "node-fetch"
var external_node_fetch_ = __webpack_require__(34);
var external_node_fetch_default = /*#__PURE__*/__webpack_require__.n(external_node_fetch_);

// CONCATENATED MODULE: ./.nuxt/middleware.js
const middleware={};/* harmony default export */ var _nuxt_middleware = (middleware);
// CONCATENATED MODULE: ./.nuxt/utils.js
// window.{{globals.loadedCallback}} hook
// Useful for jsdom testing or plugins (https://github.com/tmpvar/jsdom#dealing-with-asynchronous-script-loading)
if(false){}function createGetCounter(counterObject,defaultKey=''){return function getCounter(id=defaultKey){if(counterObject[id]===undefined){counterObject[id]=0;}return counterObject[id]++;};}function empty(){}function globalHandleError(error){if(external_vue_default.a.config.errorHandler){external_vue_default.a.config.errorHandler(error);}}function interopDefault(promise){return promise.then(m=>m.default||m);}function hasFetch(vm){return vm.$options&&typeof vm.$options.fetch==='function'&&!vm.$options.fetch.length;}function purifyData(data){if(true){return data;}return Object.entries(data).filter(([key,value])=>{const valid=!(value instanceof Function)&&!(value instanceof Promise);if(!valid){console.warn(`${key} is not able to be stringified. This will break in a production environment.`);}return valid;}).reduce((obj,[key,value])=>{obj[key]=value;return obj;},{});}function getChildrenComponentInstancesUsingFetch(vm,instances=[]){const children=vm.$children||[];for(const child of children){if(child.$fetch){instances.push(child);continue;// Don't get the children since it will reload the template
}if(child.$children){getChildrenComponentInstancesUsingFetch(child,instances);}}return instances;}function applyAsyncData(Component,asyncData){if(// For SSR, we once all this function without second param to just apply asyncData
// Prevent doing this for each SSR request
!asyncData&&Component.options.__hasNuxtData){return;}const ComponentData=Component.options._originDataFn||Component.options.data||function(){return{};};Component.options._originDataFn=ComponentData;Component.options.data=function(){const data=ComponentData.call(this,this);if(this.$ssrContext){asyncData=this.$ssrContext.asyncData[Component.cid];}return{...data,...asyncData};};Component.options.__hasNuxtData=true;if(Component._Ctor&&Component._Ctor.options){Component._Ctor.options.data=Component.options.data;}}function sanitizeComponent(Component){// If Component already sanitized
if(Component.options&&Component._Ctor===Component){return Component;}if(!Component.options){Component=external_vue_default.a.extend(Component);// fix issue #6
Component._Ctor=Component;}else{Component._Ctor=Component;Component.extendOptions=Component.options;}// If no component name defined, set file path as name, (also fixes #5703)
if(!Component.options.name&&Component.options.__file){Component.options.name=Component.options.__file;}return Component;}function getMatchedComponents(route,matches=false,prop='components'){return Array.prototype.concat.apply([],route.matched.map((m,index)=>{return Object.keys(m[prop]).map(key=>{matches&&matches.push(index);return m[prop][key];});}));}function getMatchedComponentsInstances(route,matches=false){return getMatchedComponents(route,matches,'instances');}function flatMapComponents(route,fn){return Array.prototype.concat.apply([],route.matched.map((m,index)=>{return Object.keys(m.components).reduce((promises,key)=>{if(m.components[key]){promises.push(fn(m.components[key],m.instances[key],m,key,index));}else{delete m.components[key];}return promises;},[]);}));}function resolveRouteComponents(route,fn){return Promise.all(flatMapComponents(route,async(Component,instance,match,key)=>{// If component is a function, resolve it
if(typeof Component==='function'&&!Component.options){try{Component=await Component();}catch(error){// Handle webpack chunk loading errors
// This may be due to a new deployment or a network problem
if(error&&error.name==='ChunkLoadError'&&typeof window!=='undefined'&&window.sessionStorage){const timeNow=Date.now();const previousReloadTime=parseInt(window.sessionStorage.getItem('nuxt-reload'));// check for previous reload time not to reload infinitely
if(!previousReloadTime||previousReloadTime+60000<timeNow){window.sessionStorage.setItem('nuxt-reload',timeNow);window.location.reload(true/* skip cache */);}}throw error;}}match.components[key]=Component=sanitizeComponent(Component);return typeof fn==='function'?fn(Component,instance,match,key):Component;}));}async function getRouteData(route){if(!route){return;}// Make sure the components are resolved (code-splitting)
await resolveRouteComponents(route);// Send back a copy of route with meta based on Component definition
return{...route,meta:getMatchedComponents(route).map((Component,index)=>{return{...Component.options.meta,...(route.matched[index]||{}).meta};})};}async function setContext(app,context){// If context not defined, create it
if(!app.context){app.context={isStatic:false,isDev:false,isHMR:false,app,store:app.store,payload:context.payload,error:context.error,base:app.router.options.base,env:{}};// Only set once
if(context.req){app.context.req=context.req;}if(context.res){app.context.res=context.res;}if(context.ssrContext){app.context.ssrContext=context.ssrContext;}app.context.redirect=(status,path,query)=>{if(!status){return;}app.context._redirected=true;// if only 1 or 2 arguments: redirect('/') or redirect('/', { foo: 'bar' })
let pathType=typeof path;if(typeof status!=='number'&&(pathType==='undefined'||pathType==='object')){query=path||{};path=status;pathType=typeof path;status=302;}if(pathType==='object'){path=app.router.resolve(path).route.fullPath;}// "/absolute/route", "./relative/route" or "../relative/route"
if(/(^[.]{1,2}\/)|(^\/(?!\/))/.test(path)){app.context.next({path,query,status});}else{path=Object(dist["withQuery"])(path,query);if(true){app.context.next({path,status});}if(false){}}};if(true){app.context.beforeNuxtRender=fn=>context.beforeRenderFns.push(fn);}if(false){}}// Dynamic keys
const[currentRouteData,fromRouteData]=await Promise.all([getRouteData(context.route),getRouteData(context.from)]);if(context.route){app.context.route=currentRouteData;}if(context.from){app.context.from=fromRouteData;}app.context.next=context.next;app.context._redirected=false;app.context._errored=false;app.context.isHMR=false;app.context.params=app.context.route.params||{};app.context.query=app.context.route.query||{};}function middlewareSeries(promises,appContext){if(!promises.length||appContext._redirected||appContext._errored){return Promise.resolve();}return promisify(promises[0],appContext).then(()=>{return middlewareSeries(promises.slice(1),appContext);});}function promisify(fn,context){let promise;if(fn.length===2){// fn(context, callback)
promise=new Promise(resolve=>{fn(context,function(err,data){if(err){context.error(err);}data=data||{};resolve(data);});});}else{promise=fn(context);}if(promise&&promise instanceof Promise&&typeof promise.then==='function'){return promise;}return Promise.resolve(promise);}// Imported from vue-router
function getLocation(base,mode){if(mode==='hash'){return window.location.hash.replace(/^#\//,'');}base=decodeURI(base).slice(0,-1);// consideration is base is normalized with trailing slash
let path=decodeURI(window.location.pathname);if(base&&path.startsWith(base)){path=path.slice(base.length);}const fullPath=(path||'/')+window.location.search+window.location.hash;return Object(dist["normalizeURL"])(fullPath);}// Imported from path-to-regexp
/**
 * Compile a string to a template function for the path.
 *
 * @param  {string}             str
 * @param  {Object=}            options
 * @return {!function(Object=, Object=)}
 */function compile(str,options){return tokensToFunction(parse(str,options),options);}function getQueryDiff(toQuery,fromQuery){const diff={};const queries={...toQuery,...fromQuery};for(const k in queries){if(String(toQuery[k])!==String(fromQuery[k])){diff[k]=true;}}return diff;}function normalizeError(err){let message;if(!(err.message||typeof err==='string')){try{message=JSON.stringify(err,null,2);}catch(e){message=`[${err.constructor.name}]`;}}else{message=err.message||err;}return{...err,message,statusCode:err.statusCode||err.status||err.response&&err.response.status||500};}/**
 * The main path matching regexp utility.
 *
 * @type {RegExp}
 */const PATH_REGEXP=new RegExp([// Match escaped characters that would otherwise appear in future matches.
// This allows the user to escape special characters that won't transform.
'(\\\\.)',// Match Express-style parameters and un-named parameters with a prefix
// and optional suffixes. Matches appear as:
//
// "/:test(\\d+)?" => ["/", "test", "\d+", undefined, "?", undefined]
// "/route(\\d+)"  => [undefined, undefined, undefined, "\d+", undefined, undefined]
// "/*"            => ["/", undefined, undefined, undefined, undefined, "*"]
'([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))'].join('|'),'g');/**
 * Parse a string for the raw tokens.
 *
 * @param  {string}  str
 * @param  {Object=} options
 * @return {!Array}
 */function parse(str,options){const tokens=[];let key=0;let index=0;let path='';const defaultDelimiter=options&&options.delimiter||'/';let res;while((res=PATH_REGEXP.exec(str))!=null){const m=res[0];const escaped=res[1];const offset=res.index;path+=str.slice(index,offset);index=offset+m.length;// Ignore already escaped sequences.
if(escaped){path+=escaped[1];continue;}const next=str[index];const prefix=res[2];const name=res[3];const capture=res[4];const group=res[5];const modifier=res[6];const asterisk=res[7];// Push the current path onto the tokens.
if(path){tokens.push(path);path='';}const partial=prefix!=null&&next!=null&&next!==prefix;const repeat=modifier==='+'||modifier==='*';const optional=modifier==='?'||modifier==='*';const delimiter=res[2]||defaultDelimiter;const pattern=capture||group;tokens.push({name:name||key++,prefix:prefix||'',delimiter,optional,repeat,partial,asterisk:Boolean(asterisk),pattern:pattern?escapeGroup(pattern):asterisk?'.*':'[^'+escapeString(delimiter)+']+?'});}// Match any characters still remaining.
if(index<str.length){path+=str.substr(index);}// If the path exists, push it onto the end.
if(path){tokens.push(path);}return tokens;}/**
 * Prettier encoding of URI path segments.
 *
 * @param  {string}
 * @return {string}
 */function encodeURIComponentPretty(str,slashAllowed){const re=slashAllowed?/[?#]/g:/[/?#]/g;return encodeURI(str).replace(re,c=>{return'%'+c.charCodeAt(0).toString(16).toUpperCase();});}/**
 * Encode the asterisk parameter. Similar to `pretty`, but allows slashes.
 *
 * @param  {string}
 * @return {string}
 */function encodeAsterisk(str){return encodeURIComponentPretty(str,true);}/**
 * Escape a regular expression string.
 *
 * @param  {string} str
 * @return {string}
 */function escapeString(str){return str.replace(/([.+*?=^!:${}()[\]|/\\])/g,'\\$1');}/**
 * Escape the capturing group by escaping special characters and meaning.
 *
 * @param  {string} group
 * @return {string}
 */function escapeGroup(group){return group.replace(/([=!:$/()])/g,'\\$1');}/**
 * Expose a method for transforming tokens into the path function.
 */function tokensToFunction(tokens,options){// Compile all the tokens into regexps.
const matches=new Array(tokens.length);// Compile all the patterns before compilation.
for(let i=0;i<tokens.length;i++){if(typeof tokens[i]==='object'){matches[i]=new RegExp('^(?:'+tokens[i].pattern+')$',flags(options));}}return function(obj,opts){let path='';const data=obj||{};const options=opts||{};const encode=options.pretty?encodeURIComponentPretty:encodeURIComponent;for(let i=0;i<tokens.length;i++){const token=tokens[i];if(typeof token==='string'){path+=token;continue;}const value=data[token.name||'pathMatch'];let segment;if(value==null){if(token.optional){// Prepend partial segment prefixes.
if(token.partial){path+=token.prefix;}continue;}else{throw new TypeError('Expected "'+token.name+'" to be defined');}}if(Array.isArray(value)){if(!token.repeat){throw new TypeError('Expected "'+token.name+'" to not repeat, but received `'+JSON.stringify(value)+'`');}if(value.length===0){if(token.optional){continue;}else{throw new TypeError('Expected "'+token.name+'" to not be empty');}}for(let j=0;j<value.length;j++){segment=encode(value[j]);if(!matches[i].test(segment)){throw new TypeError('Expected all "'+token.name+'" to match "'+token.pattern+'", but received `'+JSON.stringify(segment)+'`');}path+=(j===0?token.prefix:token.delimiter)+segment;}continue;}segment=token.asterisk?encodeAsterisk(value):encode(value);if(!matches[i].test(segment)){throw new TypeError('Expected "'+token.name+'" to match "'+token.pattern+'", but received "'+segment+'"');}path+=token.prefix+segment;}return path;};}/**
 * Get the flags for a regexp from the options.
 *
 * @param  {Object} options
 * @return {string}
 */function flags(options){return options&&options.sensitive?'':'i';}function addLifecycleHook(vm,hook,fn){if(!vm.$options[hook]){vm.$options[hook]=[];}if(!vm.$options[hook].includes(fn)){vm.$options[hook].push(fn);}}const urlJoin=dist["joinURL"];const stripTrailingSlash=dist["withoutTrailingSlash"];const isSamePath=dist["isSamePath"];function setScrollRestoration(newVal){try{window.history.scrollRestoration=newVal;}catch(e){}}
// CONCATENATED MODULE: ./.nuxt/mixins/fetch.server.js
async function serverPrefetch(){if(!this._fetchOnServer){return;}// Call and await on $fetch
try{await this.$options.fetch.call(this);}catch(err){if(false){}this.$fetchState.error=normalizeError(err);}this.$fetchState.pending=false;// Define an ssrKey for hydration
this._fetchKey=this._fetchKey||this.$ssrContext.fetchCounters['']++;// Add data-fetch-key on parent element of Component
const attrs=this.$vnode.data.attrs=this.$vnode.data.attrs||{};attrs['data-fetch-key']=this._fetchKey;// Add to ssrContext for window.__NUXT__.fetch
this.$ssrContext.nuxt.fetch[this._fetchKey]=this.$fetchState.error?{_error:this.$fetchState.error}:purifyData(this._data);}/* harmony default export */ var fetch_server = ({created(){if(!hasFetch(this)){return;}if(typeof this.$options.fetchOnServer==='function'){this._fetchOnServer=this.$options.fetchOnServer.call(this)!==false;}else{this._fetchOnServer=this.$options.fetchOnServer!==false;}const defaultKey=this.$options._scopeId||this.$options.name||'';const getCounter=createGetCounter(this.$ssrContext.fetchCounters,defaultKey);if(typeof this.$options.fetchKey==='function'){this._fetchKey=this.$options.fetchKey.call(this,getCounter);}else{const key='string'===typeof this.$options.fetchKey?this.$options.fetchKey:defaultKey;this._fetchKey=key?key+':'+getCounter(key):String(getCounter(key));}// Added for remove vue undefined warning while ssr
this.$fetch=()=>{};// issue #8043
external_vue_default.a.util.defineReactive(this,'$fetchState',{pending:true,error:null,timestamp:Date.now()});addLifecycleHook(this,'serverPrefetch',serverPrefetch);}});
// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(7);
var external_vuex_default = /*#__PURE__*/__webpack_require__.n(external_vuex_);

// EXTERNAL MODULE: external "vue-meta"
var external_vue_meta_ = __webpack_require__(8);
var external_vue_meta_default = /*#__PURE__*/__webpack_require__.n(external_vue_meta_);

// EXTERNAL MODULE: external "vue-client-only"
var external_vue_client_only_ = __webpack_require__(22);
var external_vue_client_only_default = /*#__PURE__*/__webpack_require__.n(external_vue_client_only_);

// EXTERNAL MODULE: external "vue-no-ssr"
var external_vue_no_ssr_ = __webpack_require__(11);
var external_vue_no_ssr_default = /*#__PURE__*/__webpack_require__.n(external_vue_no_ssr_);

// EXTERNAL MODULE: external "vue-router"
var external_vue_router_ = __webpack_require__(23);
var external_vue_router_default = /*#__PURE__*/__webpack_require__.n(external_vue_router_);

// CONCATENATED MODULE: ./.nuxt/router.scrollBehavior.js
/* harmony default export */ var router_scrollBehavior = (function(to,from,savedPosition){if(savedPosition){const{x,y}=savedPosition;let scrollY,winInnerHieght;const interval=setInterval(()=>{scrollY=window.scrollY;winInnerHieght=document.body.clientHeight;if(y<=winInnerHieght){window.scrollTo({top:y,left:x,behavior:"smooth"});if(scrollY<=y+150&&scrollY>=y-150){clearInterval(interval);}}},500);return setTimeout(()=>{clearInterval(interval);return savedPosition;},30000);}else{return{x:0,y:0};}});
// CONCATENATED MODULE: ./.nuxt/router.js
const _08827303=()=>interopDefault(__webpack_require__.e(/* import() | pages/about */ 24).then(__webpack_require__.bind(null, 258)));const _062d9558=()=>interopDefault(__webpack_require__.e(/* import() | pages/allmagazines */ 25).then(__webpack_require__.bind(null, 259)));const _7c056608=()=>interopDefault(__webpack_require__.e(/* import() | pages/application/index */ 26).then(__webpack_require__.bind(null, 260)));const _5c5582c2=()=>interopDefault(__webpack_require__.e(/* import() | pages/basket/index */ 32).then(__webpack_require__.bind(null, 261)));const _4c08fd08=()=>interopDefault(__webpack_require__.e(/* import() | pages/business/index */ 33).then(__webpack_require__.bind(null, 262)));const _1d6d2d8c=()=>interopDefault(__webpack_require__.e(/* import() | pages/faq */ 34).then(__webpack_require__.bind(null, 263)));const _fed97efa=()=>interopDefault(__webpack_require__.e(/* import() | pages/favourite/index */ 35).then(__webpack_require__.bind(null, 264)));const _17f4cdd0=()=>interopDefault(__webpack_require__.e(/* import() | pages/filter/index */ 36).then(__webpack_require__.bind(null, 265)));const _1cf5b18b=()=>interopDefault(__webpack_require__.e(/* import() | pages/myorders */ 39).then(__webpack_require__.bind(null, 266)));const _9e78e666=()=>interopDefault(__webpack_require__.e(/* import() | pages/news */ 40).then(__webpack_require__.bind(null, 267)));const _2d74fabd=()=>interopDefault(__webpack_require__.e(/* import() | pages/news/_id */ 41).then(__webpack_require__.bind(null, 268)));const _69f66ffa=()=>interopDefault(__webpack_require__.e(/* import() | pages/profile/index */ 45).then(__webpack_require__.bind(null, 269)));const _283a4dc8=()=>interopDefault(__webpack_require__.e(/* import() | pages/index */ 37).then(__webpack_require__.bind(null, 270)));const _3fa414c0=()=>interopDefault(__webpack_require__.e(/* import() | pages/search/index */ 46).then(__webpack_require__.bind(null, 271)));const _19454f0c=()=>interopDefault(__webpack_require__.e(/* import() | pages/test */ 47).then(__webpack_require__.bind(null, 272)));const _53ff588f=()=>interopDefault(__webpack_require__.e(/* import() | pages/auth/code */ 27).then(__webpack_require__.bind(null, 273)));const _0b3ee037=()=>interopDefault(__webpack_require__.e(/* import() | pages/auth/login */ 28).then(__webpack_require__.bind(null, 274)));const _29689b89=()=>interopDefault(__webpack_require__.e(/* import() | pages/auth/newpassword */ 29).then(__webpack_require__.bind(null, 275)));const _3463a3bc=()=>interopDefault(__webpack_require__.e(/* import() | pages/auth/phone */ 30).then(__webpack_require__.bind(null, 276)));const _683f3945=()=>interopDefault(__webpack_require__.e(/* import() | pages/auth/register */ 31).then(__webpack_require__.bind(null, 277)));const _ff66622e=()=>interopDefault(__webpack_require__.e(/* import() | pages/profile/edit */ 44).then(__webpack_require__.bind(null, 278)));const _3d61c41c=()=>interopDefault(__webpack_require__.e(/* import() | pages/magazine/_id */ 38).then(__webpack_require__.bind(null, 279)));const _ebe668b4=()=>interopDefault(__webpack_require__.e(/* import() | pages/order/_id */ 42).then(__webpack_require__.bind(null, 280)));const _49abfaa5=()=>interopDefault(__webpack_require__.e(/* import() | pages/product/_id */ 43).then(__webpack_require__.bind(null, 281)));const emptyFn=()=>{};external_vue_default.a.use(external_vue_router_default.a);const routerOptions={mode:'history',base:'/',linkActiveClass:'nuxt-link-active',linkExactActiveClass:'nuxt-link-exact-active',scrollBehavior: router_scrollBehavior,routes:[{path:"/about",component:_08827303,name:"about___uz"},{path:"/allmagazines",component:_062d9558,name:"allmagazines___uz"},{path:"/application",component:_7c056608,name:"application___uz"},{path:"/basket",component:_5c5582c2,name:"basket___uz"},{path:"/business",component:_4c08fd08,name:"business___uz"},{path:"/faq",component:_1d6d2d8c,name:"faq___uz"},{path:"/favourite",component:_fed97efa,name:"favourite___uz"},{path:"/filter",component:_17f4cdd0,name:"filter___uz"},{path:"/myorders",component:_1cf5b18b,name:"myorders___uz"},{path:"/news",component:_9e78e666,name:"news___uz",children:[{path:":id?",component:_2d74fabd,name:"news-id___uz"}]},{path:"/profile",component:_69f66ffa,name:"profile___uz"},{path:"/ru",component:_283a4dc8,name:"index___ru"},{path:"/search",component:_3fa414c0,name:"search___uz"},{path:"/test",component:_19454f0c,name:"test___uz"},{path:"/auth/code",component:_53ff588f,name:"auth-code___uz"},{path:"/auth/login",component:_0b3ee037,name:"auth-login___uz"},{path:"/auth/newpassword",component:_29689b89,name:"auth-newpassword___uz"},{path:"/auth/phone",component:_3463a3bc,name:"auth-phone___uz"},{path:"/auth/register",component:_683f3945,name:"auth-register___uz"},{path:"/profile/edit",component:_ff66622e,name:"profile-edit___uz"},{path:"/ru/about",component:_08827303,name:"about___ru"},{path:"/ru/allmagazines",component:_062d9558,name:"allmagazines___ru"},{path:"/ru/application",component:_7c056608,name:"application___ru"},{path:"/ru/basket",component:_5c5582c2,name:"basket___ru"},{path:"/ru/business",component:_4c08fd08,name:"business___ru"},{path:"/ru/faq",component:_1d6d2d8c,name:"faq___ru"},{path:"/ru/favourite",component:_fed97efa,name:"favourite___ru"},{path:"/ru/filter",component:_17f4cdd0,name:"filter___ru"},{path:"/ru/myorders",component:_1cf5b18b,name:"myorders___ru"},{path:"/ru/news",component:_9e78e666,name:"news___ru",children:[{path:":id?",component:_2d74fabd,name:"news-id___ru"}]},{path:"/ru/profile",component:_69f66ffa,name:"profile___ru"},{path:"/ru/search",component:_3fa414c0,name:"search___ru"},{path:"/ru/test",component:_19454f0c,name:"test___ru"},{path:"/ru/auth/code",component:_53ff588f,name:"auth-code___ru"},{path:"/ru/auth/login",component:_0b3ee037,name:"auth-login___ru"},{path:"/ru/auth/newpassword",component:_29689b89,name:"auth-newpassword___ru"},{path:"/ru/auth/phone",component:_3463a3bc,name:"auth-phone___ru"},{path:"/ru/auth/register",component:_683f3945,name:"auth-register___ru"},{path:"/ru/profile/edit",component:_ff66622e,name:"profile-edit___ru"},{path:"/ru/magazine/:id?",component:_3d61c41c,name:"magazine-id___ru"},{path:"/ru/order/:id?",component:_ebe668b4,name:"order-id___ru"},{path:"/ru/product/:id?",component:_49abfaa5,name:"product-id___ru"},{path:"/magazine/:id?",component:_3d61c41c,name:"magazine-id___uz"},{path:"/order/:id?",component:_ebe668b4,name:"order-id___uz"},{path:"/product/:id?",component:_49abfaa5,name:"product-id___uz"},{path:"/",component:_283a4dc8,name:"index___uz"}],fallback:false};function createRouter(ssrContext,config){const base=config._app&&config._app.basePath||routerOptions.base;const router=new external_vue_router_default.a({...routerOptions,base});// TODO: remove in Nuxt 3
const originalPush=router.push;router.push=function push(location,onComplete=emptyFn,onAbort){return originalPush.call(this,location,onComplete,onAbort);};const resolve=router.resolve.bind(router);router.resolve=(to,current,append)=>{if(typeof to==='string'){to=Object(dist["normalizeURL"])(to);}return resolve(to,current,append);};return router;}
// CONCATENATED MODULE: ./.nuxt/components/nuxt-child.js
/* harmony default export */ var nuxt_child = ({name:'NuxtChild',functional:true,props:{nuxtChildKey:{type:String,default:''},keepAlive:Boolean,keepAliveProps:{type:Object,default:undefined}},render(_,{parent,data,props}){const h=parent.$createElement;data.nuxtChild=true;const _parent=parent;const transitions=parent.$nuxt.nuxt.transitions;const defaultTransition=parent.$nuxt.nuxt.defaultTransition;let depth=0;while(parent){if(parent.$vnode&&parent.$vnode.data.nuxtChild){depth++;}parent=parent.$parent;}data.nuxtChildDepth=depth;const transition=transitions[depth]||defaultTransition;const transitionProps={};transitionsKeys.forEach(key=>{if(typeof transition[key]!=='undefined'){transitionProps[key]=transition[key];}});const listeners={};listenersKeys.forEach(key=>{if(typeof transition[key]==='function'){listeners[key]=transition[key].bind(_parent);}});if(false){}// make sure that leave is called asynchronous (fix #5703)
if(transition.css===false){const leave=listeners.leave;// only add leave listener when user didnt provide one
// or when it misses the done argument
if(!leave||leave.length<2){listeners.leave=(el,done)=>{if(leave){leave.call(_parent,el);}_parent.$nextTick(done);};}}let routerView=h('routerView',data);if(props.keepAlive){routerView=h('keep-alive',{props:props.keepAliveProps},[routerView]);}return h('transition',{props:transitionProps,on:listeners},[routerView]);}});const transitionsKeys=['name','mode','appear','css','type','duration','enterClass','leaveClass','appearClass','enterActiveClass','enterActiveClass','leaveActiveClass','appearActiveClass','enterToClass','leaveToClass','appearToClass'];const listenersKeys=['beforeEnter','enter','afterEnter','enterCancelled','beforeLeave','leave','afterLeave','leaveCancelled','beforeAppear','appear','afterAppear','appearCancelled'];
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./.nuxt/components/nuxt-error.vue?vue&type=template&id=5eb69f1c&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"__nuxt-error-page"},[_vm._ssrNode("<div class=\"error\">","</div>",[_vm._ssrNode("<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"90\" height=\"90\" fill=\"#DBE1EC\" viewBox=\"0 0 48 48\"><path d=\"M22 30h4v4h-4zm0-16h4v12h-4zm1.99-10C12.94 4 4 12.95 4 24s8.94 20 19.99 20S44 35.05 44 24 35.04 4 23.99 4zM24 40c-8.84 0-16-7.16-16-16S15.16 8 24 8s16 7.16 16 16-7.16 16-16 16z\"></path></svg> <div class=\"title\">"+_vm._ssrEscape(_vm._s(_vm.message))+"</div> "),(_vm.statusCode === 404)?_vm._ssrNode("<p class=\"description\">","</p>",[(typeof _vm.$route === 'undefined')?_vm._ssrNode("<a href=\"/\" class=\"error-link\">","</a>"):_c('NuxtLink',{staticClass:"error-link",attrs:{"to":"/"}},[_vm._v("Back to the home page")])],1):_vm._e(),_vm._ssrNode(" <div class=\"logo\"><a href=\"https://nuxtjs.org\" target=\"_blank\" rel=\"noopener\">Nuxt</a></div>")],2)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./.nuxt/components/nuxt-error.vue?vue&type=template&id=5eb69f1c&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./.nuxt/components/nuxt-error.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var nuxt_errorvue_type_script_lang_js_ = ({name:'NuxtError',props:{error:{type:Object,default:null}},computed:{statusCode(){return this.error&&this.error.statusCode||500;},message(){return this.error.message||'Error';}},head(){return{title:this.message,meta:[{name:'viewport',content:'width=device-width,initial-scale=1.0,minimum-scale=1.0'}]};}});
// CONCATENATED MODULE: ./.nuxt/components/nuxt-error.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_nuxt_errorvue_type_script_lang_js_ = (nuxt_errorvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./.nuxt/components/nuxt-error.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(55)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var nuxt_error_component = Object(componentNormalizer["a" /* default */])(
  components_nuxt_errorvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "2fa5ac13"
  
)

/* harmony default export */ var nuxt_error = (nuxt_error_component.exports);
// CONCATENATED MODULE: ./.nuxt/components/nuxt.js
/* harmony default export */ var components_nuxt = ({name:'Nuxt',components:{NuxtChild: nuxt_child,NuxtError: nuxt_error},props:{nuxtChildKey:{type:String,default:undefined},keepAlive:Boolean,keepAliveProps:{type:Object,default:undefined},name:{type:String,default:'default'}},errorCaptured(error){// if we receive and error while showing the NuxtError component
// capture the error and force an immediate update so we re-render
// without the NuxtError component
if(this.displayingNuxtError){this.errorFromNuxtError=error;this.$forceUpdate();}},computed:{routerViewKey(){// If nuxtChildKey prop is given or current route has children
if(typeof this.nuxtChildKey!=='undefined'||this.$route.matched.length>1){return this.nuxtChildKey||compile(this.$route.matched[0].path)(this.$route.params);}const[matchedRoute]=this.$route.matched;if(!matchedRoute){return this.$route.path;}const Component=matchedRoute.components.default;if(Component&&Component.options){const{options}=Component;if(options.key){return typeof options.key==='function'?options.key(this.$route):options.key;}}const strict=/\/$/.test(matchedRoute.path);return strict?this.$route.path:this.$route.path.replace(/\/$/,'');}},beforeCreate(){external_vue_default.a.util.defineReactive(this,'nuxt',this.$root.$options.nuxt);},render(h){// if there is no error
if(!this.nuxt.err){// Directly return nuxt child
return h('NuxtChild',{key:this.routerViewKey,props:this.$props});}// if an error occurred within NuxtError show a simple
// error message instead to prevent looping
if(this.errorFromNuxtError){this.$nextTick(()=>this.errorFromNuxtError=false);return h('div',{},[h('h2','An error occurred while showing the error page'),h('p','Unfortunately an error occurred and while showing the error page another error occurred'),h('p',`Error details: ${this.errorFromNuxtError.toString()}`),h('nuxt-link',{props:{to:'/'}},'Go back to home')]);}// track if we are showing the NuxtError component
this.displayingNuxtError=true;this.$nextTick(()=>this.displayingNuxtError=false);return h(nuxt_error,{props:{error:this.nuxt.err}});}});
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./.nuxt/components/nuxt-loading.vue?vue&type=script&lang=js&
/* harmony default export */ var nuxt_loadingvue_type_script_lang_js_ = ({name:'NuxtLoading',data(){return{percent:0,show:false,canSucceed:true,reversed:false,skipTimerCount:0,rtl:false,throttle:200,duration:5000,continuous:false};},computed:{left(){if(!this.continuous&&!this.rtl){return false;}return this.rtl?this.reversed?'0px':'auto':!this.reversed?'0px':'auto';}},beforeDestroy(){this.clear();},methods:{clear(){clearInterval(this._timer);clearTimeout(this._throttle);this._timer=null;},start(){this.clear();this.percent=0;this.reversed=false;this.skipTimerCount=0;this.canSucceed=true;if(this.throttle){this._throttle=setTimeout(()=>this.startTimer(),this.throttle);}else{this.startTimer();}return this;},set(num){this.show=true;this.canSucceed=true;this.percent=Math.min(100,Math.max(0,Math.floor(num)));return this;},get(){return this.percent;},increase(num){this.percent=Math.min(100,Math.floor(this.percent+num));return this;},decrease(num){this.percent=Math.max(0,Math.floor(this.percent-num));return this;},pause(){clearInterval(this._timer);return this;},resume(){this.startTimer();return this;},finish(){this.percent=this.reversed?0:100;this.hide();return this;},hide(){this.clear();setTimeout(()=>{this.show=false;this.$nextTick(()=>{this.percent=0;this.reversed=false;});},500);return this;},fail(error){this.canSucceed=false;return this;},startTimer(){if(!this.show){this.show=true;}if(typeof this._cut==='undefined'){this._cut=10000/Math.floor(this.duration);}this._timer=setInterval(()=>{/**
         * When reversing direction skip one timers
         * so 0, 100 are displayed for two iterations
         * also disable css width transitioning
         * which otherwise interferes and shows
         * a jojo effect
         */if(this.skipTimerCount>0){this.skipTimerCount--;return;}if(this.reversed){this.decrease(this._cut);}else{this.increase(this._cut);}if(this.continuous){if(this.percent>=100){this.skipTimerCount=1;this.reversed=!this.reversed;}else if(this.percent<=0){this.skipTimerCount=1;this.reversed=!this.reversed;}}},100);}},render(h){let el=h(false);if(this.show){el=h('div',{staticClass:'nuxt-progress',class:{'nuxt-progress-notransition':this.skipTimerCount>0,'nuxt-progress-failed':!this.canSucceed},style:{width:this.percent+'%',left:this.left}});}return el;}});
// CONCATENATED MODULE: ./.nuxt/components/nuxt-loading.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_nuxt_loadingvue_type_script_lang_js_ = (nuxt_loadingvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./.nuxt/components/nuxt-loading.vue
var nuxt_loading_render, nuxt_loading_staticRenderFns


function nuxt_loading_injectStyles (context) {
  
  var style0 = __webpack_require__(57)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var nuxt_loading_component = Object(componentNormalizer["a" /* default */])(
  components_nuxt_loadingvue_type_script_lang_js_,
  nuxt_loading_render,
  nuxt_loading_staticRenderFns,
  false,
  nuxt_loading_injectStyles,
  null,
  "5341f087"
  
)

/* harmony default export */ var nuxt_loading = (nuxt_loading_component.exports);
// EXTERNAL MODULE: ./node_modules/bootstrap/dist/css/bootstrap.css
var bootstrap = __webpack_require__(59);

// EXTERNAL MODULE: ./node_modules/bootstrap-vue/dist/bootstrap-vue.css
var bootstrap_vue = __webpack_require__(61);

// EXTERNAL MODULE: ./node_modules/@fortawesome/fontawesome-svg-core/styles.css
var styles = __webpack_require__(63);

// EXTERNAL MODULE: ./assets/scss/main.scss
var main = __webpack_require__(65);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./layouts/default.vue?vue&type=template&id=d3d8c23e&
var defaultvue_type_template_id_d3d8c23e_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.isData)?_c('div',{staticClass:"layout"},[_vm._ssrNode("<div id=\"header__back\" class=\"header_back\"></div> "),_c('Header-main-page'),_vm._ssrNode(" "),_c('Nuxt',{key:_vm.$route.fullPath}),_vm._ssrNode(" "),_c('Footer')],2):_vm._e()}
var defaultvue_type_template_id_d3d8c23e_staticRenderFns = []


// CONCATENATED MODULE: ./layouts/default.vue?vue&type=template&id=d3d8c23e&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./layouts/default.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var defaultvue_type_script_lang_js_ = ({data(){return{isData:false};},async mounted(){await this.$store.dispatch("getCat");await this.$store.dispatch("getBrands");this.isData=true;this.$store.commit("LIMIT_1",10);this.$store.commit("LIMIT_2",20);this.$store.commit("LIMIT_3",10);}});
// CONCATENATED MODULE: ./layouts/default.vue?vue&type=script&lang=js&
 /* harmony default export */ var layouts_defaultvue_type_script_lang_js_ = (defaultvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./layouts/default.vue



function default_injectStyles (context) {
  
  var style0 = __webpack_require__(67)
if (style0.__inject__) style0.__inject__(context)
var style1 = __webpack_require__(69)
if (style1.__inject__) style1.__inject__(context)

}

/* normalize component */

var default_component = Object(componentNormalizer["a" /* default */])(
  layouts_defaultvue_type_script_lang_js_,
  defaultvue_type_template_id_d3d8c23e_render,
  defaultvue_type_template_id_d3d8c23e_staticRenderFns,
  false,
  default_injectStyles,
  null,
  "38da6ea8"
  
)

/* harmony default export */ var layouts_default = (default_component.exports);

/* nuxt-component-imports */
installComponents(default_component, {Footer: __webpack_require__(33).default})

// CONCATENATED MODULE: ./.nuxt/App.js
const layouts={"_default":sanitizeComponent(layouts_default)};/* harmony default export */ var App = ({render(h,props){const loadingEl=h('NuxtLoading',{ref:'loading'});const layoutEl=h(this.layout||'nuxt');const templateEl=h('div',{domProps:{id:'__layout'},key:this.layoutName},[layoutEl]);const transitionEl=h('transition',{props:{name:'layout',mode:'out-in'},on:{beforeEnter(el){// Ensure to trigger scroll event after calling scrollBehavior
window.$nuxt.$nextTick(()=>{window.$nuxt.$emit('triggerScroll');});}}},[templateEl]);return h('div',{domProps:{id:'__nuxt'}},[loadingEl,transitionEl]);},data:()=>({isOnline:true,layout:null,layoutName:'',nbFetching:0}),beforeCreate(){external_vue_default.a.util.defineReactive(this,'nuxt',this.$options.nuxt);},created(){// Add this.$nuxt in child instances
this.$root.$options.$nuxt=this;if(false){}// Add $nuxt.error()
this.error=this.nuxt.error;// Add $nuxt.context
this.context=this.$options.context;},async mounted(){this.$loading=this.$refs.loading;},watch:{'nuxt.err':'errorChanged'},computed:{isOffline(){return!this.isOnline;},isFetching(){return this.nbFetching>0;}},methods:{refreshOnlineStatus(){if(false){}},async refresh(){const pages=getMatchedComponentsInstances(this.$route);if(!pages.length){return;}this.$loading.start();const promises=pages.map(page=>{const p=[];// Old fetch
if(page.$options.fetch&&page.$options.fetch.length){p.push(promisify(page.$options.fetch,this.context));}if(page.$fetch){p.push(page.$fetch());}else{// Get all component instance to call $fetch
for(const component of getChildrenComponentInstancesUsingFetch(page.$vnode.componentInstance)){p.push(component.$fetch());}}if(page.$options.asyncData){p.push(promisify(page.$options.asyncData,this.context).then(newData=>{for(const key in newData){external_vue_default.a.set(page.$data,key,newData[key]);}}));}return Promise.all(p);});try{await Promise.all(promises);}catch(error){this.$loading.fail(error);globalHandleError(error);this.error(error);}this.$loading.finish();},errorChanged(){if(this.nuxt.err){if(this.$loading){if(this.$loading.fail){this.$loading.fail(this.nuxt.err);}if(this.$loading.finish){this.$loading.finish();}}let errorLayout=(nuxt_error.options||nuxt_error).layout;if(typeof errorLayout==='function'){errorLayout=errorLayout(this.context);}this.setLayout(errorLayout);}},setLayout(layout){if(!layout||!layouts['_'+layout]){layout='default';}this.layoutName=layout;this.layout=layouts['_'+layout];return this.layout;},loadLayout(layout){if(!layout||!layouts['_'+layout]){layout='default';}return Promise.resolve(layouts['_'+layout]);}},components:{NuxtLoading: nuxt_loading}});
// CONCATENATED MODULE: ./.nuxt/store.js
external_vue_default.a.use(external_vuex_default.a);const VUEX_PROPERTIES=['state','getters','actions','mutations'];let store_store={};(function updateModules(){store_store=normalizeRoot(__webpack_require__(73),'store/index.js');// If store is an exported method = classic mode (deprecated)
// Enforce store modules
store_store.modules=store_store.modules||{};resolveStoreModules(__webpack_require__(21),'modules/all.js');resolveStoreModules(__webpack_require__(20),'modules/auth.js');resolveStoreModules(__webpack_require__(16),'modules/basket.js');resolveStoreModules(__webpack_require__(15),'modules/favourites.js');resolveStoreModules(__webpack_require__(17),'modules/orders.js');resolveStoreModules(__webpack_require__(19),'modules/redirect.js');resolveStoreModules(__webpack_require__(18),'modules/search.js');// If the environment supports hot reloading...
})();// createStore
const createStore=store_store instanceof Function?store_store:()=>{return new external_vuex_default.a.Store(Object.assign({strict:"production"!=='production'},store_store));};function normalizeRoot(moduleData,filePath){moduleData=moduleData.default||moduleData;if(moduleData.commit){throw new Error(`[nuxt] ${filePath} should export a method that returns a Vuex instance.`);}if(typeof moduleData!=='function'){// Avoid TypeError: setting a property that has only a getter when overwriting top level keys
moduleData=Object.assign({},moduleData);}return normalizeModule(moduleData,filePath);}function normalizeModule(moduleData,filePath){if(moduleData.state&&typeof moduleData.state!=='function'){console.warn(`'state' should be a method that returns an object in ${filePath}`);const state=Object.assign({},moduleData.state);// Avoid TypeError: setting a property that has only a getter when overwriting top level keys
moduleData=Object.assign({},moduleData,{state:()=>state});}return moduleData;}function resolveStoreModules(moduleData,filename){moduleData=moduleData.default||moduleData;// Remove store src + extension (./foo/index.js -> foo/index)
const namespace=filename.replace(/\.(js|mjs)$/,'');const namespaces=namespace.split('/');let moduleName=namespaces[namespaces.length-1];const filePath=`store/${filename}`;moduleData=moduleName==='state'?normalizeState(moduleData,filePath):normalizeModule(moduleData,filePath);// If src is a known Vuex property
if(VUEX_PROPERTIES.includes(moduleName)){const property=moduleName;const propertyStoreModule=getStoreModule(store_store,namespaces,{isProperty:true});// Replace state since it's a function
mergeProperty(propertyStoreModule,moduleData,property);return;}// If file is foo/index.js, it should be saved as foo
const isIndexModule=moduleName==='index';if(isIndexModule){namespaces.pop();moduleName=namespaces[namespaces.length-1];}const storeModule=getStoreModule(store_store,namespaces);for(const property of VUEX_PROPERTIES){mergeProperty(storeModule,moduleData[property],property);}if(moduleData.namespaced===false){delete storeModule.namespaced;}}function normalizeState(moduleData,filePath){if(typeof moduleData!=='function'){console.warn(`${filePath} should export a method that returns an object`);const state=Object.assign({},moduleData);return()=>state;}return normalizeModule(moduleData,filePath);}function getStoreModule(storeModule,namespaces,{isProperty=false}={}){// If ./mutations.js
if(!namespaces.length||isProperty&&namespaces.length===1){return storeModule;}const namespace=namespaces.shift();storeModule.modules[namespace]=storeModule.modules[namespace]||{};storeModule.modules[namespace].namespaced=true;storeModule.modules[namespace].modules=storeModule.modules[namespace].modules||{};return getStoreModule(storeModule.modules[namespace],namespaces,{isProperty});}function mergeProperty(storeModule,moduleData,property){if(!moduleData){return;}if(property==='state'){storeModule.state=moduleData||storeModule.state;}else{storeModule[property]=Object.assign({},storeModule[property],moduleData);}}
// CONCATENATED MODULE: ./.nuxt/components/index.js
const AboutUs=()=>__webpack_require__.e(/* import() | components/about-us */ 1).then(__webpack_require__.bind(null, 189)).then(c=>wrapFunctional(c.default||c));const BannerOnMainPage=()=>__webpack_require__.e(/* import() | components/banner-on-main-page */ 2).then(__webpack_require__.bind(null, 191)).then(c=>wrapFunctional(c.default||c));const Brands=()=>__webpack_require__.e(/* import() | components/brands */ 3).then(__webpack_require__.bind(null, 196)).then(c=>wrapFunctional(c.default||c));const CatalogMagazinesMainPage=()=>__webpack_require__.e(/* import() | components/catalog-magazines-main-page */ 4).then(__webpack_require__.bind(null, 282)).then(c=>wrapFunctional(c.default||c));const CatalogPage=()=>__webpack_require__.e(/* import() | components/catalog-page */ 5).then(__webpack_require__.bind(null, 283)).then(c=>wrapFunctional(c.default||c));const Footer=()=>Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 33)).then(c=>wrapFunctional(c.default||c));const Header=()=>__webpack_require__.e(/* import() | components/header */ 7).then(__webpack_require__.bind(null, 127)).then(c=>wrapFunctional(c.default||c));const HeaderMainPage=()=>__webpack_require__.e(/* import() | components/header-main-page */ 8).then(__webpack_require__.bind(null, 284)).then(c=>wrapFunctional(c.default||c));const LogoRectangle=()=>__webpack_require__.e(/* import() | components/logo-rectangle */ 9).then(__webpack_require__.bind(null, 194)).then(c=>wrapFunctional(c.default||c));const MagazineDescription=()=>__webpack_require__.e(/* import() | components/magazine-description */ 10).then(__webpack_require__.bind(null, 285)).then(c=>wrapFunctional(c.default||c));const News=()=>__webpack_require__.e(/* import() | components/news */ 14).then(__webpack_require__.bind(null, 197)).then(c=>wrapFunctional(c.default||c));const OnSaleItem=()=>__webpack_require__.e(/* import() | components/on-sale-item */ 15).then(__webpack_require__.bind(null, 192)).then(c=>wrapFunctional(c.default||c));const OtherItems=()=>__webpack_require__.e(/* import() | components/other-items */ 16).then(__webpack_require__.bind(null, 193)).then(c=>wrapFunctional(c.default||c));const PopularItem=()=>__webpack_require__.e(/* import() | components/popular-item */ 17).then(__webpack_require__.bind(null, 195)).then(c=>wrapFunctional(c.default||c));const ProductCard=()=>__webpack_require__.e(/* import() | components/product-card */ 18).then(__webpack_require__.bind(null, 93)).then(c=>wrapFunctional(c.default||c));const ProductLike=()=>__webpack_require__.e(/* import() | components/product-like */ 19).then(__webpack_require__.bind(null, 286)).then(c=>wrapFunctional(c.default||c));const FaqQuestions=()=>__webpack_require__.e(/* import() | components/faq-questions */ 6).then(__webpack_require__.bind(null, 190)).then(c=>wrapFunctional(c.default||c));const ModalsDangerMessage=()=>__webpack_require__.e(/* import() | components/modals-danger-message */ 11).then(__webpack_require__.bind(null, 104)).then(c=>wrapFunctional(c.default||c));const ModalsSuccessModal=()=>__webpack_require__.e(/* import() | components/modals-success-modal */ 12).then(__webpack_require__.bind(null, 103)).then(c=>wrapFunctional(c.default||c));const ModalsWarningMessage=()=>__webpack_require__.e(/* import() | components/modals-warning-message */ 13).then(__webpack_require__.bind(null, 98)).then(c=>wrapFunctional(c.default||c));const UIBaseLoading=()=>__webpack_require__.e(/* import() | components/u-i-base-loading */ 20).then(__webpack_require__.bind(null, 85)).then(c=>wrapFunctional(c.default||c));const UILoadingOnBlocks=()=>__webpack_require__.e(/* import() | components/u-i-loading-on-blocks */ 21).then(__webpack_require__.bind(null, 126)).then(c=>wrapFunctional(c.default||c));// nuxt/nuxt.js#8607
function wrapFunctional(options){if(!options||!options.functional){return options;}const propKeys=Array.isArray(options.props)?options.props:Object.keys(options.props||{});return{render(h){const attrs={};const props={};for(const key in this.$attrs){if(propKeys.includes(key)){props[key]=this.$attrs[key];}else{attrs[key]=this.$attrs[key];}}return h(options,{on:this.$listeners,attrs,props,scopedSlots:this.$scopedSlots},this.$slots.default);}};}
// CONCATENATED MODULE: ./.nuxt/components/plugin.js
for(const name in components_namespaceObject){external_vue_default.a.component(name,components_namespaceObject[name]);external_vue_default.a.component('Lazy'+name,components_namespaceObject[name]);}
// EXTERNAL MODULE: external "bootstrap-vue"
var external_bootstrap_vue_ = __webpack_require__(35);

// CONCATENATED MODULE: ./.nuxt/bootstrap-vue.js
external_vue_default.a.use(external_bootstrap_vue_["BootstrapVue"],{});
// EXTERNAL MODULE: ./node_modules/@nuxt/image/node_modules/defu/dist/defu.js
var defu = __webpack_require__(24);
var defu_default = /*#__PURE__*/__webpack_require__.n(defu);

// CONCATENATED MODULE: ./node_modules/@nuxt/image/dist/runtime/utils/meta.js
async function imageMeta(ctx,url){const cache=getCache(ctx);const cacheKey="image:meta:"+url;if(cache.has(cacheKey)){return cache.get(cacheKey);}const meta=await _imageMeta(url).catch(err=>{console.error("Failed to get image meta for "+url,err+"");return{width:0,height:0,ratio:0};});cache.set(cacheKey,meta);return meta;}async function _imageMeta(url){if(true){const imageMeta2=await Promise.resolve(/* import() */).then(__webpack_require__.t.bind(null, 82, 7)).then(r=>r.default||r);const data=await fetch(url).then(res=>res.buffer());const metadata=imageMeta2(data);if(!metadata){throw new Error(`No metadata could be extracted from the image \`${url}\`.`);}const{width,height}=metadata;const meta={width,height,ratio:width&&height?width/height:void 0};return meta;}if(typeof Image==="undefined"){throw new TypeError("Image not supported");}return new Promise((resolve,reject)=>{const img=new Image();img.onload=()=>{const meta={width:img.width,height:img.height,ratio:img.width/img.height};resolve(meta);};img.onerror=err=>reject(err);img.src=url;});}function getCache(ctx){if(!ctx.nuxtContext.cache){if(ctx.nuxtContext.ssrContext&&ctx.nuxtContext.ssrContext.cache){ctx.nuxtContext.cache=ctx.nuxtContext.ssrContext.cache;}else{const _cache={};ctx.nuxtContext.cache={get:id=>_cache[id],set:(id,value)=>{_cache[id]=value;},has:id=>typeof _cache[id]!=="undefined"};}}return ctx.nuxtContext.cache;}
// CONCATENATED MODULE: ./node_modules/@nuxt/image/dist/runtime/utils/index.js
function imageFetch(url){return fetch(cleanDoubleSlashes(url));}function getInt(x){if(typeof x==="number"){return x;}if(typeof x==="string"){return parseInt(x,10);}return void 0;}function getFileExtension(url=""){const extension=url.split(/[?#]/).shift().split("/").pop().split(".").pop();return extension;}function cleanDoubleSlashes(path=""){return path.replace(/(https?:\/\/)|(\/)+/g,"$1$2");}function createMapper(map){return key=>{return key?map[key]||key:map.missingValue;};}function createOperationsGenerator({formatter,keyMap,joinWith="/",valueMap}={}){if(!formatter){formatter=(key,value)=>`${key}=${value}`;}if(keyMap&&typeof keyMap!=="function"){keyMap=createMapper(keyMap);}const map=valueMap||{};Object.keys(map).forEach(valueKey=>{if(typeof map[valueKey]!=="function"){map[valueKey]=createMapper(map[valueKey]);}});return(modifiers={})=>{const operations=Object.entries(modifiers).filter(([_,value])=>typeof value!=="undefined").map(([key,value])=>{const mapper=map[key];if(typeof mapper==="function"){value=mapper(modifiers[key]);}key=typeof keyMap==="function"?keyMap(key):key;return formatter(key,value);});return operations.join(joinWith);};}function renderAttributesToString(attributes={}){return Object.entries(attributes).map(([key,value])=>value?`${key}="${value}"`:"").filter(Boolean).join(" ");}function renderTag(tag,attrs,contents){const html=`<${tag} ${renderAttributesToString(attrs)}>`;if(!contents){return html;}return html+contents+`</${tag}>`;}function generateAlt(src=""){return src.split(/[?#]/).shift().split("/").pop().split(".").shift();}function parseSize(input=""){if(typeof input==="number"){return input;}if(typeof input==="string"){if(input.replace("px","").match(/^\d+$/g)){return parseInt(input,10);}}}
// CONCATENATED MODULE: ./node_modules/@nuxt/image/dist/runtime/image.js
function createImage(globalOptions,nuxtContext){const staticImageManifest= false?undefined:{};const ctx={options:globalOptions,nuxtContext};const getImage=function(input,options={}){const image=resolveImage(ctx,input,options);if(image.isStatic){handleStaticImage(image,input);}return image;};const $img=function $img2(input,modifiers={},options={}){return getImage(input,{...options,modifiers:defu_default()(modifiers,options.modifiers||{})}).url;};function handleStaticImage(image,input){if(false){ var _ssrState$data, _ssrContext$image; }else if(true){image.url=input;}}for(const presetName in globalOptions.presets){$img[presetName]=(source,modifiers,options)=>$img(source,modifiers,{...globalOptions.presets[presetName],...options});}$img.options=globalOptions;$img.getImage=getImage;$img.getMeta=(input,options)=>getMeta(ctx,input,options);$img.getSizes=(input,options)=>getSizes(ctx,input,options);ctx.$img=$img;return $img;}async function getMeta(ctx,input,options){const image=resolveImage(ctx,input,{...options});if(typeof image.getMeta==="function"){return await image.getMeta();}else{return await imageMeta(ctx,image.url);}}function resolveImage(ctx,input,options){var _options$modifiers,_options$modifiers2;if(typeof input!=="string"||input===""){throw new TypeError(`input must be a string (received ${typeof input}: ${JSON.stringify(input)})`);}if(input.startsWith("data:")){return{url:input};}const{provider,defaults}=getProvider(ctx,options.provider||ctx.options.provider);const preset=getPreset(ctx,options.preset);input=Object(dist["hasProtocol"])(input)?input:Object(dist["withLeadingSlash"])(input);if(!provider.supportsAlias){for(const base in ctx.options.alias){if(input.startsWith(base)){input=Object(dist["joinURL"])(ctx.options.alias[base],input.substr(base.length));}}}if(provider.validateDomains&&Object(dist["hasProtocol"])(input)){const inputHost=Object(dist["parseURL"])(input).host;if(!ctx.options.domains.find(d=>d===inputHost)){return{url:input};}}const _options=defu_default()(options,preset,defaults);_options.modifiers={..._options.modifiers};const expectedFormat=_options.modifiers.format;if((_options$modifiers=_options.modifiers)!==null&&_options$modifiers!==void 0&&_options$modifiers.width){_options.modifiers.width=parseSize(_options.modifiers.width);}if((_options$modifiers2=_options.modifiers)!==null&&_options$modifiers2!==void 0&&_options$modifiers2.height){_options.modifiers.height=parseSize(_options.modifiers.height);}const image=provider.getImage(input,_options,ctx);image.format=image.format||expectedFormat||"";return image;}function getProvider(ctx,name){const provider=ctx.options.providers[name];if(!provider){throw new Error("Unknown provider: "+name);}return provider;}function getPreset(ctx,name){if(!name){return{};}if(!ctx.options.presets[name]){throw new Error("Unknown preset: "+name);}return ctx.options.presets[name];}function getSizes(ctx,input,opts){var _opts$modifiers,_opts$modifiers2;const width=parseSize((_opts$modifiers=opts.modifiers)===null||_opts$modifiers===void 0?void 0:_opts$modifiers.width);const height=parseSize((_opts$modifiers2=opts.modifiers)===null||_opts$modifiers2===void 0?void 0:_opts$modifiers2.height);const hwRatio=width&&height?height/width:0;const variants=[];const sizes={};if(typeof opts.sizes==="string"){for(const entry of opts.sizes.split(/[\s,]+/).filter(e=>e)){const s=entry.split(":");if(s.length!==2){continue;}sizes[s[0].trim()]=s[1].trim();}}else{Object.assign(sizes,opts.sizes);}for(const key in sizes){const screenMaxWidth=ctx.options.screens&&ctx.options.screens[key]||parseInt(key);let size=String(sizes[key]);const isFluid=size.endsWith("vw");if(!isFluid&&/^\d+$/.test(size)){size=size+"px";}if(!isFluid&&!size.endsWith("px")){continue;}let _cWidth=parseInt(size);if(!screenMaxWidth||!_cWidth){continue;}if(isFluid){_cWidth=Math.round(_cWidth/100*screenMaxWidth);}const _cHeight=hwRatio?Math.round(_cWidth*hwRatio):height;variants.push({width:_cWidth,size,screenMaxWidth,media:`(max-width: ${screenMaxWidth}px)`,src:ctx.$img(input,{...opts.modifiers,width:_cWidth,height:_cHeight},opts)});}variants.sort((v1,v2)=>v1.screenMaxWidth-v2.screenMaxWidth);const defaultVar=variants[variants.length-1];if(defaultVar){defaultVar.media="";}return{sizes:variants.map(v=>`${v.media?v.media+" ":""}${v.size}`).join(", "),srcset:variants.map(v=>`${v.src} ${v.width}w`).join(", "),src:defaultVar===null||defaultVar===void 0?void 0:defaultVar.src};}
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@nuxt/image/dist/runtime/components/nuxt-img.vue?vue&type=template&id=4f661172&
var nuxt_imgvue_type_template_id_4f661172_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('img',_vm._b({key:_vm.nSrc,attrs:{"src":_vm.nSrc}},'img',_vm.nAttrs,false),[])}
var nuxt_imgvue_type_template_id_4f661172_staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/@nuxt/image/dist/runtime/components/image.mixin.js
const defineMixin=opts=>opts;const imageMixin=defineMixin({props:{src:{type:String,required:true},format:{type:String,default:void 0},quality:{type:[Number,String],default:void 0},background:{type:String,default:void 0},fit:{type:String,default:void 0},modifiers:{type:Object,default:void 0},preset:{type:String,default:void 0},provider:{type:String,default:void 0},sizes:{type:[Object,String],default:void 0},width:{type:[String,Number],default:void 0},height:{type:[String,Number],default:void 0},alt:{type:String,default:void 0},referrerpolicy:{type:String,default:void 0},usemap:{type:String,default:void 0},longdesc:{type:String,default:void 0},ismap:{type:Boolean,default:void 0},crossorigin:{type:[Boolean,String],default:void 0,validator:val=>["anonymous","use-credentials","",true,false].includes(val)},loading:{type:String,default:void 0},decoding:{type:String,default:void 0,validator:val=>["async","auto","sync"].includes(val)}},computed:{nImgAttrs(){return{width:parseSize(this.width),height:parseSize(this.height),alt:this.alt,referrerpolicy:this.referrerpolicy,usemap:this.usemap,longdesc:this.longdesc,ismap:this.ismap,crossorigin:this.crossorigin===true?"anonymous":this.crossorigin||void 0,loading:this.loading,decoding:this.decoding};},nModifiers(){return{...this.modifiers,width:parseSize(this.width),height:parseSize(this.height),format:this.format,quality:this.quality,background:this.background,fit:this.fit};},nOptions(){return{provider:this.provider,preset:this.preset};}}});
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@nuxt/image/dist/runtime/components/nuxt-img.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
const defineComponent=opts=>opts;/* harmony default export */ var nuxt_imgvue_type_script_lang_js_ = (defineComponent({name:"NuxtImg",mixins:[imageMixin],computed:{nAttrs(){const attrs=this.nImgAttrs;if(this.sizes){const{sizes,srcset}=this.nSizes;attrs.sizes=sizes;attrs.srcset=srcset;}return attrs;},nSrc(){return this.sizes?this.nSizes.src:this.$img(this.src,this.nModifiers,this.nOptions);},nSizes(){return this.$img.getSizes(this.src,{...this.nOptions,sizes:this.sizes,modifiers:{...this.nModifiers,width:parseSize(this.width),height:parseSize(this.height)}});}},created(){if(false){}}}));
// CONCATENATED MODULE: ./node_modules/@nuxt/image/dist/runtime/components/nuxt-img.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_nuxt_imgvue_type_script_lang_js_ = (nuxt_imgvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./node_modules/@nuxt/image/dist/runtime/components/nuxt-img.vue





/* normalize component */

var nuxt_img_component = Object(componentNormalizer["a" /* default */])(
  components_nuxt_imgvue_type_script_lang_js_,
  nuxt_imgvue_type_template_id_4f661172_render,
  nuxt_imgvue_type_template_id_4f661172_staticRenderFns,
  false,
  null,
  null,
  "055ee62a"
  
)

/* harmony default export */ var nuxt_img = (nuxt_img_component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@nuxt/image/dist/runtime/components/nuxt-picture.vue?vue&type=template&id=2fd3a122&
var nuxt_picturevue_type_template_id_2fd3a122_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('picture',{key:_vm.nSources[0].src},[_vm._ssrNode(((_vm.nSources[1])?("<source"+(_vm._ssrAttr("type",_vm.nSources[1].type))+(_vm._ssrAttr("srcset",_vm.nSources[1].srcset))+(_vm._ssrAttr("sizes",_vm.nSources[1].sizes))+">"):"<!---->")+" <img"+(_vm._ssrAttr("src",_vm.nSources[0].src))+(_vm._ssrAttr("srcset",_vm.nSources[0].srcset))+(_vm._ssrAttr("sizes",_vm.nSources[0].sizes))+(_vm._ssrAttrs(_vm.nImgAttrs))+">")])}
var nuxt_picturevue_type_template_id_2fd3a122_staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@nuxt/image/dist/runtime/components/nuxt-picture.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
const nuxt_picturevue_type_script_lang_js_defineComponent=opts=>opts;/* harmony default export */ var nuxt_picturevue_type_script_lang_js_ = (nuxt_picturevue_type_script_lang_js_defineComponent({name:"NuxtPicture",mixins:[imageMixin],props:{legacyFormat:{type:String,default:null}},computed:{isTransparent(){return["png","webp","gif"].includes(this.originalFormat);},originalFormat(){return getFileExtension(this.src);},nFormat(){if(this.format){return this.format;}if(this.originalFormat==="svg"){return"svg";}return"webp";},nLegacyFormat(){if(this.legacyFormat){return this.legacyFormat;}const formats={webp:this.isTransparent?"png":"jpeg",svg:"png"};return formats[this.nFormat]||this.originalFormat;},nSources(){if(this.nFormat==="svg"){return[{srcset:this.src}];}const formats=this.nLegacyFormat!==this.nFormat?[this.nLegacyFormat,this.nFormat]:[this.nFormat];const sources=formats.map(format=>{const{srcset,sizes,src}=this.$img.getSizes(this.src,{...this.nOptions,sizes:this.sizes||this.$img.options.screens,modifiers:{...this.nModifiers,format}});return{src,type:`image/${format}`,sizes,srcset};});return sources;}},created(){if(false){}}}));
// CONCATENATED MODULE: ./node_modules/@nuxt/image/dist/runtime/components/nuxt-picture.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_nuxt_picturevue_type_script_lang_js_ = (nuxt_picturevue_type_script_lang_js_); 
// CONCATENATED MODULE: ./node_modules/@nuxt/image/dist/runtime/components/nuxt-picture.vue





/* normalize component */

var nuxt_picture_component = Object(componentNormalizer["a" /* default */])(
  components_nuxt_picturevue_type_script_lang_js_,
  nuxt_picturevue_type_template_id_2fd3a122_render,
  nuxt_picturevue_type_template_id_2fd3a122_staticRenderFns,
  false,
  null,
  null,
  "967096b4"
  
)

/* harmony default export */ var nuxt_picture = (nuxt_picture_component.exports);
// CONCATENATED MODULE: ./node_modules/@nuxt/image/dist/runtime/providers/ipx.js
const operationsGenerator=createOperationsGenerator({keyMap:{format:"f",fit:"fit",width:"w",height:"h",resize:"s",quality:"q",background:"b"},joinWith:",",formatter:(key,val)=>Object(dist["encodeParam"])(key)+"_"+Object(dist["encodeParam"])(val)});const ipx_getImage=(src,{modifiers={},baseURL="/_ipx"}={},{nuxtContext:{base:nuxtBase="/"}={}})=>{if(modifiers.width&&modifiers.height){modifiers.resize=`${modifiers.width}x${modifiers.height}`;delete modifiers.width;delete modifiers.height;}const params=operationsGenerator(modifiers)||"_";return{url:Object(dist["joinURL"])(nuxtBase,baseURL,params,Object(dist["encodePath"])(src))};};const validateDomains=true;const supportsAlias=true;
// CONCATENATED MODULE: ./node_modules/@nuxt/image/dist/runtime/providers/static.js
const static_getImage=(src,options,ctx)=>({...ipx_getImage(src,options,ctx),isStatic:true});const static_supportsAlias=true;
// CONCATENATED MODULE: ./.nuxt/image.js
const imageOptions={"screens":{"xs":320,"sm":640,"md":768,"lg":1024,"xl":1280,"xxl":1536,"2xl":1536},"presets":{},"provider":"ipx","domains":[],"alias":{}};imageOptions.providers={['static']:{provider:static_namespaceObject,defaults:{}},['ipx']:{provider:ipx_namespaceObject,defaults:{}}};external_vue_default.a.component(nuxt_img.name,nuxt_img);external_vue_default.a.component(nuxt_picture.name,nuxt_picture);external_vue_default.a.component('NImg',nuxt_img);external_vue_default.a.component('NPicture',nuxt_picture);/* harmony default export */ var _nuxt_image = (function(nuxtContext,inject){const $img=createImage(imageOptions,nuxtContext);if(false){}inject('img',$img);});
// EXTERNAL MODULE: ./node_modules/is-https/dist/index.js
var is_https_dist = __webpack_require__(36);
var is_https_dist_default = /*#__PURE__*/__webpack_require__.n(is_https_dist);

// CONCATENATED MODULE: ./.nuxt/nuxt-i18n/options.js
const Constants={COMPONENT_OPTIONS_KEY:"nuxtI18n",STRATEGIES:{"PREFIX":"prefix","PREFIX_EXCEPT_DEFAULT":"prefix_except_default","PREFIX_AND_DEFAULT":"prefix_and_default","NO_PREFIX":"no_prefix"},REDIRECT_ON_OPTIONS:{"ALL":"all","ROOT":"root","NO_PREFIX":"no prefix"}};const nuxtOptions={isUniversalMode:true,trailingSlash:undefined};const options_options={vueI18n:{},vueI18nLoader:false,locales:[{"code":"uz","file":"uz.js"},{"code":"ru","file":"ru.js"}],defaultLocale:"uz",defaultDirection:"ltr",routesNameSeparator:"___",defaultLocaleRouteNameSuffix:"default",sortRoutes:true,strategy:"prefix_except_default",lazy:true,langDir:"C:\\Users\\ZAFAR_0210\\OneDrive\\Desktop\\work\\tujjor\\lang",rootRedirect:null,detectBrowserLanguage:{"alwaysRedirect":false,"cookieCrossOrigin":false,"cookieDomain":null,"cookieKey":"i18n_redirected","cookieSecure":false,"fallbackLocale":"","redirectOn":"root","useCookie":true},differentDomains:false,baseUrl:"",vuex:{"moduleName":"i18n","syncRouteParams":true},parsePages:true,pages:{},skipSettingLocaleOnNavigate:false,onBeforeLanguageSwitch:()=>{},onLanguageSwitched:()=>null,normalizedLocales:[{"code":"uz","file":"uz.js"},{"code":"ru","file":"ru.js"}],localeCodes:["uz","ru"]};const localeMessages={'uz.js':()=>__webpack_require__.e(/* import() | lang-uz.js */ 23).then(__webpack_require__.bind(null, 256)),'ru.js':()=>__webpack_require__.e(/* import() | lang-ru.js */ 22).then(__webpack_require__.bind(null, 257))};
// EXTERNAL MODULE: external "cookie"
var external_cookie_ = __webpack_require__(6);
var external_cookie_default = /*#__PURE__*/__webpack_require__.n(external_cookie_);

// EXTERNAL MODULE: external "js-cookie"
var external_js_cookie_ = __webpack_require__(74);

// CONCATENATED MODULE: ./.nuxt/nuxt-i18n/utils-common.js
/** @typedef {import('../../types/internal').ResolvedOptions} ResolvedOptions */ /**
 * Formats a log message, prefixing module's name to it.
 *
 * @param {string} text
 * @return {string}
 */function formatMessage(text){return`[@nuxtjs/i18n] ${text}`;}/**
 * Parses locales provided from browser through `accept-language` header.
 *
 * @param {string} input
 * @return {string[]} An array of locale codes. Priority determined by order in array.
 */function parseAcceptLanguage(input){// Example input: en-US,en;q=0.9,nb;q=0.8,no;q=0.7
// Contains tags separated by comma.
// Each tag consists of locale code (2-3 letter language code) and optionally country code
// after dash. Tag can also contain score after semicolon, that is assumed to match order
// so it's not explicitly used.
return input.split(',').map(tag=>tag.split(';')[0]);}/**
 * Find locale code that best matches provided list of browser locales.
 *
 * @param {ResolvedOptions['normalizedLocales']} appLocales The user-configured locales that are to be matched.
 * @param {readonly string[]} browserLocales The locales to match against configured.
 * @return {string | undefined}
 */function matchBrowserLocale(appLocales,browserLocales){/** @type {{ code: string, score: number }[]} */const matchedLocales=[];// Normalise appLocales input
/** @type {{ code: string, iso: string }[]} */const normalizedAppLocales=[];for(const appLocale of appLocales){const{code}=appLocale;const iso=appLocale.iso||code;normalizedAppLocales.push({code,iso});}// First pass: match exact locale.
for(const[index,browserCode]of browserLocales.entries()){const matchedLocale=normalizedAppLocales.find(appLocale=>appLocale.iso.toLowerCase()===browserCode.toLowerCase());if(matchedLocale){matchedLocales.push({code:matchedLocale.code,score:1-index/browserLocales.length});break;}}// Second pass: match only locale code part of the browser locale (not including country).
for(const[index,browserCode]of browserLocales.entries()){const languageCode=browserCode.split('-')[0].toLowerCase();const matchedLocale=normalizedAppLocales.find(appLocale=>appLocale.iso.split('-')[0].toLowerCase()===languageCode);if(matchedLocale){// Deduct a thousandth for being non-exact match.
matchedLocales.push({code:matchedLocale.code,score:0.999-index/browserLocales.length});break;}}// Sort the list by score (0 - lowest, 1 - highest).
if(matchedLocales.length>1){matchedLocales.sort((localeA,localeB)=>{if(localeA.score===localeB.score){// If scores are equal then pick more specific (longer) code.
return localeB.code.length-localeA.code.length;}return localeB.score-localeA.score;});}return matchedLocales.length?matchedLocales[0].code:undefined;}/**
 * Get locale code that corresponds to current hostname
 *
 * @param  {ResolvedOptions['normalizedLocales']} locales
 * @param  {import('http').IncomingMessage | undefined} req
 * @return {string} Locale code found if any
 */function getLocaleDomain(locales,req){/** @type {string | undefined} */let host;if(false){}else if(req){const detectedHost=req.headers['x-forwarded-host']||req.headers.host;host=Array.isArray(detectedHost)?detectedHost[0]:detectedHost;}if(host){const matchingLocale=locales.find(l=>l.domain===host);if(matchingLocale){return matchingLocale.code;}}return'';}/**
 * Creates a RegExp for route paths
 *
 * @param  {readonly string[]} localeCodes
 * @return {RegExp}
 */function getLocalesRegex(localeCodes){return new RegExp(`^/(${localeCodes.join('|')})(?:/|$)`,'i');}/**
 * Creates getter for getLocaleFromRoute
 *
 * @param  {readonly string[]} localeCodes
 * @param  {Pick<ResolvedOptions, 'routesNameSeparator' | 'defaultLocaleRouteNameSuffix'>} options
 */function createLocaleFromRouteGetter(localeCodes,{routesNameSeparator,defaultLocaleRouteNameSuffix}){const localesPattern=`(${localeCodes.join('|')})`;const defaultSuffixPattern=`(?:${routesNameSeparator}${defaultLocaleRouteNameSuffix})?`;const regexpName=new RegExp(`${routesNameSeparator}${localesPattern}${defaultSuffixPattern}$`,'i');const regexpPath=getLocalesRegex(localeCodes);/**
   * Extract locale code from given route:
   * - If route has a name, try to extract locale from it
   * - Otherwise, fall back to using the routes'path
   * @param  {import('vue-router').Route} route
   * @return {string} Locale code found if any
   */const getLocaleFromRoute=route=>{// Extract from route name
if(route.name){const matches=route.name.match(regexpName);if(matches&&matches.length>1){return matches[1];}}else if(route.path){// Extract from path
const matches=route.path.match(regexpPath);if(matches&&matches.length>1){return matches[1];}}return'';};return getLocaleFromRoute;}/**
 * @param {import('http').IncomingMessage | undefined} req
 * @param {{ useCookie: boolean, cookieKey: string, localeCodes: readonly string[] }} options
 * @return {string | undefined}
 */function getLocaleCookie(req,{useCookie,cookieKey,localeCodes}){if(useCookie){let localeCode;if(false){}else if(req&&typeof req.headers.cookie!=='undefined'){const cookies=req.headers&&req.headers.cookie?external_cookie_default.a.parse(req.headers.cookie):{};localeCode=cookies[cookieKey];}if(localeCode&&localeCodes.includes(localeCode)){return localeCode;}}}/**
 * @param {string} locale
 * @param {import('http').ServerResponse | undefined} res
 * @param {{ useCookie: boolean, cookieDomain: string | null, cookieKey: string, cookieSecure: boolean, cookieCrossOrigin: boolean}} options
 */function setLocaleCookie(locale,res,{useCookie,cookieDomain,cookieKey,cookieSecure,cookieCrossOrigin}){if(!useCookie){return;}const date=new Date();/** @type {import('cookie').CookieSerializeOptions} */const cookieOptions={expires:new Date(date.setDate(date.getDate()+365)),path:'/',sameSite:cookieCrossOrigin?'none':'lax',secure:cookieCrossOrigin||cookieSecure};if(cookieDomain){cookieOptions.domain=cookieDomain;}if(false){}else if(res){let headers=res.getHeader('Set-Cookie')||[];if(!Array.isArray(headers)){headers=[String(headers)];}const redirectCookie=external_cookie_default.a.serialize(cookieKey,locale,cookieOptions);headers.push(redirectCookie);res.setHeader('Set-Cookie',headers);}}
// CONCATENATED MODULE: ./node_modules/ufo/dist/index.mjs
const n=/[^\0-\x7E]/;const t=/[\x2E\u3002\uFF0E\uFF61]/g;const o={overflow:"Overflow Error","not-basic":"Illegal Input","invalid-input":"Invalid Input"};const e=Math.floor;const r=String.fromCharCode;function s(n2){throw new RangeError(o[n2]);}const dist_c=function(n2,t2){return n2+22+75*(n2<26)-((t2!=0)<<5);};const u=function(n2,t2,o2){let r2=0;for(n2=o2?e(n2/700):n2>>1,n2+=e(n2/t2);n2>455;r2+=36){n2=e(n2/35);}return e(r2+36*n2/(n2+38));};function toASCII(o2){return function(n2,o3){const e2=n2.split("@");let r2="";e2.length>1&&(r2=e2[0]+"@",n2=e2[1]);const s2=function(n3,t2){const o4=[];let e3=n3.length;for(;e3--;){o4[e3]=t2(n3[e3]);}return o4;}((n2=n2.replace(t,".")).split("."),o3).join(".");return r2+s2;}(o2,function(t2){return n.test(t2)?"xn--"+function(n2){const t3=[];const o3=(n2=function(n3){const t4=[];let o4=0;const e2=n3.length;for(;o4<e2;){const r2=n3.charCodeAt(o4++);if(r2>=55296&&r2<=56319&&o4<e2){const e3=n3.charCodeAt(o4++);(64512&e3)==56320?t4.push(((1023&r2)<<10)+(1023&e3)+65536):(t4.push(r2),o4--);}else{t4.push(r2);}}return t4;}(n2)).length;let f=128;let i=0;let l=72;for(const o4 of n2){o4<128&&t3.push(r(o4));}const h=t3.length;let p=h;for(h&&t3.push("-");p<o3;){let o4=2147483647;for(const t4 of n2){t4>=f&&t4<o4&&(o4=t4);}const a=p+1;o4-f>e((2147483647-i)/a)&&s("overflow"),i+=(o4-f)*a,f=o4;for(const o5 of n2){if(o5<f&&++i>2147483647&&s("overflow"),o5==f){let n3=i;for(let o6=36;;o6+=36){const s2=o6<=l?1:o6>=l+26?26:o6-l;if(n3<s2){break;}const u2=n3-s2;const f2=36-s2;t3.push(r(dist_c(s2+u2%f2,0))),n3=e(u2/f2);}t3.push(r(dist_c(n3,0))),l=u(i,a,p==h),i=0,++p;}}++i,++f;}return t3.join("");}(t2):t2;});}const HASH_RE=/#/g;const AMPERSAND_RE=/&/g;const SLASH_RE=/\//g;const EQUAL_RE=/=/g;const IM_RE=/\?/g;const PLUS_RE=/\+/g;const ENC_BRACKET_OPEN_RE=/%5B/gi;const ENC_BRACKET_CLOSE_RE=/%5D/gi;const ENC_CARET_RE=/%5E/gi;const ENC_BACKTICK_RE=/%60/gi;const ENC_CURLY_OPEN_RE=/%7B/gi;const ENC_PIPE_RE=/%7C/gi;const ENC_CURLY_CLOSE_RE=/%7D/gi;const ENC_SPACE_RE=/%20/gi;const ENC_SLASH_RE=/%2F/gi;const ENC_ENC_SLASH_RE=/%252F/gi;function encode(text){return encodeURI(""+text).replace(ENC_PIPE_RE,"|").replace(ENC_BRACKET_OPEN_RE,"[").replace(ENC_BRACKET_CLOSE_RE,"]");}function encodeHash(text){return encode(text).replace(ENC_CURLY_OPEN_RE,"{").replace(ENC_CURLY_CLOSE_RE,"}").replace(ENC_CARET_RE,"^");}function encodeQueryValue(text){return encode(text).replace(PLUS_RE,"%2B").replace(ENC_SPACE_RE,"+").replace(HASH_RE,"%23").replace(AMPERSAND_RE,"%26").replace(ENC_BACKTICK_RE,"`").replace(ENC_CURLY_OPEN_RE,"{").replace(ENC_CURLY_CLOSE_RE,"}").replace(ENC_CARET_RE,"^");}function encodeQueryKey(text){return encodeQueryValue(text).replace(EQUAL_RE,"%3D");}function encodePath(text){return encode(text).replace(HASH_RE,"%23").replace(IM_RE,"%3F").replace(ENC_ENC_SLASH_RE,"%2F").replace(AMPERSAND_RE,"%26").replace(PLUS_RE,"%2B");}function encodeParam(text){return encodePath(text).replace(SLASH_RE,"%2F");}function decode(text=""){try{return decodeURIComponent(""+text);}catch(_err){return""+text;}}function decodePath(text){return decode(text.replace(ENC_SLASH_RE,"%252F"));}function decodeQueryValue(text){return decode(text.replace(PLUS_RE," "));}function encodeHost(name=""){return toASCII(name);}function parseQuery(paramsStr=""){const obj={};if(paramsStr[0]==="?"){paramsStr=paramsStr.substr(1);}for(const param of paramsStr.split("&")){const s=param.match(/([^=]+)=?(.*)/)||[];if(s.length<2){continue;}const key=decode(s[1]);if(key==="__proto__"||key==="constructor"){continue;}const value=decodeQueryValue(s[2]||"");if(obj[key]){if(Array.isArray(obj[key])){obj[key].push(value);}else{obj[key]=[obj[key],value];}}else{obj[key]=value;}}return obj;}function encodeQueryItem(key,val){if(!val){return encodeQueryKey(key);}if(Array.isArray(val)){return val.map(_val=>`${encodeQueryKey(key)}=${encodeQueryValue(_val)}`).join("&");}return`${encodeQueryKey(key)}=${encodeQueryValue(val)}`;}function stringifyQuery(query){return Object.keys(query).map(k=>encodeQueryItem(k,query[k])).join("&");}class $URL{constructor(input=""){this.query={};if(typeof input!=="string"){throw new TypeError(`URL input should be string received ${typeof input} (${input})`);}const parsed=parseURL(input);this.protocol=decode(parsed.protocol);this.host=decode(parsed.host);this.auth=decode(parsed.auth);this.pathname=decodePath(parsed.pathname);this.query=parseQuery(parsed.search);this.hash=decode(parsed.hash);}get hostname(){return parseHost(this.host).hostname;}get port(){return parseHost(this.host).port||"";}get username(){return parseAuth(this.auth).username;}get password(){return parseAuth(this.auth).password||"";}get hasProtocol(){return this.protocol.length;}get isAbsolute(){return this.hasProtocol||this.pathname[0]==="/";}get search(){const q=stringifyQuery(this.query);return q.length?"?"+q:"";}get searchParams(){const p=new URLSearchParams();for(const name in this.query){const value=this.query[name];if(Array.isArray(value)){value.forEach(v=>p.append(name,v));}else{p.append(name,value||"");}}return p;}get origin(){return(this.protocol?this.protocol+"//":"")+encodeHost(this.host);}get fullpath(){return encodePath(this.pathname)+this.search+encodeHash(this.hash);}get encodedAuth(){if(!this.auth){return"";}const{username,password}=parseAuth(this.auth);return encodeURIComponent(username)+(password?":"+encodeURIComponent(password):"");}get href(){const auth=this.encodedAuth;const originWithAuth=(this.protocol?this.protocol+"//":"")+(auth?auth+"@":"")+encodeHost(this.host);return this.hasProtocol&&this.isAbsolute?originWithAuth+this.fullpath:this.fullpath;}append(url){if(url.hasProtocol){throw new Error("Cannot append a URL with protocol");}Object.assign(this.query,url.query);if(url.pathname){this.pathname=withTrailingSlash(this.pathname)+withoutLeadingSlash(url.pathname);}if(url.hash){this.hash=url.hash;}}toJSON(){return this.href;}toString(){return this.href;}}function isRelative(inputStr){return["./","../"].some(str=>inputStr.startsWith(str));}function hasProtocol(inputStr,acceptProtocolRelative=false){return /^\w+:\/\/.+/.test(inputStr)||acceptProtocolRelative&&/^\/\/[^/]+/.test(inputStr);}const TRAILING_SLASH_RE=/\/$|\/\?/;function hasTrailingSlash(input="",queryParams=false){if(!queryParams){return input.endsWith("/");}return TRAILING_SLASH_RE.test(input);}function withoutTrailingSlash(input="",queryParams=false){if(!queryParams){return(hasTrailingSlash(input)?input.slice(0,-1):input)||"/";}if(!hasTrailingSlash(input,true)){return input||"/";}const[s0,...s]=input.split("?");return(s0.slice(0,-1)||"/")+(s.length?`?${s.join("?")}`:"");}function withTrailingSlash(input="",queryParams=false){if(!queryParams){return input.endsWith("/")?input:input+"/";}if(hasTrailingSlash(input,true)){return input||"/";}const[s0,...s]=input.split("?");return s0+"/"+(s.length?`?${s.join("?")}`:"");}function hasLeadingSlash(input=""){return input.startsWith("/");}function withoutLeadingSlash(input=""){return(hasLeadingSlash(input)?input.substr(1):input)||"/";}function withLeadingSlash(input=""){return hasLeadingSlash(input)?input:"/"+input;}function dist_cleanDoubleSlashes(input=""){return input.split("://").map(str=>str.replace(/\/{2,}/g,"/")).join("://");}function withBase(input,base){if(isEmptyURL(base)){return input;}const _base=withoutTrailingSlash(base);if(input.startsWith(_base)){return input;}return joinURL(_base,input);}function withoutBase(input,base){if(isEmptyURL(base)){return input;}const _base=withoutTrailingSlash(base);if(input.startsWith(_base)){return input.substr(_base.length)||"/";}return input;}function withQuery(input,query){const parsed=parseURL(input);const mergedQuery={...parseQuery(parsed.search),...query};parsed.search=stringifyQuery(mergedQuery);return stringifyParsedURL(parsed);}function getQuery(input){return parseQuery(parseURL(input).search);}function isEmptyURL(url){return!url||url==="/";}function isNonEmptyURL(url){return url&&url!=="/";}function joinURL(base,...input){let url=base||"";for(const i of input.filter(isNonEmptyURL)){url=url?withTrailingSlash(url)+withoutLeadingSlash(i):i;}return url;}function createURL(input){return new $URL(input);}function normalizeURL(input){return createURL(input).toString();}function resolveURL(base,...input){const url=createURL(base);for(const i of input.filter(isNonEmptyURL)){url.append(createURL(i));}return url.toString();}function dist_isSamePath(p1,p2){return decode(withoutTrailingSlash(p1))===decode(withoutTrailingSlash(p2));}function parseURL(input="",defaultProto){if(!hasProtocol(input,true)){return defaultProto?parseURL(defaultProto+input):parsePath(input);}const[protocol="",auth,hostAndPath]=(input.match(/([^:/]+:)?\/\/([^/@]+@)?(.*)/)||[]).splice(1);const[host="",path=""]=(hostAndPath.match(/([^/?]*)(.*)?/)||[]).splice(1);const{pathname,search,hash}=parsePath(path);return{protocol,auth:auth?auth.substr(0,auth.length-1):"",host,pathname,search,hash};}function parsePath(input=""){const[pathname="",search="",hash=""]=(input.match(/([^#?]*)(\?[^#]*)?(#.*)?/)||[]).splice(1);return{pathname,search,hash};}function parseAuth(input=""){const[username,password]=input.split(":");return{username:decode(username),password:decode(password)};}function parseHost(input=""){const[hostname,port]=(input.match(/([^/]*)(:0-9+)?/)||[]).splice(1);return{hostname:decode(hostname),port};}function stringifyParsedURL(parsed){const fullpath=parsed.pathname+(parsed.search?(parsed.search.startsWith("?")?"":"?")+parsed.search:"")+parsed.hash;if(!parsed.protocol){return fullpath;}return parsed.protocol+"//"+(parsed.auth?parsed.auth+"@":"")+parsed.host+fullpath;}
// CONCATENATED MODULE: ./.nuxt/nuxt-i18n/plugin.utils.js
// @ts-ignore
/** @typedef {import('../../types/internal').ResolvedOptions} ResolvedOptions */ /**
 * Asynchronously load messages from translation files
 *
 * @param {import('@nuxt/types').Context} context
 * @param {string} locale Language code to load
 * @return {Promise<void>}
 */async function loadLanguageAsync(context,locale){const{app}=context;const{i18n}=app;if(!i18n.loadedLanguages){i18n.loadedLanguages=[];}if(!i18n.loadedLanguages.includes(locale)){const localeObject=options_options.normalizedLocales.find(l=>l.code===locale);if(localeObject){const{file}=localeObject;if(file){/*  */ /** @type {import('vue-i18n').LocaleMessageObject | undefined} */let messages;if(false){}if(!messages){try{// @ts-ignore
const getter=await localeMessages[file]().then(m=>m.default||m);messages=typeof getter==='function'?await Promise.resolve(getter(context,locale)):getter;}catch(error){// eslint-disable-next-line no-console
console.error(formatMessage(`Failed loading async locale export: ${/** @type {Error} */error.message}`));}}if(messages){i18n.setLocaleMessage(locale,messages);i18n.loadedLanguages.push(locale);}/*  */}else{console.warn(formatMessage(`Could not find lang file for locale ${locale}`));}}else{console.warn(formatMessage(`Attempted to load messages for non-existant locale code "${locale}"`));}}}/**
 * Resolves base URL value if provided as function. Otherwise just returns verbatim.
 *
 * @param {string | ((context: import('@nuxt/types').Context) => string)} baseUrl
 * @param {import('@nuxt/types').Context} context
 * @param {import('../../types').Locale} localeCode
 * @param {Pick<ResolvedOptions, 'differentDomains' | 'normalizedLocales'>} options
 * @return {string}
 */function resolveBaseUrl(baseUrl,context,localeCode,{differentDomains,normalizedLocales}){if(typeof baseUrl==='function'){return baseUrl(context);}if(differentDomains&&localeCode){// Lookup the `differentDomain` origin associated with given locale.
const domain=getDomainFromLocale(localeCode,context.req,{normalizedLocales});if(domain){return domain;}}return baseUrl;}/**
 * Gets the `differentDomain` domain from locale.
 *
 * @param {string} localeCode
 * @param {import('http').IncomingMessage | undefined} req
 * @param {Pick<ResolvedOptions, 'normalizedLocales'>} options
 * @return {string | undefined}
 */function getDomainFromLocale(localeCode,req,{normalizedLocales}){// Lookup the `differentDomain` origin associated with given locale.
const lang=normalizedLocales.find(locale=>locale.code===localeCode);if(lang&&lang.domain){if(hasProtocol(lang.domain)){return lang.domain;}let protocol;if(true){protocol=req&&is_https_dist_default()(req)?'https':'http';}else{}return`${protocol}://${lang.domain}`;}// eslint-disable-next-line no-console
console.warn(formatMessage(`Could not find domain name for locale ${localeCode}`));}/**
 * @param {import('vuex').Store<Record<string, boolean>>} store
 * @param {Required<import('../../types').VuexOptions>} vuex
 * @param {readonly string[]} localeCodes
 */function registerStore(store,vuex,localeCodes){/** @typedef {{
   *    locale?: string
   *    messages?: Record<string, string>
   *    routeParams?: Record<string, Record<string, string>>
   * }} ModuleStore
   *
   * @type {import('vuex').Module<ModuleStore, {}>}
   */const storeModule={namespaced:true,state:()=>({...(vuex.syncRouteParams?{routeParams:{}}:{})}),actions:{...(vuex.syncRouteParams?{setRouteParams({commit},params){if(false){}commit('setRouteParams',params);}}:{})},mutations:{...(vuex.syncRouteParams?{setRouteParams(state,params){state.routeParams=params;}}:{})},getters:{...(vuex.syncRouteParams?{localeRouteParams:({routeParams})=>{/** @type {(locale: string) => Record<string, string>} */const paramsGetter=locale=>routeParams&&routeParams[locale]||{};return paramsGetter;}}:{})}};store.registerModule(vuex.moduleName,storeModule,{preserveState:!!store.state[vuex.moduleName]});}/**
 * Validate setRouteParams action's payload
 *
 * @param {object} routeParams The action's payload
 * @param {readonly string[]} localeCodes
 */function validateRouteParams(routeParams,localeCodes){if(!isObject(routeParams)){// eslint-disable-next-line no-console
console.warn(formatMessage('Route params should be an object'));return;}for(const[key,value]of Object.entries(routeParams)){if(!localeCodes.includes(key)){// eslint-disable-next-line no-console
console.warn(formatMessage(`Trying to set route params for key ${key} which is not a valid locale`));}else if(!isObject(value)){// eslint-disable-next-line no-console
console.warn(formatMessage(`Trying to set route params for locale ${key} with a non-object value`));}}}/**
 * @param {any} value
 * @return {boolean}
 */function isObject(value){return value&&!Array.isArray(value)&&typeof value==='object';}
// CONCATENATED MODULE: ./.nuxt/nuxt-i18n/middleware.js
// @ts-ignore
/** @type {import('@nuxt/types').Middleware} */const i18nMiddleware=async context=>{const{app,isHMR}=context;if(isHMR){return;}const[status,redirectPath,preserveQuery]=await app.i18n.__onNavigate(context.route);if(status&&redirectPath){const query=preserveQuery?context.route.query:undefined;context.redirect(status,redirectPath,query);}};_nuxt_middleware.nuxti18n=i18nMiddleware;
// CONCATENATED MODULE: ./.nuxt/nuxt-i18n/plugin.routing.js
// @ts-ignore
/**
 * @this {import('../../types/internal').PluginProxy}
 * @type {Vue['localePath']}
 */function plugin_routing_localePath(route,locale){const localizedRoute=resolveRoute.call(this,route,locale);return localizedRoute?localizedRoute.route.redirectedFrom||localizedRoute.route.fullPath:'';}/**
 * @this {import('../../types/internal').PluginProxy}
 * @type {Vue['localeRoute']}
 */function localeRoute(route,locale){const resolved=resolveRoute.call(this,route,locale);return resolved?resolved.route:undefined;}/**
 * @this {import('../../types/internal').PluginProxy}
 * @type {Vue['localeLocation']}
 */function localeLocation(route,locale){const resolved=resolveRoute.call(this,route,locale);return resolved?resolved.location:undefined;}/**
 * @this {import('../../types/internal').PluginProxy}
 * @param {import('vue-router').RawLocation} route
 * @param {string} [locale]
 * @return {ReturnType<import('vue-router').default['resolve']> | undefined}
 */function resolveRoute(route,locale){// Abort if no route or no locale
if(!route){return;}const{i18n}=this;locale=locale||i18n.locale;if(!locale){return;}// If route parameter is a string, check if it's a path or name of route.
if(typeof route==='string'){if(route[0]==='/'){// If route parameter is a path, create route object with path.
route={path:route};}else{// Else use it as route name.
route={name:route};}}let localizedRoute=Object.assign({},route);if(localizedRoute.path&&!localizedRoute.name){const resolvedRoute=this.router.resolve(localizedRoute).route;const resolvedRouteName=this.getRouteBaseName(resolvedRoute);if(resolvedRouteName){localizedRoute={name:getLocaleRouteName(resolvedRouteName,locale),params:resolvedRoute.params,query:resolvedRoute.query,hash:resolvedRoute.hash};}else{const isDefaultLocale=locale===options_options.defaultLocale;// if route has a path defined but no name, resolve full route using the path
const isPrefixed=// don't prefix default locale
!(isDefaultLocale&&[Constants.STRATEGIES.PREFIX_EXCEPT_DEFAULT,Constants.STRATEGIES.PREFIX_AND_DEFAULT].includes(options_options.strategy))&&// no prefix for any language
!(options_options.strategy===Constants.STRATEGIES.NO_PREFIX)&&// no prefix for different domains
!i18n.differentDomains;if(isPrefixed){localizedRoute.path=`/${locale}${localizedRoute.path}`;}localizedRoute.path=nuxtOptions.trailingSlash?withTrailingSlash(localizedRoute.path,true):withoutTrailingSlash(localizedRoute.path,true);}}else{if(!localizedRoute.name&&!localizedRoute.path){localizedRoute.name=this.getRouteBaseName();}localizedRoute.name=getLocaleRouteName(localizedRoute.name,locale);const{params}=localizedRoute;if(params&&params['0']===undefined&&params.pathMatch){params['0']=params.pathMatch;}}const resolvedRoute=this.router.resolve(localizedRoute);if(resolvedRoute.route.name){return resolvedRoute;}// If didn't resolve to an existing route then just return resolved route based on original input.
return this.router.resolve(route);}/**
 * @this {import('../../types/internal').PluginProxy}
 * @type {Vue['switchLocalePath']}
 */function switchLocalePath(locale){const name=this.getRouteBaseName();if(!name){return'';}const{i18n,route,store}=this;const{params,...routeCopy}=route;let langSwitchParams={};if(options_options.vuex&&options_options.vuex.syncRouteParams&&store){langSwitchParams=store.getters[`${options_options.vuex.moduleName}/localeRouteParams`](locale);}const baseRoute=Object.assign({},routeCopy,{name,params:{...params,...langSwitchParams,0:params.pathMatch}});let path=this.localePath(baseRoute,locale);// Handle different domains
if(i18n.differentDomains){const getDomainOptions={differentDomains:i18n.differentDomains,normalizedLocales:options_options.normalizedLocales};const domain=getDomainFromLocale(locale,this.req,getDomainOptions);if(domain){path=domain+path;}}return path;}/**
 * @this {import('../../types/internal').PluginProxy}
 * @type {Vue['getRouteBaseName']}
 */function getRouteBaseName(givenRoute){const route=givenRoute!==undefined?givenRoute:this.route;if(!route||!route.name){return;}return route.name.split(options_options.routesNameSeparator)[0];}/**
 * @param {string | undefined} routeName
 * @param {string} locale
 */function getLocaleRouteName(routeName,locale){let name=routeName+(options_options.strategy===Constants.STRATEGIES.NO_PREFIX?'':options_options.routesNameSeparator+locale);if(locale===options_options.defaultLocale&&options_options.strategy===Constants.STRATEGIES.PREFIX_AND_DEFAULT){name+=options_options.routesNameSeparator+options_options.defaultLocaleRouteNameSuffix;}return name;}/**
 * @template {(...args: any[]) => any} T
 * @param {T} targetFunction
 * @return {(this: Vue, ...args: Parameters<T>) => ReturnType<T>}
 */const VueInstanceProxy=function(targetFunction){return function(){var _this$$root$context,_this$$ssrContext;const proxy={getRouteBaseName:this.getRouteBaseName,i18n:this.$i18n,localePath:this.localePath,localeRoute:this.localeRoute,localeLocation:this.localeLocation,// @ts-ignore
req: true?((_this$$root$context=this.$root.context)===null||_this$$root$context===void 0?void 0:_this$$root$context.req)||((_this$$ssrContext=this.$ssrContext)===null||_this$$ssrContext===void 0?void 0:_this$$ssrContext.req):undefined,route:this.$route,router:this.$router,store:this.$store};return targetFunction.call(proxy,...arguments);};};/**
 * @template {(...args: any[]) => any} T
 * @param {import('@nuxt/types').Context} context
 * @param {T} targetFunction
 * @return {(...args: Parameters<T>) => ReturnType<T>}
 */const NuxtContextProxy=function(context,targetFunction){return function(){const{app,req,route,store}=context;const proxy={getRouteBaseName:app.getRouteBaseName,i18n:app.i18n,localePath:app.localePath,localeLocation:app.localeLocation,localeRoute:app.localeRoute,req: true?req:undefined,route,router:app.router,store};return targetFunction.call(proxy,...arguments);};};/** @type {import('vue').PluginObject<void>} */const plugin_routing_plugin={install(Vue){Vue.mixin({methods:{localePath:VueInstanceProxy(plugin_routing_localePath),localeRoute:VueInstanceProxy(localeRoute),localeLocation:VueInstanceProxy(localeLocation),switchLocalePath:VueInstanceProxy(switchLocalePath),getRouteBaseName:VueInstanceProxy(getRouteBaseName)}});}};/** @type {import('@nuxt/types').Plugin} *//* harmony default export */ var plugin_routing = (context=>{external_vue_default.a.use(plugin_routing_plugin);const{app,store}=context;app.localePath=context.localePath=NuxtContextProxy(context,plugin_routing_localePath);app.localeRoute=context.localeRoute=NuxtContextProxy(context,localeRoute);app.localeLocation=context.localeLocation=NuxtContextProxy(context,localeLocation);app.switchLocalePath=context.switchLocalePath=NuxtContextProxy(context,switchLocalePath);app.getRouteBaseName=context.getRouteBaseName=NuxtContextProxy(context,getRouteBaseName);if(store){store.localePath=app.localePath;store.localeRoute=app.localeRoute;store.localeLocation=app.localeLocation;store.switchLocalePath=app.switchLocalePath;store.getRouteBaseName=app.getRouteBaseName;}});
// EXTERNAL MODULE: external "vue-i18n"
var external_vue_i18n_ = __webpack_require__(25);
var external_vue_i18n_default = /*#__PURE__*/__webpack_require__.n(external_vue_i18n_);

// EXTERNAL MODULE: external "core-js/modules/esnext.map.delete-all.js"
var esnext_map_delete_all_js_ = __webpack_require__(39);

// EXTERNAL MODULE: external "core-js/modules/esnext.map.every.js"
var esnext_map_every_js_ = __webpack_require__(40);

// EXTERNAL MODULE: external "core-js/modules/esnext.map.filter.js"
var esnext_map_filter_js_ = __webpack_require__(41);

// EXTERNAL MODULE: external "core-js/modules/esnext.map.find.js"
var esnext_map_find_js_ = __webpack_require__(42);

// EXTERNAL MODULE: external "core-js/modules/esnext.map.find-key.js"
var esnext_map_find_key_js_ = __webpack_require__(43);

// EXTERNAL MODULE: external "core-js/modules/esnext.map.includes.js"
var esnext_map_includes_js_ = __webpack_require__(44);

// EXTERNAL MODULE: external "core-js/modules/esnext.map.key-of.js"
var esnext_map_key_of_js_ = __webpack_require__(45);

// EXTERNAL MODULE: external "core-js/modules/esnext.map.map-keys.js"
var esnext_map_map_keys_js_ = __webpack_require__(46);

// EXTERNAL MODULE: external "core-js/modules/esnext.map.map-values.js"
var esnext_map_map_values_js_ = __webpack_require__(47);

// EXTERNAL MODULE: external "core-js/modules/esnext.map.merge.js"
var esnext_map_merge_js_ = __webpack_require__(48);

// EXTERNAL MODULE: external "core-js/modules/esnext.map.reduce.js"
var esnext_map_reduce_js_ = __webpack_require__(49);

// EXTERNAL MODULE: external "core-js/modules/esnext.map.some.js"
var esnext_map_some_js_ = __webpack_require__(50);

// EXTERNAL MODULE: external "core-js/modules/esnext.map.update.js"
var esnext_map_update_js_ = __webpack_require__(51);

// CONCATENATED MODULE: ./.nuxt/nuxt-i18n/head-meta.js
/**
 * @this {import('vue/types/vue').Vue}
 * @return {import('vue-meta').MetaInfo}
 */function nuxtI18nHead({addDirAttribute=false,addSeoAttributes=false}={}){// Can happen when using from a global mixin.
if(!this.$i18n){return{};}/** @type {import('../../types/vue').NuxtI18nMeta} */const metaObject={htmlAttrs:{},link:[],meta:[]};const currentLocale=this.$i18n.localeProperties;const currentLocaleIso=currentLocale.iso;const currentLocaleDir=currentLocale.dir||options_options.defaultDirection;/**
   * Adding Direction Attribute:
   */if(addDirAttribute){metaObject.htmlAttrs.dir=currentLocaleDir;}/**
   * Adding SEO Meta:
   */if(addSeoAttributes&&(external_vue_meta_default.a.hasMetaInfo?external_vue_meta_default.a.hasMetaInfo(this):this._hasMetaInfo)&&this.$i18n.locale&&this.$i18n.locales){if(currentLocaleIso){metaObject.htmlAttrs.lang=currentLocaleIso;// TODO: simple lang or "specific" lang with territory?
}const locales=this.$i18n.locales;addHreflangLinks.bind(this)(locales,this.$i18n.__baseUrl,metaObject.link);addCanonicalLinks.bind(this)(this.$i18n.__baseUrl,metaObject.link);addCurrentOgLocale.bind(this)(currentLocale,currentLocaleIso,metaObject.meta);addAlternateOgLocales.bind(this)(locales,currentLocaleIso,metaObject.meta);}/**
   * Internals:
   */ /**
   * @this {import('vue/types/vue').Vue}
   *
   * @param {import('../../types').LocaleObject[]} locales
   * @param {string} baseUrl
   * @param {import('../../types/vue').NuxtI18nMeta['link']} link
   */function addHreflangLinks(locales,baseUrl,link){if(options_options.strategy===Constants.STRATEGIES.NO_PREFIX){return;}/** @type {Map<string, import('../../types').LocaleObject>} */const localeMap=new Map();for(const locale of locales){const localeIso=locale.iso;if(!localeIso){// eslint-disable-next-line no-console
console.warn(formatMessage('Locale ISO code is required to generate alternate link'));continue;}const[language,region]=localeIso.split('-');if(language&&region&&(locale.isCatchallLocale||!localeMap.has(language))){localeMap.set(language,locale);}localeMap.set(localeIso,locale);}for(const[iso,mapLocale]of localeMap.entries()){const localePath=this.switchLocalePath(mapLocale.code);if(localePath){link.push({hid:`i18n-alt-${iso}`,rel:'alternate',href:toAbsoluteUrl(localePath,baseUrl),hreflang:iso});}}if(options_options.defaultLocale){const localePath=this.switchLocalePath(options_options.defaultLocale);if(localePath){link.push({hid:'i18n-xd',rel:'alternate',href:toAbsoluteUrl(localePath,baseUrl),hreflang:'x-default'});}}}/**
   * @this {import('vue/types/vue').Vue}
   *
   * @param {string} baseUrl
   * @param {import('../../types/vue').NuxtI18nMeta['link']} link
   */function addCanonicalLinks(baseUrl,link){const currentRoute=this.localeRoute({...this.$route,name:this.getRouteBaseName()});const canonicalPath=currentRoute?currentRoute.path:null;if(canonicalPath){link.push({hid:'i18n-can',rel:'canonical',href:toAbsoluteUrl(canonicalPath,baseUrl)});}}/**
   * @this {import('vue/types/vue').Vue}
   *
   * @param {import('../../types').LocaleObject} currentLocale
   * @param {string | undefined} currentLocaleIso
   * @param {import('../../types/vue').NuxtI18nMeta['meta']} meta
   */function addCurrentOgLocale(currentLocale,currentLocaleIso,meta){const hasCurrentLocaleAndIso=currentLocale&&currentLocaleIso;if(!hasCurrentLocaleAndIso){return;}meta.push({hid:'i18n-og',property:'og:locale',// Replace dash with underscore as defined in spec: language_TERRITORY
content:hypenToUnderscore(currentLocaleIso)});}/**
   * @this {import('vue/types/vue').Vue}
   *
   * @param {import('../../types').LocaleObject[]} locales
   * @param {string | undefined} currentLocaleIso
   * @param {import('../../types/vue').NuxtI18nMeta['meta']} meta
   */function addAlternateOgLocales(locales,currentLocaleIso,meta){const localesWithoutCurrent=locales.filter(locale=>{const localeIso=locale.iso;return localeIso&&localeIso!==currentLocaleIso;});if(localesWithoutCurrent.length){const alternateLocales=localesWithoutCurrent.map(locale=>({hid:`i18n-og-alt-${locale.iso}`,property:'og:locale:alternate',content:hypenToUnderscore(locale.iso)}));meta.push(...alternateLocales);}}/**
   * @param {string | undefined} str
   * @return {string}
   */function hypenToUnderscore(str){return(str||'').replace(/-/g,'_');}/**
   * @param {string} urlOrPath
   * @param {string} baseUrl
   */function toAbsoluteUrl(urlOrPath,baseUrl){if(urlOrPath.match(/^https?:\/\//)){return urlOrPath;}return baseUrl+urlOrPath;}return metaObject;}
// CONCATENATED MODULE: ./node_modules/klona/full/index.mjs
function set(obj, key, val) {
	if (typeof val.value === 'object') val.value = klona(val.value);
	if (!val.enumerable || val.get || val.set || !val.configurable || !val.writable || key === '__proto__') {
		Object.defineProperty(obj, key, val);
	} else obj[key] = val.value;
}

function klona(x) {
	if (typeof x !== 'object') return x;

	var i=0, k, list, tmp, str=Object.prototype.toString.call(x);

	if (str === '[object Object]') {
		tmp = Object.create(x.__proto__ || null);
	} else if (str === '[object Array]') {
		tmp = Array(x.length);
	} else if (str === '[object Set]') {
		tmp = new Set;
		x.forEach(function (val) {
			tmp.add(klona(val));
		});
	} else if (str === '[object Map]') {
		tmp = new Map;
		x.forEach(function (val, key) {
			tmp.set(klona(key), klona(val));
		});
	} else if (str === '[object Date]') {
		tmp = new Date(+x);
	} else if (str === '[object RegExp]') {
		tmp = new RegExp(x.source, x.flags);
	} else if (str === '[object DataView]') {
		tmp = new x.constructor( klona(x.buffer) );
	} else if (str === '[object ArrayBuffer]') {
		tmp = x.slice(0);
	} else if (str.slice(-6) === 'Array]') {
		// ArrayBuffer.isView(x)
		// ~> `new` bcuz `Buffer.slice` => ref
		tmp = new x.constructor(x);
	}

	if (tmp) {
		for (list=Object.getOwnPropertySymbols(x); i < list.length; i++) {
			set(tmp, list[i], Object.getOwnPropertyDescriptor(x, list[i]));
		}

		for (i=0, list=Object.getOwnPropertyNames(x); i < list.length; i++) {
			if (Object.hasOwnProperty.call(tmp, k=list[i]) && tmp[k] === x[k]) continue;
			set(tmp, k, Object.getOwnPropertyDescriptor(x, k));
		}
	}

	return tmp || x;
}

// CONCATENATED MODULE: ./.nuxt/nuxt-i18n/plugin.main.js
// @ts-ignore
// @ts-ignore
external_vue_default.a.use(external_vue_i18n_default.a);/** @type {import('@nuxt/types').Plugin} *//* harmony default export */ var plugin_main = (async context=>{const{app,route,store,req,res,redirect}=context;if(options_options.vuex&&store){registerStore(store,options_options.vuex,options_options.localeCodes);}const{lazy}=options_options;const injectInNuxtState=lazy&&(lazy===true||lazy.skipNuxtState!==true);if( true&&injectInNuxtState){const devalue=(await Promise.resolve(/* import() */).then(__webpack_require__.t.bind(null, 83, 7))).default;context.beforeNuxtRender(({nuxtState})=>{/** @type {Record<string, import('vue-i18n').LocaleMessageObject>} */const langs={};const{fallbackLocale,locale}=app.i18n;if(locale&&locale!==fallbackLocale){// @ts-ignore Using internal API to avoid unnecessary cloning.
const messages=app.i18n._getMessages()[locale];if(messages){try{devalue(messages);langs[locale]=messages;}catch{// Ignore - client-side will load the chunk asynchronously.
}}}nuxtState.__i18n={langs};});}const{alwaysRedirect,fallbackLocale,redirectOn,useCookie,cookieKey,cookieDomain,cookieSecure,cookieCrossOrigin}=options_options.detectBrowserLanguage;/**
   * @param {string | undefined} newLocale
   * @param {{ initialSetup?: boolean }} [options=false]
   */const loadAndSetLocale=async(newLocale,{initialSetup=false}={})=>{if(!newLocale){return;}// Abort if different domains option enabled
if(!initialSetup&&app.i18n.differentDomains){return;}const oldLocale=app.i18n.locale;if(newLocale===oldLocale){return;}const localeOverride=app.i18n.onBeforeLanguageSwitch(oldLocale,newLocale,initialSetup,context);if(localeOverride&&app.i18n.localeCodes.includes(localeOverride)){if(localeOverride===oldLocale){return;}newLocale=localeOverride;}if(useCookie){app.i18n.setLocaleCookie(newLocale);}if(options_options.langDir){const i18nFallbackLocale=app.i18n.fallbackLocale;if(options_options.lazy){// Load fallback locale(s).
if(i18nFallbackLocale){/** @type {Promise<void>[]} */let localesToLoadPromises=[];if(Array.isArray(i18nFallbackLocale)){localesToLoadPromises=i18nFallbackLocale.map(fbLocale=>loadLanguageAsync(context,fbLocale));}else if(typeof i18nFallbackLocale==='object'){if(i18nFallbackLocale[newLocale]){localesToLoadPromises=localesToLoadPromises.concat(i18nFallbackLocale[newLocale].map(fbLocale=>loadLanguageAsync(context,fbLocale)));}if(i18nFallbackLocale.default){localesToLoadPromises=localesToLoadPromises.concat(i18nFallbackLocale.default.map(fbLocale=>loadLanguageAsync(context,fbLocale)));}}else if(newLocale!==i18nFallbackLocale){localesToLoadPromises.push(loadLanguageAsync(context,i18nFallbackLocale));}await Promise.all(localesToLoadPromises);}await loadLanguageAsync(context,newLocale);}else{// Load all locales.
await Promise.all(options_options.localeCodes.map(locale=>loadLanguageAsync(context,locale)));}}app.i18n.locale=newLocale;/** @type {import('../../types').LocaleObject} */const newLocaleProperties=options_options.normalizedLocales.find(l=>l.code===newLocale)||{code:newLocale};// In case certain locale has more properties than another, reset all the properties.
for(const key of Object.keys(app.i18n.localeProperties)){app.i18n.localeProperties[key]=undefined;}// Copy properties of the new locale
for(const[key,value]of Object.entries(newLocaleProperties)){external_vue_default.a.set(app.i18n.localeProperties,key,klona(value));}// Must retrieve from context as it might have changed since plugin initialization.
const{route}=context;const redirectPath=getRedirectPathForLocale(route,newLocale);if(initialSetup){// Redirect will be delayed until middleware runs as redirecting from plugin does not
// work in SPA (https://github.com/nuxt/nuxt.js/issues/4491).
app.i18n.__redirect=redirectPath;}else{app.i18n.onLanguageSwitched(oldLocale,newLocale);if(redirectPath){redirect(redirectPath);}}};const getLocaleFromRoute=createLocaleFromRouteGetter(options_options.localeCodes,{routesNameSeparator:options_options.routesNameSeparator,defaultLocaleRouteNameSuffix:options_options.defaultLocaleRouteNameSuffix});/**
   * Gets the redirect path for locale.
   *
   * @param {import("vue-router").Route} route
   * @param {string | undefined} locale
   * @return {string} The redirect path for locale.
   */const getRedirectPathForLocale=(route,locale)=>{// Redirects are ignored if it is a nuxt generate.
if(false){}if(!locale||app.i18n.differentDomains||options_options.strategy===Constants.STRATEGIES.NO_PREFIX){return'';}if(getLocaleFromRoute(route)===locale){// If "redirectOn" is "all" and strategy is "prefix_and_default", prefer unprefixed route for
// default locale.
if(redirectOn===Constants.REDIRECT_ON_OPTIONS.ALL||locale!==options_options.defaultLocale||options_options.strategy!==Constants.STRATEGIES.PREFIX_AND_DEFAULT){return'';}}// At this point we are left with route that either has no or different locale.
let redirectPath=app.switchLocalePath(locale);if(!redirectPath){// Current route could be 404 in which case attempt to find matching route for given locale.
redirectPath=app.localePath(route.fullPath,locale);}if(!redirectPath||redirectPath===route.fullPath||redirectPath.startsWith('//')){return'';}return redirectPath;};/**
   * Called by middleware on navigation (also on the initial one).
   *
   * @type {import('../../types/internal').onNavigateInternal}
   */const onNavigate=async route=>{// Handle root path redirect
if(route.path==='/'&&options_options.rootRedirect){let statusCode=302;let path=options_options.rootRedirect;if(typeof options_options.rootRedirect!=='string'){statusCode=options_options.rootRedirect.statusCode;path=options_options.rootRedirect.path;}return[statusCode,`/${path}`,/* preserve query */true];}const storedRedirect=app.i18n.__redirect;if(storedRedirect){app.i18n.__redirect=null;return[302,storedRedirect];}const resolveBaseUrlOptions={differentDomains:options_options.differentDomains,normalizedLocales:options_options.normalizedLocales};app.i18n.__baseUrl=resolveBaseUrl(options_options.baseUrl,context,app.i18n.locale,resolveBaseUrlOptions);const finalLocale=options_options.detectBrowserLanguage&&doDetectBrowserLanguage(route)||!options_options.differentDomains&&getLocaleFromRoute(route)||app.i18n.locale||app.i18n.defaultLocale||'';if(options_options.skipSettingLocaleOnNavigate){app.i18n.__pendingLocale=finalLocale;app.i18n.__pendingLocalePromise=new Promise(resolve=>{app.i18n.__resolvePendingLocalePromise=resolve;});}else{await app.i18n.setLocale(finalLocale);}return[null,null];};const finalizePendingLocaleChange=async()=>{if(!app.i18n.__pendingLocale){return;}await app.i18n.setLocale(app.i18n.__pendingLocale);app.i18n.__resolvePendingLocalePromise('');app.i18n.__pendingLocale=null;};const waitForPendingLocaleChange=async()=>{if(app.i18n.__pendingLocale){await app.i18n.__pendingLocalePromise;}};const getBrowserLocale=()=>{if(false){}else if(req&&typeof req.headers['accept-language']!=='undefined'){return matchBrowserLocale(options_options.normalizedLocales,parseAcceptLanguage(req.headers['accept-language']));}else{return undefined;}};/**
   * @param {import('vue-router').Route} route
   * @return {string} Returns the browser locale that was detected or an empty string otherwise.
   */const doDetectBrowserLanguage=route=>{// Browser detection is ignored if it is a nuxt generate.
if(false){}if(options_options.strategy!==Constants.STRATEGIES.NO_PREFIX){if(redirectOn===Constants.REDIRECT_ON_OPTIONS.ROOT){if(route.path!=='/'){return'';}}else if(redirectOn===Constants.REDIRECT_ON_OPTIONS.NO_PREFIX){if(!alwaysRedirect&&route.path.match(getLocalesRegex(options_options.localeCodes))){return'';}}}let matchedLocale;if(useCookie&&(matchedLocale=app.i18n.getLocaleCookie())){// Get preferred language from cookie if present and enabled
}else{// Try to get locale from either navigator or header detection
matchedLocale=getBrowserLocale();}const finalLocale=matchedLocale||fallbackLocale;// Handle cookie option to prevent multiple redirections
if(finalLocale&&(!useCookie||alwaysRedirect||!app.i18n.getLocaleCookie())){if(finalLocale!==app.i18n.locale){return finalLocale;}}return'';};/**
   * Extends the newly created vue-i18n instance with @nuxtjs/i18n properties.
   *
   * @param {import('vue-i18n').IVueI18n} i18n
   */const extendVueI18nInstance=i18n=>{i18n.locales=klona(options_options.locales);i18n.localeCodes=klona(options_options.localeCodes);i18n.localeProperties=external_vue_default.a.observable(klona(options_options.normalizedLocales.find(l=>l.code===i18n.locale)||{code:i18n.locale}));i18n.defaultLocale=options_options.defaultLocale;i18n.differentDomains=options_options.differentDomains;i18n.onBeforeLanguageSwitch=options_options.onBeforeLanguageSwitch;i18n.onLanguageSwitched=options_options.onLanguageSwitched;i18n.setLocaleCookie=locale=>setLocaleCookie(locale,res,{useCookie,cookieDomain,cookieKey,cookieSecure,cookieCrossOrigin});i18n.getLocaleCookie=()=>getLocaleCookie(req,{useCookie,cookieKey,localeCodes:options_options.localeCodes});i18n.setLocale=locale=>loadAndSetLocale(locale);i18n.getBrowserLocale=()=>getBrowserLocale();i18n.finalizePendingLocaleChange=finalizePendingLocaleChange;i18n.waitForPendingLocaleChange=waitForPendingLocaleChange;i18n.__baseUrl=app.i18n.__baseUrl;i18n.__pendingLocale=app.i18n.__pendingLocale;i18n.__pendingLocalePromise=app.i18n.__pendingLocalePromise;i18n.__resolvePendingLocalePromise=app.i18n.__resolvePendingLocalePromise;};// Set instance options
const vueI18nOptions=typeof options_options.vueI18n==='function'?await options_options.vueI18n(context):klona(options_options.vueI18n);vueI18nOptions.componentInstanceCreatedListener=extendVueI18nInstance;// @ts-ignore
app.i18n=context.i18n=new external_vue_i18n_default.a(vueI18nOptions);// Initialize locale and fallbackLocale as vue-i18n defaults those to 'en-US' if falsey
app.i18n.locale='';app.i18n.fallbackLocale=vueI18nOptions.fallbackLocale||'';if(store){// Inject in store.
store.$i18n=app.i18n;if(store.state.localeDomains){for(const[index,locale]of options_options.normalizedLocales.entries()){const domain=store.state.localeDomains[locale.code];if(domain){locale.domain=domain;const optionsLocale=options_options.locales[index];if(typeof optionsLocale!=='string'){optionsLocale.domain=domain;}}}}}extendVueI18nInstance(app.i18n);const resolveBaseUrlOptions={differentDomains:options_options.differentDomains,normalizedLocales:options_options.normalizedLocales};app.i18n.__baseUrl=resolveBaseUrl(options_options.baseUrl,context,'',resolveBaseUrlOptions);app.i18n.__onNavigate=onNavigate;external_vue_default.a.prototype.$nuxtI18nHead=nuxtI18nHead;/** @type {string | undefined} */let finalLocale=options_options.detectBrowserLanguage?doDetectBrowserLanguage(route):'';if(!finalLocale){if(app.i18n.differentDomains){const domainLocale=getLocaleDomain(options_options.normalizedLocales,req);finalLocale=domainLocale;}else if(options_options.strategy!==Constants.STRATEGIES.NO_PREFIX){const routeLocale=getLocaleFromRoute(route);finalLocale=routeLocale;}}if(!finalLocale&&useCookie){finalLocale=app.i18n.getLocaleCookie();}if(!finalLocale){finalLocale=app.i18n.defaultLocale||'';}await loadAndSetLocale(finalLocale,{initialSetup:true});if(false){}});
// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(9);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// EXTERNAL MODULE: ./node_modules/defu/dist/defu.js
var dist_defu = __webpack_require__(10);
var dist_defu_default = /*#__PURE__*/__webpack_require__.n(dist_defu);

// CONCATENATED MODULE: ./.nuxt/axios.js
// Axios.prototype cannot be modified
const axiosExtra={setBaseURL(baseURL){this.defaults.baseURL=baseURL;},setHeader(name,value,scopes='common'){for(const scope of Array.isArray(scopes)?scopes:[scopes]){if(!value){delete this.defaults.headers[scope][name];continue;}this.defaults.headers[scope][name]=value;}},setToken(token,type,scopes='common'){const value=!token?null:(type?type+' ':'')+token;this.setHeader('Authorization',value,scopes);},onRequest(fn){this.interceptors.request.use(config=>fn(config)||config);},onResponse(fn){this.interceptors.response.use(response=>fn(response)||response);},onRequestError(fn){this.interceptors.request.use(undefined,error=>fn(error)||Promise.reject(error));},onResponseError(fn){this.interceptors.response.use(undefined,error=>fn(error)||Promise.reject(error));},onError(fn){this.onRequestError(fn);this.onResponseError(fn);},create(options){return createAxiosInstance(dist_defu_default()(options,this.defaults));}};// Request helpers ($get, $post, ...)
for(const method of['request','delete','get','head','options','post','put','patch']){axiosExtra['$'+method]=function(){return this[method].apply(this,arguments).then(res=>res&&res.data);};}const extendAxiosInstance=axios=>{for(const key in axiosExtra){axios[key]=axiosExtra[key].bind(axios);}};const createAxiosInstance=axiosOptions=>{// Create new axios instance
const axios=external_axios_default.a.create(axiosOptions);axios.CancelToken=external_axios_default.a.CancelToken;axios.isCancel=external_axios_default.a.isCancel;// Extend axios proto
extendAxiosInstance(axios);// Intercept to apply default headers
axios.onRequest(config=>{config.headers={...axios.defaults.headers.common,...config.headers};});// Setup interceptors
setupProgress(axios);return axios;};const setupProgress=axios=>{if(true){return;}// A noop loading inteterface for when $nuxt is not yet ready
const noopLoading={finish:()=>{},start:()=>{},fail:()=>{},set:()=>{}};const $loading=()=>{const $nuxt=typeof window!=='undefined'&&window['$nuxt'];return $nuxt&&$nuxt.$loading&&$nuxt.$loading.set?$nuxt.$loading:noopLoading;};let currentRequests=0;axios.onRequest(config=>{if(config&&config.progress===false){return;}currentRequests++;});axios.onResponse(response=>{if(response&&response.config&&response.config.progress===false){return;}currentRequests--;if(currentRequests<=0){currentRequests=0;$loading().finish();}});axios.onError(error=>{if(error&&error.config&&error.config.progress===false){return;}currentRequests--;if(external_axios_default.a.isCancel(error)){if(currentRequests<=0){currentRequests=0;$loading().finish();}return;}$loading().fail();$loading().finish();});const onProgress=e=>{if(!currentRequests||!e.total){return;}const progress=e.loaded*100/(e.total*currentRequests);$loading().set(Math.min(100,progress));};axios.defaults.onUploadProgress=onProgress;axios.defaults.onDownloadProgress=onProgress;};/* harmony default export */ var _nuxt_axios = ((ctx,inject)=>{// runtimeConfig
const runtimeConfig=ctx.$config&&ctx.$config.axios||{};// baseURL
const baseURL= false?undefined:runtimeConfig.baseURL||runtimeConfig.baseUrl||process.env._AXIOS_BASE_URL_||'https://cdn.tujjor.org/api';// Create fresh objects for all default header scopes
// Axios creates only one which is shared across SSR requests!
// https://github.com/mzabriskie/axios/blob/master/lib/defaults.js
const headers={"common":{"Accept":"application/json, text/plain, */*"},"delete":{},"get":{},"head":{},"post":{},"put":{},"patch":{}};const axiosOptions={baseURL,headers};// Proxy SSR request headers headers
if( true&&ctx.req&&ctx.req.headers){const reqHeaders={...ctx.req.headers};for(const h of["accept","cf-connecting-ip","cf-ray","content-length","content-md5","content-type","host","x-forwarded-host","x-forwarded-port","x-forwarded-proto"]){delete reqHeaders[h];}axiosOptions.headers.common={...reqHeaders,...axiosOptions.headers.common};}if(true){// Don't accept brotli encoding because Node can't parse it
axiosOptions.headers.common['accept-encoding']='gzip, deflate';}const axios=createAxiosInstance(axiosOptions);// Inject axios to the context as $axios
ctx.$axios=axios;inject('axios',axios);});
// EXTERNAL MODULE: external "@fortawesome/fontawesome-svg-core"
var fontawesome_svg_core_ = __webpack_require__(26);

// EXTERNAL MODULE: external "@fortawesome/vue-fontawesome"
var vue_fontawesome_ = __webpack_require__(12);

// EXTERNAL MODULE: external "@fortawesome/free-solid-svg-icons"
var free_solid_svg_icons_ = __webpack_require__(37);

// EXTERNAL MODULE: external "@fortawesome/free-brands-svg-icons"
var free_brands_svg_icons_ = __webpack_require__(38);

// CONCATENATED MODULE: ./.nuxt/fontawesome.js
fontawesome_svg_core_["library"].add(free_solid_svg_icons_["fas"],free_brands_svg_icons_["fab"]);fontawesome_svg_core_["config"].autoAddCss=false;external_vue_default.a.component('fa',vue_fontawesome_["FontAwesomeIcon"]);external_vue_default.a.component('faLayers',vue_fontawesome_["FontAwesomeLayers"]);external_vue_default.a.component('faLayersText',vue_fontawesome_["FontAwesomeLayersText"]);
// EXTERNAL MODULE: ./.nuxt/empty.js
var _nuxt_empty = __webpack_require__(5);

// EXTERNAL MODULE: external "requrl"
var external_requrl_ = __webpack_require__(13);

// EXTERNAL MODULE: external "jwt-decode"
var external_jwt_decode_ = __webpack_require__(27);

// CONCATENATED MODULE: ./node_modules/@nuxtjs/auth-next/dist/runtime.mjs






const isUnset = (o) => typeof o === "undefined" || o === null;
const isSet = (o) => !isUnset(o);
const isSameURL = (ctx, a, b) => normalizePath(a, ctx) === normalizePath(b, ctx);
function isRelativeURL(u) {
  return u && u.length && new RegExp([
    "^\\/([a-zA-Z0-9@\\-%_~.:]",
    "[/a-zA-Z0-9@\\-%_~.:]*)?",
    "([?][^#]*)?(#[^#]*)?$"
  ].join("")).test(u);
}
function runtime_parseQuery(queryString) {
  const query = {};
  const pairs = queryString.split("&");
  for (let i = 0; i < pairs.length; i++) {
    const pair = pairs[i].split("=");
    query[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1] || "");
  }
  return query;
}
function encodeQuery(queryObject) {
  return Object.entries(queryObject).filter(([_key, value]) => typeof value !== "undefined").map(([key, value]) => encodeURIComponent(key) + (value != null ? "=" + encodeURIComponent(value) : "")).join("&");
}
function routeOption(route, key, value) {
  return route.matched.some((m) => {
    if (false) {} else {
      return Object.values(m.components).some((component) => Object.values(component._Ctor).some((ctor) => ctor.options && ctor.options[key] === value));
    }
  });
}
function runtime_getMatchedComponents(route, matches = []) {
  return [].concat(...[], ...route.matched.map(function(m, index) {
    return Object.keys(m.components).map(function(key) {
      matches.push(index);
      return m.components[key];
    });
  }));
}
function normalizePath(path = "", ctx) {
  let result = path.split("?")[0];
  if (ctx && ctx.base) {
    result = result.replace(ctx.base, "/");
  }
  if (result.charAt(result.length - 1) === "/") {
    result = result.slice(0, -1);
  }
  result = result.replace(/\/+/g, "/");
  return result;
}
function encodeValue(val) {
  if (typeof val === "string") {
    return val;
  }
  return JSON.stringify(val);
}
function decodeValue(val) {
  if (typeof val === "string") {
    try {
      return JSON.parse(val);
    } catch (_) {
    }
  }
  return val;
}
function getProp(holder, propName) {
  if (!propName || !holder || typeof holder !== "object") {
    return holder;
  }
  if (propName in holder) {
    return holder[propName];
  }
  const propParts = Array.isArray(propName) ? propName : (propName + "").split(".");
  let result = holder;
  while (propParts.length && result) {
    result = result[propParts.shift()];
  }
  return result;
}
function addTokenPrefix(token, tokenType) {
  if (!token || !tokenType || typeof token !== "string" || token.startsWith(tokenType)) {
    return token;
  }
  return tokenType + " " + token;
}
function removeTokenPrefix(token, tokenType) {
  if (!token || !tokenType || typeof token !== "string") {
    return token;
  }
  return token.replace(tokenType + " ", "");
}
function runtime_urlJoin(...args) {
  return args.join("/").replace(/[/]+/g, "/").replace(/^(.+):\//, "$1://").replace(/^file:/, "file:/").replace(/\/(\?|&|#[^!])/g, "$1").replace(/\?/g, "&").replace("&", "?");
}
function cleanObj(obj) {
  for (const key in obj) {
    if (obj[key] === void 0) {
      delete obj[key];
    }
  }
  return obj;
}
const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
function randomString(length) {
  let result = "";
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

class runtime_Storage {
  constructor(ctx, options) {
    this.ctx = ctx;
    this.options = options;
    this._initState();
  }
  setUniversal(key, value) {
    if (isUnset(value)) {
      return this.removeUniversal(key);
    }
    this.setCookie(key, value);
    this.setLocalStorage(key, value);
    this.setState(key, value);
    return value;
  }
  getUniversal(key) {
    let value;
    if (true) {
      value = this.getState(key);
    }
    if (isUnset(value)) {
      value = this.getCookie(key);
    }
    if (isUnset(value)) {
      value = this.getLocalStorage(key);
    }
    if (isUnset(value)) {
      value = this.getState(key);
    }
    return value;
  }
  syncUniversal(key, defaultValue) {
    let value = this.getUniversal(key);
    if (isUnset(value) && isSet(defaultValue)) {
      value = defaultValue;
    }
    if (isSet(value)) {
      this.setUniversal(key, value);
    }
    return value;
  }
  removeUniversal(key) {
    this.removeState(key);
    this.removeLocalStorage(key);
    this.removeCookie(key);
  }
  _initState() {
    external_vue_.set(this, "_state", {});
    this._useVuex = this.options.vuex && !!this.ctx.store;
    if (this._useVuex) {
      const storeModule = {
        namespaced: true,
        state: () => this.options.initialState,
        mutations: {
          SET(state, payload) {
            external_vue_.set(state, payload.key, payload.value);
          }
        }
      };
      this.ctx.store.registerModule(this.options.vuex.namespace, storeModule, {
        preserveState: Boolean(this.ctx.store.state[this.options.vuex.namespace])
      });
      this.state = this.ctx.store.state[this.options.vuex.namespace];
    } else {
      external_vue_.set(this, "state", {});
      console.warn("[AUTH] The Vuex Store is not activated. This might cause issues in auth module behavior, like redirects not working properly.To activate it, see https://nuxtjs.org/docs/2.x/directory-structure/store");
    }
  }
  setState(key, value) {
    if (key[0] === "_") {
      external_vue_.set(this._state, key, value);
    } else if (this._useVuex) {
      this.ctx.store.commit(this.options.vuex.namespace + "/SET", {
        key,
        value
      });
    } else {
      external_vue_.set(this.state, key, value);
    }
    return value;
  }
  getState(key) {
    if (key[0] !== "_") {
      return this.state[key];
    } else {
      return this._state[key];
    }
  }
  watchState(key, fn) {
    if (this._useVuex) {
      return this.ctx.store.watch((state) => getProp(state[this.options.vuex.namespace], key), fn);
    }
  }
  removeState(key) {
    this.setState(key, void 0);
  }
  setLocalStorage(key, value) {
    if (isUnset(value)) {
      return this.removeLocalStorage(key);
    }
    if (typeof localStorage === "undefined" || !this.options.localStorage) {
      return;
    }
    const _key = this.options.localStorage.prefix + key;
    try {
      localStorage.setItem(_key, encodeValue(value));
    } catch (e) {
      if (!this.options.ignoreExceptions) {
        throw e;
      }
    }
    return value;
  }
  getLocalStorage(key) {
    if (typeof localStorage === "undefined" || !this.options.localStorage) {
      return;
    }
    const _key = this.options.localStorage.prefix + key;
    const value = localStorage.getItem(_key);
    return decodeValue(value);
  }
  removeLocalStorage(key) {
    if (typeof localStorage === "undefined" || !this.options.localStorage) {
      return;
    }
    const _key = this.options.localStorage.prefix + key;
    localStorage.removeItem(_key);
  }
  getCookies() {
    const cookieStr =  false ? undefined : this.ctx.req.headers.cookie;
    return external_cookie_.parse(cookieStr || "") || {};
  }
  setCookie(key, value, options = {}) {
    if (!this.options.cookie ||  true && !this.ctx.res) {
      return;
    }
    const _prefix = options.prefix !== void 0 ? options.prefix : this.options.cookie.prefix;
    const _key = _prefix + key;
    const _options = Object.assign({}, this.options.cookie.options, options);
    const _value = encodeValue(value);
    if (isUnset(value)) {
      _options.maxAge = -1;
    }
    if (typeof _options.expires === "number") {
      _options.expires = new Date(Date.now() + _options.expires * 864e5);
    }
    const serializedCookie = external_cookie_.serialize(_key, _value, _options);
    if (false) {} else if ( true && this.ctx.res) {
      const cookies = this.ctx.res.getHeader("Set-Cookie") || [];
      cookies.unshift(serializedCookie);
      this.ctx.res.setHeader("Set-Cookie", cookies.filter((v, i, arr) => arr.findIndex((val) => val.startsWith(v.substr(0, v.indexOf("=")))) === i));
    }
    return value;
  }
  getCookie(key) {
    if (!this.options.cookie ||  true && !this.ctx.req) {
      return;
    }
    const _key = this.options.cookie.prefix + key;
    const cookies = this.getCookies();
    const value = cookies[_key] ? decodeURIComponent(cookies[_key]) : void 0;
    return decodeValue(value);
  }
  removeCookie(key, options) {
    this.setCookie(key, void 0, options);
  }
}

class runtime_Auth {
  constructor(ctx, options) {
    this.strategies = {};
    this._errorListeners = [];
    this._redirectListeners = [];
    this.ctx = ctx;
    this.options = options;
    const initialState = {user: null, loggedIn: false};
    const storage2 = new runtime_Storage(ctx, {...options, ...{initialState}});
    this.$storage = storage2;
    this.$state = storage2.state;
  }
  get state() {
    if (!this._stateWarnShown) {
      this._stateWarnShown = true;
      console.warn("[AUTH] $auth.state is deprecated. Please use $auth.$state or top level props like $auth.loggedIn");
    }
    return this.$state;
  }
  get strategy() {
    return this.getStrategy();
  }
  getStrategy(throwException = true) {
    if (throwException) {
      if (!this.$state.strategy) {
        throw new Error("No strategy is set!");
      }
      if (!this.strategies[this.$state.strategy]) {
        throw new Error("Strategy not supported: " + this.$state.strategy);
      }
    }
    return this.strategies[this.$state.strategy];
  }
  get user() {
    return this.$state.user;
  }
  get loggedIn() {
    return this.$state.loggedIn;
  }
  get busy() {
    return this.$storage.getState("busy");
  }
  async init() {
    if (this.options.resetOnError) {
      this.onError((...args) => {
        if (typeof this.options.resetOnError !== "function" || this.options.resetOnError(...args)) {
          this.reset();
        }
      });
    }
    this.$storage.syncUniversal("strategy", this.options.defaultStrategy);
    if (!this.getStrategy(false)) {
      this.$storage.setUniversal("strategy", this.options.defaultStrategy);
      if (!this.getStrategy(false)) {
        return Promise.resolve();
      }
    }
    try {
      await this.mounted();
    } catch (error) {
      this.callOnError(error);
    } finally {
      if (false) {}
    }
  }
  getState(key) {
    if (!this._getStateWarnShown) {
      this._getStateWarnShown = true;
      console.warn("[AUTH] $auth.getState is deprecated. Please use $auth.$storage.getState() or top level props like $auth.loggedIn");
    }
    return this.$storage.getState(key);
  }
  registerStrategy(name, strategy) {
    this.strategies[name] = strategy;
  }
  setStrategy(name) {
    if (name === this.$storage.getUniversal("strategy")) {
      return Promise.resolve();
    }
    if (!this.strategies[name]) {
      throw new Error(`Strategy ${name} is not defined!`);
    }
    this.reset();
    this.$storage.setUniversal("strategy", name);
    return this.mounted();
  }
  mounted(...args) {
    if (!this.getStrategy().mounted) {
      return this.fetchUserOnce();
    }
    return Promise.resolve(this.getStrategy().mounted(...args)).catch((error) => {
      this.callOnError(error, {method: "mounted"});
      return Promise.reject(error);
    });
  }
  loginWith(name, ...args) {
    return this.setStrategy(name).then(() => this.login(...args));
  }
  login(...args) {
    if (!this.getStrategy().login) {
      return Promise.resolve();
    }
    return this.wrapLogin(this.getStrategy().login(...args)).catch((error) => {
      this.callOnError(error, {method: "login"});
      return Promise.reject(error);
    });
  }
  fetchUser(...args) {
    if (!this.getStrategy().fetchUser) {
      return Promise.resolve();
    }
    return Promise.resolve(this.getStrategy().fetchUser(...args)).catch((error) => {
      this.callOnError(error, {method: "fetchUser"});
      return Promise.reject(error);
    });
  }
  logout(...args) {
    if (!this.getStrategy().logout) {
      this.reset();
      return Promise.resolve();
    }
    return Promise.resolve(this.getStrategy().logout(...args)).catch((error) => {
      this.callOnError(error, {method: "logout"});
      return Promise.reject(error);
    });
  }
  setUserToken(token, refreshToken) {
    if (!this.getStrategy().setUserToken) {
      this.getStrategy().token.set(token);
      return Promise.resolve();
    }
    return Promise.resolve(this.getStrategy().setUserToken(token, refreshToken)).catch((error) => {
      this.callOnError(error, {method: "setUserToken"});
      return Promise.reject(error);
    });
  }
  reset(...args) {
    if (!this.getStrategy().reset) {
      this.setUser(false);
      this.getStrategy().token.reset();
      this.getStrategy().refreshToken.reset();
    }
    return this.getStrategy().reset(...args);
  }
  refreshTokens() {
    if (!this.getStrategy().refreshController) {
      return Promise.resolve();
    }
    return Promise.resolve(this.getStrategy().refreshController.handleRefresh()).catch((error) => {
      this.callOnError(error, {method: "refreshTokens"});
      return Promise.reject(error);
    });
  }
  check(...args) {
    if (!this.getStrategy().check) {
      return {valid: true};
    }
    return this.getStrategy().check(...args);
  }
  fetchUserOnce(...args) {
    if (!this.$state.user) {
      return this.fetchUser(...args);
    }
    return Promise.resolve();
  }
  setUser(user) {
    this.$storage.setState("user", user);
    let check = {valid: Boolean(user)};
    if (check.valid) {
      check = this.check();
    }
    this.$storage.setState("loggedIn", check.valid);
  }
  request(endpoint, defaults = {}) {
    const _endpoint = typeof defaults === "object" ? Object.assign({}, defaults, endpoint) : endpoint;
    if (_endpoint.baseURL === "") {
      _endpoint.baseURL = external_requrl_(this.ctx.req);
    }
    if (!this.ctx.app.$axios) {
      console.error("[AUTH] add the @nuxtjs/axios module to nuxt.config file");
      return;
    }
    return this.ctx.app.$axios.request(_endpoint).catch((error) => {
      this.callOnError(error, {method: "request"});
      return Promise.reject(error);
    });
  }
  requestWith(strategy, endpoint, defaults) {
    const token = this.getStrategy().token.get();
    const _endpoint = Object.assign({}, defaults, endpoint);
    const tokenName = this.strategies[strategy].options.token.name || "Authorization";
    if (!_endpoint.headers) {
      _endpoint.headers = {};
    }
    if (!_endpoint.headers[tokenName] && isSet(token) && token && typeof token === "string") {
      _endpoint.headers[tokenName] = token;
    }
    return this.request(_endpoint);
  }
  wrapLogin(promise) {
    this.$storage.setState("busy", true);
    this.error = null;
    return Promise.resolve(promise).then((response) => {
      this.$storage.setState("busy", false);
      return response;
    }).catch((error) => {
      this.$storage.setState("busy", false);
      return Promise.reject(error);
    });
  }
  onError(listener) {
    this._errorListeners.push(listener);
  }
  callOnError(error, payload = {}) {
    this.error = error;
    for (const fn of this._errorListeners) {
      fn(error, payload);
    }
  }
  redirect(name, noRouter = false) {
    if (!this.options.redirect) {
      return;
    }
    const from = this.options.fullPathRedirect ? this.ctx.route.fullPath : this.ctx.route.path;
    let to = this.options.redirect[name];
    if (!to) {
      return;
    }
    if (this.options.rewriteRedirects) {
      if (name === "login" && isRelativeURL(from) && !isSameURL(this.ctx, to, from)) {
        this.$storage.setUniversal("redirect", from);
      }
      if (name === "home") {
        const redirect = this.$storage.getUniversal("redirect");
        this.$storage.setUniversal("redirect", null);
        if (isRelativeURL(redirect)) {
          to = redirect;
        }
      }
    }
    to = this.callOnRedirect(to, from) || to;
    if (isSameURL(this.ctx, to, from)) {
      return;
    }
    if (false) {} else {
      this.ctx.redirect(to, this.ctx.query);
    }
  }
  onRedirect(listener) {
    this._redirectListeners.push(listener);
  }
  callOnRedirect(to, from) {
    for (const fn of this._redirectListeners) {
      to = fn(to, from) || to;
    }
    return to;
  }
  hasScope(scope) {
    const userScopes = this.$state.user && getProp(this.$state.user, this.options.scopeKey);
    if (!userScopes) {
      return false;
    }
    if (Array.isArray(userScopes)) {
      return userScopes.includes(scope);
    }
    return Boolean(getProp(userScopes, scope));
  }
}

const authMiddleware = async (ctx) => {
  if (routeOption(ctx.route, "auth", false)) {
    return;
  }
  const matches = [];
  const Components = runtime_getMatchedComponents(ctx.route, matches);
  if (!Components.length) {
    return;
  }
  const {login, callback} = ctx.$auth.options.redirect;
  const pageIsInGuestMode = routeOption(ctx.route, "auth", "guest");
  const insidePage = (page) => normalizePath(ctx.route.path, ctx) === normalizePath(page, ctx);
  if (ctx.$auth.$state.loggedIn) {
    const {
      tokenExpired,
      refreshTokenExpired,
      isRefreshable
    } = ctx.$auth.check(true);
    if (!login || insidePage(login) || pageIsInGuestMode) {
      ctx.$auth.redirect("home");
    }
    if (refreshTokenExpired) {
      ctx.$auth.reset();
    } else if (tokenExpired) {
      if (isRefreshable) {
        try {
          await ctx.$auth.refreshTokens();
        } catch (error) {
          ctx.$auth.reset();
        }
      } else {
        ctx.$auth.reset();
      }
    }
  } else if (!pageIsInGuestMode && (!callback || !insidePage(callback))) {
    ctx.$auth.redirect("login");
  }
};

class ExpiredAuthSessionError extends Error {
  constructor() {
    super("Both token and refresh token have expired. Your request was aborted.");
    this.name = "ExpiredAuthSessionError";
  }
}

class RefreshController {
  constructor(scheme) {
    this.scheme = scheme;
    this._refreshPromise = null;
    this.$auth = scheme.$auth;
  }
  handleRefresh() {
    if (this._refreshPromise) {
      return this._refreshPromise;
    }
    return this._doRefresh();
  }
  _doRefresh() {
    this._refreshPromise = new Promise((resolve, reject) => {
      this.scheme.refreshTokens().then((response) => {
        this._refreshPromise = null;
        resolve(response);
      }).catch((error) => {
        this._refreshPromise = null;
        reject(error);
      });
    });
    return this._refreshPromise;
  }
}

var TokenStatusEnum;
(function(TokenStatusEnum2) {
  TokenStatusEnum2["UNKNOWN"] = "UNKNOWN";
  TokenStatusEnum2["VALID"] = "VALID";
  TokenStatusEnum2["EXPIRED"] = "EXPIRED";
})(TokenStatusEnum || (TokenStatusEnum = {}));
class TokenStatus {
  constructor(token, tokenExpiresAt) {
    this._status = this._calculate(token, tokenExpiresAt);
  }
  unknown() {
    return TokenStatusEnum.UNKNOWN === this._status;
  }
  valid() {
    return TokenStatusEnum.VALID === this._status;
  }
  expired() {
    return TokenStatusEnum.EXPIRED === this._status;
  }
  _calculate(token, tokenExpiresAt) {
    const now = Date.now();
    try {
      if (!token || !tokenExpiresAt) {
        return TokenStatusEnum.UNKNOWN;
      }
    } catch (error) {
      return TokenStatusEnum.UNKNOWN;
    }
    const timeSlackMillis = 500;
    tokenExpiresAt -= timeSlackMillis;
    if (now < tokenExpiresAt) {
      return TokenStatusEnum.VALID;
    }
    return TokenStatusEnum.EXPIRED;
  }
}

class runtime_RefreshToken {
  constructor(scheme, storage) {
    this.scheme = scheme;
    this.$storage = storage;
  }
  get() {
    const _key = this.scheme.options.refreshToken.prefix + this.scheme.name;
    return this.$storage.getUniversal(_key);
  }
  set(tokenValue) {
    const refreshToken = addTokenPrefix(tokenValue, this.scheme.options.refreshToken.type);
    this._setToken(refreshToken);
    this._updateExpiration(refreshToken);
    return refreshToken;
  }
  sync() {
    const refreshToken = this._syncToken();
    this._syncExpiration();
    return refreshToken;
  }
  reset() {
    this._setToken(false);
    this._setExpiration(false);
  }
  status() {
    return new TokenStatus(this.get(), this._getExpiration());
  }
  _getExpiration() {
    const _key = this.scheme.options.refreshToken.expirationPrefix + this.scheme.name;
    return this.$storage.getUniversal(_key);
  }
  _setExpiration(expiration) {
    const _key = this.scheme.options.refreshToken.expirationPrefix + this.scheme.name;
    return this.$storage.setUniversal(_key, expiration);
  }
  _syncExpiration() {
    const _key = this.scheme.options.refreshToken.expirationPrefix + this.scheme.name;
    return this.$storage.syncUniversal(_key);
  }
  _updateExpiration(refreshToken) {
    let refreshTokenExpiration;
    const _tokenIssuedAtMillis = Date.now();
    const _tokenTTLMillis = Number(this.scheme.options.refreshToken.maxAge) * 1e3;
    const _tokenExpiresAtMillis = _tokenTTLMillis ? _tokenIssuedAtMillis + _tokenTTLMillis : 0;
    try {
      refreshTokenExpiration = external_jwt_decode_(refreshToken + "").exp * 1e3 || _tokenExpiresAtMillis;
    } catch (error) {
      refreshTokenExpiration = _tokenExpiresAtMillis;
      if (!(error && error.name === "InvalidTokenError")) {
        throw error;
      }
    }
    return this._setExpiration(refreshTokenExpiration || false);
  }
  _setToken(refreshToken) {
    const _key = this.scheme.options.refreshToken.prefix + this.scheme.name;
    return this.$storage.setUniversal(_key, refreshToken);
  }
  _syncToken() {
    const _key = this.scheme.options.refreshToken.prefix + this.scheme.name;
    return this.$storage.syncUniversal(_key);
  }
}

class RequestHandler {
  constructor(scheme, axios) {
    this.scheme = scheme;
    this.axios = axios;
    this.interceptor = null;
  }
  setHeader(token) {
    if (this.scheme.options.token.global) {
      this.axios.setHeader(this.scheme.options.token.name, token);
    }
  }
  clearHeader() {
    if (this.scheme.options.token.global) {
      this.axios.setHeader(this.scheme.options.token.name, false);
    }
  }
  initializeRequestInterceptor(refreshEndpoint) {
    this.interceptor = this.axios.interceptors.request.use(async (config) => {
      if (!this._needToken(config) || config.url === refreshEndpoint) {
        return config;
      }
      const {
        valid,
        tokenExpired,
        refreshTokenExpired,
        isRefreshable
      } = this.scheme.check(true);
      let isValid = valid;
      if (refreshTokenExpired) {
        this.scheme.reset();
        throw new ExpiredAuthSessionError();
      }
      if (tokenExpired) {
        if (!isRefreshable) {
          this.scheme.reset();
          throw new ExpiredAuthSessionError();
        }
        isValid = await this.scheme.refreshTokens().then(() => true).catch(() => {
          this.scheme.reset();
          throw new ExpiredAuthSessionError();
        });
      }
      const token = this.scheme.token.get();
      if (!isValid) {
        if (!token && this._requestHasAuthorizationHeader(config)) {
          throw new ExpiredAuthSessionError();
        }
        return config;
      }
      return this._getUpdatedRequestConfig(config, token);
    });
  }
  reset() {
    this.axios.interceptors.request.eject(this.interceptor);
    this.interceptor = null;
  }
  _needToken(config) {
    const options = this.scheme.options;
    return options.token.global || Object.values(options.endpoints).some((endpoint) => typeof endpoint === "object" ? endpoint.url === config.url : endpoint === config.url);
  }
  _getUpdatedRequestConfig(config, token) {
    if (typeof token === "string") {
      config.headers[this.scheme.options.token.name] = token;
    }
    return config;
  }
  _requestHasAuthorizationHeader(config) {
    return !!config.headers.common[this.scheme.options.token.name];
  }
}

class runtime_Token {
  constructor(scheme, storage) {
    this.scheme = scheme;
    this.$storage = storage;
  }
  get() {
    const _key = this.scheme.options.token.prefix + this.scheme.name;
    return this.$storage.getUniversal(_key);
  }
  set(tokenValue) {
    const token = addTokenPrefix(tokenValue, this.scheme.options.token.type);
    this._setToken(token);
    this._updateExpiration(token);
    if (typeof token === "string") {
      this.scheme.requestHandler.setHeader(token);
    }
    return token;
  }
  sync() {
    const token = this._syncToken();
    this._syncExpiration();
    if (typeof token === "string") {
      this.scheme.requestHandler.setHeader(token);
    }
    return token;
  }
  reset() {
    this.scheme.requestHandler.clearHeader();
    this._setToken(false);
    this._setExpiration(false);
  }
  status() {
    return new TokenStatus(this.get(), this._getExpiration());
  }
  _getExpiration() {
    const _key = this.scheme.options.token.expirationPrefix + this.scheme.name;
    return this.$storage.getUniversal(_key);
  }
  _setExpiration(expiration) {
    const _key = this.scheme.options.token.expirationPrefix + this.scheme.name;
    return this.$storage.setUniversal(_key, expiration);
  }
  _syncExpiration() {
    const _key = this.scheme.options.token.expirationPrefix + this.scheme.name;
    return this.$storage.syncUniversal(_key);
  }
  _updateExpiration(token) {
    let tokenExpiration;
    const _tokenIssuedAtMillis = Date.now();
    const _tokenTTLMillis = Number(this.scheme.options.token.maxAge) * 1e3;
    const _tokenExpiresAtMillis = _tokenTTLMillis ? _tokenIssuedAtMillis + _tokenTTLMillis : 0;
    try {
      tokenExpiration = external_jwt_decode_(token + "").exp * 1e3 || _tokenExpiresAtMillis;
    } catch (error) {
      tokenExpiration = _tokenExpiresAtMillis;
      if (!(error && error.name === "InvalidTokenError")) {
        throw error;
      }
    }
    return this._setExpiration(tokenExpiration || false);
  }
  _setToken(token) {
    const _key = this.scheme.options.token.prefix + this.scheme.name;
    return this.$storage.setUniversal(_key, token);
  }
  _syncToken() {
    const _key = this.scheme.options.token.prefix + this.scheme.name;
    return this.$storage.syncUniversal(_key);
  }
}

class runtime_BaseScheme {
  constructor($auth, ...options) {
    this.$auth = $auth;
    this.options = options.reduce((p, c) => dist_defu(p, c), {});
  }
  get name() {
    return this.options.name;
  }
}

const DEFAULTS = {
  name: "local",
  endpoints: {
    login: {
      url: "/api/auth/login",
      method: "post"
    },
    logout: {
      url: "/api/auth/logout",
      method: "post"
    },
    user: {
      url: "/api/auth/user",
      method: "get"
    }
  },
  token: {
    property: "token",
    type: "Bearer",
    name: "Authorization",
    maxAge: 1800,
    global: true,
    required: true,
    prefix: "_token.",
    expirationPrefix: "_token_expiration."
  },
  user: {
    property: "user",
    autoFetch: true
  },
  clientId: false,
  grantType: false,
  scope: false
};
class LocalScheme extends runtime_BaseScheme {
  constructor($auth, options, ...defaults) {
    super($auth, options, ...defaults, DEFAULTS);
    this.token = new runtime_Token(this, this.$auth.$storage);
    this.requestHandler = new RequestHandler(this, this.$auth.ctx.$axios);
  }
  check(checkStatus = false) {
    const response = {
      valid: false,
      tokenExpired: false
    };
    const token = this.token.sync();
    if (!token) {
      return response;
    }
    if (!checkStatus) {
      response.valid = true;
      return response;
    }
    const tokenStatus = this.token.status();
    if (tokenStatus.expired()) {
      response.tokenExpired = true;
      return response;
    }
    response.valid = true;
    return response;
  }
  mounted({
    tokenCallback = () => this.$auth.reset(),
    refreshTokenCallback = void 0
  } = {}) {
    const {tokenExpired, refreshTokenExpired} = this.check(true);
    if (refreshTokenExpired && typeof refreshTokenCallback === "function") {
      refreshTokenCallback();
    } else if (tokenExpired && typeof tokenCallback === "function") {
      tokenCallback();
    }
    this.initializeRequestInterceptor();
    return this.$auth.fetchUserOnce();
  }
  async login(endpoint, {reset = true} = {}) {
    if (!this.options.endpoints.login) {
      return;
    }
    if (reset) {
      this.$auth.reset({resetInterceptor: false});
    }
    if (this.options.clientId) {
      endpoint.data.client_id = this.options.clientId;
    }
    if (this.options.grantType) {
      endpoint.data.grant_type = this.options.grantType;
    }
    if (this.options.scope) {
      endpoint.data.scope = this.options.scope;
    }
    const response = await this.$auth.request(endpoint, this.options.endpoints.login);
    this.updateTokens(response);
    if (!this.requestHandler.interceptor) {
      this.initializeRequestInterceptor();
    }
    if (this.options.user.autoFetch) {
      await this.fetchUser();
    }
    return response;
  }
  setUserToken(token) {
    this.token.set(token);
    return this.fetchUser();
  }
  fetchUser(endpoint) {
    if (!this.check().valid) {
      return Promise.resolve();
    }
    if (!this.options.endpoints.user) {
      this.$auth.setUser({});
      return Promise.resolve();
    }
    return this.$auth.requestWith(this.name, endpoint, this.options.endpoints.user).then((response) => {
      const userData = getProp(response.data, this.options.user.property);
      if (!userData) {
        const error = new Error(`User Data response does not contain field ${this.options.user.property}`);
        return Promise.reject(error);
      }
      this.$auth.setUser(userData);
      return response;
    }).catch((error) => {
      this.$auth.callOnError(error, {method: "fetchUser"});
      return Promise.reject(error);
    });
  }
  async logout(endpoint = {}) {
    if (this.options.endpoints.logout) {
      await this.$auth.requestWith(this.name, endpoint, this.options.endpoints.logout).catch(() => {
      });
    }
    return this.$auth.reset();
  }
  reset({resetInterceptor = true} = {}) {
    this.$auth.setUser(false);
    this.token.reset();
    if (resetInterceptor) {
      this.requestHandler.reset();
    }
  }
  updateTokens(response) {
    const token = this.options.token.required ? getProp(response.data, this.options.token.property) : true;
    this.token.set(token);
  }
  initializeRequestInterceptor() {
    this.requestHandler.initializeRequestInterceptor();
  }
}

const DEFAULTS$1 = {
  name: "cookie",
  cookie: {
    name: null
  },
  token: {
    type: "",
    property: "",
    maxAge: false,
    global: false,
    required: false
  },
  endpoints: {
    csrf: null
  }
};
class CookieScheme extends LocalScheme {
  constructor($auth, options) {
    super($auth, options, DEFAULTS$1);
  }
  mounted() {
    if (true) {
      this.$auth.ctx.$axios.setHeader("referer", this.$auth.ctx.req.headers.host);
    }
    return super.mounted();
  }
  check() {
    const response = {valid: false};
    if (!super.check().valid) {
      return response;
    }
    if (this.options.cookie.name) {
      const cookies = this.$auth.$storage.getCookies();
      response.valid = Boolean(cookies[this.options.cookie.name]);
      return response;
    }
    response.valid = true;
    return response;
  }
  async login(endpoint) {
    this.$auth.reset();
    if (this.options.endpoints.csrf) {
      await this.$auth.request(this.options.endpoints.csrf, {
        maxRedirects: 0
      });
    }
    return super.login(endpoint, {reset: false});
  }
  reset() {
    if (this.options.cookie.name) {
      this.$auth.$storage.setCookie(this.options.cookie.name, null, {
        prefix: ""
      });
    }
    return super.reset();
  }
}

const DEFAULTS$2 = {
  name: "oauth2",
  accessType: null,
  redirectUri: null,
  logoutRedirectUri: null,
  clientId: null,
  audience: null,
  grantType: null,
  responseMode: null,
  acrValues: null,
  autoLogout: false,
  endpoints: {
    logout: "",
    authorization: "",
    token: "",
    userInfo: ""
  },
  scope: [],
  token: {
    property: "access_token",
    type: "Bearer",
    name: "Authorization",
    maxAge: 1800,
    global: true,
    prefix: "_token.",
    expirationPrefix: "_token_expiration."
  },
  refreshToken: {
    property: "refresh_token",
    maxAge: 60 * 60 * 24 * 30,
    prefix: "_refresh_token.",
    expirationPrefix: "_refresh_token_expiration."
  },
  user: {
    property: false
  },
  responseType: "token",
  codeChallengeMethod: "implicit"
};
class runtime_Oauth2Scheme extends runtime_BaseScheme {
  constructor($auth, options, ...defaults) {
    super($auth, options, ...defaults, DEFAULTS$2);
    this.req = $auth.ctx.req;
    this.token = new runtime_Token(this, this.$auth.$storage);
    this.refreshToken = new runtime_RefreshToken(this, this.$auth.$storage);
    this.refreshController = new RefreshController(this);
    this.requestHandler = new RequestHandler(this, this.$auth.ctx.$axios);
  }
  get scope() {
    return Array.isArray(this.options.scope) ? this.options.scope.join(" ") : this.options.scope;
  }
  get redirectURI() {
    const basePath = this.$auth.ctx.base || "";
    const path = normalizePath(basePath + "/" + this.$auth.options.redirect.callback);
    return this.options.redirectUri || runtime_urlJoin(external_requrl_(this.req), path);
  }
  get logoutRedirectURI() {
    return this.options.logoutRedirectUri || runtime_urlJoin(external_requrl_(this.req), this.$auth.options.redirect.logout);
  }
  check(checkStatus = false) {
    const response = {
      valid: false,
      tokenExpired: false,
      refreshTokenExpired: false,
      isRefreshable: true
    };
    const token = this.token.sync();
    this.refreshToken.sync();
    if (!token) {
      return response;
    }
    if (!checkStatus) {
      response.valid = true;
      return response;
    }
    const tokenStatus = this.token.status();
    const refreshTokenStatus = this.refreshToken.status();
    if (refreshTokenStatus.expired()) {
      response.refreshTokenExpired = true;
      return response;
    }
    if (tokenStatus.expired()) {
      response.tokenExpired = true;
      return response;
    }
    response.valid = true;
    return response;
  }
  async mounted() {
    const {tokenExpired, refreshTokenExpired} = this.check(true);
    if (refreshTokenExpired || tokenExpired && this.options.autoLogout) {
      this.$auth.reset();
    }
    this.requestHandler.initializeRequestInterceptor(this.options.endpoints.token);
    const redirected = await this._handleCallback();
    if (!redirected) {
      return this.$auth.fetchUserOnce();
    }
  }
  reset() {
    this.$auth.setUser(false);
    this.token.reset();
    this.refreshToken.reset();
    this.requestHandler.reset();
  }
  async login(_opts = {}) {
    const opts = {
      protocol: "oauth2",
      response_type: this.options.responseType,
      access_type: this.options.accessType,
      client_id: this.options.clientId,
      redirect_uri: this.redirectURI,
      scope: this.scope,
      state: _opts.state || randomString(10),
      code_challenge_method: this.options.codeChallengeMethod,
      ..._opts.params
    };
    if (this.options.audience) {
      opts.audience = this.options.audience;
    }
    if (opts.response_type.includes("token")) {
      opts.nonce = _opts.nonce || randomString(10);
    }
    if (opts.code_challenge_method) {
      switch (opts.code_challenge_method) {
        case "plain":
        case "S256":
          {
            const state = this.generateRandomString();
            this.$auth.$storage.setUniversal(this.name + ".pkce_state", state);
            const codeVerifier = this.generateRandomString();
            this.$auth.$storage.setUniversal(this.name + ".pkce_code_verifier", codeVerifier);
            const codeChallenge = await this.pkceChallengeFromVerifier(codeVerifier, opts.code_challenge_method === "S256");
            opts.code_challenge = window.encodeURIComponent(codeChallenge);
          }
          break;
      }
    }
    if (this.options.responseMode) {
      opts.response_mode = this.options.responseMode;
    }
    if (this.options.acrValues) {
      opts.acr_values = this.options.acrValues;
    }
    this.$auth.$storage.setUniversal(this.name + ".state", opts.state);
    const url = this.options.endpoints.authorization + "?" + encodeQuery(opts);
    window.location.replace(url);
  }
  logout() {
    if (this.options.endpoints.logout) {
      const opts = {
        client_id: this.options.clientId + "",
        logout_uri: this.logoutRedirectURI
      };
      const url = this.options.endpoints.logout + "?" + encodeQuery(opts);
      window.location.replace(url);
    }
    return this.$auth.reset();
  }
  async fetchUser() {
    if (!this.check().valid) {
      return;
    }
    if (!this.options.endpoints.userInfo) {
      this.$auth.setUser({});
      return;
    }
    const response = await this.$auth.requestWith(this.name, {
      url: this.options.endpoints.userInfo
    });
    this.$auth.setUser(getProp(response.data, this.options.user.property));
  }
  async _handleCallback() {
    if (this.$auth.options.redirect && normalizePath(this.$auth.ctx.route.path, this.$auth.ctx) !== normalizePath(this.$auth.options.redirect.callback, this.$auth.ctx)) {
      return;
    }
    if (true) {
      return;
    }
    const hash = runtime_parseQuery(this.$auth.ctx.route.hash.substr(1));
    const parsedQuery = Object.assign({}, this.$auth.ctx.route.query, hash);
    let token = parsedQuery[this.options.token.property];
    let refreshToken;
    if (this.options.refreshToken.property) {
      refreshToken = parsedQuery[this.options.refreshToken.property];
    }
    const state = this.$auth.$storage.getUniversal(this.name + ".state");
    this.$auth.$storage.setUniversal(this.name + ".state", null);
    if (state && parsedQuery.state !== state) {
      return;
    }
    if (this.options.responseType === "code" && parsedQuery.code) {
      let codeVerifier;
      if (this.options.codeChallengeMethod && this.options.codeChallengeMethod !== "implicit") {
        codeVerifier = this.$auth.$storage.getUniversal(this.name + ".pkce_code_verifier");
        this.$auth.$storage.setUniversal(this.name + ".pkce_code_verifier", null);
      }
      const response = await this.$auth.request({
        method: "post",
        url: this.options.endpoints.token,
        baseURL: "",
        data: encodeQuery({
          code: parsedQuery.code,
          client_id: this.options.clientId + "",
          redirect_uri: this.redirectURI,
          response_type: this.options.responseType,
          audience: this.options.audience,
          grant_type: this.options.grantType,
          code_verifier: codeVerifier
        })
      });
      token = getProp(response.data, this.options.token.property) || token;
      refreshToken = getProp(response.data, this.options.refreshToken.property) || refreshToken;
    }
    if (!token || !token.length) {
      return;
    }
    this.token.set(token);
    if (refreshToken && refreshToken.length) {
      this.refreshToken.set(refreshToken);
    }
    this.$auth.redirect("home", true);
    return true;
  }
  async refreshTokens() {
    const refreshToken = this.refreshToken.get();
    if (!refreshToken) {
      return;
    }
    const refreshTokenStatus = this.refreshToken.status();
    if (refreshTokenStatus.expired()) {
      this.$auth.reset();
      throw new ExpiredAuthSessionError();
    }
    this.requestHandler.clearHeader();
    const response = await this.$auth.request({
      method: "post",
      url: this.options.endpoints.token,
      baseURL: "",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      data: encodeQuery({
        refresh_token: removeTokenPrefix(refreshToken, this.options.token.type),
        client_id: this.options.clientId + "",
        grant_type: "refresh_token"
      })
    }).catch((error) => {
      this.$auth.callOnError(error, {method: "refreshToken"});
      return Promise.reject(error);
    });
    this.updateTokens(response);
    return response;
  }
  updateTokens(response) {
    const token = getProp(response.data, this.options.token.property);
    const refreshToken = getProp(response.data, this.options.refreshToken.property);
    this.token.set(token);
    if (refreshToken) {
      this.refreshToken.set(refreshToken);
    }
  }
  async pkceChallengeFromVerifier(v, hashValue) {
    if (hashValue) {
      const hashed = await this._sha256(v);
      return this._base64UrlEncode(hashed);
    }
    return v;
  }
  generateRandomString() {
    const array = new Uint32Array(28);
    window.crypto.getRandomValues(array);
    return Array.from(array, (dec) => ("0" + dec.toString(16)).substr(-2)).join("");
  }
  _sha256(plain) {
    const encoder = new TextEncoder();
    const data = encoder.encode(plain);
    return window.crypto.subtle.digest("SHA-256", data);
  }
  _base64UrlEncode(str) {
    return btoa(String.fromCharCode.apply(null, new Uint8Array(str))).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
  }
}

const DEFAULTS$3 = {
  name: "refresh",
  endpoints: {
    refresh: {
      url: "/api/auth/refresh",
      method: "post"
    }
  },
  refreshToken: {
    property: "refresh_token",
    data: "refresh_token",
    maxAge: 60 * 60 * 24 * 30,
    required: true,
    tokenRequired: false,
    prefix: "_refresh_token.",
    expirationPrefix: "_refresh_token_expiration."
  },
  autoLogout: false
};
class RefreshScheme extends LocalScheme {
  constructor($auth, options) {
    super($auth, options, DEFAULTS$3);
    this.refreshToken = new runtime_RefreshToken(this, this.$auth.$storage);
    this.refreshController = new RefreshController(this);
  }
  check(checkStatus = false) {
    const response = {
      valid: false,
      tokenExpired: false,
      refreshTokenExpired: false,
      isRefreshable: true
    };
    const token = this.token.sync();
    const refreshToken = this.refreshToken.sync();
    if (!token || !refreshToken) {
      return response;
    }
    if (!checkStatus) {
      response.valid = true;
      return response;
    }
    const tokenStatus = this.token.status();
    const refreshTokenStatus = this.refreshToken.status();
    if (refreshTokenStatus.expired()) {
      response.refreshTokenExpired = true;
      return response;
    }
    if (tokenStatus.expired()) {
      response.tokenExpired = true;
      return response;
    }
    response.valid = true;
    return response;
  }
  mounted() {
    return super.mounted({
      tokenCallback: () => {
        if (this.options.autoLogout) {
          this.$auth.reset();
        }
      },
      refreshTokenCallback: () => {
        this.$auth.reset();
      }
    });
  }
  refreshTokens() {
    if (!this.options.endpoints.refresh) {
      return Promise.resolve();
    }
    if (!this.check().valid) {
      return Promise.resolve();
    }
    const refreshTokenStatus = this.refreshToken.status();
    if (refreshTokenStatus.expired()) {
      this.$auth.reset();
      throw new ExpiredAuthSessionError();
    }
    if (!this.options.refreshToken.tokenRequired) {
      this.requestHandler.clearHeader();
    }
    const endpoint = {
      data: {
        client_id: void 0,
        grant_type: void 0
      }
    };
    if (this.options.refreshToken.required && this.options.refreshToken.data) {
      endpoint.data[this.options.refreshToken.data] = this.refreshToken.get();
    }
    if (this.options.clientId) {
      endpoint.data.client_id = this.options.clientId;
    }
    if (this.options.grantType) {
      endpoint.data.grant_type = "refresh_token";
    }
    cleanObj(endpoint.data);
    return this.$auth.request(endpoint, this.options.endpoints.refresh).then((response) => {
      this.updateTokens(response, {isRefreshing: true});
      return response;
    }).catch((error) => {
      this.$auth.callOnError(error, {method: "refreshToken"});
      return Promise.reject(error);
    });
  }
  setUserToken(token, refreshToken) {
    this.token.set(token);
    if (refreshToken) {
      this.refreshToken.set(refreshToken);
    }
    return this.fetchUser();
  }
  reset({resetInterceptor = true} = {}) {
    this.$auth.setUser(false);
    this.token.reset();
    this.refreshToken.reset();
    if (resetInterceptor) {
      this.requestHandler.reset();
    }
  }
  updateTokens(response, {isRefreshing = false, updateOnRefresh = true} = {}) {
    const token = this.options.token.required ? getProp(response.data, this.options.token.property) : true;
    const refreshToken = this.options.refreshToken.required ? getProp(response.data, this.options.refreshToken.property) : true;
    this.token.set(token);
    if (refreshToken && (!isRefreshing || isRefreshing && updateOnRefresh)) {
      this.refreshToken.set(refreshToken);
    }
  }
  initializeRequestInterceptor() {
    this.requestHandler.initializeRequestInterceptor(this.options.endpoints.refresh.url);
  }
}

class Auth0Scheme extends runtime_Oauth2Scheme {
  logout() {
    this.$auth.reset();
    const opts = {
      client_id: this.options.clientId + "",
      returnTo: this.logoutRedirectURI
    };
    const url = this.options.endpoints.logout + "?" + encodeQuery(opts);
    window.location.replace(url);
  }
}

class LaravelJWTScheme extends RefreshScheme {
  updateTokens(response, {isRefreshing = false, updateOnRefresh = false} = {}) {
    super.updateTokens(response, {isRefreshing, updateOnRefresh});
  }
}



// CONCATENATED MODULE: ./.nuxt/auth.js
// Active schemes
_nuxt_middleware.auth=authMiddleware;/* harmony default export */ var auth = (function(ctx,inject){// Options
const options={"resetOnError":false,"ignoreExceptions":false,"scopeKey":"scope","rewriteRedirects":true,"fullPathRedirect":false,"watchLoggedIn":true,"redirect":{"login":"/auth/login","logout":"/","home":"/","callback":"/auth/login"},"vuex":{"namespace":"auth"},"cookie":{"prefix":"auth.","options":{"path":"/"}},"localStorage":{"prefix":"auth."},"defaultStrategy":"local"};// Create a new Auth instance
const $auth=new runtime_Auth(ctx,options);// Register strategies
// local
$auth.registerStrategy('local',new LocalScheme($auth,{"token":{"property":"token","name":"token"},"user":{"property":"data"},"endpoints":{"login":{"url":"/user/login","method":"post"},"user":{"url":"/user/me","method":"get"}},"name":"local"}));// Inject it to nuxt context as $auth
inject('auth',$auth);ctx.$auth=$auth;// Initialize auth
return $auth.init().catch(error=>{if(false){}});});
// CONCATENATED MODULE: ./.nuxt/index.js
/* Plugins */// Source: .\\components\\plugin.js (mode: 'all')
// Source: .\\bootstrap-vue.js (mode: 'all')
// Source: .\\image.js (mode: 'all')
// Source: .\\nuxt-i18n\\plugin.utils.js (mode: 'all')
// Source: .\\nuxt-i18n\\plugin.routing.js (mode: 'all')
// Source: .\\nuxt-i18n\\plugin.main.js (mode: 'all')
// Source: .\\axios.js (mode: 'all')
// Source: .\\fontawesome.js (mode: 'all')
// Source: ..\\plugins\\vue-slick-carousel.js (mode: 'client')
// Source: ..\\plugins\\clickOut.js (mode: 'client')
// Source: ..\\plugins\\beautySum.js (mode: 'client')
// Source: ..\\plugins\\vue-slider-component.js (mode: 'client')
// Source: ..\\plugins\\vue-star-rating.js (mode: 'client')
// Source: ..\\plugins\\v-mask.js (mode: 'client')
// Source: ..\\plugins\\persistedState.js (mode: 'client')
// Source: ..\\plugins\\vuelidate.js (mode: 'client')
// Source: ..\\plugins\\pdf.js (mode: 'client')
// Source: .\\auth.js (mode: 'all')
// Component: <ClientOnly>
external_vue_default.a.component(external_vue_client_only_default.a.name,external_vue_client_only_default.a);// TODO: Remove in Nuxt 3: <NoSsr>
external_vue_default.a.component(external_vue_no_ssr_default.a.name,{...external_vue_no_ssr_default.a,render(h,ctx){if(false){}return external_vue_no_ssr_default.a.render(h,ctx);}});// Component: <NuxtChild>
external_vue_default.a.component(nuxt_child.name,nuxt_child);external_vue_default.a.component('NChild',nuxt_child);// Component NuxtLink is imported in server.js or client.js
// Component: <Nuxt>
external_vue_default.a.component(components_nuxt.name,components_nuxt);Object.defineProperty(external_vue_default.a.prototype,'$nuxt',{get(){const globalNuxt=this.$root.$options.$nuxt;if(false){}return globalNuxt;},configurable:true});external_vue_default.a.use(external_vue_meta_default.a,{"keyName":"head","attribute":"data-n-head","ssrAttribute":"data-n-head-ssr","tagIDKeyName":"hid"});const defaultTransition={"name":"page","mode":"out-in","appear":false,"appearClass":"appear","appearActiveClass":"appear-active","appearToClass":"appear-to"};const originalRegisterModule=external_vuex_default.a.Store.prototype.registerModule;function registerModule(path,rawModule,options={}){const preserveState= false&&(false);return originalRegisterModule.call(this,path,rawModule,{preserveState,...options});}async function createApp(ssrContext,config={}){const router=await createRouter(ssrContext,config);const store=createStore(ssrContext);// Add this.$router into store actions/mutations
store.$router=router;// Fix SSR caveat https://github.com/nuxt/nuxt.js/issues/3757#issuecomment-414689141
store.registerModule=registerModule;// Create Root instance
// here we inject the router and store to all child components,
// making them available everywhere as `this.$router` and `this.$store`.
const app={head:{"title":"Интернет-платформа  Tujjor —  низкие цены и широкий ассортимент! | Tujjor","htmlAttrs":{"lang":"en"},"meta":[{"charset":"utf-8"},{"name":"viewport","content":"width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"},{"hid":"description","name":"description","content":"Интернет-платформа  Tujjor —  низкие цены и широкий ассортимент! | Tujjor. "},{"name":"keywords","content":"интернет магазин, узбекистан, ташкент, рассрочка, скидка, Книги, телефоны и гаджеты, компьютеры  и  оргтехника, для геймеров, кондиционеры, бытовая техника, телевизоры, видео и аудио, посуда, мебель, техника для красоты и здоровья, техника для кухни, для дома и офиса, инструменты и автотовары, игрушки, подарки и аксессуары, рамазан, одежда, обувь и аксессуары"}],"link":[{"rel":"icon","type":"image\u002Fx-icon","href":"\u002Ffavicon.ico"},{"rel":"stylesheet","type":"text\u002Fcss","href":"\u002F\u002Fcdn.jsdelivr.net\u002Fnpm\u002Fslick-carousel@1.8.1\u002Fslick\u002Fslick.css"},{"rel":"stylesheet","type":"text\u002Fcss","href":"\u002F\u002Fcdn.jsdelivr.net\u002Fnpm\u002Fslick-carousel@1.8.1\u002Fslick\u002Fslick-theme.css"},{"rel":"stylesheet","href":"https:\u002F\u002Ffonts.googleapis.com\u002Fcss2?family=Roboto:wght@100;300;400;500;700;900&display=swap"},{"rel":"stylesheet","href":"https:\u002F\u002Ffonts.googleapis.com\u002Fcss2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap"},{"rel":"stylesheet","href":"https:\u002F\u002Ffonts.googleapis.com\u002Fcss2?family=Montserrat:wght@300;400;500;600;700;800;900&display=swap"}],"style":[],"script":[]},store,router,nuxt:{defaultTransition,transitions:[defaultTransition],setTransitions(transitions){if(!Array.isArray(transitions)){transitions=[transitions];}transitions=transitions.map(transition=>{if(!transition){transition=defaultTransition;}else if(typeof transition==='string'){transition=Object.assign({},defaultTransition,{name:transition});}else{transition=Object.assign({},defaultTransition,transition);}return transition;});this.$options.nuxt.transitions=transitions;return transitions;},err:null,dateErr:null,error(err){err=err||null;app.context._errored=Boolean(err);err=err?normalizeError(err):null;let nuxt=app.nuxt;// to work with @vue/composition-api, see https://github.com/nuxt/nuxt.js/issues/6517#issuecomment-573280207
if(this){nuxt=this.nuxt||this.$options.nuxt;}nuxt.dateErr=Date.now();nuxt.err=err;// Used in src/server.js
if(ssrContext){ssrContext.nuxt.error=err;}return err;}},...App};// Make app available into store via this.app
store.app=app;const next=ssrContext?ssrContext.next:location=>app.router.push(location);// Resolve route
let route;if(ssrContext){route=router.resolve(ssrContext.url).route;}else{const path=getLocation(router.options.base,router.options.mode);route=router.resolve(path).route;}// Set context to app.context
await setContext(app,{store,route,next,error:app.nuxt.error.bind(app),payload:ssrContext?ssrContext.payload:undefined,req:ssrContext?ssrContext.req:undefined,res:ssrContext?ssrContext.res:undefined,beforeRenderFns:ssrContext?ssrContext.beforeRenderFns:undefined,ssrContext});function inject(key,value){if(!key){throw new Error('inject(key, value) has no key provided');}if(value===undefined){throw new Error(`inject('${key}', value) has no value provided`);}key='$'+key;// Add into app
app[key]=value;// Add into context
if(!app.context[key]){app.context[key]=value;}// Add into store
store[key]=app[key];// Check if plugin not already installed
const installKey='__nuxt_'+key+'_installed__';if(external_vue_default.a[installKey]){return;}external_vue_default.a[installKey]=true;// Call Vue.use() to install the plugin into vm
external_vue_default.a.use(()=>{if(!Object.prototype.hasOwnProperty.call(external_vue_default.a.prototype,key)){Object.defineProperty(external_vue_default.a.prototype,key,{get(){return this.$root.$options[key];}});}});}// Inject runtime config as $config
inject('config',config);if(false){}// Add enablePreview(previewData = {}) in context for plugins
if(false){}// Plugin execution
if(typeof /* Cannot get final name for export "default" in "./.nuxt/components/plugin.js" (known exports: , known reexports: ) */ undefined==='function'){await /* Cannot get final name for export "default" in "./.nuxt/components/plugin.js" (known exports: , known reexports: ) */ undefined(app.context,inject);}if(typeof /* Cannot get final name for export "default" in "./.nuxt/bootstrap-vue.js" (known exports: , known reexports: ) */ undefined==='function'){await /* Cannot get final name for export "default" in "./.nuxt/bootstrap-vue.js" (known exports: , known reexports: ) */ undefined(app.context,inject);}if(typeof _nuxt_image==='function'){await _nuxt_image(app.context,inject);}if(typeof /* Cannot get final name for export "default" in "./.nuxt/nuxt-i18n/plugin.utils.js" (known exports: loadLanguageAsync resolveBaseUrl getDomainFromLocale registerStore validateRouteParams, known reexports: ) */ undefined==='function'){await /* Cannot get final name for export "default" in "./.nuxt/nuxt-i18n/plugin.utils.js" (known exports: loadLanguageAsync resolveBaseUrl getDomainFromLocale registerStore validateRouteParams, known reexports: ) */ undefined(app.context,inject);}if(typeof plugin_routing==='function'){await plugin_routing(app.context,inject);}if(typeof plugin_main==='function'){await plugin_main(app.context,inject);}if(typeof _nuxt_axios==='function'){await _nuxt_axios(app.context,inject);}if(typeof /* Cannot get final name for export "default" in "./.nuxt/fontawesome.js" (known exports: , known reexports: ) */ undefined==='function'){await /* Cannot get final name for export "default" in "./.nuxt/fontawesome.js" (known exports: , known reexports: ) */ undefined(app.context,inject);}if(false){}if(false){}if(false){}if(false){}if(false){}if(false){}if(false){}if(false){}if(false){}if(typeof auth==='function'){await auth(app.context,inject);}// Lock enablePreview in context
if(false){}// Wait for async component to be resolved first
await new Promise((resolve,reject)=>{// Ignore 404s rather than blindly replacing URL in browser
if(false){}router.replace(app.context.route.fullPath,resolve,err=>{// https://github.com/vuejs/vue-router/blob/v3.4.3/src/util/errors.js
if(!err._isRouter)return reject(err);if(err.type!==2/* NavigationFailureType.redirected */)return resolve();// navigated to a different route in router guard
const unregister=router.afterEach(async(to,from)=>{if( true&&ssrContext&&ssrContext.url){ssrContext.url=to.fullPath;}app.context.route=await getRouteData(to);app.context.params=to.params||{};app.context.query=to.query||{};unregister();resolve();});});});return{store,app,router};}
// CONCATENATED MODULE: ./.nuxt/components/nuxt-link.server.js
/* harmony default export */ var nuxt_link_server = ({name:'NuxtLink',extends:external_vue_default.a.component('RouterLink'),props:{prefetch:{type:Boolean,default:true},noPrefetch:{type:Boolean,default:false}}});
// CONCATENATED MODULE: ./.nuxt/server.js
// should be included after ./index.js
// Update serverPrefetch strategy
external_vue_default.a.config.optionMergeStrategies.serverPrefetch=external_vue_default.a.config.optionMergeStrategies.created;// Fetch mixin
if(!external_vue_default.a.__nuxt__fetch__mixin__){external_vue_default.a.mixin(fetch_server);external_vue_default.a.__nuxt__fetch__mixin__=true;}// Component: <NuxtLink>
external_vue_default.a.component(nuxt_link_server.name,nuxt_link_server);external_vue_default.a.component('NLink',nuxt_link_server);if(!global.fetch){global.fetch=external_node_fetch_default.a;}const noopApp=()=>new external_vue_default.a({render:h=>h('div',{domProps:{id:'__nuxt'}})});const createNext=ssrContext=>opts=>{// If static target, render on client-side
ssrContext.redirected=opts;if(ssrContext.target==='static'||!ssrContext.res){ssrContext.nuxt.serverRendered=false;return;}let fullPath=Object(dist["withQuery"])(opts.path,opts.query);const $config=ssrContext.runtimeConfig||{};const routerBase=$config._app&&$config._app.basePath||'/';if(!fullPath.startsWith('http')&&routerBase!=='/'&&!fullPath.startsWith(routerBase)){fullPath=Object(dist["joinURL"])(routerBase,fullPath);}// Avoid loop redirect
if(decodeURI(fullPath)===decodeURI(ssrContext.url)){ssrContext.redirected=false;return;}ssrContext.res.writeHead(opts.status,{Location:Object(dist["normalizeURL"])(fullPath)});ssrContext.res.end();};// This exported function will be called by `bundleRenderer`.
// This is where we perform data-prefetching to determine the
// state of our application before actually rendering it.
// Since data fetching is async, this function is expected to
// return a Promise that resolves to the app instance.
/* harmony default export */ var server = __webpack_exports__["default"] = (async ssrContext=>{// Create ssrContext.next for simulate next() of beforeEach() when wanted to redirect
ssrContext.redirected=false;ssrContext.next=createNext(ssrContext);// Used for beforeNuxtRender({ Components, nuxtState })
ssrContext.beforeRenderFns=[];// Nuxt object (window.{{globals.context}}, defaults to window.__NUXT__)
ssrContext.nuxt={layout:'default',data:[],fetch:{},error:null,state:null,serverRendered:true,routePath:''};ssrContext.fetchCounters={};// Remove query from url is static target
// Public runtime config
ssrContext.nuxt.config=ssrContext.runtimeConfig.public;if(ssrContext.nuxt.config._app){__webpack_require__.p=Object(dist["joinURL"])(ssrContext.nuxt.config._app.cdnURL,ssrContext.nuxt.config._app.assetsPath);}// Create the app definition and the instance (created for each request)
const{app,router,store}=await createApp(ssrContext,ssrContext.runtimeConfig.private);const _app=new external_vue_default.a(app);// Add ssr route path to nuxt context so we can account for page navigation between ssr and csr
ssrContext.nuxt.routePath=app.context.route.path;// Add meta infos (used in renderer.js)
ssrContext.meta=_app.$meta();// Keep asyncData for each matched component in ssrContext (used in app/utils.js via this.$ssrContext)
ssrContext.asyncData={};const beforeRender=async()=>{// Call beforeNuxtRender() methods
await Promise.all(ssrContext.beforeRenderFns.map(fn=>promisify(fn,{Components,nuxtState:ssrContext.nuxt})));ssrContext.rendered=()=>{// Add the state from the vuex store
ssrContext.nuxt.state=store.state;};};const renderErrorPage=async()=>{// Don't server-render the page in static target
if(ssrContext.target==='static'){ssrContext.nuxt.serverRendered=false;}// Load layout for error page
const layout=(nuxt_error.options||nuxt_error).layout;const errLayout=typeof layout==='function'?layout.call(nuxt_error,app.context):layout;ssrContext.nuxt.layout=errLayout||'default';await _app.loadLayout(errLayout);_app.setLayout(errLayout);await beforeRender();return _app;};const render404Page=()=>{app.context.error({statusCode:404,path:ssrContext.url,message:'This page could not be found'});return renderErrorPage();};// Components are already resolved by setContext -> getRouteData (app/utils.js)
const Components=getMatchedComponents(app.context.route);/*
  ** Dispatch store nuxtServerInit
  */if(store._actions&&store._actions.nuxtServerInit){try{await store.dispatch('nuxtServerInit',app.context);}catch(err){console.debug('Error occurred when calling nuxtServerInit: ',err.message);throw err;}}// ...If there is a redirect or an error, stop the process
if(ssrContext.redirected){return noopApp();}if(ssrContext.nuxt.error){return renderErrorPage();}/*
  ** Call global middleware (nuxt.config.js)
  */let midd=["nuxti18n"];midd=midd.map(name=>{if(typeof name==='function'){return name;}if(typeof _nuxt_middleware[name]!=='function'){app.context.error({statusCode:500,message:'Unknown middleware '+name});}return _nuxt_middleware[name];});await middlewareSeries(midd,app.context);// ...If there is a redirect or an error, stop the process
if(ssrContext.redirected){return noopApp();}if(ssrContext.nuxt.error){return renderErrorPage();}/*
  ** Set layout
  */let layout=Components.length?Components[0].options.layout:nuxt_error.layout;if(typeof layout==='function'){layout=layout(app.context);}await _app.loadLayout(layout);if(ssrContext.nuxt.error){return renderErrorPage();}layout=_app.setLayout(layout);ssrContext.nuxt.layout=_app.layoutName;/*
  ** Call middleware (layout + pages)
  */midd=[];layout=sanitizeComponent(layout);if(layout.options.middleware){midd=midd.concat(layout.options.middleware);}Components.forEach(Component=>{if(Component.options.middleware){midd=midd.concat(Component.options.middleware);}});midd=midd.map(name=>{if(typeof name==='function'){return name;}if(typeof _nuxt_middleware[name]!=='function'){app.context.error({statusCode:500,message:'Unknown middleware '+name});}return _nuxt_middleware[name];});await middlewareSeries(midd,app.context);// ...If there is a redirect or an error, stop the process
if(ssrContext.redirected){return noopApp();}if(ssrContext.nuxt.error){return renderErrorPage();}/*
  ** Call .validate()
  */let isValid=true;try{for(const Component of Components){if(typeof Component.options.validate!=='function'){continue;}isValid=await Component.options.validate(app.context);if(!isValid){break;}}}catch(validationError){// ...If .validate() threw an error
app.context.error({statusCode:validationError.statusCode||'500',message:validationError.message});return renderErrorPage();}// ...If .validate() returned false
if(!isValid){// Render a 404 error page
return render404Page();}// If no Components found, returns 404
if(!Components.length){return render404Page();}// Call asyncData & fetch hooks on components matched by the route.
const asyncDatas=await Promise.all(Components.map(Component=>{const promises=[];// Call asyncData(context)
if(Component.options.asyncData&&typeof Component.options.asyncData==='function'){const promise=promisify(Component.options.asyncData,app.context);promise.then(asyncDataResult=>{ssrContext.asyncData[Component.cid]=asyncDataResult;applyAsyncData(Component);return asyncDataResult;});promises.push(promise);}else{promises.push(null);}// Call fetch(context)
if(Component.options.fetch&&Component.options.fetch.length){promises.push(Component.options.fetch(app.context));}else{promises.push(null);}return Promise.all(promises);}));// datas are the first row of each
ssrContext.nuxt.data=asyncDatas.map(r=>r[0]||{});// ...If there is a redirect or an error, stop the process
if(ssrContext.redirected){return noopApp();}if(ssrContext.nuxt.error){return renderErrorPage();}// Call beforeNuxtRender methods & add store state
await beforeRender();return _app;});

/***/ }),
/* 76 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/esnext.string.replace-all.js");

/***/ }),
/* 77 */
/***/ (function(module, exports) {

module.exports = require("vuelidate/lib/validators");

/***/ }),
/* 78 */
/***/ (function(module, exports) {

module.exports = require("vue-html2pdf");

/***/ }),
/* 79 */,
/* 80 */,
/* 81 */,
/* 82 */
/***/ (function(module, exports) {

module.exports = require("image-meta");

/***/ }),
/* 83 */
/***/ (function(module, exports) {

module.exports = require("devalue");

/***/ })
/******/ ]);
//# sourceMappingURL=server.js.map