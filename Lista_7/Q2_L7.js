const maior = (lista) => (n=0)=>{
    if(lista.length == 1){
        return n 
    }
    else{
        const [x, ...xs] = lista
        const numMaior = (x-xs[0]>=0)? x:xs[0]
        return maior(xs)(numMaior)
    }
}

const lista = [1,2,5,6,4,9]

console.log(maior(lista)())