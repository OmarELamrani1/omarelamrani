(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{300:function(e,t,r){"use strict";r.r(t);var o={data:function(){return{message:""}},methods:{submit:function(e){var t=this,data=new FormData(e.target);this.$axios.$post("https://formspree.io/f/moqrrraz",data).then((function(r){t.message="Thank you for getting in touch! We appreciate you contacting us",e.target.reset()})).then((function(e){console.log(e)}))}}},l=r(23),component=Object(l.a)(o,(function(){var e=this,t=e._self._c;return t("section",{staticClass:"text-gray-600 border-b dark:border-gray-700 pb-16 bg-white dark:text-gray-300 dark:bg-dark"},[t("div",{staticClass:"container max-w-screen-lg mx-auto md:items-start md:text-left items-center py-32 pb-12 flex flex-col px-5"},[t("h1",{staticClass:"dark:text-gray-200 text-left text-3xl font-medium title-font text-gray-900"},[e._v("\n      Contact Me\n    ")]),e._v(" "),t("span",{staticClass:"block mt-1 w-10 h-1 bg-green-700"}),e._v(" "),t("h3",{staticClass:"text-green-600 mt-8 font-semibold mb-6"},[e._v(e._s(e.message))]),e._v(" "),t("form",{staticClass:"w-full",attrs:{action:"post"},on:{submit:function(t){return t.preventDefault(),e.submit(t)}}},[e._m(0),e._v(" "),e._m(1)])])])}),[function(){var e=this,t=e._self._c;return t("div",{staticClass:"flex flex-wrap -mx-4"},[t("div",{staticClass:"w-full md:w-1/2 px-4 mb-5"},[t("label",{staticClass:"block mb-2 text-copy-primary",attrs:{for:"fullName"}},[e._v("\n            Full Name\n          ")]),e._v(" "),t("input",{staticClass:"dark:bg-dark-light dark:border-dark-light block w-full bg-background-form border border-border-color-primary shadow rounded outline-none focus:border-green-700 dark:focus:border-green-700 mb-2 p-4",attrs:{id:"fullName",type:"text",name:"fullName",placeholder:"Enter your full name",required:"required"}})]),e._v(" "),t("div",{staticClass:"w-full md:w-1/2 px-4 mb-5"},[t("label",{staticClass:"block mb-2 text-copy-primary",attrs:{for:"email"}},[e._v("\n            E-mail\n          ")]),e._v(" "),t("input",{staticClass:"dark:bg-dark-light dark:border-dark-light block w-full bg-background-form border border-border-color-primary shadow rounded outline-none focus:border-green-700 dark:focus:border-green-700 mb-2 p-4",attrs:{id:"email",type:"email",name:"email",placeholder:"Enter your email",required:"required"}})]),e._v(" "),t("div",{staticClass:"w-full px-4 mb-5"},[t("label",{staticClass:"block mb-2 text-copy-primary",attrs:{for:"Message"}},[e._v("\n            Message\n          ")]),e._v(" "),t("textarea",{staticClass:"dark:bg-dark-light dark:border-dark-light block w-full bg-background-form border border-border-color-primary shadow rounded outline-none focus:border-green-700 dark:focus:border-green-700 mb-2 p-4",attrs:{id:"Message",rows:"6",type:"text",name:"Message",placeholder:"Enter your message",required:"required"}})])])},function(){var e=this._self._c;return e("div",{staticClass:"flex justify-end w-full"},[e("button",{staticClass:"inline-flex shadow text-white bg-green-700 border-0 py-3 px-8 focus:outline-none hover:bg-green-600 rounded",attrs:{type:"submit"}},[this._v("\n          Submit\n        ")])])}],!1,null,null,null);t.default=component.exports}}]);