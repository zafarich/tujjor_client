exports.ids = [33,20];
exports.modules = {

/***/ 164:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(205);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("47f6d794", content, true, context)
};

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(164);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 205:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "@media(max-width:543px){.popular__container .img-fluid{height:170px!important;-o-object-fit:cover!important;object-fit:cover!important}.other__item__banner--carousel .b-carousel .carousel-inner .b-carousel-slide img{min-height:250px!important}}.other__item__banner--carousel .b-carousel .carousel-inner .b-carousel-slide img{min-height:450px}.success-info{position:fixed;top:10px;right:20px;width:320px;z-index:12345}div.card-row{display:flex;margin:0 -10px;flex-wrap:wrap}.hover-shadow:hover{box-shadow:0 1px 10px rgba(0,0,0,.18)}div.card-5{width:20%;padding:0 10px}div.card-4{width:25%;padding:0 10px}div.card-3{width:33.3333333333%;padding:0 10px}@media(max-width:1020px){div.card-4,div.card-5{width:33.3333333333%}}@media(max-width:768px){div.card-3,div.card-4,div.card-5{width:50%}.catalog__container{padding-top:5px!important}.filtr__section .catalog__page__filtr__box{position:relative!important;top:unset!important}.catalog__container .catalog__filtraiton__box .filtraiton__form__box .filtraiton__form--submit{margin-bottom:0!important}.catalog__container .catalog__page__about{padding-left:0!important}}@-webkit-keyframes move__360{0%{transform:translateX(0deg)}to{transform:translateX(1turn)}}@keyframes move__360{0%{transform:translateX(0deg)}to{transform:translateX(1turn)}}h6.error-text{font-size:12px;color:red;margin-bottom:0}h1.title-form{font-size:24px;text-align:center}.popular__container{margin-top:40px}.popular__container .popular__heading{font-family:Roboto,sans-serif;font-weight:500;font-size:48px;color:#f7931e;margin-bottom:40px;text-shadow:0 0 3px rgba(247,147,30,.3);display:inline-block}.popular__container .popular__item-box{display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap}.popular__container .popular__item-box:after{content:\"\";flex:0 1 32%}.popular__container .popular__item-box .popular__items{flex:0 0 auto;width:222px;height:370px;background-color:#fff;box-shadow:0 1px 3px rgba(0,0,0,.12);border-radius:5px;overflow:hidden;margin:0 2px 37px;cursor:pointer;transition:all .2s}.popular__container .popular__item-box .popular__items:hover{transform:scale(1.07)}.popular__container .popular__item-box .popular__items:hover:after{opacity:0}.popular__container .popular__item-box .popular__items:active{outline:none;transform:scale(1.03)}.popular__container .popular__item-box .popular__items .popular__items__img{width:222px;height:222px}.popular__container .popular__item-box .popular__items .popular__items__desription{padding-left:16px;display:flex;flex-direction:column;justify-content:flex-start;position:relative}.popular__container .popular__item-box .popular__items .popular__items__desription .name__rating{margin-top:2px;display:flex;justify-content:space-between;align-items:center;padding-right:10px}.popular__container .popular__item-box .popular__items .popular__items__desription .name__rating .magazine__item--rating{display:flex;align-items:center}.popular__container .popular__item-box .popular__items .popular__items__desription .name__rating .magazine__item--rating img{width:12px;height:12px;margin-right:2px}.popular__container .popular__item-box .popular__items .popular__items__desription .name__rating .magazine__item--rating span{color:#666;opacity:.7;font-size:10px}.popular__container .popular__item-box .popular__items .popular__items__desription--name{margin-top:5px;font-family:Roboto;font-weight:500;font-size:14px;line-height:16px;opacity:.7;color:#666}.popular__container .popular__item-box .popular__items .popular__items__desription--categorie{margin:9px 0;font-family:Roboto;font-weight:700;font-size:16px;line-height:100%;color:#000;height:60px}.popular__container .popular__item-box .popular__items .popular__items__desription--price{font-family:Roboto;font-weight:700;font-size:20px;line-height:100%;color:#219ebc}.popular__container .popular__item-box .popular__items .popular__items__desription--old--price{margin-bottom:2px;font-size:14px;color:#f7931e;text-decoration:line-through}.popular__container .popular__btn,.popular__container .popular__btn:link,.popular__container .popular__btn:visited{display:block;border-radius:5px;transition:all .2s;width:224px;height:50px;margin:20px auto 0;text-align:center;padding:10px;text-decoration:none;font-family:inherit;font-weight:500;font-size:18px;color:hsla(0,0%,100%,.9);background-color:#f7931e;border:none;cursor:pointer}.popular__container .popular__btn:hover{transform:scale(1.07)}.popular__container .popular__btn:hover:after{opacity:0}.popular__container .popular__btn:active{outline:none;transform:scale(1.03)}.popular__container .popular__btn:active,.popular__container .popular__btn:hover{background-color:#fff;color:#f7931e;border:1px solid #f7931e}.popular__container .popular__dropdown__box{position:relative}.popular__container .popular__dropdown__box .popular__dropdown--btn{width:170px;height:36px;border:1px solid #f7931e;border-radius:5px;background-color:transparent;padding:0 10px;font-family:Roboto;font-weight:500;font-size:16px;color:#f7931e;display:flex;justify-content:space-between;align-items:center}.popular__container .popular__dropdown__box .popular__dropdown--btn:hover+.popular__dropdown__content{visibility:visible;opacity:1}.popular__container .popular__dropdown__box .popular__dropdown__content{position:absolute;left:0;top:36px;width:170px;display:flex;flex-direction:column;justify-content:center;transition:all .2s;visibility:hidden;opacity:0;border-radius:5px;overflow:hidden;box-shadow:0 2px 6px rgba(0,0,0,.3)}.popular__container .popular__dropdown__box .popular__dropdown__content .popular__dropdown--link{color:#f7931e;background-color:#fcf6f6;padding:5px;text-decoration:none}.popular__container .popular__dropdown__box .popular__dropdown__content .popular__dropdown--link:active,.popular__container .popular__dropdown__box .popular__dropdown__content .popular__dropdown--link:hover{font-weight:500}.popular__container .popular__dropdown__box .popular__dropdown__content:active,.popular__container .popular__dropdown__box .popular__dropdown__content:hover{visibility:visible;opacity:1}@media only screen and (max-width:1440px)and (min-width:1200px){.popular__container .popular__item-box{padding:0 4px}}@media only screen and (max-width:1200px)and (min-width:765px){.popular__container{padding:20px}.popular__container .popular__item-box .popular__items{width:229px;height:381.67px;margin-bottom:22px}.popular__container .popular__item-box .popular__items .popular__items__img{width:230px;height:230px}}@media only screen and (max-width:765px){.popular__container{padding:16px}.popular__container .popular__heading{font-size:24px;margin-bottom:28px}.popular__container .popular__item-box .popular__items{width:164px;height:273px;margin-bottom:14px}.popular__container .popular__item-box .popular__items .popular__items__img{width:164px;height:164px}.popular__container .popular__item-box .popular__items .popular__items__desription{padding-left:12px}.popular__container .popular__item-box .popular__items .popular__items__desription--name{margin-top:3.7px;font-size:10px}.popular__container .popular__item-box .popular__items .popular__items__desription--categorie{margin:6.6px 0 0;font-size:12px;height:50px;padding:0}.popular__container .popular__item-box .popular__items .popular__items__desription--price{font-size:14px}.popular__container .popular__item-box .popular__items .popular__items__desription--old--price{font-size:10px}.popular__container .popular__btn,.popular__container .popular__btn:link,.popular__container .popular__btn:visited{width:160px;height:35px;margin-top:18px;padding:8px;font-size:12px}}@media only screen and (max-width:365px){.popular__container{padding:14px}.popular__container .popular__heading{font-size:22px;margin-bottom:12px}.popular__container .popular__item-box .popular__items{width:140px;height:245px}.popular__container .popular__item-box .popular__items .popular__items__img{width:140px;height:140px}.popular__container .popular__item-box .popular__items .popular__items__desription--categorie{margin-top:3.6px;font-size:12px;height:2.8em;padding:0}.popular__container .popular__item-box .popular__items .popular__items__desription--price{font-size:12px}.popular__container .popular__item-box .popular__items .popular__items__desription--old--price{font-size:9px;bottom:17px}}div.title-box{padding:40px 0}div.title-box ul li,div.title-box ul li a{display:inline-block;font-weight:400;font-size:15px;line-height:18px;color:#000}div.title-box ul li a:hover{color:#f7931e}div.fixvh-category{z-index:100;width:100%;background-color:#333;opacity:.5}div.category-modal,div.fixvh-category{position:fixed;top:0;left:0;height:100vh;z-index:1000}div.category-modal{width:90%;transform:translateX(0);opacity:1;transition:.2s}div.category-modal div.category-nav{width:100%;height:100%;background-color:#fff;position:relative;z-index:101;display:flex;padding:15px 0}div.category-modal div.category-nav button.close-btn{position:absolute;width:30px;height:30px;border-radius:100%;background-color:#f7931e;border:none;right:-41px;top:8px;z-index:101}div.category-modal div.category-nav button.close-btn .icon-times{color:#fff}div.category-modal div.category-nav div.scroll-modal{overflow-y:scroll;overflow-x:hidden}div.category-modal div.category-nav div.category-left{width:400px;padding:0 15px;border-right:1px solid #bbb}div.category-modal div.category-nav div.category-left ul{list-style-type:none;padding-right:15px}div.category-modal div.category-nav div.category-left li button{display:block;padding:8px 15px;border-radius:5px;font-size:16px;color:#333;font-weight:500;border:none;background-color:transparent;width:100%;text-align:left}div.category-modal div.category-nav div.category-left li button:hover{color:#f7931e}div.category-modal div.category-nav div.category-left li.active-li button{background-color:#f7931e;color:#fff}div.category-modal div.category-nav div.category-content{width:calc(100% - 400px);padding:0 30px;position:relative}div.category-modal div.category-nav div.category-content h3.category-title{font-size:24px;font-weight:500;margin-bottom:25px}div.category-modal div.category-nav div.category-content div.visible-all a{font-size:16px;color:#888;margin-bottom:5px;display:block}div.category-modal div.category-nav div.category-content a{transition:.2s}div.category-modal div.category-nav div.category-content ul{list-style-type:none;margin-bottom:25px}div.category-modal div.category-nav div.category-content ul a{font-size:16px;color:#888;margin-bottom:5px;display:block}div.category-modal div.category-nav div.category-content a.click-parent{font-size:18px;margin-bottom:10px;color:#333;display:block;font-weight:500}div.category-modal div.category-nav div.category-content a:hover{color:#f7931e!important}div.category-modal div.category-nav div.scroll-modal::-webkit-scrollbar{width:5px}div.category-modal div.category-nav div.scroll-modal::-webkit-scrollbar-track{background:#f1f1f1}div.category-modal div.category-nav div.scroll-modal::-webkit-scrollbar-thumb{background:#f7931e;border-radius:5px}div.category-modal div.category-nav div.scroll-modal::-webkit-scrollbar-thumb:hover{background:#f7931e}div.hidden-category{transform:translateX(-104%);opacity:0}div.category-mobile{position:fixed;z-index:1234454545;top:0;left:0;width:100%;height:100vh;background-color:#fff;padding:15px}div.category-mobile a.visible-all-mobile{font-size:16px;color:#333}div.category-mobile div.title-t{display:flex;justify-content:space-between;align-items:center}div.category-mobile div.title-t h3{font-size:24px;margin-bottom:0}div.category-mobile div.title-t button{border:none;background-color:transparent}div.category-mobile div.title-t button .close-mobile{font-size:26px;color:#f7931e}div.category-mobile div.category-acc{margin-top:20px;max-height:calc(100vh - 100px);overflow-y:scroll}div.category-mobile div.category-acc div.acc-item{margin-bottom:5px}div.category-mobile div.category-acc div.acc-item button{width:100%;display:flex;justify-content:space-between;align-items:center;background:#fff7ec;padding:10px 15px;border-radius:5px;border:1px solid #fff7ec}div.category-mobile div.category-acc div.acc-item button b{font-size:18px}div.category-mobile div.category-acc div.acc-item button .icon-down{font-size:18px;color:#f7931e}div.category-mobile div.category-acc div.acc-item button .rotate{transform:rotate(-180deg)}div.category-mobile div.category-acc div.acc-item div.acc-content{padding:15px}div.category-mobile div.category-acc div.acc-item div.acc-content ul{list-style-type:none}div.category-mobile div.category-acc div.acc-item div.acc-content ul li a{color:#333;display:block;font-size:16px!important;font-weight:700;margin-bottom:5px}div.category-mobile div.category-acc div.acc-item div.acc-content ul li a:active{color:#f7931e}div.category-mobile div.category-acc div.acc-item div.acc-content ul li ul{margin-bottom:15px}div.category-mobile div.category-acc div.acc-item div.acc-content ul li ul li a{font-weight:400;color:#777}@media(max-width:800px){div.category-modal div.category-nav div.category-left{width:280px}div.category-modal div.category-nav div.category-content{width:calc(100% - 280px)}}ul.text-ul{padding-left:40px}ul.text-ul li{font-size:16px}.pdf-bottom,.pdf-bottom div.bottom-flex{display:flex}.pdf-bottom div.bottom-flex .pdf-text-bold{margin-right:10px}.pdf-bottom div.bottom-left{width:50%;padding-right:10px}.pdf-bottom div.bottom-right{width:50%;padding-left:10px}.pdf-flex{display:flex;justify-content:space-between}.pdf-text{font-size:16px}.pdf-text-bold{font-size:16px;font-weight:700}.pdf-small{font-size:14px;font-weight:700}.title-pdf{font-size:17px;color:#000;text-align:center;font-weight:700;margin:10px}.content-wrapper div.item-page{height:1120px;padding:50px 80px}.content-wrapper b,.content-wrapper h1,.content-wrapper h2,.content-wrapper h3,.content-wrapper li,.content-wrapper p{font-family:\"Times New Roman\",Times,serif!important}.login-page{width:100%;height:auto;margin:100px 0}.login-page .logo-tujjor{margin-bottom:40px}.login-page .login-page-box{background-color:#fff;border-radius:5px;box-shadow:0 0 5px rgba(0,0,0,.3);padding:15px 20px 20px}.login-page .login-page-box .input__box{margin:5px 0}.login-page .login-page-box .input__box label{font-family:Roboto,sans-serif;font-size:14px;line-height:24px;margin:0;padding:4px 0}.login-page .login-page-box .input__box input,.login-page .login-page-box .input__box textarea{border:.98px solid #f7931e;box-sizing:border-box;border-radius:5px;min-height:50px;font-size:18px;line-height:1.3}.login-page .login-page-box .input__box .input__file,.login-page .login-page-box .input__box .input__file__label{padding:4px 0;display:inline-block;border:none;margin-right:10px;font-size:14px;line-height:1;min-height:20px}.login-page .login-page-box .input__box .input__file__label{font-size:16px}.login-page .login-page-box .input__box textarea{padding-top:10px}.login-page .login-page-box .input__box .form-control:focus{color:#495057;background-color:#fff;border-color:#f7931e;outline:0;box-shadow:0 0 0 .2rem rgba(247,147,30,.25)}.login-page .login-page-box .button__send{position:relative;flex-grow:1;height:50px;background-color:#f7931e;color:#fff;border-radius:5px;border:none;text-align:center;padding:15px;font-family:Roboto,sans-serif;font-weight:500;font-size:16px;line-height:24px;margin:5px 0;cursor:pointer}.login-page .login-page-box .button__send .loading__spinner{position:absolute;left:30%;top:22%;padding:0 10px}.login-page .login-page-box .button__openModal{background-color:#023047}.login-page .login-page-box .button__openModal:hover{background-color:rgba(2,48,71,.8)!important}.login-page .login-page-box .button__send:hover{background-color:rgba(247,147,30,.8)}.login-page .login-page-box .hot__link__box{margin:5px 0 7px}.login-page .login-page-box .hot__link__box .hot__links{font-family:Roboto,sans-serif;font-size:14px;line-height:16px;text-align:center;-webkit-text-decoration-line:underline;text-decoration-line:underline;cursor:pointer}.login-page .login-page-box .hot__link__box .hot__links:hover{opacity:.9;color:#023047}.login-page .login-page-box .hot__link__box .remember__password{color:#023047}#modal-danger___BV_modal_body_ div>h3,#modal-info___BV_modal_body_ div>h3{font-size:20px}#modal-danger___BV_modal_body_ button,#modal-info___BV_modal_body_ button{font-size:12px}#modal-danger___BV_modal_body_ button:first-of-type,#modal-info___BV_modal_body_ button:first-of-type{margin-top:20px}#modal-danger___BV_modal_body_ .input__box,#modal-info___BV_modal_body_ .input__box{flex-grow:0;height:auto}#modal-danger___BV_modal_body_ .input__box:not(:first-of-type),#modal-info___BV_modal_body_ .input__box:not(:first-of-type){margin-top:10px}#modal-danger___BV_modal_body_ .input__box label,#modal-info___BV_modal_body_ .input__box label{font-family:Roboto,sans-serif;font-size:14px;line-height:24px;margin:0;padding:4px 0}#modal-danger___BV_modal_body_ .input__box input,#modal-danger___BV_modal_body_ .input__box textarea,#modal-info___BV_modal_body_ .input__box input,#modal-info___BV_modal_body_ .input__box textarea{border:.98px solid #f7931e;box-sizing:border-box;border-radius:5px;font-size:18px;line-height:1.3;cursor:pointer}#modal-danger___BV_modal_body_ .input__box .input__file,#modal-danger___BV_modal_body_ .input__box .input__file__label,#modal-info___BV_modal_body_ .input__box .input__file,#modal-info___BV_modal_body_ .input__box .input__file__label{padding:4px 0;display:inline-block;border:none;font-size:14px;line-height:1;margin:5px 5px 5px 0}#modal-danger___BV_modal_body_ .input__box .input__file__label,#modal-info___BV_modal_body_ .input__box .input__file__label{font-size:16px}#modal-danger___BV_modal_body_ .input__box textarea,#modal-info___BV_modal_body_ .input__box textarea{padding-top:10px}#modal-danger___BV_modal_body_ .input__box .form-control:focus,#modal-info___BV_modal_body_ .input__box .form-control:focus{color:#495057;background-color:#fff;border-color:#f7931e;outline:0;box-shadow:0 0 0 .2rem rgba(247,147,30,.25)}#modal-danger___BV_modal_body_ div>a,#modal-info___BV_modal_body_ div>a{cursor:pointer}#modal-info___BV_modal_body_ button{display:block!important;margin-left:auto;margin-right:auto}.shop__log__box{height:50vh;display:flex;justify-content:center;align-items:center}.shop__log__box p{font-size:54px;font-weight:600;color:#f7931e;text-align:center}@media only screen and (max-width:576px){.login-page .login-page-box{border-radius:0}.shop__log__box p{font-size:24px}}@media only screen and (max-width:440px){#modal-danger___BV_modal_body_ div>h3,#modal-info___BV_modal_body_ div>h3{font-size:18px}#modal-danger___BV_modal_body_ button,#modal-info___BV_modal_body_ button{display:inline-block;width:45%;font-size:10px;margin-top:15px!important}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 262:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/business/index.vue?vue&type=template&id=a9578a02&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',[(!_vm.isGet)?_c('base-loading'):_vm._e(),_vm._ssrNode(" "),(!_vm.showSectionTwo)?_vm._ssrNode("<div class=\"login-page d-flex flex-column justify-content-center align-items-center\">","</div>",[_vm._ssrNode("<div class=\"logo-tujjor\">","</div>",[_c('nuxt-link',{attrs:{"to":"/"}},[_c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","width":"141","height":"61","viewBox":"0 0 141 61","fill":"none"}},[_c('path',{attrs:{"d":"M22.8819 16.7093C23.0097 16.5853 23.1337 16.4612 23.2615 16.3372C23.4494 16.0742 23.7463 15.9802 24.0093 15.8299L23.9943 15.8412C24.3926 15.4353 24.9563 15.4579 25.4449 15.285L25.4298 15.2963C26.2679 14.9768 27.1021 14.9881 27.9402 15.2888L27.9289 15.2812C28.4099 15.4691 28.9774 15.4316 29.3795 15.8299L29.3719 15.8224C30.6421 16.4349 31.1419 17.4158 31.1231 18.8513C31.063 23.5488 31.1231 28.2462 31.0856 32.9474C31.0743 34.2326 31.2246 35.4389 31.8973 36.5513L31.8898 36.54C32.1115 36.8782 32.5061 37.0887 32.6113 37.5133C32.7278 37.7238 32.8856 37.8966 33.1111 37.9944C33.4381 38.0808 33.6372 38.3476 33.8928 38.5393L33.8815 38.528C35.8695 39.5727 37.8273 39.5351 39.7514 38.3551C39.9055 38.2161 40.0596 38.0808 40.2137 37.9417C40.4993 37.5735 40.8525 37.2615 41.1456 36.9008L41.1344 36.9158C41.326 36.6152 41.4237 36.2582 41.6868 35.9989L41.6755 36.0101C42.1753 34.8602 42.2129 33.6501 42.2091 32.4138C42.1866 27.7802 42.1979 23.1467 42.2016 18.5131C42.2016 17.9494 42.164 17.3707 42.5699 16.8934L42.5661 16.8972C42.8555 16.3748 43.3252 16.0704 43.8476 15.8224L43.8326 15.8337C44.2535 15.4391 44.8134 15.424 45.3282 15.2812C45.3658 15.3188 45.4034 15.3188 45.441 15.2775C46.2828 14.9731 47.1245 14.9768 47.9626 15.2888L47.9475 15.2775C48.4323 15.4654 49.0186 15.3977 49.3906 15.86C49.7889 16.2095 50.1835 16.5552 50.5819 16.9047C50.9727 17.194 50.9389 17.6225 50.9389 18.0321C50.9426 23.3872 50.9915 28.746 50.9201 34.1011C50.8825 36.8294 49.9242 39.2833 48.1354 41.3803L48.143 41.3728C47.8761 41.6659 47.7747 42.1056 47.3575 42.2634C46.9968 42.6016 46.5984 42.906 46.3504 43.3494C46.14 43.5787 45.8731 43.7328 45.6101 43.8981L45.6176 43.8906C45.4748 44.2025 45.1291 44.2551 44.8886 44.4355L44.8961 44.428C44.0468 45.0067 43.1824 45.5629 42.1903 45.8823L42.1979 45.8785C41.093 46.4949 39.8604 46.7542 38.6428 46.9383C36.7714 47.2239 34.8999 47.0172 33.0585 46.5963C32.9119 46.5625 32.7729 46.5136 32.6602 46.4084L32.6714 46.4159C31.7244 46.1604 30.7812 45.8973 29.9657 45.3224L29.9732 45.3299C28.9097 44.815 27.9289 44.1762 27.0796 43.3457L27.0871 43.3532C26.4558 42.8947 25.8958 42.3724 25.4674 41.7147L25.4787 41.7222C25.2119 41.5531 25.1104 41.2525 24.9037 41.0345C24.7797 40.8504 24.6595 40.6663 24.5354 40.4821C24.0619 39.8808 23.7463 39.1969 23.4644 38.4942L23.4682 38.4979C22.6715 37.0774 22.3972 35.5216 22.3896 33.9282C22.3671 28.7385 22.3784 23.5488 22.3821 18.359C22.3633 17.7615 22.3821 17.1602 22.8819 16.7093Z","fill":"#F7931F"}}),_vm._v(" "),_c('path',{attrs:{"d":"M77.0829 58.122C76.9176 58.2836 76.756 58.4452 76.5906 58.603C76.29 59.0803 75.7977 59.3095 75.3317 59.5688L75.3392 59.5575C75.0536 59.8957 74.6252 59.9483 74.2532 60.1099L74.2607 60.0987C71.927 60.963 69.5933 61.3876 67.2634 60.0874L67.2822 60.0987C67.0078 60.0085 66.835 59.8168 66.726 59.5575L66.7373 59.5726C66.478 59.3133 66.2675 59.0239 66.1849 58.6594L66.1961 58.6669C65.2754 56.7015 66.2976 54.1122 68.1615 53.6538L68.154 53.6613C68.5749 53.2892 69.0935 53.3832 69.5858 53.3794C69.924 53.3757 70.2021 53.2028 70.5103 53.1201L70.5065 53.1314C70.6606 52.9172 70.9049 52.7894 71.0514 52.5677L71.0439 52.579C71.4385 51.4441 71.664 50.2791 71.664 49.0728C71.6602 38.8361 71.664 28.6032 71.6602 18.3665C71.6602 17.8554 71.6264 17.3406 71.927 16.8859C72.0473 16.7093 72.1675 16.5326 72.2878 16.3523C72.9191 15.7585 73.6707 15.4203 74.52 15.2812C74.5538 15.3226 74.5914 15.3226 74.6252 15.2812C75.5271 14.9768 76.4291 14.9731 77.331 15.285L77.3197 15.2737C77.8759 15.424 78.4922 15.3977 78.9469 15.8337L78.9319 15.8224C79.1874 15.9877 79.5181 16.0516 79.6684 16.3598L79.6609 16.3523C80.1457 16.7356 80.311 17.2429 80.311 17.8479C80.3073 28.6145 80.3223 39.381 80.2922 50.1476C80.2885 51.8575 79.8488 53.511 79.1122 55.0705L79.1235 55.0592C78.9657 55.435 78.9056 55.8597 78.5749 56.1491L78.5824 56.1415C78.3757 56.4347 78.293 56.7992 78.0224 57.051L78.0337 57.0359C77.7406 57.4155 77.5752 57.9153 77.0829 58.122Z","fill":"#F7931F"}}),_vm._v(" "),_c('path',{attrs:{"d":"M64.885 52.9247C64.8474 52.9585 64.8436 52.9924 64.8812 53.0299C64.6708 53.5824 64.7008 54.2137 64.3326 54.7135L64.3438 54.6985C64.0056 55.6267 63.6749 56.5624 62.8895 57.2313C62.4724 57.6936 62.0552 58.1558 61.6381 58.6218C61.33 59.0878 60.894 59.3771 60.383 59.5763L60.3905 59.5688C60.0936 59.8845 59.6689 59.9408 59.3007 60.1137L59.3082 60.1062C57.324 60.9329 55.3059 61.1208 53.2052 60.5384C51.4728 60.0573 50.74 57.9717 50.9655 56.6113C51.1384 55.5591 51.4841 54.5857 52.4912 54.0145L52.4762 54.0258C52.6641 53.7891 52.9572 53.7628 53.209 53.6538L53.1977 53.665C53.4871 53.4133 53.8629 53.3644 54.2011 53.387C55.1744 53.4546 55.8659 53.0863 56.2905 52.2145L56.2755 52.2295C56.5386 51.5944 56.5912 50.9217 56.6137 50.2453C56.625 49.9259 56.5724 49.5914 56.8091 49.3171C56.8242 49.0803 56.858 48.8398 56.858 48.6031C56.8617 38.4754 56.8617 28.3439 56.858 18.2162C56.858 17.9795 56.8317 17.7389 56.8166 17.5022C57.0045 16.698 57.4442 16.1042 58.2372 15.8111C58.6129 15.3339 59.2067 15.4503 59.699 15.285L59.6802 15.2925C60.5784 14.9956 61.4728 14.9543 62.3709 15.2925L62.3596 15.2812C62.9158 15.4316 63.5284 15.4128 63.9906 15.8337L63.9756 15.8224C65.0466 16.3147 65.4675 17.1038 65.4637 18.3177C65.4337 28.5656 65.4149 38.8173 65.46 49.0653C65.4675 50.3843 65.2833 51.6696 64.885 52.9247Z","fill":"#F7931F"}}),_vm._v(" "),_c('path',{attrs:{"d":"M127.47 19.4187C127.522 19.3511 127.575 19.2835 127.627 19.2158C127.789 19.0693 127.8 18.81 128.014 18.7047L128.003 18.7123C128.311 18.2387 128.702 17.8366 129.085 17.427C129.138 17.3744 129.191 17.318 129.247 17.2654C129.495 17.0851 129.717 16.8709 129.984 16.713L129.98 16.7168C130.326 16.2996 130.803 16.0742 131.265 15.8261L131.25 15.8374C131.551 15.5255 131.953 15.4203 132.344 15.2812L132.329 15.2925C133.024 14.9393 133.742 14.6875 134.546 14.7138C135.324 14.7401 136.105 14.7514 136.883 14.71C137.552 14.6762 138.12 14.8603 138.616 15.2888L138.601 15.2775C139.258 15.6345 139.608 16.2358 139.875 16.8972L139.867 16.8859C140.472 18.2688 140.491 19.5991 139.484 20.8242C139.333 20.8731 139.315 20.9933 139.326 21.1286C139.247 21.4405 139.048 21.6322 138.743 21.7186C138.646 21.7938 138.548 21.8727 138.45 21.9479C138.293 22.256 137.943 22.1245 137.71 22.2673L137.718 22.2598C137.394 22.5717 136.988 22.4514 136.616 22.4552C135.35 22.4777 134.072 22.3575 132.843 22.8084L132.851 22.8009C132.682 23.0752 132.362 23.0414 132.118 23.1654L132.129 23.1542C131.874 23.4097 131.573 23.5938 131.239 23.7216C131.085 23.9358 130.942 24.1613 130.664 24.2365L130.671 24.2252C130.506 24.4469 130.288 24.616 130.078 24.7851C129.92 24.9655 129.766 25.1421 129.608 25.3225C129.503 25.6758 129.311 25.9801 129.044 26.2319L129.055 26.2169C127.725 28.6408 127.518 31.2826 127.537 33.9771C127.556 37.115 127.518 40.2566 127.556 43.3945C127.567 44.2701 127.278 44.894 126.538 45.3299L126.545 45.3224C126.357 45.6944 125.955 45.7132 125.636 45.8673L125.643 45.8598C124.024 46.5738 122.404 46.5512 120.784 45.871C120.668 45.8147 120.551 45.7545 120.435 45.6982C120.183 45.5253 119.935 45.3449 119.721 45.1194L119.739 45.1307C119.39 45.0142 119.36 44.6572 119.183 44.4092L119.195 44.4167C118.879 44.0747 118.898 43.6538 118.898 43.2329C118.898 34.8452 118.898 26.4574 118.898 18.0659C118.898 17.6412 118.901 17.2241 119.21 16.8821L119.195 16.9009C119.785 15.8524 120.754 15.4165 121.889 15.2587L121.878 15.2662C122.72 15.0107 123.558 14.8641 124.377 15.3376C124.583 15.4879 124.82 15.4541 125.053 15.4466C125.32 15.548 125.639 15.533 125.827 15.8036L125.82 15.7961C126.053 15.9915 126.421 16.014 126.534 16.3598L126.523 16.341C127.304 17.0099 127.034 17.9231 127.113 18.7649C127.124 19.0166 126.801 19.539 127.47 19.4187Z","fill":"#F7931F"}}),_vm._v(" "),_c('path',{attrs:{"d":"M72.1116 6.62665C72.059 6.56653 72.0027 6.50264 71.9501 6.44251C70.8941 4.73264 70.9467 3.28207 72.1229 1.75634C72.2995 1.57971 72.4762 1.40309 72.6528 1.22646C74.3326 -0.179013 76.2041 -0.27672 78.1883 0.429777C78.3574 0.489904 78.5302 0.55379 78.5753 0.756719C78.9173 1.03481 79.2593 1.3129 79.6013 1.59474C80.21 2.04194 80.4092 2.7071 80.5708 3.39481L80.5633 3.38353C80.8113 3.92092 80.8752 4.46207 80.5708 5.00321C80.5295 5.03704 80.5295 5.07086 80.5633 5.1122C80.3002 6.11181 79.8606 6.98366 78.906 7.50602C78.8572 7.54359 78.8083 7.57742 78.7632 7.615C78.6279 7.93442 78.2935 7.92315 78.0417 8.05092L78.0492 8.0434C76.6738 8.74614 75.2984 8.7499 73.9267 8.03589L73.9418 8.04716C73.5735 7.98328 73.3067 7.73149 73.0173 7.52856C72.8858 7.40831 72.758 7.28805 72.6265 7.1678C72.4236 7.01372 72.2507 6.83334 72.1116 6.62665Z","fill":"#F7931F"}}),_vm._v(" "),_c('path',{attrs:{"d":"M57.1512 6.60786C57.0347 6.43124 56.922 6.25837 56.8055 6.08175C55.7946 4.16894 56.3057 2.28621 58.1283 0.892002C59.5751 -0.216596 62.0403 -0.295513 63.63 0.689073L63.6224 0.681557C63.8066 0.813085 64.0734 0.835633 64.1598 1.09117C64.3853 1.31665 64.6145 1.54589 64.84 1.77137C66.0877 3.04531 66.1102 5.19862 64.8926 6.60786L64.8964 6.6041C64.5995 7.03251 64.2651 7.42334 63.7916 7.67512L63.8066 7.66385C63.63 7.90811 63.3256 7.91939 63.0851 8.04716L63.0926 8.0434C61.4654 8.83257 59.9058 8.71608 58.4139 7.69015L58.4177 7.69391C58.196 7.48722 57.8352 7.45716 57.7037 7.13397L57.7112 7.14149C57.4556 7.04002 57.2865 6.84085 57.1512 6.60786Z","fill":"#F7931F"}}),_vm._v(" "),_c('path',{attrs:{"d":"M89.7773 43.0225C90.2358 43.1991 90.574 43.5261 90.8709 43.9056C90.3185 43.8417 89.9765 43.5185 89.7773 43.0225Z","fill":"#F7931F"}}),_vm._v(" "),_c('path',{attrs:{"d":"M90.8633 43.9019C91.1564 44.0146 91.4157 44.1762 91.5961 44.4393C91.2504 44.4017 90.9121 44.3491 90.8633 43.9019Z","fill":"#F7931F"}}),_vm._v(" "),_c('path',{attrs:{"d":"M91.5928 44.4317C91.8333 44.4656 92.0174 44.5896 92.1452 44.7963C91.8633 44.8188 91.5928 44.8301 91.5928 44.4317Z","fill":"#F7931F"}}),_vm._v(" "),_c('path',{attrs:{"d":"M113.825 26.8708C113.792 25.2436 113.382 23.6878 112.473 22.3011L112.48 22.3086C112.318 21.7412 111.984 21.2789 111.582 20.8618C111.255 20.223 110.774 19.7156 110.237 19.2534C110.139 19.1557 110.041 19.0542 109.947 18.9565C109.545 18.5544 109.192 18.0922 108.673 17.8179L108.681 17.8291C108.576 17.6037 108.327 17.5698 108.151 17.4458C107.824 17.1489 107.448 16.9235 107.057 16.7318L107.072 16.7431C106.49 16.2771 105.813 15.999 105.099 15.8149C104.679 15.4541 104.126 15.4616 103.638 15.2888L103.653 15.3C101.747 14.5522 99.7481 14.6424 97.7827 14.8002C97.125 14.8528 96.3546 14.8829 95.7383 15.2925L95.7496 15.2812C95.2084 15.4804 94.6034 15.4842 94.1186 15.8412L94.1337 15.8299C93.4873 16.0479 92.8635 16.3147 92.3148 16.7356L92.3298 16.7243C92.0405 16.9235 91.6797 17.0099 91.4317 17.273C91.1574 17.412 90.8943 17.5698 90.7064 17.8216L90.7139 17.8103C89.8007 18.4567 89.083 19.2985 88.3389 20.1177C88.2825 20.1816 88.2262 20.2455 88.1698 20.3094C87.9819 20.4484 87.9368 20.6852 87.809 20.8618L87.8128 20.8543C87.3693 21.4105 86.9372 21.9742 86.738 22.6731L86.7493 22.6581C86.0916 23.7404 85.7497 24.9354 85.5618 26.1681C85.2235 28.3665 85.419 30.5837 85.3701 32.7896C85.2912 36.5626 86.6553 39.7531 89.2333 42.4663C89.4174 42.6505 89.6016 42.8346 89.782 43.0187C90.1314 43.3307 90.4734 43.6463 90.8718 43.8981C91.0296 44.1987 91.3603 44.2589 91.6046 44.4355C91.7361 44.6309 91.9616 44.6798 92.1495 44.7925L92.1344 44.785C92.7282 45.127 93.2919 45.5178 93.9232 45.8034C96.3246 46.8932 98.8462 47.2615 101.443 46.9458C102.702 46.7917 103.964 46.5136 105.099 45.8673L105.088 45.8786C105.464 45.7207 105.885 45.6531 106.182 45.3374L106.174 45.3449C106.415 45.2209 106.712 45.2059 106.892 44.9691C107.546 44.6159 108.181 44.2438 108.7 43.7027L108.684 43.714C109.402 43.2442 109.951 42.5979 110.515 41.9665C110.699 41.7899 110.695 41.4667 110.977 41.3652C111.698 40.7339 112.1 39.8921 112.499 39.0503C113.348 37.7163 113.814 36.2507 113.837 34.6798C113.867 32.0793 113.878 29.4751 113.825 26.8708ZM105.291 34.1161C105.024 37.5622 101.623 40.0951 98.3388 39.2495C96.0277 38.6558 94.6109 37.006 94.1976 34.7362C93.7241 32.1395 93.7579 29.4751 94.1825 26.867C94.626 24.1575 97.3392 22.1433 100.056 22.3161C102.567 22.474 105.122 24.9956 105.295 27.5585C105.366 28.6333 105.306 29.7156 105.306 30.7941H105.302C105.302 31.8989 105.374 33.0113 105.291 34.1161Z","fill":"#F7931F"}}),_vm._v(" "),_c('path',{attrs:{"d":"M1.31156 41.7185C1.19131 41.4817 1.0673 41.2412 0.947041 41.0045C0.135321 38.8361 0.00379267 36.5851 0.0113086 34.2928C0.0376143 24.4619 0.0376143 14.6311 3.47072e-05 4.80028C-0.00372325 3.63532 0.296914 2.75595 1.2815 2.13213C1.70615 1.95551 2.12704 1.77513 2.54793 1.5985C3.67908 1.35048 4.81398 1.36927 5.94513 1.59099C6.79443 1.95551 7.63997 2.32755 8.27506 3.0378C8.44041 3.49251 8.48551 3.96226 8.48551 4.44704C8.47424 7.73525 8.50054 11.0272 8.46672 14.3154C8.4592 15.0445 8.63583 15.3038 9.40997 15.2887C11.8639 15.2437 14.3141 15.2737 16.7681 15.2775C17.4896 15.6082 17.8165 16.2771 18.181 16.9159C18.3802 17.8592 18.4065 18.8024 18.181 19.7494C17.8729 20.3733 17.5046 20.9482 16.9259 21.3616C14.4381 21.3766 11.9503 21.4142 9.46634 21.3917C8.75608 21.3842 8.4592 21.542 8.46672 22.3312C8.50054 26.8257 8.46672 31.3164 8.49302 35.811C8.49678 36.7279 8.55691 37.6824 9.3799 38.3363C10.0112 39.0015 10.8418 39.0578 11.676 39.0729C12.6869 39.0917 13.6978 39.0541 14.7087 39.0841C15.8924 39.118 16.8996 39.5652 17.6549 40.5084C18.3614 41.9327 18.5456 43.3532 17.6549 44.785C17.0274 45.7921 16.1217 46.2731 14.953 46.2769C12.4351 46.2806 9.91353 46.3896 7.42201 45.8673C6.8771 45.6906 6.3322 45.5178 5.78729 45.3412C5.40398 45.0781 4.97933 44.9165 4.53589 44.7887C4.29914 44.5069 3.97596 44.3641 3.64526 44.2363C3.28449 43.9357 2.92749 43.6388 2.56672 43.3382C2.36379 43.0037 2.12328 42.7068 1.81137 42.4701C1.69487 42.1882 1.55583 41.9177 1.31156 41.7185Z","fill":"#F7931F"}})])])],1),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"login-page-box d-flex flex-column col-sm-8 col-lg-5 col-md-6 col-xl-4\">","</div>",[_vm._ssrNode("<div class=\"d-flex flex-column justify-content-center input__box form-floating\"><label for=\"name\">"+_vm._ssrEscape(_vm._s(_vm.$t('fullname')))+"</label> <input name=\"name\" id=\"name\" type=\"text\""+(_vm._ssrAttr("placeholder",_vm.$t('fullname')))+(_vm._ssrAttr("value",(_vm.shopAccess.name)))+" class=\"form-control\"> "+((!_vm.$v.shopAccess.name.required && _vm.check1)?("<h6 class=\"error-text\">"+_vm._ssrEscape("\n                    "+_vm._s(_vm.$t("tolshart"))+"\n                ")+"</h6>"):"<!---->")+"</div> <div class=\"d-flex flex-column justify-content-center input__box form-floating\"><label for=\"email\">"+_vm._ssrEscape(_vm._s(_vm.$t('elpoch')))+"</label> <input name=\"email\" id=\"email\" type=\"email\""+(_vm._ssrAttr("placeholder",_vm.$t('elpoch')))+(_vm._ssrAttr("value",(_vm.shopAccess.email)))+" class=\"form-control\"></div> <div class=\"d-flex flex-column justify-content-center input__box form-floating\"><label for=\"phone\">"+_vm._ssrEscape(_vm._s(_vm.$t('tel')))+"</label> <input name=\"phone\" id=\"phone\" type=\"text\""+(_vm._ssrAttr("placeholder",_vm.$t('tel')))+(_vm._ssrAttr("value",(_vm.shopAccess.phone)))+" class=\"form-control\"> "+((!_vm.$v.shopAccess.phone.required && _vm.check1)?("<h6 class=\"error-text\">"+_vm._ssrEscape("\n                    "+_vm._s(_vm.$t("tolshart"))+"\n                ")+"</h6>"):"<!---->")+"</div> <div class=\"d-flex flex-column justify-content-center input__box form-floating\"><label for=\"companyName\">"+_vm._ssrEscape(_vm._s(_vm.$t('nazfilm')))+"</label> <input name=\"companyName\" id=\"companyName\" type=\"text\""+(_vm._ssrAttr("placeholder",_vm.$t('nazfilm')))+(_vm._ssrAttr("value",(_vm.shopAccess.companyName)))+" class=\"form-control\"> "+((!_vm.$v.shopAccess.companyName.required && _vm.check1)?("<h6 class=\"error-text\">"+_vm._ssrEscape("\n                    "+_vm._s(_vm.$t("tolshart"))+"\n                ")+"</h6>"):"<!---->")+"</div> <div class=\"d-flex flex-column justify-content-center input__box form-floating\"><label for=\"comment\">"+_vm._ssrEscape(_vm._s(_vm.$t('sobsheniya')))+"</label> <textarea name=\"comment\" id=\"comment\" type=\"text\""+(_vm._ssrAttr("placeholder",_vm.$t('sobsheniya')))+" class=\"form-control\">"+_vm._ssrEscape(_vm._s(_vm.shopAccess.comment))+"</textarea></div> "),_vm._ssrNode("<button class=\"button__send d-flex justify-content-center align-items-center\">","</button>",[_vm._ssrNode("<div class=\"loading__spinner\">","</div>",[(_vm.loadSpinner)?_c('b-spinner',{attrs:{"small":"","label":"Small Spinner"}}):_vm._e()],1),_vm._ssrNode(_vm._ssrEscape("\n               "+_vm._s(_vm.$t('sendx'))+"\n            "))],2)],2),_vm._ssrNode(" "),_c('b-modal',{staticClass:"b-modal",attrs:{"id":"modal-danger","hide-footer":"","hide-header":"","centered":""},model:{value:(_vm.modalShow),callback:function ($$v) {_vm.modalShow=$$v},expression:"modalShow"}},[_c('div',{staticClass:"d-block text-center"},[_c('h3',[_vm._v("\n                    "+_vm._s(_vm.$t('viuje'))+"\n                ")])]),_vm._v(" "),_c('b-button',{staticClass:"b-button",attrs:{"variant":"warning","block":""},on:{"click":function($event){return _vm.$router.push('/')}}},[_vm._v(_vm._s(_vm.$t('net')))]),_vm._v(" "),_c('b-button',{staticClass:"b-button",attrs:{"variant":"danger","block":""},on:{"click":function($event){_vm.modalShow = !_vm.modalShow}}},[_vm._v(_vm._s(_vm.$t('da')))])],1),_vm._ssrNode(" "),_c('b-modal',{staticClass:"b-modal",attrs:{"id":"modal-info","size":"sm","centered":"","button-size":"sm","hide-footer":"","hide-header":""},model:{value:(_vm.sendReqModal),callback:function ($$v) {_vm.sendReqModal=$$v},expression:"sendReqModal"}},[_c('div',{staticClass:"d-block text-center "},[_c('h3',[_vm._v(_vm._s(_vm.$t('zapuspeshno')))])]),_vm._v(" "),_c('b-button',{staticClass:"b-button",attrs:{"variant":"primary","block":""},on:{"click":function($event){return _vm.$router.push('/')}}},[_vm._v(_vm._s(_vm.$t('ok')))])],1)],2):_vm._e(),_vm._ssrNode(" "),(_vm.showSectionTwo && !_vm.shopCreate.shopStatus)?_vm._ssrNode("<section class=\"section__second\">","</section>",[_vm._ssrNode("<div class=\"login-page d-flex flex-column justify-content-center align-items-center\">","</div>",[_vm._ssrNode("<div class=\"logo-tujjor\">","</div>",[_c('nuxt-link',{attrs:{"to":"/"}},[_c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","width":"141","height":"61","viewBox":"0 0 141 61","fill":"none"}},[_c('path',{attrs:{"d":"M22.8819 16.7093C23.0097 16.5853 23.1337 16.4612 23.2615 16.3372C23.4494 16.0742 23.7463 15.9802 24.0093 15.8299L23.9943 15.8412C24.3926 15.4353 24.9563 15.4579 25.4449 15.285L25.4298 15.2963C26.2679 14.9768 27.1021 14.9881 27.9402 15.2888L27.9289 15.2812C28.4099 15.4691 28.9774 15.4316 29.3795 15.8299L29.3719 15.8224C30.6421 16.4349 31.1419 17.4158 31.1231 18.8513C31.063 23.5488 31.1231 28.2462 31.0856 32.9474C31.0743 34.2326 31.2246 35.4389 31.8973 36.5513L31.8898 36.54C32.1115 36.8782 32.5061 37.0887 32.6113 37.5133C32.7278 37.7238 32.8856 37.8966 33.1111 37.9944C33.4381 38.0808 33.6372 38.3476 33.8928 38.5393L33.8815 38.528C35.8695 39.5727 37.8273 39.5351 39.7514 38.3551C39.9055 38.2161 40.0596 38.0808 40.2137 37.9417C40.4993 37.5735 40.8525 37.2615 41.1456 36.9008L41.1344 36.9158C41.326 36.6152 41.4237 36.2582 41.6868 35.9989L41.6755 36.0101C42.1753 34.8602 42.2129 33.6501 42.2091 32.4138C42.1866 27.7802 42.1979 23.1467 42.2016 18.5131C42.2016 17.9494 42.164 17.3707 42.5699 16.8934L42.5661 16.8972C42.8555 16.3748 43.3252 16.0704 43.8476 15.8224L43.8326 15.8337C44.2535 15.4391 44.8134 15.424 45.3282 15.2812C45.3658 15.3188 45.4034 15.3188 45.441 15.2775C46.2828 14.9731 47.1245 14.9768 47.9626 15.2888L47.9475 15.2775C48.4323 15.4654 49.0186 15.3977 49.3906 15.86C49.7889 16.2095 50.1835 16.5552 50.5819 16.9047C50.9727 17.194 50.9389 17.6225 50.9389 18.0321C50.9426 23.3872 50.9915 28.746 50.9201 34.1011C50.8825 36.8294 49.9242 39.2833 48.1354 41.3803L48.143 41.3728C47.8761 41.6659 47.7747 42.1056 47.3575 42.2634C46.9968 42.6016 46.5984 42.906 46.3504 43.3494C46.14 43.5787 45.8731 43.7328 45.6101 43.8981L45.6176 43.8906C45.4748 44.2025 45.1291 44.2551 44.8886 44.4355L44.8961 44.428C44.0468 45.0067 43.1824 45.5629 42.1903 45.8823L42.1979 45.8785C41.093 46.4949 39.8604 46.7542 38.6428 46.9383C36.7714 47.2239 34.8999 47.0172 33.0585 46.5963C32.9119 46.5625 32.7729 46.5136 32.6602 46.4084L32.6714 46.4159C31.7244 46.1604 30.7812 45.8973 29.9657 45.3224L29.9732 45.3299C28.9097 44.815 27.9289 44.1762 27.0796 43.3457L27.0871 43.3532C26.4558 42.8947 25.8958 42.3724 25.4674 41.7147L25.4787 41.7222C25.2119 41.5531 25.1104 41.2525 24.9037 41.0345C24.7797 40.8504 24.6595 40.6663 24.5354 40.4821C24.0619 39.8808 23.7463 39.1969 23.4644 38.4942L23.4682 38.4979C22.6715 37.0774 22.3972 35.5216 22.3896 33.9282C22.3671 28.7385 22.3784 23.5488 22.3821 18.359C22.3633 17.7615 22.3821 17.1602 22.8819 16.7093Z","fill":"#F7931F"}}),_vm._v(" "),_c('path',{attrs:{"d":"M77.0829 58.122C76.9176 58.2836 76.756 58.4452 76.5906 58.603C76.29 59.0803 75.7977 59.3095 75.3317 59.5688L75.3392 59.5575C75.0536 59.8957 74.6252 59.9483 74.2532 60.1099L74.2607 60.0987C71.927 60.963 69.5933 61.3876 67.2634 60.0874L67.2822 60.0987C67.0078 60.0085 66.835 59.8168 66.726 59.5575L66.7373 59.5726C66.478 59.3133 66.2675 59.0239 66.1849 58.6594L66.1961 58.6669C65.2754 56.7015 66.2976 54.1122 68.1615 53.6538L68.154 53.6613C68.5749 53.2892 69.0935 53.3832 69.5858 53.3794C69.924 53.3757 70.2021 53.2028 70.5103 53.1201L70.5065 53.1314C70.6606 52.9172 70.9049 52.7894 71.0514 52.5677L71.0439 52.579C71.4385 51.4441 71.664 50.2791 71.664 49.0728C71.6602 38.8361 71.664 28.6032 71.6602 18.3665C71.6602 17.8554 71.6264 17.3406 71.927 16.8859C72.0473 16.7093 72.1675 16.5326 72.2878 16.3523C72.9191 15.7585 73.6707 15.4203 74.52 15.2812C74.5538 15.3226 74.5914 15.3226 74.6252 15.2812C75.5271 14.9768 76.4291 14.9731 77.331 15.285L77.3197 15.2737C77.8759 15.424 78.4922 15.3977 78.9469 15.8337L78.9319 15.8224C79.1874 15.9877 79.5181 16.0516 79.6684 16.3598L79.6609 16.3523C80.1457 16.7356 80.311 17.2429 80.311 17.8479C80.3073 28.6145 80.3223 39.381 80.2922 50.1476C80.2885 51.8575 79.8488 53.511 79.1122 55.0705L79.1235 55.0592C78.9657 55.435 78.9056 55.8597 78.5749 56.1491L78.5824 56.1415C78.3757 56.4347 78.293 56.7992 78.0224 57.051L78.0337 57.0359C77.7406 57.4155 77.5752 57.9153 77.0829 58.122Z","fill":"#F7931F"}}),_vm._v(" "),_c('path',{attrs:{"d":"M64.885 52.9247C64.8474 52.9585 64.8436 52.9924 64.8812 53.0299C64.6708 53.5824 64.7008 54.2137 64.3326 54.7135L64.3438 54.6985C64.0056 55.6267 63.6749 56.5624 62.8895 57.2313C62.4724 57.6936 62.0552 58.1558 61.6381 58.6218C61.33 59.0878 60.894 59.3771 60.383 59.5763L60.3905 59.5688C60.0936 59.8845 59.6689 59.9408 59.3007 60.1137L59.3082 60.1062C57.324 60.9329 55.3059 61.1208 53.2052 60.5384C51.4728 60.0573 50.74 57.9717 50.9655 56.6113C51.1384 55.5591 51.4841 54.5857 52.4912 54.0145L52.4762 54.0258C52.6641 53.7891 52.9572 53.7628 53.209 53.6538L53.1977 53.665C53.4871 53.4133 53.8629 53.3644 54.2011 53.387C55.1744 53.4546 55.8659 53.0863 56.2905 52.2145L56.2755 52.2295C56.5386 51.5944 56.5912 50.9217 56.6137 50.2453C56.625 49.9259 56.5724 49.5914 56.8091 49.3171C56.8242 49.0803 56.858 48.8398 56.858 48.6031C56.8617 38.4754 56.8617 28.3439 56.858 18.2162C56.858 17.9795 56.8317 17.7389 56.8166 17.5022C57.0045 16.698 57.4442 16.1042 58.2372 15.8111C58.6129 15.3339 59.2067 15.4503 59.699 15.285L59.6802 15.2925C60.5784 14.9956 61.4728 14.9543 62.3709 15.2925L62.3596 15.2812C62.9158 15.4316 63.5284 15.4128 63.9906 15.8337L63.9756 15.8224C65.0466 16.3147 65.4675 17.1038 65.4637 18.3177C65.4337 28.5656 65.4149 38.8173 65.46 49.0653C65.4675 50.3843 65.2833 51.6696 64.885 52.9247Z","fill":"#F7931F"}}),_vm._v(" "),_c('path',{attrs:{"d":"M127.47 19.4187C127.522 19.3511 127.575 19.2835 127.627 19.2158C127.789 19.0693 127.8 18.81 128.014 18.7047L128.003 18.7123C128.311 18.2387 128.702 17.8366 129.085 17.427C129.138 17.3744 129.191 17.318 129.247 17.2654C129.495 17.0851 129.717 16.8709 129.984 16.713L129.98 16.7168C130.326 16.2996 130.803 16.0742 131.265 15.8261L131.25 15.8374C131.551 15.5255 131.953 15.4203 132.344 15.2812L132.329 15.2925C133.024 14.9393 133.742 14.6875 134.546 14.7138C135.324 14.7401 136.105 14.7514 136.883 14.71C137.552 14.6762 138.12 14.8603 138.616 15.2888L138.601 15.2775C139.258 15.6345 139.608 16.2358 139.875 16.8972L139.867 16.8859C140.472 18.2688 140.491 19.5991 139.484 20.8242C139.333 20.8731 139.315 20.9933 139.326 21.1286C139.247 21.4405 139.048 21.6322 138.743 21.7186C138.646 21.7938 138.548 21.8727 138.45 21.9479C138.293 22.256 137.943 22.1245 137.71 22.2673L137.718 22.2598C137.394 22.5717 136.988 22.4514 136.616 22.4552C135.35 22.4777 134.072 22.3575 132.843 22.8084L132.851 22.8009C132.682 23.0752 132.362 23.0414 132.118 23.1654L132.129 23.1542C131.874 23.4097 131.573 23.5938 131.239 23.7216C131.085 23.9358 130.942 24.1613 130.664 24.2365L130.671 24.2252C130.506 24.4469 130.288 24.616 130.078 24.7851C129.92 24.9655 129.766 25.1421 129.608 25.3225C129.503 25.6758 129.311 25.9801 129.044 26.2319L129.055 26.2169C127.725 28.6408 127.518 31.2826 127.537 33.9771C127.556 37.115 127.518 40.2566 127.556 43.3945C127.567 44.2701 127.278 44.894 126.538 45.3299L126.545 45.3224C126.357 45.6944 125.955 45.7132 125.636 45.8673L125.643 45.8598C124.024 46.5738 122.404 46.5512 120.784 45.871C120.668 45.8147 120.551 45.7545 120.435 45.6982C120.183 45.5253 119.935 45.3449 119.721 45.1194L119.739 45.1307C119.39 45.0142 119.36 44.6572 119.183 44.4092L119.195 44.4167C118.879 44.0747 118.898 43.6538 118.898 43.2329C118.898 34.8452 118.898 26.4574 118.898 18.0659C118.898 17.6412 118.901 17.2241 119.21 16.8821L119.195 16.9009C119.785 15.8524 120.754 15.4165 121.889 15.2587L121.878 15.2662C122.72 15.0107 123.558 14.8641 124.377 15.3376C124.583 15.4879 124.82 15.4541 125.053 15.4466C125.32 15.548 125.639 15.533 125.827 15.8036L125.82 15.7961C126.053 15.9915 126.421 16.014 126.534 16.3598L126.523 16.341C127.304 17.0099 127.034 17.9231 127.113 18.7649C127.124 19.0166 126.801 19.539 127.47 19.4187Z","fill":"#F7931F"}}),_vm._v(" "),_c('path',{attrs:{"d":"M72.1116 6.62665C72.059 6.56653 72.0027 6.50264 71.9501 6.44251C70.8941 4.73264 70.9467 3.28207 72.1229 1.75634C72.2995 1.57971 72.4762 1.40309 72.6528 1.22646C74.3326 -0.179013 76.2041 -0.27672 78.1883 0.429777C78.3574 0.489904 78.5302 0.55379 78.5753 0.756719C78.9173 1.03481 79.2593 1.3129 79.6013 1.59474C80.21 2.04194 80.4092 2.7071 80.5708 3.39481L80.5633 3.38353C80.8113 3.92092 80.8752 4.46207 80.5708 5.00321C80.5295 5.03704 80.5295 5.07086 80.5633 5.1122C80.3002 6.11181 79.8606 6.98366 78.906 7.50602C78.8572 7.54359 78.8083 7.57742 78.7632 7.615C78.6279 7.93442 78.2935 7.92315 78.0417 8.05092L78.0492 8.0434C76.6738 8.74614 75.2984 8.7499 73.9267 8.03589L73.9418 8.04716C73.5735 7.98328 73.3067 7.73149 73.0173 7.52856C72.8858 7.40831 72.758 7.28805 72.6265 7.1678C72.4236 7.01372 72.2507 6.83334 72.1116 6.62665Z","fill":"#F7931F"}}),_vm._v(" "),_c('path',{attrs:{"d":"M57.1512 6.60786C57.0347 6.43124 56.922 6.25837 56.8055 6.08175C55.7946 4.16894 56.3057 2.28621 58.1283 0.892002C59.5751 -0.216596 62.0403 -0.295513 63.63 0.689073L63.6224 0.681557C63.8066 0.813085 64.0734 0.835633 64.1598 1.09117C64.3853 1.31665 64.6145 1.54589 64.84 1.77137C66.0877 3.04531 66.1102 5.19862 64.8926 6.60786L64.8964 6.6041C64.5995 7.03251 64.2651 7.42334 63.7916 7.67512L63.8066 7.66385C63.63 7.90811 63.3256 7.91939 63.0851 8.04716L63.0926 8.0434C61.4654 8.83257 59.9058 8.71608 58.4139 7.69015L58.4177 7.69391C58.196 7.48722 57.8352 7.45716 57.7037 7.13397L57.7112 7.14149C57.4556 7.04002 57.2865 6.84085 57.1512 6.60786Z","fill":"#F7931F"}}),_vm._v(" "),_c('path',{attrs:{"d":"M89.7773 43.0225C90.2358 43.1991 90.574 43.5261 90.8709 43.9056C90.3185 43.8417 89.9765 43.5185 89.7773 43.0225Z","fill":"#F7931F"}}),_vm._v(" "),_c('path',{attrs:{"d":"M90.8633 43.9019C91.1564 44.0146 91.4157 44.1762 91.5961 44.4393C91.2504 44.4017 90.9121 44.3491 90.8633 43.9019Z","fill":"#F7931F"}}),_vm._v(" "),_c('path',{attrs:{"d":"M91.5928 44.4317C91.8333 44.4656 92.0174 44.5896 92.1452 44.7963C91.8633 44.8188 91.5928 44.8301 91.5928 44.4317Z","fill":"#F7931F"}}),_vm._v(" "),_c('path',{attrs:{"d":"M113.825 26.8708C113.792 25.2436 113.382 23.6878 112.473 22.3011L112.48 22.3086C112.318 21.7412 111.984 21.2789 111.582 20.8618C111.255 20.223 110.774 19.7156 110.237 19.2534C110.139 19.1557 110.041 19.0542 109.947 18.9565C109.545 18.5544 109.192 18.0922 108.673 17.8179L108.681 17.8291C108.576 17.6037 108.327 17.5698 108.151 17.4458C107.824 17.1489 107.448 16.9235 107.057 16.7318L107.072 16.7431C106.49 16.2771 105.813 15.999 105.099 15.8149C104.679 15.4541 104.126 15.4616 103.638 15.2888L103.653 15.3C101.747 14.5522 99.7481 14.6424 97.7827 14.8002C97.125 14.8528 96.3546 14.8829 95.7383 15.2925L95.7496 15.2812C95.2084 15.4804 94.6034 15.4842 94.1186 15.8412L94.1337 15.8299C93.4873 16.0479 92.8635 16.3147 92.3148 16.7356L92.3298 16.7243C92.0405 16.9235 91.6797 17.0099 91.4317 17.273C91.1574 17.412 90.8943 17.5698 90.7064 17.8216L90.7139 17.8103C89.8007 18.4567 89.083 19.2985 88.3389 20.1177C88.2825 20.1816 88.2262 20.2455 88.1698 20.3094C87.9819 20.4484 87.9368 20.6852 87.809 20.8618L87.8128 20.8543C87.3693 21.4105 86.9372 21.9742 86.738 22.6731L86.7493 22.6581C86.0916 23.7404 85.7497 24.9354 85.5618 26.1681C85.2235 28.3665 85.419 30.5837 85.3701 32.7896C85.2912 36.5626 86.6553 39.7531 89.2333 42.4663C89.4174 42.6505 89.6016 42.8346 89.782 43.0187C90.1314 43.3307 90.4734 43.6463 90.8718 43.8981C91.0296 44.1987 91.3603 44.2589 91.6046 44.4355C91.7361 44.6309 91.9616 44.6798 92.1495 44.7925L92.1344 44.785C92.7282 45.127 93.2919 45.5178 93.9232 45.8034C96.3246 46.8932 98.8462 47.2615 101.443 46.9458C102.702 46.7917 103.964 46.5136 105.099 45.8673L105.088 45.8786C105.464 45.7207 105.885 45.6531 106.182 45.3374L106.174 45.3449C106.415 45.2209 106.712 45.2059 106.892 44.9691C107.546 44.6159 108.181 44.2438 108.7 43.7027L108.684 43.714C109.402 43.2442 109.951 42.5979 110.515 41.9665C110.699 41.7899 110.695 41.4667 110.977 41.3652C111.698 40.7339 112.1 39.8921 112.499 39.0503C113.348 37.7163 113.814 36.2507 113.837 34.6798C113.867 32.0793 113.878 29.4751 113.825 26.8708ZM105.291 34.1161C105.024 37.5622 101.623 40.0951 98.3388 39.2495C96.0277 38.6558 94.6109 37.006 94.1976 34.7362C93.7241 32.1395 93.7579 29.4751 94.1825 26.867C94.626 24.1575 97.3392 22.1433 100.056 22.3161C102.567 22.474 105.122 24.9956 105.295 27.5585C105.366 28.6333 105.306 29.7156 105.306 30.7941H105.302C105.302 31.8989 105.374 33.0113 105.291 34.1161Z","fill":"#F7931F"}}),_vm._v(" "),_c('path',{attrs:{"d":"M1.31156 41.7185C1.19131 41.4817 1.0673 41.2412 0.947041 41.0045C0.135321 38.8361 0.00379267 36.5851 0.0113086 34.2928C0.0376143 24.4619 0.0376143 14.6311 3.47072e-05 4.80028C-0.00372325 3.63532 0.296914 2.75595 1.2815 2.13213C1.70615 1.95551 2.12704 1.77513 2.54793 1.5985C3.67908 1.35048 4.81398 1.36927 5.94513 1.59099C6.79443 1.95551 7.63997 2.32755 8.27506 3.0378C8.44041 3.49251 8.48551 3.96226 8.48551 4.44704C8.47424 7.73525 8.50054 11.0272 8.46672 14.3154C8.4592 15.0445 8.63583 15.3038 9.40997 15.2887C11.8639 15.2437 14.3141 15.2737 16.7681 15.2775C17.4896 15.6082 17.8165 16.2771 18.181 16.9159C18.3802 17.8592 18.4065 18.8024 18.181 19.7494C17.8729 20.3733 17.5046 20.9482 16.9259 21.3616C14.4381 21.3766 11.9503 21.4142 9.46634 21.3917C8.75608 21.3842 8.4592 21.542 8.46672 22.3312C8.50054 26.8257 8.46672 31.3164 8.49302 35.811C8.49678 36.7279 8.55691 37.6824 9.3799 38.3363C10.0112 39.0015 10.8418 39.0578 11.676 39.0729C12.6869 39.0917 13.6978 39.0541 14.7087 39.0841C15.8924 39.118 16.8996 39.5652 17.6549 40.5084C18.3614 41.9327 18.5456 43.3532 17.6549 44.785C17.0274 45.7921 16.1217 46.2731 14.953 46.2769C12.4351 46.2806 9.91353 46.3896 7.42201 45.8673C6.8771 45.6906 6.3322 45.5178 5.78729 45.3412C5.40398 45.0781 4.97933 44.9165 4.53589 44.7887C4.29914 44.5069 3.97596 44.3641 3.64526 44.2363C3.28449 43.9357 2.92749 43.6388 2.56672 43.3382C2.36379 43.0037 2.12328 42.7068 1.81137 42.4701C1.69487 42.1882 1.55583 41.9177 1.31156 41.7185Z","fill":"#F7931F"}})])])],1),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"login-page-box d-flex flex-column col-sm-8 col-lg-5 col-md-6 col-xl-4\">","</div>",[_vm._ssrNode("<div class=\"d-flex flex-column justify-content-center input__box form-floating\"><label for=\"fullName\">"+_vm._ssrEscape(_vm._s(_vm.$t('fio')))+"</label> <input name=\"fullName\" id=\"fullName\" type=\"text\""+(_vm._ssrAttr("placeholder",_vm.$t('fio')))+(_vm._ssrAttr("value",(_vm.shopCreate.fullNameDirector)))+" class=\"form-control\"> "+((
                            !_vm.$v.shopCreate.fullNameDirector.required &&
                                _vm.check2
                        )?("<h6 class=\"error-text\">"+_vm._ssrEscape("\n                        "+_vm._s(_vm.$t("tolshart"))+"\n                    ")+"</h6>"):"<!---->")+"</div> <div class=\"d-flex flex-column justify-content-center input__box form-floating\"><label for=\"shopName\">"+_vm._ssrEscape(_vm._s(_vm.$t('nazfilm')))+"</label> <input name=\"shopName\" id=\"shopName\" type=\"text\""+(_vm._ssrAttr("placeholder",_vm.$t('nazfilm')))+(_vm._ssrAttr("value",(_vm.shopCreate.shopName)))+" class=\"form-control\"> "+((!_vm.$v.shopCreate.shopName.required && _vm.check2)?("<h6 class=\"error-text\">"+_vm._ssrEscape("\n                        "+_vm._s(_vm.$t("tolshart"))+"\n                    ")+"</h6>"):"<!---->")+"</div> <div class=\"d-flex flex-column justify-content-center input__box form-floating\"><label for=\"shopCardIndex\">"+_vm._ssrEscape(_vm._s(_vm.$t('bankrek')))+"</label> <input name=\"shopCardIndex\" id=\"shopCardIndex\" type=\"text\""+(_vm._ssrAttr("placeholder",_vm.$t('bankrek')))+(_vm._ssrAttr("value",(_vm.shopCreate.shopId)))+" class=\"form-control\"> "+((!_vm.$v.shopCreate.shopId.required && _vm.check2)?("<h6 class=\"error-text\">"+_vm._ssrEscape("\n                        "+_vm._s(_vm.$t("tolshart"))+"\n                    ")+"</h6>"):"<!---->")+"</div> <div class=\"d-flex flex-column justify-content-center input__box form-floating\"><label for=\"shopCardMfo\">"+_vm._ssrEscape(_vm._s(_vm.$t('mfo')))+"</label> <input name=\"shopCardMfo\" id=\"shopCardMfo\" type=\"text\""+(_vm._ssrAttr("placeholder",_vm.$t('elpoch')))+(_vm._ssrAttr("value",(_vm.shopCreate.mfo)))+" class=\"form-control\"> "+((!_vm.$v.shopCreate.mfo.required && _vm.check2)?("<h6 class=\"error-text\">"+_vm._ssrEscape("\n                        "+_vm._s(_vm.$t("tolshart"))+"\n                    ")+"</h6>"):"<!---->")+"</div> <div class=\"d-flex flex-column justify-content-center input__box form-floating\"><label for=\"shopAddress\">"+_vm._ssrEscape(_vm._s(_vm.$t('adres')))+"</label> <input name=\"shopAddress\" id=\"shopAddress\" type=\"text\""+(_vm._ssrAttr("placeholder",_vm.$t('adres')))+(_vm._ssrAttr("value",(_vm.shopCreate.address)))+" class=\"form-control\"> "+((!_vm.$v.shopCreate.address.required && _vm.check2)?("<h6 class=\"error-text\">"+_vm._ssrEscape("\n                        "+_vm._s(_vm.$t("tolshart"))+"\n                    ")+"</h6>"):"<!---->")+"</div> "),_vm._ssrNode("<div class=\"d-flex flex-column justify-content-center input__box form-floating\">","</div>",[_vm._ssrNode("<label for=\"shopPhone\">"+_vm._ssrEscape(_vm._s(_vm.$t('tel')))+"</label> "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.shopCreate.phone),expression:"shopCreate.phone"},{name:"mask",rawName:"v-mask",value:('+998 (##) ###-##-##'),expression:"'+998 (##) ###-##-##'"}],staticClass:"form-control",attrs:{"name":"shopPhone","id":"shopPhone","type":"text","placeholder":"+998 (__) ___ -__-__"},domProps:{"value":(_vm.shopCreate.phone)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.shopCreate, "phone", $event.target.value)}}},[]),_vm._ssrNode(" "+((!_vm.$v.shopCreate.phone.required && _vm.check2)?("<h6 class=\"error-text\">"+_vm._ssrEscape("\n                        "+_vm._s(_vm.$t("tolshart"))+"\n                    ")+"</h6>"):"<!---->"))],2),_vm._ssrNode(" <div class=\"d-flex flex-column justify-content-center input__box form-floating\"><label for=\"bank\">"+_vm._ssrEscape(_vm._s(_vm.$t('imyabank')))+"</label> <input name=\"bank\" id=\"bank\" type=\"text\""+(_vm._ssrAttr("placeholder",_vm.$t('imyabank')))+(_vm._ssrAttr("value",(_vm.shopCreate.bankName)))+" class=\"form-control\"> "+((!_vm.$v.shopCreate.bankName.required && _vm.check2)?("<h6 class=\"error-text\">"+_vm._ssrEscape("\n                        "+_vm._s(_vm.$t("tolshart"))+"\n                    ")+"</h6>"):"<!---->")+"</div> <div class=\"d-flex flex-column justify-content-center input__box form-floating\"><label for=\"identifierNumber\">ИНН</label> <input name=\"identifierNumber\" id=\"identifierNumber\" type=\"text\" placeholder=\"ИНН\""+(_vm._ssrAttr("value",(_vm.shopCreate.inn)))+" class=\"form-control\"> "+((!_vm.$v.shopCreate.inn.required && _vm.check2)?("<h6 class=\"error-text\">"+_vm._ssrEscape("\n                        "+_vm._s(_vm.$t("tolshart"))+"\n                    ")+"</h6>"):"<!---->")+"</div> <div class=\"d-flex flex-column justify-content-center input__box form-floating\"><label for=\"shopEmail\">"+_vm._ssrEscape(_vm._s(_vm.$t('email')))+"</label> <input name=\"shopEmail\" id=\"shopEmail\" type=\"email\" placeholder=\"Email\""+(_vm._ssrAttr("value",(_vm.shopCreate.email)))+" class=\"form-control\"> "+((!_vm.$v.shopCreate.email.required && _vm.check2)?("<h6 class=\"error-text\">"+_vm._ssrEscape("\n                        "+_vm._s(_vm.$t("tolshart"))+"\n                    ")+"</h6>"):"<!---->")+"</div> "),_vm._ssrNode("<button class=\"button__send d-flex justify-content-center align-items-center\">","</button>",[_vm._ssrNode("<div class=\"loading__spinner\">","</div>",[(_vm.loadSpinner)?_c('b-spinner',{attrs:{"small":"","label":"Small Spinner"}}):_vm._e()],1),_vm._ssrNode(_vm._ssrEscape("\n                 "+_vm._s(_vm.$t('poldog'))+"\n                "))],2),_vm._ssrNode(" "),_c('nuxt-link',{attrs:{"to":{ name: ("application___" + (_vm.$i18n.locale)) }}},[_vm._v(_vm._s(_vm.$t('estdog')))])],2),_vm._ssrNode(" "),_c('b-modal',{staticClass:"b-modal ",attrs:{"id":"modal-info","hide-footer":"","hide-header":"","centered":""},model:{value:(_vm.shopCreate.modalSend),callback:function ($$v) {_vm.$set(_vm.shopCreate, "modalSend", $$v)},expression:"shopCreate.modalSend"}},[_c('div',{staticClass:"d-block text-center"},[_c('h3',[_vm._v("\n                        "+_vm._s(_vm.$t('zagdog'))+"\n                    ")])]),_vm._v(" "),_c('div',{staticClass:"d-flex align-items-baseline  input__box form-floating"},[_c('label',{staticClass:"input__file__label",attrs:{"for":"shopContract"}},[_vm._v(_vm._s(_vm.$t('dog')))]),_vm._v(" "),_c('input',{ref:"shopContract",staticClass:"form-control input__file",attrs:{"name":"shopContract","id":"shopContract","type":"file","accept":"image/*,.pdf","placeholder":_vm.$t('dog')},on:{"change":_vm.handleFileContract}})]),_vm._v(" "),_c('div',{staticClass:"hot__link__box d-flex  justify-content-between align-items-baseline"},[_c('a',{staticClass:"hot__links remember__password",on:{"click":function($event){_vm.shopCreate.modalSend = !_vm.shopCreate.modalSend}}},[_vm._v("\n                       "+_vm._s(_vm.$t('udog'))+"\n                    ")])]),_vm._v(" "),_c('div',{staticClass:"d-flex  align-items-start input__box form-floating"},[_c('label',{staticClass:"input__file__label",attrs:{"for":"shopLicense"}},[_vm._v(_vm._s(_vm.$t('litsenziya')))]),_vm._v(" "),_c('input',{ref:"shopLicense",staticClass:"form-control input__file",attrs:{"name":"shopLicense","id":"shopLicense","type":"file","accept":"image/*,.pdf","placeholder":_vm.$t('litsenziya')},on:{"change":_vm.handleFileLicense}})]),_vm._v(" "),_c('b-button',{staticClass:"b-button",attrs:{"variant":"primary","block":""},on:{"click":_vm.sendCreateShop}},[_vm._v(_vm._s(_vm.$t('sendx')))])],1),_vm._ssrNode(" "),_c('b-modal',{staticClass:"b-modal",attrs:{"id":"modal-info","size":"sm","centered":"","button-size":"sm","hide-footer":"","hide-header":""},model:{value:(_vm.shopCreate.sendReqModal),callback:function ($$v) {_vm.$set(_vm.shopCreate, "sendReqModal", $$v)},expression:"shopCreate.sendReqModal"}},[_c('div',{staticClass:"d-block text-center "},[_c('h3',[_vm._v(_vm._s(_vm.$t('zapuspeshno')))])]),_vm._v(" "),_c('b-button',{staticClass:"b-button",attrs:{"variant":"primary","block":""},on:{"click":function($event){return _vm.$router.push('/')}}},[_vm._v("ОК!")])],1),_vm._ssrNode(" "),_c('b-modal',{staticClass:"b-modal",attrs:{"id":"modal-danger","hide-footer":"","hide-header":"","centered":"","no-close-on-backdrop":""},model:{value:(_vm.shopCreate.modalShow),callback:function ($$v) {_vm.$set(_vm.shopCreate, "modalShow", $$v)},expression:"shopCreate.modalShow"}},[_c('div',{staticClass:"d-block text-center"},[_c('h3',[_vm._v("\n                       "+_vm._s(_vm.$t('viuje'))+"\n                    ")])]),_vm._v(" "),_c('b-button',{staticClass:"b-button",attrs:{"variant":"warning","block":""},on:{"click":function($event){return _vm.$router.push('/')}}},[_vm._v(_vm._s(_vm.$t('net')))]),_vm._v(" "),_c('b-button',{staticClass:"b-button",attrs:{"variant":"danger","block":""},on:{"click":_vm.confirmEdit}},[_vm._v(_vm._s(_vm.$t('da')))])],1)],2)]):_vm._e(),_vm._ssrNode(" "),_c('vue-html2pdf',{ref:"html2Pdf",staticClass:"pdf-component",attrs:{"show-layout":false,"float-layout":true,"enable-download":true,"preview-modal":true,"paginate-elements-by-height":1500,"filename":"hee hee","pdf-quality":2,"manual-pagination":false,"pdf-format":"a4","pdf-orientation":"portrait","pdf-content-width":"800px","html-to-pdf-options":_vm.options}},[_c('section',{attrs:{"slot":"pdf-content"},slot:"pdf-content"},[_c('div',{staticClass:"item-page"},[_c('h1',{staticClass:"title-pdf"},[_vm._v("\n                    ОНЛАЙН ПЛАТФОРМАДАН ФОЙДАЛАНИШ ТЎҒРИСИДАГИ\n                ")]),_vm._v(" "),_c('h1',{staticClass:"title-pdf"},[_vm._v(_vm._s(_vm.code)+" - СОНЛИ ШАРТНОМА")]),_vm._v(" "),_c('div',{staticClass:"pdf-flex"},[_c('h2',{staticClass:"pdf-small"},[_vm._v("22.09.2021 йил")]),_vm._v(" "),_c('h2',{staticClass:"pdf-small"},[_vm._v("Тошкент шаҳри")])]),_vm._v(" "),_c('h3',{staticClass:"pdf-text"},[_vm._v("\n                    “SARAY STORE” МЧЖ кейинги матнда “ХИЗМАТ КЎРСАТУВЧИ” деб\n                    юритилувчи, унинг номидан жамият уставига асосан\n                    директор Akramjonov J.E. бир томондан ва\n                    "+_vm._s(_vm.shopCreate.shopName)+" кейинги матнда “ФОЙДАЛАНУВЧИ”\n                    деб юритилувчи, унинг номидан жамият уставига асосан\n                    директор "+_vm._s(_vm.shopCreate.fullNameDirector)+", иккинчи\n                    томондан, биргаликда кейинги мантда “ТАРАФЛАР”, алохида\n                    “ТАРАФ” деб юритувчилар мазкур Шартномани қуйидагилар\n                    тўғрисида туздилар:\n                ")]),_vm._v(" "),_c('h1',{staticClass:"title-pdf"},[_vm._v("\n                    I. АТАМАЛАР ВА ТУШУНЧАЛАР\n                ")]),_vm._v(" "),_c('h3',{staticClass:"pdf-text"},[_vm._v("\n                    1.1. Қуйида келитирилган атамалар мазкур шартномани аниқ\n                    тушуниш учун ифодаланган бўлиб, мазкур атамаларга\n                    берилган таърифлар мазкур шартнома билан чекланади.\n                ")]),_vm._v(" "),_c('ul',{staticClass:"text-ul"},[_c('li',[_vm._v("\n                        Сайт- жаҳон интернет тармоғида ҳамма учун фойдаланиш\n                        очиқ бўлган, хизмат кўрсатувчига мулк ҳуқуқи асосида\n                        тегишли бўлган www.tujjor.uz\n                    ")]),_vm._v(" "),_c('li',[_vm._v("\n                        Хизмат кўрсатувчи – сайтнинг мулкдори бўлган юридик\n                        шахс бўлиб, фойдаланувчига www.tujjor.uz орқали ўз\n                        товарларини сотиш ва реклама қилиш имконини берувчи\n                        тадбиркорлик субъекти\n                    ")]),_vm._v(" "),_c('li',[_vm._v("\n                        Фойдаланувчи – белгиланган тартибда тадбиркорлик\n                        субъекти сифатида давлат рўйхатидан ўтган\n                        www.tujjor.uz сайтида реклама қилиш орқали ўзига\n                        тегишли бўлган товарларни сотиш билан шуғулланувчи\n                        тадбиркорлик субъекти.\n                    ")]),_vm._v(" "),_c('li',[_vm._v("\n                        Мижоз – www.tujjor.uz сайти платформаси орқали товар\n                        моддий бойликларини сотиб олган шахс.\n                    ")]),_vm._v(" "),_c('li',[_vm._v("\n                        Платформа – www.tujjor.uz да жойлашган дастурий\n                        тахминот.\n                    ")]),_vm._v(" "),_c('li',[_vm._v("\n                        Маълумот(лар)- фойдаланувчи томонидан сайтда эълон\n                        қилинаётган товар ва унга оид ахборотлар тушунилади.\n                    ")])]),_vm._v(" "),_c('h1',{staticClass:"title-pdf"},[_vm._v("\n                    II. ШАРТНОМА ПРЕДМЕТИ\n                ")]),_vm._v(" "),_c('h3',{staticClass:"pdf-text"},[_vm._v("\n                    2.1. Хизмат кўрсатувчи ўзига мулк ҳуқуқи асосида тегишли\n                    бўлган www.tujjor.uz сайтидан реклама қилиш орқали\n                    Фойдаланувчига тегишли бўлган товарларни www.tujjor.uz\n                    сайти ёрдамида сотиши учун сайтда аккаунт очиб\n                    фойдаланишига шароит яратиб бериш ҳамда сайтнинг техник\n                    жихатдан таъминлаш мажбуриятини олади, Фойдаланувчи ўз\n                    навбатида Хизмат кўрсатувчига, Хизмат кўрсатувчи\n                    томонидан тақдим этилган хизматлар (кейинги матнда\n                    “ХИЗМАТЛАР” деб юритилади) учун, мазкур Шартномада\n                    кўрсатилган тартибда ва муддатда хақ тўлаш мажбуриятини\n                    ўз зиммасига олади.\n                ")]),_vm._v(" "),_c('h3',{staticClass:"pdf-text"},[_vm._v("\n                    2.2 Мазкур шартномани имзолаш орқали Фойдаланувчи\n                    http://tujjor.uz линки орқали очиқ бўлган сайтдан\n                    фойдаланиш келишуви талабларини қабул қилади. агар\n                    мазкур шартнома ва сайтдан фойдаланиш келишуви ўртасида\n                    тафовут мавжуд бўлса Хизмат кўрсатувчининг манфаатига\n                    ижобий таъсир қиладиган қоида устун мавқейга эга бўлади\n                    ва устун мавқейга эга бўлган қоида қўлланилади.\n                ")]),_vm._v(" "),_c('h3',{staticClass:"pdf-text"},[_vm._v("\n                    2.3. Фойдаланувчи сайт орқали тақдим этаётган\n                    маълумотларини ўзининг шахсий профили (аккаунти) орқали\n                    эълон қилади.\n                ")])]),_vm._v(" "),_c('div',{staticClass:"item-page"},[_c('h1',{staticClass:"title-pdf"},[_vm._v("\n                    III ТОВАРЛАР ҲАҚИДА МАЪЛУМОТЛАРНИ САЙТДА ЭЪЛОН ҚИЛИШ\n                    ШАРТЛАРИ\n                ")]),_vm._v(" "),_c('h3',{staticClass:"pdf-text"},[_vm._v("\n                    3.1. Фойдаланувчи ўзининг шахсий профили ёки электрон\n                    почтаси орқали Хизмат кўрсатувчининг махсус\n                    программаси(APP) ёки http://tujjor.uz орқали товарлар\n                    ҳақида маълумотларни сайтда эълон қилиши керак.\n                ")]),_vm._v(" "),_c('h3',{staticClass:"pdf-text"},[_vm._v("\n                    3.2. Фойдаланувчи Ўзбекистон Республикаси қонунчилиги\n                    талабларига мувофиқ келувчи товарлар ҳақидаги\n                    маълумотларни Хизмат кўрсатувчининг платформасида эълон\n                    қилиш мажбуриятини олади. платформада тарқатилган/эълон\n                    қилинган маълумотлар қонунчилик ва мазкур шартнома\n                    шартларига мувофиқ келмаса Хизмат кўрсатувчи бундай\n                    маълумотларни Фойдаланувчини огоҳлантирмасдан ўчириб\n                    юбориш ҳуқуқига эга.\n                ")]),_vm._v(" "),_c('h3',{staticClass:"pdf-text"},[_vm._v("\n                    3.3. Фойдаланувчи томонидан маълумотлари платформада\n                    эълон қилинган товарлардаги ҳар қандай кўринишдаги\n                    камчииликлар учун жавобгарликни фойдаланувчи олади.\n                ")]),_vm._v(" "),_c('h1',{staticClass:"title-pdf"},[_vm._v("\n                    IV. ШАРТНОМАНИНГ БАҲОСИ ВА ҲИСОБ-КИТОБ ТАРТИБИ\n                ")]),_vm._v(" "),_c('h3',{staticClass:"pdf-text"},[_vm._v("\n                    4.1.Хизматларнинг баҳоси шартнома тарафлари келишган\n                    тариф режасига мувофиқ белгиланади.\n                ")]),_vm._v(" "),_c('h3',{staticClass:"pdf-text"},[_vm._v("\n                    4.2.Хар ойлик хизмат нархи Фойдаланувчининг аккаунтида\n                    акс этган ҳолда туради, фойдаланувчи томонидан хизмат\n                    учун ҳақ тўлангандан сўнг Фойдаланувчига платформадан\n                    тўлиқ фойдаланиш имкони автоматик тарзда очилади.\n                ")]),_vm._v(" "),_c('h3',{staticClass:"pdf-text"},[_vm._v("\n                    4.3.Кўрсатилган Хизматлар учун Хизмат ҳақи сўмда пул\n                    маблағларини банкларнинг филиаллари орқали Хизмат\n                    кўрсатувчининг ҳисоб рақамига пул ўтказиш йўли билан\n                    амалга оширилади\n                ")]),_vm._v(" "),_c('h1',{staticClass:"title-pdf"},[_vm._v("\n                    V. ТАРАФЛАРНИНГ ҲУҚУҚ ВА МАЖБУРИЯТЛРИ\n                ")]),_vm._v(" "),_c('h3',{staticClass:"pdf-text-bold"},[_vm._v("\n                    5.1 Фойдаланувчининг ҳуқуқ ва мажбуриятлари:\n                ")]),_vm._v(" "),_c('h3',{staticClass:"pdf-text-bold"},[_vm._v("\n                    5.1.1. Фойдаланувчининг ҳуқуқлари:\n                ")]),_vm._v(" "),_c('h3',{staticClass:"pdf-text"},[_vm._v("\n                    - мазкур Шартнома шартлари ва таклиф этилган Хизматлар\n                    бажарилиши бўйича ўзини қизиқтирган маълумотларни сўраш\n                    ва олиш;\n                ")]),_vm._v(" "),_c('h3',{staticClass:"pdf-text"},[_vm._v("\n                    - таклиф этаётган товар ва хизматлар ҳамда ўзининг\n                    фирмаси ҳақидаги маълумотларни сайтда эълон қилиш/\n                    сайтга жойлаш;\n                ")]),_vm._v(" "),_c('h3',{staticClass:"pdf-text"},[_vm._v("\n                    - таклиф этаётган товар ва хизматлар ҳамда ўзининг\n                    фирмаси ҳақидаги маълумотларни сайтда эълон қилиш/\n                    сайтга жойлаш;\n                ")]),_vm._v(" "),_c('h3',{staticClass:"pdf-text"},[_vm._v("\n                    - аввал киритилган маълумотлар/эълонларга ўзгартириш\n                    киритиш ёки уларни сайтдан ўчириш;\n                ")]),_vm._v(" "),_c('h3',{staticClass:"pdf-text"},[_vm._v("\n                    - бошқа фойдаланувчиларга смс-хабарномалар юбориш;\n                ")]),_vm._v(" "),_c('h3',{staticClass:"pdf-text"},[_vm._v("\n                    - агар мазкур Шартнома шартлари Хизмат кўрсатувчи\n                    томонидан бузилса, Хизмат кўрсатувчига этирознома\n                    йўллаш;\n                ")]),_vm._v(" "),_c('h3',{staticClass:"pdf-text"},[_vm._v("\n                    - мазкур шартнома шартлари Хизмат кўрсатувчи томонидан\n                    узурли сабабларсиз бир неча бор бузилса, мазкур\n                    Шартномада кўрсатилган Хизматлардан фойдаланишдан бош\n                    тортиш.\n                ")]),_vm._v(" "),_c('h3',{staticClass:"pdf-text-bold"},[_vm._v("\n                    5.1.2. Фойдаланувчининг мажбуриятлар:\n                ")]),_vm._v(" "),_c('h3',{staticClass:"pdf-text"},[_vm._v("\n                    - шартнома шартлари ва платформадан фойдаланиш\n                    талабларига қатъий риоя қилиш;\n                ")]),_vm._v(" "),_c('h3',{staticClass:"pdf-text"},[_vm._v("\n                    - платформага фақатгина ўз уставида кўрсатилган\n                    фаолиятларга оид маълумотларни жойлаш;\n                ")]),_vm._v(" "),_c('h3',{staticClass:"pdf-text"},[_vm._v("\n                    - платформага товарлар ҳақида ҳақиқатга тўғри келадиган\n                    маълумотларни жойлаш;\n                ")])]),_vm._v(" "),_c('div',{staticClass:"item-page"},[_c('h3',{staticClass:"pdf-text"},[_vm._v("\n                    - Мижозлар томонидан товарлар ёки кўрсатилган хизматлар\n                    бўйича эътирозлар келиб тушганда, Хизмат кўрсатувчининг\n                    иштирокисиз ҳал қилиш;\n                ")]),_vm._v(" "),_c('h3',{staticClass:"pdf-text"},[_vm._v("\n                    - Мижозларга сифатсиз ёки Ўзбекистон қонунчилиги бўйича\n                    ўрнатилган талабларга жавоб бермайдиган товарларни\n                    сотмаслик, агар юқорида тарифи келитирилган товарлар\n                    сотилганда/етказиб берилгандан мижоз томонидан товарни\n                    алмаштириш ҳақида талаб елиб тушгандан сўнг 10 иш кунида\n                    товарларни муқобилига алмаштириб бериш;\n                ")]),_vm._v(" "),_c('h3',{staticClass:"pdf-text"},[_vm._v("\n                    - сайтга кириш учун фойдаланадиган маълумотларини учинчи\n                    шахсларга топширмаслик ёки сотмаслик, шунингдек,\n                    Фойдаланувчи ўзининг аккаунти ва электрон почталаридан\n                    учинчи шахсларга фойдаланишга бермаслик;\n                ")]),_vm._v(" "),_c('h3',{staticClass:"pdf-text-bold"},[_vm._v("\n                    5.2. Хизмат кўрсатувчининг хуқуқ ва мажбуриятлари:\n                ")]),_vm._v(" "),_c('h3',{staticClass:"pdf-text-bold"},[_vm._v("\n                    5.2.1. Хизмат кўрсатувчининг хуқуқлари:\n                ")]),_vm._v(" "),_c('h3',{staticClass:"pdf-text"},[_vm._v("\n                    - Фойдаланувчидан Хизматларни бажариш учун мазкур\n                    шартнома ва платформадан фойдаланиш талаблари ва\n                    шартларини бажаришини талаб қилиш;\n                ")]),_vm._v(" "),_c('h3',{staticClass:"pdf-text"},[_vm._v("\n                    - кўрсатилган хизмат учун мазкур шартномада белгиланган\n                    тартибда ва муддатларни тўловни амалга оширилишини\n                    таълаб қилиш;\n                ")]),_vm._v(" "),_c('h3',{staticClass:"pdf-text"},[_vm._v("\n                    - шартноманинг 4.1.-бандида кўрсатилган муддатда тўлов\n                    амалга оширилмаган тақдирда Фойдаланувчини вақтинча\n                    сервирдан узиб қўйиш/ блоклаш;\n                ")]),_vm._v(" "),_c('h3',{staticClass:"pdf-text"},[_vm._v("\n                    - шартнома ва платформадан фойдаланиш қоидалари талаб ва\n                    шартларига мос келмайдиган маълумотларни Фойдаланувчини\n                    огохлантирмасдан ўчириб юбориш;\n                ")]),_vm._v(" "),_c('h3',{staticClass:"pdf-text"},[_vm._v("\n                    - шартнома бўйича тўлов бир йил давомида уч марта\n                    кечиктирилса, шартномани бир томонлама бекор қилиш.\n                ")]),_vm._v(" "),_c('h3',{staticClass:"pdf-text-bold"},[_vm._v("\n                    5.2.2. Хизмат кўрсатувчининг мажбуриятари:\n                ")]),_vm._v(" "),_c('h3',{staticClass:"pdf-text"},[_vm._v("\n                    - ушбу Шартномада кўрсатилган Хизматларни сифатли ва ўз\n                    вақтида тўла-тўкис бажариш;\n                ")]),_vm._v(" "),_c('h3',{staticClass:"pdf-text"},[_vm._v("\n                    - агар Хизматларни кўрсатиш жараёнида Хизмат кўрсатувчи\n                    мазкур Шартнома шартларидан чекинишга йўл қўйган бўлса,\n                    Фойдаланувчининг талаби билан аниқланган барча\n                    камчиликларни 5 иш куни муддатда текин тузатиб бериш.\n                ")]),_vm._v(" "),_c('h3',{staticClass:"pdf-text"},[_vm._v("\n                    Хизмат кўрсатувчи Ўзбекистон Республикаси Қонунчилигида\n                    кўзда тутилган бошқа ҳуқуқ ва мажбуриятларга эга бўлиши\n                    мумкин.\n                ")]),_vm._v(" "),_c('h1',{staticClass:"title-pdf"},[_vm._v("\n                    VI. ШАРТНОМАНИНГ БАЖАРИЛИШИ\n                ")]),_vm._v(" "),_c('h3',{staticClass:"pdf-text"},[_vm._v("\n                    6.1.Мазкур Шартнома қонун ҳужжатлари ва ушбу Шартнома\n                    шартлари ҳамда талабларига мувофиқ бажарилиши керак.\n                ")]),_vm._v(" "),_c('h3',{staticClass:"pdf-text"},[_vm._v("\n                    6.2.Фойдаланувчи томонидан тариф режасида кўрсатилган\n                    ойлик тўлов учун ўтказилган маблағ Хизмат кўрсатувчининг\n                    банк ҳисоб рақамига келиб тушган сана Фойдаланувчи\n                    томонидан мазкур ой учун белгиланган мажбурият\n                    бажарилган сана ҳисобланади.\n                ")]),_vm._v(" "),_c('h3',{staticClass:"pdf-text"},[_vm._v("\n                    6.3.Шартнома шартларини бажаришни бир томонлама рад\n                    этишга ёки Шартномани бир томонлама ўзгартиришга йўл\n                    қўйилмайди, қонун ҳужжатлари ҳамда мазкур шартномада\n                    назарда тутилган ҳоллар бундан мустасно.\n                ")]),_vm._v(" "),_c('h1',{staticClass:"title-pdf"},[_vm._v("\n                    VII. ТАРАФЛАРНИНГ ЖАВОБГАРЛИГИ\n                ")]),_vm._v(" "),_c('h3',{staticClass:"pdf-text"},[_vm._v("\n                    7.1.Тарафлар мазкур Шартнома бўйича ўз мажбуриятларини\n                    бажармаганлиги ёки етарли даражада бажармаганликлари\n                    учун қонунчиликда белгиланган тартибда жавобгар\n                    бўладилар.\n                ")])]),_vm._v(" "),_c('div',{staticClass:"item-page"},[_c('h3',{staticClass:"pdf-text"},[_vm._v("\n                    7.2.Фойдаланувчи томонидан платформада тарқатилган/эълон\n                    қилинган товарлар ҳақидаги маълумотлар юзасидан ёки\n                    Фойдаланувчи томонидан платформадан фойдаланган ҳолда\n                    Мижозларга сотилган товарлар юзасидан келиб чиқадиган\n                    ҳар қандай низолар Хизмат кўрсатувчининг иштирокисиз\n                    Фойдаланувчи томонидан ҳал этилади.\n                ")]),_vm._v(" "),_c('h3',{staticClass:"pdf-text"},[_vm._v("\n                    7.3.Хизмат кўрсатувчи Фойдаланувчи томонидан\n                    тарқатилган/ эълон қилинган маълумотлар бўйича\n                    жавобгарликни олмайди ҳамда шартноманинг 3.1.-.3.3. ва\n                    6.2. бандлари бўйича Мижозлар билан келиб чиқадиган ҳар\n                    қандай низоларни ҳал этишда иштирок этмайди.\n                ")]),_vm._v(" "),_c('h3',{staticClass:"pdf-text"},[_vm._v("\n                    7.4.мазкур шартнома бўйича мажбуриятларни ўз вақтида ёки\n                    тўлиқ бажармаслик ҳолатлари бўйича келиб чиққан\n                    жавобгарликлар “Хўжалик юритувчи субъектларнинг\n                    шартномавий-ҳуқуқий базаси тўғрисида”ги қонун бўйича\n                    тартибга солинади.\n                ")]),_vm._v(" "),_c('h1',{staticClass:"title-pdf"},[_vm._v("\n                    VIII. НИЗОЛАРНИ ҲАЛ ЭТИШ ТАРТИБИ\n                ")]),_vm._v(" "),_c('h3',{staticClass:"pdf-text"},[_vm._v("\n                    8.1.Фойдаланувчи Хизмат кўрсатиш бўйича эътирозларини\n                    хмзмат кўрсатишдаги камчилик аниқланган кундан бошлаб 10\n                    кун ичида Хизмат кўрсатувчига ёзма равишда билдириши\n                    лозим. Хизмат кўрсатувчи томонидан мазкур эътирознома 30\n                    банк иш кунида кўриб чиқилади.\n                ")]),_vm._v(" "),_c('h3',{staticClass:"pdf-text"},[_vm._v("\n                    8.2.Тарафлар ўртасида мазкур Шартнома билан тартибга\n                    солинган муносабатлар юзасидан ўзаро келишмовчиликлар\n                    вужудга келган тақдирда, мазкур зиддиятлар Тарафларнинг\n                    ўзаро келишуви асосида ҳал қилинади.\n                ")]),_vm._v(" "),_c('h3',{staticClass:"pdf-text"},[_vm._v("\n                    8.3.Низоларни ўзаро келишувлар йўли билан ҳал қилиш\n                    имкони бўлмаган тақдирда, ушбу шартномадан, хусусан уни\n                    тузиш, бажариш, ўзгартириш, бекор қилиш, бузиш ва\n                    ҳақиқий эмаслиги юзасидан келиб чиқадиган барча низолар,\n                    келишмовчиликлар тарафларнинг ихтиёрига кўра Медиация\n                    тартиб таомили орқали ҳал этиш чоралари кўрилади.\n                ")]),_vm._v(" "),_c('h3',{staticClass:"pdf-text"},[_vm._v("\n                    8.4.Низони Медиация тартиб таомили орқали ҳал этиш\n                    имконияти бўлмаганда уни кўриб чиқиш Хизмат\n                    кўрсатувчининг расмий манзили жойлашган ҳудуддаги\n                    ваколатли суд томонидан кўриб чиқилади.\n                ")]),_vm._v(" "),_c('h1',{staticClass:"title-pdf"},[_vm._v("\n                    IX. МАҲФИЙЛИК\n                ")]),_vm._v(" "),_c('h3',{staticClass:"pdf-text"},[_vm._v("\n                    9.1.Хизмат кўрсатувчи шартнома бўйича ўз мажбуриятини\n                    бажариш жараёнида ўзига ошкор бўлган маълумотлар маҳфий\n                    ҳисобланади.\n                ")]),_vm._v(" "),_c('h3',{staticClass:"pdf-text"},[_vm._v("\n                    9.2.Хизмат кўрсатувчи шартномавий мажбуриятини бажариш\n                    жараёнида Фойдаланувчидан олган шаҳсга доир\n                    маълумотларни маҳфийлигини ва сақланишини таъминлаш\n                    мажбуриятини олади.\n                ")]),_vm._v(" "),_c('h1',{staticClass:"title-pdf"},[_vm._v("\n                    Х. ФОРС МОЖОР\n                ")]),_vm._v(" "),_c('h3',{staticClass:"pdf-text"},[_vm._v("\n                    10.1. Тарафларнинг мазкур Шартномада белгиланган\n                    мажбуриятлари сув тошқини, ёнғин, зилзила, эпидемия ва\n                    бошқа табий офатлар, эмбарго, уруш еки ҳарбий\n                    харакатлар, мажбуриятларни бажаришга тўсқинлик қилувчи\n                    мазкур Шартнома имзолагандан сўнг кучга кирган қонун\n                    хужжатлари сабабли бажарилмаслиги хеч бир тарафнинг\n                    жавобгарлигини келтириб чиқармайди. Агар юқоридаги\n                    сабабларга кўра Тарафлар ўз мажбуриятларини мазкур\n                    Шартномада кўрсатилган муддатда бажара олмасалар,\n                    мажбуриятлар бажариш муддати Тарафлар учун қулай\n                    муддатга ўзгартирилади.\n                ")])]),_vm._v(" "),_c('div',{staticClass:"item-page"},[_c('h1',{staticClass:"title-pdf"},[_vm._v("\n                    ХI. ШАРТНОМАНИНГ АМАЛ ҚИЛИШ МУДДАТИ ВА ШАРТНОМАНИНГ\n                    БЕКОР ҚИЛИШ ТАРТИБИ\n                ")]),_vm._v(" "),_c('h3',{staticClass:"pdf-text"},[_vm._v("\n                    11.1.Шартнома тарафларнинг ваколатлик шахслари томонидан\n                    имзолангандан сўнг кучга киради, шартноманинг амал қилиш\n                    муддати шартнома кучга киргандан бошлаб бир йил. агар\n                    тарафлар ёки тарафлардан бири мазкур шартноманинг амал\n                    қилиш муддати тугаганидан сўнг 10 кун ичида шартномавий\n                    муносабатлар тугаганлиги ҳақида қарши тарафга хабарнома\n                    юбормаса, мазкур шартноманинг амал қилиш муддати айни шу\n                    шартлар билан яна бир йил муддатга узаяди.\n                ")]),_vm._v(" "),_c('h3',{staticClass:"pdf-text"},[_vm._v("\n                    11.2.Шартнома мазкур шартноманинг 5.2.1.-бандини\n                    қўллаган ҳолда ҳам Хизмат кўрсатувчининг ташаббуси билан\n                    бир томонлама бекор қилиниши мумкин. Шартнома бекор\n                    қилинганлиги ҳақида Фойдаланувчининг манзилига хабарнома\n                    юборилади ва платформадаги Фойдланувчининг аккаунтига\n                    чеклов ўрнатилади.\n                ")]),_vm._v(" "),_c('h3',{staticClass:"pdf-text"},[_vm._v("\n                    11.2.Мазкур шартнома тарафларнинг ўзаро келишиувига кўра\n                    бекор қилиниши мумкин.\n                ")]),_vm._v(" "),_c('h1',{staticClass:"title-pdf"},[_vm._v("\n                    XII ЯКУНИЙ ҚОИДАЛАР\n                ")]),_vm._v(" "),_c('h3',{staticClass:"pdf-text"},[_vm._v("\n                    12.1.Мазкур Шартнома 2 та (иккита) нусхада тузилиб, улар\n                    бир хил юридик кучга эга бўлади.\n                ")]),_vm._v(" "),_c('h3',{staticClass:"pdf-text"},[_vm._v("\n                    12.2.Хизмат кўрсатувчи Фойдаланувчи томонидан тақдим\n                    этилган ҳужжатлар соҳталиги аниқланган ҳолларда тегишли\n                    тартибда ваколатли органни огоҳлантириши мумкин.\n                ")]),_vm._v(" "),_c('h3',{staticClass:"pdf-text"},[_vm._v("\n                    12.3.Тарафларнинг ўзаро келишувига кўра, мазкур\n                    Шартномага ўзгартириш ва қўшимчалар киритилиши мумкин.\n                ")]),_vm._v(" "),_c('h3',{staticClass:"pdf-text"},[_vm._v("\n                    12.4.Мазкур Шартномага ўзгартириш ва қўшимчалар ёзма\n                    шаклда расмийлаштирилади ва Шартноманинг ажралмас қисми\n                    ҳисобланади.\n                ")]),_vm._v(" "),_c('h3',{staticClass:"pdf-text"},[_vm._v("\n                    12.5.Мазкур Шартномага талуқли иловалар, аризалар,\n                    эслатмалар ва бошқа ҳужжатлар шартноманинг ажралмас\n                    қисмидир ва Шартнома билан тенг ҳуқуқий кучга эга\n                    ҳисобланади.\n                ")]),_vm._v(" "),_c('h1',{staticClass:"title-pdf"},[_vm._v("\n                    XIII. ТАРАФЛАРНИНГ МАНЗИЛИ ВА БАНК РЕКВИЗИТЛАРИ:\n                ")]),_vm._v(" "),_c('div',{staticClass:"pdf-bottom"},[_c('div',{staticClass:"bottom-left"},[_c('h1',{staticClass:"title-pdf"},[_vm._v("\n                            ХИЗМАТ КЎРСАТУВЧИ “SARAY STORE” МЧЖ\n                        ")]),_vm._v(" "),_c('div',{staticClass:"bottom-flex"},[_c('h3',{staticClass:"pdf-text-bold"},[_vm._v("Манзил:")]),_vm._v(" "),_c('h3',{staticClass:"pdf-text"},[_vm._v("\n                                Тошкент шаҳар Чилонзор туман Гавҳар ко’часи\n                                151А уй\n                            ")])]),_vm._v(" "),_c('div',{staticClass:"bottom-flex"},[_c('h3',{staticClass:"pdf-text-bold"},[_vm._v("Банк:")]),_vm._v(" "),_c('h3',{staticClass:"pdf-text"},[_vm._v("\n                                АТ \"Aloqabank\" Миробод филлиали\n                            ")])]),_vm._v(" "),_c('div',{staticClass:"bottom-flex"},[_c('h3',{staticClass:"pdf-text-bold"},[_vm._v("х/р:")]),_vm._v(" "),_c('h3',{staticClass:"pdf-text"},[_vm._v("\n                                20208000905354471001\n                            ")])]),_vm._v(" "),_c('div',{staticClass:"bottom-flex"},[_c('h3',{staticClass:"pdf-text-bold"},[_vm._v("МФО:")]),_vm._v(" "),_c('h3',{staticClass:"pdf-text"},[_vm._v("\n                                01091\n                            ")])]),_vm._v(" "),_c('div',{staticClass:"bottom-flex"},[_c('h3',{staticClass:"pdf-text-bold"},[_vm._v("ИНН:")]),_vm._v(" "),_c('h3',{staticClass:"pdf-text"},[_vm._v("\n                                308 230 483\n                            ")])]),_vm._v(" "),_c('div',{staticClass:"bottom-flex"},[_c('h3',{staticClass:"pdf-text-bold"},[_vm._v("Тел:")]),_vm._v(" "),_c('h3',{staticClass:"pdf-text"},[_vm._v("\n                                +998994413042\n                            ")])]),_vm._v(" "),_c('div',{staticClass:"bottom-flex"},[_c('h3',{staticClass:"pdf-text-bold"},[_vm._v("Э-почта:")]),_vm._v(" "),_c('h3',{staticClass:"pdf-text"},[_vm._v("\n                                tujjorbase@gmail.com\n                            ")])])]),_vm._v(" "),_c('div',{staticClass:"bottom-right"},[_c('h1',{staticClass:"title-pdf"},[_vm._v("\n                            ФОЙДАЛАНУВЧИ "+_vm._s(_vm.shopCreate.shopName)+"\n                        ")]),_vm._v(" "),_c('div',{staticClass:"bottom-flex"},[_c('h3',{staticClass:"pdf-text-bold"},[_vm._v("Манзил:")]),_vm._v(" "),_c('h3',{staticClass:"pdf-text"},[_vm._v("\n                                "+_vm._s(_vm.shopCreate.address)+"\n                            ")])]),_vm._v(" "),_c('div',{staticClass:"bottom-flex"},[_c('h3',{staticClass:"pdf-text-bold"},[_vm._v("Банк:")]),_vm._v(" "),_c('h3',{staticClass:"pdf-text"},[_vm._v("\n                                "+_vm._s(_vm.shopCreate.bankName)+"\n                            ")])]),_vm._v(" "),_c('div',{staticClass:"bottom-flex"},[_c('h3',{staticClass:"pdf-text-bold"},[_vm._v("х/р:")]),_vm._v(" "),_c('h3',{staticClass:"pdf-text"},[_vm._v("\n                                "+_vm._s(_vm.shopCreate.shopId)+"\n                            ")])]),_vm._v(" "),_c('div',{staticClass:"bottom-flex"},[_c('h3',{staticClass:"pdf-text-bold"},[_vm._v("МФО:")]),_vm._v(" "),_c('h3',{staticClass:"pdf-text"},[_vm._v("\n                                "+_vm._s(_vm.shopCreate.mfo)+"\n                            ")])]),_vm._v(" "),_c('div',{staticClass:"bottom-flex"},[_c('h3',{staticClass:"pdf-text-bold"},[_vm._v("ИНН:")]),_vm._v(" "),_c('h3',{staticClass:"pdf-text"},[_vm._v("\n                                "+_vm._s(_vm.shopCreate.inn)+"\n                            ")])]),_vm._v(" "),_c('div',{staticClass:"bottom-flex"},[_c('h3',{staticClass:"pdf-text-bold"},[_vm._v("Тел:")]),_vm._v(" "),_c('h3',{staticClass:"pdf-text"},[_vm._v("\n                                "+_vm._s(_vm.shopCreate.phone)+"\n                            ")])]),_vm._v(" "),_c('div',{staticClass:"bottom-flex"},[_c('h3',{staticClass:"pdf-text-bold"},[_vm._v("Э-почта:")]),_vm._v(" "),_c('h3',{staticClass:"pdf-text"},[_vm._v("\n                                "+_vm._s(_vm.shopCreate.email)+"\n                            ")])])])])])])]),_vm._ssrNode(" "+((_vm.showSectionTwo && _vm.shopCreate.shopStatus)?("<section class=\"shop__log__box\"><div><p>"+_vm._ssrEscape(_vm._s(_vm.$t('maguspeshno')))+"</p></div></section>"):"<!---->"))],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/business/index.vue?vue&type=template&id=a9578a02&

