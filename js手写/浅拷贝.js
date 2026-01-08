let obj = {
  a: 1,
  b: {
    c: 2,
  },
};

let newObj = Object.assign({}, obj);
// 1. 手动浅拷贝对象
function shallowCopyObj(obj) {
  // 先判断是否为对象（排除null和非对象类型）
  if (typeof obj !== "object" || obj === null) return obj;
  const newObj = {};
  // 遍历原对象的第一层属性并赋值
  for (let key in obj) {
    // 只拷贝自身属性（排除原型链属性）
    if (obj.hasOwnProperty(key)) {
      newObj[key] = obj[key];
    }
  }
  return newObj;
}