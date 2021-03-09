"use strict";
// 132ms 91.79%
function findMedianSortedArrays(nums1, nums2) {
    var len1 = nums1.length;
    var len2 = nums2.length;
    var target = (len1 + len2) / 2;
    var i1 = 0, i2 = 0, prev = -1, current = -1;
    while (i1 + i2 <= target) {
        prev = current;
        if (i2 >= len2 || (i1 < len1 && nums1[i1] <= nums2[i2])) {
            current = nums1[i1++];
        }
        else {
            current = nums2[i2++];
        }
    }
    return (target / 0.5) % 2 ? current : (prev + current) / 2;
}
console.log(findMedianSortedArrays([], [0, 0, 0]));
