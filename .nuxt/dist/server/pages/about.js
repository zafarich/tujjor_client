exports.ids = [22,1,20];
exports.modules = {

/***/ 107:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(129);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("72b2f111", content, true, context)
};

/***/ }),

/***/ 128:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_nuxt_webpack_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AboutUs_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(107);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_nuxt_webpack_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AboutUs_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_nuxt_webpack_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AboutUs_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_nuxt_webpack_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AboutUs_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_nuxt_webpack_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AboutUs_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 129:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".fixvh{position:fixed;top:0;left:0;width:100%;height:100vh;z-index:10;background-color:#333;opacity:.6}button.btn-sm{background:#fbfcff;border:1px solid #e5f1fb;border-radius:6px;padding:10px 20px;font-weight:500;font-size:14px;color:#333;margin-right:10px}button.btn-sm-active{background:#f7931e;border:1px solid transparent;color:#fff}.modal-card{background-color:#fff;border-radius:8px;padding:15px 20px;position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);z-index:12}.modal-card button.otmen{background:#c5c5c5!important}.modal-card .modal-title{display:flex;justify-content:space-between;align-items:center;margin-bottom:20px}.modal-card .modal-title h2{font-size:20px;color:#333}.modal-card .modal-title .times{color:#333;font-size:16px}.modal-card .modal-title .times:hover{color:#f7931e}@media(max-width:475px){.modal-card{width:90%!important}}button{cursor:pointer;border:none;background-color:transparent}.btn-simple-active{background:#f7931e;border:1px solid transparent;color:#fff}h6.error-text{display:none;font-weight:400;font-size:13px;line-height:14px;margin-top:4px;color:#f94040}div.input-form{margin-bottom:15px}div.input-form div.input-rel{position:relative}div.input-form div.input-rel button.btn-icon{position:absolute;right:10px;top:50%;transform:translateY(-50%)}div.input-form div.input-rel button.btn-icon .icon{font-size:16px;color:rgba(51,51,51,.2)}div.input-form input{width:100%;height:40px;border:1px solid #aaa;border-radius:8px;font-size:16px;padding:0 15px;font-weight:500}div.input-form input:hover{border:1px solid #888}div.input-form input:focus{outline:none;border:1px solid #f7931e}div.form-error input{border:1px solid #f94040!important}div.form-error .error-text{display:block!important}.btn-simple{background:#fff;border:1px solid #f7931e;border-radius:6px;padding:8px 15px;display:inline-block;font-weight:500;font-size:14px;color:#f7931e}.btn-simple:hover{color:#fff;background-color:#f7931e}@media(max-width:543px){.popular__container .img-fluid{height:170px!important;-o-object-fit:cover!important;object-fit:cover!important}.other__item__banner--carousel .b-carousel .carousel-inner .b-carousel-slide img{min-height:250px!important}}.other__item__banner--carousel .b-carousel .carousel-inner .b-carousel-slide img{min-height:450px}.success-info{position:fixed;top:10px;right:20px;width:320px;z-index:12345}div.card-row{display:flex;margin:0 -10px;flex-wrap:wrap}.hover-shadow:hover{box-shadow:0 1px 10px rgba(0,0,0,.18)}div.card-5{width:20%;padding:0 10px}div.card-4{width:25%;padding:0 10px}div.card-3{width:33.3333333333%;padding:0 10px}@media(max-width:1020px){div.card-4,div.card-5{width:33.3333333333%}}@media(max-width:768px){div.card-3,div.card-4,div.card-5{width:50%}.catalog__container{padding-top:5px!important}.filtr__section .catalog__page__filtr__box{position:relative!important;top:unset!important}.catalog__container .catalog__filtraiton__box .filtraiton__form__box .filtraiton__form--submit{margin-bottom:0!important}.catalog__container .catalog__page__about{padding-left:0!important}}@-webkit-keyframes move__360{0%{transform:translateX(0deg)}to{transform:translateX(1turn)}}@keyframes move__360{0%{transform:translateX(0deg)}to{transform:translateX(1turn)}}h6.error-text{font-size:12px;color:red;margin-bottom:0}h1.title-form{font-size:24px;text-align:center}.popular__container{margin-top:40px}.popular__container .popular__heading{font-family:Roboto,sans-serif;font-weight:500;font-size:48px;color:#f7931e;margin-bottom:40px;text-shadow:0 0 3px rgba(247,147,30,.3);display:inline-block}.popular__container .popular__item-box{display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap}.popular__container .popular__item-box:after{content:\"\";flex:0 1 32%}.popular__container .popular__item-box .popular__items{flex:0 0 auto;width:222px;height:370px;background-color:#fff;box-shadow:0 1px 3px rgba(0,0,0,.12);border-radius:5px;overflow:hidden;margin:0 2px 37px;cursor:pointer;transition:all .2s}.popular__container .popular__item-box .popular__items:hover{transform:scale(1.07)}.popular__container .popular__item-box .popular__items:hover:after{opacity:0}.popular__container .popular__item-box .popular__items:active{outline:none;transform:scale(1.03)}.popular__container .popular__item-box .popular__items .popular__items__img{width:222px;height:222px}.popular__container .popular__item-box .popular__items .popular__items__desription{padding-left:16px;display:flex;flex-direction:column;justify-content:flex-start;position:relative}.popular__container .popular__item-box .popular__items .popular__items__desription .name__rating{margin-top:2px;display:flex;justify-content:space-between;align-items:center;padding-right:10px}.popular__container .popular__item-box .popular__items .popular__items__desription .name__rating .magazine__item--rating{display:flex;align-items:center}.popular__container .popular__item-box .popular__items .popular__items__desription .name__rating .magazine__item--rating img{width:12px;height:12px;margin-right:2px}.popular__container .popular__item-box .popular__items .popular__items__desription .name__rating .magazine__item--rating span{color:#666;opacity:.7;font-size:10px}.popular__container .popular__item-box .popular__items .popular__items__desription--name{margin-top:5px;font-family:Roboto;font-weight:500;font-size:14px;line-height:16px;opacity:.7;color:#666}.popular__container .popular__item-box .popular__items .popular__items__desription--categorie{margin:9px 0;font-family:Roboto;font-weight:700;font-size:16px;line-height:100%;color:#000;height:60px}.popular__container .popular__item-box .popular__items .popular__items__desription--price{font-family:Roboto;font-weight:700;font-size:20px;line-height:100%;color:#219ebc}.popular__container .popular__item-box .popular__items .popular__items__desription--old--price{margin-bottom:2px;font-size:14px;color:#f7931e;text-decoration:line-through}.popular__container .popular__btn,.popular__container .popular__btn:link,.popular__container .popular__btn:visited{display:block;border-radius:5px;transition:all .2s;width:224px;height:50px;margin:20px auto 0;text-align:center;padding:10px;text-decoration:none;font-family:inherit;font-weight:500;font-size:18px;color:hsla(0,0%,100%,.9);background-color:#f7931e;border:none;cursor:pointer}.popular__container .popular__btn:hover{transform:scale(1.07)}.popular__container .popular__btn:hover:after{opacity:0}.popular__container .popular__btn:active{outline:none;transform:scale(1.03)}.popular__container .popular__btn:active,.popular__container .popular__btn:hover{background-color:#fff;color:#f7931e;border:1px solid #f7931e}.popular__container .popular__dropdown__box{position:relative}.popular__container .popular__dropdown__box .popular__dropdown--btn{width:170px;height:36px;border:1px solid #f7931e;border-radius:5px;background-color:transparent;padding:0 10px;font-family:Roboto;font-weight:500;font-size:16px;color:#f7931e;display:flex;justify-content:space-between;align-items:center}.popular__container .popular__dropdown__box .popular__dropdown--btn:hover+.popular__dropdown__content{visibility:visible;opacity:1}.popular__container .popular__dropdown__box .popular__dropdown__content{position:absolute;left:0;top:36px;width:170px;display:flex;flex-direction:column;justify-content:center;transition:all .2s;visibility:hidden;opacity:0;border-radius:5px;overflow:hidden;box-shadow:0 2px 6px rgba(0,0,0,.3)}.popular__container .popular__dropdown__box .popular__dropdown__content .popular__dropdown--link{color:#f7931e;background-color:#fcf6f6;padding:5px;text-decoration:none}.popular__container .popular__dropdown__box .popular__dropdown__content .popular__dropdown--link:active,.popular__container .popular__dropdown__box .popular__dropdown__content .popular__dropdown--link:hover{font-weight:500}.popular__container .popular__dropdown__box .popular__dropdown__content:active,.popular__container .popular__dropdown__box .popular__dropdown__content:hover{visibility:visible;opacity:1}@media only screen and (max-width:1440px)and (min-width:1200px){.popular__container .popular__item-box{padding:0 4px}}@media only screen and (max-width:1200px)and (min-width:765px){.popular__container{padding:20px}.popular__container .popular__item-box .popular__items{width:229px;height:381.67px;margin-bottom:22px}.popular__container .popular__item-box .popular__items .popular__items__img{width:230px;height:230px}}@media only screen and (max-width:765px){.popular__container{padding:16px}.popular__container .popular__heading{font-size:24px;margin-bottom:28px}.popular__container .popular__item-box .popular__items{width:164px;height:273px;margin-bottom:14px}.popular__container .popular__item-box .popular__items .popular__items__img{width:164px;height:164px}.popular__container .popular__item-box .popular__items .popular__items__desription{padding-left:12px}.popular__container .popular__item-box .popular__items .popular__items__desription--name{margin-top:3.7px;font-size:10px}.popular__container .popular__item-box .popular__items .popular__items__desription--categorie{margin:6.6px 0 0;font-size:12px;height:50px;padding:0}.popular__container .popular__item-box .popular__items .popular__items__desription--price{font-size:14px}.popular__container .popular__item-box .popular__items .popular__items__desription--old--price{font-size:10px}.popular__container .popular__btn,.popular__container .popular__btn:link,.popular__container .popular__btn:visited{width:160px;height:35px;margin-top:18px;padding:8px;font-size:12px}}@media only screen and (max-width:365px){.popular__container{padding:14px}.popular__container .popular__heading{font-size:22px;margin-bottom:12px}.popular__container .popular__item-box .popular__items{width:140px;height:245px}.popular__container .popular__item-box .popular__items .popular__items__img{width:140px;height:140px}.popular__container .popular__item-box .popular__items .popular__items__desription--categorie{margin-top:3.6px;font-size:12px;height:2.8em;padding:0}.popular__container .popular__item-box .popular__items .popular__items__desription--price{font-size:12px}.popular__container .popular__item-box .popular__items .popular__items__desription--old--price{font-size:9px;bottom:17px}}div.title-box{padding:40px 0}div.title-box ul li,div.title-box ul li a{display:inline-block;font-weight:400;font-size:15px;line-height:18px;color:#000}div.title-box ul li a:hover{color:#f7931e}div.fixvh-category{z-index:100;width:100%;background-color:#333;opacity:.5}div.category-modal,div.fixvh-category{position:fixed;top:0;left:0;height:100vh;z-index:1000}div.category-modal{width:90%;transform:translateX(0);opacity:1;transition:.2s}div.category-modal div.category-nav{width:100%;height:100%;background-color:#fff;position:relative;z-index:101;display:flex;padding:15px 0}div.category-modal div.category-nav button.close-btn{position:absolute;width:30px;height:30px;border-radius:100%;background-color:#f7931e;border:none;right:-41px;top:8px;z-index:101}div.category-modal div.category-nav button.close-btn .icon-times{color:#fff}div.category-modal div.category-nav div.scroll-modal{overflow-y:scroll;overflow-x:hidden}div.category-modal div.category-nav div.category-left{width:400px;padding:0 15px;border-right:1px solid #bbb}div.category-modal div.category-nav div.category-left ul{list-style-type:none;padding-right:15px}div.category-modal div.category-nav div.category-left li button{display:block;padding:8px 15px;border-radius:5px;font-size:16px;color:#333;font-weight:500;border:none;background-color:transparent;width:100%;text-align:left}div.category-modal div.category-nav div.category-left li button:hover{color:#f7931e}div.category-modal div.category-nav div.category-left li.active-li button{background-color:#f7931e;color:#fff}div.category-modal div.category-nav div.category-content{width:calc(100% - 400px);padding:0 30px;position:relative}div.category-modal div.category-nav div.category-content h3.category-title{font-size:24px;font-weight:500;margin-bottom:25px}div.category-modal div.category-nav div.category-content div.visible-all a{font-size:16px;color:#888;margin-bottom:5px;display:block}div.category-modal div.category-nav div.category-content a{transition:.2s}div.category-modal div.category-nav div.category-content ul{list-style-type:none;margin-bottom:25px}div.category-modal div.category-nav div.category-content ul a{font-size:16px;color:#888;margin-bottom:5px;display:block}div.category-modal div.category-nav div.category-content a.click-parent{font-size:18px;margin-bottom:10px;color:#333;display:block;font-weight:500}div.category-modal div.category-nav div.category-content a:hover{color:#f7931e!important}div.category-modal div.category-nav div.scroll-modal::-webkit-scrollbar{width:5px}div.category-modal div.category-nav div.scroll-modal::-webkit-scrollbar-track{background:#f1f1f1}div.category-modal div.category-nav div.scroll-modal::-webkit-scrollbar-thumb{background:#f7931e;border-radius:5px}div.category-modal div.category-nav div.scroll-modal::-webkit-scrollbar-thumb:hover{background:#f7931e}div.hidden-category{transform:translateX(-104%);opacity:0}div.category-mobile{position:fixed;z-index:1234454545;top:0;left:0;width:100%;height:100vh;background-color:#fff;padding:15px}div.category-mobile a.visible-all-mobile{font-size:16px;color:#333}div.category-mobile div.title-t{display:flex;justify-content:space-between;align-items:center}div.category-mobile div.title-t h3{font-size:24px;margin-bottom:0}div.category-mobile div.title-t button{border:none;background-color:transparent}div.category-mobile div.title-t button .close-mobile{font-size:26px;color:#f7931e}div.category-mobile div.category-acc{margin-top:20px;max-height:calc(100vh - 100px);overflow-y:scroll}div.category-mobile div.category-acc div.acc-item{margin-bottom:5px}div.category-mobile div.category-acc div.acc-item button{width:100%;display:flex;justify-content:space-between;align-items:center;background:#fff7ec;padding:10px 15px;border-radius:5px;border:1px solid #fff7ec}div.category-mobile div.category-acc div.acc-item button b{font-size:18px}div.category-mobile div.category-acc div.acc-item button .icon-down{font-size:18px;color:#f7931e}div.category-mobile div.category-acc div.acc-item button .rotate{transform:rotate(-180deg)}div.category-mobile div.category-acc div.acc-item div.acc-content{padding:15px}div.category-mobile div.category-acc div.acc-item div.acc-content ul{list-style-type:none}div.category-mobile div.category-acc div.acc-item div.acc-content ul li a{color:#333;display:block;font-size:16px!important;font-weight:700;margin-bottom:5px}div.category-mobile div.category-acc div.acc-item div.acc-content ul li a:active{color:#f7931e}div.category-mobile div.category-acc div.acc-item div.acc-content ul li ul{margin-bottom:15px}div.category-mobile div.category-acc div.acc-item div.acc-content ul li ul li a{font-weight:400;color:#777}@media(max-width:800px){div.category-modal div.category-nav div.category-left{width:280px}div.category-modal div.category-nav div.category-content{width:calc(100% - 280px)}}#about__section{margin-top:0;padding-top:0}#about__section #about__head{margin:0;font-size:48px}#about__section .about__us__box{margin:30px 0}#about__section .about__us__box h1{font-size:30px}#about__section .about__us__box .about__us--text{display:block;margin:20px 0;font-size:16px;line-height:1.3;color:#000}#about__section .about__us__box .about__us--text h1{font-size:22px}#about__section .about__us__box .about__us--text .image img{display:block;margin-left:auto;margin-right:auto;max-width:100%}@media only screen and (max-width:560px){#about__section #about__head{font-size:36px}#about__section .about__us__box{margin:20px 0}#about__section .about__us__box h1{font-size:26px}#about__section .about__us__box .about__us--text{margin:0}#about__section .about__us__box .about__us--text h1{font-size:20px}}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 190:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/AboutUs.vue?vue&type=template&id=11edcace&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',[(!_vm.isGet)?_c('base-loading'):_vm._e(),_vm._ssrNode(" "),_vm._ssrNode("<section>","</section>",[_vm._ssrNode("<div class=\"container\">","</div>",[_vm._ssrNode("<div class=\"title-box title__about__us\">","</div>",[_vm._ssrNode("<ul>","</ul>",[_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{attrs:{"to":"/"}},[_vm._v(_vm._s(_vm.$t("home")))]),_vm._ssrNode("\n                        /\n                    ")],2),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{attrs:{"to":"#"}},[_vm._v(_vm._s(_vm.$t("about"))+" ")])],1)],2)])]),_vm._ssrNode(" <section id=\"about__section\" class=\"container popular__container about__section\"><div id=\"about__head\" class=\"popular__heading about__heading\">"+_vm._ssrEscape("\n                "+_vm._s(_vm.$t("about"))+"\n            ")+"</div> "+(_vm._ssrList((_vm.aboutUsArray),function(aboutUsItem){return ("<div class=\"about__us__box\"><h1 class=\"about__us--title\">"+_vm._ssrEscape("\n                    "+_vm._s(aboutUsItem.title.uz)+"\n                    ")+"</h1> <div class=\"about__us--text\">"+(_vm._s(aboutUsItem.description.uz))+"</div></div>")}))+"</section>")],2)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/AboutUs.vue?vue&type=template&id=11edcace&

