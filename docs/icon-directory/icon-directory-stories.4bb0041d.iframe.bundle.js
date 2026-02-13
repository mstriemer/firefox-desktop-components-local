"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([[5106],{

/***/ 99678:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Default: () => (/* binding */ Default),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var toolkit_themes_shared_design_system_src_text_and_typography_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(44311);
/* harmony import */ var chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9151);
/* harmony import */ var _storybook_chrome_map_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(82370);
/* harmony import */ var _storybook_chrome_map_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_storybook_chrome_map_js__WEBPACK_IMPORTED_MODULE_2__);
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6;
function _taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }

/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  title: "Docs/Icon Directory",
  parameters: {
    options: {
      showPanel: false
    },
    docs: {
      source: {
        state: "closed"
      }
    }
  }
});

/**
 * Group the icons by their file path.
 *
 * @param {Map<string, string[]>} groups
 * Mapping of folder path to file name array
 */
function prioritizeGroups(groups) {
  var bundleGroupings = ["browser/themes", "toolkit/themes", "browser/components", "toolkit/components"];
  var newGroups = new Map(bundleGroupings.map(function (bg) {
    return [bg, []];
  }));
  var _iterator = _createForOfIteratorHelper(groups.keys()),
    _step;
  try {
    var _loop = function _loop() {
      var _newGroups$get;
      var group = _step.value;
      var bundleGroup = bundleGroupings.find(function (bundleGroup) {
        return group.startsWith(bundleGroup);
      }) || group;
      if (!newGroups.has(bundleGroup)) {
        newGroups.set(bundleGroup, []);
      }
      (_newGroups$get = newGroups.get(bundleGroup)).push.apply(_newGroups$get, _toConsumableArray(groups.get(group)));
    };
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      _loop();
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  var _iterator2 = _createForOfIteratorHelper(newGroups.values()),
    _step2;
  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
      var icons = _step2.value;
      icons.sort();
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }
  return newGroups;
}
function buildIconData() {
  var _chromeMap = _slicedToArray((_storybook_chrome_map_js__WEBPACK_IMPORTED_MODULE_2___default()), 3),
    prefixMap = _chromeMap[0],
    sourceMap = _chromeMap[2];

  // Build reverse lookup: bundleDir -> chromePrefix
  var reversePrefixMap = new Map();
  for (var _i = 0, _Object$entries = Object.entries(prefixMap); _i < _Object$entries.length; _i++) {
    var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
      chromePrefix = _Object$entries$_i[0],
      bundleDirs = _Object$entries$_i[1];
    var _iterator3 = _createForOfIteratorHelper(bundleDirs),
      _step3;
    try {
      for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
        var dir = _step3.value;
        reversePrefixMap.set(dir, chromePrefix);
      }
    } catch (err) {
      _iterator3.e(err);
    } finally {
      _iterator3.f();
    }
  }
  function resolveToChrome(bundlePath) {
    var dirPath = bundlePath;
    while (dirPath.includes("/")) {
      var lastSlash = dirPath.lastIndexOf("/");
      var _dir = dirPath.substring(0, lastSlash);
      var remainder = bundlePath.substring(_dir.length + 1);
      var _chromePrefix = reversePrefixMap.get(_dir);
      if (_chromePrefix) {
        return _chromePrefix + remainder;
      }
      dirPath = _dir;
    }
    return null;
  }
  var groups = new Map();
  for (var _i2 = 0, _Object$entries2 = Object.entries(sourceMap); _i2 < _Object$entries2.length; _i2++) {
    var _Object$entries2$_i = _slicedToArray(_Object$entries2[_i2], 2),
      bundlePath = _Object$entries2$_i[0],
      _Object$entries2$_i$ = _slicedToArray(_Object$entries2$_i[1], 1),
      srcPath = _Object$entries2$_i$[0];
    if (!bundlePath.endsWith(".svg")) {
      continue;
    }
    var chromeUri = resolveToChrome(bundlePath);
    if (!chromeUri || !(chromeUri.startsWith("chrome://browser/") || chromeUri.startsWith("chrome://global"))) {
      continue;
    }
    var lastSlash = srcPath.lastIndexOf("/");
    var bundleDir = srcPath.substring(0, lastSlash);
    var fileName = srcPath.substring(lastSlash + 1);
    if (!groups.has(bundleDir)) {
      groups.set(bundleDir, []);
    }
    groups.get(bundleDir).push({
      chromeUri: chromeUri,
      fileName: fileName,
      filePath: srcPath
    });
  }
  var _iterator4 = _createForOfIteratorHelper(groups.values()),
    _step4;
  try {
    for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
      var icons = _step4.value;
      icons.sort(function (a, b) {
        return a.fileName.localeCompare(b.fileName);
      });
    }
  } catch (err) {
    _iterator4.e(err);
  } finally {
    _iterator4.f();
  }
  return prioritizeGroups(groups);
}
var iconData = buildIconData();
function rgbToHex(rgb) {
  var match = rgb.match(/\d+/g);
  if (!match || match.length < 3) {
    return "#000000";
  }
  return "#" + match.slice(0, 3).map(function (n) {
    return parseInt(n).toString(16).padStart(2, "0");
  }).join("");
}

