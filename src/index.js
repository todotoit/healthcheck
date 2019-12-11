const later = require('later/later.js');
const defaults = {
  interval: 3600,
  autorun: true,
  callback: false
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
    const request = new XMLHttpRequest();

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
}
