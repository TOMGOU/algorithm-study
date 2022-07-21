var trap = function(height) {
  let ans = 0;
  const stack = [];
  for (let i = 0; i < height.length; i++) {
      while (stack.length && height[i] > height[stack[stack.length - 1]]) {
          const top = stack.pop()
          if (stack.length) {
              const left = stack[stack.length - 1]
              const currWidth = i - left - 1
              const currHeight = Math.min(height[i] - height[top], height[left] - height[top])
              ans += currWidth * currHeight
          }
      }
      stack.push(i)
  }
  return ans;
};

const res = trap([0,1,0,2,1,0,1,3,2,1,2,1])

console.log({ res })