/**
 * Browsable, searchable directory of SVG icons available in the Firefox
 * codebase, grouped by source directory with chrome:// URI previews.
 */
var IconDirectory = /*#__PURE__*/function (_LitElement) {
  function IconDirectory() {
    var _this;
    _classCallCheck(this, IconDirectory);
    _this = _callSuper(this, IconDirectory);
    _this.filter = "";
    _this.fillColor = "";
    _this.strokeColor = "";
    _this.iconSize = "normalize";
    return _this;
  }
  _inherits(IconDirectory, _LitElement);
  return _createClass(IconDirectory, [{
    key: "firstUpdated",
    value: function firstUpdated() {
      var probe = this.renderRoot.querySelector("#color-probe");
      var probeStyles = getComputedStyle(probe);
      this.fillColor = rgbToHex(probeStyles.fill);
      this.strokeColor = rgbToHex(probeStyles.stroke);
    }
  }, {
    key: "successMessageBar",
    get: function get() {
      return this.renderRoot.querySelector("#success-message");
    }
  }, {
    key: "handleSearch",
    value: function handleSearch(e) {
      this.filter = e.detail.query.toLowerCase();
    }
  }, {
    key: "handleFillChange",
    value: function handleFillChange(e) {
      this.fillColor = e.target.value;
      this.style.setProperty("--icon-item-fill", this.fillColor);
    }
  }, {
    key: "handleStrokeChange",
    value: function handleStrokeChange(e) {
      this.strokeColor = e.target.value;
      this.style.setProperty("--icon-item-stroke", this.strokeColor);
    }
  }, {
    key: "handleCopy",
    value: function handleCopy(e) {
      var _this2 = this;
      navigator.clipboard.writeText(e.target.dataset.url);
      this.successMessageBar.removeAttribute("hiding");
      clearTimeout(this._successMessageTimeout);
      this._successMessageTimeout = setTimeout(function () {
        _this2.successMessageBar.setAttribute("hiding", "");
        _this2.successMessageBar.addEventListener("transitionend", function () {
          _this2.successMessageBar.hidePopover();
          _this2.successMessageBar.removeAttribute("hiding");
        }, {
          once: true
        });
      }, 3000);
    }
  }, {
    key: "filteredIcons",
    value: function filteredIcons(icons) {
      var _this3 = this;
      if (!this.filter) {
        return icons;
      }
      return icons.filter(function (_ref) {
        var chromeUri = _ref.chromeUri,
          filePath = _ref.filePath;
        return filePath.toLowerCase().includes(_this3.filter) || chromeUri.toLowerCase().includes(_this3.filter);
      });
    }
  }, {
    key: "renderGroup",
    value: function renderGroup(dirKey, icons) {
      var _this4 = this;
      var filtered = this.filteredIcons(icons);
      if (!filtered.length) {
        return "";
      }
      return (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n      <moz-card .heading=", " type=\"accordion\" expanded>\n        ", "\n      </moz-card>\n    "])), dirKey, (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n          <div class=\"icon-list\">\n            ", "\n          </div>\n        "])), filtered.map(function (_ref2) {
        var chromeUri = _ref2.chromeUri,
          fileName = _ref2.fileName;
        return (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n                <moz-box-item>\n                  <div class=\"icon-item\">\n                    <img\n                      class=", "\n                      src=", "\n                    />\n                    <button\n                      class=\"icon-name text-truncated-ellipsis\"\n                      data-url=", "\n                      @click=", "\n                      title=", "\n                      popovertarget=\"success-message\"\n                    >\n                      ", "\n                    </button>\n                  </div>\n                </moz-box-item>\n              "])), (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.classMap)({
          "icon-12": fileName.endsWith("-12.svg"),
          "icon-24": fileName.endsWith("-24.svg")
        }), chromeUri, chromeUri, _this4.handleCopy, "".concat(fileName, " \u2014 Copy chrome:// URL"), fileName);
      })));
    }
  }, {
    key: "render",
    value: function render() {
      var _this5 = this;
      return (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n      <link\n        rel=\"stylesheet\"\n        href=\"", "\"\n      />\n      <moz-page-header heading=\"Icon Directory\"></moz-page-header>\n      <moz-input-search\n        placeholder=\"Filter icons...\"\n        @MozInputSearch:search=", "\n      ></moz-input-search>\n      <span id=\"color-probe\"></span>\n      <div class=\"view-controls\">\n        <moz-input-color\n          label=\"Fill\"\n          value=", "\n          @change=", "\n        ></moz-input-color>\n        <moz-input-color\n          label=\"Stroke\"\n          value=", "\n          @change=", "\n        ></moz-input-color>\n        <moz-toggle\n          label=\"Show full size icons\"\n          @toggle=", "\n        ></moz-toggle>\n      </div>\n      ", "\n      <moz-message-bar\n        id=\"success-message\"\n        type=\"success\"\n        message=\"Copied!\"\n        popover=\"hint\"\n      ></moz-message-bar>\n    "])), toolkit_themes_shared_design_system_src_text_and_typography_css__WEBPACK_IMPORTED_MODULE_0__, this.handleSearch, this.fillColor, this.handleFillChange, this.strokeColor, this.handleStrokeChange, function (e) {
        return _this5.iconSize = e.target.pressed ? "full" : "normalize";
      }, _toConsumableArray(iconData.entries()).map(function (_ref3) {
        var _ref4 = _slicedToArray(_ref3, 2),
          dirKey = _ref4[0],
          icons = _ref4[1];
        return _this5.renderGroup(dirKey, icons);
      }));
    }
  }]);
}(chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.LitElement);
_defineProperty(IconDirectory, "properties", {
  filter: {
    type: String,
    state: true
  },
  fillColor: {
    type: String,
    state: true
  },
  strokeColor: {
    type: String,
    state: true
  },
  iconSize: {
    type: String,
    reflect: true
  }
});
_defineProperty(IconDirectory, "styles", (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.css)(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n    :host {\n      --icon-item-width: 125px;\n      --icon-item-padding: var(--space-small);\n      --icon-item-fill: var(--icon-color);\n      /*\n       * The rgbToHex function doesn't work with oklch...\n       * Use --color-accent-primary manual conversion to hex so the stroke is more visible.\n       */\n      --icon-item-stroke: light-dark(#0062fa, #00cadb);\n      --icon-item-width-content: calc(\n        var(--icon-item-width) - 2 * var(--icon-item-padding)\n      );\n\n      display: flex;\n      flex-direction: column;\n      gap: var(--space-large);\n    }\n\n    #color-probe {\n      display: none;\n      fill: var(--icon-item-fill);\n      stroke: var(--icon-item-stroke);\n    }\n\n    moz-box-item {\n      --box-padding: var(--icon-item-padding);\n    }\n\n    .view-controls {\n      display: flex;\n      align-items: center;\n      gap: var(--space-large);\n    }\n\n    .icon-list {\n      display: grid;\n      grid-template-columns: repeat(\n        auto-fill,\n        minmax(var(--icon-item-width), 1fr)\n      );\n      gap: var(--space-small);\n    }\n\n    .icon-item {\n      anchor-name: --icon-item;\n      display: flex;\n      flex-direction: column;\n      align-items: center;\n\n      img {\n        -moz-context-properties: fill, stroke;\n        fill: var(--icon-item-fill);\n        stroke: var(--icon-item-stroke);\n\n        :host([iconsize=\"normalize\"]) & {\n          width: 16px;\n          aspect-ratio: 1;\n\n          &.icon-12 {\n            width: 12px;\n          }\n\n          &.icon-24 {\n            width: 24px;\n          }\n        }\n\n        :host([iconsize=\"full\"]) & {\n          max-width: var(--icon-item-width-content);\n        }\n      }\n    }\n\n    .icon-name {\n      font-size: var(--font-size-small);\n      width: var(--icon-item-width-content);\n      margin: var(--icon-item-padding) auto 0;\n\n      button& {\n        appearance: none;\n        border: none;\n        background: none;\n        cursor: pointer;\n        padding: 0;\n      }\n    }\n\n    #success-message {\n      display: none;\n      inset-block-start: anchor(end);\n      inset-inline-start: anchor(center);\n      translate: -50%;\n      margin: 0;\n      transition: opacity 250ms;\n      box-shadow: var(--box-shadow-popup);\n      font-size: var(--font-size-small);\n    }\n\n    #success-message[hiding] {\n      opacity: 0;\n    }\n\n    #success-message:popover-open {\n      display: block;\n    }\n  "]))));
customElements.define("icon-directory", IconDirectory);
var Default = function Default() {
  return (0,chrome_global_content_vendor_lit_all_mjs__WEBPACK_IMPORTED_MODULE_1__.html)(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["<icon-directory></icon-directory>"])));
};

/***/ })

}]);
//# sourceMappingURL=icon-directory-stories.4bb0041d.iframe.bundle.js.map