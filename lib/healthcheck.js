(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("later"));
	else if(typeof define === 'function' && define.amd)
		define("healthcheck", ["later"], factory);
	else if(typeof exports === 'object')
		exports["healthcheck"] = factory(require("later"));
	else
		root["healthcheck"] = factory(root["later"]);
})(typeof self !== 'undefined' ? self : this, function(__WEBPACK_EXTERNAL_MODULE_later_later_js__) {
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

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var later = __webpack_require__(/*! later/later.js */ "later/later.js");

var defaults = {
  interval: 3600,
  autorun: true,
  callback: false,
  method: 'GET',
  fail: '/fail'
};

var HealthCheck =
/*#__PURE__*/
function () {
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

    this.options = { ...defaults,
      ...options
    };
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
        t = later.parse.text(this.options.interval);
      } else {
        t = later.parse.recur().every(this.options.interval).second();
      }

      this.timer = later.setInterval(function () {
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
module.exports = exports["default"];

/***/ }),

/***/ "later/later.js":
/*!**************************************************************************************!*\
  !*** external {"commonjs":"later","commonjs2":"later","amd":"later","root":"later"} ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_later_later_js__;

/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9oZWFsdGhjaGVjay93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vaGVhbHRoY2hlY2svd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vaGVhbHRoY2hlY2svLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vaGVhbHRoY2hlY2svZXh0ZXJuYWwge1wiY29tbW9uanNcIjpcImxhdGVyXCIsXCJjb21tb25qczJcIjpcImxhdGVyXCIsXCJhbWRcIjpcImxhdGVyXCIsXCJyb290XCI6XCJsYXRlclwifSJdLCJuYW1lcyI6WyJsYXRlciIsInJlcXVpcmUiLCJkZWZhdWx0cyIsImludGVydmFsIiwiYXV0b3J1biIsImNhbGxiYWNrIiwibWV0aG9kIiwiZmFpbCIsIkhlYWx0aENoZWNrIiwib3B0aW9ucyIsInN0YXJ0IiwicmVxdWVzdCIsInVybCIsImlzQWJzb2x1dGUiLCJpbmRleE9mIiwidGltZXIiLCJjbGVhciIsInQiLCJpc05hTiIsInBhcnNlIiwidGV4dCIsInJlY3VyIiwiZXZlcnkiLCJzZWNvbmQiLCJzZXRJbnRlcnZhbCIsImNoZWNrIiwiWE1MSHR0cFJlcXVlc3QiLCJvbnJlYWR5c3RhdGVjaGFuZ2UiLCJyZWFkeVN0YXRlIiwic3RhdHVzIiwicmVzcG9uc2VUZXh0Iiwib3BlbiIsInNlbmQiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO1FDVkE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdE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QUFDRDs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDckVILDREIiwiZmlsZSI6ImhlYWx0aGNoZWNrLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwibGF0ZXJcIikpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoXCJoZWFsdGhjaGVja1wiLCBbXCJsYXRlclwiXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJoZWFsdGhjaGVja1wiXSA9IGZhY3RvcnkocmVxdWlyZShcImxhdGVyXCIpKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJoZWFsdGhjaGVja1wiXSA9IGZhY3Rvcnkocm9vdFtcImxhdGVyXCJdKTtcbn0pKHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJyA/IHNlbGYgOiB0aGlzLCBmdW5jdGlvbihfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2xhdGVyX2xhdGVyX2pzX18pIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImNvbnN0IGxhdGVyID0gcmVxdWlyZSgnbGF0ZXIvbGF0ZXIuanMnKTtcbmNvbnN0IGRlZmF1bHRzID0ge1xuICBpbnRlcnZhbDogMzYwMCxcbiAgYXV0b3J1bjogdHJ1ZSxcbiAgY2FsbGJhY2s6IGZhbHNlLFxuICBtZXRob2Q6ICdHRVQnLFxuICBmYWlsOiAnL2ZhaWwnXG59O1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIZWFsdGhDaGVjayB7XG4gIC8qKlxuICAgKlxuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9uc1xuICAgKiBAcGFyYW0ge3N0cmluZywgbnVtYmVyfSBvcHRpb25zLmludGVydmFsIC0gUGluZyBpbnRlcnZhbCwgY2FuIGJlIGEgbnVtYmVyXG4gICAqIG9yIGEgW2xhdGVyIHNjaGVkdWxlXXtAbGluayBodHRwczovL2J1bmthdC5naXRodWIuaW8vbGF0ZXIvfVxuICAgKiBAcGFyYW0ge3N0cmluZ30gb3B0aW9ucy51cmwgLSBUaGUgdXJsIHRvIGJlIHBpbmdlZFxuICAgKiBAcGFyYW0ge3N0cmluZ30gW29wdGlvbnMuYXV0b3J1bl0gLSBTZXQgaXQgdG8gZmFsc2UgdG8gc3RhcnQgdGhlIGNoZWNrcyBtYW51YWxseVxuICAgKiBAY2FsbGJhY2sgb3B0aW9ucy5jYWxsYmFja1xuICAgKi9cbiAgY29uc3RydWN0b3Iob3B0aW9ucykge1xuICAgIHRoaXMub3B0aW9ucyA9IHsgLi4uZGVmYXVsdHMsIC4uLm9wdGlvbnMgfTtcbiAgICBpZiAodGhpcy5vcHRpb25zLmF1dG9ydW4gIT09IGZhbHNlKSB0aGlzLnN0YXJ0KCk7XG4gIH1cblxuICBjaGVjaygpIHtcbiAgICB0aGlzLnJlcXVlc3QodGhpcy5vcHRpb25zLnVybCwgdGhpcy5vcHRpb25zLmNhbGxiYWNrKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYWxscyB0aGUgZmFpbCBlbmRwb2ludCB0byByZXBvcnQgYW4gZXJyb3JcbiAgICovXG4gIGVycm9yKCkge1xuICAgIGNvbnN0IGlzQWJzb2x1dGUgPSB0aGlzLm9wdGlvbnMuZmFpbC5pbmRleE9mKCc6Ly8nKSA+IC0xO1xuICAgIGNvbnN0IHVybCA9IGlzQWJzb2x1dGUgPyB0aGlzLm9wdGlvbnMuZmFpbCA6IHRoaXMub3B0aW9ucy51cmwgKyB0aGlzLm9wdGlvbnMuZmFpbDtcblxuICAgIHRoaXMucmVxdWVzdCh1cmwpO1xuICB9XG5cbiAgLyoqXG4gICAqIFN0b3BzIHRoZSBoZWFsdGggY2hlY2sgY2FsbHNcbiAgICovXG4gIHN0b3AoKSB7XG4gICAgdGhpcy50aW1lci5jbGVhcigpO1xuICB9XG5cbiAgLyoqXG4gICAqIFN0YXJ0cyB0aGUgaGVhbHRoIGNoZWNrIGNhbGxzXG4gICAqL1xuICBzdGFydCgpIHtcbiAgICBsZXQgdDtcblxuICAgIGlmIChpc05hTih0aGlzLm9wdGlvbnMuaW50ZXJ2YWwpKSB7XG4gICAgICB0ID0gbGF0ZXIucGFyc2UudGV4dCh0aGlzLm9wdGlvbnMuaW50ZXJ2YWwpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0ID0gbGF0ZXIucGFyc2UucmVjdXIoKS5ldmVyeSh0aGlzLm9wdGlvbnMuaW50ZXJ2YWwpLnNlY29uZCgpO1xuICAgIH1cbiAgICB0aGlzLnRpbWVyID0gbGF0ZXIuc2V0SW50ZXJ2YWwoKCkgPT4gdGhpcy5jaGVjaygpLCB0KTtcbiAgfVxuXG4gIHJlcXVlc3QodXJsLCBjYWxsYmFjaykge1xuICAgIGNvbnN0IHJlcXVlc3QgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcblxuICAgIHJlcXVlc3Qub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKHJlcXVlc3QucmVhZHlTdGF0ZSA9PT0gNCAmJiByZXF1ZXN0LnN0YXR1cyA9PT0gMjAwKSB7XG4gICAgICAgIGlmIChjYWxsYmFjaykgdGhpcy5jYWxsYmFjayhyZXF1ZXN0LnJlc3BvbnNlVGV4dCk7XG4gICAgICB9XG4gICAgfTtcbiAgICByZXF1ZXN0Lm9wZW4oJ0dFVCcsIHVybCwgdHJ1ZSk7XG4gICAgcmVxdWVzdC5zZW5kKG51bGwpO1xuICB9XG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfbGF0ZXJfbGF0ZXJfanNfXzsiXSwic291cmNlUm9vdCI6IiJ9