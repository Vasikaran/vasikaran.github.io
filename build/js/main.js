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
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// JSONP chunk loading for javascript
/******/
/******/ 		var installedChunkData = installedChunks[chunkId];
/******/ 		if(installedChunkData !== 0) { // 0 means "already installed".
/******/
/******/ 			// a Promise means "currently loading".
/******/ 			if(installedChunkData) {
/******/ 				promises.push(installedChunkData[2]);
/******/ 			} else {
/******/ 				// setup Promise in chunk cache
/******/ 				var promise = new Promise(function(resolve, reject) {
/******/ 					installedChunkData = installedChunks[chunkId] = [resolve, reject];
/******/ 				});
/******/ 				promises.push(installedChunkData[2] = promise);
/******/
/******/ 				// start chunk loading
/******/ 				var head = document.getElementsByTagName('head')[0];
/******/ 				var script = document.createElement('script');
/******/
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.src = __webpack_require__.p + "js/" + ({"1":"errorBoundariesExample","2":"fragmentExample","3":"portalExample"}[chunkId]||chunkId) + ".js";
/******/ 				var timeout = setTimeout(function(){
/******/ 					onScriptComplete({ type: 'timeout', target: script });
/******/ 				}, 120000);
/******/ 				script.onerror = script.onload = onScriptComplete;
/******/ 				function onScriptComplete(event) {
/******/ 					// avoid mem leaks in IE.
/******/ 					script.onerror = script.onload = null;
/******/ 					clearTimeout(timeout);
/******/ 					var chunk = installedChunks[chunkId];
/******/ 					if(chunk !== 0) {
/******/ 						if(chunk) {
/******/ 							var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 							var realSrc = event && event.target && event.target.src;
/******/ 							var error = new Error('Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')');
/******/ 							error.type = errorType;
/******/ 							error.request = realSrc;
/******/ 							chunk[1](error);
/******/ 						}
/******/ 						installedChunks[chunkId] = undefined;
/******/ 					}
/******/ 				};
/******/ 				head.appendChild(script);
/******/ 			}
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
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
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
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
/******/ 	deferredModules.push([0,4,5]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(10);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(22);
/* harmony import */ var _ConfigStore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(62);
/* harmony import */ var _containers_RootContainer_RootContainer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(207);







react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
  react_redux__WEBPACK_IMPORTED_MODULE_2__["Provider"],
  { store: _ConfigStore__WEBPACK_IMPORTED_MODULE_3__["default"] },
  react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_RootContainer_RootContainer__WEBPACK_IMPORTED_MODULE_4__["default"], null)
), document.getElementById('target'));

/***/ }),

/***/ 125:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MATCH", function() { return MATCH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EXACT_MATCH", function() { return EXACT_MATCH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NOT_MATCH", function() { return NOT_MATCH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "URL_CHANGE", function() { return URL_CHANGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "URL_CHANGE_BLOCK", function() { return URL_CHANGE_BLOCK; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "URL_CHANGE_UNBLOCK", function() { return URL_CHANGE_UNBLOCK; });
var MATCH = 1;
var EXACT_MATCH = 2;
var NOT_MATCH = 0;
var URL_CHANGE = '@@router/URL_CHANGE';
var URL_CHANGE_BLOCK = '@@router/URL_CHANGE_BLOCK';
var URL_CHANGE_UNBLOCK = '@@router/URL_CHANGE_UNBLOCK';

/***/ }),

