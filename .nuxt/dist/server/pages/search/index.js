exports.ids = [46,18,20,21];
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

/***/ 106:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(121);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("e2b5f9cc", content, true, context)
};

/***/ }),

/***/ 120:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LoadingOnBlocks_vue_vue_type_style_index_0_id_584c8069_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(106);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LoadingOnBlocks_vue_vue_type_style_index_0_id_584c8069_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LoadingOnBlocks_vue_vue_type_style_index_0_id_584c8069_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LoadingOnBlocks_vue_vue_type_style_index_0_id_584c8069_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LoadingOnBlocks_vue_vue_type_style_index_0_id_584c8069_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 121:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "@media(max-width:543px){.popular__container .img-fluid[data-v-584c8069]{height:170px!important;-o-object-fit:cover!important;object-fit:cover!important}.other__item__banner--carousel .b-carousel .carousel-inner .b-carousel-slide img[data-v-584c8069]{min-height:250px!important}}.other__item__banner--carousel .b-carousel .carousel-inner .b-carousel-slide img[data-v-584c8069]{min-height:450px}.success-info[data-v-584c8069]{position:fixed;top:10px;right:20px;width:320px;z-index:12345}div.card-row[data-v-584c8069]{display:flex;margin:0 -10px;flex-wrap:wrap}.hover-shadow[data-v-584c8069]:hover{box-shadow:0 1px 10px rgba(0,0,0,.18)}div.card-5[data-v-584c8069]{width:20%;padding:0 10px}div.card-4[data-v-584c8069]{width:25%;padding:0 10px}div.card-3[data-v-584c8069]{width:33.3333333333%;padding:0 10px}@media(max-width:1020px){div.card-4[data-v-584c8069],div.card-5[data-v-584c8069]{width:33.3333333333%}}@media(max-width:768px){div.card-3[data-v-584c8069],div.card-4[data-v-584c8069],div.card-5[data-v-584c8069]{width:50%}.catalog__container[data-v-584c8069]{padding-top:5px!important}.filtr__section .catalog__page__filtr__box[data-v-584c8069]{position:relative!important;top:unset!important}.catalog__container .catalog__filtraiton__box .filtraiton__form__box .filtraiton__form--submit[data-v-584c8069]{margin-bottom:0!important}.catalog__container .catalog__page__about[data-v-584c8069]{padding-left:0!important}}@-webkit-keyframes move__360-data-v-584c8069{0%{transform:translateX(0deg)}to{transform:translateX(1turn)}}@keyframes move__360-data-v-584c8069{0%{transform:translateX(0deg)}to{transform:translateX(1turn)}}h6.error-text[data-v-584c8069]{font-size:12px;color:red;margin-bottom:0}h1.title-form[data-v-584c8069]{font-size:24px;text-align:center}.popular__container[data-v-584c8069]{margin-top:40px}.popular__container .popular__heading[data-v-584c8069]{font-family:Roboto,sans-serif;font-weight:500;font-size:48px;color:#f7931e;margin-bottom:40px;text-shadow:0 0 3px rgba(247,147,30,.3);display:inline-block}.popular__container .popular__item-box[data-v-584c8069]{display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap}.popular__container .popular__item-box[data-v-584c8069]:after{content:\"\";flex:0 1 32%}.popular__container .popular__item-box .popular__items[data-v-584c8069]{flex:0 0 auto;width:222px;height:370px;background-color:#fff;box-shadow:0 1px 3px rgba(0,0,0,.12);border-radius:5px;overflow:hidden;margin:0 2px 37px;cursor:pointer;transition:all .2s}.popular__container .popular__item-box .popular__items[data-v-584c8069]:hover{transform:scale(1.07)}.popular__container .popular__item-box .popular__items[data-v-584c8069]:hover:after{opacity:0}.popular__container .popular__item-box .popular__items[data-v-584c8069]:active{outline:none;transform:scale(1.03)}.popular__container .popular__item-box .popular__items .popular__items__img[data-v-584c8069]{width:222px;height:222px}.popular__container .popular__item-box .popular__items .popular__items__desription[data-v-584c8069]{padding-left:16px;display:flex;flex-direction:column;justify-content:flex-start;position:relative}.popular__container .popular__item-box .popular__items .popular__items__desription .name__rating[data-v-584c8069]{margin-top:2px;display:flex;justify-content:space-between;align-items:center;padding-right:10px}.popular__container .popular__item-box .popular__items .popular__items__desription .name__rating .magazine__item--rating[data-v-584c8069]{display:flex;align-items:center}.popular__container .popular__item-box .popular__items .popular__items__desription .name__rating .magazine__item--rating img[data-v-584c8069]{width:12px;height:12px;margin-right:2px}.popular__container .popular__item-box .popular__items .popular__items__desription .name__rating .magazine__item--rating span[data-v-584c8069]{color:#666;opacity:.7;font-size:10px}.popular__container .popular__item-box .popular__items .popular__items__desription--name[data-v-584c8069]{margin-top:5px;font-family:Roboto;font-weight:500;font-size:14px;line-height:16px;opacity:.7;color:#666}.popular__container .popular__item-box .popular__items .popular__items__desription--categorie[data-v-584c8069]{margin:9px 0;font-family:Roboto;font-weight:700;font-size:16px;line-height:100%;color:#000;height:60px}.popular__container .popular__item-box .popular__items .popular__items__desription--price[data-v-584c8069]{font-family:Roboto;font-weight:700;font-size:20px;line-height:100%;color:#219ebc}.popular__container .popular__item-box .popular__items .popular__items__desription--old--price[data-v-584c8069]{margin-bottom:2px;font-size:14px;color:#f7931e;text-decoration:line-through}.popular__container .popular__btn[data-v-584c8069],.popular__container .popular__btn[data-v-584c8069]:link,.popular__container .popular__btn[data-v-584c8069]:visited{display:block;border-radius:5px;transition:all .2s;width:224px;height:50px;margin:20px auto 0;text-align:center;padding:10px;text-decoration:none;font-family:inherit;font-weight:500;font-size:18px;color:hsla(0,0%,100%,.9);background-color:#f7931e;border:none;cursor:pointer}.popular__container .popular__btn[data-v-584c8069]:hover{transform:scale(1.07)}.popular__container .popular__btn[data-v-584c8069]:hover:after{opacity:0}.popular__container .popular__btn[data-v-584c8069]:active{outline:none;transform:scale(1.03)}.popular__container .popular__btn[data-v-584c8069]:active,.popular__container .popular__btn[data-v-584c8069]:hover{background-color:#fff;color:#f7931e;border:1px solid #f7931e}.popular__container .popular__dropdown__box[data-v-584c8069]{position:relative}.popular__container .popular__dropdown__box .popular__dropdown--btn[data-v-584c8069]{width:170px;height:36px;border:1px solid #f7931e;border-radius:5px;background-color:transparent;padding:0 10px;font-family:Roboto;font-weight:500;font-size:16px;color:#f7931e;display:flex;justify-content:space-between;align-items:center}.popular__container .popular__dropdown__box .popular__dropdown--btn:hover+.popular__dropdown__content[data-v-584c8069]{visibility:visible;opacity:1}.popular__container .popular__dropdown__box .popular__dropdown__content[data-v-584c8069]{position:absolute;left:0;top:36px;width:170px;display:flex;flex-direction:column;justify-content:center;transition:all .2s;visibility:hidden;opacity:0;border-radius:5px;overflow:hidden;box-shadow:0 2px 6px rgba(0,0,0,.3)}.popular__container .popular__dropdown__box .popular__dropdown__content .popular__dropdown--link[data-v-584c8069]{color:#f7931e;background-color:#fcf6f6;padding:5px;text-decoration:none}.popular__container .popular__dropdown__box .popular__dropdown__content .popular__dropdown--link[data-v-584c8069]:active,.popular__container .popular__dropdown__box .popular__dropdown__content .popular__dropdown--link[data-v-584c8069]:hover{font-weight:500}.popular__container .popular__dropdown__box .popular__dropdown__content[data-v-584c8069]:active,.popular__container .popular__dropdown__box .popular__dropdown__content[data-v-584c8069]:hover{visibility:visible;opacity:1}@media only screen and (max-width:1440px)and (min-width:1200px){.popular__container .popular__item-box[data-v-584c8069]{padding:0 4px}}@media only screen and (max-width:1200px)and (min-width:765px){.popular__container[data-v-584c8069]{padding:20px}.popular__container .popular__item-box .popular__items[data-v-584c8069]{width:229px;height:381.67px;margin-bottom:22px}.popular__container .popular__item-box .popular__items .popular__items__img[data-v-584c8069]{width:230px;height:230px}}@media only screen and (max-width:765px){.popular__container[data-v-584c8069]{padding:16px}.popular__container .popular__heading[data-v-584c8069]{font-size:24px;margin-bottom:28px}.popular__container .popular__item-box .popular__items[data-v-584c8069]{width:164px;height:273px;margin-bottom:14px}.popular__container .popular__item-box .popular__items .popular__items__img[data-v-584c8069]{width:164px;height:164px}.popular__container .popular__item-box .popular__items .popular__items__desription[data-v-584c8069]{padding-left:12px}.popular__container .popular__item-box .popular__items .popular__items__desription--name[data-v-584c8069]{margin-top:3.7px;font-size:10px}.popular__container .popular__item-box .popular__items .popular__items__desription--categorie[data-v-584c8069]{margin:6.6px 0 0;font-size:12px;height:50px;padding:0}.popular__container .popular__item-box .popular__items .popular__items__desription--price[data-v-584c8069]{font-size:14px}.popular__container .popular__item-box .popular__items .popular__items__desription--old--price[data-v-584c8069]{font-size:10px}.popular__container .popular__btn[data-v-584c8069],.popular__container .popular__btn[data-v-584c8069]:link,.popular__container .popular__btn[data-v-584c8069]:visited{width:160px;height:35px;margin-top:18px;padding:8px;font-size:12px}}@media only screen and (max-width:365px){.popular__container[data-v-584c8069]{padding:14px}.popular__container .popular__heading[data-v-584c8069]{font-size:22px;margin-bottom:12px}.popular__container .popular__item-box .popular__items[data-v-584c8069]{width:140px;height:245px}.popular__container .popular__item-box .popular__items .popular__items__img[data-v-584c8069]{width:140px;height:140px}.popular__container .popular__item-box .popular__items .popular__items__desription--categorie[data-v-584c8069]{margin-top:3.6px;font-size:12px;height:2.8em;padding:0}.popular__container .popular__item-box .popular__items .popular__items__desription--price[data-v-584c8069]{font-size:12px}.popular__container .popular__item-box .popular__items .popular__items__desription--old--price[data-v-584c8069]{font-size:9px;bottom:17px}}div.title-box[data-v-584c8069]{padding:40px 0}div.title-box ul li[data-v-584c8069],div.title-box ul li a[data-v-584c8069]{display:inline-block;font-weight:400;font-size:15px;line-height:18px;color:#000}div.title-box ul li a[data-v-584c8069]:hover{color:#f7931e}div.fixvh-category[data-v-584c8069]{z-index:100;width:100%;background-color:#333;opacity:.5}div.category-modal[data-v-584c8069],div.fixvh-category[data-v-584c8069]{position:fixed;top:0;left:0;height:100vh;z-index:1000}div.category-modal[data-v-584c8069]{width:90%;transform:translateX(0);opacity:1;transition:.2s}div.category-modal div.category-nav[data-v-584c8069]{width:100%;height:100%;background-color:#fff;position:relative;z-index:101;display:flex;padding:15px 0}div.category-modal div.category-nav button.close-btn[data-v-584c8069]{position:absolute;width:30px;height:30px;border-radius:100%;background-color:#f7931e;border:none;right:-41px;top:8px;z-index:101}div.category-modal div.category-nav button.close-btn .icon-times[data-v-584c8069]{color:#fff}div.category-modal div.category-nav div.scroll-modal[data-v-584c8069]{overflow-y:scroll;overflow-x:hidden}div.category-modal div.category-nav div.category-left[data-v-584c8069]{width:400px;padding:0 15px;border-right:1px solid #bbb}div.category-modal div.category-nav div.category-left ul[data-v-584c8069]{list-style-type:none;padding-right:15px}div.category-modal div.category-nav div.category-left li button[data-v-584c8069]{display:block;padding:8px 15px;border-radius:5px;font-size:16px;color:#333;font-weight:500;border:none;background-color:transparent;width:100%;text-align:left}div.category-modal div.category-nav div.category-left li button[data-v-584c8069]:hover{color:#f7931e}div.category-modal div.category-nav div.category-left li.active-li button[data-v-584c8069]{background-color:#f7931e;color:#fff}div.category-modal div.category-nav div.category-content[data-v-584c8069]{width:calc(100% - 400px);padding:0 30px;position:relative}div.category-modal div.category-nav div.category-content h3.category-title[data-v-584c8069]{font-size:24px;font-weight:500;margin-bottom:25px}div.category-modal div.category-nav div.category-content div.visible-all a[data-v-584c8069]{font-size:16px;color:#888;margin-bottom:5px;display:block}div.category-modal div.category-nav div.category-content a[data-v-584c8069]{transition:.2s}div.category-modal div.category-nav div.category-content ul[data-v-584c8069]{list-style-type:none;margin-bottom:25px}div.category-modal div.category-nav div.category-content ul a[data-v-584c8069]{font-size:16px;color:#888;margin-bottom:5px;display:block}div.category-modal div.category-nav div.category-content a.click-parent[data-v-584c8069]{font-size:18px;margin-bottom:10px;color:#333;display:block;font-weight:500}div.category-modal div.category-nav div.category-content a[data-v-584c8069]:hover{color:#f7931e!important}div.category-modal div.category-nav div.scroll-modal[data-v-584c8069]::-webkit-scrollbar{width:5px}div.category-modal div.category-nav div.scroll-modal[data-v-584c8069]::-webkit-scrollbar-track{background:#f1f1f1}div.category-modal div.category-nav div.scroll-modal[data-v-584c8069]::-webkit-scrollbar-thumb{background:#f7931e;border-radius:5px}div.category-modal div.category-nav div.scroll-modal[data-v-584c8069]::-webkit-scrollbar-thumb:hover{background:#f7931e}div.hidden-category[data-v-584c8069]{transform:translateX(-104%);opacity:0}div.category-mobile[data-v-584c8069]{position:fixed;z-index:1234454545;top:0;left:0;width:100%;height:100vh;background-color:#fff;padding:15px}div.category-mobile a.visible-all-mobile[data-v-584c8069]{font-size:16px;color:#333}div.category-mobile div.title-t[data-v-584c8069]{display:flex;justify-content:space-between;align-items:center}div.category-mobile div.title-t h3[data-v-584c8069]{font-size:24px;margin-bottom:0}div.category-mobile div.title-t button[data-v-584c8069]{border:none;background-color:transparent}div.category-mobile div.title-t button .close-mobile[data-v-584c8069]{font-size:26px;color:#f7931e}div.category-mobile div.category-acc[data-v-584c8069]{margin-top:20px;max-height:calc(100vh - 100px);overflow-y:scroll}div.category-mobile div.category-acc div.acc-item[data-v-584c8069]{margin-bottom:5px}div.category-mobile div.category-acc div.acc-item button[data-v-584c8069]{width:100%;display:flex;justify-content:space-between;align-items:center;background:#fff7ec;padding:10px 15px;border-radius:5px;border:1px solid #fff7ec}div.category-mobile div.category-acc div.acc-item button b[data-v-584c8069]{font-size:18px}div.category-mobile div.category-acc div.acc-item button .icon-down[data-v-584c8069]{font-size:18px;color:#f7931e}div.category-mobile div.category-acc div.acc-item button .rotate[data-v-584c8069]{transform:rotate(-180deg)}div.category-mobile div.category-acc div.acc-item div.acc-content[data-v-584c8069]{padding:15px}div.category-mobile div.category-acc div.acc-item div.acc-content ul[data-v-584c8069]{list-style-type:none}div.category-mobile div.category-acc div.acc-item div.acc-content ul li a[data-v-584c8069]{color:#333;display:block;font-size:16px!important;font-weight:700;margin-bottom:5px}div.category-mobile div.category-acc div.acc-item div.acc-content ul li a[data-v-584c8069]:active{color:#f7931e}div.category-mobile div.category-acc div.acc-item div.acc-content ul li ul[data-v-584c8069]{margin-bottom:15px}div.category-mobile div.category-acc div.acc-item div.acc-content ul li ul li a[data-v-584c8069]{font-weight:400;color:#777}@media(max-width:800px){div.category-modal div.category-nav div.category-left[data-v-584c8069]{width:280px}div.category-modal div.category-nav div.category-content[data-v-584c8069]{width:calc(100% - 280px)}}.load__conatiner[data-v-584c8069]{display:flex;flex-direction:row;justify-content:center;align-items:center;height:30vh;width:100%}@media only screen and (max-width:2000px){.load__svg[data-v-584c8069]{width:130px;height:130px}}@media only screen and (max-width:600px){.load__conatiner[data-v-584c8069]{height:auto}}@media only screen and (max-width:560px){.load__svg[data-v-584c8069]{width:100px;height:100px}}@media only screen and (max-width:370px){.load__svg[data-v-584c8069]{width:70px;height:70px}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 126:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/UI/LoadingOnBlocks.vue?vue&type=template&id=584c8069&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"load__conatiner"},[_vm._ssrNode("<figure data-v-584c8069>","</figure>",[_vm._ssrNode("<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" width=\"200px\" height=\"200px\" viewBox=\"0 0 100 100\" preserveAspectRatio=\"xMidYMid\" class=\"load__svg\" style=\"margin: auto; background: none; display: block; shape-rendering: auto;\" data-v-584c8069>","</svg>",[_vm._ssrNode("<circle cx=\"50\" cy=\"50\" r=\"32\" stroke-width=\"8\" stroke=\"#023047\" stroke-dasharray=\"50.26548245743669 50.26548245743669\" fill=\"none\" stroke-linecap=\"round\" data-v-584c8069>","</circle>",[_c('animateTransform',{attrs:{"attributeName":"transform","type":"rotate","dur":"1s","repeatCount":"indefinite","keyTimes":"0;1","values":"0 50 50;360 50 50"}})],1),_vm._ssrNode(" "),_vm._ssrNode("<circle cx=\"50\" cy=\"50\" r=\"23\" stroke-width=\"8\" stroke=\"#f7931e\" stroke-dasharray=\"36.12831551628262 36.12831551628262\" stroke-dashoffset=\"36.12831551628262\" fill=\"none\" stroke-linecap=\"round\" data-v-584c8069>","</circle>",[_c('animateTransform',{attrs:{"attributeName":"transform","type":"rotate","dur":"1s","repeatCount":"indefinite","keyTimes":"0;1","values":"0 50 50;-360 50 50"}})],1)],2)])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/UI/LoadingOnBlocks.vue?vue&type=template&id=584c8069&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/UI/LoadingOnBlocks.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var LoadingOnBlocksvue_type_script_lang_js_ = ({});
// CONCATENATED MODULE: ./components/UI/LoadingOnBlocks.vue?vue&type=script&lang=js&
 /* harmony default export */ var UI_LoadingOnBlocksvue_type_script_lang_js_ = (LoadingOnBlocksvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/UI/LoadingOnBlocks.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(120)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  UI_LoadingOnBlocksvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "584c8069",
  "4b32a179"
  
)

