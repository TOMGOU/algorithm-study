var longestCommonSubsequence = function(text1, text2) {
  const map1 = new Map()
  const map2 = new Map()
  let res = []
  let index = []
  text1.split('').forEach((item, index) => {
      map1.get(item) ? map1.set(item, [...map1.get(item), index]) : map1.set(item, [index])
  })
  text2.split('').forEach((item, index) => {
      map2.get(item) ? map2.set(item, [...map2.get(item), index]) : map2.set(item, [index])
  })
  for (let key of map1.keys()) {
      const l1 = map1.get(key), l2 = map2.get(key)
      if (map2.get(key) !== undefined) {
          for (let i = 0;i < l1.length; i++) {
              for (let j = 0;j < l2.length; j++) {
                  res.push([l1[i], l2[j]])
              }
          }
          
      }
  }
  if (res.length === 0) return 0
  console.log({ res })
  const recur = (i, j, k) => {
    if (i === text1.length - 1 || j === text2.length - 1) {
      index.push(k)
      return
    }
    // console.log({ i, j, k })
    if (res.some(item => item[0] === i && item[1] === j)) {
      // console.log({ i, j, k })
      recur(i + 1, j + 1, k + 1)
      // k = k + 1
    } else {
      if (i < text1.length - 1) {
        recur(i + 1, j, k)
      } 
      if (j < text2.length - 1) {
        recur(i, j + 1, k)
      }
    } 
  }
  recur(0, 0, 0)
  console.log({ index }, Math.max(...index) + 1)
  return Math.max(index) + 1
};


var longestCommonSubsequence1 = function(text1, text2) {
  const len1 = text1.length
  const len2 = text2.length
  const dp = new Array(len1 + 1).fill([]).map(() => new Array(len2 + 1).fill(0))
  for (let i = 1; i <= len1; i++) {
      for (let j = 1; j <= len2; j++) {
          const t1 = text1.slice(0, i)
          const t2 = text2.slice(0, j)
          if (t1[t1.length - 1] === t2[t2.length - 1]) {
              dp[i][j] = dp[i-1][j-1] + 1
          } else {
              dp[i][j] = Math.max(dp[i-1][j], dp[i][j-1])
          }
      }
  }
  console.log(dp)
  return dp[len1][len2]
};

longestCommonSubsequence1("abcde", "ace")