/***/ 126:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "urlsSchema", function() { return urlsSchema; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "matchPattern", function() { return matchPattern; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialStateWithTokens", function() { return initialStateWithTokens; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "queryStringToJSON", function() { return queryStringToJSON; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "jsonToQueryString", function() { return jsonToQueryString; });
/* harmony import */ var babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74);
/* harmony import */ var babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(112);
/* harmony import */ var babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var babel_runtime_core_js_object_create__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(127);
/* harmony import */ var babel_runtime_core_js_object_create__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_object_create__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var simple_normalizr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(111);





var urlsSchema = Object(simple_normalizr__WEBPACK_IMPORTED_MODULE_3__["arrayOf"])(Object(simple_normalizr__WEBPACK_IMPORTED_MODULE_3__["schema"])("urls", { id: "name" }));
/* utility copy from react-router */
function escapeRegExp(string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}
var CompiledPatternsCache = babel_runtime_core_js_object_create__WEBPACK_IMPORTED_MODULE_2___default()(null);
function _compilePattern(pattern) {
  var regexpSource = '';
  var paramNames = [];
  var tokens = [];

  var match = void 0,
      lastIndex = 0,
      matcher = /:([a-zA-Z_$][a-zA-Z0-9_$]*)|\*\*|\*|\(|\)/g;
  while (match = matcher.exec(pattern)) {
    if (match.index !== lastIndex) {
      tokens.push(pattern.slice(lastIndex, match.index));
      regexpSource += escapeRegExp(pattern.slice(lastIndex, match.index));
    }

    if (match[1]) {
      regexpSource += '([^/]+)';
      paramNames.push(match[1]);
    } else if (match[0] === '**') {
      regexpSource += '(.*)';
      paramNames.push('splat');
    } else if (match[0] === '*') {
      regexpSource += '(.*?)';
      paramNames.push('splat');
    } else if (match[0] === '(') {
      regexpSource += '(?:';
    } else if (match[0] === ')') {
      regexpSource += ')?';
    }

    tokens.push(match[0]);

    lastIndex = matcher.lastIndex;
  }

  if (lastIndex !== pattern.length) {
    tokens.push(pattern.slice(lastIndex, pattern.length));
    regexpSource += escapeRegExp(pattern.slice(lastIndex, pattern.length));
  }

  return {
    pattern: pattern,
    regexpSource: regexpSource,
    paramNames: paramNames,
    tokens: tokens
  };
}
function compilePattern(pattern) {
  if (!CompiledPatternsCache[pattern]) CompiledPatternsCache[pattern] = _compilePattern(pattern);

  return CompiledPatternsCache[pattern];
}
function matchPattern(pattern, pathname) {
  // Ensure pattern starts with leading slash for consistency with pathname.
  if (pattern.charAt(0) !== '/') {
    pattern = "/" + pattern;
  }

  var _compilePattern2 = compilePattern(pattern),
      regexpSource = _compilePattern2.regexpSource,
      paramNames = _compilePattern2.paramNames,
      tokens = _compilePattern2.tokens;

  if (pattern.charAt(pattern.length - 1) !== '/') {
    regexpSource += '/?'; // Allow optional path separator at end.
  }

  // Special-case patterns like '*' for catch-all routes.
  if (tokens[tokens.length - 1] === '*') {
    regexpSource += '$';
  }

  var match = pathname.match(new RegExp("^" + regexpSource, 'i'));
  if (match == null) {
    return null;
  }

  var matchedPath = match[0];
  var remainingPathname = pathname.substr(matchedPath.length);

  if (remainingPathname) {
    // Require that the match ends at a path separator, if we didn't match
    // the full path, so any remaining pathname is a new path segment.
    if (matchedPath.charAt(matchedPath.length - 1) !== '/') {
      return null;
    }

    // If there is a remaining pathname, treat the path separator as part of
    // the remaining pathname for properly continuing the match.
    remainingPathname = "/" + remainingPathname;
  }
  var paramMap = {};
  match.slice(1).forEach(function (v, i) {
    return paramMap[paramNames[i]] = v && decodeURIComponent(v);
  });
  return {
    remainingPathname: remainingPathname,
    paramMap: paramMap
  };
}

var initialStateWithTokens = function initialStateWithTokens(initialState) {
  return babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1___default()(initialState).reduce(function (result, next) {
    result[next] = babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()({}, initialState[next], {
      tokens: compilePattern(initialState[next].pattern).tokens
    });
    return result;
  }, {});
};

function queryStringToJSON(queryString) {
  if (queryString.indexOf('?') > -1) {
    queryString = queryString.split('?')[1];
  }
  var pairs = queryString.split('&');
  var result = {};
  pairs.forEach(function (pair) {
    pair = pair.split('=');
    result[pair[0]] = decodeURIComponent(pair[1] || '');
  });
  return result;
}

function jsonToQueryString(json) {
  var str = babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1___default()(json).map(function (key) {
    return encodeURIComponent(key) + '=' + encodeURIComponent(json[key]);
  }).join('&');
  return str != "" ? "?" + str : str;
}

/***/ }),

/***/ 133:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "push", function() { return push; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "replace", function() { return replace; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "goBack", function() { return goBack; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "block", function() { return block; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unblock", function() { return unblock; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routerActions", function() { return routerActions; });
/* harmony import */ var babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74);
/* harmony import */ var babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(125);



var historyAction = function historyAction(action) {
	return function (location) {
		return {
			type: _constants__WEBPACK_IMPORTED_MODULE_1__["URL_CHANGE"],
			data: {
				location: babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()({}, location, { action: action })
			}
		};
	};
};

var push = historyAction('push');
var replace = historyAction('replace');
//export const go = historyAction('go') //not check
var goBack = historyAction('goBack');
//export const goForward = historyAction('goForward') //not check
var block = function block() {
	var msg = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
	return { type: _constants__WEBPACK_IMPORTED_MODULE_1__["URL_CHANGE_BLOCK"], data: { msg: msg } };
};
var unblock = function unblock() {
	return { type: _constants__WEBPACK_IMPORTED_MODULE_1__["URL_CHANGE_UNBLOCK"] };
};
var routerActions = { push: push, replace: replace, block: block, unblock: unblock /*, go, goBack, goForward*/ };

/***/ }),

/***/ 134:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reduxRouter", function() { return reduxRouter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "historyMiddleware", function() { return historyMiddleware; });
/* harmony import */ var babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74);
/* harmony import */ var babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(135);
/* harmony import */ var babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(125);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(126);
/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(73);


/**
two way to update state

1. action("push|replace")->historyapi("push|replace")->historychangelistener->dispatch->updateState

2. historychange -> historychangelistener->dispatch->updateState

*/




var actions = {
  push: 'push',
  replace: 'replace',
  goback: 'goBack'
};

