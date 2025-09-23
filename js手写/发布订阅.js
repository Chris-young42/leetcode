class EventEmitter {
  constructor() {
    this.event = {};
  }

  emit(type, cb) {
    if (!this.event[type]) {
      this.event[type] = [cb];
    } else {
      this.event[type].push(cb);
    }
  }

  on(type, ...args) {
    if (!this.event[type]) {
      return;
    } else {
      this.event[type].forEach((item) => item(...args));
    }
  }

  off(type, cb) {
    if (!this.event[type]) {
      return;
    } else {
      this.event[type] = this.event[type].filter((item) => item != cb);
    }
  }
}
