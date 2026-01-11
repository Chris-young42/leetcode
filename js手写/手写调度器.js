class Scheduler {
  constructor(limit) {
    this.limit = limit;
    this.running = 0;
    this.queue = [];
  }

  add(promiseCreator) {
    return new Promise((resolve, reject) => {
      this.queue.push({ promiseCreator, resolve, reject });
      this.run();
    });
  }
  run() {
    if (this.running >= this.limit || this.queue.length === 0) {
      return;
    }
    const { promiseCreator, resolve, reject } = this.queue.shift();
    promiseCreator()
      .then((res) => resolve(res))
      .catch((err) => reject(err))
      .finally(() => {
        this.running--;
        this.run();
      });
  }
}
