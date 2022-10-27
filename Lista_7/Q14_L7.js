const indef = x => typeof x == 'undefined'
const prompt = require('prompt-sync')()
const nlances =  parseInt(prompt('Quantos lançamentos deseja (min = 1)? '))

const somaAninhado = (lista) =>{
    const [x, ...xs] = lista
    if(lista.length == 0){
        return 0
    }
    else if(Array.isArray(x)){
        return somaAninhado(x) + somaAninhado(xs)
    }
    else{
        return x + somaAninhado(xs)
    }
    }


const jogaDados = (numJogadas) => (listaJogadas = []) =>{
    const num1 = 1+Math.floor(Math.random()*6)
    const num2 = 1+Math.floor(Math.random()*6)

    if(numJogadas == 0){
        return listaJogadas
    }
    else{
        return jogaDados(numJogadas-1)([...listaJogadas, [num1, num2]])
    }
}

const resultadoJogo = (numJogadas) =>{
    const lista = jogaDados(numJogadas)()
    
    
    const pontos = ([x, ...xs]) => (listaTotal) =>{
        if(indef(x)){
            return somaAninhado(listaTotal)
        }
        else if(x[0] == x[1]){
            return 0
        }
        else{
            return pontos(xs)(listaTotal)
        }
    }
    return pontos(lista)(lista)
}


console.log(jogaDados(nlances)())
console.log(resultadoJogo(nlances))