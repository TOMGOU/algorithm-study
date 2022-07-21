var maxSlidingWindow = function(nums, k) {
  const res = [];
  const indexQueue = [];
  // 处理前 k 个数据
  for (let i = 0; i < k; i++) {
      while (indexQueue.length && nums[i] > nums[indexQueue[indexQueue.length - 1]]) {
        // 踢出队列最后一个不符合单调递减队列的元素
        indexQueue.pop()
      }
      // 入队列
      indexQueue.push(i)
  }
  // 执行完 for 循环后，indexQueue[0] 就是最大值的索引
  res.push(nums[indexQueue[0]])
  // 处理后面的数据
  for (let j = k; j < nums.length; j++) {
    while (nums[j] > nums[indexQueue[indexQueue.length - 1]]) {
        // 踢出队列最后一个不符合单调递减队列的元素
        indexQueue.pop()
    }
    // 入队列
    indexQueue.push(j)
    // 踢出不在窗口的元素
    if (indexQueue[0] <= j - k) {
        indexQueue.shift()
    }
    // 每移动一次窗口，添加一个结果
    res.push(nums[indexQueue[0]])
  }
  return res
};

console.log(maxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3))
