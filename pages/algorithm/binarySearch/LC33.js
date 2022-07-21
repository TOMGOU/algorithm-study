var search = function(nums, target) {
  let L = 0, R = nums.length - 1
  while (L <= R) {
    console.log(L, R)
      let M = Math.floor((L + R) / 2)
      if (nums[M] === target) {
          return M
      } else if (nums[L] < nums[M]) {
          // 有序在左边
          if (target <= nums[M] && target >= nums[L]) {
              R = M - 1
          } else {
              L = M + 1
          }
      } else {
          // 有序在左边
          if (target >= nums[M] && target <= nums[R]) {
              L = M + 1
          } else {
              R = M - 1
          }
      }
  }
  return nums[L + 1] === target ? L + 1 : -1
};

console.log(search([3,1], 1))
