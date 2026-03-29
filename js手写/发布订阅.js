class EventBus {
  constructor() {
    this.events = {};
  }

  // 订阅
  on(type, fn) {
    if (!this.events[type]) {
      this.events[type] = [];
    }
    this.events[type].push(fn);
  }

  // 发布
  emit(type, ...args) {
    if (!this.events[type]) return;
    this.events[type].forEach(fn => fn(...args));
  }

  // 取消订阅
  off(type, fn) {
    if (!this.events[type]) return;
    this.events[type] = this.events[type].filter(item => item !== fn);
  }

  // 只执行一次
  once(type, fn) {
    const wrapper = (...args) => {
      fn(...args);
      this.off(type, wrapper);
    };
    this.on(type, wrapper);
  }
}