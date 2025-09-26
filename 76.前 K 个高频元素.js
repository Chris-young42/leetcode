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
    getSize(){
        return this.heap.length
    }
    getTop(){
        return this.heap[0]
    }
    insert(freq,num){
        this.heap.push([freq,num])
    }

    extractMin(){
        const min =this.heap[0]
        const last=this.heap.pop()
        if(this.heap.length>0){
            this.heap[0]=last
            this.shiftDown(0)
        }
    }
  }
};
