function curry(fn) {
  return function curried(...args) {
    if (args.length >= fn.length) {
      // 参数够了，执行原函数
      return fn.apply(this, args);
    } else {
      // 参数不够，返回一个新函数收集剩余参数
      return function(...nextArgs) {
        return curried.apply(this, args.concat(nextArgs));
      }
    }
  }
}