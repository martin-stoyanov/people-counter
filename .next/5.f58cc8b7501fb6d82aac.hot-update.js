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
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_grommet__["b" /* Box */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_grommet__["b" /* Box */], {
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
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_grommet__["b" /* Box */], {
    direction: "row",
    pad: "medium",
    align: "center",
    justify: "between",
    background: "dark-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_grommet__["b" /* Box */], {
    direction: "row",
    justify: "left",
    gap: "small",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_grommet__["f" /* Heading */], {
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
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_grommet__["e" /* Grommet */], {
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

/***/ "./node_modules/grommet/es6/components/Select/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Select__ = __webpack_require__("./node_modules/grommet/es6/components/Select/Select.js");
/* unused harmony reexport Select */




/* unused harmony default export */ var _unused_webpack_default_export = (__WEBPACK_IMPORTED_MODULE_0__Select__["a" /* default */]);

/***/ }),

/***/ "./node_modules/grommet/es6/components/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Anchor__ = __webpack_require__("./node_modules/grommet/es6/components/Anchor/index.js");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__Anchor__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Box__ = __webpack_require__("./node_modules/grommet/es6/components/Box/index.js");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__Box__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Button__ = __webpack_require__("./node_modules/grommet/es6/components/Button/index.js");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_2__Button__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Calendar__ = __webpack_require__("./node_modules/grommet/es6/components/Calendar/index.js");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Carousel__ = __webpack_require__("./node_modules/grommet/es6/components/Carousel/index.js");
/* unused harmony namespace reexport */
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
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_12__FormField__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__Grid__ = __webpack_require__("./node_modules/grommet/es6/components/Grid/index.js");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__Grommet__ = __webpack_require__("./node_modules/grommet/es6/components/Grommet/index.js");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_14__Grommet__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__Heading__ = __webpack_require__("./node_modules/grommet/es6/components/Heading/index.js");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_15__Heading__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__Image__ = __webpack_require__("./node_modules/grommet/es6/components/Image/index.js");
/* unused harmony namespace reexport */
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
/* unused harmony namespace reexport */
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
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__Table__ = __webpack_require__("./node_modules/grommet/es6/components/Table/index.js");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __WEBPACK_IMPORTED_MODULE_31__Table__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "h", function() { return __WEBPACK_IMPORTED_MODULE_31__Table__["b"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "i", function() { return __WEBPACK_IMPORTED_MODULE_31__Table__["c"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "j", function() { return __WEBPACK_IMPORTED_MODULE_31__Table__["d"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__Tabs__ = __webpack_require__("./node_modules/grommet/es6/components/Tabs/index.js");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__Text__ = __webpack_require__("./node_modules/grommet/es6/components/Text/index.js");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "k", function() { return __WEBPACK_IMPORTED_MODULE_33__Text__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__TextArea__ = __webpack_require__("./node_modules/grommet/es6/components/TextArea/index.js");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__TextInput__ = __webpack_require__("./node_modules/grommet/es6/components/TextInput/index.js");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "l", function() { return __WEBPACK_IMPORTED_MODULE_35__TextInput__["a"]; });
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
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "i", function() { return __WEBPACK_IMPORTED_MODULE_0__components__["i"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "j", function() { return __WEBPACK_IMPORTED_MODULE_0__components__["j"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "k", function() { return __WEBPACK_IMPORTED_MODULE_0__components__["k"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "l", function() { return __WEBPACK_IMPORTED_MODULE_0__components__["l"]; });
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_layout__ = __webpack_require__("./components/layout.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_grommet_icons__ = __webpack_require__("./node_modules/grommet-icons/es6/index.js");
var _jsxFileName = "/Users/Martin/PycharmProjects/drinks-counter/pages/index.js";

(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }





var people = {};
var formattedArray = [];
var selectName = '';

var Index =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Index, _React$Component);

  function Index(props) {
    var _this;

    _classCallCheck(this, Index);

    _this = _possibleConstructorReturn(this, (Index.__proto__ || Object.getPrototypeOf(Index)).call(this, props));
    Object.defineProperty(_assertThisInitialized(_this), "addName", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        console.log('name added');
        var name = document.getElementById("item").value;

        _this.setState({
          people: people[name] = 0
        });

        console.log(people);
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "changeDrink", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(key) {
        console.log(key); // console.log(`name is ${name}`);
        //  if (add===true){
        //this.setState({
        // people: people[name]= people[name] + 1
        // });
        //}else if (add===false && people[name] >= 1){
        //this.setState({
        //people: people[name]= people[name] - 1
        //});
        //}
        //formattedArray = [];
        //console.log(people);
        //for (let prop in people) {
        //formattedArray.push(prop + ":\t" + people[prop] + "\n");
        //}
      }
    });
    _this.state = {
      people: people,
      selectName: selectName,
      formattedArray: formattedArray
    };
    return _this;
  }

  _createClass(Index, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_layout__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_grommet__["b" /* Box */], {
        direction: "column",
        align: "center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_grommet__["b" /* Box */], {
        direction: "row",
        margin: {
          top: 'medium'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_grommet__["d" /* FormField */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_grommet__["l" /* TextInput */], {
        id: "item",
        name: "item",
        placeholder: "Person",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        }
      })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_grommet__["b" /* Box */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_grommet__["c" /* Button */], {
        label: "Add Person",
        onClick: function onClick() {
          return _this2.addName();
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        }
      }))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_grommet__["b" /* Box */], {
        direction: "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_grommet__["b" /* Box */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        }
      })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_grommet__["g" /* Table */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_grommet__["h" /* TableBody */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        }
      }, Object.keys(people).map(function (key, index) {
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_grommet__["j" /* TableRow */], {
          key: key,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 77
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_grommet__["i" /* TableCell */], {
          size: "small",
          scope: "row",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 78
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_grommet__["k" /* Text */], {
          weight: "bold",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 79
          }
        }, key)), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_grommet__["i" /* TableCell */], {
          size: "xxsmall",
          scope: "row",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 81
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_grommet__["a" /* Anchor */], {
          onClick: function onClick() {
            return _this2.changeDrink(key);
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 82
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_grommet_icons__["b" /* FormSubtract */], {
          style: {
            marginTop: '7px'
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 84
          }
        }))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_grommet__["i" /* TableCell */], {
          size: "xxsmall",
          scope: "row",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 87
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_grommet__["k" /* Text */], {
          weight: "bold",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 88
          }
        }, people[key])), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_grommet__["i" /* TableCell */], {
          size: "xxsmall",
          scope: "row",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 90
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_grommet__["a" /* Anchor */], {
          onClick: function onClick() {
            return _this2.changeDrink(key);
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 91
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_grommet_icons__["a" /* FormAdd */], {
          style: {
            marginTop: '7px'
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 93
          }
        }))));
      })))));
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);

  return Index;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

var _default = Index;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(people, "people", "/Users/Martin/PycharmProjects/drinks-counter/pages/index.js");
  reactHotLoader.register(formattedArray, "formattedArray", "/Users/Martin/PycharmProjects/drinks-counter/pages/index.js");
  reactHotLoader.register(selectName, "selectName", "/Users/Martin/PycharmProjects/drinks-counter/pages/index.js");
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
//# sourceMappingURL=5.f58cc8b7501fb6d82aac.hot-update.js.map