webpackHotUpdate(5,{

/***/ "./components/footer.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_grommet__ = __webpack_require__("./node_modules/grommet/es6/index.js");
var _jsxFileName = "/Users/Martin/PycharmProjects/drinks-counter/components/footer.js";

(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();




var Footer = function Footer() {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_grommet__["a" /* Box */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_grommet__["a" /* Box */], {
    align: "center",
    pad: "xsmall",
    background: "dark-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, "we got a fucking counter bois"));
};

var _default = Footer;
/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Footer, "Footer", "/Users/Martin/PycharmProjects/drinks-counter/components/footer.js");
  reactHotLoader.register(_default, "default", "/Users/Martin/PycharmProjects/drinks-counter/components/footer.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./components/header.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_grommet__ = __webpack_require__("./node_modules/grommet/es6/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_link__ = __webpack_require__("./node_modules/next/link.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_next_link__);
var _jsxFileName = "/Users/Martin/PycharmProjects/drinks-counter/components/header.js";

(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();





var Header = function Header() {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_grommet__["a" /* Box */], {
    direction: "row",
    pad: "medium",
    align: "center",
    justify: "between",
    background: "dark-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_grommet__["a" /* Box */], {
    direction: "row",
    justify: "left",
    gap: "small",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_grommet__["d" /* Heading */], {
    margin: "none",
    level: "3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, "Counter")));
};

var _default = Header;
/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Header, "Header", "/Users/Martin/PycharmProjects/drinks-counter/components/header.js");
  reactHotLoader.register(_default, "default", "/Users/Martin/PycharmProjects/drinks-counter/components/header.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./components/layout.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_grommet__ = __webpack_require__("./node_modules/grommet/es6/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_head__ = __webpack_require__("./node_modules/next/head.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_head___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_next_head__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__header__ = __webpack_require__("./components/header.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__footer__ = __webpack_require__("./components/footer.js");
var _jsxFileName = "/Users/Martin/PycharmProjects/drinks-counter/components/layout.js";

(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();


 // import { materiallight } from 'grommet-controls/themes';





var Layout = function Layout(props) {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_grommet__["c" /* Grommet */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_next_head___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }, "counter")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__header__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }), props.children, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__footer__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    }
  }));
};

var _default = Layout;
/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Layout, "Layout", "/Users/Martin/PycharmProjects/drinks-counter/components/layout.js");
  reactHotLoader.register(_default, "default", "/Users/Martin/PycharmProjects/drinks-counter/components/layout.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./node_modules/grommet/es6/components/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Anchor__ = __webpack_require__("./node_modules/grommet/es6/components/Anchor/index.js");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Box__ = __webpack_require__("./node_modules/grommet/es6/components/Box/index.js");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__Box__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Button__ = __webpack_require__("./node_modules/grommet/es6/components/Button/index.js");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Calendar__ = __webpack_require__("./node_modules/grommet/es6/components/Calendar/index.js");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Carousel__ = __webpack_require__("./node_modules/grommet/es6/components/Carousel/index.js");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_4__Carousel__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Chart__ = __webpack_require__("./node_modules/grommet/es6/components/Chart/index.js");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__CheckBox__ = __webpack_require__("./node_modules/grommet/es6/components/CheckBox/index.js");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Clock__ = __webpack_require__("./node_modules/grommet/es6/components/Clock/index.js");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__Diagram__ = __webpack_require__("./node_modules/grommet/es6/components/Diagram/index.js");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__Distribution__ = __webpack_require__("./node_modules/grommet/es6/components/Distribution/index.js");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__Drop__ = __webpack_require__("./node_modules/grommet/es6/components/Drop/index.js");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__DropButton__ = __webpack_require__("./node_modules/grommet/es6/components/DropButton/index.js");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__FormField__ = __webpack_require__("./node_modules/grommet/es6/components/FormField/index.js");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__Grid__ = __webpack_require__("./node_modules/grommet/es6/components/Grid/index.js");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__Grommet__ = __webpack_require__("./node_modules/grommet/es6/components/Grommet/index.js");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_14__Grommet__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__Heading__ = __webpack_require__("./node_modules/grommet/es6/components/Heading/index.js");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_15__Heading__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__Image__ = __webpack_require__("./node_modules/grommet/es6/components/Image/index.js");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_16__Image__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__InfiniteScroll__ = __webpack_require__("./node_modules/grommet/es6/components/InfiniteScroll/index.js");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__Keyboard__ = __webpack_require__("./node_modules/grommet/es6/components/Keyboard/index.js");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__Layer__ = __webpack_require__("./node_modules/grommet/es6/components/Layer/index.js");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__Markdown__ = __webpack_require__("./node_modules/grommet/es6/components/Markdown/index.js");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__Menu__ = __webpack_require__("./node_modules/grommet/es6/components/Menu/index.js");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__Meter__ = __webpack_require__("./node_modules/grommet/es6/components/Meter/index.js");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__Paragraph__ = __webpack_require__("./node_modules/grommet/es6/components/Paragraph/index.js");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_23__Paragraph__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__RadioButton__ = __webpack_require__("./node_modules/grommet/es6/components/RadioButton/index.js");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__RangeInput__ = __webpack_require__("./node_modules/grommet/es6/components/RangeInput/index.js");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__RangeSelector__ = __webpack_require__("./node_modules/grommet/es6/components/RangeSelector/index.js");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__Responsive__ = __webpack_require__("./node_modules/grommet/es6/components/Responsive/index.js");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__Select__ = __webpack_require__("./node_modules/grommet/es6/components/Select/index.js");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__SkipLinks__ = __webpack_require__("./node_modules/grommet/es6/components/SkipLinks/index.js");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__Stack__ = __webpack_require__("./node_modules/grommet/es6/components/Stack/index.js");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __WEBPACK_IMPORTED_MODULE_30__Stack__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__Table__ = __webpack_require__("./node_modules/grommet/es6/components/Table/index.js");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__Tabs__ = __webpack_require__("./node_modules/grommet/es6/components/Tabs/index.js");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__Text__ = __webpack_require__("./node_modules/grommet/es6/components/Text/index.js");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "h", function() { return __WEBPACK_IMPORTED_MODULE_33__Text__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__TextArea__ = __webpack_require__("./node_modules/grommet/es6/components/TextArea/index.js");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__TextInput__ = __webpack_require__("./node_modules/grommet/es6/components/TextInput/index.js");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__Video__ = __webpack_require__("./node_modules/grommet/es6/components/Video/index.js");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__WorldMap__ = __webpack_require__("./node_modules/grommet/es6/components/WorldMap/index.js");
/* unused harmony namespace reexport */







































/***/ }),

/***/ "./node_modules/grommet/es6/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components__ = __webpack_require__("./node_modules/grommet/es6/components/index.js");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__components__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__components__["b"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_0__components__["c"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_0__components__["d"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_0__components__["e"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_0__components__["f"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __WEBPACK_IMPORTED_MODULE_0__components__["g"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "h", function() { return __WEBPACK_IMPORTED_MODULE_0__components__["h"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__themes__ = __webpack_require__("./node_modules/grommet/es6/themes/index.js");
/* unused harmony namespace reexport */



/***/ }),

