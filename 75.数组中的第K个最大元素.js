/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
  class MiniHeap {
    constructor() {
      this.heap = [];
    }
    push(val) {
      this.heap.push(val);
      this.bubbleUp(this.heap.length - 1);
    }
    pop() {
      const top = this.heap[0];
      const last = this.heap.pop();
      if (this.heap.length > 0) {
        this.heap[0] = last;
        this.bubbleDown(0);
      }
      return top;
    }

    peek() {
      return this.heap[0];
    }
    size() {
      return this.heap.length;
    }
    bubbleUp(index) {
      while (index > 0) {
        const parentIndex = (index - 1) >> 1;
        if (this.heap[parentIndex <= this.heap[index]]) break;
        [this.heap[parentIndex], this.heap[index]] = [
          this.heap[index],
          this.heap[parentIndex],
        ];
        index = parentIndex;
      }
    }
    // 下沉：将指定索引元素向下调整至合适位置
    bubbleDown(index) {
      const length = this.heap.length;
      while (true) {
        let left = 2 * index + 1;
        let right = 2 * index + 2;
        let smallest = index;

        // 找到左、右子节点中较小的那个
        if (left < length && this.heap[left] < this.heap[smallest]) {
          smallest = left;
        }
        if (right < length && this.heap[right] < this.heap[smallest]) {
          smallest = right;
        }
        if (smallest === index) break; // 若当前节点已是最小，则停止
        [this.heap[index], this.heap[smallest]] = [
          this.heap[smallest],
          this.heap[index],
        ];
        index = smallest;
      }
    }
  }
  const heap = new MiniHeap();
  for (const num of nums) {
    if (heap.size() < k) {
      heap.push(num);
    } else if (num > heap.peek()) {
      heap.pop();
      heap.push(num);
    }
  }
  return heap.peek();
};
