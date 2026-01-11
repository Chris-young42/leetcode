function debounce(fn, time) {
  let timer = null;
  return function (...args) {
    if (timer) clearTimeout(timer);
    let context = this;
    timer = setTimeout(() => {
      fn.apply(context, ...args);
    }, time);
  };
}
