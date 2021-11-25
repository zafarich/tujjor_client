exports.ids = [10];
exports.modules = {

/***/ 105:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = url && url.__esModule ? url.default : url;

  if (typeof url !== "string") {
    return url;
  } // If url is already wrapped in quotes, remove them


  if (/^['"].*['"]$/.test(url)) {
    // eslint-disable-next-line no-param-reassign
    url = url.slice(1, -1);
  }

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ 123:
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAC/SURBVHgBrZJhEYMwDIVTFCABB0NCJUzKHJQp2KFgEiZhNwWbg0pgDrL0lh8ltDkCvLt30Kb9mjQFRAy4VCS3YBHWNVg4wKeX9LZwGvKnEust5SXQqxK7Oue+sFZ0qt99PxlsEiAPRjX8HcW8h40ZtSKrCa3vKIMNorwbbBFnFQUsKOt7DVbqYCisu3Ms8n8HK0rMN5wzyCxey6wEU6WVeTkExLCO/NwNyoCpCQ8N5MAg/Hcntd2TT+Q0Tg93/AHdfdepLR6xAwAAAABJRU5ErkJggg=="

/***/ }),

/***/ 124:
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAOCAYAAAAi2ky3AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACuSURBVHgBrVKLDYJADH0ywY3ACLqBbKITqBNc3MANZANH0BHcADaADUp7eSSE3AXC8ZJ3afp5vbSFiHhlJ3m4H+xFPvrCHuTDmdBV2WI77CNVQZEK28T+ylOwOCxP+7V+viHXcVmCSeCjLG0DC1vsmGMi39GJWVJDsZK2JOLHeRwSh2fHeuKr6bvFClJChje7n0lHXxRLB9kqf1zxRelSiXtdNva67CD0zBSz2scA3ZGxX5LxLmsAAAAASUVORK5CYII="

/***/ }),

/***/ 125:
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAAcCAYAAACDBoQZAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEjSURBVHgBrZRhccMwDIW1IgiEDMkCYRDCYGHQMNgYuAwGwWPQDoHLIGPwJp2duzYnqU7S704/Yr0825JPRAoAGo4jR+SYkJnK98DRUg3FZDbwOHomcpoz1iH6RjNbazQTtavtYRSfF+RiJqeMPxxXDtF1huaP41VO1Ru7JSy6Jt9lXWMQQTSSrXaEYqh1O5KRCOTA+ZPyz3TgXKPof8nnoqw1B0PckI+aF7Orsv5GPlr+Yt0/d0eB1z8MfZBkB5uA0tXSxU9H+z7vFrGPdHv0DvvolrX4wjaCVlgZQTVz7JYEa1AiT9E19OSB+mac6RHIT6CGlmpg4fjAaKRakJuRDKNEa4H99nraAv/4vTAKtBXcT9VUXXTHcH57Az0DNjrV6P4B4yY67pjQhY4AAAAASUVORK5CYII="

/***/ }),

/***/ 158:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/bg-2.4124a28.jpg";

/***/ }),

/***/ 187:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(253);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("1ec09504", content, true, context)
};

/***/ }),

/***/ 251:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/magazine-icon.c4a7718.png";

/***/ }),

