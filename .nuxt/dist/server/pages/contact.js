exports.ids = [2];
exports.modules = {

/***/ 30:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./pages/contact.vue?vue&type=template&id=fd10898a&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('section', {
    staticClass: "text-gray-600 border-b dark:border-gray-700 pb-16 bg-white dark:text-gray-300 dark:bg-dark"
  }, [_vm._ssrNode("<div class=\"container max-w-screen-lg mx-auto md:items-start md:text-left items-center py-32 pb-12 flex flex-col px-5\"><h1 class=\"dark:text-gray-200 text-left text-3xl font-medium title-font text-gray-900\">\n      Contact Me\n    </h1> <span class=\"block mt-1 w-10 h-1 bg-green-700\"></span> <h3 class=\"text-green-600 mt-8 font-semibold mb-6\">" + _vm._ssrEscape(_vm._s(_vm.message)) + "</h3> <form action=\"post\" class=\"w-full\"><div class=\"flex flex-wrap -mx-4\"><div class=\"w-full md:w-1/2 px-4 mb-5\"><label for=\"fullName\" class=\"block mb-2 text-copy-primary\">\n            Full Name\n          </label> <input id=\"fullName\" type=\"text\" name=\"fullName\" placeholder=\"Enter your full name\" required=\"required\" class=\"dark:bg-dark-light dark:border-dark-light block w-full bg-background-form border border-border-color-primary shadow rounded outline-none focus:border-green-700 dark:focus:border-green-700 mb-2 p-4\"></div> <div class=\"w-full md:w-1/2 px-4 mb-5\"><label for=\"email\" class=\"block mb-2 text-copy-primary\">\n            E-mail\n          </label> <input id=\"email\" type=\"email\" name=\"email\" placeholder=\"Enter your email\" required=\"required\" class=\"dark:bg-dark-light dark:border-dark-light block w-full bg-background-form border border-border-color-primary shadow rounded outline-none focus:border-green-700 dark:focus:border-green-700 mb-2 p-4\"></div> <div class=\"w-full px-4 mb-5\"><label for=\"Message\" class=\"block mb-2 text-copy-primary\">\n            Message\n          </label> <textarea id=\"Message\" rows=\"6\" type=\"text\" name=\"Message\" placeholder=\"Enter your message\" required=\"required\" class=\"dark:bg-dark-light dark:border-dark-light block w-full bg-background-form border border-border-color-primary shadow rounded outline-none focus:border-green-700 dark:focus:border-green-700 mb-2 p-4\"></textarea></div></div> <div class=\"flex justify-end w-full\"><button type=\"submit\" class=\"inline-flex shadow text-white bg-green-700 border-0 py-3 px-8 focus:outline-none hover:bg-green-600 rounded\">\n          Submit\n        </button></div></form></div>")]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/contact.vue?vue&type=template&id=fd10898a&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/contact.vue?vue&type=script&lang=js&
/* harmony default export */ var contactvue_type_script_lang_js_ = ({
  data() {
    return {
      message: ''
    };
  },
  methods: {
    submit(event) {
      var data = new FormData(event.target);
      this.$axios.$post('https://formspree.io/f/moqrrraz', data).then(response => {
        this.message = 'Thank you for getting in touch! We appreciate you contacting us';
        event.target.reset();
      }).then(response => {
        console.log(response);
      });
    }
  }
});
// CONCATENATED MODULE: ./pages/contact.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_contactvue_type_script_lang_js_ = (contactvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/contact.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_contactvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "48a3ecec"
  
)

/* harmony default export */ var contact = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=contact.js.map