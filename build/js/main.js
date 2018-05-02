/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	var installedChunks = {
/******/ 		0: 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([0,1,2]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(36);\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Virtualizer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(182);\n/* harmony import */ var _app_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(189);\n/* harmony import */ var _app_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_app_css__WEBPACK_IMPORTED_MODULE_3__);\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\n\n\n\n\n\n\n\nvar list = [];\n\nfor (var i = 1; i <= 1000; i++) {\n  list.push({\n    content: i > 100 ? 'List - ' + i + ' : hello' : 'List - ' + i + ' : hai'\n  });\n}\n\nvar App = function (_React$Component) {\n  _inherits(App, _React$Component);\n\n  function App() {\n    _classCallCheck(this, App);\n\n    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this));\n\n    _this.state = {\n      list: list\n    };\n\n    _this.renderList = _this.renderList.bind(_this);\n    return _this;\n  }\n\n  _createClass(App, [{\n    key: 'shouldComponentUpdate',\n    value: function shouldComponentUpdate() {\n      return true;\n    }\n  }, {\n    key: 'renderList',\n    value: function renderList(from, to) {\n      var list = this.state.list;\n\n\n      var filterList = list.slice(from, to);\n\n      return filterList.map(function (item) {\n        var index = list.indexOf(item);\n        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n          'div',\n          {\n            key: index,\n            className: index % 2 ? _app_css__WEBPACK_IMPORTED_MODULE_3___default.a.padding100 : _app_css__WEBPACK_IMPORTED_MODULE_3___default.a.padding50\n          },\n          item.content\n        );\n      });\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n        'div',\n        null,\n        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Virtualizer__WEBPACK_IMPORTED_MODULE_2__[\"default\"], { rowCount: 50, renderList: this.renderList })\n      );\n    }\n  }]);\n\n  return App;\n}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);\n\nreact_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(App, null), document.getElementById('target'));\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ 182:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(183);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Virtualizer_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(184);\n/* harmony import */ var _Virtualizer_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Virtualizer_css__WEBPACK_IMPORTED_MODULE_2__);\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\n\n\n\n\n\nvar Virtualizer = function (_React$Component) {\n  _inherits(Virtualizer, _React$Component);\n\n  function Virtualizer(props) {\n    _classCallCheck(this, Virtualizer);\n\n    var _this = _possibleConstructorReturn(this, (Virtualizer.__proto__ || Object.getPrototypeOf(Virtualizer)).call(this, props));\n\n    _this.state = {\n      renderableChildren: [],\n      rowCount: props.rowCount,\n      from: 0,\n      to: props.rowCount\n    };\n\n    _this.handleScroll = _this.handleScroll.bind(_this);\n    _this.getScrollPercentage = _this.getScrollPercentage.bind(_this);\n    _this.updateControlledChildren = _this.updateControlledChildren.bind(_this);\n\n    _this.lastScrollTop = 0;\n    _this.isLastDirectionDown = true;\n\n    _this.tempDisable = false;\n    return _this;\n  }\n\n  _createClass(Virtualizer, [{\n    key: 'shouldComponentUpdate',\n    value: function shouldComponentUpdate() {\n      return true;\n    }\n  }, {\n    key: 'getScrollPercentage',\n    value: function getScrollPercentage(isDown, element) {\n      var scrollTop = element.scrollTop,\n          scrollHeight = element.scrollHeight,\n          clientHeight = element.clientHeight;\n\n      var currentHeight = isDown ? scrollTop + clientHeight : scrollTop;\n      return currentHeight / scrollHeight * 100;\n    }\n  }, {\n    key: 'handleScroll',\n    value: function handleScroll(event) {\n      var target = event.target;\n      var scrollTop = target.scrollTop;\n      var fetchPercentage = this.props.fetchPercentage;\n\n      var isDown = this.isLastDirectionDown = this.lastScrollTop <= scrollTop;\n      this.lastScrollTop = scrollTop;\n      var top = fetchPercentage.top,\n          bottom = fetchPercentage.bottom;\n\n\n      var scrollPercentage = this.getScrollPercentage(isDown, target);\n\n      if (isDown && scrollPercentage >= bottom || !isDown && scrollPercentage <= top) {\n        var _state = this.state,\n            from = _state.from,\n            to = _state.to,\n            rowCount = _state.rowCount;\n\n        var halfSize = rowCount / 2;\n        if (isDown) {\n          from += halfSize;\n        } else {\n          from -= halfSize;\n        }\n        from = from < 0 ? 0 : from;\n        to = from + rowCount;\n        this.setState({ from: from, to: to });\n      }\n    }\n  }, {\n    key: 'updateControlledChildren',\n    value: function updateControlledChildren() {\n      if (!this.tempDisable) {\n        var renderList = this.props.renderList;\n        var _state2 = this.state,\n            from = _state2.from,\n            to = _state2.to;\n\n\n        var renderableChildren = renderList(from, to);\n        this.tempDisable = true;\n        this.setState({ renderableChildren: renderableChildren });\n      } else {\n        this.tempDisable = false;\n      }\n    }\n  }, {\n    key: 'componentWillMount',\n    value: function componentWillMount() {\n      this.updateControlledChildren();\n    }\n  }, {\n    key: 'componentWillUpdate',\n    value: function componentWillUpdate() {\n      this.updateControlledChildren();\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      var renderableChildren = this.state.renderableChildren;\n\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n        'div',\n        { onScroll: this.handleScroll, className: _Virtualizer_css__WEBPACK_IMPORTED_MODULE_2___default.a.container },\n        renderableChildren\n      );\n    }\n  }]);\n\n  return Virtualizer;\n}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Virtualizer);\n\n\nVirtualizer.defaultProps = {\n  fetchPercentage: {\n    top: 10,\n    bottom: 90\n  }\n};\n\nVirtualizer.propTypes = {\n  renderList: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,\n  rowCount: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,\n  fetchPercentage: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object\n};\n\n//# sourceURL=webpack:///./src/components/Virtualizer/index.js?");

/***/ }),

/***/ 184:
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar content = __webpack_require__(185);\n\nif(typeof content === 'string') content = [[module.i, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(187)(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}\n\n//# sourceURL=webpack:///./src/components/Virtualizer/Virtualizer.css?");

/***/ }),

/***/ 185:
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(186)(false);\n// imports\n\n\n// module\nexports.push([module.i, \".Virtualizer_container {\\n  overflow-y: auto;\\n  height: 500px;\\n  width: 300px;\\n  margin: 100px;\\n  border: 1px solid grey;\\n}\\n\", \"\"]);\n\n// exports\nexports.locals = {\n\t\"container\": \"Virtualizer_container\"\n};\n\n//# sourceURL=webpack:///./src/components/Virtualizer/Virtualizer.css?./node_modules/css-loader??ref--5-1");

/***/ }),

/***/ 189:
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar content = __webpack_require__(190);\n\nif(typeof content === 'string') content = [[module.i, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(187)(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}\n\n//# sourceURL=webpack:///./src/app.css?");

/***/ }),

/***/ 190:
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(186)(false);\n// imports\n\n\n// module\nexports.push([module.i, \".app_padding50 {\\n  padding: 50px;\\n  border-bottom: 1px solid black;\\n}\\n\\n.app_padding100 {\\n  padding: 100px;\\n  border-bottom: 1px solid black;\\n}\\n\", \"\"]);\n\n// exports\nexports.locals = {\n\t\"padding50\": \"app_padding50\",\n\t\"padding100\": \"app_padding100\"\n};\n\n//# sourceURL=webpack:///./src/app.css?./node_modules/css-loader??ref--5-1");

/***/ })

/******/ });