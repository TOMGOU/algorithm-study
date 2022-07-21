var findMaximizedCapital = function(k, w, profits, capital) {
  const newArr = []
  for (let i = 0;i < profits.length;i++) {
    newArr.push([ profits[i], capital[i] ] )
  }
  newArr.sort((a, b) => b[0] - a[0])
  console.log({newArr})
  const maxPay = Math.max(...capital)
  if (w >= maxPay) {
    for(let i = 0; i < k && i < newArr.length; i++) {
      w += newArr[i][0]
    }
    console.log({w})
    return w
  }
  while(k) {
    let findThisTime = false;
    for (let i = 0;i < newArr.length;i++) {
      if (w >= newArr[i][1]) {
        console.log(w, k, newArr)
        findThisTime = true;
        w += newArr[i][0]
        k--
        newArr.splice(i, 1)
        break
      }
    }
    if (!findThisTime) {
      break;
    }
  }
  console.log({w})
  return w
};

// var findMaximizedCapital = function(k, w, profits, capital) {
//   const sortProfits = profits.map((v, i) => ({ make: v, pay: capital[i] })).sort((a, b) => b.make - a.make) // 按收益由小到大排序
//   const maxPay = Math.max(...capital) // 找到所需资本的最大值
//   let makeMoney = w
//   while(k) {
//       if(makeMoney >= maxPay) { // 防止超时的优化
//           for(let i = 0; i < k; i++) {
//               makeMoney += sortProfits[i]?.make || 0
//           }
//           return makeMoney
//       } else {
//           const index = sortProfits.findIndex(v => v.pay <= makeMoney)
//           if(index === -1) return makeMoney
//           const cur = sortProfits.splice(index, 1)[0]
//           makeMoney += cur.make
//           k--
//       }
//   }
//   return makeMoney
// };

var findMaximizedCapital = function(k, w, profits, capital) {
  let newProfits = profits.map((p, i) => [p, i]).sort((a, b) => b[0] - a[0])
  const done = []
  const maxPay = Math.max(...capital)
  if (w >= maxPay) {
    for(let i = 0; i < k && i < newArr.length; i++) {
      w += newProfits[i][0]
    }
    return w
  }
  for (let i = 0; i < k; i++) {
    let findThisTime = false;
    for (let j = 0; j < newProfits.length; j++) {
      const index = newProfits[j][1]
      if (!done.includes(index) && capital[index] <= w) {
        console.log('index', index, profits[index])
        findThisTime = true;
        w += profits[index]
        done.push(index)
        newProfits.splice(j, 1)
        break
      }
    }
    if (!findThisTime) {
      break;
    }
  }
  return w
}

findMaximizedCapital(100, 2, [1,2,3,10], [0,1,1,8])
