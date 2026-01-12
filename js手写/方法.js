Function.prototype.myCall = function (context, ...args) {
  context = context || globalThis; // 如果传入 null 或 undefined，默认绑定全局对象
  const fnSymbol = Symbol(); // 创建唯一属性，避免覆盖已有属性
  context[fnSymbol] = this; // 将函数作为对象的方法
  const result = context[fnSymbol](...args); // 执行函数
  delete context[fnSymbol]; // 删除临时属性
  return result; // 返回执行结果
};

Function.prototype.myApply = function (context, args) {
  context = context || globalThis;
  const fnKey = Symbol("fn");
  context[fnKey] = this;

  let result;
  if (Array.isArray(args)) {
    result = context[fnKey](...args); // 展开数组作为参数
  } else {
    result = context[fnKey](); // 没传数组时，不传参数
  }

  delete context[fnKey];
  return result;
};

Function.prototype.myBind = function (context, ...args) {
  const self = this;
  return function boundFn(...innerArgs) {
    // 如果通过 new 调用，则 this 指向实例对象
    const isNew = this instanceof boundFn;
    return self.apply(isNew ? this : context, [...args, ...innerArgs]);
  };
};
