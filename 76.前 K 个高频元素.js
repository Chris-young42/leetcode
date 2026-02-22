/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  const freqMap = new Map();
  for (const num of nums) {
    freqMap.set(num, (freqMap.get(num) || 0) + 1);
  }
  class MiniHeap {
    constructor() {
      this.MiniHeap = [];
    }
    getParentIdx(i) {
      return Math.floor((i - 1) / 2);
    }
    getLeftIdx(i) {
      return 2 * i + 1;
    }
    swap(i1, i2) {
      [this.heap[i1], this.heap[i2]] = [this.heap[i2], this.heap[i1]];
    }
    getSize() {
      return this.heap.length;
    }
    getTop() {
      return this.heap[0];
    }
    insert(freq, num) {
      this.heap.push([freq, num]);
    }

    extractMin() {
      const min = this.heap[0];
      const last = this.heap.pop();
      if (this.heap.length > 0) {
        this.heap[0] = last;
        this.shiftDown(0);
      }
      return min;
    }

    shiftUp(idx) {
      if (idx === 0) return;
      const parentIdx = this.getLeftIdx(idx);
      if (this.heap[idx][0] < this.heap[parentIdx][0]) {
        this.swap(idx, parentIdx);
        this.shiftUp(parentIdx);
      }
    }

    shiftDown(idx) {
      const leftIdx = this.getLeftIdx(idx);
      const rightIdx = leftIdx + 1;
      let smallestIdx = idx;
      if (
        leftIdx < this.heap.length &&
        this.heap[leftIdx][0] < this.heap[smallestIdx][0]
      ) {
        smallestIdx = leftIdx;
      }
      if (
        rightIdx < this.heap.length &&
        this.heap[rightIdx][0] < this.heap[smallestIdx][0]
      ) {
        smallestIdx = rightIdx;
      }
      if (smallestIdx !== idx) {
        this.swap(idx, smallestIdx);
        this.shiftDown(smallestIdx);
      }
    }
  }

  const heap = new MiniHeap();
  for (const [num, freq] of freqMap) {
    if (heap.getSize() < k) {
      heap.insert(freq, num);
    } else {
      if (freq > heap.getTop[0]) {
        heap.extractMin();
        heap.insert(freq, num);
      }
    }
  }
  return heap.heap.map((item) => item[1]);
};

var topKFrequent = function (nums, k) {
  // 第一步：统计每个元素的出现次数
  const cnt = new Map();
  for (const x of nums) {
    cnt.set(x, (cnt.get(x) ?? 0) + 1);
  }
  const maxCnt = Math.max(...cnt.values());

  // 第二步：把出现次数相同的元素，放到同一个桶中
  const buckets = Array.from({ length: maxCnt + 1 }, () => []);
  for (const [x, c] of cnt.entries()) {
    buckets[c].push(x);
  }

  // 第三步：倒序遍历 buckets，把出现次数前 k 大的元素加入答案
  const ans = [];
  // 注意题目保证答案唯一，一定会出现某次 push 后 ans.length 恰好等于 k 的情况
  for (let i = maxCnt; i >= 0 && ans.length < k; i--) {
    ans.push(...buckets[i]);
  }
  return ans;
};
