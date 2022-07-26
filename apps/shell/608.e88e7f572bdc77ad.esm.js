(self["webpackChunkshell"] = self["webpackChunkshell"] || []).push([[608],{

/***/ 14608:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: consume shared module (default) react@=18.2.0 (strict) (singleton) (fallback: ../../node_modules/react/index.js)
var index_js_ = __webpack_require__(59619);
var index_js_default = /*#__PURE__*/__webpack_require__.n(index_js_);
// EXTERNAL MODULE: ../../node_modules/react-dom/client.js
var client = __webpack_require__(17029);
// EXTERNAL MODULE: consume shared module (default) react-router-dom@=6.3.0 (strict) (singleton) (fallback: ../../node_modules/react-router-dom/index.js)
var react_router_dom_index_js_ = __webpack_require__(45493);
// EXTERNAL MODULE: consume shared module (default) antd@^4.21.3 (strict) (singleton) (fallback: ../../node_modules/antd/es/index.js)
var es_index_js_ = __webpack_require__(58573);
// EXTERNAL MODULE: consume shared module (default) react-error-boundary@^3.1.4 (strict) (singleton) (fallback: ../../node_modules/react-error-boundary/dist/react-error-boundary.umd.js)
var react_error_boundary_umd_js_ = __webpack_require__(65008);
// EXTERNAL MODULE: ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__(46062);
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);
// EXTERNAL MODULE: ../../node_modules/style-loader/dist/runtime/styleDomAPI.js
var styleDomAPI = __webpack_require__(44036);
var styleDomAPI_default = /*#__PURE__*/__webpack_require__.n(styleDomAPI);
// EXTERNAL MODULE: ../../node_modules/style-loader/dist/runtime/insertBySelector.js
var insertBySelector = __webpack_require__(96793);
var insertBySelector_default = /*#__PURE__*/__webpack_require__.n(insertBySelector);
// EXTERNAL MODULE: ../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js
var setAttributesWithoutAttributes = __webpack_require__(17892);
var setAttributesWithoutAttributes_default = /*#__PURE__*/__webpack_require__.n(setAttributesWithoutAttributes);
// EXTERNAL MODULE: ../../node_modules/style-loader/dist/runtime/insertStyleElement.js
var insertStyleElement = __webpack_require__(11173);
var insertStyleElement_default = /*#__PURE__*/__webpack_require__.n(insertStyleElement);
// EXTERNAL MODULE: ../../node_modules/style-loader/dist/runtime/styleTagTransform.js
var styleTagTransform = __webpack_require__(42464);
var styleTagTransform_default = /*#__PURE__*/__webpack_require__.n(styleTagTransform);
// EXTERNAL MODULE: ../../node_modules/@nrwl/web/src/utils/webpack/plugins/raw-css-loader.js!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[3].oneOf[4].use[2]!./src/app/app.css
var app = __webpack_require__(18657);
var app_default = /*#__PURE__*/__webpack_require__.n(app);
;// CONCATENATED MODULE: ./src/app/app.css

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());

      options.insert = insertBySelector_default().bind(null, "head");
    
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()((app_default()), options);




       /* harmony default export */ const app_app = ((app_default()) && (app_default()).locals ? (app_default()).locals : undefined);

// EXTERNAL MODULE: ./src/utils/dynamic-mfe.ts
var dynamic_mfe = __webpack_require__(43091);
// EXTERNAL MODULE: consume shared module (default) @monorepo-nx-react-mfe/utils@* (strict) (fallback: ../../libs/utils/src/index.ts)
var index_ts_ = __webpack_require__(77515);
// EXTERNAL MODULE: ../../node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(52322);
;// CONCATENATED MODULE: ./src/app/app.tsx










const HeaderModule = /*#__PURE__*/index_js_default().lazy(() => (0,dynamic_mfe/* loadRemoteModule */.Vs)('header', './Module'));
const ReactModule1 = /*#__PURE__*/index_js_default().lazy(() => (0,dynamic_mfe/* loadRemoteModule */.Vs)('react-module-1', './Module'));
const ReactModule2 = /*#__PURE__*/index_js_default().lazy(() => (0,dynamic_mfe/* loadRemoteModule */.Vs)('react-module-2', './Module'));
const {
  Footer
} = es_index_js_.Layout;
const items = [{
  key: 'module1',
  label: (0,index_ts_.toUpperCase)('Module 1'),
  path: '/module1',
  breadcrumbs: ['Menu', 'Module 111']
}, {
  key: 'module2',
  label: (0,index_ts_.toUpperCase)('Module 2'),
  path: '/module2',
  breadcrumbs: ['Menu', 'Module 2']
}];

const ErrorFallback = ({
  error
}) => /*#__PURE__*/(0,jsx_runtime.jsx)(es_index_js_.Card, {
  title: 'An unexpected error has occurred',
  children: error.message
});

const renderModule = key => {
  switch (key) {
    case 'module2':
      return /*#__PURE__*/(0,jsx_runtime.jsx)(ReactModule2, {});

    default:
      return /*#__PURE__*/(0,jsx_runtime.jsx)(ReactModule1, {});
  }
};

const renderRoute = menuItem => /*#__PURE__*/(0,jsx_runtime.jsx)(react_router_dom_index_js_.Route, {
  path: menuItem.path,
  element: /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(es_index_js_.Breadcrumb, {
      style: {
        margin: '16px 0'
      },
      children: menuItem.breadcrumbs.map(bci => /*#__PURE__*/(0,jsx_runtime.jsx)(es_index_js_.Breadcrumb.Item, {
        children: (0,index_ts_.toUpperCase)(bci)
      }, menuItem.key + bci))
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(react_error_boundary_umd_js_.ErrorBoundary, {
      FallbackComponent: ErrorFallback,
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(index_js_.Suspense, {
        fallback: /*#__PURE__*/(0,jsx_runtime.jsxs)("h1", {
          children: ["Loading ", menuItem.label, "..."]
        }),
        children: renderModule(menuItem.key)
      })
    })]
  })
}, menuItem.key);