var reduxRouter = function reduxRouter(history, urls, onUrlChange) {
  var isBatchDispatch = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

  var routingReducer = Object(_reducer__WEBPACK_IMPORTED_MODULE_4__["routing"])(urls);
  function historyMiddleware(history) {
    return function (store) {
      var preUrlChangeReject = null;
      var isURLChanging = false;
      var storeActions = [];
      var onChange = function onChange(location, action) {
        isURLChanging = true;
        var search = location.search;
        if (search) {
          location.query = Object(_utils__WEBPACK_IMPORTED_MODULE_3__["queryStringToJSON"])(search);
        }
        var newRoutingState = routingReducer(store.getState().routing, {
          type: _constants__WEBPACK_IMPORTED_MODULE_2__["URL_CHANGE"],
          from: 'history',
          data: { location: location }
        });
        if (preUrlChangeReject) {
          preUrlChangeReject();
          storeActions = [];
          preUrlChangeReject = null;
        }
        var p = new babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_1___default.a(function (res, rej) {
          onUrlChange(newRoutingState, function () {
            res();
            return p;
          }, { dispatch: store.dispatch, getState: store.getState });
          preUrlChangeReject = rej;
        }).then(function () {
          preUrlChangeReject = null;
          isURLChanging = false;
          if (isBatchDispatch) {
            store.dispatch(storeActions);
          } else {
            storeActions.forEach(function (action) {
              store.dispatch(action);
            });
          }
          storeActions = [];
          store.dispatch({
            type: _constants__WEBPACK_IMPORTED_MODULE_2__["URL_CHANGE"],
            from: 'history',
            data: { location: location }
          });
        }, function (e) {
          store.dispatch({
            type: 'URL_CHANGE_Failure',
            from: 'history',
            data: { location: location, error: e }
          });
          isURLChanging = false;
        });
      };
      /* init dispatch*/
      setTimeout(function () {
        return onChange(history.getCurrentLocation ? history.getCurrentLocation() : history.location);
      }, 1);

      /*store.dispatch({
        type:URL_CHANGE,
        from:"history",data:{
          location:history.getCurrentLocation ? history.getCurrentLocation() : history.location // only works history ^3.0.0
        }
      })*/

      var unlisten = history.listen(onChange);
      var unblock = null;
      return function (next) {
        return function (action) {
          if (action.type == _constants__WEBPACK_IMPORTED_MODULE_2__["URL_CHANGE"] && action.from == 'history') {
            if (unblock) {
              unblock();
              unblock = null;
              next({ type: _constants__WEBPACK_IMPORTED_MODULE_2__["URL_CHANGE_UNBLOCK"] });
            }
            return next(babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()(action, { from: null })); //from is a flag used for update url only via history api
          } else if (action.type == _constants__WEBPACK_IMPORTED_MODULE_2__["URL_CHANGE"]) {
            if (action.data.location.action == 'POP') {
              history.go(-1);
            } else {
              if (action.data.location.href) {
                history[actions[action.data.location.action.toLowerCase()]](action.data.location.href);
              } else {
                var location = babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()({}, action.data.location);
                var query = location.query;
                location.search = Object(_utils__WEBPACK_IMPORTED_MODULE_3__["jsonToQueryString"])(location.query || {});
                history[actions[action.data.location.action.toLowerCase()]](location);
              }
            }
          } else if (action.type == _constants__WEBPACK_IMPORTED_MODULE_2__["URL_CHANGE_BLOCK"]) {
            unblock = history.block(action.data.msg || 'Are you sure to leave the page?'); //i18n miss
            next(action);
          } else if (action.type == _constants__WEBPACK_IMPORTED_MODULE_2__["URL_CHANGE_UNBLOCK"]) {
            if (unblock) {
              unblock();
              unblock = null;
            }
            next(action);
          } else if (isURLChanging) {
            storeActions.push(action);
            return action;
          } else {
            return next(action);
          }
        };
      };
    };
  }
  return {
    historyMiddleware: historyMiddleware(history),
    routing: routingReducer
  };
};

var historyMiddleware = function historyMiddleware(history) {
  return function (store) {
    /* init dispatch*/
    var location = history.getCurrentLocation ? history.getCurrentLocation() : history.location; /* only works history ^3.0.0 */

    var search = location.search;
    if (search) location.query = Object(_utils__WEBPACK_IMPORTED_MODULE_3__["queryStringToJSON"])(search);

    store.dispatch({
      type: _constants__WEBPACK_IMPORTED_MODULE_2__["URL_CHANGE"],
      from: 'history',
      data: {
        location: location
      }
    });
    var unlisten = history.listen(function (location, action) {
      var search = location.search;
      if (search) location.query = Object(_utils__WEBPACK_IMPORTED_MODULE_3__["queryStringToJSON"])(search);
      store.dispatch({
        type: _constants__WEBPACK_IMPORTED_MODULE_2__["URL_CHANGE"],
        from: 'history',
        data: { location: location }
      });
    });
    var unblock = null;
    return function (next) {
      return function (action) {
        if (action.type == _constants__WEBPACK_IMPORTED_MODULE_2__["URL_CHANGE"] && action.from == 'history') {
          if (unblock) {
            unblock();
            unblock = null;
            next({ type: _constants__WEBPACK_IMPORTED_MODULE_2__["URL_CHANGE_UNBLOCK"] });
          }
          return next(babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()(action, { from: null })); //from is a flag used for update url only via history api
        } else if (action.type == _constants__WEBPACK_IMPORTED_MODULE_2__["URL_CHANGE"]) {
          if (action.data.location.action == 'POP') {
            history.go(-1);
          } else {
            if (action.data.location.href) {
              history[actions[action.data.location.action.toLowerCase()]](action.data.location.href);
            } else {
              var location = babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()({}, action.data.location);
              var query = location.query;
              location.search = Object(_utils__WEBPACK_IMPORTED_MODULE_3__["jsonToQueryString"])(location.query || {});
              history[actions[action.data.location.action.toLowerCase()]](location);
            }
          }
        } else if (action.type == _constants__WEBPACK_IMPORTED_MODULE_2__["URL_CHANGE_BLOCK"]) {
          unblock = history.block(action.data.msg || 'Are you sure to leave the page?'); //i18n miss
          next(action);
        } else if (action.type == _constants__WEBPACK_IMPORTED_MODULE_2__["URL_CHANGE_UNBLOCK"]) {
          if (unblock) {
            unblock();
            unblock = null;
          }
          next(action);
        } else {
          return next(action);
        }
      };
    };
  };
};

/***/ }),

/***/ 171:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Link", function() { return Link; });
/* harmony import */ var babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(112);
/* harmony import */ var babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(172);
/* harmony import */ var babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(175);
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(176);
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(180);
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(197);
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(22);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(133);











