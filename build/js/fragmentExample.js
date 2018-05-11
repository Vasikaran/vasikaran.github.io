(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ 238:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(24);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_codemirror2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(239);
/* harmony import */ var react_codemirror2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_codemirror2__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var codemirror_lib_codemirror_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(241);
/* harmony import */ var codemirror_lib_codemirror_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(codemirror_lib_codemirror_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var codemirror_theme_material_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(243);
/* harmony import */ var codemirror_theme_material_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(codemirror_theme_material_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var codemirror_theme_neat_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(245);
/* harmony import */ var codemirror_theme_neat_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(codemirror_theme_neat_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var codemirror_mode_javascript_javascript_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(247);
/* harmony import */ var codemirror_mode_javascript_javascript_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(codemirror_mode_javascript_javascript_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _CustomCodeMirror_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(248);
/* harmony import */ var _CustomCodeMirror_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_CustomCodeMirror_css__WEBPACK_IMPORTED_MODULE_7__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//eslint-disable-next-line no-unused-vars











var options = {
  lineNumbers: true,
  readOnly: true,
  mode: 'javascript',
  theme: 'material'
};

var CustomCodeMirror = function (_Component) {
  _inherits(CustomCodeMirror, _Component);

  function CustomCodeMirror(props) {
    _classCallCheck(this, CustomCodeMirror);

    var _this = _possibleConstructorReturn(this, (CustomCodeMirror.__proto__ || Object.getPrototypeOf(CustomCodeMirror)).call(this, props));

    _this.state = {
      code: props.code
    };
    return _this;
  }

  _createClass(CustomCodeMirror, [{
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate() {
      return true;
    }
  }, {
    key: 'render',
    value: function render() {
      var code = this.state.code;
      var title = this.props.title;

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
        react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment,
        null,
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
          'span',
          { className: _CustomCodeMirror_css__WEBPACK_IMPORTED_MODULE_7___default.a.editorTitle },
          title
        ),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_codemirror2__WEBPACK_IMPORTED_MODULE_2__["UnControlled"], { value: code, options: options })
      );
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      var code = this.state.code;

      if (code) {
        return;
      }
      var apiUrl = this.props.apiUrl;

      if (!apiUrl) {
        this.setState({ code: 'No code available' });
      }
      var client = new XMLHttpRequest();
      client.open('GET', apiUrl);
      client.onload = function () {
        _this2.setState({ code: client.responseText });
      };
      client.send();
    }
  }]);

  return CustomCodeMirror;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

CustomCodeMirror.defaultProps = {
  code: ''
};

//eslint-disable-next-line no-undef
if (false) {}

/* harmony default export */ __webpack_exports__["default"] = (CustomCodeMirror);

/***/ }),

/***/ 241:
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(242);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(213)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ 242:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(212)(false);
// imports


// module
exports.push([module.i, "/* BASICS */\n\n.CodeMirror {\n  /* Set height, width, borders, and global font properties here */\n  font-family: monospace;\n  height: 300px;\n  color: black;\n  direction: ltr;\n}\n\n/* PADDING */\n\n.CodeMirror-lines {\n  padding: 4px 0; /* Vertical padding around content */\n}\n.CodeMirror pre {\n  padding: 0 4px; /* Horizontal padding of content */\n}\n\n.CodeMirror-scrollbar-filler, .CodeMirror-gutter-filler {\n  background-color: white; /* The little square between H and V scrollbars */\n}\n\n/* GUTTER */\n\n.CodeMirror-gutters {\n  border-right: 1px solid #ddd;\n  background-color: #f7f7f7;\n  white-space: nowrap;\n}\n.CodeMirror-linenumbers {}\n.CodeMirror-linenumber {\n  padding: 0 3px 0 5px;\n  min-width: 20px;\n  text-align: right;\n  color: #999;\n  white-space: nowrap;\n}\n\n.CodeMirror-guttermarker { color: black; }\n.CodeMirror-guttermarker-subtle { color: #999; }\n\n/* CURSOR */\n\n.CodeMirror-cursor {\n  border-left: 1px solid black;\n  border-right: none;\n  width: 0;\n}\n/* Shown when moving in bi-directional text */\n.CodeMirror div.CodeMirror-secondarycursor {\n  border-left: 1px solid silver;\n}\n.cm-fat-cursor .CodeMirror-cursor {\n  width: auto;\n  border: 0 !important;\n  background: #7e7;\n}\n.cm-fat-cursor div.CodeMirror-cursors {\n  z-index: 1;\n}\n.cm-fat-cursor-mark {\n  background-color: rgba(20, 255, 20, 0.5);\n  -webkit-animation: blink 1.06s steps(1) infinite;\n  -moz-animation: blink 1.06s steps(1) infinite;\n  animation: blink 1.06s steps(1) infinite;\n}\n.cm-animate-fat-cursor {\n  width: auto;\n  border: 0;\n  -webkit-animation: blink 1.06s steps(1) infinite;\n  -moz-animation: blink 1.06s steps(1) infinite;\n  animation: blink 1.06s steps(1) infinite;\n  background-color: #7e7;\n}\n@-moz-keyframes blink {\n  0% {}\n  50% { background-color: transparent; }\n  100% {}\n}\n@-webkit-keyframes blink {\n  0% {}\n  50% { background-color: transparent; }\n  100% {}\n}\n@keyframes blink {\n  0% {}\n  50% { background-color: transparent; }\n  100% {}\n}\n\n/* Can style cursor different in overwrite (non-insert) mode */\n.CodeMirror-overwrite .CodeMirror-cursor {}\n\n.cm-tab { display: inline-block; text-decoration: inherit; }\n\n.CodeMirror-rulers {\n  position: absolute;\n  left: 0; right: 0; top: -50px; bottom: -20px;\n  overflow: hidden;\n}\n.CodeMirror-ruler {\n  border-left: 1px solid #ccc;\n  top: 0; bottom: 0;\n  position: absolute;\n}\n\n/* DEFAULT THEME */\n\n.cm-s-default .cm-header {color: blue;}\n.cm-s-default .cm-quote {color: #090;}\n.cm-negative {color: #d44;}\n.cm-positive {color: #292;}\n.cm-header, .cm-strong {font-weight: bold;}\n.cm-em {font-style: italic;}\n.cm-link {text-decoration: underline;}\n.cm-strikethrough {text-decoration: line-through;}\n\n.cm-s-default .cm-keyword {color: #708;}\n.cm-s-default .cm-atom {color: #219;}\n.cm-s-default .cm-number {color: #164;}\n.cm-s-default .cm-def {color: #00f;}\n.cm-s-default .cm-variable,\n.cm-s-default .cm-punctuation,\n.cm-s-default .cm-property,\n.cm-s-default .cm-operator {}\n.cm-s-default .cm-variable-2 {color: #05a;}\n.cm-s-default .cm-variable-3, .cm-s-default .cm-type {color: #085;}\n.cm-s-default .cm-comment {color: #a50;}\n.cm-s-default .cm-string {color: #a11;}\n.cm-s-default .cm-string-2 {color: #f50;}\n.cm-s-default .cm-meta {color: #555;}\n.cm-s-default .cm-qualifier {color: #555;}\n.cm-s-default .cm-builtin {color: #30a;}\n.cm-s-default .cm-bracket {color: #997;}\n.cm-s-default .cm-tag {color: #170;}\n.cm-s-default .cm-attribute {color: #00c;}\n.cm-s-default .cm-hr {color: #999;}\n.cm-s-default .cm-link {color: #00c;}\n\n.cm-s-default .cm-error {color: #f00;}\n.cm-invalidchar {color: #f00;}\n\n.CodeMirror-composing { border-bottom: 2px solid; }\n\n/* Default styles for common addons */\n\ndiv.CodeMirror span.CodeMirror-matchingbracket {color: #0b0;}\ndiv.CodeMirror span.CodeMirror-nonmatchingbracket {color: #a22;}\n.CodeMirror-matchingtag { background: rgba(255, 150, 0, .3); }\n.CodeMirror-activeline-background {background: #e8f2ff;}\n\n/* STOP */\n\n/* The rest of this file contains styles related to the mechanics of\n   the editor. You probably shouldn't touch them. */\n\n.CodeMirror {\n  position: relative;\n  overflow: hidden;\n  background: white;\n}\n\n.CodeMirror-scroll {\n  overflow: scroll !important; /* Things will break if this is overridden */\n  /* 30px is the magic margin used to hide the element's real scrollbars */\n  /* See overflow: hidden in .CodeMirror */\n  margin-bottom: -30px; margin-right: -30px;\n  padding-bottom: 30px;\n  height: 100%;\n  outline: none; /* Prevent dragging from highlighting the element */\n  position: relative;\n}\n.CodeMirror-sizer {\n  position: relative;\n  border-right: 30px solid transparent;\n}\n\n/* The fake, visible scrollbars. Used to force redraw during scrolling\n   before actual scrolling happens, thus preventing shaking and\n   flickering artifacts. */\n.CodeMirror-vscrollbar, .CodeMirror-hscrollbar, .CodeMirror-scrollbar-filler, .CodeMirror-gutter-filler {\n  position: absolute;\n  z-index: 6;\n  display: none;\n}\n.CodeMirror-vscrollbar {\n  right: 0; top: 0;\n  overflow-x: hidden;\n  overflow-y: scroll;\n}\n.CodeMirror-hscrollbar {\n  bottom: 0; left: 0;\n  overflow-y: hidden;\n  overflow-x: scroll;\n}\n.CodeMirror-scrollbar-filler {\n  right: 0; bottom: 0;\n}\n.CodeMirror-gutter-filler {\n  left: 0; bottom: 0;\n}\n\n.CodeMirror-gutters {\n  position: absolute; left: 0; top: 0;\n  min-height: 100%;\n  z-index: 3;\n}\n.CodeMirror-gutter {\n  white-space: normal;\n  height: 100%;\n  display: inline-block;\n  vertical-align: top;\n  margin-bottom: -30px;\n}\n.CodeMirror-gutter-wrapper {\n  position: absolute;\n  z-index: 4;\n  background: none !important;\n  border: none !important;\n}\n.CodeMirror-gutter-background {\n  position: absolute;\n  top: 0; bottom: 0;\n  z-index: 4;\n}\n.CodeMirror-gutter-elt {\n  position: absolute;\n  cursor: default;\n  z-index: 4;\n}\n.CodeMirror-gutter-wrapper ::selection { background-color: transparent }\n.CodeMirror-gutter-wrapper ::-moz-selection { background-color: transparent }\n\n.CodeMirror-lines {\n  cursor: text;\n  min-height: 1px; /* prevents collapsing before first draw */\n}\n.CodeMirror pre {\n  /* Reset some styles that the rest of the page might have set */\n  -moz-border-radius: 0; -webkit-border-radius: 0; border-radius: 0;\n  border-width: 0;\n  background: transparent;\n  font-family: inherit;\n  font-size: inherit;\n  margin: 0;\n  white-space: pre;\n  word-wrap: normal;\n  line-height: inherit;\n  color: inherit;\n  z-index: 2;\n  position: relative;\n  overflow: visible;\n  -webkit-tap-highlight-color: transparent;\n  -webkit-font-variant-ligatures: contextual;\n  font-variant-ligatures: contextual;\n}\n.CodeMirror-wrap pre {\n  word-wrap: break-word;\n  white-space: pre-wrap;\n  word-break: normal;\n}\n\n.CodeMirror-linebackground {\n  position: absolute;\n  left: 0; right: 0; top: 0; bottom: 0;\n  z-index: 0;\n}\n\n.CodeMirror-linewidget {\n  position: relative;\n  z-index: 2;\n  padding: 0.1px; /* Force widget margins to stay inside of the container */\n}\n\n.CodeMirror-widget {}\n\n.CodeMirror-rtl pre { direction: rtl; }\n\n.CodeMirror-code {\n  outline: none;\n}\n\n/* Force content-box sizing for the elements where we expect it */\n.CodeMirror-scroll,\n.CodeMirror-sizer,\n.CodeMirror-gutter,\n.CodeMirror-gutters,\n.CodeMirror-linenumber {\n  -moz-box-sizing: content-box;\n  box-sizing: content-box;\n}\n\n.CodeMirror-measure {\n  position: absolute;\n  width: 100%;\n  height: 0;\n  overflow: hidden;\n  visibility: hidden;\n}\n\n.CodeMirror-cursor {\n  position: absolute;\n  pointer-events: none;\n}\n.CodeMirror-measure pre { position: static; }\n\ndiv.CodeMirror-cursors {\n  visibility: hidden;\n  position: relative;\n  z-index: 3;\n}\ndiv.CodeMirror-dragcursors {\n  visibility: visible;\n}\n\n.CodeMirror-focused div.CodeMirror-cursors {\n  visibility: visible;\n}\n\n.CodeMirror-selected { background: #d9d9d9; }\n.CodeMirror-focused .CodeMirror-selected { background: #d7d4f0; }\n.CodeMirror-crosshair { cursor: crosshair; }\n.CodeMirror-line::selection, .CodeMirror-line > span::selection, .CodeMirror-line > span > span::selection { background: #d7d4f0; }\n.CodeMirror-line::-moz-selection, .CodeMirror-line > span::-moz-selection, .CodeMirror-line > span > span::-moz-selection { background: #d7d4f0; }\n\n.cm-searching {\n  background-color: #ffa;\n  background-color: rgba(255, 255, 0, .4);\n}\n\n/* Used to force a border model for a node */\n.cm-force-border { padding-right: .1px; }\n\n@media print {\n  /* Hide the cursor when printing */\n  .CodeMirror div.CodeMirror-cursors {\n    visibility: hidden;\n  }\n}\n\n/* See issue #2901 */\n.cm-tab-wrap-hack:after { content: ''; }\n\n/* Help users use markselection to safely style text background */\nspan.CodeMirror-selectedtext { background: none; }\n", ""]);

// exports
exports.locals = {
	"CodeMirror": "CodeMirror",
	"CodeMirror-lines": "CodeMirror-lines",
	"CodeMirror-scrollbar-filler": "CodeMirror-scrollbar-filler",
	"CodeMirror-gutter-filler": "CodeMirror-gutter-filler",
	"CodeMirror-gutters": "CodeMirror-gutters",
	"CodeMirror-linenumbers": "CodeMirror-linenumbers",
	"CodeMirror-linenumber": "CodeMirror-linenumber",
	"CodeMirror-guttermarker": "CodeMirror-guttermarker",
	"CodeMirror-guttermarker-subtle": "CodeMirror-guttermarker-subtle",
	"CodeMirror-cursor": "CodeMirror-cursor",
	"CodeMirror-secondarycursor": "CodeMirror-secondarycursor",
	"cm-fat-cursor": "cm-fat-cursor",
	"CodeMirror-cursors": "CodeMirror-cursors",
	"cm-fat-cursor-mark": "cm-fat-cursor-mark",
	"blink": "blink",
	"cm-animate-fat-cursor": "cm-animate-fat-cursor",
	"CodeMirror-overwrite": "CodeMirror-overwrite",
	"cm-tab": "cm-tab",
	"CodeMirror-rulers": "CodeMirror-rulers",
	"CodeMirror-ruler": "CodeMirror-ruler",
	"cm-s-default": "cm-s-default",
	"cm-header": "cm-header",
	"cm-quote": "cm-quote",
	"cm-negative": "cm-negative",
	"cm-positive": "cm-positive",
	"cm-strong": "cm-strong",
	"cm-em": "cm-em",
	"cm-link": "cm-link",
	"cm-strikethrough": "cm-strikethrough",
	"cm-keyword": "cm-keyword",
	"cm-atom": "cm-atom",
	"cm-number": "cm-number",
	"cm-def": "cm-def",
	"cm-variable": "cm-variable",
	"cm-punctuation": "cm-punctuation",
	"cm-property": "cm-property",
	"cm-operator": "cm-operator",
	"cm-variable-2": "cm-variable-2",
	"cm-variable-3": "cm-variable-3",
	"cm-type": "cm-type",
	"cm-comment": "cm-comment",
	"cm-string": "cm-string",
	"cm-string-2": "cm-string-2",
	"cm-meta": "cm-meta",
	"cm-qualifier": "cm-qualifier",
	"cm-builtin": "cm-builtin",
	"cm-bracket": "cm-bracket",
	"cm-tag": "cm-tag",
	"cm-attribute": "cm-attribute",
	"cm-hr": "cm-hr",
	"cm-error": "cm-error",
	"cm-invalidchar": "cm-invalidchar",
	"CodeMirror-composing": "CodeMirror-composing",
	"CodeMirror-matchingbracket": "CodeMirror-matchingbracket",
	"CodeMirror-nonmatchingbracket": "CodeMirror-nonmatchingbracket",
	"CodeMirror-matchingtag": "CodeMirror-matchingtag",
	"CodeMirror-activeline-background": "CodeMirror-activeline-background",
	"CodeMirror-scroll": "CodeMirror-scroll",
	"CodeMirror-sizer": "CodeMirror-sizer",
	"CodeMirror-vscrollbar": "CodeMirror-vscrollbar",
	"CodeMirror-hscrollbar": "CodeMirror-hscrollbar",
	"CodeMirror-gutter": "CodeMirror-gutter",
	"CodeMirror-gutter-wrapper": "CodeMirror-gutter-wrapper",
	"CodeMirror-gutter-background": "CodeMirror-gutter-background",
	"CodeMirror-gutter-elt": "CodeMirror-gutter-elt",
	"CodeMirror-wrap": "CodeMirror-wrap",
	"CodeMirror-linebackground": "CodeMirror-linebackground",
	"CodeMirror-linewidget": "CodeMirror-linewidget",
	"CodeMirror-widget": "CodeMirror-widget",
	"CodeMirror-rtl": "CodeMirror-rtl",
	"CodeMirror-code": "CodeMirror-code",
	"CodeMirror-measure": "CodeMirror-measure",
	"CodeMirror-dragcursors": "CodeMirror-dragcursors",
	"CodeMirror-focused": "CodeMirror-focused",
	"CodeMirror-selected": "CodeMirror-selected",
	"CodeMirror-crosshair": "CodeMirror-crosshair",
	"CodeMirror-line": "CodeMirror-line",
	"cm-searching": "cm-searching",
	"cm-force-border": "cm-force-border",
	"cm-tab-wrap-hack": "cm-tab-wrap-hack",
	"CodeMirror-selectedtext": "CodeMirror-selectedtext"
};

/***/ }),

