exports.ids = [32,6,20];
exports.modules = {

/***/ 108:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(131);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("11c00918", content, true, context)
};

/***/ }),

/***/ 130:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_nuxt_webpack_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FaqQuestions_vue_vue_type_style_index_0_id_2245a05a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(108);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_nuxt_webpack_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FaqQuestions_vue_vue_type_style_index_0_id_2245a05a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_nuxt_webpack_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FaqQuestions_vue_vue_type_style_index_0_id_2245a05a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_nuxt_webpack_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FaqQuestions_vue_vue_type_style_index_0_id_2245a05a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_nuxt_webpack_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FaqQuestions_vue_vue_type_style_index_0_id_2245a05a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 131:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".fixvh[data-v-2245a05a]{position:fixed;top:0;left:0;width:100%;height:100vh;z-index:10;background-color:#333;opacity:.6}button.btn-sm[data-v-2245a05a]{background:#fbfcff;border:1px solid #e5f1fb;border-radius:6px;padding:10px 20px;font-weight:500;font-size:14px;color:#333;margin-right:10px}button.btn-sm-active[data-v-2245a05a]{background:#f7931e;border:1px solid transparent;color:#fff}.modal-card[data-v-2245a05a]{background-color:#fff;border-radius:8px;padding:15px 20px;position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);z-index:12}.modal-card button.otmen[data-v-2245a05a]{background:#c5c5c5!important}.modal-card .modal-title[data-v-2245a05a]{display:flex;justify-content:space-between;align-items:center;margin-bottom:20px}.modal-card .modal-title h2[data-v-2245a05a]{font-size:20px;color:#333}.modal-card .modal-title .times[data-v-2245a05a]{color:#333;font-size:16px}.modal-card .modal-title .times[data-v-2245a05a]:hover{color:#f7931e}@media(max-width:475px){.modal-card[data-v-2245a05a]{width:90%!important}}button[data-v-2245a05a]{cursor:pointer;border:none;background-color:transparent}.btn-simple-active[data-v-2245a05a]{background:#f7931e;border:1px solid transparent;color:#fff}h6.error-text[data-v-2245a05a]{display:none;font-weight:400;font-size:13px;line-height:14px;margin-top:4px;color:#f94040}div.input-form[data-v-2245a05a]{margin-bottom:15px}div.input-form div.input-rel[data-v-2245a05a]{position:relative}div.input-form div.input-rel button.btn-icon[data-v-2245a05a]{position:absolute;right:10px;top:50%;transform:translateY(-50%)}div.input-form div.input-rel button.btn-icon .icon[data-v-2245a05a]{font-size:16px;color:rgba(51,51,51,.2)}div.input-form input[data-v-2245a05a]{width:100%;height:40px;border:1px solid #aaa;border-radius:8px;font-size:16px;padding:0 15px;font-weight:500}div.input-form input[data-v-2245a05a]:hover{border:1px solid #888}div.input-form input[data-v-2245a05a]:focus{outline:none;border:1px solid #f7931e}div.form-error input[data-v-2245a05a]{border:1px solid #f94040!important}div.form-error .error-text[data-v-2245a05a]{display:block!important}.btn-simple[data-v-2245a05a]{background:#fff;border:1px solid #f7931e;border-radius:6px;padding:8px 15px;display:inline-block;font-weight:500;font-size:14px;color:#f7931e}.btn-simple[data-v-2245a05a]:hover{color:#fff;background-color:#f7931e}@media(max-width:543px){.popular__container .img-fluid[data-v-2245a05a]{height:170px!important;-o-object-fit:cover!important;object-fit:cover!important}.other__item__banner--carousel .b-carousel .carousel-inner .b-carousel-slide img[data-v-2245a05a]{min-height:250px!important}}.other__item__banner--carousel .b-carousel .carousel-inner .b-carousel-slide img[data-v-2245a05a]{min-height:450px}.success-info[data-v-2245a05a]{position:fixed;top:10px;right:20px;width:320px;z-index:12345}div.card-row[data-v-2245a05a]{display:flex;margin:0 -10px;flex-wrap:wrap}.hover-shadow[data-v-2245a05a]:hover{box-shadow:0 1px 10px rgba(0,0,0,.18)}div.card-5[data-v-2245a05a]{width:20%;padding:0 10px}div.card-4[data-v-2245a05a]{width:25%;padding:0 10px}div.card-3[data-v-2245a05a]{width:33.3333333333%;padding:0 10px}@media(max-width:1020px){div.card-4[data-v-2245a05a],div.card-5[data-v-2245a05a]{width:33.3333333333%}}@media(max-width:768px){div.card-3[data-v-2245a05a],div.card-4[data-v-2245a05a],div.card-5[data-v-2245a05a]{width:50%}.catalog__container[data-v-2245a05a]{padding-top:5px!important}.filtr__section .catalog__page__filtr__box[data-v-2245a05a]{position:relative!important;top:unset!important}.catalog__container .catalog__filtraiton__box .filtraiton__form__box .filtraiton__form--submit[data-v-2245a05a]{margin-bottom:0!important}.catalog__container .catalog__page__about[data-v-2245a05a]{padding-left:0!important}}@-webkit-keyframes move__360-data-v-2245a05a{0%{transform:translateX(0deg)}to{transform:translateX(1turn)}}@keyframes move__360-data-v-2245a05a{0%{transform:translateX(0deg)}to{transform:translateX(1turn)}}h6.error-text[data-v-2245a05a]{font-size:12px;color:red;margin-bottom:0}h1.title-form[data-v-2245a05a]{font-size:24px;text-align:center}.popular__container[data-v-2245a05a]{margin-top:40px}.popular__container .popular__heading[data-v-2245a05a]{font-family:Roboto,sans-serif;font-weight:500;font-size:48px;color:#f7931e;margin-bottom:40px;text-shadow:0 0 3px rgba(247,147,30,.3);display:inline-block}.popular__container .popular__item-box[data-v-2245a05a]{display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap}.popular__container .popular__item-box[data-v-2245a05a]:after{content:\"\";flex:0 1 32%}.popular__container .popular__item-box .popular__items[data-v-2245a05a]{flex:0 0 auto;width:222px;height:370px;background-color:#fff;box-shadow:0 1px 3px rgba(0,0,0,.12);border-radius:5px;overflow:hidden;margin:0 2px 37px;cursor:pointer;transition:all .2s}.popular__container .popular__item-box .popular__items[data-v-2245a05a]:hover{transform:scale(1.07)}.popular__container .popular__item-box .popular__items[data-v-2245a05a]:hover:after{opacity:0}.popular__container .popular__item-box .popular__items[data-v-2245a05a]:active{outline:none;transform:scale(1.03)}.popular__container .popular__item-box .popular__items .popular__items__img[data-v-2245a05a]{width:222px;height:222px}.popular__container .popular__item-box .popular__items .popular__items__desription[data-v-2245a05a]{padding-left:16px;display:flex;flex-direction:column;justify-content:flex-start;position:relative}.popular__container .popular__item-box .popular__items .popular__items__desription .name__rating[data-v-2245a05a]{margin-top:2px;display:flex;justify-content:space-between;align-items:center;padding-right:10px}.popular__container .popular__item-box .popular__items .popular__items__desription .name__rating .magazine__item--rating[data-v-2245a05a]{display:flex;align-items:center}.popular__container .popular__item-box .popular__items .popular__items__desription .name__rating .magazine__item--rating img[data-v-2245a05a]{width:12px;height:12px;margin-right:2px}.popular__container .popular__item-box .popular__items .popular__items__desription .name__rating .magazine__item--rating span[data-v-2245a05a]{color:#666;opacity:.7;font-size:10px}.popular__container .popular__item-box .popular__items .popular__items__desription--name[data-v-2245a05a]{margin-top:5px;font-family:Roboto;font-weight:500;font-size:14px;line-height:16px;opacity:.7;color:#666}.popular__container .popular__item-box .popular__items .popular__items__desription--categorie[data-v-2245a05a]{margin:9px 0;font-family:Roboto;font-weight:700;font-size:16px;line-height:100%;color:#000;height:60px}.popular__container .popular__item-box .popular__items .popular__items__desription--price[data-v-2245a05a]{font-family:Roboto;font-weight:700;font-size:20px;line-height:100%;color:#219ebc}.popular__container .popular__item-box .popular__items .popular__items__desription--old--price[data-v-2245a05a]{margin-bottom:2px;font-size:14px;color:#f7931e;text-decoration:line-through}.popular__container .popular__btn[data-v-2245a05a],.popular__container .popular__btn[data-v-2245a05a]:link,.popular__container .popular__btn[data-v-2245a05a]:visited{display:block;border-radius:5px;transition:all .2s;width:224px;height:50px;margin:20px auto 0;text-align:center;padding:10px;text-decoration:none;font-family:inherit;font-weight:500;font-size:18px;color:hsla(0,0%,100%,.9);background-color:#f7931e;border:none;cursor:pointer}.popular__container .popular__btn[data-v-2245a05a]:hover{transform:scale(1.07)}.popular__container .popular__btn[data-v-2245a05a]:hover:after{opacity:0}.popular__container .popular__btn[data-v-2245a05a]:active{outline:none;transform:scale(1.03)}.popular__container .popular__btn[data-v-2245a05a]:active,.popular__container .popular__btn[data-v-2245a05a]:hover{background-color:#fff;color:#f7931e;border:1px solid #f7931e}.popular__container .popular__dropdown__box[data-v-2245a05a]{position:relative}.popular__container .popular__dropdown__box .popular__dropdown--btn[data-v-2245a05a]{width:170px;height:36px;border:1px solid #f7931e;border-radius:5px;background-color:transparent;padding:0 10px;font-family:Roboto;font-weight:500;font-size:16px;color:#f7931e;display:flex;justify-content:space-between;align-items:center}.popular__container .popular__dropdown__box .popular__dropdown--btn:hover+.popular__dropdown__content[data-v-2245a05a]{visibility:visible;opacity:1}.popular__container .popular__dropdown__box .popular__dropdown__content[data-v-2245a05a]{position:absolute;left:0;top:36px;width:170px;display:flex;flex-direction:column;justify-content:center;transition:all .2s;visibility:hidden;opacity:0;border-radius:5px;overflow:hidden;box-shadow:0 2px 6px rgba(0,0,0,.3)}.popular__container .popular__dropdown__box .popular__dropdown__content .popular__dropdown--link[data-v-2245a05a]{color:#f7931e;background-color:#fcf6f6;padding:5px;text-decoration:none}.popular__container .popular__dropdown__box .popular__dropdown__content .popular__dropdown--link[data-v-2245a05a]:active,.popular__container .popular__dropdown__box .popular__dropdown__content .popular__dropdown--link[data-v-2245a05a]:hover{font-weight:500}.popular__container .popular__dropdown__box .popular__dropdown__content[data-v-2245a05a]:active,.popular__container .popular__dropdown__box .popular__dropdown__content[data-v-2245a05a]:hover{visibility:visible;opacity:1}@media only screen and (max-width:1440px)and (min-width:1200px){.popular__container .popular__item-box[data-v-2245a05a]{padding:0 4px}}@media only screen and (max-width:1200px)and (min-width:765px){.popular__container[data-v-2245a05a]{padding:20px}.popular__container .popular__item-box .popular__items[data-v-2245a05a]{width:229px;height:381.67px;margin-bottom:22px}.popular__container .popular__item-box .popular__items .popular__items__img[data-v-2245a05a]{width:230px;height:230px}}@media only screen and (max-width:765px){.popular__container[data-v-2245a05a]{padding:16px}.popular__container .popular__heading[data-v-2245a05a]{font-size:24px;margin-bottom:28px}.popular__container .popular__item-box .popular__items[data-v-2245a05a]{width:164px;height:273px;margin-bottom:14px}.popular__container .popular__item-box .popular__items .popular__items__img[data-v-2245a05a]{width:164px;height:164px}.popular__container .popular__item-box .popular__items .popular__items__desription[data-v-2245a05a]{padding-left:12px}.popular__container .popular__item-box .popular__items .popular__items__desription--name[data-v-2245a05a]{margin-top:3.7px;font-size:10px}.popular__container .popular__item-box .popular__items .popular__items__desription--categorie[data-v-2245a05a]{margin:6.6px 0 0;font-size:12px;height:50px;padding:0}.popular__container .popular__item-box .popular__items .popular__items__desription--price[data-v-2245a05a]{font-size:14px}.popular__container .popular__item-box .popular__items .popular__items__desription--old--price[data-v-2245a05a]{font-size:10px}.popular__container .popular__btn[data-v-2245a05a],.popular__container .popular__btn[data-v-2245a05a]:link,.popular__container .popular__btn[data-v-2245a05a]:visited{width:160px;height:35px;margin-top:18px;padding:8px;font-size:12px}}@media only screen and (max-width:365px){.popular__container[data-v-2245a05a]{padding:14px}.popular__container .popular__heading[data-v-2245a05a]{font-size:22px;margin-bottom:12px}.popular__container .popular__item-box .popular__items[data-v-2245a05a]{width:140px;height:245px}.popular__container .popular__item-box .popular__items .popular__items__img[data-v-2245a05a]{width:140px;height:140px}.popular__container .popular__item-box .popular__items .popular__items__desription--categorie[data-v-2245a05a]{margin-top:3.6px;font-size:12px;height:2.8em;padding:0}.popular__container .popular__item-box .popular__items .popular__items__desription--price[data-v-2245a05a]{font-size:12px}.popular__container .popular__item-box .popular__items .popular__items__desription--old--price[data-v-2245a05a]{font-size:9px;bottom:17px}}div.title-box[data-v-2245a05a]{padding:40px 0}div.title-box ul li[data-v-2245a05a],div.title-box ul li a[data-v-2245a05a]{display:inline-block;font-weight:400;font-size:15px;line-height:18px;color:#000}div.title-box ul li a[data-v-2245a05a]:hover{color:#f7931e}div.fixvh-category[data-v-2245a05a]{z-index:100;width:100%;background-color:#333;opacity:.5}div.category-modal[data-v-2245a05a],div.fixvh-category[data-v-2245a05a]{position:fixed;top:0;left:0;height:100vh;z-index:1000}div.category-modal[data-v-2245a05a]{width:90%;transform:translateX(0);opacity:1;transition:.2s}div.category-modal div.category-nav[data-v-2245a05a]{width:100%;height:100%;background-color:#fff;position:relative;z-index:101;display:flex;padding:15px 0}div.category-modal div.category-nav button.close-btn[data-v-2245a05a]{position:absolute;width:30px;height:30px;border-radius:100%;background-color:#f7931e;border:none;right:-41px;top:8px;z-index:101}div.category-modal div.category-nav button.close-btn .icon-times[data-v-2245a05a]{color:#fff}div.category-modal div.category-nav div.scroll-modal[data-v-2245a05a]{overflow-y:scroll;overflow-x:hidden}div.category-modal div.category-nav div.category-left[data-v-2245a05a]{width:400px;padding:0 15px;border-right:1px solid #bbb}div.category-modal div.category-nav div.category-left ul[data-v-2245a05a]{list-style-type:none;padding-right:15px}div.category-modal div.category-nav div.category-left li button[data-v-2245a05a]{display:block;padding:8px 15px;border-radius:5px;font-size:16px;color:#333;font-weight:500;border:none;background-color:transparent;width:100%;text-align:left}div.category-modal div.category-nav div.category-left li button[data-v-2245a05a]:hover{color:#f7931e}div.category-modal div.category-nav div.category-left li.active-li button[data-v-2245a05a]{background-color:#f7931e;color:#fff}div.category-modal div.category-nav div.category-content[data-v-2245a05a]{width:calc(100% - 400px);padding:0 30px;position:relative}div.category-modal div.category-nav div.category-content h3.category-title[data-v-2245a05a]{font-size:24px;font-weight:500;margin-bottom:25px}div.category-modal div.category-nav div.category-content div.visible-all a[data-v-2245a05a]{font-size:16px;color:#888;margin-bottom:5px;display:block}div.category-modal div.category-nav div.category-content a[data-v-2245a05a]{transition:.2s}div.category-modal div.category-nav div.category-content ul[data-v-2245a05a]{list-style-type:none;margin-bottom:25px}div.category-modal div.category-nav div.category-content ul a[data-v-2245a05a]{font-size:16px;color:#888;margin-bottom:5px;display:block}div.category-modal div.category-nav div.category-content a.click-parent[data-v-2245a05a]{font-size:18px;margin-bottom:10px;color:#333;display:block;font-weight:500}div.category-modal div.category-nav div.category-content a[data-v-2245a05a]:hover{color:#f7931e!important}div.category-modal div.category-nav div.scroll-modal[data-v-2245a05a]::-webkit-scrollbar{width:5px}div.category-modal div.category-nav div.scroll-modal[data-v-2245a05a]::-webkit-scrollbar-track{background:#f1f1f1}div.category-modal div.category-nav div.scroll-modal[data-v-2245a05a]::-webkit-scrollbar-thumb{background:#f7931e;border-radius:5px}div.category-modal div.category-nav div.scroll-modal[data-v-2245a05a]::-webkit-scrollbar-thumb:hover{background:#f7931e}div.hidden-category[data-v-2245a05a]{transform:translateX(-104%);opacity:0}div.category-mobile[data-v-2245a05a]{position:fixed;z-index:1234454545;top:0;left:0;width:100%;height:100vh;background-color:#fff;padding:15px}div.category-mobile a.visible-all-mobile[data-v-2245a05a]{font-size:16px;color:#333}div.category-mobile div.title-t[data-v-2245a05a]{display:flex;justify-content:space-between;align-items:center}div.category-mobile div.title-t h3[data-v-2245a05a]{font-size:24px;margin-bottom:0}div.category-mobile div.title-t button[data-v-2245a05a]{border:none;background-color:transparent}div.category-mobile div.title-t button .close-mobile[data-v-2245a05a]{font-size:26px;color:#f7931e}div.category-mobile div.category-acc[data-v-2245a05a]{margin-top:20px;max-height:calc(100vh - 100px);overflow-y:scroll}div.category-mobile div.category-acc div.acc-item[data-v-2245a05a]{margin-bottom:5px}div.category-mobile div.category-acc div.acc-item button[data-v-2245a05a]{width:100%;display:flex;justify-content:space-between;align-items:center;background:#fff7ec;padding:10px 15px;border-radius:5px;border:1px solid #fff7ec}div.category-mobile div.category-acc div.acc-item button b[data-v-2245a05a]{font-size:18px}div.category-mobile div.category-acc div.acc-item button .icon-down[data-v-2245a05a]{font-size:18px;color:#f7931e}div.category-mobile div.category-acc div.acc-item button .rotate[data-v-2245a05a]{transform:rotate(-180deg)}div.category-mobile div.category-acc div.acc-item div.acc-content[data-v-2245a05a]{padding:15px}div.category-mobile div.category-acc div.acc-item div.acc-content ul[data-v-2245a05a]{list-style-type:none}div.category-mobile div.category-acc div.acc-item div.acc-content ul li a[data-v-2245a05a]{color:#333;display:block;font-size:16px!important;font-weight:700;margin-bottom:5px}div.category-mobile div.category-acc div.acc-item div.acc-content ul li a[data-v-2245a05a]:active{color:#f7931e}div.category-mobile div.category-acc div.acc-item div.acc-content ul li ul[data-v-2245a05a]{margin-bottom:15px}div.category-mobile div.category-acc div.acc-item div.acc-content ul li ul li a[data-v-2245a05a]{font-weight:400;color:#777}@media(max-width:800px){div.category-modal div.category-nav div.category-left[data-v-2245a05a]{width:280px}div.category-modal div.category-nav div.category-content[data-v-2245a05a]{width:calc(100% - 280px)}}.faq__question__box[data-v-2245a05a]{position:relative}.faq__question__box .faq__question--title[data-v-2245a05a]{display:flex;align-items:center;margin:20px 0}.faq__question__box .faq__question--title[data-v-2245a05a]:hover{cursor:pointer}.faq__question__box .faq__question--title .svg__icon[data-v-2245a05a]{flex-shrink:0;display:inline-block;border-radius:50%;width:50px;height:50px;background-color:#fe9e0d;transition:.3s;position:relative}.faq__question__box .faq__question--title .svg__icon--active[data-v-2245a05a]{transform:rotate(90deg)}.faq__question__box .faq__question--title .svg__icon svg[data-v-2245a05a]{position:absolute;top:15px;left:18px}.faq__question__box .faq__question--title .faq__question--text[data-v-2245a05a]{display:inline-block;margin-top:5px;margin-left:15px;font-family:Roboto,sans-serif;font-weight:600;font-size:20px;line-height:130%;color:#000}.faq__question__box .faq__question--title .faq__question--text--active[data-v-2245a05a]{color:#fe9e0d}.faq__question__box .faq__question--description[data-v-2245a05a]{padding:20px 20px 30px;border-radius:5px;background-color:#f1efed;margin:20px 0 40px 80px;position:absolute;transform:translateX(-150%);opacity:0;visibility:hidden;transition:visibility .5s linear,opacity .5s linear,transform 1s}.faq__question__box .faq__question--description--active[data-v-2245a05a]{position:relative;transform:translateX(0);opacity:1;visibility:visible;left:0}.faq__question__box .faq__question--description span[data-v-2245a05a],.faq__question__box .faq__question--description span[data-v-2245a05a]  h1,.faq__question__box .faq__question--description span[data-v-2245a05a]  p{font-family:Roboto,sans-serif;font-size:16px;line-height:130%;color:#666}@media only screen and (max-width:560px){.faq__question__box .faq__question--title[data-v-2245a05a]{margin:25px 0}.faq__question__box .faq__question--title .svg__icon[data-v-2245a05a]{width:40px;height:40px}.faq__question__box .faq__question--title .svg__icon svg[data-v-2245a05a]{top:12px;left:15px;height:16px;width:16px}.faq__question__box .faq__question--title .faq__question--text[data-v-2245a05a]{margin-left:10px;font-size:16px}.faq__question__box .faq__question--description[data-v-2245a05a]{padding:15px 15px 20px;margin:0}.faq__question__box .faq__question--description span[data-v-2245a05a],.faq__question__box .faq__question--description span[data-v-2245a05a]  h1,.faq__question__box .faq__question--description span[data-v-2245a05a]  p{font-size:14px}}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 165:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(208);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("3ad20b4b", content, true, context)
};

