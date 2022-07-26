(self["webpackChunkheader"] = self["webpackChunkheader"] || []).push([[899],{

/***/ 78899:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: consume shared module (default) react@=18.2.0 (strict) (singleton) (fallback: ../../node_modules/react/index.js)
var index_js_ = __webpack_require__(59619);
// EXTERNAL MODULE: ../../node_modules/react-dom/client.js
var client = __webpack_require__(17029);
// EXTERNAL MODULE: consume shared module (default) react-router-dom@=6.3.0 (strict) (singleton) (fallback: ../../node_modules/react-router-dom/index.js)
var react_router_dom_index_js_ = __webpack_require__(45493);
// EXTERNAL MODULE: consume shared module (default) styled-components@=5.3.5 (strict) (singleton) (fallback: ../../node_modules/styled-components/dist/styled-components.browser.esm.js)
var styled_components_browser_esm_js_ = __webpack_require__(14903);
var styled_components_browser_esm_js_default = /*#__PURE__*/__webpack_require__.n(styled_components_browser_esm_js_);
// EXTERNAL MODULE: ./src/components/custom-header.tsx + 1 modules
var custom_header = __webpack_require__(71882);
// EXTERNAL MODULE: ../../node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(52322);
;// CONCATENATED MODULE: ./src/app/app.tsx



const StyledApp = /*#__PURE__*/styled_components_browser_esm_js_default().div.withConfig({
  displayName: "app__StyledApp",
  componentId: "sc-1lfzsj8-0"
})([""]);
function App(menu) {
  return /*#__PURE__*/(0,jsx_runtime.jsx)(StyledApp, {
    children: /*#__PURE__*/(0,jsx_runtime.jsx)(custom_header/* default */.Z, {
      menuItems: menu.menuItems
    })
  });
}
/* harmony default export */ const app = (App);
;// CONCATENATED MODULE: ./src/bootstrap.tsx





const items = [{
  key: 'react',
  label: 'React from Header',
  path: '/react',
  breadcrumbs: ['Menu', 'React']
}, {
  key: 'angular',
  label: 'Angular',
  path: '/angular',
  breadcrumbs: ['Menu', 'Angular']
}, {
  key: 'vue',
  label: 'Vue',
  path: '/Vue',
  breadcrumbs: ['Menu', 'Vue']
}];
const root = client/* createRoot */.s(document.getElementById('root'));
root.render( /*#__PURE__*/(0,jsx_runtime.jsx)(index_js_.StrictMode, {
  children: /*#__PURE__*/(0,jsx_runtime.jsx)(react_router_dom_index_js_.BrowserRouter, {
    children: /*#__PURE__*/(0,jsx_runtime.jsx)(app, {
      menuItems: items
    })
  })
}));

/***/ }),

/***/ 17029:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var __webpack_unused_export__;


var m = __webpack_require__(81135);
if (true) {
  exports.s = m.createRoot;
  __webpack_unused_export__ = m.hydrateRoot;
} else { var i; }


/***/ })

}])