var Link = function (_React$Component) {
  babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(Link, _React$Component);

  function Link(props) {
    babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default()(this, Link);

    var _this = babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default()(this, (Link.__proto__ || babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_1___default()(Link)).call(this, props));

    _this.onClick = _this.onClick.bind(_this);
    return _this;
  }

  babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default()(Link, [{
    key: 'onClick',
    value: function onClick(e) {
      var _props = this.props,
          push = _props.push,
          replace = _props.replace,
          action = _props.action,
          pathname = _props.pathname,
          state = _props.state,
          query = _props.query;

      if (!this.props.isReload) {
        e.preventDefault();
        if (action == 'PUSH') {
          this.props.push({
            pathname: pathname,
            state: state,
            query: query
          });
        } else if (action == 'REPLACE') {
          replace({
            pathname: pathname,
            state: state,
            query: query
          });
        }
      }
      //var {name,params,query,state,action} = this.props;
      //this.context.action(name,params,query,state,action)
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          children = _props2.children,
          href = _props2.href,
          isActive = _props2.isActive,
          _props2$isReload = _props2.isReload,
          isReload = _props2$isReload === undefined ? false : _props2$isReload;

      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement('a', {
        href: href,
        onClick: this.onClick,
        className: isActive ? 'active' : ''
      }, children);
    }
  }]);

  return Link;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);
Link.defaultProps = {
  isReload: false,
  action: 'PUSH'
};

// Link.contextTypes = {
//   action: PropTypes.func
// };
Link = Object(react_redux__WEBPACK_IMPORTED_MODULE_7__["connect"])(function (state, props) {
  console.log(state.props.name);
  var _state$routing = state.routing,
      paramMap = _state$routing.paramMap,
      urls = _state$routing.urls,
      location = _state$routing.location;

  var url = urls[props.name];
  var tokens = url.tokens;
  var href = tokens.reduce(function (result, next) {
    if (!next.startsWith(':')) result += next;else {
      var key = next.substring(1);
      result += props.params && props.params[key] || paramMap[key];
    }
    return result;
  }, '');
  function jsonToQueryString(json) {
    return '?' + babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(json).map(function (key) {
      return encodeURIComponent(key) + '=' + encodeURIComponent(json[key]);
    }).join('&');
  }
  var qStr = jsonToQueryString(props.query || {});
  return {
    pathname: href,
    href: href + qStr,
    isActive: href == location.pathname
  };
}, { push: _actions__WEBPACK_IMPORTED_MODULE_8__["push"], replace: _actions__WEBPACK_IMPORTED_MODULE_8__["replace"] })(Link);

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Match", function() { return Match; });
/* harmony import */ var babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(172);
/* harmony import */ var babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(175);
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(176);
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(180);
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(197);
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(22);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(133);








var Match = function (_React$Component) {
  babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(Match, _React$Component);

  function Match() {
    babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, Match);

    return babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, (Match.__proto__ || babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default()(Match)).apply(this, arguments));
  }

  babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(Match, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          isMatch = _props.isMatch,
          isAuthenticate = _props.isAuthenticate;

      return isMatch && isAuthenticate && react__WEBPACK_IMPORTED_MODULE_5___default.a.Children.only(children) || null;
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (!this.props.isAuthenticate && this.props.isMatch) {
        this.props.replace(this.props.redirect);
      }
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps, prevState) {
      if (!this.props.isAuthenticate && this.props.isMatch) {
        this.props.replace(this.props.redirect);
      }
    }
  }]);

  return Match;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);

Match = Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["connect"])(function (state, props) {
  var isMatch;
  if (Array.isArray(props.name)) {
    var names = props.name;
    isMatch = names.some(function (name) {
      var url = state.routing.urls[name];
      if (url) {
        return props.isExactly && url.match == 2 || !props.isExactly && url.match;
      }
      return false;
    });
  } else {
    var url = state.routing.urls[props.name];
    if (url) {
      isMatch = props.isExactly && url.match == 2 || !props.isExactly && url.match;
    } else {
      isMatch = false;
    }
  }
  return {
    isMatch: isMatch,
    isAuthenticate: props.checkAuthenticate ? props.checkAuthenticate(state) : true
  };
}, { replace: _actions__WEBPACK_IMPORTED_MODULE_7__["replace"] })(Match);

Match.defaultProps = {
  isExactly: false
};

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PromiseMiddleware__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(204);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PromiseMiddleware", function() { return _PromiseMiddleware__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PromiseMiddleware; });
var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

function PromiseMiddleware(_ref) {
  var dispatch = _ref.dispatch,
      getState = _ref.getState;

  return function (next) {
    return function (action) {
      var types = action.types,
          callAPI = action.callAPI,
          _action$shouldCallAPI = action.shouldCallAPI,
          shouldCallAPI = _action$shouldCallAPI === undefined ? function () {
        return true;
      } : _action$shouldCallAPI,
          payload = action.payload;

      if (!types) {
        return next(action);
      }

      if (!Array.isArray(types) || types.length !== 3 || !types.every(function (type) {
        return typeof type === 'string';
      })) {
        throw new Error('Expected an array of three string types.');
      }

      if (typeof callAPI !== 'function') {
        throw new Error('Expected fetch to be a function.');
      }

      if (!shouldCallAPI(getState())) {
        return Promise.resolve();
      }

      var _types = _slicedToArray(types, 3),
          requestType = _types[0],
          successType = _types[1],
          failureType = _types[2];

      dispatch({
        type: requestType,
        data: payload
      });
      return callAPI(getState()).then(function (response) {
        var action = dispatch(Object.assign({}, {
          data: response,
          type: successType
        }));
        return action;
      }, function (error) {
        dispatch(Object.assign({}, {
          data: error,
          type: failureType
        }));
        throw error;
      });
    };
  };
}

/***/ }),

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "headings", function() { return headings; });
// import * as constants from '../constants';

var headings = function headings() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  return state;
};

/***/ }),

