const later = require('later/later.js');
const defaults = {
  interval: 3600,
  autorun: true,
  callback: false,
  method: 'GET',
  fail: '/fail'
};

export default class HealthCheck {
  /**
   *
   * @param {Object} options
   * @param {string, number} options.interval - Ping interval, can be a number
   * or a [later schedule]{@link https://bunkat.github.io/later/}
   * @param {string} options.url - The url to be pinged
   * @param {string} [options.autorun] - Set it to false to start the checks manually
   * @callback options.callback
   */
  constructor(options) {
    this.options = { ...defaults, ...options };
    if (this.options.autorun !== false) this.start();
  }

  check() {
    this.request(this.options.url, this.options.callback);
  }

  /**
   * Calls the fail endpoint to report an error
   */
  error() {
    const isAbsolute = this.options.fail.indexOf('://') > -1;
    const url = isAbsolute ? this.options.fail : this.options.url + this.options.fail;

    this.request(url);
  }

  /**
   * Stops the health check calls
   */
  stop() {
    this.timer.clear();
  }

  /**
   * Starts the health check calls
   */
  start() {
    let t;

    if (isNaN(this.options.interval)) {
      t = later.parse.text(this.options.interval);
    } else {
      t = later.parse.recur().every(this.options.interval).second();
    }
    this.timer = later.setInterval(() => this.check(), t);
  }

  request(url, callback) {
    const request = new XMLHttpRequest();

    request.onreadystatechange = function () {
      if (request.readyState === 4 && request.status === 200) {
        if (callback) this.callback(request.responseText);
      }
    };
    request.open('GET', url, true);
    request.send(null);
  }
}
