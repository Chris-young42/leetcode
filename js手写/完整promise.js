class MyPromise {
  constructor(executor) {
    this.state = "pending";
    this.success = null;
    this.fail = null;
    this.resolveCallbacks = [];
    this.rejectCallbacks = [];

    const resolve = (success) => {
      if (this.state === "pending") {
        this.state = "fulfilled";
        this.success = success;
        while (this.resolveCallbacks.length) {
          this.resolveCallbacks.shift()();
        }
      }
    };

    const reject = (fail) => {
      if (this.state === "pending") {
        this.state = "rejected";
        this.fail = fail;
        while (this.rejectCallbacks.length) {
          this.rejectCallbacks.shift()();
        }
      }
    };

    try {
      executor(resolve, reject);
    } catch (error) {
      reject(error);
    }
  }

  then(onFulfilled, onRejected) {
    onFulfilled =
      typeof onFulfilled === "function" ? onFulfilled : (success) => success;
    onRejected = typeof onRejected === "function" ? onRejected : (fail) => fail;
    let promiseNext = new MyPromise((resolve, reject) => {
      if (this.state === "fulfilled") {
        queueMicrotask(() => {
          try {
            let item = onFulfilled(this.success);
            resolvePromise(item, resolve, reject, promiseNext);
          } catch (error) {
            reject(error);
          }
        });
      }
      if (this.state === "rejected") {
        queueMicrotask(() => {
          try {
            let item = onRejected(this.fail);
            resolvePromise(item, resolve, reject, promiseNext);
          } catch (error) {
            reject(error);
          }
        });
      }
      if (this.state === "pending") {
        this.resolveCallbacks.push(() => {
          queueMicrotask(() => {
            try {
              let item = onFulfilled(this.success);
              resolvePromise(item, resolve, reject, promiseNext);
            } catch (error) {
              reject(error);
            }
          });
        });
        this.rejectCallbacks.push(() => {
          queueMicrotask(() => {
            try {
              const item = onRejected(this.fail);
              // 传入 resolvePromise 集中处理
              resolvePromise(item, resolve, reject, promiseNext);
            } catch (error) {
              reject(error);
            }
          });
        });
      }
    });
    return promiseNext;
  }

  static resolve(success) {
    if (success instanceof MyPromise) {
      return success;
    }

    return new MyPromise((resolve) => {
      resolve(success);
    });
  }

  // reject 静态方法
  static reject(fail) {
    if (fail instanceof MyPromise) {
      return fail;
    }
    return new MyPromise((_, reject) => {
      reject(fail);
    });
  }

  static finally(fn) {
    return this.then(
      (success) => {
        fn();
        return success;
      },
      (fail) => {
        fn();
        throw fail;
      },
    );
  }

  static catch(onRejected) {
    return this.then(null, onRejected);
  }

  static all(promises) {
    return new MyPromise((resolve, reject) => {
      if (promises.length === 0) {
        resolve([]);
      } else {
        let result = [];
        let index = 0;
        for (let i = 0; i < promises.length; i++) {
          promises[i].then(
            (data) => {
              result[i] = data;
              if (++index === promises.length) {
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

  static race(promises) {
    return new MyPromise((resolve, reject) => {
      if (promises.length === 0) {
        resolve();
      } else {
        // let index = 0;
        for (let i = 0; i < promises.length; i++) {
          promises[i].then(
            (data) => {
              resolve(data);
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
}

const resolvePromise = (x, resolve, reject, promiseNext) => {
  if (x === promiseNext) {
    const err = new TypeError(
      "Uncaught (in promsie) TypeError:detected for promise #<Promsie>",
    );
    return reject(err);
  }

  if (x instanceof MyPromise) {
    x.then(resolve, reject);
  } else {
    resolve(x);
  }
};
