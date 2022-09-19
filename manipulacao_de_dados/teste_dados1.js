//adicionar conteudos externos
const fs = require('fs')
const path = require('path')
const prompt = require('prompt-sync')()

const caminho = path.join(__dirname, 'dados1.txt')
const conteudo = fs.readFileSync(caminho)
//fim de adicionar conteudos externos
const lista = conteudo.toString()

const lista1 = lista.replaceAll(',','')

const listaPorPalavra = lista1.split(' ')

const listaFinal = [...new Set(listaPorPalavra)]

const str = prompt("Qual palavra deseja filtrar?: ") 

//Ver quantas palavras a escolha do usuario tem no texto
const listaFiltrada = listaPorPalavra.filter((x) => x == str)
//fim de Ver quantas palavras a escolha do usuario tem no texto


//mostrar todas caracteristicas das palavras
const passarPorCadaElemento = (n) => listaPorPalavra.filter((x)=> x==listaPorPalavra[n])

const numerarOsElementos = (lista) => (n=0) =>{
    if(lista.indexOf(lista[n]) == -1) return null
    else{
        return "{Palavra: "+passarPorCadaElemento(n)[0]+" || qtnd: "+passarPorCadaElemento(n).length+"}" + numerarOsElementos(lista)(n+1)
    }
}
//fim mostrar todas caracteristicas das palavras
const listaUnica = [numerarOsElementos(listaFinal)()]

//console.log(listaFinal)
console.log(listaUnica)
console.log(listaFiltrada)
//Tentar utilizar o metodo reduce