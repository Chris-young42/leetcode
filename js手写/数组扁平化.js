// 循环展开法（迭代实现）
function flatByLoop(arr) {
  // 先创建原数组的浅拷贝，避免修改原数组
  let flattenedArr = [...arr];
  // 只要数组中还有嵌套的数组，就继续展开
  while (flattenedArr.some(item => Array.isArray(item))) {
    // 利用扩展运算符展开一层数组，再通过concat合并
    flattenedArr = [].concat(...flattenedArr);
  }
  return flattenedArr;
}

// 测试示例
const testArr1 = [1, [2, [3, 4], 5], 6];
// console.log(flatByLoop(testArr1)); // 输出: [1, 2, 3, 4, 5, 6]

function flatten(arr) {
  let result = [];

  for (let i = 0, len = arr.length; i < len; i++) {
    if (Array.isArray(arr[i])) {
      result = result.concat(flatten[i]);
    } else {
      result.push(arr[i]);
    }
  }
}
function flatByNative(arr) {
  // flat(Infinity) 表示拍平所有层级的嵌套数组
  // 也可以指定层级，如flat(2)表示拍平2层
  return arr.flat(Infinity);
}

console.log(flatByNative(testArr1));

