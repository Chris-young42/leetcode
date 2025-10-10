class MinStack {
    constructor() {
        // 这里的 0 写成任意数都可以，反正用不到
        this.st = [[0, Infinity]]; // 栈底哨兵
    }

    push(val) {
        this.st.push([val, Math.min(this.getMin(), val)]);
    }

    pop() {
        this.st.pop();
    }

    top() {
        return this.st[this.st.length - 1][0];
    }

    getMin() {
        return this.st[this.st.length - 1][1];
    }
}