/***/ 243:
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(244);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(213)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ 244:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(212)(false);
// imports


// module
exports.push([module.i, "/*\n\n    Name:       material\n    Author:     Michael Kaminsky (http://github.com/mkaminsky11)\n\n    Original material color scheme by Mattia Astorino (https://github.com/equinusocio/material-theme)\n\n*/\n\n.cm-s-material.CodeMirror {\n  background-color: #263238;\n  color: rgba(233, 237, 237, 1);\n}\n.cm-s-material .CodeMirror-gutters {\n  background: #263238;\n  color: rgb(83,127,126);\n  border: none;\n}\n.cm-s-material .CodeMirror-guttermarker, .cm-s-material .CodeMirror-guttermarker-subtle, .cm-s-material .CodeMirror-linenumber { color: rgb(83,127,126); }\n.cm-s-material .CodeMirror-cursor { border-left: 1px solid #f8f8f0; }\n.cm-s-material div.CodeMirror-selected { background: rgba(255, 255, 255, 0.15); }\n.cm-s-material.CodeMirror-focused div.CodeMirror-selected { background: rgba(255, 255, 255, 0.10); }\n.cm-s-material .CodeMirror-line::selection, .cm-s-material .CodeMirror-line > span::selection, .cm-s-material .CodeMirror-line > span > span::selection { background: rgba(255, 255, 255, 0.10); }\n.cm-s-material .CodeMirror-line::-moz-selection, .cm-s-material .CodeMirror-line > span::-moz-selection, .cm-s-material .CodeMirror-line > span > span::-moz-selection { background: rgba(255, 255, 255, 0.10); }\n\n.cm-s-material .CodeMirror-activeline-background { background: rgba(0, 0, 0, 0); }\n.cm-s-material .cm-keyword { color: rgba(199, 146, 234, 1); }\n.cm-s-material .cm-operator { color: rgba(233, 237, 237, 1); }\n.cm-s-material .cm-variable-2 { color: #80CBC4; }\n.cm-s-material .cm-variable-3, .cm-s-material .cm-type { color: #82B1FF; }\n.cm-s-material .cm-builtin { color: #DECB6B; }\n.cm-s-material .cm-atom { color: #F77669; }\n.cm-s-material .cm-number { color: #F77669; }\n.cm-s-material .cm-def { color: rgba(233, 237, 237, 1); }\n.cm-s-material .cm-string { color: #C3E88D; }\n.cm-s-material .cm-string-2 { color: #80CBC4; }\n.cm-s-material .cm-comment { color: #546E7A; }\n.cm-s-material .cm-variable { color: #82B1FF; }\n.cm-s-material .cm-tag { color: #80CBC4; }\n.cm-s-material .cm-meta { color: #80CBC4; }\n.cm-s-material .cm-attribute { color: #FFCB6B; }\n.cm-s-material .cm-property { color: #80CBAE; }\n.cm-s-material .cm-qualifier { color: #DECB6B; }\n.cm-s-material .cm-variable-3, .cm-s-material .cm-type { color: #DECB6B; }\n.cm-s-material .cm-tag { color: rgba(255, 83, 112, 1); }\n.cm-s-material .cm-error {\n  color: rgba(255, 255, 255, 1.0);\n  background-color: #EC5F67;\n}\n.cm-s-material .CodeMirror-matchingbracket {\n  text-decoration: underline;\n  color: white !important;\n}\n", ""]);

