var maxEnvelopes = function(envelopes) {
    const res = []
    envelopes.sort((a, b) => a[0] - b[0])
    for (let i = 0;i < envelopes.length;i++) {
        res[i] = 1
        let tem = envelopes[i]
        for (let j = i + 1;j < envelopes.length;j++) {
            if (i === 0) console.log(envelopes[j], envelopes[j - 1])
            if (envelopes[j][0] > tem[0] && envelopes[j][1] > tem[1]) {
              res[i]++
              tem = envelopes[j]
            }
        }
    }
    console.log({envelopes, res})
    return Math.max(...res)
};

maxEnvelopes([[2,100],[3,200],[4,300],[5,500],[5,400],[5,250],[6,370],[6,360],[7,380]])
