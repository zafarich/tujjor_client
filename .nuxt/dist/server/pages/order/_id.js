exports.ids = [42,13,20];
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

/***/ 157:
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAICAYAAADJEc7MAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACDSURBVHgBhc/LDYAgDAbgVqOJG3gyrMJITOLFfRhFjm5AohFtwUR5BHsgwN+PFLTLtALXsctBbQYqZedRQNdr3jfgaL3AX/jgD3GvY3g2kg6mhiPEvWQwBEJA6zQgBUjBZ+wSGpQx+L6aYx8UEF9jPFKC4fl/gjKY4QAzVIQR5iogrhty0ltpVC/ZMQAAAABJRU5ErkJggg=="

/***/ }),

/***/ 182:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(242);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("7feb4460", content, true, context)
};

/***/ }),

/***/ 241:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_id_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(182);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_id_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_id_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_id_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_id_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 242:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(105);
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(157);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "@media(max-width:543px){.popular__container .img-fluid{height:170px!important;-o-object-fit:cover!important;object-fit:cover!important}.other__item__banner--carousel .b-carousel .carousel-inner .b-carousel-slide img{min-height:250px!important}}.other__item__banner--carousel .b-carousel .carousel-inner .b-carousel-slide img{min-height:450px}.success-info{position:fixed;top:10px;right:20px;width:320px;z-index:12345}div.card-row{display:flex;margin:0 -10px;flex-wrap:wrap}.hover-shadow:hover{box-shadow:0 1px 10px rgba(0,0,0,.18)}div.card-5{width:20%;padding:0 10px}div.card-4{width:25%;padding:0 10px}div.card-3{width:33.3333333333%;padding:0 10px}@media(max-width:1020px){div.card-4,div.card-5{width:33.3333333333%}}@media(max-width:768px){div.card-3,div.card-4,div.card-5{width:50%}.catalog__container{padding-top:5px!important}.filtr__section .catalog__page__filtr__box{position:relative!important;top:unset!important}.catalog__container .catalog__filtraiton__box .filtraiton__form__box .filtraiton__form--submit{margin-bottom:0!important}.catalog__container .catalog__page__about{padding-left:0!important}}@-webkit-keyframes move__360{0%{transform:translateX(0deg)}to{transform:translateX(1turn)}}@keyframes move__360{0%{transform:translateX(0deg)}to{transform:translateX(1turn)}}h6.error-text{font-size:12px;color:red;margin-bottom:0}h1.title-form{font-size:24px;text-align:center}.popular__container{margin-top:40px}.popular__container .popular__heading{font-family:Roboto,sans-serif;font-weight:500;font-size:48px;color:#f7931e;margin-bottom:40px;text-shadow:0 0 3px rgba(247,147,30,.3);display:inline-block}.popular__container .popular__item-box{display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap}.popular__container .popular__item-box:after{content:\"\";flex:0 1 32%}.popular__container .popular__item-box .popular__items{flex:0 0 auto;width:222px;height:370px;background-color:#fff;box-shadow:0 1px 3px rgba(0,0,0,.12);border-radius:5px;overflow:hidden;margin:0 2px 37px;cursor:pointer;transition:all .2s}.popular__container .popular__item-box .popular__items:hover{transform:scale(1.07)}.popular__container .popular__item-box .popular__items:hover:after{opacity:0}.popular__container .popular__item-box .popular__items:active{outline:none;transform:scale(1.03)}.popular__container .popular__item-box .popular__items .popular__items__img{width:222px;height:222px}.popular__container .popular__item-box .popular__items .popular__items__desription{padding-left:16px;display:flex;flex-direction:column;justify-content:flex-start;position:relative}.popular__container .popular__item-box .popular__items .popular__items__desription .name__rating{margin-top:2px;display:flex;justify-content:space-between;align-items:center;padding-right:10px}.popular__container .popular__item-box .popular__items .popular__items__desription .name__rating .magazine__item--rating{display:flex;align-items:center}.popular__container .popular__item-box .popular__items .popular__items__desription .name__rating .magazine__item--rating img{width:12px;height:12px;margin-right:2px}.popular__container .popular__item-box .popular__items .popular__items__desription .name__rating .magazine__item--rating span{color:#666;opacity:.7;font-size:10px}.popular__container .popular__item-box .popular__items .popular__items__desription--name{margin-top:5px;font-family:Roboto;font-weight:500;font-size:14px;line-height:16px;opacity:.7;color:#666}.popular__container .popular__item-box .popular__items .popular__items__desription--categorie{margin:9px 0;font-family:Roboto;font-weight:700;font-size:16px;line-height:100%;color:#000;height:60px}.popular__container .popular__item-box .popular__items .popular__items__desription--price{font-family:Roboto;font-weight:700;font-size:20px;line-height:100%;color:#219ebc}.popular__container .popular__item-box .popular__items .popular__items__desription--old--price{margin-bottom:2px;font-size:14px;color:#f7931e;text-decoration:line-through}.popular__container .popular__btn,.popular__container .popular__btn:link,.popular__container .popular__btn:visited{display:block;border-radius:5px;transition:all .2s;width:224px;height:50px;margin:20px auto 0;text-align:center;padding:10px;text-decoration:none;font-family:inherit;font-weight:500;font-size:18px;color:hsla(0,0%,100%,.9);background-color:#f7931e;border:none;cursor:pointer}.popular__container .popular__btn:hover{transform:scale(1.07)}.popular__container .popular__btn:hover:after{opacity:0}.popular__container .popular__btn:active{outline:none;transform:scale(1.03)}.popular__container .popular__btn:active,.popular__container .popular__btn:hover{background-color:#fff;color:#f7931e;border:1px solid #f7931e}.popular__container .popular__dropdown__box{position:relative}.popular__container .popular__dropdown__box .popular__dropdown--btn{width:170px;height:36px;border:1px solid #f7931e;border-radius:5px;background-color:transparent;padding:0 10px;font-family:Roboto;font-weight:500;font-size:16px;color:#f7931e;display:flex;justify-content:space-between;align-items:center}.popular__container .popular__dropdown__box .popular__dropdown--btn:hover+.popular__dropdown__content{visibility:visible;opacity:1}.popular__container .popular__dropdown__box .popular__dropdown__content{position:absolute;left:0;top:36px;width:170px;display:flex;flex-direction:column;justify-content:center;transition:all .2s;visibility:hidden;opacity:0;border-radius:5px;overflow:hidden;box-shadow:0 2px 6px rgba(0,0,0,.3)}.popular__container .popular__dropdown__box .popular__dropdown__content .popular__dropdown--link{color:#f7931e;background-color:#fcf6f6;padding:5px;text-decoration:none}.popular__container .popular__dropdown__box .popular__dropdown__content .popular__dropdown--link:active,.popular__container .popular__dropdown__box .popular__dropdown__content .popular__dropdown--link:hover{font-weight:500}.popular__container .popular__dropdown__box .popular__dropdown__content:active,.popular__container .popular__dropdown__box .popular__dropdown__content:hover{visibility:visible;opacity:1}@media only screen and (max-width:1440px)and (min-width:1200px){.popular__container .popular__item-box{padding:0 4px}}@media only screen and (max-width:1200px)and (min-width:765px){.popular__container{padding:20px}.popular__container .popular__item-box .popular__items{width:229px;height:381.67px;margin-bottom:22px}.popular__container .popular__item-box .popular__items .popular__items__img{width:230px;height:230px}}@media only screen and (max-width:765px){.popular__container{padding:16px}.popular__container .popular__heading{font-size:24px;margin-bottom:28px}.popular__container .popular__item-box .popular__items{width:164px;height:273px;margin-bottom:14px}.popular__container .popular__item-box .popular__items .popular__items__img{width:164px;height:164px}.popular__container .popular__item-box .popular__items .popular__items__desription{padding-left:12px}.popular__container .popular__item-box .popular__items .popular__items__desription--name{margin-top:3.7px;font-size:10px}.popular__container .popular__item-box .popular__items .popular__items__desription--categorie{margin:6.6px 0 0;font-size:12px;height:50px;padding:0}.popular__container .popular__item-box .popular__items .popular__items__desription--price{font-size:14px}.popular__container .popular__item-box .popular__items .popular__items__desription--old--price{font-size:10px}.popular__container .popular__btn,.popular__container .popular__btn:link,.popular__container .popular__btn:visited{width:160px;height:35px;margin-top:18px;padding:8px;font-size:12px}}@media only screen and (max-width:365px){.popular__container{padding:14px}.popular__container .popular__heading{font-size:22px;margin-bottom:12px}.popular__container .popular__item-box .popular__items{width:140px;height:245px}.popular__container .popular__item-box .popular__items .popular__items__img{width:140px;height:140px}.popular__container .popular__item-box .popular__items .popular__items__desription--categorie{margin-top:3.6px;font-size:12px;height:2.8em;padding:0}.popular__container .popular__item-box .popular__items .popular__items__desription--price{font-size:12px}.popular__container .popular__item-box .popular__items .popular__items__desription--old--price{font-size:9px;bottom:17px}}div.title-box{padding:40px 0}div.title-box ul li,div.title-box ul li a{display:inline-block;font-weight:400;font-size:15px;line-height:18px;color:#000}div.title-box ul li a:hover{color:#f7931e}div.fixvh-category{z-index:100;width:100%;background-color:#333;opacity:.5}div.category-modal,div.fixvh-category{position:fixed;top:0;left:0;height:100vh;z-index:1000}div.category-modal{width:90%;transform:translateX(0);opacity:1;transition:.2s}div.category-modal div.category-nav{width:100%;height:100%;background-color:#fff;position:relative;z-index:101;display:flex;padding:15px 0}div.category-modal div.category-nav button.close-btn{position:absolute;width:30px;height:30px;border-radius:100%;background-color:#f7931e;border:none;right:-41px;top:8px;z-index:101}div.category-modal div.category-nav button.close-btn .icon-times{color:#fff}div.category-modal div.category-nav div.scroll-modal{overflow-y:scroll;overflow-x:hidden}div.category-modal div.category-nav div.category-left{width:400px;padding:0 15px;border-right:1px solid #bbb}div.category-modal div.category-nav div.category-left ul{list-style-type:none;padding-right:15px}div.category-modal div.category-nav div.category-left li button{display:block;padding:8px 15px;border-radius:5px;font-size:16px;color:#333;font-weight:500;border:none;background-color:transparent;width:100%;text-align:left}div.category-modal div.category-nav div.category-left li button:hover{color:#f7931e}div.category-modal div.category-nav div.category-left li.active-li button{background-color:#f7931e;color:#fff}div.category-modal div.category-nav div.category-content{width:calc(100% - 400px);padding:0 30px;position:relative}div.category-modal div.category-nav div.category-content h3.category-title{font-size:24px;font-weight:500;margin-bottom:25px}div.category-modal div.category-nav div.category-content div.visible-all a{font-size:16px;color:#888;margin-bottom:5px;display:block}div.category-modal div.category-nav div.category-content a{transition:.2s}div.category-modal div.category-nav div.category-content ul{list-style-type:none;margin-bottom:25px}div.category-modal div.category-nav div.category-content ul a{font-size:16px;color:#888;margin-bottom:5px;display:block}div.category-modal div.category-nav div.category-content a.click-parent{font-size:18px;margin-bottom:10px;color:#333;display:block;font-weight:500}div.category-modal div.category-nav div.category-content a:hover{color:#f7931e!important}div.category-modal div.category-nav div.scroll-modal::-webkit-scrollbar{width:5px}div.category-modal div.category-nav div.scroll-modal::-webkit-scrollbar-track{background:#f1f1f1}div.category-modal div.category-nav div.scroll-modal::-webkit-scrollbar-thumb{background:#f7931e;border-radius:5px}div.category-modal div.category-nav div.scroll-modal::-webkit-scrollbar-thumb:hover{background:#f7931e}div.hidden-category{transform:translateX(-104%);opacity:0}div.category-mobile{position:fixed;z-index:1234454545;top:0;left:0;width:100%;height:100vh;background-color:#fff;padding:15px}div.category-mobile a.visible-all-mobile{font-size:16px;color:#333}div.category-mobile div.title-t{display:flex;justify-content:space-between;align-items:center}div.category-mobile div.title-t h3{font-size:24px;margin-bottom:0}div.category-mobile div.title-t button{border:none;background-color:transparent}div.category-mobile div.title-t button .close-mobile{font-size:26px;color:#f7931e}div.category-mobile div.category-acc{margin-top:20px;max-height:calc(100vh - 100px);overflow-y:scroll}div.category-mobile div.category-acc div.acc-item{margin-bottom:5px}div.category-mobile div.category-acc div.acc-item button{width:100%;display:flex;justify-content:space-between;align-items:center;background:#fff7ec;padding:10px 15px;border-radius:5px;border:1px solid #fff7ec}div.category-mobile div.category-acc div.acc-item button b{font-size:18px}div.category-mobile div.category-acc div.acc-item button .icon-down{font-size:18px;color:#f7931e}div.category-mobile div.category-acc div.acc-item button .rotate{transform:rotate(-180deg)}div.category-mobile div.category-acc div.acc-item div.acc-content{padding:15px}div.category-mobile div.category-acc div.acc-item div.acc-content ul{list-style-type:none}div.category-mobile div.category-acc div.acc-item div.acc-content ul li a{color:#333;display:block;font-size:16px!important;font-weight:700;margin-bottom:5px}div.category-mobile div.category-acc div.acc-item div.acc-content ul li a:active{color:#f7931e}div.category-mobile div.category-acc div.acc-item div.acc-content ul li ul{margin-bottom:15px}div.category-mobile div.category-acc div.acc-item div.acc-content ul li ul li a{font-weight:400;color:#777}@media(max-width:800px){div.category-modal div.category-nav div.category-left{width:280px}div.category-modal div.category-nav div.category-content{width:calc(100% - 280px)}}a.test{font-size:30px;position:fixed;top:30px;left:30px;z-index:322343}.to-home label{font-size:16px;color:#333;display:inline-flex;cursor:pointer;align-items:center}.to-home label input{width:20px;height:20px;margin-right:10px}.order-one-shop{margin-top:40px;padding:15px;background-color:#fafafa;border-radius:5px}.order-one-shop h5{font-size:16px;color:#666}.order-one-shop h5 b{color:#f7931e;font-size:18px;margin-left:10px}.order-one-shop div.deliver-bottom{display:flex;justify-content:space-between;align-items:center;margin-top:15px}.order-one-shop div.deliver-bottom h6{font-size:16px;color:#666}.order-one-shop div.deliver-bottom h3{color:#f7931e;font-size:18px}.checkout__order__container .checkout__order__heading{margin-bottom:40px}.checkout__order__container .checkout__order__heading h2{font-family:Roboto,sans-serif;font-weight:500;font-size:48px;line-height:56px;color:#f7931f}.checkout__order__container .checkout__box{display:flex;justify-content:space-between;align-items:flex-start}.checkout__order__container .checkout__box .person__home{flex:2;margin-right:20px;padding:30px 30px 46px;background:#fff;box-shadow:0 4px 8px rgba(0,0,0,.15);border-radius:5px;display:flex;flex-wrap:wrap;justify-content:space-between}.checkout__order__container .checkout__box .person__home h4{margin-bottom:34px;flex-basis:100%;font-family:Montserrat,sans-serif;font-weight:700;font-size:24px;line-height:100%;color:#f7931f}.checkout__order__container .checkout__box .person__home .person__home--description{margin-top:16px;flex-basis:47%;display:flex;flex-direction:column}.checkout__order__container .checkout__box .person__home .person__home--description span{font-family:Roboto,sans-serif;font-weight:500;font-size:16px;line-height:28px;color:#000}.checkout__order__container .checkout__box .person__home .person__home--description input,.checkout__order__container .checkout__box .person__home .person__home--description select{border:1.16px solid #f7931e;outline:none;background-color:transparent;padding:8px 12px;border-radius:5px;text-align:left;font-family:Roboto,sans-serif;font-weight:400;font-size:16px;line-height:28px;color:#666;display:flex;justify-content:space-between;align-items:center}.checkout__order__container .checkout__box .person__home .person__home--description input::-webkit-inner-spin-button,.checkout__order__container .checkout__box .person__home .person__home--description input::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}.checkout__order__container .checkout__box .person__home .person__home--description input[type=number]{-moz-appearance:textfield}.checkout__order__container .checkout__box .person__home .person__home--description select{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-image:url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");background-repeat:no-repeat;background-position:97% 50%}.checkout__order__container .checkout__box .person__checkout{flex:1;background:#fff;box-shadow:0 4px 8px rgba(0,0,0,.15);border-radius:5px;padding:20px 20px 30px;display:flex;flex-direction:column}.checkout__order__container .checkout__box .person__checkout span{font-family:Roboto;font-weight:500;font-size:22px;line-height:100%;color:#023047;display:inline-block;margin-bottom:22px}.checkout__order__container .checkout__box .person__checkout .span__container{margin-bottom:12px;display:flex;justify-content:space-between}.checkout__order__container .checkout__box .person__checkout .span__container span{margin-bottom:0;font-family:Roboto;font-size:18px;line-height:100%;color:#666}.checkout__order__container .checkout__box .person__checkout .span__container .primary{font-family:Roboto;font-weight:900;font-size:20px;line-height:100%;color:#f7931e}.checkout__order__container .checkout__box .person__checkout .span__container .secondary{font-family:Roboto;font-weight:900;font-size:20px;line-height:100%;text-align:right;color:#eb5757}.checkout__order__container .checkout__box .person__checkout .span__container .tritary{font-family:Roboto;font-weight:900;font-size:20px;line-height:100%;color:#27ae60}.checkout__order__container .checkout__box .person__checkout .span__container .tertiary{font-family:Roboto;font-weight:900;font-size:20px;line-height:100%;text-align:right;color:#023047}.checkout__order__container .checkout__box .person__checkout .span__container--last{margin-top:10px;padding:10px 0;border-top:1px solid #ddd}.checkout__order__container .checkout__box .person__checkout .checkout__you__order{flex-basis:100%;outline:none;border:none;background-color:#f7931e;box-shadow:0 2.32px 11.6px rgba(0,0,0,.25);border-radius:5px;font-family:Roboto;font-weight:500;font-size:16px;padding:18px 0;text-align:center;color:#fcf6f6}.checkout__order__container .checkout__box .person__checkout .checkout__you__order:hover{opacity:.85;cursor:pointer}.checkout__order__container .checkout__order__section{padding:40px 0 30px}.checkout__order__container .checkout__order__section .header{font-family:Roboto;font-size:32px;font-weight:500;line-height:100%;color:#023047}.checkout__order__container .checkout__order__section .checkout__order__item__box{margin:20px 0 0;padding:20px;background:#fff;border-radius:5px;box-shadow:0 1px 3px rgba(0,0,0,.1);font-family:Roboto,sans-serif;display:flex;justify-content:space-between}.checkout__order__container .checkout__order__section .checkout__order__item__box:last-child{border-bottom:1px solid #ddd}.checkout__order__container .checkout__order__section .checkout__order__item__box .checkout__order__item--header{flex-basis:340px;flex-grow:0;display:flex;margin-right:100px}.checkout__order__container .checkout__order__section .checkout__order__item__box .checkout__order__item--header img{margin-right:18px;max-height:100%;border-radius:3px;height:120px;widows:120px}.checkout__order__container .checkout__order__section .checkout__order__item__box .checkout__order__item--header .checkout__order__item__description h3{font-family:Roboto;font-weight:700;font-size:18px;line-height:100%;overflow:hidden;height:2.8em;text-transform:uppercase;color:#000}.checkout__order__container .checkout__order__section .checkout__order__item__box .checkout__order__item--header .checkout__order__item__description .p-first{font-family:Roboto;font-weight:500;font-size:14px;line-height:100%;height:1em;overflow:hidden;color:#000;margin-bottom:40px}.checkout__order__container .checkout__order__section .checkout__order__item__box .checkout__order__item--header .checkout__order__item__description .p-second{font-family:Roboto,sans-serif;font-size:16px;line-height:100%;height:1em;overflow:hidden;font-weight:500;color:#000;display:flex;align-items:center}.checkout__order__container .checkout__order__section .checkout__order__item__box .checkout__order__item--header .checkout__order__item__description .p-second span{margin-right:5px;font-family:Roboto,sans-serif;font-weight:400;font-size:14px;line-height:100%;color:#023047}.checkout__order__container .checkout__order__section .checkout__order__item__box .checkout__order__item--secondary{flex:2;display:flex;flex-flow:row wrap;justify-content:space-between;align-items:center}.checkout__order__container .checkout__order__section .checkout__order__item__box .checkout__order__item--secondary .checkout__order__item--number{height:40px;display:flex;align-items:center;margin-bottom:30px;font-size:18px;font-weight:700}.checkout__order__container .checkout__order__section .checkout__order__item__box .checkout__order__item--secondary .checkout__order__item--number span{font-family:Roboto,sans-serif;font-weight:400;font-size:16px;line-height:100%;color:#023047;margin-right:10px}.checkout__order__container .checkout__order__section .checkout__order__item__box .checkout__order__item--secondary .checkout__order__item--number span.number{font-size:18px;font-weight:700}.checkout__order__container .checkout__order__section .checkout__order__item__box .checkout__order__item--secondary .checkout__order__item--price{flex-basis:500px;display:flex;justify-content:flex-end;margin-bottom:30px}.checkout__order__container .checkout__order__section .checkout__order__item__box .checkout__order__item--secondary .checkout__order__item--price span{font-family:Roboto,sans-serif;font-weight:600;font-size:28px;line-height:100%;color:#f7931e}.checkout__order__container .checkout__order__section .checkout__order__item__box .checkout__order__item--secondary .checkout__order__item--color{flex-grow:0}.checkout__order__container .checkout__order__section .checkout__order__item__box .checkout__order__item--secondary .checkout__order__item--color span{font-family:Roboto,sans-serif;font-weight:400;font-size:16px;line-height:100%;color:#023047;margin-right:5px}.checkout__order__container .checkout__order__section .checkout__order__item__box .checkout__order__item--secondary .checkout__order__item--color img{border-radius:3px;width:50px;height:50px}.checkout__order__container .checkout__order__section .checkout__order__price{display:flex;justify-content:space-between;margin-top:30px;padding-top:30px;border-top:1px solid #ddd}.checkout__order__container .checkout__order__section .checkout__order__price .checkout__order__price--total span{font-family:Roboto,sans-serif;font-weight:500;font-size:28px;line-height:100%;color:#000}.checkout__order__container .checkout__order__section .checkout__order__price .checkout__order__price--total .all__price{margin-left:10px;font-weight:900;color:#f7931e}@media screen and (max-width:1200px){.checkout__order__container .checkout__order__section .checkout__order__item__box .checkout__order__item--secondary .checkout__order__item--price{flex-basis:70%}}@media screen and (max-width:1045px){.checkout__order__container .checkout__order__section .checkout__order__item__box .checkout__order__item--header{flex-basis:300px}.checkout__order__container .checkout__order__section .checkout__order__item__box .checkout__order__item--secondary{align-items:baseline}.checkout__order__container .checkout__order__section .checkout__order__item__box .checkout__order__item--secondary .checkout__order__item--number{flex-basis:100%}.checkout__order__container .checkout__order__section .checkout__order__item__box .checkout__order__item--secondary .checkout__order__item--price{flex-basis:auto;order:1}}@media screen and (max-width:873px){.checkout__order__container .checkout__box{flex-direction:column;align-items:center}.checkout__order__container .checkout__box .person__home{margin-right:0;margin-bottom:20px}.checkout__order__container .checkout__box .person__checkout{width:387px}}@media screen and (max-width:777px){.checkout__order__container .checkout__order__section .checkout__order__item__box .checkout__order__item--header{margin-right:15px}}@media screen and (max-width:677px){.checkout__order__container .checkout__order__section .checkout__order__item__box{flex-direction:column}.checkout__order__container .checkout__order__section .checkout__order__item__box .checkout__order__item--header{flex-basis:auto;margin-right:0;margin-bottom:30px}}@media screen and (max-width:544px){.checkout__order__container .checkout__box .person__home{width:100%;flex-direction:column}.checkout__order__container .checkout__box .person__checkout{width:100%}}@media screen and (max-width:400px){.checkout__order__container{padding-right:0;padding-left:0}.checkout__order__container .checkout__order__heading{padding-right:15px;padding-left:15px;margin-bottom:30px}.checkout__order__container .checkout__order__heading h2{font-size:32px;line-height:1.3}.checkout__order__container .checkout__box .person__home{padding:30px 27px;margin-bottom:50px}.checkout__order__container .checkout__box .person__home h4{margin-bottom:30px}.checkout__order__container .checkout__box .person__checkout{padding:30px 27px;margin-bottom:10px}.checkout__order__container .checkout__order__section{padding-right:15px;padding-left:15px}.checkout__order__container .checkout__order__section .header{padding-left:0;font-size:24px}.checkout__order__container .checkout__order__section .checkout__order__item__box{flex-direction:column;padding:13px 17px 18px;margin:20px 0 0}.checkout__order__container .checkout__order__section .checkout__order__item__box .checkout__order__item--header{flex-basis:auto;margin-right:0;margin-bottom:0}.checkout__order__container .checkout__order__section .checkout__order__item__box .checkout__order__item--header img{height:95px;width:95px}.checkout__order__container .checkout__order__section .checkout__order__item__box .checkout__order__item--header .checkout__order__item__description h3{font-size:16px}.checkout__order__container .checkout__order__section .checkout__order__item__box .checkout__order__item--header .checkout__order__item__description .p-first{margin-bottom:3px}.checkout__order__container .checkout__order__section .checkout__order__item__box .checkout__order__item--header .checkout__order__item__description .p-second{font-size:14px}.checkout__order__container .checkout__order__section .checkout__order__item__box .checkout__order__item--secondary .checkout__order__item--number{margin-bottom:0}.checkout__order__container .checkout__order__section .checkout__order__item__box .checkout__order__item--secondary .checkout__order__item--number span,.checkout__order__container .checkout__order__section .checkout__order__item__box .checkout__order__item--secondary .checkout__order__item--number span.number{font-size:14px}.checkout__order__container .checkout__order__section .checkout__order__item__box .checkout__order__item--secondary .checkout__order__item--price{margin-bottom:0}.checkout__order__container .checkout__order__section .checkout__order__item__box .checkout__order__item--secondary .checkout__order__item--price span{font-size:18px}.checkout__order__container .checkout__order__section .checkout__order__item__box .checkout__order__item--secondary .checkout__order__item--color span{font-size:14px}.checkout__order__container .checkout__order__section .checkout__order__item__box .checkout__order__item--secondary .checkout__order__item--color img{width:40px;height:40px}.checkout__order__container .checkout__order__section .checkout__order__price .checkout__order__price--total{flex-basis:100%;display:flex;justify-content:space-between;align-items:center}.checkout__order__container .checkout__order__section .checkout__order__price .checkout__order__price--total span{font-size:16px}.checkout__order__container .checkout__order__section .checkout__order__price .checkout__order__price--total .all__price{font-size:28px}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 280:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/order/_id.vue?vue&type=template&id=ff181804&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',[(!_vm.isGet)?_c('base-loading'):_vm._e(),_vm._ssrNode(" "),(_vm.isGet)?_vm._ssrNode("<section class=\"checkout__order\">","</section>",[_vm._ssrNode("<div class=\"container\">","</div>",[_vm._ssrNode("<div class=\"title-box\">","</div>",[_vm._ssrNode("<ul>","</ul>",[_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{attrs:{"to":"/"}},[_vm._v(_vm._s(_vm.$t("home"))+" ")]),_vm._ssrNode("\n                        /\n                    ")],2),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{attrs:{"to":"#"}},[_vm._v(_vm._s(_vm.$t("oformit"))+" ")])],1)],2)])]),_vm._ssrNode(" "+((_vm.isGet && _vm.noData)?("<section class=\"favourite__is__empty\"><section class=\"container popular__container\"><div class=\"popular__heading\">"+_vm._ssrEscape("\n                    "+_vm._s(_vm.$t("noof"))+"\n                ")+"</div></section></section>"):"<!---->")+" "),(_vm.isGet && !_vm.noData)?_vm._ssrNode("<main class=\"checkout__order__container container\">","</main>",[_vm._ssrNode("<div class=\"checkout__order__heading\"><h2>"+_vm._ssrEscape(_vm._s(_vm.$t("oformit")))+"</h2></div> "),_vm._ssrNode("<form class=\"checkout__box\">","</form>",[_vm._ssrNode("<div class=\"person__home\">","</div>",[_vm._ssrNode("<h4>"+_vm._ssrEscape(_vm._s(_vm.$t("danni")))+"</h4> "),_vm._ssrNode("<div class=\"person__home--description\">","</div>",[_vm._ssrNode("<span>"+_vm._ssrEscape(_vm._s(_vm.$t("city")))+"</span> "),_c('select',{directives:[{name:"model",rawName:"v-model",value:(_vm.selectedAdress.region),expression:"selectedAdress.region"}],attrs:{"name":"region","id":"region"},on:{"change":[function($event){var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return val}); _vm.$set(_vm.selectedAdress, "region", $event.target.multiple ? $$selectedVal : $$selectedVal[0])},function($event){return _vm.giveCity()}]}},[_c('option',{attrs:{"value":"","disabled":"","selected":""}},[_vm._v(_vm._s(_vm.$t("myCity")))]),_vm._v(" "),_vm._l((_vm.allRegions),function(region){return _c('option',{key:region._id,domProps:{"value":region.name.uz}},[_vm._v("\n                                "+_vm._s(region.name.uz))])})],2)],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"person__home--description\">","</div>",[_vm._ssrNode("<span>"+_vm._ssrEscape(_vm._s(_vm.$t("ray")))+"</span> "),_c('select',{directives:[{name:"model",rawName:"v-model",value:(_vm.selectedAdress.district),expression:"selectedAdress.district"}],attrs:{"name":"village","id":"village"},on:{"change":[function($event){var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return val}); _vm.$set(_vm.selectedAdress, "district", $event.target.multiple ? $$selectedVal : $$selectedVal[0])},function($event){return _vm.giveDistrict()}]}},[_c('option',{attrs:{"value":"","disabled":"","selected":""}},[_vm._v(_vm._s(_vm.$t("myRay")))]),_vm._v(" "),_vm._l((_vm.selectedCityDistricts),function(district){return _c('option',{key:district._id,domProps:{"value":district.name.uz}},[_vm._v("\n                                "+_vm._s(district.name.uz)+"\n                            ")])})],2)],2),_vm._ssrNode(" <div class=\"person__home--description\"><span>"+_vm._ssrEscape(_vm._s(_vm.$t("address")))+"</span> <input type=\"text\""+(_vm._ssrAttr("placeholder",_vm.$t('addressSecondary')))+" id=\"Adress\" name=\"Adress\""+(_vm._ssrAttr("value",(_vm.order.address.address)))+"></div> "),_vm._ssrNode("<div class=\"person__home--description\">","</div>",[_vm._ssrNode("<span>"+_vm._ssrEscape(_vm._s(_vm.$t("tel")))+"</span> "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.order.address.phone),expression:"order.address.phone"},{name:"mask",rawName:"v-mask",value:('+998 (##) ###-##-##'),expression:"'+998 (##) ###-##-##'"}],attrs:{"type":"text","placeholder":_vm.$t('tel'),"id":"Number","name":"Number"},domProps:{"value":(_vm.order.address.phone)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.order.address, "phone", $event.target.value)}}},[])],2),_vm._ssrNode(" <div class=\"person__home--description\"><div class=\"to-home\"><label for=\"tohome1\"><input id=\"tohome1\" type=\"radio\" name=\"deliver\""+(_vm._ssrAttr("value",true))+(_vm._ssrAttr("checked",_vm._q(_vm.tohome,true)))+">\n                                Uygacha yetkazib berish\n                            </label> <label for=\"tohome2\"><input id=\"tohome2\" type=\"radio\" name=\"deliver\""+(_vm._ssrAttr("value",false))+(_vm._ssrAttr("checked",_vm._q(_vm.tohome,false)))+">\n                                Shahar markazigacha yetkazib berish\n                            </label></div></div>")],2),_vm._ssrNode(" <div class=\"person__checkout\"><span>"+_vm._ssrEscape(_vm._s(_vm.$t("vzakaz")))+"</span> <div class=\"span__container\"><span>"+_vm._ssrEscape(_vm._s(_vm.$t("tovar"))+" ("+_vm._s(_vm.allProduct.length)+")")+"</span> <span class=\"primary\">"+_vm._ssrEscape("\n                            "+_vm._s(_vm.updatePriceFormat(_vm.allPriceProduct))+"\n                            "+_vm._s(_vm.$t("sum")))+"</span></div> <div class=\"span__container\"><span>"+_vm._ssrEscape(_vm._s(_vm.$t("sales")))+"</span> <span class=\"secondary\">"+_vm._ssrEscape(_vm._s(_vm.updatePriceFormat(_vm.allPriceSale))+"\n                            "+_vm._s(_vm.$t("sum")))+"</span></div> <div class=\"span__container\"><span>"+_vm._ssrEscape(_vm._s(_vm.$t("dostavka")))+"</span> <span class=\"tritary\">"+_vm._ssrEscape(_vm._s(_vm.updatePriceFormat(
                                    _vm.delivery * _vm.orderProds.length
                                ))+"\n                            "+_vm._s(_vm.$t("sum")))+"</span></div> <div class=\"span__container span__container--last \"><span>"+_vm._ssrEscape(_vm._s(_vm.$t("allsum"))+":")+"</span> <span class=\"tertiary\">"+_vm._ssrEscape("\n                            "+_vm._s(_vm.updatePriceFormat(_vm.allPricePay))+" cум\n                        ")+"</span></div> <a target=\"_blank\" class=\"checkout__you__order submit\">"+_vm._ssrEscape("\n                        "+_vm._s(_vm.$t("zakazat"))+"\n                    ")+"</a></div>")],2),_vm._ssrNode(" "+((_vm.orderProds.length > 0)?("<section class=\"checkout__order__section\"><h2 class=\"header\">"+_vm._ssrEscape(_vm._s(_vm.$t("vzakaz")))+"</h2> "+(_vm._ssrList((_vm.orderProds),function(item,index){return ("<div class=\"order-one-shop\"><h5>\n                        Do'kon: <b>"+_vm._ssrEscape(_vm._s(item.name))+"</b></h5> "+(_vm._ssrList((item.products),function(product,i){return ("<div class=\"checkout__order__item__box\"><div class=\"checkout__order__item--header\"><img"+(_vm._ssrAttr("src",_vm.$cdn + product.image))+" alt=\"Item image\"> <div class=\"checkout__order__item__description\"><h3>"+_vm._ssrEscape(_vm._s(product.name[_vm.$i18n.locale]))+"</h3> <p class=\"p-first\">"+_vm._ssrEscape("\n                                    "+_vm._s(product.description[_vm.$i18n.locale])+"\n                                ")+"</p> <p class=\"p-second\"><span>Размер:</span>"+_vm._ssrEscape("\n                                    "+_vm._s(product.size.size)+"\n                                ")+"</p></div></div> <div class=\"checkout__order__item--secondary\"><div class=\"checkout__order__item--number\"><span>"+_vm._ssrEscape(_vm._s(_vm.$t("kol"))+":")+"</span> <span class=\"number\">"+_vm._ssrEscape("\n                                    "+_vm._s(product.count)+" шт")+"</span></div> <div class=\"checkout__order__item--price\"><span>"+_vm._ssrEscape("\n                                    "+_vm._s(_vm.updatePriceFormat(
                                            product.size.price *
                                                product.count
                                        ))+"\n                                    "+_vm._s(_vm.$t("sum"))+"\n                                ")+"</span></div> <div class=\"checkout__order__item--color\"><span>"+_vm._ssrEscape(_vm._s(_vm.$t("color"))+":")+"</span> <img"+(_vm._ssrAttr("src",_vm.$cdn + product.param.image))+" alt=\"Color image\"></div></div></div>")}))+" "+((_vm.tohome)?("<div class=\"deliver-bottom\"><h6>Dostavka</h6> <h3>"+_vm._ssrEscape(_vm._s(_vm.updatePriceFormat(_vm.delivery))+" so'm")+"</h3></div>"):"<!---->")+"</div>")}))+" <div class=\"checkout__order__price\"><div class=\"checkout__order__price--total\"><span>"+_vm._ssrEscape(_vm._s(_vm.$t("allsum"))+":")+"</span> <span class=\"all__price\">"+_vm._ssrEscape(_vm._s(_vm.updatePriceFormat(
                                    _vm.allPriceProduct +
                                        _vm.delivery * _vm.orderProds.length
                                ))+"\n                            "+_vm._s(_vm.$t("sum")))+"</span></div></div></section>"):"<!---->"))],2):_vm._e()],2):_vm._e(),_vm._ssrNode(" "),(_vm.warningMessage)?_c('warning-message',{attrs:{"post-title":_vm.$t('err1')}}):_vm._e(),_vm._ssrNode(" "),(_vm.errorrMessage)?_c('warning-message',{attrs:{"post-title":_vm.$t('oshibka')}}):_vm._e()],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/order/_id.vue?vue&type=template&id=ff181804&

