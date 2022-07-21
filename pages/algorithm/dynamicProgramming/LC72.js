var minDistance = function(word1, word2) {
  const len1 = word1.length
  const len2 = word2.length
  const dp = new Array(len1 + 1).fill([]).map(() => new Array(len2 + 1).fill(0))
      
  for (let i = 0;i <= len1;i++) {
      for (let j = 0;j <= len2;j++) {
          if (i === 0) {
              dp[i][j] = j
          } else if (j === 0) {
              dp[i][j] = i
          } else if (word1.substr(i - 1, 1) === word2.substr(j - 1, 1)) {
              dp[i][j] = dp[i - 1][j - 1]
          } else {
            dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]) + 1
          }
      }
  }
  console.log({dp})
  return dp[len1][len2]
};

minDistance("horse", "ros")
