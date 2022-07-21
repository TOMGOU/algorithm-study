class ListNode {
  constructor (val, next) {
    this.val = val === undefined ? 0 : val
    this.next = next === undefined ? null : next
  }
}

const recursion = (head) => {
  if (head) {
    console.log({ val: head.val, next: head.next })
    recursion(head.next)
  }
}

const re = (res, data) => {
  if (res.next) {
    re(res.next, data)
  } else {
    res.next = data
  }
} 

const recur = (l1, l2) => {
  if (l1 || l2) {
    const n1 = l1 ? l1.val : 0;
    const n2 = l2 ? l2.val : 0;
    const sum = n1 + n2 + more;
    res ? re(res, new ListNode(sum % 10)) : res = new ListNode(sum % 10)
    more = Math.floor(sum / 10)
    if (l1 && l2) {
      recur(l1.next, l2.next)
    } else if (!l1 && l2) {
      recur(null, l2.next)
    } else if (l1 && !l2) {
      recur(l1.next, null)
    }
  }
}


var more = 0
var res = null
var addTwoNumbers = function(l1, l2) {
  recur(l1, l2)
  if (more) {
    re(res, new ListNode(more))
    more = 0
  }
  recursion(res)
  return res
};


const l1 = new ListNode(9)
const l2 = new ListNode(9)
l1.next = l2

const t1 = new ListNode(9)
const t2 = new ListNode(9)
const t3 = new ListNode(9)
t1.next = t2
t2.next = t3
addTwoNumbers(l1, t1)