// EXTERNAL MODULE: external "core-js/modules/esnext.string.replace-all.js"
var esnext_string_replace_all_js_ = __webpack_require__(76);

// EXTERNAL MODULE: ./components/UI/BaseLoading.vue + 4 modules
var BaseLoading = __webpack_require__(85);

// EXTERNAL MODULE: ./components/Modals/WarningMessage.vue + 4 modules
var WarningMessage = __webpack_require__(98);

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(7);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/order/_id.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var _idvue_type_script_lang_js_ = ({components:{BaseLoading: BaseLoading["default"],WarningMessage: WarningMessage["default"]},head:{title:"Оформить заказ — Tujjor. Низкие цены и широкий ассортимент!",meta:[{hid:"description",name:"description",content:"Оформить заказ - Tujjor"}]},middleware:"auth",data(){return{user:{token:this.$auth.strategy.token.get()},selectedAdress:{region:"",district:""},tohome:false,selectedCityDistricts:[],order:{address:{region:"",district:"",address:"",phone:""}},product:"",warningMessage:false,errorrMessage:false,isGet:false,noData:false,base64Data:"",orderProds:[],delivery:0,base64Data:{}};},computed:{...Object(external_vuex_["mapGetters"])(["orderAmount","orderAddress","orderProducts","allRegions","allInBasket","orderAll","orderAllProducts","allProduct"]),allPriceProduct(){let s=0;this.allProduct.forEach(item=>{s=s+item.size.price*item.count;});return s;},allPriceSale(){let s=0;this.allProduct.forEach(item=>{if(item.size.discount){s=s+(item.size.price-item.size.discount)*item.count;}});return s;},allPricePay(){return this.allPriceProduct-this.allPriceSale+this.delivery*this.orderProds.length;}},methods:{changeHome(){if(this.tohome){this.delivery=20000;}else{this.delivery=0;}},...Object(external_vuex_["mapMutations"])(["resetOrderSetts","setRegions","updateOrderAddress"]),...Object(external_vuex_["mapActions"])(["fetchRegion","fetchBasket","createOrder"]),// select region and find districts depends on in
giveCity(){this.order.address.district=this.selectedAdress.district="";const region=this.selectedAdress.region;const result=this.allRegions.filter(arr=>{return arr.name.uz==region||arr.name.ru==region;});this.selectedCityDistricts=result[0].districts;this.order.address.region=result[0];},giveDistrict(){const district=this.selectedAdress.district;const result=this.order.address.region.districts.filter(arr=>{return arr.name.uz===district||arr.name.ru===district;});this.order.address.district=result[0]._id;},async getProduct(){await this.$axios.$get("/product/403685-iphone-11-pro").then(response=>{if(response.success){this.isGet=true;this.product=response.data[0];this.updateProduct(this.product);}else{throw new Error("Could not save data!");}}).catch(error=>{console.error(error);});},// update priceFormat
updatePriceFormat(price){const form=new Intl.NumberFormat("en-US").format(price);return form.replaceAll(","," ");},updatePrice(price,count){const resultPrice=price*count;return this.updatePriceFormat(resultPrice);},// ------------------------------------- go to payment create order ----------------
// main function
async fetchOrder(){this.warningMessage=this.errorrMessage=false;const add={region:this.order.address.region._id,district:this.order.address.district,address:this.order.address.address,phone:this.order.address.phone.replace(/[^0-9]/g,"")};await this.updateOrderAddress({add});const address=this.orderAll.address;if(!!address.address&&!!address.district&&!!address.phone&&!!address.region){let prod=[];this.allProduct.forEach(item=>{let price;if(item.size.discount){price=item.size.discount;}else{price=item.size.price;}prod.push({product:item.product,param:item.param._id,size:item.size._id,count:item.count,amount:price});});const result=await this.$axios.$post("order/create",{amount:this.allPricePay,address:address,toMyHouse:this.tohome,products:prod}).then(res=>{return res;});console.log("data",result);if(!!result){this.base64Data=result.data;const link=this.redirectToPayMe();}else{this.warningMessage=true;}}else{this.warningMessage=true;}},// go to pay me
redirectToPayMe(){const teene=this.base64Data.amount*100;const str="m=6113b418754e932e68fd87ad;ac.order="+this.base64Data.orderId+";a="+ +teene+";c=https://tujjor.org/profile";const base64=btoa(str);console.log("base64",base64,str);const link="https://checkout.paycom.uz/"+base64;window.location=link;}},async mounted(){await this.$store.dispatch("fetchRegion");const router=this.$route.params.id;if(router=="all"){let shopList=[];this.allProduct.forEach(item=>{let shopid=item.shop._id;let find=shopList.find(i=>i._id==shopid);if(!find){shopList.push(item.shop);}});shopList.forEach(item=>{let products=this.allProduct.filter(i=>item._id==i.shop._id);this.orderProds.push({name:item.name,products:products});});this.isGet=true;}}});
// CONCATENATED MODULE: ./pages/order/_id.vue?vue&type=script&lang=js&
 /* harmony default export */ var order_idvue_type_script_lang_js_ = (_idvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/order/_id.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(241)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  order_idvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "5c9c49ce"
  
)