/* harmony default export */ var LoadingOnBlocks = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 156:
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAICAYAAADJEc7MAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACDSURBVHgBhc/LDYAgDAbgVqOJG3gyrMJITOLFfRhFjm5AohFtwUR5BHsgwN+PFLTLtALXsctBbQYqZedRQNdr3jfgaL3AX/jgD3GvY3g2kg6mhiPEvWQwBEJA6zQgBUjBZ+wSGpQx+L6aYx8UEF9jPFKC4fl/gjKY4QAzVIQR5iogrhty0ltpVC/ZMQAAAABJRU5ErkJggg=="

/***/ }),

/***/ 173:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(224);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("7dc715bc", content, true, context)
};

/***/ }),

/***/ 223:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(173);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 224:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(105);
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(156);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "@media(max-width:543px){.popular__container .img-fluid{height:170px!important;-o-object-fit:cover!important;object-fit:cover!important}.other__item__banner--carousel .b-carousel .carousel-inner .b-carousel-slide img{min-height:250px!important}}.other__item__banner--carousel .b-carousel .carousel-inner .b-carousel-slide img{min-height:450px}.success-info{position:fixed;top:10px;right:20px;width:320px;z-index:12345}div.card-row{display:flex;margin:0 -10px;flex-wrap:wrap}.hover-shadow:hover{box-shadow:0 1px 10px rgba(0,0,0,.18)}div.card-5{width:20%;padding:0 10px}div.card-4{width:25%;padding:0 10px}div.card-3{width:33.3333333333%;padding:0 10px}@media(max-width:1020px){div.card-4,div.card-5{width:33.3333333333%}}@media(max-width:768px){div.card-3,div.card-4,div.card-5{width:50%}.catalog__container{padding-top:5px!important}.filtr__section .catalog__page__filtr__box{position:relative!important;top:unset!important}.catalog__container .catalog__filtraiton__box .filtraiton__form__box .filtraiton__form--submit{margin-bottom:0!important}.catalog__container .catalog__page__about{padding-left:0!important}}@-webkit-keyframes move__360{0%{transform:translateX(0deg)}to{transform:translateX(1turn)}}@keyframes move__360{0%{transform:translateX(0deg)}to{transform:translateX(1turn)}}h6.error-text{font-size:12px;color:red;margin-bottom:0}h1.title-form{font-size:24px;text-align:center}.popular__container{margin-top:40px}.popular__container .popular__heading{font-family:Roboto,sans-serif;font-weight:500;font-size:48px;color:#f7931e;margin-bottom:40px;text-shadow:0 0 3px rgba(247,147,30,.3);display:inline-block}.popular__container .popular__item-box{display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap}.popular__container .popular__item-box:after{content:\"\";flex:0 1 32%}.popular__container .popular__item-box .popular__items{flex:0 0 auto;width:222px;height:370px;background-color:#fff;box-shadow:0 1px 3px rgba(0,0,0,.12);border-radius:5px;overflow:hidden;margin:0 2px 37px;cursor:pointer;transition:all .2s}.popular__container .popular__item-box .popular__items:hover{transform:scale(1.07)}.popular__container .popular__item-box .popular__items:hover:after{opacity:0}.popular__container .popular__item-box .popular__items:active{outline:none;transform:scale(1.03)}.popular__container .popular__item-box .popular__items .popular__items__img{width:222px;height:222px}.popular__container .popular__item-box .popular__items .popular__items__desription{padding-left:16px;display:flex;flex-direction:column;justify-content:flex-start;position:relative}.popular__container .popular__item-box .popular__items .popular__items__desription .name__rating{margin-top:2px;display:flex;justify-content:space-between;align-items:center;padding-right:10px}.popular__container .popular__item-box .popular__items .popular__items__desription .name__rating .magazine__item--rating{display:flex;align-items:center}.popular__container .popular__item-box .popular__items .popular__items__desription .name__rating .magazine__item--rating img{width:12px;height:12px;margin-right:2px}.popular__container .popular__item-box .popular__items .popular__items__desription .name__rating .magazine__item--rating span{color:#666;opacity:.7;font-size:10px}.popular__container .popular__item-box .popular__items .popular__items__desription--name{margin-top:5px;font-family:Roboto;font-weight:500;font-size:14px;line-height:16px;opacity:.7;color:#666}.popular__container .popular__item-box .popular__items .popular__items__desription--categorie{margin:9px 0;font-family:Roboto;font-weight:700;font-size:16px;line-height:100%;color:#000;height:60px}.popular__container .popular__item-box .popular__items .popular__items__desription--price{font-family:Roboto;font-weight:700;font-size:20px;line-height:100%;color:#219ebc}.popular__container .popular__item-box .popular__items .popular__items__desription--old--price{margin-bottom:2px;font-size:14px;color:#f7931e;text-decoration:line-through}.popular__container .popular__btn,.popular__container .popular__btn:link,.popular__container .popular__btn:visited{display:block;border-radius:5px;transition:all .2s;width:224px;height:50px;margin:20px auto 0;text-align:center;padding:10px;text-decoration:none;font-family:inherit;font-weight:500;font-size:18px;color:hsla(0,0%,100%,.9);background-color:#f7931e;border:none;cursor:pointer}.popular__container .popular__btn:hover{transform:scale(1.07)}.popular__container .popular__btn:hover:after{opacity:0}.popular__container .popular__btn:active{outline:none;transform:scale(1.03)}.popular__container .popular__btn:active,.popular__container .popular__btn:hover{background-color:#fff;color:#f7931e;border:1px solid #f7931e}.popular__container .popular__dropdown__box{position:relative}.popular__container .popular__dropdown__box .popular__dropdown--btn{width:170px;height:36px;border:1px solid #f7931e;border-radius:5px;background-color:transparent;padding:0 10px;font-family:Roboto;font-weight:500;font-size:16px;color:#f7931e;display:flex;justify-content:space-between;align-items:center}.popular__container .popular__dropdown__box .popular__dropdown--btn:hover+.popular__dropdown__content{visibility:visible;opacity:1}.popular__container .popular__dropdown__box .popular__dropdown__content{position:absolute;left:0;top:36px;width:170px;display:flex;flex-direction:column;justify-content:center;transition:all .2s;visibility:hidden;opacity:0;border-radius:5px;overflow:hidden;box-shadow:0 2px 6px rgba(0,0,0,.3)}.popular__container .popular__dropdown__box .popular__dropdown__content .popular__dropdown--link{color:#f7931e;background-color:#fcf6f6;padding:5px;text-decoration:none}.popular__container .popular__dropdown__box .popular__dropdown__content .popular__dropdown--link:active,.popular__container .popular__dropdown__box .popular__dropdown__content .popular__dropdown--link:hover{font-weight:500}.popular__container .popular__dropdown__box .popular__dropdown__content:active,.popular__container .popular__dropdown__box .popular__dropdown__content:hover{visibility:visible;opacity:1}@media only screen and (max-width:1440px)and (min-width:1200px){.popular__container .popular__item-box{padding:0 4px}}@media only screen and (max-width:1200px)and (min-width:765px){.popular__container{padding:20px}.popular__container .popular__item-box .popular__items{width:229px;height:381.67px;margin-bottom:22px}.popular__container .popular__item-box .popular__items .popular__items__img{width:230px;height:230px}}@media only screen and (max-width:765px){.popular__container{padding:16px}.popular__container .popular__heading{font-size:24px;margin-bottom:28px}.popular__container .popular__item-box .popular__items{width:164px;height:273px;margin-bottom:14px}.popular__container .popular__item-box .popular__items .popular__items__img{width:164px;height:164px}.popular__container .popular__item-box .popular__items .popular__items__desription{padding-left:12px}.popular__container .popular__item-box .popular__items .popular__items__desription--name{margin-top:3.7px;font-size:10px}.popular__container .popular__item-box .popular__items .popular__items__desription--categorie{margin:6.6px 0 0;font-size:12px;height:50px;padding:0}.popular__container .popular__item-box .popular__items .popular__items__desription--price{font-size:14px}.popular__container .popular__item-box .popular__items .popular__items__desription--old--price{font-size:10px}.popular__container .popular__btn,.popular__container .popular__btn:link,.popular__container .popular__btn:visited{width:160px;height:35px;margin-top:18px;padding:8px;font-size:12px}}@media only screen and (max-width:365px){.popular__container{padding:14px}.popular__container .popular__heading{font-size:22px;margin-bottom:12px}.popular__container .popular__item-box .popular__items{width:140px;height:245px}.popular__container .popular__item-box .popular__items .popular__items__img{width:140px;height:140px}.popular__container .popular__item-box .popular__items .popular__items__desription--categorie{margin-top:3.6px;font-size:12px;height:2.8em;padding:0}.popular__container .popular__item-box .popular__items .popular__items__desription--price{font-size:12px}.popular__container .popular__item-box .popular__items .popular__items__desription--old--price{font-size:9px;bottom:17px}}div.title-box{padding:40px 0}div.title-box ul li,div.title-box ul li a{display:inline-block;font-weight:400;font-size:15px;line-height:18px;color:#000}div.title-box ul li a:hover{color:#f7931e}div.fixvh-category{z-index:100;width:100%;background-color:#333;opacity:.5}div.category-modal,div.fixvh-category{position:fixed;top:0;left:0;height:100vh;z-index:1000}div.category-modal{width:90%;transform:translateX(0);opacity:1;transition:.2s}div.category-modal div.category-nav{width:100%;height:100%;background-color:#fff;position:relative;z-index:101;display:flex;padding:15px 0}div.category-modal div.category-nav button.close-btn{position:absolute;width:30px;height:30px;border-radius:100%;background-color:#f7931e;border:none;right:-41px;top:8px;z-index:101}div.category-modal div.category-nav button.close-btn .icon-times{color:#fff}div.category-modal div.category-nav div.scroll-modal{overflow-y:scroll;overflow-x:hidden}div.category-modal div.category-nav div.category-left{width:400px;padding:0 15px;border-right:1px solid #bbb}div.category-modal div.category-nav div.category-left ul{list-style-type:none;padding-right:15px}div.category-modal div.category-nav div.category-left li button{display:block;padding:8px 15px;border-radius:5px;font-size:16px;color:#333;font-weight:500;border:none;background-color:transparent;width:100%;text-align:left}div.category-modal div.category-nav div.category-left li button:hover{color:#f7931e}div.category-modal div.category-nav div.category-left li.active-li button{background-color:#f7931e;color:#fff}div.category-modal div.category-nav div.category-content{width:calc(100% - 400px);padding:0 30px;position:relative}div.category-modal div.category-nav div.category-content h3.category-title{font-size:24px;font-weight:500;margin-bottom:25px}div.category-modal div.category-nav div.category-content div.visible-all a{font-size:16px;color:#888;margin-bottom:5px;display:block}div.category-modal div.category-nav div.category-content a{transition:.2s}div.category-modal div.category-nav div.category-content ul{list-style-type:none;margin-bottom:25px}div.category-modal div.category-nav div.category-content ul a{font-size:16px;color:#888;margin-bottom:5px;display:block}div.category-modal div.category-nav div.category-content a.click-parent{font-size:18px;margin-bottom:10px;color:#333;display:block;font-weight:500}div.category-modal div.category-nav div.category-content a:hover{color:#f7931e!important}div.category-modal div.category-nav div.scroll-modal::-webkit-scrollbar{width:5px}div.category-modal div.category-nav div.scroll-modal::-webkit-scrollbar-track{background:#f1f1f1}div.category-modal div.category-nav div.scroll-modal::-webkit-scrollbar-thumb{background:#f7931e;border-radius:5px}div.category-modal div.category-nav div.scroll-modal::-webkit-scrollbar-thumb:hover{background:#f7931e}div.hidden-category{transform:translateX(-104%);opacity:0}div.category-mobile{position:fixed;z-index:1234454545;top:0;left:0;width:100%;height:100vh;background-color:#fff;padding:15px}div.category-mobile a.visible-all-mobile{font-size:16px;color:#333}div.category-mobile div.title-t{display:flex;justify-content:space-between;align-items:center}div.category-mobile div.title-t h3{font-size:24px;margin-bottom:0}div.category-mobile div.title-t button{border:none;background-color:transparent}div.category-mobile div.title-t button .close-mobile{font-size:26px;color:#f7931e}div.category-mobile div.category-acc{margin-top:20px;max-height:calc(100vh - 100px);overflow-y:scroll}div.category-mobile div.category-acc div.acc-item{margin-bottom:5px}div.category-mobile div.category-acc div.acc-item button{width:100%;display:flex;justify-content:space-between;align-items:center;background:#fff7ec;padding:10px 15px;border-radius:5px;border:1px solid #fff7ec}div.category-mobile div.category-acc div.acc-item button b{font-size:18px}div.category-mobile div.category-acc div.acc-item button .icon-down{font-size:18px;color:#f7931e}div.category-mobile div.category-acc div.acc-item button .rotate{transform:rotate(-180deg)}div.category-mobile div.category-acc div.acc-item div.acc-content{padding:15px}div.category-mobile div.category-acc div.acc-item div.acc-content ul{list-style-type:none}div.category-mobile div.category-acc div.acc-item div.acc-content ul li a{color:#333;display:block;font-size:16px!important;font-weight:700;margin-bottom:5px}div.category-mobile div.category-acc div.acc-item div.acc-content ul li a:active{color:#f7931e}div.category-mobile div.category-acc div.acc-item div.acc-content ul li ul{margin-bottom:15px}div.category-mobile div.category-acc div.acc-item div.acc-content ul li ul li a{font-weight:400;color:#777}@media(max-width:800px){div.category-modal div.category-nav div.category-left{width:280px}div.category-modal div.category-nav div.category-content{width:calc(100% - 280px)}}.filtr__section .search__noData{height:50vh;display:flex}.filtr__section .search__noData .popular__heading{margin-top:10%;text-align:center}.filtr__section .product-show .container .title-box{padding-bottom:0}.filtr__section .catalog__page__filtr__box{margin-top:0;display:flex;justify-content:flex-end}.filtr__section .catalog__page__filtr__box .popular__dropdown__box .person__home--description span{font-family:Roboto,sans-serif;font-weight:500;font-size:15px;line-height:28px;color:#000}.filtr__section .catalog__page__filtr__box .popular__dropdown__box .person__home--description input,.filtr__section .catalog__page__filtr__box .popular__dropdown__box .person__home--description select{width:180px;border:1.4px solid #f7931e;outline:none;background-color:transparent;padding:3px 10px;border-radius:5px;text-align:left;font-family:Roboto,sans-serif;color:#f7931e;font-weight:500;font-size:16px;line-height:28px;display:flex;justify-content:space-between;align-items:center}.filtr__section .catalog__page__filtr__box .popular__dropdown__box .person__home--description input::-webkit-inner-spin-button,.filtr__section .catalog__page__filtr__box .popular__dropdown__box .person__home--description input::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}.filtr__section .catalog__page__filtr__box .popular__dropdown__box .person__home--description input[type=number]{-moz-appearance:textfield}.filtr__section .catalog__page__filtr__box .popular__dropdown__box .person__home--description select{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-image:url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");background-repeat:no-repeat;background-position:97% 50%}.catalog__container{margin-top:15px;display:flex}.catalog__container .catalog__filtraiton__box{flex-shrink:0;flex-basis:230px;padding:0 8px}.catalog__container .catalog__filtraiton__box .filtraiton__header{font-family:Roboto;font-size:18px;line-height:100%;color:#000;padding-bottom:13px;border-bottom:1px solid hsla(0,0%,40%,.5)}.catalog__container .catalog__filtraiton__box .filtraiton__header:not(:first-child){padding-top:13px}.catalog__container .catalog__filtraiton__box .filtraiton__form__box{padding:5px 0}.catalog__container .catalog__filtraiton__box .filtraiton__form__box .input__range{padding:18px 4px 9px}.catalog__container .catalog__filtraiton__box .filtraiton__form__box .center__input__label{display:flex;align-items:center}.catalog__container .catalog__filtraiton__box .filtraiton__form__box .center__input__label .filtraiton__form--input{width:16px;height:16px}.catalog__container .catalog__filtraiton__box .filtraiton__form__box .center__input__label .filtraiton__form--input,.catalog__container .catalog__filtraiton__box .filtraiton__form__box .center__input__label .filtraiton__form--label{cursor:pointer;padding:0;margin:0 0 8px}.catalog__container .catalog__filtraiton__box .filtraiton__form__box .center__input__label .filtraiton__form--input:hover,.catalog__container .catalog__filtraiton__box .filtraiton__form__box .center__input__label .filtraiton__form--label:hover{opacity:.7}.catalog__container .catalog__filtraiton__box .filtraiton__form__box .center__input__label .filtraiton__form--label{font-size:16px;font-weight:500;padding:0 10px}.catalog__container .catalog__filtraiton__box .filtraiton__form__box .filtraiton__form--submit{margin-top:15px;margin-bottom:50px;background:#003466;border-radius:5px;width:119px;height:36px;font-size:14px;color:#fff;transition:all .2s}.catalog__container .catalog__filtraiton__box .filtraiton__form__box .filtraiton__form--submit:hover{transform:scale(1.07)}.catalog__container .catalog__filtraiton__box .filtraiton__form__box .filtraiton__form--submit:hover:after{opacity:0}.catalog__container .catalog__filtraiton__box .filtraiton__form__box .filtraiton__form--submit:active{outline:none;transform:scale(1.03)}.catalog__container .catalog__filtraiton__box .filtraiton__form__box .filtraiton__form--submit:hover{background-color:rgba(0,52,102,.9)}.catalog__container .catalog__page__about{margin-bottom:40px;flex-grow:1;padding-left:20px}.catalog__container .catalog__page__about .popular__container{margin:0;padding:0}.catalog__container .catalog__page__about .catalog__page__btn--box{margin:70px 0;height:auto;display:flex;justify-content:flex-end;align-items:center}.catalog__container .catalog__page__about .catalog__page__btn--box .catalog__page--btn{background-color:#ddd;width:36px;height:31px;border-radius:5px;color:#252424;font-weight:700;display:flex;justify-content:center;align-items:center}.catalog__container .catalog__page__about .catalog__page__btn--box .catalog__page--btn:not(:last-child){margin-right:15px}.catalog__container .catalog__page__about .catalog__page__btn--box .catalog__page--btn--active{background-color:#f7931e;color:#fff}@media only screen and (max-width:1200px){.catalog__container{margin-top:0}}@media only screen and (max-width:960px){.catalog__container .catalog__filtraiton__box{flex-basis:245px}}@media only screen and (max-width:768px){.catalog__container .catalog__page__about .catalog__page__btn--box .catalog__page--btn{width:31px;height:27px}}@media only screen and (max-width:633px){.catalog__container .catalog__filtraiton__box{flex-basis:225px}}@media only screen and (max-width:602px){.catalog__container{flex-wrap:wrap}.catalog__container .catalog__filtraiton__box{flex-basis:100%}.catalog__container .catalog__filtraiton__box .submit__box{display:flex;justify-content:center}.catalog__container .catalog__page__about .catalog__page__btn--box{justify-content:center}.filtr__section{position:relative}.filtr__section .catalog__page__filtr__box{justify-content:flex-start;width:100%}}@media only screen and (max-width:395px){.catalog__container .catalog__page__about .popular__item-box{justify-content:space-between}}@media only screen and (max-width:370px){.catalog__container .catalog__page__about .catalog__page__btn--box{justify-content:space-between}.catalog__container .catalog__page__about .catalog__page__btn--box .catalog__page--btn:not(:last-child){margin-right:0}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 271:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/search/index.vue?vue&type=template&id=09b17744&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',[(!_vm.isGet)?_c('base-loading'):_vm._e(),_vm._ssrNode(" <div class=\"filtr__section\"><div class=\"product-show\"><div class=\"container\"></div></div> <section class=\"container popular__container search__noData\"><div class=\"popular__heading\">"+_vm._ssrEscape("\n                "+_vm._s(_vm.$t("notfound"))+"\n            ")+"</div></section></div> "),_vm._ssrNode("<div class=\"filtr__section\">","</div>",[_vm._ssrNode("<div class=\"product-show\"><div class=\"container\"></div></div> "),_vm._ssrNode("<section class=\"container popular__container catalog__page__filtr__box\">","</section>",[_vm._ssrNode("<div class=\"popular__dropdown__box\">","</div>",[_vm._ssrNode("<div class=\"person__home--description\">","</div>",[_c('select',{directives:[{name:"model",rawName:"v-model",value:(_vm.filter.sort),expression:"filter.sort"}],attrs:{"name":"region","id":"region"},on:{"change":[function($event){var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return val}); _vm.$set(_vm.filter, "sort", $event.target.multiple ? $$selectedVal : $$selectedVal[0])},function($event){return _vm.filterBySort()}]}},[_c('option',{attrs:{"value":"","disabled":"","selected":""}},[_vm._v("\n                            "+_vm._s(_vm.$t("sortBy"))+"\n                        ")]),_vm._v(" "),_c('option',{attrs:{"value":"new"}},[_vm._v(" "+_vm._s(_vm.$t("sortNew"))+" ")]),_vm._v(" "),_c('option',{attrs:{"value":"popular"}},[_vm._v("\n                            "+_vm._s(_vm.$t("sortPop"))+"\n                        ")]),_vm._v(" "),_c('option',{attrs:{"value":"priceDown"}},[_vm._v("\n                            "+_vm._s(_vm.$t("sortUb"))+"\n                        ")]),_vm._v(" "),_c('option',{attrs:{"value":"priceUp"}},[_vm._v("\n                            "+_vm._s(_vm.$t("sortVoz"))+"\n                        ")])])])])]),_vm._ssrNode(" "),_vm._ssrNode("<section class=\"catalog__container container\">","</section>",[(!_vm.isProductOnlyOne)?_vm._ssrNode("<div class=\"catalog__filtraiton__box\">","</div>",[_vm._ssrNode("<form class=\"filtraiton__form__box\">","</form>",[_vm._ssrNode(((!_vm.isSliderPricesEqual)?("<h5 class=\"filtraiton__header\">"+_vm._ssrEscape("\n                        "+_vm._s(_vm.$t("sortPrice"))+"\n                    ")+"</h5>"):"<!---->")+" "),(!_vm.isSliderPricesEqual)?_vm._ssrNode("<div class=\"input__range\">","</div>",[_c('vue-slider',{attrs:{"min":_vm.sliderMinPrice,"max":_vm.sliderMaxPrice,"interval":1,"process-style":{
                                backgroundColor: '#FE9E0D'
                            },"tooltip-style":{
                                backgroundColor: 'black',
                                borderColor: 'black'
                            }},model:{value:(_vm.sliderValue),callback:function ($$v) {_vm.sliderValue=$$v},expression:"sliderValue"}})],1):_vm._e(),_vm._ssrNode(" "+((_vm.brandsOnPage.length > 1)?("<h5 class=\"filtraiton__header\">"+_vm._ssrEscape("\n                        "+_vm._s(_vm.$t("sortBrand"))+"\n                    ")+"</h5>"):"<!---->")+" "+(_vm._ssrList((_vm.brandsOnPage),function(brand){return ("<div class=\"center__input__label\"><input type=\"checkbox\""+(_vm._ssrAttr("id",brand._id))+(_vm._ssrAttr("name",brand))+(_vm._ssrAttr("value",brand._id))+(_vm._ssrAttr("checked",Array.isArray(_vm.filter.brands)?_vm._i(_vm.filter.brands,brand._id)>-1:(_vm.filter.brands)))+" class=\"filtraiton__form--input\"> <label"+(_vm._ssrAttr("for",brand._id))+" class=\"filtraiton__form--label\">"+_vm._ssrEscape("\n                            "+_vm._s(brand.name))+"</label><br></div>")}))+" <div class=\"submit__box\"><input type=\"submit\" value=\"Фильтр\" class=\"filtraiton__form--submit\"></div>")],2)]):_vm._e(),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"catalog__page__about\">","</div>",[(!_vm.filter.isGetData)?_c('loading-on-blocks'):_vm._e(),_vm._ssrNode(" "),(_vm.filter.isGetData && _vm.products.length > 0)?_vm._ssrNode("<section class=\"container popular__container\">","</section>",[_vm._ssrNode("<div class=\"card-row\">","</div>",_vm._l((_vm.products),function(product){return _vm._ssrNode("<div class=\"card-4\">","</div>",[_c('ProductCard',{attrs:{"product":product}})],1)}),0),_vm._ssrNode(" "+((_vm.products.length >= _vm.limit)?("<a href=\"#\" class=\"popular__btn\">Показать ещё</a>"):"<!---->"))],2):_vm._e()],2)],2)],2)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/search/index.vue?vue&type=template&id=09b17744&

