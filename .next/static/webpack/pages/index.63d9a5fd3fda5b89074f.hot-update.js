"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/login.js":
/*!*****************************!*\
  !*** ./components/login.js ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Login; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/utils */ \"./lib/utils.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar _jsxFileName = \"/Users/Austin/WorkoutProject/components/login.js\",\n    _s = $RefreshSig$();\n\n\n\n\nfunction Login() {\n  _s();\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({\n    username: \"\",\n    password: \"\"\n  }),\n      user = _useState[0],\n      setUser = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),\n      loggedInTry = _useState2[0],\n      setLoggedInTry = _useState2[1]; // set loggedIn to true when user is logged in, then go to home page, make sure username and password match\n\n\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {\n    (0,_lib_utils__WEBPACK_IMPORTED_MODULE_1__.loginUser)(user.username, user.password);\n  }, [loggedInTry]);\n\n  function handleUsername(evt) {\n    setUser({\n      username: evt.target.value,\n      password: user.password\n    });\n  }\n\n  function handlePassword(evt) {\n    setUser({\n      username: user.username,\n      password: evt.target.value\n    });\n  }\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"div\", {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"p\", {\n      children: [\"Username: \", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"input\", {\n        type: \"text\",\n        value: user.username,\n        onChange: handleUsername\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 32,\n        columnNumber: 26\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 13\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"p\", {\n      children: [\"Password: \", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"input\", {\n        type: \"text\",\n        value: user.password,\n        onChange: handlePassword\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 33,\n        columnNumber: 26\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 13\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"button\", {\n      onClick: function onClick() {\n        return setLoggedInTry(true);\n      },\n      children: \"Log in\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 13\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 31,\n    columnNumber: 9\n  }, this);\n}\n\n_s(Login, \"nLt6/wm4k/Tloc37My9gqP+zJ3Q=\");\n\n_c = Login;\n\nvar _c;\n\n$RefreshReg$(_c, \"Login\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2xvZ2luLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVlLFNBQVNJLEtBQVQsR0FBaUI7QUFBQTs7QUFDNUIsa0JBQXFCSCwrQ0FBUSxDQUFDO0FBQzFCSSxJQUFBQSxRQUFRLEVBQUUsRUFEZ0I7QUFFMUJDLElBQUFBLFFBQVEsRUFBRTtBQUZnQixHQUFELENBQTdCO0FBQUEsTUFBS0MsSUFBTDtBQUFBLE1BQVVDLE9BQVY7O0FBSUEsbUJBQXFDUCwrQ0FBUSxDQUFDLEtBQUQsQ0FBN0M7QUFBQSxNQUFPUSxXQUFQO0FBQUEsTUFBbUJDLGNBQW5CLGlCQUw0QixDQU81Qjs7O0FBQ0FSLEVBQUFBLGdEQUFTLENBQUMsWUFBTTtBQUNaQyxJQUFBQSxxREFBUyxDQUFDSSxJQUFJLENBQUNGLFFBQU4sRUFBZUUsSUFBSSxDQUFDRCxRQUFwQixDQUFUO0FBQ0gsR0FGUSxFQUVOLENBQUNHLFdBQUQsQ0FGTSxDQUFUOztBQUlBLFdBQVNFLGNBQVQsQ0FBd0JDLEdBQXhCLEVBQTZCO0FBQ3pCSixJQUFBQSxPQUFPLENBQUM7QUFDSkgsTUFBQUEsUUFBUSxFQUFFTyxHQUFHLENBQUNDLE1BQUosQ0FBV0MsS0FEakI7QUFFSlIsTUFBQUEsUUFBUSxFQUFFQyxJQUFJLENBQUNEO0FBRlgsS0FBRCxDQUFQO0FBSUg7O0FBRUQsV0FBU1MsY0FBVCxDQUF3QkgsR0FBeEIsRUFBNkI7QUFDekJKLElBQUFBLE9BQU8sQ0FBQztBQUNKSCxNQUFBQSxRQUFRLEVBQUVFLElBQUksQ0FBQ0YsUUFEWDtBQUVKQyxNQUFBQSxRQUFRLEVBQUVNLEdBQUcsQ0FBQ0MsTUFBSixDQUFXQztBQUZqQixLQUFELENBQVA7QUFJSDs7QUFFRCxzQkFDSTtBQUFBLDRCQUNJO0FBQUEsNENBQWE7QUFBTyxZQUFJLEVBQUMsTUFBWjtBQUFtQixhQUFLLEVBQUVQLElBQUksQ0FBQ0YsUUFBL0I7QUFBeUMsZ0JBQVEsRUFBRU07QUFBbkQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURKLGVBRUk7QUFBQSw0Q0FBYTtBQUFPLFlBQUksRUFBQyxNQUFaO0FBQW1CLGFBQUssRUFBRUosSUFBSSxDQUFDRCxRQUEvQjtBQUF5QyxnQkFBUSxFQUFFUztBQUFuRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRkosZUFHSTtBQUFRLGFBQU8sRUFBRTtBQUFBLGVBQU1MLGNBQWMsQ0FBQyxJQUFELENBQXBCO0FBQUEsT0FBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFISjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQU9IOztHQWpDdUJOOztLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2xvZ2luLmpzPzRmOWIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBsb2dpblVzZXIgfSBmcm9tICcuLi9saWIvdXRpbHMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMb2dpbigpIHtcbiAgICBsZXQgW3VzZXIsc2V0VXNlcl0gPSB1c2VTdGF0ZSh7XG4gICAgICAgIHVzZXJuYW1lOiBcIlwiLFxuICAgICAgICBwYXNzd29yZDogXCJcIlxuICAgIH0pO1xuICAgIGNvbnN0IFtsb2dnZWRJblRyeSxzZXRMb2dnZWRJblRyeV0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgICAvLyBzZXQgbG9nZ2VkSW4gdG8gdHJ1ZSB3aGVuIHVzZXIgaXMgbG9nZ2VkIGluLCB0aGVuIGdvIHRvIGhvbWUgcGFnZSwgbWFrZSBzdXJlIHVzZXJuYW1lIGFuZCBwYXNzd29yZCBtYXRjaFxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGxvZ2luVXNlcih1c2VyLnVzZXJuYW1lLHVzZXIucGFzc3dvcmQpO1xuICAgIH0sIFtsb2dnZWRJblRyeV0pO1xuXG4gICAgZnVuY3Rpb24gaGFuZGxlVXNlcm5hbWUoZXZ0KSB7XG4gICAgICAgIHNldFVzZXIoe1xuICAgICAgICAgICAgdXNlcm5hbWU6IGV2dC50YXJnZXQudmFsdWUsXG4gICAgICAgICAgICBwYXNzd29yZDogdXNlci5wYXNzd29yZCBcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaGFuZGxlUGFzc3dvcmQoZXZ0KSB7XG4gICAgICAgIHNldFVzZXIoe1xuICAgICAgICAgICAgdXNlcm5hbWU6IHVzZXIudXNlcm5hbWUsXG4gICAgICAgICAgICBwYXNzd29yZDogZXZ0LnRhcmdldC52YWx1ZVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8cD5Vc2VybmFtZTogPGlucHV0IHR5cGU9XCJ0ZXh0XCIgdmFsdWU9e3VzZXIudXNlcm5hbWV9IG9uQ2hhbmdlPXtoYW5kbGVVc2VybmFtZX0gLz48L3A+XG4gICAgICAgICAgICA8cD5QYXNzd29yZDogPGlucHV0IHR5cGU9XCJ0ZXh0XCIgdmFsdWU9e3VzZXIucGFzc3dvcmR9IG9uQ2hhbmdlPXtoYW5kbGVQYXNzd29yZH0gLz48L3A+XG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHNldExvZ2dlZEluVHJ5KHRydWUpfT5Mb2cgaW48L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufSJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwibG9naW5Vc2VyIiwiTG9naW4iLCJ1c2VybmFtZSIsInBhc3N3b3JkIiwidXNlciIsInNldFVzZXIiLCJsb2dnZWRJblRyeSIsInNldExvZ2dlZEluVHJ5IiwiaGFuZGxlVXNlcm5hbWUiLCJldnQiLCJ0YXJnZXQiLCJ2YWx1ZSIsImhhbmRsZVBhc3N3b3JkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/login.js\n");

/***/ })

});