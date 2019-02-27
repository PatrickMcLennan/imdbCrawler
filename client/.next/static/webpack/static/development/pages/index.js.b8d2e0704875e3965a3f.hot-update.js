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


var Card = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].figure.withConfig({
  displayName: "Movie__Card",
  componentId: "ekuqby-0"
})(["display:inline-flex;margin:1.5vh;padding:1.5vh;border:1px solid black;cursor:pointer;transition:all 0.3s ease-in-out;overflow:hidden;& img{height:150px;width:auto;margin-right:1.5vh;}& figcaption{display:flex;flex-direction:column;justify-content:space-evenly;align-items:center;}& a{border:1px solid black;padding:1rem 2rem;transform:translateY(100%) & span{font-style:italic;}}&:hover{transform:scale(1.1);}"]);

var Movie = function Movie(_ref) {
  var _ref$movie = _ref.movie,
      title = _ref$movie.title,
      link = _ref$movie.link,
      picture = _ref$movie.picture,
      release = _ref$movie.release,
      rating = _ref$movie.rating;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Card, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: picture,
    alt: title,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("figcaption", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, rating), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, release), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: link,
    target: "_blank",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, title), " IMDB")));
};

/* harmony default export */ __webpack_exports__["default"] = (Movie);

/***/ })

})
//# sourceMappingURL=index.js.b8d2e0704875e3965a3f.hot-update.js.map