/***/ 206:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getHeadingNames", function() { return getHeadingNames; });
var getHeadingNames = function getHeadingNames() {
  return [{
    content: 'Introduction',
    url: '/page/react16/intro'
  }, {
    content: 'Error Boundaries',
    url: '/page/react16/errorBoundaries'
  }, {
    content: 'Async Rendering',
    url: '/page/react16/asyncRendering'
  }, {
    content: 'Fragment',
    url: '/page/react16/fragment'
  }, {
    content: 'Portal',
    url: '/page/react16/portal'
  }];
};

/***/ }),

/***/ 207:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(22);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(24);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var redux_router_middleware__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(72);
/* harmony import */ var _LeftPanel_LeftPanel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(208);
/* harmony import */ var _RightPanel_RightPanel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(217);
/* harmony import */ var _AsyncContainers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(224);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//eslint-disable-next-line no-unused-vars









var RootContainer = function (_Component) {
  _inherits(RootContainer, _Component);

  function RootContainer(props) {
    _classCallCheck(this, RootContainer);

    return _possibleConstructorReturn(this, (RootContainer.__proto__ || Object.getPrototypeOf(RootContainer)).call(this, props));
  }

  _createClass(RootContainer, [{
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate() {
      return true;
    }
  }, {
    key: 'render',
    value: function render() {
      var headings = this.props.headings;

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
        react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment,
        null,
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
          redux_router_middleware__WEBPACK_IMPORTED_MODULE_3__["Match"],
          { name: 'home', isExactly: true },
          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            'div',
            null,
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              'a',
              { href: '/page/react16' },
              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                'button',
                null,
                'React 16'
              )
            )
          )
        ),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
          redux_router_middleware__WEBPACK_IMPORTED_MODULE_3__["Match"],
          { name: 'react16', isExactly: false },
          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment,
            null,
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_LeftPanel_LeftPanel__WEBPACK_IMPORTED_MODULE_4__["default"], { headings: headings }),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_RightPanel_RightPanel__WEBPACK_IMPORTED_MODULE_5__["default"], null)
          )
        ),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
          redux_router_middleware__WEBPACK_IMPORTED_MODULE_3__["Match"],
          { name: 'errorBoundariesExample', isExactly: true },
          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_AsyncContainers__WEBPACK_IMPORTED_MODULE_6__["AsyncErrorBoundariesExample"], null)
        ),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
          redux_router_middleware__WEBPACK_IMPORTED_MODULE_3__["Match"],
          { name: 'fragmentExample', isExactly: true },
          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_AsyncContainers__WEBPACK_IMPORTED_MODULE_6__["AsyncFragmentExample"], null)
        ),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
          redux_router_middleware__WEBPACK_IMPORTED_MODULE_3__["Match"],
          { name: 'portalExample', isExactly: true },
          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_AsyncContainers__WEBPACK_IMPORTED_MODULE_6__["AsyncPortalExample"], null)
        )
      );
    }
  }]);

  return RootContainer;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

var mapStateToProps = function mapStateToProps(state) {
  var headings = state.headings;

  return { headings: headings };
};

RootContainer.defaultProps = {
  headings: []
};

//eslint-disable-next-line no-undef
if (false) {}

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, {})(RootContainer));

/***/ }),

/***/ 208:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(24);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(22);
/* harmony import */ var redux_router_middleware__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(72);
/* harmony import */ var _components_Heading_Heading__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(209);
/* harmony import */ var _LeftPanel_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(215);
/* harmony import */ var _LeftPanel_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_LeftPanel_css__WEBPACK_IMPORTED_MODULE_5__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//eslint-disable-next-line no-unused-vars








var LeftPanel = function (_Component) {
  _inherits(LeftPanel, _Component);

  function LeftPanel(props) {
    _classCallCheck(this, LeftPanel);

    var _this = _possibleConstructorReturn(this, (LeftPanel.__proto__ || Object.getPrototypeOf(LeftPanel)).call(this, props));

    _this.handleHeadingClick = _this.handleHeadingClick.bind(_this);
    return _this;
  }

  _createClass(LeftPanel, [{
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate() {
      return true;
    }
  }, {
    key: 'handleHeadingClick',
    value: function handleHeadingClick(url) {
      var push = this.props.push;

      push({ pathname: url });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          headings = _props.headings,
          currentUrl = _props.currentUrl;

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
        'div',
        { className: _LeftPanel_css__WEBPACK_IMPORTED_MODULE_5___default.a.leftPanel },
        headings.map(function (heading, index) {
          var content = heading.content,
              url = heading.url;

          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Heading_Heading__WEBPACK_IMPORTED_MODULE_4__["default"], {
            key: index,
            content: content,
            url: url,
            isSelected: currentUrl === url,
            handleClick: _this2.handleHeadingClick
          });
        })
      );
    }
  }]);

  return LeftPanel;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

//eslint-disable-next-line no-undef


if (false) {}

var mapStateToProps = function mapStateToProps(state) {
  var routing = state.routing;

  return {
    currentUrl: Object.keys(routing.urls).reduce(function (currentUrl, key) {
      var nextUrl = routing.urls[key];
      if (nextUrl.match === 2) {
        return nextUrl.pattern;
      }
      return currentUrl;
    }, '')
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps, { push: redux_router_middleware__WEBPACK_IMPORTED_MODULE_3__["push"] })(LeftPanel));

/***/ }),

/***/ 209:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(24);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Heading_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(210);
/* harmony import */ var _Heading_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Heading_css__WEBPACK_IMPORTED_MODULE_2__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//eslint-disable-next-line no-unused-vars





