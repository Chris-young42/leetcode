function debounce(fn, time,) {
  let timer = null;
  let context = this;
  return function (...args) {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(context, ...args);
    }, time);
  };
}
