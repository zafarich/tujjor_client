exports.ids = [13];
exports.modules = {

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
//# sourceMappingURL=modals-warning-message.js.map