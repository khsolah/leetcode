"use strict";
// 96ms 98.84%
function longestPalindrome(s) {
    var len = s.length;
    if (len === 1)
        return s;
    var ans = '', ansLen = 0, left = 0, right = 0;
    for (var i = 0; i < len; i++) {
        // odd
        left = i;
        right = i;
        while (left > -1 && right < len && s[left] === s[right]) {
            if (ansLen < right - left + 1) {
                ans = s.substring(left, right + 1);
                ansLen = ans.length;
            }
            left--;
            right++;
        }
        // even
        left = i;
        right = i + 1;
        while (left > -1 && right < len && s[left] === s[right]) {
            if (ansLen < right - left + 1) {
                ans = s.substring(left, right + 1);
                ansLen = ans.length;
            }
            left--;
            right++;
        }
    }
    return ans;
}
console.log(longestPalindrome('aaaaa'));
console.log(longestPalindrome('xaabacxcabaaxcabaax'));
