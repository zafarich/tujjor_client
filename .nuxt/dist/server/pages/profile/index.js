exports.ids = [44,20];
exports.modules = {

/***/ 171:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(221);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("640912e7", content, true, context)
};

/***/ }),

/***/ 220:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_nuxt_webpack_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_d673b6b8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(171);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_nuxt_webpack_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_d673b6b8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_nuxt_webpack_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_d673b6b8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_nuxt_webpack_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_d673b6b8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_nuxt_webpack_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_d673b6b8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 221:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".fixvh[data-v-d673b6b8]{position:fixed;top:0;left:0;width:100%;height:100vh;z-index:10;background-color:#333;opacity:.6}button.btn-sm[data-v-d673b6b8]{background:#fbfcff;border:1px solid #e5f1fb;border-radius:6px;padding:10px 20px;font-weight:500;font-size:14px;color:#333;margin-right:10px}button.btn-sm-active[data-v-d673b6b8]{background:#f7931e;border:1px solid transparent;color:#fff}.modal-card[data-v-d673b6b8]{background-color:#fff;border-radius:8px;padding:15px 20px;position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);z-index:12}.modal-card button.otmen[data-v-d673b6b8]{background:#c5c5c5!important}.modal-card .modal-title[data-v-d673b6b8]{display:flex;justify-content:space-between;align-items:center;margin-bottom:20px}.modal-card .modal-title h2[data-v-d673b6b8]{font-size:20px;color:#333}.modal-card .modal-title .times[data-v-d673b6b8]{color:#333;font-size:16px}.modal-card .modal-title .times[data-v-d673b6b8]:hover{color:#f7931e}@media(max-width:475px){.modal-card[data-v-d673b6b8]{width:90%!important}}button[data-v-d673b6b8]{cursor:pointer;border:none;background-color:transparent}.btn-simple-active[data-v-d673b6b8]{background:#f7931e;border:1px solid transparent;color:#fff}h6.error-text[data-v-d673b6b8]{display:none;font-weight:400;font-size:13px;line-height:14px;margin-top:4px;color:#f94040}div.input-form[data-v-d673b6b8]{margin-bottom:15px}div.input-form div.input-rel[data-v-d673b6b8]{position:relative}div.input-form div.input-rel button.btn-icon[data-v-d673b6b8]{position:absolute;right:10px;top:50%;transform:translateY(-50%)}div.input-form div.input-rel button.btn-icon .icon[data-v-d673b6b8]{font-size:16px;color:rgba(51,51,51,.2)}div.input-form input[data-v-d673b6b8]{width:100%;height:40px;border:1px solid #aaa;border-radius:8px;font-size:16px;padding:0 15px;font-weight:500}div.input-form input[data-v-d673b6b8]:hover{border:1px solid #888}div.input-form input[data-v-d673b6b8]:focus{outline:none;border:1px solid #f7931e}div.form-error input[data-v-d673b6b8]{border:1px solid #f94040!important}div.form-error .error-text[data-v-d673b6b8]{display:block!important}.btn-simple[data-v-d673b6b8]{background:#fff;border:1px solid #f7931e;border-radius:6px;padding:8px 15px;display:inline-block;font-weight:500;font-size:14px;color:#f7931e}.btn-simple[data-v-d673b6b8]:hover{color:#fff;background-color:#f7931e}@media(max-width:543px){.popular__container .img-fluid[data-v-d673b6b8]{height:170px!important;-o-object-fit:cover!important;object-fit:cover!important}.other__item__banner--carousel .b-carousel .carousel-inner .b-carousel-slide img[data-v-d673b6b8]{min-height:250px!important}}.other__item__banner--carousel .b-carousel .carousel-inner .b-carousel-slide img[data-v-d673b6b8]{min-height:450px}.success-info[data-v-d673b6b8]{position:fixed;top:10px;right:20px;width:320px;z-index:12345}div.card-row[data-v-d673b6b8]{display:flex;margin:0 -10px;flex-wrap:wrap}.hover-shadow[data-v-d673b6b8]:hover{box-shadow:0 1px 10px rgba(0,0,0,.18)}div.card-5[data-v-d673b6b8]{width:20%;padding:0 10px}div.card-4[data-v-d673b6b8]{width:25%;padding:0 10px}div.card-3[data-v-d673b6b8]{width:33.3333333333%;padding:0 10px}@media(max-width:1020px){div.card-4[data-v-d673b6b8],div.card-5[data-v-d673b6b8]{width:33.3333333333%}}@media(max-width:768px){div.card-3[data-v-d673b6b8],div.card-4[data-v-d673b6b8],div.card-5[data-v-d673b6b8]{width:50%}.catalog__container[data-v-d673b6b8]{padding-top:5px!important}.filtr__section .catalog__page__filtr__box[data-v-d673b6b8]{position:relative!important;top:unset!important}.catalog__container .catalog__filtraiton__box .filtraiton__form__box .filtraiton__form--submit[data-v-d673b6b8]{margin-bottom:0!important}.catalog__container .catalog__page__about[data-v-d673b6b8]{padding-left:0!important}}@-webkit-keyframes move__360-data-v-d673b6b8{0%{transform:translateX(0deg)}to{transform:translateX(1turn)}}@keyframes move__360-data-v-d673b6b8{0%{transform:translateX(0deg)}to{transform:translateX(1turn)}}h6.error-text[data-v-d673b6b8]{font-size:12px;color:red;margin-bottom:0}h1.title-form[data-v-d673b6b8]{font-size:24px;text-align:center}.popular__container[data-v-d673b6b8]{margin-top:40px}.popular__container .popular__heading[data-v-d673b6b8]{font-family:Roboto,sans-serif;font-weight:500;font-size:48px;color:#f7931e;margin-bottom:40px;text-shadow:0 0 3px rgba(247,147,30,.3);display:inline-block}.popular__container .popular__item-box[data-v-d673b6b8]{display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap}.popular__container .popular__item-box[data-v-d673b6b8]:after{content:\"\";flex:0 1 32%}.popular__container .popular__item-box .popular__items[data-v-d673b6b8]{flex:0 0 auto;width:222px;height:370px;background-color:#fff;box-shadow:0 1px 3px rgba(0,0,0,.12);border-radius:5px;overflow:hidden;margin:0 2px 37px;cursor:pointer;transition:all .2s}.popular__container .popular__item-box .popular__items[data-v-d673b6b8]:hover{transform:scale(1.07)}.popular__container .popular__item-box .popular__items[data-v-d673b6b8]:hover:after{opacity:0}.popular__container .popular__item-box .popular__items[data-v-d673b6b8]:active{outline:none;transform:scale(1.03)}.popular__container .popular__item-box .popular__items .popular__items__img[data-v-d673b6b8]{width:222px;height:222px}.popular__container .popular__item-box .popular__items .popular__items__desription[data-v-d673b6b8]{padding-left:16px;display:flex;flex-direction:column;justify-content:flex-start;position:relative}.popular__container .popular__item-box .popular__items .popular__items__desription .name__rating[data-v-d673b6b8]{margin-top:2px;display:flex;justify-content:space-between;align-items:center;padding-right:10px}.popular__container .popular__item-box .popular__items .popular__items__desription .name__rating .magazine__item--rating[data-v-d673b6b8]{display:flex;align-items:center}.popular__container .popular__item-box .popular__items .popular__items__desription .name__rating .magazine__item--rating img[data-v-d673b6b8]{width:12px;height:12px;margin-right:2px}.popular__container .popular__item-box .popular__items .popular__items__desription .name__rating .magazine__item--rating span[data-v-d673b6b8]{color:#666;opacity:.7;font-size:10px}.popular__container .popular__item-box .popular__items .popular__items__desription--name[data-v-d673b6b8]{margin-top:5px;font-family:Roboto;font-weight:500;font-size:14px;line-height:16px;opacity:.7;color:#666}.popular__container .popular__item-box .popular__items .popular__items__desription--categorie[data-v-d673b6b8]{margin:9px 0;font-family:Roboto;font-weight:700;font-size:16px;line-height:100%;color:#000;height:60px}.popular__container .popular__item-box .popular__items .popular__items__desription--price[data-v-d673b6b8]{font-family:Roboto;font-weight:700;font-size:20px;line-height:100%;color:#219ebc}.popular__container .popular__item-box .popular__items .popular__items__desription--old--price[data-v-d673b6b8]{margin-bottom:2px;font-size:14px;color:#f7931e;text-decoration:line-through}.popular__container .popular__btn[data-v-d673b6b8],.popular__container .popular__btn[data-v-d673b6b8]:link,.popular__container .popular__btn[data-v-d673b6b8]:visited{display:block;border-radius:5px;transition:all .2s;width:224px;height:50px;margin:20px auto 0;text-align:center;padding:10px;text-decoration:none;font-family:inherit;font-weight:500;font-size:18px;color:hsla(0,0%,100%,.9);background-color:#f7931e;border:none;cursor:pointer}.popular__container .popular__btn[data-v-d673b6b8]:hover{transform:scale(1.07)}.popular__container .popular__btn[data-v-d673b6b8]:hover:after{opacity:0}.popular__container .popular__btn[data-v-d673b6b8]:active{outline:none;transform:scale(1.03)}.popular__container .popular__btn[data-v-d673b6b8]:active,.popular__container .popular__btn[data-v-d673b6b8]:hover{background-color:#fff;color:#f7931e;border:1px solid #f7931e}.popular__container .popular__dropdown__box[data-v-d673b6b8]{position:relative}.popular__container .popular__dropdown__box .popular__dropdown--btn[data-v-d673b6b8]{width:170px;height:36px;border:1px solid #f7931e;border-radius:5px;background-color:transparent;padding:0 10px;font-family:Roboto;font-weight:500;font-size:16px;color:#f7931e;display:flex;justify-content:space-between;align-items:center}.popular__container .popular__dropdown__box .popular__dropdown--btn:hover+.popular__dropdown__content[data-v-d673b6b8]{visibility:visible;opacity:1}.popular__container .popular__dropdown__box .popular__dropdown__content[data-v-d673b6b8]{position:absolute;left:0;top:36px;width:170px;display:flex;flex-direction:column;justify-content:center;transition:all .2s;visibility:hidden;opacity:0;border-radius:5px;overflow:hidden;box-shadow:0 2px 6px rgba(0,0,0,.3)}.popular__container .popular__dropdown__box .popular__dropdown__content .popular__dropdown--link[data-v-d673b6b8]{color:#f7931e;background-color:#fcf6f6;padding:5px;text-decoration:none}.popular__container .popular__dropdown__box .popular__dropdown__content .popular__dropdown--link[data-v-d673b6b8]:active,.popular__container .popular__dropdown__box .popular__dropdown__content .popular__dropdown--link[data-v-d673b6b8]:hover{font-weight:500}.popular__container .popular__dropdown__box .popular__dropdown__content[data-v-d673b6b8]:active,.popular__container .popular__dropdown__box .popular__dropdown__content[data-v-d673b6b8]:hover{visibility:visible;opacity:1}@media only screen and (max-width:1440px)and (min-width:1200px){.popular__container .popular__item-box[data-v-d673b6b8]{padding:0 4px}}@media only screen and (max-width:1200px)and (min-width:765px){.popular__container[data-v-d673b6b8]{padding:20px}.popular__container .popular__item-box .popular__items[data-v-d673b6b8]{width:229px;height:381.67px;margin-bottom:22px}.popular__container .popular__item-box .popular__items .popular__items__img[data-v-d673b6b8]{width:230px;height:230px}}@media only screen and (max-width:765px){.popular__container[data-v-d673b6b8]{padding:16px}.popular__container .popular__heading[data-v-d673b6b8]{font-size:24px;margin-bottom:28px}.popular__container .popular__item-box .popular__items[data-v-d673b6b8]{width:164px;height:273px;margin-bottom:14px}.popular__container .popular__item-box .popular__items .popular__items__img[data-v-d673b6b8]{width:164px;height:164px}.popular__container .popular__item-box .popular__items .popular__items__desription[data-v-d673b6b8]{padding-left:12px}.popular__container .popular__item-box .popular__items .popular__items__desription--name[data-v-d673b6b8]{margin-top:3.7px;font-size:10px}.popular__container .popular__item-box .popular__items .popular__items__desription--categorie[data-v-d673b6b8]{margin:6.6px 0 0;font-size:12px;height:50px;padding:0}.popular__container .popular__item-box .popular__items .popular__items__desription--price[data-v-d673b6b8]{font-size:14px}.popular__container .popular__item-box .popular__items .popular__items__desription--old--price[data-v-d673b6b8]{font-size:10px}.popular__container .popular__btn[data-v-d673b6b8],.popular__container .popular__btn[data-v-d673b6b8]:link,.popular__container .popular__btn[data-v-d673b6b8]:visited{width:160px;height:35px;margin-top:18px;padding:8px;font-size:12px}}@media only screen and (max-width:365px){.popular__container[data-v-d673b6b8]{padding:14px}.popular__container .popular__heading[data-v-d673b6b8]{font-size:22px;margin-bottom:12px}.popular__container .popular__item-box .popular__items[data-v-d673b6b8]{width:140px;height:245px}.popular__container .popular__item-box .popular__items .popular__items__img[data-v-d673b6b8]{width:140px;height:140px}.popular__container .popular__item-box .popular__items .popular__items__desription--categorie[data-v-d673b6b8]{margin-top:3.6px;font-size:12px;height:2.8em;padding:0}.popular__container .popular__item-box .popular__items .popular__items__desription--price[data-v-d673b6b8]{font-size:12px}.popular__container .popular__item-box .popular__items .popular__items__desription--old--price[data-v-d673b6b8]{font-size:9px;bottom:17px}}div.title-box[data-v-d673b6b8]{padding:40px 0}div.title-box ul li[data-v-d673b6b8],div.title-box ul li a[data-v-d673b6b8]{display:inline-block;font-weight:400;font-size:15px;line-height:18px;color:#000}div.title-box ul li a[data-v-d673b6b8]:hover{color:#f7931e}div.fixvh-category[data-v-d673b6b8]{z-index:100;width:100%;background-color:#333;opacity:.5}div.category-modal[data-v-d673b6b8],div.fixvh-category[data-v-d673b6b8]{position:fixed;top:0;left:0;height:100vh;z-index:1000}div.category-modal[data-v-d673b6b8]{width:90%;transform:translateX(0);opacity:1;transition:.2s}div.category-modal div.category-nav[data-v-d673b6b8]{width:100%;height:100%;background-color:#fff;position:relative;z-index:101;display:flex;padding:15px 0}div.category-modal div.category-nav button.close-btn[data-v-d673b6b8]{position:absolute;width:30px;height:30px;border-radius:100%;background-color:#f7931e;border:none;right:-41px;top:8px;z-index:101}div.category-modal div.category-nav button.close-btn .icon-times[data-v-d673b6b8]{color:#fff}div.category-modal div.category-nav div.scroll-modal[data-v-d673b6b8]{overflow-y:scroll;overflow-x:hidden}div.category-modal div.category-nav div.category-left[data-v-d673b6b8]{width:400px;padding:0 15px;border-right:1px solid #bbb}div.category-modal div.category-nav div.category-left ul[data-v-d673b6b8]{list-style-type:none;padding-right:15px}div.category-modal div.category-nav div.category-left li button[data-v-d673b6b8]{display:block;padding:8px 15px;border-radius:5px;font-size:16px;color:#333;font-weight:500;border:none;background-color:transparent;width:100%;text-align:left}div.category-modal div.category-nav div.category-left li button[data-v-d673b6b8]:hover{color:#f7931e}div.category-modal div.category-nav div.category-left li.active-li button[data-v-d673b6b8]{background-color:#f7931e;color:#fff}div.category-modal div.category-nav div.category-content[data-v-d673b6b8]{width:calc(100% - 400px);padding:0 30px;position:relative}div.category-modal div.category-nav div.category-content h3.category-title[data-v-d673b6b8]{font-size:24px;font-weight:500;margin-bottom:25px}div.category-modal div.category-nav div.category-content div.visible-all a[data-v-d673b6b8]{font-size:16px;color:#888;margin-bottom:5px;display:block}div.category-modal div.category-nav div.category-content a[data-v-d673b6b8]{transition:.2s}div.category-modal div.category-nav div.category-content ul[data-v-d673b6b8]{list-style-type:none;margin-bottom:25px}div.category-modal div.category-nav div.category-content ul a[data-v-d673b6b8]{font-size:16px;color:#888;margin-bottom:5px;display:block}div.category-modal div.category-nav div.category-content a.click-parent[data-v-d673b6b8]{font-size:18px;margin-bottom:10px;color:#333;display:block;font-weight:500}div.category-modal div.category-nav div.category-content a[data-v-d673b6b8]:hover{color:#f7931e!important}div.category-modal div.category-nav div.scroll-modal[data-v-d673b6b8]::-webkit-scrollbar{width:5px}div.category-modal div.category-nav div.scroll-modal[data-v-d673b6b8]::-webkit-scrollbar-track{background:#f1f1f1}div.category-modal div.category-nav div.scroll-modal[data-v-d673b6b8]::-webkit-scrollbar-thumb{background:#f7931e;border-radius:5px}div.category-modal div.category-nav div.scroll-modal[data-v-d673b6b8]::-webkit-scrollbar-thumb:hover{background:#f7931e}div.hidden-category[data-v-d673b6b8]{transform:translateX(-104%);opacity:0}div.category-mobile[data-v-d673b6b8]{position:fixed;z-index:1234454545;top:0;left:0;width:100%;height:100vh;background-color:#fff;padding:15px}div.category-mobile a.visible-all-mobile[data-v-d673b6b8]{font-size:16px;color:#333}div.category-mobile div.title-t[data-v-d673b6b8]{display:flex;justify-content:space-between;align-items:center}div.category-mobile div.title-t h3[data-v-d673b6b8]{font-size:24px;margin-bottom:0}div.category-mobile div.title-t button[data-v-d673b6b8]{border:none;background-color:transparent}div.category-mobile div.title-t button .close-mobile[data-v-d673b6b8]{font-size:26px;color:#f7931e}div.category-mobile div.category-acc[data-v-d673b6b8]{margin-top:20px;max-height:calc(100vh - 100px);overflow-y:scroll}div.category-mobile div.category-acc div.acc-item[data-v-d673b6b8]{margin-bottom:5px}div.category-mobile div.category-acc div.acc-item button[data-v-d673b6b8]{width:100%;display:flex;justify-content:space-between;align-items:center;background:#fff7ec;padding:10px 15px;border-radius:5px;border:1px solid #fff7ec}div.category-mobile div.category-acc div.acc-item button b[data-v-d673b6b8]{font-size:18px}div.category-mobile div.category-acc div.acc-item button .icon-down[data-v-d673b6b8]{font-size:18px;color:#f7931e}div.category-mobile div.category-acc div.acc-item button .rotate[data-v-d673b6b8]{transform:rotate(-180deg)}div.category-mobile div.category-acc div.acc-item div.acc-content[data-v-d673b6b8]{padding:15px}div.category-mobile div.category-acc div.acc-item div.acc-content ul[data-v-d673b6b8]{list-style-type:none}div.category-mobile div.category-acc div.acc-item div.acc-content ul li a[data-v-d673b6b8]{color:#333;display:block;font-size:16px!important;font-weight:700;margin-bottom:5px}div.category-mobile div.category-acc div.acc-item div.acc-content ul li a[data-v-d673b6b8]:active{color:#f7931e}div.category-mobile div.category-acc div.acc-item div.acc-content ul li ul[data-v-d673b6b8]{margin-bottom:15px}div.category-mobile div.category-acc div.acc-item div.acc-content ul li ul li a[data-v-d673b6b8]{font-weight:400;color:#777}@media(max-width:800px){div.category-modal div.category-nav div.category-left[data-v-d673b6b8]{width:280px}div.category-modal div.category-nav div.category-content[data-v-d673b6b8]{width:calc(100% - 280px)}}.cog-icon[data-v-d673b6b8]{font-size:26px}.main-section[data-v-d673b6b8]{min-height:100vh}.main-section .profile-section .profile-box[data-v-d673b6b8]{width:100%;padding:25px 10px 10px;margin:0;background-color:#f7931f;position:relative}.main-section .profile-section .profile-box .profile[data-v-d673b6b8]{display:flex;flex-direction:column;justify-content:center;align-items:center}.main-section .profile-section .profile-box .profile #profile-photo[data-v-d673b6b8]{margin:10px auto;height:100px;width:100px;border-radius:50%;-o-object-fit:cover;object-fit:cover}.main-section .profile-section .profile-box .profile #profile-title[data-v-d673b6b8]{color:#fff;font-weight:700}.main-section .profile-section .profile-box .profile #profile-id[data-v-d673b6b8]{color:#fff}.main-section .profile-section .profile-box .edit-link[data-v-d673b6b8]{padding:5px 6px;background-color:#fcf6f6;color:#000;font-size:16px;border-radius:5px;position:absolute;top:7%;right:2%}.main-section .profile-section .tab-box[data-v-d673b6b8]{padding:60px 10px 10px}.main-section .profile-section .tab-box .nav-tabs[data-v-d673b6b8]{display:flex;justify-content:space-around}.main-section .profile-section .tab-box #svg-box[data-v-d673b6b8]{margin:10px auto;height:90px;width:90px;border-radius:14%;background-color:#f7931f}.main-section .profile-section .tab-box #svg-title[data-v-d673b6b8]{color:#f7931f;text-transform:uppercase}.checkout__order__item__box[data-v-d673b6b8]{margin:20px 15px 0;padding:20px;background:#fff;border-radius:5px;box-shadow:0 1px 3px rgba(0,0,0,.1);font-family:Roboto,sans-serif;display:flex;justify-content:space-between}.checkout__order__item__box[data-v-d673b6b8]:last-child{margin-bottom:70px;border-bottom:1px solid #ddd}.checkout__order__item__box .checkout__order__item--header[data-v-d673b6b8]{flex-basis:340px;flex-grow:0;display:flex;margin-right:100px}.checkout__order__item__box .checkout__order__item--header img[data-v-d673b6b8]{margin-right:18px;max-height:100%;border-radius:3px;height:120px;widows:120px}.checkout__order__item__box .checkout__order__item--header .checkout__order__item__description h3[data-v-d673b6b8]{font-family:Roboto;font-weight:700;font-size:18px;line-height:100%;overflow:hidden;height:2.8em;text-transform:uppercase;color:#000}.checkout__order__item__box .checkout__order__item--header .checkout__order__item__description .p-first[data-v-d673b6b8]{font-family:Roboto;font-weight:500;font-size:14px;line-height:100%;height:1em;overflow:hidden;color:#000;margin-bottom:40px}.checkout__order__item__box .checkout__order__item--header .checkout__order__item__description .p-second[data-v-d673b6b8]{font-family:Roboto,sans-serif;font-size:16px;line-height:100%;height:1em;overflow:hidden;font-weight:500;color:#000;display:flex;align-items:center}.checkout__order__item__box .checkout__order__item--header .checkout__order__item__description .p-second span[data-v-d673b6b8]{margin-right:5px;font-family:Roboto,sans-serif;font-weight:400;font-size:14px;line-height:100%;color:#023047}.checkout__order__item__box .checkout__order__item--secondary[data-v-d673b6b8]{flex:2;display:flex;flex-flow:row wrap;justify-content:space-between;align-items:center}.checkout__order__item__box .checkout__order__item--secondary .checkout__order__item--number[data-v-d673b6b8]{height:40px;display:flex;align-items:center;margin-bottom:30px;font-size:18px;font-weight:700}.checkout__order__item__box .checkout__order__item--secondary .checkout__order__item--number span[data-v-d673b6b8]{font-family:Roboto,sans-serif;font-weight:400;font-size:16px;line-height:100%;color:#023047;margin-right:10px}.checkout__order__item__box .checkout__order__item--secondary .checkout__order__item--number span.number[data-v-d673b6b8]{font-size:18px;font-weight:700}.checkout__order__item__box .checkout__order__item--secondary .checkout__order__item--price[data-v-d673b6b8]{flex-basis:500px;display:flex;justify-content:flex-end;margin-bottom:30px}.checkout__order__item__box .checkout__order__item--secondary .checkout__order__item--price span[data-v-d673b6b8]{font-family:Roboto,sans-serif;font-weight:600;font-size:28px;line-height:100%;color:#f7931e}.checkout__order__item__box .checkout__order__item--secondary .checkout__order__item--color[data-v-d673b6b8]{flex-grow:0}.checkout__order__item__box .checkout__order__item--secondary .checkout__order__item--color span[data-v-d673b6b8]{font-family:Roboto,sans-serif;font-weight:400;font-size:16px;line-height:100%;color:#023047;margin-right:5px}.checkout__order__item__box .checkout__order__item--secondary .checkout__order__item--color img[data-v-d673b6b8]{border-radius:3px;width:50px;height:50px}.checkout__order__item__box .checkout__order__item--secondary .checkout__order__item--delivered[data-v-d673b6b8]{order:2;display:flex;justify-content:flex-end;padding:11px 0 0}.checkout__order__item__box .checkout__order__item--secondary .checkout__order__item--delivered a[data-v-d673b6b8],.checkout__order__item__box .checkout__order__item--secondary .checkout__order__item--delivered button[data-v-d673b6b8]{padding:7px 10px 4px;border-radius:5px;background-color:#f7931e;font-family:Roboto,sans-serif;font-weight:600;font-size:20px;text-transform:uppercase;line-height:100%;color:#fff}.checkout__order__item__box .checkout__order__item--secondary .checkout__order__item--delivered button[data-v-d673b6b8]{outline:none;border:none}.checkout__order__price[data-v-d673b6b8]{display:flex;justify-content:space-between;margin-top:30px;padding-top:30px;border-top:1px solid #ddd}.checkout__order__price .checkout__order__price--total span[data-v-d673b6b8]{font-family:Roboto,sans-serif;font-weight:500;font-size:28px;line-height:100%;color:#000}.checkout__order__price .checkout__order__price--total .all__price[data-v-d673b6b8]{margin-left:10px;font-weight:900;color:#f7931e}@media screen and (max-width:1200px){.checkout__order__item__box .checkout__order__item--secondary .checkout__order__item--price[data-v-d673b6b8]{flex-basis:50%}}@media screen and (max-width:1045px){.checkout__order__item__box .checkout__order__item--header[data-v-d673b6b8]{flex-basis:300px}.checkout__order__item__box .checkout__order__item--secondary[data-v-d673b6b8]{align-items:baseline}.checkout__order__item__box .checkout__order__item--secondary .checkout__order__item--number[data-v-d673b6b8]{flex-basis:50%}.checkout__order__item__box .checkout__order__item--secondary .checkout__order__item--price[data-v-d673b6b8]{flex-basis:auto;order:1}}@media screen and (max-width:777px){.main-section .profile-section .profile-box[data-v-d673b6b8]{padding:10px 5px 5px}.main-section .profile-section .tab-box[data-v-d673b6b8]{padding:20px 5px 5px}.main-section .profile-section .tab-box #svg-box[data-v-d673b6b8]{height:80px;width:80px}.main-section .profile-section .tab-box #svg-title[data-v-d673b6b8]{font-size:20px}.checkout__order__item__box .checkout__order__item--header[data-v-d673b6b8]{margin-right:15px}.checkout__order__item__box .checkout__order__item--secondary .checkout__order__item--delivered a[data-v-d673b6b8],.checkout__order__item__box .checkout__order__item--secondary .checkout__order__item--delivered button[data-v-d673b6b8]{padding:7px 7px 4px;font-size:14px}}@media screen and (max-width:677px){.main-section .profile-section .profile-box[data-v-d673b6b8]{display:flex;flex-direction:column;align-items:center;justify-content:center}.main-section .profile-section .profile-box .edit-link[data-v-d673b6b8]{font-size:14px}.checkout__order__item__box[data-v-d673b6b8]{flex-direction:column}.checkout__order__item__box .checkout__order__item--header[data-v-d673b6b8]{flex-basis:auto;margin-right:0;margin-bottom:30px}}@media only screen and (max-width:440px){.main-section .profile-section .profile-box .edit-link[data-v-d673b6b8]{font-size:10px}.main-section .profile-section .profile #profile-photo[data-v-d673b6b8]{height:80px;width:80px}.main-section .profile-section .profile #profile-title[data-v-d673b6b8]{font-size:20px}.main-section .profile-section .profile #profile-id[data-v-d673b6b8]{font-size:15px}.main-section .profile-section .tab-box #svg-box[data-v-d673b6b8]{height:70px;width:70px}.main-section .profile-section .tab-box #svg-title[data-v-d673b6b8]{font-size:15px}}@media screen and (max-width:400px){.main-section .tab-box #svg-box[data-v-d673b6b8]{height:60px;width:60px}.main-section .tab-box #svg-title[data-v-d673b6b8]{font-size:14px}.checkout__order__item__box[data-v-d673b6b8]{flex-direction:column;padding:13px 17px 18px;margin:20px 0 0}.checkout__order__item__box .checkout__order__item--header[data-v-d673b6b8]{flex-basis:auto;margin-right:0;margin-bottom:0}.checkout__order__item__box .checkout__order__item--header img[data-v-d673b6b8]{height:95px;width:95px}.checkout__order__item__box .checkout__order__item--header .checkout__order__item__description h3[data-v-d673b6b8]{font-size:16px}.checkout__order__item__box .checkout__order__item--header .checkout__order__item__description .p-first[data-v-d673b6b8]{margin-bottom:3px}.checkout__order__item__box .checkout__order__item--header .checkout__order__item__description .p-second[data-v-d673b6b8]{font-size:14px}.checkout__order__item__box .checkout__order__item--secondary .checkout__order__item--number[data-v-d673b6b8]{margin-bottom:0}.checkout__order__item__box .checkout__order__item--secondary .checkout__order__item--number span[data-v-d673b6b8],.checkout__order__item__box .checkout__order__item--secondary .checkout__order__item--number span.number[data-v-d673b6b8]{font-size:14px}.checkout__order__item__box .checkout__order__item--secondary .checkout__order__item--price[data-v-d673b6b8]{margin-bottom:0}.checkout__order__item__box .checkout__order__item--secondary .checkout__order__item--price span[data-v-d673b6b8]{font-size:18px}.checkout__order__item__box .checkout__order__item--secondary .checkout__order__item--color span[data-v-d673b6b8]{font-size:14px}.checkout__order__item__box .checkout__order__item--secondary .checkout__order__item--color img[data-v-d673b6b8]{width:40px;height:40px}.checkout__order__item__box .checkout__order__item--secondary .checkout__order__item--delivered a[data-v-d673b6b8],.checkout__order__item__box .checkout__order__item--secondary .checkout__order__item--delivered button[data-v-d673b6b8]{font-size:11px}.checkout__order__price .checkout__order__price--total[data-v-d673b6b8]{flex-basis:100%;display:flex;justify-content:space-between;align-items:center}.checkout__order__price .checkout__order__price--total span[data-v-d673b6b8]{font-size:16px}.checkout__order__price .checkout__order__price--total .all__price[data-v-d673b6b8]{font-size:28px}}@media screen and (max-width:380px){.main-section .profile-section .tab-box #svg-title[data-v-d673b6b8]{font-size:13px}}@media screen and (max-width:363px){.main-section .profile-section .tab-box #svg-box[data-v-d673b6b8]{width:55px;height:55px}.main-section .profile-section .tab-box #svg-title[data-v-d673b6b8]{font-size:12px}}@media screen and (max-width:344px){.main-section .profile-section .tab-box #svg-box[data-v-d673b6b8]{width:50px;height:50px}.main-section .profile-section .tab-box #svg-title[data-v-d673b6b8]{font-size:11px}}@media screen and (max-width:325px){.main-section .profile-section .tab-box #svg-box[data-v-d673b6b8]{width:45px;height:45px}.main-section .profile-section .tab-box #svg-title[data-v-d673b6b8]{font-size:10px}}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 270:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/profile/index.vue?vue&type=template&id=d673b6b8&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',[(!_vm.isGet)?_c('base-loading'):_vm._e(),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"success-info\" data-v-d673b6b8>","</div>",[_c('b-alert',{attrs:{"show":_vm.dismissCountDown,"dismissible":"","variant":"success"},on:{"dismissed":function($event){_vm.dismissCountDown = 0},"dismiss-count-down":_vm.countDownChanged}},[_vm._v("\n            Jo'natildi\n        ")])],1),_vm._ssrNode(" "),(_vm.isGet)?_vm._ssrNode("<section class=\"main-section\" data-v-d673b6b8>","</section>",[_vm._ssrNode("<section class=\"profile-section\" data-v-d673b6b8>","</section>",[_vm._ssrNode("<div class=\"profile-box\" data-v-d673b6b8><div class=\"profile\" data-v-d673b6b8><h5 id=\"profile-id\" data-v-d673b6b8>"+_vm._ssrEscape("ID "+_vm._s(_vm.userMe._id))+"</h5></div></div> "),_vm._ssrNode("<div class=\"tab-box\" data-v-d673b6b8>","</div>",[_c('b-tabs',{attrs:{"content-class":"mt-3","active-nav-item-class":"font-weight-bold ","active-tab-class":"font-weight-bold text-success","align":"center"}},[_c('b-tab',{attrs:{"title":"КУПЛЕНО","active":"","lazy":""},scopedSlots:_vm._u([{key:"title",fn:function(){return [_c('div',{attrs:{"id":"svg-box"}},[_c('svg',{staticStyle:{"width":"100%","height":"100%","background-size":"initial","background-repeat-y":"initial","background-repeat-x":"initial","background-position-y":"initial","background-position-x":"initial","background-origin":"initial","background-color":"initial","background-clip":"initial","background-attachment":"initial","animation-play-state":"paused"},attrs:{"xml:space":"preserve","viewBox":"0 0 100 100","y":"0","x":"0","xmlns":"http://www.w3.org/2000/svg","id":"圖層_1","version":"1.1","width":"200px","height":"200px","xmlns:xlink":"http://www.w3.org/1999/xlink"}},[_c('g',{staticClass:"ldl-scale",staticStyle:{"transform-origin":"50% 50%","transform":"rotate(0deg) scale(0.8, 0.8)","animation-play-state":"paused"}},[_c('path',{staticStyle:{"fill":"rgb(40, 41, 47)","animation-play-state":"paused"},attrs:{"fill":"#ebb885","d":"M90.12 51.632L59.332 69.407 47.461 48.845 78.248 31.07a4.727 4.727 0 0 1 6.457 1.73l7.144 12.374a4.727 4.727 0 0 1-1.729 6.458z"}}),_vm._v(" "),_c('path',{staticStyle:{"fill":"rgb(40, 41, 47)","animation-play-state":"paused"},attrs:{"fill":"#ebb885","d":"M67.368 33.357L45.731 45.849l-9.508-16.468a4.728 4.728 0 0 1 1.73-6.458l17.543-10.129a4.727 4.727 0 0 1 6.457 1.73L69.098 26.9a4.726 4.726 0 0 1-1.73 6.457z"}}),_vm._v(" "),_c('g',{staticStyle:{"animation-play-state":"paused"}},[_c('path',{staticStyle:{"fill":"rgb(255, 255, 255)","animation-play-state":"paused"},attrs:{"fill":"#666","d":"M58.985 78.648c-.67 0-1.343-.088-2.007-.266a7.651 7.651 0 0 1-4.678-3.59L29.401 35.13l-4.395-.72a2.974 2.974 0 0 1 .962-5.868l7.174 1.177L57.447 71.82c.235.407.615.699 1.069.82.455.123.929.061 1.335-.175l28.073-16.208a2.972 2.972 0 1 1 2.972 5.148L62.824 77.612a7.65 7.65 0 0 1-3.839 1.036z"}})]),_vm._v(" "),_c('g',{staticStyle:{"animation-play-state":"paused"}},[_c('path',{staticStyle:{"fill":"rgb(249, 174, 92)","animation-play-state":"paused"},attrs:{"fill":"#333","d":"M21.955 36.791c-.319 0-.643-.026-.969-.079l-8.503-1.394a5.945 5.945 0 0 1 1.923-11.733l8.503 1.394a5.945 5.945 0 0 1-.954 11.812z"}})]),_vm._v(" "),_c('circle',{staticStyle:{"stroke":"rgb(249, 174, 92)","fill":"rgb(10, 10, 10)","animation-play-state":"paused"},attrs:{"r":"10.799","stroke-miterlimit":"10","stroke-linecap":"round","stroke-width":"6","stroke":"#333","fill":"#fff","cy":"77.054","cx":"57.247","transform":"rotate(-30 57.243 77.056)"}}),_vm._v(" "),_c('metadata',{staticStyle:{"animation-play-state":"paused"},attrs:{"xmlns:d":"https://loading.io/stock/"}},[_c('d:name',{staticStyle:{"animation-play-state":"paused"}},[_vm._v("stroller")]),_vm._v(" "),_c('d:tags',{staticStyle:{"animation-play-state":"paused"}},[_vm._v("cart,goods,shipping,cargo,commodity,stroller,business")]),_vm._v(" "),_c('d:license',{staticStyle:{"animation-play-state":"paused"}},[_vm._v("pro")]),_vm._v(" "),_c('d:slug',{staticStyle:{"animation-play-state":"paused"}},[_vm._v("tuaqx9")])],1)],1)])]),_vm._v(" "),_c('h3',{attrs:{"id":"svg-title"}},[_vm._v(_vm._s(_vm.$t("buyed")))])]},proxy:true}],null,false,3333613976)},[_vm._v(" "),(!_vm.productsPayed.length || _vm.noPayedProducts)?_c('section',{staticClass:"favourite__is__empty"},[_c('section',{staticClass:"container popular__container"},[_c('div',{staticClass:"popular__heading"},[_vm._v("\n                                    "+_vm._s(_vm.$t("noProduct"))+"\n                                ")])])]):_c('div',{staticClass:"container"},_vm._l((_vm.productsPayed),function(products){return _c('div',{key:products._id,staticClass:"checkout__order__item__box"},[_c('div',{staticClass:"checkout__order__item--header"},[_c('img',{attrs:{"src":_vm.$cdn + products.image,"alt":"Item image"}}),_vm._v(" "),_c('div',{staticClass:"checkout__order__item__description"},[_c('h3',[_vm._v("\n                                            "+_vm._s(products.name[_vm.$i18n.locale])+"\n                                        ")]),_vm._v(" "),_c('p',{staticClass:"p-first"},[_vm._v("\n                                            "+_vm._s(products.description[
                                                    _vm.$i18n.locale
                                                ])+"\n                                        ")]),_vm._v(" "),_c('p',{staticClass:"p-second"},[_c('span',[_vm._v(_vm._s(_vm.$t("size")))]),_vm._v("\n                                            "+_vm._s(products.size)+"\n                                        ")])])]),_vm._v(" "),_c('div',{staticClass:"checkout__order__item--secondary"},[_c('div',{staticClass:"checkout__order__item--number"},[_c('span',[_vm._v(_vm._s(_vm.$t("kol"))+":")]),_vm._v(" "),_c('span',{staticClass:"number"},[_vm._v("\n                                            "+_vm._s(products.count)+" шт")])]),_vm._v(" "),_c('div',{staticClass:"checkout__order__item--price"},[_c('span',[_vm._v("\n                                            "+_vm._s(products.amount)+"\n                                            "+_vm._s(_vm.$t("sum"))+"\n                                        ")])]),_vm._v(" "),_c('div',{staticClass:"checkout__order__item--color"},[_c('span',[_vm._v(_vm._s(_vm.$t("color"))+":")]),_vm._v(" "),_c('img',{attrs:{"src":_vm.$cdn + products.paramImage,"alt":"Color image"}})])])])}),0)]),_vm._v(" "),_c('b-tab',{attrs:{"title":"В ДОРОГЕ","lazy":""},scopedSlots:_vm._u([{key:"title",fn:function(){return [_c('div',{attrs:{"id":"svg-box"}},[_c('svg',{staticStyle:{"width":"100%","height":"100%","background-size":"initial","background-repeat-y":"initial","background-repeat-x":"initial","background-position-y":"initial","background-position-x":"initial","background-origin":"initial","background-color":"initial","background-clip":"initial","background-attachment":"initial","animation-play-state":"paused"},attrs:{"xml:space":"preserve","viewBox":"0 0 100 100","y":"0","x":"0","xmlns":"http://www.w3.org/2000/svg","id":"圖層_1","version":"1.1","width":"200px","height":"200px","xmlns:xlink":"http://www.w3.org/1999/xlink"}},[_c('g',{staticClass:"ldl-scale",staticStyle:{"transform-origin":"50% 50%","transform":"rotate(0deg) scale(0.8, 0.8)","animation-play-state":"paused"}},[_c('path',{staticStyle:{"fill":"rgb(249, 174, 92)","animation-play-state":"paused"},attrs:{"fill":"#f5e6c8","d":"M15 64.3h40.5c3.1 0 5.6-2.5 5.6-5.6V31c0-3.1-2.5-5.6-5.6-5.6H15c-3.1 0-5.6 2.5-5.6 5.6v27.7c0 3.1 2.5 5.6 5.6 5.6z"}}),_vm._v(" "),_c('path',{staticStyle:{"fill":"rgb(249, 174, 92)","animation-play-state":"paused"},attrs:{"fill":"#66503a","d":"M51.5 58.5c-.5 0-1-.4-1-1V24.6c0-.5.4-1 1-1 .5 0 1 .4 1 1v32.9c0 .6-.4 1-1 1z"}}),_vm._v(" "),_c('path',{staticStyle:{"fill":"rgb(249, 174, 92)","animation-play-state":"paused"},attrs:{"fill":"#66503a","d":"M40.6 58.5c-.5 0-1-.4-1-1V24.6c0-.5.4-1 1-1 .5 0 1 .4 1 1v32.9c0 .6-.4 1-1 1z"}}),_vm._v(" "),_c('path',{staticStyle:{"fill":"rgb(249, 174, 92)","animation-play-state":"paused"},attrs:{"fill":"#66503a","d":"M29.7 58.5c-.5 0-1-.4-1-1V24.6c0-.5.4-1 1-1 .5 0 1 .4 1 1v32.9c0 .6-.4 1-1 1z"}}),_vm._v(" "),_c('path',{staticStyle:{"fill":"rgb(249, 174, 92)","animation-play-state":"paused"},attrs:{"fill":"#66503a","d":"M18.8 58.5c-.5 0-1-.4-1-1V24.6c0-.5.4-1 1-1 .5 0 1 .4 1 1v32.9c0 .6-.4 1-1 1z"}}),_vm._v(" "),_c('path',{staticStyle:{"fill":"rgb(40, 41, 47)","animation-play-state":"paused"},attrs:{"d":"M7.9 57.1h56.7v8H7.9z","fill":"#4d85ab"}}),_vm._v(" "),_c('path',{staticStyle:{"fill":"rgb(228, 129, 47)","animation-play-state":"paused"},attrs:{"fill":"#e15b64","d":"M11.9 59.2h-4c-.2 0-.4.2-.4.4V63c0 .2.2.4.4.4H12c1 0 1.8-.8 1.8-1.8v-.5c0-1-.9-1.9-1.9-1.9z"}}),_vm._v(" "),_c('path',{staticStyle:{"fill":"rgb(10, 10, 10)","animation-play-state":"paused"},attrs:{"fill":"#77a4bd","d":"M88.9 69.5H66.8c-1.6 0-2.8-1.3-2.8-2.8l.1-31c0-1.6 1.3-2.8 2.8-2.8h13c1 0 2 .6 2.5 1.5l8.9 16.2c.2.4.3.9.3 1.4v14.8c.1 1.5-1.2 2.7-2.7 2.7z"}}),_vm._v(" "),_c('path',{staticStyle:{"fill":"rgb(255, 255, 255)","animation-play-state":"paused"},attrs:{"fill":"#666","d":"M73.5 65.1H9.7s-.3 0-.3.4c0 2.4 1.3 4 3.3 4h60.8c1 0 1.7-1 1.7-2.2 0-1.2-.8-2.2-1.7-2.2z"}}),_vm._v(" "),_c('g',{staticStyle:{"animation-play-state":"paused"}},[_c('circle',{staticStyle:{"fill":"rgb(10, 10, 10)","animation-play-state":"paused"},attrs:{"fill":"#fff","r":"7.4","cy":"67.4","cx":"25.6"}}),_vm._v(" "),_c('path',{staticStyle:{"fill":"rgb(228, 129, 47)","animation-play-state":"paused"},attrs:{"fill":"#333","d":"M25.6 61.5c3.3 0 5.9 2.7 5.9 5.9s-2.7 5.9-5.9 5.9-5.9-2.7-5.9-5.9 2.7-5.9 5.9-5.9m0-3c-4.9 0-8.9 4-8.9 8.9s4 8.9 8.9 8.9 8.9-4 8.9-8.9-3.9-8.9-8.9-8.9z"}})]),_vm._v(" "),_c('g',{staticStyle:{"animation-play-state":"paused"}},[_c('circle',{staticStyle:{"fill":"rgb(40, 41, 47)","animation-play-state":"paused"},attrs:{"fill":"#e6e6e6","r":"4","cy":"67.4","cx":"25.6"}})]),_vm._v(" "),_c('g',{staticStyle:{"animation-play-state":"paused"}},[_c('circle',{staticStyle:{"fill":"rgb(10, 10, 10)","animation-play-state":"paused"},attrs:{"fill":"#fff","r":"7.4","cy":"67.4","cx":"72.9"}}),_vm._v(" "),_c('path',{staticStyle:{"fill":"rgb(228, 129, 47)","animation-play-state":"paused"},attrs:{"fill":"#333","d":"M72.9 61.5c3.3 0 5.9 2.7 5.9 5.9s-2.7 5.9-5.9 5.9-5.9-2.6-5.9-5.9 2.6-5.9 5.9-5.9m0-3c-4.9 0-8.9 4-8.9 8.9s4 8.9 8.9 8.9 8.9-4 8.9-8.9-4-8.9-8.9-8.9z"}})]),_vm._v(" "),_c('g',{staticStyle:{"animation-play-state":"paused"}},[_c('circle',{staticStyle:{"fill":"rgb(40, 41, 47)","animation-play-state":"paused"},attrs:{"fill":"#e6e6e6","r":"4","cy":"67.4","cx":"72.9"}})]),_vm._v(" "),_c('path',{staticStyle:{"fill":"rgb(255, 255, 255)","animation-play-state":"paused"},attrs:{"fill":"#e0e0e0","d":"M86.9 60.1h4.4c.6 0 1.1-.5 1.1-1.1v-1.9c0-.6-.5-1.1-1.1-1.1H87c-.3 0-.5.2-.5.5v3.2c0 .2.2.4.4.4z"}}),_vm._v(" "),_c('path',{staticStyle:{"fill":"rgb(228, 129, 47)","animation-play-state":"paused"},attrs:{"fill":"#333","d":"M80.8 36.6c-.4-.7-1.1-1.2-2-1.2H68.5c-1.2 0-2.2 1-2.2 2.3l-.1 13.5h22.7c0-.2-.1-.4-.2-.6l-7.9-14z"}}),_vm._v(" "),_c('path',{staticStyle:{"fill":"rgb(40, 41, 47)","animation-play-state":"paused"},attrs:{"fill":"#4d85ab","d":"M71.8 55.5h-3.5c-.5 0-.9-.4-.9-.9s.4-.9.9-.9h3.5c.5 0 .9.4.9.9s-.4.9-.9.9z"}}),_vm._v(" "),_c('metadata',{staticStyle:{"animation-play-state":"paused"},attrs:{"xmlns:d":"https://loading.io/stock/"}},[_c('d:name',{staticStyle:{"animation-play-state":"paused"}},[_vm._v("truck")]),_vm._v(" "),_c('d:tags',{staticStyle:{"animation-play-state":"paused"}},[_vm._v("van,cargo,cab,car,ship,loader,wagon,vehicle,good,express,settle,truck,transportation")]),_vm._v(" "),_c('d:license',{staticStyle:{"animation-play-state":"paused"}},[_vm._v("by")]),_vm._v(" "),_c('d:slug',{staticStyle:{"animation-play-state":"paused"}},[_vm._v("doszq1")])],1)],1)])]),_vm._v(" "),_c('h3',{attrs:{"id":"svg-title"}},[_vm._v(_vm._s(_vm.$t("onTheWay")))])]},proxy:true}],null,false,2540737211)},[_vm._v(" "),(
                                !_vm.productsOnTheWay.length || _vm.noOnWayProducts
                            )?_c('section',{staticClass:"favourite__is__empty"},[_c('section',{staticClass:"container popular__container"},[_c('div',{staticClass:"popular__heading"},[_vm._v("\n                                    "+_vm._s(_vm.$t("noProduct"))+"\n                                ")])])]):_c('div',{staticClass:"container"},_vm._l((_vm.productsOnTheWay),function(products){return _c('div',{key:products._id,staticClass:"checkout__order__item__box"},[_c('div',{staticClass:"checkout__order__item--header"},[_c('img',{attrs:{"src":_vm.$cdn + products.image,"alt":"Item image"}}),_vm._v(" "),_c('div',{staticClass:"checkout__order__item__description"},[_c('h3',[_vm._v("\n                                            "+_vm._s(products.name[_vm.$i18n.locale])+"\n                                        ")]),_vm._v(" "),_c('p',{staticClass:"p-first"},[_vm._v("\n                                            "+_vm._s(products.description[
                                                    _vm.$i18n.locale
                                                ])+"\n                                        ")]),_vm._v(" "),_c('p',{staticClass:"p-second"},[_c('span',[_vm._v(_vm._s(_vm.$t("size")))]),_vm._v("\n                                            "+_vm._s(products.size)+"\n                                        ")])])]),_vm._v(" "),_c('div',{staticClass:"checkout__order__item--secondary"},[_c('div',{staticClass:"checkout__order__item--number"},[_c('span',[_vm._v(_vm._s(_vm.$t("kol"))+":")]),_vm._v(" "),_c('span',{staticClass:"number"},[_vm._v("\n                                            "+_vm._s(products.count)+" шт")])]),_vm._v(" "),_c('div',{staticClass:"checkout__order__item--price"},[_c('span',[_vm._v("\n                                            "+_vm._s(products.amount)+"\n                                            "+_vm._s(_vm.$t("sum"))+"\n                                        ")])]),_vm._v(" "),_c('div',{staticClass:"checkout__order__item--color"},[_c('span',[_vm._v(_vm._s(_vm.$t("color"))+":")]),_vm._v(" "),_c('img',{attrs:{"src":_vm.$cdn + products.paramImage,"alt":"Color image"}})]),_vm._v(" "),_c('div',{staticClass:"checkout__order__item--delivered"},[_c('a',{attrs:{"href":""},on:{"click":function($event){$event.preventDefault();return _vm.setDelivered(products._id)}}},[_vm._v("\n                                            "+_vm._s(_vm.$t("delivered"))+"\n                                        ")])])])])}),0)]),_vm._v(" "),_c('b-tab',{attrs:{"lazy":""},scopedSlots:_vm._u([{key:"title",fn:function(){return [_c('div',{attrs:{"id":"svg-box"}},[_c('svg',{staticStyle:{"width":"100%","height":"100%","background-size":"initial","background-repeat-y":"initial","background-repeat-x":"initial","background-position-y":"initial","background-position-x":"initial","background-origin":"initial","background-color":"initial","background-clip":"initial","background-attachment":"initial","animation-play-state":"paused"},attrs:{"xml:space":"preserve","viewBox":"0 0 100 100","y":"0","x":"0","xmlns":"http://www.w3.org/2000/svg","id":"Layer_1","version":"1.1","width":"200px","height":"200px","xmlns:xlink":"http://www.w3.org/1999/xlink"}},[_c('g',{staticClass:"ldl-scale",staticStyle:{"transform-origin":"50% 50%","transform":"rotate(0deg) scale(0.8, 0.8)","animation-play-state":"paused"}},[_c('path',{staticStyle:{"stroke":"rgb(50, 50, 50)","fill":"rgb(247, 178, 106)","animation-play-state":"paused"},attrs:{"d":"M43.331 88.236L10 74.862V25.138l33.331 13.374z","stroke-miterlimit":"10","stroke-linejoin":"round","stroke-width":"3.5","stroke":"#323232","fill":"#f7b26a"}}),_vm._v(" "),_c('path',{staticStyle:{"stroke":"rgb(50, 50, 50)","fill":"rgb(247, 178, 106)","animation-play-state":"paused"},attrs:{"d":"M29.981 74.88l-12.437-4.991","stroke-miterlimit":"10","stroke-linecap":"round","stroke-width":"3.5","stroke":"#323232","fill":"#f7b26a","stroke-linejoin":"round"}}),_vm._v(" "),_c('path',{staticStyle:{"stroke":"rgb(50, 50, 50)","fill":"rgb(247, 178, 106)","animation-play-state":"paused"},attrs:{"d":"M25.874 66.232l-8.33-3.343","stroke-miterlimit":"10","stroke-linecap":"round","stroke-width":"3.5","stroke":"#323232","fill":"#f7b26a","stroke-linejoin":"round"}}),_vm._v(" "),_c('path',{staticStyle:{"stroke":"rgb(50, 50, 50)","fill":"rgb(247, 178, 106)","animation-play-state":"paused"},attrs:{"d":"M43.331 88.236L90 74.862V25.138L43.331 38.512z","stroke-miterlimit":"10","stroke-linejoin":"round","stroke-width":"3.5","stroke":"#323232","fill":"#f7b26a"}}),_vm._v(" "),_c('path',{staticStyle:{"stroke":"rgb(50, 50, 50)","fill":"rgb(247, 178, 106)","animation-play-state":"paused"},attrs:{"d":"M90 25.138L56.669 11.764 10 25.138h0l33.331 13.374L90 25.138z","stroke-miterlimit":"10","stroke-linejoin":"round","stroke-width":"3.5","stroke":"#323232","fill":"#f7b26a"}}),_vm._v(" "),_c('path',{staticStyle:{"stroke":"rgb(50, 50, 50)","fill":"rgb(244, 230, 200)","animation-play-state":"paused"},attrs:{"d":"M40.681 16.345l-13.185 3.779 33.331 13.374 13.185-3.778z","stroke-linejoin":"round","stroke":"#323232","fill":"#f4e6c8","stroke-miterlimit":"10","stroke-width":"3.5"}}),_vm._v(" "),_c('path',{staticStyle:{"stroke":"rgb(50, 50, 50)","fill":"rgb(244, 230, 200)","animation-play-state":"paused"},attrs:{"d":"M74.012 42.065l-13.185 3.778V33.498l13.185-3.778z","stroke-linejoin":"round","stroke":"#323232","fill":"#f4e6c8","stroke-miterlimit":"10","stroke-width":"3.5"}}),_vm._v(" "),_c('path',{staticStyle:{"animation-play-state":"paused"},attrs:{"d":"M54.984 84.897L90 74.862V25.138l-15.773 4.52z","stroke-linejoin":"round","stroke":"#000","opacity":".2","stroke-miterlimit":"10","stroke-width":"3.5"}}),_vm._v(" "),_c('path',{staticStyle:{"animation-play-state":"paused"},attrs:{"d":"M74.137 29.684L90 25.138h0l-15.863-6.365z","stroke-linejoin":"round","stroke":"#000","opacity":".2","stroke-miterlimit":"10","stroke-width":"3.5"}}),_vm._v(" "),_c('metadata',{staticStyle:{"animation-play-state":"paused"},attrs:{"xmlns:d":"https://loading.io/stock/"}},[_c('d:name',{staticStyle:{"animation-play-state":"paused"}},[_vm._v("box")]),_vm._v(" "),_c('d:tags',{staticStyle:{"animation-play-state":"paused"}},[_vm._v("box,carton,carboard\n                                                boxes,container,package,payload,express,delivery,mail,goods")]),_vm._v(" "),_c('d:license',{staticStyle:{"animation-play-state":"paused"}},[_vm._v("by")]),_vm._v(" "),_c('d:slug',{staticStyle:{"animation-play-state":"paused"}},[_vm._v("gkonp9")])],1)],1)])]),_vm._v(" "),_c('h3',{attrs:{"id":"svg-title"}},[_vm._v(_vm._s(_vm.$t("delivered")))])]},proxy:true}],null,false,905699317)},[_vm._v(" "),(
                                !_vm.productsDelivered.length ||
                                    _vm.noDeliveredProducts
                            )?_c('section',{staticClass:"favourite__is__empty"},[_c('section',{staticClass:"container popular__container"},[_c('div',{staticClass:"popular__heading"},[_vm._v("\n                                    "+_vm._s(_vm.$t("noProduct"))+"\n                                ")])])]):_c('div',{staticClass:"container"},_vm._l((_vm.productsDelivered),function(products){return _c('div',{key:products._id,staticClass:"checkout__order__item__box"},[_c('div',{staticClass:"checkout__order__item--header"},[_c('img',{attrs:{"src":_vm.$cdn + products.image,"alt":"Item image"}}),_vm._v(" "),_c('div',{staticClass:"checkout__order__item__description"},[_c('h3',[_vm._v("\n                                            "+_vm._s(products.name[_vm.$i18n.locale])+"\n                                        ")]),_vm._v(" "),_c('p',{staticClass:"p-first"},[_vm._v("\n                                            "+_vm._s(products.description[
                                                    _vm.$i18n.locale
                                                ])+"\n                                        ")]),_vm._v(" "),_c('p',{staticClass:"p-second"},[_c('span',[_vm._v(_vm._s(_vm.$t("size")))]),_vm._v("\n                                            "+_vm._s(products.size)+"\n                                        ")])])]),_vm._v(" "),_c('div',{staticClass:"checkout__order__item--secondary"},[_c('div',{staticClass:"checkout__order__item--number"},[_c('span',[_vm._v(_vm._s(_vm.$t("kol"))+":")]),_vm._v(" "),_c('span',{staticClass:"number"},[_vm._v("\n                                            "+_vm._s(products.count)+" шт")])]),_vm._v(" "),_c('div',{staticClass:"checkout__order__item--price"},[_c('span',[_vm._v("\n                                            "+_vm._s(products.amount)+"\n                                            "+_vm._s(_vm.$t("sum"))+"\n                                        ")])]),_vm._v(" "),_c('div',{staticClass:"checkout__order__item--color"},[_c('span',[_vm._v(_vm._s(_vm.$t("color"))+":")]),_vm._v(" "),_c('img',{attrs:{"src":_vm.$cdn + products.paramImage,"alt":"Color image"}})]),_vm._v(" "),_c('div',{staticClass:"checkout__order__item--delivered"},[_c('button',{on:{"click":function($event){return _vm.openModal(products._id)}}},[_vm._v("\n                                            "+_vm._s(_vm.$t("sendComment"))+"\n                                        ")])])])])}),0)])],1),_vm._ssrNode(" "),_c('b-modal',{ref:"my-modal",attrs:{"id":"modal-1","title":"Izoh qoldirish"},scopedSlots:_vm._u([{key:"modal-footer",fn:function(ref){
                                                var ok = ref.ok;
                                                var cancel = ref.cancel;
return [_c('b-button',{on:{"click":function($event){return cancel()}}},[_vm._v("\n                            Bekor qilish\n                        ")]),_vm._v(" "),_c('b-button',{attrs:{"variant":"success"},on:{"click":function($event){return _vm.sendComment()}}},[_vm._v("\n                            Jo'natish\n                        ")])]}}],null,false,952623569)},[_c('b-form-group',{attrs:{"label":"Izoh:"}},[_c('b-form-textarea',{staticClass:"mb-3",attrs:{"id":"textarea","placeholder":"Enter something...","rows":"3","max-rows":"6"},model:{value:(_vm.comment.comment),callback:function ($$v) {_vm.$set(_vm.comment, "comment", $$v)},expression:"comment.comment"}})],1),_vm._v(" "),_c('b-form-group',{attrs:{"label":"Baholash:"}},[_c('b-form-rating',{staticClass:"mb-2",attrs:{"variant":"warning"},model:{value:(_vm.comment.rating),callback:function ($$v) {_vm.$set(_vm.comment, "rating", $$v)},expression:"comment.rating"}})],1)],1)],2)],2)]):_vm._e()],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/profile/index.vue?vue&type=template&id=d673b6b8&scoped=true&

