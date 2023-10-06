exports.ids = [3];
exports.modules = {

/***/ 25:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(27);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("297b0e1f", content, true, context)
};

/***/ }),

/***/ 26:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Testimonials_vue_vue_type_style_index_0_id_18f72da3_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(25);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Testimonials_vue_vue_type_style_index_0_id_18f72da3_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Testimonials_vue_vue_type_style_index_0_id_18f72da3_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Testimonials_vue_vue_type_style_index_0_id_18f72da3_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Testimonials_vue_vue_type_style_index_0_id_18f72da3_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 27:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".commas[data-v-18f72da3]{border-radius:9999px;display:flex;font-size:6em;height:45px;justify-content:center;left:-.3em;line-height:1;padding:0;position:absolute;top:.1em;width:45px}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 28:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=template&id=66c325c2&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "font-body"
  }, [_c('Hero'), _vm._ssrNode(" "), _c('Skills'), _vm._ssrNode(" "), _c('Oss', {
    attrs: {
      "projects": _vm.projects
    }
  }), _vm._ssrNode(" "), _c('Testimonials')], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/index.vue?vue&type=template&id=66c325c2&

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(3);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./components/home/Hero.vue?vue&type=template&id=0fce808c&
var Herovue_type_template_id_0fce808c_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('section', {
    staticClass: "text-gray-600 border-b dark:border-gray-700 bg-white dark:bg-dark"
  }, [_vm._ssrNode("<div class=\"container max-w-screen-lg mx-auto flex pt-36 pb-12 md:pb-20 md:flex-row flex-col items-center justify-bteween px-5\">", "</div>", [_vm._ssrNode("<div class=\"lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left items-center text-center\">", "</div>", [_vm._ssrNode("<h3 class=\"mb-1 text-sm font-semibold text-green-700 dark:text-green-600\"><span class=\"text-xl mr-1\">👋</span>\n        Hi, Welcome There!\n      </h3> <h1 class=\"font-bold leading-none text-4xl lg:text-5xl text-gray-900 dark:text-white\">\n        I'm Omar EL AMRANI\n      </h1> <span class=\"mt-1 mb-4 w-10 h-1 bg-green-700\"></span> <p class=\"text-md mb-8 leading-relaxed text-gray-600 dark:text-gray-300\">\n        WEB software developer, graduated from a technical school specializing in IT development and computer systems.\n        <br class=\"block mt-2\">\n        Experienced in Web Development to provide a robust web application for\n        high-level overviews.\n      </p> "), _vm._ssrNode("<div class=\"flex justify-center\">", "</div>", [_c('NuxtLink', {
    staticClass: "inline-flex shadow text-white bg-green-700 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded",
    attrs: {
      "to": "/contact"
    }
  }, [_vm._v("\n          Get In Touch\n        ")]), _vm._ssrNode(" <a target=\"_blank\" href=\"/CV_RESUME_Omar_ELAMRANI.pdf\" class=\"ml-4 inline-flex shadow text-green-700 dark:text-green-500 border border-green-700 dark:border-green-500 py-2 px-6 focus:outline-none hover:bg-green-700 hover:text-white hover:border-0 dark:hover:bg-green-700 dark:hover:text-white dark:hover:border-0 rounded\">\n          View resume\n        </a>")], 2)], 2), _vm._ssrNode(" <div class=\"hidden md:flex\"><img alt=\"hero\" src=\"hero.svg\" class=\"object-cover h-64\"></div>")], 2)]);
};
var Herovue_type_template_id_0fce808c_staticRenderFns = [];

// CONCATENATED MODULE: ./components/home/Hero.vue?vue&type=template&id=0fce808c&

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/home/Hero.vue

var script = {}


/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  script,
  Herovue_type_template_id_0fce808c_render,
  Herovue_type_template_id_0fce808c_staticRenderFns,
  false,
  null,
  null,
  "f9651c06"
  
)