var Heading = function (_Component) {
  _inherits(Heading, _Component);

  function Heading(props) {
    _classCallCheck(this, Heading);

    var _this = _possibleConstructorReturn(this, (Heading.__proto__ || Object.getPrototypeOf(Heading)).call(this, props));

    _this.handleClick = _this.handleClick.bind(_this);
    return _this;
  }

  _createClass(Heading, [{
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate() {
      return true;
    }
  }, {
    key: 'handleClick',
    value: function handleClick() {
      var _props = this.props,
          url = _props.url,
          handleClick = _props.handleClick;

      handleClick(url);
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          content = _props2.content,
          isSelected = _props2.isSelected;

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
        'div',
        {
          className: isSelected ? _Heading_css__WEBPACK_IMPORTED_MODULE_2___default.a.heading + ' ' + _Heading_css__WEBPACK_IMPORTED_MODULE_2___default.a.selected : _Heading_css__WEBPACK_IMPORTED_MODULE_2___default.a.heading,
          onClick: this.handleClick
        },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
          'span',
          { className: _Heading_css__WEBPACK_IMPORTED_MODULE_2___default.a.content },
          content
        )
      );
    }
  }]);

  return Heading;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

Heading.defaultProps = {
  isSelected: false
};

//eslint-disable-next-line no-undef
if (false) {}

/* harmony default export */ __webpack_exports__["default"] = (Heading);

/***/ }),

/***/ 210:
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(211);

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

/***/ 211:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(212)(false);
// imports


// module
exports.push([module.i, ".heading {\n  padding: 10px 0;\n  width: 100%;\n  margin-bottom: 1px;\n  background: #a92828;\n  font-family: sans-serif;\n  box-shadow: 0px 0px 4px 0px black;\n  color: white;\n  cursor: pointer;\n}\n\n.content {\n  margin-left: 10px;\n}\n\n.heading:hover {\n  background: #3c1b1b;\n}\n\n.selected {\n  background: #3c1b1b;\n}\n", ""]);

// exports
exports.locals = {
	"heading": "heading",
	"content": "content",
	"selected": "selected"
};

/***/ }),

/***/ 215:
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(216);

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

/***/ 216:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(212)(false);
// imports


// module
exports.push([module.i, "* {\n  padding: 0;\n  margin: 0;\n}\n\n.leftPanel {\n  width: 10%;\n  height: 100vh;\n  background: #2d3137;\n  overflow-y: auto;\n  display: inline-block;\n}\n", ""]);

// exports
exports.locals = {
	"leftPanel": "leftPanel"
};

/***/ }),

/***/ 217:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_router_middleware__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(72);
/* harmony import */ var _components_Iframe_Iframe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(218);
/* harmony import */ var _RightPanel_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(221);
/* harmony import */ var _RightPanel_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_RightPanel_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _react16_examples_AsyncRenderingExample_AsyncRenderingExample__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(223);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//eslint-disable-next-line no-unused-vars







var RightPanel = function (_Component) {
  _inherits(RightPanel, _Component);

  function RightPanel(props) {
    _classCallCheck(this, RightPanel);

    return _possibleConstructorReturn(this, (RightPanel.__proto__ || Object.getPrototypeOf(RightPanel)).call(this, props));
  }

  _createClass(RightPanel, [{
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate() {
      return true;
    }
  }, {
    key: 'render',
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
        'div',
        { className: _RightPanel_css__WEBPACK_IMPORTED_MODULE_3___default.a.rightPanel },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
          redux_router_middleware__WEBPACK_IMPORTED_MODULE_1__["Match"],
          { name: 'errorBoundaries', isExactly: true },
          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Iframe_Iframe__WEBPACK_IMPORTED_MODULE_2__["default"], { url: '/examples/react16/errorBoundariesExample' })
        ),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
          redux_router_middleware__WEBPACK_IMPORTED_MODULE_1__["Match"],
          { name: 'asyncRendering', isExactly: true },
          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_react16_examples_AsyncRenderingExample_AsyncRenderingExample__WEBPACK_IMPORTED_MODULE_4__["default"], null)
        ),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
          redux_router_middleware__WEBPACK_IMPORTED_MODULE_1__["Match"],
          { name: 'fragment', isExactly: true },
          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Iframe_Iframe__WEBPACK_IMPORTED_MODULE_2__["default"], { url: '/examples/react16/fragmentExample' })
        ),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
          redux_router_middleware__WEBPACK_IMPORTED_MODULE_1__["Match"],
          { name: 'portal', isExactly: true },
          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Iframe_Iframe__WEBPACK_IMPORTED_MODULE_2__["default"], { url: '/examples/react16/portalExample' })
        )
      );
    }
  }]);

  return RightPanel;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (RightPanel);

/***/ }),

/***/ 218:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(24);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _iframe_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(219);
/* harmony import */ var _iframe_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_iframe_css__WEBPACK_IMPORTED_MODULE_2__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//eslint-disable-next-line no-unused-vars





var Iframe = function (_Component) {
  _inherits(Iframe, _Component);

  function Iframe(props) {
    _classCallCheck(this, Iframe);

    return _possibleConstructorReturn(this, (Iframe.__proto__ || Object.getPrototypeOf(Iframe)).call(this, props));
  }

  _createClass(Iframe, [{
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate() {
      return true;
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          url = _props.url,
          children = _props.children;

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
        react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment,
        null,
        children,
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('iframe', { src: url, className: _iframe_css__WEBPACK_IMPORTED_MODULE_2___default.a.iframe, frameBorder: '0' })
      );
    }
  }]);

  return Iframe;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

Iframe.defaultProps = {
  children: null
};

//eslint-disable-next-line no-undef
if (false) {}

/* harmony default export */ __webpack_exports__["default"] = (Iframe);

/***/ }),

/***/ 219:
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(220);

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

/***/ 220:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(212)(false);
// imports


// module
exports.push([module.i, ".iframe {\n  height: 100%;\n  width: 100%;\n}\n", ""]);

