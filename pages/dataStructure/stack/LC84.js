var largestRectangleArea = function(heights) {
  if (heights.length === 1) return heights[0]
  // heights.push(0)
  heights = [0, ...heights, 0]
  const stack = [0]
  let area = 0
  
  for (let i = 1; i < heights.length; i++) {
      while (heights[i] < heights[stack[stack.length - 1]]) {
        const top = stack.pop()
        const currArea = heights[top] * (i - stack[stack.length - 1] - 1)
        area = currArea > area ? currArea : area
      }
      stack.push(i)
  }
  console.log({ area })
  return area
};

largestRectangleArea([2,1,2])