var generateParenthesis = function(n) {
  const res = []
  // let L = 0, R = 0, s = ''
  const recursion = (L, R, n, s) => {
    if (L === n && R === n) {
      res.push(s)
    }
    if (L < n) {
      recursion(L + 1, R, n, s + '(' )
    }
    if (R < L) {
      recursion(L, R + 1, n, s + ')')
    }
  }
  
  recursion(0, 0, n, '')
  console.log({ res })
  return res
};

var generateParenthesis1 = function(n) {
  const res = []
  const recursion = (index, n, s) => {
    if (index === 2 * n ) {
      res.push(s)
      return
    }
    recursion(index + 1, n, s + '(' )
    recursion(index + 1, n, s + ')')
  }
  
  recursion(0, n, '')
  console.log({ res })
  return res
};

generateParenthesis1(1)
