// 大顶堆（只声明一次）
class MaxHeap1 {
  constructor() {
    this.heap = [];
  }

  push(val) {
    this.heap.push(val);
    this.bubbleUp(this.heap.length - 1);
  }

  pop() {
    if (this.isEmpty()) return null;
    this.swap(0, this.heap.length - 1);
    const top = this.heap.pop();
    this.bubbleDown(0);
    return top;
  }

  peek() {
    return this.isEmpty() ? null : this.heap[0];
  }

  size() {
    return this.heap.length;
  }

  isEmpty() {
    return this.heap.length === 0;
  }

  swap(i, j) {
    [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
  }

  bubbleUp(index) {
    while (index > 0) {
      const parentIndex = Math.floor((index - 1) / 2);
      if (this.heap[parentIndex] >= this.heap[index]) break;
      this.swap(parentIndex, index);
      index = parentIndex;
    }
  }

  bubbleDown(index) {
    const lastIndex = this.heap.length - 1;
    while (true) {
      const leftChildIndex = 2 * index + 1;
      const rightChildIndex = 2 * index + 2;
      let largestIndex = index;

      if (
        leftChildIndex <= lastIndex &&
        this.heap[leftChildIndex] > this.heap[largestIndex]
      ) {
        largestIndex = leftChildIndex;
      }
      if (
        rightChildIndex <= lastIndex &&
        this.heap[rightChildIndex] > this.heap[largestIndex]
      ) {
        largestIndex = rightChildIndex;
      }
      if (largestIndex === index) break;
      this.swap(index, largestIndex);
      index = largestIndex;
    }
  }
}

// 小顶堆（只声明一次）
class MinHeap1 {
  constructor() {
    this.heap = [];
  }

  push(val) {
    this.heap.push(val);
    this.bubbleUp(this.heap.length - 1);
  }

  pop() {
    if (this.isEmpty()) return null;
    this.swap(0, this.heap.length - 1);
    const top = this.heap.pop();
    this.bubbleDown(0);
    return top;
  }

  peek() {
    return this.isEmpty() ? null : this.heap[0];
  }

  size() {
    return this.heap.length;
  }

  isEmpty() {
    return this.heap.length === 0;
  }

  swap(i, j) {
    [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
  }

  bubbleUp(index) {
    while (index > 0) {
      const parentIndex = Math.floor((index - 1) / 2);
      if (this.heap[parentIndex] <= this.heap[index]) break;
      this.swap(parentIndex, index);
      index = parentIndex;
    }
  }

  bubbleDown(index) {
    const lastIndex = this.heap.length - 1;
    while (true) {
      const leftChildIndex = 2 * index + 1;
      const rightChildIndex = 2 * index + 2;
      let smallestIndex = index;

      if (
        leftChildIndex <= lastIndex &&
        this.heap[leftChildIndex] < this.heap[smallestIndex]
      ) {
        smallestIndex = leftChildIndex;
      }
      if (
        rightChildIndex <= lastIndex &&
        this.heap[rightChildIndex] < this.heap[smallestIndex]
      ) {
        smallestIndex = rightChildIndex;
      }
      if (smallestIndex === index) break;
      this.swap(index, smallestIndex);
      index = smallestIndex;
    }
  }
}

var MedianFinder = function () {
  this.leftHeap = new MaxHeap1();
  this.rightHeap = new MinHeap1();
};

MedianFinder.prototype.addNum = function (num) {
  if (this.leftHeap.size() === this.rightHeap.size()) {
    this.rightHeap.push(num);
    const minFromRight = this.rightHeap.pop();
    this.leftHeap.push(minFromRight);
  } else {
    this.leftHeap.push(num);
    const maxFromLeft = this.leftHeap.pop();
    this.rightHeap.push(maxFromLeft);
  }
};

MedianFinder.prototype.findMedian = function () {
  if (this.leftHeap.size() > this.rightHeap.size()) {
    return this.leftHeap.peek();
  }
  return (this.leftHeap.peek() + this.rightHeap.peek()) / 2;
};
