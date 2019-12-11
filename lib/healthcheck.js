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
  callback: false
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
      var request = new XMLHttpRequest();

      request.onreadystatechange = function () {
        if (request.readyState === 4 && request.status === 200) {
          if (this.options.callback) this.callback(request.responseText);
        }
      };

      request.open('GET', this.options.url, true);
      request.send(null);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9oZWFsdGhjaGVjay93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vaGVhbHRoY2hlY2svd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vaGVhbHRoY2hlY2svLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vaGVhbHRoY2hlY2svZXh0ZXJuYWwge1wiY29tbW9uanNcIjpcImxhdGVyXCIsXCJjb21tb25qczJcIjpcImxhdGVyXCIsXCJhbWRcIjpcImxhdGVyXCIsXCJyb290XCI6XCJsYXRlclwifSJdLCJuYW1lcyI6WyJsYXRlciIsInJlcXVpcmUiLCJkZWZhdWx0cyIsImludGVydmFsIiwiYXV0b3J1biIsImNhbGxiYWNrIiwiSGVhbHRoQ2hlY2siLCJvcHRpb25zIiwic3RhcnQiLCJyZXF1ZXN0IiwiWE1MSHR0cFJlcXVlc3QiLCJvbnJlYWR5c3RhdGVjaGFuZ2UiLCJyZWFkeVN0YXRlIiwic3RhdHVzIiwicmVzcG9uc2VUZXh0Iiwib3BlbiIsInVybCIsInNlbmQiLCJ0aW1lciIsImNsZWFyIiwidCIsImlzTmFOIiwicGFyc2UiLCJ0ZXh0IiwicmVjdXIiLCJldmVyeSIsInNlY29uZCIsInNldEludGVydmFsIiwiY2hlY2siXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO0FDVkE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xGQSxJQUFNQSxLQUFLLEdBQUdDLG1CQUFPLENBQUMsc0NBQUQsQ0FBckI7O0FBQ0EsSUFBTUMsUUFBUSxHQUFHO0FBQ2ZDLFVBQVEsRUFBRSxJQURLO0FBRWZDLFNBQU8sRUFBRSxJQUZNO0FBR2ZDLFVBQVEsRUFBRTtBQUhLLENBQWpCOztJQU1xQkMsVzs7O0FBQ25COzs7Ozs7Ozs7QUFTQSx1QkFBWUMsT0FBWixFQUFxQjtBQUFBOztBQUNuQixTQUFLQSxPQUFMLEdBQWUsRUFBRSxHQUFHTCxRQUFMO0FBQWUsU0FBR0s7QUFBbEIsS0FBZjtBQUNBLFFBQUksS0FBS0EsT0FBTCxDQUFhSCxPQUFiLEtBQXlCLEtBQTdCLEVBQW9DLEtBQUtJLEtBQUw7QUFDckM7Ozs7NEJBRU87QUFDTixVQUFNQyxPQUFPLEdBQUcsSUFBSUMsY0FBSixFQUFoQjs7QUFFQUQsYUFBTyxDQUFDRSxrQkFBUixHQUE2QixZQUFZO0FBQ3ZDLFlBQUlGLE9BQU8sQ0FBQ0csVUFBUixLQUF1QixDQUF2QixJQUE0QkgsT0FBTyxDQUFDSSxNQUFSLEtBQW1CLEdBQW5ELEVBQXdEO0FBQ3RELGNBQUksS0FBS04sT0FBTCxDQUFhRixRQUFqQixFQUEyQixLQUFLQSxRQUFMLENBQWNJLE9BQU8sQ0FBQ0ssWUFBdEI7QUFDNUI7QUFDRixPQUpEOztBQUtBTCxhQUFPLENBQUNNLElBQVIsQ0FBYSxLQUFiLEVBQW9CLEtBQUtSLE9BQUwsQ0FBYVMsR0FBakMsRUFBc0MsSUFBdEM7QUFDQVAsYUFBTyxDQUFDUSxJQUFSLENBQWEsSUFBYjtBQUNEO0FBRUQ7Ozs7OzsyQkFHTztBQUNMLFdBQUtDLEtBQUwsQ0FBV0MsS0FBWDtBQUNEO0FBRUQ7Ozs7Ozs0QkFHUTtBQUFBOztBQUNOLFVBQUlDLENBQUo7O0FBRUEsVUFBSUMsS0FBSyxDQUFDLEtBQUtkLE9BQUwsQ0FBYUosUUFBZCxDQUFULEVBQWtDO0FBQ2hDaUIsU0FBQyxHQUFHcEIsS0FBSyxDQUFDc0IsS0FBTixDQUFZQyxJQUFaLENBQWlCLEtBQUtoQixPQUFMLENBQWFKLFFBQTlCLENBQUo7QUFDRCxPQUZELE1BRU87QUFDTGlCLFNBQUMsR0FBR3BCLEtBQUssQ0FBQ3NCLEtBQU4sQ0FBWUUsS0FBWixHQUFvQkMsS0FBcEIsQ0FBMEIsS0FBS2xCLE9BQUwsQ0FBYUosUUFBdkMsRUFBaUR1QixNQUFqRCxFQUFKO0FBQ0Q7O0FBQ0QsV0FBS1IsS0FBTCxHQUFhbEIsS0FBSyxDQUFDMkIsV0FBTixDQUFrQjtBQUFBLGVBQU0sS0FBSSxDQUFDQyxLQUFMLEVBQU47QUFBQSxPQUFsQixFQUFzQ1IsQ0FBdEMsQ0FBYjtBQUNEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyREgsNEQiLCJmaWxlIjoiaGVhbHRoY2hlY2suanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoXCJsYXRlclwiKSk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShcImhlYWx0aGNoZWNrXCIsIFtcImxhdGVyXCJdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcImhlYWx0aGNoZWNrXCJdID0gZmFjdG9yeShyZXF1aXJlKFwibGF0ZXJcIikpO1xuXHRlbHNlXG5cdFx0cm9vdFtcImhlYWx0aGNoZWNrXCJdID0gZmFjdG9yeShyb290W1wibGF0ZXJcIl0pO1xufSkodHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnID8gc2VsZiA6IHRoaXMsIGZ1bmN0aW9uKF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfbGF0ZXJfbGF0ZXJfanNfXykge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiY29uc3QgbGF0ZXIgPSByZXF1aXJlKCdsYXRlci9sYXRlci5qcycpO1xuY29uc3QgZGVmYXVsdHMgPSB7XG4gIGludGVydmFsOiAzNjAwLFxuICBhdXRvcnVuOiB0cnVlLFxuICBjYWxsYmFjazogZmFsc2Vcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEhlYWx0aENoZWNrIHtcbiAgLyoqXG4gICAqXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zXG4gICAqIEBwYXJhbSB7c3RyaW5nLCBudW1iZXJ9IG9wdGlvbnMuaW50ZXJ2YWwgLSBQaW5nIGludGVydmFsLCBjYW4gYmUgYSBudW1iZXJcbiAgICogb3IgYSBbbGF0ZXIgc2NoZWR1bGVde0BsaW5rIGh0dHBzOi8vYnVua2F0LmdpdGh1Yi5pby9sYXRlci99XG4gICAqIEBwYXJhbSB7c3RyaW5nfSBvcHRpb25zLnVybCAtIFRoZSB1cmwgdG8gYmUgcGluZ2VkXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbb3B0aW9ucy5hdXRvcnVuXSAtIFNldCBpdCB0byBmYWxzZSB0byBzdGFydCB0aGUgY2hlY2tzIG1hbnVhbGx5XG4gICAqIEBjYWxsYmFjayBvcHRpb25zLmNhbGxiYWNrXG4gICAqL1xuICBjb25zdHJ1Y3RvcihvcHRpb25zKSB7XG4gICAgdGhpcy5vcHRpb25zID0geyAuLi5kZWZhdWx0cywgLi4ub3B0aW9ucyB9O1xuICAgIGlmICh0aGlzLm9wdGlvbnMuYXV0b3J1biAhPT0gZmFsc2UpIHRoaXMuc3RhcnQoKTtcbiAgfVxuXG4gIGNoZWNrKCkge1xuICAgIGNvbnN0IHJlcXVlc3QgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcblxuICAgIHJlcXVlc3Qub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKHJlcXVlc3QucmVhZHlTdGF0ZSA9PT0gNCAmJiByZXF1ZXN0LnN0YXR1cyA9PT0gMjAwKSB7XG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMuY2FsbGJhY2spIHRoaXMuY2FsbGJhY2socmVxdWVzdC5yZXNwb25zZVRleHQpO1xuICAgICAgfVxuICAgIH07XG4gICAgcmVxdWVzdC5vcGVuKCdHRVQnLCB0aGlzLm9wdGlvbnMudXJsLCB0cnVlKTtcbiAgICByZXF1ZXN0LnNlbmQobnVsbCk7XG4gIH1cblxuICAvKipcbiAgICogU3RvcHMgdGhlIGhlYWx0aCBjaGVjayBjYWxsc1xuICAgKi9cbiAgc3RvcCgpIHtcbiAgICB0aGlzLnRpbWVyLmNsZWFyKCk7XG4gIH1cblxuICAvKipcbiAgICogU3RhcnRzIHRoZSBoZWFsdGggY2hlY2sgY2FsbHNcbiAgICovXG4gIHN0YXJ0KCkge1xuICAgIGxldCB0O1xuXG4gICAgaWYgKGlzTmFOKHRoaXMub3B0aW9ucy5pbnRlcnZhbCkpIHtcbiAgICAgIHQgPSBsYXRlci5wYXJzZS50ZXh0KHRoaXMub3B0aW9ucy5pbnRlcnZhbCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHQgPSBsYXRlci5wYXJzZS5yZWN1cigpLmV2ZXJ5KHRoaXMub3B0aW9ucy5pbnRlcnZhbCkuc2Vjb25kKCk7XG4gICAgfVxuICAgIHRoaXMudGltZXIgPSBsYXRlci5zZXRJbnRlcnZhbCgoKSA9PiB0aGlzLmNoZWNrKCksIHQpO1xuICB9XG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfbGF0ZXJfbGF0ZXJfanNfXzsiXSwic291cmNlUm9vdCI6IiJ9