/* harmony default export */ var Hero = (component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./components/home/Skills.vue?vue&type=template&id=340bc14d&
var Skillsvue_type_template_id_340bc14d_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('section', {
    staticClass: "text-gray-600 border-b dark:border-gray-700 bg-gray-50 dark:bg-dark"
  }, [_vm._ssrNode("<div class=\"container max-w-screen-lg mx-auto py-12 px-5\"><div class=\"md:items-start items-center flex w-full mb-4 flex-col\"><h1 class=\"text-3xl font-medium leading-none title-font dark:text-gray-200 text-gray-900\">\n        Tech Stack\n      </h1> <span class=\"mt-1 mb-4 w-10 h-1 bg-green-700\"></span></div> <div class=\"grid grid-cols-2 md:grid-cols-5 gap-4\">" + _vm._ssrList(_vm.skills, function (skill, index) {
    return "<div class=\"flex items-center justify-center flex-col bg-white shadow rounded-xl p-4 transition duration-200 ease-in-out transform hover:-translate-y-2\"><div class=\"flex items-center justify-center rounded-xl\"><img" + _vm._ssrAttr("src", skill.icon) + _vm._ssrAttr("alt", skill.title) + " class=\"h-14 w-14\"></div> <div class=\"font-semibold mt-3\">" + _vm._ssrEscape(_vm._s(skill.title)) + "</div></div>";
  }) + "</div></div>")]);
};
var Skillsvue_type_template_id_340bc14d_staticRenderFns = [];