// EXTERNAL MODULE: external "core-js/modules/esnext.string.replace-all.js"
var esnext_string_replace_all_js_ = __webpack_require__(76);

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(7);

// EXTERNAL MODULE: ./components/UI/LoadingOnBlocks.vue + 4 modules
var LoadingOnBlocks = __webpack_require__(126);

// EXTERNAL MODULE: ./components/UI/BaseLoading.vue + 4 modules
var BaseLoading = __webpack_require__(85);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/search/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var searchvue_type_script_lang_js_ = ({components:{LoadingOnBlocks: LoadingOnBlocks["default"],BaseLoading: BaseLoading["default"]},data(){return{sliderMaxPrice:0,sliderMinPrice:0,isSliderPricesEqual:false,isProductOnlyOne:false,sliderValue:[5000,100000],linksForTitle:"",categoryLinksForTitle:[],brandsOnPage:[],isGet:false,noData:false,filter:{sort:"",brands:[],start:null,end:null,isGetData:false},products:[],page:1,limit:12};},computed:Object(external_vuex_["mapGetters"])(["searchBody"]),methods:{...Object(external_vuex_["mapActions"])(["searchProduct","productCount"]),...Object(external_vuex_["mapMutations"])(["setSearchBrand","setSearchPriceStart","setSearchPriceEnd","setSearchSort","resetSearchSettings","setSearchShop"]),async fetchAllBrands(){return await this.$axios.$get("brand/all").then(response=>{if(response.success){return response.data;}else{throw new Error("Could not fetch data");}}).catch(err=>console.error(err));},// add to router link on the top of page
addLinksOnTheTopPage(){if(this.searchBody.search.length>0){this.linksForTitle=this.searchBody.search;}else{if(!!this.searchBody.mainCategory.name)this.categoryLinksForTitle.push(this.searchBody.mainCategory);if(!!this.searchBody.childCategory.name)this.categoryLinksForTitle.push(this.searchBody.childCategory);}},// filter brands for page to show
filterBrandForShowOnPage(data,brands){if(data.count>0){brands.forEach(item=>{if(data.brands.includes(item._id)){this.brandsOnPage.push(item);}});}},// filter max end min value in search product and show
filterMaxAndMin(search){if(search.data.length>0){const maxValue=search.data.reduce(function(acc,item){acc.price<item.price?acc=item:acc;return acc;});const minValue=search.data.reduce(function(acc,item){acc.price>item.price?acc=item:acc;return acc;});[this.sliderMinPrice,this.sliderMaxPrice]=[minValue.price,maxValue.price];if(minValue.price===maxValue.price){this.isSliderPricesEqual=true;}this.sliderValue=[minValue.price,maxValue.price];}},// filter products on click on filter
async filterProducts(){const[start,end,brand]=[this.sliderValue[0],this.sliderValue[1],this.filter.brands];const page=this.page;const limit=12;this.setSearchPriceStart(start);this.setSearchPriceEnd(end);this.setSearchBrand(brand);this.filter.isGetData=false;const search=await this.searchProduct({page,limit});this.products=search.data;this.filter.isGetData=true;},// sort products
async filterBySort(){const page=this.page;const limit=12;this.setSearchSort(this.filter.sort);this.filter.isGetData=false;const search=await this.searchProduct({page,limit});this.products=search.data;this.filter.isGetData=true;},//  go to product on click card of product
goToProduct(slug){this.$router.push({name:"product-id",params:{id:slug}});},// update price on currency format
updatePriceFormat(price){const form=new Intl.NumberFormat("en-US").format(price);return form.replaceAll(","," ");},async showProductMore(){this.limit+=12;this.page+=1;const page=this.page;const limit=12;const search=await this.searchProduct({page,limit});search.data.forEach(item=>{this.products.push(item);});}},async mounted(){if(this.$route.query.lang=="uz"){this.$i18n.setLocale("uz");}if(this.$route.query.lang=="ru"){this.$i18n.setLocale("ru");}const page=this.page;const limit=12;let[brands,Allbrands,search]=await Promise.all([this.productCount(),this.fetchAllBrands(),this.searchProduct({page,limit})]);this.products=search.data;this.filter.isGetData=this.isGet=true;// add to router link on the top of page
this.addLinksOnTheTopPage();if(search.data.length===1){this.isProductOnlyOne=true;}else{// filter brands for page to show
this.filterBrandForShowOnPage(brands,Allbrands);//     // filter max end min value in search product and show
this.filterMaxAndMin(search);}if(search.data.length===0)this.noData=true;}});
// CONCATENATED MODULE: ./pages/search/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_searchvue_type_script_lang_js_ = (searchvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/search/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(223)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_searchvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "61820fec"
  
)

