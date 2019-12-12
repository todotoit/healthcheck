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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9oZWFsdGhjaGVjay93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vaGVhbHRoY2hlY2svd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vaGVhbHRoY2hlY2svLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vaGVhbHRoY2hlY2svZXh0ZXJuYWwge1wiY29tbW9uanNcIjpcIm5vLWNvdi1sYXRlclwiLFwiY29tbW9uanMyXCI6XCJuby1jb3YtbGF0ZXJcIixcImFtZFwiOlwibm8tY292LWxhdGVyXCIsXCJyb290XCI6XCJsYXRlclwifSJdLCJuYW1lcyI6WyJkZWZhdWx0cyIsImludGVydmFsIiwiYXV0b3J1biIsImNhbGxiYWNrIiwibWV0aG9kIiwiZmFpbCIsIkhlYWx0aENoZWNrIiwib3B0aW9ucyIsInN0YXJ0IiwicmVxdWVzdCIsInVybCIsImlzQWJzb2x1dGUiLCJpbmRleE9mIiwidGltZXIiLCJjbGVhciIsInQiLCJpc05hTiIsInBhcnNlIiwidGV4dCIsInJlY3VyIiwiZXZlcnkiLCJzZWNvbmQiLCJzZXRJbnRlcnZhbCIsImNoZWNrIiwiWE1MSHR0cFJlcXVlc3QiLCJvbnJlYWR5c3RhdGVjaGFuZ2UiLCJyZWFkeVN0YXRlIiwic3RhdHVzIiwicmVzcG9uc2VUZXh0Iiwib3BlbiIsInNlbmQiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO1FDVkE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xGQTs7Ozs7Ozs7OztBQUVBLElBQU1BLFFBQVEsR0FBRztBQUNmQyxVQUFRLEVBQUUsSUFESztBQUVmQyxTQUFPLEVBQUUsSUFGTTtBQUdmQyxVQUFRLEVBQUUsS0FISztBQUlmQyxRQUFNLEVBQUUsS0FKTztBQUtmQyxNQUFJLEVBQUU7QUFMUyxDQUFqQjs7SUFRcUJDLFc7OztBQUNuQjs7Ozs7Ozs7O0FBU0EsdUJBQVlDLE9BQVosRUFBcUI7QUFBQTs7QUFDbkIsU0FBS0EsT0FBTCxHQUFlLEVBQUUsR0FBR1AsUUFBTDtBQUFlLFNBQUdPO0FBQWxCLEtBQWY7QUFDQSxRQUFJLEtBQUtBLE9BQUwsQ0FBYUwsT0FBYixLQUF5QixLQUE3QixFQUFvQyxLQUFLTSxLQUFMO0FBQ3JDOzs7OzRCQUVPO0FBQ04sV0FBS0MsT0FBTCxDQUFhLEtBQUtGLE9BQUwsQ0FBYUcsR0FBMUIsRUFBK0IsS0FBS0gsT0FBTCxDQUFhSixRQUE1QztBQUNEO0FBRUQ7Ozs7Ozs0QkFHUTtBQUNOLFVBQU1RLFVBQVUsR0FBRyxLQUFLSixPQUFMLENBQWFGLElBQWIsQ0FBa0JPLE9BQWxCLENBQTBCLEtBQTFCLElBQW1DLENBQUMsQ0FBdkQ7QUFDQSxVQUFNRixHQUFHLEdBQUdDLFVBQVUsR0FBRyxLQUFLSixPQUFMLENBQWFGLElBQWhCLEdBQXVCLEtBQUtFLE9BQUwsQ0FBYUcsR0FBYixHQUFtQixLQUFLSCxPQUFMLENBQWFGLElBQTdFO0FBRUEsV0FBS0ksT0FBTCxDQUFhQyxHQUFiO0FBQ0Q7QUFFRDs7Ozs7OzJCQUdPO0FBQ0wsV0FBS0csS0FBTCxDQUFXQyxLQUFYO0FBQ0Q7QUFFRDs7Ozs7OzRCQUdRO0FBQUE7O0FBQ04sVUFBSUMsQ0FBSjs7QUFFQSxVQUFJQyxLQUFLLENBQUMsS0FBS1QsT0FBTCxDQUFhTixRQUFkLENBQVQsRUFBa0M7QUFDaENjLFNBQUMsR0FBRyxvQkFBTUUsS0FBTixDQUFZQyxJQUFaLENBQWlCLEtBQUtYLE9BQUwsQ0FBYU4sUUFBOUIsQ0FBSjtBQUNELE9BRkQsTUFFTztBQUNMYyxTQUFDLEdBQUcsb0JBQU1FLEtBQU4sQ0FBWUUsS0FBWixHQUFvQkMsS0FBcEIsQ0FBMEIsS0FBS2IsT0FBTCxDQUFhTixRQUF2QyxFQUFpRG9CLE1BQWpELEVBQUo7QUFDRDs7QUFDRCxXQUFLUixLQUFMLEdBQWEsb0JBQU1TLFdBQU4sQ0FBa0I7QUFBQSxlQUFNLEtBQUksQ0FBQ0MsS0FBTCxFQUFOO0FBQUEsT0FBbEIsRUFBc0NSLENBQXRDLENBQWI7QUFDRDs7OzRCQUVPTCxHLEVBQUtQLFEsRUFBVTtBQUNyQixVQUFNTSxPQUFPLEdBQUcsSUFBSWUsY0FBSixFQUFoQjs7QUFFQWYsYUFBTyxDQUFDZ0Isa0JBQVIsR0FBNkIsWUFBWTtBQUN2QyxZQUFJaEIsT0FBTyxDQUFDaUIsVUFBUixLQUF1QixDQUF2QixJQUE0QmpCLE9BQU8sQ0FBQ2tCLE1BQVIsS0FBbUIsR0FBbkQsRUFBd0Q7QUFDdEQsY0FBSXhCLFFBQUosRUFBYyxLQUFLQSxRQUFMLENBQWNNLE9BQU8sQ0FBQ21CLFlBQXRCO0FBQ2Y7QUFDRixPQUpEOztBQUtBbkIsYUFBTyxDQUFDb0IsSUFBUixDQUFhLEtBQWIsRUFBb0JuQixHQUFwQixFQUF5QixJQUF6QjtBQUNBRCxhQUFPLENBQUNxQixJQUFSLENBQWEsSUFBYjtBQUNEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0RUgsMEQiLCJmaWxlIjoiaGVhbHRoY2hlY2suanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoXCJuby1jb3YtbGF0ZXJcIikpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoXCJoZWFsdGhjaGVja1wiLCBbXCJuby1jb3YtbGF0ZXJcIl0sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiaGVhbHRoY2hlY2tcIl0gPSBmYWN0b3J5KHJlcXVpcmUoXCJuby1jb3YtbGF0ZXJcIikpO1xuXHRlbHNlXG5cdFx0cm9vdFtcImhlYWx0aGNoZWNrXCJdID0gZmFjdG9yeShyb290W1wibGF0ZXJcIl0pO1xufSkodHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnID8gc2VsZiA6IHRoaXMsIGZ1bmN0aW9uKF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfbm9fY292X2xhdGVyX18pIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImltcG9ydCBsYXRlciBmcm9tICduby1jb3YtbGF0ZXInO1xuXG5jb25zdCBkZWZhdWx0cyA9IHtcbiAgaW50ZXJ2YWw6IDM2MDAsXG4gIGF1dG9ydW46IHRydWUsXG4gIGNhbGxiYWNrOiBmYWxzZSxcbiAgbWV0aG9kOiAnR0VUJyxcbiAgZmFpbDogJy9mYWlsJ1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSGVhbHRoQ2hlY2sge1xuICAvKipcbiAgICpcbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnNcbiAgICogQHBhcmFtIHtzdHJpbmcsIG51bWJlcn0gb3B0aW9ucy5pbnRlcnZhbCAtIFBpbmcgaW50ZXJ2YWwsIGNhbiBiZSBhIG51bWJlclxuICAgKiBvciBhIFtsYXRlciBzY2hlZHVsZV17QGxpbmsgaHR0cHM6Ly9idW5rYXQuZ2l0aHViLmlvL2xhdGVyL31cbiAgICogQHBhcmFtIHtzdHJpbmd9IG9wdGlvbnMudXJsIC0gVGhlIHVybCB0byBiZSBwaW5nZWRcbiAgICogQHBhcmFtIHtzdHJpbmd9IFtvcHRpb25zLmF1dG9ydW5dIC0gU2V0IGl0IHRvIGZhbHNlIHRvIHN0YXJ0IHRoZSBjaGVja3MgbWFudWFsbHlcbiAgICogQGNhbGxiYWNrIG9wdGlvbnMuY2FsbGJhY2tcbiAgICovXG4gIGNvbnN0cnVjdG9yKG9wdGlvbnMpIHtcbiAgICB0aGlzLm9wdGlvbnMgPSB7IC4uLmRlZmF1bHRzLCAuLi5vcHRpb25zIH07XG4gICAgaWYgKHRoaXMub3B0aW9ucy5hdXRvcnVuICE9PSBmYWxzZSkgdGhpcy5zdGFydCgpO1xuICB9XG5cbiAgY2hlY2soKSB7XG4gICAgdGhpcy5yZXF1ZXN0KHRoaXMub3B0aW9ucy51cmwsIHRoaXMub3B0aW9ucy5jYWxsYmFjayk7XG4gIH1cblxuICAvKipcbiAgICogQ2FsbHMgdGhlIGZhaWwgZW5kcG9pbnQgdG8gcmVwb3J0IGFuIGVycm9yXG4gICAqL1xuICBlcnJvcigpIHtcbiAgICBjb25zdCBpc0Fic29sdXRlID0gdGhpcy5vcHRpb25zLmZhaWwuaW5kZXhPZignOi8vJykgPiAtMTtcbiAgICBjb25zdCB1cmwgPSBpc0Fic29sdXRlID8gdGhpcy5vcHRpb25zLmZhaWwgOiB0aGlzLm9wdGlvbnMudXJsICsgdGhpcy5vcHRpb25zLmZhaWw7XG5cbiAgICB0aGlzLnJlcXVlc3QodXJsKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTdG9wcyB0aGUgaGVhbHRoIGNoZWNrIGNhbGxzXG4gICAqL1xuICBzdG9wKCkge1xuICAgIHRoaXMudGltZXIuY2xlYXIoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTdGFydHMgdGhlIGhlYWx0aCBjaGVjayBjYWxsc1xuICAgKi9cbiAgc3RhcnQoKSB7XG4gICAgbGV0IHQ7XG5cbiAgICBpZiAoaXNOYU4odGhpcy5vcHRpb25zLmludGVydmFsKSkge1xuICAgICAgdCA9IGxhdGVyLnBhcnNlLnRleHQodGhpcy5vcHRpb25zLmludGVydmFsKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdCA9IGxhdGVyLnBhcnNlLnJlY3VyKCkuZXZlcnkodGhpcy5vcHRpb25zLmludGVydmFsKS5zZWNvbmQoKTtcbiAgICB9XG4gICAgdGhpcy50aW1lciA9IGxhdGVyLnNldEludGVydmFsKCgpID0+IHRoaXMuY2hlY2soKSwgdCk7XG4gIH1cblxuICByZXF1ZXN0KHVybCwgY2FsbGJhY2spIHtcbiAgICBjb25zdCByZXF1ZXN0ID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG5cbiAgICByZXF1ZXN0Lm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmIChyZXF1ZXN0LnJlYWR5U3RhdGUgPT09IDQgJiYgcmVxdWVzdC5zdGF0dXMgPT09IDIwMCkge1xuICAgICAgICBpZiAoY2FsbGJhY2spIHRoaXMuY2FsbGJhY2socmVxdWVzdC5yZXNwb25zZVRleHQpO1xuICAgICAgfVxuICAgIH07XG4gICAgcmVxdWVzdC5vcGVuKCdHRVQnLCB1cmwsIHRydWUpO1xuICAgIHJlcXVlc3Quc2VuZChudWxsKTtcbiAgfVxufVxuIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX25vX2Nvdl9sYXRlcl9fOyJdLCJzb3VyY2VSb290IjoiIn0=