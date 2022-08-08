const permuta = (n) =>{
    if(n == 1) return 1
    else return permuta(n-1)*n
}

const tamanho = (p) => {
    if(p.length == 0) return 0
    else return 1 + tamanho(p.substring(1, p.length))
}

const ndigitospermut = (num) => tamanho(permuta(num).toString())

console.log(ndigitospermut(5))