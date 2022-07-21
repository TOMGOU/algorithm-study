const recur = (head) => {
  if (head.next) {
      i++
      recur(head.next)
  } else { 
      i++
  }
}

const recursion = (head, n) => {
  if (n !== 0) {
      n--
      console.log({n})
      recursion(head.next, n)
  } else {
      head.next = head.next.next
  }
}
var i = 0

var removeNthFromEnd = function(head, n) {
  recur(head)
  recursion(head, i - n)
  return head
};

class ListNode {
  constructor (val, next) {
    this.val = val === undefined ? 0 : val
    this.next = next === undefined ? null : next
  }
}

const t1 = new ListNode(1)
const t2 = new ListNode(2)
const t3 = new ListNode(3)
const t4 = new ListNode(4)
const t5 = new ListNode(5)
t1.next = t2
t2.next = t3
t3.next = t4
t4.next = t5

removeNthFromEnd(t1, 2)