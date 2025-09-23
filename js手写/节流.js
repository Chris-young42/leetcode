function throttle(fn, time = 1000, ...args) {
  let prevTime = 0;
  return function () {
    let context = this;
    let curtime = Date.now();
    if (curtime - prevTime > time) {
      fn.apply(context, args);
      prevTime = curtime;
    }
  };
}
