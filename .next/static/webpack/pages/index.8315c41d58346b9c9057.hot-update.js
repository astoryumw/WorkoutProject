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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Login; }\n/* harmony export */ });\n/* harmony import */ var _Users_Austin_WorkoutProject_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _Users_Austin_WorkoutProject_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var _Users_Austin_WorkoutProject_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _Users_Austin_WorkoutProject_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Users_Austin_WorkoutProject_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../lib/utils */ \"./lib/utils.js\");\n/* harmony import */ var _lib_getUser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../lib/getUser */ \"./lib/getUser.js\");\n/* harmony import */ var _lib_getUser__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_lib_getUser__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var next_dist_shared_lib_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/dist/shared/lib/utils */ \"./node_modules/next/dist/shared/lib/utils.js\");\n/* harmony import */ var next_dist_shared_lib_utils__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_dist_shared_lib_utils__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! js-cookie */ \"./node_modules/js-cookie/dist/js.cookie.mjs\");\n/* harmony import */ var react_cookie__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-cookie */ \"./node_modules/react-cookie/es6/index.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nvar _jsxFileName = \"/Users/Austin/WorkoutProject/components/login.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\n\nfunction Login() {\n  _s();\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)({\n    username: \"\",\n    password: \"\"\n  }),\n      user = _useState[0],\n      setUser = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]),\n      account = _useState2[0],\n      setAccount = _useState2[1];\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false),\n      loggedInTry = _useState3[0],\n      setLoggedInTry = _useState3[1];\n\n  var _useState4 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false),\n      validUser = _useState4[0],\n      setValidUser = _useState4[1]; // const history = useHistory();\n  // const router = useRouter();\n  // const navigate = useNavigate();\n\n\n  var _useCookies = (0,react_cookie__WEBPACK_IMPORTED_MODULE_10__.useCookies)(),\n      _useCookies2 = (0,_Users_Austin_WorkoutProject_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__.default)(_useCookies, 2),\n      cookies = _useCookies2[0],\n      setCookie = _useCookies2[1];\n\n  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function () {\n    if (validUser) {\n      // if logged in correctly send it to next page\n      // console.log(account.username);\n      // router.push({\n      //     pathname: \"/home\",\n      //     params: {data: {account}}\n      // });\n      // navigate('/home',\n      // {state: account });\n      // history.push('/home', {prop1: account});\n      // jsCookie.set(\"user\", account);\n      // console.log(jsCookie.get(\"user\"));\n      setCookie(user, account);\n      next_router__WEBPACK_IMPORTED_MODULE_6___default().replace(\"/home\");\n    }\n  }, [validUser]);\n\n  function handleLogin() {\n    return _handleLogin.apply(this, arguments);\n  }\n\n  function _handleLogin() {\n    _handleLogin = (0,_Users_Austin_WorkoutProject_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/_Users_Austin_WorkoutProject_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee() {\n      var login, myUser;\n      return _Users_Austin_WorkoutProject_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              _context.prev = 0;\n              _context.next = 3;\n              return (0,_lib_utils__WEBPACK_IMPORTED_MODULE_4__.loginUser)(user.username, user.password);\n\n            case 3:\n              login = _context.sent;\n\n              if (!(login.status === 200)) {\n                _context.next = 13;\n                break;\n              }\n\n              _context.next = 7;\n              return (0,_lib_getUser__WEBPACK_IMPORTED_MODULE_5__.getInfo)(user.username);\n\n            case 7:\n              myUser = _context.sent;\n              console.log(myUser[0].username);\n              setAccount(myUser[0]); // console.log(account);\n\n              setValidUser(true);\n              _context.next = 14;\n              break;\n\n            case 13:\n              if (login.status === 401) {\n                setValidUser(false);\n              } else {\n                console.log(\"idk man\");\n              }\n\n            case 14:\n              _context.next = 19;\n              break;\n\n            case 16:\n              _context.prev = 16;\n              _context.t0 = _context[\"catch\"](0);\n              console.log(_context.t0);\n\n            case 19:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee, null, [[0, 16]]);\n    }));\n    return _handleLogin.apply(this, arguments);\n  }\n\n  function handleUsername(evt) {\n    setUser({\n      username: evt.target.value,\n      password: user.password\n    });\n  }\n\n  function handlePassword(evt) {\n    setUser({\n      username: user.username,\n      password: evt.target.value\n    });\n  } // onClick={() => setLoggedInTry(true)}\n\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(\"div\", {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(\"p\", {\n      children: [\"Username: \", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(\"input\", {\n        type: \"text\",\n        value: user.username,\n        onChange: handleUsername\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 81,\n        columnNumber: 26\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 81,\n      columnNumber: 13\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(\"p\", {\n      children: [\"Password: \", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(\"input\", {\n        type: \"password\",\n        value: user.password,\n        onChange: handlePassword\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 82,\n        columnNumber: 26\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 82,\n      columnNumber: 13\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(\"button\", {\n      onClick: handleLogin,\n      children: \"Log In\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 83,\n      columnNumber: 13\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 80,\n    columnNumber: 9\n  }, this);\n}\n\n_s(Login, \"B5Wv+uFPzRPrEsrLzXmL+RvOvag=\", false, function () {\n  return [react_cookie__WEBPACK_IMPORTED_MODULE_10__.useCookies];\n});\n\n_c = Login;\n\nvar _c;\n\n$RefreshReg$(_c, \"Login\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFRLEVBQUVFLElBQUksQ0FBQ0YsUUFEWDtBQUVKQyxNQUFBQSxRQUFRLEVBQUVtQixHQUFHLENBQUNDLE1BQUosQ0FBV0M7QUFGakIsS0FBRCxDQUFQO0FBSUgsR0FqRTJCLENBbUU1Qjs7O0FBQ0Esc0JBQ0k7QUFBQSw0QkFDSTtBQUFBLDRDQUFhO0FBQU8sWUFBSSxFQUFDLE1BQVo7QUFBbUIsYUFBSyxFQUFFcEIsSUFBSSxDQUFDRixRQUEvQjtBQUF5QyxnQkFBUSxFQUFFbUI7QUFBbkQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURKLGVBRUk7QUFBQSw0Q0FBYTtBQUFPLFlBQUksRUFBQyxVQUFaO0FBQXVCLGFBQUssRUFBRWpCLElBQUksQ0FBQ0QsUUFBbkM7QUFBNkMsZ0JBQVEsRUFBRXNCO0FBQXZEO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGSixlQUdJO0FBQVEsYUFBTyxFQUFFVixXQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUhKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBT0g7O0dBM0V1QmQ7VUFXU0Q7OztLQVhUQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2xvZ2luLmpzPzRmOWIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBsb2dpblVzZXIgfSBmcm9tICcuLi9saWIvdXRpbHMnO1xuaW1wb3J0IHsgZ2V0SW5mbyB9IGZyb20gJy4uL2xpYi9nZXRVc2VyJztcbmltcG9ydCBSb3V0ZXIsIHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgeyB1c2VIaXN0b3J5LCB3aXRoUm91dGVyIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcbmltcG9ydCB7IGxvYWRHZXRJbml0aWFsUHJvcHMgfSBmcm9tICduZXh0L2Rpc3Qvc2hhcmVkL2xpYi91dGlscyc7XG5pbXBvcnQgeyB1c2VOYXZpZ2F0ZSB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuaW1wb3J0IGpzQ29va2llIGZyb20gJ2pzLWNvb2tpZSc7XG5pbXBvcnQgeyB1c2VDb29raWVzIH0gZnJvbSBcInJlYWN0LWNvb2tpZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMb2dpbigpIHtcbiAgICBsZXQgW3VzZXIsc2V0VXNlcl0gPSB1c2VTdGF0ZSh7XG4gICAgICAgIHVzZXJuYW1lOiBcIlwiLFxuICAgICAgICBwYXNzd29yZDogXCJcIlxuICAgIH0pO1xuICAgIGxldCBbYWNjb3VudCxzZXRBY2NvdW50XSA9IHVzZVN0YXRlKFtdKTtcbiAgICBjb25zdCBbbG9nZ2VkSW5Ucnksc2V0TG9nZ2VkSW5UcnldID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgIGNvbnN0IFt2YWxpZFVzZXIsc2V0VmFsaWRVc2VyXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgICAvLyBjb25zdCBoaXN0b3J5ID0gdXNlSGlzdG9yeSgpO1xuICAgIC8vIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICAgIC8vIGNvbnN0IG5hdmlnYXRlID0gdXNlTmF2aWdhdGUoKTtcbiAgICBjb25zdCBbY29va2llcywgc2V0Q29va2llXSA9IHVzZUNvb2tpZXMoKTtcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGlmICh2YWxpZFVzZXIpIHtcbiAgICAgICAgICAgIC8vIGlmIGxvZ2dlZCBpbiBjb3JyZWN0bHkgc2VuZCBpdCB0byBuZXh0IHBhZ2VcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGFjY291bnQudXNlcm5hbWUpO1xuICAgICAgICAgICAgLy8gcm91dGVyLnB1c2goe1xuICAgICAgICAgICAgLy8gICAgIHBhdGhuYW1lOiBcIi9ob21lXCIsXG4gICAgICAgICAgICAvLyAgICAgcGFyYW1zOiB7ZGF0YToge2FjY291bnR9fVxuICAgICAgICAgICAgLy8gfSk7XG4gICAgICAgICAgICAvLyBuYXZpZ2F0ZSgnL2hvbWUnLFxuICAgICAgICAgICAgLy8ge3N0YXRlOiBhY2NvdW50IH0pO1xuICAgICAgICAgICAgLy8gaGlzdG9yeS5wdXNoKCcvaG9tZScsIHtwcm9wMTogYWNjb3VudH0pO1xuICAgICAgICAgICAgLy8ganNDb29raWUuc2V0KFwidXNlclwiLCBhY2NvdW50KTtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGpzQ29va2llLmdldChcInVzZXJcIikpO1xuICAgICAgICAgICAgc2V0Q29va2llKHVzZXIsIGFjY291bnQpO1xuICAgICAgICAgICAgUm91dGVyLnJlcGxhY2UoXCIvaG9tZVwiKTtcbiAgICAgICAgfVxuICAgIH0sIFt2YWxpZFVzZXJdKVxuXG4gICAgYXN5bmMgZnVuY3Rpb24gaGFuZGxlTG9naW4oKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBpIG5lZWQgdG8gdGVzdCBpZiB1c2VybmFtZSBpcyB0aGVyZVxuICAgICAgICAgICAgY29uc3QgbG9naW4gPSBhd2FpdCBsb2dpblVzZXIodXNlci51c2VybmFtZSx1c2VyLnBhc3N3b3JkKTsgXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhsb2dpbik7XG4gICAgICAgICAgICBpZiAobG9naW4uc3RhdHVzID09PSAyMDApIHtcbiAgICAgICAgICAgICAgICBjb25zdCBteVVzZXIgPSBhd2FpdCBnZXRJbmZvKHVzZXIudXNlcm5hbWUpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKG15VXNlclswXS51c2VybmFtZSk7XG4gICAgICAgICAgICAgICAgc2V0QWNjb3VudChteVVzZXJbMF0pO1xuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGFjY291bnQpO1xuICAgICAgICAgICAgICAgIHNldFZhbGlkVXNlcih0cnVlKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAobG9naW4uc3RhdHVzID09PSA0MDEpIHtcbiAgICAgICAgICAgICAgICBzZXRWYWxpZFVzZXIoZmFsc2UpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImlkayBtYW5cIik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaGFuZGxlVXNlcm5hbWUoZXZ0KSB7XG4gICAgICAgIHNldFVzZXIoe1xuICAgICAgICAgICAgdXNlcm5hbWU6IGV2dC50YXJnZXQudmFsdWUsXG4gICAgICAgICAgICBwYXNzd29yZDogdXNlci5wYXNzd29yZCBcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaGFuZGxlUGFzc3dvcmQoZXZ0KSB7XG4gICAgICAgIHNldFVzZXIoe1xuICAgICAgICAgICAgdXNlcm5hbWU6IHVzZXIudXNlcm5hbWUsXG4gICAgICAgICAgICBwYXNzd29yZDogZXZ0LnRhcmdldC52YWx1ZVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIC8vIG9uQ2xpY2s9eygpID0+IHNldExvZ2dlZEluVHJ5KHRydWUpfVxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8cD5Vc2VybmFtZTogPGlucHV0IHR5cGU9XCJ0ZXh0XCIgdmFsdWU9e3VzZXIudXNlcm5hbWV9IG9uQ2hhbmdlPXtoYW5kbGVVc2VybmFtZX0gLz48L3A+XG4gICAgICAgICAgICA8cD5QYXNzd29yZDogPGlucHV0IHR5cGU9XCJwYXNzd29yZFwiIHZhbHVlPXt1c2VyLnBhc3N3b3JkfSBvbkNoYW5nZT17aGFuZGxlUGFzc3dvcmR9IC8+PC9wPlxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVMb2dpbn0+TG9nIEluPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn0iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsImxvZ2luVXNlciIsImdldEluZm8iLCJSb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJ1c2VIaXN0b3J5Iiwid2l0aFJvdXRlciIsImxvYWRHZXRJbml0aWFsUHJvcHMiLCJ1c2VOYXZpZ2F0ZSIsImpzQ29va2llIiwidXNlQ29va2llcyIsIkxvZ2luIiwidXNlcm5hbWUiLCJwYXNzd29yZCIsInVzZXIiLCJzZXRVc2VyIiwiYWNjb3VudCIsInNldEFjY291bnQiLCJsb2dnZWRJblRyeSIsInNldExvZ2dlZEluVHJ5IiwidmFsaWRVc2VyIiwic2V0VmFsaWRVc2VyIiwiY29va2llcyIsInNldENvb2tpZSIsInJlcGxhY2UiLCJoYW5kbGVMb2dpbiIsImxvZ2luIiwic3RhdHVzIiwibXlVc2VyIiwiY29uc29sZSIsImxvZyIsImhhbmRsZVVzZXJuYW1lIiwiZXZ0IiwidGFyZ2V0IiwidmFsdWUiLCJoYW5kbGVQYXNzd29yZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/login.js\n");

/***/ })

});