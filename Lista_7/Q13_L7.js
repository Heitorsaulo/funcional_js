const soma = (num) =>{
    const num1 = num.toString()
    const lista = num1.split('')
    const [x, ...xs] = lista
    if(lista.length == 0){
        return 0
    }
    else{
        return Number(x) + somaAbsoluta(xs)
    }
}
//const somaAbsoluta = (lista)=>{
    const [x,...xs] = lista
    if(soma(lista).length > 1){
        return 1
    }
//}
console.log(soma(123))
