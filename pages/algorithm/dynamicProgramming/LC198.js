var rob = function(nums) {
  const len = nums.length
  const res = new Array(len).fill([]).map(() => [])
  res[0][0] = 0
  res[0][1] = nums[0]
  console.log(res)
  for (let i = 1;i < len;i++) {
    // 不打劫当前元素
    res[i][0] = Math.max(...res[i-1])
    // 打劫当前元素
    res[i][1] = res[i-1][0] + nums[i]
  }
  console.log(res)
  return Math.max(...res[len - 1])
};

rob([1, 2, 3, 1])