// exports
exports.locals = {
	"cm-s-material": "cm-s-material",
	"CodeMirror": "CodeMirror",
	"CodeMirror-gutters": "CodeMirror-gutters",
	"CodeMirror-guttermarker": "CodeMirror-guttermarker",
	"CodeMirror-guttermarker-subtle": "CodeMirror-guttermarker-subtle",
	"CodeMirror-linenumber": "CodeMirror-linenumber",
	"CodeMirror-cursor": "CodeMirror-cursor",
	"CodeMirror-selected": "CodeMirror-selected",
	"CodeMirror-focused": "CodeMirror-focused",
	"CodeMirror-line": "CodeMirror-line",
	"CodeMirror-activeline-background": "CodeMirror-activeline-background",
	"cm-keyword": "cm-keyword",
	"cm-operator": "cm-operator",
	"cm-variable-2": "cm-variable-2",
	"cm-variable-3": "cm-variable-3",
	"cm-type": "cm-type",
	"cm-builtin": "cm-builtin",
	"cm-atom": "cm-atom",
	"cm-number": "cm-number",
	"cm-def": "cm-def",
	"cm-string": "cm-string",
	"cm-string-2": "cm-string-2",
	"cm-comment": "cm-comment",
	"cm-variable": "cm-variable",
	"cm-tag": "cm-tag",
	"cm-meta": "cm-meta",
	"cm-attribute": "cm-attribute",
	"cm-property": "cm-property",
	"cm-qualifier": "cm-qualifier",
	"cm-error": "cm-error",
	"CodeMirror-matchingbracket": "CodeMirror-matchingbracket"
};