// EXTERNAL MODULE: ./components/UI/BaseLoading.vue + 4 modules
var BaseLoading = __webpack_require__(85);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/profile/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var profilevue_type_script_lang_js_ = ({components:{BaseLoading: BaseLoading["default"]},data(){return{isGet:false,dismissSecs:5,dismissCountDown:0,user:{token:this.$auth.strategy.token.get()},comment:{comment:"",rating:null,productId:""},productsPayed:[],noPayedProducts:false,productsOnTheWay:[],noOnWayProducts:false,productsDelivered:[],noDeliveredProducts:false,userMe:{}};},methods:{async fetchPayedProducts(){const token=this.user.token;this.$axios.$get("order/me?status=payed",{headers:{token:token}}).then(response=>{if(response.success){console.log("products Payed",response);this.productsPayed=response.data;}else{throw new Error("Could not save data!");}}).catch(err=>{this.noPayedProducts=true;console.error(err);});},async fetchOnTheWayProducts(){const token=this.user.token;this.$axios.$get("order/me?status=onTheWay",{headers:{token:token}}).then(response=>{if(response.success){console.log("products OnTheWay",response);this.productsOnTheWay=response.data;}else{throw new Error("Could not save data!");}}).catch(err=>{this.noOnWayProducts=true;console.error(err);});},async fetchDeliveredProducts(){const token=this.user.token;this.$axios.$get("order/me?status=delivered",{headers:{token:token}}).then(response=>{if(response.success){console.log("products Delivered",response);this.productsDelivered=response.data;}else{throw new Error("Could not save data!");}}).catch(err=>{this.noDeliveredProducts=true;console.error(err);});},async fetchUserMe(){const token=this.user.token;this.$axios.$get("user/me",{headers:{token:token}}).then(response=>{if(response.success){console.log("user me",response);this.userMe=response.data;}else{throw new Error("Could not save data!");}}).catch(err=>console.error(err));},async setDelivered(id){await this.$axios.$put("order/client/"+id).then(response=>{if(response.success){console.log("set dilevered",response);}else{throw new Error("Could not save data!");}}).catch(err=>console.error(err));console.log(1);this.isGet=false;await Promise.all([this.fetchOnTheWayProducts(),this.fetchDeliveredProducts()]).then(res=>{this.isGet=true;});},countDownChanged(dismissCountDown){this.dismissCountDown=dismissCountDown;},openModal(id){this.comment.productId=id;this.$refs["my-modal"].show();this.comment.comment="";this.comment.rating=null;},sendComment(){let sendData;if(this.comment.rating!=null){sendData={comment:this.comment.comment,rating:this.comment.rating,productId:this.comment.productId};}else{sendData={comment:this.comment.comment,productId:this.comment._id};}this.$axios.$post("product/comment/create",sendData).then(res=>{this.$refs["my-modal"].hide();this.dismissCountDown=this.dismissSecs;});}},async mounted(){await Promise.all([this.fetchPayedProducts(),this.fetchOnTheWayProducts(),this.fetchDeliveredProducts(),this.fetchUserMe()]).then(res=>{this.isGet=true;});console.log(2);}});
// CONCATENATED MODULE: ./pages/profile/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_profilevue_type_script_lang_js_ = (profilevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/profile/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(220)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_profilevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "d673b6b8",
  "54203f86"
  
)

/* harmony default export */ var profile = __webpack_exports__["default"] = (component.exports);

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
//# sourceMappingURL=index.js.map