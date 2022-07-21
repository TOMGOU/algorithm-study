// var findMedianSortedArrays = function(nums1, nums2) {
//   let newArr = []
//   while (nums1.length && nums2.length) {
//       if (nums1[0] < nums2[0]) {
//           newArr.push(nums1.shift())
//       } else {
//           newArr.push(nums2.shift())  
//       }
//   }
//   if (nums1.length) newArr = [...newArr, ...nums1]
//   if (nums2.length) newArr = [...newArr, ...nums2]
//   const len = newArr.length
//   console.log({len, newArr}, len >> 1)
//   return len & 1 ? newArr[len >> 1] : (newArr[len >> 1] + newArr[(len >> 1) - 1]) / 2
// };

// var findMedianSortedArrays = function(nums1, nums2) {
//   const findMedian = arr => {
//       const len = arr.length
//       return len & 1 ? arr[len >> 1]: (arr[len >> 1] + arr[(len >> 1) - 1]) / 2
//   }
//   console.log(findMedian(nums1), findMedian(nums2))
//   return (findMedian(nums1) + findMedian(nums2)) / 2
// };

var findMedianSortedArrays = function(nums1, nums2) {
  const len = nums1.length + nums2.length
  console.log({len}, len & 1, (len >> 1) + 1)
  let k = len & 1 === 1 ? (len >> 1) + 1 : len >> 1
  console.log({k})
  while (k > 1) {
    console.log({nums1, nums2})
      let half = (k >> 1) - 1, len1 = nums1.length, len2 = nums2.length
      if (half > len1) {
        nums2.splice(0, half - len1)
      }
      if (half > len2) {
        nums1.splice(0, half - len2)
      }
      if (nums1[(k >> 1) - 1] < nums2[(k >> 1) - 1]) {
          nums1.splice(0, (k >> 1) + 1)
      } else {
          nums2.splice(0, (k >> 1) + 1)
      }
      k = Math.floor(k - k / 2)
      console.log({k})
  }
  console.log({nums1, nums2})
  return len & 1 === 1 ? (nums1[0] < nums2[0] ? nums1[0] : nums2[0]) : (nums2[0] + nums1[0]) / 2
};

console.log(findMedianSortedArrays([1, 2], [3, 4]))
