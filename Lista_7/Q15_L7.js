const map = (func) => (lista, listaFinal = []) =>{
    const [x,...xs] = lista
    if(lista.length == 0){
        return listaFinal
    }
    else{
        return map(func)(xs, [...listaFinal, func(x)])
    }
}

console.log(map((x)=> x*2)([1,2,3]))