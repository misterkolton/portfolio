"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/about-me",{

/***/ "./pages/about-me.tsx":
/*!****************************!*\
  !*** ./pages/about-me.tsx ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\nvar _this = undefined;\n\nvar AboutMe = function(props) {\n    var title = props.title, description = props.description, slug = props.slug, heroImage = props.heroImage;\n    var formatDescription = function(html) {\n        var paragraphs = html.split(\"\\n\").map(function(paragraph, index) {\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: paragraph\n            }, index, false, {\n                fileName: \"/Users/koltonthompson/development/side-projects/kt-hygraph-portfolio/pages/about-me.tsx\",\n                lineNumber: 15,\n                columnNumber: 7\n            }, _this);\n        });\n        return paragraphs;\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    width: \"100%\",\n                    justifyContent: \"center\",\n                    alignContent: \"center\",\n                    display: \"flex\"\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    children: title\n                }, void 0, false, {\n                    fileName: \"/Users/koltonthompson/development/side-projects/kt-hygraph-portfolio/pages/about-me.tsx\",\n                    lineNumber: 24,\n                    columnNumber: 7\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/koltonthompson/development/side-projects/kt-hygraph-portfolio/pages/about-me.tsx\",\n                lineNumber: 22,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: formatDescription(description)\n            }, void 0, false, {\n                fileName: \"/Users/koltonthompson/development/side-projects/kt-hygraph-portfolio/pages/about-me.tsx\",\n                lineNumber: 26,\n                columnNumber: 9\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    width: \"100%\",\n                    justifyContent: \"center\",\n                    alignContent: \"center\",\n                    display: \"flex\"\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                    src: heroImage,\n                    style: {\n                        width: \"220px\",\n                        borderRadius: \"12px\"\n                    },\n                    alt: \"Hero\"\n                }, void 0, false, {\n                    fileName: \"/Users/koltonthompson/development/side-projects/kt-hygraph-portfolio/pages/about-me.tsx\",\n                    lineNumber: 28,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/koltonthompson/development/side-projects/kt-hygraph-portfolio/pages/about-me.tsx\",\n                lineNumber: 27,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/koltonthompson/development/side-projects/kt-hygraph-portfolio/pages/about-me.tsx\",\n        lineNumber: 21,\n        columnNumber: 5\n    }, _this);\n};\n_c = AboutMe;\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (AboutMe);\nvar _c;\n$RefreshReg$(_c, \"AboutMe\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hYm91dC1tZS50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFTQSxJQUFNQSxVQUFVLFNBQUNDO0lBQ2YsSUFBUUMsUUFBd0NELE1BQXhDQyxPQUFPQyxjQUFpQ0YsTUFBakNFLGFBQWFDLE9BQW9CSCxNQUFwQkcsTUFBTUMsWUFBY0osTUFBZEk7SUFFbEMsSUFBTUMsb0JBQW9CLFNBQUNDO1FBQ3pCLElBQU1DLGFBQWFELEtBQUtFLE1BQU0sTUFBTUMsSUFBSSxTQUFDQyxXQUFXQztpQ0FDbEQsOERBQUNDOzBCQUFlRjtlQUFSQzs7Ozs7O1FBRVYsT0FBT0o7SUFDVDtJQUVBLHFCQUNFLDhEQUFDTTs7MEJBQ08sOERBQUNBO2dCQUFJQyxPQUFPO29CQUFFQyxPQUFPO29CQUFRQyxnQkFBZ0I7b0JBQVVDLGNBQWM7b0JBQVVDLFNBQVM7Z0JBQU87MEJBRXJHLDRFQUFDQzs4QkFBSWxCOzs7Ozs7Ozs7OzswQkFFSCw4REFBQ1k7MEJBQUtSLGtCQUFrQkg7Ozs7OzswQkFDMUIsOERBQUNXO2dCQUFJQyxPQUFPO29CQUFFQyxPQUFPO29CQUFRQyxnQkFBZ0I7b0JBQVVDLGNBQWM7b0JBQVVDLFNBQVM7Z0JBQU87MEJBQzdGLDRFQUFDRTtvQkFBSUMsS0FBS2pCO29CQUFXVSxPQUFPO3dCQUFFQyxPQUFPO3dCQUFTTyxjQUFjO29CQUFPO29CQUFHQyxLQUFJOzs7Ozs7Ozs7Ozs7Ozs7OztBQUlsRjtLQXRCTXhCOztBQXNETiwrREFBZUEsT0FBT0EsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9hYm91dC1tZS50c3g/MDUzYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBHZXRTdGF0aWNQcm9wcyB9IGZyb20gXCJuZXh0XCJcblxudHlwZSBBYm91dE1lUHJvcHMgPSB7XG4gIHRpdGxlOiBzdHJpbmdcbiAgZGVzY3JpcHRpb246IHN0cmluZ1xuICBzbHVnOiBzdHJpbmdcbiAgaGVyb0ltYWdlPzogc3RyaW5nXG59XG5cbmNvbnN0IEFib3V0TWUgPSAocHJvcHM6IEFib3V0TWVQcm9wcykgPT4ge1xuICBjb25zdCB7IHRpdGxlLCBkZXNjcmlwdGlvbiwgc2x1ZywgaGVyb0ltYWdlIH0gPSBwcm9wc1xuXG4gIGNvbnN0IGZvcm1hdERlc2NyaXB0aW9uID0gKGh0bWw6IHN0cmluZykgPT4ge1xuICAgIGNvbnN0IHBhcmFncmFwaHMgPSBodG1sLnNwbGl0KFwiXFxuXCIpLm1hcCgocGFyYWdyYXBoLCBpbmRleCkgPT4gKFxuICAgICAgPHAga2V5PXtpbmRleH0+e3BhcmFncmFwaH08L3A+XG4gICAgKSk7XG4gICAgcmV0dXJuIHBhcmFncmFwaHM7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHdpZHRoOiAnMTAwJScsIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJywgYWxpZ25Db250ZW50OiAnY2VudGVyJywgZGlzcGxheTogJ2ZsZXgnIH19PlxuXG4gICAgICA8aDE+e3RpdGxlfTwvaDE+XG48L2Rpdj5cbiAgICAgICAgPGRpdj57Zm9ybWF0RGVzY3JpcHRpb24oZGVzY3JpcHRpb24pfTwvZGl2PlxuICAgICAgPGRpdiBzdHlsZT17eyB3aWR0aDogJzEwMCUnLCBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsIGFsaWduQ29udGVudDogJ2NlbnRlcicsIGRpc3BsYXk6ICdmbGV4JyB9fT5cbiAgICAgICAgPGltZyBzcmM9e2hlcm9JbWFnZX0gc3R5bGU9e3sgd2lkdGg6ICcyMjBweCcsIGJvcmRlclJhZGl1czogJzEycHgnIH19IGFsdD1cIkhlcm9cIiAvPlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUHJvcHM6IEdldFN0YXRpY1Byb3BzPEFib3V0TWVQcm9wcz4gPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IHF1ZXJ5ID0gYFxuICAgIHF1ZXJ5IEFib3V0TWVRdWVyeSB7XG4gICAgICBibG9nUGFnZSh3aGVyZToge3NsdWc6IFwiYWJvdXQtbWVcIn0pIHtcbiAgICAgICAgdGl0bGVcbiAgICAgICAgc2x1Z1xuICAgICAgICBkZXNjcmlwdGlvblxuICAgICAgICBoZXJvSW1hZ2Uge1xuICAgICAgICAgIHVybFxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICBgXG5cbiAgY29uc3QgYm9keSA9IHsgcXVlcnkgfVxuICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChwcm9jZXNzLmVudi5BUElfRU5EUE9JTlQsIHtcbiAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGJvZHkpLFxuICB9KVxuICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IHJlcy5qc29uKClcbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge1xuICAgICAgdGl0bGU6IGRhdGEuYmxvZ1BhZ2UudGl0bGUsXG4gICAgICBkZXNjcmlwdGlvbjogZGF0YS5ibG9nUGFnZS5kZXNjcmlwdGlvbixcbiAgICAgIHNsdWc6IGRhdGEuYmxvZ1BhZ2Uuc2x1ZyxcbiAgICAgIGhlcm9JbWFnZTogZGF0YS5ibG9nUGFnZS5oZXJvSW1hZ2UudXJsLFxuICAgIH0sXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQWJvdXRNZVxuIl0sIm5hbWVzIjpbIkFib3V0TWUiLCJwcm9wcyIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJzbHVnIiwiaGVyb0ltYWdlIiwiZm9ybWF0RGVzY3JpcHRpb24iLCJodG1sIiwicGFyYWdyYXBocyIsInNwbGl0IiwibWFwIiwicGFyYWdyYXBoIiwiaW5kZXgiLCJwIiwiZGl2Iiwic3R5bGUiLCJ3aWR0aCIsImp1c3RpZnlDb250ZW50IiwiYWxpZ25Db250ZW50IiwiZGlzcGxheSIsImgxIiwiaW1nIiwic3JjIiwiYm9yZGVyUmFkaXVzIiwiYWx0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/about-me.tsx\n"));

/***/ })

});