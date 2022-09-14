/**
 * @param {string} start
 * @param {string} end
 * @param {string[]} bank
 * @return {number}
 */
 var minMutation = function(start, end, bank) {
  const bankHash = new Set()
  const visitedHash = new Set()
  bank.forEach(item => {
    bankHash.add(item)
  })
  if (!bankHash.has(end)) {
    return -1
  }
  if (start === end && bankHash.has(end)) {
    return 0
  }
  const words = ['A', 'C', 'G', 'T']
  const len = start.length
  let step = 0
  const recursion = (start) => {
    for (let i = 0; i < len; i++) {
      for (let j = 0; j < 4; j++) {
        if (start[i] !== words[j]) {
          const newStart = start.slice(0, i) + words[j] + start.slice(i + 1, len)
          if (newStart === end) {
            return
          }
          if (!visitedHash.has(newStart) && bankHash.has(newStart)) {
            step++
            recursion(newStart)
          }
          visitedHash.add(newStart)
        }
      }
    }
  }

  recursion(start)
  return step + 1
};

const count = minMutation("AACCGGTT", "AACCGCTA", ["AACCGGTA","AACCGCTA","AAACGGTA"])

console.log(count)
