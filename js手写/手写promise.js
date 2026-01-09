class MyPromise {
  static PENDING = "pending";
  static FULFILLED = "fulfilled";
  static REJECTED = "rejected";
  constructor(exector) {
    this.status = MyPromise.PENDING;
    this.value = undefined;
    this.reason = undefined;
    this.onFullfilledCallbacks = [];
    this.onRejectedCallbacks = [];
    const resovle = (value) => {
      if (this.status === MyPromise.PENDING) {
        this.status = MyPromise.FULFILLED;
        this.value = value;
        this.onFullfilledCallbacks.forEach((cb) => cb());
      }
    };
    const reject = (reason) => {
      if (this.status === MyPromise.PENDING) {
        this.status = MyPromise.REJECTED;
        this.reason = reason;
        this.onRejectedCallbacks.forEach((cb) => cb());
      }
    };
    try {
      exector(resovle, reject);
    } catch (error) {
      reject(error);
    }
  }

  then(onFullfilled, onRejected) {
    onFullfilled =
      typeof onFullfilled === "function" ? onFullfilled : (value) => value;
    onRejected =
      typeof onRejected === "function"
        ? onRejected
        : (reason) => {
            throw reason;
          };
    const newPromise = new MyPromise((resovle, reject) => {
      if (this.status === MyPromise.FULFILLED) {
        setTimeout(() => {
          try {
            const result = onFullfilled(this.value);
            result instanceof MyPromise
              ? result.then(resovle, reject)
              : resovle(result);
          } catch (error) {
            reject(error);
          }
        }, 0);
      }
      if (this.status === MyPromise.REJECTED) {
        setTimeout(() => {
          try {
            const result = onRejected(this.value);
            result instanceof MyPromise
              ? result.then(resovle, reject)
              : resovle(result);
          } catch (error) {
            reject(error);
          }
        }, 0);
      }
      if (this.status === MyPromise.PENDING) {
        this.onFullfilledCallbacks.push(() => {
          setTimeout(() => {
            try {
              const result = onFullfilled(this.value);
              result instanceof MyPromise
                ? result.then(resovle, reject)
                : resovle(result);
            } catch (error) {
              reject(error);
            }
          }, 0);
        });
      }
    });

    return newPromise;
  }

  static resovle() {}
  static reject() {}
}
