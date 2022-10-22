const somaAninhado = (lista) =>{
    const [x, ...xs] = lista
    if(lista.length == 0){
        return 0
    }
    else if(Array.isArray(x) == true){
        return somaAninhado(x) + somaAninhado(xs)
    }
    else{
        return x + somaAninhado(xs)
    }
    }

const lista = [1,2,3,4,[3,4,5],[1,2,3]]
 console.log(somaAninhado(lista))