webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Movie.js":
/*!*****************************!*\
  !*** ./components/Movie.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
var _jsxFileName = "/Users/patrickmclennan/Documents/imdb_crawler/client/components/Movie.js";



var Movie = function Movie(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, "hello"));
};

/* harmony default export */ __webpack_exports__["default"] = (Movie);

/***/ }),

/***/ "./components/MovieGrid.js":
/*!*********************************!*\
  !*** ./components/MovieGrid.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _Movie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Movie */ "./components/Movie.js");
var _jsxFileName = "/Users/patrickmclennan/Documents/imdb_crawler/client/components/MovieGrid.js";



var Grid = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "MovieGrid__Grid",
  componentId: "sc-3l28hn-0"
})(["margin:2vh 2.5vw;border:1px solid black;display:grid;"]);

var MovieGrid = function MovieGrid(_ref) {
  var movies = _ref.movies;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Grid, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, "hello"), movies.map(function (movie) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Movie__WEBPACK_IMPORTED_MODULE_2__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      },
      __self: this
    });
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (MovieGrid);

/***/ })

})
//# sourceMappingURL=index.js.3ecf1ba0ff1fad9de1ae.hot-update.js.map