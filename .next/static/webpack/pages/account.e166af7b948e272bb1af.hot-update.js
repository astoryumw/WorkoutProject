"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/account",{

/***/ "./pages/account.js":
/*!**************************!*\
  !*** ./pages/account.js ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Account; }\n/* harmony export */ });\n/* harmony import */ var _Users_austinstory_projects_WorkoutProject_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _Users_austinstory_projects_WorkoutProject_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var _Users_austinstory_projects_WorkoutProject_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _Users_austinstory_projects_WorkoutProject_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Users_austinstory_projects_WorkoutProject_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_MyLayout_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/MyLayout.js */ \"./components/MyLayout.js\");\n/* harmony import */ var react_cookie__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-cookie */ \"./node_modules/react-cookie/es6/index.js\");\n/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../lib/utils */ \"./lib/utils.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nvar _jsxFileName = \"/Users/austinstory/projects/WorkoutProject/pages/account.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\nfunction Account() {\n  _s();\n\n  var _useCookies = (0,react_cookie__WEBPACK_IMPORTED_MODULE_7__.useCookies)(['user']),\n      _useCookies2 = (0,_Users_austinstory_projects_WorkoutProject_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__.default)(_useCookies, 1),\n      cookies = _useCookies2[0]; // this is an object\n\n\n  var myThing = Object.values(cookies)[1]; // console.log(myThing);\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)({\n    username: \"\",\n    password: \"\"\n  }),\n      account = _useState[0],\n      setAccount = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\"),\n      profilePhoto = _useState2[0],\n      setProfilePhoto = _useState2[1];\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false),\n      clicked = _useState3[0],\n      setClicked = _useState3[1]; // can change account based on an id will need to add to postgresql database, add a serial number to each\n\n\n  function handleUsername(evt) {\n    setAccount({\n      username: evt.target.value,\n      password: account.password\n    });\n  }\n\n  function handlePassword(evt) {\n    setAccount({\n      username: account.username,\n      password: evt.target.value\n    });\n  } // puts the image in the variable\n\n\n  function handleImage(evt) {\n    setProfilePhoto(evt.target.value);\n  }\n\n  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function () {\n    if (clicked) {\n      console.log(\"Clicked\");\n\n      var sendImage = /*#__PURE__*/function () {\n        var _ref = (0,_Users_austinstory_projects_WorkoutProject_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/_Users_austinstory_projects_WorkoutProject_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee() {\n          var send;\n          return _Users_austinstory_projects_WorkoutProject_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee$(_context) {\n            while (1) {\n              switch (_context.prev = _context.next) {\n                case 0:\n                  _context.next = 2;\n                  return (0,_lib_utils__WEBPACK_IMPORTED_MODULE_5__.postPhoto)(profilePhoto);\n\n                case 2:\n                  send = _context.sent;\n\n                case 3:\n                case \"end\":\n                  return _context.stop();\n              }\n            }\n          }, _callee);\n        }));\n\n        return function sendImage() {\n          return _ref.apply(this, arguments);\n        };\n      }();\n\n      sendImage();\n    }\n  }, [clicked]);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_components_MyLayout_js__WEBPACK_IMPORTED_MODULE_4__.default, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"h3\", {\n      children: \"Enter information you wish to change below.\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 53,\n      columnNumber: 13\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"p\", {\n      children: [\"Username: \", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"input\", {\n        type: \"text\",\n        value: account.username,\n        onChange: handleUsername\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 54,\n        columnNumber: 26\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 54,\n      columnNumber: 13\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"p\", {\n      children: [\"Password: \", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"input\", {\n        type: \"password\",\n        value: account.password,\n        onChange: handlePassword\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 55,\n        columnNumber: 26\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 55,\n      columnNumber: 13\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"button\", {\n      onClick: function onClick() {\n        return setClicked(true);\n      },\n      children: \"Upload\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 57,\n      columnNumber: 13\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"button\", {\n      children: \"Update\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 58,\n      columnNumber: 13\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 52,\n    columnNumber: 9\n  }, this);\n}\n\n_s(Account, \"YwcyY+5B/iU0v8jCcpGgQt20yNE=\", false, function () {\n  return [react_cookie__WEBPACK_IMPORTED_MODULE_7__.useCookies];\n});\n\n_c = Account;\n\nvar _c;\n\n$RefreshReg$(_c, \"Account\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFBQTtBQUFBLFlBTEosZUFNSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQU5KO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBVUg7O0dBdkR1Qlo7VUFDRkY7OztLQURFRSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9hY2NvdW50LmpzPzcxZDYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9NeUxheW91dC5qcyc7XG5pbXBvcnQgeyB1c2VDb29raWVzIH0gZnJvbSBcInJlYWN0LWNvb2tpZVwiO1xuaW1wb3J0IHsgcG9zdFBob3RvIH0gZnJvbSAnLi4vbGliL3V0aWxzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQWNjb3VudCgpe1xuICAgIGNvbnN0IFtjb29raWVzXSA9IHVzZUNvb2tpZXMoWyd1c2VyJ10pOyAvLyB0aGlzIGlzIGFuIG9iamVjdFxuICAgIGNvbnN0IG15VGhpbmcgPSBPYmplY3QudmFsdWVzKGNvb2tpZXMpWzFdO1xuICAgIC8vIGNvbnNvbGUubG9nKG15VGhpbmcpO1xuICAgIGNvbnN0IFthY2NvdW50LHNldEFjY291bnRdID0gdXNlU3RhdGUoe1xuICAgICAgICB1c2VybmFtZTogXCJcIixcbiAgICAgICAgcGFzc3dvcmQ6IFwiXCJcbiAgICB9KTtcbiAgICBjb25zdCBbcHJvZmlsZVBob3RvLHNldFByb2ZpbGVQaG90b10gPSB1c2VTdGF0ZShcIlwiKTtcbiAgICBjb25zdCBbY2xpY2tlZCxzZXRDbGlja2VkXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICAgIC8vIGNhbiBjaGFuZ2UgYWNjb3VudCBiYXNlZCBvbiBhbiBpZCB3aWxsIG5lZWQgdG8gYWRkIHRvIHBvc3RncmVzcWwgZGF0YWJhc2UsIGFkZCBhIHNlcmlhbCBudW1iZXIgdG8gZWFjaFxuXG5cbiAgICBmdW5jdGlvbiBoYW5kbGVVc2VybmFtZShldnQpIHtcbiAgICAgICAgc2V0QWNjb3VudCh7XG4gICAgICAgICAgICB1c2VybmFtZTogZXZ0LnRhcmdldC52YWx1ZSxcbiAgICAgICAgICAgIHBhc3N3b3JkOiBhY2NvdW50LnBhc3N3b3JkXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaGFuZGxlUGFzc3dvcmQoZXZ0KSB7XG4gICAgICAgIHNldEFjY291bnQoe1xuICAgICAgICAgICAgdXNlcm5hbWU6IGFjY291bnQudXNlcm5hbWUsXG4gICAgICAgICAgICBwYXNzd29yZDogZXZ0LnRhcmdldC52YWx1ZVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIC8vIHB1dHMgdGhlIGltYWdlIGluIHRoZSB2YXJpYWJsZVxuICAgIGZ1bmN0aW9uIGhhbmRsZUltYWdlKGV2dCkge1xuICAgICAgICBzZXRQcm9maWxlUGhvdG8oZXZ0LnRhcmdldC52YWx1ZSk7XG4gICAgfVxuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgXG4gICAgICAgIGlmIChjbGlja2VkKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkNsaWNrZWRcIik7XG4gICAgICAgICAgICBjb25zdCBzZW5kSW1hZ2UgPSBhc3luYyAoKSA9PiB7XG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJzZW5kSW1hZ2VcIik7XG4gICAgICAgICAgICAgICAgY29uc3Qgc2VuZCA9IGF3YWl0IHBvc3RQaG90byhwcm9maWxlUGhvdG8pO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHNlbmRJbWFnZSgpO1xuICAgICAgICB9XG4gICAgfSwgW2NsaWNrZWRdKTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxMYXlvdXQ+XG4gICAgICAgICAgICA8aDM+RW50ZXIgaW5mb3JtYXRpb24geW91IHdpc2ggdG8gY2hhbmdlIGJlbG93LjwvaDM+XG4gICAgICAgICAgICA8cD5Vc2VybmFtZTogPGlucHV0IHR5cGU9XCJ0ZXh0XCIgdmFsdWU9e2FjY291bnQudXNlcm5hbWV9IG9uQ2hhbmdlPXtoYW5kbGVVc2VybmFtZX0gLz48L3A+XG4gICAgICAgICAgICA8cD5QYXNzd29yZDogPGlucHV0IHR5cGU9XCJwYXNzd29yZFwiIHZhbHVlPXthY2NvdW50LnBhc3N3b3JkfSBvbkNoYW5nZT17aGFuZGxlUGFzc3dvcmR9IC8+PC9wPlxuICAgICAgICAgICAgey8qIDxwPlNlbGVjdCBuZXcgcHJvZmlsZSBwaWN0dXJlOiA8aW5wdXQgdHlwZT1cImZpbGVcIiB2YWx1ZT17cHJvZmlsZVBob3RvfSBvbkNoYW5nZT17aGFuZGxlSW1hZ2V9IC8+PC9wPiAqL31cbiAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gc2V0Q2xpY2tlZCh0cnVlKX0+VXBsb2FkPC9idXR0b24+XG4gICAgICAgICAgICA8YnV0dG9uPlVwZGF0ZTwvYnV0dG9uPlxuICAgICAgICA8L0xheW91dD5cbiAgICApXG59Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJMYXlvdXQiLCJ1c2VDb29raWVzIiwicG9zdFBob3RvIiwiQWNjb3VudCIsImNvb2tpZXMiLCJteVRoaW5nIiwiT2JqZWN0IiwidmFsdWVzIiwidXNlcm5hbWUiLCJwYXNzd29yZCIsImFjY291bnQiLCJzZXRBY2NvdW50IiwicHJvZmlsZVBob3RvIiwic2V0UHJvZmlsZVBob3RvIiwiY2xpY2tlZCIsInNldENsaWNrZWQiLCJoYW5kbGVVc2VybmFtZSIsImV2dCIsInRhcmdldCIsInZhbHVlIiwiaGFuZGxlUGFzc3dvcmQiLCJoYW5kbGVJbWFnZSIsImNvbnNvbGUiLCJsb2ciLCJzZW5kSW1hZ2UiLCJzZW5kIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/account.js\n");

/***/ })

});