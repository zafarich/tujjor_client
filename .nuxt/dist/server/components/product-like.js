exports.ids = [19];
exports.modules = {

/***/ 189:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(258);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("f0ac8f6e", content, true, context)
};

/***/ }),

/***/ 257:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_nuxt_webpack_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductLike_vue_vue_type_style_index_0_id_2bb9cdfe_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(189);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_nuxt_webpack_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductLike_vue_vue_type_style_index_0_id_2bb9cdfe_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_nuxt_webpack_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductLike_vue_vue_type_style_index_0_id_2bb9cdfe_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_nuxt_webpack_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductLike_vue_vue_type_style_index_0_id_2bb9cdfe_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_nuxt_webpack_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductLike_vue_vue_type_style_index_0_id_2bb9cdfe_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 258:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".fixvh[data-v-2bb9cdfe]{position:fixed;top:0;left:0;width:100%;height:100vh;z-index:10;background-color:#333;opacity:.6}button.btn-sm[data-v-2bb9cdfe]{background:#fbfcff;border:1px solid #e5f1fb;border-radius:6px;padding:10px 20px;font-weight:500;font-size:14px;color:#333;margin-right:10px}button.btn-sm-active[data-v-2bb9cdfe]{background:#f7931e;border:1px solid transparent;color:#fff}.modal-card[data-v-2bb9cdfe]{background-color:#fff;border-radius:8px;padding:15px 20px;position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);z-index:12}.modal-card button.otmen[data-v-2bb9cdfe]{background:#c5c5c5!important}.modal-card .modal-title[data-v-2bb9cdfe]{display:flex;justify-content:space-between;align-items:center;margin-bottom:20px}.modal-card .modal-title h2[data-v-2bb9cdfe]{font-size:20px;color:#333}.modal-card .modal-title .times[data-v-2bb9cdfe]{color:#333;font-size:16px}.modal-card .modal-title .times[data-v-2bb9cdfe]:hover{color:#f7931e}@media(max-width:475px){.modal-card[data-v-2bb9cdfe]{width:90%!important}}button[data-v-2bb9cdfe]{cursor:pointer;border:none;background-color:transparent}.btn-simple-active[data-v-2bb9cdfe]{background:#f7931e;border:1px solid transparent;color:#fff}h6.error-text[data-v-2bb9cdfe]{display:none;font-weight:400;font-size:13px;line-height:14px;margin-top:4px;color:#f94040}div.input-form[data-v-2bb9cdfe]{margin-bottom:15px}div.input-form div.input-rel[data-v-2bb9cdfe]{position:relative}div.input-form div.input-rel button.btn-icon[data-v-2bb9cdfe]{position:absolute;right:10px;top:50%;transform:translateY(-50%)}div.input-form div.input-rel button.btn-icon .icon[data-v-2bb9cdfe]{font-size:16px;color:rgba(51,51,51,.2)}div.input-form input[data-v-2bb9cdfe]{width:100%;height:40px;border:1px solid #aaa;border-radius:8px;font-size:16px;padding:0 15px;font-weight:500}div.input-form input[data-v-2bb9cdfe]:hover{border:1px solid #888}div.input-form input[data-v-2bb9cdfe]:focus{outline:none;border:1px solid #f7931e}div.form-error input[data-v-2bb9cdfe]{border:1px solid #f94040!important}div.form-error .error-text[data-v-2bb9cdfe]{display:block!important}.btn-simple[data-v-2bb9cdfe]{background:#fff;border:1px solid #f7931e;border-radius:6px;padding:8px 15px;display:inline-block;font-weight:500;font-size:14px;color:#f7931e}.btn-simple[data-v-2bb9cdfe]:hover{color:#fff;background-color:#f7931e}@media(max-width:543px){.popular__container .img-fluid[data-v-2bb9cdfe]{height:170px!important;-o-object-fit:cover!important;object-fit:cover!important}.other__item__banner--carousel .b-carousel .carousel-inner .b-carousel-slide img[data-v-2bb9cdfe]{min-height:250px!important}}.other__item__banner--carousel .b-carousel .carousel-inner .b-carousel-slide img[data-v-2bb9cdfe]{min-height:450px}.success-info[data-v-2bb9cdfe]{position:fixed;top:10px;right:20px;width:320px;z-index:12345}div.card-row[data-v-2bb9cdfe]{display:flex;margin:0 -10px;flex-wrap:wrap}.hover-shadow[data-v-2bb9cdfe]:hover{box-shadow:0 1px 10px rgba(0,0,0,.18)}div.card-5[data-v-2bb9cdfe]{width:20%;padding:0 10px}div.card-4[data-v-2bb9cdfe]{width:25%;padding:0 10px}div.card-3[data-v-2bb9cdfe]{width:33.3333333333%;padding:0 10px}@media(max-width:1020px){div.card-4[data-v-2bb9cdfe],div.card-5[data-v-2bb9cdfe]{width:33.3333333333%}}@media(max-width:768px){div.card-3[data-v-2bb9cdfe],div.card-4[data-v-2bb9cdfe],div.card-5[data-v-2bb9cdfe]{width:50%}.catalog__container[data-v-2bb9cdfe]{padding-top:5px!important}.filtr__section .catalog__page__filtr__box[data-v-2bb9cdfe]{position:relative!important;top:unset!important}.catalog__container .catalog__filtraiton__box .filtraiton__form__box .filtraiton__form--submit[data-v-2bb9cdfe]{margin-bottom:0!important}.catalog__container .catalog__page__about[data-v-2bb9cdfe]{padding-left:0!important}}@-webkit-keyframes move__360-data-v-2bb9cdfe{0%{transform:translateX(0deg)}to{transform:translateX(1turn)}}@keyframes move__360-data-v-2bb9cdfe{0%{transform:translateX(0deg)}to{transform:translateX(1turn)}}h6.error-text[data-v-2bb9cdfe]{font-size:12px;color:red;margin-bottom:0}h1.title-form[data-v-2bb9cdfe]{font-size:24px;text-align:center}.popular__container[data-v-2bb9cdfe]{margin-top:40px}.popular__container .popular__heading[data-v-2bb9cdfe]{font-family:Roboto,sans-serif;font-weight:500;font-size:48px;color:#f7931e;margin-bottom:40px;text-shadow:0 0 3px rgba(247,147,30,.3);display:inline-block}.popular__container .popular__item-box[data-v-2bb9cdfe]{display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap}.popular__container .popular__item-box[data-v-2bb9cdfe]:after{content:\"\";flex:0 1 32%}.popular__container .popular__item-box .popular__items[data-v-2bb9cdfe]{flex:0 0 auto;width:222px;height:370px;background-color:#fff;box-shadow:0 1px 3px rgba(0,0,0,.12);border-radius:5px;overflow:hidden;margin:0 2px 37px;cursor:pointer;transition:all .2s}.popular__container .popular__item-box .popular__items[data-v-2bb9cdfe]:hover{transform:scale(1.07)}.popular__container .popular__item-box .popular__items[data-v-2bb9cdfe]:hover:after{opacity:0}.popular__container .popular__item-box .popular__items[data-v-2bb9cdfe]:active{outline:none;transform:scale(1.03)}.popular__container .popular__item-box .popular__items .popular__items__img[data-v-2bb9cdfe]{width:222px;height:222px}.popular__container .popular__item-box .popular__items .popular__items__desription[data-v-2bb9cdfe]{padding-left:16px;display:flex;flex-direction:column;justify-content:flex-start;position:relative}.popular__container .popular__item-box .popular__items .popular__items__desription .name__rating[data-v-2bb9cdfe]{margin-top:2px;display:flex;justify-content:space-between;align-items:center;padding-right:10px}.popular__container .popular__item-box .popular__items .popular__items__desription .name__rating .magazine__item--rating[data-v-2bb9cdfe]{display:flex;align-items:center}.popular__container .popular__item-box .popular__items .popular__items__desription .name__rating .magazine__item--rating img[data-v-2bb9cdfe]{width:12px;height:12px;margin-right:2px}.popular__container .popular__item-box .popular__items .popular__items__desription .name__rating .magazine__item--rating span[data-v-2bb9cdfe]{color:#666;opacity:.7;font-size:10px}.popular__container .popular__item-box .popular__items .popular__items__desription--name[data-v-2bb9cdfe]{margin-top:5px;font-family:Roboto;font-weight:500;font-size:14px;line-height:16px;opacity:.7;color:#666}.popular__container .popular__item-box .popular__items .popular__items__desription--categorie[data-v-2bb9cdfe]{margin:9px 0;font-family:Roboto;font-weight:700;font-size:16px;line-height:100%;color:#000;height:60px}.popular__container .popular__item-box .popular__items .popular__items__desription--price[data-v-2bb9cdfe]{font-family:Roboto;font-weight:700;font-size:20px;line-height:100%;color:#219ebc}.popular__container .popular__item-box .popular__items .popular__items__desription--old--price[data-v-2bb9cdfe]{margin-bottom:2px;font-size:14px;color:#f7931e;text-decoration:line-through}.popular__container .popular__btn[data-v-2bb9cdfe],.popular__container .popular__btn[data-v-2bb9cdfe]:link,.popular__container .popular__btn[data-v-2bb9cdfe]:visited{display:block;border-radius:5px;transition:all .2s;width:224px;height:50px;margin:20px auto 0;text-align:center;padding:10px;text-decoration:none;font-family:inherit;font-weight:500;font-size:18px;color:hsla(0,0%,100%,.9);background-color:#f7931e;border:none;cursor:pointer}.popular__container .popular__btn[data-v-2bb9cdfe]:hover{transform:scale(1.07)}.popular__container .popular__btn[data-v-2bb9cdfe]:hover:after{opacity:0}.popular__container .popular__btn[data-v-2bb9cdfe]:active{outline:none;transform:scale(1.03)}.popular__container .popular__btn[data-v-2bb9cdfe]:active,.popular__container .popular__btn[data-v-2bb9cdfe]:hover{background-color:#fff;color:#f7931e;border:1px solid #f7931e}.popular__container .popular__dropdown__box[data-v-2bb9cdfe]{position:relative}.popular__container .popular__dropdown__box .popular__dropdown--btn[data-v-2bb9cdfe]{width:170px;height:36px;border:1px solid #f7931e;border-radius:5px;background-color:transparent;padding:0 10px;font-family:Roboto;font-weight:500;font-size:16px;color:#f7931e;display:flex;justify-content:space-between;align-items:center}.popular__container .popular__dropdown__box .popular__dropdown--btn:hover+.popular__dropdown__content[data-v-2bb9cdfe]{visibility:visible;opacity:1}.popular__container .popular__dropdown__box .popular__dropdown__content[data-v-2bb9cdfe]{position:absolute;left:0;top:36px;width:170px;display:flex;flex-direction:column;justify-content:center;transition:all .2s;visibility:hidden;opacity:0;border-radius:5px;overflow:hidden;box-shadow:0 2px 6px rgba(0,0,0,.3)}.popular__container .popular__dropdown__box .popular__dropdown__content .popular__dropdown--link[data-v-2bb9cdfe]{color:#f7931e;background-color:#fcf6f6;padding:5px;text-decoration:none}.popular__container .popular__dropdown__box .popular__dropdown__content .popular__dropdown--link[data-v-2bb9cdfe]:active,.popular__container .popular__dropdown__box .popular__dropdown__content .popular__dropdown--link[data-v-2bb9cdfe]:hover{font-weight:500}.popular__container .popular__dropdown__box .popular__dropdown__content[data-v-2bb9cdfe]:active,.popular__container .popular__dropdown__box .popular__dropdown__content[data-v-2bb9cdfe]:hover{visibility:visible;opacity:1}@media only screen and (max-width:1440px)and (min-width:1200px){.popular__container .popular__item-box[data-v-2bb9cdfe]{padding:0 4px}}@media only screen and (max-width:1200px)and (min-width:765px){.popular__container[data-v-2bb9cdfe]{padding:20px}.popular__container .popular__item-box .popular__items[data-v-2bb9cdfe]{width:229px;height:381.67px;margin-bottom:22px}.popular__container .popular__item-box .popular__items .popular__items__img[data-v-2bb9cdfe]{width:230px;height:230px}}@media only screen and (max-width:765px){.popular__container[data-v-2bb9cdfe]{padding:16px}.popular__container .popular__heading[data-v-2bb9cdfe]{font-size:24px;margin-bottom:28px}.popular__container .popular__item-box .popular__items[data-v-2bb9cdfe]{width:164px;height:273px;margin-bottom:14px}.popular__container .popular__item-box .popular__items .popular__items__img[data-v-2bb9cdfe]{width:164px;height:164px}.popular__container .popular__item-box .popular__items .popular__items__desription[data-v-2bb9cdfe]{padding-left:12px}.popular__container .popular__item-box .popular__items .popular__items__desription--name[data-v-2bb9cdfe]{margin-top:3.7px;font-size:10px}.popular__container .popular__item-box .popular__items .popular__items__desription--categorie[data-v-2bb9cdfe]{margin:6.6px 0 0;font-size:12px;height:50px;padding:0}.popular__container .popular__item-box .popular__items .popular__items__desription--price[data-v-2bb9cdfe]{font-size:14px}.popular__container .popular__item-box .popular__items .popular__items__desription--old--price[data-v-2bb9cdfe]{font-size:10px}.popular__container .popular__btn[data-v-2bb9cdfe],.popular__container .popular__btn[data-v-2bb9cdfe]:link,.popular__container .popular__btn[data-v-2bb9cdfe]:visited{width:160px;height:35px;margin-top:18px;padding:8px;font-size:12px}}@media only screen and (max-width:365px){.popular__container[data-v-2bb9cdfe]{padding:14px}.popular__container .popular__heading[data-v-2bb9cdfe]{font-size:22px;margin-bottom:12px}.popular__container .popular__item-box .popular__items[data-v-2bb9cdfe]{width:140px;height:245px}.popular__container .popular__item-box .popular__items .popular__items__img[data-v-2bb9cdfe]{width:140px;height:140px}.popular__container .popular__item-box .popular__items .popular__items__desription--categorie[data-v-2bb9cdfe]{margin-top:3.6px;font-size:12px;height:2.8em;padding:0}.popular__container .popular__item-box .popular__items .popular__items__desription--price[data-v-2bb9cdfe]{font-size:12px}.popular__container .popular__item-box .popular__items .popular__items__desription--old--price[data-v-2bb9cdfe]{font-size:9px;bottom:17px}}div.title-box[data-v-2bb9cdfe]{padding:40px 0}div.title-box ul li[data-v-2bb9cdfe],div.title-box ul li a[data-v-2bb9cdfe]{display:inline-block;font-weight:400;font-size:15px;line-height:18px;color:#000}div.title-box ul li a[data-v-2bb9cdfe]:hover{color:#f7931e}div.fixvh-category[data-v-2bb9cdfe]{z-index:100;width:100%;background-color:#333;opacity:.5}div.category-modal[data-v-2bb9cdfe],div.fixvh-category[data-v-2bb9cdfe]{position:fixed;top:0;left:0;height:100vh;z-index:1000}div.category-modal[data-v-2bb9cdfe]{width:90%;transform:translateX(0);opacity:1;transition:.2s}div.category-modal div.category-nav[data-v-2bb9cdfe]{width:100%;height:100%;background-color:#fff;position:relative;z-index:101;display:flex;padding:15px 0}div.category-modal div.category-nav button.close-btn[data-v-2bb9cdfe]{position:absolute;width:30px;height:30px;border-radius:100%;background-color:#f7931e;border:none;right:-41px;top:8px;z-index:101}div.category-modal div.category-nav button.close-btn .icon-times[data-v-2bb9cdfe]{color:#fff}div.category-modal div.category-nav div.scroll-modal[data-v-2bb9cdfe]{overflow-y:scroll;overflow-x:hidden}div.category-modal div.category-nav div.category-left[data-v-2bb9cdfe]{width:400px;padding:0 15px;border-right:1px solid #bbb}div.category-modal div.category-nav div.category-left ul[data-v-2bb9cdfe]{list-style-type:none;padding-right:15px}div.category-modal div.category-nav div.category-left li button[data-v-2bb9cdfe]{display:block;padding:8px 15px;border-radius:5px;font-size:16px;color:#333;font-weight:500;border:none;background-color:transparent;width:100%;text-align:left}div.category-modal div.category-nav div.category-left li button[data-v-2bb9cdfe]:hover{color:#f7931e}div.category-modal div.category-nav div.category-left li.active-li button[data-v-2bb9cdfe]{background-color:#f7931e;color:#fff}div.category-modal div.category-nav div.category-content[data-v-2bb9cdfe]{width:calc(100% - 400px);padding:0 30px;position:relative}div.category-modal div.category-nav div.category-content h3.category-title[data-v-2bb9cdfe]{font-size:24px;font-weight:500;margin-bottom:25px}div.category-modal div.category-nav div.category-content div.visible-all a[data-v-2bb9cdfe]{font-size:16px;color:#888;margin-bottom:5px;display:block}div.category-modal div.category-nav div.category-content a[data-v-2bb9cdfe]{transition:.2s}div.category-modal div.category-nav div.category-content ul[data-v-2bb9cdfe]{list-style-type:none;margin-bottom:25px}div.category-modal div.category-nav div.category-content ul a[data-v-2bb9cdfe]{font-size:16px;color:#888;margin-bottom:5px;display:block}div.category-modal div.category-nav div.category-content a.click-parent[data-v-2bb9cdfe]{font-size:18px;margin-bottom:10px;color:#333;display:block;font-weight:500}div.category-modal div.category-nav div.category-content a[data-v-2bb9cdfe]:hover{color:#f7931e!important}div.category-modal div.category-nav div.scroll-modal[data-v-2bb9cdfe]::-webkit-scrollbar{width:5px}div.category-modal div.category-nav div.scroll-modal[data-v-2bb9cdfe]::-webkit-scrollbar-track{background:#f1f1f1}div.category-modal div.category-nav div.scroll-modal[data-v-2bb9cdfe]::-webkit-scrollbar-thumb{background:#f7931e;border-radius:5px}div.category-modal div.category-nav div.scroll-modal[data-v-2bb9cdfe]::-webkit-scrollbar-thumb:hover{background:#f7931e}div.hidden-category[data-v-2bb9cdfe]{transform:translateX(-104%);opacity:0}div.category-mobile[data-v-2bb9cdfe]{position:fixed;z-index:1234454545;top:0;left:0;width:100%;height:100vh;background-color:#fff;padding:15px}div.category-mobile a.visible-all-mobile[data-v-2bb9cdfe]{font-size:16px;color:#333}div.category-mobile div.title-t[data-v-2bb9cdfe]{display:flex;justify-content:space-between;align-items:center}div.category-mobile div.title-t h3[data-v-2bb9cdfe]{font-size:24px;margin-bottom:0}div.category-mobile div.title-t button[data-v-2bb9cdfe]{border:none;background-color:transparent}div.category-mobile div.title-t button .close-mobile[data-v-2bb9cdfe]{font-size:26px;color:#f7931e}div.category-mobile div.category-acc[data-v-2bb9cdfe]{margin-top:20px;max-height:calc(100vh - 100px);overflow-y:scroll}div.category-mobile div.category-acc div.acc-item[data-v-2bb9cdfe]{margin-bottom:5px}div.category-mobile div.category-acc div.acc-item button[data-v-2bb9cdfe]{width:100%;display:flex;justify-content:space-between;align-items:center;background:#fff7ec;padding:10px 15px;border-radius:5px;border:1px solid #fff7ec}div.category-mobile div.category-acc div.acc-item button b[data-v-2bb9cdfe]{font-size:18px}div.category-mobile div.category-acc div.acc-item button .icon-down[data-v-2bb9cdfe]{font-size:18px;color:#f7931e}div.category-mobile div.category-acc div.acc-item button .rotate[data-v-2bb9cdfe]{transform:rotate(-180deg)}div.category-mobile div.category-acc div.acc-item div.acc-content[data-v-2bb9cdfe]{padding:15px}div.category-mobile div.category-acc div.acc-item div.acc-content ul[data-v-2bb9cdfe]{list-style-type:none}div.category-mobile div.category-acc div.acc-item div.acc-content ul li a[data-v-2bb9cdfe]{color:#333;display:block;font-size:16px!important;font-weight:700;margin-bottom:5px}div.category-mobile div.category-acc div.acc-item div.acc-content ul li a[data-v-2bb9cdfe]:active{color:#f7931e}div.category-mobile div.category-acc div.acc-item div.acc-content ul li ul[data-v-2bb9cdfe]{margin-bottom:15px}div.category-mobile div.category-acc div.acc-item div.acc-content ul li ul li a[data-v-2bb9cdfe]{font-weight:400;color:#777}@media(max-width:800px){div.category-modal div.category-nav div.category-left[data-v-2bb9cdfe]{width:280px}div.category-modal div.category-nav div.category-content[data-v-2bb9cdfe]{width:calc(100% - 280px)}}div.product-card[data-v-2bb9cdfe]{width:100%;background:#fff;box-shadow:0 1px 3px rgba(0,0,0,.12);border-radius:5px;overflow:hidden;margin-bottom:20px}div.product-card[data-v-2bb9cdfe]:hover{box-shadow:0 1px 10px rgba(0,0,0,.18)}div.product-card div.img img[data-v-2bb9cdfe]{height:222px;width:100%;-o-object-fit:cover;object-fit:cover}div.product-card div.product-info[data-v-2bb9cdfe]{padding:5px 15px}div.product-card div.product-info div.brand[data-v-2bb9cdfe]{display:flex;justify-content:space-between;align-items:center;margin-bottom:10px}div.product-card div.product-info div.brand h6[data-v-2bb9cdfe]{font-weight:400;font-size:14px;line-height:16px;margin-bottom:0;color:#666}div.product-card div.product-info div.brand div.rating[data-v-2bb9cdfe]{display:flex;align-items:center}div.product-card div.product-info div.brand div.rating span[data-v-2bb9cdfe]{font-weight:500;font-size:12px;line-height:14px;margin-left:2px;color:#565656}div.product-card div.product-info h4[data-v-2bb9cdfe]{height:38px;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;text-overflow:ellipsis;margin-bottom:15px;font-weight:500;font-size:16px;line-height:19px;color:#000}div.product-card div.product-info h5.old-price[data-v-2bb9cdfe]{text-decoration:line-through;font-weight:700;font-size:14px;line-height:100%;margin-bottom:10px;-webkit-text-decoration-color:#2e2e2e;text-decoration-color:#2e2e2e;text-decoration-thickness:1px;color:#f7931e}div.product-card div.product-info h5.price[data-v-2bb9cdfe]{font-weight:700;font-size:20px;line-height:100%;margin-bottom:10px;color:#219ebc}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 288:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/ProductLike.vue?vue&type=template&id=2bb9cdfe&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('nuxt-link',{attrs:{"to":{
            name: ("product-id___" + (_vm.$i18n.locale)),
            params: { id: _vm.product.slug }
        }}},[_c('div',{staticClass:"product-card"},[_c('div',{staticClass:"img"},[_c('img',{attrs:{"src":_vm.$cdn + _vm.product.image}})]),_vm._v(" "),_c('div',{staticClass:"product-info"},[_c('div',{staticClass:"brand"},[_c('h6',[_vm._v(_vm._s(_vm.product.category[_vm.$i18n.locale]))])]),_vm._v(" "),_c('h4',[_vm._v(_vm._s(_vm.product.name[_vm.$i18n.locale]))]),_vm._v(" "),_c('div',{staticClass:"card-bottom"},[(_vm.product.discount != null)?_c('div',[_c('h5',{staticClass:"old-price"},[_vm._v("\n                            "+_vm._s(_vm.product.price)+" "+_vm._s(_vm.$t("sum"))+"\n                        ")]),_vm._v(" "),_c('h5',{staticClass:"price"},[_vm._v("\n                            "+_vm._s(_vm.product.discount)+" "+_vm._s(_vm.$t("sum"))+"\n                        ")])]):_c('div',[_c('h5',{staticClass:"price"},[_vm._v("\n                            "+_vm._s(_vm.product.price)+" "+_vm._s(_vm.$t("sum"))+"\n                        ")])]),_vm._v(" "),_c('button')])])])])],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/ProductLike.vue?vue&type=template&id=2bb9cdfe&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/ProductLike.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var ProductLikevue_type_script_lang_js_ = ({props:{product:{type:Object}}});
// CONCATENATED MODULE: ./components/ProductLike.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_ProductLikevue_type_script_lang_js_ = (ProductLikevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/ProductLike.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(257)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_ProductLikevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "2bb9cdfe",
  "a8bed68c"
  
)

/* harmony default export */ var ProductLike = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=product-like.js.map