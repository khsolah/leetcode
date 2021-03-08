"use strict";
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */
var ListNode = /** @class */ (function () {
    function ListNode(val, next) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }
    return ListNode;
}());
function addTwoNumbers(l1, l2) {
    var ans = new ListNode();
    var currentNode = ans;
    var sum = 0, carry = 0;
    while (l1 !== null || l2 !== null) {
        sum = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + carry;
        if (sum > 9) {
            sum -= 10;
            carry = 1;
        }
        else {
            carry = 0;
        }
        currentNode.next = new ListNode(sum);
        currentNode = currentNode.next;
        l1 = l1 ? l1.next : null;
        l2 = l2 ? l2.next : null;
    }
    if (carry > 0) {
        currentNode.next = new ListNode(carry);
    }
    return ans.next;
}
var l1_arr = [9, 9, 9, 9, 9, 9, 9];
var l2_arr = [9, 9, 9, 9];
var l1 = new ListNode();
var l2 = new ListNode();
var currentNode = l1;
l1_arr.forEach(function (element) {
    currentNode.next = new ListNode(element);
    currentNode = currentNode.next;
});
currentNode = l2;
l2_arr.forEach(function (element) {
    currentNode.next = new ListNode(element);
    currentNode = currentNode.next;
});
var result = addTwoNumbers(l1.next, l2.next);
var ans = '';
while (result) {
    ans += result.val + " ";
    result = result.next;
}
console.log(ans);
