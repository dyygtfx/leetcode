/**
 * 

给出两个 非空 的链表用来表示两个非负的整数。其中，它们各自的位数是按照 逆序 的方式存储的，并且它们的每个节点只能存储 一位 数字。

如果，我们将这两个数相加起来，则会返回一个新的链表来表示它们的和。

您可以假设除了数字 0 之外，这两个数都不会以 0 开头。

示例：

输入：(2 -> 4 -> 3) + (5 -> 6 -> 4)
输出：7 -> 0 -> 8
原因：342 + 465 = 807
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  let l1vals = []
  let l2vals = []
  let l3val = 0
  let l3 = new ListNode(0)
  let node = l3
  while(l1){
      l1vals.push(l1.val);
      l1 = l1.next;
  }

  while(l2 ){
      l2vals.push(l2.val);
      l2 = l2.next;
  }

  l3val = BigInt(l1vals.reverse().join('')) + BigInt(l2vals.reverse().join(''))
  String(l3val).split('').reverse().forEach((i, idx) => {
      if (idx == 0) {
        l3 =  new ListNode(Number(i));  
          node = l3
      } else {
          node.next = new ListNode(Number(i));
          node = node.next
      }
  })
  return l3
};