const acumula = (lista) => (listaFinal = [0]) => (n = 0)=>{
    const [x, ...xs] = lista

    if(lista.length == 0){
        const [z, ...final] = listaFinal
        return final
    }
    else{
        
        return acumula(xs)([...listaFinal, x + listaFinal[n]])(n + 1)
        
    }

}

const lista = [1,2,3,4]
console.log(acumula(lista)()())
