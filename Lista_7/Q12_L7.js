const lengthFunc = (lista) => {
    const [x, ...xs] = lista
    if(lista.length == 0){
        return 0
    }
    else if(Array.isArray(x)){
        return lengthFunc(x) + lengthFunc(xs)
    }
    else{
        return 1 + lengthFunc(xs)
    }
}
const lista = [1,2,[1,[2,[1,2]]],[1,2,3]]
console.log(lengthFunc(lista))