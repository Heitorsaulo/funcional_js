const busca = (lista) => (element, acc = 0) =>{
    const [x, ...xs] = lista
    if(lista.length == 0){
        return -1
    }
    else if(x == element){
        return acc
    }
    else{
        return busca(xs)(element, acc+1)
    }
}

const lista = [-4,0,3,7,11]
console.log(busca(lista)(7))