/***/ }),

/***/ 191:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/FAQ/FaqQuestions.vue?vue&type=template&id=2245a05a&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:" faq__question__box"},[_vm._ssrNode("<div class=\"faq__question--title\" data-v-2245a05a><div"+(_vm._ssrClass("svg__icon ",{ 'svg__icon--active': _vm.isVisible }))+" data-v-2245a05a><svg width=\"20\" height=\"20\" viewBox=\"0 0 15 18\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" data-v-2245a05a><path d=\"M15 9L0 17.6603L0 0.339746L15 9Z\" fill=\"white\" data-v-2245a05a></path></svg></div> <h3"+(_vm._ssrClass("faq__question--text ",{
                'faq__question--text--active': _vm.isVisible
            }))+" data-v-2245a05a>"+_vm._ssrEscape("\n            "+_vm._s(_vm.faqQuestion)+"\n        ")+"</h3></div> <div"+(_vm._ssrClass("faq__question--description ",{
            'faq__question--description--active': _vm.isVisible
        }))+" data-v-2245a05a><span data-v-2245a05a>"+(_vm._s(_vm.faqDescription))+"</span></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/FAQ/FaqQuestions.vue?vue&type=template&id=2245a05a&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/FAQ/FaqQuestions.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var FaqQuestionsvue_type_script_lang_js_ = ({props:["faqQuestion","faqDescription"],data(){return{isVisible:false};},methods:{isVisibleContent(){this.isVisible=!this.isVisible;}}});
// CONCATENATED MODULE: ./components/FAQ/FaqQuestions.vue?vue&type=script&lang=js&
 /* harmony default export */ var FAQ_FaqQuestionsvue_type_script_lang_js_ = (FaqQuestionsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/FAQ/FaqQuestions.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(130)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  FAQ_FaqQuestionsvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "2245a05a",
  "b07368ce"
  
)

/* harmony default export */ var FaqQuestions = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 207:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_nuxt_webpack_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_faq_vue_vue_type_style_index_0_id_5a98cd54_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(165);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_nuxt_webpack_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_faq_vue_vue_type_style_index_0_id_5a98cd54_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_nuxt_webpack_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_faq_vue_vue_type_style_index_0_id_5a98cd54_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_nuxt_webpack_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_faq_vue_vue_type_style_index_0_id_5a98cd54_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_nuxt_webpack_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_faq_vue_vue_type_style_index_0_id_5a98cd54_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 208:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".fixvh[data-v-5a98cd54]{position:fixed;top:0;left:0;width:100%;height:100vh;z-index:10;background-color:#333;opacity:.6}button.btn-sm[data-v-5a98cd54]{background:#fbfcff;border:1px solid #e5f1fb;border-radius:6px;padding:10px 20px;font-weight:500;font-size:14px;color:#333;margin-right:10px}button.btn-sm-active[data-v-5a98cd54]{background:#f7931e;border:1px solid transparent;color:#fff}.modal-card[data-v-5a98cd54]{background-color:#fff;border-radius:8px;padding:15px 20px;position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);z-index:12}.modal-card button.otmen[data-v-5a98cd54]{background:#c5c5c5!important}.modal-card .modal-title[data-v-5a98cd54]{display:flex;justify-content:space-between;align-items:center;margin-bottom:20px}.modal-card .modal-title h2[data-v-5a98cd54]{font-size:20px;color:#333}.modal-card .modal-title .times[data-v-5a98cd54]{color:#333;font-size:16px}.modal-card .modal-title .times[data-v-5a98cd54]:hover{color:#f7931e}@media(max-width:475px){.modal-card[data-v-5a98cd54]{width:90%!important}}button[data-v-5a98cd54]{cursor:pointer;border:none;background-color:transparent}.btn-simple-active[data-v-5a98cd54]{background:#f7931e;border:1px solid transparent;color:#fff}h6.error-text[data-v-5a98cd54]{display:none;font-weight:400;font-size:13px;line-height:14px;margin-top:4px;color:#f94040}div.input-form[data-v-5a98cd54]{margin-bottom:15px}div.input-form div.input-rel[data-v-5a98cd54]{position:relative}div.input-form div.input-rel button.btn-icon[data-v-5a98cd54]{position:absolute;right:10px;top:50%;transform:translateY(-50%)}div.input-form div.input-rel button.btn-icon .icon[data-v-5a98cd54]{font-size:16px;color:rgba(51,51,51,.2)}div.input-form input[data-v-5a98cd54]{width:100%;height:40px;border:1px solid #aaa;border-radius:8px;font-size:16px;padding:0 15px;font-weight:500}div.input-form input[data-v-5a98cd54]:hover{border:1px solid #888}div.input-form input[data-v-5a98cd54]:focus{outline:none;border:1px solid #f7931e}div.form-error input[data-v-5a98cd54]{border:1px solid #f94040!important}div.form-error .error-text[data-v-5a98cd54]{display:block!important}.btn-simple[data-v-5a98cd54]{background:#fff;border:1px solid #f7931e;border-radius:6px;padding:8px 15px;display:inline-block;font-weight:500;font-size:14px;color:#f7931e}.btn-simple[data-v-5a98cd54]:hover{color:#fff;background-color:#f7931e}@media(max-width:543px){.popular__container .img-fluid[data-v-5a98cd54]{height:170px!important;-o-object-fit:cover!important;object-fit:cover!important}.other__item__banner--carousel .b-carousel .carousel-inner .b-carousel-slide img[data-v-5a98cd54]{min-height:250px!important}}.other__item__banner--carousel .b-carousel .carousel-inner .b-carousel-slide img[data-v-5a98cd54]{min-height:450px}.success-info[data-v-5a98cd54]{position:fixed;top:10px;right:20px;width:320px;z-index:12345}div.card-row[data-v-5a98cd54]{display:flex;margin:0 -10px;flex-wrap:wrap}.hover-shadow[data-v-5a98cd54]:hover{box-shadow:0 1px 10px rgba(0,0,0,.18)}div.card-5[data-v-5a98cd54]{width:20%;padding:0 10px}div.card-4[data-v-5a98cd54]{width:25%;padding:0 10px}div.card-3[data-v-5a98cd54]{width:33.3333333333%;padding:0 10px}@media(max-width:1020px){div.card-4[data-v-5a98cd54],div.card-5[data-v-5a98cd54]{width:33.3333333333%}}@media(max-width:768px){div.card-3[data-v-5a98cd54],div.card-4[data-v-5a98cd54],div.card-5[data-v-5a98cd54]{width:50%}.catalog__container[data-v-5a98cd54]{padding-top:5px!important}.filtr__section .catalog__page__filtr__box[data-v-5a98cd54]{position:relative!important;top:unset!important}.catalog__container .catalog__filtraiton__box .filtraiton__form__box .filtraiton__form--submit[data-v-5a98cd54]{margin-bottom:0!important}.catalog__container .catalog__page__about[data-v-5a98cd54]{padding-left:0!important}}@-webkit-keyframes move__360-data-v-5a98cd54{0%{transform:translateX(0deg)}to{transform:translateX(1turn)}}@keyframes move__360-data-v-5a98cd54{0%{transform:translateX(0deg)}to{transform:translateX(1turn)}}h6.error-text[data-v-5a98cd54]{font-size:12px;color:red;margin-bottom:0}h1.title-form[data-v-5a98cd54]{font-size:24px;text-align:center}.popular__container[data-v-5a98cd54]{margin-top:40px}.popular__container .popular__heading[data-v-5a98cd54]{font-family:Roboto,sans-serif;font-weight:500;font-size:48px;color:#f7931e;margin-bottom:40px;text-shadow:0 0 3px rgba(247,147,30,.3);display:inline-block}.popular__container .popular__item-box[data-v-5a98cd54]{display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap}.popular__container .popular__item-box[data-v-5a98cd54]:after{content:\"\";flex:0 1 32%}.popular__container .popular__item-box .popular__items[data-v-5a98cd54]{flex:0 0 auto;width:222px;height:370px;background-color:#fff;box-shadow:0 1px 3px rgba(0,0,0,.12);border-radius:5px;overflow:hidden;margin:0 2px 37px;cursor:pointer;transition:all .2s}.popular__container .popular__item-box .popular__items[data-v-5a98cd54]:hover{transform:scale(1.07)}.popular__container .popular__item-box .popular__items[data-v-5a98cd54]:hover:after{opacity:0}.popular__container .popular__item-box .popular__items[data-v-5a98cd54]:active{outline:none;transform:scale(1.03)}.popular__container .popular__item-box .popular__items .popular__items__img[data-v-5a98cd54]{width:222px;height:222px}.popular__container .popular__item-box .popular__items .popular__items__desription[data-v-5a98cd54]{padding-left:16px;display:flex;flex-direction:column;justify-content:flex-start;position:relative}.popular__container .popular__item-box .popular__items .popular__items__desription .name__rating[data-v-5a98cd54]{margin-top:2px;display:flex;justify-content:space-between;align-items:center;padding-right:10px}.popular__container .popular__item-box .popular__items .popular__items__desription .name__rating .magazine__item--rating[data-v-5a98cd54]{display:flex;align-items:center}.popular__container .popular__item-box .popular__items .popular__items__desription .name__rating .magazine__item--rating img[data-v-5a98cd54]{width:12px;height:12px;margin-right:2px}.popular__container .popular__item-box .popular__items .popular__items__desription .name__rating .magazine__item--rating span[data-v-5a98cd54]{color:#666;opacity:.7;font-size:10px}.popular__container .popular__item-box .popular__items .popular__items__desription--name[data-v-5a98cd54]{margin-top:5px;font-family:Roboto;font-weight:500;font-size:14px;line-height:16px;opacity:.7;color:#666}.popular__container .popular__item-box .popular__items .popular__items__desription--categorie[data-v-5a98cd54]{margin:9px 0;font-family:Roboto;font-weight:700;font-size:16px;line-height:100%;color:#000;height:60px}.popular__container .popular__item-box .popular__items .popular__items__desription--price[data-v-5a98cd54]{font-family:Roboto;font-weight:700;font-size:20px;line-height:100%;color:#219ebc}.popular__container .popular__item-box .popular__items .popular__items__desription--old--price[data-v-5a98cd54]{margin-bottom:2px;font-size:14px;color:#f7931e;text-decoration:line-through}.popular__container .popular__btn[data-v-5a98cd54],.popular__container .popular__btn[data-v-5a98cd54]:link,.popular__container .popular__btn[data-v-5a98cd54]:visited{display:block;border-radius:5px;transition:all .2s;width:224px;height:50px;margin:20px auto 0;text-align:center;padding:10px;text-decoration:none;font-family:inherit;font-weight:500;font-size:18px;color:hsla(0,0%,100%,.9);background-color:#f7931e;border:none;cursor:pointer}.popular__container .popular__btn[data-v-5a98cd54]:hover{transform:scale(1.07)}.popular__container .popular__btn[data-v-5a98cd54]:hover:after{opacity:0}.popular__container .popular__btn[data-v-5a98cd54]:active{outline:none;transform:scale(1.03)}.popular__container .popular__btn[data-v-5a98cd54]:active,.popular__container .popular__btn[data-v-5a98cd54]:hover{background-color:#fff;color:#f7931e;border:1px solid #f7931e}.popular__container .popular__dropdown__box[data-v-5a98cd54]{position:relative}.popular__container .popular__dropdown__box .popular__dropdown--btn[data-v-5a98cd54]{width:170px;height:36px;border:1px solid #f7931e;border-radius:5px;background-color:transparent;padding:0 10px;font-family:Roboto;font-weight:500;font-size:16px;color:#f7931e;display:flex;justify-content:space-between;align-items:center}.popular__container .popular__dropdown__box .popular__dropdown--btn:hover+.popular__dropdown__content[data-v-5a98cd54]{visibility:visible;opacity:1}.popular__container .popular__dropdown__box .popular__dropdown__content[data-v-5a98cd54]{position:absolute;left:0;top:36px;width:170px;display:flex;flex-direction:column;justify-content:center;transition:all .2s;visibility:hidden;opacity:0;border-radius:5px;overflow:hidden;box-shadow:0 2px 6px rgba(0,0,0,.3)}.popular__container .popular__dropdown__box .popular__dropdown__content .popular__dropdown--link[data-v-5a98cd54]{color:#f7931e;background-color:#fcf6f6;padding:5px;text-decoration:none}.popular__container .popular__dropdown__box .popular__dropdown__content .popular__dropdown--link[data-v-5a98cd54]:active,.popular__container .popular__dropdown__box .popular__dropdown__content .popular__dropdown--link[data-v-5a98cd54]:hover{font-weight:500}.popular__container .popular__dropdown__box .popular__dropdown__content[data-v-5a98cd54]:active,.popular__container .popular__dropdown__box .popular__dropdown__content[data-v-5a98cd54]:hover{visibility:visible;opacity:1}@media only screen and (max-width:1440px)and (min-width:1200px){.popular__container .popular__item-box[data-v-5a98cd54]{padding:0 4px}}@media only screen and (max-width:1200px)and (min-width:765px){.popular__container[data-v-5a98cd54]{padding:20px}.popular__container .popular__item-box .popular__items[data-v-5a98cd54]{width:229px;height:381.67px;margin-bottom:22px}.popular__container .popular__item-box .popular__items .popular__items__img[data-v-5a98cd54]{width:230px;height:230px}}@media only screen and (max-width:765px){.popular__container[data-v-5a98cd54]{padding:16px}.popular__container .popular__heading[data-v-5a98cd54]{font-size:24px;margin-bottom:28px}.popular__container .popular__item-box .popular__items[data-v-5a98cd54]{width:164px;height:273px;margin-bottom:14px}.popular__container .popular__item-box .popular__items .popular__items__img[data-v-5a98cd54]{width:164px;height:164px}.popular__container .popular__item-box .popular__items .popular__items__desription[data-v-5a98cd54]{padding-left:12px}.popular__container .popular__item-box .popular__items .popular__items__desription--name[data-v-5a98cd54]{margin-top:3.7px;font-size:10px}.popular__container .popular__item-box .popular__items .popular__items__desription--categorie[data-v-5a98cd54]{margin:6.6px 0 0;font-size:12px;height:50px;padding:0}.popular__container .popular__item-box .popular__items .popular__items__desription--price[data-v-5a98cd54]{font-size:14px}.popular__container .popular__item-box .popular__items .popular__items__desription--old--price[data-v-5a98cd54]{font-size:10px}.popular__container .popular__btn[data-v-5a98cd54],.popular__container .popular__btn[data-v-5a98cd54]:link,.popular__container .popular__btn[data-v-5a98cd54]:visited{width:160px;height:35px;margin-top:18px;padding:8px;font-size:12px}}@media only screen and (max-width:365px){.popular__container[data-v-5a98cd54]{padding:14px}.popular__container .popular__heading[data-v-5a98cd54]{font-size:22px;margin-bottom:12px}.popular__container .popular__item-box .popular__items[data-v-5a98cd54]{width:140px;height:245px}.popular__container .popular__item-box .popular__items .popular__items__img[data-v-5a98cd54]{width:140px;height:140px}.popular__container .popular__item-box .popular__items .popular__items__desription--categorie[data-v-5a98cd54]{margin-top:3.6px;font-size:12px;height:2.8em;padding:0}.popular__container .popular__item-box .popular__items .popular__items__desription--price[data-v-5a98cd54]{font-size:12px}.popular__container .popular__item-box .popular__items .popular__items__desription--old--price[data-v-5a98cd54]{font-size:9px;bottom:17px}}div.title-box[data-v-5a98cd54]{padding:40px 0}div.title-box ul li[data-v-5a98cd54],div.title-box ul li a[data-v-5a98cd54]{display:inline-block;font-weight:400;font-size:15px;line-height:18px;color:#000}div.title-box ul li a[data-v-5a98cd54]:hover{color:#f7931e}div.fixvh-category[data-v-5a98cd54]{z-index:100;width:100%;background-color:#333;opacity:.5}div.category-modal[data-v-5a98cd54],div.fixvh-category[data-v-5a98cd54]{position:fixed;top:0;left:0;height:100vh;z-index:1000}div.category-modal[data-v-5a98cd54]{width:90%;transform:translateX(0);opacity:1;transition:.2s}div.category-modal div.category-nav[data-v-5a98cd54]{width:100%;height:100%;background-color:#fff;position:relative;z-index:101;display:flex;padding:15px 0}div.category-modal div.category-nav button.close-btn[data-v-5a98cd54]{position:absolute;width:30px;height:30px;border-radius:100%;background-color:#f7931e;border:none;right:-41px;top:8px;z-index:101}div.category-modal div.category-nav button.close-btn .icon-times[data-v-5a98cd54]{color:#fff}div.category-modal div.category-nav div.scroll-modal[data-v-5a98cd54]{overflow-y:scroll;overflow-x:hidden}div.category-modal div.category-nav div.category-left[data-v-5a98cd54]{width:400px;padding:0 15px;border-right:1px solid #bbb}div.category-modal div.category-nav div.category-left ul[data-v-5a98cd54]{list-style-type:none;padding-right:15px}div.category-modal div.category-nav div.category-left li button[data-v-5a98cd54]{display:block;padding:8px 15px;border-radius:5px;font-size:16px;color:#333;font-weight:500;border:none;background-color:transparent;width:100%;text-align:left}div.category-modal div.category-nav div.category-left li button[data-v-5a98cd54]:hover{color:#f7931e}div.category-modal div.category-nav div.category-left li.active-li button[data-v-5a98cd54]{background-color:#f7931e;color:#fff}div.category-modal div.category-nav div.category-content[data-v-5a98cd54]{width:calc(100% - 400px);padding:0 30px;position:relative}div.category-modal div.category-nav div.category-content h3.category-title[data-v-5a98cd54]{font-size:24px;font-weight:500;margin-bottom:25px}div.category-modal div.category-nav div.category-content div.visible-all a[data-v-5a98cd54]{font-size:16px;color:#888;margin-bottom:5px;display:block}div.category-modal div.category-nav div.category-content a[data-v-5a98cd54]{transition:.2s}div.category-modal div.category-nav div.category-content ul[data-v-5a98cd54]{list-style-type:none;margin-bottom:25px}div.category-modal div.category-nav div.category-content ul a[data-v-5a98cd54]{font-size:16px;color:#888;margin-bottom:5px;display:block}div.category-modal div.category-nav div.category-content a.click-parent[data-v-5a98cd54]{font-size:18px;margin-bottom:10px;color:#333;display:block;font-weight:500}div.category-modal div.category-nav div.category-content a[data-v-5a98cd54]:hover{color:#f7931e!important}div.category-modal div.category-nav div.scroll-modal[data-v-5a98cd54]::-webkit-scrollbar{width:5px}div.category-modal div.category-nav div.scroll-modal[data-v-5a98cd54]::-webkit-scrollbar-track{background:#f1f1f1}div.category-modal div.category-nav div.scroll-modal[data-v-5a98cd54]::-webkit-scrollbar-thumb{background:#f7931e;border-radius:5px}div.category-modal div.category-nav div.scroll-modal[data-v-5a98cd54]::-webkit-scrollbar-thumb:hover{background:#f7931e}div.hidden-category[data-v-5a98cd54]{transform:translateX(-104%);opacity:0}div.category-mobile[data-v-5a98cd54]{position:fixed;z-index:1234454545;top:0;left:0;width:100%;height:100vh;background-color:#fff;padding:15px}div.category-mobile a.visible-all-mobile[data-v-5a98cd54]{font-size:16px;color:#333}div.category-mobile div.title-t[data-v-5a98cd54]{display:flex;justify-content:space-between;align-items:center}div.category-mobile div.title-t h3[data-v-5a98cd54]{font-size:24px;margin-bottom:0}div.category-mobile div.title-t button[data-v-5a98cd54]{border:none;background-color:transparent}div.category-mobile div.title-t button .close-mobile[data-v-5a98cd54]{font-size:26px;color:#f7931e}div.category-mobile div.category-acc[data-v-5a98cd54]{margin-top:20px;max-height:calc(100vh - 100px);overflow-y:scroll}div.category-mobile div.category-acc div.acc-item[data-v-5a98cd54]{margin-bottom:5px}div.category-mobile div.category-acc div.acc-item button[data-v-5a98cd54]{width:100%;display:flex;justify-content:space-between;align-items:center;background:#fff7ec;padding:10px 15px;border-radius:5px;border:1px solid #fff7ec}div.category-mobile div.category-acc div.acc-item button b[data-v-5a98cd54]{font-size:18px}div.category-mobile div.category-acc div.acc-item button .icon-down[data-v-5a98cd54]{font-size:18px;color:#f7931e}div.category-mobile div.category-acc div.acc-item button .rotate[data-v-5a98cd54]{transform:rotate(-180deg)}div.category-mobile div.category-acc div.acc-item div.acc-content[data-v-5a98cd54]{padding:15px}div.category-mobile div.category-acc div.acc-item div.acc-content ul[data-v-5a98cd54]{list-style-type:none}div.category-mobile div.category-acc div.acc-item div.acc-content ul li a[data-v-5a98cd54]{color:#333;display:block;font-size:16px!important;font-weight:700;margin-bottom:5px}div.category-mobile div.category-acc div.acc-item div.acc-content ul li a[data-v-5a98cd54]:active{color:#f7931e}div.category-mobile div.category-acc div.acc-item div.acc-content ul li ul[data-v-5a98cd54]{margin-bottom:15px}div.category-mobile div.category-acc div.acc-item div.acc-content ul li ul li a[data-v-5a98cd54]{font-weight:400;color:#777}@media(max-width:800px){div.category-modal div.category-nav div.category-left[data-v-5a98cd54]{width:280px}div.category-modal div.category-nav div.category-content[data-v-5a98cd54]{width:calc(100% - 280px)}}.faq__container .faq__heading[data-v-5a98cd54]{margin:0 0 40px;font-family:Roboto,sans-serif;font-weight:500;font-size:48px;line-height:1;color:#f7931f}.faq__container .customer__question__box[data-v-5a98cd54]{margin:40px 0 80px 30px;padding:30px;max-width:373px;background-color:#fce3a4;border-radius:5px}.faq__container .customer__question__box .customer__question__header[data-v-5a98cd54]{font-family:Roboto,sans-serif;font-size:24px;line-height:1;color:#023047;padding:0}.faq__container .customer__question__box .customer__question__input[data-v-5a98cd54]{display:inline-block;padding:15px 12px;font-family:Roboto,sans-serif;font-size:14px;line-height:100%;border:none;border-radius:3px;color:#000;height:1em;margin-top:15px}.faq__container .customer__question__box .customer__question__input[data-v-5a98cd54]::-webkit-input-placeholder{color:#c4c4c4;font-style:italic}.faq__container .customer__question__box .customer__question__input[data-v-5a98cd54]:focus{border:none;border-radius:3px}.faq__container .customer__question__box .customer__question__txt[data-v-5a98cd54]{height:7em;line-height:1.3;padding:10px 12px}.faq__container .customer__question__box .customer__question__send--btn[data-v-5a98cd54]{margin:20px auto auto;padding:12px 33px;background-color:#fe9e0d;border-radius:5px;outline:none;border:none;color:#fff;font-family:Roboto,sans-serif;font-weight:500;font-size:16px;line-height:1;transition:all .2s}.faq__container .customer__question__box .customer__question__send--btn[data-v-5a98cd54]:active,.faq__container .customer__question__box .customer__question__send--btn[data-v-5a98cd54]:hover{background-color:#fff;color:#f7931e;border:1px solid #f7931e}.faq__container .customer__question__box .customer__question__send--btn[data-v-5a98cd54]:hover{transform:scale(1.07)}.faq__container .customer__question__box .customer__question__send--btn[data-v-5a98cd54]:hover:after{opacity:0}.faq__container .customer__question__box .customer__question__send--btn[data-v-5a98cd54]:active{outline:none;transform:scale(1.03)}@media only screen and (max-width:992px){.faq__container .customer__question__box[data-v-5a98cd54]{margin-left:auto;margin-right:auto}}@media only screen and (max-width:560px){.faq__container .faq__heading[data-v-5a98cd54]{font-size:28px}}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 264:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/faq.vue?vue&type=template&id=5a98cd54&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',[(!_vm.isRender)?_c('base-loading'):_c('section',[_c('div',{staticClass:"container"},[_c('div',{staticClass:"title-box title__about__us"},[_c('ul',[_c('li',[_c('nuxt-link',{attrs:{"to":{name:'index___'+_vm.$i18n.locale}}},[_vm._v(_vm._s(_vm.$t('home'))+" ")]),_vm._v("\n                        /\n                    ")],1)])])]),_vm._v(" "),_c('section',{staticClass:"container faq__container"},[_c('div',{staticClass:"faq__heading"},[_vm._v("\n                "+_vm._s(_vm.$t('vop'))+"\n            ")]),_vm._v(" "),_c('div',{staticClass:"row container mx-0 px-0"},[_c('div',{staticClass:"col-lg-8 px-0"},_vm._l((_vm.faqArray),function(faqBox){return _c('faq-questions',{key:faqBox._id,attrs:{"faq-question":faqBox.title[_vm.$i18n.locale],"faq-description":faqBox.description[_vm.$i18n.locale]}})}),1),_vm._v(" "),_c('div',{staticClass:"col-lg-4 px-0"},[_c('form',{staticClass:"customer__question__box row"},[_c('h4',{staticClass:"customer__question__header col-sm-12"},[_vm._v("\n                            "+_vm._s(_vm.$t('vop1'))+"\n                        ")]),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.question.name),expression:"question.name"}],staticClass:"customer__question__input col-sm-12",attrs:{"name":"name","id":"name","type":"text","placeholder":_vm.$t('name')},domProps:{"value":(_vm.question.name)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.question, "name", $event.target.value)}}}),_vm._v(" "),_c('label',{directives:[{name:"show",rawName:"v-show",value:(_vm.labelDanger.name),expression:"labelDanger.name"}],staticClass:"text-danger ml-1 mb-0 mt-1 customer__question__label",attrs:{"for":"name"}},[_vm._v(_vm._s(_vm.$t('err1')))]),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.question.email),expression:"question.email"}],staticClass:"customer__question__input col-sm-12",attrs:{"name":"email","id":"email","type":"email","placeholder":"E-mail"},domProps:{"value":(_vm.question.email)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.question, "email", $event.target.value)}}}),_vm._v(" "),_c('label',{directives:[{name:"show",rawName:"v-show",value:(_vm.labelDanger.email),expression:"labelDanger.email"}],staticClass:"text-danger ml-1 mb-0 mt-1 customer__question__label",attrs:{"for":"email"}},[_vm._v(_vm._s(_vm.$t('err1')))]),_vm._v(" "),_c('textarea',{directives:[{name:"model",rawName:"v-model",value:(_vm.question.question),expression:"question.question"}],staticClass:"customer__question__input customer__question__txt col-sm-12",attrs:{"name":"question","id":"question","placeholder":_vm.$t('vop4')},domProps:{"value":(_vm.question.question)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.question, "question", $event.target.value)}}}),_vm._v(" "),_c('label',{directives:[{name:"show",rawName:"v-show",value:(_vm.labelDanger.question),expression:"labelDanger.question"}],staticClass:"text-danger ml-1 mb-0 mt-1 customer__question__label",attrs:{"for":"question"}},[_vm._v(_vm._s(_vm.$t('err1')))]),_vm._v(" "),_c('button',{staticClass:"customer__question__send--btn text-center ",attrs:{"href":"#"},on:{"click":function($event){$event.preventDefault();return _vm.sendQuest.apply(null, arguments)}}},[_vm._v("\n                            "+_vm._s(_vm.$t('vop2'))+"\n                        ")])]),_vm._v(" "),_c('b-modal',{staticClass:"b-modal",attrs:{"id":"modal-info","size":"sm","centered":"","button-size":"sm","hide-footer":"","hide-header":""},model:{value:(_vm.modalShow),callback:function ($$v) {_vm.modalShow=$$v},expression:"modalShow"}},[_c('div',{staticClass:"d-block text-center "},[_c('h3',[_vm._v(_vm._s(_vm.$t('vop3')))])]),_vm._v(" "),_c('b-button',{staticClass:"b-button",attrs:{"variant":"primary","block":""},on:{"click":function($event){return _vm.$router.push('index___'+_vm.$i18n.locale)}}},[_vm._v("ОК!")])],1)],1)])])])],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/faq.vue?vue&type=template&id=5a98cd54&scoped=true&

// EXTERNAL MODULE: ./components/UI/BaseLoading.vue + 4 modules
var BaseLoading = __webpack_require__(85);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/faq.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var faqvue_type_script_lang_js_ = ({head:{title:"Часто задаваемые вопросы — Tujjor. Низкие цены и широкий ассортимент!",meta:[{hid:"description",name:"description",content:"Часто задаваемые вопросы - Tujjor"}]},components:{BaseLoading: BaseLoading["default"]},data(){return{faqArray:[],isRender:false,labelDanger:{name:false,email:false,question:false},modalShow:false,question:{name:"",email:"",question:""}};},methods:{// Input validation and return boolean
validation(){if(this.question.name==="")this.labelDanger.name=true;if(this.question.email===""||!this.question.email.includes("@"))this.labelDanger.email=true;if(this.question.question==="")this.labelDanger.question=true;if(this.question.name!=""&&this.question.email!=""&&this.question.email.includes("@")&&this.question.question!=""){return true;}else return false;},// Send question to server if validation is true
async sendQuest(){if(this.validation()){await this.$axios.$post("/question/create",this.question).then(response=>{if(response.success){this.labelDanger.question=this.labelDanger.email=this.labelDanger.name=false;this.question.name=this.question.email=this.question.question="";this.modalShow=true;}else{throw new Error("Could not save data!");}}).catch(error=>{// handle error
console.log(error);});}else{console.log("to'ldir");}}},// Upload all faq questions
async mounted(){this.isRender=false;const ip=await this.$axios.$get("/help/client/all").then(response=>{if(response.success){this.isRender=true;return response;}else{throw new Error("Could not save data!");}}).catch(error=>{// handle error
console.log(error);this.error=error.message;});this.faqArray=ip.data;}});
// CONCATENATED MODULE: ./pages/faq.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_faqvue_type_script_lang_js_ = (faqvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/faq.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(207)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_faqvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "5a98cd54",
  "5e5d0e74"
  
)

/* harmony default export */ var faq = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {FaqQuestions: __webpack_require__(191).default})


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
  add("6c930b5b", content, true, context)
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
  "2bd43f3f"
  
)

