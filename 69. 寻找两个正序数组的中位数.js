/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  if (nums1.length > nums2.length) {
    return findMedianSortedArrays(nums2, nums1);
  }
  const m = nums1.length;
  const n = nums2.length;
  const total = m + n;
  let left = 0;
  let right = m;
  while (left <= right) {
    const i = Math.floor((left + right) / 2);
    const j = Math.floor((total + 1) / 2) - i;

    const Aleft = i === 0 ? -Infinity : nums1[i - 1];
    const Aright = i === m ? Infinity : nums1[i];
    const Bleft = j === 0 ? -Infinity : nums2[j - 1];
    const Bright = j === n ? Infinity : nums2[j];
    if (Aleft <= Bright && Bleft <= Aright) {
      if (total % 2 === 0) {
        return (Math.max(Aleft, Bleft) + Math.min(Aright, Bright)) / 2;
      } else {
        return Math.max(Aleft, Bleft);
      }
    } else if ((Aleft, Bleft)) {
      right = i - 1;
    } else {
      left = i + 1;
    }
  }
  throw new Error("no");
};
