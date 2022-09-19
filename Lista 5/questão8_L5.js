
const nPrimeirosA = (num) => (n) =>{
    const numS = num.toString()
    if(n == 1) return numS[n-1]
    else return numS[n-1] + nPrimeirosA(num)(n-1)
}

console.log(nPrimeirosA(1046)(3).split("").reverse().join(""))