// exports
exports.locals = {
	"iframe": "iframe"
};

/***/ }),

/***/ 221:
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(222);

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

/***/ 222:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(212)(false);
// imports


// module
exports.push([module.i, ".rightPanel {\n  display: inline-block;\n  height: 100vh;\n  width: 90%;\n  float: right;\n}\n", ""]);

// exports
exports.locals = {
	"rightPanel": "rightPanel"
};

/***/ }),

/***/ 223:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Iframe_Iframe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(218);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//eslint-disable-next-line no-unused-vars




var AsyncRenderingExample = function (_Component) {
  _inherits(AsyncRenderingExample, _Component);

  function AsyncRenderingExample(props) {
    _classCallCheck(this, AsyncRenderingExample);

    return _possibleConstructorReturn(this, (AsyncRenderingExample.__proto__ || Object.getPrototypeOf(AsyncRenderingExample)).call(this, props));
  }

  _createClass(AsyncRenderingExample, [{
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
          _components_Iframe_Iframe__WEBPACK_IMPORTED_MODULE_1__["default"],
          { url: 'https://build-mbfootjxoo.now.sh/' },
          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            'h3',
            { style: { fontFamily: 'sans-serif' } },
            'Look at the top right corner animated box while change the rendering phase'
          )
        )
      );
    }
  }]);

  return AsyncRenderingExample;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (AsyncRenderingExample);

/***/ }),

/***/ 224:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AsyncErrorBoundariesExample", function() { return AsyncErrorBoundariesExample; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AsyncFragmentExample", function() { return AsyncFragmentExample; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AsyncPortalExample", function() { return AsyncPortalExample; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//eslint-disable-next-line no-unused-vars


function getAsyncContainer(getComponent) {
  return function (_React$Component) {
    _inherits(AsyncContainer, _React$Component);

    function AsyncContainer(props) {
      _classCallCheck(this, AsyncContainer);

      var _this = _possibleConstructorReturn(this, (AsyncContainer.__proto__ || Object.getPrototypeOf(AsyncContainer)).call(this, props));

      _this.state = {
        Component: null
      };
      return _this;
    }

    _createClass(AsyncContainer, [{
      key: 'shouldComponentUpdate',
      value: function shouldComponentUpdate() {
        return true;
      }
    }, {
      key: 'componentDidMount',
      value: function componentDidMount() {
        var _this2 = this;

        this.mount = true;
        var Component = this.state.Component;

        if (!Component) {
          var promise = getComponent();
          promise.then(function (Component) {
            if (_this2.mount) {
              _this2.setState({ Component: Component });
            }
          }).catch(function (e) {
            throw e;
          });
        }
      }
    }, {
      key: 'render',
      value: function render() {
        var Component = this.state.Component;

        if (Component) {
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Component, this.props);
        }
        return null;
      }
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        this.mount = null;
      }
    }]);

    return AsyncContainer;
  }(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);
}

//eslint-disable-next-line
__webpack_require__.p = '/build/';