/***/ }),

/***/ 245:
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(246);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(213)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ 246:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(212)(false);
// imports


// module
exports.push([module.i, ".cm-s-neat span.cm-comment { color: #a86; }\n.cm-s-neat span.cm-keyword { line-height: 1em; font-weight: bold; color: blue; }\n.cm-s-neat span.cm-string { color: #a22; }\n.cm-s-neat span.cm-builtin { line-height: 1em; font-weight: bold; color: #077; }\n.cm-s-neat span.cm-special { line-height: 1em; font-weight: bold; color: #0aa; }\n.cm-s-neat span.cm-variable { color: black; }\n.cm-s-neat span.cm-number, .cm-s-neat span.cm-atom { color: #3a3; }\n.cm-s-neat span.cm-meta { color: #555; }\n.cm-s-neat span.cm-link { color: #3a3; }\n\n.cm-s-neat .CodeMirror-activeline-background { background: #e8f2ff; }\n.cm-s-neat .CodeMirror-matchingbracket { outline:1px solid grey; color:black !important; }\n", ""]);

// exports
exports.locals = {
	"cm-s-neat": "cm-s-neat",
	"cm-comment": "cm-comment",
	"cm-keyword": "cm-keyword",
	"cm-string": "cm-string",
	"cm-builtin": "cm-builtin",
	"cm-special": "cm-special",
	"cm-variable": "cm-variable",
	"cm-number": "cm-number",
	"cm-atom": "cm-atom",
	"cm-meta": "cm-meta",
	"cm-link": "cm-link",
	"CodeMirror-activeline-background": "CodeMirror-activeline-background",
	"CodeMirror-matchingbracket": "CodeMirror-matchingbracket"
};