const App = () => {
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(es_index_js_.Layout, {
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(react_error_boundary_umd_js_.ErrorBoundary, {
      FallbackComponent: ErrorFallback,
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(index_js_.Suspense, {
        fallback: /*#__PURE__*/(0,jsx_runtime.jsx)("h1", {
          children: "Loading Header..."
        }),
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(HeaderModule, {
          menuItems: items
        })
      })
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(es_index_js_.Layout, {
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(es_index_js_.Layout, {
        style: {
          padding: '0 24px 24px'
        },
        children: /*#__PURE__*/(0,jsx_runtime.jsxs)(react_router_dom_index_js_.Routes, {
          children: [renderRoute(Object.assign({}, items[0], {
            path: '*',
            breadcrumbs: ['Menu', 'Home']
          })), /*#__PURE__*/(0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
            children: items.map(item => renderRoute(item))
          })]
        })
      })
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(Footer, {
      style: {
        textAlign: 'center'
      },
      children: "Monorepo MFE - NX \xA92022"
    })]
  });
};

/* harmony default export */ const src_app_app = (App);
;// CONCATENATED MODULE: ./src/bootstrap.tsx





const root = client/* createRoot */.s(document.getElementById('root'));
root.render( /*#__PURE__*/(0,jsx_runtime.jsx)(index_js_.StrictMode, {
  children: /*#__PURE__*/(0,jsx_runtime.jsx)(react_router_dom_index_js_.BrowserRouter, {
    children: /*#__PURE__*/(0,jsx_runtime.jsx)(src_app_app, {})
  })
}));

/***/ }),

/***/ 18657:
/***/ ((module) => {


/***/ }),

/***/ 17029:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var __webpack_unused_export__;


var m = __webpack_require__(81135);
if (true) {
  exports.s = m.createRoot;
  __webpack_unused_export__ = m.hydrateRoot;
} else { var i; }


/***/ }),

/***/ 11837:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var f=__webpack_require__(59619),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};
function q(c,a,g){var b,d={},e=null,h=null;void 0!==g&&(e=""+g);void 0!==a.key&&(e=""+a.key);void 0!==a.ref&&(h=a.ref);for(b in a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps,a)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l;exports.jsx=q;exports.jsxs=q;


/***/ }),

/***/ 52322:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



if (true) {
  module.exports = __webpack_require__(11837);
} else {}


/***/ }),

/***/ 46062:
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ 96793:
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ 11173:
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ 17892:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ 44036:
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ 42464:
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ })

}])