// var twoSum = function(nums, target) {
//   const hashMap = new Map()
//   const res = []
//   for(let i = 0; i < nums.length; i++) {
//       hashMap.set(nums[i], i)
//       
//       for (let key of hashMap.keys()) {
//         console.log(i, key, nums[i])
//           if ((target - nums[i]) === key) {
//               res.push([i, hashMap.get(key)])
//           }
//       }
//   }
//   console.log({res})
//   return res
// };

var twoSum = function(nums, target) {
  const hashMap = new Map()
  for(let i = 0; i < nums.length; i++) {
    if (hashMap.get(target - nums[i]) !== undefined) {
      console.log([hashMap.get(target - nums[i]), i])
      return [i, hashMap.get(target - nums[i])]
    }
    hashMap.set(nums[i], i)
  }
};

twoSum([2, 7, 11, 15, 6, 3, 4, 5, 1, 8], 9)