/***/ }),

/***/ 248:
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(249);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(213)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ 249:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(212)(false);
// imports


// module
exports.push([module.i, ".CodeMirror {\n  height: 500px !important;\n  width: 500px;\n  margin-top: 10px;\n}\n\n.editorTitle {\n  background: #d1f3e7;\n  color: #5f0000;\n  font-size: 20px;\n  font-family: monospace;\n}\n", ""]);

// exports
exports.locals = {
	"CodeMirror": "CodeMirror",
	"editorTitle": "editorTitle"
};

/***/ }),

/***/ 252:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_CustomCodeMirror_CustomCodeMirror__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(238);
/* harmony import */ var _components_FragmentList_FragmentList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(253);
/* harmony import */ var _FragmentExample_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(256);
/* harmony import */ var _FragmentExample_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_FragmentExample_css__WEBPACK_IMPORTED_MODULE_3__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//eslint-disable-next-line no-unused-vars







var list = ['React', 'Webpack', 'Modern JS', 'Chrome', 'Browsers', 'Node JS'];

var FragmentExample = function (_Component) {
  _inherits(FragmentExample, _Component);

  function FragmentExample(props) {
    _classCallCheck(this, FragmentExample);

    return _possibleConstructorReturn(this, (FragmentExample.__proto__ || Object.getPrototypeOf(FragmentExample)).call(this, props));
  }

  _createClass(FragmentExample, [{
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate() {
      return true;
    }
  }, {
    key: 'render',
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
        react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment,
        null,
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
          'div',
          { className: _FragmentExample_css__WEBPACK_IMPORTED_MODULE_3___default.a.wrapperFE },
          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            'div',
            { className: _FragmentExample_css__WEBPACK_IMPORTED_MODULE_3___default.a.rootFEExample },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_FragmentList_FragmentList__WEBPACK_IMPORTED_MODULE_2__["default"], { list: list })
          ),
          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            'div',
            { className: _FragmentExample_css__WEBPACK_IMPORTED_MODULE_3___default.a.editorFE },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_CustomCodeMirror_CustomCodeMirror__WEBPACK_IMPORTED_MODULE_1__["default"], {
              apiUrl: '/src/react16-examples/components/FragmentList/FragmentList.js',
              title: 'FragmentList.js'
            })
          )
        )
      );
    }
  }]);

  return FragmentExample;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (FragmentExample);

