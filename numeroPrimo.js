const mdc = (n) => (m) => {
    if (n>m) return mdc(m)(n)
    else if (n==0) return m
    else return mdc(n)(m-n)
}

const numPrimo = (num) => {
    const result = (mdc(num)(2) == 1 && mdc(num)(3) == 1 && mdc(num)(5) == 1) ? "primo":"não primo"
    return result
}
console.log(numPrimo(425))