/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(self, function() {
return /******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/autosize/dist/autosize.js":
/*!************************************************!*\
  !*** ./node_modules/autosize/dist/autosize.js ***!
  \************************************************/
/***/ (function(module) {

eval("(function (global, factory) {\n\t true ? module.exports = factory() :\n\t0;\n}(this, (function () {\n\tvar assignedElements = new Map();\n\n\tfunction assign(ta) {\n\t  if (!ta || !ta.nodeName || ta.nodeName !== 'TEXTAREA' || assignedElements.has(ta)) return;\n\t  var previousHeight = null;\n\n\t  function cacheScrollTops(el) {\n\t    var arr = [];\n\n\t    while (el && el.parentNode && el.parentNode instanceof Element) {\n\t      if (el.parentNode.scrollTop) {\n\t        arr.push([el.parentNode, el.parentNode.scrollTop]);\n\t      }\n\n\t      el = el.parentNode;\n\t    }\n\n\t    return function () {\n\t      return arr.forEach(function (_ref) {\n\t        var node = _ref[0],\n\t            scrollTop = _ref[1];\n\t        node.style.scrollBehavior = 'auto';\n\t        node.scrollTop = scrollTop;\n\t        node.style.scrollBehavior = null;\n\t      });\n\t    };\n\t  }\n\n\t  var computed = window.getComputedStyle(ta);\n\n\t  function setHeight(_ref2) {\n\t    var _ref2$restoreTextAlig = _ref2.restoreTextAlign,\n\t        restoreTextAlign = _ref2$restoreTextAlig === void 0 ? null : _ref2$restoreTextAlig,\n\t        _ref2$testForHeightRe = _ref2.testForHeightReduction,\n\t        testForHeightReduction = _ref2$testForHeightRe === void 0 ? true : _ref2$testForHeightRe;\n\t    var initialOverflowY = computed.overflowY;\n\n\t    if (ta.scrollHeight === 0) {\n\t      // If the scrollHeight is 0, then the element probably has display:none or is detached from the DOM.\n\t      return;\n\t    } // disallow vertical resizing\n\n\n\t    if (computed.resize === 'vertical') {\n\t      ta.style.resize = 'none';\n\t    } else if (computed.resize === 'both') {\n\t      ta.style.resize = 'horizontal';\n\t    }\n\n\t    var restoreScrollTops; // remove inline height style to accurately measure situations where the textarea should shrink\n\t    // however, skip this step if the new value appends to the previous value, as textarea height should only have grown\n\n\t    if (testForHeightReduction) {\n\t      // ensure the scrollTop values of parent elements are not modified as a consequence of shrinking the textarea height\n\t      restoreScrollTops = cacheScrollTops(ta);\n\t      ta.style.height = '';\n\t    }\n\n\t    var newHeight;\n\n\t    if (computed.boxSizing === 'content-box') {\n\t      newHeight = ta.scrollHeight - (parseFloat(computed.paddingTop) + parseFloat(computed.paddingBottom));\n\t    } else {\n\t      newHeight = ta.scrollHeight + parseFloat(computed.borderTopWidth) + parseFloat(computed.borderBottomWidth);\n\t    }\n\n\t    if (computed.maxHeight !== 'none' && newHeight > parseFloat(computed.maxHeight)) {\n\t      if (computed.overflowY === 'hidden') {\n\t        ta.style.overflow = 'scroll';\n\t      }\n\n\t      newHeight = parseFloat(computed.maxHeight);\n\t    } else if (computed.overflowY !== 'hidden') {\n\t      ta.style.overflow = 'hidden';\n\t    }\n\n\t    ta.style.height = newHeight + 'px';\n\n\t    if (restoreTextAlign) {\n\t      ta.style.textAlign = restoreTextAlign;\n\t    }\n\n\t    if (restoreScrollTops) {\n\t      restoreScrollTops();\n\t    }\n\n\t    if (previousHeight !== newHeight) {\n\t      ta.dispatchEvent(new Event('autosize:resized', {\n\t        bubbles: true\n\t      }));\n\t      previousHeight = newHeight;\n\t    }\n\n\t    if (initialOverflowY !== computed.overflow && !restoreTextAlign) {\n\t      var textAlign = computed.textAlign;\n\n\t      if (computed.overflow === 'hidden') {\n\t        // Webkit fails to reflow text after overflow is hidden,\n\t        // even if hiding overflow would allow text to fit more compactly.\n\t        // The following is intended to force the necessary text reflow.\n\t        ta.style.textAlign = textAlign === 'start' ? 'end' : 'start';\n\t      }\n\n\t      setHeight({\n\t        restoreTextAlign: textAlign,\n\t        testForHeightReduction: true\n\t      });\n\t    }\n\t  }\n\n\t  function fullSetHeight() {\n\t    setHeight({\n\t      testForHeightReduction: true,\n\t      restoreTextAlign: null\n\t    });\n\t  }\n\n\t  var handleInput = function () {\n\t    var previousValue = ta.value;\n\t    return function () {\n\t      setHeight({\n\t        // if previousValue is '', check for height shrinkage because the placeholder may be taking up space instead\n\t        // if new value is merely appending to previous value, skip checking for height deduction\n\t        testForHeightReduction: previousValue === '' || !ta.value.startsWith(previousValue),\n\t        restoreTextAlign: null\n\t      });\n\t      previousValue = ta.value;\n\t    };\n\t  }();\n\n\t  var destroy = function (style) {\n\t    ta.removeEventListener('autosize:destroy', destroy);\n\t    ta.removeEventListener('autosize:update', fullSetHeight);\n\t    ta.removeEventListener('input', handleInput);\n\t    window.removeEventListener('resize', fullSetHeight); // future todo: consider replacing with ResizeObserver\n\n\t    Object.keys(style).forEach(function (key) {\n\t      return ta.style[key] = style[key];\n\t    });\n\t    assignedElements[\"delete\"](ta);\n\t  }.bind(ta, {\n\t    height: ta.style.height,\n\t    resize: ta.style.resize,\n\t    textAlign: ta.style.textAlign,\n\t    overflowY: ta.style.overflowY,\n\t    overflowX: ta.style.overflowX,\n\t    wordWrap: ta.style.wordWrap\n\t  });\n\n\t  ta.addEventListener('autosize:destroy', destroy);\n\t  ta.addEventListener('autosize:update', fullSetHeight);\n\t  ta.addEventListener('input', handleInput);\n\t  window.addEventListener('resize', fullSetHeight); // future todo: consider replacing with ResizeObserver\n\n\t  ta.style.overflowX = 'hidden';\n\t  ta.style.wordWrap = 'break-word';\n\t  assignedElements.set(ta, {\n\t    destroy: destroy,\n\t    update: fullSetHeight\n\t  });\n\t  fullSetHeight();\n\t}\n\n\tfunction destroy(ta) {\n\t  var methods = assignedElements.get(ta);\n\n\t  if (methods) {\n\t    methods.destroy();\n\t  }\n\t}\n\n\tfunction update(ta) {\n\t  var methods = assignedElements.get(ta);\n\n\t  if (methods) {\n\t    methods.update();\n\t  }\n\t}\n\n\tvar autosize = null; // Do nothing in Node.js environment\n\n\tif (typeof window === 'undefined') {\n\t  autosize = function autosize(el) {\n\t    return el;\n\t  };\n\n\t  autosize.destroy = function (el) {\n\t    return el;\n\t  };\n\n\t  autosize.update = function (el) {\n\t    return el;\n\t  };\n\t} else {\n\t  autosize = function autosize(el, options) {\n\t    if (el) {\n\t      Array.prototype.forEach.call(el.length ? el : [el], function (x) {\n\t        return assign(x);\n\t      });\n\t    }\n\n\t    return el;\n\t  };\n\n\t  autosize.destroy = function (el) {\n\t    if (el) {\n\t      Array.prototype.forEach.call(el.length ? el : [el], destroy);\n\t    }\n\n\t    return el;\n\t  };\n\n\t  autosize.update = function (el) {\n\t    if (el) {\n\t      Array.prototype.forEach.call(el.length ? el : [el], update);\n\t    }\n\n\t    return el;\n\t  };\n\t}\n\n\tvar autosize$1 = autosize;\n\n\treturn autosize$1;\n\n})));\n\n\n//# sourceURL=webpack://Materialize/./node_modules/autosize/dist/autosize.js?");

/***/ }),

/***/ "./libs/autosize/autosize.js":
/*!***********************************!*\
  !*** ./libs/autosize/autosize.js ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   autosize: function() { return /* reexport module object */ autosize_dist_autosize__WEBPACK_IMPORTED_MODULE_0__; }\n/* harmony export */ });\n/* harmony import */ var autosize_dist_autosize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! autosize/dist/autosize */ \"./node_modules/autosize/dist/autosize.js\");\n/* harmony import */ var autosize_dist_autosize__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(autosize_dist_autosize__WEBPACK_IMPORTED_MODULE_0__);\n\n\n\n//# sourceURL=webpack://Materialize/./libs/autosize/autosize.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./libs/autosize/autosize.js");
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});