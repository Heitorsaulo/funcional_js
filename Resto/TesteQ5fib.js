const fib = (n) =>{
    if(n == 0) return 0
    if(n == 1)return 1
    else return fib(n-2)+fib(n-1)
}

const contaFib = (index) => {
    if(index == 0) console.log(fib(0))
    else console.log(fib(index)) + contaFib(index-1)
}
contaFib(50)