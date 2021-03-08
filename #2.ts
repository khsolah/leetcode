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

class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val
    this.next = next === undefined ? null : next
  }
}

function addTwoNumbers(
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null {
  let ans: ListNode = new ListNode()
  let currentNode: ListNode = ans
  let sum = 0, carry = 0

  while (l1 !== null || l2 !== null) {
    sum = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + carry

    if (sum > 9) {
      sum -= 10
      carry = 1
    } else {
      carry = 0
    }

    currentNode.next = new ListNode(sum)
    currentNode = currentNode.next
    l1 = l1 ? l1.next : null
    l2 = l2 ? l2.next : null
  }

  if (carry > 0) {
    currentNode.next = new ListNode(carry)
  }

  return ans.next
}
const l1_arr = [9,9,9,9,9,9,9]
const l2_arr = [9,9,9,9]

const l1 = new ListNode()
const l2 = new ListNode()
let currentNode: ListNode = l1

l1_arr.forEach(element => {
  currentNode.next = new ListNode(element)
  currentNode = currentNode.next
})

currentNode = l2
l2_arr.forEach(element => {
  currentNode.next = new ListNode(element)
  currentNode = currentNode.next
})

let result = addTwoNumbers(l1.next, l2.next)
let ans = ''
while (result) {
  ans += `${result.val} `
  result = result.next
}

console.log(ans)