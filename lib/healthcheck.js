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

    this.options = _objectSpread({}, defaults, {}, options);
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
module.exports = exports["default"];

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9oZWFsdGhjaGVjay93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vaGVhbHRoY2hlY2svd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vaGVhbHRoY2hlY2svLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vaGVhbHRoY2hlY2svZXh0ZXJuYWwge1wiY29tbW9uanNcIjpcIm5vLWNvdi1sYXRlclwiLFwiY29tbW9uanMyXCI6XCJuby1jb3YtbGF0ZXJcIixcImFtZFwiOlwibm8tY292LWxhdGVyXCIsXCJyb290XCI6XCJsYXRlclwifSJdLCJuYW1lcyI6WyJkZWZhdWx0cyIsImludGVydmFsIiwiYXV0b3J1biIsImNhbGxiYWNrIiwibWV0aG9kIiwiZmFpbCIsIkhlYWx0aENoZWNrIiwib3B0aW9ucyIsInN0YXJ0IiwicmVxdWVzdCIsInVybCIsImlzQWJzb2x1dGUiLCJpbmRleE9mIiwidGltZXIiLCJjbGVhciIsInQiLCJpc05hTiIsInBhcnNlIiwidGV4dCIsInJlY3VyIiwiZXZlcnkiLCJzZWNvbmQiLCJzZXRJbnRlcnZhbCIsImNoZWNrIiwiWE1MSHR0cFJlcXVlc3QiLCJvbnJlYWR5c3RhdGVjaGFuZ2UiLCJyZWFkeVN0YXRlIiwic3RhdHVzIiwicmVzcG9uc2VUZXh0Iiwib3BlbiIsInNlbmQiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO1FDVkE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RB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b250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZShcIm5vLWNvdi1sYXRlclwiKSk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShcImhlYWx0aGNoZWNrXCIsIFtcIm5vLWNvdi1sYXRlclwiXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJoZWFsdGhjaGVja1wiXSA9IGZhY3RvcnkocmVxdWlyZShcIm5vLWNvdi1sYXRlclwiKSk7XG5cdGVsc2Vcblx0XHRyb290W1wiaGVhbHRoY2hlY2tcIl0gPSBmYWN0b3J5KHJvb3RbXCJsYXRlclwiXSk7XG59KSh0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcgPyBzZWxmIDogdGhpcywgZnVuY3Rpb24oX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9ub19jb3ZfbGF0ZXJfXykge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0IGxhdGVyIGZyb20gJ25vLWNvdi1sYXRlcic7XG5cbmNvbnN0IGRlZmF1bHRzID0ge1xuICBpbnRlcnZhbDogMzYwMCxcbiAgYXV0b3J1bjogdHJ1ZSxcbiAgY2FsbGJhY2s6IGZhbHNlLFxuICBtZXRob2Q6ICdHRVQnLFxuICBmYWlsOiAnL2ZhaWwnXG59O1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIZWFsdGhDaGVjayB7XG4gIC8qKlxuICAgKlxuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9uc1xuICAgKiBAcGFyYW0ge3N0cmluZywgbnVtYmVyfSBvcHRpb25zLmludGVydmFsIC0gUGluZyBpbnRlcnZhbCwgY2FuIGJlIGEgbnVtYmVyXG4gICAqIG9yIGEgW2xhdGVyIHNjaGVkdWxlXXtAbGluayBodHRwczovL2J1bmthdC5naXRodWIuaW8vbGF0ZXIvfVxuICAgKiBAcGFyYW0ge3N0cmluZ30gb3B0aW9ucy51cmwgLSBUaGUgdXJsIHRvIGJlIHBpbmdlZFxuICAgKiBAcGFyYW0ge3N0cmluZ30gW29wdGlvbnMuYXV0b3J1bl0gLSBTZXQgaXQgdG8gZmFsc2UgdG8gc3RhcnQgdGhlIGNoZWNrcyBtYW51YWxseVxuICAgKiBAY2FsbGJhY2sgb3B0aW9ucy5jYWxsYmFja1xuICAgKi9cbiAgY29uc3RydWN0b3Iob3B0aW9ucykge1xuICAgIHRoaXMub3B0aW9ucyA9IHsgLi4uZGVmYXVsdHMsIC4uLm9wdGlvbnMgfTtcbiAgICBpZiAodGhpcy5vcHRpb25zLmF1dG9ydW4gIT09IGZhbHNlKSB0aGlzLnN0YXJ0KCk7XG4gIH1cblxuICBjaGVjaygpIHtcbiAgICB0aGlzLnJlcXVlc3QodGhpcy5vcHRpb25zLnVybCwgdGhpcy5vcHRpb25zLmNhbGxiYWNrKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYWxscyB0aGUgZmFpbCBlbmRwb2ludCB0byByZXBvcnQgYW4gZXJyb3JcbiAgICovXG4gIGVycm9yKCkge1xuICAgIGNvbnN0IGlzQWJzb2x1dGUgPSB0aGlzLm9wdGlvbnMuZmFpbC5pbmRleE9mKCc6Ly8nKSA+IC0xO1xuICAgIGNvbnN0IHVybCA9IGlzQWJzb2x1dGUgPyB0aGlzLm9wdGlvbnMuZmFpbCA6IHRoaXMub3B0aW9ucy51cmwgKyB0aGlzLm9wdGlvbnMuZmFpbDtcblxuICAgIHRoaXMucmVxdWVzdCh1cmwpO1xuICB9XG5cbiAgLyoqXG4gICAqIFN0b3BzIHRoZSBoZWFsdGggY2hlY2sgY2FsbHNcbiAgICovXG4gIHN0b3AoKSB7XG4gICAgdGhpcy50aW1lci5jbGVhcigpO1xuICB9XG5cbiAgLyoqXG4gICAqIFN0YXJ0cyB0aGUgaGVhbHRoIGNoZWNrIGNhbGxzXG4gICAqL1xuICBzdGFydCgpIHtcbiAgICBsZXQgdDtcblxuICAgIGlmIChpc05hTih0aGlzLm9wdGlvbnMuaW50ZXJ2YWwpKSB7XG4gICAgICB0ID0gbGF0ZXIucGFyc2UudGV4dCh0aGlzLm9wdGlvbnMuaW50ZXJ2YWwpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0ID0gbGF0ZXIucGFyc2UucmVjdXIoKS5ldmVyeSh0aGlzLm9wdGlvbnMuaW50ZXJ2YWwpLnNlY29uZCgpO1xuICAgIH1cbiAgICB0aGlzLnRpbWVyID0gbGF0ZXIuc2V0SW50ZXJ2YWwoKCkgPT4gdGhpcy5jaGVjaygpLCB0KTtcbiAgfVxuXG4gIHJlcXVlc3QodXJsLCBjYWxsYmFjaykge1xuICAgIGNvbnN0IHJlcXVlc3QgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcblxuICAgIHJlcXVlc3Qub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKHJlcXVlc3QucmVhZHlTdGF0ZSA9PT0gNCAmJiByZXF1ZXN0LnN0YXR1cyA9PT0gMjAwKSB7XG4gICAgICAgIGlmIChjYWxsYmFjaykgdGhpcy5jYWxsYmFjayhyZXF1ZXN0LnJlc3BvbnNlVGV4dCk7XG4gICAgICB9XG4gICAgfTtcbiAgICByZXF1ZXN0Lm9wZW4oJ0dFVCcsIHVybCwgdHJ1ZSk7XG4gICAgcmVxdWVzdC5zZW5kKG51bGwpO1xuICB9XG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfbm9fY292X2xhdGVyX187Il0sInNvdXJjZVJvb3QiOiIifQ==