// EXTERNAL MODULE: ./components/UI/BaseLoading.vue + 4 modules
var BaseLoading = __webpack_require__(85);

// EXTERNAL MODULE: external "vue-html2pdf"
var external_vue_html2pdf_ = __webpack_require__(78);
var external_vue_html2pdf_default = /*#__PURE__*/__webpack_require__.n(external_vue_html2pdf_);

// EXTERNAL MODULE: external "vuelidate/lib/validators"
var validators_ = __webpack_require__(77);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/business/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var businessvue_type_script_lang_js_ = ({head:{title:"Авторизация — Tujjor. Низкие цены и широкий ассортимент!",meta:[{hid:"description",name:"description",content:"Авторизация - Tujjor"}]},middleware:"auth",components:{BaseLoading: BaseLoading["default"],VueHtml2pdf: external_vue_html2pdf_default.a},data(){return{isGet:false,loadSpinner:false,shopAccess:{name:"",user:"",phone:"",email:"",companyName:"",comment:"",id:""},code:"",showSectionTwo:false,sendReqModal:false,modalShow:false,check1:false,check2:false,shopCreate:{fullNameDirector:"",shopName:"",shopId:"",address:"",phone:"",bankName:"",mfo:"",inn:"",email:"",fileContract:"",fileCertificate:"",user:"",sendReqModal:false,modalShow:false,modalSend:false,shopStatus:false},options:{}};},validations:{shopAccess:{name:{required: validators_["required"]},phone:{required: validators_["required"]},companyName:{required: validators_["required"]}},shopCreate:{fullNameDirector:{required: validators_["required"]},shopName:{required: validators_["required"]},shopId:{required: validators_["required"]},address:{required: validators_["required"]},phone:{required: validators_["required"]},bankName:{required: validators_["required"]},mfo:{required: validators_["required"]},inn:{required: validators_["required"]},email:{required: validators_["required"]}}},methods:{async confirmEdit(){this.shopCreate.modalShow=!this.shopCreate.modalShow;await this.$axios.$delete("/shop/me");},generateReport(){this.$v.shopCreate.$touch();this.check2=true;if(!this.$v.shopCreate.$invalid){this.shopCreate.user=this.$auth.user._id;this.shopCreate.phone=this.shopCreate.phone.replace(/[^0-9]/g,"");this.$axios.$post("/shop/temp/create",this.shopCreate).then(res=>{if(res.success){this.code=res.data.code;this.$refs.html2Pdf.generatePdf();this.$router.push({name:`application___${this.$i18n.locale}`,query:{code:res.data.code}});}});}},async sendRequest(){this.shopAccess.phone=this.shopAccess.phone.replace(/[^0-9]/g,"");this.$v.shopAccess.$touch();this.check1=true;if(!this.$v.shopAccess.$invalid){this.loadSpinner=true;try{if(this.shopAccess.id){await this.$axios.$delete("application/"+this.shopAccess.id).then(response=>{if(response.success)console.log("Deleting done!");}).catch(err=>console.error(err));await this.sendApplication();}else{await this.sendApplication();}}catch(err){console.log(err);}}},sendApplication(){this.shopAccess.user=this.$auth.user._id;this.$axios.$post("application/create",this.shopAccess).then(response=>{if(response.success){this.loadSpinner=false;this.sendReqModal=true;}else{throw new Error("Could not save data!");}}).catch(error=>{// handle error
console.log(error);});},handleFileContract(){const file=this.$refs.shopContract.files[0];this.shopCreate.fileContract=file;},handleFileLicense(){const file=this.$refs.shopLicense.files[0];this.shopCreate.fileCertificate=file;},createFormData(){const formData=new FormData();formData.append("address",this.shopCreate.address);formData.append("bankName",this.shopCreate.bankName);formData.append("email",this.shopCreate.email);formData.append("fullNameDirector",this.shopCreate.fullNameDirector);formData.append("inn",this.shopCreate.inn);formData.append("phone",this.shopCreate.phone);formData.append("shopId",this.shopCreate.shopId);formData.append("shopName",this.shopCreate.shopName);formData.append("fileCertificate",this.shopCreate.fileCertificate);formData.append("fileContract",this.shopCreate.fileContract);formData.append("user",this.$auth.user._id);return formData;},formValidation(){const fullName=!!this.shopCreate.fullNameDirector;},// Search is Shop Created Before if it's OK store shop id for deleting!
async isHasShop(){try{await this.$axios.$get("shop/user/me").then(res=>{if(res.success){this.shopCreate.id=res.data._id;if(!!res.data.status){this.shopCreate.shopStatus=true;console.log("shop status",this.shopCreate.shopStatus);}}}).catch(err=>console.error(err));}catch(err){console.log(err);}},// Delete shop before update data of shop
async deleteShop(){try{await this.$axios.$delete("shop/"+this.shopCreate.id).then(res=>{if(res.success){this.shopCreate.id="";}}).catch(err=>console.error(err));}catch(err){console.log(err);}},// HTTP request for Creating Shop
async sendCreateShop(){this.loadSpinner=true;this.shopCreate.phone=this.shopCreate.phone.replace(/[^0-9]/g,"");const formData=this.createFormData();console.log(formData);try{await this.isHasShop();if(!!this.shopCreate.id)await this.deleteShop();await this.$axios.$post("shop/create",formData,{headers:{"Access-Control-Allow-Origin":"*","Access-Control-Allow-Methods":"GET, POST, PATCH, PUT, DELETE, OPTIONS","Access-Control-Allow-Headers":"Origin, Content-Type, X-Auth-Token"}}).then(response=>{if(response.success){this.loadSpinner=false;this.shopCreate.sendReqModal=true;}else{throw new Error("Could not save data!");}}).catch(error=>{this.loadSpinner=false;// handle error
console.log(error);});}catch(err){console.log(err);}console.log("end");}},async mounted(){const user=this.$auth.user;this.shopAccess.name=user.name;this.shopAccess.phone=user.phone;this.shopAccess.email=user.email;this.shopAccess.user=user._id;console.log("user",user);try{await this.$axios.$get("application/me").then(async response=>{if(!!response.data){this.modalShow=true;this.shopAccess.companyName=response.data.companyName;this.shopAccess.comment=response.data.comment;this.shopAccess.id=response.data._id;if(!!response.data.status){this.showSectionTwo=true;await this.isHasShop();if(!!this.shopCreate.id)this.shopCreate.modalShow=true;}}else{throw new Error("Could not save data!");}}).catch(error=>{// handle error
console.log(error);});}catch(err){console.log(err);}this.isGet=true;}});
// CONCATENATED MODULE: ./pages/business/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_businessvue_type_script_lang_js_ = (businessvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/business/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(204)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_businessvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "80ea52f8"
  
)

/* harmony default export */ var business = __webpack_exports__["default"] = (component.exports);

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


/***/ })

};;
//# sourceMappingURL=index.js.map