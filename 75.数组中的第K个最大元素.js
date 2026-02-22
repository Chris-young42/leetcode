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

// 在子数组 [left, right] 中随机选择一个基准元素 pivot
// 根据 pivot 重新排列子数组 [left, right]
// 重新排列后，<= pivot 的元素都在 pivot 的左侧，>= pivot 的元素都在 pivot 的右侧
// 返回 pivot 在重新排列后的 nums 中的下标
// 特别地，如果子数组的所有元素都等于 pivot，我们会返回子数组的中心下标，避免退化
function partition(nums, left, right) {
    // 1. 在子数组 [left, right] 中随机选择一个基准元素 pivot
    const idx = left + Math.floor(Math.random() * (right - left + 1));
    const pivot = nums[idx];
    // 把 pivot 与子数组第一个元素交换，避免 pivot 干扰后续划分，从而简化实现逻辑
    [nums[idx], nums[left]] = [nums[left], nums[idx]];

    // 2. 相向双指针遍历子数组 [left + 1, right]
    // 循环不变量：在循环过程中，子数组的数据分布始终如下图
    // [ pivot | <=pivot | 尚未遍历 | >=pivot ]
    //   ^                 ^     ^         ^
    //   left              i     j         right

    let i = left + 1, j = right;
    while (true) {
        while (i <= j && nums[i] < pivot) {
            i++;
        }
        // 此时 nums[i] >= pivot

        while (i <= j && nums[j] > pivot) {
            j--;
        }
        // 此时 nums[j] <= pivot

        if (i >= j) {
            break;
        }

        // 维持循环不变量
        [nums[i], nums[j]] = [nums[j], nums[i]];
        i++;
        j--;
    }

    // 循环结束后
    // [ pivot | <=pivot | >=pivot ]
    //   ^             ^   ^     ^
    //   left          j   i     right

    // 3. 把 pivot 与 nums[j] 交换，完成划分（partition）
    // 为什么与 j 交换？
    // 如果与 i 交换，可能会出现 i = right + 1 的情况，已经下标越界了，无法交换
    // 另一个原因是如果 nums[i] > pivot，交换会导致一个大于 pivot 的数出现在子数组最左边，不是有效划分
    // 与 j 交换，即使 j = left，交换也不会出错
    [nums[left], nums[j]] = [nums[j], nums[left]];

    // 返回 pivot 的下标
    return j;
}

var findKthLargest = function(nums, k) {
    const n = nums.length;
    const targetIndex = n - k; // 第 k 大元素在升序数组中的下标是 n - k
    let left = 0, right = n - 1; // 闭区间
    while (true) {
        const i = partition(nums, left, right);
        if (i === targetIndex) {
            // 找到第 k 大元素
            return nums[i];
        }
        if (i > targetIndex) {
            // 第 k 大元素在 [left, i - 1] 中
            right = i - 1;
        } else {
            // 第 k 大元素在 [i + 1, right] 中
            left = i + 1;
        }
    }
};

