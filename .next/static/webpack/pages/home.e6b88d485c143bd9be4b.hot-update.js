"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/home",{

/***/ "./pages/home.js":
/*!***********************!*\
  !*** ./pages/home.js ***!
  \***********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ home; }\n/* harmony export */ });\n/* harmony import */ var _Users_Austin_WorkoutProject_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! js-cookie */ \"./node_modules/js-cookie/dist/js.cookie.mjs\");\n/* harmony import */ var react_cookie__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-cookie */ \"./node_modules/react-cookie/es6/index.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/Users/Austin/WorkoutProject/pages/home.js\",\n    _s = $RefreshSig$();\n\n\n // import { useLocation } from 'react-router-dom';\n// import { useHistory, withRouter } from \"react-router-dom\";\n\n // need to lear how to properly transfer this variable\n\n\nfunction home() {\n  _s();\n\n  // const user = jsCookie.get(\"user\");\n  var _useCookies = (0,react_cookie__WEBPACK_IMPORTED_MODULE_4__.useCookies)(['user']),\n      _useCookies2 = (0,_Users_Austin_WorkoutProject_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.default)(_useCookies, 1),\n      cookies = _useCookies2[0]; // this is an object\n\n\n  var myThing = Object.values(cookies)[1];\n  console.log(myThing);\n  console.log(typeof myThing); // works as string\n  // const myArray = myThing.split('');\n  // console.log(myArray);\n\n  console.log(myThing === null || myThing === void 0 ? void 0 : myThing.username);\n  console.log(myThing === null || myThing === void 0 ? void 0 : myThing.password);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"div\", {\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"h1\", {\n      children: \"Welcome to the fake homepage!\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 13\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 23,\n    columnNumber: 9\n  }, this);\n}\n\n_s(home, \"KWItf4Qn7XyeOw4JKNC6dqw2Uu4=\", false, function () {\n  return [react_cookie__WEBPACK_IMPORTED_MODULE_4__.useCookies];\n});\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9ob21lLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Q0FFQTtBQUNBOztDQUdBOzs7QUFDZSxTQUFTSSxJQUFULEdBQWdCO0FBQUE7O0FBQzNCO0FBQ0Esb0JBQWtCRCx3REFBVSxDQUFDLENBQUMsTUFBRCxDQUFELENBQTVCO0FBQUE7QUFBQSxNQUFPRSxPQUFQLG1CQUYyQixDQUVhOzs7QUFDeEMsTUFBTUMsT0FBTyxHQUFHQyxNQUFNLENBQUNDLE1BQVAsQ0FBY0gsT0FBZCxFQUF1QixDQUF2QixDQUFoQjtBQUVBSSxFQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWUosT0FBWjtBQUNBRyxFQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxPQUFPSixPQUFuQixFQU4yQixDQU1HO0FBQzlCO0FBQ0E7O0FBQ0FHLEVBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZSixPQUFaLGFBQVlBLE9BQVosdUJBQVlBLE9BQU8sQ0FBRUssUUFBckI7QUFDQUYsRUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlKLE9BQVosYUFBWUEsT0FBWix1QkFBWUEsT0FBTyxDQUFFTSxRQUFyQjtBQUlBLHNCQUNJO0FBQUEsMkJBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUFNSDs7R0FwQnVCUjtVQUVGRCIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9ob21lLmpzPzA4N2QiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBqc0Nvb2tpZSBmcm9tICdqcy1jb29raWUnO1xuLy8gaW1wb3J0IHsgdXNlTG9jYXRpb24gfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcbi8vIGltcG9ydCB7IHVzZUhpc3RvcnksIHdpdGhSb3V0ZXIgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuaW1wb3J0IHsgdXNlQ29va2llcyB9IGZyb20gXCJyZWFjdC1jb29raWVcIjtcblxuLy8gbmVlZCB0byBsZWFyIGhvdyB0byBwcm9wZXJseSB0cmFuc2ZlciB0aGlzIHZhcmlhYmxlXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBob21lKCkge1xuICAgIC8vIGNvbnN0IHVzZXIgPSBqc0Nvb2tpZS5nZXQoXCJ1c2VyXCIpO1xuICAgIGNvbnN0IFtjb29raWVzXSA9IHVzZUNvb2tpZXMoWyd1c2VyJ10pOyAvLyB0aGlzIGlzIGFuIG9iamVjdFxuICAgIGNvbnN0IG15VGhpbmcgPSBPYmplY3QudmFsdWVzKGNvb2tpZXMpWzFdO1xuICAgIFxuICAgIGNvbnNvbGUubG9nKG15VGhpbmcpO1xuICAgIGNvbnNvbGUubG9nKHR5cGVvZihteVRoaW5nKSk7IC8vIHdvcmtzIGFzIHN0cmluZ1xuICAgIC8vIGNvbnN0IG15QXJyYXkgPSBteVRoaW5nLnNwbGl0KCcnKTtcbiAgICAvLyBjb25zb2xlLmxvZyhteUFycmF5KTtcbiAgICBjb25zb2xlLmxvZyhteVRoaW5nPy51c2VybmFtZSk7XG4gICAgY29uc29sZS5sb2cobXlUaGluZz8ucGFzc3dvcmQpO1xuXG4gICAgXG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGgxPldlbGNvbWUgdG8gdGhlIGZha2UgaG9tZXBhZ2UhPC9oMT5cbiAgICAgICAgICAgIFxuICAgICAgICA8L2Rpdj5cbiAgICApXG59Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwianNDb29raWUiLCJ1c2VDb29raWVzIiwiaG9tZSIsImNvb2tpZXMiLCJteVRoaW5nIiwiT2JqZWN0IiwidmFsdWVzIiwiY29uc29sZSIsImxvZyIsInVzZXJuYW1lIiwicGFzc3dvcmQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/home.js\n");

/***/ })

});