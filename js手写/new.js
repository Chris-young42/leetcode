function myNew(Constructor, ...args) {
  // 1. 创建新对象
  const obj = {};

  // 2. 连接原型链
  //   Object.setPrototypeOf(obj, Constructor.prototype);
  // 等价于： obj.__proto__ = Constructor.prototype
  obj.__proto__ = Constructor.prototype;
  // 3. 执行构造函数
  const result = Constructor.apply(obj, args);

  // 4. 返回对象
  return result !== null &&
    (typeof result === "object" || typeof result === "function")
    ? result
    : obj;
}