/* harmony default export */ var _id = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 84:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(87);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("6a8f7fb6", content, true, context)
};

/***/ }),

/***/ 85:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/UI/BaseLoading.vue?vue&type=template&id=46236f3e&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<figure class=\"load__conatiner\" data-v-46236f3e>","</figure>",[_vm._ssrNode("<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" width=\"200px\" height=\"200px\" viewBox=\"0 0 100 100\" preserveAspectRatio=\"xMidYMid\" class=\"load__svg\" style=\"margin: auto; background: none; display: block; shape-rendering: auto;\" data-v-46236f3e>","</svg>",[_vm._ssrNode("<circle cx=\"50\" cy=\"50\" r=\"32\" stroke-width=\"8\" stroke=\"#023047\" stroke-dasharray=\"50.26548245743669 50.26548245743669\" fill=\"none\" stroke-linecap=\"round\" data-v-46236f3e>","</circle>",[_c('animateTransform',{attrs:{"attributeName":"transform","type":"rotate","dur":"1s","repeatCount":"indefinite","keyTimes":"0;1","values":"0 50 50;360 50 50"}})],1),_vm._ssrNode(" "),_vm._ssrNode("<circle cx=\"50\" cy=\"50\" r=\"23\" stroke-width=\"8\" stroke=\"#f7931e\" stroke-dasharray=\"36.12831551628262 36.12831551628262\" stroke-dashoffset=\"36.12831551628262\" fill=\"none\" stroke-linecap=\"round\" data-v-46236f3e>","</circle>",[_c('animateTransform',{attrs:{"attributeName":"transform","type":"rotate","dur":"1s","repeatCount":"indefinite","keyTimes":"0;1","values":"0 50 50;-360 50 50"}})],1)],2)])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/UI/BaseLoading.vue?vue&type=template&id=46236f3e&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/UI/BaseLoading.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var BaseLoadingvue_type_script_lang_js_ = ({});
// CONCATENATED MODULE: ./components/UI/BaseLoading.vue?vue&type=script&lang=js&
 /* harmony default export */ var UI_BaseLoadingvue_type_script_lang_js_ = (BaseLoadingvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/UI/BaseLoading.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(86)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  UI_BaseLoadingvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "46236f3e",
  "47f1d7fa"
  
)

