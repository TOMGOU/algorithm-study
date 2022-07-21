var searchMatrix = function(matrix, target) {
  const m = matrix.length - 1
  const n = matrix[0].length - 1 
  console.log({m, n})
  let Lm = 0, Ln = 0, Rm = m, Rn = n, Tm = 0
  console.log({Lm, Rm})
  while (Lm < Rm) {
      let Mm = Math.floor((Lm + Rm) / 2)
      console.log({Lm, Mm, Rm})
      if (target < matrix[Mm][0]) {
          Rm = Mm - 1
      } else if (target > matrix[Mm][n]) {
          Lm = Mm + 1
      } else {
        Tm = Mm
        break
      }
  }
  Tm = Lm === Rm ? Lm : Tm
  console.log({Lm, Rm})
  while (Ln <= Rn) {
    console.log({Ln, Rn})
      let Mn = Math.floor((Ln + Rn) / 2)
      if (matrix[Tm][Mn] === target) {
          return true
      } else if (target < matrix[Tm][Mn]) {
          Rn = Mn - 1
      } else {
          Ln = Mn + 1
      }
  }
  return false
};

console.log(searchMatrix([[1,3,5,7],[10,11,16,20],[23,30,34,60]], 10))
