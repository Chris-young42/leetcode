class MiniStack {
  constructor() {
    this.st = [[0, Infinity]];
  }
  push(val) {
    this.st.push([val, Math.min(getMin(), val)]);
  }
  pop() {
    this.st.pop;
  }
  top() {
    return this.st[this.st.length - 1][0];
  }
  getMin() {
    return this.st[this.st.length - 1][1];
  }
}
