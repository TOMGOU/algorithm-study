var subsets = function(nums) {
  let res = [[]]
  for (let i = 0; i < nums.length; i++) {
      const arr = []
      for (let j = 0; j < res.length; j++) {
        console.log(res[j])
        arr.push([...res[j], nums[i]])
      }
      // res = [...res, ...arr]
      res = res.concat(arr)
  }
  console.log({res})
  return res
};

// subsets([1, 2, 3])

var subsets1 = function(nums) {
  let res = []
  const dfs = (index, arr) => {
      if (index === nums.length) {
        res.push([...arr])
        // console.log(index, arr)
        return
      }
      arr.push(nums[index])
      dfs(index + 1, arr)
      arr.pop()
      dfs(index + 1, arr)
  }
  dfs(0, [])
  console.log({ res })
  return res
};

// subsets1([1, 2, 3])

var subsets2 = function(nums) {
  const res = [], arr = []
  const dfs = (index) => {
      if (index === nums.length) {
        res.push([...arr])
        // console.log(index, arr)
        return
      }
      arr.push(nums[index])
      dfs(index + 1)
      arr.pop()
      dfs(index + 1)
  }
  debugger
  dfs(0)
  console.log({ res })
  return res
};

// subsets2([1, 2, 3])

var subsets3 = function(nums) {
  const t = [];
  const ans = [];
  const dfs = (deep) => {
    if (deep === nums.length) {
      // console.log(t);
      ans.push([...t]);
      return;
    }
    t.push(nums[deep]);
    dfs(deep + 1);
    t.pop();
    dfs(deep + 1);
  }
  dfs(0);
  console.log({ ans })
  return ans;
};

subsets3([1, 2, 3])