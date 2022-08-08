 const length = (lista, index = 0) =>{
    if(lista[index] == null) return 0
    else return 1 + length(lista, index + 1)
 }
 console.log(length("maravi"))