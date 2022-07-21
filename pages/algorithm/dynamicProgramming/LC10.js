var isMatch = function(s, p) {
  const sl = s.length
  const pl = p.length
  const dp = new Array(sl + 1).fill([]).map(() => new Array(pl + 1).fill(false))
  for (let i = 0;i <= sl;i++) {
    for (let j = 0;j <= pl;j++) {
        if (i === 0 || j === 0) {
            dp[i][j] = false
        }
    }
  }
  dp[0][0] = true
  for (let i = 1;i <= sl;i++) {
      for (let j = 1;j <= pl;j++) {
          if (s[i - 1] === p[j - 1]) {
              dp[i][j] = dp[i - 1][j - 1]
          } else if (p[j - 1] === '*') {
              if (j === i) {
                  dp[i][j] = s[i - 2] === s[i - 1] ? dp[i - 1][j - 1] : false
              } else if (j > i) {
                  dp[i][j] = dp[i][j - 1]
              } else {
                  dp[i][j] = s[i - 2] === s[i - 1] ? dp[i - 1][j] : false
              }
          } else if (p[j - 1] === '.') {
              dp[i][j] = dp[i - 1][j - 1]
          } else {
             dp[i][j] = false 
          }
      }
  }
  console.log({dp})
  return dp[sl][pl]
};

isMatch("ab", ".*") 
