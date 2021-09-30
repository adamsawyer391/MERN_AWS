"use strict";
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./components/Layout.js":
/*!******************************!*\
  !*** ./components/Layout.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\Adam\\AWSmaterial\\mern_app\\app\\components\\Layout.js";




const Layout = ({
  children
}) => {
  const head = () => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("link", {
    href: "https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/css/bootstrap.min.css",
    rel: "stylesheet",
    integrity: "sha384-F3w7mX95PdgyTmZZMECAngseQB83DfGTowi0iMjiWaeVhAn4FJkqJByhZMI3AhiU",
    crossorigin: "anonymous"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 9
  }, undefined);

  const nav = () => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("ul", {
    className: "nav nav-tabs bg-warning",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("li", {
      className: "nav-item",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("a", {
        className: "nav-link text-dark",
        href: "",
        children: "Home"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("li", {
      className: "nav-item",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("a", {
        className: "nav-link text-dark",
        href: "",
        children: "Login"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("li", {
      className: "nav-item",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("a", {
        className: "nav-link text-dark",
        href: "",
        children: "Register"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 17,
    columnNumber: 9
  }, undefined);

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), {
    children: [head(), " ", nav(), " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
      className: "container pt-5 pb-5",
      children: children
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 30
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 41,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Layout);

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\Adam\\AWSmaterial\\mern_app\\app\\pages\\index.js";



const HomePage = () => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_0__.default, {
  children: "Hello Next JS!"
}, void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 4,
  columnNumber: 24
}, undefined);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HomePage);

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZXMvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTs7O0FBRUEsTUFBTUUsTUFBTSxHQUFHLENBQUM7QUFBQ0MsRUFBQUE7QUFBRCxDQUFELEtBQWdCO0FBRTNCLFFBQU1DLElBQUksR0FBRyxtQkFDVDtBQUNJLFFBQUksRUFBQyx5RUFEVDtBQUVJLE9BQUcsRUFBQyxZQUZSO0FBR0ksYUFBUyxFQUFDLHlFQUhkO0FBSUksZUFBVyxFQUFDO0FBSmhCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESjs7QUFTQSxRQUFNQyxHQUFHLEdBQUcsbUJBQ1I7QUFBSSxhQUFTLEVBQUMseUJBQWQ7QUFBQSw0QkFFSTtBQUFJLGVBQVMsRUFBQyxVQUFkO0FBQUEsNkJBQ0k7QUFBRyxpQkFBUyxFQUFDLG9CQUFiO0FBQWtDLFlBQUksRUFBQyxFQUF2QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRkosZUFRSTtBQUFJLGVBQVMsRUFBQyxVQUFkO0FBQUEsNkJBQ0k7QUFBRyxpQkFBUyxFQUFDLG9CQUFiO0FBQWtDLFlBQUksRUFBQyxFQUF2QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBUkosZUFjSTtBQUFJLGVBQVMsRUFBQyxVQUFkO0FBQUEsNkJBQ0k7QUFBRyxpQkFBUyxFQUFDLG9CQUFiO0FBQWtDLFlBQUksRUFBQyxFQUF2QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBZEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREo7O0FBd0JBLHNCQUNJLDhEQUFDLHVEQUFEO0FBQUEsZUFDS0QsSUFBSSxFQURULE9BQ2NDLEdBQUcsRUFEakIsb0JBQ3FCO0FBQUssZUFBUyxFQUFDLHFCQUFmO0FBQUEsZ0JBQXNDRjtBQUF0QztBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESjtBQU1ILENBekNEOztBQTBDQSxpRUFBZUQsTUFBZjs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDN0NBOzs7QUFFQSxNQUFNSSxRQUFRLEdBQUcsbUJBQU0sOERBQUMsdURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFBdkI7O0FBRUEsaUVBQWVBLFFBQWY7Ozs7Ozs7Ozs7QUNMQTs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hcHAvLi9jb21wb25lbnRzL0xheW91dC5qcyIsIndlYnBhY2s6Ly9hcHAvLi9wYWdlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly9hcHAvZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly9hcHAvZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovL2FwcC9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIl0sInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCJcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcclxuXHJcbmNvbnN0IExheW91dCA9ICh7Y2hpbGRyZW59KSA9PiB7XHJcblxyXG4gICAgY29uc3QgaGVhZCA9ICgpID0+IChcclxuICAgICAgICA8bGluayBcclxuICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9ucG0vYm9vdHN0cmFwQDUuMS4xL2Rpc3QvY3NzL2Jvb3RzdHJhcC5taW4uY3NzXCIgXHJcbiAgICAgICAgICAgIHJlbD1cInN0eWxlc2hlZXRcIiBcclxuICAgICAgICAgICAgaW50ZWdyaXR5PVwic2hhMzg0LUYzdzdtWDk1UGRneVRtWlpNRUNBbmdzZVFCODNEZkdUb3dpMGlNamlXYWVWaEFuNEZKa3FKQnloWk1JM0FoaVVcIiBcclxuICAgICAgICAgICAgY3Jvc3NvcmlnaW49XCJhbm9ueW1vdXNcIiBcclxuICAgICAgICAvPlxyXG4gICAgKVxyXG5cclxuICAgIGNvbnN0IG5hdiA9ICgpID0+IChcclxuICAgICAgICA8dWwgY2xhc3NOYW1lPVwibmF2IG5hdi10YWJzIGJnLXdhcm5pbmdcIj5cclxuXHJcbiAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2LWxpbmsgdGV4dC1kYXJrXCIgaHJlZj1cIlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIEhvbWVcclxuICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgPC9saT5cclxuXHJcbiAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2LWxpbmsgdGV4dC1kYXJrXCIgaHJlZj1cIlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIExvZ2luXHJcbiAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgIDwvbGk+XHJcblxyXG4gICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5cclxuICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdi1saW5rIHRleHQtZGFya1wiIGhyZWY9XCJcIj5cclxuICAgICAgICAgICAgICAgICAgICBSZWdpc3RlclxyXG4gICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICA8L2xpPlxyXG5cclxuICAgICAgICA8L3VsPlxyXG4gICAgKVxyXG5cclxuICAgIHJldHVybihcclxuICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgICAgIHtoZWFkKCl9IHtuYXYoKX0gPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgcHQtNSBwYi01XCI+e2NoaWxkcmVufTwvZGl2PlxyXG4gICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICApXHJcbiAgICBcclxufVxyXG5leHBvcnQgZGVmYXVsdCBMYXlvdXQiLCJcclxuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL0xheW91dCdcclxuXHJcbmNvbnN0IEhvbWVQYWdlID0gKCkgPT4gPExheW91dD5IZWxsbyBOZXh0IEpTITwvTGF5b3V0PlxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSG9tZVBhZ2UiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2hlYWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyJdLCJuYW1lcyI6WyJSZWFjdCIsIkhlYWQiLCJMYXlvdXQiLCJjaGlsZHJlbiIsImhlYWQiLCJuYXYiLCJIb21lUGFnZSJdLCJzb3VyY2VSb290IjoiIn0=