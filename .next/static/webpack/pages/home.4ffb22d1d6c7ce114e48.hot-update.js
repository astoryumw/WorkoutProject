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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ home; }\n/* harmony export */ });\n/* harmony import */ var _Users_austinstory_projects_WorkoutProject_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _Users_austinstory_projects_WorkoutProject_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var _Users_austinstory_projects_WorkoutProject_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _Users_austinstory_projects_WorkoutProject_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Users_austinstory_projects_WorkoutProject_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! js-cookie */ \"./node_modules/js-cookie/dist/js.cookie.mjs\");\n/* harmony import */ var react_cookie__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-cookie */ \"./node_modules/react-cookie/es6/index.js\");\n/* harmony import */ var _components_MyLayout_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/MyLayout.js */ \"./components/MyLayout.js\");\n/* harmony import */ var _lib_getWorkouts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../lib/getWorkouts */ \"./lib/getWorkouts.js\");\n/* harmony import */ var _lib_getWorkouts__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_lib_getWorkouts__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nvar _jsxFileName = \"/Users/austinstory/projects/WorkoutProject/pages/home.js\",\n    _s = $RefreshSig$();\n\n\n\n // import { useLocation } from 'react-router-dom';\n// import { useHistory, withRouter } from \"react-router-dom\";\n\n\n\n // need to lear how to properly transfer this variable\n\n\nfunction home() {\n  _s();\n\n  var _this = this;\n\n  // const user = jsCookie.get(\"user\");\n  var _useCookies = (0,react_cookie__WEBPACK_IMPORTED_MODULE_8__.useCookies)(['user']),\n      _useCookies2 = (0,_Users_austinstory_projects_WorkoutProject_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__.default)(_useCookies, 1),\n      cookies = _useCookies2[0]; // this is an object\n\n\n  var myThing = Object.values(cookies)[1];\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)({\n    workout: []\n  }),\n      info = _useState[0],\n      setInfo = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false),\n      value = _useState2[0],\n      setValue = _useState2[1]; // console.log(myThing);\n  // console.log(typeof(myThing)); // works as object\n  // console.log(myThing?.username);\n  // console.log(myThing?.password);\n  // should show the workouts upon page load\n  // in promise, promiseresult, workout, how to call?\n\n\n  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function () {\n    var fetchData = /*#__PURE__*/function () {\n      var _ref = (0,_Users_austinstory_projects_WorkoutProject_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/_Users_austinstory_projects_WorkoutProject_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee() {\n        var list, justBecause, workoutSet, i, u;\n        return _Users_austinstory_projects_WorkoutProject_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                _context.next = 2;\n                return (0,_lib_getWorkouts__WEBPACK_IMPORTED_MODULE_6__.getList)();\n\n              case 2:\n                list = _context.sent;\n                setValue(true);\n                console.log(list.workout[0].workout[0]); // each element is correct here\n                // just made a seperate array because no previousState in functional components\n\n                justBecause = [];\n                workoutSet = [];\n\n                for (i = 0; i < list.workout.length; i++) {\n                  for (u = 0; u < list.workout[i].workout[0].length; u++) {\n                    if (u + 1 === list.workout[i].workout[0].length) {\n                      workoutSet = workoutSet + list.workout[i].workout[0][u];\n                    } else {\n                      workoutSet = workoutSet + list.workout[i].workout[0][u] + \", \";\n                    }\n                  }\n\n                  justBecause = justBecause + \"[\" + workoutSet + \"]\" + \"\\n\";\n                  workoutSet = [];\n                }\n\n                setInfo({\n                  workout: justBecause.split('\\n').map(function (str) {\n                    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"p\", {\n                      children: str\n                    }, void 0, false, {\n                      fileName: _jsxFileName,\n                      lineNumber: 49,\n                      columnNumber: 59\n                    }, _this);\n                  })\n                }); // console.log(list.workout[0]);\n\n              case 9:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee);\n      }));\n\n      return function fetchData() {\n        return _ref.apply(this, arguments);\n      };\n    }();\n\n    fetchData();\n  }, [value]);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_components_MyLayout_js__WEBPACK_IMPORTED_MODULE_5__.default, {\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"div\", {\n      children: info ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"p\", {\n          children: info.workout\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 67,\n          columnNumber: 25\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 66,\n        columnNumber: 21\n      }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"h1\", {\n        children: \"Ahhh I'm going to kill myself! I'm going to kill myself and it's your fault!\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 70,\n        columnNumber: 21\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 58,\n      columnNumber: 13\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 57,\n    columnNumber: 9\n  }, this);\n}\n\n_s(home, \"EgN20ZhVgsT5G3SLD5qBDTuRiGk=\", false, function () {\n  return [react_cookie__WEBPACK_IMPORTED_MODULE_8__.useCookies];\n});\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQUEsT0FBZjs7QUF3QkFBLElBQUFBLFNBQVM7QUFDWixHQTFCUSxFQTBCTixDQUFDRixLQUFELENBMUJNLENBQVQ7QUE0QkEsc0JBQ0ksOERBQUMsNERBQUQ7QUFBQSwyQkFDSTtBQUFBLGdCQU9LRixJQUFJLGdCQUNEO0FBQUEsK0JBQ0k7QUFBQSxvQkFBSUEsSUFBSSxDQUFDRDtBQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREMsZ0JBS0Q7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFaUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBb0JIOztHQWxFdUJMO1VBRUZIIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2hvbWUuanM/MDg3ZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBqc0Nvb2tpZSBmcm9tICdqcy1jb29raWUnO1xuLy8gaW1wb3J0IHsgdXNlTG9jYXRpb24gfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcbi8vIGltcG9ydCB7IHVzZUhpc3RvcnksIHdpdGhSb3V0ZXIgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuaW1wb3J0IHsgdXNlQ29va2llcyB9IGZyb20gXCJyZWFjdC1jb29raWVcIjtcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9NeUxheW91dC5qcyc7XG5pbXBvcnQgeyBnZXRMaXN0IH0gZnJvbSBcIi4uL2xpYi9nZXRXb3Jrb3V0c1wiO1xuXG4vLyBuZWVkIHRvIGxlYXIgaG93IHRvIHByb3Blcmx5IHRyYW5zZmVyIHRoaXMgdmFyaWFibGVcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGhvbWUoKSB7XG4gICAgLy8gY29uc3QgdXNlciA9IGpzQ29va2llLmdldChcInVzZXJcIik7XG4gICAgY29uc3QgW2Nvb2tpZXNdID0gdXNlQ29va2llcyhbJ3VzZXInXSk7IC8vIHRoaXMgaXMgYW4gb2JqZWN0XG4gICAgY29uc3QgbXlUaGluZyA9IE9iamVjdC52YWx1ZXMoY29va2llcylbMV07XG4gICAgY29uc3QgW2luZm8sc2V0SW5mb10gPSB1c2VTdGF0ZSh7XG4gICAgICAgIHdvcmtvdXQ6IFtdXG4gICAgfSk7XG4gICAgY29uc3QgW3ZhbHVlLHNldFZhbHVlXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgICBcbiAgICBcbiAgICAvLyBjb25zb2xlLmxvZyhteVRoaW5nKTtcbiAgICAvLyBjb25zb2xlLmxvZyh0eXBlb2YobXlUaGluZykpOyAvLyB3b3JrcyBhcyBvYmplY3RcblxuICAgIC8vIGNvbnNvbGUubG9nKG15VGhpbmc/LnVzZXJuYW1lKTtcbiAgICAvLyBjb25zb2xlLmxvZyhteVRoaW5nPy5wYXNzd29yZCk7XG5cbiAgICAvLyBzaG91bGQgc2hvdyB0aGUgd29ya291dHMgdXBvbiBwYWdlIGxvYWRcbiAgICAvLyBpbiBwcm9taXNlLCBwcm9taXNlcmVzdWx0LCB3b3Jrb3V0LCBob3cgdG8gY2FsbD9cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBjb25zdCBmZXRjaERhdGEgPSBhc3luYyAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBsaXN0ID0gYXdhaXQgZ2V0TGlzdCgpO1xuICAgICAgICAgICAgc2V0VmFsdWUodHJ1ZSk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhsaXN0LndvcmtvdXRbMF0ud29ya291dFswXSk7IC8vIGVhY2ggZWxlbWVudCBpcyBjb3JyZWN0IGhlcmVcbiAgICAgICAgICAgIC8vIGp1c3QgbWFkZSBhIHNlcGVyYXRlIGFycmF5IGJlY2F1c2Ugbm8gcHJldmlvdXNTdGF0ZSBpbiBmdW5jdGlvbmFsIGNvbXBvbmVudHNcbiAgICAgICAgICAgIHZhciBqdXN0QmVjYXVzZSA9IFtdO1xuICAgICAgICAgICAgdmFyIHdvcmtvdXRTZXQgPSBbXTtcbiAgICAgICAgICAgIGZvciAodmFyIGk9MDsgaTxsaXN0LndvcmtvdXQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciB1PTA7IHU8bGlzdC53b3Jrb3V0W2ldLndvcmtvdXRbMF0ubGVuZ3RoOyB1KyspIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHUrMT09PWxpc3Qud29ya291dFtpXS53b3Jrb3V0WzBdLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgd29ya291dFNldCA9IHdvcmtvdXRTZXQgKyBsaXN0LndvcmtvdXRbaV0ud29ya291dFswXVt1XTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdvcmtvdXRTZXQgPSB3b3Jrb3V0U2V0ICsgbGlzdC53b3Jrb3V0W2ldLndvcmtvdXRbMF1bdV0gKyBcIiwgXCI7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGp1c3RCZWNhdXNlID0ganVzdEJlY2F1c2UgKyBcIltcIiArIHdvcmtvdXRTZXQgKyBcIl1cIiArIFwiXFxuXCI7XG4gICAgICAgICAgICAgICAgd29ya291dFNldCA9IFtdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc2V0SW5mbyh7XG4gICAgICAgICAgICAgICAgd29ya291dDoganVzdEJlY2F1c2Uuc3BsaXQoJ1xcbicpLm1hcChzdHI9PjxwPntzdHJ9PC9wPilcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2cobGlzdC53b3Jrb3V0WzBdKTtcbiAgICAgICAgfVxuICAgICAgICBmZXRjaERhdGEoKTtcbiAgICB9LCBbdmFsdWVdKTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxMYXlvdXQ+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIHsvKiB7bXlUaGluZyA/IChcbiAgICAgICAgICAgICAgICAgICAgPGgxPntteVRoaW5nLnVzZXJuYW1lfTwvaDE+XG4gICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgICAgPGgxPk5ldyBwaG9uZSB3aG8gZGlzPC9oMT5cbiAgICAgICAgICAgICAgICApfSAqL31cbiAgICAgICAgICAgICAgICB7aW5mbyA/IChcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPntpbmZvLndvcmtvdXR9PC9wPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgICA8aDE+QWhoaCBJJ20gZ29pbmcgdG8ga2lsbCBteXNlbGYhIEknbSBnb2luZyB0byBraWxsIG15c2VsZiBhbmQgaXQncyB5b3VyIGZhdWx0ITwvaDE+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L0xheW91dD5cbiAgICApXG59Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJqc0Nvb2tpZSIsInVzZUNvb2tpZXMiLCJMYXlvdXQiLCJnZXRMaXN0IiwiaG9tZSIsImNvb2tpZXMiLCJteVRoaW5nIiwiT2JqZWN0IiwidmFsdWVzIiwid29ya291dCIsImluZm8iLCJzZXRJbmZvIiwidmFsdWUiLCJzZXRWYWx1ZSIsImZldGNoRGF0YSIsImxpc3QiLCJjb25zb2xlIiwibG9nIiwianVzdEJlY2F1c2UiLCJ3b3Jrb3V0U2V0IiwiaSIsImxlbmd0aCIsInUiLCJzcGxpdCIsIm1hcCIsInN0ciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/home.js\n");

/***/ })

});