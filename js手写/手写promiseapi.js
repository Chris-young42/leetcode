function all(promise) {
  return new Promise((resolve, reject) => {
    if (promise.length === 0) {
      resolve([]);
    } else {
      let result = [];
      let index = 0;
      for (let i = 0; i < promise.length; i++) {
        promise[i].then(
          (data) => {
            result[i] = data;
            if (++index === promise.length) {
              resolve(result);
            }
          },
          (err) => {
            reject(err);
            return;
          },
        );
      }
    }
  });
}

function promiseRace(promises) {
  // 1. 先判断是否是可迭代对象（简单判断）
  if (!Array.isArray(promises)) {
    return Promise.reject(new TypeError('argument is not iterable'));
  }

  // 2. race 返回一个新 Promise
  return new Promise((resolve, reject) => {
    // 3. 遍历所有 promise
    for (const p of promises) {
      // 4. 谁先完成/失败，就立刻 resolve/reject
      Promise.resolve(p)
        .then(resolve)
        .catch(reject);
    }
  });
}