var lemonadeChange = function(bills) { 
  const haveMap = new Map()
  haveMap.set(5, 0)
  haveMap.set(10, 0)
  return bills.every((item, index) => {
      if (item === 5) {
          haveMap.set(5, haveMap.get(5) + 1)
          return true
      } else if (item === 10) {
          haveMap.set(10, haveMap.get(10) + 1)
          haveMap.set(5, haveMap.get(5) - 1)
          return haveMap.get(5) >= 0
      } else {
          if (haveMap.get(10) >= 1) {
              haveMap.set(10, haveMap.get(10) - 1)
              haveMap.set(5, haveMap.get(5) - 1)
              return haveMap.get(5) >= 0
          } else {
              haveMap.set(5, haveMap.get(5) - 3)
              return haveMap.get(5) >= 0
          }  
      }
  })
};

console.log(lemonadeChange([5,5,5,5,10,5,10,10,10,20]))