/***/ }),

/***/ 253:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(24);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _FragmentList_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(254);
/* harmony import */ var _FragmentList_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_FragmentList_css__WEBPACK_IMPORTED_MODULE_2__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//eslint-disable-next-line no-unused-vars





var FragmentList = function (_Component) {
  _inherits(FragmentList, _Component);

  function FragmentList(props) {
    _classCallCheck(this, FragmentList);

    return _possibleConstructorReturn(this, (FragmentList.__proto__ || Object.getPrototypeOf(FragmentList)).call(this, props));
  }

  _createClass(FragmentList, [{
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate() {
      return true;
    }
  }, {
    key: 'render',
    value: function render() {
      var list = this.props.list;

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
        react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment,
        null,
        list.map(function (item, index) {
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            'div',
            { className: _FragmentList_css__WEBPACK_IMPORTED_MODULE_2___default.a.fragmentItem, key: index },
            item
          );
        })
      );
    }
  }]);

  return FragmentList;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

//eslint-disable-next-line no-undef


if (false) {}

/* harmony default export */ __webpack_exports__["default"] = (FragmentList);

/***/ }),

/***/ 254:
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(255);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(213)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ 255:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(212)(false);
// imports


// module
exports.push([module.i, ".fragmentItem {\n  padding: 15px;\n  color: aliceblue;\n  margin: 0 auto 2px;\n}\n\n.fragmentItem:hover {\n  background: #128e12;\n  box-shadow: 0px 0px 7px black;\n}\n", ""]);

// exports
exports.locals = {
	"fragmentItem": "fragmentItem"
};

/***/ }),

/***/ 256:
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(257);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(213)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ 257:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(212)(false);
// imports


// module
exports.push([module.i, ".rootFEExample {\n  width: 500px;\n  background: #2b4d58;\n  margin: 33px 150px 0 0;\n  text-align: center;\n  box-shadow: 0 0 1px 0px black;\n  display: inline-block;\n  vertical-align: top;\n}\n\n.editorFE {\n  display: inline-block;\n  vertical-align: top;\n}\n\n.wrapperFE {\n  margin-top: 100px;\n  margin-left: 150px;\n}\n", ""]);

// exports
exports.locals = {
	"rootFEExample": "rootFEExample",
	"editorFE": "editorFE",
	"wrapperFE": "wrapperFE"
};

/***/ })

}]);
//# sourceMappingURL=fragmentExample.js.map