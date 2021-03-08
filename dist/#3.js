"use strict";
function lengthOfLongestSubstring(s) {
    var str = '';
    var ans = 0;
    for (var i = 0; i < s.length; i++) {
        var index = str.indexOf(s[i]);
        console.log('i', i, ' index: ', index);
        if (index !== -1) {
            ans = str.length > ans ? str.length : ans;
            str = str.substr(index + 1);
            console.log(str);
        }
        str += s[i];
    }
    console.log(str);
    return ans < str.length ? str.length : ans;
}
;
console.log(lengthOfLongestSubstring('pwwkew'));