/* harmony default export */ var BaseLoading = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 86:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BaseLoading_vue_vue_type_style_index_0_id_46236f3e_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(84);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BaseLoading_vue_vue_type_style_index_0_id_46236f3e_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BaseLoading_vue_vue_type_style_index_0_id_46236f3e_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BaseLoading_vue_vue_type_style_index_0_id_46236f3e_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BaseLoading_vue_vue_type_style_index_0_id_46236f3e_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 87:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "@media(max-width:543px){.popular__container .img-fluid[data-v-46236f3e]{height:170px!important;-o-object-fit:cover!important;object-fit:cover!important}.other__item__banner--carousel .b-carousel .carousel-inner .b-carousel-slide img[data-v-46236f3e]{min-height:250px!important}}.other__item__banner--carousel .b-carousel .carousel-inner .b-carousel-slide img[data-v-46236f3e]{min-height:450px}.success-info[data-v-46236f3e]{position:fixed;top:10px;right:20px;width:320px;z-index:12345}div.card-row[data-v-46236f3e]{display:flex;margin:0 -10px;flex-wrap:wrap}.hover-shadow[data-v-46236f3e]:hover{box-shadow:0 1px 10px rgba(0,0,0,.18)}div.card-5[data-v-46236f3e]{width:20%;padding:0 10px}div.card-4[data-v-46236f3e]{width:25%;padding:0 10px}div.card-3[data-v-46236f3e]{width:33.3333333333%;padding:0 10px}@media(max-width:1020px){div.card-4[data-v-46236f3e],div.card-5[data-v-46236f3e]{width:33.3333333333%}}@media(max-width:768px){div.card-3[data-v-46236f3e],div.card-4[data-v-46236f3e],div.card-5[data-v-46236f3e]{width:50%}.catalog__container[data-v-46236f3e]{padding-top:5px!important}.filtr__section .catalog__page__filtr__box[data-v-46236f3e]{position:relative!important;top:unset!important}.catalog__container .catalog__filtraiton__box .filtraiton__form__box .filtraiton__form--submit[data-v-46236f3e]{margin-bottom:0!important}.catalog__container .catalog__page__about[data-v-46236f3e]{padding-left:0!important}}@-webkit-keyframes move__360-data-v-46236f3e{0%{transform:translateX(0deg)}to{transform:translateX(1turn)}}@keyframes move__360-data-v-46236f3e{0%{transform:translateX(0deg)}to{transform:translateX(1turn)}}h6.error-text[data-v-46236f3e]{font-size:12px;color:red;margin-bottom:0}h1.title-form[data-v-46236f3e]{font-size:24px;text-align:center}.popular__container[data-v-46236f3e]{margin-top:40px}.popular__container .popular__heading[data-v-46236f3e]{font-family:Roboto,sans-serif;font-weight:500;font-size:48px;color:#f7931e;margin-bottom:40px;text-shadow:0 0 3px rgba(247,147,30,.3);display:inline-block}.popular__container .popular__item-box[data-v-46236f3e]{display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap}.popular__container .popular__item-box[data-v-46236f3e]:after{content:\"\";flex:0 1 32%}.popular__container .popular__item-box .popular__items[data-v-46236f3e]{flex:0 0 auto;width:222px;height:370px;background-color:#fff;box-shadow:0 1px 3px rgba(0,0,0,.12);border-radius:5px;overflow:hidden;margin:0 2px 37px;cursor:pointer;transition:all .2s}.popular__container .popular__item-box .popular__items[data-v-46236f3e]:hover{transform:scale(1.07)}.popular__container .popular__item-box .popular__items[data-v-46236f3e]:hover:after{opacity:0}.popular__container .popular__item-box .popular__items[data-v-46236f3e]:active{outline:none;transform:scale(1.03)}.popular__container .popular__item-box .popular__items .popular__items__img[data-v-46236f3e]{width:222px;height:222px}.popular__container .popular__item-box .popular__items .popular__items__desription[data-v-46236f3e]{padding-left:16px;display:flex;flex-direction:column;justify-content:flex-start;position:relative}.popular__container .popular__item-box .popular__items .popular__items__desription .name__rating[data-v-46236f3e]{margin-top:2px;display:flex;justify-content:space-between;align-items:center;padding-right:10px}.popular__container .popular__item-box .popular__items .popular__items__desription .name__rating .magazine__item--rating[data-v-46236f3e]{display:flex;align-items:center}.popular__container .popular__item-box .popular__items .popular__items__desription .name__rating .magazine__item--rating img[data-v-46236f3e]{width:12px;height:12px;margin-right:2px}.popular__container .popular__item-box .popular__items .popular__items__desription .name__rating .magazine__item--rating span[data-v-46236f3e]{color:#666;opacity:.7;font-size:10px}.popular__container .popular__item-box .popular__items .popular__items__desription--name[data-v-46236f3e]{margin-top:5px;font-family:Roboto;font-weight:500;font-size:14px;line-height:16px;opacity:.7;color:#666}.popular__container .popular__item-box .popular__items .popular__items__desription--categorie[data-v-46236f3e]{margin:9px 0;font-family:Roboto;font-weight:700;font-size:16px;line-height:100%;color:#000;height:60px}.popular__container .popular__item-box .popular__items .popular__items__desription--price[data-v-46236f3e]{font-family:Roboto;font-weight:700;font-size:20px;line-height:100%;color:#219ebc}.popular__container .popular__item-box .popular__items .popular__items__desription--old--price[data-v-46236f3e]{margin-bottom:2px;font-size:14px;color:#f7931e;text-decoration:line-through}.popular__container .popular__btn[data-v-46236f3e],.popular__container .popular__btn[data-v-46236f3e]:link,.popular__container .popular__btn[data-v-46236f3e]:visited{display:block;border-radius:5px;transition:all .2s;width:224px;height:50px;margin:20px auto 0;text-align:center;padding:10px;text-decoration:none;font-family:inherit;font-weight:500;font-size:18px;color:hsla(0,0%,100%,.9);background-color:#f7931e;border:none;cursor:pointer}.popular__container .popular__btn[data-v-46236f3e]:hover{transform:scale(1.07)}.popular__container .popular__btn[data-v-46236f3e]:hover:after{opacity:0}.popular__container .popular__btn[data-v-46236f3e]:active{outline:none;transform:scale(1.03)}.popular__container .popular__btn[data-v-46236f3e]:active,.popular__container .popular__btn[data-v-46236f3e]:hover{background-color:#fff;color:#f7931e;border:1px solid #f7931e}.popular__container .popular__dropdown__box[data-v-46236f3e]{position:relative}.popular__container .popular__dropdown__box .popular__dropdown--btn[data-v-46236f3e]{width:170px;height:36px;border:1px solid #f7931e;border-radius:5px;background-color:transparent;padding:0 10px;font-family:Roboto;font-weight:500;font-size:16px;color:#f7931e;display:flex;justify-content:space-between;align-items:center}.popular__container .popular__dropdown__box .popular__dropdown--btn:hover+.popular__dropdown__content[data-v-46236f3e]{visibility:visible;opacity:1}.popular__container .popular__dropdown__box .popular__dropdown__content[data-v-46236f3e]{position:absolute;left:0;top:36px;width:170px;display:flex;flex-direction:column;justify-content:center;transition:all .2s;visibility:hidden;opacity:0;border-radius:5px;overflow:hidden;box-shadow:0 2px 6px rgba(0,0,0,.3)}.popular__container .popular__dropdown__box .popular__dropdown__content .popular__dropdown--link[data-v-46236f3e]{color:#f7931e;background-color:#fcf6f6;padding:5px;text-decoration:none}.popular__container .popular__dropdown__box .popular__dropdown__content .popular__dropdown--link[data-v-46236f3e]:active,.popular__container .popular__dropdown__box .popular__dropdown__content .popular__dropdown--link[data-v-46236f3e]:hover{font-weight:500}.popular__container .popular__dropdown__box .popular__dropdown__content[data-v-46236f3e]:active,.popular__container .popular__dropdown__box .popular__dropdown__content[data-v-46236f3e]:hover{visibility:visible;opacity:1}@media only screen and (max-width:1440px)and (min-width:1200px){.popular__container .popular__item-box[data-v-46236f3e]{padding:0 4px}}@media only screen and (max-width:1200px)and (min-width:765px){.popular__container[data-v-46236f3e]{padding:20px}.popular__container .popular__item-box .popular__items[data-v-46236f3e]{width:229px;height:381.67px;margin-bottom:22px}.popular__container .popular__item-box .popular__items .popular__items__img[data-v-46236f3e]{width:230px;height:230px}}@media only screen and (max-width:765px){.popular__container[data-v-46236f3e]{padding:16px}.popular__container .popular__heading[data-v-46236f3e]{font-size:24px;margin-bottom:28px}.popular__container .popular__item-box .popular__items[data-v-46236f3e]{width:164px;height:273px;margin-bottom:14px}.popular__container .popular__item-box .popular__items .popular__items__img[data-v-46236f3e]{width:164px;height:164px}.popular__container .popular__item-box .popular__items .popular__items__desription[data-v-46236f3e]{padding-left:12px}.popular__container .popular__item-box .popular__items .popular__items__desription--name[data-v-46236f3e]{margin-top:3.7px;font-size:10px}.popular__container .popular__item-box .popular__items .popular__items__desription--categorie[data-v-46236f3e]{margin:6.6px 0 0;font-size:12px;height:50px;padding:0}.popular__container .popular__item-box .popular__items .popular__items__desription--price[data-v-46236f3e]{font-size:14px}.popular__container .popular__item-box .popular__items .popular__items__desription--old--price[data-v-46236f3e]{font-size:10px}.popular__container .popular__btn[data-v-46236f3e],.popular__container .popular__btn[data-v-46236f3e]:link,.popular__container .popular__btn[data-v-46236f3e]:visited{width:160px;height:35px;margin-top:18px;padding:8px;font-size:12px}}@media only screen and (max-width:365px){.popular__container[data-v-46236f3e]{padding:14px}.popular__container .popular__heading[data-v-46236f3e]{font-size:22px;margin-bottom:12px}.popular__container .popular__item-box .popular__items[data-v-46236f3e]{width:140px;height:245px}.popular__container .popular__item-box .popular__items .popular__items__img[data-v-46236f3e]{width:140px;height:140px}.popular__container .popular__item-box .popular__items .popular__items__desription--categorie[data-v-46236f3e]{margin-top:3.6px;font-size:12px;height:2.8em;padding:0}.popular__container .popular__item-box .popular__items .popular__items__desription--price[data-v-46236f3e]{font-size:12px}.popular__container .popular__item-box .popular__items .popular__items__desription--old--price[data-v-46236f3e]{font-size:9px;bottom:17px}}div.title-box[data-v-46236f3e]{padding:40px 0}div.title-box ul li[data-v-46236f3e],div.title-box ul li a[data-v-46236f3e]{display:inline-block;font-weight:400;font-size:15px;line-height:18px;color:#000}div.title-box ul li a[data-v-46236f3e]:hover{color:#f7931e}div.fixvh-category[data-v-46236f3e]{z-index:100;width:100%;background-color:#333;opacity:.5}div.category-modal[data-v-46236f3e],div.fixvh-category[data-v-46236f3e]{position:fixed;top:0;left:0;height:100vh;z-index:1000}div.category-modal[data-v-46236f3e]{width:90%;transform:translateX(0);opacity:1;transition:.2s}div.category-modal div.category-nav[data-v-46236f3e]{width:100%;height:100%;background-color:#fff;position:relative;z-index:101;display:flex;padding:15px 0}div.category-modal div.category-nav button.close-btn[data-v-46236f3e]{position:absolute;width:30px;height:30px;border-radius:100%;background-color:#f7931e;border:none;right:-41px;top:8px;z-index:101}div.category-modal div.category-nav button.close-btn .icon-times[data-v-46236f3e]{color:#fff}div.category-modal div.category-nav div.scroll-modal[data-v-46236f3e]{overflow-y:scroll;overflow-x:hidden}div.category-modal div.category-nav div.category-left[data-v-46236f3e]{width:400px;padding:0 15px;border-right:1px solid #bbb}div.category-modal div.category-nav div.category-left ul[data-v-46236f3e]{list-style-type:none;padding-right:15px}div.category-modal div.category-nav div.category-left li button[data-v-46236f3e]{display:block;padding:8px 15px;border-radius:5px;font-size:16px;color:#333;font-weight:500;border:none;background-color:transparent;width:100%;text-align:left}div.category-modal div.category-nav div.category-left li button[data-v-46236f3e]:hover{color:#f7931e}div.category-modal div.category-nav div.category-left li.active-li button[data-v-46236f3e]{background-color:#f7931e;color:#fff}div.category-modal div.category-nav div.category-content[data-v-46236f3e]{width:calc(100% - 400px);padding:0 30px;position:relative}div.category-modal div.category-nav div.category-content h3.category-title[data-v-46236f3e]{font-size:24px;font-weight:500;margin-bottom:25px}div.category-modal div.category-nav div.category-content div.visible-all a[data-v-46236f3e]{font-size:16px;color:#888;margin-bottom:5px;display:block}div.category-modal div.category-nav div.category-content a[data-v-46236f3e]{transition:.2s}div.category-modal div.category-nav div.category-content ul[data-v-46236f3e]{list-style-type:none;margin-bottom:25px}div.category-modal div.category-nav div.category-content ul a[data-v-46236f3e]{font-size:16px;color:#888;margin-bottom:5px;display:block}div.category-modal div.category-nav div.category-content a.click-parent[data-v-46236f3e]{font-size:18px;margin-bottom:10px;color:#333;display:block;font-weight:500}div.category-modal div.category-nav div.category-content a[data-v-46236f3e]:hover{color:#f7931e!important}div.category-modal div.category-nav div.scroll-modal[data-v-46236f3e]::-webkit-scrollbar{width:5px}div.category-modal div.category-nav div.scroll-modal[data-v-46236f3e]::-webkit-scrollbar-track{background:#f1f1f1}div.category-modal div.category-nav div.scroll-modal[data-v-46236f3e]::-webkit-scrollbar-thumb{background:#f7931e;border-radius:5px}div.category-modal div.category-nav div.scroll-modal[data-v-46236f3e]::-webkit-scrollbar-thumb:hover{background:#f7931e}div.hidden-category[data-v-46236f3e]{transform:translateX(-104%);opacity:0}div.category-mobile[data-v-46236f3e]{position:fixed;z-index:1234454545;top:0;left:0;width:100%;height:100vh;background-color:#fff;padding:15px}div.category-mobile a.visible-all-mobile[data-v-46236f3e]{font-size:16px;color:#333}div.category-mobile div.title-t[data-v-46236f3e]{display:flex;justify-content:space-between;align-items:center}div.category-mobile div.title-t h3[data-v-46236f3e]{font-size:24px;margin-bottom:0}div.category-mobile div.title-t button[data-v-46236f3e]{border:none;background-color:transparent}div.category-mobile div.title-t button .close-mobile[data-v-46236f3e]{font-size:26px;color:#f7931e}div.category-mobile div.category-acc[data-v-46236f3e]{margin-top:20px;max-height:calc(100vh - 100px);overflow-y:scroll}div.category-mobile div.category-acc div.acc-item[data-v-46236f3e]{margin-bottom:5px}div.category-mobile div.category-acc div.acc-item button[data-v-46236f3e]{width:100%;display:flex;justify-content:space-between;align-items:center;background:#fff7ec;padding:10px 15px;border-radius:5px;border:1px solid #fff7ec}div.category-mobile div.category-acc div.acc-item button b[data-v-46236f3e]{font-size:18px}div.category-mobile div.category-acc div.acc-item button .icon-down[data-v-46236f3e]{font-size:18px;color:#f7931e}div.category-mobile div.category-acc div.acc-item button .rotate[data-v-46236f3e]{transform:rotate(-180deg)}div.category-mobile div.category-acc div.acc-item div.acc-content[data-v-46236f3e]{padding:15px}div.category-mobile div.category-acc div.acc-item div.acc-content ul[data-v-46236f3e]{list-style-type:none}div.category-mobile div.category-acc div.acc-item div.acc-content ul li a[data-v-46236f3e]{color:#333;display:block;font-size:16px!important;font-weight:700;margin-bottom:5px}div.category-mobile div.category-acc div.acc-item div.acc-content ul li a[data-v-46236f3e]:active{color:#f7931e}div.category-mobile div.category-acc div.acc-item div.acc-content ul li ul[data-v-46236f3e]{margin-bottom:15px}div.category-mobile div.category-acc div.acc-item div.acc-content ul li ul li a[data-v-46236f3e]{font-weight:400;color:#777}@media(max-width:800px){div.category-modal div.category-nav div.category-left[data-v-46236f3e]{width:280px}div.category-modal div.category-nav div.category-content[data-v-46236f3e]{width:calc(100% - 280px)}}.load__conatiner[data-v-46236f3e]{position:fixed;top:0;left:0;background-color:#fff;width:100%;height:100vh;z-index:120;display:flex;flex-direction:row;justify-content:center}@media only screen and (max-width:560px){.load__svg[data-v-46236f3e]{width:150px;height:150px}}@media only screen and (max-width:370px){.load__svg[data-v-46236f3e]{width:100px;height:100px}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 89:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(95);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("7fb1bf55", content, true, context)
};

