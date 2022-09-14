// 超时了！！！
var largestRectangleArea = function(heights) {
  if (heights.length === 1) return heights[0]
  let area = 0
  
  for (let i = 0; i < heights.length; i++) {
      let L = i, R = i
      while (heights[i] <= heights[L] && L > 0) {
          L--
      }
      while (heights[i] <= heights[R] && R < heights.length - 1) {
          R++
      }
      area = Math.max(heights[i] * (R - L + 1), area)
  }
  console.log({ area })
  return area
};

largestRectangleArea([2,1,5,6,2,3])
