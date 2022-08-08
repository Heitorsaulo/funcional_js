const fatorial = (n) => {
    if(n == 0) return 1
    else if(n == 1) return 1
    else return fatorial(n-1)*n
}
console.log(fatorial(5))