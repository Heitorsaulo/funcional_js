const iterar = (elemento) => (listaIterar) => (listaFinal = [])=>{
    const [x, ...xs] = listaIterar
    if(listaIterar.length == 0){
        return listaFinal[0]
    }
    else if(elemento == x){
        return iterar(elemento)(xs)([...listaFinal, x])
    }
    else{
        return iterar(elemento)(xs)(listaFinal)
    }
}

const findSub = (str1) => (strSub) => (listaFinal = []) =>{
    const [x, ...xs] = strSub
    //console.log(listaFinal)
    console.log(iterar(x)(str1)())
    if(listaFinal.join('') == strSub){
        return true
    }
    
    else if(iterar(x)(str1)() == x){
        return findSub(str1)(xs)([...listaFinal, x])
    }
    else if(strSub.length == 0){
        return false
    }
    else{
        return findSub(str1)(xs)([listaFinal])
    }
}

const strSub = 'ship'
const str1  = 'Fish & Chips'
//console.log(findSub(str1)(strSub)())
findSub(str1)(strSub)()
console.log(iterar('s')('Fish & chips')())