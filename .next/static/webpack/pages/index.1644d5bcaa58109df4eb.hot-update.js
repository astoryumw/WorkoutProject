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

/***/ "./components/signup.js":
/*!******************************!*\
  !*** ./components/signup.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ SignUp; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/utils */ \"./lib/utils.js\");\n/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap/Button */ \"./node_modules/react-bootstrap/esm/Button.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar _jsxFileName = \"/Users/austinstory/projects/WorkoutProject/components/signup.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\nfunction SignUp() {\n  _s();\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({\n    username: \"\",\n    password: \"\"\n  }),\n      user = _useState[0],\n      setUser = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),\n      signUpTry = _useState2[0],\n      setSignUpTry = _useState2[1];\n\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {\n    if (signUpTry) {\n      var signup = (0,_lib_utils__WEBPACK_IMPORTED_MODULE_1__.signUpUser)(user.username, user.password); // console.log(signup);\n    }\n  }, [signUpTry]);\n\n  function handleUsername(evt) {\n    setUser({\n      username: evt.target.value,\n      password: user.password\n    });\n  }\n\n  function handlePassword(evt) {\n    setUser({\n      username: user.username,\n      password: evt.target.value\n    });\n  }\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"div\", {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"p\", {\n      children: [\"Username: \", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"input\", {\n        type: \"text\",\n        value: user.username,\n        onChange: handleUsername\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 35,\n        columnNumber: 26\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 13\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"p\", {\n      children: [\"Password: \", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"input\", {\n        type: \"password\",\n        value: user.password,\n        onChange: handlePassword\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 36,\n        columnNumber: 26\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 13\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_3__.default, {\n      variant: \"secondary\",\n      onClick: function onClick() {\n        return setSignUpTry(true);\n      },\n      children: \"Sign Up\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 13\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 34,\n    columnNumber: 9\n  }, this);\n}\n\n_s(SignUp, \"drgdYV9oQRY/3eWDoSUmENL2v5Y=\");\n\n_c = SignUp;\n\nvar _c;\n\n$RefreshReg$(_c, \"SignUp\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3NpZ251cC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFZSxTQUFTSyxNQUFULEdBQWtCO0FBQUE7O0FBQzdCLGtCQUFxQkosK0NBQVEsQ0FBQztBQUMxQkssSUFBQUEsUUFBUSxFQUFFLEVBRGdCO0FBRTFCQyxJQUFBQSxRQUFRLEVBQUU7QUFGZ0IsR0FBRCxDQUE3QjtBQUFBLE1BQUtDLElBQUw7QUFBQSxNQUFVQyxPQUFWOztBQUlBLG1CQUFpQ1IsK0NBQVEsQ0FBQyxLQUFELENBQXpDO0FBQUEsTUFBT1MsU0FBUDtBQUFBLE1BQWlCQyxZQUFqQjs7QUFFQVQsRUFBQUEsZ0RBQVMsQ0FBQyxZQUFNO0FBQ1osUUFBSVEsU0FBSixFQUFlO0FBQ1gsVUFBTUUsTUFBTSxHQUFHVCxzREFBVSxDQUFDSyxJQUFJLENBQUNGLFFBQU4sRUFBZUUsSUFBSSxDQUFDRCxRQUFwQixDQUF6QixDQURXLENBRVg7QUFDSDtBQUNKLEdBTFEsRUFLUCxDQUFDRyxTQUFELENBTE8sQ0FBVDs7QUFPQSxXQUFTRyxjQUFULENBQXdCQyxHQUF4QixFQUE2QjtBQUN6QkwsSUFBQUEsT0FBTyxDQUFDO0FBQ0pILE1BQUFBLFFBQVEsRUFBRVEsR0FBRyxDQUFDQyxNQUFKLENBQVdDLEtBRGpCO0FBRUpULE1BQUFBLFFBQVEsRUFBRUMsSUFBSSxDQUFDRDtBQUZYLEtBQUQsQ0FBUDtBQUlIOztBQUVELFdBQVNVLGNBQVQsQ0FBd0JILEdBQXhCLEVBQTZCO0FBQ3pCTCxJQUFBQSxPQUFPLENBQUM7QUFDSkgsTUFBQUEsUUFBUSxFQUFFRSxJQUFJLENBQUNGLFFBRFg7QUFFSkMsTUFBQUEsUUFBUSxFQUFFTyxHQUFHLENBQUNDLE1BQUosQ0FBV0M7QUFGakIsS0FBRCxDQUFQO0FBSUg7O0FBRUQsc0JBQ0k7QUFBQSw0QkFDSTtBQUFBLDRDQUFhO0FBQU8sWUFBSSxFQUFDLE1BQVo7QUFBbUIsYUFBSyxFQUFFUixJQUFJLENBQUNGLFFBQS9CO0FBQXlDLGdCQUFRLEVBQUVPO0FBQW5EO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFESixlQUVJO0FBQUEsNENBQWE7QUFBTyxZQUFJLEVBQUMsVUFBWjtBQUF1QixhQUFLLEVBQUVMLElBQUksQ0FBQ0QsUUFBbkM7QUFBNkMsZ0JBQVEsRUFBRVU7QUFBdkQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZKLGVBR0ksOERBQUMsMkRBQUQ7QUFBUSxhQUFPLEVBQUMsV0FBaEI7QUFBNEIsYUFBTyxFQUFFO0FBQUEsZUFBTU4sWUFBWSxDQUFDLElBQUQsQ0FBbEI7QUFBQSxPQUFyQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUhKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBT0g7O0dBbkN1Qk47O0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvc2lnbnVwLmpzP2IxMWEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBzaWduVXBVc2VyIH0gZnJvbSBcIi4uL2xpYi91dGlsc1wiO1xuaW1wb3J0IEJ1dHRvbiBmcm9tICdyZWFjdC1ib290c3RyYXAvQnV0dG9uJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2lnblVwKCkge1xuICAgIGxldCBbdXNlcixzZXRVc2VyXSA9IHVzZVN0YXRlKHtcbiAgICAgICAgdXNlcm5hbWU6IFwiXCIsXG4gICAgICAgIHBhc3N3b3JkOiBcIlwiXG4gICAgfSlcbiAgICBjb25zdCBbc2lnblVwVHJ5LHNldFNpZ25VcFRyeV0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBpZiAoc2lnblVwVHJ5KSB7XG4gICAgICAgICAgICBjb25zdCBzaWdudXAgPSBzaWduVXBVc2VyKHVzZXIudXNlcm5hbWUsdXNlci5wYXNzd29yZCk7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhzaWdudXApO1xuICAgICAgICB9XG4gICAgfSxbc2lnblVwVHJ5XSk7XG5cbiAgICBmdW5jdGlvbiBoYW5kbGVVc2VybmFtZShldnQpIHtcbiAgICAgICAgc2V0VXNlcih7XG4gICAgICAgICAgICB1c2VybmFtZTogZXZ0LnRhcmdldC52YWx1ZSxcbiAgICAgICAgICAgIHBhc3N3b3JkOiB1c2VyLnBhc3N3b3JkXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaGFuZGxlUGFzc3dvcmQoZXZ0KSB7XG4gICAgICAgIHNldFVzZXIoe1xuICAgICAgICAgICAgdXNlcm5hbWU6IHVzZXIudXNlcm5hbWUsXG4gICAgICAgICAgICBwYXNzd29yZDogZXZ0LnRhcmdldC52YWx1ZVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8cD5Vc2VybmFtZTogPGlucHV0IHR5cGU9XCJ0ZXh0XCIgdmFsdWU9e3VzZXIudXNlcm5hbWV9IG9uQ2hhbmdlPXtoYW5kbGVVc2VybmFtZX0gLz48L3A+XG4gICAgICAgICAgICA8cD5QYXNzd29yZDogPGlucHV0IHR5cGU9XCJwYXNzd29yZFwiIHZhbHVlPXt1c2VyLnBhc3N3b3JkfSBvbkNoYW5nZT17aGFuZGxlUGFzc3dvcmR9IC8+PC9wPlxuICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwic2Vjb25kYXJ5XCIgb25DbGljaz17KCkgPT4gc2V0U2lnblVwVHJ5KHRydWUpfT5TaWduIFVwPC9CdXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn0iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInNpZ25VcFVzZXIiLCJCdXR0b24iLCJTaWduVXAiLCJ1c2VybmFtZSIsInBhc3N3b3JkIiwidXNlciIsInNldFVzZXIiLCJzaWduVXBUcnkiLCJzZXRTaWduVXBUcnkiLCJzaWdudXAiLCJoYW5kbGVVc2VybmFtZSIsImV2dCIsInRhcmdldCIsInZhbHVlIiwiaGFuZGxlUGFzc3dvcmQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/signup.js\n");

/***/ })

});