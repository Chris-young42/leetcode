/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
    // 实现小顶堆类
    class MinHeap {
        constructor() {
            this.heap = [];
        }

        // 插入元素并上浮调整
        push(val) {
            this.heap.push(val);
            this.bubbleUp(this.heap.length - 1);
        }

        // 弹出堆顶并下沉调整
        pop() {
            const top = this.heap[0];
            const last = this.heap.pop();
            if (this.heap.length > 0) {
                this.heap[0] = last;
                this.bubbleDown(0);
            }
            return top;
        }

        // 获取堆顶元素
        peek() {
            return this.heap[0];
        }

        // 获取堆大小
        size() {
            return this.heap.length;
        }

        // 上浮：将指定索引元素向上调整至合适位置
        bubbleUp(index) {
            while (index > 0) {
                const parentIndex = (index - 1) >> 1; // 等价于 Math.floor((index-1)/2)
                if (this.heap[parentIndex] <= this.heap[index]) break; // 小顶堆：父 <= 子则停止
                [this.heap[parentIndex], this.heap[index]] = [this.heap[index], this.heap[parentIndex]];
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
                [this.heap[index], this.heap[smallest]] = [this.heap[smallest], this.heap[index]];
                index = smallest;
            }
        }
    }

    const heap = new MinHeap();
    for (const num of nums) {
        if (heap.size() < k) {
            heap.push(num); // 堆大小不足K时，直接入堆
        } else if (num > heap.peek()) {
            // 堆大小为K时，若当前元素大于堆顶（即比当前第K大元素更大），则替换堆顶
            heap.pop();
            heap.push(num);
        }
    }
    return heap.peek(); // 堆顶即为第K个最大元素
};