/* harmony default export */ var search = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {ProductCard: __webpack_require__(93).default})


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

/***/ 90:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(97);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("96ecd858", content, true, context)
};

/***/ }),

/***/ 93:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/ProductCard.vue?vue&type=template&id=f0aedeb2&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('nuxt-link',{attrs:{"to":{
            name: ("product-id___" + (_vm.$i18n.locale)),
            params: { id: _vm.product.slug }
        }}},[_c('div',{staticClass:"product-card"},[_c('div',{staticClass:"img"},[_c('img',{attrs:{"src":_vm.$cdn + _vm.product.image}})]),_vm._v(" "),_c('div',{staticClass:"product-info"},[_c('h4',[_vm._v(_vm._s(_vm.product.name[_vm.$i18n.locale]))]),_vm._v(" "),(_vm.product.discount != null)?_c('div',[_c('h5',{staticClass:"old-price"},[_vm._v("\n                        "+_vm._s(_vm.beautySum(_vm.product.price))+" "+_vm._s(_vm.$t("sum"))+"\n                    ")]),_vm._v(" "),_c('h5',{staticClass:"price"},[_vm._v("\n                        "+_vm._s(_vm.beautySum(_vm.product.discount))+" "+_vm._s(_vm.$t("sum"))+"\n                    ")])]):_c('div',[_c('h5',{staticClass:"old-price"}),_vm._v(" "),_c('h5',{staticClass:"price"},[_vm._v("\n                        "+_vm._s(_vm.beautySum(_vm.product.price))+" "+_vm._s(_vm.$t("sum"))+"\n                    ")])])])])])],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/ProductCard.vue?vue&type=template&id=f0aedeb2&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/ProductCard.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var ProductCardvue_type_script_lang_js_ = ({props:{product:{type:Object}}});