/***/ "./pages/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_grommet__ = __webpack_require__("./node_modules/grommet/es6/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_grommet_controls__ = __webpack_require__("./node_modules/grommet-controls/es6/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_grommet_controls_components_Card__ = __webpack_require__("./node_modules/grommet-controls/components/Card/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_grommet_controls_components_Card___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_grommet_controls_components_Card__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_grommet_icons__ = __webpack_require__("./node_modules/grommet-icons/es6/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_layout__ = __webpack_require__("./components/layout.js");
var _jsxFileName = "/Users/Martin/PycharmProjects/drinks-counter/pages/index.js";

(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();








var Index = function Index() {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__components_layout__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_grommet__["a" /* Box */], {
    direction: "column",
    align: "center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }, "hello"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_grommet__["a" /* Box */], {
    align: "center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_grommet__["d" /* Heading */], {
    size: "medium",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    }
  }, "Our Services"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_grommet__["a" /* Box */], {
    direction: "row",
    wrap: "true",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_grommet_controls__["a" /* Card */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_grommet_controls_components_Card__["CardTitle"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_grommet_icons__["u" /* Twitter */], {
    color: "accent-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    }
  })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_grommet_controls_components_Card__["CardContent"], {
    align: "center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_grommet__["d" /* Heading */], {
    size: "small",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    }
  }, "Horizontal Twitter"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_grommet__["f" /* Paragraph */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    }
  }, "Multiple studies have shown that horizontal people are the leaders and influencers in every industry. By rotating your twitter profile, we will make it a must-follow for every celebrity."))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_grommet_controls__["a" /* Card */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_grommet_controls_components_Card__["CardTitle"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_grommet_icons__["e" /* Facebook */], {
    color: "neutral-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    }
  })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_grommet_controls_components_Card__["CardContent"], {
    align: "center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_grommet__["d" /* Heading */], {
    size: "small",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    }
  }, "Horizontal Facebook"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_grommet__["f" /* Paragraph */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    }
  }, "Since the brain of horizontal people functions at a higher speed, they can like and share up to 40 posts per minute. Switching to a horizontal Facebook page design will make your community go viral in no time."))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_grommet_controls__["a" /* Card */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_grommet_controls_components_Card__["CardTitle"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_grommet_icons__["h" /* Google */], {
    color: "neutral-1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    }
  })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_grommet_controls_components_Card__["CardContent"], {
    align: "center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_grommet__["d" /* Heading */], {
    size: "small",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    }
  }, "Horizontal Google"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_grommet__["f" /* Paragraph */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    }
  }, "Massively horizontal computing is the new name in super-high performance computing. By simply rotating your CPU, we will allow you to train artificial intelligence models in nano-seconds without ever needing another GPU.")))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_grommet__["a" /* Box */], {
    pad: "large",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_grommet__["b" /* Carousel */], {
    play: "5000",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_grommet__["g" /* Stack */], {
    anchor: "center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_grommet__["a" /* Box */], {
    align: "center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_grommet__["e" /* Image */], {
    style: {
      width: '100%',
      height: 'auto'
    },
    src: "http://www.horizontalworking.com/static/media/uploads/gallery/Horizontal_Conference.jpg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    }
  })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_grommet__["a" /* Box */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_grommet__["d" /* Heading */], {
    level: "3",
    textAlign: "center",
    color: "light-1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    }
  }, "Horizontal Working Symposium 2016"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_grommet__["h" /* Text */], {
    textAlign: "center",
    color: "light-1",
    size: "medium",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    }
  }, "This year we met in Ubud, where the horizontal spirit is well and alive. Other side activities included 90\xB0 yoga, sideways meditation and horizontastic dancing."))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_grommet__["g" /* Stack */], {
    anchor: "center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_grommet__["a" /* Box */], {
    align: "center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_grommet__["e" /* Image */], {
    style: {
      width: '100%',
      height: 'auto'
    },
    src: "http://www.horizontalworking.com/static/media/uploads/gallery/Horizontal_Master.jpg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    }
  })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_grommet__["a" /* Box */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_grommet__["d" /* Heading */], {
    level: "3",
    textAlign: "center",
    color: "light-1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    }
  }, "Semi Left Style"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_grommet__["h" /* Text */], {
    textAlign: "center",
    color: "light-1",
    size: "medium",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    }
  }, "Dr.U practcies semi-left horizontal working, as it leaves a hand available for smoking."))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_grommet__["g" /* Stack */], {
    anchor: "center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_grommet__["a" /* Box */], {
    align: "center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_grommet__["e" /* Image */], {
    style: {
      width: '70%',
      height: 'auto'
    },
    src: "http://www.horizontalworking.com/static/media/uploads/gallery/millenials.jpg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    }
  })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_grommet__["a" /* Box */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_grommet__["d" /* Heading */], {
    level: "3",
    textAlign: "center",
    color: "light-1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    }
  }, "Horizontal Learning and The Millenials"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_grommet__["h" /* Text */], {
    textAlign: "center",
    color: "light-1",
    size: "medium",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    }
  }, "Students practicing horizontal learning achieve SAT scores higher by 200+ points compared to traditional vertical learners."))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_grommet__["g" /* Stack */], {
    anchor: "center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_grommet__["a" /* Box */], {
    align: "center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_grommet__["e" /* Image */], {
    style: {
      width: '70%',
      height: 'auto'
    },
    src: "http://www.horizontalworking.com/static/media/uploads/gallery/Surfer_Style.jpg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    }
  })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_grommet__["a" /* Box */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_grommet__["d" /* Heading */], {
    level: "3",
    textAlign: "center",
    color: "light-1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    }
  }, "The Levitating Surfer"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_grommet__["h" /* Text */], {
    textAlign: "center",
    color: "light-1",
    size: "medium",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    }
  }, "JB uses the left horizontal levitating style to surf the world."))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_grommet__["g" /* Stack */], {
    anchor: "center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_grommet__["a" /* Box */], {
    align: "center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_grommet__["e" /* Image */], {
    style: {
      width: '70%',
      height: 'auto'
    },
    src: "http://www.horizontalworking.com/static/media/uploads/gallery/French_Arrogance.jpg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    }
  })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_grommet__["a" /* Box */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_grommet__["d" /* Heading */], {
    level: "3",
    extAlign: "center",
    color: "light-1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    }
  }, "Massively horizontal computing"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_grommet__["h" /* Text */], {
    textAlign: "center",
    color: "light-1",
    size: "medium",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    }
  }, "With typical french arrogance, Dr Alex is bringing horizontal computing to new levels."))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_grommet__["g" /* Stack */], {
    anchor: "center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_grommet__["a" /* Box */], {
    align: "center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_grommet__["e" /* Image */], {
    style: {
      width: '70%',
      height: 'auto'
    },
    src: "http://www.horizontalworking.com/static/media/uploads/gallery/First_Steps.jpg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104
    }
  })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_grommet__["a" /* Box */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_grommet__["d" /* Heading */], {
    level: "3",
    textAlign: "center",
    color: "light-1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107
    }
  }, "Horizontal Yoga Instructor"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_grommet__["h" /* Text */], {
    textAlign: "center",
    color: "light-1",
    size: "medium",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108
    }
  }, "CleG teaches horizontal yoga in Montreal between multiple DoD contracts."))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_grommet__["g" /* Stack */], {
    anchor: "center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_grommet__["a" /* Box */], {
    align: "center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_grommet__["e" /* Image */], {
    style: {
      width: '70%%',
      height: 'auto'
    },
    src: "http://www.horizontalworking.com/static/media/uploads/gallery/Horizontal_Working_Overload.jpg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113
    }
  })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_grommet__["a" /* Box */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_grommet__["d" /* Heading */], {
    level: "3",
    textAlign: "center",
    color: "light-1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116
    }
  }, "World Chess Champion"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_grommet__["h" /* Text */], {
    textAlign: "center",
    color: "light-1",
    size: "medium",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117
    }
  }, "Mr. Q used a horizontal playing style and won the world championships."))))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_grommet__["d" /* Heading */], {
    size: "medium",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122
    }
  }, "Common Questions and Answers"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_grommet__["a" /* Box */], {
    direction: "row",
    wrap: "true",
    justify: "center",
    pad: "medium",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_grommet__["a" /* Box */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_grommet__["d" /* Heading */], {
    level: "3",
    margin: "none",
    style: {
      maxWidth: '400px'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125
    }
  }, "Explain horizontal working"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_grommet__["f" /* Paragraph */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126
    }
  }, "When the body is horizontal, the brain's left/right side has higher blood circulation and the brain performs at an optimal rate.")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_grommet__["a" /* Box */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_grommet__["d" /* Heading */], {
    level: "3",
    margin: "none",
    style: {
      maxWidth: '400px'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131
    }
  }, "Why is a vertical position detrimental to brain activity?"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_grommet__["f" /* Paragraph */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132
    }
  }, "When people work in a vertical position, the blood circulation is forced out of their brain - making them (far) less than intelligent and easy to control/manipulate.")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_grommet__["a" /* Box */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_grommet__["d" /* Heading */], {
    level: "3",
    margin: "none",
    style: {
      maxWidth: '400px'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137
    }
  }, "Why does no one speak about Horizontal Working?"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_grommet__["f" /* Paragraph */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138
    }
  }, "A select group of the most influencial people in the world (the Directionatii) keeps it a secret, so they can easily control the 'zombied' vertically oriented people.")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_grommet__["a" /* Box */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_grommet__["d" /* Heading */], {
    level: "3",
    margin: "none",
    style: {
      maxWidth: '400px'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144
    }
  }, "I am an artist - what horizontal working is right for me?"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_grommet__["f" /* Paragraph */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145
    }
  }, "You should work leaning to your left side - this will activate the left/artistic side of your brain")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_grommet__["a" /* Box */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_grommet__["d" /* Heading */], {
    level: "3",
    margin: "none",
    style: {
      maxWidth: '400px'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150
    }
  }, "How did Trump win the US elections?"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_grommet__["f" /* Paragraph */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151
    }
  }, "Visible by his hairdo, Trump is clearly spending most of his days in a horizontal position, leaning to his right. We had predicted back in 2011 that he will win the elections.")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_grommet__["a" /* Box */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_grommet__["d" /* Heading */], {
    level: "3",
    margin: "none",
    style: {
      maxWidth: '400px'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157
    }
  }, "What caused the Greek crisis?"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_grommet__["f" /* Paragraph */], {
    style: {
      maxWidth: '400px'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158
    }
  }, "We know Greeks spend most of their days in horizontal working - something the Directionatii could not allow to go unpunished. The economic hardships inflicted on the greek people are meant to force them to work in a vertical position.")))));
};

var _default = Index;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Index, "Index", "/Users/Martin/PycharmProjects/drinks-counter/pages/index.js");
  reactHotLoader.register(_default, "default", "/Users/Martin/PycharmProjects/drinks-counter/pages/index.js");
  leaveModule(module);
})();

;
    (function (Component, route) {
      if(!Component) return
      if (false) return
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/")
  
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=5.e46aa98567e5647fbfe5.hot-update.js.map