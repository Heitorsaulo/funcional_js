const seq = (n) => (n == 1) ? 3 : seq(n-1)*2
console.log(seq(4))