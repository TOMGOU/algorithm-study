var coinChange = function(coins, amount) {
  const dp = [0]
  for (let i = 1;i <= amount;i++) {
      const res = []
      coins.forEach(item => {
        if (i - item >= 0) res.push(dp[i - item])
      })
      console.log({res})
      // dp[i] = res.length ? -1 : Math.min(...res) + 1
      dp[i] = Math.min(...res) + 1
  }
  console.log({dp})
  return dp[amount] === Infinity ? -1 : dp[amount]
};

coinChange([1, 2, 5], 11)
