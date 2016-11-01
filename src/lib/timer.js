import now from './now.js';

var startTime = null;
var stopTime = null;

export default {
  start() {
    startTime = now();
    stopTime = null;
  },

  stop() {
    stopTime = now();
  },

  reset() {
    startTime = null;
    stopTime = null;
  },

  time() {
    if (!startTime) {
      return 0;
    }

    var endTime = stopTime || now();

    return endTime - startTime;
  },

  isRunning() {
    return !stopTime;
  },
}
