const exponenciar = (n) =>{
    if(n == 0) return 1
    else if(n == 1) return 2
    else return 2*exponenciar(n-1)
}

const deslocaDir = (n,m) =>{
    if(m == 0) return 0
    else return n/exponenciar(m)
}
console.log(deslocaDir(68,4))