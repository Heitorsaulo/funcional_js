const length = (lista, index = 0) =>{
    if(lista[index] == null) return 0
    else return 1 + length(lista, index + 1)
 }

const tamanho = (p) => {
    
    if(length(p) == 0) return 0
    else return 1 + tamanho(p.substring(1, length(p)))
    
}

console.log(tamanho("ola"))