// EXTERNAL MODULE: ./components/UI/BaseLoading.vue + 4 modules
var BaseLoading = __webpack_require__(85);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/AboutUs.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var AboutUsvue_type_script_lang_js_ = ({components:{BaseLoading: BaseLoading["default"]},data(){return{aboutUsArray:[],isGet:false,error:null};},methods:{},computed:{},async mounted(){this.isGet=false;this.error=null;const ip=await this.$axios.$get("http://cdn.tujjor.org/api/info/client/all").then(response=>{if(response.success){this.isGet=true;this.aboutUsArray=response.data;return response;}else{throw new Error("Could not save data!");}}).catch(error=>{// handle error
console.log(error);this.error=error.message;});}});
// CONCATENATED MODULE: ./components/AboutUs.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_AboutUsvue_type_script_lang_js_ = (AboutUsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/AboutUs.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(128)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_AboutUsvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "12d5d3c2"
  
)

/* harmony default export */ var AboutUs = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 259:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/about.vue?vue&type=template&id=4eb77e2e&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('about-us')],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/about.vue?vue&type=template&id=4eb77e2e&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/about.vue?vue&type=script&lang=js&
//
//
//
//
//
//
/* harmony default export */ var aboutvue_type_script_lang_js_ = ({head:{title:"О нас — Tujjor. Низкие цены и широкий ассортимент!",meta:[{hid:"description",name:"description",content:"О нас - Tujjor"}]}});
// CONCATENATED MODULE: ./pages/about.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_aboutvue_type_script_lang_js_ = (aboutvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/about.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_aboutvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "66048c2a"
  
)

/* harmony default export */ var about = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {AboutUs: __webpack_require__(190).default})


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
//# sourceMappingURL=about.js.map