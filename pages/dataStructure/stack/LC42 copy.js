var trap = function(height) {
  const stack = [];
  let res = 0;
  for (let i = 0; i < height.length; i++) {
    while(stack.length && height[i] > height[stack[stack.length - 1]]) {
        // 弹出栈顶元素
        const top = stack.pop();
        // 如果栈不为空，则计算面积
        if (stack.length) {
            res += (i - stack[stack.length - 1] - 1) * Math.min(height[i] - height[top], height[stack[stack.length - 1]] - height[top]);
        }
    }
    // 压入栈顶元素
    stack.push(i)
  }
  return res;
};

console.log(trap([0,1,0,2,1,0,1,3,2,1,2,1]));
