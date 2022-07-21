var myPow = function(x, n) {
  const recur = (x, m) => {
      if (m === 0) {
          return 1
      } else if (m === 1) {
          return x
      } else if (m % 2 === 1) {
          return recur(x * x, (m - 1) / 2) * x
      } else {
          return recur(x * x, m / 2)
      }
  }
  return n < 0 ? 1 / recur(x, -n) : recur(x, n)
};

console.log(myPow(2, 20))
