(self["webpackChunkreact_module_2"] = self["webpackChunkreact_module_2"] || []).push([[899],{

/***/ 8899:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: consume shared module (default) react@=18.2.0 (strict) (singleton) (fallback: ../../node_modules/react/index.js)
var index_js_ = __webpack_require__(9619);
// EXTERNAL MODULE: ../../node_modules/react-dom/client.js
var client = __webpack_require__(7029);
// EXTERNAL MODULE: consume shared module (default) styled-components@=5.3.5 (strict) (singleton) (fallback: ../../node_modules/styled-components/dist/styled-components.browser.esm.js)
var styled_components_browser_esm_js_ = __webpack_require__(4903);
var styled_components_browser_esm_js_default = /*#__PURE__*/__webpack_require__.n(styled_components_browser_esm_js_);
// EXTERNAL MODULE: consume shared module (default) @monorepo-nx-react-mfe/utils@* (strict) (fallback: ../../libs/utils/src/index.ts)
var index_ts_ = __webpack_require__(7515);
// EXTERNAL MODULE: ../../node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(2322);
;// CONCATENATED MODULE: ./src/app/app.tsx



const StyledApp = /*#__PURE__*/styled_components_browser_esm_js_default().div.withConfig({
  displayName: "app__StyledApp",
  componentId: "sc-18xc6vm-0"
})([""]);
function App() {
  return /*#__PURE__*/(0,jsx_runtime.jsx)(StyledApp, {
    children: /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      children: (0,index_ts_.toUpperCase)('React Module 2')
    })
  });
}
/* harmony default export */ const app = (App);
;// CONCATENATED MODULE: ./src/bootstrap.tsx




const root = client/* createRoot */.s(document.getElementById('root'));
root.render( /*#__PURE__*/(0,jsx_runtime.jsx)(index_js_.StrictMode, {
  children: /*#__PURE__*/(0,jsx_runtime.jsx)(app, {})
}));

/***/ }),

/***/ 7029:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var __webpack_unused_export__;


var m = __webpack_require__(1135);
if (true) {
  exports.s = m.createRoot;
  __webpack_unused_export__ = m.hydrateRoot;
} else { var i; }


/***/ }),

/***/ 1837:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var __webpack_unused_export__;
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var f=__webpack_require__(9619),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};
function q(c,a,g){var b,d={},e=null,h=null;void 0!==g&&(e=""+g);void 0!==a.key&&(e=""+a.key);void 0!==a.ref&&(h=a.ref);for(b in a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps,a)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}__webpack_unused_export__=l;exports.jsx=q;__webpack_unused_export__=q;


/***/ }),

/***/ 2322:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



if (true) {
  module.exports = __webpack_require__(1837);
} else {}


/***/ })

}])