/***/ 252:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MagazineDescription_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(187);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MagazineDescription_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MagazineDescription_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MagazineDescription_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MagazineDescription_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 253:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(105);
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(158);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "@media(max-width:543px){.popular__container .img-fluid{height:170px!important;-o-object-fit:cover!important;object-fit:cover!important}.other__item__banner--carousel .b-carousel .carousel-inner .b-carousel-slide img{min-height:250px!important}}.other__item__banner--carousel .b-carousel .carousel-inner .b-carousel-slide img{min-height:450px}.success-info{position:fixed;top:10px;right:20px;width:320px;z-index:12345}div.card-row{display:flex;margin:0 -10px;flex-wrap:wrap}.hover-shadow:hover{box-shadow:0 1px 10px rgba(0,0,0,.18)}div.card-5{width:20%;padding:0 10px}div.card-4{width:25%;padding:0 10px}div.card-3{width:33.3333333333%;padding:0 10px}@media(max-width:1020px){div.card-4,div.card-5{width:33.3333333333%}}@media(max-width:768px){div.card-3,div.card-4,div.card-5{width:50%}.catalog__container{padding-top:5px!important}.filtr__section .catalog__page__filtr__box{position:relative!important;top:unset!important}.catalog__container .catalog__filtraiton__box .filtraiton__form__box .filtraiton__form--submit{margin-bottom:0!important}.catalog__container .catalog__page__about{padding-left:0!important}}@-webkit-keyframes move__360{0%{transform:translateX(0deg)}to{transform:translateX(1turn)}}@keyframes move__360{0%{transform:translateX(0deg)}to{transform:translateX(1turn)}}h6.error-text{font-size:12px;color:red;margin-bottom:0}h1.title-form{font-size:24px;text-align:center}.popular__container{margin-top:40px}.popular__container .popular__heading{font-family:Roboto,sans-serif;font-weight:500;font-size:48px;color:#f7931e;margin-bottom:40px;text-shadow:0 0 3px rgba(247,147,30,.3);display:inline-block}.popular__container .popular__item-box{display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap}.popular__container .popular__item-box:after{content:\"\";flex:0 1 32%}.popular__container .popular__item-box .popular__items{flex:0 0 auto;width:222px;height:370px;background-color:#fff;box-shadow:0 1px 3px rgba(0,0,0,.12);border-radius:5px;overflow:hidden;margin:0 2px 37px;cursor:pointer;transition:all .2s}.popular__container .popular__item-box .popular__items:hover{transform:scale(1.07)}.popular__container .popular__item-box .popular__items:hover:after{opacity:0}.popular__container .popular__item-box .popular__items:active{outline:none;transform:scale(1.03)}.popular__container .popular__item-box .popular__items .popular__items__img{width:222px;height:222px}.popular__container .popular__item-box .popular__items .popular__items__desription{padding-left:16px;display:flex;flex-direction:column;justify-content:flex-start;position:relative}.popular__container .popular__item-box .popular__items .popular__items__desription .name__rating{margin-top:2px;display:flex;justify-content:space-between;align-items:center;padding-right:10px}.popular__container .popular__item-box .popular__items .popular__items__desription .name__rating .magazine__item--rating{display:flex;align-items:center}.popular__container .popular__item-box .popular__items .popular__items__desription .name__rating .magazine__item--rating img{width:12px;height:12px;margin-right:2px}.popular__container .popular__item-box .popular__items .popular__items__desription .name__rating .magazine__item--rating span{color:#666;opacity:.7;font-size:10px}.popular__container .popular__item-box .popular__items .popular__items__desription--name{margin-top:5px;font-family:Roboto;font-weight:500;font-size:14px;line-height:16px;opacity:.7;color:#666}.popular__container .popular__item-box .popular__items .popular__items__desription--categorie{margin:9px 0;font-family:Roboto;font-weight:700;font-size:16px;line-height:100%;color:#000;height:60px}.popular__container .popular__item-box .popular__items .popular__items__desription--price{font-family:Roboto;font-weight:700;font-size:20px;line-height:100%;color:#219ebc}.popular__container .popular__item-box .popular__items .popular__items__desription--old--price{margin-bottom:2px;font-size:14px;color:#f7931e;text-decoration:line-through}.popular__container .popular__btn,.popular__container .popular__btn:link,.popular__container .popular__btn:visited{display:block;border-radius:5px;transition:all .2s;width:224px;height:50px;margin:20px auto 0;text-align:center;padding:10px;text-decoration:none;font-family:inherit;font-weight:500;font-size:18px;color:hsla(0,0%,100%,.9);background-color:#f7931e;border:none;cursor:pointer}.popular__container .popular__btn:hover{transform:scale(1.07)}.popular__container .popular__btn:hover:after{opacity:0}.popular__container .popular__btn:active{outline:none;transform:scale(1.03)}.popular__container .popular__btn:active,.popular__container .popular__btn:hover{background-color:#fff;color:#f7931e;border:1px solid #f7931e}.popular__container .popular__dropdown__box{position:relative}.popular__container .popular__dropdown__box .popular__dropdown--btn{width:170px;height:36px;border:1px solid #f7931e;border-radius:5px;background-color:transparent;padding:0 10px;font-family:Roboto;font-weight:500;font-size:16px;color:#f7931e;display:flex;justify-content:space-between;align-items:center}.popular__container .popular__dropdown__box .popular__dropdown--btn:hover+.popular__dropdown__content{visibility:visible;opacity:1}.popular__container .popular__dropdown__box .popular__dropdown__content{position:absolute;left:0;top:36px;width:170px;display:flex;flex-direction:column;justify-content:center;transition:all .2s;visibility:hidden;opacity:0;border-radius:5px;overflow:hidden;box-shadow:0 2px 6px rgba(0,0,0,.3)}.popular__container .popular__dropdown__box .popular__dropdown__content .popular__dropdown--link{color:#f7931e;background-color:#fcf6f6;padding:5px;text-decoration:none}.popular__container .popular__dropdown__box .popular__dropdown__content .popular__dropdown--link:active,.popular__container .popular__dropdown__box .popular__dropdown__content .popular__dropdown--link:hover{font-weight:500}.popular__container .popular__dropdown__box .popular__dropdown__content:active,.popular__container .popular__dropdown__box .popular__dropdown__content:hover{visibility:visible;opacity:1}@media only screen and (max-width:1440px)and (min-width:1200px){.popular__container .popular__item-box{padding:0 4px}}@media only screen and (max-width:1200px)and (min-width:765px){.popular__container{padding:20px}.popular__container .popular__item-box .popular__items{width:229px;height:381.67px;margin-bottom:22px}.popular__container .popular__item-box .popular__items .popular__items__img{width:230px;height:230px}}@media only screen and (max-width:765px){.popular__container{padding:16px}.popular__container .popular__heading{font-size:24px;margin-bottom:28px}.popular__container .popular__item-box .popular__items{width:164px;height:273px;margin-bottom:14px}.popular__container .popular__item-box .popular__items .popular__items__img{width:164px;height:164px}.popular__container .popular__item-box .popular__items .popular__items__desription{padding-left:12px}.popular__container .popular__item-box .popular__items .popular__items__desription--name{margin-top:3.7px;font-size:10px}.popular__container .popular__item-box .popular__items .popular__items__desription--categorie{margin:6.6px 0 0;font-size:12px;height:50px;padding:0}.popular__container .popular__item-box .popular__items .popular__items__desription--price{font-size:14px}.popular__container .popular__item-box .popular__items .popular__items__desription--old--price{font-size:10px}.popular__container .popular__btn,.popular__container .popular__btn:link,.popular__container .popular__btn:visited{width:160px;height:35px;margin-top:18px;padding:8px;font-size:12px}}@media only screen and (max-width:365px){.popular__container{padding:14px}.popular__container .popular__heading{font-size:22px;margin-bottom:12px}.popular__container .popular__item-box .popular__items{width:140px;height:245px}.popular__container .popular__item-box .popular__items .popular__items__img{width:140px;height:140px}.popular__container .popular__item-box .popular__items .popular__items__desription--categorie{margin-top:3.6px;font-size:12px;height:2.8em;padding:0}.popular__container .popular__item-box .popular__items .popular__items__desription--price{font-size:12px}.popular__container .popular__item-box .popular__items .popular__items__desription--old--price{font-size:9px;bottom:17px}}div.title-box{padding:40px 0}div.title-box ul li,div.title-box ul li a{display:inline-block;font-weight:400;font-size:15px;line-height:18px;color:#000}div.title-box ul li a:hover{color:#f7931e}div.fixvh-category{z-index:100;width:100%;background-color:#333;opacity:.5}div.category-modal,div.fixvh-category{position:fixed;top:0;left:0;height:100vh;z-index:1000}div.category-modal{width:90%;transform:translateX(0);opacity:1;transition:.2s}div.category-modal div.category-nav{width:100%;height:100%;background-color:#fff;position:relative;z-index:101;display:flex;padding:15px 0}div.category-modal div.category-nav button.close-btn{position:absolute;width:30px;height:30px;border-radius:100%;background-color:#f7931e;border:none;right:-41px;top:8px;z-index:101}div.category-modal div.category-nav button.close-btn .icon-times{color:#fff}div.category-modal div.category-nav div.scroll-modal{overflow-y:scroll;overflow-x:hidden}div.category-modal div.category-nav div.category-left{width:400px;padding:0 15px;border-right:1px solid #bbb}div.category-modal div.category-nav div.category-left ul{list-style-type:none;padding-right:15px}div.category-modal div.category-nav div.category-left li button{display:block;padding:8px 15px;border-radius:5px;font-size:16px;color:#333;font-weight:500;border:none;background-color:transparent;width:100%;text-align:left}div.category-modal div.category-nav div.category-left li button:hover{color:#f7931e}div.category-modal div.category-nav div.category-left li.active-li button{background-color:#f7931e;color:#fff}div.category-modal div.category-nav div.category-content{width:calc(100% - 400px);padding:0 30px;position:relative}div.category-modal div.category-nav div.category-content h3.category-title{font-size:24px;font-weight:500;margin-bottom:25px}div.category-modal div.category-nav div.category-content div.visible-all a{font-size:16px;color:#888;margin-bottom:5px;display:block}div.category-modal div.category-nav div.category-content a{transition:.2s}div.category-modal div.category-nav div.category-content ul{list-style-type:none;margin-bottom:25px}div.category-modal div.category-nav div.category-content ul a{font-size:16px;color:#888;margin-bottom:5px;display:block}div.category-modal div.category-nav div.category-content a.click-parent{font-size:18px;margin-bottom:10px;color:#333;display:block;font-weight:500}div.category-modal div.category-nav div.category-content a:hover{color:#f7931e!important}div.category-modal div.category-nav div.scroll-modal::-webkit-scrollbar{width:5px}div.category-modal div.category-nav div.scroll-modal::-webkit-scrollbar-track{background:#f1f1f1}div.category-modal div.category-nav div.scroll-modal::-webkit-scrollbar-thumb{background:#f7931e;border-radius:5px}div.category-modal div.category-nav div.scroll-modal::-webkit-scrollbar-thumb:hover{background:#f7931e}div.hidden-category{transform:translateX(-104%);opacity:0}div.category-mobile{position:fixed;z-index:1234454545;top:0;left:0;width:100%;height:100vh;background-color:#fff;padding:15px}div.category-mobile a.visible-all-mobile{font-size:16px;color:#333}div.category-mobile div.title-t{display:flex;justify-content:space-between;align-items:center}div.category-mobile div.title-t h3{font-size:24px;margin-bottom:0}div.category-mobile div.title-t button{border:none;background-color:transparent}div.category-mobile div.title-t button .close-mobile{font-size:26px;color:#f7931e}div.category-mobile div.category-acc{margin-top:20px;max-height:calc(100vh - 100px);overflow-y:scroll}div.category-mobile div.category-acc div.acc-item{margin-bottom:5px}div.category-mobile div.category-acc div.acc-item button{width:100%;display:flex;justify-content:space-between;align-items:center;background:#fff7ec;padding:10px 15px;border-radius:5px;border:1px solid #fff7ec}div.category-mobile div.category-acc div.acc-item button b{font-size:18px}div.category-mobile div.category-acc div.acc-item button .icon-down{font-size:18px;color:#f7931e}div.category-mobile div.category-acc div.acc-item button .rotate{transform:rotate(-180deg)}div.category-mobile div.category-acc div.acc-item div.acc-content{padding:15px}div.category-mobile div.category-acc div.acc-item div.acc-content ul{list-style-type:none}div.category-mobile div.category-acc div.acc-item div.acc-content ul li a{color:#333;display:block;font-size:16px!important;font-weight:700;margin-bottom:5px}div.category-mobile div.category-acc div.acc-item div.acc-content ul li a:active{color:#f7931e}div.category-mobile div.category-acc div.acc-item div.acc-content ul li ul{margin-bottom:15px}div.category-mobile div.category-acc div.acc-item div.acc-content ul li ul li a{font-weight:400;color:#777}@media(max-width:800px){div.category-modal div.category-nav div.category-left{width:280px}div.category-modal div.category-nav div.category-content{width:calc(100% - 280px)}}.magazine__section .magazine__description__box{display:flex;justify-content:space-between;margin-top:40px;margin-bottom:50px}.magazine__section .magazine__description__box .magazine__description__logo__text{flex-basis:350px;flex-grow:0}.magazine__section .magazine__description__box .magazine__description__logo__text img{margin-bottom:20px}.magazine__section .magazine__description__box .magazine__description__logo__text .magazine__description--text{color:#000;font-family:Roboto;font-size:14px;line-height:1.4;margin-bottom:0}.magazine__section .magazine__description__box .magazine__description__img{flex-basis:790px;flex-grow:0;display:flex;flex-direction:column;justify-content:flex-end;align-items:flex-start;padding:30px;border-radius:5px;overflow:hidden;background-image:url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");background-repeat:no-repeat;background-size:cover}.magazine__section .magazine__description__box .magazine__description__img .magazine__description__img--box{padding-top:10px;font-family:Roboto;font-size:16px;line-height:19px;color:#fff;display:flex;align-items:center}.magazine__section .magazine__description__box .magazine__description__img .magazine__description__img--box:hover{cursor:pointer;color:hsla(0,0%,100%,.7)}.magazine__section .magazine__description__box .magazine__description__img .magazine__description__img--box img{flex-grow:0}.magazine__section .magazine__description__box .magazine__description__img .magazine__description__img--box span{padding:0 10px;display:block}.magazine__section .catalog__page__filtr__box{margin-top:0;display:flex;justify-content:flex-end}.catalog__container{margin-top:15px;display:flex;position:relative;padding-top:55px}.catalog__container .catalog__filtraiton__box{flex-shrink:0;flex-basis:230px;padding:0 8px}.catalog__container .catalog__filtraiton__box .catalog__dropdown__container{padding:0;margin:0;position:absolute;right:18px;top:0}.catalog__container .catalog__filtraiton__box .filtraiton__header{font-family:Roboto;font-size:18px;line-height:100%;color:#000;padding-bottom:13px;border-bottom:1px solid hsla(0,0%,40%,.5)}.catalog__container .catalog__filtraiton__box .filtraiton__header:not(:first-child){padding-top:13px}.catalog__container .catalog__filtraiton__box .filtraiton__form__box{padding:5px 0}.catalog__container .catalog__filtraiton__box .filtraiton__form__box .input__range{padding:18px 0 9px}.catalog__container .catalog__filtraiton__box .filtraiton__form__box .center__input__label{display:flex;align-items:center}.catalog__container .catalog__filtraiton__box .filtraiton__form__box .center__input__label .filtraiton__form--input{width:16px;height:16px}.catalog__container .catalog__filtraiton__box .filtraiton__form__box .center__input__label .filtraiton__form--input,.catalog__container .catalog__filtraiton__box .filtraiton__form__box .center__input__label .filtraiton__form--label{cursor:pointer;padding:0;margin:0 0 8px}.catalog__container .catalog__filtraiton__box .filtraiton__form__box .center__input__label .filtraiton__form--input:hover,.catalog__container .catalog__filtraiton__box .filtraiton__form__box .center__input__label .filtraiton__form--label:hover{opacity:.7}.catalog__container .catalog__filtraiton__box .filtraiton__form__box .center__input__label .filtraiton__form--label{font-size:16px;font-weight:500;padding:0 10px}.catalog__container .catalog__filtraiton__box .filtraiton__form__box .filtraiton__form--submit{margin-top:15px;margin-bottom:50px;background:#003466;border-radius:5px;width:119px;height:36px;font-size:14px;color:#fff;transition:all .2s}.catalog__container .catalog__filtraiton__box .filtraiton__form__box .filtraiton__form--submit:hover{transform:scale(1.07)}.catalog__container .catalog__filtraiton__box .filtraiton__form__box .filtraiton__form--submit:hover:after{opacity:0}.catalog__container .catalog__filtraiton__box .filtraiton__form__box .filtraiton__form--submit:active{outline:none;transform:scale(1.03)}.catalog__container .catalog__filtraiton__box .filtraiton__form__box .filtraiton__form--submit:hover{background-color:rgba(0,52,102,.9)}.catalog__container .catalog__page__about .popular__container{margin:0;padding:0}.catalog__container .catalog__page__about .catalog__page__btn--box{margin:70px 0;height:auto;display:flex;justify-content:flex-end;align-items:center}.catalog__container .catalog__page__about .catalog__page__btn--box .catalog__page--btn{background-color:#ddd;width:36px;height:31px;border-radius:5px;color:#252424;font-weight:700;display:flex;justify-content:center;align-items:center}.catalog__container .catalog__page__about .catalog__page__btn--box .catalog__page--btn:not(:last-child){margin-right:15px}.catalog__container .catalog__page__about .catalog__page__btn--box .catalog__page--btn--active{background-color:#f7931e;color:#fff}@media only screen and (max-width:1200px){.catalog__container{margin-top:0}}@media only screen and (max-width:960px){.magazine__section .magazine__description__box{display:flex;flex-direction:column;margin-top:40px;margin-bottom:50px}.magazine__section .magazine__description__box .magazine__description__logo__text{flex-grow:1;flex-basis:auto;margin-bottom:30px;display:flex;flex-direction:column;justify-content:flex-start;align-items:center}.magazine__section .magazine__description__box .magazine__description__img{flex-grow:1;flex-basis:235px}.catalog__container .catalog__filtraiton__box{flex-basis:245px}.catalog__container .catalog__page__about .popular__item-box{justify-content:space-around}}@media only screen and (max-width:768px){.catalog__container .catalog__page__about .catalog__page__btn--box .catalog__page--btn{width:31px;height:27px}}@media only screen and (max-width:633px){.catalog__container .catalog__filtraiton__box{flex-basis:225px}}@media only screen and (max-width:602px){.magazine__section{position:relative}.magazine__section .catalog__page__filtr__box{justify-content:flex-start;position:absolute;top:1240px}.magazine__section .magazine__description__box{padding-left:0;padding-right:0}.magazine__section .magazine__description__box .magazine__description__logo__text{padding-left:15px;padding-right:15px}.magazine__section .magazine__description__box .magazine__description__img{flex-basis:280px;padding:20px;border-radius:0}.magazine__section .magazine__description__box .magazine__description__img .magazine__description__img--box{font-size:14px}.catalog__container{flex-wrap:wrap}.catalog__container .catalog__filtraiton__box{display:flex;flex-direction:column;justify-content:flex-start;flex-basis:100%}.catalog__container .catalog__filtraiton__box .catalog__dropdown__container{order:1;position:relative;right:auto;top:auto}.catalog__container .catalog__filtraiton__box .filtraiton__form__box .submit__box{display:flex;justify-content:center}.catalog__container .catalog__page__about{margin-top:18px}.catalog__container .catalog__page__about .catalog__page__btn--box{justify-content:center}}@media only screen and (max-width:395px){.catalog__container .catalog__page__about .popular__item-box{justify-content:space-between}}@media only screen and (max-width:370px){.catalog__container .catalog__page__about .catalog__page__btn--box{justify-content:space-between}.catalog__container .catalog__page__about .catalog__page__btn--box .catalog__page--btn:not(:last-child){margin-right:0}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 285:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/MagazineDescription.vue?vue&type=template&id=622ddf08&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{staticClass:"magazine__section"},[_vm._ssrNode("<div class=\"product-show\">","</div>",[_vm._ssrNode("<div class=\"container\">","</div>",[_vm._ssrNode("<div class=\"title-box\">","</div>",[_vm._ssrNode("<ul>","</ul>",[_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{attrs:{"to":"/"}},[_vm._v("Главная страница")]),_vm._ssrNode("\n                        /\n                    ")],2),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{attrs:{"to":"/rubashki"}},[_vm._v("Все магазины")]),_vm._ssrNode("\n                        /\n                    ")],2),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{attrs:{"to":"/rubashki"}},[_vm._v("Аристокракта")])],1)],2)])])]),_vm._ssrNode(" <div class=\"container magazine__description__box\"><div class=\"magazine__description__logo__text\"><img"+(_vm._ssrAttr("src",__webpack_require__(251)))+" alt=\"Logo image\" class=\"magazine__description--logo\"> <p class=\"magazine__description--text\">\n                АРИСТОКРАТКА - это больше чем элитный бутик это идеальный\n                шопинг для вашей души, дополняйте модные предметы гардероба\n                стильной одеждой, обувью, сумками и изысканными\n                аксессуарами.\n            </p></div> <div class=\"magazine__description__img\"><div class=\"magazine__description__img--box\"><img"+(_vm._ssrAttr("src",__webpack_require__(123)))+" alt=\"Icon image\"> <span> +998 90 999-20-30 </span></div> <div class=\"magazine__description__img--box\"><img"+(_vm._ssrAttr("src",__webpack_require__(124)))+" alt=\"Icon image\"> <span>\n                    info@aristokratka.uz\n                </span></div> <div class=\"magazine__description__img--box\"><img"+(_vm._ssrAttr("src",__webpack_require__(125)))+" alt=\"Icon image\"> <span>Шахрисабз 3/74, Метро Айбек\n                    <br>\n                    Ташкент, ул. Шахрисабзская 3/74 (Ориентир: Метро Айбек),\n                    100015\n                </span></div></div></div> "),_vm._ssrNode("<section class=\"catalog__container container\">","</section>",[_vm._ssrNode("<div class=\"catalog__filtraiton__box\">","</div>",[_vm._ssrNode("<section class=\"popular__container catalog__dropdown__container\"><div class=\"popular__dropdown__box\"><button class=\"popular__dropdown--btn\"><span>Сортировка по</span> <img"+(_vm._ssrAttr("src",__webpack_require__(88)))+" alt=\"Vector\"></button> <div class=\"popular__dropdown__content\"><a href=\"#\" class=\"popular__dropdown--link\">По дате</a> <a href=\"#\" class=\"popular__dropdown--link\">По рейтинг</a></div></div></section> "),_vm._ssrNode("<form action=\"#\" class=\"filtraiton__form__box\">","</form>",[_vm._ssrNode("<h5 class=\"filtraiton__header\">\n                    Диапазон цена\n                </h5> "),_vm._ssrNode("<div class=\"input__range\">","</div>",[_c('vue-slider',{attrs:{"id":"range","name":"range","value":"range","min":0,"max":1500000,"interval":10000,"process-style":{
                            backgroundColor: '#FE9E0D'
                        },"tooltip-style":{
                            backgroundColor: 'black',
                            borderColor: 'black'
                        }},model:{value:(_vm.value_2),callback:function ($$v) {_vm.value_2=$$v},expression:"value_2"}})],1),_vm._ssrNode(" <h5 class=\"filtraiton__header\">\n                    Филтр по брендам.\n                </h5> <div class=\"center__input__label\"><input type=\"checkbox\" id=\"zara\" name=\"zara\" value=\"Zara\" class=\"filtraiton__form--input\"> <label for=\"zara\" class=\"filtraiton__form--label\">\n                        Zara</label><br></div> <div class=\"center__input__label\"><input type=\"checkbox\" id=\"legendr\" name=\"legendr\" value=\"legendr\" class=\"filtraiton__form--input\"> <label for=\"legendr\" class=\"filtraiton__form--label\">\n                        Legendr</label><br></div> <div class=\"center__input__label\"><input type=\"checkbox\" id=\"abb\" name=\"abb\" value=\"abb\" class=\"filtraiton__form--input\"> <label for=\"abb\" class=\"filtraiton__form--label\">\n                        ABB</label><br></div> <div class=\"center__input__label\"><input type=\"checkbox\" id=\"navigator\" name=\"navigator\" value=\"navigator\" class=\"filtraiton__form--input\"> <label for=\"navigator\" class=\"filtraiton__form--label\">\n                        Navigator</label><br></div> <div class=\"center__input__label\"><input type=\"checkbox\" id=\"telfor\" name=\"telfor\" value=\"telfor\" class=\"filtraiton__form--input\"> <label for=\"telfor\" class=\"filtraiton__form--label\">\n                        TEKFOR</label><br></div> <div class=\"center__input__label\"><input type=\"checkbox\" id=\"wago\" name=\"wago\" value=\"wago\" class=\"filtraiton__form--input\"> <label for=\"wago\" class=\"filtraiton__form--label\">\n                        Wago</label><br></div> <div class=\"center__input__label\"><input type=\"checkbox\" id=\"universal\" name=\"universal\" value=\"universal\" class=\"filtraiton__form--input\"> <label for=\"universal\" class=\"filtraiton__form--label\">\n                        UniVersal</label><br></div> <div class=\"submit__box\"><input type=\"submit\" value=\"Фильтр\" class=\"filtraiton__form--submit\"></div>")],2)],2),_vm._ssrNode(" <div class=\"catalog__page__about\"><section class=\"container popular__container\"><div class=\"popular__item-box\"><div class=\"popular__items\"><img"+(_vm._ssrAttr("src",__webpack_require__(88)))+" alt=\"Popular item photo\" type=\"photo/png\" class=\"popular__items__img\"> <div class=\"popular__items__desription\"><span class=\"popular__items__desription--name\">Футболки</span> <h4 class=\"popular__items__desription--categorie\">\n                                Детская одежда\n                            </h4> <span class=\"popular__items__desription--price popular__items__desription--old--price hidden\">580 000 сум</span> <span class=\"popular__items__desription--price\">480 000 сум</span></div></div> <div class=\"popular__items\"><img"+(_vm._ssrAttr("src",__webpack_require__(88)))+" alt=\"Popular item photo\" type=\"photo/png\" class=\"popular__items__img\"> <div class=\"popular__items__desription\"><span class=\"popular__items__desription--name\">Футболки</span> <h4 class=\"popular__items__desription--categorie\">\n                                Мужская кожаная куртка\n                            </h4> <span class=\"popular__items__desription--price\">1 080 000 сум</span></div></div> <div class=\"popular__items\"><img"+(_vm._ssrAttr("src",__webpack_require__(88)))+" alt=\"Popular item photo\" type=\"photo/png\" class=\"popular__items__img\"> <div class=\"popular__items__desription\"><span class=\"popular__items__desription--name\">Кроссовки</span> <h4 class=\"popular__items__desription--categorie\">\n                                для фанатов футбола Ювентуса\n                            </h4> <span class=\"popular__items__desription--price\">1 280 000 сум</span></div></div> <div class=\"popular__items\"><img"+(_vm._ssrAttr("src",__webpack_require__(88)))+" alt=\"Popular item photo\" type=\"photo/png\" class=\"popular__items__img\"> <div class=\"popular__items__desription\"><span class=\"popular__items__desription--name\">Рубашки</span> <h4 class=\"popular__items__desription--categorie\">\n                                весенная рубашка для мужчин\n                            </h4> <span class=\"popular__items__desription--price\">474 000 сум</span></div></div> <div class=\"popular__items\"><img"+(_vm._ssrAttr("src",__webpack_require__(88)))+" alt=\"Popular item photo\" type=\"photo/png\" class=\"popular__items__img\"> <div class=\"popular__items__desription\"><span class=\"popular__items__desription--name\">Одежда</span> <h4 class=\"popular__items__desription--categorie\">\n                                Новая весенная коллекция для женщин\n                            </h4> <span class=\"popular__items__desription--price popular__items__desription--old--price\">1 480 000 сум</span> <span class=\"popular__items__desription--price\">1 280 000 сум</span></div></div></div> <a href=\"#\" class=\"popular__btn\">Показать ещё</a></section></div>")],2)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/MagazineDescription.vue?vue&type=template&id=622ddf08&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/MagazineDescription.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var MagazineDescriptionvue_type_script_lang_js_ = ({data:function(){return{value_2:[50000,500000]};}});
// CONCATENATED MODULE: ./components/MagazineDescription.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_MagazineDescriptionvue_type_script_lang_js_ = (MagazineDescriptionvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/MagazineDescription.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(252)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_MagazineDescriptionvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "5b469818"
  
)

/* harmony default export */ var MagazineDescription = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 88:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/bg.d007fe2.png";

/***/ })

};;
//# sourceMappingURL=magazine-description.js.map