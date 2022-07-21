var longestPalindrome = function(s) {
  const len = s.length
  const dp = new Array(len).fill([]).map(() => new Array(len).fill(false))
  let res = ''
  for (let j = 0;j < len;j++) {
      for (let i = 0;i <= j;i++) {
          if (s[i] === s[j]) {
            dp[i][j] = j - i >= 2 ? dp[i + 1][j - 1] : true
          }
          if (dp[i][j] && j - i + 1 > res.length) {
            res = s.slice(i, j + 1)
          }
          console.log(i, j, s.slice(i, j + 1), dp[i][j])
      }
  }
  console.log({res, dp})
  return res
};

var longestPalindrome1 = function(s) {
  let n = s.length;
  let res = '';
  let dp = Array.from(new Array(n),() => new Array(n).fill(0));
  for(let i = n-1;i >= 0;i--){
      for(let j = i;j < n;j++){
          dp[i][j] = s[i] == s[j] && (j - i < 2 || dp[i+1][j-1]);
          if (dp[i][j] && j - i +1 > res.length) {
              res = s.substring(i,j+1);
          }
      }
  }
  console.log({res, dp})
  return res;
};

longestPalindrome('a') 
// longestPalindrome1('abada') 
