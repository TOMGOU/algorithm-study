// 斐波那契数列

// 从大到小
var fib = function(n) {
  const recur = (n) => {
      if (n === 0) {
          return 0
      } else if (n === 1) {
          return 1
      } else {
          return recur(n-1) + recur(n-2)
      }
  }
  return recur(n)
};


// 从小到大
var fib1 = function(n) {
  if (n === 1) return 1
  let res = 0
  const recur = (n1, n2, n, index) => {
      if (index > n) {
          return
      } else {
          res = n1 + n2
          recur(n2, res, n, index + 1)
      }
  }
  recur(0, 1, n, 2)
  return res
};