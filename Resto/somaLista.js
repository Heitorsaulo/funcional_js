const lista = [1,2,3,4]

const soma = (lista) => {
    if(lista.length == 0) return 0
    else{ 
        const [x, ...xs] = lista

        return x + soma(xs)
    
    }
}

console.log(soma(lista))
