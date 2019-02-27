webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/MovieGrid.js":
/*!*********************************!*\
  !*** ./components/MovieGrid.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/values */ "./node_modules/@babel/runtime-corejs2/core-js/object/values.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _Movie__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Movie */ "./components/Movie.js");

var _jsxFileName = "/Users/patrickmclennan/Documents/imdb_crawler/client/components/MovieGrid.js";



var Grid = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "MovieGrid__Grid",
  componentId: "sc-3l28hn-0"
})(["display:grid;margin:2vh 2.5vw;border:1px solid black;"]);

var MovieGrid = function MovieGrid(_ref) {
  var movies = _ref.movies;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Grid, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, [_babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_0___default()(movies)][0].map(function (movie) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Movie__WEBPACK_IMPORTED_MODULE_3__["default"], {
      movie: movie,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      },
      __self: this
    });
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (MovieGrid);

/***/ })

})
//# sourceMappingURL=index.js.a3d9c92add595ca351fc.hot-update.js.map