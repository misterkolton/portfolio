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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\nvar _this = undefined;\n\nvar AboutMe = function(props) {\n    var title = props.title, description = props.description, slug = props.slug, heroImage = props.heroImage;\n    var formatDescription = function(html) {\n        var paragraphs = html.split(\"\\n\").map(function(paragraph, index) {\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: paragraph\n            }, index, false, {\n                fileName: \"/Users/koltonthompson/development/side-projects/kt-hygraph-portfolio/pages/about-me.tsx\",\n                lineNumber: 15,\n                columnNumber: 7\n            }, _this);\n        });\n        return paragraphs;\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: title\n            }, void 0, false, {\n                fileName: \"/Users/koltonthompson/development/side-projects/kt-hygraph-portfolio/pages/about-me.tsx\",\n                lineNumber: 22,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: formatDescription(description)\n            }, void 0, false, {\n                fileName: \"/Users/koltonthompson/development/side-projects/kt-hygraph-portfolio/pages/about-me.tsx\",\n                lineNumber: 23,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    backgroundImage: heroImage,\n                    height: \"20px\"\n                },\n                alt: \"Hero\"\n            }, void 0, false, {\n                fileName: \"/Users/koltonthompson/development/side-projects/kt-hygraph-portfolio/pages/about-me.tsx\",\n                lineNumber: 24,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/koltonthompson/development/side-projects/kt-hygraph-portfolio/pages/about-me.tsx\",\n        lineNumber: 21,\n        columnNumber: 5\n    }, _this);\n};\n_c = AboutMe;\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (AboutMe);\nvar _c;\n$RefreshReg$(_c, \"AboutMe\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hYm91dC1tZS50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFTQSxJQUFNQSxVQUFVLFNBQUNDO0lBQ2YsSUFBUUMsUUFBd0NELE1BQXhDQyxPQUFPQyxjQUFpQ0YsTUFBakNFLGFBQWFDLE9BQW9CSCxNQUFwQkcsTUFBTUMsWUFBY0osTUFBZEk7SUFFbEMsSUFBTUMsb0JBQW9CLFNBQUNDO1FBQ3pCLElBQU1DLGFBQWFELEtBQUtFLE1BQU0sTUFBTUMsSUFBSSxTQUFDQyxXQUFXQztpQ0FDbEQsOERBQUNDOzBCQUFlRjtlQUFSQzs7Ozs7O1FBRVYsT0FBT0o7SUFDVDtJQUVBLHFCQUNFLDhEQUFDTTs7MEJBQ0MsOERBQUNDOzBCQUFJYjs7Ozs7OzBCQUNMLDhEQUFDWTswQkFBS1Isa0JBQWtCSDs7Ozs7OzBCQUN4Qiw4REFBQ1c7Z0JBQUlFLE9BQU87b0JBQUNDLGlCQUFpQlo7b0JBQVdhLFFBQVE7Z0JBQU07Z0JBQUdDLEtBQUk7Ozs7Ozs7Ozs7OztBQUdwRTtLQWpCTW5COztBQWlETiwrREFBZUEsT0FBT0EsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9hYm91dC1tZS50c3g/MDUzYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBHZXRTdGF0aWNQcm9wcyB9IGZyb20gXCJuZXh0XCJcblxudHlwZSBBYm91dE1lUHJvcHMgPSB7XG4gIHRpdGxlOiBzdHJpbmdcbiAgZGVzY3JpcHRpb246IHN0cmluZ1xuICBzbHVnOiBzdHJpbmdcbiAgaGVyb0ltYWdlPzogc3RyaW5nXG59XG5cbmNvbnN0IEFib3V0TWUgPSAocHJvcHM6IEFib3V0TWVQcm9wcykgPT4ge1xuICBjb25zdCB7IHRpdGxlLCBkZXNjcmlwdGlvbiwgc2x1ZywgaGVyb0ltYWdlIH0gPSBwcm9wc1xuXG4gIGNvbnN0IGZvcm1hdERlc2NyaXB0aW9uID0gKGh0bWw6IHN0cmluZykgPT4ge1xuICAgIGNvbnN0IHBhcmFncmFwaHMgPSBodG1sLnNwbGl0KFwiXFxuXCIpLm1hcCgocGFyYWdyYXBoLCBpbmRleCkgPT4gKFxuICAgICAgPHAga2V5PXtpbmRleH0+e3BhcmFncmFwaH08L3A+XG4gICAgKSk7XG4gICAgcmV0dXJuIHBhcmFncmFwaHM7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8aDE+e3RpdGxlfTwvaDE+XG4gICAgICA8ZGl2Pntmb3JtYXREZXNjcmlwdGlvbihkZXNjcmlwdGlvbil9PC9kaXY+XG4gICAgICA8ZGl2IHN0eWxlPXt7YmFja2dyb3VuZEltYWdlOiBoZXJvSW1hZ2UsIGhlaWdodDogJzIwcHgnfX0gYWx0PVwiSGVyb1wiIC8+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1Byb3BzOiBHZXRTdGF0aWNQcm9wczxBYm91dE1lUHJvcHM+ID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCBxdWVyeSA9IGBcbiAgICBxdWVyeSBBYm91dE1lUXVlcnkge1xuICAgICAgYmxvZ1BhZ2Uod2hlcmU6IHtzbHVnOiBcImFib3V0LW1lXCJ9KSB7XG4gICAgICAgIHRpdGxlXG4gICAgICAgIHNsdWdcbiAgICAgICAgZGVzY3JpcHRpb25cbiAgICAgICAgaGVyb0ltYWdlIHtcbiAgICAgICAgICB1cmxcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgYFxuXG4gIGNvbnN0IGJvZHkgPSB7IHF1ZXJ5IH1cbiAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2gocHJvY2Vzcy5lbnYuQVBJX0VORFBPSU5ULCB7XG4gICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeShib2R5KSxcbiAgfSlcbiAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCByZXMuanNvbigpXG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHtcbiAgICAgIHRpdGxlOiBkYXRhLmJsb2dQYWdlLnRpdGxlLFxuICAgICAgZGVzY3JpcHRpb246IGRhdGEuYmxvZ1BhZ2UuZGVzY3JpcHRpb24sXG4gICAgICBzbHVnOiBkYXRhLmJsb2dQYWdlLnNsdWcsXG4gICAgICBoZXJvSW1hZ2U6IGRhdGEuYmxvZ1BhZ2UuaGVyb0ltYWdlLnVybCxcbiAgICB9LFxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFib3V0TWVcbiJdLCJuYW1lcyI6WyJBYm91dE1lIiwicHJvcHMiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwic2x1ZyIsImhlcm9JbWFnZSIsImZvcm1hdERlc2NyaXB0aW9uIiwiaHRtbCIsInBhcmFncmFwaHMiLCJzcGxpdCIsIm1hcCIsInBhcmFncmFwaCIsImluZGV4IiwicCIsImRpdiIsImgxIiwic3R5bGUiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJoZWlnaHQiLCJhbHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/about-me.tsx\n"));

/***/ })

});