// CONCATENATED MODULE: ./components/home/Skills.vue?vue&type=template&id=340bc14d&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/home/Skills.vue?vue&type=script&lang=js&
/* harmony default export */ var Skillsvue_type_script_lang_js_ = ({
  data() {
    return {
      skills: [{
        title: 'HTML',
        icon: '/techs/html.svg'
      }, {
        title: 'CSS',
        icon: '/techs/css.svg'
      }, {
        title: 'JavaScript',
        icon: '/techs/javascript.svg'
      }, {
        title: 'Bootstrap',
        icon: '/techs/bootstrap.svg'
      }, {
        title: 'Tailwind Css',
        icon: '/techs/tailwind.svg'
      }, {
        title: 'PHP',
        icon: '/techs/php.svg'
      }, {
        title: 'Laravel Stacks',
        icon: '/techs/laravel.svg'
      }, {
        title: 'Microservices',
        icon: '/techs/microservices.svg'
      }, {
        title: 'Asana',
        icon: '/techs/asana.svg'
      }, {
        title: 'Bitbucket',
        icon: '/techs/bitbucket.svg'
      }]
    };
  }
});
// CONCATENATED MODULE: ./components/home/Skills.vue?vue&type=script&lang=js&
 /* harmony default export */ var home_Skillsvue_type_script_lang_js_ = (Skillsvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./components/home/Skills.vue





/* normalize component */

var Skills_component = Object(componentNormalizer["a" /* default */])(
  home_Skillsvue_type_script_lang_js_,
  Skillsvue_type_template_id_340bc14d_render,
  Skillsvue_type_template_id_340bc14d_staticRenderFns,
  false,
  null,
  null,
  "02604f85"
  
)

/* harmony default export */ var Skills = (Skills_component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./components/home/Testimonials.vue?vue&type=template&id=18f72da3&scoped=true&
var Testimonialsvue_type_template_id_18f72da3_scoped_true_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('section', {
    staticClass: "text-gray-600 dark:text-gray-400 relative bg-gray-50 dark:bg-dark"
  }, [_vm._ssrNode("<svg fill=\"none\" viewBox=\"0 0 404 404\" role=\"img\" aria-labelledby=\"svg-laravelcm\" class=\"hidden md:block absolute top-0 right-0 z-0 transform w-44 h-44 fill-current text-green-700 dark:text-green-500\" data-v-18f72da3><defs data-v-18f72da3><pattern id=\"ad119f34-7694-4c31-947f-5c9d249b21f3\" x=\"0\" y=\"0\" width=\"20\" height=\"20\" patternUnits=\"userSpaceOnUse\" data-v-18f72da3><rect x=\"0\" y=\"0\" width=\"4\" height=\"4\" fill=\"currentColor\" class=\"text-brand-100\" data-v-18f72da3></rect></pattern></defs> <rect width=\"404\" height=\"404\" fill=\"url(#ad119f34-7694-4c31-947f-5c9d249b21f3)\" data-v-18f72da3></rect></svg> <svg fill=\"none\" viewBox=\"0 0 404 404\" role=\"img\" aria-labelledby=\"svg-laravelcm\" class=\"hidden md:block absolute bottom-0 left-0 z-0 transform w-36 h-36 fill-current text-green-700 dark:text-green-500\" data-v-18f72da3><defs data-v-18f72da3><pattern id=\"ad119f34-7694-4c31-947f-5c9d249b21f3\" x=\"0\" y=\"0\" width=\"20\" height=\"20\" patternUnits=\"userSpaceOnUse\" data-v-18f72da3><rect x=\"0\" y=\"0\" width=\"4\" height=\"4\" fill=\"currentColor\" class=\"text-brand-100\" data-v-18f72da3></rect></pattern></defs> <rect width=\"404\" height=\"404\" fill=\"url(#ad119f34-7694-4c31-947f-5c9d249b21f3)\" data-v-18f72da3></rect></svg> <div class=\"container relative max-w-screen-lg mx-auto py-12 px-5\" data-v-18f72da3><div class=\"md:items-start items-center flex flex-wrap w-full mb-4 flex-col\" data-v-18f72da3><h1 class=\"text-left text-3xl leading-none font-medium title-font dark:text-gray-200 text-gray-900\" data-v-18f72da3>\n        Testimonials\n      </h1> <span class=\"mt-1 w-10 mb-4 h-1 bg-green-600 dark:bg-green-600\" data-v-18f72da3></span></div> <div class=\"flex flex-row flex-wrap\" data-v-18f72da3><div class=\"w-full md:w-1/2 px-4 mb-4\" data-v-18f72da3><div class=\"border-2 rounded relative w-full h-min-content p-6 text-base testimonial animated slide-up-active border-green-600 uk-scrollspy-inview animation-position\" data-v-18f72da3><div class=\"commas bg-gray-50 dark:bg-dark text-green-700 dark:text-green-500\" data-v-18f72da3>\n            “\n          </div> <p class=\"mb-4 text-base md:text-lg leading-relaxed md:leading-normal\" data-v-18f72da3>\n            Omar is a fantastic person to work with. He is a hard worker\n            experienced and gifted fullstack developer with a combination of\n            productivity and ambition.\n            <mark class=\"bg-green-200 px-1 text-gray-600 dark:bg-green-700 dark:text-gray-300\" data-v-18f72da3>\n              He has an in-depth understanding of modern IT technologies with\n              a very strong problem solving skills.\n            </mark>\n            Omar is always positive and helpful and he never hesitates to\n            provide support when needed. Working with Omar is a fortunate\n            opportunity to anyone.\n          </p> <div class=\"flex flex-col md:flex-row justify-between items-start md:items-center\" data-v-18f72da3><div class=\"flex\" data-v-18f72da3><div data-v-18f72da3><span class=\"block w-10 mb-4 h-0.5 bg-green-600 dark:bg-green-600\" data-v-18f72da3></span> <p class=\"text-gray-500 dark:text-gray-300 text-base font-bold md:text-md\" data-v-18f72da3>\n                  Soufiane Ekouines\n                </p> <p class=\"text-xs font-semibold md:text-md text-green-700 dark:text-green-500\" data-v-18f72da3>\n                  Fullstack Developer\n                </p></div></div></div></div></div> <div class=\"w-full md:w-1/2 px-4 mb-4\" data-v-18f72da3><div class=\"border-2 rounded relative w-full h-min-content p-6 text-base testimonial animated slide-up-active border-green-700\" data-v-18f72da3><div class=\"commas bg-gray-50 dark:bg-dark text-green-700 dark:text-green-500\" data-v-18f72da3>\n            “\n          </div> <p class=\"mb-4 text-base md:text-lg leading-relaxed md:leading-normal\" data-v-18f72da3>\n            I know Omar EL Amrani at a company he was under my responsibility, he's\n            a Full-Stack Developer,\n            <mark class=\"bg-green-200 px-0.5 text-gray-600 dark:bg-green-700 dark:text-gray-300\" data-v-18f72da3>\n              Expert in PHP/ LARAVEL on top of that he's a great problems\n              solver and analyst.\n            </mark> <br data-v-18f72da3>\n            I strongly recommend him\n          </p> <div class=\"flex flex-col md:flex-row justify-between items-start md:items-center\" data-v-18f72da3><div class=\"flex\" data-v-18f72da3><div data-v-18f72da3><span class=\"block w-10 mb-4 h-0.5 bg-green-600 dark:bg-green-600\" data-v-18f72da3></span> <p class=\"text-gray-500 dark:text-gray-300 text-base font-semibold md:text-md\" data-v-18f72da3>\n                  Achraf dakhssi\n                </p> <p class=\"text-xs font-semibold md:text-md text-green-700 dark:text-green-500\" data-v-18f72da3>\n                  Frontend WEB developer\n                </p></div></div></div></div></div></div></div>")]);
};
var Testimonialsvue_type_template_id_18f72da3_scoped_true_staticRenderFns = [];

// CONCATENATED MODULE: ./components/home/Testimonials.vue?vue&type=template&id=18f72da3&scoped=true&

// CONCATENATED MODULE: ./components/home/Testimonials.vue

var Testimonials_script = {}
function injectStyles (context) {
  
  var style0 = __webpack_require__(26)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var Testimonials_component = Object(componentNormalizer["a" /* default */])(
  Testimonials_script,
  Testimonialsvue_type_template_id_18f72da3_scoped_true_render,
  Testimonialsvue_type_template_id_18f72da3_scoped_true_staticRenderFns,
  false,
  injectStyles,
  "18f72da3",
  "2c1609b7"
  
)

/* harmony default export */ var Testimonials = (Testimonials_component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./components/home/Oss.vue?vue&type=template&id=3237c214&
var Ossvue_type_template_id_3237c214_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('section', {
    staticClass: "text-gray-600 border-b dark:border-gray-700 bg-white dark:bg-dark"
  }, [_vm._ssrNode("<div class=\"container max-w-screen-lg mx-auto py-12 px-5\"><div class=\"md:items-start items-center flex flex-wrap w-full mb-4 flex-col\"><h1 class=\"text-left text-3xl leading-none font-medium title-font dark:text-gray-200 text-gray-900\">\n        Open Source\n        <span class=\"inline-flex items-center ml-1 px-2 rounded-full text-xs leading-4 bg-green-200 text-green-700\">\n          Soon\n        </span></h1> <span class=\"mt-1 mb-4 w-10 h-1 bg-green-700\"></span></div> <div class=\"grid grid-cols-1 md:grid-cols-2 gap-6\">" + _vm._ssrList(_vm.projects, function (project, index) {
    return "<a target=\"_blank\"" + _vm._ssrAttr("href", project.html_url) + " class=\"block bg-white dark:bg-dark-light p-6 shadow-full rounded-lg mt-2 lg:mt-0 transition duration-200 ease-in-out transform hover:-translate-y-2\"><div><h5 class=\"text-lg leading-6 font-medium text-gray-900 dark:text-gray-200\">" + _vm._ssrEscape("\n            " + _vm._s(project.name) + "\n          ") + "</h5> <p class=\"mt-4 mb-6 text-base leading-6 text-gray-500 dark:text-gray-400\">" + _vm._ssrEscape("\n            " + _vm._s(project.description) + "\n          ") + "</p> <ul class=\"flex items-center space-x-4 text-black dark:text-gray-200\"><li class=\"inline-flex items-center\"><svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 20 20\" fill=\"currentColor\" class=\"h-4 w-4 mr-1\"><path d=\"M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z\"></path></svg> <span>" + _vm._ssrEscape(_vm._s(project.stargazers_count)) + "</span></li> " + (project.forks ? "<li class=\"inline-flex items-center\"><img src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMCIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDEwIDE2Ij48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik04IDFhMS45OTMgMS45OTMgMCAwIDAtMSAzLjcyVjZMNSA4IDMgNlY0LjcyQTEuOTkzIDEuOTkzIDAgMCAwIDIgMWExLjk5MyAxLjk5MyAwIDAgMC0xIDMuNzJWNi41bDMgM3YxLjc4QTEuOTkzIDEuOTkzIDAgMCAwIDUgMTVhMS45OTMgMS45OTMgMCAwIDAgMS0zLjcyVjkuNWwzLTNWNC43MkExLjk5MyAxLjk5MyAwIDAgMCA4IDF6TTIgNC4yQzEuMzQgNC4yLjggMy42NS44IDNjMC0uNjUuNTUtMS4yIDEuMi0xLjIuNjUgMCAxLjIuNTUgMS4yIDEuMiAwIC42NS0uNTUgMS4yLTEuMiAxLjJ6bTMgMTBjLS42NiAwLTEuMi0uNTUtMS4yLTEuMiAwLS42NS41NS0xLjIgMS4yLTEuMi42NSAwIDEuMi41NSAxLjIgMS4yIDAgLjY1LS41NSAxLjItMS4yIDEuMnptMy0xMGMtLjY2IDAtMS4yLS41NS0xLjItMS4yIDAtLjY1LjU1LTEuMiAxLjItMS4yLjY1IDAgMS4yLjU1IDEuMiAxLjIgMCAuNjUtLjU1IDEuMi0xLjIgMS4yeiIvPjwvc3ZnPg==\" alt=\"forks\" class=\"h-4 w-4 mr-1\"> <span>" + _vm._ssrEscape(_vm._s(project.forks)) + "</span></li>" : "<!---->") + "</ul></div></a>";
  }) + " <div class=\"flex items-center justify-center\"><a href=\"https://github.com/OmarELamrani1\" target=\"_blank\" class=\"bg-black w-full md:w-auto flex items-center justify-center px-10 md:px-24 py-3 shadow-lg hover:bg-gray-800 rounded-lg text-white\"><svg fill=\"currentColor\" class=\"text-white h-6 w-6 mr-3\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M12 2C6.477 2 2 6.463 2 11.97c0 4.404 2.865 8.14 6.839 9.458.5.092.682-.216.682-.48 0-.236-.008-.864-.013-1.695-2.782.602-3.369-1.337-3.369-1.337-.454-1.151-1.11-1.458-1.11-1.458-.908-.618.069-.606.069-.606 1.003.07 1.531 1.027 1.531 1.027.892 1.524 2.341 1.084 2.91.828.092-.643.35-1.083.636-1.332-2.22-.251-4.555-1.107-4.555-4.927 0-1.088.39-1.979 1.029-2.675-.103-.252-.446-1.266.098-2.638 0 0 .84-.268 2.75 1.022A9.606 9.606 0 0112 6.82c.85.004 1.705.114 2.504.336 1.909-1.29 2.747-1.022 2.747-1.022.546 1.372.202 2.386.1 2.638.64.696 1.028 1.587 1.028 2.675 0 3.83-2.339 4.673-4.566 4.92.359.307.678.915.678 1.846 0 1.332-.012 2.407-.012 2.734 0 .267.18.577.688.48C19.137 20.107 22 16.373 22 11.969 22 6.463 17.522 2 12 2z\"></path></svg>\n          See more\n        </a></div></div></div>")]);
};
var Ossvue_type_template_id_3237c214_staticRenderFns = [];

// CONCATENATED MODULE: ./components/home/Oss.vue?vue&type=template&id=3237c214&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/home/Oss.vue?vue&type=script&lang=js&
/* harmony default export */ var Ossvue_type_script_lang_js_ = ({
  props: {
    projects: {
      type: Array,
      default: []
    }
  }
});
// CONCATENATED MODULE: ./components/home/Oss.vue?vue&type=script&lang=js&
 /* harmony default export */ var home_Ossvue_type_script_lang_js_ = (Ossvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./components/home/Oss.vue





/* normalize component */

var Oss_component = Object(componentNormalizer["a" /* default */])(
  home_Ossvue_type_script_lang_js_,
  Ossvue_type_template_id_3237c214_render,
  Ossvue_type_template_id_3237c214_staticRenderFns,
  false,
  null,
  null,
  "65130c5c"
  
)

/* harmony default export */ var Oss = (Oss_component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=script&lang=js&





/* harmony default export */ var lib_vue_loader_options_pagesvue_type_script_lang_js_ = ({
  layout: 'default',
  components: {
    Hero: Hero,
    Skills: Skills,
    Testimonials: Testimonials,
    Oss: Oss
  },
  asyncData({
    params,
    error
  }) {
    return external_axios_default.a.get('https://api.github.com/search/repositories?q=user:OmarELamrani1%20feautred%20repository%20in:readme&sort=stars&order=desc&per_page=5').then(response => {
      return {
        projects: response.data.items
      };
    }).catch(errors => {
      console.log(errors);
    });
  }
});
// CONCATENATED MODULE: ./pages/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pagesvue_type_script_lang_js_ = (lib_vue_loader_options_pagesvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./pages/index.vue





/* normalize component */

var pages_component = Object(componentNormalizer["a" /* default */])(
  pagesvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "dc6374c4"
  
)

/* harmony default export */ var pages = __webpack_exports__["default"] = (pages_component.exports);

/***/ })

};;
//# sourceMappingURL=index.js.map