/* harmony default export */ var BaseLoading = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 86:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_nuxt_webpack_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BaseLoading_vue_vue_type_style_index_0_id_46236f3e_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(84);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_nuxt_webpack_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BaseLoading_vue_vue_type_style_index_0_id_46236f3e_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_nuxt_webpack_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BaseLoading_vue_vue_type_style_index_0_id_46236f3e_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_nuxt_webpack_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BaseLoading_vue_vue_type_style_index_0_id_46236f3e_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_nuxt_webpack_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BaseLoading_vue_vue_type_style_index_0_id_46236f3e_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 87:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".fixvh[data-v-46236f3e]{position:fixed;top:0;left:0;width:100%;height:100vh;z-index:10;background-color:#333;opacity:.6}button.btn-sm[data-v-46236f3e]{background:#fbfcff;border:1px solid #e5f1fb;border-radius:6px;padding:10px 20px;font-weight:500;font-size:14px;color:#333;margin-right:10px}button.btn-sm-active[data-v-46236f3e]{background:#f7931e;border:1px solid transparent;color:#fff}.modal-card[data-v-46236f3e]{background-color:#fff;border-radius:8px;padding:15px 20px;position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);z-index:12}.modal-card button.otmen[data-v-46236f3e]{background:#c5c5c5!important}.modal-card .modal-title[data-v-46236f3e]{display:flex;justify-content:space-between;align-items:center;margin-bottom:20px}.modal-card .modal-title h2[data-v-46236f3e]{font-size:20px;color:#333}.modal-card .modal-title .times[data-v-46236f3e]{color:#333;font-size:16px}.modal-card .modal-title .times[data-v-46236f3e]:hover{color:#f7931e}@media(max-width:475px){.modal-card[data-v-46236f3e]{width:90%!important}}button[data-v-46236f3e]{cursor:pointer;border:none;background-color:transparent}.btn-simple-active[data-v-46236f3e]{background:#f7931e;border:1px solid transparent;color:#fff}h6.error-text[data-v-46236f3e]{display:none;font-weight:400;font-size:13px;line-height:14px;margin-top:4px;color:#f94040}div.input-form[data-v-46236f3e]{margin-bottom:15px}div.input-form div.input-rel[data-v-46236f3e]{position:relative}div.input-form div.input-rel button.btn-icon[data-v-46236f3e]{position:absolute;right:10px;top:50%;transform:translateY(-50%)}div.input-form div.input-rel button.btn-icon .icon[data-v-46236f3e]{font-size:16px;color:rgba(51,51,51,.2)}div.input-form input[data-v-46236f3e]{width:100%;height:40px;border:1px solid #aaa;border-radius:8px;font-size:16px;padding:0 15px;font-weight:500}div.input-form input[data-v-46236f3e]:hover{border:1px solid #888}div.input-form input[data-v-46236f3e]:focus{outline:none;border:1px solid #f7931e}div.form-error input[data-v-46236f3e]{border:1px solid #f94040!important}div.form-error .error-text[data-v-46236f3e]{display:block!important}.btn-simple[data-v-46236f3e]{background:#fff;border:1px solid #f7931e;border-radius:6px;padding:8px 15px;display:inline-block;font-weight:500;font-size:14px;color:#f7931e}.btn-simple[data-v-46236f3e]:hover{color:#fff;background-color:#f7931e}@media(max-width:543px){.popular__container .img-fluid[data-v-46236f3e]{height:170px!important;-o-object-fit:cover!important;object-fit:cover!important}.other__item__banner--carousel .b-carousel .carousel-inner .b-carousel-slide img[data-v-46236f3e]{min-height:250px!important}}.other__item__banner--carousel .b-carousel .carousel-inner .b-carousel-slide img[data-v-46236f3e]{min-height:450px}.success-info[data-v-46236f3e]{position:fixed;top:10px;right:20px;width:320px;z-index:12345}div.card-row[data-v-46236f3e]{display:flex;margin:0 -10px;flex-wrap:wrap}.hover-shadow[data-v-46236f3e]:hover{box-shadow:0 1px 10px rgba(0,0,0,.18)}div.card-5[data-v-46236f3e]{width:20%;padding:0 10px}div.card-4[data-v-46236f3e]{width:25%;padding:0 10px}div.card-3[data-v-46236f3e]{width:33.3333333333%;padding:0 10px}@media(max-width:1020px){div.card-4[data-v-46236f3e],div.card-5[data-v-46236f3e]{width:33.3333333333%}}@media(max-width:768px){div.card-3[data-v-46236f3e],div.card-4[data-v-46236f3e],div.card-5[data-v-46236f3e]{width:50%}.catalog__container[data-v-46236f3e]{padding-top:5px!important}.filtr__section .catalog__page__filtr__box[data-v-46236f3e]{position:relative!important;top:unset!important}.catalog__container .catalog__filtraiton__box .filtraiton__form__box .filtraiton__form--submit[data-v-46236f3e]{margin-bottom:0!important}.catalog__container .catalog__page__about[data-v-46236f3e]{padding-left:0!important}}@-webkit-keyframes move__360-data-v-46236f3e{0%{transform:translateX(0deg)}to{transform:translateX(1turn)}}@keyframes move__360-data-v-46236f3e{0%{transform:translateX(0deg)}to{transform:translateX(1turn)}}h6.error-text[data-v-46236f3e]{font-size:12px;color:red;margin-bottom:0}h1.title-form[data-v-46236f3e]{font-size:24px;text-align:center}.popular__container[data-v-46236f3e]{margin-top:40px}.popular__container .popular__heading[data-v-46236f3e]{font-family:Roboto,sans-serif;font-weight:500;font-size:48px;color:#f7931e;margin-bottom:40px;text-shadow:0 0 3px rgba(247,147,30,.3);display:inline-block}.popular__container .popular__item-box[data-v-46236f3e]{display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap}.popular__container .popular__item-box[data-v-46236f3e]:after{content:\"\";flex:0 1 32%}.popular__container .popular__item-box .popular__items[data-v-46236f3e]{flex:0 0 auto;width:222px;height:370px;background-color:#fff;box-shadow:0 1px 3px rgba(0,0,0,.12);border-radius:5px;overflow:hidden;margin:0 2px 37px;cursor:pointer;transition:all .2s}.popular__container .popular__item-box .popular__items[data-v-46236f3e]:hover{transform:scale(1.07)}.popular__container .popular__item-box .popular__items[data-v-46236f3e]:hover:after{opacity:0}.popular__container .popular__item-box .popular__items[data-v-46236f3e]:active{outline:none;transform:scale(1.03)}.popular__container .popular__item-box .popular__items .popular__items__img[data-v-46236f3e]{width:222px;height:222px}.popular__container .popular__item-box .popular__items .popular__items__desription[data-v-46236f3e]{padding-left:16px;display:flex;flex-direction:column;justify-content:flex-start;position:relative}.popular__container .popular__item-box .popular__items .popular__items__desription .name__rating[data-v-46236f3e]{margin-top:2px;display:flex;justify-content:space-between;align-items:center;padding-right:10px}.popular__container .popular__item-box .popular__items .popular__items__desription .name__rating .magazine__item--rating[data-v-46236f3e]{display:flex;align-items:center}.popular__container .popular__item-box .popular__items .popular__items__desription .name__rating .magazine__item--rating img[data-v-46236f3e]{width:12px;height:12px;margin-right:2px}.popular__container .popular__item-box .popular__items .popular__items__desription .name__rating .magazine__item--rating span[data-v-46236f3e]{color:#666;opacity:.7;font-size:10px}.popular__container .popular__item-box .popular__items .popular__items__desription--name[data-v-46236f3e]{margin-top:5px;font-family:Roboto;font-weight:500;font-size:14px;line-height:16px;opacity:.7;color:#666}.popular__container .popular__item-box .popular__items .popular__items__desription--categorie[data-v-46236f3e]{margin:9px 0;font-family:Roboto;font-weight:700;font-size:16px;line-height:100%;color:#000;height:60px}.popular__container .popular__item-box .popular__items .popular__items__desription--price[data-v-46236f3e]{font-family:Roboto;font-weight:700;font-size:20px;line-height:100%;color:#219ebc}.popular__container .popular__item-box .popular__items .popular__items__desription--old--price[data-v-46236f3e]{margin-bottom:2px;font-size:14px;color:#f7931e;text-decoration:line-through}.popular__container .popular__btn[data-v-46236f3e],.popular__container .popular__btn[data-v-46236f3e]:link,.popular__container .popular__btn[data-v-46236f3e]:visited{display:block;border-radius:5px;transition:all .2s;width:224px;height:50px;margin:20px auto 0;text-align:center;padding:10px;text-decoration:none;font-family:inherit;font-weight:500;font-size:18px;color:hsla(0,0%,100%,.9);background-color:#f7931e;border:none;cursor:pointer}.popular__container .popular__btn[data-v-46236f3e]:hover{transform:scale(1.07)}.popular__container .popular__btn[data-v-46236f3e]:hover:after{opacity:0}.popular__container .popular__btn[data-v-46236f3e]:active{outline:none;transform:scale(1.03)}.popular__container .popular__btn[data-v-46236f3e]:active,.popular__container .popular__btn[data-v-46236f3e]:hover{background-color:#fff;color:#f7931e;border:1px solid #f7931e}.popular__container .popular__dropdown__box[data-v-46236f3e]{position:relative}.popular__container .popular__dropdown__box .popular__dropdown--btn[data-v-46236f3e]{width:170px;height:36px;border:1px solid #f7931e;border-radius:5px;background-color:transparent;padding:0 10px;font-family:Roboto;font-weight:500;font-size:16px;color:#f7931e;display:flex;justify-content:space-between;align-items:center}.popular__container .popular__dropdown__box .popular__dropdown--btn:hover+.popular__dropdown__content[data-v-46236f3e]{visibility:visible;opacity:1}.popular__container .popular__dropdown__box .popular__dropdown__content[data-v-46236f3e]{position:absolute;left:0;top:36px;width:170px;display:flex;flex-direction:column;justify-content:center;transition:all .2s;visibility:hidden;opacity:0;border-radius:5px;overflow:hidden;box-shadow:0 2px 6px rgba(0,0,0,.3)}.popular__container .popular__dropdown__box .popular__dropdown__content .popular__dropdown--link[data-v-46236f3e]{color:#f7931e;background-color:#fcf6f6;padding:5px;text-decoration:none}.popular__container .popular__dropdown__box .popular__dropdown__content .popular__dropdown--link[data-v-46236f3e]:active,.popular__container .popular__dropdown__box .popular__dropdown__content .popular__dropdown--link[data-v-46236f3e]:hover{font-weight:500}.popular__container .popular__dropdown__box .popular__dropdown__content[data-v-46236f3e]:active,.popular__container .popular__dropdown__box .popular__dropdown__content[data-v-46236f3e]:hover{visibility:visible;opacity:1}@media only screen and (max-width:1440px)and (min-width:1200px){.popular__container .popular__item-box[data-v-46236f3e]{padding:0 4px}}@media only screen and (max-width:1200px)and (min-width:765px){.popular__container[data-v-46236f3e]{padding:20px}.popular__container .popular__item-box .popular__items[data-v-46236f3e]{width:229px;height:381.67px;margin-bottom:22px}.popular__container .popular__item-box .popular__items .popular__items__img[data-v-46236f3e]{width:230px;height:230px}}@media only screen and (max-width:765px){.popular__container[data-v-46236f3e]{padding:16px}.popular__container .popular__heading[data-v-46236f3e]{font-size:24px;margin-bottom:28px}.popular__container .popular__item-box .popular__items[data-v-46236f3e]{width:164px;height:273px;margin-bottom:14px}.popular__container .popular__item-box .popular__items .popular__items__img[data-v-46236f3e]{width:164px;height:164px}.popular__container .popular__item-box .popular__items .popular__items__desription[data-v-46236f3e]{padding-left:12px}.popular__container .popular__item-box .popular__items .popular__items__desription--name[data-v-46236f3e]{margin-top:3.7px;font-size:10px}.popular__container .popular__item-box .popular__items .popular__items__desription--categorie[data-v-46236f3e]{margin:6.6px 0 0;font-size:12px;height:50px;padding:0}.popular__container .popular__item-box .popular__items .popular__items__desription--price[data-v-46236f3e]{font-size:14px}.popular__container .popular__item-box .popular__items .popular__items__desription--old--price[data-v-46236f3e]{font-size:10px}.popular__container .popular__btn[data-v-46236f3e],.popular__container .popular__btn[data-v-46236f3e]:link,.popular__container .popular__btn[data-v-46236f3e]:visited{width:160px;height:35px;margin-top:18px;padding:8px;font-size:12px}}@media only screen and (max-width:365px){.popular__container[data-v-46236f3e]{padding:14px}.popular__container .popular__heading[data-v-46236f3e]{font-size:22px;margin-bottom:12px}.popular__container .popular__item-box .popular__items[data-v-46236f3e]{width:140px;height:245px}.popular__container .popular__item-box .popular__items .popular__items__img[data-v-46236f3e]{width:140px;height:140px}.popular__container .popular__item-box .popular__items .popular__items__desription--categorie[data-v-46236f3e]{margin-top:3.6px;font-size:12px;height:2.8em;padding:0}.popular__container .popular__item-box .popular__items .popular__items__desription--price[data-v-46236f3e]{font-size:12px}.popular__container .popular__item-box .popular__items .popular__items__desription--old--price[data-v-46236f3e]{font-size:9px;bottom:17px}}div.title-box[data-v-46236f3e]{padding:40px 0}div.title-box ul li[data-v-46236f3e],div.title-box ul li a[data-v-46236f3e]{display:inline-block;font-weight:400;font-size:15px;line-height:18px;color:#000}div.title-box ul li a[data-v-46236f3e]:hover{color:#f7931e}div.fixvh-category[data-v-46236f3e]{z-index:100;width:100%;background-color:#333;opacity:.5}div.category-modal[data-v-46236f3e],div.fixvh-category[data-v-46236f3e]{position:fixed;top:0;left:0;height:100vh;z-index:1000}div.category-modal[data-v-46236f3e]{width:90%;transform:translateX(0);opacity:1;transition:.2s}div.category-modal div.category-nav[data-v-46236f3e]{width:100%;height:100%;background-color:#fff;position:relative;z-index:101;display:flex;padding:15px 0}div.category-modal div.category-nav button.close-btn[data-v-46236f3e]{position:absolute;width:30px;height:30px;border-radius:100%;background-color:#f7931e;border:none;right:-41px;top:8px;z-index:101}div.category-modal div.category-nav button.close-btn .icon-times[data-v-46236f3e]{color:#fff}div.category-modal div.category-nav div.scroll-modal[data-v-46236f3e]{overflow-y:scroll;overflow-x:hidden}div.category-modal div.category-nav div.category-left[data-v-46236f3e]{width:400px;padding:0 15px;border-right:1px solid #bbb}div.category-modal div.category-nav div.category-left ul[data-v-46236f3e]{list-style-type:none;padding-right:15px}div.category-modal div.category-nav div.category-left li button[data-v-46236f3e]{display:block;padding:8px 15px;border-radius:5px;font-size:16px;color:#333;font-weight:500;border:none;background-color:transparent;width:100%;text-align:left}div.category-modal div.category-nav div.category-left li button[data-v-46236f3e]:hover{color:#f7931e}div.category-modal div.category-nav div.category-left li.active-li button[data-v-46236f3e]{background-color:#f7931e;color:#fff}div.category-modal div.category-nav div.category-content[data-v-46236f3e]{width:calc(100% - 400px);padding:0 30px;position:relative}div.category-modal div.category-nav div.category-content h3.category-title[data-v-46236f3e]{font-size:24px;font-weight:500;margin-bottom:25px}div.category-modal div.category-nav div.category-content div.visible-all a[data-v-46236f3e]{font-size:16px;color:#888;margin-bottom:5px;display:block}div.category-modal div.category-nav div.category-content a[data-v-46236f3e]{transition:.2s}div.category-modal div.category-nav div.category-content ul[data-v-46236f3e]{list-style-type:none;margin-bottom:25px}div.category-modal div.category-nav div.category-content ul a[data-v-46236f3e]{font-size:16px;color:#888;margin-bottom:5px;display:block}div.category-modal div.category-nav div.category-content a.click-parent[data-v-46236f3e]{font-size:18px;margin-bottom:10px;color:#333;display:block;font-weight:500}div.category-modal div.category-nav div.category-content a[data-v-46236f3e]:hover{color:#f7931e!important}div.category-modal div.category-nav div.scroll-modal[data-v-46236f3e]::-webkit-scrollbar{width:5px}div.category-modal div.category-nav div.scroll-modal[data-v-46236f3e]::-webkit-scrollbar-track{background:#f1f1f1}div.category-modal div.category-nav div.scroll-modal[data-v-46236f3e]::-webkit-scrollbar-thumb{background:#f7931e;border-radius:5px}div.category-modal div.category-nav div.scroll-modal[data-v-46236f3e]::-webkit-scrollbar-thumb:hover{background:#f7931e}div.hidden-category[data-v-46236f3e]{transform:translateX(-104%);opacity:0}div.category-mobile[data-v-46236f3e]{position:fixed;z-index:1234454545;top:0;left:0;width:100%;height:100vh;background-color:#fff;padding:15px}div.category-mobile a.visible-all-mobile[data-v-46236f3e]{font-size:16px;color:#333}div.category-mobile div.title-t[data-v-46236f3e]{display:flex;justify-content:space-between;align-items:center}div.category-mobile div.title-t h3[data-v-46236f3e]{font-size:24px;margin-bottom:0}div.category-mobile div.title-t button[data-v-46236f3e]{border:none;background-color:transparent}div.category-mobile div.title-t button .close-mobile[data-v-46236f3e]{font-size:26px;color:#f7931e}div.category-mobile div.category-acc[data-v-46236f3e]{margin-top:20px;max-height:calc(100vh - 100px);overflow-y:scroll}div.category-mobile div.category-acc div.acc-item[data-v-46236f3e]{margin-bottom:5px}div.category-mobile div.category-acc div.acc-item button[data-v-46236f3e]{width:100%;display:flex;justify-content:space-between;align-items:center;background:#fff7ec;padding:10px 15px;border-radius:5px;border:1px solid #fff7ec}div.category-mobile div.category-acc div.acc-item button b[data-v-46236f3e]{font-size:18px}div.category-mobile div.category-acc div.acc-item button .icon-down[data-v-46236f3e]{font-size:18px;color:#f7931e}div.category-mobile div.category-acc div.acc-item button .rotate[data-v-46236f3e]{transform:rotate(-180deg)}div.category-mobile div.category-acc div.acc-item div.acc-content[data-v-46236f3e]{padding:15px}div.category-mobile div.category-acc div.acc-item div.acc-content ul[data-v-46236f3e]{list-style-type:none}div.category-mobile div.category-acc div.acc-item div.acc-content ul li a[data-v-46236f3e]{color:#333;display:block;font-size:16px!important;font-weight:700;margin-bottom:5px}div.category-mobile div.category-acc div.acc-item div.acc-content ul li a[data-v-46236f3e]:active{color:#f7931e}div.category-mobile div.category-acc div.acc-item div.acc-content ul li ul[data-v-46236f3e]{margin-bottom:15px}div.category-mobile div.category-acc div.acc-item div.acc-content ul li ul li a[data-v-46236f3e]{font-weight:400;color:#777}@media(max-width:800px){div.category-modal div.category-nav div.category-left[data-v-46236f3e]{width:280px}div.category-modal div.category-nav div.category-content[data-v-46236f3e]{width:calc(100% - 280px)}}.load__conatiner[data-v-46236f3e]{position:fixed;top:0;left:0;background-color:#fff;width:100%;height:100vh;z-index:120;display:flex;flex-direction:row;justify-content:center}@media only screen and (max-width:560px){.load__svg[data-v-46236f3e]{width:150px;height:150px}}@media only screen and (max-width:370px){.load__svg[data-v-46236f3e]{width:100px;height:100px}}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ })

};;
//# sourceMappingURL=faq.js.map