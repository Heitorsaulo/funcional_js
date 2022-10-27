const elimina = (lista) => (element, listaFinal = [0]) =>{
    const [x, ...xs] = lista
    if(lista.length == 0){
        const [z, ...Lf] = listaFinal
        return Lf
    }
    else if(x == element){
        return elimina(xs)(element, listaFinal)
    }
    else{
        return elimina(xs)(element, [...listaFinal, x])
    }
}

const lista = [1,2,3,4,2,7,8,5,3,6]
console.log(elimina(lista)(3))