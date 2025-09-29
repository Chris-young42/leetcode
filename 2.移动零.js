/**
 * 将数组中的所有 0 移动到数组末尾，同时保持其他非零元素的相对顺序不变
 * 这个操作是在原数组中进行的（原地修改），不创建新数组
 * 
 * @param {number[]} nums - 输入的数字数组
 * @return {number[]} 返回修改后的数组（其实直接修改了原数组）
 */
function moveZeroes(nums) {
  // 定义一个慢指针 slow，用于指向下一个非零元素应该放置的位置
  // 初始时，slow 在数组开头位置 0
  let slow = 0;

  // 定义快指针 fast，用于遍历数组的每一个元素
  // fast 从头到尾扫描数组
  for (let fast = 0; fast < nums.length; fast++) {
    
    // 如果当前 fast 指向的元素不是 0
    if (nums[fast] !== 0) {
      /**
       * 如果 nums[fast] 不是 0，那么：
       * 1. 将 nums[fast] 和 nums[slow] 交换位置
       *    - 这一步会把非零元素移到前面
       *    - 同时把 slow 原来位置的值（可能是 0）移到后面
       * 2. 然后 slow 向前移动一格，指向下一个空位
       */
      [nums[slow], nums[fast]] = [nums[fast], nums[slow]];

      // slow++：移动慢指针到下一个位置
      slow++;
    }
    // 如果 nums[fast] === 0，则跳过，不做任何操作
    // 这样，slow 不动，相当于留出一个空位，等待后续非零元素来填充
  }

  // 返回处理后的数组（其实 nums 已经被原地修改了）
  return nums;
}
