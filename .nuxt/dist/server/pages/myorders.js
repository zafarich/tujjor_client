exports.ids = [39];
exports.modules = {

/***/ 168:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(214);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("54050ee0", content, true, context)
};

/***/ }),

/***/ 213:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_myorders_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(168);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_myorders_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_myorders_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_myorders_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_myorders_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 214:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "@media(max-width:543px){.popular__container .img-fluid{height:170px!important;-o-object-fit:cover!important;object-fit:cover!important}.other__item__banner--carousel .b-carousel .carousel-inner .b-carousel-slide img{min-height:250px!important}}.other__item__banner--carousel .b-carousel .carousel-inner .b-carousel-slide img{min-height:450px}.success-info{position:fixed;top:10px;right:20px;width:320px;z-index:12345}div.card-row{display:flex;margin:0 -10px;flex-wrap:wrap}.hover-shadow:hover{box-shadow:0 1px 10px rgba(0,0,0,.18)}div.card-5{width:20%;padding:0 10px}div.card-4{width:25%;padding:0 10px}div.card-3{width:33.3333333333%;padding:0 10px}@media(max-width:1020px){div.card-4,div.card-5{width:33.3333333333%}}@media(max-width:768px){div.card-3,div.card-4,div.card-5{width:50%}.catalog__container{padding-top:5px!important}.filtr__section .catalog__page__filtr__box{position:relative!important;top:unset!important}.catalog__container .catalog__filtraiton__box .filtraiton__form__box .filtraiton__form--submit{margin-bottom:0!important}.catalog__container .catalog__page__about{padding-left:0!important}}@-webkit-keyframes move__360{0%{transform:translateX(0deg)}to{transform:translateX(1turn)}}@keyframes move__360{0%{transform:translateX(0deg)}to{transform:translateX(1turn)}}h6.error-text{font-size:12px;color:red;margin-bottom:0}h1.title-form{font-size:24px;text-align:center}.popular__container{margin-top:40px}.popular__container .popular__heading{font-family:Roboto,sans-serif;font-weight:500;font-size:48px;color:#f7931e;margin-bottom:40px;text-shadow:0 0 3px rgba(247,147,30,.3);display:inline-block}.popular__container .popular__item-box{display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap}.popular__container .popular__item-box:after{content:\"\";flex:0 1 32%}.popular__container .popular__item-box .popular__items{flex:0 0 auto;width:222px;height:370px;background-color:#fff;box-shadow:0 1px 3px rgba(0,0,0,.12);border-radius:5px;overflow:hidden;margin:0 2px 37px;cursor:pointer;transition:all .2s}.popular__container .popular__item-box .popular__items:hover{transform:scale(1.07)}.popular__container .popular__item-box .popular__items:hover:after{opacity:0}.popular__container .popular__item-box .popular__items:active{outline:none;transform:scale(1.03)}.popular__container .popular__item-box .popular__items .popular__items__img{width:222px;height:222px}.popular__container .popular__item-box .popular__items .popular__items__desription{padding-left:16px;display:flex;flex-direction:column;justify-content:flex-start;position:relative}.popular__container .popular__item-box .popular__items .popular__items__desription .name__rating{margin-top:2px;display:flex;justify-content:space-between;align-items:center;padding-right:10px}.popular__container .popular__item-box .popular__items .popular__items__desription .name__rating .magazine__item--rating{display:flex;align-items:center}.popular__container .popular__item-box .popular__items .popular__items__desription .name__rating .magazine__item--rating img{width:12px;height:12px;margin-right:2px}.popular__container .popular__item-box .popular__items .popular__items__desription .name__rating .magazine__item--rating span{color:#666;opacity:.7;font-size:10px}.popular__container .popular__item-box .popular__items .popular__items__desription--name{margin-top:5px;font-family:Roboto;font-weight:500;font-size:14px;line-height:16px;opacity:.7;color:#666}.popular__container .popular__item-box .popular__items .popular__items__desription--categorie{margin:9px 0;font-family:Roboto;font-weight:700;font-size:16px;line-height:100%;color:#000;height:60px}.popular__container .popular__item-box .popular__items .popular__items__desription--price{font-family:Roboto;font-weight:700;font-size:20px;line-height:100%;color:#219ebc}.popular__container .popular__item-box .popular__items .popular__items__desription--old--price{margin-bottom:2px;font-size:14px;color:#f7931e;text-decoration:line-through}.popular__container .popular__btn,.popular__container .popular__btn:link,.popular__container .popular__btn:visited{display:block;border-radius:5px;transition:all .2s;width:224px;height:50px;margin:20px auto 0;text-align:center;padding:10px;text-decoration:none;font-family:inherit;font-weight:500;font-size:18px;color:hsla(0,0%,100%,.9);background-color:#f7931e;border:none;cursor:pointer}.popular__container .popular__btn:hover{transform:scale(1.07)}.popular__container .popular__btn:hover:after{opacity:0}.popular__container .popular__btn:active{outline:none;transform:scale(1.03)}.popular__container .popular__btn:active,.popular__container .popular__btn:hover{background-color:#fff;color:#f7931e;border:1px solid #f7931e}.popular__container .popular__dropdown__box{position:relative}.popular__container .popular__dropdown__box .popular__dropdown--btn{width:170px;height:36px;border:1px solid #f7931e;border-radius:5px;background-color:transparent;padding:0 10px;font-family:Roboto;font-weight:500;font-size:16px;color:#f7931e;display:flex;justify-content:space-between;align-items:center}.popular__container .popular__dropdown__box .popular__dropdown--btn:hover+.popular__dropdown__content{visibility:visible;opacity:1}.popular__container .popular__dropdown__box .popular__dropdown__content{position:absolute;left:0;top:36px;width:170px;display:flex;flex-direction:column;justify-content:center;transition:all .2s;visibility:hidden;opacity:0;border-radius:5px;overflow:hidden;box-shadow:0 2px 6px rgba(0,0,0,.3)}.popular__container .popular__dropdown__box .popular__dropdown__content .popular__dropdown--link{color:#f7931e;background-color:#fcf6f6;padding:5px;text-decoration:none}.popular__container .popular__dropdown__box .popular__dropdown__content .popular__dropdown--link:active,.popular__container .popular__dropdown__box .popular__dropdown__content .popular__dropdown--link:hover{font-weight:500}.popular__container .popular__dropdown__box .popular__dropdown__content:active,.popular__container .popular__dropdown__box .popular__dropdown__content:hover{visibility:visible;opacity:1}@media only screen and (max-width:1440px)and (min-width:1200px){.popular__container .popular__item-box{padding:0 4px}}@media only screen and (max-width:1200px)and (min-width:765px){.popular__container{padding:20px}.popular__container .popular__item-box .popular__items{width:229px;height:381.67px;margin-bottom:22px}.popular__container .popular__item-box .popular__items .popular__items__img{width:230px;height:230px}}@media only screen and (max-width:765px){.popular__container{padding:16px}.popular__container .popular__heading{font-size:24px;margin-bottom:28px}.popular__container .popular__item-box .popular__items{width:164px;height:273px;margin-bottom:14px}.popular__container .popular__item-box .popular__items .popular__items__img{width:164px;height:164px}.popular__container .popular__item-box .popular__items .popular__items__desription{padding-left:12px}.popular__container .popular__item-box .popular__items .popular__items__desription--name{margin-top:3.7px;font-size:10px}.popular__container .popular__item-box .popular__items .popular__items__desription--categorie{margin:6.6px 0 0;font-size:12px;height:50px;padding:0}.popular__container .popular__item-box .popular__items .popular__items__desription--price{font-size:14px}.popular__container .popular__item-box .popular__items .popular__items__desription--old--price{font-size:10px}.popular__container .popular__btn,.popular__container .popular__btn:link,.popular__container .popular__btn:visited{width:160px;height:35px;margin-top:18px;padding:8px;font-size:12px}}@media only screen and (max-width:365px){.popular__container{padding:14px}.popular__container .popular__heading{font-size:22px;margin-bottom:12px}.popular__container .popular__item-box .popular__items{width:140px;height:245px}.popular__container .popular__item-box .popular__items .popular__items__img{width:140px;height:140px}.popular__container .popular__item-box .popular__items .popular__items__desription--categorie{margin-top:3.6px;font-size:12px;height:2.8em;padding:0}.popular__container .popular__item-box .popular__items .popular__items__desription--price{font-size:12px}.popular__container .popular__item-box .popular__items .popular__items__desription--old--price{font-size:9px;bottom:17px}}div.title-box{padding:40px 0}div.title-box ul li,div.title-box ul li a{display:inline-block;font-weight:400;font-size:15px;line-height:18px;color:#000}div.title-box ul li a:hover{color:#f7931e}div.fixvh-category{z-index:100;width:100%;background-color:#333;opacity:.5}div.category-modal,div.fixvh-category{position:fixed;top:0;left:0;height:100vh;z-index:1000}div.category-modal{width:90%;transform:translateX(0);opacity:1;transition:.2s}div.category-modal div.category-nav{width:100%;height:100%;background-color:#fff;position:relative;z-index:101;display:flex;padding:15px 0}div.category-modal div.category-nav button.close-btn{position:absolute;width:30px;height:30px;border-radius:100%;background-color:#f7931e;border:none;right:-41px;top:8px;z-index:101}div.category-modal div.category-nav button.close-btn .icon-times{color:#fff}div.category-modal div.category-nav div.scroll-modal{overflow-y:scroll;overflow-x:hidden}div.category-modal div.category-nav div.category-left{width:400px;padding:0 15px;border-right:1px solid #bbb}div.category-modal div.category-nav div.category-left ul{list-style-type:none;padding-right:15px}div.category-modal div.category-nav div.category-left li button{display:block;padding:8px 15px;border-radius:5px;font-size:16px;color:#333;font-weight:500;border:none;background-color:transparent;width:100%;text-align:left}div.category-modal div.category-nav div.category-left li button:hover{color:#f7931e}div.category-modal div.category-nav div.category-left li.active-li button{background-color:#f7931e;color:#fff}div.category-modal div.category-nav div.category-content{width:calc(100% - 400px);padding:0 30px;position:relative}div.category-modal div.category-nav div.category-content h3.category-title{font-size:24px;font-weight:500;margin-bottom:25px}div.category-modal div.category-nav div.category-content div.visible-all a{font-size:16px;color:#888;margin-bottom:5px;display:block}div.category-modal div.category-nav div.category-content a{transition:.2s}div.category-modal div.category-nav div.category-content ul{list-style-type:none;margin-bottom:25px}div.category-modal div.category-nav div.category-content ul a{font-size:16px;color:#888;margin-bottom:5px;display:block}div.category-modal div.category-nav div.category-content a.click-parent{font-size:18px;margin-bottom:10px;color:#333;display:block;font-weight:500}div.category-modal div.category-nav div.category-content a:hover{color:#f7931e!important}div.category-modal div.category-nav div.scroll-modal::-webkit-scrollbar{width:5px}div.category-modal div.category-nav div.scroll-modal::-webkit-scrollbar-track{background:#f1f1f1}div.category-modal div.category-nav div.scroll-modal::-webkit-scrollbar-thumb{background:#f7931e;border-radius:5px}div.category-modal div.category-nav div.scroll-modal::-webkit-scrollbar-thumb:hover{background:#f7931e}div.hidden-category{transform:translateX(-104%);opacity:0}div.category-mobile{position:fixed;z-index:1234454545;top:0;left:0;width:100%;height:100vh;background-color:#fff;padding:15px}div.category-mobile a.visible-all-mobile{font-size:16px;color:#333}div.category-mobile div.title-t{display:flex;justify-content:space-between;align-items:center}div.category-mobile div.title-t h3{font-size:24px;margin-bottom:0}div.category-mobile div.title-t button{border:none;background-color:transparent}div.category-mobile div.title-t button .close-mobile{font-size:26px;color:#f7931e}div.category-mobile div.category-acc{margin-top:20px;max-height:calc(100vh - 100px);overflow-y:scroll}div.category-mobile div.category-acc div.acc-item{margin-bottom:5px}div.category-mobile div.category-acc div.acc-item button{width:100%;display:flex;justify-content:space-between;align-items:center;background:#fff7ec;padding:10px 15px;border-radius:5px;border:1px solid #fff7ec}div.category-mobile div.category-acc div.acc-item button b{font-size:18px}div.category-mobile div.category-acc div.acc-item button .icon-down{font-size:18px;color:#f7931e}div.category-mobile div.category-acc div.acc-item button .rotate{transform:rotate(-180deg)}div.category-mobile div.category-acc div.acc-item div.acc-content{padding:15px}div.category-mobile div.category-acc div.acc-item div.acc-content ul{list-style-type:none}div.category-mobile div.category-acc div.acc-item div.acc-content ul li a{color:#333;display:block;font-size:16px!important;font-weight:700;margin-bottom:5px}div.category-mobile div.category-acc div.acc-item div.acc-content ul li a:active{color:#f7931e}div.category-mobile div.category-acc div.acc-item div.acc-content ul li ul{margin-bottom:15px}div.category-mobile div.category-acc div.acc-item div.acc-content ul li ul li a{font-weight:400;color:#777}@media(max-width:800px){div.category-modal div.category-nav div.category-left{width:280px}div.category-modal div.category-nav div.category-content{width:calc(100% - 280px)}}.order__container .order__heading{margin-bottom:40px}.order__container .order__heading h2{font-family:Roboto,sans-serif;font-weight:500;font-size:48px;line-height:56px;color:#f7931f}.order__container .order__section{max-width:100%;padding:30px 1px}.order__container .order__section .header{padding-left:20px;font-family:Roboto;font-size:32px;font-weight:500;line-height:100%;color:#023047}.order__container .order__section .order__item__box{margin:20px 15px 0;padding:20px;background:#fff;border-radius:5px;box-shadow:0 1px 3px rgba(0,0,0,.1);font-family:Roboto,sans-serif;display:flex;justify-content:space-between}.order__container .order__section .order__item__box:last-child{margin-bottom:70px;border-bottom:1px solid #ddd}.order__container .order__section .order__item__box .order__item--header{flex-basis:50%;display:flex;margin-right:30px}.order__container .order__section .order__item__box .order__item--header img{margin-right:18px;border-radius:3px;width:124px;height:124px;-o-object-fit:cover;object-fit:cover}.order__container .order__section .order__item__box .order__item--header .order__item__description h3{font-family:Roboto;font-weight:700;font-size:18px;line-height:100%;overflow:hidden;height:1em;text-transform:uppercase;color:#000}.order__container .order__section .order__item__box .order__item--header .order__item__description .p-first{font-family:Roboto;font-weight:500;font-size:14px;line-height:100%;overflow:hidden;height:3em;color:#000;margin-bottom:30px}.order__container .order__section .order__item__box .order__item--header .order__item__description .p-second{font-family:Roboto,sans-serif;font-size:16px;line-height:100%;overflow:hidden;height:1em;font-weight:500;color:#000;display:flex;align-items:center}.order__container .order__section .order__item__box .order__item--header .order__item__description .p-second span{margin-right:5px;font-family:Roboto,sans-serif;font-weight:400;font-size:14px;line-height:100%;color:#023047}.order__container .order__section .order__item__box .order__item--secondary{flex:2;display:flex;flex-flow:row wrap;justify-content:space-between;align-items:center}.order__container .order__section .order__item__box .order__item--secondary .order__item--number{height:40px;display:flex;align-items:center;margin-bottom:30px;font-size:18px;font-weight:700}.order__container .order__section .order__item__box .order__item--secondary .order__item--number span{font-family:Roboto,sans-serif;font-weight:400;font-size:16px;line-height:100%;color:#023047;margin-right:10px}.order__container .order__section .order__item__box .order__item--secondary .order__item--number span.number{font-size:18px;font-weight:700}.order__container .order__section .order__item__box .order__item--secondary .order__item--price{flex-basis:60%;display:flex;justify-content:flex-end;margin-bottom:30px}.order__container .order__section .order__item__box .order__item--secondary .order__item--price span{font-family:Roboto,sans-serif;font-weight:600;font-size:28px;line-height:100%;color:#f7931e}.order__container .order__section .order__item__box .order__item--secondary .order__item--color{flex-grow:0}.order__container .order__section .order__item__box .order__item--secondary .order__item--color span{font-family:Roboto,sans-serif;font-weight:400;font-size:16px;line-height:100%;color:#023047;margin-right:5px}.order__container .order__section .order__item__box .order__item--secondary .order__item--color img{border-radius:3px;width:50px;height:50px}.order__container .order__section .order__price{display:flex;justify-content:space-between;margin-top:30px;padding-top:30px;border-top:1px solid #ddd}.order__container .order__section .order__price .order__price--total span{font-family:Roboto,sans-serif;font-weight:500;font-size:28px;line-height:100%;color:#000}.order__container .order__section .order__price .order__price--total .all__price{margin-left:10px;font-weight:900;color:#f7931e}@media screen and (max-width:1045px){.order__container .order__section .order__item__box .order__item--secondary{align-items:baseline}.order__container .order__section .order__item__box .order__item--secondary .order__item--number{flex-basis:100%}.order__container .order__section .order__item__box .order__item--secondary .order__item--price{flex-basis:auto;order:1}}@media screen and (max-width:777px){.order__container .order__section .order__item__box .order__item--header{margin-right:15px}}@media screen and (max-width:677px){.order__container .order__section .order__item__box{flex-direction:column}.order__container .order__section .order__item__box .order__item--header{flex-basis:auto;margin-right:0;margin-bottom:30px}}@media only screen and (max-width:400px){.order__container .order__heading{margin-bottom:10px}.order__container .order__heading h2{font-size:32px;line-height:1.3}.order__container .order__section .header{padding-left:0;font-size:24px}.order__container .order__section .order__item__box{flex-direction:column;padding:13px 17px 18px;margin:20px 0 0}.order__container .order__section .order__item__box .order__item--header{flex-basis:auto;margin-right:0;margin-bottom:5px}.order__container .order__section .order__item__box .order__item--header img{margin-right:7px;height:90px;width:90px}.order__container .order__section .order__item__box .order__item--header .order__item__description h3{font-size:16px;overflow:hidden;height:1em}.order__container .order__section .order__item__box .order__item--header .order__item__description .p-first{margin-bottom:5px;height:3em;overflow:hidden}.order__container .order__section .order__item__box .order__item--header .order__item__description .p-second{font-size:14px;height:1em;overflow:hidden;margin-bottom:0}.order__container .order__section .order__item__box .order__item--secondary .order__item--number{margin-bottom:5px;padding:8px 0;height:auto}.order__container .order__section .order__item__box .order__item--secondary .order__item--number span,.order__container .order__section .order__item__box .order__item--secondary .order__item--number span.number{font-size:14px}.order__container .order__section .order__item__box .order__item--secondary .order__item--price{margin-bottom:0}.order__container .order__section .order__item__box .order__item--secondary .order__item--price span{font-size:18px}.order__container .order__section .order__item__box .order__item--secondary .order__item--color span{font-size:14px}.order__container .order__section .order__item__box .order__item--secondary .order__item--color img{width:40px;height:40px}.order__container .order__section .order__price .order__price--total{flex-basis:100%;display:flex;justify-content:space-between;align-items:center}.order__container .order__section .order__price .order__price--total span{font-size:16px}.order__container .order__section .order__price .order__price--total .all__price{font-size:28px}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 266:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/myorders.vue?vue&type=template&id=4bd66a89&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{staticClass:"order"},[_vm._ssrNode("<div class=\"container\">","</div>",[_vm._ssrNode("<div class=\"title-box\">","</div>",[_vm._ssrNode("<ul>","</ul>",[_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{attrs:{"to":"/"}},[_vm._v("Главная страница ")]),_vm._ssrNode("\n                    /\n                ")],2),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{attrs:{"to":"#"}},[_vm._v("Мои закази ")])],1)],2)])]),_vm._ssrNode(" <main class=\"order__container container\"><div class=\"order__heading\"><h2>Мои закази</h2></div> <section class=\"order__section container\"><h2 class=\"header\">Заказ №23</h2> <div class=\"order__item__box\"><div class=\"order__item--header\"><img"+(_vm._ssrAttr("src",__webpack_require__(88)))+" alt=\"Item image\"> <div class=\"order__item__description\"><h3>POLO рубашка</h3> <p class=\"p-first\">\n                            Рубашка с контрастным дизайном\n                        </p> <p class=\"p-second\"><span>Размер:</span>XXL - 44</p></div></div> <div class=\"order__item--secondary\"><div class=\"order__item--number\"><span>Количество:</span> <span class=\"number\"> 1 шт</span></div> <div class=\"order__item--price\"><span>100 000 cум </span></div> <div class=\"order__item--color\"><span>Цвет:</span> <img"+(_vm._ssrAttr("src",__webpack_require__(88)))+" alt=\"Color image\"></div></div></div> <div class=\"order__item__box\"><div class=\"order__item--header\"><img"+(_vm._ssrAttr("src",__webpack_require__(88)))+" alt=\"Item image\"> <div class=\"order__item__description\"><h3>POLO рубашка</h3> <p class=\"p-first\">\n                            Рубашка с контрастным дизайном\n                        </p> <p class=\"p-second\"><span>Размер:</span>XXL - 44</p></div></div> <div class=\"order__item--secondary\"><div class=\"order__item--number\"><span>Количество:</span> <span class=\"number\"> 1 шт</span></div> <div class=\"order__item--price\"><span>200 000 cум </span></div> <div class=\"order__item--color\"><span>Цвет:</span> <img"+(_vm._ssrAttr("src",__webpack_require__(88)))+" alt=\"Color image\"></div></div></div> <div class=\"order__item__box\"><div class=\"order__item--header\"><img"+(_vm._ssrAttr("src",__webpack_require__(88)))+" alt=\"Item image\"> <div class=\"order__item__description\"><h3>POLO рубашка</h3> <p class=\"p-first\">\n                            Рубашка с контрастным дизайном\n                        </p> <p class=\"p-second\"><span>Размер:</span>XXL - 44</p></div></div> <div class=\"order__item--secondary\"><div class=\"order__item--number\"><span>Количество:</span> <span class=\"number\"> 1 шт</span></div> <div class=\"order__item--price\"><span>150 000 cум </span></div> <div class=\"order__item--color\"><span>Цвет:</span> <img"+(_vm._ssrAttr("src",__webpack_require__(88)))+" alt=\"Color image\"></div></div></div> <div class=\"order__price\"><div class=\"order__price--total\"><span>Общая сумма:</span> <span class=\"all__price\">450 000 cум</span></div></div></section> <section class=\"order__section container\"><h2 class=\"header\">Заказ №32</h2> <div class=\"order__item__box\"><div class=\"order__item--header\"><img"+(_vm._ssrAttr("src",__webpack_require__(88)))+" alt=\"Item image\"> <div class=\"order__item__description\"><h3>POLO рубашка</h3> <p class=\"p-first\">\n                            Рубашка с контрастным дизайном\n                        </p> <p class=\"p-second\"><span>Размер:</span>XXL - 44</p></div></div> <div class=\"order__item--secondary\"><div class=\"order__item--number\"><span>Количество:</span> <span class=\"number\"> 1 шт</span></div> <div class=\"order__item--price\"><span>100 000 cум </span></div> <div class=\"order__item--color\"><span>Цвет:</span> <img"+(_vm._ssrAttr("src",__webpack_require__(88)))+" alt=\"Color image\"></div></div></div> <div class=\"order__item__box\"><div class=\"order__item--header\"><img"+(_vm._ssrAttr("src",__webpack_require__(88)))+" alt=\"Item image\"> <div class=\"order__item__description\"><h3>POLO рубашка</h3> <p class=\"p-first\">\n                            Рубашка с контрастным дизайном\n                        </p> <p class=\"p-second\"><span>Размер:</span>XXL - 44</p></div></div> <div class=\"order__item--secondary\"><div class=\"order__item--number\"><span>Количество:</span> <span class=\"number\"> 1 шт</span></div> <div class=\"order__item--price\"><span>200 000 cум </span></div> <div class=\"order__item--color\"><span>Цвет:</span> <img"+(_vm._ssrAttr("src",__webpack_require__(88)))+" alt=\"Color image\"></div></div></div> <div class=\"order__item__box\"><div class=\"order__item--header\"><img"+(_vm._ssrAttr("src",__webpack_require__(88)))+" alt=\"Item image\"> <div class=\"order__item__description\"><h3>POLO рубашка</h3> <p class=\"p-first\">\n                            Рубашка с контрастным дизайном\n                        </p> <p class=\"p-second\"><span>Размер:</span>XXL - 44</p></div></div> <div class=\"order__item--secondary\"><div class=\"order__item--number\"><span>Количество:</span> <span class=\"number\"> 1 шт</span></div> <div class=\"order__item--price\"><span>150 000 cум </span></div> <div class=\"order__item--color\"><span>Цвет:</span> <img"+(_vm._ssrAttr("src",__webpack_require__(88)))+" alt=\"Color image\"></div></div></div> <div class=\"order__price\"><div class=\"order__price--total\"><span>Общая сумма:</span> <span class=\"all__price\">450 000 cум</span></div></div></section> <section class=\"order__section container\"><h2 class=\"header\">Заказ №45</h2> <div class=\"order__item__box\"><div class=\"order__item--header\"><img"+(_vm._ssrAttr("src",__webpack_require__(88)))+" alt=\"Item image\"> <div class=\"order__item__description\"><h3>POLO рубашка</h3> <p class=\"p-first\">\n                            Рубашка с контрастным дизайном\n                        </p> <p class=\"p-second\"><span>Размер:</span>XXL - 44</p></div></div> <div class=\"order__item--secondary\"><div class=\"order__item--number\"><span>Количество:</span> <span class=\"number\"> 1 шт</span></div> <div class=\"order__item--price\"><span>100 000 cум </span></div> <div class=\"order__item--color\"><span>Цвет:</span> <img"+(_vm._ssrAttr("src",__webpack_require__(88)))+" alt=\"Color image\"></div></div></div> <div class=\"order__item__box\"><div class=\"order__item--header\"><img"+(_vm._ssrAttr("src",__webpack_require__(88)))+" alt=\"Item image\"> <div class=\"order__item__description\"><h3>POLO рубашка</h3> <p class=\"p-first\">\n                            Рубашка с контрастным дизайном\n                        </p> <p class=\"p-second\"><span>Размер:</span>XXL - 44</p></div></div> <div class=\"order__item--secondary\"><div class=\"order__item--number\"><span>Количество:</span> <span class=\"number\"> 1 шт</span></div> <div class=\"order__item--price\"><span>200 000 cум </span></div> <div class=\"order__item--color\"><span>Цвет:</span> <img"+(_vm._ssrAttr("src",__webpack_require__(88)))+" alt=\"Color image\"></div></div></div> <div class=\"order__item__box\"><div class=\"order__item--header\"><img"+(_vm._ssrAttr("src",__webpack_require__(88)))+" alt=\"Item image\"> <div class=\"order__item__description\"><h3>POLO рубашка</h3> <p class=\"p-first\">\n                            Рубашка с контрастным дизайном\n                        </p> <p class=\"p-second\"><span>Размер:</span>XXL - 44</p></div></div> <div class=\"order__item--secondary\"><div class=\"order__item--number\"><span>Количество:</span> <span class=\"number\"> 1 шт</span></div> <div class=\"order__item--price\"><span>150 000 cум </span></div> <div class=\"order__item--color\"><span>Цвет:</span> <img"+(_vm._ssrAttr("src",__webpack_require__(88)))+" alt=\"Color image\"></div></div></div> <div class=\"order__price\"><div class=\"order__price--total\"><span>Общая сумма:</span> <span class=\"all__price\">450 000 cум</span></div></div></section></main>")],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/myorders.vue?vue&type=template&id=4bd66a89&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/myorders.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var myordersvue_type_script_lang_js_ = ({head:{title:"Мои закази — Tujjor. Низкие цены и широкий ассортимент!",meta:[{hid:"description",name:"description",content:"Мои закази - Tujjor"}]}});
// CONCATENATED MODULE: ./pages/myorders.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_myordersvue_type_script_lang_js_ = (myordersvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/myorders.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(213)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_myordersvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "29989f5f"
  
)

/* harmony default export */ var myorders = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 88:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/bg.d007fe2.png";

/***/ })

};;
//# sourceMappingURL=myorders.js.map