// CONCATENATED MODULE: ./components/ProductCard.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_ProductCardvue_type_script_lang_js_ = (ProductCardvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/ProductCard.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(96)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_ProductCardvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "f0aedeb2",
  "1a9efd6f"
  
)

/* harmony default export */ var ProductCard = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 96:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductCard_vue_vue_type_style_index_0_id_f0aedeb2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(90);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductCard_vue_vue_type_style_index_0_id_f0aedeb2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductCard_vue_vue_type_style_index_0_id_f0aedeb2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductCard_vue_vue_type_style_index_0_id_f0aedeb2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductCard_vue_vue_type_style_index_0_id_f0aedeb2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 97:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "@media(max-width:543px){.popular__container .img-fluid[data-v-f0aedeb2]{height:170px!important;-o-object-fit:cover!important;object-fit:cover!important}.other__item__banner--carousel .b-carousel .carousel-inner .b-carousel-slide img[data-v-f0aedeb2]{min-height:250px!important}}.other__item__banner--carousel .b-carousel .carousel-inner .b-carousel-slide img[data-v-f0aedeb2]{min-height:450px}.success-info[data-v-f0aedeb2]{position:fixed;top:10px;right:20px;width:320px;z-index:12345}div.card-row[data-v-f0aedeb2]{display:flex;margin:0 -10px;flex-wrap:wrap}.hover-shadow[data-v-f0aedeb2]:hover{box-shadow:0 1px 10px rgba(0,0,0,.18)}div.card-5[data-v-f0aedeb2]{width:20%;padding:0 10px}div.card-4[data-v-f0aedeb2]{width:25%;padding:0 10px}div.card-3[data-v-f0aedeb2]{width:33.3333333333%;padding:0 10px}@media(max-width:1020px){div.card-4[data-v-f0aedeb2],div.card-5[data-v-f0aedeb2]{width:33.3333333333%}}@media(max-width:768px){div.card-3[data-v-f0aedeb2],div.card-4[data-v-f0aedeb2],div.card-5[data-v-f0aedeb2]{width:50%}.catalog__container[data-v-f0aedeb2]{padding-top:5px!important}.filtr__section .catalog__page__filtr__box[data-v-f0aedeb2]{position:relative!important;top:unset!important}.catalog__container .catalog__filtraiton__box .filtraiton__form__box .filtraiton__form--submit[data-v-f0aedeb2]{margin-bottom:0!important}.catalog__container .catalog__page__about[data-v-f0aedeb2]{padding-left:0!important}}@-webkit-keyframes move__360-data-v-f0aedeb2{0%{transform:translateX(0deg)}to{transform:translateX(1turn)}}@keyframes move__360-data-v-f0aedeb2{0%{transform:translateX(0deg)}to{transform:translateX(1turn)}}h6.error-text[data-v-f0aedeb2]{font-size:12px;color:red;margin-bottom:0}h1.title-form[data-v-f0aedeb2]{font-size:24px;text-align:center}.popular__container[data-v-f0aedeb2]{margin-top:40px}.popular__container .popular__heading[data-v-f0aedeb2]{font-family:Roboto,sans-serif;font-weight:500;font-size:48px;color:#f7931e;margin-bottom:40px;text-shadow:0 0 3px rgba(247,147,30,.3);display:inline-block}.popular__container .popular__item-box[data-v-f0aedeb2]{display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap}.popular__container .popular__item-box[data-v-f0aedeb2]:after{content:\"\";flex:0 1 32%}.popular__container .popular__item-box .popular__items[data-v-f0aedeb2]{flex:0 0 auto;width:222px;height:370px;background-color:#fff;box-shadow:0 1px 3px rgba(0,0,0,.12);border-radius:5px;overflow:hidden;margin:0 2px 37px;cursor:pointer;transition:all .2s}.popular__container .popular__item-box .popular__items[data-v-f0aedeb2]:hover{transform:scale(1.07)}.popular__container .popular__item-box .popular__items[data-v-f0aedeb2]:hover:after{opacity:0}.popular__container .popular__item-box .popular__items[data-v-f0aedeb2]:active{outline:none;transform:scale(1.03)}.popular__container .popular__item-box .popular__items .popular__items__img[data-v-f0aedeb2]{width:222px;height:222px}.popular__container .popular__item-box .popular__items .popular__items__desription[data-v-f0aedeb2]{padding-left:16px;display:flex;flex-direction:column;justify-content:flex-start;position:relative}.popular__container .popular__item-box .popular__items .popular__items__desription .name__rating[data-v-f0aedeb2]{margin-top:2px;display:flex;justify-content:space-between;align-items:center;padding-right:10px}.popular__container .popular__item-box .popular__items .popular__items__desription .name__rating .magazine__item--rating[data-v-f0aedeb2]{display:flex;align-items:center}.popular__container .popular__item-box .popular__items .popular__items__desription .name__rating .magazine__item--rating img[data-v-f0aedeb2]{width:12px;height:12px;margin-right:2px}.popular__container .popular__item-box .popular__items .popular__items__desription .name__rating .magazine__item--rating span[data-v-f0aedeb2]{color:#666;opacity:.7;font-size:10px}.popular__container .popular__item-box .popular__items .popular__items__desription--name[data-v-f0aedeb2]{margin-top:5px;font-family:Roboto;font-weight:500;font-size:14px;line-height:16px;opacity:.7;color:#666}.popular__container .popular__item-box .popular__items .popular__items__desription--categorie[data-v-f0aedeb2]{margin:9px 0;font-family:Roboto;font-weight:700;font-size:16px;line-height:100%;color:#000;height:60px}.popular__container .popular__item-box .popular__items .popular__items__desription--price[data-v-f0aedeb2]{font-family:Roboto;font-weight:700;font-size:20px;line-height:100%;color:#219ebc}.popular__container .popular__item-box .popular__items .popular__items__desription--old--price[data-v-f0aedeb2]{margin-bottom:2px;font-size:14px;color:#f7931e;text-decoration:line-through}.popular__container .popular__btn[data-v-f0aedeb2],.popular__container .popular__btn[data-v-f0aedeb2]:link,.popular__container .popular__btn[data-v-f0aedeb2]:visited{display:block;border-radius:5px;transition:all .2s;width:224px;height:50px;margin:20px auto 0;text-align:center;padding:10px;text-decoration:none;font-family:inherit;font-weight:500;font-size:18px;color:hsla(0,0%,100%,.9);background-color:#f7931e;border:none;cursor:pointer}.popular__container .popular__btn[data-v-f0aedeb2]:hover{transform:scale(1.07)}.popular__container .popular__btn[data-v-f0aedeb2]:hover:after{opacity:0}.popular__container .popular__btn[data-v-f0aedeb2]:active{outline:none;transform:scale(1.03)}.popular__container .popular__btn[data-v-f0aedeb2]:active,.popular__container .popular__btn[data-v-f0aedeb2]:hover{background-color:#fff;color:#f7931e;border:1px solid #f7931e}.popular__container .popular__dropdown__box[data-v-f0aedeb2]{position:relative}.popular__container .popular__dropdown__box .popular__dropdown--btn[data-v-f0aedeb2]{width:170px;height:36px;border:1px solid #f7931e;border-radius:5px;background-color:transparent;padding:0 10px;font-family:Roboto;font-weight:500;font-size:16px;color:#f7931e;display:flex;justify-content:space-between;align-items:center}.popular__container .popular__dropdown__box .popular__dropdown--btn:hover+.popular__dropdown__content[data-v-f0aedeb2]{visibility:visible;opacity:1}.popular__container .popular__dropdown__box .popular__dropdown__content[data-v-f0aedeb2]{position:absolute;left:0;top:36px;width:170px;display:flex;flex-direction:column;justify-content:center;transition:all .2s;visibility:hidden;opacity:0;border-radius:5px;overflow:hidden;box-shadow:0 2px 6px rgba(0,0,0,.3)}.popular__container .popular__dropdown__box .popular__dropdown__content .popular__dropdown--link[data-v-f0aedeb2]{color:#f7931e;background-color:#fcf6f6;padding:5px;text-decoration:none}.popular__container .popular__dropdown__box .popular__dropdown__content .popular__dropdown--link[data-v-f0aedeb2]:active,.popular__container .popular__dropdown__box .popular__dropdown__content .popular__dropdown--link[data-v-f0aedeb2]:hover{font-weight:500}.popular__container .popular__dropdown__box .popular__dropdown__content[data-v-f0aedeb2]:active,.popular__container .popular__dropdown__box .popular__dropdown__content[data-v-f0aedeb2]:hover{visibility:visible;opacity:1}@media only screen and (max-width:1440px)and (min-width:1200px){.popular__container .popular__item-box[data-v-f0aedeb2]{padding:0 4px}}@media only screen and (max-width:1200px)and (min-width:765px){.popular__container[data-v-f0aedeb2]{padding:20px}.popular__container .popular__item-box .popular__items[data-v-f0aedeb2]{width:229px;height:381.67px;margin-bottom:22px}.popular__container .popular__item-box .popular__items .popular__items__img[data-v-f0aedeb2]{width:230px;height:230px}}@media only screen and (max-width:765px){.popular__container[data-v-f0aedeb2]{padding:16px}.popular__container .popular__heading[data-v-f0aedeb2]{font-size:24px;margin-bottom:28px}.popular__container .popular__item-box .popular__items[data-v-f0aedeb2]{width:164px;height:273px;margin-bottom:14px}.popular__container .popular__item-box .popular__items .popular__items__img[data-v-f0aedeb2]{width:164px;height:164px}.popular__container .popular__item-box .popular__items .popular__items__desription[data-v-f0aedeb2]{padding-left:12px}.popular__container .popular__item-box .popular__items .popular__items__desription--name[data-v-f0aedeb2]{margin-top:3.7px;font-size:10px}.popular__container .popular__item-box .popular__items .popular__items__desription--categorie[data-v-f0aedeb2]{margin:6.6px 0 0;font-size:12px;height:50px;padding:0}.popular__container .popular__item-box .popular__items .popular__items__desription--price[data-v-f0aedeb2]{font-size:14px}.popular__container .popular__item-box .popular__items .popular__items__desription--old--price[data-v-f0aedeb2]{font-size:10px}.popular__container .popular__btn[data-v-f0aedeb2],.popular__container .popular__btn[data-v-f0aedeb2]:link,.popular__container .popular__btn[data-v-f0aedeb2]:visited{width:160px;height:35px;margin-top:18px;padding:8px;font-size:12px}}@media only screen and (max-width:365px){.popular__container[data-v-f0aedeb2]{padding:14px}.popular__container .popular__heading[data-v-f0aedeb2]{font-size:22px;margin-bottom:12px}.popular__container .popular__item-box .popular__items[data-v-f0aedeb2]{width:140px;height:245px}.popular__container .popular__item-box .popular__items .popular__items__img[data-v-f0aedeb2]{width:140px;height:140px}.popular__container .popular__item-box .popular__items .popular__items__desription--categorie[data-v-f0aedeb2]{margin-top:3.6px;font-size:12px;height:2.8em;padding:0}.popular__container .popular__item-box .popular__items .popular__items__desription--price[data-v-f0aedeb2]{font-size:12px}.popular__container .popular__item-box .popular__items .popular__items__desription--old--price[data-v-f0aedeb2]{font-size:9px;bottom:17px}}div.title-box[data-v-f0aedeb2]{padding:40px 0}div.title-box ul li[data-v-f0aedeb2],div.title-box ul li a[data-v-f0aedeb2]{display:inline-block;font-weight:400;font-size:15px;line-height:18px;color:#000}div.title-box ul li a[data-v-f0aedeb2]:hover{color:#f7931e}div.fixvh-category[data-v-f0aedeb2]{z-index:100;width:100%;background-color:#333;opacity:.5}div.category-modal[data-v-f0aedeb2],div.fixvh-category[data-v-f0aedeb2]{position:fixed;top:0;left:0;height:100vh;z-index:1000}div.category-modal[data-v-f0aedeb2]{width:90%;transform:translateX(0);opacity:1;transition:.2s}div.category-modal div.category-nav[data-v-f0aedeb2]{width:100%;height:100%;background-color:#fff;position:relative;z-index:101;display:flex;padding:15px 0}div.category-modal div.category-nav button.close-btn[data-v-f0aedeb2]{position:absolute;width:30px;height:30px;border-radius:100%;background-color:#f7931e;border:none;right:-41px;top:8px;z-index:101}div.category-modal div.category-nav button.close-btn .icon-times[data-v-f0aedeb2]{color:#fff}div.category-modal div.category-nav div.scroll-modal[data-v-f0aedeb2]{overflow-y:scroll;overflow-x:hidden}div.category-modal div.category-nav div.category-left[data-v-f0aedeb2]{width:400px;padding:0 15px;border-right:1px solid #bbb}div.category-modal div.category-nav div.category-left ul[data-v-f0aedeb2]{list-style-type:none;padding-right:15px}div.category-modal div.category-nav div.category-left li button[data-v-f0aedeb2]{display:block;padding:8px 15px;border-radius:5px;font-size:16px;color:#333;font-weight:500;border:none;background-color:transparent;width:100%;text-align:left}div.category-modal div.category-nav div.category-left li button[data-v-f0aedeb2]:hover{color:#f7931e}div.category-modal div.category-nav div.category-left li.active-li button[data-v-f0aedeb2]{background-color:#f7931e;color:#fff}div.category-modal div.category-nav div.category-content[data-v-f0aedeb2]{width:calc(100% - 400px);padding:0 30px;position:relative}div.category-modal div.category-nav div.category-content h3.category-title[data-v-f0aedeb2]{font-size:24px;font-weight:500;margin-bottom:25px}div.category-modal div.category-nav div.category-content div.visible-all a[data-v-f0aedeb2]{font-size:16px;color:#888;margin-bottom:5px;display:block}div.category-modal div.category-nav div.category-content a[data-v-f0aedeb2]{transition:.2s}div.category-modal div.category-nav div.category-content ul[data-v-f0aedeb2]{list-style-type:none;margin-bottom:25px}div.category-modal div.category-nav div.category-content ul a[data-v-f0aedeb2]{font-size:16px;color:#888;margin-bottom:5px;display:block}div.category-modal div.category-nav div.category-content a.click-parent[data-v-f0aedeb2]{font-size:18px;margin-bottom:10px;color:#333;display:block;font-weight:500}div.category-modal div.category-nav div.category-content a[data-v-f0aedeb2]:hover{color:#f7931e!important}div.category-modal div.category-nav div.scroll-modal[data-v-f0aedeb2]::-webkit-scrollbar{width:5px}div.category-modal div.category-nav div.scroll-modal[data-v-f0aedeb2]::-webkit-scrollbar-track{background:#f1f1f1}div.category-modal div.category-nav div.scroll-modal[data-v-f0aedeb2]::-webkit-scrollbar-thumb{background:#f7931e;border-radius:5px}div.category-modal div.category-nav div.scroll-modal[data-v-f0aedeb2]::-webkit-scrollbar-thumb:hover{background:#f7931e}div.hidden-category[data-v-f0aedeb2]{transform:translateX(-104%);opacity:0}div.category-mobile[data-v-f0aedeb2]{position:fixed;z-index:1234454545;top:0;left:0;width:100%;height:100vh;background-color:#fff;padding:15px}div.category-mobile a.visible-all-mobile[data-v-f0aedeb2]{font-size:16px;color:#333}div.category-mobile div.title-t[data-v-f0aedeb2]{display:flex;justify-content:space-between;align-items:center}div.category-mobile div.title-t h3[data-v-f0aedeb2]{font-size:24px;margin-bottom:0}div.category-mobile div.title-t button[data-v-f0aedeb2]{border:none;background-color:transparent}div.category-mobile div.title-t button .close-mobile[data-v-f0aedeb2]{font-size:26px;color:#f7931e}div.category-mobile div.category-acc[data-v-f0aedeb2]{margin-top:20px;max-height:calc(100vh - 100px);overflow-y:scroll}div.category-mobile div.category-acc div.acc-item[data-v-f0aedeb2]{margin-bottom:5px}div.category-mobile div.category-acc div.acc-item button[data-v-f0aedeb2]{width:100%;display:flex;justify-content:space-between;align-items:center;background:#fff7ec;padding:10px 15px;border-radius:5px;border:1px solid #fff7ec}div.category-mobile div.category-acc div.acc-item button b[data-v-f0aedeb2]{font-size:18px}div.category-mobile div.category-acc div.acc-item button .icon-down[data-v-f0aedeb2]{font-size:18px;color:#f7931e}div.category-mobile div.category-acc div.acc-item button .rotate[data-v-f0aedeb2]{transform:rotate(-180deg)}div.category-mobile div.category-acc div.acc-item div.acc-content[data-v-f0aedeb2]{padding:15px}div.category-mobile div.category-acc div.acc-item div.acc-content ul[data-v-f0aedeb2]{list-style-type:none}div.category-mobile div.category-acc div.acc-item div.acc-content ul li a[data-v-f0aedeb2]{color:#333;display:block;font-size:16px!important;font-weight:700;margin-bottom:5px}div.category-mobile div.category-acc div.acc-item div.acc-content ul li a[data-v-f0aedeb2]:active{color:#f7931e}div.category-mobile div.category-acc div.acc-item div.acc-content ul li ul[data-v-f0aedeb2]{margin-bottom:15px}div.category-mobile div.category-acc div.acc-item div.acc-content ul li ul li a[data-v-f0aedeb2]{font-weight:400;color:#777}@media(max-width:800px){div.category-modal div.category-nav div.category-left[data-v-f0aedeb2]{width:280px}div.category-modal div.category-nav div.category-content[data-v-f0aedeb2]{width:calc(100% - 280px)}}div.product-card[data-v-f0aedeb2]{width:100%;background:#fff;box-shadow:0 1px 3px rgba(0,0,0,.12);border-radius:5px;overflow:hidden;margin-bottom:20px}div.product-card[data-v-f0aedeb2]:hover{box-shadow:0 1px 10px rgba(0,0,0,.18)}div.product-card div.img img[data-v-f0aedeb2]{height:222px;width:100%;-o-object-fit:cover;object-fit:cover}div.product-card div.product-info[data-v-f0aedeb2]{padding:5px 15px}div.product-card div.product-info div.brand[data-v-f0aedeb2]{display:flex;justify-content:space-between;align-items:center;margin-bottom:10px}div.product-card div.product-info div.brand h6[data-v-f0aedeb2]{font-weight:400;font-size:14px;line-height:16px;margin-bottom:0;color:#666}div.product-card div.product-info div.brand div.rating[data-v-f0aedeb2]{display:flex;align-items:center}div.product-card div.product-info div.brand div.rating span[data-v-f0aedeb2]{font-weight:500;font-size:12px;line-height:14px;margin-left:2px;color:#565656}div.product-card div.product-info h4[data-v-f0aedeb2]{height:19px;display:-webkit-box;-webkit-line-clamp:1;-webkit-box-orient:vertical;overflow:hidden;text-overflow:ellipsis;margin-bottom:15px!important;font-weight:500;font-size:16px;line-height:19px;color:#000}div.product-card div.product-info h5.old-price[data-v-f0aedeb2]{text-decoration:line-through;font-weight:700;font-size:14px;line-height:16px;height:16px;margin-bottom:5px;-webkit-text-decoration-color:#2e2e2e;text-decoration-color:#2e2e2e;text-decoration-thickness:1px;color:#f7931e}div.product-card div.product-info h5.price[data-v-f0aedeb2]{font-weight:700;font-size:20px;line-height:100%;margin-bottom:10px;color:#219ebc}@media(max-width:768px){div.product-card div.img img[data-v-f0aedeb2]{height:164px}div.product-card div.product-info[data-v-f0aedeb2]{padding:3px 10px}div.product-card div.product-info div.brand[data-v-f0aedeb2]{margin-bottom:6px}div.product-card div.product-info div.brand h6[data-v-f0aedeb2]{font-size:10px}div.product-card div.product-info h4[data-v-f0aedeb2]{height:14px;display:-webkit-box;-webkit-line-clamp:1;-webkit-box-orient:vertical;overflow:hidden;text-overflow:ellipsis;margin-bottom:15px;font-weight:500;font-size:12px;line-height:14px}div.product-card div.product-info h5.old-price[data-v-f0aedeb2]{text-decoration:line-through;font-weight:700;font-size:12px;line-height:100%;margin-bottom:0!important;-webkit-text-decoration-color:#2e2e2e;text-decoration-color:#2e2e2e;text-decoration-thickness:1px;color:#f7931e}div.product-card div.product-info h5.price[data-v-f0aedeb2]{font-size:14px}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ })

};;
//# sourceMappingURL=index.js.map