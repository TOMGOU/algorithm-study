var fourSum = function(nums, target) {
  const sortNums = nums.sort((a, b) => a - b)
  const len = sortNums.length
  const res = []
  for (let i = 0;i < len - 1;i++) {
      for (let j = i + 1; j < len - 1;j++) {
          for (let k = len - 1;k > j;k--) {
              for (let m = j + 1;m < k;m++) {
                console.log([nums[i], nums[j], nums[k], nums[m]])
                  if (nums[i] + nums[j] + nums[k] + nums[m] === target) {
                      res.push([nums[i], nums[j], nums[k], nums[m]])
                  }
              }
          }
      }
  }
  return res
  // return [...new Set(res)]
};

fourSum([1,0,-1,0,-2,2], 0)
