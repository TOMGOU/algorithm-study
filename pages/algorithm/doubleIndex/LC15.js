// 三数之和最优解法：先排序，再双指针。

var threeSum = function(nums) {
  const arr = nums.sort((a, b) => a - b)
  let sun = 0
  const len = arr.length, res = []
  for (let i = 0; i < len; i++) {
      if (arr[i] > 0) break
      // 去重
      if (i > 0 && arr[i] === arr[i - 1]) continue
      let L = i + 1, R = len - 1
      while (L < R) {
          sum = arr[i] + arr[L] + arr[R]
          if (sum < 0) {
              L++
          } else if (sum > 0) {
              R--
          } else {
              res.push([arr[i], arr[L], arr[R]])
              // 去重
              while (L < R && arr[L] === arr[L+1]) L++
              while (L < R && arr[R] === arr[R-1]) R--
              L++;
              R--;
          }
      }
  }
  console.log({res})
  return res
};

threeSum([-13,5,13,12,-2,-11,-1,12,-3,0,-3,-7,-7,-5,-3,-15,-2,14,14,13,6,-11,-11,5,-15,-14,5,-5,-2,0,3,-8,-10,-7,11,-5,-10,-5,-7,-6,2,5,3,2,7,7,3,-10,-2,2,-12,-11,-1,14,10,-9,-15,-8,-7,-9,7,3,-2,5,11,-13,-15,8,-3,-7,-12,7,5,-2,-6,-3,-10,4,2,-5,14,-3,-1,-10,-3,-14,-4,-3,-7,-4,3,8,14,9,-2,10,11,-10,-4,-15,-9,-1,-1,3,4,1,8,1])
