var isAnagram = function(s, t) {
  if (s.length !== t.length) return false
  const hash = new Map()
  for (let i = 0; i < s.length; i++) {
      let currVal = hash.get(s[i])
      currVal ? hash.set(s[i], currVal + 1) : hash.set(s[i], 1)
  }
  for (let j = 0; j < t.length; j++) {
      let currVal = hash.get(t[j])
      if (currVal) {
          hash.set(s[j], currVal - 1)
      } else {
          return false
      }
  }
  for (let key of hash.keys()) {
      if (hash.get(key) !== 0) return false
  }
  return true
};

isAnagram('anagram', 'nagaram')
