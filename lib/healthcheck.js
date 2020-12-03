(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("no-cov-later"));
	else if(typeof define === 'function' && define.amd)
		define("healthcheck", ["no-cov-later"], factory);
	else if(typeof exports === 'object')
		exports["healthcheck"] = factory(require("no-cov-later"));
	else
		root["healthcheck"] = factory(root["later"]);
})(typeof self !== 'undefined' ? self : this, function(__WEBPACK_EXTERNAL_MODULE_no_cov_later__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _noCovLater = _interopRequireDefault(__webpack_require__(/*! no-cov-later */ "no-cov-later"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var defaults = {
  interval: 3600,
  autorun: true,
  callback: false,
  method: 'GET',
  fail: '/fail'
};

var HealthCheck = /*#__PURE__*/function () {
  /**
   *
   * @param {Object} options
   * @param {string, number} options.interval - Ping interval, can be a number
   * or a [later schedule]{@link https://bunkat.github.io/later/}
   * @param {string} options.url - The url to be pinged
   * @param {string} [options.autorun] - Set it to false to start the checks manually
   * @callback options.callback
   */
  function HealthCheck(options) {
    _classCallCheck(this, HealthCheck);

    this.options = _objectSpread(_objectSpread({}, defaults), options);
    if (this.options.autorun !== false) this.start();
  }

  _createClass(HealthCheck, [{
    key: "check",
    value: function check() {
      this.request(this.options.url, this.options.callback);
    }
    /**
     * Calls the fail endpoint to report an error
     */

  }, {
    key: "error",
    value: function error() {
      var isAbsolute = this.options.fail.indexOf('://') > -1;
      var url = isAbsolute ? this.options.fail : this.options.url + this.options.fail;
      this.request(url);
    }
    /**
     * Stops the health check calls
     */

  }, {
    key: "stop",
    value: function stop() {
      this.timer.clear();
    }
    /**
     * Starts the health check calls
     */

  }, {
    key: "start",
    value: function start() {
      var _this = this;

      var t;

      if (isNaN(this.options.interval)) {
        t = _noCovLater.default.parse.text(this.options.interval);
      } else {
        t = _noCovLater.default.parse.recur().every(this.options.interval).second();
      }

      this.check();
      this.timer = _noCovLater.default.setInterval(function () {
        return _this.check();
      }, t);
    }
  }, {
    key: "request",
    value: function request(url, callback) {
      var request = new XMLHttpRequest();

      request.onreadystatechange = function () {
        if (request.readyState === 4 && request.status === 200) {
          if (callback) this.callback(request.responseText);
        }
      };

      request.open('GET', url, true);
      request.send(null);
    }
  }]);

  return HealthCheck;
}();

exports.default = HealthCheck;
module.exports = exports.default;

/***/ }),

/***/ "no-cov-later":
/*!***********************************************************************************************************!*\
  !*** external {"commonjs":"no-cov-later","commonjs2":"no-cov-later","amd":"no-cov-later","root":"later"} ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_no_cov_later__;

/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9oZWFsdGhjaGVjay93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vaGVhbHRoY2hlY2svd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vaGVhbHRoY2hlY2svLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vaGVhbHRoY2hlY2svZXh0ZXJuYWwge1wiY29tbW9uanNcIjpcIm5vLWNvdi1sYXRlclwiLFwiY29tbW9uanMyXCI6XCJuby1jb3YtbGF0ZXJcIixcImFtZFwiOlwibm8tY292LWxhdGVyXCIsXCJyb290XCI6XCJsYXRlclwifSJdLCJuYW1lcyI6WyJkZWZhdWx0cyIsImludGVydmFsIiwiYXV0b3J1biIsImNhbGxiYWNrIiwibWV0aG9kIiwiZmFpbCIsIkhlYWx0aENoZWNrIiwib3B0aW9ucyIsInN0YXJ0IiwicmVxdWVzdCIsInVybCIsImlzQWJzb2x1dGUiLCJpbmRleE9mIiwidGltZXIiLCJjbGVhciIsInQiLCJpc05hTiIsInBhcnNlIiwidGV4dCIsInJlY3VyIiwiZXZlcnkiLCJzZWNvbmQiLCJjaGVjayIsInNldEludGVydmFsIiwiWE1MSHR0cFJlcXVlc3QiLCJvbnJlYWR5c3RhdGVjaGFuZ2UiLCJyZWFkeVN0YXRlIiwic3RhdHVzIiwicmVzcG9uc2VUZXh0Iiwib3BlbiIsInNlbmQiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO1FDVkE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RB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LmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwibm8tY292LWxhdGVyXCIpKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFwiaGVhbHRoY2hlY2tcIiwgW1wibm8tY292LWxhdGVyXCJdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcImhlYWx0aGNoZWNrXCJdID0gZmFjdG9yeShyZXF1aXJlKFwibm8tY292LWxhdGVyXCIpKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJoZWFsdGhjaGVja1wiXSA9IGZhY3Rvcnkocm9vdFtcImxhdGVyXCJdKTtcbn0pKHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJyA/IHNlbGYgOiB0aGlzLCBmdW5jdGlvbihfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX25vX2Nvdl9sYXRlcl9fKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJpbXBvcnQgbGF0ZXIgZnJvbSAnbm8tY292LWxhdGVyJztcblxuY29uc3QgZGVmYXVsdHMgPSB7XG4gIGludGVydmFsOiAzNjAwLFxuICBhdXRvcnVuOiB0cnVlLFxuICBjYWxsYmFjazogZmFsc2UsXG4gIG1ldGhvZDogJ0dFVCcsXG4gIGZhaWw6ICcvZmFpbCdcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEhlYWx0aENoZWNrIHtcbiAgLyoqXG4gICAqXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zXG4gICAqIEBwYXJhbSB7c3RyaW5nLCBudW1iZXJ9IG9wdGlvbnMuaW50ZXJ2YWwgLSBQaW5nIGludGVydmFsLCBjYW4gYmUgYSBudW1iZXJcbiAgICogb3IgYSBbbGF0ZXIgc2NoZWR1bGVde0BsaW5rIGh0dHBzOi8vYnVua2F0LmdpdGh1Yi5pby9sYXRlci99XG4gICAqIEBwYXJhbSB7c3RyaW5nfSBvcHRpb25zLnVybCAtIFRoZSB1cmwgdG8gYmUgcGluZ2VkXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbb3B0aW9ucy5hdXRvcnVuXSAtIFNldCBpdCB0byBmYWxzZSB0byBzdGFydCB0aGUgY2hlY2tzIG1hbnVhbGx5XG4gICAqIEBjYWxsYmFjayBvcHRpb25zLmNhbGxiYWNrXG4gICAqL1xuICBjb25zdHJ1Y3RvcihvcHRpb25zKSB7XG4gICAgdGhpcy5vcHRpb25zID0geyAuLi5kZWZhdWx0cywgLi4ub3B0aW9ucyB9O1xuICAgIGlmICh0aGlzLm9wdGlvbnMuYXV0b3J1biAhPT0gZmFsc2UpIHRoaXMuc3RhcnQoKTtcbiAgfVxuXG4gIGNoZWNrKCkge1xuICAgIHRoaXMucmVxdWVzdCh0aGlzLm9wdGlvbnMudXJsLCB0aGlzLm9wdGlvbnMuY2FsbGJhY2spO1xuICB9XG5cbiAgLyoqXG4gICAqIENhbGxzIHRoZSBmYWlsIGVuZHBvaW50IHRvIHJlcG9ydCBhbiBlcnJvclxuICAgKi9cbiAgZXJyb3IoKSB7XG4gICAgY29uc3QgaXNBYnNvbHV0ZSA9IHRoaXMub3B0aW9ucy5mYWlsLmluZGV4T2YoJzovLycpID4gLTE7XG4gICAgY29uc3QgdXJsID0gaXNBYnNvbHV0ZSA/IHRoaXMub3B0aW9ucy5mYWlsIDogdGhpcy5vcHRpb25zLnVybCArIHRoaXMub3B0aW9ucy5mYWlsO1xuXG4gICAgdGhpcy5yZXF1ZXN0KHVybCk7XG4gIH1cblxuICAvKipcbiAgICogU3RvcHMgdGhlIGhlYWx0aCBjaGVjayBjYWxsc1xuICAgKi9cbiAgc3RvcCgpIHtcbiAgICB0aGlzLnRpbWVyLmNsZWFyKCk7XG4gIH1cblxuICAvKipcbiAgICogU3RhcnRzIHRoZSBoZWFsdGggY2hlY2sgY2FsbHNcbiAgICovXG4gIHN0YXJ0KCkge1xuICAgIGxldCB0O1xuXG4gICAgaWYgKGlzTmFOKHRoaXMub3B0aW9ucy5pbnRlcnZhbCkpIHtcbiAgICAgIHQgPSBsYXRlci5wYXJzZS50ZXh0KHRoaXMub3B0aW9ucy5pbnRlcnZhbCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHQgPSBsYXRlci5wYXJzZS5yZWN1cigpLmV2ZXJ5KHRoaXMub3B0aW9ucy5pbnRlcnZhbCkuc2Vjb25kKCk7XG4gICAgfVxuICAgIHRoaXMuY2hlY2soKTtcbiAgICB0aGlzLnRpbWVyID0gbGF0ZXIuc2V0SW50ZXJ2YWwoKCkgPT4gdGhpcy5jaGVjaygpLCB0KTtcbiAgfVxuXG4gIHJlcXVlc3QodXJsLCBjYWxsYmFjaykge1xuICAgIGNvbnN0IHJlcXVlc3QgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcblxuICAgIHJlcXVlc3Qub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKHJlcXVlc3QucmVhZHlTdGF0ZSA9PT0gNCAmJiByZXF1ZXN0LnN0YXR1cyA9PT0gMjAwKSB7XG4gICAgICAgIGlmIChjYWxsYmFjaykgdGhpcy5jYWxsYmFjayhyZXF1ZXN0LnJlc3BvbnNlVGV4dCk7XG4gICAgICB9XG4gICAgfTtcbiAgICByZXF1ZXN0Lm9wZW4oJ0dFVCcsIHVybCwgdHJ1ZSk7XG4gICAgcmVxdWVzdC5zZW5kKG51bGwpO1xuICB9XG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfbm9fY292X2xhdGVyX187Il0sInNvdXJjZVJvb3QiOiIifQ==