function getErrorBoundariesExample() {
  return new Promise(function (res) {
    Promise.all(/* require.ensure | errorBoundariesExample */[__webpack_require__.e(4), __webpack_require__.e(5), __webpack_require__.e(1)]).then((function () {
      var errorBoundariesExample = __webpack_require__(225).default;
      res(errorBoundariesExample);
    }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
  });
}

var AsyncErrorBoundariesExample = getAsyncContainer(function () {
  return getErrorBoundariesExample().then(function (res) {
    return res;
  });
});

function getFragmentExample() {
  return new Promise(function (res) {
    Promise.all(/* require.ensure | fragmentExample */[__webpack_require__.e(4), __webpack_require__.e(5), __webpack_require__.e(2)]).then((function () {
      var fragmentExample = __webpack_require__(252).default;
      res(fragmentExample);
    }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
  });
}

var AsyncFragmentExample = getAsyncContainer(function () {
  return getFragmentExample().then(function (res) {
    return res;
  });
});

function getPortalExample() {
  return new Promise(function (res) {
    Promise.all(/* require.ensure | portalExample */[__webpack_require__.e(4), __webpack_require__.e(5), __webpack_require__.e(3)]).then((function () {
      var portalExample = __webpack_require__(258).default;
      res(portalExample);
    }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
  });
}

var AsyncPortalExample = getAsyncContainer(function () {
  return getPortalExample().then(function (res) {
    return res;
  });
});

/***/ }),

/***/ 62:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(35);
/* harmony import */ var redux_logger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(63);
/* harmony import */ var redux_logger__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_logger__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var history_createBrowserHistory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(64);
/* harmony import */ var history_createBrowserHistory__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(history_createBrowserHistory__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var redux_router_middleware__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(72);
/* harmony import */ var _middlewares__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(203);
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(205);
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(206);










var history = history_createBrowserHistory__WEBPACK_IMPORTED_MODULE_2___default()();

var urls = [{
  name: 'home',
  pattern: '/'
}, {
  name: 'react16',
  pattern: '/page/react16'
}, {
  name: 'errorBoundaries',
  pattern: '/page/react16/errorBoundaries'
}, {
  name: 'errorBoundariesExample',
  pattern: '/examples/react16/errorBoundariesExample'
}, {
  name: 'asyncRendering',
  pattern: '/page/react16/asyncRendering'
}, {
  name: 'asyncRenderingExample',
  pattern: '/examples/react16/asyncRenderingExample'
}, {
  name: 'fragment',
  pattern: '/page/react16/fragment'
}, {
  name: 'fragmentExample',
  pattern: '/examples/react16/fragmentExample'
}, {
  name: 'portal',
  pattern: '/page/react16/portal'
}, {
  name: 'portalExample',
  pattern: '/examples/react16/portalExample'
}, {
  name: 'intro',
  pattern: '/page/react16/intro'
}];

//eslint-disable-next-line no-undef
var enhancer =  false ? undefined : Object(redux__WEBPACK_IMPORTED_MODULE_0__["applyMiddleware"])(_middlewares__WEBPACK_IMPORTED_MODULE_4__["PromiseMiddleware"], Object(redux_router_middleware__WEBPACK_IMPORTED_MODULE_3__["historyMiddleware"])(history));

var combinedReducers = Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])(Object.assign({}, _reducers__WEBPACK_IMPORTED_MODULE_5__, { routing: Object(redux_router_middleware__WEBPACK_IMPORTED_MODULE_3__["routing"])(urls) }));

var initialStore = { headings: Object(_api__WEBPACK_IMPORTED_MODULE_6__["getHeadingNames"])() };

var store = Object(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"])(combinedReducers, initialStore, Object(redux__WEBPACK_IMPORTED_MODULE_0__["compose"])(enhancer));

window.state = store.getState();

/* harmony default export */ __webpack_exports__["default"] = (store);

/***/ }),

/***/ 72:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(73);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "routing", function() { return _reducer__WEBPACK_IMPORTED_MODULE_0__["routing"]; });

/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(133);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "push", function() { return _actions__WEBPACK_IMPORTED_MODULE_1__["push"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "replace", function() { return _actions__WEBPACK_IMPORTED_MODULE_1__["replace"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "block", function() { return _actions__WEBPACK_IMPORTED_MODULE_1__["block"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "unblock", function() { return _actions__WEBPACK_IMPORTED_MODULE_1__["unblock"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "goBack", function() { return _actions__WEBPACK_IMPORTED_MODULE_1__["goBack"]; });

/* harmony import */ var _middleware__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(134);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "historyMiddleware", function() { return _middleware__WEBPACK_IMPORTED_MODULE_2__["historyMiddleware"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "reduxRouter", function() { return _middleware__WEBPACK_IMPORTED_MODULE_2__["reduxRouter"]; });

/* harmony import */ var _components_Link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(171);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Link", function() { return _components_Link__WEBPACK_IMPORTED_MODULE_3__["Link"]; });

/* harmony import */ var _components_Match__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(202);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Match", function() { return _components_Match__WEBPACK_IMPORTED_MODULE_4__["Match"]; });

/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(126);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "jsonToQueryString", function() { return _utils__WEBPACK_IMPORTED_MODULE_5__["jsonToQueryString"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "queryStringToJSON", function() { return _utils__WEBPACK_IMPORTED_MODULE_5__["queryStringToJSON"]; });


/*, go, goForward*/
 //have to add all history action





/***/ }),

/***/ 73:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routing", function() { return routing; });
/* harmony import */ var babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74);
/* harmony import */ var babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var simple_normalizr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(111);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(125);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(126);

/*
	routing:{
		location:{
		  pathname:,
		  state,
		  query,
		},
		urls:{
		  entity:{
		    "url1":{
		      name:
		      pattern:
		      match:
		      tokens:
		    }
		  },
		  order:["url1",..],
		},
		currentParams:{
		  
		}
	}
  [
    {
      name:

    }
    {
      name:"ticketList",
      pattern:"/zd/:portalId/tickets",
      parent:"ticket"
    }
  ]
*/





var routing = function routing(urls) {
  var urlNormalizer = Object(simple_normalizr__WEBPACK_IMPORTED_MODULE_1__["normalize"])(urls, _utils__WEBPACK_IMPORTED_MODULE_3__["urlsSchema"]);
  var urls = Object(_utils__WEBPACK_IMPORTED_MODULE_3__["initialStateWithTokens"])(urlNormalizer.entities.urls);
  var order = urlNormalizer.result;
  var initialState = {
    urls: urls,
    order: order
  };
  return function () {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
    var action = arguments[1];

    var currentParams;
    switch (action.type) {
      case _constants__WEBPACK_IMPORTED_MODULE_2__["URL_CHANGE"]:
        var flag = 1;
        return { /* have to optimize code - skip all process once exact match*/
          urls: state.order.reduce(function (result, next) {
            var obj = Object(_utils__WEBPACK_IMPORTED_MODULE_3__["matchPattern"])(state.urls[next].pattern, action.data.location.pathname);
            var match = _constants__WEBPACK_IMPORTED_MODULE_2__["NOT_MATCH"];
            if (obj) {
              if (flag == 1) {
                currentParams = obj;
              }
              if (obj.remainingPathname == "" && flag == 1) {
                match = _constants__WEBPACK_IMPORTED_MODULE_2__["EXACT_MATCH"];
                flag = 0;
              } else if (flag == 1) {
                match = _constants__WEBPACK_IMPORTED_MODULE_2__["MATCH"];
              }
            }
            result[next] = url(state.urls[next], action, match);
            return result;
          }, {}),
          order: state.order,
          paramMap: currentParams && currentParams.paramMap || {},
          location: location(state.location, action) //old location and new location are diff deep compare
        };
      case _constants__WEBPACK_IMPORTED_MODULE_2__["URL_CHANGE_BLOCK"]:
        return babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()({}, state, { block: true });
      case _constants__WEBPACK_IMPORTED_MODULE_2__["URL_CHANGE_UNBLOCK"]:
        return babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()({}, state, { block: false });
    }
    return state;
  };
};

var url = function url() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments[1];
  var matchType = arguments[2];

  return babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()({}, state, { match: matchType });
};
var location = function location() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments[1];

  if (action.type == _constants__WEBPACK_IMPORTED_MODULE_2__["URL_CHANGE"]) {
    return action.data.location;
  }
  return state;
};

/***/ })

/******/ });
//# sourceMappingURL=main.js.map