const elementList = (index = 0) => (lista) =>{
    if(lista.indexOf(lista[index]) == -1) return 0
    else return 1 + elementList(index+1)(lista)
}

const list = [7,2,6,3]

console.log(elementList()(list))
