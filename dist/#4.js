"use strict";
function findMedianSortedArrays(nums1, nums2) {
    var len1 = nums1.length;
    var len2 = nums2.length;
    var target = (len1 + len2) / 2;
    var i1 = 0, i2 = 0, prev = -1, current = -1;
    if (len1 === 0) {
        console.log((nums2[Math.ceil(len2 / 2)] + nums2[Math.floor(len2 / 2)]) / 2);
        console.log(nums2[Math.floor(len2 / 2)]);
        // return len2 === 1 ? nums2[0] : len2 % 2 ? nums2[len2 / 2] : (nums2[Math.ceil(len2 / 2)] + nums2[Math.floor(len2 / 2)]) / 2
        if (len2 === 1) {
            return nums2[0];
        }
        else {
            if (len2 % 2) {
                console.log('else if');
                return nums2[len2 / 2];
            }
        }
    }
    if (len2 === 0) {
        return len1 === 1 ? nums1[0] : len1 % 2 ? nums1[len1 / 2] : (nums1[Math.ceil(len1 / 2)] + nums1[Math.floor(len1 / 2)]) / 2;
    }
    while (i1 + i2 <= target) {
        prev = current;
        if (i2 >= len2 || (i1 < len1 && nums1[i1] <= nums2[i2])) {
            current = nums1[i1++];
        }
        else {
            current = nums2[i2++];
        }
    }
    return (target / .5) % 2
        ? current
        : (prev + current) / 2;
}
;
// 132ms 91.79%
// function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
//   const len1 = nums1.length
//   const len2 = nums2.length
//   const target = (len1 + len2) / 2
//   let i1 = 0, i2 = 0, prev = -1, current = -1
//   while (i1 + i2 <= target) {
//       prev = current
//       if (i2 >= len2 || (i1 < len1 && nums1[i1] <= nums2[i2])) {
//           current = nums1[i1++]
//       } else {
//           current = nums2[i2++]
//       }
//   }
//   return (target / .5) % 2
//       ? current
//       : (prev + current) / 2
// };
console.log(findMedianSortedArrays([], [0, 0, 0]));
// 0 0 1 1 2 3 4 4 5