/***/ }),

/***/ 94:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_WarningMessage_vue_vue_type_style_index_0_id_3634cf25_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(89);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_WarningMessage_vue_vue_type_style_index_0_id_3634cf25_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_WarningMessage_vue_vue_type_style_index_0_id_3634cf25_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_WarningMessage_vue_vue_type_style_index_0_id_3634cf25_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_WarningMessage_vue_vue_type_style_index_0_id_3634cf25_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 95:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "@media(max-width:543px){.popular__container .img-fluid[data-v-3634cf25]{height:170px!important;-o-object-fit:cover!important;object-fit:cover!important}.other__item__banner--carousel .b-carousel .carousel-inner .b-carousel-slide img[data-v-3634cf25]{min-height:250px!important}}.other__item__banner--carousel .b-carousel .carousel-inner .b-carousel-slide img[data-v-3634cf25]{min-height:450px}.success-info[data-v-3634cf25]{position:fixed;top:10px;right:20px;width:320px;z-index:12345}div.card-row[data-v-3634cf25]{display:flex;margin:0 -10px;flex-wrap:wrap}.hover-shadow[data-v-3634cf25]:hover{box-shadow:0 1px 10px rgba(0,0,0,.18)}div.card-5[data-v-3634cf25]{width:20%;padding:0 10px}div.card-4[data-v-3634cf25]{width:25%;padding:0 10px}div.card-3[data-v-3634cf25]{width:33.3333333333%;padding:0 10px}@media(max-width:1020px){div.card-4[data-v-3634cf25],div.card-5[data-v-3634cf25]{width:33.3333333333%}}@media(max-width:768px){div.card-3[data-v-3634cf25],div.card-4[data-v-3634cf25],div.card-5[data-v-3634cf25]{width:50%}.catalog__container[data-v-3634cf25]{padding-top:5px!important}.filtr__section .catalog__page__filtr__box[data-v-3634cf25]{position:relative!important;top:unset!important}.catalog__container .catalog__filtraiton__box .filtraiton__form__box .filtraiton__form--submit[data-v-3634cf25]{margin-bottom:0!important}.catalog__container .catalog__page__about[data-v-3634cf25]{padding-left:0!important}}@-webkit-keyframes move__360-data-v-3634cf25{0%{transform:translateX(0deg)}to{transform:translateX(1turn)}}@keyframes move__360-data-v-3634cf25{0%{transform:translateX(0deg)}to{transform:translateX(1turn)}}h6.error-text[data-v-3634cf25]{font-size:12px;color:red;margin-bottom:0}h1.title-form[data-v-3634cf25]{font-size:24px;text-align:center}.popular__container[data-v-3634cf25]{margin-top:40px}.popular__container .popular__heading[data-v-3634cf25]{font-family:Roboto,sans-serif;font-weight:500;font-size:48px;color:#f7931e;margin-bottom:40px;text-shadow:0 0 3px rgba(247,147,30,.3);display:inline-block}.popular__container .popular__item-box[data-v-3634cf25]{display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap}.popular__container .popular__item-box[data-v-3634cf25]:after{content:\"\";flex:0 1 32%}.popular__container .popular__item-box .popular__items[data-v-3634cf25]{flex:0 0 auto;width:222px;height:370px;background-color:#fff;box-shadow:0 1px 3px rgba(0,0,0,.12);border-radius:5px;overflow:hidden;margin:0 2px 37px;cursor:pointer;transition:all .2s}.popular__container .popular__item-box .popular__items[data-v-3634cf25]:hover{transform:scale(1.07)}.popular__container .popular__item-box .popular__items[data-v-3634cf25]:hover:after{opacity:0}.popular__container .popular__item-box .popular__items[data-v-3634cf25]:active{outline:none;transform:scale(1.03)}.popular__container .popular__item-box .popular__items .popular__items__img[data-v-3634cf25]{width:222px;height:222px}.popular__container .popular__item-box .popular__items .popular__items__desription[data-v-3634cf25]{padding-left:16px;display:flex;flex-direction:column;justify-content:flex-start;position:relative}.popular__container .popular__item-box .popular__items .popular__items__desription .name__rating[data-v-3634cf25]{margin-top:2px;display:flex;justify-content:space-between;align-items:center;padding-right:10px}.popular__container .popular__item-box .popular__items .popular__items__desription .name__rating .magazine__item--rating[data-v-3634cf25]{display:flex;align-items:center}.popular__container .popular__item-box .popular__items .popular__items__desription .name__rating .magazine__item--rating img[data-v-3634cf25]{width:12px;height:12px;margin-right:2px}.popular__container .popular__item-box .popular__items .popular__items__desription .name__rating .magazine__item--rating span[data-v-3634cf25]{color:#666;opacity:.7;font-size:10px}.popular__container .popular__item-box .popular__items .popular__items__desription--name[data-v-3634cf25]{margin-top:5px;font-family:Roboto;font-weight:500;font-size:14px;line-height:16px;opacity:.7;color:#666}.popular__container .popular__item-box .popular__items .popular__items__desription--categorie[data-v-3634cf25]{margin:9px 0;font-family:Roboto;font-weight:700;font-size:16px;line-height:100%;color:#000;height:60px}.popular__container .popular__item-box .popular__items .popular__items__desription--price[data-v-3634cf25]{font-family:Roboto;font-weight:700;font-size:20px;line-height:100%;color:#219ebc}.popular__container .popular__item-box .popular__items .popular__items__desription--old--price[data-v-3634cf25]{margin-bottom:2px;font-size:14px;color:#f7931e;text-decoration:line-through}.popular__container .popular__btn[data-v-3634cf25],.popular__container .popular__btn[data-v-3634cf25]:link,.popular__container .popular__btn[data-v-3634cf25]:visited{display:block;border-radius:5px;transition:all .2s;width:224px;height:50px;margin:20px auto 0;text-align:center;padding:10px;text-decoration:none;font-family:inherit;font-weight:500;font-size:18px;color:hsla(0,0%,100%,.9);background-color:#f7931e;border:none;cursor:pointer}.popular__container .popular__btn[data-v-3634cf25]:hover{transform:scale(1.07)}.popular__container .popular__btn[data-v-3634cf25]:hover:after{opacity:0}.popular__container .popular__btn[data-v-3634cf25]:active{outline:none;transform:scale(1.03)}.popular__container .popular__btn[data-v-3634cf25]:active,.popular__container .popular__btn[data-v-3634cf25]:hover{background-color:#fff;color:#f7931e;border:1px solid #f7931e}.popular__container .popular__dropdown__box[data-v-3634cf25]{position:relative}.popular__container .popular__dropdown__box .popular__dropdown--btn[data-v-3634cf25]{width:170px;height:36px;border:1px solid #f7931e;border-radius:5px;background-color:transparent;padding:0 10px;font-family:Roboto;font-weight:500;font-size:16px;color:#f7931e;display:flex;justify-content:space-between;align-items:center}.popular__container .popular__dropdown__box .popular__dropdown--btn:hover+.popular__dropdown__content[data-v-3634cf25]{visibility:visible;opacity:1}.popular__container .popular__dropdown__box .popular__dropdown__content[data-v-3634cf25]{position:absolute;left:0;top:36px;width:170px;display:flex;flex-direction:column;justify-content:center;transition:all .2s;visibility:hidden;opacity:0;border-radius:5px;overflow:hidden;box-shadow:0 2px 6px rgba(0,0,0,.3)}.popular__container .popular__dropdown__box .popular__dropdown__content .popular__dropdown--link[data-v-3634cf25]{color:#f7931e;background-color:#fcf6f6;padding:5px;text-decoration:none}.popular__container .popular__dropdown__box .popular__dropdown__content .popular__dropdown--link[data-v-3634cf25]:active,.popular__container .popular__dropdown__box .popular__dropdown__content .popular__dropdown--link[data-v-3634cf25]:hover{font-weight:500}.popular__container .popular__dropdown__box .popular__dropdown__content[data-v-3634cf25]:active,.popular__container .popular__dropdown__box .popular__dropdown__content[data-v-3634cf25]:hover{visibility:visible;opacity:1}@media only screen and (max-width:1440px)and (min-width:1200px){.popular__container .popular__item-box[data-v-3634cf25]{padding:0 4px}}@media only screen and (max-width:1200px)and (min-width:765px){.popular__container[data-v-3634cf25]{padding:20px}.popular__container .popular__item-box .popular__items[data-v-3634cf25]{width:229px;height:381.67px;margin-bottom:22px}.popular__container .popular__item-box .popular__items .popular__items__img[data-v-3634cf25]{width:230px;height:230px}}@media only screen and (max-width:765px){.popular__container[data-v-3634cf25]{padding:16px}.popular__container .popular__heading[data-v-3634cf25]{font-size:24px;margin-bottom:28px}.popular__container .popular__item-box .popular__items[data-v-3634cf25]{width:164px;height:273px;margin-bottom:14px}.popular__container .popular__item-box .popular__items .popular__items__img[data-v-3634cf25]{width:164px;height:164px}.popular__container .popular__item-box .popular__items .popular__items__desription[data-v-3634cf25]{padding-left:12px}.popular__container .popular__item-box .popular__items .popular__items__desription--name[data-v-3634cf25]{margin-top:3.7px;font-size:10px}.popular__container .popular__item-box .popular__items .popular__items__desription--categorie[data-v-3634cf25]{margin:6.6px 0 0;font-size:12px;height:50px;padding:0}.popular__container .popular__item-box .popular__items .popular__items__desription--price[data-v-3634cf25]{font-size:14px}.popular__container .popular__item-box .popular__items .popular__items__desription--old--price[data-v-3634cf25]{font-size:10px}.popular__container .popular__btn[data-v-3634cf25],.popular__container .popular__btn[data-v-3634cf25]:link,.popular__container .popular__btn[data-v-3634cf25]:visited{width:160px;height:35px;margin-top:18px;padding:8px;font-size:12px}}@media only screen and (max-width:365px){.popular__container[data-v-3634cf25]{padding:14px}.popular__container .popular__heading[data-v-3634cf25]{font-size:22px;margin-bottom:12px}.popular__container .popular__item-box .popular__items[data-v-3634cf25]{width:140px;height:245px}.popular__container .popular__item-box .popular__items .popular__items__img[data-v-3634cf25]{width:140px;height:140px}.popular__container .popular__item-box .popular__items .popular__items__desription--categorie[data-v-3634cf25]{margin-top:3.6px;font-size:12px;height:2.8em;padding:0}.popular__container .popular__item-box .popular__items .popular__items__desription--price[data-v-3634cf25]{font-size:12px}.popular__container .popular__item-box .popular__items .popular__items__desription--old--price[data-v-3634cf25]{font-size:9px;bottom:17px}}div.title-box[data-v-3634cf25]{padding:40px 0}div.title-box ul li[data-v-3634cf25],div.title-box ul li a[data-v-3634cf25]{display:inline-block;font-weight:400;font-size:15px;line-height:18px;color:#000}div.title-box ul li a[data-v-3634cf25]:hover{color:#f7931e}div.fixvh-category[data-v-3634cf25]{z-index:100;width:100%;background-color:#333;opacity:.5}div.category-modal[data-v-3634cf25],div.fixvh-category[data-v-3634cf25]{position:fixed;top:0;left:0;height:100vh;z-index:1000}div.category-modal[data-v-3634cf25]{width:90%;transform:translateX(0);opacity:1;transition:.2s}div.category-modal div.category-nav[data-v-3634cf25]{width:100%;height:100%;background-color:#fff;position:relative;z-index:101;display:flex;padding:15px 0}div.category-modal div.category-nav button.close-btn[data-v-3634cf25]{position:absolute;width:30px;height:30px;border-radius:100%;background-color:#f7931e;border:none;right:-41px;top:8px;z-index:101}div.category-modal div.category-nav button.close-btn .icon-times[data-v-3634cf25]{color:#fff}div.category-modal div.category-nav div.scroll-modal[data-v-3634cf25]{overflow-y:scroll;overflow-x:hidden}div.category-modal div.category-nav div.category-left[data-v-3634cf25]{width:400px;padding:0 15px;border-right:1px solid #bbb}div.category-modal div.category-nav div.category-left ul[data-v-3634cf25]{list-style-type:none;padding-right:15px}div.category-modal div.category-nav div.category-left li button[data-v-3634cf25]{display:block;padding:8px 15px;border-radius:5px;font-size:16px;color:#333;font-weight:500;border:none;background-color:transparent;width:100%;text-align:left}div.category-modal div.category-nav div.category-left li button[data-v-3634cf25]:hover{color:#f7931e}div.category-modal div.category-nav div.category-left li.active-li button[data-v-3634cf25]{background-color:#f7931e;color:#fff}div.category-modal div.category-nav div.category-content[data-v-3634cf25]{width:calc(100% - 400px);padding:0 30px;position:relative}div.category-modal div.category-nav div.category-content h3.category-title[data-v-3634cf25]{font-size:24px;font-weight:500;margin-bottom:25px}div.category-modal div.category-nav div.category-content div.visible-all a[data-v-3634cf25]{font-size:16px;color:#888;margin-bottom:5px;display:block}div.category-modal div.category-nav div.category-content a[data-v-3634cf25]{transition:.2s}div.category-modal div.category-nav div.category-content ul[data-v-3634cf25]{list-style-type:none;margin-bottom:25px}div.category-modal div.category-nav div.category-content ul a[data-v-3634cf25]{font-size:16px;color:#888;margin-bottom:5px;display:block}div.category-modal div.category-nav div.category-content a.click-parent[data-v-3634cf25]{font-size:18px;margin-bottom:10px;color:#333;display:block;font-weight:500}div.category-modal div.category-nav div.category-content a[data-v-3634cf25]:hover{color:#f7931e!important}div.category-modal div.category-nav div.scroll-modal[data-v-3634cf25]::-webkit-scrollbar{width:5px}div.category-modal div.category-nav div.scroll-modal[data-v-3634cf25]::-webkit-scrollbar-track{background:#f1f1f1}div.category-modal div.category-nav div.scroll-modal[data-v-3634cf25]::-webkit-scrollbar-thumb{background:#f7931e;border-radius:5px}div.category-modal div.category-nav div.scroll-modal[data-v-3634cf25]::-webkit-scrollbar-thumb:hover{background:#f7931e}div.hidden-category[data-v-3634cf25]{transform:translateX(-104%);opacity:0}div.category-mobile[data-v-3634cf25]{position:fixed;z-index:1234454545;top:0;left:0;width:100%;height:100vh;background-color:#fff;padding:15px}div.category-mobile a.visible-all-mobile[data-v-3634cf25]{font-size:16px;color:#333}div.category-mobile div.title-t[data-v-3634cf25]{display:flex;justify-content:space-between;align-items:center}div.category-mobile div.title-t h3[data-v-3634cf25]{font-size:24px;margin-bottom:0}div.category-mobile div.title-t button[data-v-3634cf25]{border:none;background-color:transparent}div.category-mobile div.title-t button .close-mobile[data-v-3634cf25]{font-size:26px;color:#f7931e}div.category-mobile div.category-acc[data-v-3634cf25]{margin-top:20px;max-height:calc(100vh - 100px);overflow-y:scroll}div.category-mobile div.category-acc div.acc-item[data-v-3634cf25]{margin-bottom:5px}div.category-mobile div.category-acc div.acc-item button[data-v-3634cf25]{width:100%;display:flex;justify-content:space-between;align-items:center;background:#fff7ec;padding:10px 15px;border-radius:5px;border:1px solid #fff7ec}div.category-mobile div.category-acc div.acc-item button b[data-v-3634cf25]{font-size:18px}div.category-mobile div.category-acc div.acc-item button .icon-down[data-v-3634cf25]{font-size:18px;color:#f7931e}div.category-mobile div.category-acc div.acc-item button .rotate[data-v-3634cf25]{transform:rotate(-180deg)}div.category-mobile div.category-acc div.acc-item div.acc-content[data-v-3634cf25]{padding:15px}div.category-mobile div.category-acc div.acc-item div.acc-content ul[data-v-3634cf25]{list-style-type:none}div.category-mobile div.category-acc div.acc-item div.acc-content ul li a[data-v-3634cf25]{color:#333;display:block;font-size:16px!important;font-weight:700;margin-bottom:5px}div.category-mobile div.category-acc div.acc-item div.acc-content ul li a[data-v-3634cf25]:active{color:#f7931e}div.category-mobile div.category-acc div.acc-item div.acc-content ul li ul[data-v-3634cf25]{margin-bottom:15px}div.category-mobile div.category-acc div.acc-item div.acc-content ul li ul li a[data-v-3634cf25]{font-weight:400;color:#777}@media(max-width:800px){div.category-modal div.category-nav div.category-left[data-v-3634cf25]{width:280px}div.category-modal div.category-nav div.category-content[data-v-3634cf25]{width:calc(100% - 280px)}}.modal__block[data-v-3634cf25]{position:fixed;top:5vh;left:0;width:100%;z-index:9999;-webkit-animation:modal-scale-data-v-3634cf25 .7s linear forwards,modal-opacity-data-v-3634cf25 2s linear forwards;animation:modal-scale-data-v-3634cf25 .7s linear forwards,modal-opacity-data-v-3634cf25 2s linear forwards}.modal__block[data-v-3634cf25],.modal__block div[data-v-3634cf25]{display:flex;justify-content:center;align-items:center;overflow:hidden}.modal__block div[data-v-3634cf25]{max-width:80%;color:#155724;background-color:#fcf6f6;border-color:#c3e6cb;border-radius:4px;padding:3px 8px}.modal__block .text[data-v-3634cf25]{margin:0 0 0 4px;display:block}@-webkit-keyframes modal-scale-data-v-3634cf25{0%{transform:scale(.1)}50%{transform:scale(1)}to{transform:scale(1)}}@keyframes modal-scale-data-v-3634cf25{0%{transform:scale(.1)}50%{transform:scale(1)}to{transform:scale(1)}}@-webkit-keyframes modal-opacity-data-v-3634cf25{0%{opacity:0}33%{opacity:1}88%{opacity:1}to{opacity:0}}@keyframes modal-opacity-data-v-3634cf25{0%{opacity:0}33%{opacity:1}88%{opacity:1}to{opacity:0}}.success__icon[data-v-3634cf25]{width:60px;-webkit-animation:scaleIcon-data-v-3634cf25 2s linear forwards;animation:scaleIcon-data-v-3634cf25 2s linear forwards}@-webkit-keyframes scaleIcon-data-v-3634cf25{0%{transform:scale(1)}25%{transform:scale(.88)}50%{transform:scale(1)}75%{transform:scale(1.1)}to{transform:scale(1.1)}}@keyframes scaleIcon-data-v-3634cf25{0%{transform:scale(1)}25%{transform:scale(.88)}50%{transform:scale(1)}75%{transform:scale(1.1)}to{transform:scale(1.1)}}.exl path[data-v-3634cf25]{fill:transparent;stroke-width:2px;stroke:#f7931f}@media only screen and (max-width:400px){.modal__block div[data-v-3634cf25]{max-width:70%}.modal__block .text[data-v-3634cf25]{font-size:12px}.success__icon[data-v-3634cf25]{width:80px}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 98:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Modals/WarningMessage.vue?vue&type=template&id=3634cf25&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',[_vm._ssrNode("<div class=\"modal__block\" data-v-3634cf25>","</div>",[_vm._ssrNode("<div data-v-3634cf25>","</div>",[_vm._ssrNode("<div class=\"success__icon\" data-v-3634cf25>","</div>",[_vm._ssrNode("<svg xml:space=\"preserve\" viewBox=\"0 0 100 100\" y=\"0\" x=\"0\" xmlns=\"http://www.w3.org/2000/svg\" id=\"Layer_1\" version=\"1.1\" width=\"200px\" height=\"200px\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" style=\"width:100%;height:100%;background-size:initial;background-repeat-y:initial;background-repeat-x:initial;background-position-y:initial;background-position-x:initial;background-origin:initial;background-color:initial;background-clip:initial;background-attachment:initial;animation-play-state:paused\" data-v-3634cf25>","</svg>",[_vm._ssrNode("<g class=\"ldl-scale\" style=\"transform-origin:50% 50%;transform:rotate(0deg) scale(0.8, 0.8);animation-play-state:paused\" data-v-3634cf25>","</g>",[_c('linearGradient',{staticStyle:{"animation-play-state":"paused"},attrs:{"y2":"73.744","x2":"65.885","y1":"26.41","x1":"34.218","gradientUnits":"userSpaceOnUse","id":"SVGID_1_"}},[_c('stop',{staticStyle:{"stop-color":"rgb(225, 92, 100)","animation-play-state":"paused"},attrs:{"stop-color":"#e15c64","offset":"0"}}),_vm._v(" "),_c('stop',{staticStyle:{"stop-color":"rgb(176, 72, 79)","animation-play-state":"paused"},attrs:{"stop-color":"#b0484f","offset":"1"}})],1),_vm._ssrNode(" <circle stroke-miterlimit=\"10\" stroke-width=\"3.5\" stroke=\"#323232\" fill=\"url(#SVGID_1_)\" r=\"40\" cy=\"50\" cx=\"50\" style=\"stroke:rgb(50, 50, 50);animation-play-state:paused\" data-v-3634cf25></circle> <path d=\"M31.5 68.5l37-37\" stroke-miterlimit=\"10\" stroke-width=\"3.5\" stroke=\"#fff\" fill=\"none\" style=\"stroke:rgb(255, 255, 255);animation-play-state:paused\" data-v-3634cf25></path> <path d=\"M68.5 68.5l-37-37\" stroke-miterlimit=\"10\" stroke-width=\"3.5\" stroke=\"#fff\" fill=\"none\" style=\"stroke:rgb(255, 255, 255);animation-play-state:paused\" data-v-3634cf25></path> "),_c('metadata',{staticStyle:{"animation-play-state":"paused"},attrs:{"xmlns:d":"https://loading.io/stock/"}},[_c('d:name',{staticStyle:{"animation-play-state":"paused"}},[_vm._v("fail")]),_vm._v(" "),_c('d:tags',{staticStyle:{"animation-play-state":"paused"}},[_vm._v("fail,reject,deny,negative,refuse,error,cancel,drop,warning")]),_vm._v(" "),_c('d:license',{staticStyle:{"animation-play-state":"paused"}},[_vm._v("by")]),_vm._v(" "),_c('d:slug',{staticStyle:{"animation-play-state":"paused"}},[_vm._v("a8gaot")])],1)],2)])]),_vm._ssrNode(" <p class=\"text\" data-v-3634cf25>"+_vm._ssrEscape(_vm._s(_vm.postTitle))+"</p>")],2)])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Modals/WarningMessage.vue?vue&type=template&id=3634cf25&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Modals/WarningMessage.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var WarningMessagevue_type_script_lang_js_ = ({props:["postTitle"],data(){return{sendReqModal:true};}});
// CONCATENATED MODULE: ./components/Modals/WarningMessage.vue?vue&type=script&lang=js&
 /* harmony default export */ var Modals_WarningMessagevue_type_script_lang_js_ = (WarningMessagevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/Modals/WarningMessage.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(94)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Modals_WarningMessagevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "3634cf25",
  "7ac501f1"
  
)

/* harmony default export */ var WarningMessage = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=_id.js.map