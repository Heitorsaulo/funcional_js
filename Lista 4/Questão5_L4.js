const exponenciar = (n) =>{
    if(n == 0) return 1
    else if(n == 1) return 2
    else return 2*exponenciar(n-1)
}
console.log(exponenciar(6))